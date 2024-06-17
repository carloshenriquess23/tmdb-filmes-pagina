import { Route, Routes, BrowserRouter } from "react-router-dom";
import FilmeHomePage from '../pages/filmesHome';
import FilmePesquisaPage from "../pages/filmePesquisa/index.";

const Rotas=()=>(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<FilmeHomePage/>}></Route>
            <Route path='/filme/buscar/:nome'></Route>
        </Routes>
    </BrowserRouter>
)

export default Rotas;