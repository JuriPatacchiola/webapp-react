import axios from "axios";
import { useState } from "react";

export default function FormReview({ filmId, onReviewAdded }) {
    const initialFormState = {
        name: "",
        vote: "",
        text: ""
    };

    const [formData, setFormData] = useState(initialFormState);

    function handleSubmit(e) {
        e.preventDefault();

        axios
            .post(`http://localhost:3000/movies/${filmId}/review`, formData)
            .then(() => {
                setFormData(initialFormState);
                onReviewAdded();
            })
            .catch(err => console.error(err));
    }

    return (
        <section>
            <div className="container">
                <h3>Leave your review</h3>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            value={formData.name}
                            onChange={e =>
                                setFormData({ ...formData, name: e.target.value })
                            }
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Vote</label>
                        <select
                            className="form-select"
                            value={formData.vote}
                            onChange={e =>
                                setFormData({ ...formData, vote: Number(e.target.value) })
                            }
                            required >
                            {[0, 1, 2, 3, 4, 5].map(v => (
                                <option key={v} value={v}>{v}</option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Review</label>
                        <textarea
                            className="form-control"
                            rows="5"
                            value={formData.text}
                            onChange={e =>
                                setFormData({ ...formData, text: e.target.value })
                            }
                            required
                        />
                    </div>

                    <button className="btn btn-dark">Submit</button>
                </form>
            </div>
        </section>
    );
}
