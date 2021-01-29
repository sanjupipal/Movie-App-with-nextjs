import { useRouter } from 'next/router'
import { getMoviesById } from '../../actions'

const Movie = (props) => {
    const router = useRouter()
    const { id } = router.query
    const { movie } = props
    return (
        <div>
            <div className="jumbotron">
                <a ><img className="card h-100" src={movie.image} alt="" /></a>
                <h1 className="display-4">{movie.name}</h1>
                <p className="lead">{movie.description}</p>
                <hr className="my-4" />
                <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                </p>
            </div>
            <p>
                SOME THING
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