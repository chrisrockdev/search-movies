import React ,{ Component } from 'react';
import Nav from './Nav';
import SearchArea from './search/SearchArea';
import MovieList from './MovieList';
import Pagination from './Pagination';
import MovieInfo from './MovieInfo';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      search: '',
      totalResults: 0,
      currentPage: 1,
      currentMovie: null,
    }
    this.apiKey = process.env.REACT_APP_API
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.search}&language=pt-BR`)
    .then(data => data.json())
    .then(data => {
      this.setState({ movies: [...data.results], totalResults: data.total_results})
      console.log(data);
    })
  }

  handleChange = (e) => {
    this.setState({ search: e.target.value })
  }

  nextPage = (pageNumber) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.search}&page=${pageNumber}&language=pt-BR`)
    .then(data => data.json())
    .then(data => {
      this.setState({ movies: [...data.results], currentPage: pageNumber })
    })
  }

  viewMovieInfo = (id) => {
    const filteredMovie = this.state.movies.filter(movie => movie.id == id)

    const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null

    this.setState({ currentMovie: newCurrentMovie })
  }

  closeMovieInfo = () => {
    this.setState({ currentMovie: null })
  }

    render(){
      const numberPages = Math.floor(this.state.totalResults / 20);

        return (
          <div className="App">
            <Nav />
            {this.state.currentMovie == null ? 
              <div>
                <SearchArea handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
                <MovieList viewMovieInfo={this.viewMovieInfo} movies={this.state.movies} />
              </div> :
                <MovieInfo currentMovie={this.state.currentMovie} closeMovieInfo={this.closeMovieInfo} />
          }
            { this.state.totalResults > 20 && this.state.currentMovie == null ? <Pagination pages={numberPages} nextPage={this.nextPage} currentPage={this.state.currentPage} /> : '' }
          </div>
        );
      }
    }

export default App;