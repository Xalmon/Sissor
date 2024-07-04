import React from 'react';
import { useRoutes } from 'react-router-dom';
import { ROUTES } from './routers';
import './App.css';

function App() {
  return (
    <div>
      {useRoutes(ROUTES)}
      <a href="https://reactjs.org">Learn React</a> {/* Ensure this element exists in your component */}
    </div>
  );
}

export default App;
