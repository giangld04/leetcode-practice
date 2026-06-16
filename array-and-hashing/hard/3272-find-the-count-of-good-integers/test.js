// Test: 3272. Find The Count Of Good Integers
// 56 test cases from LeetCodeDataset
// Run: node test.js

const { countGoodIntegers } = require("./solution");

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

console.log("\n3272. Find The Count Of Good Integers\n");

test(countGoodIntegers(6, 8), 5221, 'Test 1');
test(countGoodIntegers(10, 9), 4610368, 'Test 2');
test(countGoodIntegers(1, 4), 2, 'Test 3');
test(countGoodIntegers(6, 9), 1248, 'Test 4');
test(countGoodIntegers(9, 1), 41457015, 'Test 5');
test(countGoodIntegers(8, 2), 563392, 'Test 6');
test(countGoodIntegers(10, 5), 19284856, 'Test 7');
test(countGoodIntegers(3, 5), 27, 'Test 8');
test(countGoodIntegers(8, 5), 237112, 'Test 9');
test(countGoodIntegers(9, 2), 37728000, 'Test 10');
test(countGoodIntegers(2, 3), 3, 'Test 11');
test(countGoodIntegers(10, 2), 39718144, 'Test 12');
test(countGoodIntegers(4, 3), 84, 'Test 13');
test(countGoodIntegers(6, 7), 3044, 'Test 14');
test(countGoodIntegers(5, 6), 2468, 'Test 15');
test(countGoodIntegers(2, 2), 4, 'Test 16');
test(countGoodIntegers(4, 7), 76, 'Test 17');
test(countGoodIntegers(7, 9), 68739, 'Test 18');
test(countGoodIntegers(6, 2), 9064, 'Test 19');
test(countGoodIntegers(7, 8), 292692, 'Test 20');
test(countGoodIntegers(9, 4), 33175696, 'Test 21');
test(countGoodIntegers(4, 8), 52, 'Test 22');
test(countGoodIntegers(4, 9), 28, 'Test 23');
test(countGoodIntegers(9, 5), 15814071, 'Test 24');
test(countGoodIntegers(7, 3), 206217, 'Test 25');
test(countGoodIntegers(9, 8), 30771543, 'Test 26');
test(countGoodIntegers(5, 1), 10935, 'Test 27');
test(countGoodIntegers(4, 5), 52, 'Test 28');
test(countGoodIntegers(10, 3), 13831104, 'Test 29');
test(countGoodIntegers(7, 2), 509248, 'Test 30');
test(countGoodIntegers(5, 9), 1191, 'Test 31');
test(countGoodIntegers(5, 2), 7400, 'Test 32');
test(countGoodIntegers(3, 9), 23, 'Test 33');
test(countGoodIntegers(10, 6), 13249798, 'Test 34');
test(countGoodIntegers(7, 4), 393948, 'Test 35');
test(countGoodIntegers(5, 7), 2665, 'Test 36');
test(countGoodIntegers(8, 3), 207840, 'Test 37');
test(countGoodIntegers(8, 4), 494818, 'Test 38');
test(countGoodIntegers(6, 4), 6992, 'Test 39');
test(countGoodIntegers(2, 9), 1, 'Test 40');
test(countGoodIntegers(8, 7), 506388, 'Test 41');
test(countGoodIntegers(9, 3), 13726509, 'Test 42');
test(countGoodIntegers(4, 2), 172, 'Test 43');
test(countGoodIntegers(5, 5), 2231, 'Test 44');
test(countGoodIntegers(9, 6), 12476696, 'Test 45');
test(countGoodIntegers(5, 3), 3573, 'Test 46');
test(countGoodIntegers(9, 7), 36789447, 'Test 47');
test(countGoodIntegers(3, 8), 27, 'Test 48');
test(countGoodIntegers(3, 1), 243, 'Test 49');
test(countGoodIntegers(6, 3), 3744, 'Test 50');
test(countGoodIntegers(6, 6), 3109, 'Test 51');
test(countGoodIntegers(5, 8), 2231, 'Test 52');
test(countGoodIntegers(4, 6), 58, 'Test 53');
test(countGoodIntegers(8, 8), 460048, 'Test 54');
test(countGoodIntegers(6, 5), 3256, 'Test 55');
test(countGoodIntegers(10, 7), 40242031, 'Test 56');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

