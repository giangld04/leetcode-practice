// Test: 1354. Construct Target Array With Multiple Sums
// 99 test cases from LeetCodeDataset
// Run: node test.js

const { isPossible } = require("./solution");

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

console.log("\n1354. Construct Target Array With Multiple Sums\n");

test(isPossible([10,9,8,7,6,5,4,3,2,1]), false, 'Test 1');
test(isPossible([1,2,3,4,5]), false, 'Test 2');
test(isPossible([1000000000,1,1]), false, 'Test 3');
test(isPossible([5,7,1]), true, 'Test 4');
test(isPossible([10,1]), true, 'Test 5');
test(isPossible([1000000000,1000000000,1000000000,1000000000,1000000000]), false, 'Test 6');
test(isPossible([5,5,5]), false, 'Test 7');
test(isPossible([1000000000,1000000000]), false, 'Test 8');
test(isPossible([1000000000, 1]), true, 'Test 9');
test(isPossible([1,1,1,2]), false, 'Test 10');
test(isPossible([5,10,15]), false, 'Test 11');
test(isPossible([1,1000000000,1000000000]), false, 'Test 12');
test(isPossible([9,3,5]), true, 'Test 13');
test(isPossible([1,1,1]), true, 'Test 14');
test(isPossible([2,900000000]), false, 'Test 15');
test(isPossible([8,5]), true, 'Test 16');
test(isPossible([1,1000000000]), true, 'Test 17');
test(isPossible([1,1,1,1,1,1,1,1,1,1]), true, 'Test 18');
test(isPossible([7,7,7,7,7,7,7,7,7,7]), false, 'Test 19');
test(isPossible([1000000000, 500000000, 250000000, 125000000, 62500000, 31250000, 15625000, 7812500, 3906250, 1953125]), false, 'Test 20');
test(isPossible([21, 17, 13, 9, 5, 1]), false, 'Test 21');
test(isPossible([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]), false, 'Test 22');
test(isPossible([100, 100, 100, 100, 100, 99, 98, 97, 96, 95]), false, 'Test 23');
test(isPossible([5,10,15,20,25,30]), false, 'Test 24');
test(isPossible([1000000000,1000000000,1000000000,1000000000,1000000000,1000000000,1000000000,1000000000,1000000000,1000000000]), false, 'Test 25');
test(isPossible([20,19,18,17,16,15,14,13,12,11]), false, 'Test 26');
test(isPossible([37, 11, 25, 7, 19]), false, 'Test 27');
test(isPossible([41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131]), false, 'Test 28');
test(isPossible([5,10,15,20,25,30,35,40,45,50]), false, 'Test 29');
test(isPossible([1,1000000000,1,1000000000,1,1000000000]), false, 'Test 30');
test(isPossible([5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100]), false, 'Test 31');
test(isPossible([2, 6, 10, 14, 18, 22]), false, 'Test 32');
test(isPossible([100,100,100,100,99]), false, 'Test 33');
test(isPossible([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 20]), false, 'Test 34');
test(isPossible([13,11,10]), false, 'Test 35');
test(isPossible([81, 27, 9, 3, 1]), false, 'Test 36');
test(isPossible([100,90,80,70,60,50,40,30,20,10]), false, 'Test 37');
test(isPossible([5, 7, 9, 13, 21, 34, 55]), false, 'Test 38');
test(isPossible([10,5,15,20]), false, 'Test 39');
test(isPossible([987,654,321]), false, 'Test 40');
test(isPossible([18,5,7]), false, 'Test 41');
test(isPossible([1000000000, 999999999, 999999998, 999999997, 999999996, 999999995, 999999994, 999999993, 999999992, 999999991]), false, 'Test 42');
test(isPossible([1,2,4,8,16,32,64,128,256,512]), false, 'Test 43');
test(isPossible([3, 5, 11, 13, 17]), false, 'Test 44');
test(isPossible([50,25,50,25,50,25,50,25,50,25,50,25,50,25,50,25,50,25,50,25]), false, 'Test 45');
test(isPossible([1000000000, 999999999, 999999998, 999999997, 999999996, 999999995, 999999994]), false, 'Test 46');
test(isPossible([21,15,12]), false, 'Test 47');
test(isPossible([1000000000,999999999,999999998,999999997,999999996]), false, 'Test 48');
test(isPossible([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), false, 'Test 49');
test(isPossible([7, 14, 21, 28, 35, 42, 49]), false, 'Test 50');
test(isPossible([1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000001]), false, 'Test 51');
test(isPossible([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), true, 'Test 52');
test(isPossible([123456789, 987654321, 456789123, 321987654]), false, 'Test 53');
test(isPossible([3,6,9,12,15,18,21,24,27,30]), false, 'Test 54');
test(isPossible([999999999, 999999999, 1]), false, 'Test 55');
test(isPossible([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]), false, 'Test 56');
test(isPossible([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), false, 'Test 57');
test(isPossible([8,13,21,34,55,89]), false, 'Test 58');
test(isPossible([100,99,98,97]), false, 'Test 59');
test(isPossible([1000000000,1,1,1,1]), false, 'Test 60');
test(isPossible([123456789,987654321,111111111]), false, 'Test 61');
test(isPossible([17,7,17,7,17]), false, 'Test 62');
test(isPossible([4,12,33,55]), false, 'Test 63');
test(isPossible([1000000000, 1000000000, 1000000000, 1]), false, 'Test 64');
test(isPossible([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2]), false, 'Test 65');
test(isPossible([45, 12, 18, 30, 36, 24]), false, 'Test 66');
test(isPossible([314159265,271828182,161803398,141421356]), false, 'Test 67');
test(isPossible([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71]), false, 'Test 68');
test(isPossible([7, 11, 15, 22]), false, 'Test 69');
test(isPossible([1,2,4,8,16,32,64,128,256,512,1024,2048,4096,8192,16384,32768,65536,131072,262144,524288]), false, 'Test 70');
test(isPossible([17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17]), false, 'Test 71');
test(isPossible([999999999, 1, 999999998, 999999997, 999999996, 999999995, 999999994, 999999993, 999999992, 999999991]), false, 'Test 72');
test(isPossible([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1000000000]), false, 'Test 73');
test(isPossible([33,17,13]), true, 'Test 74');
test(isPossible([1, 1, 2, 3, 6, 11, 20, 37, 68]), false, 'Test 75');
test(isPossible([101,103,107,109]), false, 'Test 76');
test(isPossible([10, 15, 3]), false, 'Test 77');
test(isPossible([7,18,5,4]), false, 'Test 78');
test(isPossible([5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), false, 'Test 79');
test(isPossible([2,900000000,900000000]), false, 'Test 80');
test(isPossible([123456789,987654321]), false, 'Test 81');
test(isPossible([100, 200, 300, 400, 500]), false, 'Test 82');
test(isPossible([1, 1000000000, 1000000000, 1000000000]), false, 'Test 83');
test(isPossible([2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711]), false, 'Test 84');
test(isPossible([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22]), false, 'Test 85');
test(isPossible([5, 11, 19, 29, 41]), false, 'Test 86');
test(isPossible([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1000000000]), false, 'Test 87');
test(isPossible([3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41]), false, 'Test 88');
test(isPossible([10, 15, 20, 30]), false, 'Test 89');
test(isPossible([2, 2, 2, 2, 2, 2, 2, 2, 2, 1]), false, 'Test 90');
test(isPossible([1000000000,1000000000,999999999,1]), false, 'Test 91');
test(isPossible([1,2,3,4,5,6,7,8,9,10]), false, 'Test 92');
test(isPossible([123456789, 987654321, 456789123, 321987654, 654321987, 789456123, 123789456, 456123789, 789654321, 987456123]), false, 'Test 93');
test(isPossible([1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1]), false, 'Test 94');
test(isPossible([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150]), false, 'Test 95');
test(isPossible([3,9,20,5]), false, 'Test 96');
test(isPossible([1000000000,1000000000,1000000000,1000000000,1000000000,1000000000,1000000000,1000000000,1000000000,1]), false, 'Test 97');
test(isPossible([3, 6, 12, 24, 48, 96, 192, 384, 768, 1536]), false, 'Test 98');
test(isPossible([2,2,2,2,2,2,2,2,2,2]), false, 'Test 99');

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
