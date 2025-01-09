import React, { useState } from "react";
import alertContext from "./alertContext";

function AlertState(props) {
  const [alert, setAlert] = useState(null);
  const showAlert = (message) => {
    setAlert({
      message: message,
    });
    setInterval(() => {
      setAlert(null);
    }, 3000);
  };
  return (
    <alertContext.Provider value={{ alert, showAlert }}>
      {props.children}
    </alertContext.Provider>
  );
}

export default AlertState;
