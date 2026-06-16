// Test: 3041. Maximize Consecutive Elements In An Array After Modification
// 144 test cases from LeetCodeDataset
// Run: node test.js

const { maxSelectedElements } = require("./solution");

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

console.log("\n3041. Maximize Consecutive Elements In An Array After Modification\n");

test(maxSelectedElements([1,1000000]), 1, 'Test 1');
test(maxSelectedElements([2,2,2,3,3,3,4,4,4,5,5,5]), 5, 'Test 2');
test(maxSelectedElements([10,9,8,7,6,5,4,3,2,1]), 10, 'Test 3');
test(maxSelectedElements([1,3,5,7,9]), 2, 'Test 4');
test(maxSelectedElements([1]), 1, 'Test 5');
test(maxSelectedElements([1000000,999999,999998,999997,999996]), 5, 'Test 6');
test(maxSelectedElements([1000000, 999999, 999998, 1, 2]), 3, 'Test 7');
test(maxSelectedElements([1,1,2,2,3,3,4,4,5,5]), 6, 'Test 8');
test(maxSelectedElements([5,5,5,5,5]), 2, 'Test 9');
test(maxSelectedElements([1,3,5,7,9,11,13,15,17,19]), 2, 'Test 10');
test(maxSelectedElements([5,4,3,2,1,1,2,3,4,5]), 6, 'Test 11');
test(maxSelectedElements([1,2,3,4,5]), 5, 'Test 12');
test(maxSelectedElements([10,9,8,7,6]), 5, 'Test 13');
test(maxSelectedElements([1,4,7,10]), 1, 'Test 14');
test(maxSelectedElements([1,2,3,5,6,7,8,9,10]), 9, 'Test 15');
test(maxSelectedElements([1,3,5,4,7,9,8,11,13,12]), 6, 'Test 16');
test(maxSelectedElements([1,2,2,3,4,4,5]), 6, 'Test 17');
test(maxSelectedElements([1,1,1,1,1]), 2, 'Test 18');
test(maxSelectedElements([1,2,2,3,4,5,5,6]), 7, 'Test 19');
test(maxSelectedElements([1000000, 999999, 999998, 999997, 999996]), 5, 'Test 20');
test(maxSelectedElements([1,3,2,4,5,6,7,8,9,10]), 10, 'Test 21');
test(maxSelectedElements([2,1,5,1,1]), 3, 'Test 22');
test(maxSelectedElements([5,5,5,5,5,5,5,5,5,5]), 2, 'Test 23');
test(maxSelectedElements([1,2,2,3,3,3,4,4,5]), 6, 'Test 24');
test(maxSelectedElements([1,2,4,6,8,10,12,14,16,18]), 3, 'Test 25');
test(maxSelectedElements([1000000]), 1, 'Test 26');
test(maxSelectedElements([3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41]), 2, 'Test 27');
test(maxSelectedElements([1, 2, 2, 2, 2, 3, 4, 5, 5, 5, 6, 7, 8, 9, 9, 9, 10, 11, 12, 12, 12, 12, 13, 14, 15, 16, 16, 16, 17, 18, 19, 20, 20, 20, 20, 21, 22, 23, 24, 25, 25, 25, 25, 26, 27, 28, 29, 30]), 31, 'Test 28');
test(maxSelectedElements([1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418]), 4, 'Test 29');
test(maxSelectedElements([1,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40]), 3, 'Test 30');
test(maxSelectedElements([1, 2, 3, 6, 7, 8, 10, 11, 12, 15, 16, 17, 20, 21, 22, 23, 24, 25, 26]), 7, 'Test 31');
test(maxSelectedElements([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]), 1, 'Test 32');
test(maxSelectedElements([1000000,1000000,1000000,1000000,1000000,1000000,1000000,1000000,1000000,1000000]), 2, 'Test 33');
test(maxSelectedElements([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31]), 2, 'Test 34');
test(maxSelectedElements([3,3,3,3,3,3,3,3,3,3]), 2, 'Test 35');
test(maxSelectedElements([5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), 26, 'Test 36');
test(maxSelectedElements([1,2,3,4,5,6,7,8,9,10]), 10, 'Test 37');
test(maxSelectedElements([1,1000000,2,999999,3,999998,4,999997,5,999996,6,999995,7,999994,8,999993,9,999992,10,999991]), 10, 'Test 38');
test(maxSelectedElements([100,101,102,99,98,97,96,95,94,93,92,91,90]), 13, 'Test 39');
test(maxSelectedElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]), 100, 'Test 40');
test(maxSelectedElements([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10,11,11,11,12,12,12,13,13,13,14,14,14]), 15, 'Test 41');
test(maxSelectedElements([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30]), 2, 'Test 42');
test(maxSelectedElements([1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5]), 6, 'Test 43');
test(maxSelectedElements([100000, 99999, 99998, 1, 2, 3, 4, 5, 6, 7, 8, 9]), 9, 'Test 44');
test(maxSelectedElements([1000000, 1000000, 1000000, 999999, 999999, 999999, 999998, 999998, 999998, 999997, 999997, 999997]), 5, 'Test 45');
test(maxSelectedElements([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7]), 8, 'Test 46');
test(maxSelectedElements([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 2, 'Test 47');
test(maxSelectedElements([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29]), 2, 'Test 48');
test(maxSelectedElements([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59]), 2, 'Test 49');
test(maxSelectedElements([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 2, 'Test 50');
test(maxSelectedElements([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39]), 2, 'Test 51');
test(maxSelectedElements([1,10,11,12,20,21,22,30,31,32,40,41,42,50,51,52,60,61,62,70,71,72,80,81,82,90,91,92]), 3, 'Test 52');
test(maxSelectedElements([100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81]), 20, 'Test 53');
test(maxSelectedElements([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), 30, 'Test 54');
test(maxSelectedElements([2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60]), 2, 'Test 55');
test(maxSelectedElements([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59]), 2, 'Test 56');
test(maxSelectedElements([1,1,2,2,2,3,3,4,4,4,5,5,6,6,6,7,7,8,8,9,9,10,10]), 11, 'Test 57');
test(maxSelectedElements([2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1]), 3, 'Test 58');
test(maxSelectedElements([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10]), 11, 'Test 59');
test(maxSelectedElements([10,10,11,12,13,14,15,16,17,18,19,20]), 12, 'Test 60');
test(maxSelectedElements([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49]), 2, 'Test 61');
test(maxSelectedElements([1,2,2,3,3,3,4,4,4,4,5,5,5,5,5,6,6,6,6,6,6,7,7,7,7,7,7,7]), 8, 'Test 62');
test(maxSelectedElements([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 15, 'Test 63');
test(maxSelectedElements([1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 23, 24, 26, 27, 29, 30, 32, 33, 35, 36, 38, 39, 41, 42, 44, 45, 47, 48, 50, 51, 53, 54, 56, 57, 59, 60, 62, 63, 65, 66, 68, 69, 71, 72, 74, 75, 77, 78, 80, 81, 83, 84, 86, 87, 89, 90]), 5, 'Test 64');
test(maxSelectedElements([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]), 40, 'Test 65');
test(maxSelectedElements([1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 23, 24, 26, 27, 29]), 5, 'Test 66');
test(maxSelectedElements([3,1,2,4,6,5,7,9,8,10,12,11,13,15,14,16,18,17,19,20]), 20, 'Test 67');
test(maxSelectedElements([5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9, 10, 10, 10, 11, 11, 11]), 8, 'Test 68');
test(maxSelectedElements([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]), 22, 'Test 69');
test(maxSelectedElements([1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4]), 5, 'Test 70');
test(maxSelectedElements([1, 2, 4, 5, 7, 8, 10, 11, 13, 14, 16, 17, 19, 20, 22, 23]), 4, 'Test 71');
test(maxSelectedElements([1,2,2,3,3,4,4,5,5,5,6,6,7,7,8,8,9,9,10,10]), 11, 'Test 72');
test(maxSelectedElements([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10]), 11, 'Test 73');
test(maxSelectedElements([2,1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37]), 4, 'Test 74');
test(maxSelectedElements([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 2, 'Test 75');
test(maxSelectedElements([1,1,2,3,3,3,4,4,5,5,5,5,6,6,6,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,10]), 11, 'Test 76');
test(maxSelectedElements([5,5,5,5,5,6,6,6,6,7,7,7,7]), 4, 'Test 77');
test(maxSelectedElements([100, 200, 101, 201, 102, 202, 103, 203, 104, 204, 105, 205]), 6, 'Test 78');
test(maxSelectedElements([1,2,3,4,5,6,7,8,9,10,12,13,14,15,17,18,19,20,22,23,24,25]), 14, 'Test 79');
test(maxSelectedElements([1000000, 999999, 999998, 999997, 999996, 999995, 999994, 999993, 999992, 999991]), 10, 'Test 80');
test(maxSelectedElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40]), 40, 'Test 81');
test(maxSelectedElements([50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31]), 20, 'Test 82');
test(maxSelectedElements([1,2,3,3,4,4,4,5,5,5,5,6,6,6,6,6,7,7,7,7,7,7,8,8,8,8,8,8,8]), 9, 'Test 83');
test(maxSelectedElements([1, 10, 19, 28, 37, 46, 55, 64, 73, 82, 91, 100, 109, 118, 127, 136, 145, 154, 163, 172, 181, 190, 199]), 1, 'Test 84');
test(maxSelectedElements([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 20, 'Test 85');
test(maxSelectedElements([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 20, 'Test 86');
test(maxSelectedElements([1,2,3,4,5,6,7,8,9,10,12,14,16,18,20,22,24,26,28,30]), 11, 'Test 87');
test(maxSelectedElements([1, 2, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37]), 4, 'Test 88');
test(maxSelectedElements([1,2,3,4,5,6,7,8,9,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60]), 11, 'Test 89');
test(maxSelectedElements([1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10]), 11, 'Test 90');
test(maxSelectedElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30]), 11, 'Test 91');
test(maxSelectedElements([3,6,9,12,15,18,21,24,27,30,33,36,39,42,45,48,51,54,57,60]), 1, 'Test 92');
test(maxSelectedElements([1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9]), 10, 'Test 93');
test(maxSelectedElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]), 30, 'Test 94');
test(maxSelectedElements([1, 2, 2, 3, 4, 5, 5, 6, 7, 8, 8, 9, 10, 10, 11, 12, 12, 13, 14, 14]), 15, 'Test 95');
test(maxSelectedElements([10, 2, 10, 10, 2, 3, 4, 5, 6, 7, 8, 9]), 10, 'Test 96');
test(maxSelectedElements([1, 2, 1, 3, 2, 4, 3, 5, 4, 6, 5, 7, 6, 8, 7, 9, 8, 10, 9, 11, 10, 12, 11, 13, 12, 14, 13, 15, 14, 16]), 17, 'Test 97');
test(maxSelectedElements([1,3,6,10,15,21,28,36,45,55]), 2, 'Test 98');
test(maxSelectedElements([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 10, 'Test 99');
test(maxSelectedElements([2,4,6,8,10,12,14,16,18,20,22,24,26,28,30]), 2, 'Test 100');
test(maxSelectedElements([5, 4, 3, 2, 1, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 20, 'Test 101');
test(maxSelectedElements([1000000, 1000000, 1000000, 1000000, 1000000]), 2, 'Test 102');
test(maxSelectedElements([100, 101, 102, 200, 201, 202, 300, 301, 302, 400, 401, 402, 500, 501, 502]), 3, 'Test 103');
test(maxSelectedElements([1,2,3,10,11,12,20,21,22,30,31,32,40,41,42,50,51,52,60,61,62,70,71,72,80,81,82,90,91,92,93,94,95]), 6, 'Test 104');
test(maxSelectedElements([1,1,2,3,4,5,6,7,8,9,10,10,11,12,13,14,15,16,17,18,19,20,20,21,22,23,24,25,26,27,28,29,30]), 31, 'Test 105');
test(maxSelectedElements([2, 1, 5, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]), 31, 'Test 106');
test(maxSelectedElements([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25]), 2, 'Test 107');
test(maxSelectedElements([1,2,3,4,5,6,7,8,9,10,10,11,12,13,14,15,16,17,18,19,20,20,21,22,23,24,25,26,27,28,29,30,30,31,32,33,34,35,36,37,38,39,40]), 41, 'Test 108');
test(maxSelectedElements([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9, 10, 10, 10]), 11, 'Test 109');
test(maxSelectedElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]), 21, 'Test 110');
test(maxSelectedElements([1, 10, 2, 9, 3, 8, 4, 7, 5, 6]), 10, 'Test 111');
test(maxSelectedElements([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150]), 1, 'Test 112');
test(maxSelectedElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 20, 'Test 113');
test(maxSelectedElements([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2900, 3000, 3100, 3200, 3300, 3400, 3500, 3600, 3700, 3800, 3900, 4000, 4100, 4200, 4300, 4400, 4500, 4600, 4700, 4800, 4900, 5000]), 1, 'Test 114');
test(maxSelectedElements([1,2,4,5,7,8,10,11,13,14,16,17,19,20,22,23]), 4, 'Test 115');
test(maxSelectedElements([500000,500001,500002,500003,500004,500005,500006,500007,500008,500009,500010]), 11, 'Test 116');
test(maxSelectedElements([1,2,2,3,4,5,5,5,6,7,8,9,9,10,10,10,10,11,12,13]), 14, 'Test 117');
test(maxSelectedElements([5, 1, 3, 2, 4, 6, 8, 7, 9, 10, 12, 11, 14, 13, 15, 17, 16, 18, 20, 19, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]), 30, 'Test 118');
test(maxSelectedElements([1, 3, 2, 5, 4, 7, 6, 9, 8, 11, 10, 13, 12, 15, 14, 17, 16, 19, 18, 21, 20, 23, 22, 25, 24, 27, 26, 29, 28]), 29, 'Test 119');
test(maxSelectedElements([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21]), 20, 'Test 120');
test(maxSelectedElements([5,5,5,5,5,6,6,6,6,6,7,7,7,7,7,8,8,8,8,8,9,9,9,9,9]), 6, 'Test 121');
test(maxSelectedElements([1,1,1,1,1,1,2,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,5,5,5,5,5,5,6,6,6,6,6,6,7,7,7,7,7,7,8,8,8,8,8,8]), 9, 'Test 122');
test(maxSelectedElements([1,1,1,1,1,1,2,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4]), 5, 'Test 123');
test(maxSelectedElements([1,2,3,3,3,3,3,4,4,5,5,5,6,6,6,6,6,7,8,9,10]), 11, 'Test 124');
test(maxSelectedElements([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39]), 2, 'Test 125');
test(maxSelectedElements([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200]), 1, 'Test 126');
test(maxSelectedElements([1000000,999999,999998,999997,999996,1,2,3,4,5]), 5, 'Test 127');
test(maxSelectedElements([1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 66, 78, 91, 105, 120, 136, 153, 171, 190, 210, 231, 253, 276, 300, 325, 351, 378, 406, 435, 465, 496, 528, 561, 595, 630, 666, 703, 741, 780, 820, 861, 903, 946, 990]), 2, 'Test 128');
test(maxSelectedElements([1,2,3,4,5,6,7,8,9,10,10,10,11,11,12,12,12,13,13,14,14,14,15,15,16,16,17,17,18,18,19,19,20,20]), 21, 'Test 129');
test(maxSelectedElements([1000000, 999999, 999998, 999997, 999996, 999995, 999994, 999993, 999992, 999991, 999990, 999989, 999988, 999987, 999986, 999985, 999984, 999983, 999982, 999981]), 20, 'Test 130');
test(maxSelectedElements([1, 3, 2, 4, 6, 5, 7, 8, 10, 9, 11, 12, 14, 13, 15, 16, 18, 17, 19, 20]), 20, 'Test 131');
test(maxSelectedElements([1,1,1,1,1,1,1,1,1,1]), 2, 'Test 132');
test(maxSelectedElements([1,2,3,5,6,7,9,10,11,13,14,15,17,18,19,21,22,23]), 6, 'Test 133');
test(maxSelectedElements([1000000,999999,999998,999997,999996,999995,999994,999993,999992,999991]), 10, 'Test 134');
test(maxSelectedElements([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 1, 'Test 135');
test(maxSelectedElements([5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 2, 'Test 136');
test(maxSelectedElements([5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 16, 'Test 137');
test(maxSelectedElements([1,1,1,2,3,4,5,5,5,6,7,8,8,8,9,10,11,11,11,12,13,14,14,14,15,16,17,17,17]), 18, 'Test 138');
test(maxSelectedElements([5,3,1,4,2,6,8,7,9,10,12,11]), 12, 'Test 139');
test(maxSelectedElements([10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]), 20, 'Test 140');
test(maxSelectedElements([1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38]), 3, 'Test 141');
test(maxSelectedElements([10, 21, 32, 43, 54, 65, 76, 87, 98, 109]), 1, 'Test 142');
test(maxSelectedElements([50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80]), 31, 'Test 143');
test(maxSelectedElements([1, 2, 4, 5, 7, 8, 10, 11, 13, 14, 16, 17, 19, 20]), 4, 'Test 144');

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
