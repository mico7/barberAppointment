import React from 'react';
import './App.scss';

import Header from './components/header/Header';
import BarberImage from "./components/BarberImage/BarberImage"
import Form from './components/Form/Form';


function App() {
  return (
    <div className="App">
      <Header />
      <BarberImage/>
      <Form/>
      
    </div>
  );
}

export default App;
