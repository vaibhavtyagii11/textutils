// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  
  Route,
  
} from "react-router-dom";

import { useState } from 'react';

function App() {
  const[alert,setAlert]=useState(null);
  const[mode,setMode]=useState('light');

  const showAlert=(message,type)=>{
     setAlert({
      msg:message,
      type:type
     })
     setTimeout(()=>{
      setAlert(null)
     },3000)
  }

   const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
    
   }
  const toggleMode=(cls)=>{
    document.body.classList.add('bg-'+cls)
    if(mode==='light'){
    setMode('dark')
    document.body.style.backgroundColor='grey';
    showAlert("Dark mode has been enabled","success")
    // document.title='TextUtils-Dark Mode';

   }
  else{
    setMode('light')
    document.body.style.backgroundColor='white';
    showAlert("light mode has been enabled","success")
    // document.title='TextUtils-Light Mode';

  }
}
  
  return (
    <>
    <Router>
      <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode}  about="About US" />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route path="/About" element={<About mode={mode}/>}>
            
          </Route>
          <Route path="/" element = {<TextForm showAlert={showAlert} heading="Try TextUtils-Word counter ,character counnter,Remove extra spaces" mode={mode}  />}>
            
          </Route>
        </Routes>
      </div>
    </Router>

     </>
   
  );
}

export default App;
