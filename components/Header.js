import { RES_LOGO } from "../Utils/constants";

const Header=()=>{
    return (
        <div className="header">
            <div className="">
                <img className="res-logo" src={RES_LOGO}></img>
            </div>
            <div className="options">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Cart</li>
                    <li>Sign In</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;