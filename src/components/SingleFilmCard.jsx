import { Link } from "react-router-dom";

export default function SingleFilmCard({ film }) {


    return (
        <>
            <div className="col">
                <Link to={`/movies/${film.id}`} className="text-decoration-none">
                    <div className="card">
                        <img src={film.image} alt="" className="card-img-top" />
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