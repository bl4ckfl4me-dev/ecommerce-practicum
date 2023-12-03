import { createContext } from "react";
import UserStore from "../stores/UserStore";

interface IContext {
  user: UserStore;
}

export const UserContext = createContext<IContext>({
  user: new UserStore(),
});
