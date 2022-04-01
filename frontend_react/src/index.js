import React from "react";
import ReactDom from "react-dom";

import App from "./App";
import "./index.css";

//connecting the App component to the doc straight with the ID:
ReactDom.render(<App />, document.getElementById("root"));
