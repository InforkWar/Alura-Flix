import React from 'react';
import "../paginas-css/Formulario.css"
import Boton from "../componentes/Boton/Boton"
import CampoTexto from "../componentes/CampoTexto/CampoTexto"
import Categorias from "../componentes/Categorias/Categorias"
import BotonNuevo from '../componentes/BotonNuevo/BotonNuevo'
import { Link } from "react-router-dom"
import { useState } from "react"
import CampoGrande from '../componentes/CampoGrande/CampoGrande';
import { v4 as uuid } from 'uuid';

function Formulario(props) {

    const [titulo, actualizarTitulo] = useState("")
    const [url, actualizarUrl] = useState("")
    const [imagen, actualizarImagen] = useState("")
    const [categoria, actualizarCategoria] = useState("")
    const [descri, actualizarDescri] = useState("")
    
    const { categoriaActualizada } = props
    

    const manejarEnvio = (evento) =>{
        evento.preventDefault()

        const id = uuid();

        let datosAEnviar = {
            id: id,
            titulo: titulo,
            url: url,
            imagen: imagen,
            categoria: categoria,
            descri: descri
        }
        props.registrarVideo(datosAEnviar);

        actualizarTitulo("");
        actualizarUrl("");
        actualizarImagen("");
        actualizarCategoria("");
        actualizarDescri("");
    }

    const limpiarCampos = () => {
            actualizarTitulo("");
            actualizarUrl("");
            actualizarImagen("");
            actualizarCategoria("");
            actualizarDescri("");
    }

    return (
        <section className='formulario'>
            <form onSubmit={manejarEnvio}>
                <h2 className='titulo-formulario'>Nuevo Video</h2>
                <CampoTexto 
                    type="text" 
                    placeholder="Título del video" 
                    required
                    valor = {titulo}
                    actualizarValor = {actualizarTitulo}
                    />
                
                <CampoTexto 
                    type="text" 
                    placeholder="URL del video" 
                    required 
                    valor = {url}
                    actualizarValor = {actualizarUrl}
                    />
                
                <CampoTexto 
                    type="text" 
                    placeholder="Imagen del video" 
                    required 
                    valor = {imagen}
                    actualizarValor = {actualizarImagen}
                    />

                <Categorias 
                    placeholder="Escoja una categoría"
                    required
                    valor = {categoria}    
                    actualizarValor = {actualizarCategoria}
                    categoriaActualizada={categoriaActualizada}
                />

                <CampoGrande
                    placeholder="Descripción"
                    valor = {descri}
                    actualizarValor = {actualizarDescri}
                />
                
                <div className='contenedor-botones'>
                <Boton 
                            borde="#2A7AE4" 
                            fondo="#2A7AE4" 
                            className="item1" 
                            type="submit" 
                            texto="Guardar"
                            
                        />
                    <div className='div-2'>

                        
                        
                        <button
                            className="botonLimpiar" 
                            borde="#5c5959" 
                            fondo="#5c5959" 
                            type="button" 
                            texto="Limpiar"
                            onClick={limpiarCampos}>
                            Limpiar
                        </button>

                    </div>

                <Link to="/NuevaCategoria"><BotonNuevo className="item3" type="submit" texto="Nueva Categoria" /></Link>
                </div>

            </form>
        </section>
    );
}

export default Formulario;
