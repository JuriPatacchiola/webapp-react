import axios from "axios"
import { useState } from "react"
export default function FormReview({ filmId }) {


    const initialFormState = {
        name: "",
        vote: "",
        review: ""
    }
    const [formData, setFromData] = useState(initialFormState)

    function handleSubmit(e) {
        e.preventDefault()
        console.log("From submitted", formData)
        axios.post(`http://localhost:3000/movies/${filmId}/review`, formData)
            .then((response) => {
                console.log("Review submitted successfuly", response.data);
                setFromData(initialFormState)
            })
            .catch((error) => {
                console.error("Error submitting review", error)
            })
    }

    return (
        <>
            <section>
                <div className="container">
                    <h3>Leave your review</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label"></label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                id="name"
                                aria-description="nameHelper"
                                placeholder="Jiovanni Alfonce"
                                value={formData.name}
                                onChange={(e) => setFromData({ ...formData, name: e.target.value })}
                            />
                            <small id="nameHelper" className="form-text text-muted">type your name to leave your review</small>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="vote" className="form-label">Vote</label>
                            <select
                                className="from-select"
                                name="vote"
                                id="vote"
                                value={formData.vote}
                                onChange={(e) => setFromData({ ...formData, vote: e.target.value })}>

                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="review" className="from-label">Review</label>
                            <textarea
                                className="form-control"
                                name="review"
                                id="review"
                                rows="5"
                                placeholder="this film is ok"
                                value={formData.review}
                                onChange={(e) => setFromData({ ...formData, review: e.target.value })}
                            >

                            </textarea>
                        </div>

                        <button type="submit" className="btn btn-dark">
                            submit
                        </button>
                    </form>
                </div>
            </section>

        </>
    )
}