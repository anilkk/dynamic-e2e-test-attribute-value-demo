import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./styles.css";

function App() {
  const [count, setCount] = useState(0);
  const handleClick = value => {
    setCount(value);
  };
  return (
    <div className="App">
      <h2>Dynamic test attribute value</h2>
      <OverlayTrigger
        key="bottom"
        placement="bottom"
        overlay={
          <Tooltip id="tooltip-bottom" className="tooltip">
            <ul>
              <li>
                <strong>E2E Test Selector attribute:</strong>e2e-test-results
              </li>
              <li>
                <strong>E2E Test Selector attribute value:</strong>
                {count}
              </li>
            </ul>
          </Tooltip>
        }
      >
        <div>
          Search:{" "}
          <h3
            className="e2e-test-results"
            e2e-test-selector="search-results-number"
            e2e-test-results-value={count}
          >
            {count} results
          </h3>
        </div>
      </OverlayTrigger>
      <p>
        <span role="img" aria-label="hover over the search results">
          ☝️{" "}
        </span>
        Hover over the search results to view the{" "}
        <strong>test attribute selector</strong> and it's <strong>value</strong>{" "}
      </p>
      <ul>
        <li>
          <Button
            variant="primary"
            e2e-test-selector="btn-25-results"
            onClick={() => {
              handleClick(25);
            }}
          >
            Change results value to 25
          </Button>
        </li>
        <li>
          <Button
            variant="primary"
            e2e-test-selector="btn-50-results"
            onClick={() => {
              handleClick(50);
            }}
          >
            Change results value to 50
          </Button>
        </li>
      </ul>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
