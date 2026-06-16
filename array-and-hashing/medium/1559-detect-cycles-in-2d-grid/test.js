// Test: 1559. Detect Cycles In 2D Grid
// 94 test cases from LeetCodeDataset
// Run: node test.js

const { containsCycle } = require("./solution");

let passed = 0, failed = 0;
function test(actual, expected, label) {
  const a = JSON.stringify(actual);
  const e = JSON.stringify(expected);
  if (a === e) {
    passed++;
  } else {
    console.log(`  ✗ ${label}`);
    console.log(`    Expected: ${e}`);
    console.log(`    Actual:   ${a}`);
    failed++;
  }
}

console.log("\n1559. Detect Cycles In 2D Grid\n");

test(containsCycle([["a","b","c"],["b","c","a"],["c","a","b"]]), false, 'Test 1');
test(containsCycle([["a","a","a","a"],["a","b","b","a"],["a","b","b","a"],["a","a","a","a"]]), true, 'Test 2');
test(containsCycle([["a","b"],["b","a"]]), false, 'Test 3');
test(containsCycle([["c","c","c","a"],["c","d","c","c"],["c","c","e","c"],["f","c","c","c"]]), true, 'Test 4');
test(containsCycle([["a","a","a","a"],["a","a","a","a"],["a","a","a","a"],["a","a","a","a"]]), true, 'Test 5');
test(containsCycle([["a","a"],["a","a"]]), true, 'Test 6');
test(containsCycle([["a","b","b"],["b","z","b"],["b","b","a"]]), false, 'Test 7');
test(containsCycle([["a"]]), false, 'Test 8');
test(containsCycle([["a","a","a","a","a","a"],["a","b","b","b","b","a"],["a","b","a","a","b","a"],["a","b","a","b","b","a"],["a","a","b","b","a","a"],["a","a","a","a","a","a"]]), true, 'Test 9');
test(containsCycle([["a","a","a","a"],["a","b","b","a"],["a","b","b","a"],["a","a","a","a"]]"), Error: Solution.containsCycle[] missing 1 required positional argument: 'grid', 'Test 10');
test(containsCycle([["a","b","c","d","e"],["a","a","a","a","a"],["b","b","b","b","b"],["c","c","c","c","c"],["d","d","d","d","d"]]), false, 'Test 11');
test(containsCycle([["a","a","a","a","a","a","a","a"],["a","b","b","b","b","b","b","a"],["a","b","c","c","c","c","b","a"],["a","b","c","d","d","c","b","a"],["a","b","c","d","d","c","b","a"],["a","b","c","c","c","c","b","a"],["a","b","b","b","b","b","b","a"],["a","a","a","a","a","a","a","a"]]"), Error: Solution.containsCycle[] missing 1 required positional argument: 'grid', 'Test 12');
test(containsCycle([["a","a","a","a","a"],["a","b","b","b","a"],["a","b","a","b","a"],["a","b","b","b","a"],["a","a","a","a","a"]]), true, 'Test 13');
test(containsCycle([["p","q","r"],["q","r","p"],["r","p","q"],["p","q","r"]]), false, 'Test 14');
test(containsCycle([["a","a","a","a"],["a","b","b","a"],["a","b","b","a"],["a","a","a","a"],["a","b","b","a"],["a","b","b","a"]]), true, 'Test 15');
test(containsCycle([["a","b","c","a"],["b","c","a","b"],["c","a","b","c"],["a","b","c","a"]]), false, 'Test 16');
test(containsCycle([["a","b","c","d","e"],["b","a","e","d","c"],["c","e","a","b","d"],["d","c","b","a","e"],["e","d","c","e","a"]]), false, 'Test 17');
test(containsCycle([["a","a","a","b","b"],["a","a","b","b","a"],["a","b","b","a","a"],["b","b","a","a","a"],["b","a","a","a","b"]]), true, 'Test 18');
test(containsCycle([["z","y","x","w","v","u","t"],["y","x","w","v","u","t","s"],["x","w","v","u","t","s","r"],["w","v","u","t","s","r","q"],["v","u","t","s","r","q","p"],["u","t","s","r","q","p","o"],["t","s","r","q","p","o","n"]]), false, 'Test 19');
test(containsCycle([["c","c","c","c","c"],["c","d","d","d","c"],["c","d","c","d","c"],["c","d","d","d","c"],["c","c","c","c","c"]]), true, 'Test 20');
test(containsCycle([["a","b","c","d","e","f"],["f","a","b","c","d","e"],["e","f","a","b","c","d"],["d","e","f","a","b","c"],["c","d","e","f","a","b"],["b","c","d","e","f","a"]]), false, 'Test 21');
test(containsCycle([["a","a","a","a","a"],["a","b","b","b","a"],["a","b","a","b","a"],["a","b","b","b","a"],["a","a","a","a","a"]]), true, 'Test 22');
test(containsCycle([["a","b","c","d","e"],["e","d","c","b","a"],["a","b","c","d","e"],["e","d","c","b","a"],["a","b","c","d","e"]]"), Error: Solution.containsCycle[] missing 1 required positional argument: 'grid', 'Test 23');
test(containsCycle([["a","a","a","a","a"],["a","b","b","a","a"],["a","b","b","a","a"],["a","a","a","a","a"],["a","a","a","a","a"]]), true, 'Test 24');
test(containsCycle([["a","b","c","d","e","f"],["f","e","d","c","b","a"],["a","b","c","d","e","f"],["f","e","d","c","b","a"],["a","b","c","d","e","f"]]), false, 'Test 25');
test(containsCycle([["a","b","c","d","e","f"],["b","c","d","e","f","a"],["c","d","e","f","a","b"],["d","e","f","a","b","c"],["e","f","a","b","c","d"],["f","a","b","c","d","e"]]), false, 'Test 26');
test(containsCycle([["a","a","a","a","a"],["a","a","a","a","a"],["a","a","a","a","a"],["a","a","a","a","a"],["a","a","a","a","a"]]"), Error: Solution.containsCycle[] missing 1 required positional argument: 'grid', 'Test 27');
test(containsCycle([["a","b","a","b","a","b","a","b","a","b","a","b","a","b","a","b","a","b","a","b"]]), false, 'Test 28');
test(containsCycle([["a","a","a","a","a"],["a","b","b","a","a"],["a","b","b","a","a"],["a","a","a","a","a"],["a","a","a","a","a"]]"), Error: Solution.containsCycle[] missing 1 required positional argument: 'grid', 'Test 29');
test(containsCycle([["a","b","c","d","e","f"],["f","e","d","c","b","a"],["a","b","c","d","e","f"],["f","e","d","c","b","a"],["a","b","c","d","e","f"],["f","e","d","c","b","a"]]), false, 'Test 30');
test(containsCycle([["a","b","a","b"],["b","a","b","a"],["a","b","a","b"],["b","a","b","a"]]), false, 'Test 31');
test(containsCycle([["a","a","a","a","a","a"],["a","a","a","a","a","a"],["a","a","a","a","a","a"],["a","a","a","a","a","a"],["a","a","a","a","a","a"]]"), Error: Solution.containsCycle[] missing 1 required positional argument: 'grid', 'Test 32');
test(containsCycle([["a","b","a","b","a"],["b","a","b","a","b"],["a","b","a","b","a"],["b","a","b","a","b"],["a","b","a","b","a"]]), false, 'Test 33');
test(containsCycle([["a","a","a","a","a"],["a","b","b","b","a"],["a","b","c","b","a"],["a","b","b","b","a"],["a","a","a","a","a"]]), true, 'Test 34');
test(containsCycle([["a","a","a","a","a"],["a","a","a","a","a"],["a","a","a","a","a"],["a","a","a","a","a"],["a","a","a","a","a"]]), true, 'Test 35');
test(containsCycle([["a","a","a"],["a","b","a"],["a","a","a"],["a","b","a"],["a","a","a"]]), true, 'Test 36');
test(containsCycle([["c","c","c","a"],["c","d","c","c"],["c","c","e","c"],["f","c","c","c"]]"), Error: Solution.containsCycle[] missing 1 required positional argument: 'grid', 'Test 37');
test(containsCycle([["a","b","c","a"],["b","c","a","b"],["c","a","b","c"],["a","b","c","a"]]"), Error: Solution.containsCycle[] missing 1 required positional argument: 'grid', 'Test 38');
test(containsCycle([["a","b","c","d","e"],["b","c","d","e","f"],["c","d","e","f","g"],["d","e","f","g","h"],["e","f","g","h","i"]]), false, 'Test 39');
test(containsCycle([["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"]]), false, 'Test 40');
test(containsCycle([["x","y","z","x"],["y","z","x","y"],["z","x","y","z"],["x","y","z","x"]]), false, 'Test 41');
test(containsCycle([["a","a","a","a","a"],["a","b","b","b","a"],["a","b","c","b","a"],["a","b","b","b","a"],["a","a","a","a","a"]]), true, 'Test 42');
test(containsCycle([["a","b","c","a","b","c"],["b","c","a","b","c","a"],["c","a","b","c","a","b"],["a","b","c","a","b","c"],["b","c","a","b","c","a"],["c","a","b","c","a","b"]]), false, 'Test 43');
test(containsCycle([["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],["a","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","a"],["a","b","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","b","a"],["a","b","a","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","a"],["a","b","a","b","a","a","a","a","a","a","a","a","a","a","a","a","a","b","b","a"],["a","b","b","b","a","b","b","b","b","b","b","b","b","b","b","b","b","a","a","a"],["a","a","a","b","a","b","a","a","a","a","a","a","a","a","a","a","b","a","a","a"],["a","b","b","b","a","b","b","b","b","b","b","b","b","b","b","b","b","a","a","a"],["a","b","a","a","a","a","a","a","a","a","a","a","a","a","a","a","b","a","a","a"],["a","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","a","a","a"],["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"]]), true, 'Test 44');
test(containsCycle([["a","b","c","d","e"],["f","g","h","i","j"],["a","b","c","d","e"],["f","g","h","i","j"],["a","b","c","d","e"]]"), Error: Solution.containsCycle[] missing 1 required positional argument: 'grid', 'Test 45');
test(containsCycle([["a","a","a","a","a","a"],["a","b","b","b","b","a"],["a","b","c","c","b","a"],["a","b","c","c","b","a"],["a","b","b","b","b","a"],["a","a","a","a","a","a"]]), true, 'Test 46');
test(containsCycle([["x","y","z"],["y","x","y"],["z","y","x"],["y","x","y"],["x","y","z"]]), false, 'Test 47');
test(containsCycle([["a","b","c","d"],["d","c","b","a"],["a","b","c","d"],["d","c","b","a"]]"), Error: Solution.containsCycle[] missing 1 required positional argument: 'grid', 'Test 48');
test(containsCycle([["a","b","c","d","e"],["b","a","b","c","d"],["c","b","a","b","c"],["d","c","b","a","b"],["e","d","c","b","a"]]), false, 'Test 49');
test(containsCycle([["a","a","a","a","a","a"],["a","b","b","b","b","a"],["a","b","a","a","b","a"],["a","b","a","a","b","a"],["a","b","b","b","b","a"],["a","a","a","a","a","a"]]), true, 'Test 50');
test(containsCycle([["a","a","a","a","a","a","a","a"],["a","b","b","b","b","b","b","a"],["a","b","a","a","a","a","b","a"],["a","b","a","b","b","a","b","a"],["a","b","a","a","a","a","b","a"],["a","b","b","b","b","b","b","a"],["a","a","a","a","a","a","a","a"]]), true, 'Test 51');
test(containsCycle([["x","x","x","x","x","x"],["x","y","y","y","y","x"],["x","y","z","z","y","x"],["x","y","z","z","y","x"],["x","y","y","y","y","x"],["x","x","x","x","x","x"]]), true, 'Test 52');
test(containsCycle([["a","b","c","d"],["d","c","b","a"],["a","b","c","d"],["d","c","b","a"],["a","b","c","d"]]"), Error: Solution.containsCycle[] missing 1 required positional argument: 'grid', 'Test 53');
test(containsCycle([["a","b","c","d","e","f","g","h"],["h","g","f","e","d","c","b","a"],["a","b","c","d","e","f","g","h"],["h","g","f","e","d","c","b","a"],["a","b","c","d","e","f","g","h"],["h","g","f","e","d","c","b","a"]]"), Error: Solution.containsCycle[] missing 1 required positional argument: 'grid', 'Test 54');
test(containsCycle([["x","x","x","x"],["x","y","y","x"],["x","y","y","x"],["x","x","x","x"]]), true, 'Test 55');
test(containsCycle([["a","b","c","d","e","f"],["a","a","a","a","a","a"],["b","c","d","e","f","g"],["g","f","e","d","c","b"],["a","a","a","a","a","a"]]), false, 'Test 56');
test(containsCycle([["a","a","a","a","a","a","a"],["a","b","b","b","b","b","a"],["a","b","a","a","a","b","a"],["a","b","a","a","a","b","a"],["a","b","a","a","a","b","a"],["a","b","b","b","b","b","a"],["a","a","a","a","a","a","a"]]), true, 'Test 57');
test(containsCycle([["a","b","c","d","e","f"],["f","e","d","c","b","a"],["a","b","c","d","e","f"],["f","e","d","c","b","a"]]"), Error: Solution.containsCycle[] missing 1 required positional argument: 'grid', 'Test 58');
test(containsCycle([["a","b","c"],["b","a","b"],["c","b","a"]]), false, 'Test 59');
test(containsCycle([["p","p","q","p","p"],["p","q","q","q","p"],["q","q","r","q","q"],["p","q","q","q","p"],["p","p","q","p","p"]]), true, 'Test 60');
test(containsCycle([["a","a","a","a","b","b","b"],["a","c","c","a","b","b","b"],["a","c","c","a","b","b","b"],["a","a","a","a","b","b","b"]]"), Error: Solution.containsCycle[] missing 1 required positional argument: 'grid', 'Test 61');
test(containsCycle([["a","b","a","b","a"],["b","a","b","a","b"],["a","b","a","b","a"],["b","a","b","a","b"]]), false, 'Test 62');
test(containsCycle([["x","x","y","y","x"],["x","y","y","x","y"],["y","y","x","x","y"],["y","x","y","y","x"]]"), Error: Solution.containsCycle[] missing 1 required positional argument: 'grid', 'Test 63');
test(containsCycle([["a","b","a","b","a","b","a","b","a","b"],["b","a","b","a","b","a","b","a","b","a"],["a","b","a","b","a","b","a","b","a","b"],["b","a","b","a","b","a","b","a","b","a"],["a","b","a","b","a","b","a","b","a","b"],["b","a","b","a","b","a","b","a","b","a"]]), false, 'Test 64');
test(containsCycle([["a","a","a"],["b","b","b"],["a","a","a"],["b","b","b"],["a","a","a"]]), false, 'Test 65');
test(containsCycle([["a","a","a","a","a","a","a"],["a","a","a","a","a","a","a"],["a","a","a","a","a","a","a"],["a","a","a","a","a","a","a"],["a","a","a","a","a","a","a"]]"), Error: Solution.containsCycle[] missing 1 required positional argument: 'grid', 'Test 66');
test(containsCycle([["a","b","c","d","e"],["b","c","d","e","a"],["c","d","e","a","b"],["d","e","a","b","c"],["e","a","b","c","d"]]), false, 'Test 67');
test(containsCycle([["a","a","a","a","a","a","a"],["a","b","b","b","b","b","a"],["a","b","c","c","b","b","a"],["a","b","c","c","b","b","a"],["a","b","b","b","b","b","a"],["a","a","a","a","a","a","a"]]"), Error: Solution.containsCycle[] missing 1 required positional argument: 'grid', 'Test 68');
test(containsCycle([["a","b","c","d","e"],["e","d","c","b","a"],["a","b","c","d","e"],["e","d","c","b","a"]]"), Error: Solution.containsCycle[] missing 1 required positional argument: 'grid', 'Test 69');
test(containsCycle([["a","a","a","a","a","a","a"],["a","b","b","b","b","b","a"],["a","b","c","c","c","b","a"],["a","b","c","d","d","c","b"],["a","b","c","d","d","c","b"],["a","b","c","c","c","b","a"],["a","b","b","b","b","b","a"],["a","a","a","a","a","a","a"]]), true, 'Test 70');
test(containsCycle([["a","a","a","a"],["a","b","b","a"],["a","b","b","a"],["a","a","a","a"],["a","a","a","a"]]), true, 'Test 71');
test(containsCycle([["a","a","a","a"],["a","b","b","a"],["a","b","a","a"],["a","a","a","a"],["a","a","a","a"],["a","a","a","a"]]), true, 'Test 72');
test(containsCycle([["a","b","c","d","a"],["b","a","b","c","b"],["c","b","a","b","c"],["d","c","b","a","d"],["a","b","c","d","a"]]), false, 'Test 73');
test(containsCycle([["a","a","a","a","a","a","a"],["a","b","b","b","b","b","a"],["a","b","c","c","c","b","a"],["a","b","c","d","c","b","a"],["a","b","c","c","c","b","a"],["a","b","b","b","b","b","a"],["a","a","a","a","a","a","a"]]), true, 'Test 74');
test(containsCycle([["a","b","c","a"],["b","a","b","c"],["c","b","c","b"],["a","c","b","a"]]), false, 'Test 75');
test(containsCycle([["a","b","a","b","a","b"],["b","a","b","a","b","a"],["a","b","a","b","a","b"],["b","a","b","a","b","a"],["a","b","a","b","a","b"],["b","a","b","a","b","a"]]), false, 'Test 76');
test(containsCycle([["a","b","c","d","e"],["b","c","d","e","a"],["c","d","e","a","b"],["d","e","a","b","c"],["e","a","b","c","d"]]), false, 'Test 77');
test(containsCycle([["a","a","a","a"],["b","b","b","b"],["c","c","c","c"],["d","d","d","d"],["e","e","e","e"],["f","f","f","f"]]), false, 'Test 78');
test(containsCycle([["m","m","m","m"],["m","n","n","m"],["m","n","o","m"],["m","n","n","m"],["m","m","m","m"]]), true, 'Test 79');
test(containsCycle([["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o"],["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o"],["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o"],["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o"],["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o"]]), false, 'Test 80');
test(containsCycle([["a","a","b","b"],["a","c","c","a"],["b","c","d","b"],["a","c","c","a"]]), false, 'Test 81');
test(containsCycle([["x","y","z","x"],["y","x","y","x"],["z","y","z","y"],["x","z","x","z"]]), false, 'Test 82');
test(containsCycle([["a","b","a","b","a","b","a"],["b","a","b","a","b","a","b"],["a","b","a","b","a","b","a"],["b","a","b","a","b","a","b"],["a","b","a","b","a","b","a"]]), false, 'Test 83');
test(containsCycle([["a","a","a","a"],["a","b","b","a"],["a","b","b","a"],["a","a","a","a"],["a","a","a","a"]]), true, 'Test 84');
test(containsCycle([["a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a","a","a"]]), true, 'Test 85');
test(containsCycle([["a","b","c","d"],["e","f","g","h"],["i","j","k","l"],["m","n","o","p"]]), false, 'Test 86');
test(containsCycle([["a","b","c","d","e","f","g"],["h","i","j","k","l","m","n"],["o","p","q","r","s","t","u"],["v","w","x","y","z","v","w"],["x","y","z","v","w","x","y"],["z","v","w","x","y","z","v"]]), false, 'Test 87');
test(containsCycle([["a","a","a","a","a","a","a","a"],["a","b","b","b","b","b","b","a"],["a","b","a","a","a","a","b","a"],["a","b","a","c","c","a","b","a"],["a","b","a","c","c","a","b","a"],["a","b","a","a","a","a","b","a"],["a","b","b","b","b","b","b","a"],["a","a","a","a","a","a","a","a"]]), true, 'Test 88');
test(containsCycle([["a","b","c"],["b","c","b"],["c","b","a"],["b","c","b"],["a","b","c"]]), false, 'Test 89');
test(containsCycle([["a","a","a","a","a","a","a","a"],["a","b","b","b","b","b","b","a"],["a","b","c","c","c","c","b","a"],["a","b","c","d","d","c","b","a"],["a","b","c","d","d","c","b","a"],["a","b","c","c","c","c","b","a"],["a","b","b","b","b","b","b","a"],["a","a","a","a","a","a","a","a"]]), true, 'Test 90');
test(containsCycle([["x","y","z","x","y"],["y","z","x","y","z"],["z","x","y","z","x"],["x","y","z","x","y"],["y","z","x","y","z"]]"), Error: Solution.containsCycle[] missing 1 required positional argument: 'grid', 'Test 91');
test(containsCycle([["a","b","c","d","e"],["f","g","h","i","j"],["k","l","m","n","o"],["p","q","r","s","t"],["u","v","w","x","y"]]"), Error: Solution.containsCycle[] missing 1 required positional argument: 'grid', 'Test 92');
test(containsCycle([["a","a","a","b","b","b"],["a","c","a","b","a","b"],["a","a","a","b","b","b"]]), true, 'Test 93');
test(containsCycle([["a","b","c","d"],["b","a","d","c"],["c","d","a","b"],["d","c","b","a"]]), false, 'Test 94');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

