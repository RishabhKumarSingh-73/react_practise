import { Component } from "react";
import { UserPage } from "./UserPage";

export class Conditional extends Component{
    
    constructor(){
        super()
        this.state = {isLoggedIn: true}
    }

    handleLogIn = ()=>{
        this.setState({isLoggedIn: true})
    }

    handleLogOut = ()=>{
        this.setState({isLoggedIn: false})
    }

    render(){

        return (
            <div>
                {this.state.isLoggedIn ? (
                    <div>
                        <UserPage uname="rishi" />
                        <button onClick={this.handleLogOut}>logout</button>
                    </div>
                ) : (
                    <div>
                        <h1>please login</h1>
                        <button onClick={this.handleLogIn}>login</button>
                    </div>
                )}
            </div>
        )
    }


}