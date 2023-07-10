
function Note(props) {
    return <div className="note-div">
        <h1 className="note-div-h1" contentEditable="true">{props.title}</h1>
        <p className="note-div-p" contentEditable="true">{props.body.substring(0, 100)}...</p>
    </div>
}

export default Note;