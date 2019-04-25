import React from 'react';
import './App.css';

import movies from './movies';

import GenreList from './GenreList';
import MovieList from './MovieList';
import ActorList from './ActorList';

class App extends React.Component {
  // console.log(Object.keys(movies));
  constructor(props) {
    super(props);
    this.state = {
      genre:'',
      movie:''
    }
  }
  render () {

  
  return (
    <div className="App">
      <GenreList genres={Object.keys(movies)} handleClick={this._setGenre}/>
      {
        this.state.genre ? <MovieList
         movies={Object.keys(movies[this.state.genre])} handleClick={this._setMovie}/> :
        null
      }
      {
        this.state.movie ?/* // <MovieList movies={Object.keys(movies.documentaries)}/> */
  <ActorList 
  actors={movies[this.state.genre][this.state.movie]} /> :null
      }
    </div>
    );
  }
  _setGenre=(genre) => {
    this.setState({
      // genre:genre
      //When the key and value adre the same, you can omit the ":genre"
      genre,
      movie: ''
    });
  }
  
  _setMovie=(movie) => {
    this.setState({
      // genre:genre
      //When the key and value adre the same, you can omit the ":genre"
      movie
    });
  }
}

export default App;
