// Test: 2801. Count Stepping Numbers In Range
// 101 test cases from LeetCodeDataset
// Run: node test.js

const { countSteppingNumbers } = require("./solution");

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

console.log("\n2801. Count Stepping Numbers In Range\n");

test(countSteppingNumbers("123", "456"), 13, 'Test 1');
test(countSteppingNumbers("5555555555", "6666666666"), 436, 'Test 2');
test(countSteppingNumbers("1111111111", "2222222222"), 307, 'Test 3');
test(countSteppingNumbers("1000000000", "1000000001"), 0, 'Test 4');
test(countSteppingNumbers("10", "100"), 17, 'Test 5');
test(countSteppingNumbers("9999999999", "9999999999"), 0, 'Test 6');
test(countSteppingNumbers("1", "9876543210"), 6111, 'Test 7');
test(countSteppingNumbers("1", "11"), 10, 'Test 8');
test(countSteppingNumbers("9876543210", "9876543210"), 1, 'Test 9');
test(countSteppingNumbers("90", "101"), 2, 'Test 10');
test(countSteppingNumbers("10000000000000000000", "10000000000000000010"), 0, 'Test 11');
test(countSteppingNumbers("12345678901234567890", "98765432109876543210"), 1768804, 'Test 12');
test(countSteppingNumbers("12345678901234567890", "12345678901234567891"), 0, 'Test 13');
test(countSteppingNumbers("999999999999999999", "1000000000000000000"), 0, 'Test 14');
test(countSteppingNumbers("321098765432109876543210987", "432109876543210987654321098"), 25767582, 'Test 15');
test(countSteppingNumbers("8888888888", "8888888899"), 0, 'Test 16');
test(countSteppingNumbers("9999999999999999999", "10000000000000000000"), 0, 'Test 17');
test(countSteppingNumbers("3333333333", "4444444444"), 436, 'Test 18');
test(countSteppingNumbers("989898989898989898", "999999999999999999"), 1, 'Test 19');
test(countSteppingNumbers("9", "9"), 1, 'Test 20');
test(countSteppingNumbers("1234567890", "2345678901"), 333, 'Test 21');
test(countSteppingNumbers("1", "2147483647"), 3627, 'Test 22');
test(countSteppingNumbers("1010101010", "2020202020"), 251, 'Test 23');
test(countSteppingNumbers("8888888888", "9999999999"), 196, 'Test 24');
test(countSteppingNumbers("1", "12345678901234567890"), 2358711, 'Test 25');
test(countSteppingNumbers("54321098765432109876543210", "65432109876543210987654321"), 14851321, 'Test 26');
test(countSteppingNumbers("5", "5555555555"), 4904, 'Test 27');
test(countSteppingNumbers("987654321", "9876543211"), 2931, 'Test 28');
test(countSteppingNumbers("54321098765432109876", "65432109876543210987"), 297140, 'Test 29');
test(countSteppingNumbers("5000000000", "5000000010"), 0, 'Test 30');
test(countSteppingNumbers("500", "600"), 4, 'Test 31');
test(countSteppingNumbers("5", "5"), 1, 'Test 32');
test(countSteppingNumbers("12345678912345678912", "23456789123456789123"), 226942, 'Test 33');
test(countSteppingNumbers("8888888888", "8989898989"), 70, 'Test 34');
test(countSteppingNumbers("9876543210", "9876543219"), 2, 'Test 35');
test(countSteppingNumbers("888888888", "999999999"), 105, 'Test 36');
test(countSteppingNumbers("1000000000", "9999999999"), 2986, 'Test 37');
test(countSteppingNumbers("8989898989", "9898989898"), 127, 'Test 38');
test(countSteppingNumbers("1212121212", "2121212121"), 202, 'Test 39');
test(countSteppingNumbers("987654321", "987654322"), 1, 'Test 40');
test(countSteppingNumbers("10000000000000000000", "10000000000000000001"), 0, 'Test 41');
test(countSteppingNumbers("54321", "65432"), 17, 'Test 42');
test(countSteppingNumbers("8999999999999999999", "9000000000000000001"), 0, 'Test 43');
test(countSteppingNumbers("1010101010", "1121212121"), 70, 'Test 44');
test(countSteppingNumbers("1010101010", "9090909090"), 2860, 'Test 45');
test(countSteppingNumbers("9999999999", "10000000000"), 0, 'Test 46');
test(countSteppingNumbers("9999999990", "9999999999"), 0, 'Test 47');
test(countSteppingNumbers("9876543210987654321", "9876543210987654322"), 0, 'Test 48');
test(countSteppingNumbers("1", "9999999999"), 6236, 'Test 49');
test(countSteppingNumbers("98765432109876543210", "98765432109876543211"), 0, 'Test 50');
test(countSteppingNumbers("1234567890", "1234567899"), 1, 'Test 51');
test(countSteppingNumbers("123", "45678901234567890123"), 3157659, 'Test 52');
test(countSteppingNumbers("7777777777", "8888888888"), 307, 'Test 53');
test(countSteppingNumbers("12121212121212121212", "13131313131313131313"), 102885, 'Test 54');
test(countSteppingNumbers("321", "654"), 13, 'Test 55');
test(countSteppingNumbers("9876543210123456789", "9876543210123456790"), 1, 'Test 56');
test(countSteppingNumbers("1010101010", "1111111111"), 70, 'Test 57');
test(countSteppingNumbers("98765432101234567890", "98765432101234567899"), 1, 'Test 58');
test(countSteppingNumbers("4444444444", "5555555555"), 456, 'Test 59');
test(countSteppingNumbers("200", "210"), 1, 'Test 60');
test(countSteppingNumbers("1", "1234567890"), 3500, 'Test 61');
test(countSteppingNumbers("987654321", "9876543210"), 2931, 'Test 62');
test(countSteppingNumbers("9876543210", "10123456789"), 252, 'Test 63');
test(countSteppingNumbers("100000000000000000000000000000000000000000000000000", "99999999999999999999999999999999999999999999999999"), 0, 'Test 64');
test(countSteppingNumbers("99999999999999999999", "100000000000000000000"), 0, 'Test 65');
test(countSteppingNumbers("1111111111111111111", "1212121212121212121"), 8551, 'Test 66');
test(countSteppingNumbers("1111111111", "1111111111"), 0, 'Test 67');
test(countSteppingNumbers("8989898989", "9090909090"), 1, 'Test 68');
test(countSteppingNumbers("98765432101234567890", "98765432101234567891"), 0, 'Test 69');
test(countSteppingNumbers("5432109876", "5432109877"), 0, 'Test 70');
test(countSteppingNumbers("50505050505050505050", "60606060606060606060"), 298777, 'Test 71');
test(countSteppingNumbers("11111111111111111111", "22222222222222222222"), 204289, 'Test 72');
test(countSteppingNumbers("98765432101234567890", "98765432109876543210"), 1, 'Test 73');
test(countSteppingNumbers("10000000000", "20000000000"), 460, 'Test 74');
test(countSteppingNumbers("123", "135"), 1, 'Test 75');
test(countSteppingNumbers("1000000000", "2000000000"), 251, 'Test 76');
test(countSteppingNumbers("123456789", "987654321"), 1362, 'Test 77');
test(countSteppingNumbers("98765432109876543210987654321", "98765432109876543210987654322"), 0, 'Test 78');
test(countSteppingNumbers("98765", "98766"), 1, 'Test 79');
test(countSteppingNumbers("123456789", "1234567891"), 1681, 'Test 80');
test(countSteppingNumbers("987654321", "9876543219"), 2932, 'Test 81');
test(countSteppingNumbers("987654321", "987654329"), 2, 'Test 82');
test(countSteppingNumbers("543210", "6543210"), 380, 'Test 83');
test(countSteppingNumbers("1234567890", "1234567891"), 0, 'Test 84');
test(countSteppingNumbers("123", "321"), 6, 'Test 85');
test(countSteppingNumbers("1010101010101010101", "1111111111111111111"), 22950, 'Test 86');
test(countSteppingNumbers("8999999999", "9000000000"), 0, 'Test 87');
test(countSteppingNumbers("555555555", "666666666"), 228, 'Test 88');
test(countSteppingNumbers("10101010101010101010", "21212121212121212121"), 195908, 'Test 89');
test(countSteppingNumbers("1", "10000000000000000000"), 2194764, 'Test 90');
test(countSteppingNumbers("12345", "123456789012345"), 90485, 'Test 91');
test(countSteppingNumbers("2222222222", "3333333333"), 389, 'Test 92');
test(countSteppingNumbers("1", "99999999999999999999999999999999999999999999999999"), 254219541, 'Test 93');
test(countSteppingNumbers("123454321", "123456789"), 16, 'Test 94');
test(countSteppingNumbers("1010101010", "1010101011"), 1, 'Test 95');
test(countSteppingNumbers("112233445566778899", "122334455667788990"), 12190, 'Test 96');
test(countSteppingNumbers("100000000000000000000000000000000000000000000000000", "200000000000000000000000000000000000000000000000000"), 251590529, 'Test 97');
test(countSteppingNumbers("1111111111", "9999999999"), 2916, 'Test 98');
test(countSteppingNumbers("10101010101010101010", "20202020202020202020"), 164407, 'Test 99');
test(countSteppingNumbers("123", "133"), 1, 'Test 100');
test(countSteppingNumbers("10", "1111111111"), 3311, 'Test 101');

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
