import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import MainHeader from "./components/MainHeader";
import Card from "./components/Card";
import Elf from "./assets/Image1.jpeg"
import Demon from "./assets/Image2.jpeg"
import Human from "./assets/Image3.jpeg"

function App() {
  return (
    <>
      <Navbar />
      <MainHeader />
      <div className = "cardSection">
      <Card image = {Elf} title = "Elven Archer" description = "Elven Archer description"/>
      <Card image = {Demon} title ="Winged Demon" description = "Winged Demon description"/>
      <Card image = {Human} title="Human Knight" description = "Human Knight description"/>
      </div>
    </>
  );
}

export default App;
