const testinput = await Deno.readTextFile("testinput.txt");
const input = await Deno.readTextFile("input.txt");

const parseInput = (input: string) => {
  const left: string[] = [];
  const right: string[] = [];

  input.split("\n").filter((b) => b.length).map((pair) => {
    const [l, r] = pair.split(/\s+/);
    left.push(l);
    right.push(r);
  });
  left.sort();
  right.sort();

  return {
    left,
    right,
  };
};

function pt1(input: string) {
  const { left, right } = parseInput(input);

  return left.map((val, idx) =>
    Math.abs(parseInt(val, 10) - parseInt(right[idx], 10))
  ).reduce((acc, x) => acc + x, 0);
}

function pt2(input: string) {
  const { left, right } = parseInput(input);
  let similarity = 0;
  const counted = {} as Record<string, number>;

  right.forEach((num) => {
    const parsed = parseInt(num, 10);
    counted[parsed] = counted[parsed] ? (counted[parsed] + 1) : 1;
  });

  left.forEach((num) => {
    const parsed = parseInt(num, 10);
    similarity += counted[parsed] ? parsed * counted[parsed] : 0;
  });

  return similarity;
}

export function testpt1() {
  return pt1(testinput);
}

export function testpt2() {
  return pt2(testinput);
}

if (import.meta.main) {
  console.log("answer: ", pt1(input));
  console.log("answer pt2: ", pt2(input));
}
