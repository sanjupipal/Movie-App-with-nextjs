import React from 'react'
import { getMoviesById, UpdateMovie } from '../../../actions'
import MovieCreateForm from '../../../components/movieCreateForm'
import Router from 'next/router'
class EditMovie extends React.Component {

    static async getInitialProps({ query }) {
        const movie = await getMoviesById(query.id)
        return { movie }
    }
    handleUpdateMovie = (movie) => {
        UpdateMovie(movie).then((movies) => {
            Router.push(`/movies/${movie.id}`)
        })
    }
    render() {
        const { movie } = this.props
        return (
            <div className="container">
                <h1>Edit movie</h1>
                <MovieCreateForm handleFormSubmit={this.handleUpdateMovie} initialData={movie} />
            </div>
        )
    }
}

export default EditMovie