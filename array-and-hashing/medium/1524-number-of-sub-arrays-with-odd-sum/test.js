// Test: 1524. Number Of Sub Arrays With Odd Sum
// 89 test cases from LeetCodeDataset
// Run: node test.js

const { numOfSubarrays } = require("./solution");

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

console.log("\n1524. Number Of Sub Arrays With Odd Sum\n");

test(numOfSubarrays([2,4,6,8,10]), 0, 'Test 1');
test(numOfSubarrays([100,100,100,100,100]), 0, 'Test 2');
test(numOfSubarrays([50,50,50,50,50]), 0, 'Test 3');
test(numOfSubarrays([1,2,3]), 4, 'Test 4');
test(numOfSubarrays([2,2,2,2,2]), 0, 'Test 5');
test(numOfSubarrays([1,2]), 2, 'Test 6');
test(numOfSubarrays([99,100,101]), 4, 'Test 7');
test(numOfSubarrays([100,100,100]), 0, 'Test 8');
test(numOfSubarrays([2,4,6]), 0, 'Test 9');
test(numOfSubarrays([1,2,3,4,5,6,7]), 16, 'Test 10');
test(numOfSubarrays([1]), 1, 'Test 11');
test(numOfSubarrays([1,1,1,1,1]), 9, 'Test 12');
test(numOfSubarrays([100,99,98,97,96]), 8, 'Test 13');
test(numOfSubarrays([101,102,103,104,105]), 9, 'Test 14');
test(numOfSubarrays([1,2,3,4,5]), 9, 'Test 15');
test(numOfSubarrays([2,3,4,5,6,7,8,9,10]), 24, 'Test 16');
test(numOfSubarrays([2]), 0, 'Test 17');
test(numOfSubarrays([1,1,2,2,3,3,4,4]), 14, 'Test 18');
test(numOfSubarrays([1,3,5]), 4, 'Test 19');
test(numOfSubarrays([97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81, 80, 79, 78]), 110, 'Test 20');
test(numOfSubarrays([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120]), 0, 'Test 21');
test(numOfSubarrays([99, 1, 99, 1, 99, 1, 99, 1, 99, 1, 99, 1, 99, 1, 99, 1, 99, 1, 99, 1]), 110, 'Test 22');
test(numOfSubarrays([100] * 100000), Error: Solution.numOfSubarrays[] missing 1 required positional argument: 'arr', 'Test 23');
test(numOfSubarrays([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2]), 462, 'Test 24');
test(numOfSubarrays([99, 98, 97, 96, 95, 94, 93, 92, 91, 90]), 30, 'Test 25');
test(numOfSubarrays([100, 99, 98, 97, 96, 95, 94, 93, 92, 91]), 30, 'Test 26');
test(numOfSubarrays([2, 3, 2, 3, 2, 3, 2, 3, 2, 3]), 30, 'Test 27');
test(numOfSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 64, 'Test 28');
test(numOfSubarrays([100, 1, 200, 2, 300, 3, 400, 4, 500, 5]), 30, 'Test 29');
test(numOfSubarrays([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]), 0, 'Test 30');
test(numOfSubarrays([1, 3, 5, 7, 9, 11, 13, 15]), 20, 'Test 31');
test(numOfSubarrays([1, 3, 5, 7, 9, 11, 13, 15, 17, 19]), 30, 'Test 32');
test(numOfSubarrays([100, 1, 100, 1, 100, 1, 100, 1, 100, 1]), 30, 'Test 33');
test(numOfSubarrays([97, 2, 83, 4, 81, 6, 79, 8, 77, 10, 75, 12, 73, 14, 71, 16, 69, 18, 67, 20]), 110, 'Test 34');
test(numOfSubarrays([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 110, 'Test 35');
test(numOfSubarrays([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30]), 0, 'Test 36');
test(numOfSubarrays([7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7]), 110, 'Test 37');
test(numOfSubarrays([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 0, 'Test 38');
test(numOfSubarrays([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]), 30, 'Test 39');
test(numOfSubarrays([100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100]), 0, 'Test 40');
test(numOfSubarrays([1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3]), 64, 'Test 41');
test(numOfSubarrays([99, 199, 299, 399, 499, 599, 699, 799, 899, 999]), 30, 'Test 42');
test(numOfSubarrays([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500]), 0, 'Test 43');
test(numOfSubarrays([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]), 63, 'Test 44');
test(numOfSubarrays([1, 3, 5, 7, 9, 11]), 12, 'Test 45');
test(numOfSubarrays([1, 100, 1, 100, 1, 100, 1, 100, 1, 100]), 30, 'Test 46');
test(numOfSubarrays([97, 98, 99, 100, 1, 2, 3, 4, 5, 6]), 30, 'Test 47');
test(numOfSubarrays([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]), 30, 'Test 48');
test(numOfSubarrays([1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]), 60, 'Test 49');
test(numOfSubarrays([1, 2, 4, 8, 16, 32, 64, 128, 256, 512]), 10, 'Test 50');
test(numOfSubarrays([50, 51, 50, 51, 50, 51, 50, 51, 50, 51, 50, 51, 50, 51, 50, 51, 50, 51, 50, 51]), 110, 'Test 51');
test(numOfSubarrays([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 30, 'Test 52');
test(numOfSubarrays([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59]), 240, 'Test 53');
test(numOfSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 30, 'Test 54');
test(numOfSubarrays([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]), 240, 'Test 55');
test(numOfSubarrays([1, 2, 3, 5, 8, 13, 21, 34, 55, 89]), 28, 'Test 56');
test(numOfSubarrays([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2]), 240, 'Test 57');
test(numOfSubarrays([50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750]), 0, 'Test 58');
test(numOfSubarrays([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71]), 110, 'Test 59');
test(numOfSubarrays([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40]), 0, 'Test 60');
test(numOfSubarrays([50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60]), 36, 'Test 61');
test(numOfSubarrays([1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765]), 98, 'Test 62');
test(numOfSubarrays([100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100]), 0, 'Test 63');
test(numOfSubarrays([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2]), 110, 'Test 64');
test(numOfSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 110, 'Test 65');
test(numOfSubarrays([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150]), 0, 'Test 66');
test(numOfSubarrays([1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5]), 63, 'Test 67');
test(numOfSubarrays([99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81, 80]), 110, 'Test 68');
test(numOfSubarrays([99, 100, 98, 97, 101, 96, 102, 95, 103, 94, 104, 93, 105, 92, 106]), 48, 'Test 69');
test(numOfSubarrays([50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36]), 64, 'Test 70');
test(numOfSubarrays([5, 15, 25, 35, 45, 55, 65, 75, 85, 95]), 30, 'Test 71');
test(numOfSubarrays([101, 201, 301, 401, 501, 601, 701, 801, 901, 1001]), 30, 'Test 72');
test(numOfSubarrays([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29]), 64, 'Test 73');
test(numOfSubarrays([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]), 0, 'Test 74');
test(numOfSubarrays([100, 1, 100, 1, 100, 1, 100, 1, 100, 1, 100, 1, 100, 1, 100, 1, 100, 1, 100, 1]), 110, 'Test 75');
test(numOfSubarrays([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200]), 0, 'Test 76');
test(numOfSubarrays([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75]), 64, 'Test 77');
test(numOfSubarrays([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60]), 0, 'Test 78');
test(numOfSubarrays([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20]), 310, 'Test 79');
test(numOfSubarrays([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8]), 52, 'Test 80');
test(numOfSubarrays([100, 99, 1, 2, 98, 3, 4, 97, 5, 6]), 30, 'Test 81');
test(numOfSubarrays([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39]), 110, 'Test 82');
test(numOfSubarrays([1, 3, 2, 5, 3, 7, 4, 9, 5, 11, 6, 13, 7, 15, 8, 17, 9, 19, 10, 21]), 110, 'Test 83');
test(numOfSubarrays([2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3]), 110, 'Test 84');
test(numOfSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40]), 420, 'Test 85');
test(numOfSubarrays([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384]), 15, 'Test 86');
test(numOfSubarrays([100, 0, 100, 0, 100, 0, 100, 0, 100, 0, 100, 0, 100, 0, 100]), 0, 'Test 87');
test(numOfSubarrays([100, 50, 25, 12, 6, 3, 1, 0, 0, 0]), 28, 'Test 88');
test(numOfSubarrays(list[range[1, 100001]]), Error: Solution.numOfSubarrays[] missing 1 required positional argument: 'arr', 'Test 89');

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
