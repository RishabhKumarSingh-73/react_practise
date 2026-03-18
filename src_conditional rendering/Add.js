import { Component } from "react";

export default class Add extends Component{

    constructor(props){
        super(props);
        console.log("this is rishis const");
        this.state = {num:12}
    }

    static getDerivedStateFromProps(props,state){
        console.log("this is getDerivedStateFromProps");
        return {color:this.props.color};
    }

    render(){
        console.log("this is render");
        return(
            <h1>{this.state.num}</h1>
        );
    }

    componentDidMount(){
        console.log("this is component did mount");
    }


}