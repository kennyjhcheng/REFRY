import React from "react";

import "../../App.css";
import HeroDynamic from "../HeroDynamic";
import AboutPanel from "../AboutPanel";

function Home() {
  return (
    <>
      <HeroDynamic />

      <AboutPanel />

      {/* <Cards /> 
      CARDS MOVED TO RECIPES PAGE!*/}
    </>
  );
}

export default Home;
