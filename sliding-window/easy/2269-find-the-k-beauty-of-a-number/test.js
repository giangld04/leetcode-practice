// Test: 2269. Find The K Beauty Of A Number
// 90 test cases from LeetCodeDataset
// Run: node test.js

const { divisorSubstrings } = require("./solution");

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

console.log("\n2269. Find The K Beauty Of A Number\n");

test(divisorSubstrings(100000, 2), 1, 'Test 1');
test(divisorSubstrings(240, 2), 2, 'Test 2');
test(divisorSubstrings(1111, 2), 3, 'Test 3');
test(divisorSubstrings(430043, 2), 2, 'Test 4');
test(divisorSubstrings(99999, 5), 1, 'Test 5');
test(divisorSubstrings(123456, 3), 0, 'Test 6');
test(divisorSubstrings(987654, 1), 1, 'Test 7');
test(divisorSubstrings(1111, 1), 4, 'Test 8');
test(divisorSubstrings(987654321, 4), 0, 'Test 9');
test(divisorSubstrings(999999999, 9), 1, 'Test 10');
test(divisorSubstrings(111222333, 5), 0, 'Test 11');
test(divisorSubstrings(2345678901234567890, 10), 0, 'Test 12');
test(divisorSubstrings(100100100, 4), 4, 'Test 13');
test(divisorSubstrings(135792468013579246, 7), 0, 'Test 14');
test(divisorSubstrings(10101010101010101010, 5), 8, 'Test 15');
test(divisorSubstrings(123412341234, 6), 0, 'Test 16');
test(divisorSubstrings(111111111, 1), 9, 'Test 17');
test(divisorSubstrings(9876543210, 3), 1, 'Test 18');
test(divisorSubstrings(1234567890123456789, 6), 0, 'Test 19');
test(divisorSubstrings(7777777, 7), 1, 'Test 20');
test(divisorSubstrings(12301230, 4), 3, 'Test 21');
test(divisorSubstrings(123456789101112131415, 6), 0, 'Test 22');
test(divisorSubstrings(1145141919810, 5), 0, 'Test 23');
test(divisorSubstrings(1000000000, 9), 1, 'Test 24');
test(divisorSubstrings(123456789123456789123456789, 8), 0, 'Test 25');
test(divisorSubstrings(7777777777, 8), 0, 'Test 26');
test(divisorSubstrings(1000000001, 9), 1, 'Test 27');
test(divisorSubstrings(112233445566778899, 6), 0, 'Test 28');
test(divisorSubstrings(2222222222, 4), 0, 'Test 29');
test(divisorSubstrings(333333333, 4), 0, 'Test 30');
test(divisorSubstrings(1010101010, 2), 9, 'Test 31');
test(divisorSubstrings(1111111111, 3), 0, 'Test 32');
test(divisorSubstrings(999999999, 2), 0, 'Test 33');
test(divisorSubstrings(567890123, 6), 0, 'Test 34');
test(divisorSubstrings(1100110011001100, 8), 7, 'Test 35');
test(divisorSubstrings(112233445566778899, 5), 0, 'Test 36');
test(divisorSubstrings(555555555, 6), 0, 'Test 37');
test(divisorSubstrings(100100100, 3), 7, 'Test 38');
test(divisorSubstrings(864208642086420, 4), 3, 'Test 39');
test(divisorSubstrings(86420, 2), 1, 'Test 40');
test(divisorSubstrings(10000000001000000000, 10), 11, 'Test 41');
test(divisorSubstrings(1234567890123456789, 7), 0, 'Test 42');
test(divisorSubstrings(1000100010001, 6), 2, 'Test 43');
test(divisorSubstrings(1000000007, 7), 0, 'Test 44');
test(divisorSubstrings(987654321, 9), 1, 'Test 45');
test(divisorSubstrings(5432109876543210, 2), 4, 'Test 46');
test(divisorSubstrings(222222222, 2), 0, 'Test 47');
test(divisorSubstrings(999999999, 1), 9, 'Test 48');
test(divisorSubstrings(1357924680, 2), 4, 'Test 49');
test(divisorSubstrings(33333333333, 4), 0, 'Test 50');
test(divisorSubstrings(5555555555555555555, 6), 0, 'Test 51');
test(divisorSubstrings(864208642, 3), 0, 'Test 52');
test(divisorSubstrings(101010101, 3), 0, 'Test 53');
test(divisorSubstrings(5555555555, 2), 9, 'Test 54');
test(divisorSubstrings(987654321, 3), 0, 'Test 55');
test(divisorSubstrings(112233445566, 6), 0, 'Test 56');
test(divisorSubstrings(789012345678, 7), 0, 'Test 57');
test(divisorSubstrings(314159265358979323, 4), 0, 'Test 58');
test(divisorSubstrings(222222222, 3), 7, 'Test 59');
test(divisorSubstrings(1111111111, 5), 6, 'Test 60');
test(divisorSubstrings(123123123, 2), 0, 'Test 61');
test(divisorSubstrings(1000000, 4), 1, 'Test 62');
test(divisorSubstrings(888888888888888888, 11), 0, 'Test 63');
test(divisorSubstrings(123456789101112131415, 7), 0, 'Test 64');
test(divisorSubstrings(1357924680, 5), 0, 'Test 65');
test(divisorSubstrings(9876543210987654321, 9), 2, 'Test 66');
test(divisorSubstrings(10203040506070809, 6), 0, 'Test 67');
test(divisorSubstrings(777000777, 4), 2, 'Test 68');
test(divisorSubstrings(101010101, 5), 0, 'Test 69');
test(divisorSubstrings(987654321987654321, 9), 2, 'Test 70');
test(divisorSubstrings(123123123, 4), 0, 'Test 71');
test(divisorSubstrings(1000000000, 5), 1, 'Test 72');
test(divisorSubstrings(98765432109876543210987654321, 10), 2, 'Test 73');
test(divisorSubstrings(222222222, 1), 9, 'Test 74');
test(divisorSubstrings(10203040506070809, 9), 0, 'Test 75');
test(divisorSubstrings(101010101, 2), 4, 'Test 76');
test(divisorSubstrings(567890123, 3), 0, 'Test 77');
test(divisorSubstrings(222222222, 5), 0, 'Test 78');
test(divisorSubstrings(12345678987654321, 7), 0, 'Test 79');
test(divisorSubstrings(999999999, 7), 0, 'Test 80');
test(divisorSubstrings(999999999, 3), 7, 'Test 81');
test(divisorSubstrings(864197532, 4), 0, 'Test 82');
test(divisorSubstrings(12301230123, 4), 2, 'Test 83');
test(divisorSubstrings(101010101010101010, 6), 13, 'Test 84');
test(divisorSubstrings(1000000000, 4), 1, 'Test 85');
test(divisorSubstrings(444444444, 5), 0, 'Test 86');
test(divisorSubstrings(222333444555, 4), 0, 'Test 87');
test(divisorSubstrings(1001001001001001001, 5), 0, 'Test 88');
test(divisorSubstrings(555555555, 5), 0, 'Test 89');
test(divisorSubstrings(7777777, 2), 0, 'Test 90');

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
