import React, { useState } from "react";
import './SearchBar.css';

function SearchBar() {
    const [text, setText] = useState(''); 
  
    const handleInputChange = (event) => {
        setText(event.target.value);
    };
  
    const record = () => {
        console.log("Start record");
        var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        var recognition = new SpeechRecognition();
        recognition.onresult = writeText;
        recognition.start();
    };

    const writeText = (event) => {
        setText(event.results[0][0].transcript);
    }
  
    return (
        <div className="container">
            <textarea className="search-bar"
                value={text} 
                onChange={handleInputChange} 
                rows={1}
            />
            <button className="record-button" onClick={record}>Record</button> 
        </div>
    );
  }
export default SearchBar;
