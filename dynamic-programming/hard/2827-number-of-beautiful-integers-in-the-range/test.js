// Test: 2827. Number Of Beautiful Integers In The Range
// 99 test cases from LeetCodeDataset
// Run: node test.js

const { numberOfBeautifulIntegers } = require("./solution");

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

console.log("\n2827. Number Of Beautiful Integers In The Range\n");

test(numberOfBeautifulIntegers(100, 200, 4), 0, 'Test 1');
test(numberOfBeautifulIntegers(100, 200, 5), 0, 'Test 2');
test(numberOfBeautifulIntegers(10, 20, 3), 2, 'Test 3');
test(numberOfBeautifulIntegers(1, 10, 1), 1, 'Test 4');
test(numberOfBeautifulIntegers(100, 200, 7), 0, 'Test 5');
test(numberOfBeautifulIntegers(123, 456, 7), 0, 'Test 6');
test(numberOfBeautifulIntegers(1000, 10000, 7), 483, 'Test 7');
test(numberOfBeautifulIntegers(123, 456, 5), 0, 'Test 8');
test(numberOfBeautifulIntegers(5, 5, 2), 0, 'Test 9');
test(numberOfBeautifulIntegers(1000, 10000, 11), 460, 'Test 10');
test(numberOfBeautifulIntegers(999999, 999999, 1), 0, 'Test 11');
test(numberOfBeautifulIntegers(123456, 654321, 15), 11026, 'Test 12');
test(numberOfBeautifulIntegers(1000, 9999, 11), 460, 'Test 13');
test(numberOfBeautifulIntegers(100000, 999999, 19), 14801, 'Test 14');
test(numberOfBeautifulIntegers(9876543, 12345678, 16), 44999, 'Test 15');
test(numberOfBeautifulIntegers(111111, 222222, 12), 3183, 'Test 16');
test(numberOfBeautifulIntegers(99999, 100001, 1), 0, 'Test 17');
test(numberOfBeautifulIntegers(1000000, 8000000, 7), 0, 'Test 18');
test(numberOfBeautifulIntegers(100000, 500000, 19), 6575, 'Test 19');
test(numberOfBeautifulIntegers(1234567, 7654321, 18), 0, 'Test 20');
test(numberOfBeautifulIntegers(345678, 876543, 20), 6510, 'Test 21');
test(numberOfBeautifulIntegers(5000, 15000, 13), 147, 'Test 22');
test(numberOfBeautifulIntegers(100000, 1000000, 17), 16544, 'Test 23');
test(numberOfBeautifulIntegers(1234, 5678, 9), 251, 'Test 24');
test(numberOfBeautifulIntegers(10000000, 20000000, 9), 306040, 'Test 25');
test(numberOfBeautifulIntegers(5000, 50000, 3), 627, 'Test 26');
test(numberOfBeautifulIntegers(250000, 350000, 5), 6500, 'Test 27');
test(numberOfBeautifulIntegers(1000000, 10000000, 19), 0, 'Test 28');
test(numberOfBeautifulIntegers(50000000, 60000000, 20), 156250, 'Test 29');
test(numberOfBeautifulIntegers(99999, 100000, 13), 0, 'Test 30');
test(numberOfBeautifulIntegers(111111111, 222222222, 7), 0, 'Test 31');
test(numberOfBeautifulIntegers(1000000, 2000000, 19), 0, 'Test 32');
test(numberOfBeautifulIntegers(777777, 888888, 18), 1644, 'Test 33');
test(numberOfBeautifulIntegers(1000, 10000, 12), 276, 'Test 34');
test(numberOfBeautifulIntegers(987654321, 987654321, 11), 0, 'Test 35');
test(numberOfBeautifulIntegers(1234, 5678, 17), 101, 'Test 36');
test(numberOfBeautifulIntegers(100000000, 999999999, 3), 0, 'Test 37');
test(numberOfBeautifulIntegers(123456, 789012, 17), 12253, 'Test 38');
test(numberOfBeautifulIntegers(1111111, 2222222, 14), 0, 'Test 39');
test(numberOfBeautifulIntegers(10000, 99999, 17), 0, 'Test 40');
test(numberOfBeautifulIntegers(123456789, 987654321, 9), 0, 'Test 41');
test(numberOfBeautifulIntegers(1000, 10000, 13), 263, 'Test 42');
test(numberOfBeautifulIntegers(12345, 67890, 17), 0, 'Test 43');
test(numberOfBeautifulIntegers(500000000, 600000000, 13), 0, 'Test 44');
test(numberOfBeautifulIntegers(50000, 60000, 15), 0, 'Test 45');
test(numberOfBeautifulIntegers(100000000, 999999999, 17), 0, 'Test 46');
test(numberOfBeautifulIntegers(500, 2000, 17), 21, 'Test 47');
test(numberOfBeautifulIntegers(11111, 22222, 14), 0, 'Test 48');
test(numberOfBeautifulIntegers(123456, 789012, 15), 13887, 'Test 49');
test(numberOfBeautifulIntegers(2000, 3000, 20), 0, 'Test 50');
test(numberOfBeautifulIntegers(3333333, 4444444, 16), 0, 'Test 51');
test(numberOfBeautifulIntegers(987654321, 987654321, 19), 0, 'Test 52');
test(numberOfBeautifulIntegers(10000, 100000, 13), 0, 'Test 53');
test(numberOfBeautifulIntegers(123456, 654321, 3), 55100, 'Test 54');
test(numberOfBeautifulIntegers(555555, 666666, 16), 1899, 'Test 55');
test(numberOfBeautifulIntegers(500000, 600000, 20), 1875, 'Test 56');
test(numberOfBeautifulIntegers(111111, 222222, 13), 2615, 'Test 57');
test(numberOfBeautifulIntegers(123456, 654321, 17), 9719, 'Test 58');
test(numberOfBeautifulIntegers(234567, 765432, 25), 6663, 'Test 59');
test(numberOfBeautifulIntegers(99990, 100000, 2), 0, 'Test 60');
test(numberOfBeautifulIntegers(12345678, 87654321, 16), 1236425, 'Test 61');
test(numberOfBeautifulIntegers(987654, 9876543, 3), 1120, 'Test 62');
test(numberOfBeautifulIntegers(1000, 9999, 12), 276, 'Test 63');
test(numberOfBeautifulIntegers(123456789, 987654321, 5), 0, 'Test 64');
test(numberOfBeautifulIntegers(100000, 1000000, 19), 14801, 'Test 65');
test(numberOfBeautifulIntegers(123456, 654321, 19), 8693, 'Test 66');
test(numberOfBeautifulIntegers(500000, 550000, 20), 875, 'Test 67');
test(numberOfBeautifulIntegers(1234567, 8765432, 5), 0, 'Test 68');
test(numberOfBeautifulIntegers(10000000, 20000000, 5), 546875, 'Test 69');
test(numberOfBeautifulIntegers(11111111, 22222222, 7), 426428, 'Test 70');
test(numberOfBeautifulIntegers(55555555, 88888888, 9), 1034831, 'Test 71');
test(numberOfBeautifulIntegers(100, 1000, 3), 0, 'Test 72');
test(numberOfBeautifulIntegers(999, 1000000, 13), 21897, 'Test 73');
test(numberOfBeautifulIntegers(100000, 999999, 3), 93760, 'Test 74');
test(numberOfBeautifulIntegers(100, 1000, 9), 0, 'Test 75');
test(numberOfBeautifulIntegers(100, 999, 9), 0, 'Test 76');
test(numberOfBeautifulIntegers(123456789, 987654321, 18), 0, 'Test 77');
test(numberOfBeautifulIntegers(200000, 300000, 5), 6250, 'Test 78');
test(numberOfBeautifulIntegers(100, 1000, 5), 0, 'Test 79');
test(numberOfBeautifulIntegers(111111, 222222, 19), 1785, 'Test 80');
test(numberOfBeautifulIntegers(500000, 600000, 19), 1643, 'Test 81');
test(numberOfBeautifulIntegers(10000000, 20000000, 18), 174880, 'Test 82');
test(numberOfBeautifulIntegers(100000, 999999, 17), 16544, 'Test 83');
test(numberOfBeautifulIntegers(111111, 222222, 21), 1614, 'Test 84');
test(numberOfBeautifulIntegers(1000000, 10000000, 2), 0, 'Test 85');
test(numberOfBeautifulIntegers(333333, 444444, 14), 2525, 'Test 86');
test(numberOfBeautifulIntegers(1111111, 8888888, 20), 0, 'Test 87');
test(numberOfBeautifulIntegers(10000, 100000, 11), 0, 'Test 88');
test(numberOfBeautifulIntegers(100, 1000, 11), 0, 'Test 89');
test(numberOfBeautifulIntegers(1234, 8765, 11), 386, 'Test 90');
test(numberOfBeautifulIntegers(750000, 850000, 7), 4287, 'Test 91');
test(numberOfBeautifulIntegers(1000000, 10000000, 15), 0, 'Test 92');
test(numberOfBeautifulIntegers(111111, 222222, 18), 2196, 'Test 93');
test(numberOfBeautifulIntegers(234567, 765432, 18), 10488, 'Test 94');
test(numberOfBeautifulIntegers(11111, 99999, 13), 0, 'Test 95');
test(numberOfBeautifulIntegers(333333333, 666666666, 7), 0, 'Test 96');
test(numberOfBeautifulIntegers(1, 1000000000, 20), 1105750, 'Test 97');
test(numberOfBeautifulIntegers(1000000, 2000000, 15), 0, 'Test 98');
test(numberOfBeautifulIntegers(10000, 99999, 13), 0, 'Test 99');

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
