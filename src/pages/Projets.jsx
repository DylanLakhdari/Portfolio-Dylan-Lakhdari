//Bootstrap
import {Container, Row, Col, Card, Button} from "react-bootstrap";

//Components
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

//Motion
import { motion } from "motion/react"

function Projets() {

    return (
        <Container className="py-4 pb-0">
            <Header/>
            <main>
                <Container className="py-5 text-center">
                    <Row className="py-lg-5">
                        <motion.div className="col" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 , duration: 1.8}}>
                            <h1>Mes projets</h1>
                            <p className="lead text-body-secondary">Liste non exhaustive de mes projets réalisés en solo
                                ou en groupe.</p>
                        </motion.div>
                    </Row>
                </Container>
                <motion.div className="py-5 bg-body-tertiary" initial={{ opacity: 0 }} animate={{ opacity: 8 }} transition={{ delay: 1 , duration: 1.8}}>
                    <Container>
                        <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            <Col>
                                <Card className="shadow-sm">
                                    <Card.Img variant="top" src="src/assets/img/card_placeholder.png"/>
                                    <Card.Body>
                                        <Card.Title>Titre projet</Card.Title>
                                        <Card.Text>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque ex facilis
                                            minus modi natus nobis quidem quod vero vitae voluptas.
                                        </Card.Text>
                                        <Button variant="primary">Voir le projet</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="shadow-sm">
                                    <Card.Img variant="top" src="src/assets/img/card_placeholder.png"/>
                                    <Card.Body>
                                        <Card.Title>Titre projet</Card.Title>
                                        <Card.Text>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque ex facilis
                                            minus modi natus nobis quidem quod vero vitae voluptas.
                                        </Card.Text>
                                        <Button variant="primary">Voir le projet</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="shadow-sm">
                                    <Card.Img variant="top" src="src/assets/img/card_placeholder.png"/>
                                    <Card.Body>
                                        <Card.Title>Titre projet</Card.Title>
                                        <Card.Text>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque ex facilis
                                            minus modi natus nobis quidem quod vero vitae voluptas.
                                        </Card.Text>
                                        <Button variant="primary">Voir le projet</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="shadow-sm">
                                    <Card.Img variant="top" src="src/assets/img/card_placeholder.png"/>
                                    <Card.Body>
                                        <Card.Title>Titre projet</Card.Title>
                                        <Card.Text>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque ex facilis
                                            minus modi natus nobis quidem quod vero vitae voluptas.
                                        </Card.Text>
                                        <Button variant="primary">Voir le projet</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="shadow-sm">
                                    <Card.Img variant="top" src="src/assets/img/card_placeholder.png"/>
                                    <Card.Body>
                                        <Card.Title>Titre projet</Card.Title>
                                        <Card.Text>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque ex facilis
                                            minus modi natus nobis quidem quod vero vitae voluptas.
                                        </Card.Text>
                                        <Button variant="primary">Voir le projet</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="shadow-sm">
                                    <Card.Img variant="top" src="src/assets/img/card_placeholder.png"/>
                                    <Card.Body>
                                        <Card.Title>Titre projet</Card.Title>
                                        <Card.Text>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque ex facilis
                                            minus modi natus nobis quidem quod vero vitae voluptas.
                                        </Card.Text>
                                        <Button variant="primary">Voir le projet</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </motion.div>
            </main>
            <Footer/>
        </Container>
    )
}

export default Projets;