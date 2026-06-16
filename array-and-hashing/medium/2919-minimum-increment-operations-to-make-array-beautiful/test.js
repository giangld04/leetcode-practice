// Test: 2919. Minimum Increment Operations To Make Array Beautiful
// 118 test cases from LeetCodeDataset
// Run: node test.js

const { minIncrementOperations } = require("./solution");

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

console.log("\n2919. Minimum Increment Operations To Make Array Beautiful\n");

test(minIncrementOperations([5,5,5,5,5], 5), 0, 'Test 1');
test(minIncrementOperations([10,9,8,7,6], 10), 2, 'Test 2');
test(minIncrementOperations([1000000000,0,1000000000,0,1000000000], 1000000000), 0, 'Test 3');
test(minIncrementOperations([1,2,1,2,1,2,1,2,1], 3), 4, 'Test 4');
test(minIncrementOperations([1,2,3,4,5,6,7,8,9], 5), 2, 'Test 5');
test(minIncrementOperations([1,0,0,0,1], 2), 2, 'Test 6');
test(minIncrementOperations([1000000000,1000000000,1000000000], 1000000000), 0, 'Test 7');
test(minIncrementOperations([1,0,1,0,1,0,1,0,1], 2), 3, 'Test 8');
test(minIncrementOperations([5,5,5,5], 3), 0, 'Test 9');
test(minIncrementOperations([1,2,3,4,5], 3), 0, 'Test 10');
test(minIncrementOperations([10,9,8,7,6,5], 10), 3, 'Test 11');
test(minIncrementOperations([2,3,0,0,2], 4), 3, 'Test 12');
test(minIncrementOperations([9,8,7,6,5,4,3,2,1], 10), 12, 'Test 13');
test(minIncrementOperations([0,1,3,3], 5), 2, 'Test 14');
test(minIncrementOperations([1,2,3,4,5,6], 7), 5, 'Test 15');
test(minIncrementOperations([5,5,5,5,5], 3), 0, 'Test 16');
test(minIncrementOperations([0,0,0,0,0,0], 0), 0, 'Test 17');
test(minIncrementOperations([10,9,8,7,6,5,4,3,2,1], 10), 12, 'Test 18');
test(minIncrementOperations([1,1,2], 1), 0, 'Test 19');
test(minIncrementOperations([3,1,4,1,5,9,2,6,5,3,5], 5), 1, 'Test 20');
test(minIncrementOperations([0,0,0,0,0,0], 1), 2, 'Test 21');
test(minIncrementOperations([0,0,0,0,0], 3), 3, 'Test 22');
test(minIncrementOperations([9,8,7,6,5,4,3,2,1,0], 5), 3, 'Test 23');
test(minIncrementOperations([1000000000,999999999,999999998,999999997,999999996], 1000000000), 2, 'Test 24');
test(minIncrementOperations([3,2,1,5,4,6,7,8,9,10], 5), 2, 'Test 25');
test(minIncrementOperations([1, 3, 2, 5, 4, 7, 6, 9, 8, 10], 5), 2, 'Test 26');
test(minIncrementOperations([1,2,3,4,5,6,7,8,9,10], 10), 12, 'Test 27');
test(minIncrementOperations([100,200,300,400,500,600,700,800,900,1000], 500), 200, 'Test 28');
test(minIncrementOperations([1,3,2,4,5,6,7,8,9,10,11,12,13,14,15], 8), 8, 'Test 29');
test(minIncrementOperations([10,20,30,40,50,60,70,80,90], 25), 0, 'Test 30');
test(minIncrementOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 7), 5, 'Test 31');
test(minIncrementOperations([1,1,1,0,0,0,1,1,1,0], 1), 1, 'Test 32');
test(minIncrementOperations([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19], 10), 15, 'Test 33');
test(minIncrementOperations([9,8,7,6,5,4,3,2,1,0,9,8,7,6,5,4,3,2,1,0], 7), 14, 'Test 34');
test(minIncrementOperations([3, 0, 0, 3, 0, 0, 3, 0, 0], 3), 0, 'Test 35');
test(minIncrementOperations([5,1,4,2,8,3,6,9,7], 5), 1, 'Test 36');
test(minIncrementOperations([1,0,2,0,3,0,4,0,5,0], 5), 6, 'Test 37');
test(minIncrementOperations([0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1], 2), 5, 'Test 38');
test(minIncrementOperations([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 0), 0, 'Test 39');
test(minIncrementOperations([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 2), 3, 'Test 40');
test(minIncrementOperations([20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1], 10), 12, 'Test 41');
test(minIncrementOperations([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 4), 0, 'Test 42');
test(minIncrementOperations([2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 15), 12, 'Test 43');
test(minIncrementOperations([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 5), 10, 'Test 44');
test(minIncrementOperations([9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9], 10), 5, 'Test 45');
test(minIncrementOperations([5,5,5,5,5,5,5,5,5,5], 10), 15, 'Test 46');
test(minIncrementOperations([5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5], 3), 3, 'Test 47');
test(minIncrementOperations([10,9,8,7,6,5,4,3,2,1], 6), 3, 'Test 48');
test(minIncrementOperations([1,0,1,0,1,0,1,0,1,0], 1), 0, 'Test 49');
test(minIncrementOperations([1,2,3,4,3,2,1,2,3,4], 4), 4, 'Test 50');
test(minIncrementOperations([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 10), 12, 'Test 51');
test(minIncrementOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1), 0, 'Test 52');
test(minIncrementOperations([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39], 20), 27, 'Test 53');
test(minIncrementOperations([1, 100, 2, 99, 3, 98, 4, 97, 5, 96], 50), 0, 'Test 54');
test(minIncrementOperations([1, 2, 1, 2, 1, 2, 1, 2, 1, 2], 3), 4, 'Test 55');
test(minIncrementOperations([0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2], 2), 0, 'Test 56');
test(minIncrementOperations([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 10), 15, 'Test 57');
test(minIncrementOperations([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 5), 0, 'Test 58');
test(minIncrementOperations([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 1), 6, 'Test 59');
test(minIncrementOperations([5, 1, 9, 3, 7, 8, 2, 6, 4], 6), 0, 'Test 60');
test(minIncrementOperations([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 2), 10, 'Test 61');
test(minIncrementOperations([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150], 100), 120, 'Test 62');
test(minIncrementOperations([100, 100, 100, 100, 100, 100, 100, 100, 100, 100], 100), 0, 'Test 63');
test(minIncrementOperations([0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6], 4), 10, 'Test 64');
test(minIncrementOperations([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 5), 3, 'Test 65');
test(minIncrementOperations([1, 3, 2, 4, 5, 6, 7, 8, 9, 10], 4), 1, 'Test 66');
test(minIncrementOperations([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0], 1), 0, 'Test 67');
test(minIncrementOperations([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2], 3), 9, 'Test 68');
test(minIncrementOperations([0,1,2,3,4,5,6,7,8,9], 0), 0, 'Test 69');
test(minIncrementOperations([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2], 2), 0, 'Test 70');
test(minIncrementOperations([100, 101, 102, 103, 104, 105, 106, 107, 108, 109], 105), 3, 'Test 71');
test(minIncrementOperations([8, 6, 7, 5, 3, 0, 9], 8), 3, 'Test 72');
test(minIncrementOperations([1,2,3,1,2,3,1,2,3,1,2,3,1,2,3], 3), 0, 'Test 73');
test(minIncrementOperations([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30], 15), 12, 'Test 74');
test(minIncrementOperations([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3], 4), 6, 'Test 75');
test(minIncrementOperations([10, 15, 0, 20, 5, 25, 1, 30], 10), 0, 'Test 76');
test(minIncrementOperations([10, 20, 30, 40, 50, 60, 70, 80, 90], 25), 0, 'Test 77');
test(minIncrementOperations([3,1,4,1,5,9,2,6,5,3,5], 6), 3, 'Test 78');
test(minIncrementOperations([2,4,6,8,10,12,14,16,18,20], 15), 12, 'Test 79');
test(minIncrementOperations([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], 15), 35, 'Test 80');
test(minIncrementOperations([9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 9, 8, 7, 6, 5], 5), 3, 'Test 81');
test(minIncrementOperations([5,5,5,5,5,5,5,5,5,5], 5), 0, 'Test 82');
test(minIncrementOperations([1,3,5,7,9,11,13,15,17,19], 10), 5, 'Test 83');
test(minIncrementOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 8), 7, 'Test 84');
test(minIncrementOperations([9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9], 5), 8, 'Test 85');
test(minIncrementOperations([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 8), 7, 'Test 86');
test(minIncrementOperations([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 6), 3, 'Test 87');
test(minIncrementOperations([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 500), 200, 'Test 88');
test(minIncrementOperations([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 0), 0, 'Test 89');
test(minIncrementOperations([5, 3, 2, 1, 0, 6, 4, 8, 7], 5), 3, 'Test 90');
test(minIncrementOperations([1000000000,999999999,888888888,777777777,666666666,555555555,444444444,333333333,222222222,111111111], 900000000), 800000001, 'Test 91');
test(minIncrementOperations([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5], 7), 5, 'Test 92');
test(minIncrementOperations([1,1,1,1,1,1,1,1,1,1], 2), 3, 'Test 93');
test(minIncrementOperations([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 2), 10, 'Test 94');
test(minIncrementOperations([1,2,3,4,5,4,3,2,1], 4), 2, 'Test 95');
test(minIncrementOperations([1, 0, 0, 0, 0, 0, 0, 0, 0, 1], 2), 6, 'Test 96');
test(minIncrementOperations([1000000000, 999999999, 888888888, 777777777, 666666666, 555555555], 777777777), 0, 'Test 97');
test(minIncrementOperations([10, 0, 10, 0, 10, 0, 10, 0, 10], 5), 0, 'Test 98');
test(minIncrementOperations([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 2), 6, 'Test 99');
test(minIncrementOperations([9, 9, 9, 9, 9, 9, 9, 9, 9, 9], 10), 3, 'Test 100');
test(minIncrementOperations([100, 1, 2, 3, 4, 5, 6, 7, 8, 9], 50), 132, 'Test 101');
test(minIncrementOperations([2, 1, 0, 2, 1, 0, 2, 1, 0, 2, 1, 0], 2), 0, 'Test 102');
test(minIncrementOperations([5, 3, 2, 7, 1, 4, 6, 8, 0], 6), 1, 'Test 103');
test(minIncrementOperations([20, 18, 16, 14, 12, 10, 8, 6, 4, 2], 10), 4, 'Test 104');
test(minIncrementOperations([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 10), 12, 'Test 105');
test(minIncrementOperations([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 5), 25, 'Test 106');
test(minIncrementOperations([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 1), 5, 'Test 107');
test(minIncrementOperations([9,9,9,9,9,9,9,9,9,9], 10), 3, 'Test 108');
test(minIncrementOperations([15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 10), 12, 'Test 109');
test(minIncrementOperations([5,4,3,2,1,0,9,8,7,6], 6), 5, 'Test 110');
test(minIncrementOperations([2,1,0,1,2,1,0,2,1,0], 2), 1, 'Test 111');
test(minIncrementOperations([5, 3, 2, 8, 6, 7, 10, 1, 4], 6), 1, 'Test 112');
test(minIncrementOperations([1,0,1,0,1,0,1,0,1,0,1,0], 2), 5, 'Test 113');
test(minIncrementOperations([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 5), 25, 'Test 114');
test(minIncrementOperations([1000,900,800,700,600,500,400,300,200,100], 600), 300, 'Test 115');
test(minIncrementOperations([15,14,13,12,11,10,9,8,7,6,5,4,3,2,1], 8), 7, 'Test 116');
test(minIncrementOperations([0,0,0,0,0,0,0,0,0,0], 10), 30, 'Test 117');
test(minIncrementOperations([100,90,80,70,60,50,40,30,20,10], 55), 25, 'Test 118');

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
