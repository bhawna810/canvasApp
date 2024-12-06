import React, { useState } from 'react'

const Canvas = () => {

  const [textContent, setTextContent] = useState("");
  const [valueToInsert, setValueToInsert] = useState("");
  const [indexValue , setIndexValue] = useState(0);
  const [undoRedoArray , setUndoRedoArray] = useState([]);
  const [checkBold , setcheckBold] =  useState(false);
  const [checkItalics , setcheckItalics] = useState(false);
  const [changeStyles , setChangeStyles] = useState("");

  const handleInputChange = (e) => {
    setTextContent(e.target.value);
  };

  const handleAddText = () => {
    setValueToInsert(textContent); // Update valueToInsert with the current textContent value
    undoRedoArray.push(textContent)
    setUndoRedoArray(undoRedoArray);
   
    setIndexValue(indexValue+1);
   
    // console.log(" undoArray ", undoRedoArray);
    // console.log(" redoArray ", redoArray);

    // console.log("indexValue : ", indexValue);
    // console.log("valueToInsert: ", valueToInsert);
  };

  const undofunc = (val) => {
    // indexValue = val;
    // console.log(" val value inside undo function ", val)
    setIndexValue(val);
    //;
    // console.log(" undoArray[val] ", undoRedoArray[val]);
    setValueToInsert(undoRedoArray[val]);
    // console.log(" valueToInsert ", valueToInsert);
    // console.log(" setValueToInsert inside undo function ", indexValue)
  }

  const redofunc = (val) => {
    // indexValue = val;
    // console.log(" val value inside redo function ", val)
    setIndexValue(val);
    setValueToInsert(undoRedoArray[indexValue]);
   
    // console.log(" setValueToInsert inside redo function", indexValue)
  }

  const addStyles =  () => {
    setChangeStyles()
  }

  const handleclick = (val) => {
     
    if( val === 'bold'){
      setcheckBold(!checkBold);
      changeStylesFunc(checkBold , checkItalics);
    }
    if( val === 'Italics'){
      setcheckItalics(!checkItalics);
      changeStylesFunc(checkBold , checkItalics);
    }
  }

  const changeStylesFunc = (style1 , style2) => {

     const stlyingPara = document.getElementById('addedTextpara')

     if(style1 === true && style2 === true){
        stlyingPara.setAttribute('style', 'font-weight : Bold , font-style: italic ')
     }else if(style1 === false && style2 === false){
        stlyingPara.setAttribute('style', ' ')
     }
     else if(style1 === true){
        stlyingPara.setAttribute('style', 'font-weight : Bold ')
     }
     else if(style2 === true){
        stlyingPara.setAttribute('style', 'font-style: italic ')
     }
  }

  return (
    <div >
    <div>
        <img src="" alt="canvas image" />
        <button onClick={() => undofunc(indexValue -1)}>Undo</button>
        <button  onClick={() => redofunc(indexValue + 1)}>redo</button>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{ backgroundColor: "grey", height: "100px", width: "100px" }}
        >
          <p id='addedTextpara'>{valueToInsert}</p>
        </div>
      </div>
      <div>
        <button onClick={handleAddText}>Add text</button>
        <input
          value={textContent}
          onChange={handleInputChange} 
          placeholder="add text"
        />
        <button onClick={() => handleclick('bold')}>Bold</button>
        <button onClick={() => handleclick('Italics')}>Italics</button>

      </div>
    </div>
  )
}

export default Canvas
