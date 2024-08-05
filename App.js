import React from "react";
import ReactDOM from "react-dom/client";

const heading= React.createElement("h1",{},[React.createElement("div",{id: "child"},"Hello world"),React.createElement("div",{},"what's app")]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);