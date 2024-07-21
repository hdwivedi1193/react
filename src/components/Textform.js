import React from 'react'
import { useState } from 'react';

export default function Textform(props) {

    return (
        <div className="container" style={props.formStyle}>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.title}</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={props.text} onChange={props.handleUserInput}></textarea>

            </div>
            <div className="md-9">
                <button type="button" className="btn btn-primary" style={props.buttonStyle} onClick={props.handleUpperCase} >UPPERCASE</button>
                <button type="button" className="btn btn-secondary" style={props.buttonStyle} onClick={props.handleLowerCase}>LOWERCASE</button>
                <button type="button" className="btn btn-success" style={props.buttonStyle} onClick={props.handleCopy}>COPY</button>
            </div>
        </div>
    )
}
