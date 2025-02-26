// ModalContext.js
import {createContext, useContext, useState} from 'react';

//Bootstrap
import {Modal, Button, Badge, Container, Card, Stack} from "react-bootstrap"

//Bootstrap Icons
import {Github, PlayCircle} from "react-bootstrap-icons";

const ModalContext = createContext();
const useModal = () => useContext(ModalContext);

// eslint-disable-next-line react/prop-types
export function ModalProvider({children, projectData}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <ModalContext.Provider value={{show, handleClose, handleShow, projectData}}>
            {children}
        </ModalContext.Provider>
    );
}

export function ProjectModal() {
    const {show, handleClose, projectData} = useModal();

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>{projectData.title}</Modal.Title>
            </Modal.Header>
            <Card.Img variant="top" src="src/assets/img/card_placeholder.png"/>
            <Container className="mt-4">
                <Badge variant="primary" className="px-2" href="#">{projectData.tag}</Badge>
            </Container>
            <Modal.Body>{projectData.description}</Modal.Body>
            <Modal.Footer className="justify-content-center">
                <Stack gap={2} className="col-md-5 mx-auto">
                    <Button variant="primary"><PlayCircle className="me-2 mt-1 h4"/>Demo en ligne</Button>
                    <Button variant="outline-secondary"><Github className="me-2 mt-1 h4"/>Code source</Button>
                </Stack>
            </Modal.Footer>
        </Modal>
    );
}

export function ProjectModalButton() {
    const {handleShow} = useModal();

    return (
        <Button variant="link" className="p-0" onClick={handleShow}>
            Voir plus
        </Button>
    );
}