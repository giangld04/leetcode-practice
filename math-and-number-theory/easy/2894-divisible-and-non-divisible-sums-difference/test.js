// Test: 2894. Divisible And Non Divisible Sums Difference
// 93 test cases from LeetCodeDataset
// Run: node test.js

const { differenceOfSums } = require("./solution");

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

console.log("\n2894. Divisible And Non Divisible Sums Difference\n");

test(differenceOfSums(1000, 1000), 498500, 'Test 1');
test(differenceOfSums(5, 6), 15, 'Test 2');
test(differenceOfSums(5, 1), -15, 'Test 3');
test(differenceOfSums(20, 4), 90, 'Test 4');
test(differenceOfSums(100, 10), 3950, 'Test 5');
test(differenceOfSums(1, 1), -1, 'Test 6');
test(differenceOfSums(7, 2), 4, 'Test 7');
test(differenceOfSums(10, 3), 19, 'Test 8');
test(differenceOfSums(600, 50), 172500, 'Test 9');
test(differenceOfSums(300, 7), 32508, 'Test 10');
test(differenceOfSums(120, 13), 6090, 'Test 11');
test(differenceOfSums(250, 7), 22555, 'Test 12');
test(differenceOfSums(350, 7), 43575, 'Test 13');
test(differenceOfSums(800, 20), 287600, 'Test 14');
test(differenceOfSums(250, 11), 25809, 'Test 15');
test(differenceOfSums(950, 19), 403275, 'Test 16');
test(differenceOfSums(600, 31), 168520, 'Test 17');
test(differenceOfSums(750, 25), 258375, 'Test 18');
test(differenceOfSums(999, 333), 495504, 'Test 19');
test(differenceOfSums(600, 29), 168120, 'Test 20');
test(differenceOfSums(600, 9), 140502, 'Test 21');
test(differenceOfSums(300, 15), 38850, 'Test 22');
test(differenceOfSums(1000, 999), 498502, 'Test 23');
test(differenceOfSums(999, 17), 441326, 'Test 24');
test(differenceOfSums(800, 23), 293030, 'Test 25');
test(differenceOfSums(700, 29), 227950, 'Test 26');
test(differenceOfSums(450, 19), 90987, 'Test 27');
test(differenceOfSums(600, 5), 107700, 'Test 28');
test(differenceOfSums(750, 19), 251985, 'Test 29');
test(differenceOfSums(300, 25), 41250, 'Test 30');
test(differenceOfSums(600, 42), 171480, 'Test 31');
test(differenceOfSums(900, 29), 376682, 'Test 32');
test(differenceOfSums(300, 11), 36834, 'Test 33');
test(differenceOfSums(999, 13), 423424, 'Test 34');
test(differenceOfSums(400, 37), 76130, 'Test 35');
test(differenceOfSums(500, 41), 118854, 'Test 36');
test(differenceOfSums(550, 11), 123475, 'Test 37');
test(differenceOfSums(300, 4), 22350, 'Test 38');
test(differenceOfSums(222, 37), 23199, 'Test 39');
test(differenceOfSums(800, 31), 300250, 'Test 40');
test(differenceOfSums(450, 18), 89775, 'Test 41');
test(differenceOfSums(600, 20), 161700, 'Test 42');
test(differenceOfSums(750, 15), 243375, 'Test 43');
test(differenceOfSums(600, 19), 161452, 'Test 44');
test(differenceOfSums(650, 17), 186381, 'Test 45');
test(differenceOfSums(750, 50), 269625, 'Test 46');
test(differenceOfSums(999, 11), 409410, 'Test 47');
test(differenceOfSums(400, 41), 76510, 'Test 48');
test(differenceOfSums(250, 13), 26435, 'Test 49');
test(differenceOfSums(800, 33), 300600, 'Test 50');
test(differenceOfSums(500, 13), 105984, 'Test 51');
test(differenceOfSums(950, 31), 422895, 'Test 52');
test(differenceOfSums(500, 250), 123750, 'Test 53');
test(differenceOfSums(300, 19), 40590, 'Test 54');
test(differenceOfSums(500, 30), 117090, 'Test 55');
test(differenceOfSums(700, 11), 200998, 'Test 56');
test(differenceOfSums(800, 400), 318000, 'Test 57');
test(differenceOfSums(900, 55), 390490, 'Test 58');
test(differenceOfSums(450, 2), -225, 'Test 59');
test(differenceOfSums(375, 16), 61668, 'Test 60');
test(differenceOfSums(200, 3), 6834, 'Test 61');
test(differenceOfSums(333, 3), 18315, 'Test 62');
test(differenceOfSums(250, 17), 27805, 'Test 63');
test(differenceOfSums(350, 23), 55905, 'Test 64');
test(differenceOfSums(300, 29), 41960, 'Test 65');
test(differenceOfSums(400, 16), 69800, 'Test 66');
test(differenceOfSums(500, 7), 89466, 'Test 67');
test(differenceOfSums(333, 77), 54071, 'Test 68');
test(differenceOfSums(750, 5), 168375, 'Test 69');
test(differenceOfSums(200, 17), 17856, 'Test 70');
test(differenceOfSums(450, 20), 91355, 'Test 71');
test(differenceOfSums(600, 11), 147630, 'Test 72');
test(differenceOfSums(800, 17), 282048, 'Test 73');
test(differenceOfSums(500, 25), 114750, 'Test 74');
test(differenceOfSums(800, 300), 318600, 'Test 75');
test(differenceOfSums(100, 19), 4480, 'Test 76');
test(differenceOfSums(450, 30), 94275, 'Test 77');
test(differenceOfSums(800, 16), 279600, 'Test 78');
test(differenceOfSums(200, 13), 16980, 'Test 79');
test(differenceOfSums(750, 29), 262775, 'Test 80');
test(differenceOfSums(500, 5), 74750, 'Test 81');
test(differenceOfSums(200, 8), 14900, 'Test 82');
test(differenceOfSums(750, 42), 268773, 'Test 83');
test(differenceOfSums(400, 11), 65548, 'Test 84');
test(differenceOfSums(900, 9), 314550, 'Test 85');
test(differenceOfSums(450, 23), 92735, 'Test 86');
test(differenceOfSums(300, 150), 44250, 'Test 87');
test(differenceOfSums(420, 23), 80544, 'Test 88');
test(differenceOfSums(999, 7), 357358, 'Test 89');
test(differenceOfSums(800, 11), 262584, 'Test 90');
test(differenceOfSums(900, 23), 369570, 'Test 91');
test(differenceOfSums(800, 25), 294000, 'Test 92');
test(differenceOfSums(600, 12), 149700, 'Test 93');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

