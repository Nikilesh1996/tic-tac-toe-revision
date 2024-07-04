import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEiditing] = useState(false);

  const handleEditClick = () => {
    setIsEiditing((prev) => !prev);
  };

  let playerName = <span className="player-name">{name}</span>;
  // let btnCaption = "Edit";

  if (isEditing) {
    playerName = <input type="text" value={name} required />;
    // btnCaption = "Save";
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
