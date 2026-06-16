// Test: 2012. Sum Of Beauty In The Array
// 136 test cases from LeetCodeDataset
// Run: node test.js

const { sumOfBeauties } = require("./solution");

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

console.log("\n2012. Sum Of Beauty In The Array\n");

test(sumOfBeauties([1,100,8,6,90,101]), 1, 'Test 1');
test(sumOfBeauties([9,7,5,3,1]), 0, 'Test 2');
test(sumOfBeauties([10,9,8,7,6,5,4,3,2,1]), 0, 'Test 3');
test(sumOfBeauties([9,8,7,6,5,4,3,2,1]), 0, 'Test 4');
test(sumOfBeauties([5,3,4,2,1]), 0, 'Test 5');
test(sumOfBeauties([1,3,5,7,9]), 6, 'Test 6');
test(sumOfBeauties([1,2,3,4,5,6,7,8,9,10]), 16, 'Test 7');
test(sumOfBeauties([1,100000,2,99999,3,99998,4,99997,5,99996]), 0, 'Test 8');
test(sumOfBeauties([2,4,6,4]), 1, 'Test 9');
test(sumOfBeauties([1,100,101,102,99]), 2, 'Test 10');
test(sumOfBeauties([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 0, 'Test 11');
test(sumOfBeauties([5,1,4,3,6,7]), 2, 'Test 12');
test(sumOfBeauties([5,5,5,5,5]), 0, 'Test 13');
test(sumOfBeauties([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 16, 'Test 14');
test(sumOfBeauties([100000, 99999, 100001, 99998, 100002]), 0, 'Test 15');
test(sumOfBeauties([1,2,3,4,5,6,7,8,9]), 14, 'Test 16');
test(sumOfBeauties([3,2,1]), 0, 'Test 17');
test(sumOfBeauties([1,5,2,5,3,5,4,5]), 0, 'Test 18');
test(sumOfBeauties([100000,99999,99998,99997,99996,99995,99994,99993,99992,99991]), 0, 'Test 19');
test(sumOfBeauties([1,3,2,3,5,2,6,2]), 1, 'Test 20');
test(sumOfBeauties([1, 10, 2, 9, 3, 8, 4, 7, 5, 6]), 0, 'Test 21');
test(sumOfBeauties([1,2,3]), 2, 'Test 22');
test(sumOfBeauties([1,3,2,5,4,6]), 0, 'Test 23');
test(sumOfBeauties([1,6,4,3,5,7,8]), 3, 'Test 24');
test(sumOfBeauties([1,5,2,4,3,6]), 0, 'Test 25');
test(sumOfBeauties([1,5,3,7,9,11,13,2,14]), 3, 'Test 26');
test(sumOfBeauties([10, 20, 15, 25, 20, 30, 25, 35, 30, 40, 35, 45, 40, 50, 45]), 0, 'Test 27');
test(sumOfBeauties([1, 2, 3, 2, 3, 4, 3, 4, 5, 4, 5, 6, 5, 6, 7, 6, 7, 8, 7, 8, 9, 8, 9, 10]), 8, 'Test 28');
test(sumOfBeauties([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 95, 94, 93, 92, 91]), 16, 'Test 29');
test(sumOfBeauties([5, 8, 7, 6, 5, 4, 3, 2, 1, 10, 11, 12, 13, 14, 15]), 10, 'Test 30');
test(sumOfBeauties([20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 0, 'Test 31');
test(sumOfBeauties([1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10]), 0, 'Test 32');
test(sumOfBeauties([10, 20, 30, 25, 24, 35, 40, 39, 45, 50]), 6, 'Test 33');
test(sumOfBeauties([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 9, 7, 9, 3]), 2, 'Test 34');
test(sumOfBeauties([1, 100, 2, 99, 3, 98, 4, 97, 5, 96, 6, 95, 7, 94, 8, 93, 9, 92, 10, 91]), 0, 'Test 35');
test(sumOfBeauties([15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 0, 'Test 36');
test(sumOfBeauties([3, 1, 4, 2, 5, 8, 7, 10, 9, 12, 11]), 2, 'Test 37');
test(sumOfBeauties([1, 5, 3, 4, 2, 8, 6, 7, 9, 11, 10]), 3, 'Test 38');
test(sumOfBeauties([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 9, 7, 9, 3, 2, 3, 8, 4, 6]), 3, 'Test 39');
test(sumOfBeauties([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 24, 'Test 40');
test(sumOfBeauties([5, 3, 4, 2, 6, 1, 7, 9, 8, 10]), 2, 'Test 41');
test(sumOfBeauties([1, 3, 2, 4, 3, 5, 4, 6, 5, 7, 6, 8]), 0, 'Test 42');
test(sumOfBeauties([10, 20, 15, 25, 30, 5, 35, 40, 2, 45]), 2, 'Test 43');
test(sumOfBeauties([1, 3, 5, 7, 9, 8, 7, 6, 5, 4, 3, 2, 1, 12, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 4, 'Test 44');
test(sumOfBeauties([1, 3, 2, 4, 6, 5, 7, 9, 8, 10]), 4, 'Test 45');
test(sumOfBeauties([10, 20, 11, 30, 12, 40, 13, 50, 14, 60, 15]), 0, 'Test 46');
test(sumOfBeauties([1, 2, 3, 100, 2, 3, 4, 5, 6, 7]), 6, 'Test 47');
test(sumOfBeauties([1, 3, 2, 5, 4, 7, 6, 9, 8, 11, 10, 13, 12, 15, 14, 17, 16, 19, 18, 21, 20]), 0, 'Test 48');
test(sumOfBeauties([1, 10, 3, 5, 8, 12, 7, 6, 9, 11, 15, 14, 13, 16, 18, 17, 20, 19, 21, 22]), 8, 'Test 49');
test(sumOfBeauties([90, 100, 110, 120, 115, 130, 140, 150, 145, 160, 170, 180, 175, 190, 200]), 14, 'Test 50');
test(sumOfBeauties([1, 3, 5, 4, 6, 7, 2, 8, 9, 10]), 6, 'Test 51');
test(sumOfBeauties([1, 2, 3, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 22, 'Test 52');
test(sumOfBeauties([2, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]), 46, 'Test 53');
test(sumOfBeauties([1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009]), 16, 'Test 54');
test(sumOfBeauties([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), 8, 'Test 55');
test(sumOfBeauties([100000, 99999, 99998, 99997, 99996, 99995, 99994, 99993, 99992, 99991]), 0, 'Test 56');
test(sumOfBeauties([1, 3, 2, 4, 6, 5, 8, 7, 10, 9, 12, 11]), 2, 'Test 57');
test(sumOfBeauties([1, 20, 3, 40, 5, 60, 7, 80, 9, 100]), 0, 'Test 58');
test(sumOfBeauties([5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 11, 12, 13, 14, 15]), 15, 'Test 59');
test(sumOfBeauties([1, 2, 3, 100, 4, 5, 6, 7, 8, 9]), 8, 'Test 60');
test(sumOfBeauties([100, 99, 98, 97, 96, 95, 94, 93, 92, 91]), 0, 'Test 61');
test(sumOfBeauties([10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15]), 16, 'Test 62');
test(sumOfBeauties([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49]), 46, 'Test 63');
test(sumOfBeauties([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1]), 0, 'Test 64');
test(sumOfBeauties([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 95, 85, 75, 65, 55, 45, 35, 25, 15, 5]), 8, 'Test 65');
test(sumOfBeauties([1, 2, 3, 4, 3, 5, 4, 6, 5, 7, 6, 8, 7, 9, 8, 10]), 3, 'Test 66');
test(sumOfBeauties([5,1,4,3,6,8,2,9,7,10]), 1, 'Test 67');
test(sumOfBeauties([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 0, 'Test 68');
test(sumOfBeauties([1, 3, 2, 5, 4, 7, 6, 9, 8, 11, 10, 13, 12, 15, 14, 17, 16, 19, 18, 21, 20, 23, 22, 25, 24]), 0, 'Test 69');
test(sumOfBeauties([1, 20, 3, 15, 4, 10, 5, 25, 6]), 0, 'Test 70');
test(sumOfBeauties([1, 3, 5, 2, 4, 6, 8, 7, 9, 11]), 6, 'Test 71');
test(sumOfBeauties([5, 1, 4, 3, 6, 2, 8, 7, 10, 9]), 0, 'Test 72');
test(sumOfBeauties([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 28, 'Test 73');
test(sumOfBeauties([5, 1, 3, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29]), 23, 'Test 74');
test(sumOfBeauties([25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 0, 'Test 75');
test(sumOfBeauties([10, 20, 30, 25, 40, 35, 50, 45, 60, 55]), 2, 'Test 76');
test(sumOfBeauties([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]), 56, 'Test 77');
test(sumOfBeauties([10, 20, 30, 25, 40, 35, 50, 45, 60]), 2, 'Test 78');
test(sumOfBeauties([1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 25, 'Test 79');
test(sumOfBeauties([9, 8, 7, 6, 5, 4, 3, 2, 1, 10, 11, 12]), 4, 'Test 80');
test(sumOfBeauties([10, 20, 30, 25, 35, 40, 45, 50, 39, 41]), 6, 'Test 81');
test(sumOfBeauties([1, 100, 50, 200, 150, 250, 200, 300, 250, 350, 300, 400, 350, 450, 400, 500, 450, 550, 500, 600]), 0, 'Test 82');
test(sumOfBeauties([10, 20, 30, 15, 25, 35, 10, 20, 30, 40, 50, 60, 70, 80, 90]), 14, 'Test 83');
test(sumOfBeauties([20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 21]), 0, 'Test 84');
test(sumOfBeauties([100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 0, 'Test 85');
test(sumOfBeauties([1, 3, 2, 4, 3, 5, 4, 6, 5, 7, 6, 8, 7, 9, 8]), 0, 'Test 86');
test(sumOfBeauties([30, 20, 10, 25, 15, 5, 35, 25, 15, 40, 30, 20, 50, 40, 30]), 0, 'Test 87');
test(sumOfBeauties([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 26, 'Test 88');
test(sumOfBeauties([5,3,4,2,1,6,7,8]), 4, 'Test 89');
test(sumOfBeauties([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 1, 20]), 17, 'Test 90');
test(sumOfBeauties([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25]), 22, 'Test 91');
test(sumOfBeauties([5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]), 14, 'Test 92');
test(sumOfBeauties([100000, 1, 2, 3, 4, 5, 6, 7, 8, 99999]), 7, 'Test 93');
test(sumOfBeauties([1, 2, 3, 4, 5, 10, 9, 8, 7, 6, 11]), 8, 'Test 94');
test(sumOfBeauties([1, 2, 5, 3, 6, 4, 7, 8, 10, 9]), 6, 'Test 95');
test(sumOfBeauties([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 13, 12, 11, 10]), 21, 'Test 96');
test(sumOfBeauties([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8]), 0, 'Test 97');
test(sumOfBeauties([5, 8, 3, 9, 4, 10, 6, 11, 7, 12]), 0, 'Test 98');
test(sumOfBeauties([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]), 1, 'Test 99');
test(sumOfBeauties([1, 1000, 2, 999, 3, 998, 4, 997, 5, 996, 6, 995, 7, 994, 8, 993, 9, 992, 10, 991]), 0, 'Test 100');
test(sumOfBeauties([100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0]), 0, 'Test 101');
test(sumOfBeauties([20, 10, 30, 5, 25, 15, 35, 40, 50, 60]), 6, 'Test 102');
test(sumOfBeauties([5, 1, 4, 2, 3, 6, 0, 8, 7, 9]), 1, 'Test 103');
test(sumOfBeauties([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 36, 'Test 104');
test(sumOfBeauties([5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 25, 'Test 105');
test(sumOfBeauties([1, 2, 3, 100, 4, 5, 6, 7, 8, 9, 10]), 9, 'Test 106');
test(sumOfBeauties([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 0, 'Test 107');
test(sumOfBeauties([100, 1, 101, 2, 102, 3, 103, 4, 104]), 0, 'Test 108');
test(sumOfBeauties([8, 7, 6, 5, 4, 3, 2, 1, 9, 10, 11, 12, 13, 14, 15]), 12, 'Test 109');
test(sumOfBeauties([3, 1, 2, 5, 4, 7, 6, 9, 8, 11, 10, 13, 12, 15, 14]), 1, 'Test 110');
test(sumOfBeauties([5, 4, 3, 2, 1, 6, 7, 8, 9, 10]), 8, 'Test 111');
test(sumOfBeauties([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 16, 'Test 112');
test(sumOfBeauties([1, 3, 5, 7, 9, 8, 7, 6, 5, 4, 3, 2, 1, 12, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 15]), 4, 'Test 113');
test(sumOfBeauties([1, 5, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]), 22, 'Test 114');
test(sumOfBeauties([100000, 1, 100000, 1, 100000, 1, 100000, 1, 100000]), 0, 'Test 115');
test(sumOfBeauties([10, 11, 9, 12, 8, 13, 7, 14, 6, 15, 5, 16, 4, 17, 3, 18, 2, 19, 1, 20]), 0, 'Test 116');
test(sumOfBeauties([5,1,4,3,6,8,2,9,7]), 1, 'Test 117');
test(sumOfBeauties([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50]), 11, 'Test 118');
test(sumOfBeauties([50, 40, 60, 50, 70, 60, 80, 70, 90, 80, 100, 90, 110, 100, 120, 110, 130, 120, 140, 130]), 0, 'Test 119');
test(sumOfBeauties([20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 22, 23, 24, 25, 26]), 8, 'Test 120');
test(sumOfBeauties([1, 5, 3, 4, 6, 2, 7, 8, 9, 10]), 7, 'Test 121');
test(sumOfBeauties([5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 1, 2, 3, 4]), 16, 'Test 122');
test(sumOfBeauties([1, 3, 2, 4, 3, 5, 4, 6, 5, 7, 6, 8, 7, 9, 8, 10, 9, 11, 10, 12]), 0, 'Test 123');
test(sumOfBeauties([10, 20, 30, 29, 28, 27, 26, 25, 24, 23]), 2, 'Test 124');
test(sumOfBeauties([1, 2, 3, 100, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 14, 'Test 125');
test(sumOfBeauties([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 5, 15, 25, 35, 45, 55, 65, 75, 85, 95]), 16, 'Test 126');
test(sumOfBeauties([1, 3, 5, 4, 7, 6, 9, 8, 11, 10, 13, 12, 15, 14, 17, 16, 19, 18, 21, 20, 23, 22, 25, 24]), 2, 'Test 127');
test(sumOfBeauties([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 10]), 21, 'Test 128');
test(sumOfBeauties([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 0, 'Test 129');
test(sumOfBeauties([1, 3, 2, 4, 6, 5, 7, 9, 8, 10, 11, 12, 13, 14, 15]), 14, 'Test 130');
test(sumOfBeauties([1, 3, 5, 7, 9, 8, 11, 10, 13, 15]), 8, 'Test 131');
test(sumOfBeauties([10, 20, 15, 25, 30, 5, 35, 40, 2, 45, 50]), 4, 'Test 132');
test(sumOfBeauties([1, 2, 100, 3, 4, 101, 5, 6, 102, 7, 8]), 4, 'Test 133');
test(sumOfBeauties([1, 3, 2, 5, 4, 7, 6, 9, 8, 11, 10, 13, 12, 15, 14, 17, 16, 19, 18, 20]), 0, 'Test 134');
test(sumOfBeauties([10, 20, 30, 25, 35, 40, 36, 45, 50, 55]), 8, 'Test 135');
test(sumOfBeauties([5, 1, 4, 3, 6, 2, 7, 8, 10, 9]), 4, 'Test 136');

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
