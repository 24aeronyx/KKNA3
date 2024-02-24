import "./index.css";
import React from "react";
import Nav from "./components/navbar";
import Footer from "./components/footer";
import Intro from "./pages/intro";

function App() {
  return (
    <div className="">
      <Nav/>
      <Intro/>
      <Footer/>
    </div>
  );
}

export default App;
