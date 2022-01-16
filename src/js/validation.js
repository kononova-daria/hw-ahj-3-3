export default function checkData(data) {
  if (/^\[?-?\d{1,2}\.\d*,\s?-?\d{1,3}\.\d*\]?$/.test(data)) {
    const coords = data.split(',').map((item) => {
      let result = item.replace(/[\s/g]/, '');
      if (result[0] === '[') result = result.slice(1);
      if (result[result.length - 1] === ']') result = result.slice(0, result.length - 1);
      return result;
    });
    return { latitude: coords[0], longitude: coords[1] };
  }
  return null;
}
