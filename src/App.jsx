import "./index.css";
import React from "react";
import Nav from "./components/navbar";
import Footer from "./components/footer";
import Intro from "./pages/intro";
import Lokasi from "./pages/lokasi";
import Kontak from "./pages/kontak";

function App() {
  return (
    <div className="">
      <Nav/>
      <Intro/>
      <Lokasi/>
      <Kontak/>
      <Footer/>
    </div>
  );
}

export default App;
