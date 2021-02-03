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

    const { categories, changeCategory, activeCategory } = props
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
                        <a
                            onClick={() => changeCategory(category.name)}
                            href="#" key={category.id} className={`list-group-item ${activeCategory === category.name ? 'active' : ''}`}>{category.name}</a>
                    ))
                }
            </div>
        </div>
    )
}

export default SideMenu;