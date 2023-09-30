import "./Boton.css"

const Boton = (props) => {
    return(
        <button 
            style={{backgroundColor: props.fondo, border: `2px solid ${props.borde || 'white'}`}} 
            className="boton-nuevo"
            type={props.type}
            onClick={props.onClick}
        >{props.texto}</button>
    )
}

export default Boton;