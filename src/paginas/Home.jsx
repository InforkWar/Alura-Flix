import "../paginas-css/Home.css"
import { useState, useRef } from "react";
import Slider from "../componentes/Slider/Slider";
import ModalVideo from "../componentes/ModalVideo/ModalVideo.jsx" 

const Home = (props) => {
    const { videos, eliminarVideo, categoriaActualizada } = props

    const [video, mostrarVideo] = useState(true);
    const [videoElegido, setVideoElegido] = useState({});
    const [isOpen, setIsOpen] = useState(false);

    

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const videoClickeado = (e) => {
        setVideoElegido(e)
        
    }

    const cambiarMostrar = () => {
        return(
            mostrarVideo(!video)
        )
    }
/* ---------------------- */

// Función para extraer el ID del video de la URL de YouTube
const extractVideoId = (url) => {
    const urlParams = new URLSearchParams(new URL(url).search);
    return urlParams.get("v");
    };

  // Función para generar la URL de incrustación de YouTube
    const generateEmbedUrl = (url) => {
    const videoId = extractVideoId(url);
    return `https://www.youtube.com/embed/${videoId}`;
    };

/* ---------------------- */



    return(

    <div className="contenedorGrande">
        <div className="contenedor-home">

            <div className="contenedor-home2">
                <h1 className="titulo-home">Front End</h1>
                <h2 className="titulo-home2">Challenge React</h2>
                <p className="parrafo-home">Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
            </div>

            <div className="contenedor-video">
                <p onClick={cambiarMostrar} className="mini">Ocultar/Mostrar</p>
                {
                    video === true ? 
                    <iframe className="video" src="https://www.youtube.com/embed/ov7vA5HFe6w" 
                    title="Qué Significa Pensar Como Programador" 
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; 
                    picture-in-picture; web-share" allowFullScreen>
                    </iframe>
                    :
                    <div className="sinVideo"></div>
                }
            </div>
            
            

        </div>

        {
            categoriaActualizada.map((items, id) => {
                return(
                    <Slider
                        videoClickeado={videoClickeado}
                        openModal={openModal}
                        eliminarVideo={eliminarVideo}
                        videos={videos.filter(videos => videos.categoria === items.categoria)}
                        key={items.id}
                        categoria={items.categoria} 
                        categoriaColor = {items.color}/>
                )
            })
        }

        <ModalVideo
        closeModal = {closeModal}
        isOpen = {isOpen}
        >
            <h1 className="modal-titulo-video">{videoElegido.titulo}</h1>
            {isOpen && videoElegido.url && (
                <iframe
                    title={videoElegido.titulo}
                    className="reproductor"
                    src={generateEmbedUrl(videoElegido.url)}
                    width="70%"
                    height="350px"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            )

            }
        </ModalVideo>

        
        

    </div>
    )
}

export default Home;


{/* <ReactPlayer
                className="reproductor"
                url={isOpen ? videoElegido.url : ""}
                controls
                width={"95%"}
                height={"50%"}
            >
            </ReactPlayer> */}