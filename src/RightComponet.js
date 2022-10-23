import React from "react";
import './RightComponet.css';

class RightComponent extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={date: new Date()};
    }

    UpdateTime()
    {
        this.setState({date: new Date()});
    }

    componentDidMount()
    {   //set Interval is expecting a function not a method 
        // as a parameter
        // Remember that a method is associated with an object
        // while a function is not 
        // Therefore we use an anomous function that returns what the 
        // objects method as an excacutable statement
        this.time=setInterval(()=>this.UpdateTime())

    }

    componentWillUnmount()
    {
        clearInterval(this.time);
    }
  
    
// The button does not know that it is in react , the btton requiers an excutable statement 
// in this case this.counter
    render(){
        return(
            <div className="rightcomp">
                <h1>Current Time</h1>
                <p>Below displays the current time</p>
                
                <h1 id="display">{this.state.date.toLocaleTimeString()}</h1>
            </div>
        );
    }
}

export default RightComponent;