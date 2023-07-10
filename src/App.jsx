import "../styles.css"
import Header from "./components/header"
import Footer from "./components/footer"
import Note from "./components/note"

import notes from "./components/notes";


export default function App() {
  return <div>
    <Header />
    <div className="container">
      <div className="note-space">
        {notes.map(note => { return (<Note key={note.id} title={note.title} body={note.bodyNote} />); })}
      </div>
    </div>
    <Footer />


  </div>
}
