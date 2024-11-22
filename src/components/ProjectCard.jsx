//Bootstrap
import {Card, Button, Container, Row, Col} from "react-bootstrap";
import {motion} from "motion/react";

//Data
import {ProjectList} from "./Data.jsx";

// eslint-disable-next-line react/prop-types
function ProjectCard({id, title, tag, description}) {
    return (
        <Card id={id} className="shadow-sm">
            <Card.Img variant="top" src="src/assets/img/card_placeholder.png"/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description} {tag}
                </Card.Text>
                <Button variant="primary">Voir le projet</Button>
            </Card.Body>
        </Card>
    )
}

export function ProjectCardList() {
    return (
        <motion.div className="py-5 bg-body-tertiary" initial={{opacity: 0}} animate={{opacity: 8}}
                    transition={{delay: 1, duration: 1.8}}>
            <Container>
                <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {ProjectList.map((project) => (
                        <Col key={`col-${project.id}`}>
                            <ProjectCard
                                 id={project.id}
                                 title={project.title}
                                 tag={project.tag}
                                 description={project.description}>
                            </ProjectCard>
                        </Col>
                    ))}
                </Row>
            </Container>
        </motion.div>
    )
}
