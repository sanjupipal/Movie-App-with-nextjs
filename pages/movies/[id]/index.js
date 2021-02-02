import { useRouter } from 'next/router'
import { getMoviesById, deleteMovie } from '../../../actions'
import Link from 'next/link'

const Movie = (props) => {
    const router = useRouter()
    const { id } = router.query
    const { movie } = props
    const handleDelete = (e, id) => {
        e.preventDefault();
        let answer = window.confirm('Are you sure you want to delete?')
        if (answer) {
            deleteMovie(id).then(() => {
                router.push('/')
            })
        }
    }
    return (
        <div className="container">
            <div className="jumbotron">
                <a className="right-align"><img className="card h-100" src={movie.image} alt="" /></a>
                <h1 className="display-4">{movie.name}</h1>
                <p className="lead">{movie.description}</p>
                <p>{movie.genre}</p>
                <hr className="my-4" />
                <p className="lead">
                    <button className="btn btn-primary btn-lg" href="#" role="button">Learn more</button>
                    <button onClick={(e) => handleDelete(e, id)} className="btn btn-danger btn-lg ml-1" href="#" role="button">Delete</button>
                    <Link href="/movies/[id]/edit" as={`/movies/${id}/edit`}>
                        <button className="btn btn-warning btn-lg ml-1" role="button">Edit</button>
                    </Link>
                </p>
            </div>
            <p>
                {movie.longDesc}
            </p>
        </div>
    )
}

Movie.getInitialProps = async (context) => {
    const id = context.query.id
    const movie = await getMoviesById(id)
    return { movie }
}


export default Movie