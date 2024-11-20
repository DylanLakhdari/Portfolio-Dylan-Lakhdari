//React-bootstrap
import {Button, Col, Container, Row} from "react-bootstrap";

//Components
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

//React-router-dom
import {Link} from "react-router-dom";

//Motion
import { motion } from "motion/react"

function Accueil() {

    return (
        <Container className="py-4 pb-0">
            <Header/>
            <main>
                {/*Div Dylan Lakhdari*/}
                <motion.div className="p-5 mb-4 bg-body-tertiary rounded-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 , duration: 1.8}}>
                    <Container fluid className="py-5">
                        <h1 className="display-5 fw-bold">Dylan Lakhdari</h1>
                        <Col md={8} className="fs-4">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, alias asperiores
                            consequuntur culpa delectus, dignissimos doloribus earum error esse expedita inventore
                            iusto labore maxime ratione temporibus unde veritatis, voluptate voluptates?
                        </Col>
                    </Container>
                </motion.div>
                <Row className="align-items-md-stretch">
                    <Col md={6}>
                        {/*Div projets*/}
                        <motion.div className="h-100 p-5 text-bg-dark rounded-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 , duration: 1.8}}>
                            <h2>Voir mes projets</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aspernatur
                                consequatur cum deleniti error, eum eveniet excepturi id impedit inventore laborum
                                libero minus non quis quo repellat sapiente sint voluptatum?
                            </p>
                            <Link to="/projets">
                                <Button variant={"outline-light"}>
                                    Voir les projets
                                </Button>
                            </Link>
                        </motion.div>
                    </Col>
                    <Col md={6}>
                        {/*Div skills*/}
                        <motion.div className="h-100 p-5 bg-body-tertiary border rounded-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 , duration: 1.8}}>
                            <h2>Mes compétences</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aspernatur
                                consequatur cum deleniti error, eum eveniet excepturi id impedit inventore laborum
                                libero minus non quis quo repellat sapiente sint voluptatum?
                            </p>
                            <Link to="/stack">
                                <Button variant={"outline-secondary"}>
                                    Voir mes compétences
                                </Button>
                            </Link>
                        </motion.div>
                    </Col>
                </Row>
            </main>
            <Footer/>
        </Container>
    )
}

export default Accueil;