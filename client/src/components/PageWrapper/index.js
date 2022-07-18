import { Outlet } from 'react-router-dom';
import { Header, Footer } from "..";
import "./PageWrapper.css";

const PageWrapper = () => {
    return (
        <main className="page-wrapper">
            <Header />
            <article>
                <Outlet />
            </article>
            <Footer />
        </main>
    )
}

export default PageWrapper;