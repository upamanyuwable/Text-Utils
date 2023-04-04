import React,{useState} from 'react';
import Alert from './Alert';

function TextArea(props) {

    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted to Upper Case","success");
    }
    
    const handleLowClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text converted to Lower Case","success");
    }
    
    const handleClearClick = () =>{
        let newText = ("");
        setText(newText);
        props.showAlert("Text Area Cleared","success");   
    }
    
    const handleSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed","success");   
    }

    const handleOnChange = (event) =>{
        // console.log(event);
        setText(event.target.value);
    }

    const[text,setText] = useState("");
    // setText("Hey Arnav");
    return (
        <>
        <div className='container' style={{color: props.mode==='light'?'#042743':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="textBox" className="form-label">Text Area</label>
                {/* EK CURLY BRACKET JAVASCRIPT KA H AUR DUSRA CURLY BRACKET JAVASCRIPT KE OBJECT KA H */}
                <textarea className="form-control" style={{backgroundColor:props.mode==='light'?'white':'white' , color : props.mode==='light'?'#042743':'black'}} value={text} onChange={handleOnChange} id="textBox" rows="8"></textarea>
                <button className="btn btn-outline-primary my-2 mx-2" onClick={handleUpClick} >Convert to UpperCase</button>
                <button className="btn btn-outline-primary my-2 mx-2" onClick={handleLowClick} >Convert to LowerCase</button>
                <button className="btn btn-outline-primary my-2 mx-2" onClick={handleClearClick} >Clear Text</button>
                <button className="btn btn-outline-primary my-2 mx-2" onClick={handleSpaces} >Remove Extra Spaces</button>
            </div>
        </div>

        <div className="container my-2" style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} words</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter something to Preview it"}</p>
        </div>

        </>
    )
}

export default TextArea