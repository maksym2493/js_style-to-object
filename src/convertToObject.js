'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').reduce(addStyle, {});
}

function addStyle(styles, string) {
  const style = string.split(':').map((item) => item.trim());

  styles[style[0]] = style[1];

  return styles;
}

module.exports = convertToObject;
