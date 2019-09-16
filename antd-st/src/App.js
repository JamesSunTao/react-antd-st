import React from 'react';
import Button from 'antd/es/button';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button type="primary">Button</Button>
      </header>
    </div>
  );
}

export default App;
