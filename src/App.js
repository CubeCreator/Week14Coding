import logo from './logo.svg';
import './App.css';
import { Movie } from './components/Movie';
import { MovieList } from './components/MovieList';
import { Review } from './components/Review';
import { ReviewForm } from './componentsReviewForm';



function App() {
  return (
    <div className="App">
      <MovieList/>
    </div>
  );
}

export default App;
