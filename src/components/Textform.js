import React from 'react'
import { useState } from 'react';

export default function Textform(props) {
    let {title,buttonStyle,handleUpperCase,handleLowerCase,handleCopy,text,handleUserInput,formStyle}=props;
    return (
        <div className="container" style={formStyle}>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">{title}</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleUserInput}></textarea>

            </div>
            <div className="md-9">
                <button type="button" className="btn btn-primary" style={buttonStyle} onClick={handleUpperCase} >UPPERCASE</button>
                <button type="button" className="btn btn-secondary" style={buttonStyle} onClick={handleLowerCase}>LOWERCASE</button>
                <button type="button" className="btn btn-success" style={buttonStyle} onClick={handleCopy}>COPY</button>
            </div>
        </div>
    )
}
