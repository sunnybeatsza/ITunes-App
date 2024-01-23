import "./App.css";
import { LandingPage } from "./pages/Landing-Page/LandingPage";
import { Home } from "./pages/Homepage/Home";
import { SearchPage } from "./pages/SearchPage/SearchPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/Search" element={<SearchPage />} />
      </Routes>
    </div>
  );
}

export default App;
