import ListarProdutos from "../components/ListarProdutos"
import Header from "../components/Header"
import Footer from "../components/Footer" 
import { useState } from "react"

export default function Ofertas () {
const [produtos, setProdutos] = useState([{
    nome: "Bird Box",
    genero: "Terror",
    classificacao: "Classificação para 16 anos", 
    preco: 36.90,
    lançamento: 2018,
    imagem: "https://upload.wikimedia.org/wikipedia/pt/0/06/Bird_Box_-_filme_p%C3%B4ster.jpeg"
},
{  nome: "Para todos garotos que já amei",
   genero: "Romance",
   classificacao: "Classificação para 12 anos", 
   preco: 36.90,
   lançamento: 2018,
   imagem: "https://br.web.img3.acsta.net/pictures/18/07/27/13/53/2854483.jpg"},

   {nome: "Top Gun",
   genero: "Ação",
   classificacao: "Classificação para 16 anos", 
   preco: 36.90,
   lançamento: 1986,
   imagem: "https://m.media-amazon.com/images/I/71bliRrwW-L._AC_UF894,1000_QL80_.jpg"},

   {nome: "Divertidamente",
   genero: "Comedia",
   classificacao: "Classificação para 10 anos", 
   preco: 36.90,
   lançamento: 2024,
   imagem: "https://lumiere-a.akamaihd.net/v1/images/gife454xsaa8wv-_3e8071e7.jpeg"},

   {nome: "Piratas do Caribe",
   genero: "Ação",
   classificacao: "Classificação para 12 anos", 
   preco: 36.90,
   lançamento: 2017,
   imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTSQwWTmqBAvf1Tm2831YJsAgchtDMqe_kmg&s"},

   {nome: "Missão Impossivel",
   genero: "Ação",
   classificacao: "Classificação para 16 anos", 
   preco: 36.90,
   lançamento: 1996,
   imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2WzCY3cBpe7kOnrx7dooWmHnM40utf4OBCg&s"},

   {nome: "Homen de Ferro",
   genero: "Ação",
   classificacao:"Classificação para 12 anos", 
   preco: 36.90,
   lançamento: 2008,
   imagem: "https://br.web.img3.acsta.net/medias/nmedia/18/91/79/19/20163665.jpg"},

   {nome: "A Rua do Medo 1978",
   genero: "Terror",
   classificacao: "Classificação para 16 anos", 
   preco: 36.90,
   lançamento: 2021,
   imagem: "https://br.web.img3.acsta.net/pictures/21/07/07/16/37/0992833.jpg"},

   {nome: "A Rua do Medo 1666",
   genero: "Terror",
   classificacao: "Classificação para 16 anos", 
   preco: 36.90,
   lançamento: 2021,
   imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyaXFdHFAaAlpaj4i8maNLeloBXAIa0_cqcg&s"},

   {nome: "A Rua do Medo 1994",
   genero: "Terror",
   classificacao: "Classificação para 16 anos", 
   preco: 36.90,
   lançamento: 2021,
   imagem: "https://br.web.img3.acsta.net/pictures/21/06/28/15/53/0645594.jpg"},
])

  
  return (
    <div>
      <Header/>
      <ListarProdutos listaProdutos={produtos}/>
      <Footer/>
    </div>
  )
}