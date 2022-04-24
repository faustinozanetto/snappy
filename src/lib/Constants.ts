import toHash from 'tohash';

export const EXPORT_SIZES = [
  { id: '1x', name: '1x', value: 1 },
  { id: '2x', name: '2x', value: 2 },
  { id: '3x', name: '3x', value: 3 },
  { id: '4x', name: '4x', value: 4 },
];
export const EXPORT_SIZES_HASH = toHash(EXPORT_SIZES);

export const DEFAULT_EXPORT_SIZE = EXPORT_SIZES_HASH['2x'];
