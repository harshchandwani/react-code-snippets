import React from "react";

class Users extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            userInfo: {
                name:"Dummy";
            }
        }
    }


    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/anuj-thakur-513");
        const json = data.json();
        console.log(json);
        this.setState({
            userInfo: json;
        })
    }
    // this will go after the the component did mount is successfully executed
    componentDidUpdate(){
        console.log("Component did update");
    }
    // this will once you change the page, things like when you want to end setTimeout, this will help you out
    componentWillUnmount(){
        console.log("Component will unmount");
    }
    render(){
        return(
            <div className="user-card">
                <h1>Name: {name}</h1>
                <h3>Count: {this.state.count}</h3>
                <h2>From: {location}</h2>
                <h2>Site: <a target="_blank" href={blog}>{blog}</a></h2>
            </div>
        )
    }
}
