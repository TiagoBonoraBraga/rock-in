
import React, { useState, useEffect } from "react"; 
import { BandaService } from "services/BandaService";
import './BandaLista.css';


function BandaLista(){

    // ------- GetAll ------
    const [bandas, setBandas] = useState([]);

    const getLista = async () => {
        const response = await BandaService.getLista();
        setBandas(response);    
      };
    
      useEffect(() => {
        getLista();
      }, []);
    
    return(
        <div className="BandaLista">
            <div className="BandaListaItem">
                <div>
                    <div className='BandaListaItem__titulo'>Alma Negra</div>
                    <div className='BandaListaItem__estilo'>Heavy Metal</div>
                    <div className='BandaListaItem__descricao'>Banda de heavy metal</div>
                </div>
                <img className="BandaListaItem__foto" src={require("assets/images/almanegra.jpg")} alt="Banda Alma Negra" />
            </div>
        </div>
    
    );
}

export default BandaLista;