import React, { Component } from 'react'
// import React, {state}

class LifeCycle extends Component {

    constructor(props) {
        super(props)
        console.log("Constructor");
           this.state={
        date:new Date ().toISOString()    
         }
    }
    componentWillMount() {
        console.log("componentWillMount");
    }
    componentDidMount() {
        console.log("componentDidMount");
    
     this.setState({
        date: new Date().toISOString()
    })
 }
componentDidUpdate(){
    console.log("componentDidUpdate");
}


render() {
    console.log("render");
    const{date} =this.state;
    return (
        <div><h1>LifeCycle</h1>
        <h2>{date}</h2>  
          </div>
    );
}
 }
export default LifeCycle

