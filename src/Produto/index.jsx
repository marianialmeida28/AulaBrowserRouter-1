import { useState } from "react"
import ListarProdutos from "../components/ListarProdutos"

export default function Produtos () {
const [produtos, setProdutos] = useState([
    {nome: "Barraca do Beijo",
    genero: "Romance",
    classificacao: 12,
    preco:45.00 },

    {nome: "Rainha Charlot",
    genero: "Romance",
    classificacao: 16,
    preco:56.00 },

    {nome: "Ricos de amor",
    genero: "Romance",
    classificacao: 16,
    preco:45.00 },

    {nome: "Invocação do mal",
    genero: "Terror",
    classificacao: 18,
    preco:42.00 },

    {nome: "Continência ao amor",
    genero: "Romance",
    classificacao: 12,
    preco:56.00 },

    {nome: "Através da minha janela",
    genero: "Romance",
    classificacao: 16,
    preco:56.00 },

    {nome: "A sociedade da neve",
    genero: "Suspense",
    classificacao: 18,
    preco:56.00 },

    {nome: "Enolla Homes",
    genero: "Ação",
    classificacao: 12,
    preco:45.00 },

    {nome: "Corra",
    genero: "Terror",
    classificacao: 16,
    preco:56.00 },

    {nome: "Corra",
    genero: "Terror",
    classificacao: 16,
    preco:56.00 },

    {nome: "Corra",
    genero: "Terror",
    classificacao: 16,
    preco:56.00 },

    {nome: "Corra",
    genero: "Terror",
    classificacao: 16,
    preco:56.00 },

    {nome: "Corra",
    genero: "Terror",
    classificacao: 16,
    preco:56.00 },

    {nome: "Corra",
    genero: "Terror",
    classificacao: 16,
    preco:56.00 },

    {nome: "pare",
    genero: "Terror",
    classificacao: 16,
    preco:56.00 }

])
return (
    <ListarProdutos ListarProdutos={produtos}/>
  )
}

