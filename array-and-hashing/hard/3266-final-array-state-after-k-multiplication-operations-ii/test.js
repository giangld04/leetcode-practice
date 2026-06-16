// Test: 3266. Final Array State After K Multiplication Operations Ii
// 110 test cases from LeetCodeDataset
// Run: node test.js

const { getFinalState } = require("./solution");

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

console.log("\n3266. Final Array State After K Multiplication Operations Ii\n");

test(getFinalState([9,8,7,6,5,4,3,2,1], 9, 10), Error: pow expected 2 arguments, got 3, 'Test 1');
test(getFinalState([9,8,7,6,5], 3, 4), Error: pow expected 2 arguments, got 3, 'Test 2');
test(getFinalState([100000,2000], 2, 1000000), Error: pow expected 2 arguments, got 3, 'Test 3');
test(getFinalState([9,8,7,6,5,4,3,2,1], 9, 2), Error: pow expected 2 arguments, got 3, 'Test 4');
test(getFinalState([9,8,7,6,5], 4, 4), Error: pow expected 2 arguments, got 3, 'Test 5');
test(getFinalState([1,2,3,4,5], 1, 3), Error: pow expected 2 arguments, got 3, 'Test 6');
test(getFinalState([1,1,1,1], 4, 3), Error: pow expected 2 arguments, got 3, 'Test 7');
test(getFinalState([1,2,3,4,5], 3, 3), Error: pow expected 2 arguments, got 3, 'Test 8');
test(getFinalState([1000000000], 1, 1000000000), Error: pow expected 2 arguments, got 3, 'Test 9');
test(getFinalState([9,8,7,6,5], 1, 10), Error: pow expected 2 arguments, got 3, 'Test 10');
test(getFinalState([5,4,3,2,1], 3, 5), Error: pow expected 2 arguments, got 3, 'Test 11');
test(getFinalState([2,1,3,5,6], 5, 2), Error: pow expected 2 arguments, got 3, 'Test 12');
test(getFinalState([5], 10, 10), Error: pow expected 2 arguments, got 3, 'Test 13');
test(getFinalState([1000000000], 10, 1000000), Error: pow expected 2 arguments, got 3, 'Test 14');
test(getFinalState([5,5,5,5,5], 2, 2), Error: pow expected 2 arguments, got 3, 'Test 15');
test(getFinalState([999999999, 999999998, 999999997, 999999996, 999999995], 5, 1000000), Error: pow expected 2 arguments, got 3, 'Test 16');
test(getFinalState([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29], 15, 100000), Error: pow expected 2 arguments, got 3, 'Test 17');
test(getFinalState([999999999, 999999999, 999999999, 999999999, 999999999], 5, 999999999), Error: pow expected 2 arguments, got 3, 'Test 18');
test(getFinalState([1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000], 10, 1000000), Error: pow expected 2 arguments, got 3, 'Test 19');
test(getFinalState([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 100, 2), Error: pow expected 2 arguments, got 3, 'Test 20');
test(getFinalState([3,1,2,1,5,1,4], 7, 3), Error: pow expected 2 arguments, got 3, 'Test 21');
test(getFinalState([1, 1000000000, 2, 999999999, 3, 999999998, 4, 999999997, 5, 999999996], 100, 999999), Error: pow expected 2 arguments, got 3, 'Test 22');
test(getFinalState([1], 1000000000, 1000000), Error: pow expected 2 arguments, got 3, 'Test 23');
test(getFinalState([10, 20, 30, 40, 50, 10, 20, 30, 40, 50], 15, 5), Error: pow expected 2 arguments, got 3, 'Test 24');
test(getFinalState([1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5], 25, 1), [1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5], 'Test 25');
test(getFinalState([999999937, 999999999], 5, 2), Error: pow expected 2 arguments, got 3, 'Test 26');
test(getFinalState([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 15, 5), Error: pow expected 2 arguments, got 3, 'Test 27');
test(getFinalState([999999999, 999999998, 999999997, 999999996, 999999995], 10, 1000000), Error: pow expected 2 arguments, got 3, 'Test 28');
test(getFinalState([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5], 10, 7), Error: pow expected 2 arguments, got 3, 'Test 29');
test(getFinalState([10, 20, 30, 40, 50], 1000000, 2), Error: pow expected 2 arguments, got 3, 'Test 30');
test(getFinalState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50], 50, 49), Error: pow expected 2 arguments, got 3, 'Test 31');
test(getFinalState([123456789, 987654321, 135792468, 246813579, 111111111, 222222222], 25, 987654), Error: pow expected 2 arguments, got 3, 'Test 32');
test(getFinalState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10, 1000000), Error: pow expected 2 arguments, got 3, 'Test 33');
test(getFinalState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 100, 10), Error: pow expected 2 arguments, got 3, 'Test 34');
test(getFinalState([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 50, 5), Error: pow expected 2 arguments, got 3, 'Test 35');
test(getFinalState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 20, 19), Error: pow expected 2 arguments, got 3, 'Test 36');
test(getFinalState([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10], 25, 4), Error: pow expected 2 arguments, got 3, 'Test 37');
test(getFinalState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 5000, 100), Error: pow expected 2 arguments, got 3, 'Test 38');
test(getFinalState([1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000], 10, 10), Error: pow expected 2 arguments, got 3, 'Test 39');
test(getFinalState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10, 11), Error: pow expected 2 arguments, got 3, 'Test 40');
test(getFinalState([5, 3, 8, 3, 9, 1, 7], 10, 3), Error: pow expected 2 arguments, got 3, 'Test 41');
test(getFinalState([5, 5, 5, 5, 5], 20, 5), Error: pow expected 2 arguments, got 3, 'Test 42');
test(getFinalState([999999999], 1000000000, 1000000), Error: pow expected 2 arguments, got 3, 'Test 43');
test(getFinalState([1000000000, 999999999, 888888888, 777777777, 666666666], 10, 1000000000), Error: pow expected 2 arguments, got 3, 'Test 44');
test(getFinalState([1, 2, 2, 3, 3, 4, 4], 14, 2), Error: pow expected 2 arguments, got 3, 'Test 45');
test(getFinalState([7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7], 20, 1000000), Error: pow expected 2 arguments, got 3, 'Test 46');
test(getFinalState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 10000, 10), Error: pow expected 2 arguments, got 3, 'Test 47');
test(getFinalState([1, 10, 100, 1000, 10000, 100000], 500000, 5), Error: pow expected 2 arguments, got 3, 'Test 48');
test(getFinalState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 50, 100), Error: pow expected 2 arguments, got 3, 'Test 49');
test(getFinalState([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 25, 100000), Error: pow expected 2 arguments, got 3, 'Test 50');
test(getFinalState([7, 7, 8, 8, 9, 9, 10], 7, 3), Error: pow expected 2 arguments, got 3, 'Test 51');
test(getFinalState([1, 1, 1, 1, 1], 5, 2), Error: pow expected 2 arguments, got 3, 'Test 52');
test(getFinalState([100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000, 900000, 1000000], 500000, 100000), Error: pow expected 2 arguments, got 3, 'Test 53');
test(getFinalState([5, 3, 8, 3, 9], 3, 4), Error: pow expected 2 arguments, got 3, 'Test 54');
test(getFinalState([999999999, 1, 999999998, 2, 999999997, 3], 10, 1000000), Error: pow expected 2 arguments, got 3, 'Test 55');
test(getFinalState([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150], 15, 7), Error: pow expected 2 arguments, got 3, 'Test 56');
test(getFinalState([999999937, 999999993], 1000000000, 1000000), Error: pow expected 2 arguments, got 3, 'Test 57');
test(getFinalState([123456789, 987654321, 111111111, 222222222, 333333333], 100, 7), Error: pow expected 2 arguments, got 3, 'Test 58');
test(getFinalState([123456789, 987654321, 123456789, 987654321, 123456789, 987654321, 123456789, 987654321], 30, 500000), Error: pow expected 2 arguments, got 3, 'Test 59');
test(getFinalState([999999999], 1000000, 999999999), Error: pow expected 2 arguments, got 3, 'Test 60');
test(getFinalState([100000000, 200000000, 300000000, 400000000, 500000000], 30, 10), Error: pow expected 2 arguments, got 3, 'Test 61');
test(getFinalState([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 9], 15, 5), Error: pow expected 2 arguments, got 3, 'Test 62');
test(getFinalState([5, 4, 3, 2, 1], 10, 3), Error: pow expected 2 arguments, got 3, 'Test 63');
test(getFinalState([1, 1, 1, 1, 1], 10, 5), Error: pow expected 2 arguments, got 3, 'Test 64');
test(getFinalState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 20, 1000000), Error: pow expected 2 arguments, got 3, 'Test 65');
test(getFinalState([1, 2, 2, 3, 4, 5, 5, 6], 10, 3), Error: pow expected 2 arguments, got 3, 'Test 66');
test(getFinalState([1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000], 10, 2), Error: pow expected 2 arguments, got 3, 'Test 67');
test(getFinalState([9, 8, 7, 6, 5, 4, 3, 2, 1], 1, 10), Error: pow expected 2 arguments, got 3, 'Test 68');
test(getFinalState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 10000, 2), Error: pow expected 2 arguments, got 3, 'Test 69');
test(getFinalState([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 10, 11), Error: pow expected 2 arguments, got 3, 'Test 70');
test(getFinalState([9, 8, 7, 6, 5, 4, 3, 2, 1], 9, 9), Error: pow expected 2 arguments, got 3, 'Test 71');
test(getFinalState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100], 100, 99), Error: pow expected 2 arguments, got 3, 'Test 72');
test(getFinalState([2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 10, 5), Error: pow expected 2 arguments, got 3, 'Test 73');
test(getFinalState([1, 1, 1, 1, 1], 1000000000, 2), Error: pow expected 2 arguments, got 3, 'Test 74');
test(getFinalState([7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83], 20, 1000000), Error: pow expected 2 arguments, got 3, 'Test 75');
test(getFinalState([1000000000, 1000000000, 1000000000], 3, 1000000000), Error: pow expected 2 arguments, got 3, 'Test 76');
test(getFinalState([1000000000, 1000000000, 1000000000, 1000000000, 1000000000], 10, 1000000000), Error: pow expected 2 arguments, got 3, 'Test 77');
test(getFinalState([5, 5, 5, 5, 5], 10, 2), Error: pow expected 2 arguments, got 3, 'Test 78');
test(getFinalState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], 30, 17), Error: pow expected 2 arguments, got 3, 'Test 79');
test(getFinalState([999999999, 999999998, 999999997, 999999996, 999999995], 5, 999999999), Error: pow expected 2 arguments, got 3, 'Test 80');
test(getFinalState([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 20, 5), Error: pow expected 2 arguments, got 3, 'Test 81');
test(getFinalState([5, 3, 8, 3, 2, 5, 1, 9], 7, 3), Error: pow expected 2 arguments, got 3, 'Test 82');
test(getFinalState([1000000000, 1000000000, 1000000000, 1000000000, 1000000000], 100000000, 1000000000), Error: pow expected 2 arguments, got 3, 'Test 83');
test(getFinalState([1000000000, 1000000000, 1000000000, 1000000000], 2, 1000000000), Error: pow expected 2 arguments, got 3, 'Test 84');
test(getFinalState([1, 10, 100, 1000, 10000, 100000], 6, 3), Error: pow expected 2 arguments, got 3, 'Test 85');
test(getFinalState([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5], 10, 3), Error: pow expected 2 arguments, got 3, 'Test 86');
test(getFinalState([7, 2, 2, 8, 1, 4], 10, 3), Error: pow expected 2 arguments, got 3, 'Test 87');
test(getFinalState([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 50, 2), Error: pow expected 2 arguments, got 3, 'Test 88');
test(getFinalState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1000000, 1000000), Error: pow expected 2 arguments, got 3, 'Test 89');
test(getFinalState([1000000000, 999999999, 999999998, 999999997], 5, 1000000), Error: pow expected 2 arguments, got 3, 'Test 90');
test(getFinalState([1,1,1,1,1,1,1], 1000000, 2), Error: pow expected 2 arguments, got 3, 'Test 91');
test(getFinalState([7, 7, 7, 7, 7, 7, 7, 7, 7, 7], 10, 5), Error: pow expected 2 arguments, got 3, 'Test 92');
test(getFinalState([5,4,3,2,1], 5, 2), Error: pow expected 2 arguments, got 3, 'Test 93');
test(getFinalState([10, 10, 10, 10, 10, 10, 10, 10], 15, 5), Error: pow expected 2 arguments, got 3, 'Test 94');
test(getFinalState([1000000000], 1000000000, 1), [1000000000], 'Test 95');
test(getFinalState([1000000000] * 10000, 10000, 1), Error: Solution.getFinalState[] missing 1 required positional argument: 'nums', 'Test 96');
test(getFinalState([2, 3, 5, 7, 11, 13, 17, 19, 23, 29], 20, 2), Error: pow expected 2 arguments, got 3, 'Test 97');
test(getFinalState([10,20,30,40,50,60,70,80,90,100], 15, 5), Error: pow expected 2 arguments, got 3, 'Test 98');
test(getFinalState([9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 100, 1000000), Error: pow expected 2 arguments, got 3, 'Test 99');
test(getFinalState([100, 100, 100, 100, 100], 1000000, 1000000), Error: pow expected 2 arguments, got 3, 'Test 100');
test(getFinalState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1000000, 1000000), Error: pow expected 2 arguments, got 3, 'Test 101');
test(getFinalState([2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 500, 2), Error: pow expected 2 arguments, got 3, 'Test 102');
test(getFinalState([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 30, 1000000), Error: pow expected 2 arguments, got 3, 'Test 103');
test(getFinalState([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 5, 5), Error: pow expected 2 arguments, got 3, 'Test 104');
test(getFinalState([1, 10, 100, 1000, 10000, 100000, 1000000], 7, 13), Error: pow expected 2 arguments, got 3, 'Test 105');
test(getFinalState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 20, 1000000000), Error: pow expected 2 arguments, got 3, 'Test 106');
test(getFinalState([500000000, 500000000, 500000000, 500000000, 500000000], 500000000, 2), Error: pow expected 2 arguments, got 3, 'Test 107');
test(getFinalState([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 20, 10), Error: pow expected 2 arguments, got 3, 'Test 108');
test(getFinalState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 20, 1000000000), Error: pow expected 2 arguments, got 3, 'Test 109');
test(getFinalState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 25, 5), Error: pow expected 2 arguments, got 3, 'Test 110');

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
