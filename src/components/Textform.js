import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Textform(props) {
    const handleupClick = () => {
        console.log("Uppercase was clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    };
    const handleupClick2=()=>{
        // console.log("Lowercase Text was clicked: " + text);
        let newText2=text.toLowerCase();
        setText(newText2);
        props.showAlert("Converted to LowerCase", "success");
    };

    const handleupClickclear=()=>{
        // console.log("Lowercase Text was clicked: " + text);
        let newText3="";
        setText(newText3);
        props.showAlert("Text is Cleared", "danger");
    };
    
    const speak=()=>{
        let msg=new SpeechSynthesisUtterance();
        msg.text=text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Speak is Enabled", "success");
    };
    
    const handleCopy=()=>{
        let text=document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text is Cpoied to Clipboard", "success");
    };
    const handleExtraSpace =()=>
    {
        let newText4=text.split(/[ ]+/);
        setText(newText4.join(" "));
        props.showAlert("Extra Space is Removed", "success");
    };
   
    

    const handleOnchange = (event) => {
        // console.log("On Change: " + event.target.value);
        setText(event.target.value);
    };

    const [text, setText] = useState('');  // Start with an empty string

    return (
        <>
        <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} id="mybox" style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='dark'?'white':'black'}}onChange={handleOnchange} rows="10"> </textarea>
            </div>

            <button className="btn btn-outline-primary" onClick={handleupClick}> Convert to UpperCase </button>
            <button className="btn btn-outline-success mx-2 my-2"  onClick={handleupClick2}> Convert to LowerCase </button>
            <button className="btn btn-outline-info mx-2 my-2"  onClick={handleupClickclear}>     Clear   </button>
            <button className="btn btn-outline-danger mx-2 my-2"  onClick={speak}> Speak </button>
            <button className="btn btn-outline-warning mx-2 my-2"  onClick={handleCopy}> Copy to Clipboard </button>
            <button className="btn btn-outline-secondary mx-2 my-2"  onClick={handleExtraSpace}>Remove extra Spaces</button>

        </div>
        <div className="container my-2"style={{color:props.mode==='light'?'black':'white'}}>
            <h1>Your text Summary</h1>
            <p>Total Words: {text.trim().split(/\s+/).filter(word => word !== "").length}</p>
            <p>Number of Characters: {text.replace(/\s/g, "").length}</p>
            <p>Time to read:{ 0.005 *text.split("").length} Minutes</p>
            <h2>Preview</h2>
            <p>{text.length>0? text:"Enter Something Above to preview"}</p>

        </div>
        </>
    );
}
