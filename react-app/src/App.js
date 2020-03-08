import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { store } from "./actions/store";
import { Provider } from "react-redux";
import Items from './components/InsuranceItems';

import { Card, Container } from 'react-bootstrap';
import { ToastProvider} from "react-toast-notifications"

function App() {
  return (
    <Provider store = {store}>
      <ToastProvider autoDismiss={true}>
        <Container>
          <Card className="m-2 p-2">
            <Items></Items>
          </Card>
        </Container>
      </ToastProvider>
    </Provider>
  );
}

export default App;
