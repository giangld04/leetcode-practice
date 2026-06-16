// Test: 2136. Earliest Possible Day Of Full Bloom
// 102 test cases from LeetCodeDataset
// Run: node test.js

const { earliestFullBloom } = require("./solution");

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

console.log("\n2136. Earliest Possible Day Of Full Bloom\n");

test(earliestFullBloom([1], [1]), 2, 'Test 1');
test(earliestFullBloom([2,2,2], [3,3,3]), 9, 'Test 2');
test(earliestFullBloom([2,2,2], [3,2,1]), 7, 'Test 3');
test(earliestFullBloom([10000,10000], [10000,10000]), 30000, 'Test 4');
test(earliestFullBloom([1,1,1,1,1], [5,4,3,2,1]), 6, 'Test 5');
test(earliestFullBloom([3,2,1], [10,20,30]), 31, 'Test 6');
test(earliestFullBloom([1,1,1,1,1,1,1,1,1,1], [1,1,1,1,1,1,1,1,1,1]), 11, 'Test 7');
test(earliestFullBloom([1,3,5,7], [7,5,3,1]), 17, 'Test 8');
test(earliestFullBloom([10,20,30], [1,2,3]), 61, 'Test 9');
test(earliestFullBloom([5,5,5], [5,5,5]), 20, 'Test 10');
test(earliestFullBloom([5,4,3,2,1], [1,2,3,4,5]), 16, 'Test 11');
test(earliestFullBloom([3,2,1], [2,1,3]), 7, 'Test 12');
test(earliestFullBloom([2,3,4], [3,2,1]), 10, 'Test 13');
test(earliestFullBloom([10000, 10000], [1, 1]), 20001, 'Test 14');
test(earliestFullBloom([1,4,3], [2,3,1]), 9, 'Test 15');
test(earliestFullBloom([100,200,300], [100,200,300]), 700, 'Test 16');
test(earliestFullBloom([2,2,2,2], [4,3,2,1]), 9, 'Test 17');
test(earliestFullBloom([1,2,3,2], [2,1,2,1]), 9, 'Test 18');
test(earliestFullBloom([1,1,1,1], [1,1,1,1]), 5, 'Test 19');
test(earliestFullBloom([10,5,7], [4,6,8]), 26, 'Test 20');
test(earliestFullBloom([5,2,4], [3,1,2]), 12, 'Test 21');
test(earliestFullBloom([3,3,3], [3,3,3]), 12, 'Test 22');
test(earliestFullBloom([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 105, 'Test 23');
test(earliestFullBloom([5,10,15,20], [20,15,10,5]), 55, 'Test 24');
test(earliestFullBloom([5, 10, 15, 20], [20, 15, 10, 5]), 55, 'Test 25');
test(earliestFullBloom([1,3,5,7,9,11,13,15,17,19], [19,17,15,13,11,9,7,5,3,1]), 101, 'Test 26');
test(earliestFullBloom([100,200,300,400], [1000,500,700,200]), 1200, 'Test 27');
test(earliestFullBloom([500,500,500,500,500], [500,500,500,500,500]), 3000, 'Test 28');
test(earliestFullBloom([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500]), 1501, 'Test 29');
test(earliestFullBloom([1000,2000,3000,4000,5000], [1,2,3,4,5]), 15001, 'Test 30');
test(earliestFullBloom([10,10,10,10,10,10,10,10,10,10], [1,2,3,4,5,6,7,8,9,10]), 101, 'Test 31');
test(earliestFullBloom([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], [20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 21, 'Test 32');
test(earliestFullBloom([10,20,30,40,50], [50,40,30,20,10]), 160, 'Test 33');
test(earliestFullBloom([1,2,3,4,5,6,7,8,9,10], [1,2,3,4,5,6,7,8,9,10]), 56, 'Test 34');
test(earliestFullBloom([100, 90, 80, 70, 60, 50, 40, 30, 20, 10], [15, 14, 13, 12, 11, 10, 9, 8, 7, 6]), 556, 'Test 35');
test(earliestFullBloom([100,200,300,400,500], [500,400,300,200,100]), 1600, 'Test 36');
test(earliestFullBloom([10,20,30,40,50], [5,10,15,20,25]), 155, 'Test 37');
test(earliestFullBloom([5,10,4,6,8], [10,2,7,4,5]), 35, 'Test 38');
test(earliestFullBloom([3,3,3,3,3,3,3,3,3,3], [5,5,5,5,5,5,5,5,5,5]), 35, 'Test 39');
test(earliestFullBloom([7,8,9,10,11,12,13,14,15,16], [16,15,14,13,12,11,10,9,8,7]), 122, 'Test 40');
test(earliestFullBloom([5,4,1,3,2], [8,7,6,5,4]), 19, 'Test 41');
test(earliestFullBloom([5, 3, 8, 6], [10, 7, 2, 4]), 24, 'Test 42');
test(earliestFullBloom([1, 3, 5, 7, 9], [9, 7, 5, 3, 1]), 26, 'Test 43');
test(earliestFullBloom([5, 4, 3, 2, 1], [10, 20, 30, 40, 50]), 51, 'Test 44');
test(earliestFullBloom([15, 20, 25, 30, 35, 40, 45, 50, 55, 60], [60, 55, 50, 45, 40, 35, 30, 25, 20, 15]), 390, 'Test 45');
test(earliestFullBloom([10,20,30,40,50,60,70,80,90,100], [1,1,1,1,1,1,1,1,1,1]), 551, 'Test 46');
test(earliestFullBloom([7,5,9,3,6,4,8], [2,8,1,5,4,7,3]), 43, 'Test 47');
test(earliestFullBloom([100,200,150,300], [50,100,200,150]), 800, 'Test 48');
test(earliestFullBloom([5,3,8,6], [10,7,2,4]), 24, 'Test 49');
test(earliestFullBloom([10,5,7,3,8], [15,12,6,4,9]), 37, 'Test 50');
test(earliestFullBloom([7,6,5,4,3,2,1], [1,2,3,4,5,6,7]), 29, 'Test 51');
test(earliestFullBloom([10, 5, 15, 20], [1, 1, 1, 1]), 51, 'Test 52');
test(earliestFullBloom([5,10,3,1,4], [10,5,7,8,2]), 25, 'Test 53');
test(earliestFullBloom([5,1,8,3,2], [10,6,2,4,5]), 21, 'Test 54');
test(earliestFullBloom([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3], [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 61, 'Test 55');
test(earliestFullBloom([10,20,30,40,50,60,70,80,90,100], [100,90,80,70,60,50,40,30,20,10]), 560, 'Test 56');
test(earliestFullBloom([500, 400, 300, 200, 100], [5, 4, 3, 2, 1]), 1501, 'Test 57');
test(earliestFullBloom([10,10,10,10,10,10,10,10,10,10,10,10], [1,2,3,4,5,6,7,8,9,10,11,12]), 121, 'Test 58');
test(earliestFullBloom([100, 50, 75, 25], [50, 100, 75, 25]), 275, 'Test 59');
test(earliestFullBloom([1000, 900, 800, 700, 600, 500, 400, 300, 200, 100], [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 5510, 'Test 60');
test(earliestFullBloom([1,1,1,1,1], [1000,1000,1000,1000,1000]), 1005, 'Test 61');
test(earliestFullBloom([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], [5, 4, 3, 2, 1, 10, 9, 8, 7, 6]), 31, 'Test 62');
test(earliestFullBloom([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 16, 'Test 63');
test(earliestFullBloom([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], [20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 211, 'Test 64');
test(earliestFullBloom([10, 10, 10, 10, 10, 10, 10, 10, 10, 10], [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]), 110, 'Test 65');
test(earliestFullBloom([1,2,3,4,5,6,7,8,9,10], [10,9,8,7,6,5,4,3,2,1]), 56, 'Test 66');
test(earliestFullBloom([100, 200, 300, 400, 500], [1000, 2000, 3000, 4000, 5000]), 5500, 'Test 67');
test(earliestFullBloom([1000,2000,3000,4000,5000], [5000,4000,3000,2000,1000]), 16000, 'Test 68');
test(earliestFullBloom([3,3,3,3,3,3,3,3,3,3], [1,2,3,4,5,6,7,8,9,10]), 31, 'Test 69');
test(earliestFullBloom([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 56, 'Test 70');
test(earliestFullBloom([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 105, 'Test 71');
test(earliestFullBloom([3,1,4,1,5,9,2,6,5,3,5], [9,7,3,8,5,3,8,2,9,4,6]), 46, 'Test 72');
test(earliestFullBloom([4,4,4,4,4,4,4,4], [1,2,3,4,5,6,7,8]), 33, 'Test 73');
test(earliestFullBloom([1,3,5,7,9], [9,7,5,3,1]), 26, 'Test 74');
test(earliestFullBloom([10,10,10,10,10], [20,20,20,20,20]), 70, 'Test 75');
test(earliestFullBloom([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 11, 'Test 76');
test(earliestFullBloom([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [10000, 9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000]), 10001, 'Test 77');
test(earliestFullBloom([1,2,3,4,5,6,7,8,9,10], [10,20,30,40,50,60,70,80,90,100]), 110, 'Test 78');
test(earliestFullBloom([1, 1, 1, 1, 1], [10000, 9999, 9998, 9997, 9996]), 10001, 'Test 79');
test(earliestFullBloom([1,1,1,1,1,1,1,1,1,1], [10,20,30,40,50,60,70,80,90,100]), 101, 'Test 80');
test(earliestFullBloom([1,1,1,1,1,1,1,1,1,1], [10,9,8,7,6,5,4,3,2,1]), 11, 'Test 81');
test(earliestFullBloom([1, 10, 100, 1000, 10000], [10000, 1000, 100, 10, 1]), 11112, 'Test 82');
test(earliestFullBloom([100, 200, 300, 400, 500], [1, 2, 3, 4, 5]), 1501, 'Test 83');
test(earliestFullBloom([7, 14, 21, 28, 35], [10, 20, 30, 40, 50]), 118, 'Test 84');
test(earliestFullBloom([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]), 110, 'Test 85');
test(earliestFullBloom([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5], [9, 7, 3, 8, 5, 3, 0, 9, 4, 6, 8]), 45, 'Test 86');
test(earliestFullBloom([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 121, 'Test 87');
test(earliestFullBloom([100,200,150,300], [500,400,300,200]), 950, 'Test 88');
test(earliestFullBloom([4,4,4,4,4], [9,8,7,6,5]), 25, 'Test 89');
test(earliestFullBloom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 56, 'Test 90');
test(earliestFullBloom([1,3,5,7,9,11,13,15,17,19], [2,4,6,8,10,12,14,16,18,20]), 103, 'Test 91');
test(earliestFullBloom([3,5,7,9,11,13,15], [2,4,6,8,10,12,14]), 65, 'Test 92');
test(earliestFullBloom([100,200,300,400,500], [1,1,1,1,1]), 1501, 'Test 93');
test(earliestFullBloom([4,3,2,1,5,6,7,8,9,10], [10,9,8,7,6,5,4,3,2,1]), 56, 'Test 94');
test(earliestFullBloom([2,2,2,2,2,2,2,2,2,2], [1,1,1,1,1,1,1,1,1,1]), 21, 'Test 95');
test(earliestFullBloom([50,40,30,20,10], [1,2,3,4,5]), 151, 'Test 96');
test(earliestFullBloom([10,10,10,10,10,10,10,10,10,10], [10,9,8,7,6,5,4,3,2,1]), 101, 'Test 97');
test(earliestFullBloom([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 551, 'Test 98');
test(earliestFullBloom([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [100, 90, 80, 70, 60, 50, 40, 30, 20, 10]), 560, 'Test 99');
test(earliestFullBloom([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], [15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 16, 'Test 100');
test(earliestFullBloom([7, 6, 5, 4, 3, 2, 1], [1, 2, 3, 4, 5, 6, 7]), 29, 'Test 101');
test(earliestFullBloom([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3], [15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 46, 'Test 102');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

