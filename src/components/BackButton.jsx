import React, { Children } from "react";
import { useNavigate } from "react-router-dom";

function BackButton({ Text }) {
  const navigate = useNavigate();

  const returnBack = () => {
    navigate(-1);
  };

  return (
    <div className="back">
      <button className="btn" onClick={returnBack}>
        {Text}
      </button>
    </div>
  );
}

export default BackButton;
