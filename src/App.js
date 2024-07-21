import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Aboutus from './components/Aboutus';
import { useState } from 'react';
import Textform from './components/Textform';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {

  const [mode, setMode] = useState('light')
  const [style, setStyle] = useState({
    color: 'black'
  })

  const [buttonStyle, setButtonStyle] = useState({
    margin: "10px"
  })

  const [formStyle,setFormStyle]=useState({
    margin:"150px"
  })

  const handleDarkMode = (e) => {
    let mode = document.getElementById('flexSwitchCheckDefault').checked

    if (mode == true) {
      setMode('dark')
      setFormStyle({
        'color': "white",
        "backgroundColor": "black",
        margin:"150px"
      })
      setStyle({
        'color': "white",
        "backgroundColor": "black"
      })
    } else {
      setMode('light')
      setFormStyle({
        "backgroundColor": "white",
        margin:"150px"
      })
      setStyle({
        'color': "black"
      })
    }
  }

  const [text, setText] = useState("Enter your text here")

  const handleUpperCase = (e) => {
    setText(text.toUpperCase())
  }

  const handleLowerCase = (e) => {
    setText(text.toLowerCase())

  }

  const handleCopy = (e) => {
    var copyText = document.getElementById("exampleFormControlTextarea1");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);

    document.getSelection().removeAllRanges() 
  }

  const handleUserInput = (e) => {

    setText(e.currentTarget.value)
  }
  return (
    <>
      <BrowserRouter>
        <Navbar mode={mode} handleDarkMode={handleDarkMode}  ></Navbar>

        <Routes>
          <Route exact path="/about" element={<Aboutus myStyle={style}></Aboutus>}>

          </Route>
          <Route exact path="/home" element={<Textform title="Add Text to analyze result" buttonStyle={buttonStyle} handleUpperCase={handleUpperCase} handleLowerCase={handleLowerCase} handleCopy={handleCopy} text={text} handleUserInput={handleUserInput} formStyle={formStyle}></Textform>}>
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
