import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createContext } from "react";
import UserStore from "./stores/UserStore.ts";
import { ThemeProvider } from "@material-tailwind/react";
import "./index.css";

interface IStores {
  userStore: UserStore;
}

export const Context = createContext<IStores>({
  userStore: new UserStore(),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <Context.Provider
      value={{
        userStore: new UserStore(),
      }}
    >
      <App />
    </Context.Provider>
  </ThemeProvider>
);
