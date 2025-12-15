import { Link } from "react-router-dom";

export default function SingleFilmCard({ film }) {


    return (
        <>
            <div className="mx-auto" style={{ width: '18rem' }}>
                <Link to={`/movies/${film.id}`} className="text-decoration-none">
                    <div className="card h-100" style={{ width: '18rem' }} >
                        <img src={`http://localhost:3000/movies_cover/${film.image}`} alt="" className="card-img-top h-100" />
                        <div className="card-body">
                            <h3 className="card-title">
                                {film.title}
                            </h3>
                            <p>{film.abstract}</p>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}