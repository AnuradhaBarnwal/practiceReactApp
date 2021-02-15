import React from "react";
import './App.css';
import Navbar from "./components/header/navbar/Navbar";
import Intro from "./components/header/introduction/Intro";
import Details from "./components/midcontents/details/Details";
function App() {
  return (
    <div className="App">
    <Navbar />
    <Intro />
    <Details />
    </div>
  );
}

export default App;
