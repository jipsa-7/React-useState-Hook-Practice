import React, { useState } from "react";

function App() {
  let time = new Date().toLocaleTimeString();
  const [timeCounter, timeCounting] = useState(time);

  //To stop the automatic time display and operate it with button please comment the one code below that is the setInterval.
  setInterval(timeCountingFunction, 1000);
  function timeCountingFunction() {
    //let time = new Date().toLocaleTimeString();
    timeCounting(new Date().toLocaleTimeString());
  }

  return (
    <div className="container">
      <h1>{timeCounter}</h1>
      <button onClick={timeCountingFunction}>Get Time</button>
    </div>
  );
}

export default App;
