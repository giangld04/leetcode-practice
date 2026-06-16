// Test: 2934. Minimum Operations To Maximize Last Elements In Arrays
// 130 test cases from LeetCodeDataset
// Run: node test.js

const { minOperations } = require("./solution");

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

console.log("\n2934. Minimum Operations To Maximize Last Elements In Arrays\n");

test(minOperations([5,5,5], [5,5,5]), 0, 'Test 1');
test(minOperations([1,2], [2,1]), 1, 'Test 2');
test(minOperations([10,9,8], [7,6,5]), -1, 'Test 3');
test(minOperations([3,3,3], [3,3,3]), 0, 'Test 4');
test(minOperations([1,1,1], [1,1,1]), 0, 'Test 5');
test(minOperations([3,1], [2,2]), -1, 'Test 6');
test(minOperations([1,2,3], [3,2,1]), -1, 'Test 7');
test(minOperations([1,2,3,4,5], [5,4,3,2,1]), -1, 'Test 8');
test(minOperations([5,3,1], [4,2,6]), -1, 'Test 9');
test(minOperations([2,3,4,5,9], [8,8,4,4,4]), 2, 'Test 10');
test(minOperations([9], [9]), 0, 'Test 11');
test(minOperations([5,5,5,5], [5,5,5,5]), 0, 'Test 12');
test(minOperations([10,20,30], [15,25,20]), 1, 'Test 13');
test(minOperations([1], [2]), 0, 'Test 14');
test(minOperations([1,3,5], [2,4,6]), 0, 'Test 15');
test(minOperations([1,5,4], [2,5,3]), -1, 'Test 16');
test(minOperations([1,2,7], [4,5,3]), 1, 'Test 17');
test(minOperations([1], [1]), 0, 'Test 18');
test(minOperations([6,4,2], [5,3,1]), -1, 'Test 19');
test(minOperations([10,10,10], [10,10,10]), 0, 'Test 20');
test(minOperations([10,20,30], [10,20,30]), 0, 'Test 21');
test(minOperations([1000000000, 1000000000], [1000000000, 1000000000]), 0, 'Test 22');
test(minOperations([1, 9, 3, 7, 5], [6, 2, 8, 4, 10]), 2, 'Test 23');
test(minOperations([9,5,1,4,7,3,6,8,2,10], [1,2,3,4,5,6,7,8,9,10]), 0, 'Test 24');
test(minOperations([10,9,8,7,6], [6,7,8,9,10]), -1, 'Test 25');
test(minOperations([1000000000, 999999999, 999999998], [1, 2, 3]), -1, 'Test 26');
test(minOperations([2, 4, 6, 8, 10, 12, 14], [14, 12, 10, 8, 6, 4, 2]), -1, 'Test 27');
test(minOperations([1, 1, 2, 2, 3], [3, 3, 2, 2, 1]), -1, 'Test 28');
test(minOperations([1, 2, 3, 4, 5], [10, 20, 30, 40, 50]), 0, 'Test 29');
test(minOperations([1, 1, 1, 1, 1], [2, 2, 2, 2, 1]), -1, 'Test 30');
test(minOperations([1,10,3,9,5,6,4], [2,8,4,7,10,1,5]), -1, 'Test 31');
test(minOperations([10, 20, 30, 40, 50, 60], [60, 50, 40, 30, 20, 10]), -1, 'Test 32');
test(minOperations([1, 1, 1, 1, 1, 1], [10, 10, 10, 10, 10, 10]), 0, 'Test 33');
test(minOperations([3, 1, 2], [3, 1, 2]), -1, 'Test 34');
test(minOperations([5, 15, 25, 35, 45], [45, 35, 25, 15, 5]), -1, 'Test 35');
test(minOperations([1, 2, 2, 1, 2], [2, 1, 1, 2, 1]), 2, 'Test 36');
test(minOperations([1,2,1,2,1,2,1,2,1,2], [2,1,2,1,2,1,2,1,2,1]), 5, 'Test 37');
test(minOperations([5, 3, 8, 6, 7], [4, 6, 2, 9, 1]), -1, 'Test 38');
test(minOperations([9, 7, 5, 3, 1], [8, 6, 4, 2, 0]), -1, 'Test 39');
test(minOperations([1000000000, 1, 2, 3, 4, 5], [5, 4, 3, 2, 1, 1000000000]), 1, 'Test 40');
test(minOperations([8, 6, 4, 3, 1], [7, 5, 9, 2, 10]), -1, 'Test 41');
test(minOperations([1, 2, 3, 4, 5], [10, 9, 8, 7, 6]), -1, 'Test 42');
test(minOperations([10, 9, 8, 7, 6], [1, 2, 3, 4, 5]), -1, 'Test 43');
test(minOperations([100,200,300,400,500], [500,100,200,300,400]), 1, 'Test 44');
test(minOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), -1, 'Test 45');
test(minOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 2, 3, 4, 5, 6, 7, 8, 9, 11]), 0, 'Test 46');
test(minOperations([9, 7, 5, 3, 1], [2, 4, 6, 8, 10]), -1, 'Test 47');
test(minOperations([5, 5, 5, 5, 5], [5, 5, 5, 5, 5]), 0, 'Test 48');
test(minOperations([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]), 0, 'Test 49');
test(minOperations([9, 8, 7, 6, 5, 4, 3, 2, 1], [1, 2, 3, 4, 5, 6, 7, 8, 9]), -1, 'Test 50');
test(minOperations([5, 3, 8, 6, 2, 7, 4, 1, 9], [9, 1, 4, 7, 2, 6, 8, 3, 5]), -1, 'Test 51');
test(minOperations([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], [20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), -1, 'Test 52');
test(minOperations([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]), 0, 'Test 53');
test(minOperations([100, 90, 80, 70, 60], [60, 70, 80, 90, 100]), -1, 'Test 54');
test(minOperations([5,9,1,3,7], [8,4,6,2,5]), -1, 'Test 55');
test(minOperations([3, 3, 3, 3, 3], [3, 3, 3, 3, 3]), 0, 'Test 56');
test(minOperations([5, 1, 9, 3, 7, 2, 8, 4, 6, 10], [1, 5, 3, 9, 2, 8, 4, 7, 10, 6]), 4, 'Test 57');
test(minOperations([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), -1, 'Test 58');
test(minOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), -1, 'Test 59');
test(minOperations([3, 3, 3, 3, 3], [5, 5, 5, 5, 5]), 0, 'Test 60');
test(minOperations([3,2,1,4,5,6], [6,5,4,1,2,3]), 3, 'Test 61');
test(minOperations([10, 20, 30, 40, 50], [1, 2, 3, 4, 5]), 0, 'Test 62');
test(minOperations([1,3,2,4,5], [5,4,3,2,1]), -1, 'Test 63');
test(minOperations([9, 1, 8, 2, 7], [3, 6, 5, 4, 10]), 1, 'Test 64');
test(minOperations([1, 2, 3, 4, 5], [5, 4, 3, 2, 1]), -1, 'Test 65');
test(minOperations([1, 2, 3, 4, 5], [2, 4, 6, 8, 10]), 0, 'Test 66');
test(minOperations([1, 3, 5, 7, 9], [9, 7, 5, 3, 1]), -1, 'Test 67');
test(minOperations([10, 20, 30, 40, 50, 60, 70, 80, 90], [1, 2, 3, 4, 5, 6, 7, 8, 9]), 0, 'Test 68');
test(minOperations([9, 8, 7, 6, 5], [10, 9, 8, 7, 6]), -1, 'Test 69');
test(minOperations([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]), 0, 'Test 70');
test(minOperations([10,9,8,7,6,5,4,3,2,1], [1,2,3,4,5,6,7,8,9,10]), -1, 'Test 71');
test(minOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 0, 'Test 72');
test(minOperations([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2, 2, 2, 2, 2, 2, 2, 2, 2, 1]), -1, 'Test 73');
test(minOperations([9, 7, 5, 3, 1], [10, 8, 6, 4, 2]), -1, 'Test 74');
test(minOperations([1, 2, 3, 4, 5, 1000000000], [1000000000, 5, 4, 3, 2, 1]), -1, 'Test 75');
test(minOperations([2, 2, 2, 2, 2], [1, 1, 1, 1, 1]), 0, 'Test 76');
test(minOperations([1, 1, 2, 2, 3, 3], [3, 3, 2, 2, 1, 1]), -1, 'Test 77');
test(minOperations([10,20,30,40,50], [50,40,30,20,10]), -1, 'Test 78');
test(minOperations([1, 1, 1, 1, 1, 1, 1], [2, 2, 2, 2, 2, 2, 2]), 0, 'Test 79');
test(minOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), -1, 'Test 80');
test(minOperations([5,3,8,6,7], [4,9,2,1,10]), 1, 'Test 81');
test(minOperations([7,6,5,4,3,2,1], [1,2,3,4,5,6,7]), -1, 'Test 82');
test(minOperations([10, 20, 30, 40, 50], [5, 15, 25, 35, 45]), 0, 'Test 83');
test(minOperations([1000000000, 1, 2], [1, 2, 1000000000]), 1, 'Test 84');
test(minOperations([5,5,5,5,5], [6,6,6,6,6]), 0, 'Test 85');
test(minOperations([5, 4, 3, 2, 1], [1, 2, 3, 4, 5]), -1, 'Test 86');
test(minOperations([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [100, 90, 80, 70, 60, 50, 40, 30, 20, 10]), -1, 'Test 87');
test(minOperations([1, 1, 1, 1, 1000000000], [1, 1, 1, 1, 1]), 0, 'Test 88');
test(minOperations([7, 14, 21, 28, 35, 42, 49], [49, 42, 35, 28, 21, 14, 7]), -1, 'Test 89');
test(minOperations([3, 3, 3, 3, 3], [1, 2, 3, 4, 5]), 0, 'Test 90');
test(minOperations([5, 3, 1, 7, 9], [8, 6, 4, 2, 10]), 0, 'Test 91');
test(minOperations([7, 7, 7, 7, 1], [8, 8, 8, 8, 2]), -1, 'Test 92');
test(minOperations([8, 6, 7, 5, 3, 0, 9], [1, 4, 2, 8, 6, 7, 4]), -1, 'Test 93');
test(minOperations([1, 3, 5, 7, 9, 11], [2, 4, 6, 8, 10, 12]), 0, 'Test 94');
test(minOperations([1, 3, 5, 7, 9, 11], [11, 9, 7, 5, 3, 1]), -1, 'Test 95');
test(minOperations([9, 8, 7, 6, 5], [1, 2, 3, 4, 10]), 1, 'Test 96');
test(minOperations([1, 2, 1000000000], [1000000000, 1, 2]), 1, 'Test 97');
test(minOperations([1000000000, 1, 1, 1, 1], [1, 1000000000, 1, 1, 1]), -1, 'Test 98');
test(minOperations([1, 2, 3, 4, 5], [5, 3, 1, 2, 4]), 1, 'Test 99');
test(minOperations([1, 2, 2, 2, 2], [2, 1, 1, 1, 1]), 1, 'Test 100');
test(minOperations([1, 3, 2, 5, 4], [4, 2, 3, 1, 5]), 1, 'Test 101');
test(minOperations([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 0, 'Test 102');
test(minOperations([9,2,5,7,1], [1,8,3,4,6]), -1, 'Test 103');
test(minOperations([3, 6, 9, 12, 15], [15, 12, 9, 6, 3]), -1, 'Test 104');
test(minOperations([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]), 0, 'Test 105');
test(minOperations([50, 40, 30, 20, 10], [10, 20, 30, 40, 50]), -1, 'Test 106');
test(minOperations([5, 7, 3, 9, 2], [8, 1, 6, 4, 10]), -1, 'Test 107');
test(minOperations([10, 10, 10, 10], [10, 10, 10, 10]), 0, 'Test 108');
test(minOperations([3, 5, 1, 4, 2, 6, 8, 7, 10, 9], [9, 7, 10, 8, 6, 4, 2, 5, 1, 3]), -1, 'Test 109');
test(minOperations([100, 200, 300, 400, 500], [500, 400, 300, 200, 100]), -1, 'Test 110');
test(minOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [2, 3, 4, 5, 6, 7, 8, 9, 10, 1]), -1, 'Test 111');
test(minOperations([5, 8, 10, 2, 9], [7, 6, 1, 10, 3]), -1, 'Test 112');
test(minOperations([1,1,1,1,1], [2,2,2,2,2]), 0, 'Test 113');
test(minOperations([7,3,5,8,6], [2,4,1,9,5]), -1, 'Test 114');
test(minOperations([10, 20, 30, 40, 50], [9, 18, 27, 36, 45]), 0, 'Test 115');
test(minOperations([10, 10, 10, 10, 1], [1, 10, 10, 10, 10]), -1, 'Test 116');
test(minOperations([1,1,2,2,3], [3,3,2,2,1]), -1, 'Test 117');
test(minOperations([5,1,8,3,7,6,4], [4,9,2,6,1,8,5]), -1, 'Test 118');
test(minOperations([1, 9, 3, 7, 5, 2], [6, 8, 4, 2, 9, 1]), -1, 'Test 119');
test(minOperations([9, 1, 4, 8, 5, 3], [2, 7, 6, 3, 10, 9]), -1, 'Test 120');
test(minOperations([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]), 0, 'Test 121');
test(minOperations([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], [19, 17, 15, 13, 11, 9, 7, 5, 3, 1]), -1, 'Test 122');
test(minOperations([2, 2, 2, 2, 2], [2, 2, 2, 2, 2]), 0, 'Test 123');
test(minOperations([1, 9, 9, 9, 9, 9], [9, 1, 1, 1, 1, 1]), 1, 'Test 124');
test(minOperations([10, 20, 30, 40, 50, 60, 70, 80, 90], [90, 80, 70, 60, 50, 40, 30, 20, 10]), -1, 'Test 125');
test(minOperations([1, 1, 1, 1, 1], [2, 2, 2, 2, 2]), 0, 'Test 126');
test(minOperations([10, 20, 30, 40, 50], [50, 40, 30, 20, 10]), -1, 'Test 127');
test(minOperations([5, 6, 3, 4, 7], [4, 5, 6, 7, 8]), 0, 'Test 128');
test(minOperations([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], [1000, 900, 800, 700, 600, 500, 400, 300, 200, 100]), -1, 'Test 129');
test(minOperations([3,3,3,3,3], [3,3,3,3,3]), 0, 'Test 130');

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
