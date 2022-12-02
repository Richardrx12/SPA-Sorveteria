import React from "react";
import './rodape.css'

const Rodape = () => (
    <footer>
        <div className="container-rodape">

            <div className="logo-rodape"> 
                <img src="assets/logo.png" height='150px' />
            </div>
            <div className="endereco">
                <h3> ENDEREÇO </h3>
                <address>Av. Bernardino de Campos, 98 </address>
                <p> São Paulo, SP 12345-678 </p>
            </div>
            <div className="endereco">
                <h3> CONTATO </h3>
                <p> info@meusite.com </p>
                <p> Tel: (11) 3456-7890 </p>    
            </div>
            <div className="endereco">
                <h3> HORÁRIOS </h3>
                <p> ABERTO TODOS OS DIAS </p>
                <p> 10:00 - 22:00 </p>   
            </div>
        </div>
        <div className="aux"> 
            <p> Gelateria. Orgulhosamente desenvolvido por Richard Linhares</p>
        </div>
    </footer>
);

export default Rodape;