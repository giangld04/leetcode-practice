// Test: 1467. Probability Of A Two Boxes Having The Same Number Of Distinct Balls
// 102 test cases from LeetCodeDataset
// Run: node test.js

const { getProbability } = require("./solution");

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

console.log("\n1467. Probability Of A Two Boxes Having The Same Number Of Distinct Balls\n");

test(getProbability([6,6]), 1.0, 'Test 1');
test(getProbability([4,4,4,4]), 0.820979020979021, 'Test 2');
test(getProbability([2,1,1]), 0.6666666666666666, 'Test 3');
test(getProbability([1,2,2,2,2,2,2]), 0.8571428571428571, 'Test 4');
test(getProbability([1,2,1,2]), 0.6, 'Test 5');
test(getProbability([2,2,2,2]), 1.0, 'Test 6');
test(getProbability([6,1]), 0.0, 'Test 7');
test(getProbability([6]), 1.0, 'Test 8');
test(getProbability([3,3]), 1.0, 'Test 9');
test(getProbability([1,2,3,4,5,6]), 0.5375089306977852, 'Test 10');
test(getProbability([2,2,2]), 1.0, 'Test 11');
test(getProbability([1,1,1,1,1,1,1,1]), 1.0, 'Test 12');
test(getProbability([2,1,1,1,1]), 0.6, 'Test 13');
test(getProbability([1,1]), 1.0, 'Test 14');
test(getProbability([3,2,1]), 0.3, 'Test 15');
test(getProbability([1,2,3]), 0.3, 'Test 16');
test(getProbability([6,6,6,6,6,6,6,6]), 0.8557108876701283, 'Test 17');
test(getProbability([1,1,1,1]), 1.0, 'Test 18');
test(getProbability([1,1,2,2,3,3]), 0.38311688311688313, 'Test 19');
test(getProbability([4,2]), 0.6, 'Test 20');
test(getProbability([5,5,1,1,1]), 0.032467532467532464, 'Test 21');
test(getProbability([4,3,2,1]), 0.30952380952380953, 'Test 22');
test(getProbability([5, 5, 1, 1]), 0.5454545454545454, 'Test 23');
test(getProbability([1,2,3,4]), 0.30952380952380953, 'Test 24');
test(getProbability([6, 2, 2, 2]), 0.4329004329004329, 'Test 25');
test(getProbability([6, 4, 2, 2, 2]), 0.40792540792540793, 'Test 26');
test(getProbability([2,2,2,1,1]), 0.5714285714285714, 'Test 27');
test(getProbability([5,1,1,1,1]), 0.8571428571428571, 'Test 28');
test(getProbability([4, 4, 1]), 0.11428571428571428, 'Test 29');
test(getProbability([2, 2, 2, 2, 2, 2]), 1.0, 'Test 30');
test(getProbability([6, 6]), 1.0, 'Test 31');
test(getProbability([6, 1, 1, 1]), 0.0, 'Test 32');
test(getProbability([3,2,1,1,1]), 0.2571428571428571, 'Test 33');
test(getProbability([3,3,3,1]), 0.21428571428571427, 'Test 34');
test(getProbability([3,2,2,1]), 0.37142857142857144, 'Test 35');
test(getProbability([1, 1, 1, 1, 1, 1]), 1.0, 'Test 36');
test(getProbability([1,1,1,1,1,1]), 1.0, 'Test 37');
test(getProbability([5,4,3,2,1]), 0.5474941724941725, 'Test 38');
test(getProbability([2,2,2,2,1]), 0.8, 'Test 39');
test(getProbability([6, 6, 6]), 0.9777869189633895, 'Test 40');
test(getProbability([1, 2, 3, 4]), 0.30952380952380953, 'Test 41');
test(getProbability([4, 2, 1]), 0.5, 'Test 42');
test(getProbability([1, 2, 2, 1, 1]), 0.6, 'Test 43');
test(getProbability([3,2,2,1,1,1]), 0.30952380952380953, 'Test 44');
test(getProbability([5,3,2]), 0.5555555555555556, 'Test 45');
test(getProbability([6,1,1]), 0.5714285714285714, 'Test 46');
test(getProbability([5, 3, 1]), 0.21428571428571427, 'Test 47');
test(getProbability([4,2,1,1]), 0.34285714285714286, 'Test 48');
test(getProbability([3,2,1,1]), 0.7, 'Test 49');
test(getProbability([5, 3, 3]), 1.3531746031746033, 'Test 50');
test(getProbability([6, 3, 3]), 0.7251082251082251, 'Test 51');
test(getProbability([5, 1, 1]), 1.0, 'Test 52');
test(getProbability([4,2,2]), 0.5142857142857142, 'Test 53');
test(getProbability([3, 3, 1, 1]), 0.5714285714285714, 'Test 54');
test(getProbability([3,3,3,3,3,3]), 0.6334841628959276, 'Test 55');
test(getProbability([4, 3, 2, 1]), 0.30952380952380953, 'Test 56');
test(getProbability([2,3,2,1]), 0.37142857142857144, 'Test 57');
test(getProbability([2, 2, 2, 2]), 1.0, 'Test 58');
test(getProbability([4,2,2,1]), 0.5857142857142857, 'Test 59');
test(getProbability([4,4,4,2]), 0.5664335664335665, 'Test 60');
test(getProbability([1,2,2,3,3]), 0.6507936507936508, 'Test 61');
test(getProbability([2,2,1,1,1,1]), 0.5142857142857142, 'Test 62');
test(getProbability([1, 1, 1, 1, 1, 1, 1, 1]), 1.0, 'Test 63');
test(getProbability([3, 2, 2]), 1.1, 'Test 64');
test(getProbability([6,2,1,1]), 0.31746031746031744, 'Test 65');
test(getProbability([5,5,5]), 1.7657342657342658, 'Test 66');
test(getProbability([4,3,1]), 0.11428571428571428, 'Test 67');
test(getProbability([5,1,1,1,1,1]), 0.0, 'Test 68');
test(getProbability([4,4,1,1]), 0.5555555555555556, 'Test 69');
test(getProbability([6, 2, 2]), 0.47619047619047616, 'Test 70');
test(getProbability([1, 3, 3, 1]), 0.5714285714285714, 'Test 71');
test(getProbability([5, 1, 1, 1]), 0.0, 'Test 72');
test(getProbability([3,3,1,1]), 0.5714285714285714, 'Test 73');
test(getProbability([3, 3, 3, 3]), 0.7662337662337663, 'Test 74');
test(getProbability([6,1,1,1,1,1,1,1]), 0.0, 'Test 75');
test(getProbability([3,3,3,3]), 0.7662337662337663, 'Test 76');
test(getProbability([6,2,1,1,1]), 0.4166666666666667, 'Test 77');
test(getProbability([4, 2]), 0.6, 'Test 78');
test(getProbability([5,1,1,1]), 0.0, 'Test 79');
test(getProbability([4, 2, 2]), 0.5142857142857142, 'Test 80');
test(getProbability([2, 2, 1, 1, 1, 1]), 0.5142857142857142, 'Test 81');
test(getProbability([4, 4, 4, 4]), 0.820979020979021, 'Test 82');
test(getProbability([1, 1, 2, 2, 3, 3]), 0.38311688311688313, 'Test 83');
test(getProbability([4,4,2,2]), 0.5238095238095238, 'Test 84');
test(getProbability([6, 1, 1]), 0.5714285714285714, 'Test 85');
test(getProbability([4,4,1]), 0.11428571428571428, 'Test 86');
test(getProbability([6, 6, 1, 1]), 0.5384615384615384, 'Test 87');
test(getProbability([4, 4, 2]), 0.6190476190476191, 'Test 88');
test(getProbability([6,2,2,2,2,2,2]), 0.38009049773755654, 'Test 89');
test(getProbability([4, 4, 3, 2, 1]), 0.30186480186480186, 'Test 90');
test(getProbability([3, 2, 1, 1, 1]), 0.2571428571428571, 'Test 91');
test(getProbability([4, 4, 4]), 0.8961038961038961, 'Test 92');
test(getProbability([6,1,1,1]), 0.0, 'Test 93');
test(getProbability([2,2,2,2,2,2]), 1.0, 'Test 94');
test(getProbability([6,1,1,1,1,1]), 0.0, 'Test 95');
test(getProbability([6,3,1,1,1,1]), 0.6818181818181818, 'Test 96');
test(getProbability([1, 2, 3, 2]), 0.37142857142857144, 'Test 97');
test(getProbability([5,2,2,1]), 0.31746031746031744, 'Test 98');
test(getProbability([3, 2, 1]), 0.3, 'Test 99');
test(getProbability([3,2,1,1,1,1]), 0.6, 'Test 100');
test(getProbability([2, 2, 2, 1, 1]), 0.5714285714285714, 'Test 101');
test(getProbability([3, 2, 2, 1]), 0.37142857142857144, 'Test 102');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

