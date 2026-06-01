const EXP_PREFIX = 'tag08-exp';

const hashValue = (value: string) => {
  let hash = 0;
  for (let index = 0; index < value.length; index += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(index);
    hash |= 0;
  }
  return Math.abs(hash);
};

export const getExperimentVariant = (experimentId: string, variants: string[]): string => {
  if (variants.length === 0) {
    throw new Error('Experiment variants cannot be empty.');
  }

  if (typeof window === 'undefined') {
    return variants[0];
  }

  const storageKey = `${EXP_PREFIX}:${experimentId}`;
  const stored = window.localStorage.getItem(storageKey);
  if (stored && variants.includes(stored)) {
    return stored;
  }

  const seed = `${navigator.userAgent}:${Intl.DateTimeFormat().resolvedOptions().timeZone}:${experimentId}`;
  const variant = variants[hashValue(seed) % variants.length];
  window.localStorage.setItem(storageKey, variant);
  return variant;
};