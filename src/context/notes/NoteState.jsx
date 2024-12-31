import react, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "676cfe6421dbd7243443243243dd0557e9",
      user: "6768f3ea0780fbda9dc71644",
      title: "MyTitle",
      description: "MyDescritpion",
      tag: "Personal",
      date: "2024-12-26T06:57:40.838Z",
      __v: 0,
    },
    {
      _id: "676cfe6421d3434542343b343d723dd0557eb",
      user: "6768f3ea0780fbda9dc71644",
      title: "MyTitle",
      description: "MyDescritpion",
      tag: "Personal",
      date: "2024-12-26T06:57:40.980Z",
      __v: 0,
    },
    {
      _id: "676cfe6521dbd724324324334dd0557ed",
      user: "6768f3ea0780fbda9dc71644",
      title: "MyTitle",
      description: "MyDescritpion",
      tag: "Personal",
      date: "2024-12-26T06:57:41.097Z",
      __v: 0,
    },
    {
      _id: "676cfe6521dbd7234234323d3434d0557ef",
      user: "6768f3ea0780fbda9dc71644",
      title: "MyTitle",
      description: "MyDescritpion",
      tag: "Personal",
      date: "2024-12-26T06:57:41.249Z",
      __v: 0,
    },
    {
      _id: "676cfe6521dbd723dd04334324243557f1",
      user: "6768f3ea0780fbda9dc71644",
      title: "MyTitle",
      description: "MyDescritpion",
      tag: "Personal",
      date: "2024-12-26T06:57:41.381Z",
      __v: 0,
    },
    {
      _id: "676cfe6421dbd7234344234234233dd0557e9",
      user: "6768f3ea0780fbda9dc71644",
      title: "MyTitle",
      description: "MyDescritpion",
      tag: "Personal",
      date: "2024-12-26T06:57:40.838Z",
      __v: 0,
    },
    {
      _id: "676cfe6421dbd74343432423323dd0557eb",
      user: "6768f3ea0780fbda9dc71644",
      title: "MyTitle",
      description: "MyDescritpion",
      tag: "Personal",
      date: "2024-12-26T06:57:40.980Z",
      __v: 0,
    },
    {
      _id: "676cfe6521dbd724334324324433dd0557ed",
      user: "6768f3ea0780fbda9dc71644",
      title: "MyTitle",
      description: "MyDescritpion",
      tag: "Personal",
      date: "2024-12-26T06:57:41.097Z",
      __v: 0,
    },
    {
      _id: "676cfe6521dbd72332432423d343d0557ef",
      user: "6768f3ea0780fbda9dc71644",
      title: "MyTitle",
      description: "MyDescritpion",
      tag: "Personal",
      date: "2024-12-26T06:57:41.249Z",
      __v: 0,
    },
    {
      _id: "676cfe6521dbd723423432dd33240557f1",
      user: "6768f3ea0780fbda9dc71644",
      title: "MyTitle",
      description: "MyDescritpion",
      tag: "Personal",
      date: "2024-12-26T06:57:41.381Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);

  // Add a note
  const addNote = (title, description, tag) => {
    //TODO api call
    console.log("Adding a new Note");
    const note = {
      _id: "676cfe6521dbd723423432dd33240557f1",
      user: "6768f3ea0780fbda9dc71644",
      title: "MyTitle",
      description: "MyDescritpion",
      tag: "Personal",
      date: "2024-12-26T06:57:41.381Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };
  // Delete a note
  const deleteNote = (id) => {};
  // Edit a note
  const editNote = (id) => {};

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
