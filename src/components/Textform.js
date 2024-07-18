import React from 'react'
import { useState } from 'react';

export default function Textform(props) {
    const [text, setText] = useState("Enter your text here");

    const handleOnChange=(e)=>{
        setText(e.target.value)
    }
    const handleOnClick=(e)=>{
        setText(text.toUpperCase())
    }

    const handleOnClear=()=>{
        setText("");
    }
    return (
        <div>
            <div className="container">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.heading}</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={text} onChange={handleOnChange}></textarea>
                </div>
                <button type="button" className="btn btn-primary" onClick={handleOnClick}>Click to change uppercase</button> &nbsp;
                <button type="button" className="btn btn-primary" onClick={handleOnClear}>Click to clear</button>
 
            </div>
            <span>Character count is {text.length} and Words count is {text.split(" ").length}</span>
        </div>
    )
}
