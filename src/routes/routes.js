import { Route, Routes, BrowserRouter } from "react-router-dom";
import FilmeHomePage from '../pages/filmesHome';
import FilmePesquisaPage from "../pages/filmePesquisa";
import FilmeInformacoesPage from '../pages/filmeInfs';
import Page404 from '../pages/page404';

const Rotas=()=>(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<FilmeHomePage/>}></Route>
            <Route path='/filme/buscar/:nome' element={<FilmePesquisaPage/>}></Route>
            <Route path='/filme/:id' element={<FilmeInformacoesPage/>}></Route>
            <Route path='*' element={<Page404/>}></Route>
        </Routes>
    </BrowserRouter>
)

export default Rotas;