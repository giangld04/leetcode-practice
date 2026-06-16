// Test: 222. Count Complete Tree Nodes
// 59 test cases from LeetCodeDataset
// Run: node test.js

const { countNodes } = require("./solution");

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

console.log("\n222. Count Complete Tree Nodes\n");

test(countNodes([1,2,3,4,5,6,7]), 7, 'Test 1');
test(countNodes([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 15, 'Test 2');
test(countNodes([1,2,3,4,5,null,7]), 6, 'Test 3');
test(countNodes([1,2,3,4,5,6]), 6, 'Test 4');
test(countNodes([1]), 1, 'Test 5');
test(countNodes([]), 0, 'Test 6');
test(countNodes([1,2,3,4,5,6,7,8,9,10,11,12,13,null,null,16,17]), 15, 'Test 7');
test(countNodes([1,2,3,null,null,6,7]), 5, 'Test 8');
test(countNodes([1,2,3,4,5,6,7,8,9,10,11,12,13,null,null,16,17,null,null,19,20,21,22,null,null,null,null,23,24,25,26,null,null,27,null,null,null,null,null,null,null,null,null,null,null,null,null,null,28]), 25, 'Test 9');
test(countNodes([1,2,3,4]), 4, 'Test 10');
test(countNodes([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34]), 34, 'Test 11');
test(countNodes([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32]), 32, 'Test 12');
test(countNodes([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48]), 48, 'Test 13');
test(countNodes([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64]), 64, 'Test 14');
test(countNodes([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]), 33, 'Test 15');
test(countNodes([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]), 25, 'Test 16');
test(countNodes([1,2,3,4,5,6,7,8,9,10,11,12,13]), 13, 'Test 17');
test(countNodes([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]), 50, 'Test 18');
test(countNodes([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]), 27, 'Test 19');
test(countNodes([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38]), 38, 'Test 20');
test(countNodes([1,2]), 2, 'Test 21');
test(countNodes([1,2,3,4,5,6,7,8]), 8, 'Test 22');
test(countNodes([1,2,3,4,5,6,7,8,9,10,11,12,13,null,null,16,null,18]), 15, 'Test 23');
test(countNodes([1,2,3,4,5,6,7,8,9,10,11]), 11, 'Test 24');
test(countNodes([1,2,3,4,5,null,7,8,9,10,11,12,13,14,null]), 13, 'Test 25');
test(countNodes([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]), 100, 'Test 26');
test(countNodes([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]), 28, 'Test 27');
test(countNodes([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]), 40, 'Test 28');
test(countNodes([1,2,3,4,5,6,7,8,9,10]), 10, 'Test 29');
test(countNodes([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]), 17, 'Test 30');
test(countNodes([1,2,3,4,5,6,7,8,9,10,11,12,13,null,null,16,17,null,null,19,20,21,22,null,null,23,24]), 21, 'Test 31');
test(countNodes([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37]), 37, 'Test 32');
test(countNodes([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35]), 35, 'Test 33');
test(countNodes([1,2,3,4,5,null,null,8,9,10,11]), 9, 'Test 34');
test(countNodes([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]), 18, 'Test 35');
test(countNodes([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]), 23, 'Test 36');
test(countNodes([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), 19, 'Test 37');
test(countNodes([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39]), 39, 'Test 38');
test(countNodes([1,2,3,4,5,6,7,8,9,10,11,12,13,14]), 14, 'Test 39');
test(countNodes([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63]), 63, 'Test 40');
test(countNodes([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,null,null,null,null,35]), 32, 'Test 41');
test(countNodes([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15]), 15, 'Test 42');
test(countNodes([1,null,2,null,3,null,4,null,5,null,6,null,7]), 7, 'Test 43');
test(countNodes([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]), 16, 'Test 44');
test(countNodes([1,2,3]), 3, 'Test 45');
test(countNodes([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36]), 36, 'Test 46');
test(countNodes([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), 30, 'Test 47');
test(countNodes([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 20, 'Test 48');
test(countNodes([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]), 24, 'Test 49');
test(countNodes([1,2,3,4,5]), 5, 'Test 50');
test(countNodes([1,2,3,null,5,6,7]), 6, 'Test 51');
test(countNodes([1,2,3,4,5,6,7,8,9,10,11,12,13,null,null,16,17,null,null,19,20,null,null,null,null,21]), 18, 'Test 52');
test(countNodes([1,2,3,4,5,6,7,8,9,10,11,12]), 12, 'Test 53');
test(countNodes([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]), 31, 'Test 54');
test(countNodes([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]), 21, 'Test 55');
test(countNodes([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]), 22, 'Test 56');
test(countNodes([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]), 26, 'Test 57');
test(countNodes([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]), 29, 'Test 58');
test(countNodes([1,2,3,4,5,6,7,8,9]), 9, 'Test 59');

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
