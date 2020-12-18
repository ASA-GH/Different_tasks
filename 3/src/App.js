import React from "react";
import Track from "./racingSimulator/race/Track";

import "./App.css";

function App() {
  return (
    <div className="wrapperApp">
      <div className="innerApp">
        {Track()} {"Race"}
      </div>
    </div>
  );
}

export default App;
