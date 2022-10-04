import "./styles.css";
import React, { useState } from "react";

export default function App() {
  var inputBook = {
    Fiction: [
      {
        name: "Harry Potter",
        rating: "4.5",
        description:
          "The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry."
      },
      {
        name: "Space Captain",
        rating: "3.8",
        description:
          "Together with his bold crew—a skull-collecting alien lunatic, an android pilot who is actually a toy, and a hamster called Gerald"
      },
      {
        name: "The alchemist",
        rating: "4.5",
        description:
          "The Alchemist is a classic novel in which a boy named Santiago embarks on a journey seeking treasure in the Egyptian pyramids after having a recurring dream"
      }
    ],
    Adventure: [
      {
        name: "The Three Musketeers",
        rating: "3.2",
        description:
          "A historical romance, it relates the adventures of four fictional swashbuckling heroes who lived under the French kings Louis XIII and Louis XIV, who reigned during the 17th and early 18th centuries."
      },
      {
        name: "Treasure Island",
        rating: "3.6",
        description:
          "Days of sailing ships and pirates and tells of the adventures of Jim Hawkins and his search for the buried treasure of an evil pirate, Captain Flint."
      },
      {
        name: "Odyssey",
        rating: "3.9",
        description:
          "The Odyssey is one of two major ancient Greek epic poems attributed to Homer. It is one of the oldest extant works of literature still widely read by modern audiences."
      }
    ],
    Documentary: [
      {
        name: "The Consiracy ",
        rating: "4.1",
        description:
          "This fascinating book delves into 100 mysterious conspiracies across time, ranging from secret societies that planned revolutions to underground groups with sometimes-nefarious agendas."
      },
      {
        name: "Diary of Anne Franke",
        rating: "2.2",
        description:
          "a Jewish teenager who chronicled her family's two years (1942–44) in hiding during the German occupation of the Netherlands during World War II."
      },
      {
        name: "In Cold Blood",
        rating: "4.1",
        description:
          "In Cold Blood is a non-fiction novel by American author Truman Capote, first published in 1966. It details the 1959 murders of four members of the Clutter family in the small farming community of Holcomb, Kansas."
      }
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
              <div
                style={{
                  fontSize: "smaller",
                  border: "1px solid black",
                  display: "inline"
                }}
              >
                {" "}
                {items.rating}{" "}
              </div>
              <div style={{ fontSize: "smallest" }}> {items.description}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
