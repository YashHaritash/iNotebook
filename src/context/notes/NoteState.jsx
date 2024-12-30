import react, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "676cfe6421dbd723dd0557e9",
      user: "6768f3ea0780fbda9dc71644",
      title: "MyTitle",
      description: "MyDescritpion",
      tag: "Personal",
      date: "2024-12-26T06:57:40.838Z",
      __v: 0,
    },
    {
      _id: "676cfe6421dbd723dd0557eb",
      user: "6768f3ea0780fbda9dc71644",
      title: "MyTitle",
      description: "MyDescritpion",
      tag: "Personal",
      date: "2024-12-26T06:57:40.980Z",
      __v: 0,
    },
    {
      _id: "676cfe6521dbd723dd0557ed",
      user: "6768f3ea0780fbda9dc71644",
      title: "MyTitle",
      description: "MyDescritpion",
      tag: "Personal",
      date: "2024-12-26T06:57:41.097Z",
      __v: 0,
    },
    {
      _id: "676cfe6521dbd723dd0557ef",
      user: "6768f3ea0780fbda9dc71644",
      title: "MyTitle",
      description: "MyDescritpion",
      tag: "Personal",
      date: "2024-12-26T06:57:41.249Z",
      __v: 0,
    },
    {
      _id: "676cfe6521dbd723dd0557f1",
      user: "6768f3ea0780fbda9dc71644",
      title: "MyTitle",
      description: "MyDescritpion",
      tag: "Personal",
      date: "2024-12-26T06:57:41.381Z",
      __v: 0,
    },
    {
      _id: "676cfe6421dbd723dd0557e9",
      user: "6768f3ea0780fbda9dc71644",
      title: "MyTitle",
      description: "MyDescritpion",
      tag: "Personal",
      date: "2024-12-26T06:57:40.838Z",
      __v: 0,
    },
    {
      _id: "676cfe6421dbd723dd0557eb",
      user: "6768f3ea0780fbda9dc71644",
      title: "MyTitle",
      description: "MyDescritpion",
      tag: "Personal",
      date: "2024-12-26T06:57:40.980Z",
      __v: 0,
    },
    {
      _id: "676cfe6521dbd723dd0557ed",
      user: "6768f3ea0780fbda9dc71644",
      title: "MyTitle",
      description: "MyDescritpion",
      tag: "Personal",
      date: "2024-12-26T06:57:41.097Z",
      __v: 0,
    },
    {
      _id: "676cfe6521dbd723dd0557ef",
      user: "6768f3ea0780fbda9dc71644",
      title: "MyTitle",
      description: "MyDescritpion",
      tag: "Personal",
      date: "2024-12-26T06:57:41.249Z",
      __v: 0,
    },
    {
      _id: "676cfe6521dbd723dd0557f1",
      user: "6768f3ea0780fbda9dc71644",
      title: "MyTitle",
      description: "MyDescritpion",
      tag: "Personal",
      date: "2024-12-26T06:57:41.381Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);

  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
