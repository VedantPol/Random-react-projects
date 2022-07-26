import './App.css';
import React ,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Alert, Button ,Row } from 'react-bootstrap';


function App() {
  const [height ,setHeight] = useState("")
  const [weight ,setWeight] = useState("")
  const [bmi ,setbmi] = useState("")
  const [info ,setInfo] = useState("")
  const Bmi=() => {
     let val =([weight /height/height]*10000).toFixed(1);
     setbmi(val);
    if (val < 18.5) {
      setInfo("Under Weight");
    } else if (val > 18.5 && val <= 24.9) {
      setInfo("Healthy");
    } else if (val > 24.9 && val < 30) {
      setInfo("Overweight");
    } else {
      setInfo("Obese");
    }
  }
  return (
    <div className="App" >
        <Alert variant="primary">BMI caluculator</Alert>
        <div className='inputs'>
        <input type="number" placeholder='Height' onChange={(e) => setHeight(e.target.value)}/>
        &nbsp;
        &nbsp;
        <input type="number" placeholder='Weight' onChange={(e) => setWeight(e.target.value)}/>
        &nbsp;
        &nbsp;
        <Button onClick={Bmi}> calculate </Button>
        &nbsp;
        &nbsp;
        </div>
        <input type="text" placeholder='bmi' value={info} />


    </div>
    
  );
}

export default App;
