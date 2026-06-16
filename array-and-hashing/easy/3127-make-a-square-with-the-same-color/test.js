// Test: 3127. Make A Square With The Same Color
// 173 test cases from LeetCodeDataset
// Run: node test.js

const { canMakeSquare } = require("./solution");

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

console.log("\n3127. Make A Square With The Same Color\n");

test(canMakeSquare([['B','W','B'],['W','B','W'],['B','W','B']]), false, 'Test 1');
test(canMakeSquare([['B','B','W'],['B','B','W'],['B','B','W']]), true, 'Test 2');
test(canMakeSquare({"grid": [["B","W","B"],["B","W","W"],["B","W","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 3');
test(canMakeSquare({"grid": [["B","B","B"],["B","B","B"],["B","B","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 4');
test(canMakeSquare({"grid": [["B","W","W"],["B","W","W"],["W","W","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 5');
test(canMakeSquare({"grid": [["B","W","B"],["B","W","W"],["B","W","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 6');
test(canMakeSquare({"grid": [["W","W","W"],["W","W","W"],["W","W","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 7');
test(canMakeSquare([['B','W','B'],['B','W','W'],['B','W','B']]), true, 'Test 8');
test(canMakeSquare([['B','B','B'],['B','W','B'],['B','B','B']]), true, 'Test 9');
test(canMakeSquare({"grid": [["B","W","B"],["W","W","B"],["B","W","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 10');
test(canMakeSquare([['W','W','B'],['W','W','B'],['W','W','B']]), true, 'Test 11');
test(canMakeSquare([['W','W','W'],['W','B','W'],['W','W','W']]), true, 'Test 12');
test(canMakeSquare([['B','W','W'],['W','W','W'],['W','W','B']]), true, 'Test 13');
test(canMakeSquare({"grid": [["W","W","B"],["W","B","B"],["B","B","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 14');
test(canMakeSquare({"grid": [["B","W","B"],["W","B","W"],["B","W","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 15');
test(canMakeSquare({"grid": [["W","B","B"],["W","B","B"],["B","B","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 16');
test(canMakeSquare([['W','B','W'],['B','W','B'],['W','B','W']]), false, 'Test 17');
test(canMakeSquare([['B','W','B'],['B','W','W'],['B','W','W']]), true, 'Test 18');
test(canMakeSquare({"grid": [["W","B","W"],["B","W","B"],["W","B","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 19');
test(canMakeSquare([['W','B','B'],['B','B','B'],['B','B','W']]), true, 'Test 20');
test(canMakeSquare({"grid": [["W","B","B"],["B","W","W"],["B","B","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 21');
test(canMakeSquare({"grid": [["B","B","W"],["W","B","W"],["B","W","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 22');
test(canMakeSquare({"grid": [["B","B","B"],["B","W","B"],["B","B","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 23');
test(canMakeSquare({"grid": [["B","B","B"],["B","W","W"],["B","W","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 24');
test(canMakeSquare({"grid": [["B","B","B"],["B","B","W"],["W","B","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 25');
test(canMakeSquare({"grid": [["W","B","W"],["W","B","W"],["W","W","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 26');
test(canMakeSquare({"grid": [["W","B","B"],["B","W","W"],["W","B","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 27');
test(canMakeSquare({"grid": [["B","W","B"],["W","W","W"],["B","W","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 28');
test(canMakeSquare({"grid": [["B","W","B"],["W","W","W"],["W","W","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 29');
test(canMakeSquare({"grid": [["W","W","W"],["B","B","B"],["W","B","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 30');
test(canMakeSquare({"grid": [["B","W","B"],["B","B","B"],["B","W","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 31');
test(canMakeSquare({"grid": [["W","W","W"],["B","W","B"],["B","B","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 32');
test(canMakeSquare({"grid": [["B","B","B"],["W","W","W"],["B","B","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 33');
test(canMakeSquare({"grid": [["B","W","W"],["B","B","B"],["W","B","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 34');
test(canMakeSquare({"grid": [["W","B","B"],["B","W","B"],[W","B","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 35');
test(canMakeSquare({"grid": [["W","B","W"],["B","B","B"],["B","W","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 36');
test(canMakeSquare({"grid": [["W","W","W"],["B","B","B"],["B","B","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 37');
test(canMakeSquare({"grid": [["B","W","W"],["W","W","W"],["W","B","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 38');
test(canMakeSquare({"grid": [["W","W","B"],["B","B","W"],["W","W","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 39');
test(canMakeSquare({"grid": [["B","W","W"],["W","B","B"],["W","B","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 40');
test(canMakeSquare({"grid": [["W","B","W"],["W","W","B"],["B","W","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 41');
test(canMakeSquare({"grid": [["W","B","W"],["B","B","W"],["W","B","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 42');
test(canMakeSquare({"grid": [["W","B","B"],["B","W","B"],["B","W","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 43');
test(canMakeSquare({"grid": [["W","B","B"],["B","B","B"],["B","B","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 44');
test(canMakeSquare({"grid": [["B","W","B"],["W","W","W"],["B","B","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 45');
test(canMakeSquare({"grid": [["B","B","W"],["B","W","B"],["B","W","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 46');
test(canMakeSquare({"grid": [["W","W","W"],["B","W","B"],["W","B","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 47');
test(canMakeSquare({"grid": [["W","W","W"],["B","B","B"],["W","W","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 48');
test(canMakeSquare({"grid": [["W","B","W"],["W","B","W"],["B","B","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 49');
test(canMakeSquare({"grid": [["W","B","W"],["B","W","B"],["B","W","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 50');
test(canMakeSquare({"grid": [["B","W","W"],["B","B","B"],["B","W","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 51');
test(canMakeSquare({"grid": [["B","W","W"],["W","B","W"],[B","W","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 52');
test(canMakeSquare({"grid": [["B","B","B"],["W","B","B"],["B","B","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 53');
test(canMakeSquare({"grid": [["W","W","B"],["B","B","B"],["W","B","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 54');
test(canMakeSquare({"grid": [["B","B","W"],["W","W","W"],["B","B","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 55');
test(canMakeSquare({"grid": [["W","B","W"],["W","W","B"],["W","B","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 56');
test(canMakeSquare({"grid": [["W","W","W"],["W","B","W"],["W","W","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 57');
test(canMakeSquare({"grid": [["B","B","B"],["W","W","B"],["B","B","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 58');
test(canMakeSquare({"grid": [["W","W","B"],["W","B","B"],["B","B","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 59');
test(canMakeSquare({"grid": [["B","W","B"],["W","W","B"],["B","B","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 60');
test(canMakeSquare({"grid": [["B","W","W"],["W","W","B"],["W","B","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 61');
test(canMakeSquare({"grid": [["W","B","W"],["W","W","B"],["B","B","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 62');
test(canMakeSquare({"grid": [["W","W","W"],["B","B","B"],["B","B","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 63');
test(canMakeSquare({"grid": [["B","B","B"],["W","B","B"],["W","W","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 64');
test(canMakeSquare({"grid": [["W","B","B"],["B","B","W"],["W","W","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 65');
test(canMakeSquare({"grid": [["W","W","B"],["W","B","W"],["B","W","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 66');
test(canMakeSquare({"grid": [["B","W","B"],["B","B","W"],["B","W","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 67');
test(canMakeSquare({"grid": [["B","B","W"],["W","W","B"],["W","W","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 68');
test(canMakeSquare({"grid": [["B","B","W"],["W","W","W"],["W","W","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 69');
test(canMakeSquare({"grid": [["B","W","B"],["B","W","B"],["W","W","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 70');
test(canMakeSquare({"grid": [["W","B","B"],["B","W","B"],["B","B","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 71');
test(canMakeSquare({"grid": [["W","W","B"],["B","B","W"],["W","B","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 72');
test(canMakeSquare({"grid": [["B","B","W"],["W","B","W"],["B","B","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 73');
test(canMakeSquare({"grid": [["B","W","B"],["B","W","B"],["B","B","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 74');
test(canMakeSquare({"grid": [["W","B","B"],["B","W","W"],[W","W","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 75');
test(canMakeSquare({"grid": [["W","B","W"],["B","W","B"],["W","W","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 76');
test(canMakeSquare({"grid": [["W","B","W"],["W","B","W"],["B","W","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 77');
test(canMakeSquare({"grid": [["W","B","W"],["B","B","W"],["W","W","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 78');
test(canMakeSquare({"grid": [["B","B","W"],["B","W","B"],["W","W","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 79');
test(canMakeSquare({"grid": [["B","W","B"],["W","W","B"],["W","B","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 80');
test(canMakeSquare({"grid": [["B","W","W"],["W","B","W"],["B","B","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 81');
test(canMakeSquare({"grid": [["B","B","W"],["W","B","B"],["W","W","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 82');
test(canMakeSquare({"grid": [["W","B","B"],["B","W","W"],["B","W","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 83');
test(canMakeSquare({"grid": [["B","B","B"],["W","W","W"],["W","W","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 84');
test(canMakeSquare({"grid": [["B","B","B"],["B","B","W"],["W","B","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 85');
test(canMakeSquare({"grid": [["W","W","W"],["W","B","B"],["B","B","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 86');
test(canMakeSquare({"grid": [["W","W","B"],["B","W","B"],["B","W","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 87');
test(canMakeSquare({"grid": [["B","B","W"],["W","W","W"],["W","B","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 88');
test(canMakeSquare({"grid": [["B","B","W"],["B","B","W"],["W","W","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 89');
test(canMakeSquare({"grid": [["W","B","W"],["W","W","W"],["B","W","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 90');
test(canMakeSquare({"grid": [["B","B","B"],["W","W","W"],["W","B","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 91');
test(canMakeSquare({"grid": [["W","W","W"],["W","W","B"],["B","B","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 92');
test(canMakeSquare({"grid": [["W","W","W"],["W","W","B"],["W","B","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 93');
test(canMakeSquare({"grid": [["W","W","B"],["B","W","W"],["W","B","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 94');
test(canMakeSquare({"grid": [["B","W","W"],["W","B","W"],["W","W","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 95');
test(canMakeSquare({"grid": [["W","B","B"],["W","W","B"],["W","B","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 96');
test(canMakeSquare({"grid": [["B","B","W"],["W","W","W"],["B","B","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 97');
test(canMakeSquare({"grid": [["B","W","B"],["W","B","W"],["W","W","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 98');
test(canMakeSquare({"grid": [["W","B","W"],["B","B","B"],["W","B","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 99');
test(canMakeSquare({"grid": [["B","B","B"],["B","B","B"],["W","W","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 100');
test(canMakeSquare({"grid": [["B","W","B"],["B","W","B"],["W","B","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 101');
test(canMakeSquare({"grid": [["W","B","B"],["B","W","B"],["W","B","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 102');
test(canMakeSquare({"grid": [["B","B","B"],["B","W","W"],["W","W","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 103');
test(canMakeSquare({"grid": [["B","B","B"],["B","W","W"],["B","W","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 104');
test(canMakeSquare({"grid": [["B","W","W"],["W","B","B"],["B","W","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 105');
test(canMakeSquare({"grid": [["B","W","B"],["B","W","B"],["B","W","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 106');
test(canMakeSquare({"grid": [["W","B","B"],["W","W","B"],["B","B","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 107');
test(canMakeSquare({"grid": [["B","B","W"],["W","W","B"],["W","B","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 108');
test(canMakeSquare({"grid": [["W","W","B"],["B","W","B"],["W","B","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 109');
test(canMakeSquare({"grid": [["W","B","B"],["W","W","W"],["B","B","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 110');
test(canMakeSquare({"grid": [["W","W","B"],["W","W","B"],["B","W","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 111');
test(canMakeSquare({"grid": [["B","W","W"],["W","B","W"],["B","W","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 112');
test(canMakeSquare({"grid": [["B","B","W"],["B","W","B"],["W","B","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 113');
test(canMakeSquare({"grid": [["W","B","B"],["W","W","W"],["B","W","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 114');
test(canMakeSquare({"grid": [["B","W","W"],["B","W","B"],["W","W","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 115');
test(canMakeSquare({"grid": [["B","B","W"],["B","W","B"],["W","W","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 116');
test(canMakeSquare({"grid": [["B","W","B"],["W","W","B"],["W","W","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 117');
test(canMakeSquare({"grid": [["W","B","B"],["W","W","B"],["B","W","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 118');
test(canMakeSquare({"grid": [["W","B","W"],["B","B","W"],["B","B","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 119');
test(canMakeSquare({"grid": [["W","W","W"],["B","W","B"],["W","W","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 120');
test(canMakeSquare({"grid": [["B","B","B"],["W","B","W"],["B","B","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 121');
test(canMakeSquare({"grid": [["B","W","B"],["B","W","W"],["W","B","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 122');
test(canMakeSquare({"grid": [["B","B","W"],["W","W","B"],["W","B","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 123');
test(canMakeSquare({"grid": [["B","B","W"],["W","W","W"],["B","W","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 124');
test(canMakeSquare({"grid": [["W","W","W"],["W","B","B"],["B","B","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 125');
test(canMakeSquare({"grid": [["W","B","B"],["B","W","B"],["B","W","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 126');
test(canMakeSquare({"grid": [["W","B","W"],["B","B","B"],["W","W","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 127');
test(canMakeSquare({"grid": [["W","B","W"],["W","W","W"],["B","B","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 128');
test(canMakeSquare({"grid": [["W","B","B"],["B","B","B"],["W","W","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 129');
test(canMakeSquare({"grid": [["B","W","W"],["B","B","B"],["W","W","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 130');
test(canMakeSquare({"grid": [["W","W","B"],["B","B","B"],["B","B","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 131');
test(canMakeSquare({"grid": [["B","B","W"],["W","W","B"],["B","W","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 132');
test(canMakeSquare({"grid": [["B","B","W"],["B","W","B"],["W","B","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 133');
test(canMakeSquare({"grid": [["W","B","W"],["W","B","W"],["B","W","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 134');
test(canMakeSquare({"grid": [["W","B","B"],["W","B","W"],["W","B","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 135');
test(canMakeSquare({"grid": [["B","W","B"],["B","B","B"],["W","W","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 136');
test(canMakeSquare({"grid": [["W","W","B"],["B","W","B"],["W","B","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 137');
test(canMakeSquare({"grid": [["W","W","W"],["W","B","W"],["W","B","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 138');
test(canMakeSquare({"grid": [["W","W","B"],["W","B","W"],["B","W","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 139');
test(canMakeSquare({"grid": [["W","W","W"],["W","B","B"],["W","B","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 140');
test(canMakeSquare({"grid": [["W","B","B"],["W","W","W"],[B","B","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 141');
test(canMakeSquare({"grid": [["W","B","W"],["B","B","B"],["W","W","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 142');
test(canMakeSquare({"grid": [["W","W","W"],["B","W","B"],["B","W","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 143');
test(canMakeSquare({"grid": [["B","B","W"],["W","W","B"],["W","W","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 144');
test(canMakeSquare({"grid": [["B","B","B"],["W","B","B"],["B","W","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 145');
test(canMakeSquare({"grid": [["W","B","W"],["B","B","W"],["W","W","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 146');
test(canMakeSquare({"grid": [["W","W","B"],["W","B","B"],["B","W","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 147');
test(canMakeSquare({"grid": [["B","B","W"],["W","W","B"],["B","W","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 148');
test(canMakeSquare({"grid": [["B","W","B"],["W","W","B"],["B","B","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 149');
test(canMakeSquare({"grid": [["B","B","B"],["B","W","W"],["W","W","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 150');
test(canMakeSquare({"grid": [["B","W","W"],["W","B","W"],[W","W","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 151');
test(canMakeSquare({"grid": [["W","B","W"],["W","W","B"],["W","W","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 152');
test(canMakeSquare({"grid": [["B","W","B"],["W","B","B"],["B","B","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 153');
test(canMakeSquare({"grid": [["B","B","B"],["W","W","W"],["B","W","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 154');
test(canMakeSquare({"grid": [["B","W","W"],["W","B","W"],["W","B","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 155');
test(canMakeSquare({"grid": [["B","B","W"],["W","B","B"],["W","B","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 156');
test(canMakeSquare({"grid": [["W","W","B"],["B","W","W"],["B","B","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 157');
test(canMakeSquare({"grid": [["B","W","W"],["W","B","B"],["W","B","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 158');
test(canMakeSquare({"grid": [["W","W","B"],["B","B","B"],["W","W","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 159');
test(canMakeSquare({"grid": [["W","B","B"],["B","B","B"],["W","W","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 160');
test(canMakeSquare({"grid": [["W","B","B"],["W","W","B"],["B","W","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 161');
test(canMakeSquare({"grid": [["W","W","B"],["W","B","B"],["B","W","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 162');
test(canMakeSquare({"grid": [["W","W","W"],["B","B","B"],["B","W","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 163');
test(canMakeSquare({"grid": [["B","W","B"],["W","B","W"],["W","W","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 164');
test(canMakeSquare({"grid": [["B","W","B"],["B","W","W"],["W","B","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 165');
test(canMakeSquare({"grid": [["B","W","W"],["W","W","W"],["B","B","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 166');
test(canMakeSquare({"grid": [["W","B","B"],["W","B","W"],["B","W","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 167');
test(canMakeSquare({"grid": [["B","B","W"],["W","B","W"],["W","W","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 168');
test(canMakeSquare({"grid": [["W","W","B"],["B","B","B"],["B","W","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 169');
test(canMakeSquare({"grid": [["W","W","W"],["B","B","W"],["W","B","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 170');
test(canMakeSquare({"grid": [["B","B","B"],["W","B","B"],["B","B","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 171');
test(canMakeSquare({"grid": [["W","W","W"],["B","B","W"],["W","B","B"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 172');
test(canMakeSquare({"grid": [["B","W","W"],["W","B","B"],["B","B","W"]]}), Error: Solution.canMakeSquare[] missing 1 required positional argument: 'grid', 'Test 173');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

// Auto-mark DONE when all tests pass
if (!failed) {
  const path = require("path");
  const fs = require("fs");
  const dir = __dirname;
  const folder = path.basename(dir);
  if (!folder.startsWith("DONE-")) {
    const parent = path.dirname(dir);
    const newDir = path.join(parent, "DONE-" + folder);
    fs.renameSync(dir, newDir);
    const readme = path.join(newDir, "README.md");
    if (fs.existsSync(readme)) {
      let c = fs.readFileSync(readme, "utf-8");
      if (!c.includes("<!-- SOLVED -->")) {
        c = c.replace(/^(# .+)$/m, "$1 ✅\n<!-- SOLVED -->");
        fs.writeFileSync(readme, c);
      }
    }
    console.log("✅ DONE → " + "DONE-" + folder);
  }
}
