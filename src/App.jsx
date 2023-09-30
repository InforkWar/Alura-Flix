import Header from './componentes/Header/Header.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Formulario from './paginas/Formulario.jsx';
import Home from './paginas/Home.jsx';
import Page404 from './paginas/Page404.jsx';
import Footer from './componentes/Footer/Footer.jsx';
import NuevaCategoria from './paginas/NuevaCategoria.jsx';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

function App() {

  const [videos, setVideos] = useState([
    {
    id: uuid(),
    titulo: "Descubre el poder de Python",
    url: "https://www.youtube.com/watch?v=BxcMMgmLKTU&ab_channel=AluraLatam",
    imagen: "https://i.ytimg.com/vi/BxcMMgmLKTU/maxresdefault.jpg",
    categoria: "Back End",
    descri: "",
    },
    {
      id: uuid(),
      titulo: "Prepárate para el cambio",
      url: "https://www.youtube.com/watch?v=hqBddtoMn-k&ab_channel=AluraLatam",
      imagen: "https://i.ytimg.com/vi/hqBddtoMn-k/maxresdefault.jpg",
      categoria: "Back End",
      descri: "",
      },
      {
        id: uuid(),
        titulo: "Prepárate para el cambio",
        url: "https://www.youtube.com/watch?v=hqBddtoMn-k&ab_channel=AluraLatam",
        imagen: "https://i.ytimg.com/vi/hqBddtoMn-k/maxresdefault.jpg",
        categoria: "Back End",
        descri: "",
        },
        {
          id: uuid(),
          titulo: "Prepárate para el cambio",
          url: "https://www.youtube.com/watch?v=hqBddtoMn-k&ab_channel=AluraLatam",
          imagen: "https://i.ytimg.com/vi/hqBddtoMn-k/maxresdefault.jpg",
          categoria: "Back End",
          descri: "",
          },
    {
      id: uuid(),
      titulo: "Prepárate para el cambio",
      url: "https://www.youtube.com/watch?v=hamjv6G5shY&ab_channel=AluraLatam",
      imagen: "https://i.ytimg.com/vi/hamjv6G5shY/maxresdefault.jpg",
      categoria: "Design & UX",
      descri: "",
    },
    {
      id: uuid(),
      titulo: "Prepárate para el cambio",
      url: "https://www.youtube.com/watch?v=hamjv6G5shY&ab_channel=AluraLatam",
      imagen: "https://i.ytimg.com/vi/hamjv6G5shY/maxresdefault.jpg",
      categoria: "Design & UX",
      descri: "",
    },
    {
      id: uuid(),
      titulo: "Prepárate para el cambio",
      url: "https://www.youtube.com/watch?v=hamjv6G5shY&ab_channel=AluraLatam",
      imagen: "https://i.ytimg.com/vi/hamjv6G5shY/maxresdefault.jpg",
      categoria: "Design & UX",
      descri: "",
    },
    {
      id: uuid(),
      titulo: "Prepárate para el cambio",
      url: "https://www.youtube.com/watch?v=hamjv6G5shY&ab_channel=AluraLatam",
      imagen: "https://i.ytimg.com/vi/hamjv6G5shY/maxresdefault.jpg",
      categoria: "Mobile",
      descri: "",
    },
    {
      id: uuid(),
      titulo: "Prepárate para el cambio",
      url: "https://www.youtube.com/watch?v=hamjv6G5shY&ab_channel=AluraLatam",
      imagen: "https://i.ytimg.com/vi/hamjv6G5shY/maxresdefault.jpg",
      categoria: "Mobile",
      descri: "",
    },
    {
      id: uuid(),
      titulo: "Prepárate para el cambio",
      url: "https://www.youtube.com/watch?v=hamjv6G5shY&ab_channel=AluraLatam",
      imagen: "https://i.ytimg.com/vi/hamjv6G5shY/maxresdefault.jpg",
      categoria: "Mobile",
      descri: "",
    },
    {
      id: uuid(),
      titulo: "Prepárate para el cambio",
      url: "https://www.youtube.com/watch?v=hamjv6G5shY&ab_channel=AluraLatam",
      imagen: "https://i.ytimg.com/vi/19x46ZQD49A/maxresdefault.jpg",
      categoria: "Infraestructura",
      descri: "",
    },
    {
      id: uuid(),
      titulo: "Prepárate para el cambio",
      url: "https://www.youtube.com/watch?v=hamjv6G5shY&ab_channel=AluraLatam",
      imagen: "https://i.ytimg.com/vi/19x46ZQD49A/maxresdefault.jpg",
      categoria: "Infraestructura",
      descri: "",
    },
    {
      id: uuid(),
      titulo: "Prepárate para el cambio",
      url: "https://www.youtube.com/watch?v=hamjv6G5shY&ab_channel=AluraLatam",
      imagen: "https://i.ytimg.com/vi/19x46ZQD49A/maxresdefault.jpg",
      categoria: "Infraestructura",
      descri: "",
    },
]);

  const [categoria, setCategoria] = useState([
    {
      id: uuid(),  
      categoria: "Back End",
      color: "#57c278",
      description: "Todos los video que estoy usando para estudiar Back End"
    },
    {
      id: uuid(),
        categoria: "Mobile",
        color: "#82cffa",
        description: "Contenido que vengo estudiando sobre React Native y Flutter"
    },
    {
        id: uuid(),
        categoria: "Infraestructura",
        color: "#a6d157",
        description: "Todo lo que estoy aprendiendo sobre Docker y mucho mas"
    },
    {
        id: uuid(),
        categoria: "Data Science",
        color: "#e06b69",
        description: "Cosas de React y Python que vengo aprendiendo"
    },
    {
        id: uuid(),
        categoria: "Design & UX",
        color: "#db6ebf",
        description: "Herramientas y técnicas que estudio sobre UX y Design"
    },
    {
        id: uuid(),
        categoria: "Marketing Digital",
        color: "#ffba05",
        description: "La forma de vender y monetizar mis ideas"
    },
    {
        id: uuid(),
        categoria: "Innovación y Gestión",
        color: "#ff2929",
        description: "Como mantener el equipo feliz y mucho mas."
    },
  ])
  
  const registrarVideo = (item) => {
    console.log("Variable videos: ", item)
    setVideos([...videos, item])
}

  const eliminarVideo = (id) => {
    const nuevosVideos = videos.filter((video) => video.id != id) //nos devuelve un nuevo arreglo sin modif el original.
    console.log(nuevosVideos);
    setVideos(nuevosVideos);
  }

  const nuevaCategoria = (item) => {
    console.log("nueva categoria: ", item);
    setCategoria([...categoria, item]);
  }

  const eliminarCategoria = (item)  => {
    console.log("Eliminar categoria: ", item);
    const categoriaFinal = categoria.filter((categoria) => categoria.id != item);
    setCategoria(categoriaFinal);
  }

  const editarCategoria = (e) => {
    

    const categoriasCopias = [...categoria];

    const indice = categoriasCopias.findIndex((item) => item.id === e.id);

    if (indice !== -1) {
      categoriasCopias[indice] = { 
        id: e.id, 
        categoria: e.categoria,
        color: e.color,
        description: e.description
    }
    
    }

    setCategoria(categoriasCopias);
    console.log(categoria)
  }

  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/Alura-Flix" element={<Home categoriaActualizada={categoria} videos={videos} eliminarVideo = {eliminarVideo}/>} />
        <Route path="/Formulario" element={<Formulario categoriaActualizada={categoria} registrarVideo={registrarVideo}/>} />
        <Route path="/NuevaCategoria" element={<NuevaCategoria editarCategoria={editarCategoria} eliminarCategoria={eliminarCategoria} categoriaActualizada={categoria} nuevaCategoria={nuevaCategoria}/>} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App
