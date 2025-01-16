import React, { useEffect } from "react";
import Card from "./components/Card";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Events from "./components/Events";
import Components3d from "./components/Components3d";
import Domain from "./components/Domain";
// import Lenis from 'lenis';
import Team from "./components/Team";

function App(){
  return (
    <div className=" bg-[#0C0C0C] ">
      <Nav/>
      {/* <Components3d/> */}
      {/* <Domain/> */}
      {/* <Card/> */}
      {/* <Team/> */}
      <Footer />
    </div>
  );
}

export default App;
