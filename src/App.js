import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import "./App.css";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppContainer from "./components/AppContainer";
import AnimeInfo from "./components/AnimeInfo";
import { AuthProvider } from "./context/animeContext";

const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI4MyIsIm5iZiI6MTYzMjQwNTA3NiwiZXhwIjoxNjM0OTk3MDc2LCJpYXQiOjE2MzI0MDUwNzZ9.bxLfYp7z49wSONTZfnPOHtuZ9S7He5dGFb_Wm5-fXj8";
const App = () => {
  const [anime, setAnime] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchApi = async () => {
      const result = await axios.get(
        "https://api.aniapi.com/v1/anime?per_page=20&page=6",
        {
          method: "GET",
          headers: {
            Authorization: `${API_KEY}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      setAnime(result.data.data.documents);
    };
    fetchApi();
  }, []);

  return (
    <div>
      <Router>
        <AuthProvider>
          <NavBar setSearch={setSearch} />
          <Switch>
            <Route exact name="animeInfo" path="/:id">
              <AnimeInfo />
            </Route>
            <Route path="/" exact>
              <AppContainer anime={anime} search={search} />
            </Route>
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
};

export default App;
