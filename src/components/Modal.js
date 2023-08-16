import React , {useState} from "react";

const Modal = () =>{
    const [showModal, setShowModal] = useState(false);

    const onClose = () =>{
        setShowModal(false);
    }

    return (
        <div className="model-overlay">
            <button onClick={()=> setShowModal(true)}>Show Modal</button>
            {
                showModal && 
                    <div className="model">
                        <button className="model-close" onClick={onClose}>Close</button>
                        <p>This is the content of the modal.</p>
                    </div>
            }
        </div>
    )
}

export default Modal;