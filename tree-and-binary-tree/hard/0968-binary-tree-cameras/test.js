// Test: 968. Binary Tree Cameras
// 107 test cases from LeetCodeDataset
// Run: node test.js

const { minCameraCover } = require("./solution");

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

console.log("\n968. Binary Tree Cameras\n");

test(minCameraCover([0,null,0,null,0]), 1, 'Test 1');
test(minCameraCover([0,0,0,null,null,0,0]), 2, 'Test 2');
test(minCameraCover([0,0,null,0,0]), 1, 'Test 3');
test(minCameraCover([0,0,null,0,null,0,null,null,0]), 2, 'Test 4');
test(minCameraCover([0,0,0,0,0,null,null,null,0]), 3, 'Test 5');
test(minCameraCover([0,0,0,0,0,0]), 2, 'Test 6');
test(minCameraCover([0]), 1, 'Test 7');
test(minCameraCover([0,null,0,null,0,null,0]), 2, 'Test 8');
test(minCameraCover([0,0,0,0,null,null,0,null,0,null,0,0,null,null,0]), 3, 'Test 9');
test(minCameraCover([0,0,0,null,0,null,0,null,0,null,0,null,0]), 3, 'Test 10');
test(minCameraCover([0,0,0,null,0,0,null,null,null,0,0]), 2, 'Test 11');
test(minCameraCover([0,0,0,0,null,null,0,null,null,null,null,0]), 2, 'Test 12');
test(minCameraCover([0,null,0,0,0,0,0,0,0]), 3, 'Test 13');
test(minCameraCover([0,0,null,0,0,null,0,0,0,null,null,0,0,null,0]), 4, 'Test 14');
test(minCameraCover([0,0,0,0,0,0,0,0,0,0,0,0,0]), 4, 'Test 15');
test(minCameraCover([0,0,0,null,0,0,null,null,0,0,null,null,0]), 3, 'Test 16');
test(minCameraCover([0,0,0,0,null,0,null,null,null,0,0]), 2, 'Test 17');
test(minCameraCover([0,0,0,null,0,null,0,null,0,null,0,null,0,null,0,null,0,null,0,null,0]), 4, 'Test 18');
test(minCameraCover([0,0,0,0,null,null,0,0,null,0,null,null,0,null,0,null,0,0]), 4, 'Test 19');
test(minCameraCover([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,null,null,0,0,0,0,0,0,0,0,0,null,null]), 8, 'Test 20');
test(minCameraCover([0,0,0,null,0,0,null,0,0,null,null,0,0]), 3, 'Test 21');
test(minCameraCover([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 9, 'Test 22');
test(minCameraCover([0,0,0,null,0,0,null,0,0,0,0,0,0,0,0,null,null,0,0,0,0,0,0,0]), 7, 'Test 23');
test(minCameraCover([0,null,0,0,0,0,0,0,0,null,null,null,null,null,null,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 7, 'Test 24');
test(minCameraCover([0,0,0,0,0,0,null,null,0,null,0,null,0,0,0,0,0,null,null,0,null,0,null,0]), 6, 'Test 25');
test(minCameraCover([0,0,0,0,0,null,null,0,0,null,null,0,0,null,null,0,0]), 5, 'Test 26');
test(minCameraCover([0,0,0,0,0,0,0,null,null,null,null,null,0,0,0,null,null,0,0,0,null,null,null]), 4, 'Test 27');
test(minCameraCover([0,null,0,null,0,null,0,null,0,null,0,null,0,null,0,null,0,null,0]), 4, 'Test 28');
test(minCameraCover([0,0,0,0,0,null,0,0,0,0,0,null,null,0,0,null,0]), 4, 'Test 29');
test(minCameraCover([0,null,0,0,0,null,null,null,0,0,0,null,null,null,0]), 3, 'Test 30');
test(minCameraCover([0,0,0,0,0,null,null,0,0,0,null,0,0,null,null,null,0]), 4, 'Test 31');
test(minCameraCover([0,0,0,0,0,null,null,0,0,null,null,null,0,0,null]), 4, 'Test 32');
test(minCameraCover([0,0,0,0,0,0,0,0,0,0,0,null,null,null,null,null,null,null,null,null]), 3, 'Test 33');
test(minCameraCover([0,0,0,0,0,null,null,0,0,0,0,null,null,null,null]), 3, 'Test 34');
test(minCameraCover([0,0,0,null,0,0,0,null,0,0,0,null,0,0,0,null,0,0,0,null,0,0,0]), 6, 'Test 35');
test(minCameraCover([0,0,0,null,null,0,0,0,null,null,0,0,null,null,0,0,null,null,0,0,0]), 5, 'Test 36');
test(minCameraCover([0,0,0,0,0,0,0,null,null,null,null,null,null,0,0]), 3, 'Test 37');
test(minCameraCover([0,0,0,0,null,0,null,null,0,null,0,null,0,null,0,null,0,null,0]), 4, 'Test 38');
test(minCameraCover([0,0,0,0,null,0,0,null,null,0,0,null,null,0]), 4, 'Test 39');
test(minCameraCover([0,0,0,null,null,0,0,0,null,null,0,0,0,null,null]), 3, 'Test 40');
test(minCameraCover([0,0,0,0,0,null,null,0,0,0,0,0,0,null,null,0,0,0,0,0,0,null,null,0,0,0,null,null,0]), 8, 'Test 41');
test(minCameraCover([0,0,0,0,0,0,0,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,0,0,0,0,0,0,0,0]), 10, 'Test 42');
test(minCameraCover([0,null,0,null,0,null,0,null,0,null,0,null,0,null,0]), 3, 'Test 43');
test(minCameraCover([0,0,0,0,0,null,0,0,0,0,0,null,null,null,0,0,0]), 4, 'Test 44');
test(minCameraCover([0,0,0,0,0,null,0,0,0,0,0,null,0,0,0]), 5, 'Test 45');
test(minCameraCover([0,0,0,null,0,0,0]), 2, 'Test 46');
test(minCameraCover([0,0,0,0,0,0,0,null,0,0,null,0,0,null,0,0,null,0,0,null,0,0,null,0,0]), 6, 'Test 47');
test(minCameraCover([0,0,null,0,0,null,0,null,0,null,0,null,0,null,0]), 3, 'Test 48');
test(minCameraCover([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 8, 'Test 49');
test(minCameraCover([0,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null]), 5, 'Test 50');
test(minCameraCover([0,0,0,0,null,null,0,null,null,0,0]), 2, 'Test 51');
test(minCameraCover([0,0,0,null,0,0,null,0,0,null,0,null,0,null,0,0,0]), 4, 'Test 52');
test(minCameraCover([0,0,0,0,0,0,null,0,0,0,null,0,0,0,null,0,null,0,null,0,null,0,0,0,null,0,null,0,null,0,null,0,null,0]), 8, 'Test 53');
test(minCameraCover([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 10, 'Test 54');
test(minCameraCover([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 15, 'Test 55');
test(minCameraCover([0,0,0,0,null,null,0,0,0,0,0,0,0,0,0]), 4, 'Test 56');
test(minCameraCover([0,0,0,null,null,0,0,null,null,0,0,null,null,0,0]), 4, 'Test 57');
test(minCameraCover([0,0,0,null,0,null,0,null,null,0,null,0,null,null,0,null]), 3, 'Test 58');
test(minCameraCover([0,null,0,null,0,null,0,null,0,null,0]), 2, 'Test 59');
test(minCameraCover([0,0,0,0,0,0,0,null,null,0,null,null,0]), 4, 'Test 60');
test(minCameraCover([0,0,0,0,0,0,null,null,0,0,null,null,null,null,0]), 3, 'Test 61');
test(minCameraCover([0,0,0,0,0,0,null,null,0,0,0,null,null,0,0,0,0,0,0]), 5, 'Test 62');
test(minCameraCover([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 7, 'Test 63');
test(minCameraCover([0,null,0,null,0,null,0,null,0,null,0,null,0,null,0,null,0,null,0,null,0,null,0,null,0,null,0,null,0]), 5, 'Test 64');
test(minCameraCover([0,0,0,null,0,0,0,null,null,0,0,0,null,null,0,0]), 4, 'Test 65');
test(minCameraCover([0,0,0,null,0,0,null,null,null,0]), 2, 'Test 66');
test(minCameraCover([0,0,0,0,0,null,0,0,0,null,0,0,0,0,0,0,0,null,null,0,0]), 6, 'Test 67');
test(minCameraCover([0,0,0,0,0,null,null,null,null,0,0,0,0,0,0,null,null,null,null,0,0,0]), 5, 'Test 68');
test(minCameraCover([0,0,0,0,0,0,0,0,0,null,0,null,0,null,0]), 5, 'Test 69');
test(minCameraCover([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 8, 'Test 70');
test(minCameraCover([0,0,0,0,0,0,0,0,null,null,0,0,null,null,0,0,null,null]), 5, 'Test 71');
test(minCameraCover([0,null,0,null,0,null,0,null,0,null,0,null,0,null,0,null,0,null,0,null,0]), 4, 'Test 72');
test(minCameraCover([0,0,0,0,0,null,null,0,0,0,0]), 3, 'Test 73');
test(minCameraCover([0,0,0,null,0,null,0,null,0,null,0,null,0,null,0,null,0]), 4, 'Test 74');
test(minCameraCover([0,0,0,0,0,0,null,0,0,0,null,0,0,0,0,0,0,0,null,0,null,0,0,0,null,0,null,0,null,0,null,0,0,0,null,0]), 10, 'Test 75');
test(minCameraCover([0,null,0,0,0,0,0,0,0,0,0,0,0,null,null,null,null,null,null,null,null]), 4, 'Test 76');
test(minCameraCover([0,0,0,0,0,0,0,null,0,null,0,null,0]), 4, 'Test 77');
test(minCameraCover([0,0,0,0,0,0,null,0,0,0,0,0,null,0,0,0,0,0,null,0,0,0,0,0,null,0,0,0,0,0,null,0,0,0,0,0,null,0,0,0,0,0]), 11, 'Test 78');
test(minCameraCover([0,0,0,0,0,null,0,0,0,0,0,null,0,0,0,0,0,null,0,0,0,0,0]), 6, 'Test 79');
test(minCameraCover([0,0,0,0,0,0,null,null,null,0,0,null,0]), 3, 'Test 80');
test(minCameraCover([0,0,null,0,0,0,0,null,null,null,null,null,null,null,0]), 2, 'Test 81');
test(minCameraCover([0,0,0,0,0,0,0,null,0,0,0,0,0,0,0,null,0,0,0,0,0,0,0]), 7, 'Test 82');
test(minCameraCover([0,0,0,0,null,0,null,null,0,null,0,0,null,0,null]), 3, 'Test 83');
test(minCameraCover([0,0,0,0,0,0,0,0,0,0,0,0,0,null,null,null,null,0]), 5, 'Test 84');
test(minCameraCover([0,0,0,0,0,0,null,null,0,0,0,0,0,0,0,0,0,0,null,null,null,null]), 5, 'Test 85');
test(minCameraCover([0,0,0,0,0,0,0,null,null,null,null,null,null,null,null,null,0,0,0,0,0,0,0]), 2, 'Test 86');
test(minCameraCover([0,0,0,0,0,0,0,0,0,0,null,0,0,0,0]), 5, 'Test 87');
test(minCameraCover([0,0,0,null,0,0,0,0,null,null,0]), 3, 'Test 88');
test(minCameraCover([0,0,0,0,0,null,0,null,null,0]), 3, 'Test 89');
test(minCameraCover([0,0,0,0,null,0,null,null,null,null,0,0]), 3, 'Test 90');
test(minCameraCover([0,0,0,0,0,null,null,0,0,null,null,0,0,0,0,null,null,0,0,null,null]), 5, 'Test 91');
test(minCameraCover([0,0,0,null,0,0,null,null,0,null,null,0]), 3, 'Test 92');
test(minCameraCover([0,0,0,0,0,null,null,0,0,null,null,0,0]), 4, 'Test 93');
test(minCameraCover([0,0,0,null,0,0,null,0,0,0,0]), 3, 'Test 94');
test(minCameraCover([0,0,0,null,0,0,null,0,0,null,0,null,0,null,0]), 4, 'Test 95');
test(minCameraCover([0,0,0,0,0,0,0,0,0,null,0,null,0,null,0,null,0,null,0,null,0,null,0,null,0,null,0]), 6, 'Test 96');
test(minCameraCover([0,0,0,0,0,null,null,0,0,0,null,0,0,null,null,0,0,0,null,0,0,0,null,0,0,0,null,null,0,0]), 8, 'Test 97');
test(minCameraCover([0,0,0,0,0,null,0,0,0,null,null,0,null,null,null]), 3, 'Test 98');
test(minCameraCover([0,0,0,null,0,0,0,0,0,null,null,0,0,null,0,null,0,null,0,null,0,null,null,0,null,0]), 6, 'Test 99');
test(minCameraCover([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 10, 'Test 100');
test(minCameraCover([0,0,0,0,0,0,null,0,0,0,0,0,0,null,null,0,0]), 5, 'Test 101');
test(minCameraCover([0,0,0,0,0,0,0,null,0,null,null,null,0,0,0]), 4, 'Test 102');
test(minCameraCover([0,0,0,null,0,0,0,null,null,0,0,null,null,0,0]), 4, 'Test 103');
test(minCameraCover([0,0,0,0,0,null,0,null,0,null,null,0,0,null,0]), 3, 'Test 104');
test(minCameraCover([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 5, 'Test 105');
test(minCameraCover([0,0,0,0,0,null,0,0,0,null,0,null,null,0,0,0,null]), 4, 'Test 106');
test(minCameraCover([0,0,0,0,0,0,null,0,0,0,null,0,null,0,null,0,null,0,null,0,null,0,null,0,null,0,null,0,null,0]), 7, 'Test 107');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

