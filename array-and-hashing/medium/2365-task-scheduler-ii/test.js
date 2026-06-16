// Test: 2365. Task Scheduler Ii
// 102 test cases from LeetCodeDataset
// Run: node test.js

const { taskSchedulerII } = require("./solution");

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

console.log("\n2365. Task Scheduler Ii\n");

test(taskSchedulerII([1,2,3,4,5,6,7,8,9,10], 10), 10, 'Test 1');
test(taskSchedulerII([10,9,8,7,6,5,4,3,2,1], 1), 10, 'Test 2');
test(taskSchedulerII([1,2,3,4,5], 5), 5, 'Test 3');
test(taskSchedulerII([1,1,1,1,1], 1), 9, 'Test 4');
test(taskSchedulerII([1,1,1,1], 2), 10, 'Test 5');
test(taskSchedulerII([1,1,1,1,1], 5), 25, 'Test 6');
test(taskSchedulerII([10,9,8,7,6,5,4,3,2,1], 5), 10, 'Test 7');
test(taskSchedulerII([1,2,3,4,5], 1), 5, 'Test 8');
test(taskSchedulerII([1,1,1,1], 1), 7, 'Test 9');
test(taskSchedulerII([1,2,1,2,3,1], 3), 9, 'Test 10');
test(taskSchedulerII([5,8,8,5], 2), 6, 'Test 11');
test(taskSchedulerII([10,9,8,7,6,5,4,3,2,1], 10), 10, 'Test 12');
test(taskSchedulerII([1,2,3,4,5,6,7,8,9,10], 1), 10, 'Test 13');
test(taskSchedulerII([1000000000, 999999999, 1000000000, 999999999, 1000000000], 3), 9, 'Test 14');
test(taskSchedulerII([1000000000,1000000000,1000000000,1000000000,1000000000], 100000000), 400000005, 'Test 15');
test(taskSchedulerII([1, 3, 2, 3, 1, 3, 2, 1, 3, 2, 1, 3, 2, 1, 3, 2, 1, 3, 2, 1], 4), 34, 'Test 16');
test(taskSchedulerII([1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4], 1), 36, 'Test 17');
test(taskSchedulerII([1,2,3,4,1,2,3,4,1,2,3,4], 2), 12, 'Test 18');
test(taskSchedulerII([1000000000,1000000000,1000000000,1000000000,1000000000], 100000), 400005, 'Test 19');
test(taskSchedulerII([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10], 10), 21, 'Test 20');
test(taskSchedulerII([1,2,1,3,1,4,1,5,1,6,1,7,1,8,1,9,1,10], 3), 34, 'Test 21');
test(taskSchedulerII([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2], 20), 191, 'Test 22');
test(taskSchedulerII([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 100), 6869, 'Test 23');
test(taskSchedulerII([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 1), 39, 'Test 24');
test(taskSchedulerII([1,2,2,1,3,4,3,4,5,6,5,6,7,8,7,8,9,10,9,10], 5), 41, 'Test 25');
test(taskSchedulerII([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0), 20, 'Test 26');
test(taskSchedulerII([1000000000, 1, 2, 1000000000, 3, 4, 1000000000, 5], 2), 8, 'Test 27');
test(taskSchedulerII([5, 1, 2, 5, 1, 2, 5, 1, 2], 3), 11, 'Test 28');
test(taskSchedulerII([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2], 3), 38, 'Test 29');
test(taskSchedulerII([1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5], 5), 29, 'Test 30');
test(taskSchedulerII([1,1,2,2,1,1,2,2,1,1,2,2,1,1,2,2,1,1,2,2,1,1,2,2,1,1,2,2,1,1,2,2], 2), 64, 'Test 31');
test(taskSchedulerII([5,5,5,5,5,5,5,5,5,5], 1), 19, 'Test 32');
test(taskSchedulerII([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 15), 20, 'Test 33');
test(taskSchedulerII([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10], 4), 20, 'Test 34');
test(taskSchedulerII([10,10,10,10,10,10,10,10,10,10], 9), 91, 'Test 35');
test(taskSchedulerII([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,2,3,4,5,6,7,8,9,10], 15), 30, 'Test 36');
test(taskSchedulerII([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2], 1), 20, 'Test 37');
test(taskSchedulerII([1,2,2,3,3,3,4,4,4,4,5,5,5,5,5,6,6,6,6,6,6], 3), 66, 'Test 38');
test(taskSchedulerII([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 10), 188, 'Test 39');
test(taskSchedulerII([1,2,3,4,5,1,2,3,4,5,1,2,3,4,5], 5), 17, 'Test 40');
test(taskSchedulerII([1, 2, 3, 4, 5, 1, 2, 3, 4, 5], 2), 10, 'Test 41');
test(taskSchedulerII([5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5], 5), 25, 'Test 42');
test(taskSchedulerII([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 1, 2, 3, 4, 5], 4), 25, 'Test 43');
test(taskSchedulerII([1,2,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1], 1), 20, 'Test 44');
test(taskSchedulerII([1000000000, 999999999, 1000000000, 999999999, 1000000000], 2), 7, 'Test 45');
test(taskSchedulerII([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 10), 100, 'Test 46');
test(taskSchedulerII([5,4,3,2,1,5,4,3,2,1,5,4,3,2,1,5,4,3,2,1], 2), 20, 'Test 47');
test(taskSchedulerII([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 10), 210, 'Test 48');
test(taskSchedulerII([1000000000, 999999999, 999999998, 999999997, 999999996, 999999995, 999999994, 999999993, 999999992, 999999991, 1000000000], 5), 11, 'Test 49');
test(taskSchedulerII([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2], 1), 20, 'Test 50');
test(taskSchedulerII([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10], 20), 52, 'Test 51');
test(taskSchedulerII([100,200,300,400,500,100,200,300,400,500,100,200,300,400,500], 50), 107, 'Test 52');
test(taskSchedulerII([999999999, 999999998, 999999997, 999999996, 999999995, 999999994, 999999993, 999999992, 999999991, 999999990, 999999989, 999999988, 999999987, 999999986, 999999985], 10), 15, 'Test 53');
test(taskSchedulerII([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10], 5), 70, 'Test 54');
test(taskSchedulerII([1,2,3,1,2,3,4,5,6,1,2,3,4,5,6,7,8,9,10,1], 2), 20, 'Test 55');
test(taskSchedulerII([9, 8, 7, 6, 5, 4, 3, 2, 1, 9, 8, 7, 6, 5, 4, 3, 2, 1], 3), 18, 'Test 56');
test(taskSchedulerII([1,2,1,3,1,2,1,3,1,2,1,3,1,2,1,3,1,2,1,3], 3), 38, 'Test 57');
test(taskSchedulerII([1, 3, 5, 3, 1, 2, 3, 4, 5, 6, 7, 8, 9], 5), 20, 'Test 58');
test(taskSchedulerII([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 3), 77, 'Test 59');
test(taskSchedulerII([1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3], 10), 113, 'Test 60');
test(taskSchedulerII([10,20,30,40,50,10,20,30,40,50,10,20,30,40,50,10,20,30,40,50], 15), 53, 'Test 61');
test(taskSchedulerII([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10], 10), 32, 'Test 62');
test(taskSchedulerII([1,2,3,1,2,3,1,2,3,1,2,3], 1), 12, 'Test 63');
test(taskSchedulerII([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 19), 20, 'Test 64');
test(taskSchedulerII([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10], 5), 20, 'Test 65');
test(taskSchedulerII([1, 2, 2, 1, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9], 2), 34, 'Test 66');
test(taskSchedulerII([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 5), 20, 'Test 67');
test(taskSchedulerII([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 2), 20, 'Test 68');
test(taskSchedulerII([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5), 20, 'Test 69');
test(taskSchedulerII([1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9], 3), 18, 'Test 70');
test(taskSchedulerII([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], 5), 140, 'Test 71');
test(taskSchedulerII([5,5,5,5,5,5,5,5,5,5], 9), 91, 'Test 72');
test(taskSchedulerII([1,2,1,3,2,1,4,3,2,1,5,4,3,2,1,6,5,4,3,2,1,7,6,5,4,3,2,1], 3), 31, 'Test 73');
test(taskSchedulerII([1000000000, 999999999, 1000000000, 999999999, 1000000000, 999999999], 5), 14, 'Test 74');
test(taskSchedulerII([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], 2), 40, 'Test 75');
test(taskSchedulerII([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15], 3), 75, 'Test 76');
test(taskSchedulerII([1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3], 3), 35, 'Test 77');
test(taskSchedulerII([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 3), 20, 'Test 78');
test(taskSchedulerII([1,2,3,2,1,2,1,2,1], 2), 12, 'Test 79');
test(taskSchedulerII([1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4,5,5,5,5,5], 4), 105, 'Test 80');
test(taskSchedulerII([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], 0), 20, 'Test 81');
test(taskSchedulerII([1,1,2,2,3,3,4,4,5,5,1,1,2,2,3,3,4,4,5,5], 2), 40, 'Test 82');
test(taskSchedulerII([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10], 100), 111, 'Test 83');
test(taskSchedulerII([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 3), 74, 'Test 84');
test(taskSchedulerII([1, 3, 2, 3, 1, 4, 2, 3, 1, 2, 4, 3, 1, 2, 3, 4, 1, 2, 3, 4], 4), 28, 'Test 85');
test(taskSchedulerII([1,2,3,4,5,1,2,3,4,5,1,2,3,4,5], 4), 15, 'Test 86');
test(taskSchedulerII([9,8,7,6,5,4,3,2,1,9,8,7,6,5,4,3,2,1,9,8], 2), 20, 'Test 87');
test(taskSchedulerII([1,2,1,3,2,1,4,3,2,1,5,4,3,2,1], 3), 18, 'Test 88');
test(taskSchedulerII([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1), 20, 'Test 89');
test(taskSchedulerII([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5], 4), 14, 'Test 90');
test(taskSchedulerII([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 5), 265, 'Test 91');
test(taskSchedulerII([1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5], 0), 20, 'Test 92');
test(taskSchedulerII([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,2,3,4,5,6,7,8,9,10], 10), 30, 'Test 93');
test(taskSchedulerII([1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3], 1), 21, 'Test 94');
test(taskSchedulerII([1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9], 4), 18, 'Test 95');
test(taskSchedulerII([1,1,2,2,3,3,1,1,2,2,3,3,1,1,2,2,3,3], 2), 36, 'Test 96');
test(taskSchedulerII([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 1), 20, 'Test 97');
test(taskSchedulerII([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 20), 20, 'Test 98');
test(taskSchedulerII([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10], 1), 30, 'Test 99');
test(taskSchedulerII([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10], 15), 46, 'Test 100');
test(taskSchedulerII([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 1), 20, 'Test 101');
test(taskSchedulerII([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2], 4), 47, 'Test 102');

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
