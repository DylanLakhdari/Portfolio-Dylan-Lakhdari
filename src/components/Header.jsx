//Img
import letter_d from "../assets/letter_d.svg";

//React-router-dom
import {Link, useLocation} from "react-router-dom";

//Bootstrap
import {Breadcrumb} from "react-bootstrap";

function Header() {

    const location = useLocation();

    const slug = location.pathname
    const slicedSlug = slug.slice(1)

    if (location.pathname !== "/") {
        return (
            <header className="pb-3 mb-4 border-bottom">
                <Breadcrumb className="align-items-baseline">
                    <Link to="/" className="d-flex align-items-center text-body-emphasis text-decoration-none">
                        <img src={letter_d} alt=""/>
                        <span className="fs-4">Dylan Lakhdari</span>
                    </Link>
                    <span className="d-flex align-items-center mx-2">-</span>
                    <Breadcrumb.Item className="my-auto" href="#"><Link to="/">Accueil</Link></Breadcrumb.Item>
                    <Breadcrumb.Item className="my-auto" active>{slicedSlug}</Breadcrumb.Item>
                </Breadcrumb>
            </header>
        )
    }

    return (
        <header className="pb-3 mb-4 border-bottom">

            <nav>
                <Link to="/"
                      className="d-flex align-items-center text-body-emphasis text-decoration-none">
                    <img src={letter_d} alt=""/>
                    <span className="fs-4">Dylan Lakhdari</span>
                </Link>
            </nav>
        </header>
    )
}

export default Header