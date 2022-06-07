import React,{useState} from "react"
import Header from "./Components/Header"
import Recpielist from "./Components/Recpie-list";
import axios from 'axios';
import "./App.css"

const API_ID="26714b0e";
const API_KEY="5ee2b6a451d31e583dfd199218f84265	"

function App() {

  const [recpieList,updateRecpieList]=useState([]);
  const [timeoutid,settimeoutid]=useState();



  const fetchRecpie= async  (searchString)=>{
    const response=    await axios.get (`https://api.edamam.com/search?q=${searchString}&app_id=${API_ID}&app_key=${API_KEY}`)
    updateRecpieList(response.data.hits)
    console.log(response.data.hits);

  }

  const onTextChange=(event)=>{
      clearTimeout(timeoutid)
      const timeout=setTimeout(() => {
         fetchRecpie(event.target.value)
      }, 500);
      settimeoutid(timeout);
  }

 

  return (

    <div className="App">
  <Header onTextChange={onTextChange}/>
  <div className="Recpie">
  { recpieList.length ?( recpieList.map((recpieobj)=>(
    <Recpielist recpie={recpieobj}/>
  ))  ): <img src="/logo.svg" className="placeholder" alt="logo"/>
  }
 
  </div>
 
    </div>
  );
}

export default App;
