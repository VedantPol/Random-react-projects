import React,{useState} from 'react';
import './App.css';
import emojis from "./emoji.json";
function App() {
  const [searchTerm,setSearchTerm]= useState('');
  return (
      <div className='App'>
        <input type="text" placeholder='Search...' onChange={event => {setSearchTerm(event.target.value)}}/>
        
          {emojis.filter((val) => {
            if(searchTerm==""){
              return val;
            }
            else if(val.description.toLowerCase().includes(searchTerm.toLowerCase())){
              return val;
            }
          }).map((val,key) =>{
            return(
              <div className='box' key={key}>
                <p>
                {val.emoji}
                </p>
              </div>
            )
          })}

        
      </div>
  );
}

export default App;
