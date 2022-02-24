import {addStatsToObject,filterHandler,sortNameAzHandler,sortNameZaHandler,sortNumAscHandler,sortNumDesHandler} from '../src/data.js';

// data de prueba
const bulbasaur = {
  "num": "001",
  "name": "bulbasaur",
  "type": [
    "grass",
    "poison"
  ],
  "stats": {
    "base-attack": "118",
    "base-defense": "111",
    "base-stamina": "128",
  },
};

const ivysaur = {
  "num": "002",
  "name": "ivysaur",
  "type": [
    "poison"
  ],
  "stats": {
    "base-attack": "1",
    "base-defense": "2",
    "base-stamina": "3",
  },
};

const picachu = {
  "num": "003",
  "name": "picachu",
  "type": [
    "ice",
  ],
  "stats": {
    "base-attack": "4",
    "base-defense": "5",
    "base-stamina": "6",
  },
};

const charmander ={
  "num": "004",
  "name": "charmander",
  "type": [
    "dark",
  ],
  "stats": {
    "base-attack": "7",
    "base-defense": "8",
    "base-stamina": "9",
  },
};

const testData = {
  pokemon: [
    ivysaur,
    bulbasaur,
    picachu,
    charmander,
  ]
}

// se declara variable de resultados para estadisticas agregadas
let addResult;

// test de funcion addStatsToObject
describe('adding stats', () => {
  it('returns `adding stats` 1', () => {
    const result1 = addStatsToObject(testData.pokemon);
    addResult = [
      {
        ...ivysaur,
        "sum-stats": 6,
        "mean-stats": 2,
      },
      {
        ...bulbasaur,
        "sum-stats": 357,
        "mean-stats": 119,
      },
      {
        ...picachu,
        "sum-stats": 15,
        "mean-stats": 5,
      },
      {
        ...charmander,
        "sum-stats": 24,
        "mean-stats": 8,
      },      
    ]
    expect(result1).toEqual(addResult);
  });
});

// test de funcion filterHandler
describe('filter result', () => {
  it('returns `filter result` 1', () => {
    const result2 = filterHandler('grass', true,  addResult);
    expect(result2).toHaveLength(1);
  });
  it('returns `filter result` 2', () => {
    const result2 = filterHandler('poison', true, addResult);
    expect(result2).toHaveLength(2);
  });
  it('returns `filter result` 3', () => {
    const result2 = filterHandler('grass', false, addResult);
    expect(result2).toHaveLength(2);
  });
  it('returns `filter result` 4', () => {
    const result2 = filterHandler('ice', true, addResult);
    expect(result2).toHaveLength(3);
  });
  it('returns `filter result` 5', () => {
    const result2 = filterHandler('poison', false, addResult);
    expect(result2).toHaveLength(1);
  });
  it('returns `filter result` 6', () => {
    const result2 = filterHandler('ice', false, addResult);
    expect(result2).toHaveLength(4);
  });
});

// test de funcion sortNameAzHandler
describe('sort AZ', () => {
  it('returns `sort AZ` 1', () => {
    const result3 = sortNameAzHandler( addResult);
    const resultAz = [
      {
        ...bulbasaur,
        "sum-stats": 357,
        "mean-stats": 119,
      },
      {
        ...charmander,
        "sum-stats": 24,
        "mean-stats": 8,
      },
      {
        ...ivysaur,
        "sum-stats": 6,
        "mean-stats": 2,
      },
      {
        ...picachu,
        "sum-stats": 15,
        "mean-stats": 5,
      },
    ]
    expect(result3).toEqual(resultAz);
  });
});

// test de funcion sortNameZaHandler
describe('sort ZA', () => {
  it('returns `sort ZA` 1', () => {
    const result4 = sortNameZaHandler(addResult);
    const resultZa = [
      {
        ...picachu,
        "sum-stats": 15,
        "mean-stats": 5,
      },
      {
        ...ivysaur,
        "sum-stats": 6,
        "mean-stats": 2,
      },
      {
        ...charmander,
        "sum-stats": 24,
        "mean-stats": 8,
      },
      {
        ...bulbasaur,
        "sum-stats": 357,
        "mean-stats": 119,
      },
    ]
    expect(result4).toEqual(resultZa);
  });
});

// Test para funcion sortNumAscHandler
describe('sort numAsc', () => {
  it('returns `sort numAsc` 1', () => {
    const result5 = sortNumAscHandler(addResult);
    const resultNumAsc = [
      {
        ...bulbasaur,
        "sum-stats": 357,
        "mean-stats": 119,
      },
      {
        ...ivysaur,
        "sum-stats": 6,
        "mean-stats": 2,
      },
      {
        ...picachu,
        "sum-stats": 15,
        "mean-stats": 5,
      },
      {
        ...charmander,
        "sum-stats": 24,
        "mean-stats": 8,
      },        
    ]
    expect(result5).toEqual(resultNumAsc);
  });
});

// Test para funcion sortNumDesHandler
describe('sort numDes', () => {
  it('returns `sort numDes` 1', () => {
    const result6 = sortNumDesHandler(addResult);
    const resultNumDes = [
      {
        ...charmander,
        "sum-stats": 24,
        "mean-stats": 8,
      },
      {
        ...picachu,
        "sum-stats": 15,
        "mean-stats": 5,
      },
      {
        ...ivysaur,
        "sum-stats": 6,
        "mean-stats": 2,
      },
      {
        ...bulbasaur,
        "sum-stats": 357,
        "mean-stats": 119,
      },
    ]
    expect(result6).toEqual(resultNumDes);
  });
});