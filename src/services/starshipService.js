const BASE_URL = "https://swapi.dev/api/starships/"

const show = async (name) => {
    try {
        const querySearch = `?search=${name}`
        const res = await fetch(BASE_URL + querySearch)
        const data = await res.json();
        return data.results;
    } catch (error) {
        console.log(error);
    }
}

export { show }