import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

interface UserCredentials {
    username: string,
    password: string,
}

interface IToken {
    accessToken?: string,
    refreshToken?: string,
    username?: string,
}


export const fetchTokens = createAsyncThunk(
    'user/fetchToken',
    async ({username, password}: UserCredentials, {rejectWithValue}) => {
        const response = await fetch('http://localhost:8000/token', {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `grant_type=&username=${username}&password=${password}&scope=&client_id=&client_secret=`
        })
        if (response.status !== 200) {
            return rejectWithValue(response.json)
        }
        const {access_token, refresh_token} = await response.json()
        return {access_token, refresh_token}
    }
)

export const updateAccessToken = createAsyncThunk(
    'user/updateAccessToken',
    async ({username, refreshToken}: IToken, {rejectWithValue}) => {
        const response = await fetch(`http://localhost:8000/token/refresh?username=${username}`, {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Authorization': `Bearer ${refreshToken}`
            }
        })

        if (response.status !== 200) {
            return rejectWithValue(response.json());
        }

        const {access_token} = await response.json();
        return access_token
    }
)


export const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async ({username, accessToken}: IToken, {rejectWithValue}) => {
        const response = await fetch(`http://localhost:8000/user/protected/${username}`, {
            method: 'GET',
            headers: {
                'accept': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            }
        });

        if (response.status !== 200) {
            rejectWithValue({error: 'error while fetching user data'})
        }

        const user = await response.json();
        return user
    }
)


const userSlice = createSlice({
    name: 'user',
    initialState: {
        user:  {
            email: '',
            username: '',
            fullName: '',
            id: 0,
            isActive: false,
            isLoggedIn: false,
        },
        status: '',
        accessToken: '',
        refreshToken: '',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUser.pending, (state, _) => {
            state.status = 'loaded'
        })

        builder.addCase(fetchTokens.fulfilled, (state, action) => {
            state.accessToken = action.payload.access_token;
            state.refreshToken = action.payload.refresh_token;
            localStorage.setItem('refreshToken', state.refreshToken);
        })
        builder.addCase(fetchUser.fulfilled, ({user, status}, {payload}) => {
            user.email = payload.email
            user.fullName = payload.full_name
            user.id = payload.id
            user.isActive = payload.is_active
            user.username = payload.username
            user.isLoggedIn = true
            status = 'resolved'
        })
        builder.addCase(updateAccessToken.fulfilled, (state, action) => {
            state.accessToken = action.payload;
        })
        builder.addCase(fetchUser.rejected, (state, _) => {
            console.log('i was here')
            state.user.isLoggedIn = false;
        })
        builder.addCase(updateAccessToken.rejected, (state, _) => {
            state.user.isLoggedIn = false;
        })
    }
})

export default userSlice.reducer;