import "./Categorias.css"

const Categorias = (props) => {

const {categoriaActualizada} = props;

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }

    return (
        <select value={props.valor} onChange={manejarCambio} required={props.required}>
            <option value="" disabled defaultValue="" hidden>Escoja una categoría</option>
            {
                categoriaActualizada.map ( 
                    (item) => {
                        return(
                            <option key={item.id} value={item.categoria}>{item.categoria}</option>
                        )
                    }
                )
            }
        </select>
    )
}

export default Categorias;