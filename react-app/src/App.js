import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { store } from "./actions/store";
import { Provider } from "react-redux";
import Items from './components/InsuranceItems';

import { Card, Container } from 'react-bootstrap';

function App() {
  return (
    <Provider store = {store}>
      <Container>
        <Card className="m-2 p-2">
          <Items></Items>
        </Card>
      </Container>
    </Provider>
  );
}

export default App;
