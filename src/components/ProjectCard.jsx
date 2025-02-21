//Bootstrap
import {Card, Container, Row, Col, Badge} from "react-bootstrap";

//Motion
import {motion} from "motion/react";

//Data
import {ProjectList} from "./Data.jsx";
import {ModalProvider, ProjectModal, ProjectModalButton} from "./ProjectModal.jsx";

// eslint-disable-next-line react/prop-types
function ProjectCard({id, title, tag, description}) {

    const projectData = { id, title, tag, description };

    return (
        <ModalProvider projectData={projectData}>
            <ProjectModal/>
            <Card id={id} className="shadow-sm">
                <a href="#">
                    <Card.Img variant="top" src="src/assets/img/card_placeholder.png"/>
                </a>
                <Card.Body>
                    <Badge variant="primary" className="px-2" href="#">{tag}</Badge>
                    <Card.Title className="my-2"><a href="#">{title}</a></Card.Title>
                    <Card.Text className="small text-muted">
                        {description} {tag}
                    </Card.Text>
                    <ProjectModalButton/>
                </Card.Body>
            </Card>
        </ModalProvider>

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
