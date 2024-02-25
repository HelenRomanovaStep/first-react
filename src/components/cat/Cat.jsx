import React,{Component}  from 'react';
import "./Cat.css";

export default class Cat extends Component{
   constructor(props) {
     super(props)
     this.state={
        
     }
   }
    render(){
        return (
            <div className="card">
                <h3>Привет, меня зовут {this.props.catName} </h3>
                <p>Мне 
                {this.props.catAge} 
                {
                this.props.catAge===1 
                ? " год"
                : this.props.catAge >=2 && this.props.catAge<=4
                ? " года"
                : " лет"
                }
                </p>
                <p style={{color: this.props.color}}>Мой цвет {this.props.catColor}</p>
                <p>Я {this.props.isFat ? "" : "не"}  пухленький </p>
            </div>
        )        
    }
}
  