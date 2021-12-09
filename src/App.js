import react, { useState } from "react";
import "./styles.css";
var emojiDictionary = {
  "😊": "smiling",
  "😘": "face with blowing kiss",
  "💞": "revolving hearts",
  "😳": "disbelief",
  "😔": "sad",
  "💌 ": "love letter",
  "😑": "expressionless face",
  "🤗 ": "hugging face"
};
var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "We do have this emoji on our database";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    console.log(emoji);
  }
  return (
    <div className="App">
      <h1>Inside outtt!</h1>
      <input onChange={emojiInputHandler} />
      <h2>{meaning}</h2>
      <h3>Emojis We Know</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontsize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
