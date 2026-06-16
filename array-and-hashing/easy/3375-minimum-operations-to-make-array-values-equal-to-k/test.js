// Test: 3375. Minimum Operations To Make Array Values Equal To K
// 120 test cases from LeetCodeDataset
// Run: node test.js

const { minOperations } = require("./solution");

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

console.log("\n3375. Minimum Operations To Make Array Values Equal To K\n");

test(minOperations([5,5,5,5,5], 5), 0, 'Test 1');
test(minOperations([5,5,5,5,5,5], 5), 0, 'Test 2');
test(minOperations([50,40,30,20,10], 10), 4, 'Test 3');
test(minOperations([1,2,3,4,5], 5), -1, 'Test 4');
test(minOperations([100,100,100], 100), 0, 'Test 5');
test(minOperations([1,1,1,1,1], 2), -1, 'Test 6');
test(minOperations([10,20,30,40,50], 25), -1, 'Test 7');
test(minOperations([5,4,3,2,1], 1), 4, 'Test 8');
test(minOperations([1,1,1,1], 1), 0, 'Test 9');
test(minOperations([3,3,2,2,1], 1), 2, 'Test 10');
test(minOperations([3,3,3,3], 3), 0, 'Test 11');
test(minOperations([10,9,8,7,6,5,4,3,2,1], 1), 9, 'Test 12');
test(minOperations([5,2,5,4,5], 2), 2, 'Test 13');
test(minOperations([9,7,5,3], 1), 4, 'Test 14');
test(minOperations([7,7,7,7,8], 7), 1, 'Test 15');
test(minOperations([100,99,98,97], 97), 3, 'Test 16');
test(minOperations([3,3,3,3,3], 3), 0, 'Test 17');
test(minOperations([2,1,2], 2), -1, 'Test 18');
test(minOperations([3,3,3,2], 2), 1, 'Test 19');
test(minOperations([100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90], 95), -1, 'Test 20');
test(minOperations([20,10,20,10,20,10,20,10,20,10], 20), -1, 'Test 21');
test(minOperations([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 4), 1, 'Test 22');
test(minOperations([1,2,3,4,5,6,7,8,9,10], 10), -1, 'Test 23');
test(minOperations([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 5), -1, 'Test 24');
test(minOperations([10, 10, 10, 5, 5, 5, 3, 3, 3, 1], 3), -1, 'Test 25');
test(minOperations([90, 90, 80, 80, 70, 70, 60, 60, 50, 50], 50), 4, 'Test 26');
test(minOperations([100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81, 80], 80), 20, 'Test 27');
test(minOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3), -1, 'Test 28');
test(minOperations([10, 20, 10, 30, 20, 10], 10), 2, 'Test 29');
test(minOperations([5, 4, 4, 4, 4, 3, 3, 3, 3, 2, 2, 2, 2, 1, 1, 1, 1], 3), -1, 'Test 30');
test(minOperations([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 2), -1, 'Test 31');
test(minOperations([8, 8, 8, 8, 8, 9, 9, 9, 9, 9], 8), 1, 'Test 32');
test(minOperations([1,2,3,4,5,6,7,8,9,10], 5), -1, 'Test 33');
test(minOperations([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 2), -1, 'Test 34');
test(minOperations([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25], 25), -1, 'Test 35');
test(minOperations([1,3,5,7,9,11,13,15,17,19], 1), 9, 'Test 36');
test(minOperations([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10], 1), 9, 'Test 37');
test(minOperations([42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42], 42), 0, 'Test 38');
test(minOperations([1,10,1,10,1,10], 1), 1, 'Test 39');
test(minOperations([9, 9, 8, 8, 7, 7, 6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 1, 1], 5), -1, 'Test 40');
test(minOperations([8, 8, 8, 8, 8, 8, 8, 8, 8, 8], 8), 0, 'Test 41');
test(minOperations([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22], 22), -1, 'Test 42');
test(minOperations([2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 3), -1, 'Test 43');
test(minOperations([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1), 0, 'Test 44');
test(minOperations([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 100), -1, 'Test 45');
test(minOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1), 9, 'Test 46');
test(minOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10), -1, 'Test 47');
test(minOperations([30,20,10,20,30,20,10,20,30,20,10,20,30,20,10,20,30,20,10,20], 20), -1, 'Test 48');
test(minOperations([10, 10, 5, 10, 6, 10], 5), 2, 'Test 49');
test(minOperations([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 10), 9, 'Test 50');
test(minOperations([100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 1], 1), 10, 'Test 51');
test(minOperations([30,20,10,20,30,40,50,40,30,20,10], 10), 4, 'Test 52');
test(minOperations([90, 85, 90, 85, 90, 85], 85), 1, 'Test 53');
test(minOperations([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], 15), -1, 'Test 54');
test(minOperations([1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4], 4), -1, 'Test 55');
test(minOperations([42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42], 42), 0, 'Test 56');
test(minOperations([60, 50, 50, 40, 40, 40, 30, 30, 30, 20, 20, 20, 10, 10, 10], 20), -1, 'Test 57');
test(minOperations([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3], 2), 1, 'Test 58');
test(minOperations([10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 11), -1, 'Test 59');
test(minOperations([30, 30, 30, 30, 30, 30], 30), 0, 'Test 60');
test(minOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 1), 14, 'Test 61');
test(minOperations([100, 99, 98, 97, 96, 95, 94, 93, 92, 91], 90), 10, 'Test 62');
test(minOperations([85, 85, 85, 70, 70, 70, 55, 55, 55, 40, 40, 40], 40), 3, 'Test 63');
test(minOperations([6, 4, 3, 2, 1, 1, 1], 1), 4, 'Test 64');
test(minOperations([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5], 2), -1, 'Test 65');
test(minOperations([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 5), 0, 'Test 66');
test(minOperations([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30], 1), 15, 'Test 67');
test(minOperations([50,50,50,50,100,100,100,100], 50), 1, 'Test 68');
test(minOperations([10, 10, 5, 10, 7, 10], 5), 2, 'Test 69');
test(minOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], 25), -1, 'Test 70');
test(minOperations([1,3,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 10), -1, 'Test 71');
test(minOperations([100, 90, 80, 70, 60, 50, 40, 30, 20, 10], 50), -1, 'Test 72');
test(minOperations([5, 6, 5, 6, 5, 6, 5, 6, 5, 6], 5), 1, 'Test 73');
test(minOperations([1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3], 1), 2, 'Test 74');
test(minOperations([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 19), -1, 'Test 75');
test(minOperations([10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1], 5), -1, 'Test 76');
test(minOperations([2,4,6,8,10,12,14,16,18,20,22], 22), -1, 'Test 77');
test(minOperations([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 5), 0, 'Test 78');
test(minOperations([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 5), -1, 'Test 79');
test(minOperations([100,99,98,97,96,95], 95), 5, 'Test 80');
test(minOperations([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4], 4), -1, 'Test 81');
test(minOperations([50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 51], 50), 1, 'Test 82');
test(minOperations([99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99], 99), 0, 'Test 83');
test(minOperations([10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], 5), 1, 'Test 84');
test(minOperations([9, 8, 7, 6, 5, 4, 3, 2, 1], 5), -1, 'Test 85');
test(minOperations([1, 2, 3, 4, 5, 5, 4, 3, 2, 1], 3), -1, 'Test 86');
test(minOperations([10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40], 10), 30, 'Test 87');
test(minOperations([3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 13), -1, 'Test 88');
test(minOperations([8, 8, 8, 8, 8, 8, 8, 8], 8), 0, 'Test 89');
test(minOperations([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 100), -1, 'Test 90');
test(minOperations([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 5), 0, 'Test 91');
test(minOperations([100, 99, 98, 97, 96, 95, 94, 93, 92, 91], 100), -1, 'Test 92');
test(minOperations([100, 100, 100, 100, 100, 100, 100, 100], 50), 1, 'Test 93');
test(minOperations([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 5), -1, 'Test 94');
test(minOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5), -1, 'Test 95');
test(minOperations([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15], 10), -1, 'Test 96');
test(minOperations([42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42], 42), 0, 'Test 97');
test(minOperations([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21], 21), -1, 'Test 98');
test(minOperations([100,99,98,97,96,95,94,93,92,91,90], 90), 10, 'Test 99');
test(minOperations([20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20], 20), 0, 'Test 100');
test(minOperations([100, 99, 98, 97, 96, 95, 94, 93, 92, 91], 91), 9, 'Test 101');
test(minOperations([3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1], 3), -1, 'Test 102');
test(minOperations([8,8,8,8,8,8,8,8,8,8], 8), 0, 'Test 103');
test(minOperations([2, 3, 3, 3, 3, 2, 3, 3, 3, 3], 2), 1, 'Test 104');
test(minOperations([15, 15, 10, 10, 5, 5, 5, 5, 5, 5], 5), 2, 'Test 105');
test(minOperations([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 5), 0, 'Test 106');
test(minOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 10), -1, 'Test 107');
test(minOperations([1, 3, 2, 3, 2, 3, 2, 3, 2, 3], 2), -1, 'Test 108');
test(minOperations([3, 3, 3, 3, 3, 2], 2), 1, 'Test 109');
test(minOperations([1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5], 4), -1, 'Test 110');
test(minOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], 30), -1, 'Test 111');
test(minOperations([10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 9), 1, 'Test 112');
test(minOperations([50,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20], 20), 30, 'Test 113');
test(minOperations([3, 3, 3, 3, 3, 3, 3, 3, 3, 4], 3), 1, 'Test 114');
test(minOperations([1, 3, 3, 3, 3, 3, 3, 3, 3, 2], 3), -1, 'Test 115');
test(minOperations([99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81, 80], 80), 19, 'Test 116');
test(minOperations([8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8], 8), 0, 'Test 117');
test(minOperations([3, 3, 3, 3, 2, 2, 2, 2, 1, 1, 1, 1], 1), 2, 'Test 118');
test(minOperations([50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50], 51), -1, 'Test 119');
test(minOperations([20, 15, 10, 5, 10, 15, 20, 25, 30, 35], 10), -1, 'Test 120');

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
