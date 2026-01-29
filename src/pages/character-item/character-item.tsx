import { Link } from "react-router";
import { ArrowBack } from "@icons";

import "./character-item.css";

export const CharacterItem = () => {
  return (
    <div className="character-item">
      <Link to="/" className="character-item__back">
        <ArrowBack />
        <span className="character-item__back-text">Go back</span>
      </Link>
    </div>
  );
};
