import "./NavBar.css";
import { useNavigate } from "react-router-dom";
import {BandaService} from "services/BandaService";


function NavBar() {
  
  const navigate = useNavigate();

  const create = async () => {
    await BandaService.create();
    navigate('/cadastro')
  }
  return (
    <nav class="bg hover-circulo">
      <a href="/" title="Página Inícial">Home</a>
      <a href="/cadastro" title="cadastrar">Cadastrar</a>
      <a href="/contato" title="Contato">Contato</a>
    </nav>
  );
}

export default NavBar;
