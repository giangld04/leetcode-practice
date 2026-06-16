// Test: 2048. Next Greater Numerically Balanced Number
// 95 test cases from LeetCodeDataset
// Run: node test.js

const { nextBeautifulNumber } = require("./solution");

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

console.log("\n2048. Next Greater Numerically Balanced Number\n");

test(nextBeautifulNumber(0), 1, 'Test 1');
test(nextBeautifulNumber(987654321), Execution timed out, 'Test 2');
test(nextBeautifulNumber(122333), 123233, 'Test 3');
test(nextBeautifulNumber(3000), 3133, 'Test 4');
test(nextBeautifulNumber(1222), 1333, 'Test 5');
test(nextBeautifulNumber(55555), 122333, 'Test 6');
test(nextBeautifulNumber(1234), 1333, 'Test 7');
test(nextBeautifulNumber(112233), 122333, 'Test 8');
test(nextBeautifulNumber(122133), 122333, 'Test 9');
test(nextBeautifulNumber(1234567), 1242444, 'Test 10');
test(nextBeautifulNumber(111222333), Execution timed out, 'Test 11');
test(nextBeautifulNumber(999999), 1224444, 'Test 12');
test(nextBeautifulNumber(123456), 132233, 'Test 13');
test(nextBeautifulNumber(1), 22, 'Test 14');
test(nextBeautifulNumber(1000), 1333, 'Test 15');
test(nextBeautifulNumber(1224444), 1242444, 'Test 16');
test(nextBeautifulNumber(987654), 1224444, 'Test 17');
test(nextBeautifulNumber(122), 212, 'Test 18');
test(nextBeautifulNumber(122333444), 122666666, 'Test 19');
test(nextBeautifulNumber(1122233344455555), Execution timed out, 'Test 20');
test(nextBeautifulNumber(2233445566), 2233535555, 'Test 21');
test(nextBeautifulNumber(11223334444), Execution timed out, 'Test 22');
test(nextBeautifulNumber(122444), 123233, 'Test 23');
test(nextBeautifulNumber(12233445566778899), Execution timed out, 'Test 24');
test(nextBeautifulNumber(3333333), 3334444, 'Test 25');
test(nextBeautifulNumber(1112223334444555555), Execution timed out, 'Test 26');
test(nextBeautifulNumber(666666), 1224444, 'Test 27');
test(nextBeautifulNumber(11222233), 12255555, 'Test 28');
test(nextBeautifulNumber(444444), 515555, 'Test 29');
test(nextBeautifulNumber(1223334444), 1223343444, 'Test 30');
test(nextBeautifulNumber(221133444555555), Execution timed out, 'Test 31');
test(nextBeautifulNumber(999888777666555444333222111), Execution timed out, 'Test 32');
test(nextBeautifulNumber(888777666555444333222111), Execution timed out, 'Test 33');
test(nextBeautifulNumber(111122223333444455556666777788889999), Execution timed out, 'Test 34');
test(nextBeautifulNumber(100111222), Execution timed out, 'Test 35');
test(nextBeautifulNumber(2222222), 2241444, 'Test 36');
test(nextBeautifulNumber(122333444555666777888999), Execution timed out, 'Test 37');
test(nextBeautifulNumber(11223344555), Execution timed out, 'Test 38');
test(nextBeautifulNumber(999999111222333), Execution timed out, 'Test 39');
test(nextBeautifulNumber(44445555), 51225555, 'Test 40');
test(nextBeautifulNumber(6665554443332211), 6665554444155666, 'Test 41');
test(nextBeautifulNumber(1233333), 1242444, 'Test 42');
test(nextBeautifulNumber(122111333), 122666666, 'Test 43');
test(nextBeautifulNumber(1111222233334444), Execution timed out, 'Test 44');
test(nextBeautifulNumber(22333444), 22515555, 'Test 45');
test(nextBeautifulNumber(12223334444), Execution timed out, 'Test 46');
test(nextBeautifulNumber(123321), 123323, 'Test 47');
test(nextBeautifulNumber(5555554443332211), Execution timed out, 'Test 48');
test(nextBeautifulNumber(98765), 122333, 'Test 49');
test(nextBeautifulNumber(665544332211), 665551556666, 'Test 50');
test(nextBeautifulNumber(400000), 422444, 'Test 51');
test(nextBeautifulNumber(88888888), Execution timed out, 'Test 52');
test(nextBeautifulNumber(123456789), 126266666, 'Test 53');
test(nextBeautifulNumber(122333444555666777888), Execution timed out, 'Test 54');
test(nextBeautifulNumber(10111222333), Execution timed out, 'Test 55');
test(nextBeautifulNumber(1122333444455555), Execution timed out, 'Test 56');
test(nextBeautifulNumber(1223334), 1224444, 'Test 57');
test(nextBeautifulNumber(5555555), 6166666, 'Test 58');
test(nextBeautifulNumber(999999999), Execution timed out, 'Test 59');
test(nextBeautifulNumber(111222333444555666777), Execution timed out, 'Test 60');
test(nextBeautifulNumber(223334444555), 223336166666, 'Test 61');
test(nextBeautifulNumber(111), 122, 'Test 62');
test(nextBeautifulNumber(999999999999), Execution timed out, 'Test 63');
test(nextBeautifulNumber(7777777), 12255555, 'Test 64');
test(nextBeautifulNumber(1112233), 1224444, 'Test 65');
test(nextBeautifulNumber(44444441112223333), Execution timed out, 'Test 66');
test(nextBeautifulNumber(122333444555555), 122333445445555, 'Test 67');
test(nextBeautifulNumber(2233444), 2241444, 'Test 68');
test(nextBeautifulNumber(1222333), 1224444, 'Test 69');
test(nextBeautifulNumber(11122233344455566677888), Execution timed out, 'Test 70');
test(nextBeautifulNumber(2121212121), 2123334444, 'Test 71');
test(nextBeautifulNumber(112233444555666777888999), Execution timed out, 'Test 72');
test(nextBeautifulNumber(1112223334445555), Execution timed out, 'Test 73');
test(nextBeautifulNumber(122444455555), 122444545555, 'Test 74');
test(nextBeautifulNumber(12233344), 12255555, 'Test 75');
test(nextBeautifulNumber(122222333333), Execution timed out, 'Test 76');
test(nextBeautifulNumber(112233445566), Execution timed out, 'Test 77');
test(nextBeautifulNumber(1122334455), Execution timed out, 'Test 78');
test(nextBeautifulNumber(666666555444333222111), 666666555444333224155, 'Test 79');
test(nextBeautifulNumber(1000000), 1224444, 'Test 80');
test(nextBeautifulNumber(111222333444555666777888999), Execution timed out, 'Test 81');
test(nextBeautifulNumber(22222222), 22515555, 'Test 82');
test(nextBeautifulNumber(777777666555444333222111), Execution timed out, 'Test 83');
test(nextBeautifulNumber(77777665544332211), Execution timed out, 'Test 84');
test(nextBeautifulNumber(122333444555666), 122333445445555, 'Test 85');
test(nextBeautifulNumber(1221221), 1224444, 'Test 86');
test(nextBeautifulNumber(5555544332211), 5555544333144, 'Test 87');
test(nextBeautifulNumber(1233322), 1242444, 'Test 88');
test(nextBeautifulNumber(4444), 14444, 'Test 89');
test(nextBeautifulNumber(122334444), 122666666, 'Test 90');
test(nextBeautifulNumber(12344321111111111111111111), Execution timed out, 'Test 91');
test(nextBeautifulNumber(222333444555), Execution timed out, 'Test 92');
test(nextBeautifulNumber(1222233333), 1223334444, 'Test 93');
test(nextBeautifulNumber(1333331), 1422444, 'Test 94');
test(nextBeautifulNumber(666666777777), Execution timed out, 'Test 95');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

