import "./CampoColor.css";




const CampoColor = (props) => {

    const manejarActualizar = (e) => {
        props.actualizarValor(e.target.value); 
    }

    return (
        <div className="contenedor-color">
            <p className="texto-color">Color</p>
            <input 
                className="entrada-color" 
                type="color"
                required = {props.required}
                onChange={manejarActualizar}
                value={props.valor}
                />
        </div>
    )
}

export default CampoColor;