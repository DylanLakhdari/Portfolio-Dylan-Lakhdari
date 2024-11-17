import letter_d from "../assets/letter_d.svg";


function Header() {

    return (
        <header className="pb-3 mb-4 border-bottom">

            <nav>
                <a href="google.com"
                   className="d-flex align-items-center text-body-emphasis text-decoration-none">
                    <img src={letter_d} alt=""/>
                    <span className="fs-4">Dylan Lakhdari</span>
                </a>
            </nav>
        </header>
    )
}

export default Header