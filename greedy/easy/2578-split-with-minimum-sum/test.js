// Test: 2578. Split With Minimum Sum
// 98 test cases from LeetCodeDataset
// Run: node test.js

const { splitNum } = require("./solution");

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

console.log("\n2578. Split With Minimum Sum\n");

test(splitNum(10), 1, 'Test 1');
test(splitNum(687), 75, 'Test 2');
test(splitNum(4325), 59, 'Test 3');
test(splitNum(1111111111), 22222, 'Test 4');
test(splitNum(1234), 37, 'Test 5');
test(splitNum(222), 24, 'Test 6');
test(splitNum(1000000000), 1, 'Test 7');
test(splitNum(111111), 222, 'Test 8');
test(splitNum(123456789), 16047, 'Test 9');
test(splitNum(9876543210), 16047, 'Test 10');
test(splitNum(111222333), 12456, 'Test 11');
test(splitNum(1999999999), 119998, 'Test 12');
test(splitNum(1020304050), 159, 'Test 13');
test(splitNum(29392342), 4588, 'Test 14');
test(splitNum(1001), 2, 'Test 15');
test(splitNum(543321), 369, 'Test 16');
test(splitNum(5555555555), 111110, 'Test 17');
test(splitNum(999999), 1998, 'Test 18');
test(splitNum(9191919191), 23198, 'Test 19');
test(splitNum(1000000), 1, 'Test 20');
test(splitNum(1357924680), 16047, 'Test 21');
test(splitNum(314159), 284, 'Test 22');
test(splitNum(444444444444444444), 888888888, 'Test 23');
test(splitNum(2233445566778899), 46913578, 'Test 24');
test(splitNum(567894321), 16047, 'Test 25');
test(splitNum(99991111), 2398, 'Test 26');
test(splitNum(5647382910), 16047, 'Test 27');
test(splitNum(1000000009), 10, 'Test 28');
test(splitNum(100100100100), 22, 'Test 29');
test(splitNum(4444444444), 88888, 'Test 30');
test(splitNum(99887766554433221100), 246913578, 'Test 31');
test(splitNum(303030303030), 666, 'Test 32');
test(splitNum(4444455555), 89010, 'Test 33');
test(splitNum(111222333444), 234678, 'Test 34');
test(splitNum(111222333444555666777888999), 12456901345788, 'Test 35');
test(splitNum(3030303030), 366, 'Test 36');
test(splitNum(111122223333444455556666777788889999), 224466891133557798, 'Test 37');
test(splitNum(594939291909), 160998, 'Test 38');
test(splitNum(7070707070), 854, 'Test 39');
test(splitNum(12345678987654321), 135802467, 'Test 40');
test(splitNum(8642013579), 16047, 'Test 41');
test(splitNum(8642086420), 4936, 'Test 42');
test(splitNum(1298765432), 36047, 'Test 43');
test(splitNum(111222333444555), 12456900, 'Test 44');
test(splitNum(222333444555666777888999), 456901345788, 'Test 45');
test(splitNum(2222222222), 44444, 'Test 46');
test(splitNum(2020202020), 244, 'Test 47');
test(splitNum(222222222222222222222222222222222222), 444444444444444444, 'Test 48');
test(splitNum(1357913579), 27158, 'Test 49');
test(splitNum(2323232323), 44566, 'Test 50');
test(splitNum(6060606060), 732, 'Test 51');
test(splitNum(31415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679), 12223444445666667888901112333355557777779999998, 'Test 52');
test(splitNum(1000000001), 2, 'Test 53');
test(splitNum(87654321), 3825, 'Test 54');
test(splitNum(999998888877777666665555544444333332222211111), 12244566890113345577898, 'Test 55');
test(splitNum(12345678901234567890), 246913578, 'Test 56');
test(splitNum(1111222233334444), 22446688, 'Test 57');
test(splitNum(2468024680), 4936, 'Test 58');
test(splitNum(1122334455), 24690, 'Test 59');
test(splitNum(333311112222), 224466, 'Test 60');
test(splitNum(999111222333), 234738, 'Test 61');
test(splitNum(123456789012), 136047, 'Test 62');
test(splitNum(999888777666555444333222111), 12456901345788, 'Test 63');
test(splitNum(8080808080), 976, 'Test 64');
test(splitNum(321123321123), 224466, 'Test 65');
test(splitNum(98765432109876543210), 246913578, 'Test 66');
test(splitNum(1223334444), 35688, 'Test 67');
test(splitNum(1010101010), 122, 'Test 68');
test(splitNum(999988887777666655554444333322221111), 224466891133557798, 'Test 69');
test(splitNum(8051726349), 16047, 'Test 70');
test(splitNum(4040404040), 488, 'Test 71');
test(splitNum(777777777777777777), 1555555554, 'Test 72');
test(splitNum(5959595959), 111598, 'Test 73');
test(splitNum(987654321), 16047, 'Test 74');
test(splitNum(2929292929), 45298, 'Test 75');
test(splitNum(54321), 159, 'Test 76');
test(splitNum(765432109876543210), 24691357, 'Test 77');
test(splitNum(333322221111), 224466, 'Test 78');
test(splitNum(9999999999), 199998, 'Test 79');
test(splitNum(112233445566778899), 246913578, 'Test 80');
test(splitNum(1234567890123456789), 246913578, 'Test 81');
test(splitNum(5432109876), 16047, 'Test 82');
test(splitNum(1234321), 1357, 'Test 83');
test(splitNum(5678901234), 16047, 'Test 84');
test(splitNum(8070605040302010), 3825, 'Test 85');
test(splitNum(5432112345), 24690, 'Test 86');
test(splitNum(2468013579), 16047, 'Test 87');
test(splitNum(1234567890987654321), 246913578, 'Test 88');
test(splitNum(12233344445555566666677777778888888899999999), 3568911233455577779998, 'Test 89');
test(splitNum(1234567890), 16047, 'Test 90');
test(splitNum(9090909090), 1098, 'Test 91');
test(splitNum(7654321098), 16047, 'Test 92');
test(splitNum(8888888888888888888), 9777777776, 'Test 93');
test(splitNum(5050505050), 610, 'Test 94');
test(splitNum(333333333333333333), 666666666, 'Test 95');
test(splitNum(5432109876543210), 2469147, 'Test 96');
test(splitNum(98765432100), 16047, 'Test 97');
test(splitNum(90909090909090), 10998, 'Test 98');

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
