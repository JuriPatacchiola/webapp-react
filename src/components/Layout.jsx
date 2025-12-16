import { Outlet } from "react-router-dom";
import { useLoader } from "../context/LoaderContext"; // <- assicurati che il path sia corretto
import Footer from "./Footer";
import Header from "./Header";
import Loader from "./Loader";

export default function Layout() {
    const { isLoading } = useLoader(); // ora non da più errore

    return (
        <>
            <Loader visible={isLoading} />

            <Header />

            <main>
                <Outlet />
            </main>

            <Footer />
        </>
    );
}
