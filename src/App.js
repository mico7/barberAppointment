import React from 'react';
import './App.css';

import Header from './components/header/Header';
import Content from './components/Content/Content';
import Form from './components/Form/Form';
;

function App() {
  return (
    <div className="App">
      <Header/>
      <Content/>
      <Form/>
      
    </div>
  );
}

export default App;
