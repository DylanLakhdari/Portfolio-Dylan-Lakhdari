//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";
import {Col} from "react-bootstrap";
import {Row} from "react-bootstrap";
import {Button} from "react-bootstrap";

//Components
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {

    return (
        <>
            <Container className="py-4">
                    <Header />
                <main>
                    <div className="p-5 mb-4 bg-body-tertiary rounded-3">
                        <Container fluid className="py-5">
                            <h1 className="display-5 fw-bold">Dylan Lakhdari</h1>
                            <Col md={8} className="fs-4">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, alias asperiores
                                consequuntur culpa delectus, dignissimos doloribus earum error esse expedita inventore
                                iusto labore maxime ratione temporibus unde veritatis, voluptate voluptates?
                            </Col>
                        </Container>
                    </div>
                    <Row className="align-items-md-stretch">
                        <Col md={6}>
                            <div className="h-100 p-5 text-bg-dark rounded-3">
                                <h2>Voir mes projets</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aspernatur
                                    consequatur cum deleniti error, eum eveniet excepturi id impedit inventore laborum
                                    libero minus non quis quo repellat sapiente sint voluptatum?
                                </p>
                                <Button variant={"outline-light"}>
                                    Voir les projets
                                </Button>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="h-100 p-5 bg-body-tertiary border rounded-3">
                                <h2>Mes compétences</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aspernatur
                                    consequatur cum deleniti error, eum eveniet excepturi id impedit inventore laborum
                                    libero minus non quis quo repellat sapiente sint voluptatum?
                                </p>
                                <Button variant={"outline-secondary"}>
                                    Voir mes compétences
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </main>
                <Footer/>
            </Container>
        </>
    )
}

export default App
