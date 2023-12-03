import { makeAutoObservable } from "mobx";

interface IUserData {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  email?: string;
}

export default class UserStore {
  #isAuth: boolean = false;
  #user: IUserData = {};

  constructor() {
    makeAutoObservable(this);
  }

  public get isAuth() {
    return this.#isAuth;
  }

  public set isAuth(isAuth: boolean) {
    this.#isAuth = isAuth;
  }

  public get data() {
    return this.#user;
  }

  public set data(user: IUserData) {
    this.#user = user;
  }
}
