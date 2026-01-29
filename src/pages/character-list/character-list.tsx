import bigLogo from '@images/big-logo.png';

import './character-list.css';

export const CharacterList = (): JSX.Element => {
  return (
    <div className="character-list">
      <img className="character-list__logo" src={bigLogo} height="200" width="600" alt="Rick and Morty logo" />
    </div>
  );
};
