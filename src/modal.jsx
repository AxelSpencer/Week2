export const Modal = (props) => {
    return (
        <>
            <div className="modal">
                <p>Did you complete this task?</p>
                <button onClick={props.hideModal} className="btn btn-highlight">Cancel</button>
                <button onClick={props.hideModal} className="btn">Confirm</button>
            </div>
            <div onClick={props.hideModal} className="backdrop"/>
        </>
    )
}