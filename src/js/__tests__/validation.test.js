import checkData from '../validation';

test.each([
  [
    '51.50851, -0.12572',
    { latitude: '51.50851', longitude: '-0.12572' },
  ],
  [
    '51.50851,-0.12572',
    { latitude: '51.50851', longitude: '-0.12572' },
  ],
  [
    '[51.50851, -0.12572]',
    { latitude: '51.50851', longitude: '-0.12572' },
  ],
])('Функция возвращает объект при корректном значении', (received, expected) => {
  expect(checkData(received)).toEqual(expected);
});

test('Функция возращает null при неправильном значении', () => {
  expect(checkData('+51.50851 -0.12572')).toBeNull();
});
