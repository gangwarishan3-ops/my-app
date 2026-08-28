import React,{useState} from 'react'

export default function TextFrom(props) {
  const [text, setText] = useState(" ");
  
  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText)  
  }
  const handleLowClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handletitleClick = ()=>{
    let newText = text.charAt(0).toUpperCase() + text.slice(1);
    setText(newText)
  }
  const handleClearClick = ()=>{
    setText("")
  }
  const handleOnChange = (event)=>{
    setText(event.target.value)
  }
  const handleCopy = () => {
     var text = document.getElementById("myBox");
     text.select();
     navigator.clipboard.writeText(text.value);
    
  }
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(""))
  }
  return (
    <>
    <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="9" value={text}  style={{ backgroundColor: props.mode === 'dark' ? '#042743' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} onChange={handleOnChange}></textarea>
       </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick} >Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handletitleClick} >Convert to Titlecase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick} >Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy} >Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces} >Remove Extra Spaces</button> 
    </div>
    <div className="container" my-3 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
     <h2>Your text summary</h2>
     <p>{text.split(" ").length} words and {text.length} characters</p>
     <p>{0.008 * text.split(" ").length} Minutes read</p>
     <h2>Preview</h2>
     <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
