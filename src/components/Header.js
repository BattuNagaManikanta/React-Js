import { RES_LOGO } from "../Utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";

const Header=()=>{
    const onlineStatus=useOnlineStatus();
    return (
        <div className="flex justify-between bg-slate-100 items-center border-[1px] border-black shadow-lg fixed top-0 left-0 right-0 left-0">
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
                    <li className="px-1 mx-1">Sign In</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;