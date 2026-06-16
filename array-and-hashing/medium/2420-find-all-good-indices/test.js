// Test: 2420. Find All Good Indices
// 101 test cases from LeetCodeDataset
// Run: node test.js

const { goodIndices } = require("./solution");

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

console.log("\n2420. Find All Good Indices\n");

test(goodIndices([9,8,7,6,5,4,3,2,1,2,3,4,5], 3), [7, 8, 9], 'Test 1');
test(goodIndices([1,2,3,4,3,2,1], 2), [], 'Test 2');
test(goodIndices([1,2,2,3,4,5,5,4,3,2,1], 3), [], 'Test 3');
test(goodIndices([10,9,8,7,6,5,4,3,2,1], 4), [], 'Test 4');
test(goodIndices([1000000,999999,999998,999997,999996,999995,999994,999993,999992], 3), [], 'Test 5');
test(goodIndices([5,4,3,2,1,2,3,4,5], 2), [3, 4, 5], 'Test 6');
test(goodIndices([5,4,5,3,4,5,6,7,8], 2), [2, 4], 'Test 7');
test(goodIndices([2,1,1,2], 2), [], 'Test 8');
test(goodIndices([1000000,999999,999998,999997,999996,999995,999994,999993,999992,999991], 3), [], 'Test 9');
test(goodIndices([1,2,3,4,5,4,3,2,1], 2), [], 'Test 10');
test(goodIndices([9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9], 3), [7, 8, 9], 'Test 11');
test(goodIndices([5,4,3,4,5], 1), [1, 2, 3], 'Test 12');
test(goodIndices([2,1,1,1,3,4,1], 2), [2, 3], 'Test 13');
test(goodIndices([1,2,2,2,3,3,3,4,4,4,5,5,5,4,4,4,3,3,3,2,2,2,1,1], 3), [4, 7, 15, 18], 'Test 14');
test(goodIndices([8,8,8,8,8,8,8,8,8,8,8,8,8], 3), [3, 4, 5, 6, 7, 8, 9], 'Test 15');
test(goodIndices([9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9], 4), [7, 8, 9], 'Test 16');
test(goodIndices([1, 3, 2, 1, 3, 2, 1, 3, 2, 1, 3, 2, 1, 3, 2, 1, 3, 2, 1], 2), [], 'Test 17');
test(goodIndices([100, 99, 98, 97, 96, 97, 98, 99, 100, 101, 102, 103, 104, 103, 102, 101, 100], 4), [4, 5], 'Test 18');
test(goodIndices([1,2,3,4,5,4,3,4,5,4,3,4,5,4,3,4,5,4,3], 2), [6, 10, 14], 'Test 19');
test(goodIndices([10,9,8,7,6,5,6,7,8,9,10,9,8,7,6,5], 5), [5], 'Test 20');
test(goodIndices([10,20,30,20,10,20,30,20,10,20,30,20,10,20,30,20,10,20,30], 4), [], 'Test 21');
test(goodIndices([1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1], 5), [], 'Test 22');
test(goodIndices([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 3), [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 'Test 23');
test(goodIndices([9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,9], 4), [7, 8, 9, 10], 'Test 24');
test(goodIndices([10, 9, 8, 7, 6, 5, 5, 6, 7, 8, 9, 10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 5), [5, 6, 7], 'Test 25');
test(goodIndices([1,3,2,1,2,3,2,1,2,3], 2), [3, 7], 'Test 26');
test(goodIndices([100,90,80,70,60,50,40,30,20,10,1,1,1,20,30,40], 3), [9, 10, 11, 12], 'Test 27');
test(goodIndices([6,5,4,3,2,1,2,3,4,5,6], 3), [4, 5, 6], 'Test 28');
test(goodIndices([10,9,8,7,7,6,5,4,4,3,2,1], 3), [], 'Test 29');
test(goodIndices([1,3,2,3,2,3,2,3,2,1], 2), [3, 5], 'Test 30');
test(goodIndices([5,4,3,2,1,1,2,3,4,5,5,4,3,2,1,1,2,3,4,5], 2), [3, 4, 5, 6, 13, 14, 15, 16], 'Test 31');
test(goodIndices([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 5), [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 'Test 32');
test(goodIndices([1, 2, 3, 4, 3, 2, 1, 2, 3, 2, 1, 2, 3, 4, 3, 2, 1, 2, 3, 2, 1], 2), [5, 6, 10, 11, 15, 16], 'Test 33');
test(goodIndices([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 1), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], 'Test 34');
test(goodIndices([10,11,10,11,10,11,10,11,10,11,10,11,10,11,10,11], 2), [3, 5, 7, 9, 11, 13], 'Test 35');
test(goodIndices([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 5), [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 'Test 36');
test(goodIndices([15,14,13,12,11,10,9,8,7,6,5,4,3,2,1], 5), [], 'Test 37');
test(goodIndices([20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 2], 3), [], 'Test 38');
test(goodIndices([1000000,999999,999998,999997,999996,999997,999998,999999,1000000], 3), [3, 4, 5], 'Test 39');
test(goodIndices([1,1,2,2,3,3,2,2,1,1,2,2,3,3], 3), [7, 8, 9, 10], 'Test 40');
test(goodIndices([1,2,3,4,5,6,7,8,9,10,10,10,10,10,10,10,10,10,10,10], 5), [14], 'Test 41');
test(goodIndices([100,90,80,70,60,50,40,30,20,10,10,20,30,40,50,60,70,80,90,100], 5), [8, 9, 10, 11], 'Test 42');
test(goodIndices([5,5,5,5,5,5,5,5,5,5], 3), [3, 4, 5, 6], 'Test 43');
test(goodIndices([5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5], 3), [], 'Test 44');
test(goodIndices([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10], 5), [], 'Test 45');
test(goodIndices([1,2,3,4,3,2,1,2,3,4,3,2,1], 3), [6], 'Test 46');
test(goodIndices([6,5,4,3,2,1,2,3,4,5,6,7,8,9,10], 5), [5, 6], 'Test 47');
test(goodIndices([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 5), [], 'Test 48');
test(goodIndices([1,3,2,3,4,5,4,3,2,1], 2), [3], 'Test 49');
test(goodIndices([8,9,10,1,2,3,4,5,6,7,8,9], 4), [], 'Test 50');
test(goodIndices([1,2,3,4,5,6,5,4,3,2,3,4,5,6], 3), [8, 9, 10], 'Test 51');
test(goodIndices([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1], 2), [3, 5, 7, 9, 11], 'Test 52');
test(goodIndices([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 3, 3, 3, 2, 2, 2, 1, 1, 1], 4), [], 'Test 53');
test(goodIndices([3,3,3,3,3,3,2,2,2,2,2,2,1,1,1,1,1,1,1], 4), [5, 6, 7, 11, 12, 13, 14], 'Test 54');
test(goodIndices([5,3,2,1,1,1,2,3,4,5], 2), [2, 3, 4, 5, 6], 'Test 55');
test(goodIndices([1, 3, 2, 1, 2, 3, 4, 3, 2, 1, 2], 3), [], 'Test 56');
test(goodIndices([1,1,1,1,1,1,1,1,1,1], 3), [3, 4, 5, 6], 'Test 57');
test(goodIndices([1,1,1,1,1,1,2,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4], 3), [3, 4, 5, 6, 9, 10, 11, 12, 15, 16, 17, 18], 'Test 58');
test(goodIndices([5,6,7,8,9,8,7,6,5,6,7,8,9,8,7,6,5,6,7], 3), [7, 8, 9, 15], 'Test 59');
test(goodIndices([1,3,2,4,3,5,4,6,5,7,6,8,7,9,8,10,9,11,10], 2), [3, 5, 7, 9, 11, 13, 15], 'Test 60');
test(goodIndices([1,3,2,2,2,1,3,4,3,2,1,2,3,4,5], 2), [4, 5, 9, 10, 11], 'Test 61');
test(goodIndices([1, 2, 2, 1, 1, 2, 2, 3, 3, 2, 2, 1, 1], 2), [3, 4, 5, 10], 'Test 62');
test(goodIndices([5, 4, 3, 2, 1, 1, 1, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 4), [4, 5, 6, 7, 8, 9], 'Test 63');
test(goodIndices([100,90,80,70,60,50,40,30,20,10,11,12,13,14,15], 5), [8, 9], 'Test 64');
test(goodIndices([9, 8, 7, 6, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2, 1], 3), [3, 4, 5], 'Test 65');
test(goodIndices([1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1,2,3,4], 3), [15, 16], 'Test 66');
test(goodIndices([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 5), [], 'Test 67');
test(goodIndices([1000000,999999,999998,999997,999996,999995,999994,999993,999992,999991], 4), [], 'Test 68');
test(goodIndices([1,2,3,4,5,5,4,3,2,1,1], 3), [], 'Test 69');
test(goodIndices([5,5,5,5,5,5,5,5,5,5,5,5], 4), [4, 5, 6, 7], 'Test 70');
test(goodIndices([5, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 5], 2), [5, 6, 7], 'Test 71');
test(goodIndices([1,10,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10], 5), [9, 10, 11], 'Test 72');
test(goodIndices([9, 8, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5), [7, 8, 9], 'Test 73');
test(goodIndices([5,4,4,3,2,2,3,4,5], 2), [3, 4, 5, 6], 'Test 74');
test(goodIndices([1,1,2,2,3,3,4,4,5,5,4,4,3,3,2,2,1,1], 3), [], 'Test 75');
test(goodIndices([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 7), [7, 8, 9], 'Test 76');
test(goodIndices([5, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 3), [5, 6, 7], 'Test 77');
test(goodIndices([1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 3), [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], 'Test 78');
test(goodIndices([1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1], 3), [], 'Test 79');
test(goodIndices([1,3,2,4,3,5,4,6,5,7,6,8,7,9,8,10,9,11,10,12], 3), [], 'Test 80');
test(goodIndices([1,3,2,4,3,2,1,3,2,4,3,2,1,3,2,4,3,2,1], 2), [5, 7, 11, 13], 'Test 81');
test(goodIndices([9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,9], 3), [7, 8, 9, 10], 'Test 82');
test(goodIndices([1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1], 5), [], 'Test 83');
test(goodIndices([1,2,3,4,5,6,5,4,3,2,1,2,3,4,5,6,5,4,3,2,1], 5), [10], 'Test 84');
test(goodIndices([1,2,3,2,1,2,3,2,1,2,3,2,1,2,3], 2), [4, 8, 12], 'Test 85');
test(goodIndices([1,2,2,1,1,2,2,1,1,2,2], 2), [3, 4, 7, 8], 'Test 86');
test(goodIndices([100,90,80,70,60,50,40,30,20,10,20,30,40,50,60,70,80,90,100], 5), [8, 9, 10], 'Test 87');
test(goodIndices([1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2], 5), [6, 7, 8, 9, 10, 11, 12, 13, 14], 'Test 88');
test(goodIndices([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1], 5), [], 'Test 89');
test(goodIndices([3,2,1,1,1,2,3,4,5,6], 2), [2, 3, 4, 5], 'Test 90');
test(goodIndices([20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1], 5), [], 'Test 91');
test(goodIndices([1,2,3,4,3,3,3,4,5,6,7,6,5,4,3,2,1], 3), [6, 7], 'Test 92');
test(goodIndices([1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1], 2), [4, 8, 12, 16], 'Test 93');
test(goodIndices([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 4), [], 'Test 94');
test(goodIndices([9,8,7,6,5,4,5,6,7,8,9], 3), [4, 5, 6], 'Test 95');
test(goodIndices([1,3,2,1,2,3,4,3,2,1,2,3,4,5], 3), [9, 10], 'Test 96');
test(goodIndices([1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], 5), [], 'Test 97');
test(goodIndices([5,4,5,4,5,4,5,4,5,4,5,4,5,4,5,4,5,4,5], 2), [2, 4, 6, 8, 10, 12, 14, 16], 'Test 98');
test(goodIndices([6,5,4,3,2,1,2,3,4,5,6,5,4,3,2,1], 5), [5], 'Test 99');
test(goodIndices([10,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10,11], 4), [8, 9, 10], 'Test 100');
test(goodIndices([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 2), [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 'Test 101');

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
