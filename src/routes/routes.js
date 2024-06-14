import { Route, Routes, BrowserRouter } from "react-router-dom";
import FilmeHomePage from '../pages/filmesHomeHome';

const rotas=() =>{

    <BrowserRouter>
        <Routes>
            <Route path='/filmes' element={<FilmeHomePage/>}></Route>
        </Routes>
    </BrowserRouter>
}

export default rotas;