// import React from 'react';
import { Link } from 'react-router-dom';
import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'




class Movies extends React.Component {

  render() {
    let settings = {
      infinite: false,
      speed: 1000,
      arrows: true,
      slidesToShow: 7,
      slidesToScroll: 4,

      responsive: [
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2
          }
        }
      ]
    }
    return (
      <div className="container-fluid">
        <h1 className="text">Now Playing Movies</h1>
        
        {
          <Slider {...settings}>
          {
            this.props.nowPlaying.map(nowplay => (
              <div>
              <div className="mr-0">
                <Link to={`/movies/${nowplay.title.replace(/ /g, "_")}`}>
                  <div onClick={() => this.props.getMovieDetails(nowplay.id)}>
                    <img src={`https://image.tmdb.org/t/p/w342/${nowplay.poster_path}`} alt='' width="200px" height="300px" />
                  </div>
                </Link>
              <div class="title">{nowplay.title}</div>
              </div>
              </div>
            )
            )
          }
          <div>
            <button className="btn btn-success" onClick={this.props.getNowPlaying}>Load more</button>
          </div>

        </Slider>
        }


        <h1 className="text ">Popular Movies</h1>
        {this.props.movies.length === 0 ? (
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
            <Slider {...settings}>
              {
                this.props.movies.map(movie => (
                  <div>
                  <div className="mr-0">
                    <Link to={`/movies/${movie.title.replace(/ /g, "_")}`}>
                      <div onClick={() => this.props.getMovieDetails(movie.id)}>
                        <img src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} alt='' width="200px" height="300px" />
                      </div>
                    </Link>
                  </div>
                  <div class="title">{movie.title}</div>
                  </div>
                )
                )
              }
              <div>
                <button className="btn btn-success" onClick={this.props.getMovies}>Load more</button>
              </div>

            </Slider>
            
          )}
           <h1 className="text ">Top Rated Movies</h1>
          {<Slider {...settings}>
              {
                this.props.topRatedMovies.map(rated => (
                  <div>
                  <div className="mr-0">
                    <Link to={`/movies/${rated.original_title.replace(/ /g, "_")}`}>
                      <div onClick={() => this.props.getMovieDetails(rated.id)}>
                        <img src={`https://image.tmdb.org/t/p/w342/${rated.poster_path}`} alt='' width="200px" height="300px" />
                      </div>
                    </Link>
                  </div>
                  <div class="title">{rated.title}</div>
                  </div>
                )
                )
              }
              <div>
                <button className="btn btn-success" onClick={this.props.getRatedMovies}>Load more</button>
              </div>

            </Slider>}
      </div>
    );
  }
}



export default Movies;


