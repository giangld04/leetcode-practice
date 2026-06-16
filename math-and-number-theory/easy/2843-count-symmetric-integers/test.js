// Test: 2843. Count Symmetric Integers
// 72 test cases from LeetCodeDataset
// Run: node test.js

const { countSymmetricIntegers } = require("./solution");

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

console.log("\n2843. Count Symmetric Integers\n");

test(countSymmetricIntegers(10, 20), 1, 'Test 1');
test(countSymmetricIntegers(1, 9999), 624, 'Test 2');
test(countSymmetricIntegers(500, 1500), 20, 'Test 3');
test(countSymmetricIntegers(1000, 1000), 0, 'Test 4');
test(countSymmetricIntegers(500, 550), 0, 'Test 5');
test(countSymmetricIntegers(1, 100), 9, 'Test 6');
test(countSymmetricIntegers(1, 10000), 624, 'Test 7');
test(countSymmetricIntegers(1000, 10000), 615, 'Test 8');
test(countSymmetricIntegers(1200, 1230), 4, 'Test 9');
test(countSymmetricIntegers(10, 1000), 9, 'Test 10');
test(countSymmetricIntegers(9999, 10000), 1, 'Test 11');
test(countSymmetricIntegers(2500, 2600), 8, 'Test 12');
test(countSymmetricIntegers(1000, 9999), 615, 'Test 13');
test(countSymmetricIntegers(2500, 3500), 74, 'Test 14');
test(countSymmetricIntegers(7777, 8888), 70, 'Test 15');
test(countSymmetricIntegers(7000, 7100), 8, 'Test 16');
test(countSymmetricIntegers(1001, 9990), 614, 'Test 17');
test(countSymmetricIntegers(1234, 4321), 216, 'Test 18');
test(countSymmetricIntegers(1, 10), 0, 'Test 19');
test(countSymmetricIntegers(2000, 2999), 69, 'Test 20');
test(countSymmetricIntegers(5000, 5500), 40, 'Test 21');
test(countSymmetricIntegers(1234, 5678), 326, 'Test 22');
test(countSymmetricIntegers(7500, 7600), 7, 'Test 23');
test(countSymmetricIntegers(8000, 8500), 43, 'Test 24');
test(countSymmetricIntegers(3000, 3100), 4, 'Test 25');
test(countSymmetricIntegers(3000, 3999), 73, 'Test 26');
test(countSymmetricIntegers(999, 9999), 615, 'Test 27');
test(countSymmetricIntegers(5000, 5050), 6, 'Test 28');
test(countSymmetricIntegers(1000, 2000), 63, 'Test 29');
test(countSymmetricIntegers(1111, 2222), 70, 'Test 30');
test(countSymmetricIntegers(10001, 20001), 0, 'Test 31');
test(countSymmetricIntegers(8000, 8100), 9, 'Test 32');
test(countSymmetricIntegers(5000, 6000), 75, 'Test 33');
test(countSymmetricIntegers(2000, 3000), 69, 'Test 34');
test(countSymmetricIntegers(1000, 1010), 2, 'Test 35');
test(countSymmetricIntegers(9000, 9999), 55, 'Test 36');
test(countSymmetricIntegers(3000, 3300), 15, 'Test 37');
test(countSymmetricIntegers(6000, 6100), 7, 'Test 38');
test(countSymmetricIntegers(8888, 8888), 1, 'Test 39');
test(countSymmetricIntegers(9876, 9885), 0, 'Test 40');
test(countSymmetricIntegers(999, 1001), 1, 'Test 41');
test(countSymmetricIntegers(1111, 9999), 612, 'Test 42');
test(countSymmetricIntegers(12345, 67890), 0, 'Test 43');
test(countSymmetricIntegers(9000, 9100), 10, 'Test 44');
test(countSymmetricIntegers(9900, 10100), 1, 'Test 45');
test(countSymmetricIntegers(1000, 1100), 2, 'Test 46');
test(countSymmetricIntegers(8888, 9999), 59, 'Test 47');
test(countSymmetricIntegers(1001, 1020), 2, 'Test 48');
test(countSymmetricIntegers(100100, 100200), 1, 'Test 49');
test(countSymmetricIntegers(3000, 7000), 296, 'Test 50');
test(countSymmetricIntegers(1234, 8765), 542, 'Test 51');
test(countSymmetricIntegers(999, 10001), 615, 'Test 52');
test(countSymmetricIntegers(9876, 9876), 0, 'Test 53');
test(countSymmetricIntegers(100, 10000), 615, 'Test 54');
test(countSymmetricIntegers(1100, 1400), 12, 'Test 55');
test(countSymmetricIntegers(1001, 1010), 2, 'Test 56');
test(countSymmetricIntegers(5000, 5100), 6, 'Test 57');
test(countSymmetricIntegers(7800, 7900), 4, 'Test 58');
test(countSymmetricIntegers(4999, 5001), 0, 'Test 59');
test(countSymmetricIntegers(1001, 9999), 615, 'Test 60');
test(countSymmetricIntegers(1001, 1099), 2, 'Test 61');
test(countSymmetricIntegers(8000, 8999), 63, 'Test 62');
test(countSymmetricIntegers(5000, 9999), 335, 'Test 63');
test(countSymmetricIntegers(9000, 10000), 55, 'Test 64');
test(countSymmetricIntegers(5000, 9000), 280, 'Test 65');
test(countSymmetricIntegers(5678, 8765), 216, 'Test 66');
test(countSymmetricIntegers(2000, 8000), 434, 'Test 67');
test(countSymmetricIntegers(10000, 10000), 0, 'Test 68');
test(countSymmetricIntegers(10010, 10020), 0, 'Test 69');
test(countSymmetricIntegers(5000, 50000), 335, 'Test 70');
test(countSymmetricIntegers(9900, 10000), 1, 'Test 71');
test(countSymmetricIntegers(4500, 4600), 10, 'Test 72');

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
