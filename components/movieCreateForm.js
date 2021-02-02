import { useState, useEffect } from 'react'

const MovieCreateForm = (props) => {
    const [isInitialDataLoaded, setInitialData] = useState(false)

    const defaultData = {
        name: '',
        description: '',
        rating: '',
        image: '',
        cover: '',
        longDesc: ''
    }
    const formData = props.initialData ? { ...props.initialData } : defaultData

    const [form, setForm] = useState(formData)

    const handleChange = (e) => {
        const target = e.target
        const name = target.name

        setForm({
            ...form,
            [name]: target.value
        })
    }

    const handleGenreChange = (e) => {
        const { options } = e.target
        let value = []
        const optionsLength = options.length
        for (let i = 0; i < optionsLength; i++) {
            if (options[i].selected) {
                value.push(options[i].value)
            }
        }
        setForm({
            ...form,
            genre: value.toString()
        })
    }

    const submitForm = (e) => {
        props.handleFormSubmit({ ...form })
    }

    return (
        <form>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input required onChange={handleChange} name="name" value={form.name} type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Lord of the Rings" />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <input required onChange={handleChange} name="description" value={form.description} type="text" className="form-control" id="description" placeholder="Somewhere in Middle-earth..." />
            </div>
            <div className="form-group">
                <label htmlFor="description">Rating</label>
                <input required onChange={handleChange} name="rating" value={form.rating} type="number" max="5" min="0" className="form-control" id="rating" placeholder="3" />
                <small id="emailHelp" className="form-text text-muted">Max: 5, Min: 0 </small>
            </div>
            <div className="form-group">
                <label htmlFor="image">Image</label>
                <input required onChange={handleChange} name="image" value={form.image} type="text" className="form-control" id="image" placeholder="http://....." />
            </div>
            <div className="form-group">
                <label htmlFor="cover">Cover</label>
                <input required onChange={handleChange} name="cover" value={form.cover} type="text" className="form-control" id="cover" placeholder="http://......" />
            </div>
            <div className="form-group">
                <label htmlFor="longDesc">Long Description</label>
                <textarea onChange={handleChange} name="longDesc" value={form.longDesc} className="form-control" id="longDesc" rows="3"></textarea>
            </div>
            <div className="form-group">
                <label htmlFor="genre">Genre</label>
                <select onChange={handleGenreChange} multiple className="form-control" id="genre">
                    <option>drama</option>
                    <option>music</option>
                    <option>adventure</option>
                    <option>historical</option>
                    <option>action</option>
                </select>
            </div>
            <button type="button" onClick={submitForm} className="btn btn-primary">Submit</button>
        </form>
    )
}

export default MovieCreateForm