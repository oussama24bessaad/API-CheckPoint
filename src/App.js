import React from "react"
import { Container } from "react-bootstrap";
import './App.css';
import UserList from "./components/UserList";

function App() {
  return (
    <div className="App">
      <Container>
      <UserList/>
      </Container>
    </div>
  );
}

export default App;