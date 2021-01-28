import { Option } from '../../types/general';
import { Flag } from '../../types/general';

export const SPELLSCHOOLRES: Option[] = [
  { value: 1,   name: 'SPELL_SCHOOL_HOLY' },
  { value: 2,   name: 'SPELL_SCHOOL_FIRE' },
  { value: 3,   name: 'SPELL_SCHOOL_NATURE' },
  { value: 4,   name: 'SPELL_SCHOOL_FROST' },
  { value: 5,   name: 'SPELL_SCHOOL_SHADOW' },
  { value: 6,   name: 'SPELL_SCHOOL_ARCANE' },
];

export const SPELL_SCHOOL_IMMUNE_MASK: Flag[] = [
  { bit: 0,  name: 'SPELL_SCHOOL_NORMAL' },
  { bit: 1,  name: 'SPELL_SCHOOL_HOLY' },
  { bit: 2,  name: 'SPELL_SCHOOL_FIRE' },
  { bit: 3,  name: 'SPELL_SCHOOL_NATURE' },
  { bit: 4,  name: 'SPELL_SCHOOL_FROST' },
  { bit: 5,  name: 'SPELL_SCHOOL_SHADOW' },
  { bit: 6,  name: 'SPELL_SCHOOL_ARCANE' },
];
