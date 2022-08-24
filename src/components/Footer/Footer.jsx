import "./Footer.css";
import git from 'assets/icons/git.jpg';
import linkedin from 'assets/icons/linkedin.jpg';

function Footer() {
  return (
    <footer className="footer-div">
      <div className="footer-right">
        
        <a href="https://github.com/TiagoBonoraBraga">
        <img
            src={git}
            width="50px"
            alt="Logo Github"
          />
        </a>
        <a href="https://www.linkedin.com/in/tiagocode/">
        <img
            src={linkedin}
            width="50px"
            alt="Logo Linkedin"
          />
        </a>
      </div>

      <div className="footer-left">

        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#">Cadastrar</a>
          <a href="#">Contato</a>
        </div>

        <p>Ogait Ashtar &copy; 2022</p>

      </div>
    </footer>
  );
}

export default Footer;
