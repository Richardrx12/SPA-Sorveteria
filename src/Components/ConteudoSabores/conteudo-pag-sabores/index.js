import React from "react";
import './style.css'

const ConteudoPagSabores = () => (
    <div className="conteudo-sabores">
        <h2> SABORES DE SORVETE </h2>
        <div className="container-cards">
            <div className="card">
                <img src="assets/sabor-oreo.png" />
                <h3> Sorvete de Oreo </h3>
                <p> Delicioso sorvete sabor Oreo. Uma explosão de sabor </p>
            </div>
            <div className="card">
                <img src="assets/sabor-pistache.png" />
                <h3> Sorvete Pistache </h3>
                <p> Cremoso sorvete sabor pistache com pedacinhos de semente </p>
            </div>
            <div className="card">
                <img src="assets/sabor-cookies-avela.png" />
                <h3> Sorvete Cookies & Avelã </h3>
                <p> O nosso melhor sorvete. Você vai adorar o sabor </p>
            </div>
            <div className="card">
            <img src="assets/sorbet-kiwi.png" />
                <h3> Sorvete de Kiwi </h3>
                <p> Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C. </p>
            </div>
            <div className="card">
            <img src="assets/sorbet-morango.png" />
                <h3> Sorvete De Morango </h3>
                <p> Sorvete de morango gourmet.Tradicional e saboroso </p>
            </div>
            <div className="card">
            <img src="assets/sorbet-limao.png" />
                <h3> Sorvete de Limão Siciliano </h3>
                <p> O incrível sorvete gourmet de limão siciliano vai te encantar </p>
            </div>
        </div>
        
    </div>
);

export default ConteudoPagSabores;