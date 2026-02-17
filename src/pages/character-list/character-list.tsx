import './character-list.css';

import { CHARACTER_GENDERS, CHARACTER_SPECIES, CHARACTER_STATUSES } from '@constants';
import { Select, StatusBadge } from '@components';
import { TGender, TSpecies, TStatus } from '@types';

import bigLogo from '@images/big-logo.png';
import { useState } from 'react';

export const CharacterList = (): JSX.Element => {
  const [valueSpecies, setValueSpecies] = useState<TSpecies| ''>('');
  const [valueGender, setValueGender] = useState<TGender| ''>('');
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
            options={[
              ...CHARACTER_SPECIES.map((species) => ({
                label: species.label,
                value: species.value,
              })),
            ]}
        />
        <Select
          placeholder="Gender"
          mode="l"
          disabled
          value={valueGender}
          onChange={setValueGender}
            options={[
              ...CHARACTER_GENDERS.map((species) => ({
                label: species.label,
                value: species.value,
              })),
            ]}
        />

        <Select
          placeholder="Status"
          mode="s"
          value={valueStatus}
          onChange={setValueStatus}
          options={[
            ...CHARACTER_STATUSES.map((status) => ({
              label: status.label,
              value: status.value,
            })),
          ]}
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
