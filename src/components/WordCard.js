import React, {useState} from "react";
import './WordCard.css';

function WordCard(props) {
    const [state, setState] = useState({ 
        id: props.id,
        word: props.word, 
        meaning: props.meaning,
        onDelete: props.onDelete
    });

    return (
        <div className="word-card">
            <span>{state.id}</span> 
            <button className="delete-button" onClick={() => state.onDelete(state.id)}></button> 
            <div>
                <span className="word">{state.word}</span>
                <span className="meaning">{state.meaning}</span>
            </div>
        </div>
    )
}
export default WordCard;