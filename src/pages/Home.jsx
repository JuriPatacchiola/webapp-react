import axios from "axios"
import { useEffect, useState } from "react"
import FilmsList from "../components/FilmsList"

export default function Home() {

    const [films, setFilms] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/movies')
            .then(response => {
                console.log(response);
                setFilms(response.data)
            }).catch(err => {
                console.log(err.message)
            })
    }, [])

    return (
        <>
            <div className="p-5 md-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Films Reviews App</h1>
                    <p className="col-md-8 fs-4">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum in rerum ea labore modi, aperiam aliquam illum consequuntur dolor. Ducimus facilis aliquam nisi nam non inventore dicta qui similique a!
                    </p>
                    <button className="btn btn-primary btn-lg" type="button">
                        Reed more
                    </button>
                </div>
            </div>

            <FilmsList films={films} />

        </>
    )
}