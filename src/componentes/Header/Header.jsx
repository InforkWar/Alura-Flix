import "./Header.css";
import Boton from "../Boton/Boton";
import { Link } from "react-router-dom";

function Header(){
    
    return (
        <div className="contenedor-header">
            <Link to="/Alura-Flix"><img className="logo" src="img/LogoMain.png" alt='header logo'/></Link>
            <Link to="/Formulario"><Boton fondo="transparent" className="boton-nuevo" texto="Nuevo video" /></Link>
        </div>
    )
}

export default Header;