//Bootstrap
import {Container, Row} from "react-bootstrap";

//Motion
import {motion} from "motion/react";

function Hero({title="Titre", description="Description"}) {
    return (
        <Container className="py-5 text-center">
            <Row className="py-lg-5">
                <motion.div className="col" initial={{opacity: 0}} animate={{opacity: 1}}
                            transition={{delay: 0.4, duration: 1.8}}>
                    <h1>{title}</h1>
                    <p className="lead text-body-secondary">{description}</p>
                </motion.div>
            </Row>
        </Container>
    )
}

export default Hero