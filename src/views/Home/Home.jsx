import "./Home.css";
import BandaLista from "components/BandaLista/BandaLista";
import NavBar from "components/NavBar/NavBar";
import Footer from "components/Footer/Footer";

function Home() {
  return (
    <div className="Home">
      <div className="navbar">
        <NavBar />
      </div>
      <div className="Home__container">
        <BandaLista />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
