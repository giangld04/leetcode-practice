// Test: 1306. Jump Game Iii
// 112 test cases from LeetCodeDataset
// Run: node test.js

const { canReach } = require("./solution");

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

console.log("\n1306. Jump Game Iii\n");

test(canReach([5,0,5,0,5,0], 1), true, 'Test 1');
test(canReach([5,0,0,0,0,0], 0), true, 'Test 2');
test(canReach([4,2,3,0,3,1,2], 0), true, 'Test 3');
test(canReach([0,1,0,1,0,1,0], 1), true, 'Test 4');
test(canReach([0,1,0,1,0], 4), true, 'Test 5');
test(canReach([0,0,0,0,0,0,0,0,0,0], 5), true, 'Test 6');
test(canReach([3,0,2,1,2], 2), false, 'Test 7');
test(canReach([0,1,0,1,0], 3), true, 'Test 8');
test(canReach([0,1,1,0,1,1], 4), true, 'Test 9');
test(canReach([0,1,0,1,0,1,0], 0), true, 'Test 10');
test(canReach([1,2,3,4,0], 0), false, 'Test 11');
test(canReach([1,0,1,0,1,0,1,0,1,0], 0), true, 'Test 12');
test(canReach([0,0,0,0,0,0], 5), true, 'Test 13');
test(canReach([1,1,1,1,1,1,1,1,1,0], 0), true, 'Test 14');
test(canReach([0,1,0,1,0], 2), true, 'Test 15');
test(canReach([0,1,0,1,0], 0), true, 'Test 16');
test(canReach([4,2,3,0,3,1,2], 5), true, 'Test 17');
test(canReach([0,1,2,3,4,5,6,7,8,9], 5), true, 'Test 18');
test(canReach([0,1,2,3,4,5], 3), true, 'Test 19');
test(canReach([1,2,3,4,0], 4), true, 'Test 20');
test(canReach([2,3,1,1,4], 3), false, 'Test 21');
test(canReach([1,1,1,1,1,1], 0), false, 'Test 22');
test(canReach([0,1], 1), true, 'Test 23');
test(canReach([0,1,2,3,4,5], 0), true, 'Test 24');
test(canReach([1,1,1,1,1,1,1,1,1,1], 0), false, 'Test 25');
test(canReach([1,2,3,4,0], 2), false, 'Test 26');
test(canReach([2,3,0,1,4], 2), true, 'Test 27');
test(canReach([5,0,0,0,0,0,0,0,0,0], 1), true, 'Test 28');
test(canReach([0,1,0,1,0], 1), true, 'Test 29');
test(canReach([1,0,1,0,1,0], 0), true, 'Test 30');
test(canReach([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1], 6), true, 'Test 31');
test(canReach([1,2,3,4,5,6,7,8,9,0,9,8,7,6,5,4,3,2,1,0], 15), true, 'Test 32');
test(canReach([2,0,1,1,3,0,2,0,1,0], 1), true, 'Test 33');
test(canReach([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0], 1), true, 'Test 34');
test(canReach([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0], 18), true, 'Test 35');
test(canReach([1,3,0,0,2,4,2,0,1,3], 5), true, 'Test 36');
test(canReach([5,0,2,0,3,0,6,0,7,0,8,0,9,0,10,0,11,0,12,0,13,0,14,0], 1), true, 'Test 37');
test(canReach([5,0,5,0,5,0,5,0,5,0,5,0,5,0,0], 1), true, 'Test 38');
test(canReach([3,5,2,1,0,0,1,2,3], 5), true, 'Test 39');
test(canReach([10,1,2,3,4,5,6,7,8,9], 0), false, 'Test 40');
test(canReach([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,0], 30), Error: list index out of range, 'Test 41');
test(canReach([5,1,4,1,2,3,0,1], 2), true, 'Test 42');
test(canReach([5,5,5,5,5,5,0,5,5,5,5,5], 6), true, 'Test 43');
test(canReach([5,2,1,4,0,0,0,3,1,2,1], 0), true, 'Test 44');
test(canReach([4,0,1,0,2,3,0,1], 2), true, 'Test 45');
test(canReach([0,2,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0], 15), true, 'Test 46');
test(canReach([10,9,8,7,6,5,4,3,2,1,0], 10), true, 'Test 47');
test(canReach([5,0,0,0,0,0,0,0,0,5], 9), true, 'Test 48');
test(canReach([5,4,3,2,1,0,1,2,3,4,5], 10), true, 'Test 49');
test(canReach([3,2,1,0,4,2,0,3,0,1], 0), true, 'Test 50');
test(canReach([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,0], 19), true, 'Test 51');
test(canReach([4,4,4,4,4,4,4,4,4,4,4,4,0], 0), true, 'Test 52');
test(canReach([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0], 24), true, 'Test 53');
test(canReach([0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0], 0), true, 'Test 54');
test(canReach([1,1,2,3,4,5,6,7,8,9,0], 10), true, 'Test 55');
test(canReach([3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,3,3,3,3,3], 15), false, 'Test 56');
test(canReach([10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10], 20), true, 'Test 57');
test(canReach([3,4,1,2,5,0,1,2,3,4,5,0,1,2,3,4,5,0,1,2], 19), true, 'Test 58');
test(canReach([4,2,2,1,0,1,0,1,0,1,0,1,0,1,0], 13), true, 'Test 59');
test(canReach([0,1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1], 0), true, 'Test 60');
test(canReach([2,2,2,2,2,2,2,2,2,2,0], 5), false, 'Test 61');
test(canReach([4,0,5,0,3,0,1,0,2,0,3,0,4,0,5], 1), true, 'Test 62');
test(canReach([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,0], 19), true, 'Test 63');
test(canReach([4,2,3,0,3,1,2,3,0,1], 8), true, 'Test 64');
test(canReach([3,4,2,3,0,1,2,0,1,3], 0), true, 'Test 65');
test(canReach([1,1,1,1,1,1,1,1,1,1,1,1,1,1,0], 14), true, 'Test 66');
test(canReach([2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0], 0), false, 'Test 67');
test(canReach([5,4,3,2,1,0,1,2,3,4,5], 6), true, 'Test 68');
test(canReach([5,3,0,0,2,0,1,0,0,3,0], 2), true, 'Test 69');
test(canReach([1,3,0,0,2,3,4,0,0,5,4,3], 1), true, 'Test 70');
test(canReach([4,0,5,3,0,1,2,0,3,1], 5), true, 'Test 71');
test(canReach([4,1,3,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0], 2), true, 'Test 72');
test(canReach([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,0], 19), true, 'Test 73');
test(canReach([2,3,0,1,4,5,6,0,2,1], 3), true, 'Test 74');
test(canReach([1,1,1,1,1,1,1,1,1,1,0], 5), true, 'Test 75');
test(canReach([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0], 19), true, 'Test 76');
test(canReach([1,2,3,4,5,6,7,8,9,0], 9), true, 'Test 77');
test(canReach([2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0], 39), false, 'Test 78');
test(canReach([1,2,0,1,2,0,1,2,0,1,0], 0), true, 'Test 79');
test(canReach([1,1,1,1,1,1,1,1,1,0], 9), true, 'Test 80');
test(canReach([0,2,1,0,1,0,1,0,1,0], 8), true, 'Test 81');
test(canReach([0,1,2,3,4,5,6,7,8,9,10], 5), true, 'Test 82');
test(canReach([2,0,2,0,1,0,1,0,2,0,1,0,1,0,2,0], 14), true, 'Test 83');
test(canReach([10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10], 10), true, 'Test 84');
test(canReach([3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0], 34), true, 'Test 85');
test(canReach([1,1,1,1,1,1,1,1,1,1,1,1,1,1,0], 13), true, 'Test 86');
test(canReach([5,0,1,2,3,0,1,0,2,3,0], 5), true, 'Test 87');
test(canReach([4,2,3,1,0,2,3,4,5,0], 2), true, 'Test 88');
test(canReach([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0], 14), true, 'Test 89');
test(canReach([2,3,4,5,0,0,5,4,3,2], 5), true, 'Test 90');
test(canReach([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14], 0), true, 'Test 91');
test(canReach([10,8,5,0,12,10,7,3,8,4,2,9,0,6,1], 5), false, 'Test 92');
test(canReach([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 10), true, 'Test 93');
test(canReach([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,0,1,2,3,4,5,6,7,8,9,10], 20), true, 'Test 94');
test(canReach([5,1,3,2,4,0,6], 2), true, 'Test 95');
test(canReach([1,0,2,0,3,0,4,0,5,0,6,0,7,0,8,0,9,0], 1), true, 'Test 96');
test(canReach([3,0,2,5,0,1,2,0,0,3,0,1,0,0,0,0,0,0,0,0], 1), true, 'Test 97');
test(canReach([2,1,0,0,2,1,0,1,0,1,0,1,0], 2), true, 'Test 98');
test(canReach([1,3,5,7,9,0,11,13,15,17], 4), false, 'Test 99');
test(canReach([2,3,1,1,2,4,2,0,1,3,1,2,3,4,0], 6), true, 'Test 100');
test(canReach([1,2,3,4,5,6,7,8,9,10,11,12,13,14,0], 14), true, 'Test 101');
test(canReach([3,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,0], 10), true, 'Test 102');
test(canReach([2,3,1,1,4,2,3,1,1,4], 5), false, 'Test 103');
test(canReach([2,4,3,2,0,1,2,3,4,0], 0), true, 'Test 104');
test(canReach([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1], 21), true, 'Test 105');
test(canReach([0,3,0,5,0,0,3,1,0,2], 5), true, 'Test 106');
test(canReach([1,2,3,4,5,0,1,2,3,4], 8), true, 'Test 107');
test(canReach([0,0,0,0,0,0,0,0,0,0], 4), true, 'Test 108');
test(canReach([3,2,1,4,5,6,0,1,2,3], 8), true, 'Test 109');
test(canReach([0,3,2,1,5,4,3,2,1,0,3,2,1,0,3,2,1,0,3,2,1,0], 10), true, 'Test 110');
test(canReach([1,0,3,4,0,5,2,0,0,3,2], 4), true, 'Test 111');
test(canReach([10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9], 10), true, 'Test 112');

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
