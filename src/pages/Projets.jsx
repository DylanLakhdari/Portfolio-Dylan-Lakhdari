//Bootstrap
import {Container} from "react-bootstrap";

//Components
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import {ProjectCardList} from "../components/ProjectCard.jsx";
import Hero from "../components/Hero.jsx";

function Projets() {

    return (
        <Container fluid className="py-4 px-0 pb-0">
            <Header/>
            <main>
                <Hero title="Mes projets" description="Liste non exhaustive de mes projets réalisés en solo ou en groupe."/>
                <ProjectCardList/>
            </main>
            <Footer/>
        </Container>
    )
}

export default Projets;