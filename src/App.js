import './App.css';
import Cat from './components/cat/Cat';
import Count from './components/count/Count';
import Modal from './components/modal/Modal';

function App() {
  return (
    <div className="App">

      <Modal/>
      <Count/>

       <Cat 
          catName="Пыня" 
          catAge={1} 
          catColor ={"голубой"}
          color={'blue'}
          isFat
          />
      
       <Cat 
         catName="Дымыч" 
         catAge={2} 
         catColor ={"черный"}
         color={'black'}
         />
       
       <Cat 
         catName="Лулу" 
         catAge={5} 
         catColor ={"белый"}
         color={'white'}
         isFat/>
    </div>
  );
}

export default App;
