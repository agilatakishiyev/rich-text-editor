import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBold,
  faHeading,
  faItalic,
  faRotateLeft,
  faRotateRight,
  faStrikethrough,
  faUnderline,
} from "@fortawesome/free-solid-svg-icons";

import React from "react";
import "./App.css";

function App() {
  const handleChange = (e: any) => {
    var selection;
    if (window.getSelection) selection = window.getSelection();

    var anchor_node = selection?.anchorNode; //current node on which cursor is positioned
    var previous_node = anchor_node?.previousSibling;
    var next_node = anchor_node?.nextSibling;
    console.log("p", previous_node);
    console.log("n", next_node);
    console.log("a", anchor_node?.parentElement);
  };
  return (
    <div className="App">
      <div className="editor-area">
        <div className="buttons">
          <div className="button-groups">
            <span className="style-button">
              <FontAwesomeIcon icon={faBold} />
            </span>
            <span className="style-button selected">
              <FontAwesomeIcon icon={faItalic} />
            </span>
            <span className="style-button">
              <FontAwesomeIcon icon={faUnderline} />
            </span>

            <span className="style-button">
              <FontAwesomeIcon icon={faStrikethrough} />
            </span>
          </div>

          <div className="button-groups">
            <span className="style-button">
              <FontAwesomeIcon icon={faHeading} />1
            </span>
            <span className="style-button">
              <FontAwesomeIcon icon={faHeading} />2
            </span>
            <span className="style-button selected">
              <FontAwesomeIcon icon={faHeading} />3
            </span>
          </div>
          <div className="button-groups">
            <span className="style-button">
              <FontAwesomeIcon icon={faRotateLeft} />
            </span>
            <span className="style-button">
              <FontAwesomeIcon icon={faRotateRight} />
            </span>
          </div>

          <div className="button-groups"></div>
        </div>
        <div
          className="editor"
          contentEditable="true"
          onInput={handleChange}
        ></div>
      </div>
    </div>
  );
}

export default App;
