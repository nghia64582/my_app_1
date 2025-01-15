import React, {useState} from "react";
import WordCard from "./WordCard";

function WordCardPane(props) {
    const [state, setState] = useState({ 
        children: [],
        count: 0
    });

    const addChild = () => {
        let cardId = ++state.count;
        const newCard = <WordCard 
            key={Date.now()} 
            id={cardId} 
            word="word" 
            meaning="mean"
            onDelete={handleDelete}
        />;
        console.log("Pre length : " + state.children.length);
        setState({ 
            children: [...state.children, newCard],
            count: state.count
        }); 
        console.log("Post length : " + state.children.length);
    };

    const handleDelete = (id) => {
        console.log("Word card pane delete : " + id);
        console.log("Pre length : " + state.children.length);
        let newChildren = state.children.filter(child => child.id !== id);
        
        console.log("Post length : " + state.children.length);
        setState({ 
            children: newChildren,
            count: state.count
        }); 
    };

    return (
        <div className="word-card-pane">
            {state.children}
            
            <button className="add-new-card" onClick={addChild}>Add new card</button>
        </div>
    )
}
export default WordCardPane;