'use strict';

numbers.includes = function(valueToFind, fromIndex = 0) {
  // write code here
  const { length: arrLength } = this;

  if (isNaN(fromIndex)) {
    for (let i = 0; i < arrLength; i++) {
      if (this[i] === valueToFind) {
        return true;
      }
    }
  }

  if (fromIndex >= 0) {
    for (let i = fromIndex; i < arrLength; i++) {
      if (this[i] === valueToFind) {
        return true;
      }
    }
  }

  for (let i = 0; i < arrLength; i++) {
    if (this[i] === valueToFind) {
      return true;
    }
  }

  if (fromIndex < 0) {
    const startIndex = arrLength + fromIndex;

    for (let i = startIndex; i < arrLength; i++) {
      if (this[i] === valueToFind) {
        return i;
      }
    }
  }

  return false;
};
