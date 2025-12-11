import axios from "axios"
import { useEffect, useState } from "react"

export default function Home() {

    const [films, setFilms] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/movies')
            .then(response => {
                console.log(response)
            }).catch(err => {
                console.log(err.message)
            })
    }, [])

    return (
        <>
            <h1>Wlecome to or Films reviews app</h1>
        </>
    )
}