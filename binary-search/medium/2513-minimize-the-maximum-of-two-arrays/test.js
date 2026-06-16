// Test: 2513. Minimize The Maximum Of Two Arrays
// 108 test cases from LeetCodeDataset
// Run: node test.js

const { minimizeSet } = require("./solution");

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

console.log("\n2513. Minimize The Maximum Of Two Arrays\n");

test(minimizeSet(2, 7, 1, 3), 4, 'Test 1');
test(minimizeSet(2, 4, 8, 2), 15, 'Test 2');
test(minimizeSet(100, 101, 100000000, 100000000), 200019803, 'Test 3');
test(minimizeSet(100, 200, 100000000, 100000000), 201005025, 'Test 4');
test(minimizeSet(5, 10, 5, 5), 11, 'Test 5');
test(minimizeSet(7, 11, 10, 10), 20, 'Test 6');
test(minimizeSet(7, 13, 10, 10), 20, 'Test 7');
test(minimizeSet(3, 5, 2, 1), 3, 'Test 8');
test(minimizeSet(10, 15, 5, 6), 11, 'Test 9');
test(minimizeSet(7, 11, 3, 7), 10, 'Test 10');
test(minimizeSet(13, 17, 50000000, 50000000), 100454545, 'Test 11');
test(minimizeSet(89, 97, 60000000, 40000000), 100011584, 'Test 12');
test(minimizeSet(13, 17, 20, 25), 45, 'Test 13');
test(minimizeSet(23, 29, 50000000, 30000000), 80120120, 'Test 14');
test(minimizeSet(13, 19, 100000000, 100000000), 200813008, 'Test 15');
test(minimizeSet(2, 3, 999999999, 1), 1999999997, 'Test 16');
test(minimizeSet(100000, 10000, 50000000, 50000000), 100001000, 'Test 17');
test(minimizeSet(100000, 200000, 1000000, 500000), 1500007, 'Test 18');
test(minimizeSet(30, 42, 50000000, 50000000), 100478468, 'Test 19');
test(minimizeSet(13, 17, 10000000, 20000000), 30136363, 'Test 20');
test(minimizeSet(45, 18, 200000000, 300000000), 505617977, 'Test 21');
test(minimizeSet(5, 7, 1, 999999999), 1166666665, 'Test 22');
test(minimizeSet(13, 17, 250000000, 250000000), 502272727, 'Test 23');
test(minimizeSet(61, 71, 70000000, 30000000), 100023094, 'Test 24');
test(minimizeSet(12, 18, 1000, 1000), 2057, 'Test 25');
test(minimizeSet(2, 5, 500000000, 499999999), 1111111109, 'Test 26');
test(minimizeSet(4, 6, 5, 8), 14, 'Test 27');
test(minimizeSet(4, 6, 300000000, 200000000), 545454545, 'Test 28');
test(minimizeSet(10000, 20000, 50000000, 50000000), 100005000, 'Test 29');
test(minimizeSet(8, 12, 40000000, 60000000), 104347826, 'Test 30');
test(minimizeSet(99999, 99998, 100000, 100000), 200000, 'Test 31');
test(minimizeSet(50000, 100000, 10000000, 10000000), 20000200, 'Test 32');
test(minimizeSet(29, 41, 60000000, 40000000), 100084175, 'Test 33');
test(minimizeSet(15, 20, 75000000, 25000000), 101694915, 'Test 34');
test(minimizeSet(19, 23, 150000000, 150000000), 300688073, 'Test 35');
test(minimizeSet(3, 5, 50000000, 50000000), 107142857, 'Test 36');
test(minimizeSet(50000, 75000, 60000000, 40000000), 100000666, 'Test 37');
test(minimizeSet(20, 30, 500000000, 400000000), 915254237, 'Test 38');
test(minimizeSet(6, 8, 50000000, 50000000), 104347826, 'Test 39');
test(minimizeSet(100000, 50000, 50000000, 40000000), 90000900, 'Test 40');
test(minimizeSet(10, 15, 75000000, 25000000), 103448275, 'Test 41');
test(minimizeSet(100000, 100000, 450000000, 450000000), 900009000, 'Test 42');
test(minimizeSet(7, 14, 900000000, 900000000), 1938461538, 'Test 43');
test(minimizeSet(23, 37, 50000000, 49999999), 100117646, 'Test 44');
test(minimizeSet(99999, 100001, 50000000, 50000000), 100000000, 'Test 45');
test(minimizeSet(23, 37, 45000000, 55000000), 100117647, 'Test 46');
test(minimizeSet(11, 13, 100, 150), 251, 'Test 47');
test(minimizeSet(3, 5, 100000000, 100000000), 214285714, 'Test 48');
test(minimizeSet(1000, 500, 40000000, 60000000), 100100100, 'Test 49');
test(minimizeSet(4, 6, 100000000, 99999999), 218181817, 'Test 50');
test(minimizeSet(5, 7, 50000000, 50000000), 102941176, 'Test 51');
test(minimizeSet(17, 31, 99999999, 1), 106249998, 'Test 52');
test(minimizeSet(99998, 99999, 100000, 100000), 200000, 'Test 53');
test(minimizeSet(10, 15, 100000000, 1), 111111111, 'Test 54');
test(minimizeSet(4, 6, 100000000, 100000000), 218181818, 'Test 55');
test(minimizeSet(6, 8, 75000000, 25000000), 104347826, 'Test 56');
test(minimizeSet(77, 42, 500, 500), 1002, 'Test 57');
test(minimizeSet(11, 13, 20000000, 15000000), 35246478, 'Test 58');
test(minimizeSet(7, 14, 25000000, 25000000), 53846153, 'Test 59');
test(minimizeSet(15, 25, 80000000, 70000000), 152027027, 'Test 60');
test(minimizeSet(11, 13, 99999999, 99999999), 201408448, 'Test 61');
test(minimizeSet(3, 5, 100, 200), 321, 'Test 62');
test(minimizeSet(25, 40, 100, 150), 251, 'Test 63');
test(minimizeSet(100001, 100003, 100000000, 100000000), 200000000, 'Test 64');
test(minimizeSet(6, 9, 15, 20), 37, 'Test 65');
test(minimizeSet(6, 9, 50000000, 50000000), 105882352, 'Test 66');
test(minimizeSet(23, 31, 200000000, 300000000), 500702247, 'Test 67');
test(minimizeSet(5, 6, 1000000, 500000), 1551724, 'Test 68');
test(minimizeSet(67, 89, 400000000, 400000000), 800134183, 'Test 69');
test(minimizeSet(11, 13, 200000000, 1), 219999999, 'Test 70');
test(minimizeSet(37, 41, 9876543, 1234567), 11118439, 'Test 71');
test(minimizeSet(7, 13, 300000000, 300000000), 606666666, 'Test 72');
test(minimizeSet(5, 7, 99999999, 1), 124999998, 'Test 73');
test(minimizeSet(97, 101, 1000000, 500000), 1500153, 'Test 74');
test(minimizeSet(10000, 100000, 90000000, 10000000), 100001000, 'Test 75');
test(minimizeSet(13, 17, 5, 10), 15, 'Test 76');
test(minimizeSet(10, 15, 100000000, 200000000), 310344827, 'Test 77');
test(minimizeSet(100000, 200000, 50000000, 50000000), 100000500, 'Test 78');
test(minimizeSet(77, 42, 33000000, 66000000), 99214750, 'Test 79');
test(minimizeSet(6, 8, 99999999, 1), 119999998, 'Test 80');
test(minimizeSet(5, 10, 50, 50), 111, 'Test 81');
test(minimizeSet(101, 103, 1000000, 1000000), 2000192, 'Test 82');
test(minimizeSet(23, 31, 50000000, 30000000), 80112359, 'Test 83');
test(minimizeSet(11, 22, 100000000, 1), 109999999, 'Test 84');
test(minimizeSet(11, 22, 300000000, 300000000), 628571428, 'Test 85');
test(minimizeSet(23, 29, 100000, 100000), 200300, 'Test 86');
test(minimizeSet(3, 5, 100000000, 50000000), 160714285, 'Test 87');
test(minimizeSet(5, 3, 100, 150), 267, 'Test 88');
test(minimizeSet(7, 11, 10000000, 10000000), 20263157, 'Test 89');
test(minimizeSet(4, 6, 250000000, 250000000), 545454545, 'Test 90');
test(minimizeSet(8, 9, 2000000, 3000000), 5070422, 'Test 91');
test(minimizeSet(100000, 99999, 100000000, 100000000), 200000000, 'Test 92');
test(minimizeSet(10, 25, 50000000, 100000000), 153061224, 'Test 93');
test(minimizeSet(5, 15, 100000000, 50000000), 160714285, 'Test 94');
test(minimizeSet(5, 10, 50000000, 49999999), 111111109, 'Test 95');
test(minimizeSet(100000, 200000, 100000000, 100000000), 200001000, 'Test 96');
test(minimizeSet(100000, 200000, 100000000, 50000000), 150000750, 'Test 97');
test(minimizeSet(2, 3, 100000000, 100000000), 239999999, 'Test 98');
test(minimizeSet(2, 4, 99999999, 1), 199999997, 'Test 99');
test(minimizeSet(17, 29, 150000000, 150000000), 300609756, 'Test 100');
test(minimizeSet(9, 12, 250000000, 250000000), 514285714, 'Test 101');
test(minimizeSet(13, 17, 300000000, 200000000), 502272727, 'Test 102');
test(minimizeSet(3, 5, 500000000, 400000000), 964285714, 'Test 103');
test(minimizeSet(13, 17, 100000000, 100000000), 200909090, 'Test 104');
test(minimizeSet(71, 73, 10000000, 10000000), 20003859, 'Test 105');
test(minimizeSet(99, 101, 200000000, 300000000), 500050010, 'Test 106');
test(minimizeSet(3, 6, 100, 200), 359, 'Test 107');
test(minimizeSet(10, 15, 80000000, 20000000), 103448275, 'Test 108');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

