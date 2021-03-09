import React from "react";
import "./App.css";
import { Container } from "reactstrap";

function App() {
  const url = "https://api.adviceslip.com/advice";
  return (
    <div>
      <Container>
        <h2>Challenge 2</h2>
        <p>
          For this challenge you will need to convert the functional component
          and convert it into a class component. The fetch will need to be
          completed on page load - no button clicks.
        </p>
        <ul>
          <li>
            Create an iterface in the functional component and class component.
            Make the interface based on the response you get back from the API.
          </li>
          <li>
            Use the url in this file to pass down as a prop to use in the
            conponent
          </li>
          <li>Conduct the fetch on page load</li>
        </ul>
      </Container>
    </div>
  );
}

export default App;
