import { Route, Routes, BrowserRouter } from "react-router-dom";
import FilmeHomePage from '../pages/filmesHome';

const Rotas=()=>(
    <BrowserRouter>
        <Routes>
            <Route path='/filmes' element={<FilmeHomePage/>}></Route>
        </Routes>
    </BrowserRouter>
)

export default Rotas;