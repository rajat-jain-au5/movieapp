import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick'


class TvSerials extends React.Component {
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
        <h1 className="text ">Popular Tv Shows</h1>
        {this.props.tvSerials.length === 0 ? (
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
            <Slider {...settings}>
              {
                this.props.tvSerials.map(tvShows => (
                  <div className="col-3">
                    <Link to={`/shows/${tvShows.original_name.replace(/ /g, "_")}`}>
                      <div onClick={() => this.props.getShowDetails(tvShows.id)}>
                        <img src={`https://image.tmdb.org/t/p/w342/${tvShows.poster_path}`} alt='' width="200px" height="300px" />
                      </div>
                    </Link>
                    <div class="title">{tvShows.original_name}</div> <br />
                  </div>

                )
                )
              }
              <div>
                <button className="btn btn-success" onClick={this.props.getShows}>Load more</button>
              </div>


            </Slider>
          )}
      </div>
    )
  }
}


export default TvSerials;