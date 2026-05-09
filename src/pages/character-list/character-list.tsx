import { useState } from 'react';

import { Select, StatusBadge, TextField } from '@components';
import { CHARACTER_GENDERS, CHARACTER_SPECIES, CHARACTER_STATUSES } from '@constants';
import { SearchIcon } from '@icons';
import bigLogo from '@images/big-logo.png';
import { TGender, TSpecies, TStatus } from '@types';

import './character-list.css';

export const CharacterList = (): JSX.Element => {
  const [nameFilter, setNameFilter] = useState('');
  const [valueSpecies, setValueSpecies] = useState<TSpecies | ''>('');
  const [valueGender, setValueGender] = useState<TGender | ''>('');
  const [valueStatus, setValueStatus] = useState<TStatus | ''>('');
  const [valueCharacterName, setValueCharacterName] = useState<string>('Summer Smith');
  const [valueCharacterLocation, setValueCharacterLocation] = useState<string>('Earth');

  return (
    <div className="character-list">
      <img className="character-list__logo" src={bigLogo} height="200" width="600" alt="Rick and Morty logo" />
      <div className="character-list__selects">
        <TextField
          id="character-list__filter-input"
          className="character-list__filter-input"
          variant="outlined"
          icon={<SearchIcon />}
          placeholder="Filter by name..."
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
          onClear={() => setNameFilter('')}
        />
        <Select
          placeholder="Species"
          size="l"
          value={valueSpecies}
          onChange={setValueSpecies}
          options={CHARACTER_SPECIES}
        />
        <Select
          placeholder="Gender"
          size="l"
          disabled
          value={valueGender}
          onChange={setValueGender}
          options={CHARACTER_GENDERS}
        />
        <Select
          placeholder="Status"
          size="s"
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
      <div className="character-list__inputs">
        <TextField
          value={valueCharacterName}
          id="character-name"
          placeholder="Name"
          variant="underlined"
          size="l"
          onChange={(e) => setValueCharacterName(e.target.value)}
          onClear={() => setValueCharacterName('')}
        />
        <TextField
          value={valueCharacterLocation}
          placeholder="Location"
          id="character-location"
          variant="underlined"
          size="s"
          onChange={(e) => setValueCharacterLocation(e.target.value)}
          onClear={() => setValueCharacterLocation('')}
        />
      </div>
    </div>
  );
};
