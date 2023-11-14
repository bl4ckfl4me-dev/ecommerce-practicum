import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "@material-tailwind/react";
import { Provider } from "react-redux";
import "./index.css";
import "font-awesome/css/font-awesome.min.css";
import { store } from "./store/index.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
);
