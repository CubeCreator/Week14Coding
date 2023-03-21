import logo from './logo.svg';
import './App.css';
import React from 'react';
import { MovieList } from './components/MovieList';
import ReviewForm from './components/ReviewForm';




function App() {
  return (
    <div className="App">
      <MovieList/>
      <ReviewForm/>
    </div>
  );
}

export default App;
