import React , {useState} from "react";

const Modal = () =>{
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="model">
            <button onClick={()=> setShowModal(true)}>Show Modal</button>
            {
                showModal && 
                    <div className="model-overlay" onClick={() => setShowModal(false)}>
                        <button className="model-close" onClick={() => setShowModal(false)}>Close</button>
                        <p>This is the content of the modal.</p>
                    </div>
            }
        </div>
    )
}

export default Modal;