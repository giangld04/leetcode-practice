// Test: 3346. Maximum Frequency Of An Element After Performing Operations I
// 99 test cases from LeetCodeDataset
// Run: node test.js

const { maxFrequency } = require("./solution");

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

console.log("\n3346. Maximum Frequency Of An Element After Performing Operations I\n");

test(maxFrequency([1,100000], 100000, 1), 2, 'Test 1');
test(maxFrequency([1,1,1,1,1], 10, 0), 5, 'Test 2');
test(maxFrequency([1,100,1000,10000], 5000, 3), 3, 'Test 3');
test(maxFrequency([1,4,5], 1, 2), 2, 'Test 4');
test(maxFrequency([1,2,2,3,3,3,4], 1, 4), 6, 'Test 5');
test(maxFrequency([10,20,30,40,50], 15, 5), 4, 'Test 6');
test(maxFrequency([1,1,1,1], 10, 4), 4, 'Test 7');
test(maxFrequency([1,2,3,4,5], 2, 5), 5, 'Test 8');
test(maxFrequency([1,2,3,4,5], 2, 3), 4, 'Test 9');
test(maxFrequency([10,10,10], 0, 3), 3, 'Test 10');
test(maxFrequency([10,10,10,10], 0, 3), 4, 'Test 11');
test(maxFrequency([10,10,10,10], 3, 4), 4, 'Test 12');
test(maxFrequency([5,11,20,20], 5, 1), 2, 'Test 13');
test(maxFrequency([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 10, 50), 20, 'Test 14');
test(maxFrequency([1,2,3,4,5,6,7,8,9,10], 5, 15), 10, 'Test 15');
test(maxFrequency([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], 2, 15), 10, 'Test 16');
test(maxFrequency([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500], 50, 15), 2, 'Test 17');
test(maxFrequency([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1, 9), 3, 'Test 18');
test(maxFrequency([50, 50, 50, 50, 50, 50, 50, 50, 50, 50], 25, 50), 10, 'Test 19');
test(maxFrequency([5,5,5,5,5,5,5,5,5,5], 10, 10), 10, 'Test 20');
test(maxFrequency([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9, 10, 10, 10], 2, 25), 15, 'Test 21');
test(maxFrequency([50, 100, 150, 200, 250, 300, 350, 400, 450, 500], 50, 50), 3, 'Test 22');
test(maxFrequency([10, 10, 10, 10, 20, 20, 20, 20, 30, 30, 30, 30], 10, 15), 12, 'Test 23');
test(maxFrequency([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5, 10), 10, 'Test 24');
test(maxFrequency([100,100,100,100,100,100,100], 100, 7), 7, 'Test 25');
test(maxFrequency([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1, 100), 20, 'Test 26');
test(maxFrequency([1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5], 2, 50), 20, 'Test 27');
test(maxFrequency([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1, 19), 20, 'Test 28');
test(maxFrequency([100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000], 0, 10), 10, 'Test 29');
test(maxFrequency([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 1, 20), 10, 'Test 30');
test(maxFrequency([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 100, 20), 3, 'Test 31');
test(maxFrequency([1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3], 3, 15), 12, 'Test 32');
test(maxFrequency([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 1, 10), 2, 'Test 33');
test(maxFrequency([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2, 10), 5, 'Test 34');
test(maxFrequency([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 30, 30, 31, 31, 32, 32, 33, 33, 34, 34, 35, 35, 36, 36, 37, 37, 38, 38, 39, 39, 40, 40, 41, 41, 42, 42, 43, 43, 44, 44, 45, 45, 46, 46, 47, 47, 48, 48, 49, 49, 50, 50], 2, 50), 10, 'Test 35');
test(maxFrequency([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 2, 19), 5, 'Test 36');
test(maxFrequency([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 1, 15), 3, 'Test 37');
test(maxFrequency([1,100,200,300,400,500], 150, 3), 3, 'Test 38');
test(maxFrequency([1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5], 1, 20), 15, 'Test 39');
test(maxFrequency([100000, 99999, 99998, 99997, 99996, 99995, 99994, 99993, 99992, 99991], 50000, 10), 10, 'Test 40');
test(maxFrequency([1,2,2,3,3,4,4,4,5,5,5,5,6,6,6,7,7,8,8,9], 3, 20), 18, 'Test 41');
test(maxFrequency([1, 10, 100, 1000, 10000, 100000], 100000, 100), 6, 'Test 42');
test(maxFrequency([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9, 10, 10, 10], 2, 30), 15, 'Test 43');
test(maxFrequency([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 1, 15), 2, 'Test 44');
test(maxFrequency([50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50], 10, 20), 20, 'Test 45');
test(maxFrequency([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 1, 100), 3, 'Test 46');
test(maxFrequency([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 100, 15), 3, 'Test 47');
test(maxFrequency([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 8, 9), 9, 'Test 48');
test(maxFrequency([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 0, 0), 20, 'Test 49');
test(maxFrequency([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2, 15), 5, 'Test 50');
test(maxFrequency([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], 2, 10), 10, 'Test 51');
test(maxFrequency([1,1,2,2,3,3,4,4,5,5], 3, 10), 10, 'Test 52');
test(maxFrequency([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10], 1, 10), 6, 'Test 53');
test(maxFrequency([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 5, 25), 11, 'Test 54');
test(maxFrequency([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10], 2, 20), 10, 'Test 55');
test(maxFrequency([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5], 3, 25), 15, 'Test 56');
test(maxFrequency([10, 20, 30, 40, 50], 5, 5), 2, 'Test 57');
test(maxFrequency([50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50], 20, 19), 20, 'Test 58');
test(maxFrequency([100000, 90000, 80000, 70000, 60000, 50000, 40000, 30000, 20000, 10000], 5000, 15), 2, 'Test 59');
test(maxFrequency([1, 1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5], 1, 15), 12, 'Test 60');
test(maxFrequency([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 0, 20), 20, 'Test 61');
test(maxFrequency([5, 10, 15, 20, 25], 10, 5), 5, 'Test 62');
test(maxFrequency([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 5, 15), 11, 'Test 63');
test(maxFrequency([10, 10, 10, 20, 20, 20, 30, 30, 30, 40], 5, 15), 6, 'Test 64');
test(maxFrequency([10, 20, 30, 40, 50], 15, 5), 4, 'Test 65');
test(maxFrequency([1,3,5,7,9,11,13,15,17,19], 4, 10), 5, 'Test 66');
test(maxFrequency([1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5], 2, 50), 30, 'Test 67');
test(maxFrequency([50, 50, 50, 100, 100, 100, 150, 150, 150, 200, 200, 200], 50, 30), 9, 'Test 68');
test(maxFrequency([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 3, 20), 10, 'Test 69');
test(maxFrequency([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 10), 7, 'Test 70');
test(maxFrequency([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200], 50, 20), 11, 'Test 71');
test(maxFrequency([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 1, 19), 3, 'Test 72');
test(maxFrequency([2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 2, 10), 3, 'Test 73');
test(maxFrequency([3,5,7,9,11], 2, 5), 3, 'Test 74');
test(maxFrequency([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 0, 19), 20, 'Test 75');
test(maxFrequency([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 150, 5), 4, 'Test 76');
test(maxFrequency([1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000], 500, 5), 2, 'Test 77');
test(maxFrequency([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 7, 25), 15, 'Test 78');
test(maxFrequency([1, 5, 9, 13, 17, 21, 25, 29, 33, 37, 41, 45], 2, 11), 2, 'Test 79');
test(maxFrequency([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 10, 30), 20, 'Test 80');
test(maxFrequency([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 2, 10), 10, 'Test 81');
test(maxFrequency([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7], 3, 30), 21, 'Test 82');
test(maxFrequency([10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 5, 5), 10, 'Test 83');
test(maxFrequency([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 15), 7, 'Test 84');
test(maxFrequency([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 4, 20), 5, 'Test 85');
test(maxFrequency([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 0, 100), 112, 'Test 86');
test(maxFrequency([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 20, 10), 5, 'Test 87');
test(maxFrequency([10, 10, 20, 20, 30, 30, 40, 40], 10, 10), 6, 'Test 88');
test(maxFrequency([1, 3, 6, 9, 12], 3, 5), 3, 'Test 89');
test(maxFrequency([100000, 100000, 100000, 100000, 100000], 100000, 5), 5, 'Test 90');
test(maxFrequency([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 5, 25), 6, 'Test 91');
test(maxFrequency([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 0, 10), 10, 'Test 92');
test(maxFrequency([10,20,30,40,50,60,70,80,90,100], 30, 5), 6, 'Test 93');
test(maxFrequency([5, 15, 25, 35, 45, 55, 65, 75, 85, 95], 20, 20), 5, 'Test 94');
test(maxFrequency([1, 10, 100, 1000, 10000], 1000, 10), 4, 'Test 95');
test(maxFrequency([1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 10], 1, 10), 7, 'Test 96');
test(maxFrequency([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 100, 50), 3, 'Test 97');
test(maxFrequency([1, 1, 2, 2, 2, 3, 3, 4, 4, 5], 1, 5), 7, 'Test 98');
test(maxFrequency([2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 3, 30), 4, 'Test 99');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

