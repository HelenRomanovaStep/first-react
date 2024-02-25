import   { React,Component} from 'react';
import "./Count.css";

export default class Count extends Component{
    constructor(props){
        super(props);

        this.state={
          count: 0
        }
    }
   
    countPlus=()=>{
        console.log("+");
        this.setState({
            count: this.state.count + 1
        })
    }

    countMinus=()=>{
        console.log("-");
        this.setState({
            count: this.state.count - 1
        })
    }

    count = (single)=>{
        this.setState({
            count: single==="+" 
            ? this.state.count + 1
            : single==="-" 
            ? this.state.count - 1
            : null
        })
    }

    render(){
        return(
            <div> 
                <button onClick={()=>this.count("-")}>-</button>
                <h3>{this.state.count}</h3>
                <button onClick={()=>this.count("+")}>+</button>
            </div>
        )
    }
}
