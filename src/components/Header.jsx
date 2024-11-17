//Img
import letter_d from "../assets/letter_d.svg";

//React-router-dom
import {Link} from "react-router-dom";

function Header() {

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