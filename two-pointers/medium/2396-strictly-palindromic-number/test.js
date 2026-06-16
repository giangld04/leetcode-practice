// Test: 2396. Strictly Palindromic Number
// 57 test cases from LeetCodeDataset
// Run: node test.js

const { isStrictlyPalindromic } = require("./solution");

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

console.log("\n2396. Strictly Palindromic Number\n");

test(isStrictlyPalindromic(15), false, 'Test 1');
test(isStrictlyPalindromic(4), false, 'Test 2');
test(isStrictlyPalindromic(9), false, 'Test 3');
test(isStrictlyPalindromic(6), false, 'Test 4');
test(isStrictlyPalindromic(20), false, 'Test 5');
test(isStrictlyPalindromic(100), false, 'Test 6');
test(isStrictlyPalindromic(10), false, 'Test 7');
test(isStrictlyPalindromic(5), false, 'Test 8');
test(isStrictlyPalindromic(99999), false, 'Test 9');
test(isStrictlyPalindromic(4096), false, 'Test 10');
test(isStrictlyPalindromic(21), false, 'Test 11');
test(isStrictlyPalindromic(50000), false, 'Test 12');
test(isStrictlyPalindromic(1000), false, 'Test 13');
test(isStrictlyPalindromic(50), false, 'Test 14');
test(isStrictlyPalindromic(10001), false, 'Test 15');
test(isStrictlyPalindromic(300), false, 'Test 16');
test(isStrictlyPalindromic(30), false, 'Test 17');
test(isStrictlyPalindromic(99), false, 'Test 18');
test(isStrictlyPalindromic(16), false, 'Test 19');
test(isStrictlyPalindromic(33), false, 'Test 20');
test(isStrictlyPalindromic(10000), false, 'Test 21');
test(isStrictlyPalindromic(17), false, 'Test 22');
test(isStrictlyPalindromic(1001), false, 'Test 23');
test(isStrictlyPalindromic(23), false, 'Test 24');
test(isStrictlyPalindromic(42), false, 'Test 25');
test(isStrictlyPalindromic(360), false, 'Test 26');
test(isStrictlyPalindromic(1024), false, 'Test 27');
test(isStrictlyPalindromic(101), false, 'Test 28');
test(isStrictlyPalindromic(100000), false, 'Test 29');
test(isStrictlyPalindromic(2048), false, 'Test 30');
test(isStrictlyPalindromic(255), false, 'Test 31');
test(isStrictlyPalindromic(999), false, 'Test 32');
test(isStrictlyPalindromic(75), false, 'Test 33');
test(isStrictlyPalindromic(256), false, 'Test 34');
test(isStrictlyPalindromic(32), false, 'Test 35');
test(isStrictlyPalindromic(5000), false, 'Test 36');
test(isStrictlyPalindromic(18), false, 'Test 37');
test(isStrictlyPalindromic(123456), false, 'Test 38');
test(isStrictlyPalindromic(75000), false, 'Test 39');
test(isStrictlyPalindromic(9999), false, 'Test 40');
test(isStrictlyPalindromic(65535), false, 'Test 41');
test(isStrictlyPalindromic(88888), false, 'Test 42');
test(isStrictlyPalindromic(81), false, 'Test 43');
test(isStrictlyPalindromic(4321), false, 'Test 44');
test(isStrictlyPalindromic(150), false, 'Test 45');
test(isStrictlyPalindromic(200), false, 'Test 46');
test(isStrictlyPalindromic(400), false, 'Test 47');
test(isStrictlyPalindromic(31), false, 'Test 48');
test(isStrictlyPalindromic(1234), false, 'Test 49');
test(isStrictlyPalindromic(750), false, 'Test 50');
test(isStrictlyPalindromic(121), false, 'Test 51');
test(isStrictlyPalindromic(199), false, 'Test 52');
test(isStrictlyPalindromic(700), false, 'Test 53');
test(isStrictlyPalindromic(500), false, 'Test 54');
test(isStrictlyPalindromic(54321), false, 'Test 55');
test(isStrictlyPalindromic(25), false, 'Test 56');
test(isStrictlyPalindromic(25000), false, 'Test 57');

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
