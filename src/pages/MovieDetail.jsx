import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FormReview from "../components/FormReview";
import { useLoader } from "../context/LoaderContext";

export default function MovieDetail() {
    const { id } = useParams();
    const [film, setFilm] = useState(null);
    const { show, hide } = useLoader();

    function fetchFilm() {
        show();
        fetch(`http://localhost:3000/movies/${id}`)
            .then(res => res.json())
            .then(data => setFilm(data))
            .catch(err => console.error(err))
            .finally(() => hide());
    }

    useEffect(() => {
        fetchFilm();
    }, [id]);

    if (!film) return null;

    return (
        <>
            <div className="container py-4">
                <h1 className="mb-4">{film.title}</h1>

                <div className="row mb-4">
                    <div className="col-md-4">
                        <img
                            src={`http://localhost:3000/movies_cover/${film.image}`}
                            alt={film.title}
                            className="img-fluid rounded shadow"
                            style={{ maxHeight: "400px", objectFit: "cover" }}
                        />
                    </div>
                    <div className="col-md-8 d-flex flex-column justify-content-center">
                        <p className="fw-bold">{film.abstract}</p>
                        <p><i className="bi bi-person-badge"></i> {film.director}</p>
                        <p>{film.genre}</p>
                    </div>
                </div>
            </div>

            <hr />

            <FormReview filmId={id} onReviewAdded={fetchFilm} />

            <hr />

            <section id="reviewsList">
                <div className="container">
                    <h3 className="mb-4">Reviews</h3>

                    {film.reviews && film.reviews.length > 0 ? (
                        <div className="row">
                            {film.reviews.map(review => (
                                <div className="col-md-6" key={review.id}>
                                    <div className="card p-3 mb-3 shadow-sm">
                                        <div className="d-flex align-items-center mb-2">
                                            <img
                                                src={`https://i.pravatar.cc/50?u=${review.id}`}
                                                alt={review.name}
                                                className="rounded-circle me-3"
                                                style={{ width: "50px", height: "50px", objectFit: "cover" }}
                                            />
                                            <strong>{review.name}</strong>
                                        </div>
                                        <p>{review.text}</p>
                                        <small className="text-muted">Vote: {review.vote}</small>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>No reviews yet</p>
                    )}
                </div>
            </section>
        </>
    );
}
