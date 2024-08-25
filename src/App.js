import React,{lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import RestaurantMenu from "./components/RestaurantMenu";
import { Shimmer } from "./components/Shimmer";
// import Grocery from "./components/Grocery";

const Grocery= lazy(()=> import("./components/Grocery"));

const App=()=>{
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    )
}

const appRouter=createBrowserRouter([
    {
        path: "/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path: "/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
                
            },
            {
                path:"/grocery",
                element: <Suspense fallback={<div><Shimmer/></div>}><Grocery/></Suspense>
            },
            {
                path:"/restaurants/:resId",
                element: <RestaurantMenu/>
            }
        ],
        errorElement:<ErrorPage/>
    },
    
])

const jsxHeading=<h1>Helgffddcfbvclo JSX what's up</h1>
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>);
// root.render(jsxHeading);