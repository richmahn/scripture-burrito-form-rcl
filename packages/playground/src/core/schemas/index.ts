import v100 from './sb-v100';

export const schemas = Object.freeze({
  SBv100: v100,
} as const);

export type Schema = keyof typeof schemas;
