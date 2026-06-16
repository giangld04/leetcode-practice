// Test: 989. Add To Array Form Of Integer
// 75 test cases from LeetCodeDataset
// Run: node test.js

const { addToArrayForm } = require("./solution");

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

console.log("\n989. Add To Array Form Of Integer\n");

test(addToArrayForm([1], 9), [1, 0], 'Test 1');
test(addToArrayForm([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 1), [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 'Test 2');
test(addToArrayForm([0], 10000), [1, 0, 0, 0, 0], 'Test 3');
test(addToArrayForm([2,1,5], 806), [1, 0, 2, 1], 'Test 4');
test(addToArrayForm([1,2,3,4], 6789), [8, 0, 2, 3], 'Test 5');
test(addToArrayForm([9,9,9,9], 1), [1, 0, 0, 0, 0], 'Test 6');
test(addToArrayForm([0], 23), [2, 3], 'Test 7');
test(addToArrayForm([1,2,3,4,5,6,7,8,9,0], 987654321), [2, 2, 2, 2, 2, 2, 2, 2, 1, 1], 'Test 8');
test(addToArrayForm([5,6,7], 456), [1, 0, 2, 3], 'Test 9');
test(addToArrayForm([0], 256), [2, 5, 6], 'Test 10');
test(addToArrayForm([2,7,4], 181), [4, 5, 5], 'Test 11');
test(addToArrayForm([1,2,0,0], 34), [1, 2, 3, 4], 'Test 12');
test(addToArrayForm([9,9,9], 1000), [1, 9, 9, 9], 'Test 13');
test(addToArrayForm([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 55555555555555555555555555555555555555555555555), [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0], 'Test 14');
test(addToArrayForm([9,8,7,6,5,4,3,2,1,0], 123456789), [9, 9, 9, 9, 9, 9, 9, 9, 9, 9], 'Test 15');
test(addToArrayForm([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 1), [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 'Test 16');
test(addToArrayForm([2,4,6,8,0,2,4,6,8,0], 1357913579), [3, 8, 2, 5, 9, 3, 8, 2, 5, 9], 'Test 17');
test(addToArrayForm([1,0,0,0,0], 99999), [1, 0, 9, 9, 9, 9], 'Test 18');
test(addToArrayForm([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 10000000000000000000), [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 'Test 19');
test(addToArrayForm([9,8,7,6,5,4,3,2,1], 1), [9, 8, 7, 6, 5, 4, 3, 2, 2], 'Test 20');
test(addToArrayForm([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 1), [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 'Test 21');
test(addToArrayForm([1,0,1,0,1,0,1,0,1,0], 909090909), [1, 9, 1, 9, 1, 9, 1, 9, 1, 9], 'Test 22');
test(addToArrayForm([1,2,3,4,5,6,7,8,9], 987654321), [1, 1, 1, 1, 1, 1, 1, 1, 1, 0], 'Test 23');
test(addToArrayForm([5,6,7,8,9], 98765), [1, 5, 5, 5, 5, 4], 'Test 24');
test(addToArrayForm([9,9,9,9,9,9,9,9,9,9], 1), [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 'Test 25');
test(addToArrayForm([9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9], 1), [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 'Test 26');
test(addToArrayForm([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 88888888888888888889), [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 'Test 27');
test(addToArrayForm([9,0,0,0,0,0,0,0,0,9], 9999999999), [1, 9, 0, 0, 0, 0, 0, 0, 0, 0, 8], 'Test 28');
test(addToArrayForm([5,0,0,5], 5005), [1, 0, 0, 1, 0], 'Test 29');
test(addToArrayForm([2,4,6,8,0,2,4,6,8,0], 987654321), [3, 4, 5, 5, 6, 7, 9, 0, 0, 1], 'Test 30');
test(addToArrayForm([9,9,9,9,9,9,9,9,9,9], 10000000000), [1, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9], 'Test 31');
test(addToArrayForm([0,0,0,1], 9999), [1, 0, 0, 0, 0], 'Test 32');
test(addToArrayForm([0,0,0,0,0,0,0,0,0,0], 9999999999), [9, 9, 9, 9, 9, 9, 9, 9, 9, 9], 'Test 33');
test(addToArrayForm([5,4,3,2,1], 123456789), [1, 2, 3, 5, 1, 1, 1, 1, 0], 'Test 34');
test(addToArrayForm([5,5,5,5,5,5,5,5,5,5], 555555555), [6, 1, 1, 1, 1, 1, 1, 1, 1, 0], 'Test 35');
test(addToArrayForm([1,1,1,1,1,1,1,1,1,1], 1111111111), [2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 'Test 36');
test(addToArrayForm([1,9,9,9,9,9,9,9,9,9], 1), [2, 0, 0, 0, 0, 0, 0, 0, 0, 0], 'Test 37');
test(addToArrayForm([9,8,7,6,5,4,3,2,1,0,9,8,7,6,5,4,3,2,1,0], 1234567890123456789), [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9], 'Test 38');
test(addToArrayForm([9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9], 1), [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 'Test 39');
test(addToArrayForm([1,0,1,0,1,0,1,0,1,0], 9090909090), [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0], 'Test 40');
test(addToArrayForm([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 50000000000000000000), [1, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 'Test 41');
test(addToArrayForm([1,0,0,0,0,0,0,0,0,0], 5), [1, 0, 0, 0, 0, 0, 0, 0, 0, 5], 'Test 42');
test(addToArrayForm([0,0,0,0,0,0,0,0,0,1], 999999999), [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], 'Test 43');
test(addToArrayForm([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 5), [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 0], 'Test 44');
test(addToArrayForm([1,1,1,1,1,1,1,1,1,1], 9999999999), [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0], 'Test 45');
test(addToArrayForm([1,3,5,7,9,1,3,5,7,9], 9753197531), [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0], 'Test 46');
test(addToArrayForm([9,9,9,9,9], 9999), [1, 0, 9, 9, 9, 8], 'Test 47');
test(addToArrayForm([5,6,7,8,9,0,1,2,3,4], 5432109876), [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0], 'Test 48');
test(addToArrayForm([9,8,7,6,5,4,3,2,1], 987654321), [1, 9, 7, 5, 3, 0, 8, 6, 4, 2], 'Test 49');
test(addToArrayForm([5,0,5,0,5,0,5], 5050505), [1, 0, 1, 0, 1, 0, 1, 0], 'Test 50');
test(addToArrayForm([5], 5), [1, 0], 'Test 51');
test(addToArrayForm([5,5,5,5,5,5,5,5,5,5], 4444444444), [9, 9, 9, 9, 9, 9, 9, 9, 9, 9], 'Test 52');
test(addToArrayForm([0,0,0,0,0,0,0,0,0,0], 1), [0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 'Test 53');
test(addToArrayForm([1,0,0,0,0,0,0,0,0,0], 10000000000), [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], 'Test 54');
test(addToArrayForm([9,9,9,9,9,9,9,9,9,9], 9999999999), [1, 9, 9, 9, 9, 9, 9, 9, 9, 9, 8], 'Test 55');
test(addToArrayForm([5,6,7,8,9], 43210), [9, 9, 9, 9, 9], 'Test 56');
test(addToArrayForm([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 99999999999999999999999999999999999999999999999), [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9], 'Test 57');
test(addToArrayForm([8,6,4,2,0,8,6,4,2,0], 123456789), [8, 7, 6, 5, 5, 4, 3, 2, 0, 9], 'Test 58');
test(addToArrayForm([1,2,3,4,5,6,7,8,9,0], 9876543210), [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0], 'Test 59');
test(addToArrayForm([9,9,9,9,9,9,9,9], 1), [1, 0, 0, 0, 0, 0, 0, 0, 0], 'Test 60');
test(addToArrayForm([1,0,0,0,0,0,0,0,0,0], 1), [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], 'Test 61');
test(addToArrayForm([0], 1000000000), [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], 'Test 62');
test(addToArrayForm([1,1,1,1,1,1,1,1,1,1], 8888888888), [9, 9, 9, 9, 9, 9, 9, 9, 9, 9], 'Test 63');
test(addToArrayForm([9,9,9,9,9,9,9,9,9,9], 2), [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 'Test 64');
test(addToArrayForm([9,9,9,9,9], 99999), [1, 9, 9, 9, 9, 8], 'Test 65');
test(addToArrayForm([9], 9999), [1, 0, 0, 0, 8], 'Test 66');
test(addToArrayForm([1,0,0,0,0,0,0,0,0,0], 999999999), [1, 9, 9, 9, 9, 9, 9, 9, 9, 9], 'Test 67');
test(addToArrayForm([1,2,3,4,5,6,7,8,9,0], 123456789), [1, 3, 5, 8, 0, 2, 4, 6, 7, 9], 'Test 68');
test(addToArrayForm([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 99999999999999999999), [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0], 'Test 69');
test(addToArrayForm([9,0,9,0,9,0,9,0,9,0], 123456789), [9, 2, 1, 4, 3, 6, 5, 8, 7, 9], 'Test 70');
test(addToArrayForm([0,0,0,0], 123456789), [1, 2, 3, 4, 5, 6, 7, 8, 9], 'Test 71');
test(addToArrayForm([9,8,7,6,5,4,3,2,1,0], 10987654321), [2, 0, 8, 6, 4, 1, 9, 7, 5, 3, 1], 'Test 72');
test(addToArrayForm([9,0,9,0,9,0,9], 99999999), [1, 0, 9, 0, 9, 0, 9, 0, 8], 'Test 73');
test(addToArrayForm([9,8,7,6,5,4,3,2,1], 123456789), [1, 1, 1, 1, 1, 1, 1, 1, 1, 0], 'Test 74');
test(addToArrayForm([0,0,0,0], 9999), [9, 9, 9, 9], 'Test 75');

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
