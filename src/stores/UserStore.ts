import { makeAutoObservable } from "mobx";

interface IUserData {
    id: number,
    firstName?: string,
    lastName?: string,
    phoneNumber?: string,
    email?: string,
}

export default class UserStore {
    private _isAuth: Boolean = true;
    private _user: IUserData = {
        id: 1,
    };

    constructor() {
        makeAutoObservable(this);
    }

    public getIsAuth(){
        return this._isAuth;
    }

    public setIsAuth(isAuth: Boolean) {
        this._isAuth = isAuth;
    }

    public getUser()  {
        return this._user
    }

    public setUser(user: IUserData)  {
        this._user = user
    }
}