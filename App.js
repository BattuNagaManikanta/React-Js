import React from "react";
import ReactDOM from "react-dom/client";

const heading= React.createElement("h1",{},[React.createElement("div",{id: "child"},"Hello world"),React.createElement("div",{},"what's app")]);

const jsxHeading=<h1>Hello JSX what's up</h1>
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
// root.render(jsxHeading);