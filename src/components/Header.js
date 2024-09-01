import { RES_LOGO } from "../Utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import userContext from "../Utils/userContext"
import { useContext, useState } from "react";
import { useSelector } from "react-redux";

const Header=()=>{
    const [loginText,setLoginText] = useState("Login");
    const onlineStatus=useOnlineStatus();
    const data= useContext(userContext);
    const cartItems=useSelector((store)=>store?.carts?.items);
    // console.log(cartItems);
    
    // console.log(data);
    return (
        <div className="flex justify-between bg-slate-100 items-center border-[1px] border-black shadow-lg">
            <div className="">
                <img className="w-52" src={RES_LOGO}></img>
            </div>
            <div className="options">
                <ul className="flex">
                    <li className="px-1 mx-1">Status:{onlineStatus ?"✅" :"🔴"}</li>
                    <li className="px-1 mx-1"><Link to="/">Home</Link></li>
                    <li className="px-1 mx-1"><Link to="/about">About us</Link></li>
                    <li className="px-1 mx-1"><Link to="/contact">Contact</Link></li>
                    <li className="px-1 mx-1"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-1 mx-1 font-bold text-lg"><Link to="/cart">Cart - ({cartItems.length} items)</Link></li>
                    <li><button className="px-1 mx-1" onClick={
                        ()=>{
                            loginText == "Login" ? setLoginText("Logout"):setLoginText("Login")
                        }
                    }>{loginText}</button></li>
                    <li>{data.loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;