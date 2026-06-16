// Test: 2357. Make Array Zero By Subtracting Equal Amounts
// 116 test cases from LeetCodeDataset
// Run: node test.js

const { minimumOperations } = require("./solution");

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

console.log("\n2357. Make Array Zero By Subtracting Equal Amounts\n");

test(minimumOperations([0,1,2,3,4,5]), 5, 'Test 1');
test(minimumOperations([1,0,1,0,1]), 1, 'Test 2');
test(minimumOperations([1,5,0,3,5]), 3, 'Test 3');
test(minimumOperations([0,1,0,1,0]), 1, 'Test 4');
test(minimumOperations([1]), 1, 'Test 5');
test(minimumOperations([1,0,2,0,3,0,4]), 4, 'Test 6');
test(minimumOperations([100,0,50,50]), 2, 'Test 7');
test(minimumOperations([100,0,50,50,0]), 2, 'Test 8');
test(minimumOperations([10,20,30,40,50]), 5, 'Test 9');
test(minimumOperations([5,5,5,5,5]), 1, 'Test 10');
test(minimumOperations([0,0,0,0,0]), 0, 'Test 11');
test(minimumOperations([1,2,3,4,5]), 5, 'Test 12');
test(minimumOperations([99,99,99,99,99]), 1, 'Test 13');
test(minimumOperations([0]), 0, 'Test 14');
test(minimumOperations([1,0,1,0,1,0]), 1, 'Test 15');
test(minimumOperations([100,100,100,100,100]), 1, 'Test 16');
test(minimumOperations([100,0,50,25,75]), 4, 'Test 17');
test(minimumOperations([0,0,0,0]), 0, 'Test 18');
test(minimumOperations([2,2,2,2]), 1, 'Test 19');
test(minimumOperations([5,5,5,0,0,5,0]), 1, 'Test 20');
test(minimumOperations([2,2,2,2,2]), 1, 'Test 21');
test(minimumOperations([1,0,2,0,3,0,4,0,5,0,6,0,7,0,8,0,9,0,10,0,11,0,12,0,13,0,14,0]), 14, 'Test 22');
test(minimumOperations([1, 2, 3, 4, 5, 0, 0, 0, 0, 0]), 5, 'Test 23');
test(minimumOperations([7, 14, 21, 28, 35, 42, 49, 56, 63, 70]), 10, 'Test 24');
test(minimumOperations([50, 25, 12, 6, 3, 1, 0, 0, 0, 0]), 6, 'Test 25');
test(minimumOperations([42, 84, 126, 168, 210, 252, 294]), 7, 'Test 26');
test(minimumOperations([3,3,3,3,3,3,3,3,3,3]), 1, 'Test 27');
test(minimumOperations([1,2,3,4,5,6,7,8,9,10]), 10, 'Test 28');
test(minimumOperations([7,0,0,0,0,0,0,0,0,0]), 1, 'Test 29');
test(minimumOperations([3,1,4,1,5,9,2,6,5,3,5]), 7, 'Test 30');
test(minimumOperations([99,98,97,96,95,94,93,92,91,90]), 10, 'Test 31');
test(minimumOperations([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 1, 'Test 32');
test(minimumOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, 0, 0, 0, 0]), 10, 'Test 33');
test(minimumOperations([1, 0, 0, 0, 0, 0, 0, 0, 0, 0]), 1, 'Test 34');
test(minimumOperations([1,0,2,0,3,0,4,0,5,0,6,0,7,0,8,0,9,0,10,0]), 10, 'Test 35');
test(minimumOperations([5,0,3,3,5,0,2]), 3, 'Test 36');
test(minimumOperations([10, 20, 30, 40, 50, 0, 10, 20, 30, 40, 50, 0]), 5, 'Test 37');
test(minimumOperations([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 1, 'Test 38');
test(minimumOperations([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39]), 20, 'Test 39');
test(minimumOperations([25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 25, 'Test 40');
test(minimumOperations([1,2,2,3,3,3,4,4,4,4]), 4, 'Test 41');
test(minimumOperations([100,99,98,97,96,95,94,93,92,91]), 10, 'Test 42');
test(minimumOperations([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9]), 9, 'Test 43');
test(minimumOperations([5,10,15,20,25,30,35,40,45,50]), 10, 'Test 44');
test(minimumOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 10, 'Test 45');
test(minimumOperations([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 1, 'Test 46');
test(minimumOperations([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10]), 10, 'Test 47');
test(minimumOperations([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 15, 'Test 48');
test(minimumOperations([5, 10, 15, 20, 25]), 5, 'Test 49');
test(minimumOperations([99, 1, 98, 2, 97, 3, 96, 4, 95, 5]), 10, 'Test 50');
test(minimumOperations([0, 0, 0, 0, 0, 0, 0, 0, 0, 1]), 1, 'Test 51');
test(minimumOperations([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 1, 'Test 52');
test(minimumOperations([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10]), 10, 'Test 53');
test(minimumOperations([10, 20, 30, 40, 50, 0, 0, 0, 0, 0]), 5, 'Test 54');
test(minimumOperations([1,1,2,2,3,3,4,4,5,5]), 5, 'Test 55');
test(minimumOperations([5,3,8,6,2,0,7]), 6, 'Test 56');
test(minimumOperations([0,0,0,0,1,1,2,2,3,3,4,4,5,5]), 5, 'Test 57');
test(minimumOperations([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]), 10, 'Test 58');
test(minimumOperations([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 1, 'Test 59');
test(minimumOperations([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]), 5, 'Test 60');
test(minimumOperations([5,3,2,1,4,0,2,3]), 5, 'Test 61');
test(minimumOperations([2,4,6,8,10,12,14,16,18,20,0]), 10, 'Test 62');
test(minimumOperations([42,0,42,0,42,0,42,0,42,0,42,0,42,0,42,0,42,0,42,0]), 1, 'Test 63');
test(minimumOperations([50, 40, 30, 20, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), 5, 'Test 64');
test(minimumOperations([1,2,1,2,1,2,1,2,1,2]), 2, 'Test 65');
test(minimumOperations([50,50,50,50,50,50,50,50,50,50,0,0,0,0,0,0,0,0,0,0]), 1, 'Test 66');
test(minimumOperations([99, 98, 97, 96, 95, 94, 93]), 7, 'Test 67');
test(minimumOperations([10, 10, 20, 20, 30, 30, 40, 40, 50, 50]), 5, 'Test 68');
test(minimumOperations([5, 3, 2, 1, 4, 3, 5, 0, 1, 2, 3, 4, 5]), 5, 'Test 69');
test(minimumOperations([1,2,3,4,5,0,1,2,3,4,5]), 5, 'Test 70');
test(minimumOperations([1, 0, 2, 0, 3, 0, 4, 0, 5, 0]), 5, 'Test 71');
test(minimumOperations([0,0,0,0,0,0,0,0,0,0,1]), 1, 'Test 72');
test(minimumOperations([0,1,1,2,2,3,3,4,4,5,5]), 5, 'Test 73');
test(minimumOperations([9,9,9,9,9,9,9,9,9,9]), 1, 'Test 74');
test(minimumOperations([5,15,25,35,45,55,65,75,85,95]), 10, 'Test 75');
test(minimumOperations([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 20, 'Test 76');
test(minimumOperations([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384]), 15, 'Test 77');
test(minimumOperations([1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2]), 3, 'Test 78');
test(minimumOperations([50, 49, 48, 47, 46, 45, 44, 43, 42, 41]), 10, 'Test 79');
test(minimumOperations([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), 1, 'Test 80');
test(minimumOperations([1,0,2,0,3,0,4,0,5,0]), 5, 'Test 81');
test(minimumOperations([0, 1, 0, 2, 0, 3, 0, 4, 0, 5]), 5, 'Test 82');
test(minimumOperations([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]), 25, 'Test 83');
test(minimumOperations([10,20,30,40,50,60,70,80,90,100]), 10, 'Test 84');
test(minimumOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 10, 'Test 85');
test(minimumOperations([99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85]), 15, 'Test 86');
test(minimumOperations([8, 8, 8, 8, 8, 8, 8, 8, 8, 8]), 1, 'Test 87');
test(minimumOperations([2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40]), 20, 'Test 88');
test(minimumOperations([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), 0, 'Test 89');
test(minimumOperations([99,98,97,96,95,94,93,92,91,90,89,88,87,86,85,84,83,82,81,80]), 20, 'Test 90');
test(minimumOperations([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), 0, 'Test 91');
test(minimumOperations([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9, 10, 10, 10]), 10, 'Test 92');
test(minimumOperations([0,10,20,30,40,50,60,70,80,90,100,0,10,20,30,40,50,60,70,80]), 10, 'Test 93');
test(minimumOperations([50,25,75,50,25,75,50,25,75,50,25,75,50,25,75]), 3, 'Test 94');
test(minimumOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 20, 'Test 95');
test(minimumOperations([0, 2, 3, 2, 1, 3, 4, 3, 2, 1]), 4, 'Test 96');
test(minimumOperations([5, 1, 4, 2, 3, 1, 0, 2, 4, 3]), 5, 'Test 97');
test(minimumOperations([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 1, 'Test 98');
test(minimumOperations([1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3]), 3, 'Test 99');
test(minimumOperations([9,8,7,6,5,4,3,2,1,0,0,0,0,0,0]), 9, 'Test 100');
test(minimumOperations([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 0, 'Test 101');
test(minimumOperations([7, 14, 21, 28, 35, 42]), 6, 'Test 102');
test(minimumOperations([3, 3, 3, 3, 3, 3, 3, 3, 3, 3]), 1, 'Test 103');
test(minimumOperations([10,20,30,40,50,0,10,20,30]), 5, 'Test 104');
test(minimumOperations([1, 2, 2, 3, 3, 3, 4, 4, 4, 4]), 4, 'Test 105');
test(minimumOperations([10,20,30,40,50,0,0,0]), 5, 'Test 106');
test(minimumOperations([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2]), 2, 'Test 107');
test(minimumOperations([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 10, 'Test 108');
test(minimumOperations([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 1, 'Test 109');
test(minimumOperations([10,20,30,40,50,0,0,0,0,0]), 5, 'Test 110');
test(minimumOperations([1,1,1,1,1,2,2,2,2,2,3,3,3,3,3]), 3, 'Test 111');
test(minimumOperations([1,10,100,1000,10000,0,0,0,0,0]), 5, 'Test 112');
test(minimumOperations([0, 23, 46, 69, 92, 115]), 5, 'Test 113');
test(minimumOperations([50,40,30,20,10,0,10,20,30,40,50,60,70,80,90,100]), 10, 'Test 114');
test(minimumOperations([99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81, 80]), 20, 'Test 115');
test(minimumOperations([10, 20, 30, 40, 50, 0, 10, 20, 30, 40]), 5, 'Test 116');

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
