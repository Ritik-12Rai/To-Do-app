import React,{ useState } from 'react'

export default function TextForm(props) {
  const changeUpclick =()=>{
    console.log("upper case was clicked" + text)
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to UpperCase","success")
  
  }
  
  
  const handleclick=()=>{
    // console.log("clicked on lower case"+ text);
    let newText= text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to LowerCase","success")
  }

  const handlecleartxt=()=>{
    // console.log("clicked on lower case"+ text);
    let newText= '';
    setText(newText)
    props.showAlert("Text Cleared!","success")
  }

  const handleonChange =(event)=>{
    console.log("Onchange")
    setText(event.target.value);
  }

  const handleCopy =(event)=>{
    console.log("I am a copy")
    var text = document.getElementById("mybox")
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert(" Copy to clipboard!","success")
    
  }

  const handleExtraSpaces =(event)=>{
   let newText = text.split(/[ ]+/);
   setText(newText.join(""))
   props.showAlert("Removed ExtraSpaces!","success")
  }

  const[text, setText]= useState('enter');
  
  return (
<>
    <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743'}}>
        <h1>{props.heading} </h1>
    <div className="mb-3">
    <textarea className="form-control" id="mybox"  value={text} onChange={handleonChange} style={{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark' ? 'white' : '#042743'}} rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-1 my-1" onClick={changeUpclick}>Convert UPPERCASE</button>
    <button className="btn btn-danger mx-1 my-1" onClick={handleclick}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-1 my-1" onClick={handlecleartxt}>Clear Text</button>
    <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>CopyText</button>
    <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>RemoveExtraSpaces</button>
    </div>

    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1>Your text summary</h1>
      <p> {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split ("").length}  Minutes to read the text</p>
       <h1>preview</h1>
       <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>

</>
  )
}
