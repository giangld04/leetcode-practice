// Test: 687. Longest Univalue Path
// 106 test cases from LeetCodeDataset
// Run: node test.js

const { longestUnivaluePath } = require("./solution");

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

console.log("\n687. Longest Univalue Path\n");

test(longestUnivaluePath([1,2,3,4,5,6,7]), 0, 'Test 1');
test(longestUnivaluePath([1,null,2,null,3,null,4,null,5]), 0, 'Test 2');
test(longestUnivaluePath([5,4,5,1,1,null,5]), 2, 'Test 3');
test(longestUnivaluePath([1,4,5,4,4,null,5]), 2, 'Test 4');
test(longestUnivaluePath([1,null,1,null,1,1,null]), 3, 'Test 5');
test(longestUnivaluePath([1,2]), 0, 'Test 6');
test(longestUnivaluePath([1,1,1,1]), 3, 'Test 7');
test(longestUnivaluePath([5,5,5,5,5,5,5,5]), 5, 'Test 8');
test(longestUnivaluePath([]), 0, 'Test 9');
test(longestUnivaluePath([1,2,2,null,null,3,3,3,3,null,null,null,null,4,4,4,4,null,null,null,null,null,null,5,5,5,5]), 2, 'Test 10');
test(longestUnivaluePath([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10]), 0, 'Test 11');
test(longestUnivaluePath([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 10, 'Test 12');
test(longestUnivaluePath([5,4,5,1,1,5,5,1,1,null,5,5,5,5,5,5,5,5,5,5,5,5,5]), 5, 'Test 13');
test(longestUnivaluePath([1,2,2,2,3,3,3,null,3,null,null,3,null,3]), 1, 'Test 14');
test(longestUnivaluePath([1,1,1,1,1,1,1,null,null,1,null,1,null,1,null,1,null,1,null,1,null,1]), 9, 'Test 15');
test(longestUnivaluePath([1,2,2,3,3,null,null,3,3]), 2, 'Test 16');
test(longestUnivaluePath([1,1,1,1,1,null,1,1,null,1,1,null,1,null,null,1,null,1]), 7, 'Test 17');
test(longestUnivaluePath([5,4,5,4,4,null,5,4,4,null,null,5,5,5,5,null,null,5,5,null,null,5,5,null,null,5,5]), 5, 'Test 18');
test(longestUnivaluePath([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 8, 'Test 19');
test(longestUnivaluePath([1,4,4,4,4,1,1,4,null,null,null,null,null,null,4]), 3, 'Test 20');
test(longestUnivaluePath([1,1,2,1,1,2,2,1,null,1,null,2,null,2,null,2]), 4, 'Test 21');
test(longestUnivaluePath([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 11, 'Test 22');
test(longestUnivaluePath([4,4,null,4,4,4,null,null,4,4,null,4,null,null,4]), 7, 'Test 23');
test(longestUnivaluePath([1,1,1,1,1,null,null,1,1,null,1,1,null,1]), 5, 'Test 24');
test(longestUnivaluePath([1,null,1,null,1,null,1,null,1,null,1,null,1,null,1,null,1]), 8, 'Test 25');
test(longestUnivaluePath([2,2,2,null,2,2,null,2,null,2,null,2,null,2,null]), 8, 'Test 26');
test(longestUnivaluePath([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]), 8, 'Test 27');
test(longestUnivaluePath([1,4,4,4,4,1,1,4,4,4,4,2,2,2,2]), 4, 'Test 28');
test(longestUnivaluePath([5,5,5,5,5,5,5,5,5,5]), 5, 'Test 29');
test(longestUnivaluePath([1,null,1,null,1,null,1,null,1,null,1,null,1,null,1,null,1,null,1,null,1,null,1,null,1]), 12, 'Test 30');
test(longestUnivaluePath([5,5,5,5,5,5,5,5,5]), 5, 'Test 31');
test(longestUnivaluePath([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 11, 'Test 32');
test(longestUnivaluePath([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 8, 'Test 33');
test(longestUnivaluePath([1,1,1,1,null,1,null,1,1,null,1,null,1,null,1]), 7, 'Test 34');
test(longestUnivaluePath([1,1,1,1,1,1,1,null,null,1,1,1,1,null,null,null,null,1,1,1,1,1,1,1]), 9, 'Test 35');
test(longestUnivaluePath([1,2,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,4]), 2, 'Test 36');
test(longestUnivaluePath([3,3,null,3,null,3,null,3,null,3,null,3,null,3,null,3]), 8, 'Test 37');
test(longestUnivaluePath([1,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3]), 3, 'Test 38');
test(longestUnivaluePath([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,null,3]), 7, 'Test 39');
test(longestUnivaluePath([1,1,1,2,2,2,1,1,1,2,2,2,1,1,1,2,2,2,1,1,1,2,2,2,1,1,1]), 4, 'Test 40');
test(longestUnivaluePath([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 9, 'Test 41');
test(longestUnivaluePath([7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7]), 9, 'Test 42');
test(longestUnivaluePath([5,4,5,4,4,null,5,4,4,null,null,5,5,5,5,null,null,5,5,5,null,null,5,5,5,null,null,5,5,5,null,null,5,5,5,null,null,5,5,5,null,null,5,5,5,null,null,5]), 8, 'Test 43');
test(longestUnivaluePath([1,2,2,3,3,3,3,null,null,null,null,null,null,4,4]), 0, 'Test 44');
test(longestUnivaluePath([1,null,2,null,2,null,2,null,2,null,2,null,2,null,2]), 6, 'Test 45');
test(longestUnivaluePath([5,5,5,1,1,5,5,null,null,5,5,5,null,null,5]), 4, 'Test 46');
test(longestUnivaluePath([1,4,5,4,4,null,5,1,1,1,1,null,5,5,5,1,1,1,1]), 2, 'Test 47');
test(longestUnivaluePath([5,4,5,4,4,null,5,4,4,null,4,5,5,null,5,5,5]), 4, 'Test 48');
test(longestUnivaluePath([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 0, 'Test 49');
test(longestUnivaluePath([2,2,2,2,2,null,2,null,2,null,2,null,2,null,2,null,2,null,2,null,2,null,2,null,2,null,2,null,2,null,2,null,2]), 13, 'Test 50');
test(longestUnivaluePath([5,4,5,4,4,null,5,1,null,2,null,5,5]), 3, 'Test 51');
test(longestUnivaluePath([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 0, 'Test 52');
test(longestUnivaluePath([3,3,3,3,3,3,3,3,null,null,3,null,null,3,null,null,3,null,null,3,null,null,3,null,null,3,null,null,3]), 11, 'Test 53');
test(longestUnivaluePath([1,2,2,3,3,3,3,null,null,4,4,null,null,5,5]), 0, 'Test 54');
test(longestUnivaluePath([1,2,2,null,2,2,null,null,2,2,null,null,2,2,2]), 3, 'Test 55');
test(longestUnivaluePath([1,2,3,2,2,3,3,2,2,null,null,null,null,3,null]), 3, 'Test 56');
test(longestUnivaluePath([1,1,2,1,null,2,1,null,null,null,1,1]), 2, 'Test 57');
test(longestUnivaluePath([5,5,5,5,5,null,5,null,null,5,5,5,null,null,5,5,5,5,5,5,5,5,5]), 9, 'Test 58');
test(longestUnivaluePath([5,5,5,5,5,5,5,null,null,5,5,5,5,null,null,5,5,null,null,5,5,null,null,5]), 9, 'Test 59');
test(longestUnivaluePath([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]), 0, 'Test 60');
test(longestUnivaluePath([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]), 0, 'Test 61');
test(longestUnivaluePath([5,4,5,4,4,null,5,1,1,null,1,1,null,1]), 2, 'Test 62');
test(longestUnivaluePath([7,7,7,7,7,null,null,7,7,7,null,null,7,7,7,null,null,7,7,7,null,null,7,7,7,null,null,7,7,7,null,null,7,7,7,null,null,7,7,7,null,null,7,7,7]), 11, 'Test 63');
test(longestUnivaluePath([5,4,5,4,4,null,5,4,null,null,null,null,4,4]), 4, 'Test 64');
test(longestUnivaluePath([1,2,1,1,3,1,1,null,null,null,null,null,null,1,1,1]), 4, 'Test 65');
test(longestUnivaluePath([1,1,1,1,null,1,null,1,null,1,null,1,null,1,null,1]), 9, 'Test 66');
test(longestUnivaluePath([5,4,5,4,4,null,5,null,null,null,null,5,5,null,null,5,5,null,null,5,5]), 5, 'Test 67');
test(longestUnivaluePath([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 11, 'Test 68');
test(longestUnivaluePath([1,null,1,null,1,null,1,null,1,null,1,null,1,null,1]), 7, 'Test 69');
test(longestUnivaluePath([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 9, 'Test 70');
test(longestUnivaluePath([1,2,3,2,2,3,3,2,2,null,null,3,null,3,null,null,3]), 4, 'Test 71');
test(longestUnivaluePath([1,1,1,1,null,null,1,null,null,null,null,1,null,null,null,1]), 4, 'Test 72');
test(longestUnivaluePath([3,3,3,3,3,3,3,null,3,3,null,null,3,3,3,null,null,3,3]), 7, 'Test 73');
test(longestUnivaluePath([1,2,2,2,3,2,2,2,2,2,3,2,2,2,2]), 4, 'Test 74');
test(longestUnivaluePath([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 6, 'Test 75');
test(longestUnivaluePath([1,2,2,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]), 2, 'Test 76');
test(longestUnivaluePath([5,5,5,5,5,5,5]), 4, 'Test 77');
test(longestUnivaluePath([1,2,2,3,3,3,3,4,4,4,4,4,4,4,4]), 0, 'Test 78');
test(longestUnivaluePath([5,5,5,5,5,5,5,null,5,5,null,5,null,5,5,null,5,5]), 7, 'Test 79');
test(longestUnivaluePath([5,4,5,4,4,5,5,null,null,4,4,null,null,4,4]), 3, 'Test 80');
test(longestUnivaluePath([5,4,5,1,1,5,5,null,null,null,null,5,5]), 3, 'Test 81');
test(longestUnivaluePath([1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]), 6, 'Test 82');
test(longestUnivaluePath([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 9, 'Test 83');
test(longestUnivaluePath([1,1,1,1,1,null,1,1,null,1,1,null,1]), 6, 'Test 84');
test(longestUnivaluePath([1,2,null,2,null,2,null,2,null,2,null,2,null,2,null,2,null,2,null,2,null,2,null,2,null,2]), 12, 'Test 85');
test(longestUnivaluePath([1,1,1,1,1,null,null,1,1,null,null,1,1]), 5, 'Test 86');
test(longestUnivaluePath([1,1,1,1,null,1,1,1,null,null,1,1,null,1,1,1,null,1]), 8, 'Test 87');
test(longestUnivaluePath([2,2,2,null,2,null,2,2,null,2,2,null,2]), 7, 'Test 88');
test(longestUnivaluePath([5,5,5,5,5,null,null,5,5,5,5,null,null,5,5,5,5]), 6, 'Test 89');
test(longestUnivaluePath([1,2,2,null,3,null,3,3,null,null,3]), 1, 'Test 90');
test(longestUnivaluePath([1,null,1,null,1,null,1,null,1,null,1,null,1,null,1,null,1,null,1]), 9, 'Test 91');
test(longestUnivaluePath([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 10, 'Test 92');
test(longestUnivaluePath([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 8, 'Test 93');
test(longestUnivaluePath([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,null,null,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 11, 'Test 94');
test(longestUnivaluePath([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 8, 'Test 95');
test(longestUnivaluePath([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 9, 'Test 96');
test(longestUnivaluePath([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]), 7, 'Test 97');
test(longestUnivaluePath([1,1,1,null,1,null,1,1,1,null,1,null,1,1,1,null,1,null,1]), 9, 'Test 98');
test(longestUnivaluePath([5,null,5,5,null,null,5,null,5,5,null,5,null,5,null,5]), 8, 'Test 99');
test(longestUnivaluePath([1,null,1,null,1,null,1,null,1,null,1,1,1,1,1]), 7, 'Test 100');
test(longestUnivaluePath([1,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7]), 0, 'Test 101');
test(longestUnivaluePath([5,5,5,5,5,5,5,null,null,null,null,5,5,null,5,5,5,null,5,5,null,5]), 7, 'Test 102');
test(longestUnivaluePath([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 7, 'Test 103');
test(longestUnivaluePath([1,2,3,2,2,3,3,2,2,3,3,2,2,3,3,2,2,3,3,2,2,3,3,2,2,3,3,2,2,3,3]), 4, 'Test 104');
test(longestUnivaluePath([2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]), 8, 'Test 105');
test(longestUnivaluePath([2,2,2,2,2,2,2,null,2,2,null,2,null,2,2,null,2,2]), 7, 'Test 106');

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
