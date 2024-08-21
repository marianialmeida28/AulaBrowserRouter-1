import { useState } from "react"

export default function ListaProdutos({ListaProdutos}){
    return(
        <div>
            {listaProdutos.map((produto)=>
            <div>
                <p>{produto.nome}</p>
            </div>    
                )}
        </div>
    );
}