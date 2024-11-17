//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//React-router-dom
import {BrowserRouter, Routes, Route} from "react-router-dom";

//Pages
import Accueil from "./pages/Accueil.jsx";
import Projets from "./pages/Projets.jsx";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Accueil/>} />
                <Route path="/projets" element={<Projets/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
