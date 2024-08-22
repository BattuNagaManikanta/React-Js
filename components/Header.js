import { RES_LOGO } from "../Utils/constants";
import { Link } from "react-router-dom";

const Header=()=>{
    return (
        <div className="header">
            <div className="">
                <img className="res-logo" src={RES_LOGO}></img>
            </div>
            <div className="options">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li>Sign In</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;