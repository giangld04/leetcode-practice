// Test: 2141. Maximum Running Time Of N Computers
// 119 test cases from LeetCodeDataset
// Run: node test.js

const { maxRunTime } = require("./solution");

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

console.log("\n2141. Maximum Running Time Of N Computers\n");

test(maxRunTime(5, [1,2,3,4,5]), 1, 'Test 1');
test(maxRunTime(4, [10,10,3,5]), 3, 'Test 2');
test(maxRunTime(2, [1000000000,1000000000]), 1000000000, 'Test 3');
test(maxRunTime(2, [9,4,10]), 11, 'Test 4');
test(maxRunTime(3, [10,20,30,40]), 30, 'Test 5');
test(maxRunTime(3, [5,8,5]), 5, 'Test 6');
test(maxRunTime(10, [1000000000,1000000000,1000000000,1000000000,1000000000,1000000000,1000000000,1000000000,1000000000,1000000000]), 1000000000, 'Test 7');
test(maxRunTime(5, [9,9,9,9,9,9,9,9,9,9]), 18, 'Test 8');
test(maxRunTime(4, [1,2,3,4,5]), 3, 'Test 9');
test(maxRunTime(2, [1,1,1,1]), 2, 'Test 10');
test(maxRunTime(2, [3,3,3]), 4, 'Test 11');
test(maxRunTime(1, [5]), 5, 'Test 12');
test(maxRunTime(1, [100]), 100, 'Test 13');
test(maxRunTime(1, [10]), 10, 'Test 14');
test(maxRunTime(5, [1,1,1,1,1,1,1,1,1,1]), 2, 'Test 15');
test(maxRunTime(10, [1,2,3,4,5,6,7,8,9,10]), 1, 'Test 16');
test(maxRunTime(3, [10,10,3,5]), 8, 'Test 17');
test(maxRunTime(3, [1,2,3,4,5,6]), 7, 'Test 18');
test(maxRunTime(3, [10,10,10]), 10, 'Test 19');
test(maxRunTime(5, [1,1,1,1,1000000000]), 1, 'Test 20');
test(maxRunTime(3, [2,6,4,5]), 5, 'Test 21');
test(maxRunTime(4, [5,5,5,5,5]), 6, 'Test 22');
test(maxRunTime(5, [1,2,3,4,5,6,7,8,9,10]), 11, 'Test 23');
test(maxRunTime(3, [1,2,999999999]), 1, 'Test 24');
test(maxRunTime(2, [10,20]), 10, 'Test 25');
test(maxRunTime(2, [2,3,4,5]), 7, 'Test 26');
test(maxRunTime(3, [5,5,5,5,5]), 8, 'Test 27');
test(maxRunTime(4, [8,8,8,8,8,8]), 12, 'Test 28');
test(maxRunTime(10, [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150]), 110, 'Test 29');
test(maxRunTime(5, [500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10]), 350, 'Test 30');
test(maxRunTime(10, [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 11, 'Test 31');
test(maxRunTime(50000, [2] * 100000), Error: Solution.maxRunTime[] missing 1 required positional argument: 'batteries', 'Test 32');
test(maxRunTime(4, [1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000]), 2500000000, 'Test 33');
test(maxRunTime(5, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 11, 'Test 34');
test(maxRunTime(15, [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2900, 3000]), 3100, 'Test 35');
test(maxRunTime(5, [10,20,30,40,50,60]), 30, 'Test 36');
test(maxRunTime(5000, [10] * 1000000), Error: Solution.maxRunTime[] missing 1 required positional argument: 'batteries', 'Test 37');
test(maxRunTime(5, [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200]), 420, 'Test 38');
test(maxRunTime(4, [1,2,3,4,5,6,7,8,9,10]), 13, 'Test 39');
test(maxRunTime(10, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1000000000]), 1, 'Test 40');
test(maxRunTime(4, [100, 100, 100, 1]), 1, 'Test 41');
test(maxRunTime(5, [1000000, 2000000, 3000000, 4000000, 5000000]), 1000000, 'Test 42');
test(maxRunTime(3, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]), 70, 'Test 43');
test(maxRunTime(3, [1000000000, 1000000000, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 13, 'Test 44');
test(maxRunTime(15, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 100]), 3, 'Test 45');
test(maxRunTime(2, [1, 1000000000]), 1, 'Test 46');
test(maxRunTime(5, [10, 20, 30, 40, 50]), 10, 'Test 47');
test(maxRunTime(10, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]), 10, 'Test 48');
test(maxRunTime(10, [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 1]), 50, 'Test 49');
test(maxRunTime(3, [1000000000, 1000000000, 1000000000, 1]), 1000000000, 'Test 50');
test(maxRunTime(6, [100, 100, 100, 100, 100, 100, 1]), 100, 'Test 51');
test(maxRunTime(7, [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500]), 1714, 'Test 52');
test(maxRunTime(4, [100, 100, 100, 100, 1, 1, 1, 1]), 101, 'Test 53');
test(maxRunTime(5, [10,10,10,10,10,10,10,10,10,1]), 18, 'Test 54');
test(maxRunTime(5, [9, 9, 9, 9, 9, 9, 9, 9, 9, 9]), 18, 'Test 55');
test(maxRunTime(1, [1000000000]), 1000000000, 'Test 56');
test(maxRunTime(4, [2,3,6,6,6,6,6,6,6,6,6,6]), 16, 'Test 57');
test(maxRunTime(2, [1000000000, 1]), 1, 'Test 58');
test(maxRunTime(4, [1, 1, 1, 1, 1000000000, 1000000000, 1000000000, 1000000000]), 1000000001, 'Test 59');
test(maxRunTime(4, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 52, 'Test 60');
test(maxRunTime(8, [8,7,6,5,4,3,2,1,1,1,1,1,1,1,1]), 4, 'Test 61');
test(maxRunTime(7, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]), 46, 'Test 62');
test(maxRunTime(7, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 2, 'Test 63');
test(maxRunTime(100000, [1] * 100000), Error: Solution.maxRunTime[] missing 1 required positional argument: 'batteries', 'Test 64');
test(maxRunTime(5, [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 110, 'Test 65');
test(maxRunTime(10, [10,9,8,7,6,5,4,3,2,1]), 1, 'Test 66');
test(maxRunTime(5, [1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000]), 2000, 'Test 67');
test(maxRunTime(10, [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200]), 500, 'Test 68');
test(maxRunTime(3, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]), 108, 'Test 69');
test(maxRunTime(6, [100, 100, 100, 100, 100, 100, 1, 1, 1, 1]), 100, 'Test 70');
test(maxRunTime(8, [8, 16, 32, 64, 128, 256, 512, 1024, 2048]), 24, 'Test 71');
test(maxRunTime(5, [999999999, 999999999, 999999999, 999999999, 999999999, 999999999, 999999999, 999999999, 999999999, 999999999]), 1999999998, 'Test 72');
test(maxRunTime(4, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 13, 'Test 73');
test(maxRunTime(1000, [1] * 1000000), Error: Solution.maxRunTime[] missing 1 required positional argument: 'batteries', 'Test 74');
test(maxRunTime(5, [25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25]), 125, 'Test 75');
test(maxRunTime(3, [1,2,3,4,5,6,7,8,9,10]), 18, 'Test 76');
test(maxRunTime(15, [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200]), 110, 'Test 77');
test(maxRunTime(6, [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15]), 30, 'Test 78');
test(maxRunTime(8, [50, 40, 30, 20, 10, 5, 3, 1, 2, 4, 6, 8, 7, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]), 75, 'Test 79');
test(maxRunTime(5, [100, 100, 100, 100, 100, 100, 100, 100, 100, 100]), 200, 'Test 80');
test(maxRunTime(8, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 9, 'Test 81');
test(maxRunTime(4, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]), 116, 'Test 82');
test(maxRunTime(9, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 23, 'Test 83');
test(maxRunTime(10000, [5] * 1000000), Error: Solution.maxRunTime[] missing 1 required positional argument: 'batteries', 'Test 84');
test(maxRunTime(3, [1,1000000000,1]), 1, 'Test 85');
test(maxRunTime(3, [1000, 1000, 1000, 1, 1, 1, 1, 1, 1, 1]), 1002, 'Test 86');
test(maxRunTime(7, [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50]), 85, 'Test 87');
test(maxRunTime(2, [1000000000, 1000000000]), 1000000000, 'Test 88');
test(maxRunTime(5, [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50]), 250, 'Test 89');
test(maxRunTime(3, [1000000000, 1000000000, 1000000000, 1000000000, 1]), 1333333333, 'Test 90');
test(maxRunTime(5, [1, 1, 1, 1, 1, 1000]), 1, 'Test 91');
test(maxRunTime(7, [50,40,30,20,10,5,1,1,1,1,1,1,1]), 6, 'Test 92');
test(maxRunTime(8, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 4, 'Test 93');
test(maxRunTime(5, [100,200,300,400,500,600,700,800,900,1000]), 1100, 'Test 94');
test(maxRunTime(2, [1000000000, 1000000000, 1000000000, 1000000000]), 2000000000, 'Test 95');
test(maxRunTime(3, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 18, 'Test 96');
test(maxRunTime(7, [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 70, 'Test 97');
test(maxRunTime(4, [100, 100, 100, 100, 1]), 100, 'Test 98');
test(maxRunTime(6, [100,100,100,100,100,100,1,1,1,1,1,1]), 101, 'Test 99');
test(maxRunTime(10, [1000000000, 999999999, 999999998, 999999997, 999999996, 999999995, 999999994, 999999993, 999999992, 999999991]), 999999991, 'Test 100');
test(maxRunTime(3, [9, 9, 9, 9, 9, 9, 9, 9, 9, 9]), 30, 'Test 101');
test(maxRunTime(10, [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 10, 'Test 102');
test(maxRunTime(4, [1000000000, 1000000000, 1000000000, 1000000000, 1]), 1000000000, 'Test 103');
test(maxRunTime(5, [10, 20, 30, 40, 50, 60]), 30, 'Test 104');
test(maxRunTime(6, [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 3, 'Test 105');
test(maxRunTime(3, [10, 20, 30, 40, 50]), 50, 'Test 106');
test(maxRunTime(10, [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]), 100, 'Test 107');
test(maxRunTime(7, [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 14, 'Test 108');
test(maxRunTime(6, [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 90, 'Test 109');
test(maxRunTime(7, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 4, 'Test 110');
test(maxRunTime(4, [10, 20, 30, 40, 50]), 30, 'Test 111');
test(maxRunTime(2, [999999999, 1]), 1, 'Test 112');
test(maxRunTime(6, [1000, 500, 250, 125, 62, 31, 15, 7, 3, 1]), 57, 'Test 113');
test(maxRunTime(7, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]), 28, 'Test 114');
test(maxRunTime(6, [1000, 2000, 3000, 4000, 5000, 6000]), 1000, 'Test 115');
test(maxRunTime(10, [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500]), 1100, 'Test 116');
test(maxRunTime(3, [1000000000, 1000000000, 1000000000, 1000000000]), 1333333333, 'Test 117');
test(maxRunTime(5, [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]), 1100, 'Test 118');
test(maxRunTime(20, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 2, 'Test 119');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

