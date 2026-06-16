// Test: 2281. Sum Of Total Strength Of Wizards
// 104 test cases from LeetCodeDataset
// Run: node test.js

const { totalStrength } = require("./solution");

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

console.log("\n2281. Sum Of Total Strength Of Wizards\n");

test(totalStrength([1]), 1, 'Test 1');
test(totalStrength([1,1,1,1,1]), 35, 'Test 2');
test(totalStrength([10,9,8,7,6]), 1988, 'Test 3');
test(totalStrength([10,9,8,7,6,5,4,3,2,1]), 4576, 'Test 4');
test(totalStrength([5]), 25, 'Test 5');
test(totalStrength([1000000000, 1000000000, 1000000000]), 490, 'Test 6');
test(totalStrength([5,3,1,2,4]), 156, 'Test 7');
test(totalStrength([1,2,3,4,5]), 238, 'Test 8');
test(totalStrength([5,6,7,8,9,10]), 2688, 'Test 9');
test(totalStrength([5,4,6]), 213, 'Test 10');
test(totalStrength([1,10,1,10,1,10]), 578, 'Test 11');
test(totalStrength([5,4,3,2,1,2,3,4,5]), 731, 'Test 12');
test(totalStrength([10,9,8,7,6,5]), 2688, 'Test 13');
test(totalStrength([1,2,3,4,5,6,7,8,9,10]), 4576, 'Test 14');
test(totalStrength([1,3,1,2]), 44, 'Test 15');
test(totalStrength([1000000000,1000000000]), 196, 'Test 16');
test(totalStrength([1,3,5,7,9,7,5,3,1]), 2577, 'Test 17');
test(totalStrength([100, 50, 100, 50, 100, 50, 100, 50, 100, 50, 100, 50, 100, 50, 100]), 2600000, 'Test 18');
test(totalStrength([2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]), 21824, 'Test 19');
test(totalStrength([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2]), 2330, 'Test 20');
test(totalStrength([1, 3, 2, 5, 4, 7, 6, 9, 8, 10]), 4144, 'Test 21');
test(totalStrength([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]), 315315, 'Test 22');
test(totalStrength([10, 10, 10, 10, 10, 10, 10, 10, 10, 10]), 22000, 'Test 23');
test(totalStrength([1, 3, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 108290, 'Test 24');
test(totalStrength([5,1,5,1,5,1,5,1,5,1]), 760, 'Test 25');
test(totalStrength([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 1540, 'Test 26');
test(totalStrength([5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1]), 4820, 'Test 27');
test(totalStrength([9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,9]), 8712, 'Test 28');
test(totalStrength([1,5,2,5,3,5,4,5,5,5]), 2232, 'Test 29');
test(totalStrength([10, 1, 20, 2, 30, 3, 40, 4, 50, 5]), 13042, 'Test 30');
test(totalStrength([100,90,80,70,60,50,40,30,20,10]), 457600, 'Test 31');
test(totalStrength([1000000000, 999999999, 888888888, 777777777, 666666666, 555555555, 444444444, 333333333, 222222222, 111111111]), 370373883, 'Test 32');
test(totalStrength([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 109802, 'Test 33');
test(totalStrength([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29]), 98736, 'Test 34');
test(totalStrength([1, 2, 3, 4, 5, 6, 7, 8, 9]), 2871, 'Test 35');
test(totalStrength([1,2,3,4,5,6,7,8,9]), 2871, 'Test 36');
test(totalStrength([1, 10, 1, 10, 1, 10, 1, 10, 1, 10]), 1660, 'Test 37');
test(totalStrength([10, 20, 30, 40, 50]), 23800, 'Test 38');
test(totalStrength([1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 38768, 'Test 39');
test(totalStrength([1000000000, 1000000000, 1000000000, 1000000000]), 980, 'Test 40');
test(totalStrength([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 4576, 'Test 41');
test(totalStrength([1000000000,999999999,888888888,777777777,666666666,555555555,444444444,333333333,222222222,111111111]), 370373883, 'Test 42');
test(totalStrength([5, 3, 8, 6, 2, 7, 4, 9, 1]), 1914, 'Test 43');
test(totalStrength([5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4]), 14312, 'Test 44');
test(totalStrength([3,1,4,1,5,9,2,6,5,3,5,9]), 2684, 'Test 45');
test(totalStrength([1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5]), 2439, 'Test 46');
test(totalStrength([1,2,1,3,1,4,1,5,1,6,1,7,1,8,1,9,1,10]), 4200, 'Test 47');
test(totalStrength([20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 109802, 'Test 48');
test(totalStrength([2,1,3,4,2,1,3,4,2,1]), 638, 'Test 49');
test(totalStrength([1,1,1,1,1,1,1,1,1]), 165, 'Test 50');
test(totalStrength([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]), 268328687, 'Test 51');
test(totalStrength([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 457600, 'Test 52');
test(totalStrength([10,9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,9,10]), 13552, 'Test 53');
test(totalStrength([2, 1, 3, 4, 1, 2, 3, 1, 2, 3, 4, 1, 2, 3, 1, 2, 3, 4, 1, 2]), 3672, 'Test 54');
test(totalStrength([3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2]), 3193, 'Test 55');
test(totalStrength([5,3,8,6,2,7,4,1,9]), 1590, 'Test 56');
test(totalStrength([10,20,30,40,50,60,70,80,90,100,90,80,70,60,50,40,30,20,10]), 2767600, 'Test 57');
test(totalStrength([100, 1, 200, 2, 300, 3, 400, 4, 500, 5]), 619372, 'Test 58');
test(totalStrength([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]), 30778, 'Test 59');
test(totalStrength([3,1,4,1,5,9,2,6,5,3,5,9,7,9,3,2,3,8,4,6,2,6,4,3,3,8,3,2,7,9,5,0,2,8,8,4,1,9,7,1,6,9,3,9,9,3,7,5,1,0,5,8,2,0,9,7,4,9,4,4,5,9,2,3,0,7,8,1,6,4,0,6,2,8,6,2,0,8,9,9,8,6,2,8,0,3,4,8,2,5,3,4,2,1]), 64317, 'Test 60');
test(totalStrength([5, 1, 4, 2, 3, 6, 7, 8, 9, 10]), 3448, 'Test 61');
test(totalStrength([2,1,2,1,2,1,2,1,2]), 260, 'Test 62');
test(totalStrength([35, 30, 25, 20, 15, 10, 5, 10, 15, 20, 25, 30, 35]), 72275, 'Test 63');
test(totalStrength([1000000000, 999999999, 999999998, 999999997, 999999996]), 3178, 'Test 64');
test(totalStrength([1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000]), 268328687, 'Test 65');
test(totalStrength([1000000000, 1000000000, 1000000000, 1000000000, 1000000000]), 1715, 'Test 66');
test(totalStrength([1000000000,1000000000,1000000000,1000000000]), 980, 'Test 67');
test(totalStrength([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]), 1414, 'Test 68');
test(totalStrength([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10]), 2767600, 'Test 69');
test(totalStrength([10, 15, 10, 20, 15, 25, 20, 30, 25, 35]), 61475, 'Test 70');
test(totalStrength([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,300,310,320,330,340,350,360,370,380,390,400]), 301120400, 'Test 71');
test(totalStrength([10,20,30,40,50,60,70,80,90,100]), 457600, 'Test 72');
test(totalStrength([1,2,3,4,5,4,3,2,1]), 1013, 'Test 73');
test(totalStrength([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 1540, 'Test 74');
test(totalStrength([1,10,2,9,3,8,4,7,5,6]), 3150, 'Test 75');
test(totalStrength([10, 20, 30, 20, 10, 10, 20, 30, 20, 10]), 46200, 'Test 76');
test(totalStrength([9, 8, 7, 6, 5, 4, 3, 2, 1]), 2871, 'Test 77');
test(totalStrength([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 4576, 'Test 78');
test(totalStrength([3, 1, 2, 5, 4]), 186, 'Test 79');
test(totalStrength([5,1,3,2,4,6,8,7,9]), 2155, 'Test 80');
test(totalStrength([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 220, 'Test 81');
test(totalStrength([1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000]), 10780, 'Test 82');
test(totalStrength([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 2876356, 'Test 83');
test(totalStrength([1,1000000000,1,1000000000,1,1000000000]), 0, 'Test 84');
test(totalStrength([1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1]), 3676, 'Test 85');
test(totalStrength([100, 1, 200, 2, 300, 3, 400, 4, 500]), 596592, 'Test 86');
test(totalStrength([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 109802, 'Test 87');
test(totalStrength([50, 20, 30, 10, 40, 60, 70, 5, 80, 90]), 115850, 'Test 88');
test(totalStrength([1,1,1,1,1,1,1,1,1,1]), 220, 'Test 89');
test(totalStrength([10,10,9,9,8,8,7,7,6,6,5,5,4,4,3,3,2,2,1,1]), 30778, 'Test 90');
test(totalStrength([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 28764, 'Test 91');
test(totalStrength([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]), 926, 'Test 92');
test(totalStrength([15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 28764, 'Test 93');
test(totalStrength([5, 4, 3, 2, 1, 1, 2, 3, 4, 5]), 826, 'Test 94');
test(totalStrength([1,2,3,1,2,3,1,2,3]), 369, 'Test 95');
test(totalStrength([1,2,1,2,1,2,1,2,1,2]), 340, 'Test 96');
test(totalStrength([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 5, 6, 7, 8, 9, 10]), 3083588, 'Test 97');
test(totalStrength([9,8,7,6,5,4,3,2,1]), 2871, 'Test 98');
test(totalStrength([5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 5500, 'Test 99');
test(totalStrength([1,3,2,4,1,5,2,6,1,7,2,8,1,9,2,10]), 3648, 'Test 100');
test(totalStrength([3, 3, 3, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3]), 1864, 'Test 101');
test(totalStrength([1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3]), 639, 'Test 102');
test(totalStrength([1, 1, 1, 1, 1, 1, 1, 1, 1]), 165, 'Test 103');
test(totalStrength([3,3,3,3,3,3,3,3,3,3]), 1980, 'Test 104');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

