import React from "react";
import { Intl } from "../utils/formatter";

function Home() {
  return (
    <div>
      <h1>
        <Intl id={"home"} />
      </h1>
    </div>
  );
}

export default Home;
