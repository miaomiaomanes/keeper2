import React, { useState } from "react";

function Note(props) {
  const [editing, setEditing] = useState(false);

  function doDelete() {
    props.onDelete(props.id);
  }

  function doEdit() {
    console.log("edit item:", props.id);
    setEditing(true);
  }

  if (editing === false) {
    return (
      <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={doDelete}>DELETE</button>
        <button onClick={doEdit}>EDIT</button>
      </div>
    );
  }

  return (
    <div className="note">
      <input value={props.title} />
      <textarea value={props.content} />
      <button onClick={() => {}}>Done</button>
    </div>
  );
}

export default Note;
