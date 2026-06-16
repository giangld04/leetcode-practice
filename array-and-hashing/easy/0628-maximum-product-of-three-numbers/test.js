// Test: 628. Maximum Product Of Three Numbers
// 111 test cases from LeetCodeDataset
// Run: node test.js

const { maximumProduct } = require("./solution");

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

console.log("\n628. Maximum Product Of Three Numbers\n");

test(maximumProduct([-10, -10, 5, 2]), 500, 'Test 1');
test(maximumProduct([1,2,3,4]), 24, 'Test 2');
test(maximumProduct([1,0,1,0,1,0,99]), 99, 'Test 3');
test(maximumProduct([0,2,3,5]), 30, 'Test 4');
test(maximumProduct([0,2,3,-1,5]), 30, 'Test 5');
test(maximumProduct([1,2,3]), 6, 'Test 6');
test(maximumProduct([-10,-10,5,2]), 500, 'Test 7');
test(maximumProduct([0,2,3,5,7]), 105, 'Test 8');
test(maximumProduct([1,2,3,0,-1,-2,-3,-4]), 36, 'Test 9');
test(maximumProduct([-1,-2,-3,-4,-5]), -6, 'Test 10');
test(maximumProduct([-1,-2,-3,-4]), -6, 'Test 11');
test(maximumProduct([1,10,-5,1,-100]), 5000, 'Test 12');
test(maximumProduct([0,2,3,5,9]), 135, 'Test 13');
test(maximumProduct([1,2,3,4,5,6,7,8,9,10]), 720, 'Test 14');
test(maximumProduct([-1,-2,-3]), -6, 'Test 15');
test(maximumProduct([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31]), 24273, 'Test 16');
test(maximumProduct([-1,-1,-1,-1,0,0,0,0,1,1,1,1]), 1, 'Test 17');
test(maximumProduct([-10,1,2,3,100,200]), 60000, 'Test 18');
test(maximumProduct([0, 0, 0, 0, 0, 1, -1]), 0, 'Test 19');
test(maximumProduct([-10, -20, 0, 5, 15, 25]), 5000, 'Test 20');
test(maximumProduct([-1000, 1000, 500, -500, 250, -250, 125, -125]), 500000000, 'Test 21');
test(maximumProduct([10, -10, 20, -20, 30, -30]), 18000, 'Test 22');
test(maximumProduct([-1000,-999,-998,-997,-996,-995]), -988046940, 'Test 23');
test(maximumProduct([-5, -5, -5, -5, -5, 5, 5, 5, 5, 5]), 125, 'Test 24');
test(maximumProduct([-10,-20,-30,1,2,3]), 1800, 'Test 25');
test(maximumProduct([-5, -6, -7, 1, 2, 3]), 126, 'Test 26');
test(maximumProduct([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 1, 'Test 27');
test(maximumProduct([-1000, 1000, 500, -500, 0, 1, -1]), 500000000, 'Test 28');
test(maximumProduct([-1000, -900, -800, -700, -600, -500, 400, 300, 200, 100, 0]), 360000000, 'Test 29');
test(maximumProduct([1000, -1000, 500, -500, 250, -250, 125, -125]), 500000000, 'Test 30');
test(maximumProduct([1, 2, 3, 4, 5, -1000, -1000, -1000]), 5000000, 'Test 31');
test(maximumProduct([1, -1, 2, -2, 3, -3, 4, -4]), 48, 'Test 32');
test(maximumProduct([-5, -4, -3, -2, -1]), -6, 'Test 33');
test(maximumProduct([100, 200, 300, -100, -200, -300]), 18000000, 'Test 34');
test(maximumProduct([-1, 0, 1]), 0, 'Test 35');
test(maximumProduct([0, 0, 0, 0, 0, 1, 2, 3]), 6, 'Test 36');
test(maximumProduct([-1, 0, 1, 2, -2, -3, 3]), 18, 'Test 37');
test(maximumProduct([-5,-4,-3,-2,-1,0,1,2,3,4,5]), 100, 'Test 38');
test(maximumProduct([100, 200, 300, 400, 500]), 60000000, 'Test 39');
test(maximumProduct([-1, -2, 0, 2, 1]), 4, 'Test 40');
test(maximumProduct([0, 0, 0, 0, 0, 0, 0, 0, 0, 1]), 0, 'Test 41');
test(maximumProduct([-10, 0, 10, 20, -30, 40]), 12000, 'Test 42');
test(maximumProduct([0, 0, 0, 0, 1]), 0, 'Test 43');
test(maximumProduct([-1, -2, 3, 4, -5, 6, -7, 8, 9, -10]), 630, 'Test 44');
test(maximumProduct([0,0,0,0,0]), 0, 'Test 45');
test(maximumProduct([-1000, -999, -998, 0, 1, 2]), 1998000, 'Test 46');
test(maximumProduct([-1, -1, -1, 1000, 1000, 1000]), 1000000000, 'Test 47');
test(maximumProduct([0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3]), 27, 'Test 48');
test(maximumProduct([-100,0,50,100]), 0, 'Test 49');
test(maximumProduct([1, 3, 5, 7, 9, -11, -13]), 1287, 'Test 50');
test(maximumProduct([1, 2, 3, 4, 5, -1, -2, -3, -4, -5]), 100, 'Test 51');
test(maximumProduct([1000, 999, 998, 997, 996, 995]), 997002000, 'Test 52');
test(maximumProduct([1, 10, -5, 1, -100]), 5000, 'Test 53');
test(maximumProduct([0, 0, 0, -1, -2, -3]), 0, 'Test 54');
test(maximumProduct([-10, -20, 5, 6, 2]), 1200, 'Test 55');
test(maximumProduct([1, 1, 1, 1000, 1000, 1000]), 1000000000, 'Test 56');
test(maximumProduct([-10,-20,-30,1,2]), 1200, 'Test 57');
test(maximumProduct([-100,0,100]), 0, 'Test 58');
test(maximumProduct([1000,999,998,1,2,3]), 997002000, 'Test 59');
test(maximumProduct([-1, -2, -3, -4, -5]), -6, 'Test 60');
test(maximumProduct([-1, -2, -3, 0, 0, 0, 0, 0, 0, 0]), 0, 'Test 61');
test(maximumProduct([1, 1, 1, 1, 1, 1000]), 1000, 'Test 62');
test(maximumProduct([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2]), 2, 'Test 63');
test(maximumProduct([-1, -2, 3, 4, 5, 6]), 120, 'Test 64');
test(maximumProduct([-999, -998, -997, 997, 998, 999]), 996004998, 'Test 65');
test(maximumProduct([1000, 500, 200, 100, 50, 25]), 100000000, 'Test 66');
test(maximumProduct([10, 20, 30, -1, -2, -3]), 6000, 'Test 67');
test(maximumProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 720, 'Test 68');
test(maximumProduct([1, 2, 3, 4, 5, -6, -7, -8]), 280, 'Test 69');
test(maximumProduct([-10, 20, -30, 40, -50, 60, -70, 80]), 280000, 'Test 70');
test(maximumProduct([1, -2, 3, -4, 5, -6, 7, -8, 9, -10]), 720, 'Test 71');
test(maximumProduct([-1000, -999, -998, -1, -2, -3]), -6, 'Test 72');
test(maximumProduct([10, 20, 30, 40, 50, -10, -20, -30, -40, -50]), 100000, 'Test 73');
test(maximumProduct([-10, -20, 5, 6, 7]), 1400, 'Test 74');
test(maximumProduct([100, 200, 300, 400, 500, -100, -200]), 60000000, 'Test 75');
test(maximumProduct([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]), 100, 'Test 76');
test(maximumProduct([-10, -20, 5, 10, 15]), 3000, 'Test 77');
test(maximumProduct([-1000, -1000, -1000, 1, 2, 3]), 3000000, 'Test 78');
test(maximumProduct([1, 2, 3, -1, -2, -3, 4, 5, 6, 7, 8, 9]), 504, 'Test 79');
test(maximumProduct([500, 400, 300, 200, 100, 0, -100, -200, -300, -400, -500]), 100000000, 'Test 80');
test(maximumProduct([5, 5, 5, 5, 5, 5, 5]), 125, 'Test 81');
test(maximumProduct([1000, 999, 998, 1, 2, 3]), 997002000, 'Test 82');
test(maximumProduct([-5, -6, -7, -8, -9]), -210, 'Test 83');
test(maximumProduct([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4]), 64, 'Test 84');
test(maximumProduct([-1000, 1000, 500, -500, 250, -250, 125, -125, 62, -62, 31, -31]), 500000000, 'Test 85');
test(maximumProduct([1000, 999, 998, -1000]), 997002000, 'Test 86');
test(maximumProduct([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 1, 'Test 87');
test(maximumProduct([-1000, 1000, 500, -500, 200, -200]), 500000000, 'Test 88');
test(maximumProduct([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 1, 'Test 89');
test(maximumProduct([0, 0, 0, 1, 2, 3]), 6, 'Test 90');
test(maximumProduct([-10,20,30,-40,50]), 30000, 'Test 91');
test(maximumProduct([-10,-5,-2,0,2,5,10]), 500, 'Test 92');
test(maximumProduct([-5, -5, -5, -5, -5, -5, -5]), -125, 'Test 93');
test(maximumProduct([10, 20, -30, -40, 50, 60]), 72000, 'Test 94');
test(maximumProduct([-5, -6, 2, 3, 4]), 120, 'Test 95');
test(maximumProduct([1, 2, 3, -4, -5, -6]), 90, 'Test 96');
test(maximumProduct([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10]), -6, 'Test 97');
test(maximumProduct([-100, -90, -80, 70, 60, 50, 40, 30, 20, 10]), 630000, 'Test 98');
test(maximumProduct([-10,-9,-8,-7,-6,-5]), -210, 'Test 99');
test(maximumProduct([0, 0, 0, 0, 0, 0]), 0, 'Test 100');
test(maximumProduct([-1, 0, 1, 2, 3, 4, 5]), 60, 'Test 101');
test(maximumProduct([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 1, 'Test 102');
test(maximumProduct([-1000, -999, -998, 998, 999, 1000]), 999000000, 'Test 103');
test(maximumProduct([100, 90, 80, -100, -90]), 900000, 'Test 104');
test(maximumProduct([-1000, -999, -998, 1000, 999, 998]), 999000000, 'Test 105');
test(maximumProduct([-1, -2, -3, 4, 5, 6, 7, 8, 9]), 504, 'Test 106');
test(maximumProduct([-10,-20,-30,-40,100]), 120000, 'Test 107');
test(maximumProduct([0, 0, 0, 0, 0, 0, 1]), 0, 'Test 108');
test(maximumProduct([-5, -4, -3, 1, 2, 3]), 60, 'Test 109');
test(maximumProduct([1000, 999, 998, 997, 996, 995, 994, 993, 992, 991, 990]), 997002000, 'Test 110');
test(maximumProduct([1, 2, -3, 4, -5, 6]), 90, 'Test 111');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

