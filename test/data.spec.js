import { filterHandler } from '../src/data.js';

const testData = {
  pokemon: [
    {
      "type": [
        "grass",
        "poison"
      ],
    },
    {
      "type": [
        "poison"
      ],
    },
    {
      "type": [
        "ice",
      ],
    }
  ]
}

describe('example', () => {
  it('returns `example`', () => {
    const result = filterHandler('grass', true, testData.pokemon);
    expect(result).toHaveLength(1);
  });
  it('returns `example` 2', () => {
    const result = filterHandler('poison', true, testData.pokemon);
    expect(result).toHaveLength(3);
  });
  it('returns `example` 3', () => {
    const result = filterHandler('grass', false, testData.pokemon);
    expect(result).toHaveLength(2);
  });
  it('returns `example` 4', () => {
    const result = filterHandler('ice', true, testData.pokemon);
    expect(result).toHaveLength(3);
  });
  it('returns `example` 5', () => {
    const result = filterHandler('poison', false, testData.pokemon);
    expect(result).toHaveLength(1);
  });
});