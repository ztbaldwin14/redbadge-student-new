import React from "react";
import { Container } from "reactstrap";

function App() {
  return (
    <div>
      <Container>
        <h2>Challenge 2</h2>
        <p>In this challenge you will conduct a fetch from AdviceSlip's API</p>
        <ul>
          <li>
            Website Url for Docs:
            <a
              href="https://api.adviceslip.com/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              https://api.adviceslip.com/
            </a>
          </li>
          <li>API you will use: https://api.adviceslip.com/advice </li>
          <li>Create the AdviceSlip.tsx file</li>
          <li>The fetch will happen with the Onload of the page.</li>
          <li>Class component will be used</li>
          <li>
            App.tsx will be passing the api url down as a prop for the practice
            of passing props.
          </li>
          <li>Use Interfaces</li>
          <li>Display the Advice</li>
        </ul>
      </Container>
    </div>
  );
}

export default App;
