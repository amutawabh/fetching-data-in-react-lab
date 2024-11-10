import { useState } from "react"

function StarshipSearch(props) {
    const [starship, setStarship] = useState('')

    const handleChange = (e) => {
        setStarship(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.fetchStarship(starship);
        setStarship('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="starship">Search Term: </label>
            <input
                type="text"
                id="starship"
                name="starship"
                value={starship}
                onChange={handleChange}
            />
            <button type="submit">Search</button>
        </form>
    )
}

export default StarshipSearch