import React from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Redirect } from 'react-router-dom'
import Movies from './Components/Movies';
import TvSerials from './Components/TvSerials';
import DisplayDetails from './Components/DisplayDetails'
import Trailer from './Components/Trailer'
import DisplayShow from './Components/DisplayShow'
class App extends React.Component {
  state = {
    movies: [],
    topRatedMovies: [],
    nowPlaying: [],
    page: 1,
    tvSerials: [],
    movie: "",
    show: "",
    playingVideoId: ""
  }
  getMovies = () => {
    console.log("clicked")
    let response = fetch(`https://api.themoviedb.org/3/movie/popular?api_key=603a7f4d06b400260c22d035a59d6894&append_to_response=videos,images&page=${this.state.page}`)
    response.then(res => {
      res.json()
        .then(data => {
          // console.log(data)
          this.setState({
            movies: [...this.state.movies, ...data.results],
            page: this.state.page + 1
          }, () => console.log(this.state))
        })
    })
  }
  getNowPlaying = () => {
    let response = fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=603a7f4d06b400260c22d035a59d6894&language=en-US&page=${this.state.page}`)
    response.then(res => {
      res.json()
        .then(data => {
          // console.log(data)
          this.setState({
            nowPlaying: [...this.state.nowPlaying, ...data.results],
            page: this.state.page + 1
          }, () => console.log(this.state))
        })
    })
  }
  getRatedMovies = () => {
    let response = fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=603a7f4d06b400260c22d035a59d6894&language=en-US&page=${this.state.page}`)
    response.then(res => {
      res.json()
        .then(data => {
          // console.log(data.results)
          this.setState({
            topRatedMovies: [...this.state.topRatedMovies, ...data.results],
            page: this.state.page + 1
          })
        })
    })
  }
  getTrailer = (id) => {
    let response = fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=603a7f4d06b400260c22d035a59d6894&language=en-US`)
    response.then(res => {
      res.json().then(data => {
        console.log(data.results)
        this.setState({
          playingVideoId: data.results[0].key
        })
      })
    })
  }
  getShows = () => {
    let response = fetch(`https://api.themoviedb.org/3/tv/popular?api_key=603a7f4d06b400260c22d035a59d6894&append_to_response=videos,images&page=${this.state.page}`)
    response.then(res => {
      res.json()
        .then(data => {
          console.log(data)
          this.setState({
            tvSerials: [...this.state.tvSerials, ...data.results],
            page: this.state.page + 1
          })
        })
    })
  }
  getMovieDetails = (id) => {
    console.log(id)
    let response = fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=603a7f4d06b400260c22d035a59d6894&language=en-US`)
    response.then(res => {
      res.json()
        .then(data => {
          // console.log(data)
          this.setState({
            movie: data
          }, () => console.log(this.state))
        })
    })
  }
  getShowDetails = (id) => {
    console.log(id)
    let response = fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=603a7f4d06b400260c22d035a59d6894&language=en-US`)
    response.then(res => {
      // console.log(res)
      res.json()
        .then(data => {
          // console.log(data)
          this.setState({
            show: data,
          })
        })
    })
  }
  componentDidMount = () => {
    this.getMovies();
    this.getShows();
    this.getRatedMovies();
    this.getNowPlaying();
  }

  

  render() {
    return (
      <BrowserRouter>
        <div>
          <nav>
            <Link to="/">
               <Redirect to="/movies" />
            </Link>
            <Link className="movie" to="/movies">
              Movies
        </Link>
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;

        <Link className="movie" to="/shows">
              Tv Shows
        </Link>
          </nav>
          <Route path="/movies" exact>
            <Movies movies={this.state.movies}
              nowPlaying={this.state.nowPlaying}
              getNowPlaying={this.getNowPlaying}
              topRatedMovies={this.state.topRatedMovies}
              getRatedMovies={this.getRatedMovies}
              getMovies={this.getMovies}
              getMovieDetails={(id) => this.getMovieDetails(id)} />
          </Route>

          <Route path="/shows" exact>
            <TvSerials tvSerials={this.state.tvSerials}
              getShows={this.getShows}
              getShowDetails={(id) => this.getShowDetails(id)}
            />
          </Route>
          <Route path="/movies/:moviesname" exact>
            <DisplayDetails movie={this.state.movie}
              getTrailer={(id) => this.getTrailer(id)}
            />
          </Route>
          <Route path="/shows/:showname" exact>
            <DisplayShow
              show={this.state.show}
            />
          </Route>
          <Route path="/movie/trailer" exact >
            <Trailer
              playingVideoId={this.state.playingVideoId}
            />
          </Route>

        </div>
      </BrowserRouter>
    );
  }

}

export default App;


// 
