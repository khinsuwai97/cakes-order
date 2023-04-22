export const getLocalStorage = <T>(key: string, value: T) => {
  const jsonValue = localStorage.getItem(key);
  if (jsonValue === null) {
    return value;
  } else {
    return JSON.parse(jsonValue);
  }
};

export const setLocalStorage = <T>(key: string, value: T) => {
  localStorage.setItem(key, JSON.stringify(value));
};
