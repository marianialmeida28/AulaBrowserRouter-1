import { useState } from "react"

export default function ListaProdutos({listaProdutos}){
    return(
        <div className="container">
            {listaProdutos.map((produto)=>
            <div key={produto.id} class="card">
                <img src= {produto.imagem}></img>
                <h3>{produto.nome}</h3>
                <h3>{produto.lançamento}</h3>
                <p>{produto.genero}</p>
                <p>{produto.classificacao}</p>
                <p>{produto.preco}</p>
            </div>    
                )}
        </div>
    );
}