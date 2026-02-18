import { useState } from 'react';

import { Select, StatusBadge } from '@components';
import { CHARACTER_GENDERS, CHARACTER_SPECIES, CHARACTER_STATUSES } from '@constants';
import bigLogo from '@images/big-logo.png';
import { TGender, TSpecies, TStatus } from '@types';

import './character-list.css';

export const CharacterList = (): JSX.Element => {
  const [valueSpecies, setValueSpecies] = useState<TSpecies | ''>('');
  const [valueGender, setValueGender] = useState<TGender | ''>('');
  const [valueStatus, setValueStatus] = useState<TStatus | ''>('');

  return (
    <div className="character-list">
      <img className="character-list__logo" src={bigLogo} height="200" width="600" alt="Rick and Morty logo" />
      <div className="character-list__selects">
        <Select
          placeholder="Species"
          mode="l"
          value={valueSpecies}
          onChange={setValueSpecies}
          options={CHARACTER_SPECIES}
        />
        <Select
          placeholder="Gender"
          mode="l"
          disabled
          value={valueGender}
          onChange={setValueGender}
          options={CHARACTER_GENDERS}
        />

        <Select
          placeholder="Status"
          mode="s"
          value={valueStatus}
          onChange={setValueStatus}
          options={CHARACTER_STATUSES}
          SelectOptionComponent={({ option }) => (
            <>
              <span>{option.label}</span>
              <StatusBadge status={option.value as TStatus} />
            </>
          )}
        />
      </div>
    </div>
  );
};
