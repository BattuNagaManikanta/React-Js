import React from "react";
import UserClass from "./UserClass";



class About extends React.Component{

    componentWillUnmount(){
        console.log("Component unmounted");
        
    }

    render(){
        return (
            <div>
                <h1>About us</h1>
                <UserClass name="Manikanta1 (Class)"/>
                <UserClass name="Manikanta2(Class)"/>
            </div>
        )
    }
    
}

export default About;