import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { store } from "./actions/store";
import { Provider } from "react-redux";
import Items from './components/InsuranceItems';

function App() {
  return (
    <Provider store = {store}>
      <Items></Items>
    </Provider>
  );
}

export default App;
