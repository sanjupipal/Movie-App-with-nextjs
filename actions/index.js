
import axios from 'axios'
const MOVIE_DATA = []
const BASE_URL = 'http://localhost:3000/'
const CATEGORY_DATA = [
    { id: 0, name: 'All' },
    { id: 1, name: 'Drama' },
    { id: 2, name: 'Action' },
    { id: 3, name: 'Adventure' },
    { id: 4, name: 'Historical' },
]

export const getCategory = () => {
    return new Promise((res, err) => {
        setTimeout(() => {
            res(CATEGORY_DATA);
        }, 50);
    })
}

export const getMovies = () => {
    return axios.get(`${BASE_URL}api/v1/movies`).then((res) => {
        return res.data
    })
}

export const createMovie = (movie) => {
    movie.id = Math.random().toString(36).substr(2, 5)
    return axios.post(`${BASE_URL}api/v1/movies`, movie)
}


export const getMoviesById = (id) => {
    return axios.get(`${BASE_URL}api/v1/movies/${id}`).then(res => res.data)
}

export const deleteMovie = (id) => {
    return axios.delete(`${BASE_URL}api/v1/movies/${id}`).then(res => res.data)
}

export const UpdateMovie = (movie) => {
    return axios.put(`${BASE_URL}api/v1/movies/${movie.id}`, movie).then(res => res.data)
}