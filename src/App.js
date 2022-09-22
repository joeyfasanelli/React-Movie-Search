
import React from "react";
import "./App.css";
// WE IMPORT OUR COMPONENTS
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";

function App() {
  //variable with your apiKey
  const apiKey = "98e3fb1f";
  const wordArr = ['flower', 'love', 'star',]

  //State to hold movie data
  const [movie, setMovie] = React.useState(null);


  //Function to get a Random movie
  const getRandomMovie = async (searchTerm) => {
    let randomIndex = Math.floor(Math.random()*wordArr.length)
    let randomWord = wordArr[randomIndex]
    console.log(randomWord)
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${randomWord}`
    );
    const data = await response.json();
    setMovie(data);
  };


  //Function to getMovies
  const getMovie = async (searchTerm) => {
    // make fetch request and store response
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    );
    // Parse JSON response into a javascript object
    const data = await response.json();
    //set the Movie state to the movie
    setMovie(data);
  };

  //This will run on the first render but not on subsquent renders
  React.useEffect(() => {
    getRandomMovie("The Godfather");
  }, []);

  // USE OUR COMPONENTS IN APPs RETURNED JSX
  // We pass the getMovie function as a prop called moviesearch
  // We pass movie as props to movie display
  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}

export default App;
