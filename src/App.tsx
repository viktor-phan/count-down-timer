import React, { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [{ seconds, minutes, days, hours }, setTime] = useState({
    seconds: 0,
    minutes: 0,
    days: 0,
    hours: 0,
  });
  const newYear = "2022-01-01";

  const newYearDate = +new Date(newYear);
  const currentDate = +new Date();
  //Timezone difference, in ET US
  let totalsec = Math.floor((newYearDate - currentDate) / 1000) + 4 * 3600;
  const reloadTime = () => {
    clearInterval(interval)
    setTime({
      days: Math.floor(totalsec / 3600 / 24),
      hours: Math.floor(totalsec / 3600) % 24,
      minutes: Math.floor(totalsec / 60) % 60,
      seconds: Math.floor(totalsec) % 60,
    });
  };
  let interval = setInterval(reloadTime, 1000);
  // useEffect(() => {
  //   setTime({
  //     days: Math.floor(totalsec / 3600 / 24),
  //     hours: Math.floor(totalsec / 3600) % 24,
  //     minutes: Math.floor(totalsec / 60) % 60,
  //     seconds: Math.floor(totalsec) % 60,
  //   });
  // }, [new Date()]);

  return (
    <div className="App">
      <h1>New Years Eve</h1>
      <div className="countdown-box">
        <div className="stat-box">
          <p>{days}</p>
          <span>Days</span>
        </div>
        <div className="stat-box">
          <p>{hours}</p>
          <span>Hours</span>
        </div>
        <div className="stat-box">
          <p>{minutes}</p>
          <span>Minutes</span>
        </div>
        <div className="stat-box">
          <p>{seconds}</p>
          <span>Seconds</span>
        </div>
      </div>
    </div>
  );
}

export default App;
