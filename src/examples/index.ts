import audioTranslation from './audioTranslation';
import embossedBrailleScripture from './embossedBrailleScripture';
import minimalTemplate from './minimalTemplate';
import signLanguageVideoTranslation from './signLanguageVideoTranslation';
import textStories from './textStories';
import textTranslation from './textTranslation';
import textTranslation_derived from './textTranslation_derived';
import typesetScripture from './typesetScripture';
import wordAlignment from './wordAlignment';
import xScripture from './xScripture';

export const examples = Object.freeze({
  Blank: { formData: {} },
  AudioTranslation: audioTranslation,
  EmbossedBrailleScripture: embossedBrailleScripture,
  MinimalTemplate: minimalTemplate,
  SignLanguageVideoTranslation: signLanguageVideoTranslation,
  TextStories: textStories,
  TextTranslation: textTranslation,
  TextTranslation_derived: textTranslation_derived,
  TypesetScripture: typesetScripture,
  WordAlignment: wordAlignment,
  xScripture: xScripture,
} as const);

export type Example = keyof typeof examples;
