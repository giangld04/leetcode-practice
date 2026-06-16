// Test: 600. Non Negative Integers Without Consecutive Ones
// 26 test cases from LeetCodeDataset
// Run: node test.js

const { findIntegers } = require("./solution");

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

console.log("\n600. Non Negative Integers Without Consecutive Ones\n");

test(findIntegers(100), 34, 'Test 1');
test(findIntegers(15), 8, 'Test 2');
test(findIntegers(1000000), 17711, 'Test 3');
test(findIntegers(32), 14, 'Test 4');
test(findIntegers(2), 3, 'Test 5');
test(findIntegers(1), 2, 'Test 6');
test(findIntegers(1000000000), 2178309, 'Test 7');
test(findIntegers(1000), 144, 'Test 8');
test(findIntegers(10), 8, 'Test 9');
test(findIntegers(5), 5, 'Test 10');
test(findIntegers(987654321), 2178309, 'Test 11');
test(findIntegers(888888888), 2178309, 'Test 12');
test(findIntegers(333333333), 1149851, 'Test 13');
test(findIntegers(777777777), 2178309, 'Test 14');
test(findIntegers(999999999), 2178309, 'Test 15');
test(findIntegers(110011001), 514229, 'Test 16');
test(findIntegers(314159265), 1149851, 'Test 17');
test(findIntegers(500000000), 1346269, 'Test 18');
test(findIntegers(2147483647), 3524578, 'Test 19');
test(findIntegers(123456789), 514229, 'Test 20');
test(findIntegers(555555555), 1496319, 'Test 21');
test(findIntegers(101010101), 514229, 'Test 22');
test(findIntegers(1000000001), 2178309, 'Test 23');
test(findIntegers(100000000), 514229, 'Test 24');
test(findIntegers(111111111), 514229, 'Test 25');
test(findIntegers(800000000), 2178309, 'Test 26');

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
