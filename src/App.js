
import { useState } from 'react';
import './App.css';
import CardContainer from './Components/CardContainer';
import Footer from "./Components/Footer"
import Header from './Components/header';

function App() {
  return (
    <div className="App">
      <Header/>
      <CardContainer/>
      <Footer/>
    </div>
  );
}

export default App;
