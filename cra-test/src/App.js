import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
import './test.css';
import Button from './Button2.js';
import Box from './Box1.js';

function App() {
  return (
    <div className="App">
      <TodoList />
        <Button size = "big"/>
        <Button size = "small"/>
        <Box size = "big"/>
        <Box size = "small"/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dahee start React
        </a>
      </header>
    </div>
  );
}


console.log(`NODE_ENV = ${process.env.NODE_ENV}`);
console.log(`REACT_APP_DATA_API = ${process.env.REACT_APP_DATA_API}`);
console.log(`REACT_APP_LOGIN_API = ${process.env.REACT_APP_LOGIN_API}`);
export default App;
