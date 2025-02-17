//Bootstrap
import {Container, Row,} from "react-bootstrap";

//Components
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

//Motion
import {motion} from "motion/react";
import {StackCardList} from "../components/StackCard.jsx";

function Stack() {

    return (<Container fluid className="py-4 px-0 pb-0">
            <Header/>
            <main>
                <Container className="py-5 text-center">
                    <Row className="py-lg-5">
                        <motion.div className="col" initial={{opacity: 0}} animate={{opacity: 1}}
                                    transition={{delay: 0.4, duration: 1.8}}>
                            <h1>Mes compétences</h1>
                            <p className="lead text-body-secondary">Découvrez mes compétences</p>
                        </motion.div>
                    </Row>
                </Container>
                <StackCardList></StackCardList>
            </main>
            <Footer/>
        </Container>)
}

export default Stack;