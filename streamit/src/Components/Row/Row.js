import { useState, useEffect } from "react"

const Row = () => {
    const [ posters, setPosters ] = useState([]);
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=cd0b46709cc75cdb6870f1c20cc4638b&page=1")
        .then(res => res.json())
        .then(data => console.log(data))

    }, [])
    return (
        <div>
            <h1>Row</h1>
        </div>
    )
}

export default Row
