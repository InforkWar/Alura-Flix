import "./Modal.css"
import CampoTexto from "../CampoTexto/CampoTexto";
import CampoGrande from "../CampoGrande/CampoGrande";
import CampoColor from "../CampoColor/CampoColor";
import Boton from "../Boton/Boton";
import { useState, useEffect } from "react";

const Modal = ({editarCategoria,elementoEditar,isOpen,closeModal}) => {
    

    const [categoria, setCategoria] = useState("");
    const [description, setDescription] = useState("");
    const [color, setColor] = useState("#000000"); 
    

    useEffect(() => {
        if (elementoEditar && elementoEditar.categoria) {
            setCategoria(elementoEditar.categoria);
            setDescription(elementoEditar.description);
            setColor(elementoEditar.color);
        }
    }, [elementoEditar])

    
    const edicion = (evento) => {
        
        let categoriaEditada = {
            id: elementoEditar.id,
            categoria: categoria,
            description: description,
            color: color,
        }
        
        editarCategoria(categoriaEditada);

        setCategoria("");
        setDescription("");
        setColor("#000000");
    }

    const handleModalClick = e => e.stopPropagation();


    return(
        
        <section className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
            <div className="modal-container" onClick={handleModalClick}>
            <button className="modal-close" onClick={closeModal}>X</button>
            <h1 className="titulo-nueva-categoria">Editar Categoria</h1>

            <CampoTexto 
                placeholder="nombre" 
                required
                valor = {categoria}
                actualizarValor= {setCategoria}
                type="text"
                />

            <CampoGrande
                    placeholder="Descripción"
                    valor= {description}
                    actualizarValor= {setDescription}
                    required
                />

            <CampoColor 
                className="campoColor" 
                type="color" 
                placeholder="color"
                valor = {color}
                actualizarValor = {setColor}
                required
                />

                <div className="container-boton">
                    <Boton 
                        borde="#2A7AE4" 
                        fondo="#2A7AE4" 
                        className="" 
                        type="button" 
                        texto="Actualizar"
                        onClick={()=>edicion()}
                        />
                    
                    
                </div>
            </div>
        </section>
    )
}

export default Modal;