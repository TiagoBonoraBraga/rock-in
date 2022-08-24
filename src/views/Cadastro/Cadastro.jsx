import "./Cadastro.css";
import NavBar from "components/NavBar/NavBar";
import Footer from "components/Footer/Footer";

function Cadastro() {
  return (
    <div className="Home">
      <div className="navbar">
        <NavBar />
      </div>
      <div>
        <div className="container">
          <form>
            <div className="row">
              <div className="col-25">
                <label for="fname">Nome</label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="Digite o nome da banda..."
                />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label for="lname">Estilo</label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  id="lname"
                  name="lastname"
                  placeholder="Digite o estilo da banda..."
                />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label for="subject">Descrição</label>
              </div>
              <div className="col-75">
                <textarea
                  id="subject"
                  name="subject"
                  placeholder="Digite a descrição da banda..."
                ></textarea>
              </div>
            </div>
            <div className="col-25"></div>

            <div className="col-75">
              <label for="arquivo">Selecionar Foto</label>
              <input type="file" name="foto" id="foto" />
            </div>

            <div className="row">
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Cadastro;
