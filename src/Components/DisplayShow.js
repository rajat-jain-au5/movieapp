import React from 'react';
// import { Link } from 'react-router-dom';
class DisplayShow extends React.Component {



    render() {
        const { show } = this.props
        return (
            <div>
                {
                    <div className="container mt-4">
                        <div className="row">
                            <div className="col-md-3">
                                {<img src={`https://image.tmdb.org/t/p/w342/${show.backdrop_path}`} alt='' />}
                            </div>
                            <div className="col-md-6 offset-md-1">
                                <b><h6 className="mb-0">Title:</h6><p>{show.name}</p></b>
                                <b><h6 className="mb-0">popularity:</h6><p>{show.popularity}</p></b>
                                <b><h6 className="mb-0">Overview:</h6><p>{show.overview}</p></b>

                            </div>
                        </div>
                    </div>
                }
            </div>


        )
    }
}

export default DisplayShow