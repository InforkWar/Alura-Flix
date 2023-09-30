import logo404 from "../../public/img/logo404.png"
import "../paginas-css/Page404.css"

const Page404 = () => {
    return(
        <main className="contenedor404">
            <img className="imagen404" src={logo404} alt="error 404 image" />
            <p className="parrafo404">Esta página no existe</p>
        </main>
    )
}

export default Page404;