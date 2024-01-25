import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface UserCredentials {
  username: string;
  password: string;
}

interface IToken {
  accessToken?: string;
  refreshToken?: string;
  username?: string;
}

interface RegisterCredentials {
  user: string;
  name: string;
  username: string;
  password: string;
}

export const registerPerson = createAsyncThunk(
  "student/register",
  async (
    { user, name, username, password }: RegisterCredentials,
    { rejectWithValue }
  ) => {
    const response = await fetch("http://localhost:8000/registry", {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify({ user, name, email: username, password }),
    });
    if (response.status !== 200) {
      return rejectWithValue(await response.json());
    }
    const { access_token, refresh_token } = await response.json();
    return { access_token, refresh_token };
  }
);

export const fetchTokens = createAsyncThunk(
  "user/fetchToken",
  async ({ username, password }: UserCredentials, { rejectWithValue }) => {
    const response = await fetch("http://localhost:8000/token", {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=&username=${username}&password=${password}&scope=&client_id=&client_secret=`,
    });
    if (response.status !== 200) {
      return rejectWithValue(await response.json());
    }
    const { access_token, refresh_token } = await response.json();
    return { access_token, refresh_token };
  }
);

export const updateAccessToken = createAsyncThunk(
  "user/updateAccessToken",
  async ({ username, refreshToken }: IToken, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:8000/token/refresh?username=${username}`,
      {
        method: "POST",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${refreshToken}`,
        },
      }
    );

    if (response.status !== 200) {
      rejectWithValue(response.json());
    }

    const { access_token } = await response.json();
    return access_token;
  }
);

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async ({ username, accessToken }: IToken, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:8000/user/protected/${username}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (response.status !== 200) {
      rejectWithValue({ error: "error while fetching user data" });
    }

    const user = await response.json();
    return user;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      email: "",
      username: "",
      fullName: "",
      id: 0,
      isActive: false,
      isLoggedIn: false,
    },
    status: "",
    accessToken: "",
    refreshToken: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state, _) => {
      state.status = "loaded";
    });

    builder.addCase(fetchTokens.fulfilled, (state, action) => {
      state.accessToken = action.payload.access_token;
      state.refreshToken = action.payload.refresh_token;
      localStorage.setItem("refreshToken", state.refreshToken);
    });
    builder.addCase(fetchUser.fulfilled, ({ user }, { payload }) => {
      user.email = payload.email;
      user.fullName = payload.full_name;
      user.id = payload.id;
      user.isActive = payload.is_active;
      user.username = payload.username;
      user.isLoggedIn = true;
      
    });
    builder.addCase(registerPerson.fulfilled, (state, action) => {
      state.accessToken = action.payload.access_token;
      state.refreshToken = action.payload.refresh_token;
      localStorage.setItem("refreshToken", state.refreshToken);
    })
    builder.addCase(updateAccessToken.fulfilled, (state, action) => {
      state.accessToken = action.payload;
    });
    builder.addCase(registerPerson.rejected, (state) => {
      state.user.isLoggedIn = false;
      state.user.isActive = false;
    })
    builder.addCase(fetchTokens.rejected, (state) => {
      state.user.isLoggedIn = false;
    });
    builder.addCase(fetchUser.rejected, (state) => {
      state.user.isLoggedIn = false;
    });
    builder.addCase(updateAccessToken.rejected, (state) => {
      state.user.isLoggedIn = false;
    });
  },
});

export default userSlice.reducer;
