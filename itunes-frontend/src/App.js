import "./App.css";
import { LandingPage } from "./pages/Landing-Page/LandingPage";
import { Home } from "./pages/Homepage/Home";
import { SearchPage } from "./pages/SearchPage/SearchPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { createContext, useState } from "react";
import { Loginpage } from "./pages/Loginpage/Loginpage";
import { Favorites } from "./pages/Favorites/Favorites";

// Create context providers for login
export const LoginContext = createContext();
export const FavoritesContext = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [favorite, setFavorite] = useState([]);
  return (
    <div className="App">
      <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <FavoritesContext.Provider value={{ favorite, setFavorite }}>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/Home" element={<Home />} />
            <Route exact path="/Search" element={<SearchPage />} />
            <Route exact path="/Login" element={<Loginpage />} />
            <Route exact path="/Favorites" element={<Favorites />} />
          </Routes>
        </FavoritesContext.Provider>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
