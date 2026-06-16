// Test: 1785. Minimum Elements To Add To Form A Given Sum
// 106 test cases from LeetCodeDataset
// Run: node test.js

const { minElements } = require("./solution");

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

console.log("\n1785. Minimum Elements To Add To Form A Given Sum\n");

test(minElements([1,-1,1], 3, -4), 2, 'Test 1');
test(minElements([1,2,3], 1, 6), 0, 'Test 2');
test(minElements([1,-10,9,1], 100, 0), 1, 'Test 3');
test(minElements([0,0,0], 1, 3), 3, 'Test 4');
test(minElements([0,0,0,0], 5, 10), 2, 'Test 5');
test(minElements([2,2,2], 2, 6), 0, 'Test 6');
test(minElements([-3,-2,-1], 1, -9), 3, 'Test 7');
test(minElements([-5,-5,-5], 5, 15), 6, 'Test 8');
test(minElements([10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 5, 50), 10, 'Test 9');
test(minElements([10, -10, 20, -20, 30, -30], 15, 0), 0, 'Test 10');
test(minElements([500000, -250000, 125000, -62500, 31250, -15625], 100000, 1000000), 7, 'Test 11');
test(minElements([100000, 200000, 300000, 400000, 500000], 100000, 1500000), 0, 'Test 12');
test(minElements([999999, -999999, 999998, -999998, 999997, -999997], 1000000, -1000000), 1, 'Test 13');
test(minElements([1000000, -1000000, 500000, -500000], 1000000, 0), 0, 'Test 14');
test(minElements([-1, -1, -1, -1, -1, -1, -1, -1, -1, -1], 2, -15), 3, 'Test 15');
test(minElements([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1, -10), 20, 'Test 16');
test(minElements([5, 10, 15, 20, 25], 10, 100), 3, 'Test 17');
test(minElements([1, -2, 3, -4, 5], 2, -10), 7, 'Test 18');
test(minElements([100, -100, 200, -200, 300, -300], 100, -1500), 15, 'Test 19');
test(minElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 0), 19, 'Test 20');
test(minElements([1000000, 1000000, 1000000, 1000000, 1000000], 1000000, 0), 5, 'Test 21');
test(minElements([5, -5, 5, -5, 5, -5], 5, 10), 2, 'Test 22');
test(minElements([999999, 999999, 999999], 1000000, -2999997), 6, 'Test 23');
test(minElements([5, 10, -15, 20, -25, 30, -35, 40, -45, 50], 10, 100), 7, 'Test 24');
test(minElements([999999, -999999, 999999, -999999, 999999, -999999], 1000000, 0), 0, 'Test 25');
test(minElements([-5, -4, -3, -2, -1], 3, 15), 10, 'Test 26');
test(minElements([-1, -1, -1, -1, -1, -1, -1, -1, -1, -1], 1, -20), 10, 'Test 27');
test(minElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1, 55), 0, 'Test 28');
test(minElements([1000000, -1000000, 1000000], 1000000, 3000000), 2, 'Test 29');
test(minElements([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10], 3, -50), 2, 'Test 30');
test(minElements([123456, -654321, 111111, -222222, 333333, -444444], 500000, -1000000), 1, 'Test 31');
test(minElements([999999, 999998, 999997, 999996], 999999, 3999990), 0, 'Test 32');
test(minElements([1000000, -1000000, 500000], 1000000, 0), 1, 'Test 33');
test(minElements([1000, -1000, 1000, -1000], 1000, 1000), 1, 'Test 34');
test(minElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10, 55), 0, 'Test 35');
test(minElements([5, -5, 5, -5, 5], 10, -15), 2, 'Test 36');
test(minElements([10, -10, 20, -20, 30, -30], 5, 15), 3, 'Test 37');
test(minElements([100000, 200000, 300000, 400000, 500000], 100000, 1000000), 5, 'Test 38');
test(minElements([-1, -1, -1, -1, -1, -1, -1, -1, -1, -1], 1, -5), 5, 'Test 39');
test(minElements([1, 2, 3, 4, 5], 1, -15), 30, 'Test 40');
test(minElements([-1000000, -2000000, -3000000], 1000000, -10000000), 4, 'Test 41');
test(minElements([100, -50, 25], 100, 200), 2, 'Test 42');
test(minElements([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1, 15), 5, 'Test 43');
test(minElements([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 50, 500), 1, 'Test 44');
test(minElements([-1, 1, -2, 2, -3, 3, -4, 4, -5, 5], 5, -10), 2, 'Test 45');
test(minElements([100, -100, 50, -50], 50, 0), 0, 'Test 46');
test(minElements([1000000, -1000000, 500000], 1000000, 1000000), 1, 'Test 47');
test(minElements([123456, -123456, 234567, -234567], 100000, -345678), 4, 'Test 48');
test(minElements([-1, -2, -3, -4, -5], 3, -15), 0, 'Test 49');
test(minElements([123456, -654321, 789012, -321098], 100000, 500000), 6, 'Test 50');
test(minElements([-100, 100, -100, 100], 100, 0), 0, 'Test 51');
test(minElements([-100000, 100000, -100000, 100000, -100000], 100000, 50000), 2, 'Test 52');
test(minElements([1000000, -1000000, 500000, -500000], 100000, 0), 0, 'Test 53');
test(minElements([100, 200, 300, 400, 500], 100, 1500), 0, 'Test 54');
test(minElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5, 50), 1, 'Test 55');
test(minElements([1, -1, 1, -1, 1, -1, 1, -1, 1, -1], 1, 5), 5, 'Test 56');
test(minElements([-100000, 50000, 25000, -12500, 6250], 10000, -100000), 7, 'Test 57');
test(minElements([100000, 100000, 100000, 100000, 100000], 100000, 600000), 1, 'Test 58');
test(minElements([1000, -1000, 2000, -2000, 3000], 1000, 5000), 2, 'Test 59');
test(minElements([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1, 10), 0, 'Test 60');
test(minElements([5, -5, 5, -5], 5, 10), 2, 'Test 61');
test(minElements([1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1], 1, 1), 1, 'Test 62');
test(minElements([-5, 5, -5, 5, -5], 5, 0), 1, 'Test 63');
test(minElements([1000000], 500000, 2000000), 2, 'Test 64');
test(minElements([1, -1, 1, -1, 1, -1, 1, -1, 1, -1], 10, 0), 0, 'Test 65');
test(minElements([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 5, 10), 0, 'Test 66');
test(minElements([1, -1, 2, -2, 3, -3, 4, -4, 5, -5, 6, -6, 7, -7, 8, -8, 9, -9, 10, -10], 10, 0), 0, 'Test 67');
test(minElements([1, -1, 1, -1, 1, -1, 1, -1, 1, -1], 1, 0), 0, 'Test 68');
test(minElements([-999999, -999999, -999999], 1000000, 2999997), 6, 'Test 69');
test(minElements([-1, -1, -1, -1, -1, -1, -1, -1, -1, -1], 1, -15), 5, 'Test 70');
test(minElements([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10], 3, 0), 19, 'Test 71');
test(minElements([-1, -1, -1, -1, -1], 3, 5), 4, 'Test 72');
test(minElements([1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1], 2, 0), 0, 'Test 73');
test(minElements([1, -1, 1, -1, 1], 1, -1), 2, 'Test 74');
test(minElements([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 50, 0), 11, 'Test 75');
test(minElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5, 55), 0, 'Test 76');
test(minElements([1, 2, 3, 4, 5], 2, 20), 3, 'Test 77');
test(minElements([-5, 3, 2, -4, 1], 5, -10), 2, 'Test 78');
test(minElements([999999, -999999, 999999, -999999, 999999], 1000000, 4999995), 4, 'Test 79');
test(minElements([-100, 100, -100, 100, -100], 50, 0), 2, 'Test 80');
test(minElements([1, 2, 3, 4, 5], 2, 0), 8, 'Test 81');
test(minElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 55), 0, 'Test 82');
test(minElements([1000000, 1000000, 1000000], 500000, 500000), 5, 'Test 83');
test(minElements([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10], 5, -55), 0, 'Test 84');
test(minElements([-1, 0, 1], 1, -1000000), 1000000, 'Test 85');
test(minElements([-1, -1, -1, -1, -1, -1, -1, -1, -1, -1], 2, -30), 10, 'Test 86');
test(minElements([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 3, 20), 0, 'Test 87');
test(minElements([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1, 5), 5, 'Test 88');
test(minElements([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1, 20), 10, 'Test 89');
test(minElements([-999999, -999999, -999999, -999999, -999999], 1000000, -5000000), 1, 'Test 90');
test(minElements([1, -2, 3, -4, 5], 5, 0), 1, 'Test 91');
test(minElements([999999, 999999, 999999, 999999, 999999], 1000000, 5000000), 1, 'Test 92');
test(minElements([-1000000, -1000000, -1000000, -1000000, -1000000], 1000000, 0), 5, 'Test 93');
test(minElements([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 10, 5), 1, 'Test 94');
test(minElements([123456, -234567, 345678, -456789, 567890], 100000, 123456789), 1232, 'Test 95');
test(minElements([-999999, -999998, -999997, -999996], 999999, -3999990), 0, 'Test 96');
test(minElements([-10, 20, -30, 40], 15, 0), 2, 'Test 97');
test(minElements([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10], 10, -55), 0, 'Test 98');
test(minElements([1000000, 2000000, 3000000], 1000000, 10000000), 4, 'Test 99');
test(minElements([500000, 500000, 500000, 500000, 500000], 1000000, 500000), 2, 'Test 100');
test(minElements([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 1000000, 10000000), 10, 'Test 101');
test(minElements([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 100, 500), 5, 'Test 102');
test(minElements([-1, -1, -1, -1, -1, -1, -1, -1, -1, -1], 2, -20), 5, 'Test 103');
test(minElements([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5, 0), 11, 'Test 104');
test(minElements([-10, -20, -30, -40, -50], 10, 150), 30, 'Test 105');
test(minElements([10, 20, 30, 40, 50], 5, 150), 0, 'Test 106');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

