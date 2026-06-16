// Test: 3445. Maximum Difference Between Even And Odd Frequency Ii
// 137 test cases from LeetCodeDataset
// Run: node test.js

const { maxDifference } = require("./solution");

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

console.log("\n3445. Maximum Difference Between Even And Odd Frequency Ii\n");

test(maxDifference("2222222", 3), -Infinity, 'Test 1');
test(maxDifference("1010101010", 4), 1, 'Test 2');
test(maxDifference("000111", 2), 1, 'Test 3');
test(maxDifference("101010101", 4), 1, 'Test 4');
test(maxDifference("444333222111", 6), 1, 'Test 5');
test(maxDifference("4444444", 3), -Infinity, 'Test 6');
test(maxDifference("12340", 2), -Infinity, 'Test 7');
test(maxDifference("111222333", 6), 1, 'Test 8');
test(maxDifference("110", 3), -1, 'Test 9');
test(maxDifference("1122211", 3), 1, 'Test 10');
test(maxDifference("0123401234", 5), -1, 'Test 11');
test(maxDifference("000000000000", 5), -Infinity, 'Test 12');
test(maxDifference("111223344", 5), 1, 'Test 13');
test(maxDifference("44444444", 4), -Infinity, 'Test 14');
test(maxDifference("12233", 4), -1, 'Test 15');
test(maxDifference("444444444", 2), -Infinity, 'Test 16');
test(maxDifference("111111111111", 7), -Infinity, 'Test 17');
test(maxDifference("00000", 2), -Infinity, 'Test 18');
test(maxDifference("4444444", 5), -Infinity, 'Test 19');
test(maxDifference("2222222", 5), -Infinity, 'Test 20');
test(maxDifference("012340123", 3), -1, 'Test 21');
test(maxDifference("43210", 3), -Infinity, 'Test 22');
test(maxDifference("111222333", 5), 1, 'Test 23');
test(maxDifference("101010101010", 5), 1, 'Test 24');
test(maxDifference("000111000", 5), 1, 'Test 25');
test(maxDifference("432101234", 4), -1, 'Test 26');
test(maxDifference("33333322222111111", 7), 3, 'Test 27');
test(maxDifference("3333333", 7), -Infinity, 'Test 28');
test(maxDifference("44444444444444444444444444444444444444444444", 25), -Infinity, 'Test 29');
test(maxDifference("101010101010101010101010101010101010101010101010", 20), 1, 'Test 30');
test(maxDifference("012340123401234", 11), 1, 'Test 31');
test(maxDifference("111222333444555", 9), 1, 'Test 32');
test(maxDifference("012340123401234", 8), 1, 'Test 33');
test(maxDifference("44332211004433221100", 12), 1, 'Test 34');
test(maxDifference("111222333444000", 7), 1, 'Test 35');
test(maxDifference("222222111111000000333333", 12), 3, 'Test 36');
test(maxDifference("444000111222", 7), 1, 'Test 37');
test(maxDifference("0000000000000000000000000000", 15), -Infinity, 'Test 38');
test(maxDifference("11222333444", 7), 1, 'Test 39');
test(maxDifference("12343211234321", 5), 1, 'Test 40');
test(maxDifference("012340123401234", 5), 1, 'Test 41');
test(maxDifference("432104321043210", 5), 1, 'Test 42');
test(maxDifference("000111222333444000111222333444", 15), 1, 'Test 43');
test(maxDifference("11111111111111111111111111111111111111111111", 15), -Infinity, 'Test 44');
test(maxDifference("4333222211110000", 7), 1, 'Test 45');
test(maxDifference("000000000000", 7), -Infinity, 'Test 46');
test(maxDifference("2222111122221111", 8), 3, 'Test 47');
test(maxDifference("5432101234543210123", 13), 1, 'Test 48');
test(maxDifference("32104321043210432104321043210", 11), 1, 'Test 49');
test(maxDifference("121212121212121", 9), 1, 'Test 50');
test(maxDifference("4040404040404040", 9), 1, 'Test 51');
test(maxDifference("11223344555544332211", 9), 1, 'Test 52');
test(maxDifference("4321043210432104321043210", 7), 1, 'Test 53');
test(maxDifference("3333333333333333333333333333333333333333333333333", 25), -Infinity, 'Test 54');
test(maxDifference("1010101010101010101010101010", 10), 1, 'Test 55');
test(maxDifference("333322221111000044443333222211110000", 16), 3, 'Test 56');
test(maxDifference("010101010101010101", 5), 1, 'Test 57');
test(maxDifference("00001111222233334444", 10), 1, 'Test 58');
test(maxDifference("44444444444444444444", 20), -Infinity, 'Test 59');
test(maxDifference("1001001001001", 9), 3, 'Test 60');
test(maxDifference("000000000000000", 10), -Infinity, 'Test 61');
test(maxDifference("123123123123123123123", 12), 1, 'Test 62');
test(maxDifference("44444444444444444444444444", 20), -Infinity, 'Test 63');
test(maxDifference("123412341234123412341234", 12), 1, 'Test 64');
test(maxDifference("5555544444333332222211111", 15), 3, 'Test 65');
test(maxDifference("0011223344", 6), -1, 'Test 66');
test(maxDifference("111222333444", 9), 1, 'Test 67');
test(maxDifference("123401234012340", 8), 1, 'Test 68');
test(maxDifference("000111222333444", 8), 1, 'Test 69');
test(maxDifference("12221111222211112222", 10), 3, 'Test 70');
test(maxDifference("111111111111111", 6), -Infinity, 'Test 71');
test(maxDifference("123212321232123", 7), 3, 'Test 72');
test(maxDifference("01234012340123401234", 10), 1, 'Test 73');
test(maxDifference("314213421342134213", 6), 1, 'Test 74');
test(maxDifference("404040404040404040", 15), 1, 'Test 75');
test(maxDifference("123451234512345", 9), 1, 'Test 76');
test(maxDifference("1223333321", 7), 3, 'Test 77');
test(maxDifference("12321232123212321", 10), 3, 'Test 78');
test(maxDifference("123412341234", 6), 1, 'Test 79');
test(maxDifference("444333222111000444333222111000444", 12), 3, 'Test 80');
test(maxDifference("0011223344", 7), -1, 'Test 81');
test(maxDifference("12233322333223332233322333", 12), 7, 'Test 82');
test(maxDifference("0000000011111111222222223333333344444444", 18), 5, 'Test 83');
test(maxDifference("00112233445566778899", 15), -1, 'Test 84');
test(maxDifference("44443333222211110000", 12), 1, 'Test 85');
test(maxDifference("422411422411", 6), 1, 'Test 86');
test(maxDifference("1221221221221221221221221221221", 13), 9, 'Test 87');
test(maxDifference("432104321043210", 7), 1, 'Test 88');
test(maxDifference("222111000333222111000333222111000", 15), 3, 'Test 89');
test(maxDifference("1111100000222223333344444", 15), 3, 'Test 90');
test(maxDifference("11223344001122334400", 10), 1, 'Test 91');
test(maxDifference("333444333444333444333444333444333444", 18), 3, 'Test 92');
test(maxDifference("432104321043210", 8), 1, 'Test 93');
test(maxDifference("012340123401234", 10), 1, 'Test 94');
test(maxDifference("2222111100004444", 10), 1, 'Test 95');
test(maxDifference("101010101010101", 8), 1, 'Test 96');
test(maxDifference("4321043210432104321043210", 11), 1, 'Test 97');
test(maxDifference("123423143214321", 5), 1, 'Test 98');
test(maxDifference("122122122122122122122122122122122122122122122122", 10), 15, 'Test 99');
test(maxDifference("444444333333222222111111000000", 15), 3, 'Test 100');
test(maxDifference("11111111111111111111", 15), -Infinity, 'Test 101');
test(maxDifference("1112222233333334444444444", 15), 7, 'Test 102');
test(maxDifference("121212121212121212121212121", 13), 1, 'Test 103');
test(maxDifference("001122001122001122", 10), 1, 'Test 104');
test(maxDifference("12341234123412341234", 14), 1, 'Test 105');
test(maxDifference("123123123123123123", 8), 1, 'Test 106');
test(maxDifference("44332211000044332211", 12), 1, 'Test 107');
test(maxDifference("11111222223333344444", 10), 3, 'Test 108');
test(maxDifference("1234012340", 5), -1, 'Test 109');
test(maxDifference("123451234512345", 15), -Infinity, 'Test 110');
test(maxDifference("1111111111111111111111111111", 15), -Infinity, 'Test 111');
test(maxDifference("0000111100001111", 8), 3, 'Test 112');
test(maxDifference("2222222111111", 7), 5, 'Test 113');
test(maxDifference("11112222333344440000", 10), 1, 'Test 114');
test(maxDifference("000111222333444", 9), 1, 'Test 115');
test(maxDifference("000111222333444000111", 15), 1, 'Test 116');
test(maxDifference("00110011001100110011001100110011", 14), 1, 'Test 117');
test(maxDifference("012340123401234", 7), 1, 'Test 118');
test(maxDifference("012012012012", 5), 1, 'Test 119');
test(maxDifference("10101010101010101010101010101010", 15), 1, 'Test 120');
test(maxDifference("122331223312233", 5), 3, 'Test 121');
test(maxDifference("333332222221111111", 12), 5, 'Test 122');
test(maxDifference("1122334455112233", 12), 1, 'Test 123');
test(maxDifference("3333222211110000", 8), 1, 'Test 124');
test(maxDifference("000111222333444", 7), 1, 'Test 125');
test(maxDifference("333333333333", 10), -Infinity, 'Test 126');
test(maxDifference("432101234321012", 6), 1, 'Test 127');
test(maxDifference("123123123123", 6), 1, 'Test 128');
test(maxDifference("012340123401234012340123401234012340123401234", 20), 1, 'Test 129');
test(maxDifference("222222222111111111000000000", 12), 7, 'Test 130');
test(maxDifference("122112211221122", 5), 1, 'Test 131');
test(maxDifference("01010101010101010101010", 20), 1, 'Test 132');
test(maxDifference("420240240240240", 8), 1, 'Test 133');
test(maxDifference("1234023412340234", 7), 1, 'Test 134');
test(maxDifference("122221111222211", 9), 3, 'Test 135');
test(maxDifference("1112222211133344444444", 18), 3, 'Test 136');
test(maxDifference("211221122112211221122112211", 13), 1, 'Test 137');

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
