import React from 'react'
import Link from 'next/link'
class MovieList extends React.Component {

    shorter = (text, len) => {
        if (text && text.length > len)
            return text.substr(0, len) + '...'
        return text
    }

    renderMovies(movies) {
        if (movies == undefined)
            return (
                <div>
                    <h1>heheh</h1>
                </div>
            )
        return movies.map((movie, i) => (
            <div key={i} className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100">
                    <Link href={`/movies/${movie.id}`}>
                        <a ><img className="card-img-top" src={movie.image} alt="" /></a>
                    </Link>
                    <div className="card-body">
                        <h4 className="card-title">
                            <Link href={`/movies/${movie.id}`}>
                                <a >{movie.name}</a>
                            </Link>
                        </h4>
                        <div className="text-info">{movie.genre}</div>
                        <h5>$24.99</h5>
                        <p className="card-text">{this.shorter(movie.description, 200)}</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">{movie.rating}</small>
                    </div>
                </div>
            </div>
        ))
    }

    render() {
        const { movies } = this.props
        return (
            <React.Fragment>
                { this.renderMovies(movies)}
            </React.Fragment>
        )
    }
}
export default MovieList;