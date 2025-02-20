//Bootstrap
import {Container} from "react-bootstrap";

//Components
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Hero from "../components/Hero.jsx";
import {StackCardList} from "../components/StackCard.jsx";

function Stack() {

    return (<Container fluid className="py-4 px-0 pb-0">
        <Header/>
        <main>
            <Hero
                title="Mes compétences"
                description="Découvrez mes compétences."
            />
            <StackCardList/>
        </main>
        <Footer/>
    </Container>)
}

export default Stack;