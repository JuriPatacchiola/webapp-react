import SingleFilmCard from './SingleFilmCard'

export default function FilmsList({ films }) {

    return (

        <>
            <section className="my-4 py-3">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3">
                        {
                            films.map(film =>

                                <SingleFilmCard film={film} key={film.id} />
                            )
                        }
                    </div>
                </div>
            </section>
        </>
    )
}