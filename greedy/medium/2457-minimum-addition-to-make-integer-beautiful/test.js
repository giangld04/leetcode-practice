// Test: 2457. Minimum Addition To Make Integer Beautiful
// 103 test cases from LeetCodeDataset
// Run: node test.js

const { makeIntegerBeautiful } = require("./solution");

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

console.log("\n2457. Minimum Addition To Make Integer Beautiful\n");

test(makeIntegerBeautiful(1000000000000, 1), 0, 'Test 1');
test(makeIntegerBeautiful(1, 1), 0, 'Test 2');
test(makeIntegerBeautiful(99999, 5), 1, 'Test 3');
test(makeIntegerBeautiful(8888, 32), 0, 'Test 4');
test(makeIntegerBeautiful(888888888, 24), 1111112, 'Test 5');
test(makeIntegerBeautiful(467, 6), 33, 'Test 6');
test(makeIntegerBeautiful(123456789, 30), 11, 'Test 7');
test(makeIntegerBeautiful(123456789, 10), 543211, 'Test 8');
test(makeIntegerBeautiful(999, 27), 0, 'Test 9');
test(makeIntegerBeautiful(56789, 25), 11, 'Test 10');
test(makeIntegerBeautiful(123, 6), 0, 'Test 11');
test(makeIntegerBeautiful(1000000000, 1), 0, 'Test 12');
test(makeIntegerBeautiful(999, 15), 1, 'Test 13');
test(makeIntegerBeautiful(123456789, 20), 3211, 'Test 14');
test(makeIntegerBeautiful(999999999, 10), 1, 'Test 15');
test(makeIntegerBeautiful(1001, 1), 8999, 'Test 16');
test(makeIntegerBeautiful(999999999999, 1), 1, 'Test 17');
test(makeIntegerBeautiful(16, 6), 4, 'Test 18');
test(makeIntegerBeautiful(111111111, 9), 0, 'Test 19');
test(makeIntegerBeautiful(35791113151719, 30), 6848281, 'Test 20');
test(makeIntegerBeautiful(12345678910111213, 50), 787, 'Test 21');
test(makeIntegerBeautiful(100000000000, 1), 0, 'Test 22');
test(makeIntegerBeautiful(88888888888, 10), 1111111112, 'Test 23');
test(makeIntegerBeautiful(987654321098, 50), 2, 'Test 24');
test(makeIntegerBeautiful(100, 1), 0, 'Test 25');
test(makeIntegerBeautiful(345678901234567890, 100), 0, 'Test 26');
test(makeIntegerBeautiful(888888888888, 24), 1111111112, 'Test 27');
test(makeIntegerBeautiful(101010101010, 15), 0, 'Test 28');
test(makeIntegerBeautiful(234567890123, 30), 109877, 'Test 29');
test(makeIntegerBeautiful(666666666666, 42), 333334, 'Test 30');
test(makeIntegerBeautiful(9876543210987654321, 100), 0, 'Test 31');
test(makeIntegerBeautiful(1234567890, 15), 432110, 'Test 32');
test(makeIntegerBeautiful(1234567890123456789, 50), 6543211, 'Test 33');
test(makeIntegerBeautiful(54321, 15), 0, 'Test 34');
test(makeIntegerBeautiful(987654321098765432, 50), 1234568, 'Test 35');
test(makeIntegerBeautiful(1234567890, 18), 32110, 'Test 36');
test(makeIntegerBeautiful(2222222222222222222, 50), 0, 'Test 37');
test(makeIntegerBeautiful(111111111111111111, 9), 8888888889, 'Test 38');
test(makeIntegerBeautiful(888888888888888, 35), 11111111112, 'Test 39');
test(makeIntegerBeautiful(555555555, 15), 4444445, 'Test 40');
test(makeIntegerBeautiful(4567891234567890, 75), 110, 'Test 41');
test(makeIntegerBeautiful(888888888888, 60), 11112, 'Test 42');
test(makeIntegerBeautiful(1999999999, 10), 1, 'Test 43');
test(makeIntegerBeautiful(567890123456, 75), 0, 'Test 44');
test(makeIntegerBeautiful(9876543210, 30), 3456790, 'Test 45');
test(makeIntegerBeautiful(9876543210, 50), 0, 'Test 46');
test(makeIntegerBeautiful(555555555555555555, 75), 4445, 'Test 47');
test(makeIntegerBeautiful(999999999, 1), 1, 'Test 48');
test(makeIntegerBeautiful(987654321098, 27), 345678902, 'Test 49');
test(makeIntegerBeautiful(500000000000, 5), 0, 'Test 50');
test(makeIntegerBeautiful(123456789123456789, 75), 11, 'Test 51');
test(makeIntegerBeautiful(222222222222222, 25), 778, 'Test 52');
test(makeIntegerBeautiful(3333333333333333333, 30), 6666666667, 'Test 53');
test(makeIntegerBeautiful(987654321, 10), 12345679, 'Test 54');
test(makeIntegerBeautiful(999999999999, 10), 1, 'Test 55');
test(makeIntegerBeautiful(1999999999999, 150), 0, 'Test 56');
test(makeIntegerBeautiful(1000000000001, 2), 0, 'Test 57');
test(makeIntegerBeautiful(1111111111111111111, 20), 0, 'Test 58');
test(makeIntegerBeautiful(888888888888, 35), 11111112, 'Test 59');
test(makeIntegerBeautiful(876543210, 10), 23456790, 'Test 60');
test(makeIntegerBeautiful(999, 2), 1, 'Test 61');
test(makeIntegerBeautiful(999999999999999999, 5), 1, 'Test 62');
test(makeIntegerBeautiful(99999999999, 9), 1, 'Test 63');
test(makeIntegerBeautiful(999999999, 45), 1, 'Test 64');
test(makeIntegerBeautiful(505050505050505050, 45), 0, 'Test 65');
test(makeIntegerBeautiful(598765432109, 30), 34567891, 'Test 66');
test(makeIntegerBeautiful(1234567890123456789, 45), 9876543211, 'Test 67');
test(makeIntegerBeautiful(1234567890123456789, 100), 0, 'Test 68');
test(makeIntegerBeautiful(9000000000009, 18), 0, 'Test 69');
test(makeIntegerBeautiful(599999999999999999, 5), 400000000000000001, 'Test 70');
test(makeIntegerBeautiful(9876543210987654321, 50), 12345679, 'Test 71');
test(makeIntegerBeautiful(123456789012, 45), 988, 'Test 72');
test(makeIntegerBeautiful(12345678901234567890, 100), 0, 'Test 73');
test(makeIntegerBeautiful(987654321, 20), 2345679, 'Test 74');
test(makeIntegerBeautiful(54321, 8), 5679, 'Test 75');
test(makeIntegerBeautiful(111111111111111, 14), 89, 'Test 76');
test(makeIntegerBeautiful(112233445566778899, 60), 1101, 'Test 77');
test(makeIntegerBeautiful(100100100100, 3), 899900, 'Test 78');
test(makeIntegerBeautiful(1999999999999999999, 90), 1, 'Test 79');
test(makeIntegerBeautiful(888888888, 7), 111111112, 'Test 80');
test(makeIntegerBeautiful(4321, 4), 5679, 'Test 81');
test(makeIntegerBeautiful(999999999999, 2), 1, 'Test 82');
test(makeIntegerBeautiful(999999999999999999, 100), 1, 'Test 83');
test(makeIntegerBeautiful(599599599, 25), 400401, 'Test 84');
test(makeIntegerBeautiful(567890123456, 30), 9876544, 'Test 85');
test(makeIntegerBeautiful(54321, 5), 45679, 'Test 86');
test(makeIntegerBeautiful(5000000000, 5), 0, 'Test 87');
test(makeIntegerBeautiful(99998, 4), 2, 'Test 88');
test(makeIntegerBeautiful(246813579111357, 50), 643, 'Test 89');
test(makeIntegerBeautiful(888888888, 15), 11111112, 'Test 90');
test(makeIntegerBeautiful(567890123456789, 50), 43211, 'Test 91');
test(makeIntegerBeautiful(888888888, 10), 11111112, 'Test 92');
test(makeIntegerBeautiful(1111111111111111111, 150), 0, 'Test 93');
test(makeIntegerBeautiful(1000000000001, 1), 8999999999999, 'Test 94');
test(makeIntegerBeautiful(1, 2), 0, 'Test 95');
test(makeIntegerBeautiful(111111111111, 12), 0, 'Test 96');
test(makeIntegerBeautiful(999999999999999999, 81), 1, 'Test 97');
test(makeIntegerBeautiful(222222222222, 24), 0, 'Test 98');
test(makeIntegerBeautiful(987654321, 25), 345679, 'Test 99');
test(makeIntegerBeautiful(1999999999999999, 18), 1, 'Test 100');
test(makeIntegerBeautiful(1000000000000000000, 1), 0, 'Test 101');
test(makeIntegerBeautiful(2222222222222222222, 40), 0, 'Test 102');
test(makeIntegerBeautiful(333333333333, 30), 667, 'Test 103');

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
