
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Alert from './component/alert';

import About from './component/about';

import './App.css';
import { useState } from 'react';


import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";



function App() {
const [mode, setMode] = useState('light');
const [alert, setAlert] = useState('null');

const showAlert = (message, type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(() => {
    setAlert(null);
  }, 3000);
}

 const toggleMode = () =>{
  if(mode === 'light'){
   setMode ('dark'); 
   document.body.style.backgroundColor = '#042743'
  showAlert("Dark mode is enabled","success")
  }

  else{
    setMode('light');
    document.body.style.backgroundColor = 'white'
    showAlert("Light mode is enabled","success")
  }
 }
  return (
    <>
        <Router>
        <Navbar title={"WorldText"}  aboutText="About US" mode={mode} toggleMode={toggleMode}/>
        <Alert alert = {alert}/>
        <div className="container my-3">
        <Routes>
      {/* <Route exact path="/">
      <TextForm showAlert = {showAlert} heading={"Choose your text according as you want" }  mode={mode} />
      </Route>
      <Route path="/about">
        <About />
      </Route> */}
      <Route exact path="/" element={<TextForm showAlert={showAlert} heading={"Choose your text according as you want"} mode={mode} />} />
      <Route exact path="/about" element={<About />} />
   
    </Routes>
     
        </div>
        </Router>
        
    </>
  );

  
}

export default App;
