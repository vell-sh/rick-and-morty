import { CHARACTER_GENDERS, CHARACTER_SPECIES, CHARACTER_STATUSES } from '@constants';

export type TStatus = (typeof CHARACTER_STATUSES)[number]['value'];
export type TSpecies = (typeof CHARACTER_SPECIES)[number]['value'];
export type TGender = (typeof CHARACTER_GENDERS)[number]['value'];