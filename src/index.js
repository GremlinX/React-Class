import React from "react";
import ReactDOM from "react-dom";

const fName = "Kanao";
const lName = "Tsuyuri";

ReactDOM.render(
  <div>
    <h1>
      {fName} {lName} Wallpapers!
    </h1>
    <div>
      <img src="https://static.zerochan.net/Tsuyuri.Kanao.full.2812188.jpg" />
      <img src="https://static.zerochan.net/Tsuyuri.Kanao.full.2850632.jpg" />
      <img src="https://static.zerochan.net/Tsuyuri.Kanao.full.2774163.jpg" />
      <img src="https://static.zerochan.net/Tsuyuri.Kanao.full.2888014.jpg" />
      <img src="https://static.zerochan.net/Tsuyuri.Kanao.full.3355929.jpg" />
    </div>
  </div>,
  document.getElementById("root")
);
