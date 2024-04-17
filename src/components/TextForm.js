import React,{useState} from 'react'

export default function TextForm(props) {
  
  const [text, setText] = useState('');

       const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("converted to upperCase","success")
    
        }
        const handleLoClick=()=>{
            let newText=text.toLowerCase();
            setText(newText)
            props.showAlert("converted to LowerCase","success")
        
          }
        const handleClearClick=()=>{
            let newText='';
            setText(newText)
            }
        const handleCopy=()=>{
              // var text=document.getElementById("myBox");
              // text.select();
              // text.setSelectionRange(0,999)
              navigator.clipboard.writeText(text)
              // document.getSelection().removeAllRanges();
              props.showAlert("copied to clipboard!","success")
            }
        const handleExtraSpace=()=>{
              let newText=text.split(/[ ]+/);
              setText(newText.join(" "));
              props.showAlert("extra spaces removed!","success")
            }
    
        const handleOnChange=(e)=>{
           setText(e.target.value);
    
        }
       
           //text="new text"//wrong way to assign
           //setText("new Text");//right way to assign
          
           return (
 
    <>
        <div className={`container text-${props.mode==='light'?'black':'white'}`}>
            <h1 className='mb-2'>{props.heading}</h1>
             <div className="mb-3">
               <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor :(props.mode ==='dark'?'darkgrey':'white'),color:(props.mode ==='dark'?'white':'black')}} id="myBox" rows="8"></textarea>
            </div>
                <button disabled={text.length===0} className="btn-btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button disabled={text.length===0} className="btn-btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
                <button disabled={text.length===0} className="btn-btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length===0} className="btn-btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} className="btn-btn-primary mx-1 my-1" onClick={handleExtraSpace}>Handle Extra Space</button>
        </div> 

        <div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`} >
            <h1>your text summary</h1>
            <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length } characters</p> 
             <p>{0.008* text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes reads</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
    </>    
                )
}
