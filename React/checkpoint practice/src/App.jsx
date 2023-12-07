import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import NotFound from "./NotFound";
import PokemonList from "./PokemonList";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route path="/pokemon-list" element={<PokemonList />} />
                <Route path="/not-found" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default App;
