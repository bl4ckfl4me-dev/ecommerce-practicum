import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import UserStore from "./stores/UserStore.ts";
import { ThemeProvider } from "@material-tailwind/react";
import "./index.css";
import { UserContext } from "./components/UserContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <UserContext.Provider
      value={{
        user: new UserStore(),
      }}
    >
      <App />
    </UserContext.Provider>
  </ThemeProvider>
);
