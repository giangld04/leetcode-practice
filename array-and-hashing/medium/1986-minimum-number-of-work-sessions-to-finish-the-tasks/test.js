// Test: 1986. Minimum Number Of Work Sessions To Finish The Tasks
// 123 test cases from LeetCodeDataset
// Run: node test.js

const { minSessions } = require("./solution");

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

console.log("\n1986. Minimum Number Of Work Sessions To Finish The Tasks\n");

test(minSessions([1,3,2,4], 5), 2, 'Test 1');
test(minSessions([5,7,4,2,6], 10), 3, 'Test 2');
test(minSessions([1,10,2,9,3,8,4,7,5,6], 12), 5, 'Test 3');
test(minSessions([1,2,3], 3), 2, 'Test 4');
test(minSessions([5,5,5,5], 5), 4, 'Test 5');
test(minSessions([9,9,9,9], 9), 4, 'Test 6');
test(minSessions([2,3,3,4,6], 6), 3, 'Test 7');
test(minSessions([1,1,1,1,1,1,1,1,1,1,1,1,1,1], 2), 7, 'Test 8');
test(minSessions([14], 14), 1, 'Test 9');
test(minSessions([7,7,7,7], 14), 2, 'Test 10');
test(minSessions([10,10,10,10], 10), 4, 'Test 11');
test(minSessions([10,10,10], 10), 3, 'Test 12');
test(minSessions([2,3,4,5,6,7,8,9,10,11,12,13,14,1], 14), 8, 'Test 13');
test(minSessions([14,1,1,1,1,1,1,1,1,1,1,1,1,1], 14), 2, 'Test 14');
test(minSessions([2,3,4,5,1], 6), 3, 'Test 15');
test(minSessions([1,2,3,4,5], 15), 1, 'Test 16');
test(minSessions([7,2,7,2,7], 12), 3, 'Test 17');
test(minSessions([8,8,8,8,8,8,8,8], 15), 8, 'Test 18');
test(minSessions([1,2,3,4,5,6,7,8,9,10,11,12,13,14], 15), 7, 'Test 19');
test(minSessions([10,10,10,10,10,10,10,10,10,10,10,10,10,10], 10), 14, 'Test 20');
test(minSessions([1,2,3,4], 10), 1, 'Test 21');
test(minSessions([5,5,5,5,5,5,5,5,5,5,5,5,5,5], 15), 5, 'Test 22');
test(minSessions([1,2,3,4,5,6,7,8,9,10,11,12,13,14], 14), 8, 'Test 23');
test(minSessions([1,1,1,1,1,1,1,1,1,1,1,1,1,1], 14), 1, 'Test 24');
test(minSessions([3,1,3,1,1], 8), 2, 'Test 25');
test(minSessions([7,2,4,3,5], 12), 2, 'Test 26');
test(minSessions([1, 2, 3, 3, 3, 3, 4, 4, 5, 5, 5, 6, 6, 7], 10), 6, 'Test 27');
test(minSessions([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1, 1, 1, 1], 10), 6, 'Test 28');
test(minSessions([1,3,5,7,9,11,13,1,3,5,7,9,11,13], 15), 7, 'Test 29');
test(minSessions([7,6,5,4,3,2,1,1,2,3,4,5,6,7], 13), 5, 'Test 30');
test(minSessions([2, 2, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 5], 12), 5, 'Test 31');
test(minSessions([1, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6], 12), 5, 'Test 32');
test(minSessions([10,1,10,1,10,1,10,1,10,1,10,1,10,1], 11), 7, 'Test 33');
test(minSessions([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 15), 14, 'Test 34');
test(minSessions([10,10,10,10,1,1,1,1,1,1,1,1,1,1], 15), 4, 'Test 35');
test(minSessions([7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7], 14), 7, 'Test 36');
test(minSessions([1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2], 8), 5, 'Test 37');
test(minSessions([1,1,2,2,2,3,3,4,4,5,5,6,6,14], 14), 5, 'Test 38');
test(minSessions([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 28), 4, 'Test 39');
test(minSessions([3, 6, 7, 9, 10, 1, 2, 4, 5, 8, 2, 3, 4, 6], 10), 7, 'Test 40');
test(minSessions([7,8,7,8,7,8,7,8], 15), 4, 'Test 41');
test(minSessions([7,6,5,4,3,2,1,1,2,3,4,5,6,7], 12), 5, 'Test 42');
test(minSessions([2,3,5,7,11,13], 15), 3, 'Test 43');
test(minSessions([2,3,3,4,4,5,5,6,6,7,7,8,8,9], 14), 6, 'Test 44');
test(minSessions([1,2,3,4,5,6,7,8,9,10,11,12,13,14], 20), 6, 'Test 45');
test(minSessions([1,2,3,4,5,6,7,8,1,2,3,4,5,6], 10), 6, 'Test 46');
test(minSessions([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 20), 6, 'Test 47');
test(minSessions([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5], 10), 4, 'Test 48');
test(minSessions([8, 8, 8, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 15), 4, 'Test 49');
test(minSessions([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 15), 5, 'Test 50');
test(minSessions([10,9,8,7,6,5,4,3,2,1,10,9,8,7], 15), 6, 'Test 51');
test(minSessions([3,3,3,3,3,3,2,2,2,2,2,2,1,1], 7), 5, 'Test 52');
test(minSessions([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 14], 14), 2, 'Test 53');
test(minSessions([10, 10, 10, 10, 1, 2, 3, 4], 15), 4, 'Test 54');
test(minSessions([9, 1, 4, 8, 3, 2, 5, 6, 7, 10, 1, 2, 3, 4], 10), 7, 'Test 55');
test(minSessions([7,7,7,7,7,7,1,1,1,1,1,1,1,1], 14), 4, 'Test 56');
test(minSessions([5,5,5,5,5,5,5,5,5,5,5,5,5,5], 5), 14, 'Test 57');
test(minSessions([10, 2, 3, 3, 4, 5, 6, 6, 7, 8, 9, 10, 1, 2], 10), 8, 'Test 58');
test(minSessions([5, 5, 5, 5, 5, 5, 5, 5], 10), 4, 'Test 59');
test(minSessions([10,10,10,10,10,10,10,10,10,10,10,10,10,10], 30), 5, 'Test 60');
test(minSessions([7, 3, 4, 5, 6, 2, 8, 9, 10, 1, 2, 3, 4, 5], 10), 7, 'Test 61');
test(minSessions([10,10,10,1,1,1,2,2,2,3,3,3,4,4], 14), 4, 'Test 62');
test(minSessions([2,2,2,2,3,3,3,3,4,4,4,4,5,5], 10), 5, 'Test 63');
test(minSessions([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7], 14), 4, 'Test 64');
test(minSessions([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 9), 5, 'Test 65');
test(minSessions([2,2,3,3,4,4,5,5,6,6,7,7,8,8], 12), 6, 'Test 66');
test(minSessions([3,3,3,3,3,3,3,3,3,3,3,3,3,3], 9), 5, 'Test 67');
test(minSessions([2, 3, 3, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7], 12), 6, 'Test 68');
test(minSessions([1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5], 10), 5, 'Test 69');
test(minSessions([1,2,3,4,3,2,1,4,3,2,1,4,3,2], 8), 5, 'Test 70');
test(minSessions([7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7], 10), 14, 'Test 71');
test(minSessions([1,1,1,2,2,2,3,3,3,4,4,4,5,5], 9), 5, 'Test 72');
test(minSessions([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 10), 7, 'Test 73');
test(minSessions([10,9,8,7,6,5,4,3,2,1,1,2,3,4], 20), 4, 'Test 74');
test(minSessions([1,2,3,4,5,1,2,3,4,5,1,2,3,4], 10), 4, 'Test 75');
test(minSessions([8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8], 16), 7, 'Test 76');
test(minSessions([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 1], 10), 14, 'Test 77');
test(minSessions([4,4,4,4,4,4,4,4,4,4,4,4,4,4], 13), 5, 'Test 78');
test(minSessions([5,5,5,5,5,5,5,5,5,5,5,5,5,5], 10), 7, 'Test 79');
test(minSessions([2, 4, 6, 8, 10, 12, 14, 1, 3, 5, 7, 9, 11, 13], 14), 8, 'Test 80');
test(minSessions([1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2], 6), 4, 'Test 81');
test(minSessions([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43], 15), Infinity, 'Test 82');
test(minSessions([10, 10, 10, 10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 10), 5, 'Test 83');
test(minSessions([2,2,2,2,2,2,2,2,2,2,2,2,2,2], 4), 7, 'Test 84');
test(minSessions([9, 6, 7, 8, 5, 4, 3, 2, 1, 10, 11, 12, 13, 14], 14), 8, 'Test 85');
test(minSessions([2,3,2,3,2,3,2,3,2,3,2,3,2,3], 6), 6, 'Test 86');
test(minSessions([9,8,7,6,5,4,3,2,1,1,2,3,4,5], 10), 6, 'Test 87');
test(minSessions([9,6,3,2,1,9,6,3,2,1,9,6,3,2], 10), 7, 'Test 88');
test(minSessions([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 13), 3, 'Test 89');
test(minSessions([1,2,3,4,5,6,7,8,9,10,11,12,13,14], 10), Infinity, 'Test 90');
test(minSessions([5,4,3,2,1,5,4,3,2,1,5,4,3,2], 10), 5, 'Test 91');
test(minSessions([10,10,10,5,5,5,5,5,5,5,5,5,5,5], 15), 6, 'Test 92');
test(minSessions([10,10,10,1,1,1,1,1,1,1,1,1,1,1], 10), 5, 'Test 93');
test(minSessions([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 14], 10), Infinity, 'Test 94');
test(minSessions([1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4], 8), 4, 'Test 95');
test(minSessions([1,2,3,3,4,4,5,5,5,6,6,6,7,7], 12), 6, 'Test 96');
test(minSessions([1, 3, 2, 4, 6, 5, 7, 8, 9, 10, 11, 12, 13, 14], 14), 8, 'Test 97');
test(minSessions([14, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 14), 2, 'Test 98');
test(minSessions([1,2,3,4,5,6,7,8,9,10,11,12,13,14], 13), Infinity, 'Test 99');
test(minSessions([1,2,1,2,1,2,1,2,1,2,1,2,1,2], 4), 6, 'Test 100');
test(minSessions([3,3,3,3,3,3,2,2,2,2,2,2,1,1], 9), 4, 'Test 101');
test(minSessions([1,2,2,3,3,4,4,5,5,6,6,7,7,8], 15), 5, 'Test 102');
test(minSessions([6,6,6,6,6,6,6,6,6,6,6,6,6,6], 12), 7, 'Test 103');
test(minSessions([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5], 6), 7, 'Test 104');
test(minSessions([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 8), 4, 'Test 105');
test(minSessions([8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 1], 8), 14, 'Test 106');
test(minSessions([3,2,3,2,3,2,3,2], 5), 4, 'Test 107');
test(minSessions([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7], 10), 6, 'Test 108');
test(minSessions([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43], 20), Infinity, 'Test 109');
test(minSessions([1,3,5,7,9,11,13,11,9,7,5,3,1], 15), 6, 'Test 110');
test(minSessions([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 2), 8, 'Test 111');
test(minSessions([1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8], 14), 5, 'Test 112');
test(minSessions([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 10), Infinity, 'Test 113');
test(minSessions([1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1, 2], 5), 6, 'Test 114');
test(minSessions([2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5], 10), 5, 'Test 115');
test(minSessions([1, 3, 5, 7, 9, 11, 13, 15, 1, 3, 5, 7, 9, 11], 15), 7, 'Test 116');
test(minSessions([7, 7, 7, 7, 6, 6, 6, 5, 5, 4, 4, 3, 3, 2], 15), 5, 'Test 117');
test(minSessions([1,1,2,2,3,3,4,4,5,5,6,6,7,7], 8), 7, 'Test 118');
test(minSessions([1, 2, 2, 3, 3, 4, 4, 5, 5, 5, 6, 6, 6, 7], 14), 5, 'Test 119');
test(minSessions([1,2,2,3,3,4,4,5,5,6,6,7,7,8], 12), 6, 'Test 120');
test(minSessions([10, 10, 10, 10, 10, 10, 1, 1, 1, 1, 1, 1, 1, 1], 20), 4, 'Test 121');
test(minSessions([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 7), Infinity, 'Test 122');
test(minSessions([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 20), 7, 'Test 123');

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
