import Boton from "../componentes/Boton/Boton";
import CampoTexto from "../componentes/CampoTexto/CampoTexto";
import "../paginas-css/NuevaCategoria.css"
import CampoGrande from "../componentes/CampoGrande/CampoGrande";
import CampoColor from "../componentes/CampoColor/CampoColor";
import { useState } from "react";
import { v4 as uuid } from 'uuid';
import Modal from "../componentes/Modals/Modal";


const NuevaCategoria = (props) => {
    
    const [categoria, setCategoria] = useState("");
    const [description, setDescription] = useState("");
    const [color, setColor] = useState("#000000"); 
    const [elemento, setElemento] = useState ({});
    const [isOpen, setIsOpen] = useState(false)

    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)

    const { nuevaCategoria, categoriaActualizada, eliminarCategoria, editarCategoria } = props

    const manejarCategoria = (eventito) =>{
        eventito.preventDefault();
        const id = uuid();

        let categoriaAEnviar = {
            id: id,
            categoria: categoria,
            description: description,
            color: color,
        }
        
        nuevaCategoria(categoriaAEnviar);
    }

    const eliminacion = (evento) => {
        eliminarCategoria(evento);
    }

    const elementoEditar = (e) => {
        setElemento(e);
        openModal();
    }


    const limpiarInput = (e) => {
        setCategoria("");
        setDescription("");
        setColor("#000000");
    }

    return(
        <div className="contenedor-grande">
        <form onSubmit={manejarCategoria} className="contenedor-nueva-categoria">
            <h1 className="titulo-nueva-categoria">Nueva Categoría</h1>

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
                        className="bot" 
                        type="submit" 
                        texto="Guardar"
                        onClick= {() => manejarCategoria} 
                        />
                    
                    <Boton 
                    borde="#5c5959" 
                    fondo="#5c5959" 
                    className="bot" 
                    type="button" 
                    texto="Limpiar" 
                    onClick = {limpiarInput}
                    />
                </div>
        </form>

<section className="seccion-lista">
        <div className="lista">
            
            <div className="items"><h2>Nombre</h2></div>
            <div className="items"><h2>Descripción</h2></div>
            <div className="items"><h2>Editar</h2></div>
            <div className="items"><h2>Remover</h2></div>

        </div>

            {
                categoriaActualizada.map((item) =>{
                    return<div className="lista2" key={item.id}>
                    
                    <div className="items2" >{item.categoria}</div>
                    <div className="items2" >{item.description}</div>
                    <div className="items2 eye" onClick={()=>elementoEditar(item)}>editar</div>
                    <div className="items2 eye" onClick={()=>eliminacion(item.id)}>eliminar</div>
                    
                    </div>
                })
            }
</section>

        <Modal
        closeModal = {closeModal}
        isOpen = {isOpen}
        editarCategoria={editarCategoria}
        elementoEditar={elemento}
        ></Modal>

        
        
        </div>

    )
}

export default NuevaCategoria;