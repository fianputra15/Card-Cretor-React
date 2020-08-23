import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./elements/Header";
import Home from "./pages/Home";

function App() {
  return (
      <div className="App">
        <Header/>
        <Home/>
    </div>
  );
}

export default App;
