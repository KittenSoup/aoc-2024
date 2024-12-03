const testinput = await Deno.readTextFile("testinput.txt");
const input = await Deno.readTextFile("input.txt");

const multiply = (op: string) => {
  if (op) {
  //@ts-ignore
  return op
    .match(/\d+,\d+/g)[0]
    .split(",")
    .map((n) => parseInt(n, 10))
    .reduce((val, acc) => val * acc, 1);
  } else {
    return 0;
  }
};

let validInputs = "";

// valid means the string should be included
const findValidInput = (input: string, valid?: boolean) => {
  // from start until this position, everything is valid
  if (!input.length) return validInputs;
  if (typeof valid === "undefined" || valid) {
    const startingPoint = input.indexOf("don't()");
    validInputs += `${input.slice(0, startingPoint)}`;
    findValidInput(input.slice(startingPoint+"don't()".length), false);
  } else if (!valid) {
    const endOfInvalidInputs = input.indexOf("do()");
    if (endOfInvalidInputs > 0) {
      findValidInput(input.slice(endOfInvalidInputs+"do()".length), true);
    } else {
      return validInputs;
    } 
  }
}

const pt1 = (input: string) => {
  const mulOperations = input.match(/mul\(\d+,\d+\)/g);
  if (!mulOperations) return;
  const result = mulOperations.map((op: string) => multiply(op)).reduce((val, acc) => val+acc, 0)
  return result;
};

const pt2 = (input: string) => {
  findValidInput(input);
  return pt1(validInputs)
};

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log("answer: ", pt1(input));
  console.log("answer pt2: ", pt2(input));
}

export function testpt1() {
  return pt1(testinput);
}

export function testpt2() {
  return pt2(testinput);
}