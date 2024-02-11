import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
// import App from "./App-3";
import App from "./Challenge";
import "./index.css";
import Stars from "./Starts";

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <Stars color="blue" maxRating={10} onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} Start</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <App /> */}
    {/* <Stars maxRating={5} />
    <Stars size={24} color={"#000"} maxRating={10} />
    <Test /> */}
  </React.StrictMode>
);
