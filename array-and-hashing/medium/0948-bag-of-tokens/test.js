// Test: 948. Bag Of Tokens
// 103 test cases from LeetCodeDataset
// Run: node test.js

const { bagOfTokensScore } = require("./solution");

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

console.log("\n948. Bag Of Tokens\n");

test(bagOfTokensScore([100,200,300,400], 200), 2, 'Test 1');
test(bagOfTokensScore([100, 200, 300, 400], 100), 1, 'Test 2');
test(bagOfTokensScore([71, 55, 82], 54), 0, 'Test 3');
test(bagOfTokensScore([100,200,300,400], 500), 2, 'Test 4');
test(bagOfTokensScore([100], 50), 0, 'Test 5');
test(bagOfTokensScore([], 0), 0, 'Test 6');
test(bagOfTokensScore([50,50,50,50,50], 150), 3, 'Test 7');
test(bagOfTokensScore([100,200,300,400,500], 250), 2, 'Test 8');
test(bagOfTokensScore([50, 100, 150, 200, 250], 200), 2, 'Test 9');
test(bagOfTokensScore([80,90,95], 100), 1, 'Test 10');
test(bagOfTokensScore([100, 150, 200, 250, 300], 100), 1, 'Test 11');
test(bagOfTokensScore([100,200,300,400,500], 300), 2, 'Test 12');
test(bagOfTokensScore([], 1000), 0, 'Test 13');
test(bagOfTokensScore([1000,2000,3000,4000], 1500), 1, 'Test 14');
test(bagOfTokensScore([1, 2, 3, 4, 5], 3), 2, 'Test 15');
test(bagOfTokensScore([100,200,300,400], 300), 2, 'Test 16');
test(bagOfTokensScore([200,100], 150), 1, 'Test 17');
test(bagOfTokensScore([50,100,150,200,250], 200), 2, 'Test 18');
test(bagOfTokensScore([1,1,1,1,1,1,1,1,1,1], 5), 5, 'Test 19');
test(bagOfTokensScore([50, 50, 50, 50], 150), 3, 'Test 20');
test(bagOfTokensScore([71,55,82], 54), 0, 'Test 21');
test(bagOfTokensScore([500], 1000), 1, 'Test 22');
test(bagOfTokensScore([200, 100], 150), 1, 'Test 23');
test(bagOfTokensScore([75,150,225,300,375,450], 225), 2, 'Test 24');
test(bagOfTokensScore([5,10,15,20], 50), 4, 'Test 25');
test(bagOfTokensScore([], 100), 0, 'Test 26');
test(bagOfTokensScore([7, 8, 9, 10, 11], 20), 2, 'Test 27');
test(bagOfTokensScore([1,1,1,1,1,1,1,1,1,1], 0), 0, 'Test 28');
test(bagOfTokensScore([100, 100, 100, 100, 100, 100], 300), 3, 'Test 29');
test(bagOfTokensScore([1, 2, 3, 4, 5], 5), 3, 'Test 30');
test(bagOfTokensScore([100, 100, 100, 100], 300), 3, 'Test 31');
test(bagOfTokensScore([100,200,300,400], 400), 2, 'Test 32');
test(bagOfTokensScore([100, 200, 300, 400], 200), 2, 'Test 33');
test(bagOfTokensScore([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 10), 3, 'Test 34');
test(bagOfTokensScore([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 250), 4, 'Test 35');
test(bagOfTokensScore([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200], 1500), 16, 'Test 36');
test(bagOfTokensScore([1000, 900, 800, 700, 600, 500, 400, 300, 200, 100], 500), 4, 'Test 37');
test(bagOfTokensScore([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 500), 9, 'Test 38');
test(bagOfTokensScore([5, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000], 1000), 8, 'Test 39');
test(bagOfTokensScore([5, 15, 25, 35, 45, 55, 65, 75, 85, 95], 200), 6, 'Test 40');
test(bagOfTokensScore([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29], 30), 7, 'Test 41');
test(bagOfTokensScore([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 550), 4, 'Test 42');
test(bagOfTokensScore([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 50), 4, 'Test 43');
test(bagOfTokensScore([1000, 900, 800, 700, 600, 500, 400, 300, 200, 100], 5000), 9, 'Test 44');
test(bagOfTokensScore([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 10), 6, 'Test 45');
test(bagOfTokensScore([25, 50, 75, 100, 125, 150, 175, 200], 100), 3, 'Test 46');
test(bagOfTokensScore([25, 50, 75, 100, 125, 150, 175, 200, 225, 250], 100), 4, 'Test 47');
test(bagOfTokensScore([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71], 100), 11, 'Test 48');
test(bagOfTokensScore([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200], 1000), 14, 'Test 49');
test(bagOfTokensScore([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 5), 5, 'Test 50');
test(bagOfTokensScore([9999, 9998, 9997, 9996, 9995, 9994, 9993, 9992, 9991, 9990], 10000), 1, 'Test 51');
test(bagOfTokensScore([1, 10, 100, 1000, 10000, 100000], 50000), 5, 'Test 52');
test(bagOfTokensScore([1000, 900, 800, 700, 600, 500, 400, 300, 200, 100], 1500), 5, 'Test 53');
test(bagOfTokensScore([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100], 75), 9, 'Test 54');
test(bagOfTokensScore([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024], 1000), 9, 'Test 55');
test(bagOfTokensScore([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 100), 13, 'Test 56');
test(bagOfTokensScore([5, 15, 25, 35, 45, 55, 65, 75, 85, 95, 105], 100), 5, 'Test 57');
test(bagOfTokensScore([1000, 900, 800, 700, 600, 500, 400, 300, 200, 100], 1000), 5, 'Test 58');
test(bagOfTokensScore([5, 10, 20, 25, 50, 100], 55), 4, 'Test 59');
test(bagOfTokensScore([5, 15, 25, 35, 45, 55, 65, 75, 85, 95], 50), 4, 'Test 60');
test(bagOfTokensScore([1, 2, 4, 8, 16, 32, 64, 128, 256, 512], 1024), 10, 'Test 61');
test(bagOfTokensScore([100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100], 500), 5, 'Test 62');
test(bagOfTokensScore([5, 7, 8, 10, 12], 15), 2, 'Test 63');
test(bagOfTokensScore([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 25), 5, 'Test 64');
test(bagOfTokensScore([1, 2, 4, 8, 16, 32, 64, 128, 256, 512], 1000), 9, 'Test 65');
test(bagOfTokensScore([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 10), 8, 'Test 66');
test(bagOfTokensScore([2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 10), 5, 'Test 67');
test(bagOfTokensScore([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 250), 6, 'Test 68');
test(bagOfTokensScore([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 100), 4, 'Test 69');
test(bagOfTokensScore([100, 200, 300, 400, 500], 1), 0, 'Test 70');
test(bagOfTokensScore([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150], 75), 6, 'Test 71');
test(bagOfTokensScore([300, 200, 100, 400, 500], 250), 2, 'Test 72');
test(bagOfTokensScore([50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50], 200), 4, 'Test 73');
test(bagOfTokensScore([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10], 10), 9, 'Test 74');
test(bagOfTokensScore([500, 400, 300, 200, 100, 50, 25, 10], 1000), 6, 'Test 75');
test(bagOfTokensScore([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024], 1023), 10, 'Test 76');
test(bagOfTokensScore([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 500), 4, 'Test 77');
test(bagOfTokensScore([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75], 250), 10, 'Test 78');
test(bagOfTokensScore([90, 95, 100, 105, 110, 115, 120, 125, 130, 135], 100), 1, 'Test 79');
test(bagOfTokensScore([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150], 70), 6, 'Test 80');
test(bagOfTokensScore([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150], 100), 6, 'Test 81');
test(bagOfTokensScore([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39], 100), 11, 'Test 82');
test(bagOfTokensScore([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15), 5, 'Test 83');
test(bagOfTokensScore([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 50), 11, 'Test 84');
test(bagOfTokensScore([300, 200, 100, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200], 500), 5, 'Test 85');
test(bagOfTokensScore([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150], 1000), 13, 'Test 86');
test(bagOfTokensScore([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 20), 7, 'Test 87');
test(bagOfTokensScore([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 10), 4, 'Test 88');
test(bagOfTokensScore([20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20], 200), 10, 'Test 89');
test(bagOfTokensScore([1, 10, 100, 1000, 10000], 5000), 4, 'Test 90');
test(bagOfTokensScore([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 10), 4, 'Test 91');
test(bagOfTokensScore([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 100), 14, 'Test 92');
test(bagOfTokensScore([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 100), 6, 'Test 93');
test(bagOfTokensScore([99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110], 100), 1, 'Test 94');
test(bagOfTokensScore([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 150), 5, 'Test 95');
test(bagOfTokensScore([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5), 4, 'Test 96');
test(bagOfTokensScore([300, 200, 400, 100, 500], 250), 2, 'Test 97');
test(bagOfTokensScore([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 25), 6, 'Test 98');
test(bagOfTokensScore([1000, 900, 800, 700, 600, 500, 400, 300, 200, 100], 300), 4, 'Test 99');
test(bagOfTokensScore([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29], 15), 6, 'Test 100');
test(bagOfTokensScore([50, 50, 50, 50, 50, 50, 50, 50, 50, 50], 200), 4, 'Test 101');
test(bagOfTokensScore([500, 200, 300, 100, 400, 600, 700, 800, 900, 1000], 400), 4, 'Test 102');
test(bagOfTokensScore([300, 200, 100, 400, 500, 600], 350), 2, 'Test 103');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

