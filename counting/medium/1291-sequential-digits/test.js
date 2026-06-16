// Test: 1291. Sequential Digits
// 88 test cases from LeetCodeDataset
// Run: node test.js

const { sequentialDigits } = require("./solution");

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

console.log("\n1291. Sequential Digits\n");

test(sequentialDigits(567, 6789), [567, 678, 789, 1234, 2345, 3456, 4567, 5678, 6789], 'Test 1');
test(sequentialDigits(500, 700), [567, 678], 'Test 2');
test(sequentialDigits(10, 100), [12, 23, 34, 45, 56, 67, 78, 89], 'Test 3');
test(sequentialDigits(123456789, 123456789), [123456789], 'Test 4');
test(sequentialDigits(11, 22), [12], 'Test 5');
test(sequentialDigits(111, 999), [123, 234, 345, 456, 567, 678, 789], 'Test 6');
test(sequentialDigits(50, 500), [56, 67, 78, 89, 123, 234, 345, 456], 'Test 7');
test(sequentialDigits(789, 98765), [789, 1234, 2345, 3456, 4567, 5678, 6789, 12345, 23456, 34567, 45678, 56789], 'Test 8');
test(sequentialDigits(123, 456), [123, 234, 345, 456], 'Test 9');
test(sequentialDigits(9876, 98765), [12345, 23456, 34567, 45678, 56789], 'Test 10');
test(sequentialDigits(1234, 5678), [1234, 2345, 3456, 4567, 5678], 'Test 11');
test(sequentialDigits(9, 10), [], 'Test 12');
test(sequentialDigits(100, 300), [123, 234], 'Test 13');
test(sequentialDigits(1, 1000000000), [12, 23, 34, 45, 56, 67, 78, 89, 123, 234, 345, 456, 567, 678, 789, 1234, 2345, 3456, 4567, 5678, 6789, 12345, 23456, 34567, 45678, 56789, 123456, 234567, 345678, 456789, 1234567, 2345678, 3456789, 12345678, 23456789, 123456789], 'Test 14');
test(sequentialDigits(1000, 13000), [1234, 2345, 3456, 4567, 5678, 6789, 12345], 'Test 15');
test(sequentialDigits(100000, 999999), [123456, 234567, 345678, 456789], 'Test 16');
test(sequentialDigits(234567, 345678), [234567, 345678], 'Test 17');
test(sequentialDigits(123, 987654321), [123, 234, 345, 456, 567, 678, 789, 1234, 2345, 3456, 4567, 5678, 6789, 12345, 23456, 34567, 45678, 56789, 123456, 234567, 345678, 456789, 1234567, 2345678, 3456789, 12345678, 23456789, 123456789], 'Test 18');
test(sequentialDigits(1111, 2222), [1234], 'Test 19');
test(sequentialDigits(99999999, 1000000000), [123456789], 'Test 20');
test(sequentialDigits(80000, 85000), [], 'Test 21');
test(sequentialDigits(234, 345678), [234, 345, 456, 567, 678, 789, 1234, 2345, 3456, 4567, 5678, 6789, 12345, 23456, 34567, 45678, 56789, 123456, 234567, 345678], 'Test 22');
test(sequentialDigits(50000, 90000), [56789], 'Test 23');
test(sequentialDigits(50000, 80000), [56789], 'Test 24');
test(sequentialDigits(56, 789), [56, 67, 78, 89, 123, 234, 345, 456, 567, 678, 789], 'Test 25');
test(sequentialDigits(100000, 200000), [123456], 'Test 26');
test(sequentialDigits(111, 123456789), [123, 234, 345, 456, 567, 678, 789, 1234, 2345, 3456, 4567, 5678, 6789, 12345, 23456, 34567, 45678, 56789, 123456, 234567, 345678, 456789, 1234567, 2345678, 3456789, 12345678, 23456789, 123456789], 'Test 27');
test(sequentialDigits(987, 9876), [1234, 2345, 3456, 4567, 5678, 6789], 'Test 28');
test(sequentialDigits(4567, 87654), [4567, 5678, 6789, 12345, 23456, 34567, 45678, 56789], 'Test 29');
test(sequentialDigits(1234567, 7654321), [1234567, 2345678, 3456789], 'Test 30');
test(sequentialDigits(111, 222), [123], 'Test 31');
test(sequentialDigits(789, 789), [789], 'Test 32');
test(sequentialDigits(1, 10), [], 'Test 33');
test(sequentialDigits(2345678, 3456789), [2345678, 3456789], 'Test 34');
test(sequentialDigits(111, 999999), [123, 234, 345, 456, 567, 678, 789, 1234, 2345, 3456, 4567, 5678, 6789, 12345, 23456, 34567, 45678, 56789, 123456, 234567, 345678, 456789], 'Test 35');
test(sequentialDigits(12345678, 23456789), [12345678, 23456789], 'Test 36');
test(sequentialDigits(1111, 4444), [1234, 2345, 3456], 'Test 37');
test(sequentialDigits(2000, 40000), [2345, 3456, 4567, 5678, 6789, 12345, 23456, 34567], 'Test 38');
test(sequentialDigits(12345678, 87654321), [12345678, 23456789], 'Test 39');
test(sequentialDigits(4321, 987654321), [4567, 5678, 6789, 12345, 23456, 34567, 45678, 56789, 123456, 234567, 345678, 456789, 1234567, 2345678, 3456789, 12345678, 23456789, 123456789], 'Test 40');
test(sequentialDigits(12, 89), [12, 23, 34, 45, 56, 67, 78, 89], 'Test 41');
test(sequentialDigits(99, 100), [], 'Test 42');
test(sequentialDigits(34567, 987654321), [34567, 45678, 56789, 123456, 234567, 345678, 456789, 1234567, 2345678, 3456789, 12345678, 23456789, 123456789], 'Test 43');
test(sequentialDigits(10000, 99999), [12345, 23456, 34567, 45678, 56789], 'Test 44');
test(sequentialDigits(1234567, 3456789), [1234567, 2345678, 3456789], 'Test 45');
test(sequentialDigits(300000, 500000), [345678, 456789], 'Test 46');
test(sequentialDigits(4567, 8901), [4567, 5678, 6789], 'Test 47');
test(sequentialDigits(150, 10000), [234, 345, 456, 567, 678, 789, 1234, 2345, 3456, 4567, 5678, 6789], 'Test 48');
test(sequentialDigits(10, 98), [12, 23, 34, 45, 56, 67, 78, 89], 'Test 49');
test(sequentialDigits(3456, 87654), [3456, 4567, 5678, 6789, 12345, 23456, 34567, 45678, 56789], 'Test 50');
test(sequentialDigits(1111, 22222), [1234, 2345, 3456, 4567, 5678, 6789, 12345], 'Test 51');
test(sequentialDigits(111111, 222222), [123456], 'Test 52');
test(sequentialDigits(56789, 98765), [56789], 'Test 53');
test(sequentialDigits(88888888, 99999999), [], 'Test 54');
test(sequentialDigits(123456, 678910), [123456, 234567, 345678, 456789], 'Test 55');
test(sequentialDigits(12345, 67890), [12345, 23456, 34567, 45678, 56789], 'Test 56');
test(sequentialDigits(111, 987654321), [123, 234, 345, 456, 567, 678, 789, 1234, 2345, 3456, 4567, 5678, 6789, 12345, 23456, 34567, 45678, 56789, 123456, 234567, 345678, 456789, 1234567, 2345678, 3456789, 12345678, 23456789, 123456789], 'Test 57');
test(sequentialDigits(1234, 23456789), [1234, 2345, 3456, 4567, 5678, 6789, 12345, 23456, 34567, 45678, 56789, 123456, 234567, 345678, 456789, 1234567, 2345678, 3456789, 12345678, 23456789], 'Test 58');
test(sequentialDigits(4000, 5000), [4567], 'Test 59');
test(sequentialDigits(890, 123456789), [1234, 2345, 3456, 4567, 5678, 6789, 12345, 23456, 34567, 45678, 56789, 123456, 234567, 345678, 456789, 1234567, 2345678, 3456789, 12345678, 23456789, 123456789], 'Test 60');
test(sequentialDigits(120, 123), [123], 'Test 61');
test(sequentialDigits(1111111, 7777777), [1234567, 2345678, 3456789], 'Test 62');
test(sequentialDigits(56789, 67890), [56789], 'Test 63');
test(sequentialDigits(98765, 987654321), [123456, 234567, 345678, 456789, 1234567, 2345678, 3456789, 12345678, 23456789, 123456789], 'Test 64');
test(sequentialDigits(9876, 1000000), [12345, 23456, 34567, 45678, 56789, 123456, 234567, 345678, 456789], 'Test 65');
test(sequentialDigits(23456, 67890), [23456, 34567, 45678, 56789], 'Test 66');
test(sequentialDigits(3456789, 4567890), [3456789], 'Test 67');
test(sequentialDigits(123456, 123456789), [123456, 234567, 345678, 456789, 1234567, 2345678, 3456789, 12345678, 23456789, 123456789], 'Test 68');
test(sequentialDigits(123456, 789012), [123456, 234567, 345678, 456789], 'Test 69');
test(sequentialDigits(4000000, 6000000), [], 'Test 70');
test(sequentialDigits(10, 999999999), [12, 23, 34, 45, 56, 67, 78, 89, 123, 234, 345, 456, 567, 678, 789, 1234, 2345, 3456, 4567, 5678, 6789, 12345, 23456, 34567, 45678, 56789, 123456, 234567, 345678, 456789, 1234567, 2345678, 3456789, 12345678, 23456789, 123456789], 'Test 71');
test(sequentialDigits(987654, 987654321), [1234567, 2345678, 3456789, 12345678, 23456789, 123456789], 'Test 72');
test(sequentialDigits(56789, 654321), [56789, 123456, 234567, 345678, 456789], 'Test 73');
test(sequentialDigits(300000, 350000), [345678], 'Test 74');
test(sequentialDigits(10000000, 99999999), [12345678, 23456789], 'Test 75');
test(sequentialDigits(23456, 345678), [23456, 34567, 45678, 56789, 123456, 234567, 345678], 'Test 76');
test(sequentialDigits(12, 123456789), [12, 23, 34, 45, 56, 67, 78, 89, 123, 234, 345, 456, 567, 678, 789, 1234, 2345, 3456, 4567, 5678, 6789, 12345, 23456, 34567, 45678, 56789, 123456, 234567, 345678, 456789, 1234567, 2345678, 3456789, 12345678, 23456789, 123456789], 'Test 77');
test(sequentialDigits(1000000, 1500000), [1234567], 'Test 78');
test(sequentialDigits(234, 456789), [234, 345, 456, 567, 678, 789, 1234, 2345, 3456, 4567, 5678, 6789, 12345, 23456, 34567, 45678, 56789, 123456, 234567, 345678, 456789], 'Test 79');
test(sequentialDigits(10000, 20000), [12345], 'Test 80');
test(sequentialDigits(250, 950), [345, 456, 567, 678, 789], 'Test 81');
test(sequentialDigits(1234, 56789), [1234, 2345, 3456, 4567, 5678, 6789, 12345, 23456, 34567, 45678, 56789], 'Test 82');
test(sequentialDigits(890, 987654321), [1234, 2345, 3456, 4567, 5678, 6789, 12345, 23456, 34567, 45678, 56789, 123456, 234567, 345678, 456789, 1234567, 2345678, 3456789, 12345678, 23456789, 123456789], 'Test 83');
test(sequentialDigits(50, 200), [56, 67, 78, 89, 123], 'Test 84');
test(sequentialDigits(222, 55555), [234, 345, 456, 567, 678, 789, 1234, 2345, 3456, 4567, 5678, 6789, 12345, 23456, 34567, 45678], 'Test 85');
test(sequentialDigits(900, 1000), [], 'Test 86');
test(sequentialDigits(345, 3456789), [345, 456, 567, 678, 789, 1234, 2345, 3456, 4567, 5678, 6789, 12345, 23456, 34567, 45678, 56789, 123456, 234567, 345678, 456789, 1234567, 2345678, 3456789], 'Test 87');
test(sequentialDigits(9876543, 987654321), [12345678, 23456789, 123456789], 'Test 88');

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
