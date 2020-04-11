import React from 'react';

class Trailer extends React.Component {

    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-7 offset-md-3">
                        <iframe width="720" height="415" title="youtube video"
                            src={`https://www.youtube.com/embed/${this.props.playingVideoId}`}>
                        </iframe>
                    </div>
                </div>

            </div>
        )
    }
}

export default Trailer