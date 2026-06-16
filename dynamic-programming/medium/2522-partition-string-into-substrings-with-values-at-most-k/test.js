// Test: 2522. Partition String Into Substrings With Values At Most K
// 109 test cases from LeetCodeDataset
// Run: node test.js

const { minimumPartition } = require("./solution");

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

console.log("\n2522. Partition String Into Substrings With Values At Most K\n");

test(minimumPartition("473289651", 10), 9, 'Test 1');
test(minimumPartition("2222222222222222222", 2), 19, 'Test 2');
test(minimumPartition("987654321", 10), 9, 'Test 3');
test(minimumPartition("999", 1000), 1, 'Test 4');
test(minimumPartition("999999999", 999999999), 1, 'Test 5');
test(minimumPartition("999999999", 1000), 3, 'Test 6');
test(minimumPartition("47328165", 100), 4, 'Test 7');
test(minimumPartition("99999", 100000), 1, 'Test 8');
test(minimumPartition("1", 1), 1, 'Test 9');
test(minimumPartition("1111111111", 1), 10, 'Test 10');
test(minimumPartition("987654321", 987654321), 1, 'Test 11');
test(minimumPartition("123456789", 9), 9, 'Test 12');
test(minimumPartition("9", 8), -1, 'Test 13');
test(minimumPartition("823847291", 823), 4, 'Test 14');
test(minimumPartition("456", 100), 2, 'Test 15');
test(minimumPartition("555555555", 55), 5, 'Test 16');
test(minimumPartition("111111111", 1), 9, 'Test 17');
test(minimumPartition("987654321", 50), 7, 'Test 18');
test(minimumPartition("238182", 5), -1, 'Test 19');
test(minimumPartition("123", 3), 3, 'Test 20');
test(minimumPartition("165462", 60), 4, 'Test 21');
test(minimumPartition("123456789101112131415", 1000), 7, 'Test 22');
test(minimumPartition("88888888888888888888", 888), 7, 'Test 23');
test(minimumPartition("11111111111111111111", 11), 10, 'Test 24');
test(minimumPartition("8888888888888888888888888888888888", 1000), 12, 'Test 25');
test(minimumPartition("1234567891011121314151617181920", 10), 30, 'Test 26');
test(minimumPartition("123456789", 987654321), 1, 'Test 27');
test(minimumPartition("1919191919191919191919191919191919191919191919", 19), 23, 'Test 28');
test(minimumPartition("987654321", 250), 5, 'Test 29');
test(minimumPartition("123456789987654321", 9999), 5, 'Test 30');
test(minimumPartition("5678956789567895678956789", 10000), 7, 'Test 31');
test(minimumPartition("12345678901234567890123456789012345678901234567890", 123456789), 6, 'Test 32');
test(minimumPartition("9999999999999999999", 1000000000), 3, 'Test 33');
test(minimumPartition("1212121212121212121", 12), 10, 'Test 34');
test(minimumPartition("123123123123123123123123123123123123123123123123", 123), 16, 'Test 35');
test(minimumPartition("876543219876543219", 50000), 4, 'Test 36');
test(minimumPartition("5555555555555555555555555555555", 555), 11, 'Test 37');
test(minimumPartition("9999999999999999999", 999999999), 3, 'Test 38');
test(minimumPartition("1", 9), 1, 'Test 39');
test(minimumPartition("77777777777777777777777777777777777777777777", 777777), 8, 'Test 40');
test(minimumPartition("9999999999999999999", 10), 19, 'Test 41');
test(minimumPartition("135792468", 100), 5, 'Test 42');
test(minimumPartition("987654321123456789987654321", 98765), 6, 'Test 43');
test(minimumPartition("99999999999999999999999999999999999999999999", 999999999), 5, 'Test 44');
test(minimumPartition("33333333333333333333333333333333333333333333", 333), 15, 'Test 45');
test(minimumPartition("102030405060708090", 100), 9, 'Test 46');
test(minimumPartition("111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111", 10), 99, 'Test 47');
test(minimumPartition("123456789987654321", 123456789), 3, 'Test 48');
test(minimumPartition("987654321", 987654320), 2, 'Test 49');
test(minimumPartition("123456789123456789123456789", 123456789), 3, 'Test 50');
test(minimumPartition("7777777777777777777", 50), 19, 'Test 51');
test(minimumPartition("999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999", 999999999), 12, 'Test 52');
test(minimumPartition("246813579", 1000), 3, 'Test 53');
test(minimumPartition("19191919191919191919", 19), 10, 'Test 54');
test(minimumPartition("3333333333333333333", 33333), 4, 'Test 55');
test(minimumPartition("3333333333333333333", 333), 7, 'Test 56');
test(minimumPartition("55555555555555555555555555555555555555555555", 55555), 9, 'Test 57');
test(minimumPartition("3333333333333333333333333333333333", 33), 17, 'Test 58');
test(minimumPartition("321321321321321321321", 321), 7, 'Test 59');
test(minimumPartition("111222333444555666777888999", 333), 12, 'Test 60');
test(minimumPartition("1357924680135792468", 1000), 6, 'Test 61');
test(minimumPartition("1234567891011121314151617181920", 1), -1, 'Test 62');
test(minimumPartition("1111111111111111111111111111111111111111111111", 1), 46, 'Test 63');
test(minimumPartition("87654321", 543), 4, 'Test 64');
test(minimumPartition("987654321", 100), 5, 'Test 65');
test(minimumPartition("505050505050505050505050505050505050505050505050", 505), 13, 'Test 66');
test(minimumPartition("91827364510987654321", 1000), 7, 'Test 67');
test(minimumPartition("123456789123456789123456789123456789123456789", 123456789), 5, 'Test 68');
test(minimumPartition("1234567890123456789", 123456789), 2, 'Test 69');
test(minimumPartition("88888888888888888888888888888888888888888888", 88888888), 6, 'Test 70');
test(minimumPartition("99999999999999999999", 10), 20, 'Test 71');
test(minimumPartition("135792468", 10), 9, 'Test 72');
test(minimumPartition("1111111111111111111", 1), 19, 'Test 73');
test(minimumPartition("111111111111111111111111111111111111111111111111", 1), 48, 'Test 74');
test(minimumPartition("111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111", 111), 33, 'Test 75');
test(minimumPartition("1234567890987654321", 12345), 5, 'Test 76');
test(minimumPartition("9999999999999999999", 1000), 7, 'Test 77');
test(minimumPartition("1231231231231231231", 123123), 4, 'Test 78');
test(minimumPartition("1919191919191919191919191919191919191919191919", 20), 23, 'Test 79');
test(minimumPartition("99999999999999999999", 999999999), 3, 'Test 80');
test(minimumPartition("1010101010101010101", 101), 5, 'Test 81');
test(minimumPartition("987654321987654321987654321987654321987654321", 987654321), 5, 'Test 82');
test(minimumPartition("98765432109876543210987654321098765432109876543210", 987654321), 6, 'Test 83');
test(minimumPartition("9283746554321", 10000), 4, 'Test 84');
test(minimumPartition("123456789", 123456789), 1, 'Test 85');
test(minimumPartition("99999999999999999999999999999999999999999999999", 999999999), 6, 'Test 86');
test(minimumPartition("1234567891011121314151617181920", 150), 14, 'Test 87');
test(minimumPartition("987654321", 500), 4, 'Test 88');
test(minimumPartition("55555555555555555555555555555555555555555555555", 60), 24, 'Test 89');
test(minimumPartition("123456789", 8), -1, 'Test 90');
test(minimumPartition("987654321", 999999999), 1, 'Test 91');
test(minimumPartition("1999999999999999999999999999999999", 1000000000), 4, 'Test 92');
test(minimumPartition("1234567891011121314151617181920", 100), 15, 'Test 93');
test(minimumPartition("77777777777777777777777777777777777777777777777", 77), 24, 'Test 94');
test(minimumPartition("123456789", 89), 5, 'Test 95');
test(minimumPartition("3333333333333333333", 33), 10, 'Test 96');
test(minimumPartition("123456789", 5), -1, 'Test 97');
test(minimumPartition("8888888888888888888", 9), 19, 'Test 98');
test(minimumPartition("123456789123456789", 1000000000), 2, 'Test 99');
test(minimumPartition("11111111111111111111111111111111111111111111", 111111111), 5, 'Test 100');
test(minimumPartition("246813579", 250), 4, 'Test 101');
test(minimumPartition("123456789101112131415", 100), 10, 'Test 102');
test(minimumPartition("98765432187654321", 1000), 6, 'Test 103');
test(minimumPartition("1234567891011121314151617181920", 99), 15, 'Test 104');
test(minimumPartition("55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555", 555), 33, 'Test 105');
test(minimumPartition("54321", 5), 5, 'Test 106');
test(minimumPartition("543215432154321", 543), 5, 'Test 107');
test(minimumPartition("9876543210987654321", 100000), 4, 'Test 108');
test(minimumPartition("112233445566778899112233445566778899112233", 112233), 8, 'Test 109');

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
