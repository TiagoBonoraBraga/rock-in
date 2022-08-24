import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import Cadastro from "views/Cadastro/Cadastro";
import Contato from "views/Contato/Contato";

function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Cadastro" element={<Cadastro />} />
                <Route path="/Contato" element={<Contato />} />
            </Routes>
        </BrowserRouter>
    )
}
export default App;