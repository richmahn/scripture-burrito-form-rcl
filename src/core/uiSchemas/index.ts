import scriptureBurrito from './scriptureBurrito';

export const uiSchemas = Object.freeze({
  ScriptureBurrito: scriptureBurrito,
} as const);

export type UISchema = keyof typeof uiSchemas;
