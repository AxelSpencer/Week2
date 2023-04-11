import { Modal } from './modal'
import { useState } from 'react'

export function Card( {name}) {
    const [showModal, setShowModal] = useState(false)

    const handleShow = () => {
        setShowModal(true)
    }

    const handleHide = () => {
        setShowModal(false)
    }

    const modal = showModal ? <Modal hideModal={handleHide}/> : null

    return (
        <>
            <div className="card">
                <div className="card-content">
                    <h2>{name}</h2>
                    <button onClick={handleShow} className="btn">Done</button>
                </div>
            </div>
            {modal}
        </>
    )

}