import React from "react";
import ReactDOM from "react-dom";

// Variables needs to be wrapped inside curly braces
// in order to get rendered.
const name = "Gremlin";
const title = "the dev";
const number = "1";

ReactDOM.render(
  <div>
    <h1>Hello {name + ", " + title}!</h1> 
    {/* <h1>Hello {name} {title}!</h1> */}
    {/* <h1>Hello {`${name} ${title}`}!</h1> */}
    <p>Your lucky number is: {number}!</p>
  </div>,
  document.getElementById("root")
);
