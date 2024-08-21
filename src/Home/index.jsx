import { useState } from "react";
import Header from "../components/Header"
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import ListaProdutos from "../components/ListarProdutos"

export default function Home () {
    const [produtos, setProdutos] = useState([{
        nome: "A cinco passos de você",
        genero: "Romance",
        classificacao: 12,
        preco: 54.90},

    {nome: "Corra",
    genero: "Terror",
    classificacao: 16,
    preco:56.00 },

    {nome: "Fratura",
    genero: "Suspense",
    classificacao: 16,
    preco: 54.90},

    {nome: "Gente grande",
    genero: "Comedia",
    classificacao: 10, 
    preco: 45.90},

    {nome: "Em ritmo de fuga", 
    genero: "acao", 
    classificacao: 15, 
    preco: 50.99}
])

return (
    <>
    <Header/>
    <Carousel
    infiniteLoop
    useKetboardArrows
    autoPlay
    showArrows={true} 
    showstatus={false} 
    showThumbs={false} 
    dynamicHeight
    >
        <div>
            <img src="https://noticiasetecnologia.com/wp-content/uploads/2020/09/Netflix.jpg"/>
        </div>
        <div>
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiRzEpUL6n8mAR8K2yU9Qkv6DZCc9q1_vSNjxiyQQC_7N4OVSAAmPZ0N5_Ec5cp2nMiMTzr2FYeMCrSp7m7KoROjnbRl_0_qQ-Wb6kzYPj5iq8YFy_zhsomoCHKnqwIC3GnwF0yile4jZci/s1600/bright-banner.png"/>
        </div>
        <div>    
            <img src="https://todateen.com.br/wp-content/uploads/2021/07/rua-do-medo-parte-tres-netflix.jpg"/>
        </div>
        <div>    
             <img src="https://cinepop.com.br/wp-content/uploads/2018/12/birdbox_2.jpg"/>
        </div>
    </Carousel>
    <h1>Lista de Filmes</h1>
    <ListaProdutos ListaProdutos={produtos}/>
    </>
  )
}