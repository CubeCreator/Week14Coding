import logo from './logo.svg';
import './App.css';
import { Movie } from './components/Movie';
import { MovieList } from './components/MovieList';
import { Review } from './components/Review';
import Stars from './components/Stars';



function App() {
  return (
    <div className="App">
      <MovieList/>
      <Stars/>
    </div>
  );
}

export default App;
