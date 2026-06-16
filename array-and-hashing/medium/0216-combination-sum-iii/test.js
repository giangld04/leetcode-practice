// Test: 216. Combination Sum Iii
// 62 test cases from LeetCodeDataset
// Run: node test.js

const { combinationSum3 } = require("./solution");

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

console.log("\n216. Combination Sum Iii\n");

test(combinationSum3(7, 28), [[1, 2, 3, 4, 5, 6, 7]], 'Test 1');
test(combinationSum3(5, 25), [[1, 2, 5, 8, 9], [1, 2, 6, 7, 9], [1, 3, 4, 8, 9], [1, 3, 5, 7, 9], [1, 3, 6, 7, 8], [1, 4, 5, 6, 9], [1, 4, 5, 7, 8], [2, 3, 4, 7, 9], [2, 3, 5, 6, 9], [2, 3, 5, 7, 8], [2, 4, 5, 6, 8], [3, 4, 5, 6, 7]], 'Test 2');
test(combinationSum3(5, 20), [[1, 2, 3, 5, 9], [1, 2, 3, 6, 8], [1, 2, 4, 5, 8], [1, 2, 4, 6, 7], [1, 3, 4, 5, 7], [2, 3, 4, 5, 6]], 'Test 3');
test(combinationSum3(7, 56), [], 'Test 4');
test(combinationSum3(4, 1), [], 'Test 5');
test(combinationSum3(2, 15), [[6, 9], [7, 8]], 'Test 6');
test(combinationSum3(9, 45), [[1, 2, 3, 4, 5, 6, 7, 8, 9]], 'Test 7');
test(combinationSum3(8, 84), [], 'Test 8');
test(combinationSum3(3, 18), [[1, 8, 9], [2, 7, 9], [3, 6, 9], [3, 7, 8], [4, 5, 9], [4, 6, 8], [5, 6, 7]], 'Test 9');
test(combinationSum3(3, 9), [[1, 2, 6], [1, 3, 5], [2, 3, 4]], 'Test 10');
test(combinationSum3(7, 63), [], 'Test 11');
test(combinationSum3(4, 28), [[4, 7, 8, 9], [5, 6, 8, 9]], 'Test 12');
test(combinationSum3(3, 7), [[1, 2, 4]], 'Test 13');
test(combinationSum3(3, 23), [[6, 8, 9]], 'Test 14');
test(combinationSum3(8, 36), [[1, 2, 3, 4, 5, 6, 7, 8]], 'Test 15');
test(combinationSum3(6, 45), [], 'Test 16');
test(combinationSum3(2, 18), [], 'Test 17');
test(combinationSum3(5, 15), [[1, 2, 3, 4, 5]], 'Test 18');
test(combinationSum3(8, 60), [], 'Test 19');
test(combinationSum3(2, 5), [[1, 4], [2, 3]], 'Test 20');
test(combinationSum3(9, 90), [], 'Test 21');
test(combinationSum3(4, 17), [[1, 2, 5, 9], [1, 2, 6, 8], [1, 3, 4, 9], [1, 3, 5, 8], [1, 3, 6, 7], [1, 4, 5, 7], [2, 3, 4, 8], [2, 3, 5, 7], [2, 4, 5, 6]], 'Test 22');
test(combinationSum3(8, 72), [], 'Test 23');
test(combinationSum3(3, 20), [[3, 8, 9], [4, 7, 9], [5, 6, 9], [5, 7, 8]], 'Test 24');
test(combinationSum3(7, 35), [[1, 2, 3, 5, 7, 8, 9], [1, 2, 4, 5, 6, 8, 9], [1, 3, 4, 5, 6, 7, 9], [2, 3, 4, 5, 6, 7, 8]], 'Test 25');
test(combinationSum3(5, 23), [[1, 2, 3, 8, 9], [1, 2, 4, 7, 9], [1, 2, 5, 6, 9], [1, 2, 5, 7, 8], [1, 3, 4, 6, 9], [1, 3, 4, 7, 8], [1, 3, 5, 6, 8], [1, 4, 5, 6, 7], [2, 3, 4, 5, 9], [2, 3, 4, 6, 8], [2, 3, 5, 6, 7]], 'Test 26');
test(combinationSum3(6, 25), [[1, 2, 3, 4, 6, 9], [1, 2, 3, 4, 7, 8], [1, 2, 3, 5, 6, 8], [1, 2, 4, 5, 6, 7]], 'Test 27');
test(combinationSum3(7, 21), [], 'Test 28');
test(combinationSum3(7, 40), [[1, 4, 5, 6, 7, 8, 9], [2, 3, 5, 6, 7, 8, 9]], 'Test 29');
test(combinationSum3(6, 30), [[1, 2, 3, 7, 8, 9], [1, 2, 4, 6, 8, 9], [1, 2, 5, 6, 7, 9], [1, 3, 4, 5, 8, 9], [1, 3, 4, 6, 7, 9], [1, 3, 5, 6, 7, 8], [2, 3, 4, 5, 7, 9], [2, 3, 4, 6, 7, 8]], 'Test 30');
test(combinationSum3(6, 35), [[1, 4, 6, 7, 8, 9], [2, 3, 6, 7, 8, 9], [2, 4, 5, 7, 8, 9], [3, 4, 5, 6, 8, 9]], 'Test 31');
test(combinationSum3(5, 33), [[3, 6, 7, 8, 9], [4, 5, 7, 8, 9]], 'Test 32');
test(combinationSum3(4, 14), [[1, 2, 3, 8], [1, 2, 4, 7], [1, 2, 5, 6], [1, 3, 4, 6], [2, 3, 4, 5]], 'Test 33');
test(combinationSum3(7, 29), [[1, 2, 3, 4, 5, 6, 8]], 'Test 34');
test(combinationSum3(6, 42), [], 'Test 35');
test(combinationSum3(5, 18), [[1, 2, 3, 4, 8], [1, 2, 3, 5, 7], [1, 2, 4, 5, 6]], 'Test 36');
test(combinationSum3(4, 22), [[1, 4, 8, 9], [1, 5, 7, 9], [1, 6, 7, 8], [2, 3, 8, 9], [2, 4, 7, 9], [2, 5, 6, 9], [2, 5, 7, 8], [3, 4, 6, 9], [3, 4, 7, 8], [3, 5, 6, 8], [4, 5, 6, 7]], 'Test 37');
test(combinationSum3(6, 24), [[1, 2, 3, 4, 5, 9], [1, 2, 3, 4, 6, 8], [1, 2, 3, 5, 6, 7]], 'Test 38');
test(combinationSum3(7, 42), [[3, 4, 5, 6, 7, 8, 9]], 'Test 39');
test(combinationSum3(4, 10), [[1, 2, 3, 4]], 'Test 40');
test(combinationSum3(5, 17), [[1, 2, 3, 4, 7], [1, 2, 3, 5, 6]], 'Test 41');
test(combinationSum3(3, 10), [[1, 2, 7], [1, 3, 6], [1, 4, 5], [2, 3, 5]], 'Test 42');
test(combinationSum3(3, 17), [[1, 7, 9], [2, 6, 9], [2, 7, 8], [3, 5, 9], [3, 6, 8], [4, 5, 8], [4, 6, 7]], 'Test 43');
test(combinationSum3(4, 20), [[1, 2, 8, 9], [1, 3, 7, 9], [1, 4, 6, 9], [1, 4, 7, 8], [1, 5, 6, 8], [2, 3, 6, 9], [2, 3, 7, 8], [2, 4, 5, 9], [2, 4, 6, 8], [2, 5, 6, 7], [3, 4, 5, 8], [3, 4, 6, 7]], 'Test 44');
test(combinationSum3(5, 30), [[1, 5, 7, 8, 9], [2, 4, 7, 8, 9], [2, 5, 6, 8, 9], [3, 4, 6, 8, 9], [3, 5, 6, 7, 9], [4, 5, 6, 7, 8]], 'Test 45');
test(combinationSum3(5, 10), [], 'Test 46');
test(combinationSum3(6, 39), [[4, 5, 6, 7, 8, 9]], 'Test 47');
test(combinationSum3(4, 30), [[6, 7, 8, 9]], 'Test 48');
test(combinationSum3(4, 15), [[1, 2, 3, 9], [1, 2, 4, 8], [1, 2, 5, 7], [1, 3, 4, 7], [1, 3, 5, 6], [2, 3, 4, 6]], 'Test 49');
test(combinationSum3(6, 40), [], 'Test 50');
test(combinationSum3(4, 23), [[1, 5, 8, 9], [1, 6, 7, 9], [2, 4, 8, 9], [2, 5, 7, 9], [2, 6, 7, 8], [3, 4, 7, 9], [3, 5, 6, 9], [3, 5, 7, 8], [4, 5, 6, 8]], 'Test 51');
test(combinationSum3(4, 25), [[1, 7, 8, 9], [2, 6, 8, 9], [3, 5, 8, 9], [3, 6, 7, 9], [4, 5, 7, 9], [4, 6, 7, 8]], 'Test 52');
test(combinationSum3(8, 81), [], 'Test 53');
test(combinationSum3(5, 35), [[5, 6, 7, 8, 9]], 'Test 54');
test(combinationSum3(2, 16), [[7, 9]], 'Test 55');
test(combinationSum3(6, 55), [], 'Test 56');
test(combinationSum3(8, 30), [], 'Test 57');
test(combinationSum3(6, 18), [], 'Test 58');
test(combinationSum3(3, 15), [[1, 5, 9], [1, 6, 8], [2, 4, 9], [2, 5, 8], [2, 6, 7], [3, 4, 8], [3, 5, 7], [4, 5, 6]], 'Test 59');
test(combinationSum3(4, 12), [[1, 2, 3, 6], [1, 2, 4, 5]], 'Test 60');
test(combinationSum3(7, 49), [], 'Test 61');
test(combinationSum3(7, 30), [[1, 2, 3, 4, 5, 6, 9], [1, 2, 3, 4, 5, 7, 8]], 'Test 62');

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
