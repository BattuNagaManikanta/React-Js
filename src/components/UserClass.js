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
        console.log(this.props.name+"Constructor called");
        
    }

    async componentDidMount(){

        console.log(this.props.name+"Mount called");

        const data = await fetch("https://api.github.com/users/BattuNagaManikanta");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo:json
        })
        
    }

    componentDidUpdate(){
        console.log(this.props.name+"Update called");
    }

    render(){
        console.log(this.props.name+"Render called");
        
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