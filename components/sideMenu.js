import { useState } from 'react'
import { useRouter } from 'next/router'
import Modal from '../components/modal'
import MovieCreateForm from './movieCreateForm'
import { createMovie } from '../actions/index'
const SideMenu = (props) => {

    const router = useRouter()
    const handleCreateMovie = (movie) => {
        createMovie(movie).then((movies) => {
            modal.closeModal()
            router.push('/')
        })
    }

    const { categories } = props
    let modal = null
    return (
        <div>
            <Modal ref={ele => modal = ele} hasSubmit={false}>
                <MovieCreateForm handleFormSubmit={handleCreateMovie} />
            </Modal>
            <h1 className="my-4">Shop Name</h1>
            <div className="list-group">
                {
                    categories.map((category) => (
                        <a href="#" key={category.id} className="list-group-item">{category.name}</a>
                    ))
                }
            </div>
        </div>
    )
}

export default SideMenu;