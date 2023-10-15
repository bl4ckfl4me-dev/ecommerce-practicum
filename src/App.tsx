import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import TopNavbar from "./components/TopNavbar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <TopNavbar />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
