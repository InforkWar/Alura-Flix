import "./CampoTexto.css"


const CampoTexto = (props) => {


    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }


    return(
        <input 
            className="entrada-texto" 
            type={props.type} 
            placeholder={props.placeholder} 
            required={props.required}
            onChange={manejarCambio}
            value={props.valor}
            />
    )
}

export default CampoTexto;