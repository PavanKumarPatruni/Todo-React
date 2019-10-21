import React from 'react';

import Header from './components/Header';
import TodoBox from './components/todo/TodoBox';

import './App.scss';

function App() {
  return (
    <div className="App">
        <Header />
        <TodoBox />
    </div>
  );
}

export default App;
