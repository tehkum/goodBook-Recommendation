import "./styles.css";
import React, { useState } from "react";

export default function App() {
  var inputBook = {
    Fiction: [
      { name: "Harry Potter", rating: "4.5" },
      { name: "Space Captain", rating: "3.8" }
    ],
    Adventure: [
      { name: "The Three Musketeers", rating: "3.2" },
      { name: "Treasure Island", rating: "3.6" }
    ],
    Documentary: [
      { name: "The Consiracy ", rating: "4.1" },
      { name: "Diary of Anne Franke", rating: "2.2" }
    ]
  };
  var [bookInput, setBookInput] = useState("Documentary");
  function recommendedOutput(item) {
    setBookInput(item);
  }

  return (
    <div className="App">
      <h2>📚Book Recommendation Webpage</h2>
      <p> Here are some of my recommended books for you</p>
      {Object.keys(inputBook).map(function (item, index) {
        return (
          <button key={item} onClick={() => recommendedOutput(item)}>
            {item}
          </button>
        );
      })}
      <hr></hr>

      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {inputBook[bookInput].map((items) => (
            <li
              key={items.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "50%",
                margin: "1rem 20%",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {items.name} </div>
              <div style={{ fontSize: "smaller" }}> {items.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
