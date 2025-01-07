import React, { useState } from "react";
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
    // ... other notes
  ];

  const [notes, setNotes] = useState(notesInitial);

  // Function to retrieve the auth token from localStorage
  const getAuthToken = () => {
    return localStorage.getItem("token");
  };

  // Function to check if the token exists
  const isTokenAvailable = () => {
    return !!getAuthToken();
  };

  // Logout Function: Clears the token and optionally redirects the user
  const logout = () => {
    localStorage.removeItem("token");
    setNotes([]); // Optionally clear notes or reset app state
    // Optionally redirect to login page
    // window.location.href = '/login';
  };

  // Fetch all notes
  const getAllNotes = async () => {
    if (!isTokenAvailable()) {
      console.error("Token is missing. Please log in again.");
      // Optionally redirect to login page:
      // window.location.href = '/login';
      return;
    }

    try {
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-Token": getAuthToken(),
        },
      });
      const json = await response.json();
      setNotes(json);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  // Add a new note
  const addNote = async (title, description, tag) => {
    if (!isTokenAvailable()) {
      console.error("Token is missing. Please log in again.");
      return;
    }

    try {
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-Token": getAuthToken(),
        },
        body: JSON.stringify({ title, description, tag }),
      });
      const note = await response.json();
      setNotes([...notes, note]);
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };

  // Delete a note
  const deleteNote = async (id) => {
    if (!isTokenAvailable()) {
      console.error("Token is missing. Please log in again.");
      return;
    }

    try {
      const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-Token": getAuthToken(),
        },
      });
      const json = await response.json();

      const newNotes = notes.filter((note) => note._id !== id);
      setNotes(newNotes);
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  // Edit a note
  const editNote = async (id, title, description, tag) => {
    if (!isTokenAvailable()) {
      console.error("Token is missing. Please log in again.");
      return;
    }

    try {
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-Token": getAuthToken(),
        },
        body: JSON.stringify({ title, description, tag }),
      });
      const updatedNote = await response.json();

      const newNotes = notes.map((note) =>
        note._id === id ? { ...note, title, description, tag } : note
      );
      setNotes(newNotes);
    } catch (error) {
      console.error("Error updating note:", error);
    }
  };

  return (
    <NoteContext.Provider
      value={{
        notes,
        addNote,
        deleteNote,
        editNote,
        getAllNotes,
        logout,
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
