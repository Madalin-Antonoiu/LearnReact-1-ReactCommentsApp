// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

//Create a React Component
const Component = function () {
  return <div>Hi there!</div>; // Babel happens here, JSX to JS
};

// Take the React Component and show it on the screen
ReactDOM.render(<Component />, document.querySelector("#root"));
