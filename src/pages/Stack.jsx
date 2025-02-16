//Bootstrap
import {Container, Row} from "react-bootstrap";

//Components
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import {motion} from "motion/react";

function Stack() {

    return (
        <Container fluid className="py-4 px-0 pb-0">
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
            </main>
            <Footer/>
        </Container>
    )
}

export default Stack;