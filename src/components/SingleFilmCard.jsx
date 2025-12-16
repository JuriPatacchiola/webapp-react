import { Link } from "react-router-dom";

export default function SingleFilmCard({ film }) {
    return (
        <div className="col mb-4">
            <Link to={`/movies/${film.id}`} className="text-decoration-none text-dark">
                <div className="card h-100 shadow-sm card-hover rounded-bottom">
                    <div className="image-wrapper" style={{ height: '580px', overflow: 'hidden' }}>
                        <img
                            src={`http://localhost:3000/movies_cover/${film.image}`}
                            alt={film.title}
                            className=" w-100 h-100"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>

                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title">{film.title}</h5>
                        <p className="card-text text-truncate">{film.abstract}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}
