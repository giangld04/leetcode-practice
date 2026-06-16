// Test: 2968. Apply Operations To Maximize Frequency Score
// 96 test cases from LeetCodeDataset
// Run: node test.js

const { maxFrequencyScore } = require("./solution");

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

console.log("\n2968. Apply Operations To Maximize Frequency Score\n");

test(maxFrequencyScore([1000000000], 1000000000000), 1, 'Test 1');
test(maxFrequencyScore([1,3,3,3,7,8,9], 4), 4, 'Test 2');
test(maxFrequencyScore([1,3,5,7,9], 10), 4, 'Test 3');
test(maxFrequencyScore([1,4,4,2,4], 0), 3, 'Test 4');
test(maxFrequencyScore([5,5,5,5,5], 10), 5, 'Test 5');
test(maxFrequencyScore([1,1000000000], 1000000000), 2, 'Test 6');
test(maxFrequencyScore([1000000000,1000000000,1000000000], 1000000000), 3, 'Test 7');
test(maxFrequencyScore([1,1,2,2,2,3,3,3,3], 4), 7, 'Test 8');
test(maxFrequencyScore([1,2,3], 2), 3, 'Test 9');
test(maxFrequencyScore([1,1,1,1,1,1,1,1,1,1], 0), 10, 'Test 10');
test(maxFrequencyScore([1,2,6,4], 3), 3, 'Test 11');
test(maxFrequencyScore([1,1000000000,1,1000000000], 1000000000), 3, 'Test 12');
test(maxFrequencyScore([1,2,3,4,5,6,7,8,9,10], 5), 4, 'Test 13');
test(maxFrequencyScore([1,1,1,1,1], 10), 5, 'Test 14');
test(maxFrequencyScore([1,2,3,4,5,6,7,8,9,10], 20), 9, 'Test 15');
test(maxFrequencyScore([5,5,5,5,5,5,5,5,5,5], 0), 10, 'Test 16');
test(maxFrequencyScore([10,20,30,40,50], 100), 5, 'Test 17');
test(maxFrequencyScore([1,2,3,4,5,6,7,8,9,10], 15), 7, 'Test 18');
test(maxFrequencyScore([10,10,10,10,10,10,10,10,10,10], 0), 10, 'Test 19');
test(maxFrequencyScore([1,1,2,2,3,3,4,4,5,5], 10), 9, 'Test 20');
test(maxFrequencyScore([1,2,3,4,5], 10), 5, 'Test 21');
test(maxFrequencyScore([1,1000000000], 500000000), 1, 'Test 22');
test(maxFrequencyScore([100,100,100,100,100,100,100,100,100,100], 0), 10, 'Test 23');
test(maxFrequencyScore([1000000000, 1, 1000000000, 1], 1000000000), 3, 'Test 24');
test(maxFrequencyScore([1,3,5,7,9], 25), 5, 'Test 25');
test(maxFrequencyScore([1,1,2,2,2,3,3,3,3,4], 5), 8, 'Test 26');
test(maxFrequencyScore([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 1000), 10, 'Test 27');
test(maxFrequencyScore([1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5], 50), 15, 'Test 28');
test(maxFrequencyScore([1, 3, 6, 10, 15, 21, 28, 36, 45, 55], 250), 10, 'Test 29');
test(maxFrequencyScore([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 1000), 20, 'Test 30');
test(maxFrequencyScore([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10], 20), 12, 'Test 31');
test(maxFrequencyScore([10,20,30,40,50,60,70,80,90,100], 150), 7, 'Test 32');
test(maxFrequencyScore([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 25), 10, 'Test 33');
test(maxFrequencyScore([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29], 100), 14, 'Test 34');
test(maxFrequencyScore([1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5], 20), 15, 'Test 35');
test(maxFrequencyScore([5, 5, 5, 10, 10, 15, 15, 15, 20, 20, 25], 30), 8, 'Test 36');
test(maxFrequencyScore([2, 2, 3, 3, 4, 4, 4, 5, 5, 5, 5], 5), 8, 'Test 37');
test(maxFrequencyScore([1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4,5,5,5,5,5], 20), 20, 'Test 38');
test(maxFrequencyScore([1, 2, 2, 2, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 50), 32, 'Test 39');
test(maxFrequencyScore([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 0), 20, 'Test 40');
test(maxFrequencyScore([1, 2, 2, 2, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6], 20), 15, 'Test 41');
test(maxFrequencyScore([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 100), 21, 'Test 42');
test(maxFrequencyScore([50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50], 1000), 91, 'Test 43');
test(maxFrequencyScore([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 20), 6, 'Test 44');
test(maxFrequencyScore([1, 3, 3, 3, 3, 3, 5, 5, 5, 5, 5], 20), 11, 'Test 45');
test(maxFrequencyScore([10, 10, 10, 20, 20, 30, 30, 30, 40, 40, 40, 50, 50, 50, 50], 200), 15, 'Test 46');
test(maxFrequencyScore([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7], 25), 17, 'Test 47');
test(maxFrequencyScore([1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5], 30), 15, 'Test 48');
test(maxFrequencyScore([1, 1000000000, 1000000000, 1000000000, 1], 1000000000), 4, 'Test 49');
test(maxFrequencyScore([1, 3, 3, 3, 3, 5, 5, 7, 9, 9, 11, 11, 13, 13, 15], 30), 11, 'Test 50');
test(maxFrequencyScore([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 500), 20, 'Test 51');
test(maxFrequencyScore([1, 2, 2, 3, 3, 3, 4, 4, 5, 5, 5, 5], 15), 12, 'Test 52');
test(maxFrequencyScore([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 500), 10, 'Test 53');
test(maxFrequencyScore([1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3], 10), 15, 'Test 54');
test(maxFrequencyScore([1, 1000000000, 2, 999999998, 3, 999999996, 4, 999999994], 1000000000), 5, 'Test 55');
test(maxFrequencyScore([1, 3, 3, 5, 5, 5, 7, 9, 11, 11], 15), 8, 'Test 56');
test(maxFrequencyScore([100, 101, 102, 103, 104, 105, 106, 107, 108, 109], 50), 10, 'Test 57');
test(maxFrequencyScore([1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4], 15), 14, 'Test 58');
test(maxFrequencyScore([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 1000), 20, 'Test 59');
test(maxFrequencyScore([10,20,30,40,50,60,70,80,90,100], 1000), 10, 'Test 60');
test(maxFrequencyScore([100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100], 10000), 20, 'Test 61');
test(maxFrequencyScore([1,3,5,7,9,11,13,15,17,19], 50), 10, 'Test 62');
test(maxFrequencyScore([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10], 50), 20, 'Test 63');
test(maxFrequencyScore([1, 1000000000, 500000000, 750000000, 250000000], 100000000000), 5, 'Test 64');
test(maxFrequencyScore([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 100), 20, 'Test 65');
test(maxFrequencyScore([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 0), 15, 'Test 66');
test(maxFrequencyScore([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 1000), 20, 'Test 67');
test(maxFrequencyScore([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 150), 20, 'Test 68');
test(maxFrequencyScore([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 0), 20, 'Test 69');
test(maxFrequencyScore([1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6], 30), 24, 'Test 70');
test(maxFrequencyScore([10, 10, 20, 20, 30, 30, 40, 40, 50, 50], 100), 9, 'Test 71');
test(maxFrequencyScore([1000000000, 1000000000, 1000000000, 1000000000, 1000000000], 0), 5, 'Test 72');
test(maxFrequencyScore([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10], 30), 15, 'Test 73');
test(maxFrequencyScore([1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000], 0), 6, 'Test 74');
test(maxFrequencyScore([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 50), 10, 'Test 75');
test(maxFrequencyScore([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 500), 20, 'Test 76');
test(maxFrequencyScore([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 5), 10, 'Test 77');
test(maxFrequencyScore([1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9], 100), 36, 'Test 78');
test(maxFrequencyScore([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 100), 6, 'Test 79');
test(maxFrequencyScore([1,1,1,2,2,2,2,3,3,3,3,3,4,4,4,4,5,5,5,5,5,5,5,5,5], 25), 23, 'Test 80');
test(maxFrequencyScore([1, 1, 2, 2, 2, 3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8], 50), 30, 'Test 81');
test(maxFrequencyScore([1, 2, 6, 4, 8, 10, 3, 5, 7, 9], 15), 7, 'Test 82');
test(maxFrequencyScore([1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 9, 9, 10], 50), 29, 'Test 83');
test(maxFrequencyScore([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9, 10, 10, 10], 100), 30, 'Test 84');
test(maxFrequencyScore([2,2,2,2,2,2,2,2,2,2,2,2,2,2,2], 0), 15, 'Test 85');
test(maxFrequencyScore([1000000000, 999999999, 999999998, 999999997, 999999996, 999999995], 10000000000), 6, 'Test 86');
test(maxFrequencyScore([1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000], 1000000000000), 10, 'Test 87');
test(maxFrequencyScore([1, 1000000000], 1000000000), 2, 'Test 88');
test(maxFrequencyScore([1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5], 100), 21, 'Test 89');
test(maxFrequencyScore([1, 1, 1, 1, 1, 2, 2, 2, 2, 2], 10), 10, 'Test 90');
test(maxFrequencyScore([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 100), 15, 'Test 91');
test(maxFrequencyScore([1, 1000000000, 1, 1000000000, 1, 1000000000], 1500000000), 4, 'Test 92');
test(maxFrequencyScore([1,1,2,2,2,3,3,3,3,3], 5), 9, 'Test 93');
test(maxFrequencyScore([5,5,5,1,1,1,1,1,1,1], 10), 9, 'Test 94');
test(maxFrequencyScore([1000000000,1000000000,1000000000,1000000000,1000000000], 1000000000), 5, 'Test 95');
test(maxFrequencyScore([1000000000, 1000000000, 1000000000, 1000000000], 100000000000), 4, 'Test 96');

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
