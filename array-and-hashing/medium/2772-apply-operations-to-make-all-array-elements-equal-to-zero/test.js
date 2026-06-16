// Test: 2772. Apply Operations To Make All Array Elements Equal To Zero
// 101 test cases from LeetCodeDataset
// Run: node test.js

const { checkArray } = require("./solution");

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

console.log("\n2772. Apply Operations To Make All Array Elements Equal To Zero\n");

test(checkArray([2,2,3,1,1,0], 3), true, 'Test 1');
test(checkArray([5,5,5,5,5], 5), true, 'Test 2');
test(checkArray([1,2,3,4,5], 5), false, 'Test 3');
test(checkArray([1000000,1000000,1000000], 3), true, 'Test 4');
test(checkArray([0,0,0,0], 2), true, 'Test 5');
test(checkArray([1,3,1,1], 2), false, 'Test 6');
test(checkArray([0,0,0,0,0], 5), true, 'Test 7');
test(checkArray([1,2,3,4,5], 2), false, 'Test 8');
test(checkArray([1,0,1,0,1], 2), false, 'Test 9');
test(checkArray([10,9,8,7,6,5,4,3,2,1], 10), false, 'Test 10');
test(checkArray([5,5,5,5,5], 1), true, 'Test 11');
test(checkArray([10,9,8,7,6], 3), false, 'Test 12');
test(checkArray([1,1,1,1], 1), true, 'Test 13');
test(checkArray([0,0,0,0,0], 1), true, 'Test 14');
test(checkArray([1,2,3,4,5], 1), true, 'Test 15');
test(checkArray([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3], 7), false, 'Test 16');
test(checkArray([3,2,1,1,2,3,3,2,1,1,2,3,3,2,1,1,2,3,3,2,1], 3), false, 'Test 17');
test(checkArray([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 20), true, 'Test 18');
test(checkArray([1,2,3,4,5,6,7,8,9], 5), false, 'Test 19');
test(checkArray([0,1,2,3,4,3,2,1,0], 5), false, 'Test 20');
test(checkArray([0,1,2,3,4,3,2,1,0,1,2,3,4,3,2,1,0], 5), false, 'Test 21');
test(checkArray([6,6,6,6,6,6,6,6,6,6,6,6,6,6,6], 7), false, 'Test 22');
test(checkArray([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 1), true, 'Test 23');
test(checkArray([1,2,3,4,5,6,7,8,9,10], 5), false, 'Test 24');
test(checkArray([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1], 6), false, 'Test 25');
test(checkArray([5,5,5,5,5,5,5,5], 4), true, 'Test 26');
test(checkArray([6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6], 10), false, 'Test 27');
test(checkArray([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 7), false, 'Test 28');
test(checkArray([1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1], 5), false, 'Test 29');
test(checkArray([1,0,0,1,0,0,1,0,0,1], 3), false, 'Test 30');
test(checkArray([10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10], 11), false, 'Test 31');
test(checkArray([3,2,1,0,1,2,3,4,3,2,1,0,1,2,3,4,3,2,1,0,1,2,3,4,3,2,1,0,1,2], 5), false, 'Test 32');
test(checkArray([1,1,2,2,3,3,4,4,5,5,4,4,3,3,2,2,1,1], 5), true, 'Test 33');
test(checkArray([4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4], 10), false, 'Test 34');
test(checkArray([0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9], 5), false, 'Test 35');
test(checkArray([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 5), true, 'Test 36');
test(checkArray([6,5,4,3,2,1,0,1,2,3,4,5,6], 7), false, 'Test 37');
test(checkArray([0,1,2,3,4,3,2,1,0], 3), false, 'Test 38');
test(checkArray([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 1), true, 'Test 39');
test(checkArray([10,9,8,7,6,5,4,3,2,1,0], 5), false, 'Test 40');
test(checkArray([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 7), true, 'Test 41');
test(checkArray([10,9,8,7,6,5,4,3,2,1], 4), false, 'Test 42');
test(checkArray([6,6,6,6,6,6,5,5,5,5,5,5,4,4,4,4,4,4], 6), true, 'Test 43');
test(checkArray([0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0], 3), true, 'Test 44');
test(checkArray([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 10), true, 'Test 45');
test(checkArray([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1], 7), false, 'Test 46');
test(checkArray([3,3,3,2,2,1,1,1,1,1], 3), false, 'Test 47');
test(checkArray([10,9,8,7,6,5,4,3,2,1], 3), false, 'Test 48');
test(checkArray([10,9,8,7,6,5,4,3,2,1,0,0,0,0,0,0,0,0,0,0], 7), false, 'Test 49');
test(checkArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 5), false, 'Test 50');
test(checkArray([1,2,1,2,1,2,1,2,1,2,1,2], 3), false, 'Test 51');
test(checkArray([1,2,3,4,5,4,3,2,1], 3), false, 'Test 52');
test(checkArray([5,5,5,5,5,5,5,5,5], 5), false, 'Test 53');
test(checkArray([1,2,3,4,3,2,1,0,0,0], 4), true, 'Test 54');
test(checkArray([3,2,1,0,1,2,3,2,1,0,1,2,3,2,1,0,1,2,3,2,1,0,1,2,3,2,1,0,1,2,3], 3), false, 'Test 55');
test(checkArray([3,4,5,4,3,2,1,0], 3), false, 'Test 56');
test(checkArray([1,2,3,2,1,2,3,2,1,2], 3), false, 'Test 57');
test(checkArray([1,2,2,1,0,0,1,2,2,1,0,0,1,2,2,1,0,0], 3), true, 'Test 58');
test(checkArray([10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], 10), true, 'Test 59');
test(checkArray([5,5,5,5,5,5,5], 7), true, 'Test 60');
test(checkArray([3,4,5,4,3,4,5,4,3], 3), false, 'Test 61');
test(checkArray([1000000,1000000,1000000,1000000,1000000,1000000], 3), true, 'Test 62');
test(checkArray([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3], 15), false, 'Test 63');
test(checkArray([0,1,2,3,4,5,6,7,8,9,0], 5), false, 'Test 64');
test(checkArray([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 50), false, 'Test 65');
test(checkArray([4,4,4,4,4,4,4], 4), false, 'Test 66');
test(checkArray([0,1,0,1,0,1,0,1,0,1], 2), false, 'Test 67');
test(checkArray([1,0,1,0,1,0,1,0,1,0,1], 2), false, 'Test 68');
test(checkArray([1000000,1000000,1000000,1000000,1000000], 5), true, 'Test 69');
test(checkArray([5,5,5,5,5,5,5,5,5,5], 4), false, 'Test 70');
test(checkArray([5,5,5,5,5,5,5,5,5,5], 5), true, 'Test 71');
test(checkArray([1,2,3,2,1,2,3,2,1,2,3,2,1], 3), false, 'Test 72');
test(checkArray([4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4], 15), false, 'Test 73');
test(checkArray([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 25), true, 'Test 74');
test(checkArray([4,4,4,4,3,3,3,2,2,1,1,1,0,0,0], 4), false, 'Test 75');
test(checkArray([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], 1), true, 'Test 76');
test(checkArray([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 10), false, 'Test 77');
test(checkArray([5,4,3,2,1,0], 3), false, 'Test 78');
test(checkArray([4,4,4,4,3,3,3,3,2,2,2,2,1,1,1,1,0,0,0,0], 5), false, 'Test 79');
test(checkArray([10,10,10,10,10,10,10,10,10,10], 5), true, 'Test 80');
test(checkArray([1,2,2,1,2,2,1,2,2,1], 5), false, 'Test 81');
test(checkArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 7), false, 'Test 82');
test(checkArray([6,6,6,6,6,5,5,5,5,5,4,4,4,4,4,3,3,3,3,3,2,2,2,2,2,1,1,1,1,1,0,0,0,0,0], 6), false, 'Test 83');
test(checkArray([1000000, 999999, 999998, 999997, 999996], 2), false, 'Test 84');
test(checkArray([6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6], 7), false, 'Test 85');
test(checkArray([0,1,2,3,4,5,6,7,8,9], 5), false, 'Test 86');
test(checkArray([1,2,3,4,3,2,1], 3), false, 'Test 87');
test(checkArray([1,2,3,4,5,6,7,8,9,10], 3), false, 'Test 88');
test(checkArray([2,1,0,1,2,3,2,1,0,1,2], 3), false, 'Test 89');
test(checkArray([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 5), false, 'Test 90');
test(checkArray([10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10], 5), false, 'Test 91');
test(checkArray([1,2,1,2,1,2,1,2,1,2,1,2], 2), false, 'Test 92');
test(checkArray([1000000,1000000,1000000,1000000,1000000,1000000,1000000,1000000,1000000,1000000], 10), true, 'Test 93');
test(checkArray([0,1,2,3,2,1,0,1,2,3,2,1,0], 5), false, 'Test 94');
test(checkArray([1,0,0,1,0,0,1,0,0,1,0,0], 3), false, 'Test 95');
test(checkArray([5,5,5,5,5,5,5], 4), false, 'Test 96');
test(checkArray([1,1,1,1,2,2,2,2,3,3,3,3], 4), true, 'Test 97');
test(checkArray([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1], 3), false, 'Test 98');
test(checkArray([1,2,3,2,1,2,3,2,1], 2), false, 'Test 99');
test(checkArray([1,0,1,0,1,0,1,0,1,0,1,0], 2), false, 'Test 100');
test(checkArray([1,2,3,4,5,6,7,8,9,10], 4), false, 'Test 101');

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
