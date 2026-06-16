// Test: 3074. Apple Redistribution Into Boxes
// 115 test cases from LeetCodeDataset
// Run: node test.js

const { minimumBoxes } = require("./solution");

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

console.log("\n3074. Apple Redistribution Into Boxes\n");

test(minimumBoxes([10,20,30], [15,10,25]), null, 'Test 1');
test(minimumBoxes([10,20,30,40], [10,10,10,10,10,10,10]), null, 'Test 2');
test(minimumBoxes([45,5], [50]), 1, 'Test 3');
test(minimumBoxes([1,1,1,1,1], [1,1,1,1,1,1]), 5, 'Test 4');
test(minimumBoxes([10,20,30], [5,15,10,20]), null, 'Test 5');
test(minimumBoxes([2,2,2,2], [1,1,1,1,1,1,1,1]), 8, 'Test 6');
test(minimumBoxes([1,1,1,1], [1,1,1,1,1]), 4, 'Test 7');
test(minimumBoxes([2,2,2,2,2], [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 10, 'Test 8');
test(minimumBoxes([1,1,1,1,1], [1,1,1,1,1]), 5, 'Test 9');
test(minimumBoxes([40,10,10], [20,20,20]), 3, 'Test 10');
test(minimumBoxes([25,25], [30,20]), 2, 'Test 11');
test(minimumBoxes([1,1,1,1], [1,1,1,1,1,1]), 4, 'Test 12');
test(minimumBoxes([5,5,5], [2,4,2,7]), 4, 'Test 13');
test(minimumBoxes([45,3,2], [50,1,1,1]), 1, 'Test 14');
test(minimumBoxes([15,15,15], [5,5,5,5,5,5,5,5,5,5]), 9, 'Test 15');
test(minimumBoxes([3,5,7,9], [2,4,6,8,10]), 3, 'Test 16');
test(minimumBoxes([10,20,30], [5,10,15,25]), null, 'Test 17');
test(minimumBoxes([1,3,2], [4,3,1,5,2]), 2, 'Test 18');
test(minimumBoxes([50], [50]), 1, 'Test 19');
test(minimumBoxes([10,20,30], [5,5,5,5,5,5,5,5,5,5]), null, 'Test 20');
test(minimumBoxes([25, 25, 25, 25, 25], [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]), null, 'Test 21');
test(minimumBoxes([48, 48, 48], [16, 16, 16, 16, 16, 16]), null, 'Test 22');
test(minimumBoxes([25, 25, 25], [10, 10, 10, 10, 10, 10, 10]), null, 'Test 23');
test(minimumBoxes([49, 1, 1], [25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25]), 3, 'Test 24');
test(minimumBoxes([15, 20, 5], [12, 18, 9, 7]), 4, 'Test 25');
test(minimumBoxes([1, 2, 3, 4, 5], [2, 3, 4, 5, 6]), 3, 'Test 26');
test(minimumBoxes([25, 25, 25, 25, 25], [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]), 13, 'Test 27');
test(minimumBoxes([50, 40, 30, 20, 10], [10, 20, 30, 40, 50]), 5, 'Test 28');
test(minimumBoxes([48, 1, 1], [24, 24, 1, 1, 1]), 4, 'Test 29');
test(minimumBoxes([25, 25, 25, 25], [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), null, 'Test 30');
test(minimumBoxes([40, 30, 20, 10], [50, 20, 10, 10, 10]), 5, 'Test 31');
test(minimumBoxes([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 100]), 1, 'Test 32');
test(minimumBoxes([15, 25, 35], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), null, 'Test 33');
test(minimumBoxes([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 20, 'Test 34');
test(minimumBoxes([15, 25, 35, 45], [10, 20, 30, 40, 50]), 3, 'Test 35');
test(minimumBoxes([30, 20, 10, 40], [10, 15, 5, 25, 30, 5]), null, 'Test 36');
test(minimumBoxes([50, 50, 50], [16, 17, 18, 19, 20]), null, 'Test 37');
test(minimumBoxes([1, 2, 3, 4, 5], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 15, 'Test 38');
test(minimumBoxes([2, 3, 5, 7, 11, 13], [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]), 2, 'Test 39');
test(minimumBoxes([10, 20, 30, 40], [10, 20, 30, 40, 50]), 3, 'Test 40');
test(minimumBoxes([30, 10, 5], [15, 10, 10, 5, 5]), 5, 'Test 41');
test(minimumBoxes([3, 6, 9, 12], [2, 4, 6, 8, 10, 12, 14]), 3, 'Test 42');
test(minimumBoxes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [5, 10, 15, 20, 25]), 3, 'Test 43');
test(minimumBoxes([25, 25, 25], [20, 15, 30, 10, 25]), 3, 'Test 44');
test(minimumBoxes([45, 35, 25], [20, 15, 10, 5, 5, 5]), null, 'Test 45');
test(minimumBoxes([49, 49, 49], [50, 50, 50, 50, 50, 50]), 3, 'Test 46');
test(minimumBoxes([30, 30, 30], [25, 25, 25, 25]), 4, 'Test 47');
test(minimumBoxes([10, 20, 30, 40], [15, 25, 35, 5, 5, 5]), null, 'Test 48');
test(minimumBoxes([10, 20, 30, 40, 50], [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]), null, 'Test 49');
test(minimumBoxes([10, 20, 30], [5, 15, 10, 25]), null, 'Test 50');
test(minimumBoxes([45, 45, 5], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), null, 'Test 51');
test(minimumBoxes([40, 30, 20, 10], [15, 15, 15, 15, 15, 15]), null, 'Test 52');
test(minimumBoxes([30, 20, 10], [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), null, 'Test 53');
test(minimumBoxes([25, 25, 25], [10, 10, 10, 10, 10, 10, 10, 10]), 8, 'Test 54');
test(minimumBoxes([15, 15, 15, 15], [10, 10, 10, 10, 10]), null, 'Test 55');
test(minimumBoxes([49, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 51, 'Test 56');
test(minimumBoxes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), null, 'Test 57');
test(minimumBoxes([50, 40, 30, 20, 10], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), null, 'Test 58');
test(minimumBoxes([3, 6, 9, 12, 15], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 6, 'Test 59');
test(minimumBoxes([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10]), 4, 'Test 60');
test(minimumBoxes([2, 3, 5, 7, 11], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 4, 'Test 61');
test(minimumBoxes([45, 5, 3, 7], [12, 8, 15, 10, 2]), null, 'Test 62');
test(minimumBoxes([49, 1], [50]), 1, 'Test 63');
test(minimumBoxes([5, 5, 5, 5, 5, 5, 5], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 35, 'Test 64');
test(minimumBoxes([10, 10, 10], [5, 5, 5, 5, 5, 5]), 6, 'Test 65');
test(minimumBoxes([50, 45, 40], [10, 20, 15, 5, 5, 5, 5, 5, 5, 5, 5, 5]), null, 'Test 66');
test(minimumBoxes([1, 1, 2, 2, 3, 3, 4, 4], [1, 2, 3, 4, 5, 6, 7, 8]), 3, 'Test 67');
test(minimumBoxes([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 3, 'Test 68');
test(minimumBoxes([7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9]), 3, 'Test 69');
test(minimumBoxes([49, 49, 49, 49, 49], [50, 50, 50, 50, 50]), 5, 'Test 70');
test(minimumBoxes([10, 20, 30, 40, 50], [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]), 4, 'Test 71');
test(minimumBoxes([9, 11, 13, 17], [8, 15, 7, 10, 6, 12]), 5, 'Test 72');
test(minimumBoxes([48, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 18, 'Test 73');
test(minimumBoxes([49, 1], [25, 24, 1]), 3, 'Test 74');
test(minimumBoxes([40, 30, 20], [10, 10, 10, 10, 10, 10, 10, 10]), null, 'Test 75');
test(minimumBoxes([20, 20, 10, 10], [15, 15, 15, 15, 15]), 4, 'Test 76');
test(minimumBoxes([25, 25, 25], [50, 50]), 2, 'Test 77');
test(minimumBoxes([45, 2, 3], [10, 10, 10, 10, 10]), 5, 'Test 78');
test(minimumBoxes([10, 20, 30], [5, 15, 25, 10]), null, 'Test 79');
test(minimumBoxes([10, 20, 30], [5, 15, 20, 10]), null, 'Test 80');
test(minimumBoxes([3, 7, 2, 8], [5, 10, 3, 6, 1]), 3, 'Test 81');
test(minimumBoxes([25, 25, 25, 25], [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]), 10, 'Test 82');
test(minimumBoxes([8, 16, 32, 64], [32, 32, 32, 32, 32, 32]), 4, 'Test 83');
test(minimumBoxes([40, 40, 40, 40], [20, 20, 20, 20, 20, 20, 20, 20]), 8, 'Test 84');
test(minimumBoxes([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 49, 'Test 85');
test(minimumBoxes([10, 20, 30, 40], [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 20, 'Test 86');
test(minimumBoxes([49, 49, 49], [16, 16, 16, 16, 16, 16]), null, 'Test 87');
test(minimumBoxes([50, 50, 50, 50, 50], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]), 6, 'Test 88');
test(minimumBoxes([15, 25, 10, 5], [10, 20, 5, 5, 5, 5]), null, 'Test 89');
test(minimumBoxes([23, 17, 15, 12], [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]), 7, 'Test 90');
test(minimumBoxes([5, 10, 15, 20, 25], [30, 20, 10, 5, 1, 1, 1, 1]), null, 'Test 91');
test(minimumBoxes([4, 4, 4, 4, 4], [3, 3, 3, 3, 3, 3, 3, 3, 3, 3]), 7, 'Test 92');
test(minimumBoxes([45, 3, 2, 1], [40, 5, 3, 2, 1, 1, 1, 1, 1]), 5, 'Test 93');
test(minimumBoxes([45, 5, 5], [25, 20, 5, 5, 5, 5]), 4, 'Test 94');
test(minimumBoxes([10, 10, 10, 10, 10], [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 10, 'Test 95');
test(minimumBoxes([1, 2, 3, 4, 5], [15, 10, 5]), 1, 'Test 96');
test(minimumBoxes([3, 3, 3, 3, 3, 3], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 18, 'Test 97');
test(minimumBoxes([3, 3, 3, 3, 3, 3, 3, 3, 3, 3], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), null, 'Test 98');
test(minimumBoxes([10, 20, 30, 40], [20, 20, 20, 20, 20]), 5, 'Test 99');
test(minimumBoxes([1, 2, 3, 4, 5], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), null, 'Test 100');
test(minimumBoxes([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 20, 'Test 101');
test(minimumBoxes([45, 3, 2], [50, 25, 10, 5]), 1, 'Test 102');
test(minimumBoxes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 11, 'Test 103');
test(minimumBoxes([45, 45, 45], [15, 15, 15, 15, 15, 15]), null, 'Test 104');
test(minimumBoxes([10, 20, 30], [5, 15, 10, 20, 25]), 3, 'Test 105');
test(minimumBoxes([50, 50, 50], [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]), null, 'Test 106');
test(minimumBoxes([45, 30, 10, 5], [20, 15, 10, 5, 1]), null, 'Test 107');
test(minimumBoxes([10, 20, 30], [5, 15, 25, 35]), 2, 'Test 108');
test(minimumBoxes([8, 16, 24, 32], [4, 8, 12, 16, 20, 24, 28, 32]), 3, 'Test 109');
test(minimumBoxes([45, 30, 15], [10, 10, 10, 10, 10, 10]), null, 'Test 110');
test(minimumBoxes([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 30, 'Test 111');
test(minimumBoxes([40, 10, 10], [20, 20, 20, 20, 20, 20]), 3, 'Test 112');
test(minimumBoxes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 10, 'Test 113');
test(minimumBoxes([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 8, 'Test 114');
test(minimumBoxes([10, 20, 30, 40], [5, 10, 15, 20, 25, 30]), 5, 'Test 115');

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
