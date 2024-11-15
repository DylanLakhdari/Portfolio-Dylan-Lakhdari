import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";
import letter_d from "./assets/letter_d.svg";

function App() {

    return (
        <>
            <Container className="py-4">
                <main>
                    <header className="pb-3 mb-4 border-bottom">
                        <a href="google.com"
                           className="d-flex align-items-center text-body-emphasis text-decoration-none">
                            <img src={letter_d} alt=""/>
                            <span className="fs-4">Dylan Lakhdari</span>
                        </a>
                    </header>
                </main>
            </Container>
        </>)
}

export default App
