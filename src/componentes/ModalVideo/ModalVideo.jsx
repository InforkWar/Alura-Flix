import "./ModalVideo.css"
import Boton from "../Boton/Boton";


const ModalVideo = ({children,isOpen,closeModal,videoPlayerRef}) => {

    const handleModalClick = e => e.stopPropagation();


    const handleCloseModal = () => {
        
        closeModal();
    }

    return(
        <section className={`modal-video ${isOpen && "is-open"}`} onClick={closeModal}>
            <div className="modal-container-video" onClick={handleModalClick}>
            <button className="modal-close" onClick={handleCloseModal}>X</button>
            {children}
            </div>
        </section>
    )
}

export default ModalVideo;