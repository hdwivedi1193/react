import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Aboutus from './components/Aboutus';
import { useState } from 'react';
function App() {
      const [mode,setMode]=useState('light')
      const [myStyle,setStyle]=useState()
      const handleModeChange=(e)=>{
        if((e.currentTarget.checked==true)){
          setMode('dark')
          document.body.style.backgroundColor="grey"

          setStyle({
            color:"white",
            backgroundColor:"black"
          })
        }else{
          setMode('light')
          setStyle({
            color:"black",
            backgroundColor:"white"
          })

          document.body.style.backgroundColor="white"  
        }
      }
  return (
    <>
    <Navbar home="HOMEPAGE" mode={mode} modechange={handleModeChange} mystyle={myStyle} ></Navbar>
    {/* <Textform heading="Enter the text to analyze"></Textform> */}
    <Aboutus></Aboutus>
    </>
  );
}

export default App;
