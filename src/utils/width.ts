import { halfWidthKanaArray } from './hirakana';

export interface WidthSlice {
  width: string;
  content: string;
}

export function checkWidth(text: string): Array<WidthSlice> {
  const halfWidthRegex = new RegExp(
    `[A-Za-z0-9!-~${halfWidthKanaArray.join('')}]+`,
    'g'
  );
  const fullWidthRegex = new RegExp(
    `[^A-Za-z0-9!-~${halfWidthKanaArray.join('')}]+`,
    'g'
  );

  const halfArray = text.match(halfWidthRegex);
  const fullArray = text.match(fullWidthRegex);

  const result: Array<WidthSlice> = [];

  if (halfArray && !fullArray) {
    // only half
    halfArray.forEach(halfStr => {
      result.push({
        width: 'half',
        content: halfStr
      });
    });
  } else if (!halfArray && fullArray) {
    // only full
    fullArray.forEach(fullStr => {
      result.push({
        width: 'full',
        content: fullStr
      });
    });
  } else if (halfArray && fullArray) {
    if (halfArray[0][0] === text[0]) {
      // half first
      while (halfArray.length > 0 || fullArray.length > 0) {
        const halfStr = halfArray.shift();
        if (halfStr) {
          result.push({
            width: 'half',
            content: halfStr
          });
        }
        const fullStr = fullArray.shift();
        if (fullStr) {
          result.push({
            width: 'full',
            content: fullStr
          });
        }
      }
    } else {
      // full first
      while (halfArray.length > 0 || fullArray.length > 0) {
        const fullStr = fullArray.shift();
        if (fullStr) {
          result.push({
            width: 'full',
            content: fullStr
          });
        }
        const halfStr = halfArray.shift();
        if (halfStr) {
          result.push({
            width: 'half',
            content: halfStr
          });
        }
      }
    }
  }
  return result;
}
