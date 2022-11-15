let search = require("../src/search");

let output = [["abdullah"], ["sami"], ["khan"]],
  terms = ["lla", "ami", "han"];

describe("Filter function", () => {
  test("it should filter ", () => {
    const input = ["sami", "khan", "abdullah"];

    for (let i = 0; i < 3; i++) {
      expect(search(input, terms[i])).toEqual(output[i]);
    }
  });
});
