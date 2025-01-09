import React, { useContext } from "react";
import alertContext from "../context/alert/alertContext";

function Alert() {
  const { alert } = useContext(alertContext);
  return (
    alert && (
      <div className="alert alert-primary" role="alert">
        {alert.message}
      </div>
    )
  );
}

export default Alert;
