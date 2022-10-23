import React from "react";
import './LeftComponet.css';
class LeftComponet extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={counter:0};
    }
  
    Counter()
    {
         this.setState({counter:this.state.counter+1});
         
      
    }
// The button does not know that it is in react , the btton requiers an excutable statement 
// in this case this.counter
    render(){
        return(
            <div className="leftcomp">
                <h1>Click Counter</h1>
                <p>Click the button below to add total number of clicks</p>
                <button id="btn" onClick={()=>this.Counter()} >Press ME</button> 
                <h1 id="TotalClicks">{this.state.counter}</h1>
            </div>
        );
    }
}

export default LeftComponet;