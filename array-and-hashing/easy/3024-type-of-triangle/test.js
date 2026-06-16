// Test: 3024. Type Of Triangle
// 96 test cases from LeetCodeDataset
// Run: node test.js

const { triangleType } = require("./solution");

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

console.log("\n3024. Type Of Triangle\n");

test(triangleType([2,2,3]), isosceles, 'Test 1');
test(triangleType([10,10,10]), equilateral, 'Test 2');
test(triangleType([1,1,2]), none, 'Test 3');
test(triangleType([6,6,10]), isosceles, 'Test 4');
test(triangleType([6,6,12]), none, 'Test 5');
test(triangleType([3,4,5]), scalene, 'Test 6');
test(triangleType([8,15,17]), scalene, 'Test 7');
test(triangleType([1,2,3]), none, 'Test 8');
test(triangleType([5,7,10]), scalene, 'Test 9');
test(triangleType([6,6,6]), equilateral, 'Test 10');
test(triangleType([50,50,50]), equilateral, 'Test 11');
test(triangleType([5,5,8]), isosceles, 'Test 12');
test(triangleType([5,7,5]), isosceles, 'Test 13');
test(triangleType([3,3,3]), equilateral, 'Test 14');
test(triangleType([7,10,5]), scalene, 'Test 15');
test(triangleType([4,4,7]), isosceles, 'Test 16');
test(triangleType([99, 99, 98]), isosceles, 'Test 17');
test(triangleType([5,5,5]), equilateral, 'Test 18');
test(triangleType([25,25,40]), isosceles, 'Test 19');
test(triangleType([30, 40, 50]), scalene, 'Test 20');
test(triangleType([12, 16, 20]), scalene, 'Test 21');
test(triangleType([10,15,25]), none, 'Test 22');
test(triangleType([99,99,1]), isosceles, 'Test 23');
test(triangleType([5, 5, 8]), isosceles, 'Test 24');
test(triangleType([99, 99, 198]), none, 'Test 25');
test(triangleType([7, 7, 14]), none, 'Test 26');
test(triangleType([45, 45, 89]), isosceles, 'Test 27');
test(triangleType([20, 21, 21]), isosceles, 'Test 28');
test(triangleType([20,25,30]), scalene, 'Test 29');
test(triangleType([45, 45, 45]), equilateral, 'Test 30');
test(triangleType([3,4,6]), scalene, 'Test 31');
test(triangleType([50, 60, 60]), isosceles, 'Test 32');
test(triangleType([50, 50, 80]), isosceles, 'Test 33');
test(triangleType([99,99,99]), equilateral, 'Test 34');
test(triangleType([3,5,5]), isosceles, 'Test 35');
test(triangleType([13,14,15]), scalene, 'Test 36');
test(triangleType([9, 12, 15]), scalene, 'Test 37');
test(triangleType([6, 6, 10]), isosceles, 'Test 38');
test(triangleType([23,23,23]), equilateral, 'Test 39');
test(triangleType([7, 10, 5]), scalene, 'Test 40');
test(triangleType([5, 5, 5]), equilateral, 'Test 41');
test(triangleType([9,9,9]), equilateral, 'Test 42');
test(triangleType([100, 100, 1]), isosceles, 'Test 43');
test(triangleType([6, 6, 11]), isosceles, 'Test 44');
test(triangleType([45,45,45]), equilateral, 'Test 45');
test(triangleType([9,4,6]), scalene, 'Test 46');
test(triangleType([1,2,2]), isosceles, 'Test 47');
test(triangleType([6, 8, 10]), scalene, 'Test 48');
test(triangleType([9,12,15]), scalene, 'Test 49');
test(triangleType([99, 1, 1]), none, 'Test 50');
test(triangleType([45, 45, 90]), none, 'Test 51');
test(triangleType([40,40,41]), isosceles, 'Test 52');
test(triangleType([50, 51, 100]), scalene, 'Test 53');
test(triangleType([5, 12, 13]), scalene, 'Test 54');
test(triangleType([50,51,100]), scalene, 'Test 55');
test(triangleType([2, 2, 4]), none, 'Test 56');
test(triangleType([5,12,13]), scalene, 'Test 57');
test(triangleType([100,100,1]), isosceles, 'Test 58');
test(triangleType([10, 10, 15]), isosceles, 'Test 59');
test(triangleType([5,5,9]), isosceles, 'Test 60');
test(triangleType([10, 10, 20]), none, 'Test 61');
test(triangleType([30,30,59]), isosceles, 'Test 62');
test(triangleType([10, 10, 10]), equilateral, 'Test 63');
test(triangleType([2,2,4]), none, 'Test 64');
test(triangleType([15,15,29]), isosceles, 'Test 65');
test(triangleType([10,10,15]), isosceles, 'Test 66');
test(triangleType([100, 100, 100]), equilateral, 'Test 67');
test(triangleType([25, 25, 30]), isosceles, 'Test 68');
test(triangleType([7, 24, 25]), scalene, 'Test 69');
test(triangleType([9, 40, 41]), scalene, 'Test 70');
test(triangleType([17,17,34]), none, 'Test 71');
test(triangleType([33, 44, 55]), scalene, 'Test 72');
test(triangleType([50,50,80]), isosceles, 'Test 73');
test(triangleType([3, 4, 4]), isosceles, 'Test 74');
test(triangleType([25, 25, 49]), isosceles, 'Test 75');
test(triangleType([10, 15, 25]), none, 'Test 76');
test(triangleType([10, 14, 14]), isosceles, 'Test 77');
test(triangleType([5,7,12]), none, 'Test 78');
test(triangleType([12,16,20]), scalene, 'Test 79');
test(triangleType([1,1,1]), equilateral, 'Test 80');
test(triangleType([7,24,25]), scalene, 'Test 81');
test(triangleType([51,51,100]), isosceles, 'Test 82');
test(triangleType([6,8,10]), scalene, 'Test 83');
test(triangleType([45,45,89]), isosceles, 'Test 84');
test(triangleType([7, 7, 10]), isosceles, 'Test 85');
test(triangleType([50,50,100]), none, 'Test 86');
test(triangleType([1, 1, 2]), none, 'Test 87');
test(triangleType([2, 2, 3]), isosceles, 'Test 88');
test(triangleType([30,40,50]), scalene, 'Test 89');
test(triangleType([33,33,34]), isosceles, 'Test 90');
test(triangleType([50, 50, 70]), isosceles, 'Test 91');
test(triangleType([1,100,100]), isosceles, 'Test 92');
test(triangleType([1,100,1]), none, 'Test 93');
test(triangleType([15, 15, 25]), isosceles, 'Test 94');
test(triangleType([9,9,12]), isosceles, 'Test 95');
test(triangleType([100,100,100]), equilateral, 'Test 96');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

