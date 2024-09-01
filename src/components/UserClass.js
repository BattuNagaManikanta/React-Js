import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);
        this.state={
            userInfo: {
                name: "Dummy name",
                location: "India"
            }
        }
        
    }

    async componentDidMount(){


        const data = await fetch("https://api.github.com/users/BattuNagaManikanta");
        const json = await data.json();
        this.setState({
            userInfo:json
        })
        
    }

    componentDidUpdate(){
    }

    render(){
        
        const {name,location,avatar_url}=this.state.userInfo;

        return (
            <div className="user-details">
                <img src={avatar_url}></img>
                <h1>Name:{name}</h1>
                <h2>location : {location}</h2>
                <h3>mail : maniking22000@gmail.com</h3>
            </div>
        )
    }
}


export default UserClass;