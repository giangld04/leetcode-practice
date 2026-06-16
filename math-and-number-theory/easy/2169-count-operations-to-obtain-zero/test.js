// Test: 2169. Count Operations To Obtain Zero
// 78 test cases from LeetCodeDataset
// Run: node test.js

const { countOperations } = require("./solution");

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

console.log("\n2169. Count Operations To Obtain Zero\n");

test(countOperations(0, 5), 0, 'Test 1');
test(countOperations(100, 1), 100, 'Test 2');
test(countOperations(123, 456), 12, 'Test 3');
test(countOperations(8, 12), 3, 'Test 4');
test(countOperations(1, 1), 1, 'Test 5');
test(countOperations(100000, 100000), 1, 'Test 6');
test(countOperations(100000, 1), 100000, 'Test 7');
test(countOperations(100, 50), 2, 'Test 8');
test(countOperations(5, 0), 0, 'Test 9');
test(countOperations(2, 3), 3, 'Test 10');
test(countOperations(10, 10), 1, 'Test 11');
test(countOperations(7, 3), 5, 'Test 12');
test(countOperations(81, 27), 3, 'Test 13');
test(countOperations(99999, 1), 99999, 'Test 14');
test(countOperations(333, 111), 3, 'Test 15');
test(countOperations(10000, 9999), 10000, 'Test 16');
test(countOperations(2020, 1870), 22, 'Test 17');
test(countOperations(60, 20), 3, 'Test 18');
test(countOperations(101, 100), 101, 'Test 19');
test(countOperations(42, 29), 10, 'Test 20');
test(countOperations(100000, 0), 0, 'Test 21');
test(countOperations(45678, 45678), 1, 'Test 22');
test(countOperations(88888, 22222), 4, 'Test 23');
test(countOperations(618, 359), 15, 'Test 24');
test(countOperations(100000, 99999), 100000, 'Test 25');
test(countOperations(42, 7), 6, 'Test 26');
test(countOperations(98765, 43210), 1241, 'Test 27');
test(countOperations(2, 34567), 17285, 'Test 28');
test(countOperations(1, 99999), 99999, 'Test 29');
test(countOperations(1000, 333), 336, 'Test 30');
test(countOperations(88888, 11111), 8, 'Test 31');
test(countOperations(9, 1), 9, 'Test 32');
test(countOperations(1000, 1), 1000, 'Test 33');
test(countOperations(55555, 22222), 4, 'Test 34');
test(countOperations(87, 3), 29, 'Test 35');
test(countOperations(15, 10), 3, 'Test 36');
test(countOperations(60000, 30000), 2, 'Test 37');
test(countOperations(22222, 11111), 2, 'Test 38');
test(countOperations(65536, 1), 65536, 'Test 39');
test(countOperations(65432, 12345), 80, 'Test 40');
test(countOperations(20, 30), 3, 'Test 41');
test(countOperations(50000, 25000), 2, 'Test 42');
test(countOperations(13579, 24680), 39, 'Test 43');
test(countOperations(777, 111), 7, 'Test 44');
test(countOperations(88888, 44444), 2, 'Test 45');
test(countOperations(12345, 54321), 177, 'Test 46');
test(countOperations(5000, 7500), 3, 'Test 47');
test(countOperations(25, 5), 5, 'Test 48');
test(countOperations(23456, 65432), 44, 'Test 49');
test(countOperations(45678, 87654), 45, 'Test 50');
test(countOperations(12345, 67890), 418, 'Test 51');
test(countOperations(42, 30), 5, 'Test 52');
test(countOperations(789, 987), 70, 'Test 53');
test(countOperations(99999, 99999), 1, 'Test 54');
test(countOperations(456, 123), 12, 'Test 55');
test(countOperations(0, 0), 0, 'Test 56');
test(countOperations(55, 20), 6, 'Test 57');
test(countOperations(33333, 22222), 3, 'Test 58');
test(countOperations(54321, 12345), 177, 'Test 59');
test(countOperations(1, 100000), 100000, 'Test 60');
test(countOperations(32768, 16384), 2, 'Test 61');
test(countOperations(1000, 100), 10, 'Test 62');
test(countOperations(2, 8), 4, 'Test 63');
test(countOperations(101010, 10101), 10, 'Test 64');
test(countOperations(75, 25), 3, 'Test 65');
test(countOperations(83456, 37821), 38, 'Test 66');
test(countOperations(23456, 12345), 262, 'Test 67');
test(countOperations(123, 321), 11, 'Test 68');
test(countOperations(8, 3), 5, 'Test 69');
test(countOperations(50, 25), 2, 'Test 70');
test(countOperations(13, 13), 1, 'Test 71');
test(countOperations(12345, 1), 12345, 'Test 72');
test(countOperations(55555, 55555), 1, 'Test 73');
test(countOperations(3, 8), 5, 'Test 74');
test(countOperations(30000, 15000), 2, 'Test 75');
test(countOperations(999, 999), 1, 'Test 76');
test(countOperations(56789, 12345), 260, 'Test 77');
test(countOperations(25, 15), 4, 'Test 78');

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
