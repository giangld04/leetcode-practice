// Test: 60. Permutation Sequence
// 58 test cases from LeetCodeDataset
// Run: node test.js

const { getPermutation } = require("./solution");

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

console.log("\n60. Permutation Sequence\n");

test(getPermutation(3, 1), 123, 'Test 1');
test(getPermutation(8, 40320), 87654321, 'Test 2');
test(getPermutation(4, 9), 2314, 'Test 3');
test(getPermutation(9, 362880), 987654321, 'Test 4');
test(getPermutation(5, 10), 13452, 'Test 5');
test(getPermutation(3, 3), 213, 'Test 6');
test(getPermutation(2, 1), 12, 'Test 7');
test(getPermutation(2, 2), 21, 'Test 8');
test(getPermutation(6, 720), 654321, 'Test 9');
test(getPermutation(7, 5040), 7654321, 'Test 10');
test(getPermutation(5, 1), 12345, 'Test 11');
test(getPermutation(5, 120), 54321, 'Test 12');
test(getPermutation(9, 362879), 987654312, 'Test 13');
test(getPermutation(5, 60), 32541, 'Test 14');
test(getPermutation(8, 25921), 62134578, 'Test 15');
test(getPermutation(4, 11), 2413, 'Test 16');
test(getPermutation(9, 181440), 549876321, 'Test 17');
test(getPermutation(6, 399), 425316, 'Test 18');
test(getPermutation(7, 1), 1234567, 'Test 19');
test(getPermutation(8, 30240), 68754321, 'Test 20');
test(getPermutation(6, 359), 365412, 'Test 21');
test(getPermutation(5, 119), 54312, 'Test 22');
test(getPermutation(4, 19), 4123, 'Test 23');
test(getPermutation(6, 719), 654312, 'Test 24');
test(getPermutation(8, 1), 12345678, 'Test 25');
test(getPermutation(8, 20161), 51234678, 'Test 26');
test(getPermutation(9, 123456), 416589732, 'Test 27');
test(getPermutation(8, 40321), 1234567, 'Test 28');
test(getPermutation(8, 20160), 48765321, 'Test 29');
test(getPermutation(6, 100), 162453, 'Test 30');
test(getPermutation(6, 360), 365421, 'Test 31');
test(getPermutation(4, 15), 3214, 'Test 32');
test(getPermutation(9, 270000), 764985321, 'Test 33');
test(getPermutation(9, 100000), 358926471, 'Test 34');
test(getPermutation(7, 2521), 4512367, 'Test 35');
test(getPermutation(7, 3500), 5716243, 'Test 36');
test(getPermutation(9, 50000), 239574186, 'Test 37');
test(getPermutation(9, 326592), 917548632, 'Test 38');
test(getPermutation(7, 5041), 123456, 'Test 39');
test(getPermutation(9, 274567), 784315269, 'Test 40');
test(getPermutation(6, 391), 423156, 'Test 41');
test(getPermutation(6, 500), 516243, 'Test 42');
test(getPermutation(6, 1), 123456, 'Test 43');
test(getPermutation(8, 25000), 58624371, 'Test 44');
test(getPermutation(8, 12345), 35184627, 'Test 45');
test(getPermutation(9, 181441), 561234789, 'Test 46');
test(getPermutation(4, 24), 4321, 'Test 47');
test(getPermutation(7, 5000), 7642153, 'Test 48');
test(getPermutation(7, 1000), 2436571, 'Test 49');
test(getPermutation(5, 24), 15432, 'Test 50');
test(getPermutation(7, 2520), 4376521, 'Test 51');
test(getPermutation(4, 4), 1342, 'Test 52');
test(getPermutation(4, 10), 2341, 'Test 53');
test(getPermutation(5, 100), 51342, 'Test 54');
test(getPermutation(9, 98765), 357214968, 'Test 55');
test(getPermutation(7, 5039), 7654312, 'Test 56');
test(getPermutation(6, 397), 425136, 'Test 57');
test(getPermutation(6, 361), 412356, 'Test 58');

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
