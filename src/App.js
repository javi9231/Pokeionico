import React from "react";
import Header from "./components/header";
import PokeList from "./components/pokeList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header firstTitle="PokeIonico" />
      <PokeList />
    </div>
  );
}

export default App;
