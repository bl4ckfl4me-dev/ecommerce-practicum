import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import TopNavbar from "./components/TopNavbar";

function App() {
  return (
    <BrowserRouter>
      <TopNavbar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
