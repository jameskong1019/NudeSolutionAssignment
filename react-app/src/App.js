import React from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from "./actions/store";
import { Provider } from "react-redux";
import Items from './components/InsuranceItems';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Provider store = {store}>
      <Container>
        <Items></Items>
      </Container>
    </Provider>
  );
}

export default App;
