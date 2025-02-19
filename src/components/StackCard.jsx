//Bootstrap
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    CardText,
    CardTitle,
    Col,
    Container,
    ListGroup,
    Row,
    Tab
} from "react-bootstrap";

//Motion
import {motion} from "motion/react";

//Data
import {StackList} from "./Data.jsx";

//Component
import Download from "./Download.jsx";

// eslint-disable-next-line react/prop-types
function StackCard({id, title, tag, description}) {
    return (
        <Card id={id}>
            <CardHeader className="h4">{tag}</CardHeader>
            <CardBody>
                <CardTitle>
                    {title}
                </CardTitle>
                <CardText>
                    {description}
                </CardText>
                <Button variant="primary">Lorem</Button>
            </CardBody>
        </Card>
    )
}

export function StackCardList() {
    return (
        <motion.div className="py-5 bg-body-tertiary" initial={{opacity: 0}} animate={{opacity: 8}}
                    transition={{delay: 1, duration: 1.8}}>
            <Container>
                <h3 className="list-group-item-heading mb-3">Catégorie :</h3>
                <Tab.Container defaultActiveKey="0">
                    <Row>
                        <Col sm={4}>
                            <ListGroup className="shadow-sm mb-4">
                                {StackList.map((stack, index) => (
                                    <ListGroup.Item
                                        key={`list-${stack.id}`}
                                        eventKey={index.toString()}
                                        action
                                        className="p-3"
                                    >
                                        {stack.tag}
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                            <div className="d-none d-sm-block">
                                <Download></Download>
                            </div>
                        </Col>
                        <Col sm={8}>
                            <Tab.Content className="shadow-sm mb-4">
                                {StackList.map((stack, index) => (
                                    <Tab.Pane eventKey={index.toString()} key={`pane-${stack.id}`}>
                                        <StackCard
                                            id={stack.id}
                                            title={stack.title}
                                            tag={stack.tag}
                                            description={stack.description}
                                        />
                                    </Tab.Pane>
                                ))}
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
                <div className="d-block d-sm-none">
                    <Download></Download>
                </div>
            </Container>
        </motion.div>
    )
}