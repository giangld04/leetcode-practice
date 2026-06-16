// Test: 2809. Minimum Time To Make Array Sum At Most X
// 111 test cases from LeetCodeDataset
// Run: node test.js

const { minimumTime } = require("./solution");

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

console.log("\n2809. Minimum Time To Make Array Sum At Most X\n");

test(minimumTime([1,2,3], [1,2,3], 4), 3, 'Test 1');
test(minimumTime([5,3,8], [2,1,4], 15), 1, 'Test 2');
test(minimumTime([5,5,5], [1,1,1], 15), 0, 'Test 3');
test(minimumTime([10,10,10], [0,0,0], 30), 0, 'Test 4');
test(minimumTime([1,1,1], [0,0,0], 0), 3, 'Test 5');
test(minimumTime([1,2,3,4,5], [5,4,3,2,1], 25), 0, 'Test 6');
test(minimumTime([100,200,300], [10,20,30], 1000), 0, 'Test 7');
test(minimumTime([3,3,3], [1,2,3], 10), 0, 'Test 8');
test(minimumTime([1,2,3], [3,3,3], 4), -1, 'Test 9');
test(minimumTime([10,20,30], [0,0,0], 15), 2, 'Test 10');
test(minimumTime([100,200], [50,100], 1000), 0, 'Test 11');
test(minimumTime([10,20,30], [0,0,0], 10), 2, 'Test 12');
test(minimumTime([1,1,1,1], [1,1,1,1], 10), 0, 'Test 13');
test(minimumTime([1,1,1,1,1], [2,2,2,2,2], 10), 0, 'Test 14');
test(minimumTime([2,4,6], [1,1,1], 12), 0, 'Test 15');
test(minimumTime([10,20,30,40], [1,2,3,4], 100), 0, 'Test 16');
test(minimumTime([5,3,1], [2,1,3], 10), 0, 'Test 17');
test(minimumTime([7,5,3], [2,4,6], 20), 0, 'Test 18');
test(minimumTime([1,2], [3,4], 5), 0, 'Test 19');
test(minimumTime([3,2,1], [1,1,1], 5), 1, 'Test 20');
test(minimumTime([5,5,5,5,5], [5,5,5,5,5], 25), 0, 'Test 21');
test(minimumTime([1,1,1,1], [1,1,1,1], 4), 0, 'Test 22');
test(minimumTime([10,20,30,40,50], [1,2,3,4,5], 150), 0, 'Test 23');
test(minimumTime([1,1,1], [1,1,1], 1), -1, 'Test 24');
test(minimumTime([3,3,3], [1,1,1], 5), 3, 'Test 25');
test(minimumTime([999, 998, 997, 996, 995], [1, 2, 3, 4, 5], 4500), 1, 'Test 26');
test(minimumTime([1, 1, 1, 1, 1], [5, 5, 5, 5, 5], 5), 0, 'Test 27');
test(minimumTime([100, 200, 300, 400], [0, 0, 0, 0], 1000), 0, 'Test 28');
test(minimumTime([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 5), -1, 'Test 29');
test(minimumTime([10, 20, 30], [1, 2, 3], 50), 1, 'Test 30');
test(minimumTime([10, 20, 30], [0, 0, 0], 15), 2, 'Test 31');
test(minimumTime([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 5000), 1, 'Test 32');
test(minimumTime([10, 20, 30], [1, 2, 3], 60), 0, 'Test 33');
test(minimumTime([9, 9, 9, 9, 9, 9, 9, 9, 9, 9], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 50), 10, 'Test 34');
test(minimumTime([1, 1, 1, 1], [1, 1, 1, 1], 4), 0, 'Test 35');
test(minimumTime([1, 10, 100, 1000], [1000, 100, 10, 1], 2000), 0, 'Test 36');
test(minimumTime([1, 3, 5, 7, 9], [9, 7, 5, 3, 1], 20), -1, 'Test 37');
test(minimumTime([50, 100, 150, 200], [1, 2, 3, 4], 300), 2, 'Test 38');
test(minimumTime([1000, 1000, 1000], [1, 1, 1], 2500), 1, 'Test 39');
test(minimumTime([10, 10, 10, 10, 10], [5, 5, 5, 5, 5], 25), -1, 'Test 40');
test(minimumTime([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 550), 0, 'Test 41');
test(minimumTime([10, 10, 10, 10], [1, 2, 3, 4], 30), 2, 'Test 42');
test(minimumTime([5, 10, 15, 20], [1, 1, 1, 1], 15), 3, 'Test 43');
test(minimumTime([5, 15, 25, 35, 45], [1, 1, 1, 1, 1], 50), 3, 'Test 44');
test(minimumTime([999, 998, 997, 996, 995], [1, 2, 3, 4, 5], 5000), 0, 'Test 45');
test(minimumTime([1, 2, 3, 4, 5], [10, 20, 30, 40, 50], 100), 0, 'Test 46');
test(minimumTime([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 100), 0, 'Test 47');
test(minimumTime([100, 200, 300], [10, 20, 30], 1500), 0, 'Test 48');
test(minimumTime([1, 1, 1, 1, 1], [1, 1, 1, 1, 1], 5), 0, 'Test 49');
test(minimumTime([500, 500, 500], [1, 1, 1], 1000), 2, 'Test 50');
test(minimumTime([1000, 1000, 1000, 1000, 1000], [1000, 1000, 1000, 1000, 1000], 5000), 0, 'Test 51');
test(minimumTime([1, 2, 3, 4, 5], [1, 1, 1, 1, 1], 5), -1, 'Test 52');
test(minimumTime([3, 6, 9], [2, 4, 6], 20), 0, 'Test 53');
test(minimumTime([1, 1, 1, 1, 1], [9, 8, 7, 6, 5], 10), 0, 'Test 54');
test(minimumTime([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 100), -1, 'Test 55');
test(minimumTime([1, 1, 1, 1], [1, 1, 1, 1], 0), -1, 'Test 56');
test(minimumTime([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 55), 0, 'Test 57');
test(minimumTime([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 50), 0, 'Test 58');
test(minimumTime([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], [19, 17, 15, 13, 11, 9, 7, 5, 3, 1], 200), 0, 'Test 59');
test(minimumTime([1, 1, 1, 1, 1], [5, 4, 3, 2, 1], 5), 0, 'Test 60');
test(minimumTime([1000, 500, 250, 125, 62, 31], [62, 31, 15, 7, 3, 1], 2000), 0, 'Test 61');
test(minimumTime([5, 10, 15, 20, 25], [1, 2, 3, 4, 5], 100), 0, 'Test 62');
test(minimumTime([100, 200, 300], [10, 20, 30], 1000), 0, 'Test 63');
test(minimumTime([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 10), 0, 'Test 64');
test(minimumTime([5, 10, 15, 20], [2, 4, 6, 8], 50), 0, 'Test 65');
test(minimumTime([1, 2, 3, 4, 5], [0, 0, 0, 0, 0], 15), 0, 'Test 66');
test(minimumTime([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 5000), 0, 'Test 67');
test(minimumTime([100, 100, 100], [50, 50, 50], 300), 0, 'Test 68');
test(minimumTime([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 550), 0, 'Test 69');
test(minimumTime([100, 200, 300], [0, 0, 0], 150), 2, 'Test 70');
test(minimumTime([10, 20, 30, 40, 50], [0, 0, 0, 0, 0], 50), 3, 'Test 71');
test(minimumTime([5, 10, 15, 20, 25], [5, 4, 3, 2, 1], 50), 3, 'Test 72');
test(minimumTime([100, 200, 300, 400], [1, 2, 3, 4], 500), 2, 'Test 73');
test(minimumTime([9, 9, 9, 9], [1, 2, 3, 4], 50), 0, 'Test 74');
test(minimumTime([1000, 1000, 1000], [1000, 1000, 1000], 3000), 0, 'Test 75');
test(minimumTime([100, 150, 200, 250, 300], [5, 10, 15, 20, 25], 2000), 0, 'Test 76');
test(minimumTime([999, 999, 999], [1000, 1000, 1000], 2997), 0, 'Test 77');
test(minimumTime([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 55), 0, 'Test 78');
test(minimumTime([9, 8, 7, 6, 5], [0, 1, 2, 3, 4], 30), 3, 'Test 79');
test(minimumTime([10, 20, 30, 40, 50], [1, 2, 3, 4, 5], 50), 3, 'Test 80');
test(minimumTime([1, 1, 1, 1, 1], [1, 2, 3, 4, 5], 15), 0, 'Test 81');
test(minimumTime([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 600), 0, 'Test 82');
test(minimumTime([1000, 900, 800, 700, 600, 500, 400, 300, 200, 100], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5500), 0, 'Test 83');
test(minimumTime([50, 50, 50, 50], [0, 0, 0, 0], 150), 1, 'Test 84');
test(minimumTime([1, 2, 3, 4, 5], [5, 4, 3, 2, 1], 20), 0, 'Test 85');
test(minimumTime([10, 20, 30, 40, 50], [5, 4, 3, 2, 1], 100), 2, 'Test 86');
test(minimumTime([10, 20, 30], [5, 0, 0], 30), 2, 'Test 87');
test(minimumTime([500, 500, 500, 500, 500, 500, 500, 500, 500, 500], [10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 10000), 0, 'Test 88');
test(minimumTime([10, 20, 30, 40], [1, 2, 3, 4], 100), 0, 'Test 89');
test(minimumTime([10, 10, 10, 10, 10], [0, 0, 0, 0, 0], 10), 4, 'Test 90');
test(minimumTime([100, 200, 300, 400, 500], [1, 2, 3, 4, 5], 1500), 0, 'Test 91');
test(minimumTime([10, 20, 30, 40, 50], [5, 4, 3, 2, 1], 150), 0, 'Test 92');
test(minimumTime([2, 4, 6, 8, 10], [1, 3, 5, 7, 9], 50), 0, 'Test 93');
test(minimumTime([1000, 500, 250, 125, 62, 31, 15, 7, 3, 1], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5000), 0, 'Test 94');
test(minimumTime([10, 20, 30, 40, 50], [0, 0, 0, 0, 0], 150), 0, 'Test 95');
test(minimumTime([500, 500, 500, 500, 500], [0, 1, 2, 3, 4], 2000), 2, 'Test 96');
test(minimumTime([1, 2, 3, 4, 5], [5, 4, 3, 2, 1], 50), 0, 'Test 97');
test(minimumTime([100, 200, 300, 400, 500], [0, 0, 0, 0, 1000], 1500), 0, 'Test 98');
test(minimumTime([50, 40, 30, 20, 10], [1, 2, 3, 4, 5], 150), 0, 'Test 99');
test(minimumTime([10, 20, 30, 40, 50], [5, 5, 5, 5, 5], 200), 0, 'Test 100');
test(minimumTime([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 100), 0, 'Test 101');
test(minimumTime([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 55), 0, 'Test 102');
test(minimumTime([1, 1, 1, 1, 1], [100, 100, 100, 100, 100], 500), 0, 'Test 103');
test(minimumTime([5, 10, 15, 20, 25], [1, 1, 1, 1, 1], 50), 2, 'Test 104');
test(minimumTime([100, 200, 300], [5, 10, 15], 600), 0, 'Test 105');
test(minimumTime([999, 999, 999], [1, 1, 1], 2995), 1, 'Test 106');
test(minimumTime([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 500), 1, 'Test 107');
test(minimumTime([100, 200, 300], [5, 10, 15], 500), 1, 'Test 108');
test(minimumTime([9, 8, 7, 6, 5, 4, 3, 2, 1], [1, 2, 3, 4, 5, 6, 7, 8, 9], 45), 0, 'Test 109');
test(minimumTime([7, 14, 21, 28], [1, 1, 1, 1], 50), 1, 'Test 110');
test(minimumTime([100, 200, 300, 400, 500], [1, 1, 1, 1, 1], 1500), 0, 'Test 111');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

