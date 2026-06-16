// Test: 1977. Number Of Ways To Separate Numbers
// 105 test cases from LeetCodeDataset
// Run: node test.js

const { numberOfCombinations } = require("./solution");

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

console.log("\n1977. Number Of Ways To Separate Numbers\n");

test(numberOfCombinations("327"), 2, 'Test 1');
test(numberOfCombinations("11110000111100001111"), 30, 'Test 2');
test(numberOfCombinations("3333333333"), 42, 'Test 3');
test(numberOfCombinations("123456789012345678901234567890"), 1451, 'Test 4');
test(numberOfCombinations("0"), 0, 'Test 5');
test(numberOfCombinations("10101"), 2, 'Test 6');
test(numberOfCombinations("987654321"), 8, 'Test 7');
test(numberOfCombinations("123"), 3, 'Test 8');
test(numberOfCombinations("094"), 0, 'Test 9');
test(numberOfCombinations("1111111111111111111111111111111"), 6842, 'Test 10');
test(numberOfCombinations("9876543210987654321098765432109876543210"), 1307, 'Test 11');
test(numberOfCombinations("101010"), 3, 'Test 12');
test(numberOfCombinations("5555555"), 15, 'Test 13');
test(numberOfCombinations("9999999999999999999999999999999"), 6842, 'Test 14');
test(numberOfCombinations("100100100100100100100"), 15, 'Test 15');
test(numberOfCombinations("24680"), 6, 'Test 16');
test(numberOfCombinations("12345678901234567890"), 287, 'Test 17');
test(numberOfCombinations("1234567890"), 41, 'Test 18');
test(numberOfCombinations("11111"), 7, 'Test 19');
test(numberOfCombinations("13579"), 7, 'Test 20');
test(numberOfCombinations("12345"), 7, 'Test 21');
test(numberOfCombinations("1001"), 1, 'Test 22');
test(numberOfCombinations("999"), 3, 'Test 23');
test(numberOfCombinations("111"), 3, 'Test 24');
test(numberOfCombinations("1000000000000000000000000000000"), 1, 'Test 25');
test(numberOfCombinations("112113114115116117118119120121"), 1464, 'Test 26');
test(numberOfCombinations("11223344556677889900112233445566"), 4050, 'Test 27');
test(numberOfCombinations("112233445566778899001122334455"), 2836, 'Test 28');
test(numberOfCombinations("3330333033303330333033303330333"), 481, 'Test 29');
test(numberOfCombinations("98765432109876543210"), 67, 'Test 30');
test(numberOfCombinations("9999999999999999999999999999998"), 5604, 'Test 31');
test(numberOfCombinations("123456789101112131415161718192021"), 3405, 'Test 32');
test(numberOfCombinations("012345678901234567890123456789"), 0, 'Test 33');
test(numberOfCombinations("987654321109876543211098765432110987654321"), 1638, 'Test 34');
test(numberOfCombinations("1234567890123456789012345678901"), 1716, 'Test 35');
test(numberOfCombinations("1000000000000000000000000000001"), 1, 'Test 36');
test(numberOfCombinations("111222333444555666777888999000111222333444555"), 41226, 'Test 37');
test(numberOfCombinations("1234567890123456789012345678901234567890"), 6307, 'Test 38');
test(numberOfCombinations("1010101010101010101010101010101"), 176, 'Test 39');
test(numberOfCombinations("212121212121212121212121212121"), 1186, 'Test 40');
test(numberOfCombinations("11110001111000111100011110001111000111100011110001111000"), 2300, 'Test 41');
test(numberOfCombinations("123456789876543211234567898765"), 2137, 'Test 42');
test(numberOfCombinations("5555555555555555555555555555555555555555555555555"), 173525, 'Test 43');
test(numberOfCombinations("123123123123123123123123123123"), 1474, 'Test 44');
test(numberOfCombinations("111111111111111111111111111111111111111111111111"), 147273, 'Test 45');
test(numberOfCombinations("321321321321321321321321321321"), 809, 'Test 46');
test(numberOfCombinations("12312312312312312312312312312312"), 2069, 'Test 47');
test(numberOfCombinations("1231231231231231231231231231230"), 1641, 'Test 48');
test(numberOfCombinations("123456789876543211234567898765432112345678987654321"), 41516, 'Test 49');
test(numberOfCombinations("123123123123123123123123123123123"), 2438, 'Test 50');
test(numberOfCombinations("987654321109876543210987654321"), 310, 'Test 51');
test(numberOfCombinations("121212121212121212121212121212"), 1888, 'Test 52');
test(numberOfCombinations("1234567898765432109876543210987654321098765432109876543210"), 81400, 'Test 53');
test(numberOfCombinations("00000000000000000000000000000000000000000000000000000000"), 0, 'Test 54');
test(numberOfCombinations("1122334455667788990011223344556677889900"), 14863, 'Test 55');
test(numberOfCombinations("1001001001001001001001001001001"), 42, 'Test 56');
test(numberOfCombinations("202020202020202020202020202020"), 176, 'Test 57');
test(numberOfCombinations("987654321987654321987654321987"), 423, 'Test 58');
test(numberOfCombinations("123123123123123123123123123123123123123123123123123123123"), 78648, 'Test 59');
test(numberOfCombinations("11112222333344445555666677778888"), 8349, 'Test 60');
test(numberOfCombinations("98979695949392919089888786858483"), 454, 'Test 61');
test(numberOfCombinations("999000999000999000999000999000999000999000999000999000"), 1027, 'Test 62');
test(numberOfCombinations("10203040506070809010"), 41, 'Test 63');
test(numberOfCombinations("111222333444555666777888999000"), 5513, 'Test 64');
test(numberOfCombinations("2222222222222222222222222222222"), 6842, 'Test 65');
test(numberOfCombinations("1234123412341234123412341234123412341234"), 7113, 'Test 66');
test(numberOfCombinations("999111999111999111999111999111"), 987, 'Test 67');
test(numberOfCombinations("2333233323332333233323332333233323332333233323332333"), 43205, 'Test 68');
test(numberOfCombinations("100100100100100100100100100100100100100100100100100"), 297, 'Test 69');
test(numberOfCombinations("999999999999999999999999999999999999999999999999"), 147273, 'Test 70');
test(numberOfCombinations("1234567891011121314151617181920"), 2406, 'Test 71');
test(numberOfCombinations("987654321098765432109876543210"), 326, 'Test 72');
test(numberOfCombinations("1231231231231231231231231231231"), 1751, 'Test 73');
test(numberOfCombinations("101010101010101010101010101010101010101010101010101"), 1958, 'Test 74');
test(numberOfCombinations("999990000099999000009999900000"), 107, 'Test 75');
test(numberOfCombinations("999000999000999000999000999000"), 98, 'Test 76');
test(numberOfCombinations("99999999988888888877777777666666665555555544444444333333332222222211111111"), 299850, 'Test 77');
test(numberOfCombinations("11223344556677889900"), 616, 'Test 78');
test(numberOfCombinations("1234567898765432109876543210987654321"), 5367, 'Test 79');
test(numberOfCombinations("0123456789012345678901234567890"), 0, 'Test 80');
test(numberOfCombinations("10101010101010101010101010101010"), 231, 'Test 81');
test(numberOfCombinations("1111111111111111111122222222222222222"), 21637, 'Test 82');
test(numberOfCombinations("1010101010101010101010101010102"), 176, 'Test 83');
test(numberOfCombinations("22222222222222222222222222222222222222222222222"), 124754, 'Test 84');
test(numberOfCombinations("1231231231231231231231231231231231231231231231231231231230"), 85398, 'Test 85');
test(numberOfCombinations("12343211234567898765432109876543210"), 2572, 'Test 86');
test(numberOfCombinations("123412341234123412341234123412"), 1471, 'Test 87');
test(numberOfCombinations("12345432101234543210"), 199, 'Test 88');
test(numberOfCombinations("0000000000000000000000000000001"), 0, 'Test 89');
test(numberOfCombinations("123456789876543212345678987654321"), 3452, 'Test 90');
test(numberOfCombinations("100100100100100100100100100100"), 42, 'Test 91');
test(numberOfCombinations("00000000000000000000"), 0, 'Test 92');
test(numberOfCombinations("10000000000000000000000000000000000000000000000"), 1, 'Test 93');
test(numberOfCombinations("555555555555555555555555555555"), 5604, 'Test 94');
test(numberOfCombinations("9999999999999999999999999999999999999999999999"), 105558, 'Test 95');
test(numberOfCombinations("303030303030303030303030303030"), 176, 'Test 96');
test(numberOfCombinations("1112131415161718192021222324252627282930"), 12048, 'Test 97');
test(numberOfCombinations("1212121212121212121212121212121"), 2059, 'Test 98');
test(numberOfCombinations("123412341234123412341234123412341234123412341234123412341"), 69419, 'Test 99');
test(numberOfCombinations("1213141516171819202122232425262728293031323334353637383940"), 97025, 'Test 100');
test(numberOfCombinations("0000000000000000000000000000000"), 0, 'Test 101');
test(numberOfCombinations("1010101010101010101010101010101010101010101010"), 1255, 'Test 102');
test(numberOfCombinations("1221221221221221221221221221221221221221221221221221"), 46460, 'Test 103');
test(numberOfCombinations("123456789101112131415"), 387, 'Test 104');
test(numberOfCombinations("1001001001001001001001001001000"), 42, 'Test 105');

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
