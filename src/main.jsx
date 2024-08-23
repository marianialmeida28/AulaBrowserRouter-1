import React from 'react' 
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import Home from '../src/Home' 
import Oferta from './Ofertas' 
import Produto from '../src/Produto'
import './globals.css'
ReactDOM.createRoot (document.getElementById('root')).render(
< React.StrictMode>
 < BrowserRouter>
  < Routes>
     <Route path='/' element={<Home/> }/>
     <Route path='/ofertas' element={ <Oferta/> }/>
     <Route path='/produtos' element={<Produto/> }/>
</Routes>
</BrowserRouter>
</React.StrictMode>,
)