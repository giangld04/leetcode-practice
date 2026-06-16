// Test: 3307. Find The K Th Character In String Game Ii
// 102 test cases from LeetCodeDataset
// Run: node test.js

const { kthCharacter } = require("./solution");

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

console.log("\n3307. Find The K Th Character In String Game Ii\n");

test(kthCharacter(20, [1,0,1,0,1]), c, 'Test 1');
test(kthCharacter(987654321, [1,0,1,0,1,0,1,0,1]), Error: list index out of range, 'Test 2');
test(kthCharacter(987654321, [1,0,1,0,1,0,1,0,1,0]), Error: list index out of range, 'Test 3');
test(kthCharacter(15, [1,0,1,0]), b, 'Test 4');
test(kthCharacter(100, [0,0,1,1,0]), Error: list index out of range, 'Test 5');
test(kthCharacter(10, [0,1,0,1]), b, 'Test 6');
test(kthCharacter(3, [0,1]), b, 'Test 7');
test(kthCharacter(100000000000000, [0,0,0,0,0,0,0,0,0,0]), Error: list index out of range, 'Test 8');
test(kthCharacter(3, [1,0]), a, 'Test 9');
test(kthCharacter(123456789, [0,1,0,1,0,1,0,1]), Error: list index out of range, 'Test 10');
test(kthCharacter(5, [0,0,0]), a, 'Test 11');
test(kthCharacter(2, [0,1]), a, 'Test 12');
test(kthCharacter(2, [1,1]), b, 'Test 13');
test(kthCharacter(100000000000000, [0,1,0,1,0]), Error: list index out of range, 'Test 14');
test(kthCharacter(1, []), a, 'Test 15');
test(kthCharacter(50, [1,0,0,1,0]), Error: list index out of range, 'Test 16');
test(kthCharacter(100, [1,0,1,0,1]), Error: list index out of range, 'Test 17');
test(kthCharacter(100, [0,0,1,0,1]), Error: list index out of range, 'Test 18');
test(kthCharacter(50, [1,1,1,1,1]), Error: list index out of range, 'Test 19');
test(kthCharacter(15, [0,1,1,0]), c, 'Test 20');
test(kthCharacter(100, [0,1,0,1,0,1,0,1,0,1]), c, 'Test 21');
test(kthCharacter(2, [0]), a, 'Test 22');
test(kthCharacter(123456789, [0,0,0,0,0,0,0,0,0,0]), Error: list index out of range, 'Test 23');
test(kthCharacter(1, [1]), a, 'Test 24');
test(kthCharacter(2, [1]), b, 'Test 25');
test(kthCharacter(100, [0,0,1,0,1,1]), Error: list index out of range, 'Test 26');
test(kthCharacter(999999999, [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), Error: list index out of range, 'Test 27');
test(kthCharacter(987654321, [0,1,0,1,0,1,0,1,0,1]), Error: list index out of range, 'Test 28');
test(kthCharacter(123456789012345, [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), Error: list index out of range, 'Test 29');
test(kthCharacter(100000000000000, [1, 0, 1, 0, 1, 0, 1, 0, 1, 0]), Error: list index out of range, 'Test 30');
test(kthCharacter(50, [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), c, 'Test 31');
test(kthCharacter(135792468, [0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1]), e, 'Test 32');
test(kthCharacter(1, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), a, 'Test 33');
test(kthCharacter(75000000000000, [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0]), Error: list index out of range, 'Test 34');
test(kthCharacter(10000, [0,0,0,0,0,1,1,1,1,1,0,0,0,0,0]), c, 'Test 35');
test(kthCharacter(123456789, [1, 0, 1, 1, 0, 1, 0, 0, 1, 0]), Error: list index out of range, 'Test 36');
test(kthCharacter(56789, [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), h, 'Test 37');
test(kthCharacter(987654321, [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), Error: list index out of range, 'Test 38');
test(kthCharacter(99999999999999, [0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), Error: list index out of range, 'Test 39');
test(kthCharacter(456789123, [0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1]), f, 'Test 40');
test(kthCharacter(256, [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), a, 'Test 41');
test(kthCharacter(50, [1,1,1,1,1,1,1,1,1,1]), d, 'Test 42');
test(kthCharacter(77777777777777, [1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0]), Error: list index out of range, 'Test 43');
test(kthCharacter(98765432109876, [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), Error: list index out of range, 'Test 44');
test(kthCharacter(618033988749894, [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1]), Error: list index out of range, 'Test 45');
test(kthCharacter(2718281828459, [0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1]), Error: list index out of range, 'Test 46');
test(kthCharacter(100000000000000, [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), Error: list index out of range, 'Test 47');
test(kthCharacter(123456789, [1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1]), Error: list index out of range, 'Test 48');
test(kthCharacter(1234567891011, [1,0,1,0,1,0,1,0,1,0,1]), Error: list index out of range, 'Test 49');
test(kthCharacter(50000000000000, [1,1,1,1,1,1,1,1,1,1]), Error: list index out of range, 'Test 50');
test(kthCharacter(100000000000000, [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), Error: list index out of range, 'Test 51');
test(kthCharacter(111111111111111, [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0]), Error: list index out of range, 'Test 52');
test(kthCharacter(44444444444444, [1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0]), n, 'Test 53');
test(kthCharacter(99999999999999, [0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1]), Error: list index out of range, 'Test 54');
test(kthCharacter(15000000000000, [1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0]), r, 'Test 55');
test(kthCharacter(50000000000000, [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0]), Error: list index out of range, 'Test 56');
test(kthCharacter(50000000000000, [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), Error: list index out of range, 'Test 57');
test(kthCharacter(123456789, [1,0,1,0,1,1,0,1,0]), Error: list index out of range, 'Test 58');
test(kthCharacter(7890123456, [0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1]), k, 'Test 59');
test(kthCharacter(9876543210, [1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0]), h, 'Test 60');
test(kthCharacter(987654321, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), Error: list index out of range, 'Test 61');
test(kthCharacter(12345, [0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1]), b, 'Test 62');
test(kthCharacter(500000000000000, [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1]), Error: list index out of range, 'Test 63');
test(kthCharacter(3141592653589, [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), Error: list index out of range, 'Test 64');
test(kthCharacter(33333333333333, [0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1]), j, 'Test 65');
test(kthCharacter(256, [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), e, 'Test 66');
test(kthCharacter(1000000000, [0,1,0,1,0,1,0,1,0,1]), Error: list index out of range, 'Test 67');
test(kthCharacter(5000000000000, [1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0]), Error: list index out of range, 'Test 68');
test(kthCharacter(555555555555555, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), Error: list index out of range, 'Test 69');
test(kthCharacter(123456789, [1,0,0,1,1,0,0,1,1,0]), Error: list index out of range, 'Test 70');
test(kthCharacter(99999999999999, [0,1,1,0,1,0,1,0,1,0,1,0]), Error: list index out of range, 'Test 71');
test(kthCharacter(100, [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0]), c, 'Test 72');
test(kthCharacter(80000000000000, [0,0,0,1,1,0,0,0,1,1]), Error: list index out of range, 'Test 73');
test(kthCharacter(9223372036854775807, [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1]), Error: list index out of range, 'Test 74');
test(kthCharacter(50, [0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1]), c, 'Test 75');
test(kthCharacter(89, [0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1]), b, 'Test 76');
test(kthCharacter(678910111213, [1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1]), h, 'Test 77');
test(kthCharacter(987654321, [1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1]), Error: list index out of range, 'Test 78');
test(kthCharacter(987654321, [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1]), Error: list index out of range, 'Test 79');
test(kthCharacter(123456789, [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), Error: list index out of range, 'Test 80');
test(kthCharacter(10000000000000, [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), Error: list index out of range, 'Test 81');
test(kthCharacter(123456789, [1, 0, 1, 0, 1, 0, 1, 0, 1, 0]), Error: list index out of range, 'Test 82');
test(kthCharacter(31415926, [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), g, 'Test 83');
test(kthCharacter(99999999999999, [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), Error: list index out of range, 'Test 84');
test(kthCharacter(1000000, [0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1]), g, 'Test 85');
test(kthCharacter(1000000000, [1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0]), l, 'Test 86');
test(kthCharacter(10000000000, [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), k, 'Test 87');
test(kthCharacter(1000000, [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0]), g, 'Test 88');
test(kthCharacter(50000000000000, [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), Error: list index out of range, 'Test 89');
test(kthCharacter(1, [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), a, 'Test 90');
test(kthCharacter(100000, [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), f, 'Test 91');
test(kthCharacter(1000000000, [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), Error: list index out of range, 'Test 92');
test(kthCharacter(10000000000000, [1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0]), k, 'Test 93');
test(kthCharacter(1, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), a, 'Test 94');
test(kthCharacter(8, [0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1]), c, 'Test 95');
test(kthCharacter(20000000000000, [0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0]), j, 'Test 96');
test(kthCharacter(999999999999999, [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), r, 'Test 97');
test(kthCharacter(123456789, [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), f, 'Test 98');
test(kthCharacter(13456789, [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1]), j, 'Test 99');
test(kthCharacter(12345, [0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1]), Error: list index out of range, 'Test 100');
test(kthCharacter(87654321, [0, 0, 1, 1, 0, 1, 0, 0, 1, 1]), Error: list index out of range, 'Test 101');
test(kthCharacter(100000000000000, [0, 1, 0, 1, 0, 1, 0, 1, 0, 1]), Error: list index out of range, 'Test 102');

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
