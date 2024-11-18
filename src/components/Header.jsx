//Img
import letter_d from "../assets/letter_d.svg";

//React-router-dom
import {Link, useLocation} from "react-router-dom";

//Bootstrap
import {Breadcrumb} from "react-bootstrap";

//React-helmet
import {Helmet} from "react-helmet";

function Header() {

    const location = useLocation();

    const slug = location.pathname
    const titleSlug = slug.charAt(1).toUpperCase() + slug.slice(2)

    if (location.pathname !== "/") {
        return (
            <header className="pb-1 mb-4 border-bottom">
                <Helmet>
                    <title>{titleSlug} - Dylan Lakhdari</title>
                </Helmet>
                <Breadcrumb className="align-items-baseline container-no-margin">
                    <Link to="/" className="d-flex align-items-center text-body-emphasis text-decoration-none">
                        <img src={letter_d} alt=""/>
                        <span className="fs-4">Dylan Lakhdari</span>
                    </Link>
                    <span className="d-flex align-items-center mx-2">-</span>
                    <Breadcrumb.Item className="my-auto"><Link to="/">Accueil</Link></Breadcrumb.Item>
                    <Breadcrumb.Item className="my-auto" active>{titleSlug}</Breadcrumb.Item>
                </Breadcrumb>
            </header>
        )
    }

    return (
        <header className="pb-1 mb-4 border-bottom">
            <Helmet>
                <title>Dylan Lakhdari - Accueil</title>
            </Helmet>
            <Breadcrumb className="align-items-baseline" style={{marginBottom: 0}}>
                <Link to="/" className="d-flex align-items-center text-body-emphasis text-decoration-none">
                    <img src={letter_d} alt=""/>
                    <span className="fs-4">Dylan Lakhdari</span>
                </Link>
                <span className="d-flex align-items-center mx-2">-</span>
                <Breadcrumb.Item className="my-auto" active>Accueil</Breadcrumb.Item>
            </Breadcrumb>
        </header>
    )
}

export default Header