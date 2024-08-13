import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const App=()=>{
    return (
        <div>
            <Header/>
            <Body/>
            {/* <Restaurantcard/> */}
        </div>
    )
}

const jsxHeading=<h1>Helgffddcfbvclo JSX what's up</h1>
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
// root.render(jsxHeading);