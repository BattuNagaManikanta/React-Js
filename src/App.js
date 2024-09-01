import React,{lazy, Suspense, useState} from "react";
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
import userContext from "./Utils/userContext";
import appStore from "./Utils/appStore";
import { Provider } from "react-redux";
import Cart from "./components/Cart";

const Grocery= lazy(()=> import("./components/Grocery"));

const App=()=>{
    const [user,setUser]=useState("Admin")
    console.log(user);
    
    return (
        <Provider store={appStore}>
            <userContext.Provider value={{loggedInUser:user,setUser}}>
                <div>
                    <Header/>
                    <Outlet/>
                </div>
            </userContext.Provider>
        </Provider>
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
            },
            {
                path : "/cart",
                element:<Cart/>
            }
        ],
        errorElement:<ErrorPage/>
    },
    
])

const jsxHeading=<h1>Helgffddcfbvclo JSX what's up</h1>
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>);
// root.render(jsxHeading);