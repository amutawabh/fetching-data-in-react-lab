
import StarshipCard from "./StarshipCard";

function StarshipList(props) {
    return (
        <section>
            <h3>Starships</h3>
            Number of results: {props.starships.length}
            {
            props.starships.length ? 
            displayStarships()
            :
            "Loading..."
        }
        </section>
    )

    function displayStarships() {
        return <ul>
            {props.starships.map((starship, index) => (
                <li key={index}>
                    <StarshipCard starship={starship} />
                </li>
            ))}
        </ul>;
    }
}

export default StarshipList
