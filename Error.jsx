import React from "react";

function Error() {
  return (
    <div>
      <p>Unknown request!Please contact support team!</p>
      <img src={require("./Images/error.png")} alt="error" />
    </div>
  );
}

export default Error;
