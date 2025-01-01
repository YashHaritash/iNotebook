import react, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:3000";
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

  const getAllNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-Token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc2OGYzZWEwNzgwZmJkYTlkYzcxNjQ0In0sImlhdCI6MTczNTE5NTQzOH0.cojiSVFbdAXZ-1gk9y3evpGL4oCgCuyQ71a2Bnk5zLA",
      },
    });
    //TODO api call
    const json = await response.json();
    setNotes(json);
  };

  // Add a note
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-Token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc2OGYzZWEwNzgwZmJkYTlkYzcxNjQ0In0sImlhdCI6MTczNTE5NTQzOH0.cojiSVFbdAXZ-1gk9y3evpGL4oCgCuyQ71a2Bnk5zLA",
      },
      body: JSON.stringify({
        title,
        description,
        tag,
      }),
    });
    //TODO api call
    console.log("Adding a new Note");
    const note = {
      _id: "676cfe6521dbd723423432dd33240557f1",
      user: "6768f3ea0780fbda9dc71644",
      title: `${title}`,
      description: `${description}`,
      tag: `${tag}`,
      date: "2024-12-26T06:57:41.381Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };
  // Delete a note
  const deleteNote = (id) => {
    console.log("Deleting the node with id" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };
  // Edit a note
  const editNote = async (id, title, description, tag) => {
    //Api calls
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-Token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc2OGYzZWEwNzgwZmJkYTlkYzcxNjQ0In0sImlhdCI6MTczNTE5NTQzOH0.cojiSVFbdAXZ-1gk9y3evpGL4oCgCuyQ71a2Bnk5zLA",
      },
      body: JSON.stringify({
        title,
        description,
        tag,
      }),
    });

    //Logic to update in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id == id) {
        element.title = title;
        element.tag = tag;
        element.description = description;
      }
    }
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getAllNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
