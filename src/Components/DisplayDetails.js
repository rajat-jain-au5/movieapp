import React from 'react';
import { Link } from 'react-router-dom';
class DisplayDetails extends React.Component {



    render() {
        const { movie } = this.props
        return (
            <div>
                {
                    <div className="container mt-4">
                        <div className="row">
                            <Link to={"/movie/trailer"}>
                                <div onClick={() => this.props.getTrailer(movie.id)} className="col-md-3">

                                    {<img src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} alt='' />}
                                </div>
                            </Link>
                            <div className="col-md-6 offset-md-1">
                                <b><h6 className="mb-0" >Title:</h6><p>{movie.original_title}</p></b>
                                <b><h6 className="mb-0" >popularity:</h6><p>{movie.popularity}</p></b>
                                <b><h6 className="mb-0" >Overview:</h6><p>{movie.overview}</p></b>

                            </div>
                        </div>
                    </div>
                }


            </div>
        )

    }
}


export default DisplayDetails;