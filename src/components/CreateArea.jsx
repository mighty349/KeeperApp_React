import React, { useState } from "react";

import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import { Zoom } from "@mui/material";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const[defaultrow,setdefault]=useState(1);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function handleclick()
  {
    setdefault(3);
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {defaultrow==3&& <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />}
        <textarea
          name="content"
          onChange={handleChange}
          onClick={handleclick}
          value={note.content}
          placeholder="Take a note..."
          rows={defaultrow}
        />
        {defaultrow==3&& <Zoom in={true}>
        <Fab color="primary" onClick={submitNote}><AddIcon/></Fab>
        </Zoom>}
      </form>
    </div>
  );
}

export default CreateArea;
