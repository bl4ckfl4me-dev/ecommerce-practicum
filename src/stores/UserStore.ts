import { makeAutoObservable } from "mobx";

interface IUserData {
    firstName?: string,
    lastName?: string,
    phoneNumber?: string,
    email?: string,
}

export default class UserStore {
    private _isAuth: boolean = false;
    private _user: IUserData = {};

    constructor() {
        makeAutoObservable(this);
    }

    public get isAuth(){
        return this._isAuth;
    }

    public set isAuth(isAuth: boolean) {
        this._isAuth = isAuth;
    }

    public get user()  {
        return this._user
    }

    public set user(user: IUserData)  {
        this._user = user
    }
}