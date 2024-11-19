//Bootstrap
import {Container} from "react-bootstrap";

//Components
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

function Stack() {

    return (
        <Container className="py-4 pb-0">
            <Header />
            <main>

            </main>
            <Footer/>
        </Container>
    )
}

export default Stack;