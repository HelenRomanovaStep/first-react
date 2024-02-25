import  { React ,Component } from 'react';
import "./Modal.css";


export default class Modal extends Component{
    constructor(props){
    super(props);
    this.state={
       isShow: false
    }    
    }

    closeModal=()=>{
       this.setState({
        isShow: false
       }) 
    }
  

    openModal=()=>{
        this.setState({
            isShow: true
        })
    }


    render(){
        return(
            <div className="wripper">
              <button onClick={this.openModal}>Открыть модальное окно</button>
           
              <div className="modal-wrapper ">
                 <div className={`modal-content ${!this.state.isShow && 'hidden'}`}>
                    <header>Модальное окно</header>
                    <div>
                        <img src="https://usagif.com/wp-content/uploads/gifs/dancing-cat-18.gif" alt="" /> 
                    </div>
                    <footer><button onClick={this.closeModal}>Закрыть окно</button></footer>
                 </div>
              </div>
             
            </div>
        )
    }
}