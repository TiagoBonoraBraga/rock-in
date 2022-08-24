import "./Contato.css";
// import { useNavigate } from "react-router-dom";
import NavBar from "components/NavBar/NavBar";
import Footer from "components/Footer/Footer";
import contato from 'assets/icons/contato.jpg';

function Contato() {
  // const navigate = useNavigate();
  return (
    <div className="Home">
      <div className="navbar">
        <NavBar />
      </div>
      
      <div className="row1">
      <div className="card green">
      <img
            className="image"
            src={contato}
            width="500px"
            alt="Logo Github"
          />
        <h2>Contato</h2>
        <p>Fale Conosco</p>
      
          <p>Email: ogait.desenvolvedor.jr@gmail.com</p>
      </div>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
    
  );
}

export default Contato;
