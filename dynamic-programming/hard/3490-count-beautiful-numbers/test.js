// Test: 3490. Count Beautiful Numbers
// 95 test cases from LeetCodeDataset
// Run: node test.js

const { beautifulNumbers } = require("./solution");

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

console.log("\n3490. Count Beautiful Numbers\n");

test(beautifulNumbers(999, 999), 1, 'Test 1');
test(beautifulNumbers(1, 9), 9, 'Test 2');
test(beautifulNumbers(900, 1000), 35, 'Test 3');
test(beautifulNumbers(789, 890), 35, 'Test 4');
test(beautifulNumbers(500, 5000), 1800, 'Test 5');
test(beautifulNumbers(5, 50), 13, 'Test 6');
test(beautifulNumbers(100, 200), 32, 'Test 7');
test(beautifulNumbers(50, 100), 9, 'Test 8');
test(beautifulNumbers(10, 20), 2, 'Test 9');
test(beautifulNumbers(999, 1001), 3, 'Test 10');
test(beautifulNumbers(1, 999999999), 670349658, 'Test 11');
test(beautifulNumbers(990, 1000), 3, 'Test 12');
test(beautifulNumbers(100000000, 100000000), 1, 'Test 13');
test(beautifulNumbers(123, 456), 110, 'Test 14');
test(beautifulNumbers(1, 1), 1, 'Test 15');
test(beautifulNumbers(300, 500), 70, 'Test 16');
test(beautifulNumbers(99999, 100001), 2, 'Test 17');
test(beautifulNumbers(100, 150), 19, 'Test 18');
test(beautifulNumbers(1, 15), 10, 'Test 19');
test(beautifulNumbers(1000, 10000), 3676, 'Test 20');
test(beautifulNumbers(111, 222), 33, 'Test 21');
test(beautifulNumbers(1000, 1010), 11, 'Test 22');
test(beautifulNumbers(50, 55), 1, 'Test 23');
test(beautifulNumbers(100000, 200000), 52892, 'Test 24');
test(beautifulNumbers(100000, 150000), 29004, 'Test 25');
test(beautifulNumbers(999999, 1000001), 2, 'Test 26');
test(beautifulNumbers(123456, 654321), 288118, 'Test 27');
test(beautifulNumbers(1, 1000000), 534358, 'Test 28');
test(beautifulNumbers(333333, 444444), 59841, 'Test 29');
test(beautifulNumbers(90000000, 99999999), 6259058, 'Test 30');
test(beautifulNumbers(123456789, 2147483647), 1428531442, 'Test 31');
test(beautifulNumbers(7654321, 8765432), 646518, 'Test 32');
test(beautifulNumbers(1000000, 10000000), 5311175, 'Test 33');
test(beautifulNumbers(987654, 987664), 3, 'Test 34');
test(beautifulNumbers(10000000, 10001000), 1001, 'Test 35');
test(beautifulNumbers(10000000, 20000000), 6285218, 'Test 36');
test(beautifulNumbers(999999990, 999999999), 2, 'Test 37');
test(beautifulNumbers(1000000000 - 100000, 1000000000), Error: Solution.beautifulNumbers[] missing 1 required positional argument: 'l', 'Test 38');
test(beautifulNumbers(999999, 999999), 0, 'Test 39');
test(beautifulNumbers(888888, 999999), 57963, 'Test 40');
test(beautifulNumbers(99999999, 100000000), 1, 'Test 41');
test(beautifulNumbers(5000, 75000), 33900, 'Test 42');
test(beautifulNumbers(1, 1000000000), 670349659, 'Test 43');
test(beautifulNumbers(777777, 888888), 58602, 'Test 44');
test(beautifulNumbers(1, 1000000000 - 1), Error: Solution.beautifulNumbers[] missing 1 required positional argument: 'r', 'Test 45');
test(beautifulNumbers(987654321, 1000000000), 7554239, 'Test 46');
test(beautifulNumbers(999999, 9999999), 5311174, 'Test 47');
test(beautifulNumbers(500000, 510000), 10001, 'Test 48');
test(beautifulNumbers(987654321, 987654321), 1, 'Test 49');
test(beautifulNumbers(123456789, 234567890), 73969442, 'Test 50');
test(beautifulNumbers(2000000, 2010000), 10001, 'Test 51');
test(beautifulNumbers(100000, 1000000), 486888, 'Test 52');
test(beautifulNumbers(10000000, 10000000), 1, 'Test 53');
test(beautifulNumbers(555555555, 555555555), 0, 'Test 54');
test(beautifulNumbers(1000000, 1001000), 1001, 'Test 55');
test(beautifulNumbers(500000, 999999), 270652, 'Test 56');
test(beautifulNumbers(100000000, 300000000), 134174863, 'Test 57');
test(beautifulNumbers(1000000, 3000000), 1175795, 'Test 58');
test(beautifulNumbers(456789, 456789123), 304015671, 'Test 59');
test(beautifulNumbers(123456, 123567), 46, 'Test 60');
test(beautifulNumbers(56789, 567890), 276722, 'Test 61');
test(beautifulNumbers(88888888, 99999999), 6902887, 'Test 62');
test(beautifulNumbers(50000000, 60000000), 6522427, 'Test 63');
test(beautifulNumbers(500000000, 501000000), 1000001, 'Test 64');
test(beautifulNumbers(1234567, 12345678), 6951395, 'Test 65');
test(beautifulNumbers(12345, 67890), 26696, 'Test 66');
test(beautifulNumbers(98765432, 98765432), 0, 'Test 67');
test(beautifulNumbers(8000000, 8100000), 100001, 'Test 68');
test(beautifulNumbers(456789, 987654), 286642, 'Test 69');
test(beautifulNumbers(1234567, 8765432), 4438756, 'Test 70');
test(beautifulNumbers(555555, 666666), 61137, 'Test 71');
test(beautifulNumbers(5000000, 6000000), 609303, 'Test 72');
test(beautifulNumbers(50000, 55000), 2738, 'Test 73');
test(beautifulNumbers(1000000, 1010000), 10001, 'Test 74');
test(beautifulNumbers(800000, 900000), 53367, 'Test 75');
test(beautifulNumbers(500000000, 550000000), 36195523, 'Test 76');
test(beautifulNumbers(500000, 550000), 30521, 'Test 77');
test(beautifulNumbers(10000000, 100000000), 57110376, 'Test 78');
test(beautifulNumbers(111111, 222222), 58091, 'Test 79');
test(beautifulNumbers(100000000, 111111111), 11111111, 'Test 80');
test(beautifulNumbers(800000, 801000), 1001, 'Test 81');
test(beautifulNumbers(100000000, 200000000), 66911398, 'Test 82');
test(beautifulNumbers(500000, 600000), 55997, 'Test 83');
test(beautifulNumbers(999900, 1000100), 124, 'Test 84');
test(beautifulNumbers(123456789, 123456789), 1, 'Test 85');
test(beautifulNumbers(100000, 999999), 486887, 'Test 86');
test(beautifulNumbers(111111111, 222222222), 73867777, 'Test 87');
test(beautifulNumbers(8000000, 8999999), 583871, 'Test 88');
test(beautifulNumbers(987654, 987654), 0, 'Test 89');
test(beautifulNumbers(999000, 1001000), 1335, 'Test 90');
test(beautifulNumbers(1000000000 - 100000, 1000000000 - 1), Error: Solution.beautifulNumbers[] missing 2 required positional arguments: 'l' and 'r', 'Test 91');
test(beautifulNumbers(123, 987654321), 662795385, 'Test 92');
test(beautifulNumbers(100000, 500000), 216236, 'Test 93');
test(beautifulNumbers(77777777, 88888888), 6956761, 'Test 94');
test(beautifulNumbers(5000000, 5010000), 10001, 'Test 95');

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
