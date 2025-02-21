// ModalContext.js
import {createContext, useContext, useState} from 'react';

//Bootstrap
import {Modal, Button, Badge, Container} from "react-bootstrap"

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
            <Container className="mt-4">
                <Badge variant="primary" className="px-2" href="#">{projectData.tag}</Badge>
            </Container>
            <Modal.Body>{projectData.description}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export function ProjectModalButton() {
    const {handleShow} = useModal();

    return (
        <Button variant="link" className="p-0" onClick={handleShow}>
            Launch demo modal
        </Button>
    );
}