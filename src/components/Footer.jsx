//Bootstrap
import {Container} from "react-bootstrap";

function Footer() {

    let currdate = new Date();
    let year = currdate.getFullYear();

    return (
        <Container>
            <footer className="p-2 mt-4 text-body-secondary border-top text-center">
                © {year} - Dylan Lakhdari
            </footer>
        </Container>
    )
}

export default Footer;