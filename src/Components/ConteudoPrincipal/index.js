import React from "react";
import './style.css';


import SecaoBanner from "./SecaoBanner";
import SecaoSabores from "./SecaoSabores";
import SecaoEvento from "./SecaoEventos";
import SecaoSobre from "./SecaoSobre";


const ConteudoPrincipal = () => (
    <div className="conteudo-principal-home">
        < SecaoBanner />
        < SecaoSabores />
        < SecaoEvento />
        < SecaoSobre />
    </div>
);

export default ConteudoPrincipal;