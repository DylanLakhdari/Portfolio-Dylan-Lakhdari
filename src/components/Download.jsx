//Bootstrap
import {ListGroup, ListGroupItem} from "react-bootstrap";

//Bootstrap-icons
import {FiletypePdf, FiletypeDocx} from "react-bootstrap-icons";
import {DownloadList} from "./Data.jsx";

// eslint-disable-next-line react/prop-types
function DownloadCard({id, title, icon, filePath, fileName}) {
    return (
    <ListGroup.Item key={id} className="fw-semibold">
        <a href={filePath} download={fileName}> <FiletypeDocx
            className="me-2 mt-1 text-primary h4"/>{title}
        </a>
    </ListGroup.Item>
)
}

function Download() {
    return (
        <ListGroup className="shadow-sm mb-4">
            <ListGroupItem className="bg-body-tertiary">
                <h5 className="list-group-item-heading m-0">Télécharger mon CV</h5>
            </ListGroupItem>
            {DownloadList.map((download) => (
                // eslint-disable-next-line react/jsx-key
                <DownloadCard
                    id={download.id}
                    title={download.title}
                    icon={download.icon}
                    filePath={download.filePath}
                    fileName={download.fileName}
                />
            ))}
        </ListGroup>
    )
}

export default Download;