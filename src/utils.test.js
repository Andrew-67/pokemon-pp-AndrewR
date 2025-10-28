import { describe, test, expect } from "vitest";
import {
  filterByType,
  getPokemonNames,
  getStrongestPokemon,
  sortByName,
  calculateAverageHP,
} from "./utils.js";

// Sample test data
const testPokemon = [
  { id: 1, name: "Bulbasaur", type: "grass", hp: 45, attack: 49, defense: 49 },
  { id: 4, name: "Charmander", type: "fire", hp: 39, attack: 52, defense: 43 },
  { id: 7, name: "Squirtle", type: "water", hp: 44, attack: 48, defense: 65 },
  {
    id: 25,
    name: "Pikachu",
    type: "electric",
    hp: 35,
    attack: 55,
    defense: 40,
  },
];

describe("filterByType", () => {
  test("should return only fire type Pokemon", () => {
    const TYPE = "fire";
    const result = filterByType(testPokemon, TYPE);
    expect(result.length).toBe(1);
    expect(result[0].name).toBe("Charmander");
  });

  test("should return only water type Pokemon", () => {
    const TYPE = "water";
    const result = filterByType(testPokemon, TYPE);
    expect(result.length).toBe(1);
    expect(result[0].name).toBe("Squirtle");
  });

  test("should return empty array for non existent type", () => {
    const result = filterByType(testPokemon, "psychic");
    expect(result.length).toBe(0);
  });
});

describe("getPokemonNames", () => {
  test("should return array of Pokemon names", () => {
    const result = getPokemonNames(testPokemon);
    expect(result).toEqual(["Bulbasaur", "Charmander", "Squirtle", "Pikachu"]);
  });

  // ✅ COMPLETE: This test is done
  test("should return empty array for empty input", () => {
    const result = getPokemonNames([]);
    expect(result).toEqual([]);
  });
});

describe("getStrongestPokemon", () => {
  test("should return Pokemon with highest attack", () => {
    const INPUT = [
      { name: "PokemonA", attack: 70 },
      { name: "PokemonB", attack: 85 }, // Highest attack
      { name: "PokemonD", attack: 60 },
    ];
    const EXPECTED_OUTPUT = [{ name: "PokemonB", attack: 85 }];
    const actualOutput = getStrongestPokemon(INPUT);
    expect(actualOutput).toEqual(EXPECTED_OUTPUT);
  });
  test("Return when multiple Pokemon have same highest attack", () => {
    const testData = [
      { name: "A", attack: 50 },
      { name: "B", attack: 70 },
      { name: "C", attack: 70 },
    ];
    const should = [
      {name: "B", attack: 70 },
      {name: "C", attack: 70 },
    ];
    const result = getStrongestPokemon(testData);
    expect(result).toEqual(should);
  });
});

describe("sortByName", () => {
  test("Return Pokemon sorted alphabetically by name", () => {
  // TODO: Write test to verify Pokemon are sorted alphabetically
  const testPokemon = [
    {name: "Bulbasaur" },
    {name: "Charmander" },
    {name: "Squirtle" },
    {name: "Pikachu" },
  ];
  // TODO: Write test to verify original array is not modified (immutability)
  const result = sortByName(testPokemon);
  expect(result).toEqual([
    {name: "Bulbasaur" },
    {name: "Charmander" },
    {name: "Pikachu" },
    {name: "Squirtle" },
  ]);
  // Verify original array is not modified
  expect(testPokemon).toEqual([
    {name: "Bulbasaur" },
    {name: "Charmander" },
    {name: "Squirtle" },
    {name: "Pikachu" },
  ]);
  });
});

describe("calculateAverageHP", () => {
  test("should calculate average HP correctly", () => {
    const pokemon = [
      { name: "Pikachu", hp: 35 },
      { name: "Charmander", hp: 39 },
      { name: "Squirtle", hp: 44 },
    ];

    const result = calculateAverageHP(pokemon);
    const expectedAvg = (35 + 39 + 44) / 3;

    // Average of 35, 39, 44 = 39.33...
    expect(result).toBeCloseTo(expectedAvg, 1);
  });

  test("should return 0 for empty array", () => {
    const result = calculateAverageHP([]);
    expect(result).toBe(0);
  });

  test("should handle single Pokemon", () => {
    const result = calculateAverageHP([{ hp: 100 }]);
    expect(result).toBe(100);
  });
});
