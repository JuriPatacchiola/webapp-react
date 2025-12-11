import { NavLink } from "react-router-dom"

export default function NavBar({ menu }) {


    return (

        <>
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#">Films Reviews App</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav-menu" aria-controls="main-nav-menu" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="main-nav-menu">
                        <ul className="navbar-nav me-auto mt-2 mb-lg-0">
                            {menu.map((item) =>

                                <li className="nav-item" key={item.id}>
                                    <NavLink className="nav-link" aria-current="page" to={item.link}>
                                        {item.Text}
                                    </NavLink>
                                </li>

                            )}


                        </ul>
                    </div>
                </div>
            </nav>



        </>
    )
}