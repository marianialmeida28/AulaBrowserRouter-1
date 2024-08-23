import { useState } from "react";
import Header from "../components/Header"
import Footer from "../components/Footer" 
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import ListaProdutos from "../components/ListarProdutos"

export default function Home () {
    const [produtos, setProdutos] = useState([{
        nome: "A cinco passos de você",
        genero: "Romance",
        classificacao: "Classificação para 16 anos",
        preco: 54.90,
        lançamento: 2019,
        imagem: "https://m.media-amazon.com/images/I/81Q11TuUR3L._AC_UF1000,1000_QL80_.jpg"
    },

    {nome: "Corra",
    genero: "Terror",
    classificacao: "Classificação para 18 anos",
    preco:56.00,
    lançamento: 2017,
    imagem: "https://br.web.img3.acsta.net/pictures/17/04/19/21/08/577190.jpg"  },

    {nome: "Fratura",
    genero: "Suspense",
    classificacao: "Classificação para 16 anos",
    preco: 54.90,
    lançamento: 2019,
    imagem: "https://br.web.img3.acsta.net/pictures/19/09/16/11/03/3523781.jpg" },

    {nome: "Gente grande",
    genero: "Comedia",
    classificacao: "Classificação para 12 anos", 
    preco: 45.90,
    lançamento: 2010,
    imagem: "https://br.web.img3.acsta.net/pictures/210/299/21029996_20130821205722213.jpg"},

    {nome: "Em ritmo de fuga", 
    genero: "Ação", 
    classificacao: "Classificação para 16 anos", 
    preco: 50.99,
    lançamento: 2017,
    imagem: "https://br.web.img3.acsta.net/c_310_420/pictures/17/07/10/19/10/576841.jpg" }
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
    <ListaProdutos listaProdutos={produtos}/>
    <Footer/>
    </>
  )
}