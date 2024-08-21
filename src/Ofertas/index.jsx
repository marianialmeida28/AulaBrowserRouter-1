import ListarProdutos from "../components/ListarProdutos"
import { useState } from "react"

export default function Ofertas () {
const [produtos, setProdutos] = useState([{
    nome: "Bird Box",
    genero: "Terror",
    classificacao: 16, 
    preco: 36.90,
},
{  nome: "Para todos garotos que já amei",
   genero: "Romance",
   classificacao: 12, 
   preco: 36.90,},

   {nome: "Top Gun",
   genero: "Ação",
   classificacao: 12, 
   preco: 36.90},

   {nome: "Divertidamente",
   genero: "Comedia",
   classificacao: 10, 
   preco: 36.90},

   {nome: "Piratas do Caribe",
   genero: "Ação",
   classificacao: 12, 
   preco: 36.90},

   {nome: "Missão Impossivel",
   genero: "Ação",
   classificacao: 12, 
   preco: 36.90},

   {nome: "Homen de Ferro",
   genero: "Ação",
   classificacao: 12, 
   preco: 36.90},

   {nome: "A Rua do Medo 1978",
   genero: "Terror",
   classificacao: 18, 
   preco: 36.90},

   {nome: "A Rua do Medo 1666",
   genero: "Terror",
   classificacao: 18, 
   preco: 36.90},

   {nome: "A Rua do Medo 1994",
   genero: "Terror",
   classificacao: 18, 
   preco: 36.90},
])

  return (
    <ListarProdutos ListarProdutos={produtos}/>
  )
}