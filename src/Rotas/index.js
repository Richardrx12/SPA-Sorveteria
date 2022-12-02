import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import PaginaInicial from "../Pages/PaginaInicial";
import PaginaSabores from "../Pages/PaginaSabores";
import PaginaSobre from "../Pages/PaginaSobre";

const Rotas = () => (

<BrowserRouter>
    <Routes>
        <Route exact path='/' element={ <PaginaInicial />} />  
        <Route path='/sabores' element={ <PaginaSabores />} /> 
        <Route path='/sobre' element={ <PaginaSobre /> } />  
    </Routes>

</BrowserRouter>

);

export default Rotas;