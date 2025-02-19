//Bootstrap
import {ListGroup, ListGroupItem} from "react-bootstrap";

//Bootstrap-icons
import {FiletypePdf, FiletypeDocx} from "react-bootstrap-icons";

function Download() {
    return (
        <ListGroup className="shadow-sm mb-4">
            <ListGroupItem className="bg-body-tertiary">
                <h5 className="list-group-item-heading m-0">Télécharger mon CV</h5>
            </ListGroupItem>
            <ListGroup.Item className="fw-semibold">
                <FiletypePdf className="me-2 mt-1 text-primary h4"/>Format PDF
            </ListGroup.Item>
            <ListGroup.Item className="fw-semibold">
                <FiletypeDocx className="me-2 mt-1 text-primary h4"/>Format DOCX
            </ListGroup.Item>
        </ListGroup>
    )
}

export default Download;