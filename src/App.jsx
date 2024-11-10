import { useState, useEffect } from "react";
import * as starshipService from "./services/starshipService"
import StarshipSearch from "./components/StarshipSearch";
import StarshipList from "./components/StarshipList";
import './App.css'

// src/App.jsx

const App = () => {
  const [starships, setStarships] = useState([])

  useEffect(() => {
    const fetchDefaultStarship = async () => {
      const data = await starshipService.show('Death')
      setStarships(data)      
    }
    fetchDefaultStarship();
  }, [])

  const fetchStarship = async (id) => {
    const data = await starshipService.show(id)
    setStarships(data)
  }

  return (
    <main>
      <h1>Star Wars API</h1>
      <h3>Search</h3>
      <StarshipSearch fetchStarship={fetchStarship} />
      <StarshipList starships={starships} />
    </main>
  );
}

export default App