import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MovieDetail() {
    const { id } = useParams();
    const [film, setFilm] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/movies/${id}`)
            .then(res => res.json())
            .then(data => setFilm(data));
    }, [id]);

    if (!film) return <p>Loading...</p>;

    return (
        <>
            <div className="container py-4">
                <h1>{film?.title}</h1>
                <img src={`http://localhost:3000/movies_cover/${film.image}`} alt="" />
                <p>{film?.abstract}</p>
                <p>{film?.description}</p>

            </div>
            <section id="reviewsList">
                <div className="container">
                    <h3 className="mb-4">Reviews</h3>

                    {film?.reviews.map(review =>
                        <div className="card p-3 mb-3" key={review.id}>
                            <strong>{review.name}</strong>
                            <p>
                                {review.text}
                            </p>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
