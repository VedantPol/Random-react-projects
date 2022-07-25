import ReactDOM from "react-dom";
import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row ,Col ,Button } from "react-bootstrap";

function App()  {
  const [photos,setPhoto] = useState(" ");
  const [result,setresult] = useState([]);

  const ChangePhoto=()=>{
     axios.get(`https://api.unsplash.com/search/photos?page=1&query=${photos}&client_id=-QNggbiwov-e0fEk8AK3puO9cdAJNFZLvfFMmF1Sf7g`)
     .then((response)=>{
      setresult(response.data.result);
     })
  }
    return (
      <div className="App">
        <div>
          <input type="text"  value={photos} onChange={(e)=>{
            setPhoto(e.target.value);
          }}/>
          <Button type="submit"  onClick={ChangePhoto} className="custom-btn">search</Button>
        </div>
        <div className="container">
        <div class="row text-center text-lg-start">
                    {result.map((value) => {
                        return (
                            <div class="col-lg-3 col-md-4 col-6">
                              <img class="img-fluid img-thumbnail d-block mb-4 h-100" src={value.urls.small} alt='' />     
                            </div>
                        )
                    })}
                </div>
        </div>
      </div>
    );
  
}


export default App;
