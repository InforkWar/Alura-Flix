import React ,{ useState, useEffect, useRef } from "react";
import "./Slider.css"
import { IoIosArrowBack, IoIosArrowForward} from 'react-icons/io';
import { AiFillCloseCircle } from 'react-icons/ai'

const Slider = (props) => {

    const [position, setPosition] = useState(0);
    const referencia = useRef(null);

    const { videos, eliminarVideo, id } = props
    
    
    useEffect(() => {
        if ( referencia.current ) {
            let anchoContainer = referencia.current.offsetWidth;
        }
    }, [])

    const desplazarDerecha = () => {
        let anchoContainer = referencia.current.offsetWidth;

        if (position > -anchoContainer) {
            setPosition(position - 100);
        }else{
            setPosition(position-100);
        }
        
        
    }

    const desplazarIzquierda = () => {
        
        if (position < 0){
            setPosition(position + 100);
        }
    }

    const abrirModal = (e)=> {
        props.openModal();
        props.videoClickeado(e)
    }


    return<>
        { 
        videos.length > 0 && 
        <div className="contenedor-general">

            <div className="contenedor-titulo-controles">
                <h1 className="categoria" style={{backgroundColor : props.categoriaColor}}>{props.categoria}</h1>
            </div>

            <div className="contenedor-principal">
                <button onClick={desplazarIzquierda} id="flecha-izquierda" className="flecha-izquierda">
                    <IoIosArrowBack/>
                </button>

                <div className="contenedor-slider" >
                    <div className="slider" ref={referencia}>

                        {
                            videos.map((item) => {
                                
                                    return(
                                            
                                            <div  key={item.id}
                                                className="videos" 
                                                style={{ transform: `translateX(${position}px)`}}>
                                            <AiFillCloseCircle className="close" onClick={() => eliminarVideo(item.id)} style={{margin: "5px"}}></AiFillCloseCircle>
                                            <img onClick={() => abrirModal(item)} src={item.imagen} alt="imagen"></img>
                                            <p className="titulo-video">{item.titulo}</p>
    
                                            </div>
                                            
                                        );
                                
                            })
                        }

                    </div>
                </div>
                
                <button onClick={desplazarDerecha} id="flecha-derecha" className="flecha-derecha">
                    <IoIosArrowForward/>
                </button>
            </div>


        </div>
    
        
        } 
</>
}
export default Slider;