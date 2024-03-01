import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";



function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
      {emojipedia.map( emojiTerm => //added arrow function to simplify the function
   (
    <Entry 
    key={emojiTerm.id} //key - will effectively render components
    emoji={emojiTerm.emoji} 
    name={emojiTerm.name} 
    description={emojiTerm.meaning}
    />
  )
)}
      </dl>
    </div>
  );
}

export default App;
