import "./CampoGrande.css"

const CampoGrande = (props) => {

    const manejarDescri = (e) => {
        return(
            props.actualizarValor(e.target.value)
        )
        
    }

    return(
    <textarea 
        rows="4" 
        cols="50" 
        className="areaTexto" 
        placeholder={props.placeholder}
        onChange={manejarDescri}
        value={props.valor}
        required = {props.required}
    ></textarea>
    )
}


export default CampoGrande;