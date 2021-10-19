const magic = require("../src/magic.js");
const { trybeSimulator } = require("../simulator/simulator.js");

const expected = {
  name: "Ancestor's Chosen",
  manaCost: "{5}{W}{W}",
  types: ["Creature"],
  subtypes: ["Human", "Cleric"],
  rarity: "Uncommon",
};

describe(" Testa a função getMagicCard", () => {
  it("Deve retornar um objeto com as propriedades esperadas", async () => {
    const getMagicCardSimulator = trybeSimulator(magic, "getMagicCard");
    const { name, manaCost, types, subtypes, rarity } =
      await getMagicCardSimulator("130550");

    expect.assertions(6);

    // implemente seus testes aqui

    expect({ name, manaCost, types, subtypes, rarity }).toEqual(expected);
    expect(Array.isArray(types)).toBe(true);
    expect(subtypes.length).toBe(2);
    expect(rarity).toBe("Uncommon");
    expect(name).toBe(`Ancestor's Chosen`);
    expect(manaCost).toBe(`{5}{W}{W}`);
  });
});
