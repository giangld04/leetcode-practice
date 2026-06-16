// Test: 2058. Find The Minimum And Maximum Number Of Nodes Between Critical Points
// 117 test cases from LeetCodeDataset
// Run: node test.js

const { nodesBetweenCriticalPoints } = require("./solution");

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

console.log("\n2058. Find The Minimum And Maximum Number Of Nodes Between Critical Points\n");

test(nodesBetweenCriticalPoints([1,2,3,4,3,2,1,2,3,4]), [3, 3], 'Test 1');
test(nodesBetweenCriticalPoints([1,3,2,4,3,5,4,6,5]), [1, 6], 'Test 2');
test(nodesBetweenCriticalPoints([1,3,2,2,3,2,2,2,7]), [3, 3], 'Test 3');
test(nodesBetweenCriticalPoints([1,1,1,1,1,1,1,1,1,1]), [-1, -1], 'Test 4');
test(nodesBetweenCriticalPoints([5,4,3,2,1]), [-1, -1], 'Test 5');
test(nodesBetweenCriticalPoints([1,2,3,4,3,2,1]), [-1, -1], 'Test 6');
test(nodesBetweenCriticalPoints([5,3,1,2,5,1,2]), [1, 3], 'Test 7');
test(nodesBetweenCriticalPoints([1,2,3,4,5]), [-1, -1], 'Test 8');
test(nodesBetweenCriticalPoints([1,2,3,4,5,6,7,8,9,10]), [-1, -1], 'Test 9');
test(nodesBetweenCriticalPoints([1,1,1,1,1,1,1,1,1]), [-1, -1], 'Test 10');
test(nodesBetweenCriticalPoints([1,2,3,2,1,2,3,2,1]), [2, 4], 'Test 11');
test(nodesBetweenCriticalPoints([1,2,3,2,1,2,3]), [2, 2], 'Test 12');
test(nodesBetweenCriticalPoints([10,9,8,7,6,5,4,3,2,1]), [-1, -1], 'Test 13');
test(nodesBetweenCriticalPoints([1,1,1,1,1]), [-1, -1], 'Test 14');
test(nodesBetweenCriticalPoints([2,4,1,1,3,5,6,4,2]), [5, 5], 'Test 15');
test(nodesBetweenCriticalPoints([2,4,1,1,3,9,8]), [4, 4], 'Test 16');
test(nodesBetweenCriticalPoints([1,3,2,4,3,5,4,6,5,7,6]), [1, 8], 'Test 17');
test(nodesBetweenCriticalPoints([3,1]), [-1, -1], 'Test 18');
test(nodesBetweenCriticalPoints([1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9]), [8, 8], 'Test 19');
test(nodesBetweenCriticalPoints([1,2,2,1,2,3,4,3,2,1,2,3,4,5,4,3,2,1,2,3]), [3, 14], 'Test 20');
test(nodesBetweenCriticalPoints([2,4,3,5,1,3,2,4,6,7,5,6,8,7,9,8,10]), [1, 14], 'Test 21');
test(nodesBetweenCriticalPoints([1,1,2,1,1,2,1,1,2,1,1,2,1,1,2,1,1,2,1,1]), [3, 15], 'Test 22');
test(nodesBetweenCriticalPoints([1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10]), [1, 17], 'Test 23');
test(nodesBetweenCriticalPoints([1,2,3,4,5,4,3,4,5,4,3,4,5,4,3,4,5,4,3,4,5,4,3,4,5,4,3,4,5,4,3]), [2, 24], 'Test 24');
test(nodesBetweenCriticalPoints([1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2]), [2, 18], 'Test 25');
test(nodesBetweenCriticalPoints([10,20,15,25,30,20,10,5,15,25,35,40,35,30,25,20,15,10,5]), [1, 10], 'Test 26');
test(nodesBetweenCriticalPoints([10,20,10,30,20,40,30,50,40,60,50,70,60,80,70,90,80,100,90]), [1, 16], 'Test 27');
test(nodesBetweenCriticalPoints([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]), [1, 1], 'Test 28');
test(nodesBetweenCriticalPoints([1,2,3,4,3,2,1,2,3,4,3,2,1,2,3,4,3,2,1,2,3,4,3,2,1]), [3, 18], 'Test 29');
test(nodesBetweenCriticalPoints([9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,9]), [-1, -1], 'Test 30');
test(nodesBetweenCriticalPoints([5,4,3,2,1,2,3,4,5,6]), [-1, -1], 'Test 31');
test(nodesBetweenCriticalPoints([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), [-1, -1], 'Test 32');
test(nodesBetweenCriticalPoints([1, 2, 3, 4, 5, 3, 2, 1, 2, 3, 4, 5, 3, 2, 1]), [3, 7], 'Test 33');
test(nodesBetweenCriticalPoints([1,3,2,5,4,7,6,9,8,11,10,13,12,15,14,17,16,19,18]), [1, 16], 'Test 34');
test(nodesBetweenCriticalPoints([1,5,2,6,3,7,4,8,5,9,6,10,7,11,8,12,9,13,10]), [1, 16], 'Test 35');
test(nodesBetweenCriticalPoints([1,1,2,1,1,3,1,1,2,1,1,3,1,1,2,1,1,3,1,1,3]), [3, 15], 'Test 36');
test(nodesBetweenCriticalPoints([5, 3, 1, 2, 5, 1, 2, 3, 4, 2, 1, 3, 5, 7, 6, 8]), [1, 12], 'Test 37');
test(nodesBetweenCriticalPoints([5,10,15,20,25,30,25,20,15,10,5,10,15,20,25,30,35,40,45,50]), [5, 5], 'Test 38');
test(nodesBetweenCriticalPoints([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5]), [1, 1], 'Test 39');
test(nodesBetweenCriticalPoints([1,3,2,4,3,5,4,6,5,7,6,8,7,9,8,10,9,11,10]), [1, 16], 'Test 40');
test(nodesBetweenCriticalPoints([1,3,2,4,3,5,4,6,5,7,6,8,7,9,8]), [1, 12], 'Test 41');
test(nodesBetweenCriticalPoints([100,99,98,97,96,95,94,93,92,91,90,89,88,87,86,85,84,83,82,81]), [-1, -1], 'Test 42');
test(nodesBetweenCriticalPoints([1,1,2,2,1,1,2,2,1,1,2,2,1,1,2,2,1,1,2,2]), [-1, -1], 'Test 43');
test(nodesBetweenCriticalPoints([1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1,2,3,4]), [8, 8], 'Test 44');
test(nodesBetweenCriticalPoints([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), [-1, -1], 'Test 45');
test(nodesBetweenCriticalPoints([3,3,3,1,3,3,3,3,1,3,3,3,3,1,3,3,3]), [5, 10], 'Test 46');
test(nodesBetweenCriticalPoints([2,4,2,6,2,8,2,10,2,12,2,14,2,16,2]), [1, 12], 'Test 47');
test(nodesBetweenCriticalPoints([1,10,2,9,3,8,4,7,5,6,5,6,4,7,3,8,2,9,1,10]), [1, 17], 'Test 48');
test(nodesBetweenCriticalPoints([1, 10, 2, 9, 3, 8, 4, 7, 5, 6, 6, 5, 7, 4, 8, 3, 9, 2, 10, 1]), [1, 17], 'Test 49');
test(nodesBetweenCriticalPoints([10,20,30,40,50,60,70,80,90,100,95,90,85,80,75,70,65,60,55,50]), [-1, -1], 'Test 50');
test(nodesBetweenCriticalPoints([9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,8,7,6,5]), [8, 8], 'Test 51');
test(nodesBetweenCriticalPoints([1,2,1,3,1,4,1,5,1,6,1,7,1,8,1,9,1,10,1]), [1, 16], 'Test 52');
test(nodesBetweenCriticalPoints([5,1,2,1,5,1,2,1,5,1,2,1,5,1,2,1,5,1,2,1]), [1, 17], 'Test 53');
test(nodesBetweenCriticalPoints([1,2,1,3,2,4,3,5,4,6,5,7,6,8,7,9,8,10,9]), [1, 16], 'Test 54');
test(nodesBetweenCriticalPoints([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2]), [1, 17], 'Test 55');
test(nodesBetweenCriticalPoints([1,2,3,4,5,4,3,4,5,4,3,4,5,4,3,4,5]), [2, 10], 'Test 56');
test(nodesBetweenCriticalPoints([1, 2, 3, 4, 3, 2, 1, 2, 3, 4, 3, 2, 1, 2, 3, 4, 3, 2, 1, 2, 3, 4, 3, 2, 1]), [3, 18], 'Test 57');
test(nodesBetweenCriticalPoints([1,3,2,4,3,5,4,6,5,7,6,8,7,9,8,10,9,11,10,9,8,7,6,5,4,3,2,1]), [1, 16], 'Test 58');
test(nodesBetweenCriticalPoints([1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1]), [2, 24], 'Test 59');
test(nodesBetweenCriticalPoints([2,4,6,8,10,8,6,4,2,4,6,8,10,8,6,4,2,4,6,8,10,8,6,4,2]), [4, 16], 'Test 60');
test(nodesBetweenCriticalPoints([5,4,3,2,1,2,3,4,5,4,3,2,1,2,3,4,5,4,3,2,1]), [4, 12], 'Test 61');
test(nodesBetweenCriticalPoints([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1]), [1, 42], 'Test 62');
test(nodesBetweenCriticalPoints([100,200,300,400,500,400,300,200,100,200,300,200,100]), [2, 6], 'Test 63');
test(nodesBetweenCriticalPoints([1,2,3,4,3,2,1,2,3,4,3,2,1,2,3,4,3,2,1]), [3, 12], 'Test 64');
test(nodesBetweenCriticalPoints([1,1,1,2,1,1,1,1,1,2,1,1,1,1,1,2,1,1,1,1,1]), [6, 12], 'Test 65');
test(nodesBetweenCriticalPoints([1,3,5,7,9,7,5,3,1,3,5,7,9,7,5,3,1]), [4, 8], 'Test 66');
test(nodesBetweenCriticalPoints([1,1,2,1,1,3,1,1,2,1,1,3,1,1,2,1,1,3,1,1]), [3, 15], 'Test 67');
test(nodesBetweenCriticalPoints([1, 3, 2, 5, 4, 7, 6, 9, 8, 11, 10, 13, 12, 15, 14, 17, 16]), [1, 14], 'Test 68');
test(nodesBetweenCriticalPoints([1,2,3,2,1,3,2,1,3,2,1,3,2,1]), [1, 9], 'Test 69');
test(nodesBetweenCriticalPoints([9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,9,10]), [-1, -1], 'Test 70');
test(nodesBetweenCriticalPoints([1, 2, 3, 4, 5, 4, 3, 2, 1, 1, 2, 3, 4, 5, 4, 3, 2, 1]), [9, 9], 'Test 71');
test(nodesBetweenCriticalPoints([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1]), [1, 18], 'Test 72');
test(nodesBetweenCriticalPoints([9,8,7,6,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1]), [5, 5], 'Test 73');
test(nodesBetweenCriticalPoints([9, 8, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6]), [8, 8], 'Test 74');
test(nodesBetweenCriticalPoints([1,2,3,4,5,6,7,8,9,10,11,10,9,8,7,6,5,4,3,2,1]), [-1, -1], 'Test 75');
test(nodesBetweenCriticalPoints([1000, 900, 800, 700, 600, 500, 400, 300, 200, 100, 101, 102, 103, 104, 105]), [-1, -1], 'Test 76');
test(nodesBetweenCriticalPoints([1,3,2,4,3,5,4,6,5,7,6,8,7,9,8,10,9,8,7,6,5,4,3,2,1]), [1, 14], 'Test 77');
test(nodesBetweenCriticalPoints([1,1,1,1,1,2,1,1,1,1,1,3,1,1,1,1,1,2,1,1,1,1,1]), [6, 12], 'Test 78');
test(nodesBetweenCriticalPoints([1,2,3,4,3,2,3,4,5,6,5,4,3,2,1]), [2, 6], 'Test 79');
test(nodesBetweenCriticalPoints([1,3,5,4,6,7,8,6,9]), [1, 5], 'Test 80');
test(nodesBetweenCriticalPoints([9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1]), [9, 9], 'Test 81');
test(nodesBetweenCriticalPoints([100,90,100,80,100,70,100,60,100,50,100]), [1, 8], 'Test 82');
test(nodesBetweenCriticalPoints([1,2,3,4,5,4,3,2,1,2,3,4,5,4,3,2,1,2,3,4,5]), [4, 12], 'Test 83');
test(nodesBetweenCriticalPoints([1,2,3,2,1,2,3,4,3,4,5,4,5,6,5,6,7,6,7,8]), [1, 15], 'Test 84');
test(nodesBetweenCriticalPoints([1,10,2,9,3,8,4,7,5,6,5,7,4,8,3,9,2,10,1]), [1, 16], 'Test 85');
test(nodesBetweenCriticalPoints([1,1,1,1,2,2,2,2,1,1,1,1,2,2,2,2,1,1,1,1]), [-1, -1], 'Test 86');
test(nodesBetweenCriticalPoints([5,4,3,2,1,2,3,4,5,6,5,4,3,2,1,2,3,4,5]), [5, 10], 'Test 87');
test(nodesBetweenCriticalPoints([10,20,10,30,10,40,10,50,10,60,10,70,10,80,10,90,10]), [1, 14], 'Test 88');
test(nodesBetweenCriticalPoints([100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200]), [1, 9], 'Test 89');
test(nodesBetweenCriticalPoints([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1]), [-1, -1], 'Test 90');
test(nodesBetweenCriticalPoints([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10]), [9, 9], 'Test 91');
test(nodesBetweenCriticalPoints([5,4,3,2,1,2,3,4,5,10,9,8,7,6,5,4,3,2,1]), [5, 5], 'Test 92');
test(nodesBetweenCriticalPoints([5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5]), [1, 16], 'Test 93');
test(nodesBetweenCriticalPoints([1,3,2,4,3,5,4,6,5,7,6,8,7,9,8,10,9,11,10,12]), [1, 17], 'Test 94');
test(nodesBetweenCriticalPoints([1,2,3,4,3,2,3,4,5,4,3,2,1]), [2, 5], 'Test 95');
test(nodesBetweenCriticalPoints([1,2,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1]), [1, 24], 'Test 96');
test(nodesBetweenCriticalPoints([100000,99999,99998,99997,99996,99995,99994,99993,99992,99991]), [-1, -1], 'Test 97');
test(nodesBetweenCriticalPoints([1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2]), [2, 16], 'Test 98');
test(nodesBetweenCriticalPoints([10,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10]), [-1, -1], 'Test 99');
test(nodesBetweenCriticalPoints([10,20,30,20,10,20,30,20,10,20,30,20,10]), [2, 8], 'Test 100');
test(nodesBetweenCriticalPoints([10,20,30,20,10,5,15,25,35,25,15,5,10,20,30]), [3, 9], 'Test 101');
test(nodesBetweenCriticalPoints([5,4,3,2,1,2,3,4,5,4,3,2,1,2,3,4,5]), [4, 8], 'Test 102');
test(nodesBetweenCriticalPoints([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2]), [1, 17], 'Test 103');
test(nodesBetweenCriticalPoints([1,3,2,4,1,3,2,4,1,3,2,4,1,3,2,4,1,3,2,4,1,3,2,4,1,3,2,4]), [1, 25], 'Test 104');
test(nodesBetweenCriticalPoints([1,3,2,4,3,5,4,6,5,7,6,8,7]), [1, 10], 'Test 105');
test(nodesBetweenCriticalPoints([1,3,5,7,9,7,5,3,1,2,4,6,8,10,8,6,4,2]), [4, 9], 'Test 106');
test(nodesBetweenCriticalPoints([100000, 99999, 100001, 100002, 100000, 100003, 100001, 100004, 100002, 100005]), [1, 7], 'Test 107');
test(nodesBetweenCriticalPoints([1,2,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1]), [1, 18], 'Test 108');
test(nodesBetweenCriticalPoints([10,11,12,13,14,15,16,17,18,19,20,19,18,17,16,15,14,13,12,11,10]), [-1, -1], 'Test 109');
test(nodesBetweenCriticalPoints([5,10,5,15,5,20,5,25,5,30,5]), [1, 8], 'Test 110');
test(nodesBetweenCriticalPoints([1,2,3,4,5,4,3,2,1,2,3,4,5,4,3,2,1]), [4, 8], 'Test 111');
test(nodesBetweenCriticalPoints([1,2,3,2,1,1,2,3,2,1,1,2,3,2,1,1,2,3,2,1]), [5, 15], 'Test 112');
test(nodesBetweenCriticalPoints([1,2,3,4,5,4,5,4,5,4,5,4,5,4,5,4,5,4,5]), [1, 13], 'Test 113');
test(nodesBetweenCriticalPoints([1,3,2,5,4,7,6,9,8,11,10,13,12,15,14]), [1, 12], 'Test 114');
test(nodesBetweenCriticalPoints([100,90,80,70,60,50,40,30,20,10,20,30,40,50,60,70,80,90,100]), [-1, -1], 'Test 115');
test(nodesBetweenCriticalPoints([1,2,3,4,3,2,1,2,3,4,3,2,1]), [3, 6], 'Test 116');
test(nodesBetweenCriticalPoints([5,4,3,4,5,6,5,6,7,8,7,8,9,8,9,10]), [1, 11], 'Test 117');

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
