import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
import './test.css';
import Button from './Button2.js';
import Box from './Box2.js';

function App() {
  return (
    <div className="App">
      <TodoList />
      <Button size = "big"/>
      <Button size = "small"/>
      <Box size = "big"/>
      <Box size = "small"/>
    </div>
  );
}


console.log(`NODE_ENV = ${process.env.NODE_ENV}`);
console.log(`REACT_APP_DATA_API = ${process.env.REACT_APP_DATA_API}`);
console.log(`REACT_APP_LOGIN_API = ${process.env.REACT_APP_LOGIN_API}`);
export default App;
