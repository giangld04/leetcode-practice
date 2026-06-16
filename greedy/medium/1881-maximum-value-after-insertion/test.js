// Test: 1881. Maximum Value After Insertion
// 133 test cases from LeetCodeDataset
// Run: node test.js

const { maxValue } = require("./solution");

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

console.log("\n1881. Maximum Value After Insertion\n");

test(maxValue("5486", 7), 75486, 'Test 1');
test(maxValue("-11111", 1), -111111, 'Test 2');
test(maxValue("-123456789", 5), -1234556789, 'Test 3');
test(maxValue("987654321", 5), 9876554321, 'Test 4');
test(maxValue("-98765", 3), -398765, 'Test 5');
test(maxValue("-1000", 1), -10001, 'Test 6');
test(maxValue("-987654321", 5), -5987654321, 'Test 7');
test(maxValue("-54321", 4), -454321, 'Test 8');
test(maxValue("123456789", 5), 5123456789, 'Test 9');
test(maxValue("5", 9), 95, 'Test 10');
test(maxValue("-1000", 5), -10005, 'Test 11');
test(maxValue("1000", 1), 11000, 'Test 12');
test(maxValue("54321", 6), 654321, 'Test 13');
test(maxValue("12345", 3), 312345, 'Test 14');
test(maxValue("1000", 5), 51000, 'Test 15');
test(maxValue("-973", 8), -8973, 'Test 16');
test(maxValue("-13", 2), -123, 'Test 17');
test(maxValue("54823", 7), 754823, 'Test 18');
test(maxValue("1", 1), 11, 'Test 19');
test(maxValue("99", 9), 999, 'Test 20');
test(maxValue("-64823", 7), -647823, 'Test 21');
test(maxValue("567", 8), 8567, 'Test 22');
test(maxValue("-9", 1), -19, 'Test 23');
test(maxValue("-9", 9), -99, 'Test 24');
test(maxValue("54893", 7), 754893, 'Test 25');
test(maxValue("-987", 7), -7987, 'Test 26');
test(maxValue("-222222222", 2), -2222222222, 'Test 27');
test(maxValue("1234567890", 0), 12345678900, 'Test 28');
test(maxValue("-1", 1), -11, 'Test 29');
test(maxValue("1000000000", 9), 91000000000, 'Test 30');
test(maxValue("123123123", 3), 3123123123, 'Test 31');
test(maxValue("-101010101", 5), -1010101015, 'Test 32');
test(maxValue("999999999", 1), 9999999991, 'Test 33');
test(maxValue("500000000", 5), 5500000000, 'Test 34');
test(maxValue("555555555", 5), 5555555555, 'Test 35');
test(maxValue("-595959595", 5), -5595959595, 'Test 36');
test(maxValue("-123456789", 3), -1233456789, 'Test 37');
test(maxValue("222222222", 1), 2222222221, 'Test 38');
test(maxValue("876543210", 0), 8765432100, 'Test 39');
test(maxValue("192837465", 4), 4192837465, 'Test 40');
test(maxValue("-900000000", 1), -1900000000, 'Test 41');
test(maxValue("-999999999", 9), -9999999999, 'Test 42');
test(maxValue("-9876543210", 1), -19876543210, 'Test 43');
test(maxValue("-100000000", 0), -0100000000, 'Test 44');
test(maxValue("9876543210", 9), 99876543210, 'Test 45');
test(maxValue("-5432109876", 9), -54321098769, 'Test 46');
test(maxValue("-123456789", 4), -1234456789, 'Test 47');
test(maxValue("-199999999", 9), -1999999999, 'Test 48');
test(maxValue("-101010101", 0), -0101010101, 'Test 49');
test(maxValue("-123123123", 5), -1231231235, 'Test 50');
test(maxValue("199999999", 9), 9199999999, 'Test 51');
test(maxValue("123456789", 9), 9123456789, 'Test 52');
test(maxValue("111111111", 2), 2111111111, 'Test 53');
test(maxValue("53284769", 5), 553284769, 'Test 54');
test(maxValue("9876543210", 8), 98876543210, 'Test 55');
test(maxValue("1999999999", 0), 19999999990, 'Test 56');
test(maxValue("9", 1), 91, 'Test 57');
test(maxValue("987654321", 9), 9987654321, 'Test 58');
test(maxValue("111000111", 1), 1111000111, 'Test 59');
test(maxValue("-1000000000", 9), -10000000009, 'Test 60');
test(maxValue("-123456789", 1), -1123456789, 'Test 61');
test(maxValue("54321", 3), 543321, 'Test 62');
test(maxValue("-9999999999", 5), -59999999999, 'Test 63');
test(maxValue("505050505", 5), 5505050505, 'Test 64');
test(maxValue("121212121", 3), 3121212121, 'Test 65');
test(maxValue("123454321", 5), 5123454321, 'Test 66');
test(maxValue("333333333", 3), 3333333333, 'Test 67');
test(maxValue("987654321", 8), 9887654321, 'Test 68');
test(maxValue("11111111111111111111", 2), 211111111111111111111, 'Test 69');
test(maxValue("-987654321", 1), -1987654321, 'Test 70');
test(maxValue("-500000000", 5), -5000000005, 'Test 71');
test(maxValue("-53284769", 5), -532584769, 'Test 72');
test(maxValue("101010101", 5), 5101010101, 'Test 73');
test(maxValue("-9876543210", 5), -59876543210, 'Test 74');
test(maxValue("666666666", 5), 6666666665, 'Test 75');
test(maxValue("111111111", 1), 1111111111, 'Test 76');
test(maxValue("12345678901234567890", 5), 512345678901234567890, 'Test 77');
test(maxValue("987654321", 6), 9876654321, 'Test 78');
test(maxValue("-123456789", 9), -1234567899, 'Test 79');
test(maxValue("123456789", 1), 1234567891, 'Test 80');
test(maxValue("-555555555", 6), -5555555556, 'Test 81');
test(maxValue("-333333333", 2), -2333333333, 'Test 82');
test(maxValue("595959595", 9), 9595959595, 'Test 83');
test(maxValue("-54321", 6), -543216, 'Test 84');
test(maxValue("987654321", 7), 9877654321, 'Test 85');
test(maxValue("9", 9), 99, 'Test 86');
test(maxValue("-86420", 1), -186420, 'Test 87');
test(maxValue("-111111111", 9), -1111111119, 'Test 88');
test(maxValue("-54321", 3), -354321, 'Test 89');
test(maxValue("-505050505", 5), -5050505055, 'Test 90');
test(maxValue("-1000000001", 0), -01000000001, 'Test 91');
test(maxValue("100000000", 9), 9100000000, 'Test 92');
test(maxValue("-9876543210987654321", 9), -98765432109876543219, 'Test 93');
test(maxValue("333333333", 4), 4333333333, 'Test 94');
test(maxValue("-2222222222", 1), -12222222222, 'Test 95');
test(maxValue("122222222", 2), 2122222222, 'Test 96');
test(maxValue("123456789", 3), 3123456789, 'Test 97');
test(maxValue("-321321321", 2), -2321321321, 'Test 98');
test(maxValue("1122334455", 6), 61122334455, 'Test 99');
test(maxValue("123456789", 6), 6123456789, 'Test 100');
test(maxValue("1111111111", 1), 11111111111, 'Test 101');
test(maxValue("-999999999", 1), -1999999999, 'Test 102');
test(maxValue("-333333333", 3), -3333333333, 'Test 103');
test(maxValue("-1122334455", 3), -11223334455, 'Test 104');
test(maxValue("-9876543210", 8), -89876543210, 'Test 105');
test(maxValue("98765432109876543210", 5), 987655432109876543210, 'Test 106');
test(maxValue("123456789", 0), 1234567890, 'Test 107');
test(maxValue("-12345678901234567890", 5), -123455678901234567890, 'Test 108');
test(maxValue("1", 9), 91, 'Test 109');
test(maxValue("-2000000000", 1), -12000000000, 'Test 110');
test(maxValue("11111", 1), 111111, 'Test 111');
test(maxValue("100000000", 1), 1100000000, 'Test 112');
test(maxValue("1234567890", 5), 51234567890, 'Test 113');
test(maxValue("-999000999", 9), -9990009999, 'Test 114');
test(maxValue("1111111111", 2), 21111111111, 'Test 115');
test(maxValue("-876543210", 0), -0876543210, 'Test 116');
test(maxValue("-99999", 1), -199999, 'Test 117');
test(maxValue("-10000", 0), -010000, 'Test 118');
test(maxValue("555555555", 6), 6555555555, 'Test 119');
test(maxValue("-98765432109876543210", 5), -598765432109876543210, 'Test 120');
test(maxValue("1999999999", 2), 21999999999, 'Test 121');
test(maxValue("123123123", 4), 4123123123, 'Test 122');
test(maxValue("86420", 9), 986420, 'Test 123');
test(maxValue("-1", 9), -19, 'Test 124');
test(maxValue("-1000000000", 1), -10000000001, 'Test 125');
test(maxValue("989898989", 7), 9898989897, 'Test 126');
test(maxValue("-222222222", 3), -2222222223, 'Test 127');
test(maxValue("192837465", 8), 8192837465, 'Test 128');
test(maxValue("33333", 3), 333333, 'Test 129');
test(maxValue("1000000000", 1), 11000000000, 'Test 130');
test(maxValue("123456789", 4), 4123456789, 'Test 131');
test(maxValue("-123456789", 8), -1234567889, 'Test 132');
test(maxValue("999999999", 9), 9999999999, 'Test 133');

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
