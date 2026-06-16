// Test: 1530. Number Of Good Leaf Nodes Pairs
// 66 test cases from LeetCodeDataset
// Run: node test.js

const { countPairs } = require("./solution");

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

console.log("\n1530. Number Of Good Leaf Nodes Pairs\n");

test(countPairs([1], 1), 0, 'Test 1');
test(countPairs([1,2,3,4,5,6,7], 5), 6, 'Test 2');
test(countPairs([1,2,3,null,4], 3), 1, 'Test 3');
test(countPairs([1,2,3,4,5,6,7], 3), 2, 'Test 4');
test(countPairs([1,2,3,4,5,6,7], 1), 0, 'Test 5');
test(countPairs([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 2), 4, 'Test 6');
test(countPairs([7,1,4,6,null,5,3,null,null,null,null,null,2], 3), 1, 'Test 7');
test(countPairs([1,2,3,4,null,null,5,null,6,null,7,null,8,null,9], 3), 0, 'Test 8');
test(countPairs([1,2,3,4,5,null,6,7,null,null,8,null,null,null,9], 4), 0, 'Test 9');
test(countPairs([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31], 7), 56, 'Test 10');
test(countPairs([1,2,3,null,null,4,5,null,null,null,null,6,7,null,null,null,null,8,9,null,null,null,null,10,11,null,null,null,null,12,13,null,null,null,null,14,15,null,null,null,null,16,17,null,null,null,null,18,19,null,null,null,null,20,21], 8), 3, 'Test 11');
test(countPairs([1,2,3,null,null,4,5,null,null,6,7,null,null,null,null,8,9], 5), 6, 'Test 12');
test(countPairs([1,2,3,4,null,5,null,6,7,null,null,null,8,null,9,null,null,10,null,null,null,null,null,null,null,null,null,11,null,null,null,null,null,null,null,null,null,12,null,null,null,null,null,null,null,null,null,13,null,null,null,null,null,null,null,null,null,14,null,null,null,null,null,null,null,null,null,15], 6), 2, 'Test 13');
test(countPairs([1,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12], 6), 0, 'Test 14');
test(countPairs([1,2,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15,null,16,null,17,null,18,null,19,null,20,null,21,null,22,null,23,null,24,null,25,null,26,null,27,null,28,null,29,null,30], 4), 0, 'Test 15');
test(countPairs([2,1,3,null,4,null,5,null,6,null,7,null,8,null,9], 6), 0, 'Test 16');
test(countPairs([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11], 6), 0, 'Test 17');
test(countPairs([8,5,9,4,6,10,11,3,7,null,null,null,null,null,null,null,2,null,null,null,null,null,null,null], 3), 3, 'Test 18');
test(countPairs([1,2,3,4,null,null,5,null,null,null,null,null,6,null,null,null,null,null,7], 6), 1, 'Test 19');
test(countPairs([1,2,3,4,null,5,6,7,8,9,10,null,null,null,null,null,11,null,12,13,null,null,14,null,15,null,16,null,17,null,18,null,19,null,20], 6), 4, 'Test 20');
test(countPairs([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40], 3), 10, 'Test 21');
test(countPairs([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], 3), 7, 'Test 22');
test(countPairs([1,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15,null,16,null,17,null,18,null,19,null,20,null,21,null,22,null,23,null,24,null,25], 6), 0, 'Test 23');
test(countPairs([1,2,3,4,5,null,6,7,8,null,null,9,10,11,12,null,null,13,14,null,null,15,16], 5), 14, 'Test 24');
test(countPairs([1,2,3,4,5,null,null,6,7,null,null,null,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15], 3), 2, 'Test 25');
test(countPairs([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63], 5), 45, 'Test 26');
test(countPairs([1,2,3,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13], 7), 0, 'Test 27');
test(countPairs([10,5,15,3,7,null,18,1,null,6,9,null,null,12,14], 5), 8, 'Test 28');
test(countPairs([1,2,3,4,5,null,null,6,7,null,null,8,9,null,null,null,null,null,10,11,null,null,null,null,null,null,null,null,12], 4), 6, 'Test 29');
test(countPairs([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25], 6), 38, 'Test 30');
test(countPairs([1,2,3,4,5,null,6,null,7,null,8,null,9], 5), 1, 'Test 31');
test(countPairs([1,2,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15,null,16,null,17,null,18,null,19,null,20], 5), 0, 'Test 32');
test(countPairs([1,2,3,4,5,null,null,6,7,8,9,null,null,10,11,null,null,null,null,null,null,12,13,null,null,null,null,null,null,14,15], 3), 5, 'Test 33');
test(countPairs([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 2), 4, 'Test 34');
test(countPairs([1,2,3,4,5,6,7,8,null,null,null,null,null,null,null,null,null,9,null,10,null,11,null,12,null,13,null,14,null,15,null,16,null,17,null,18,null,19,null,20], 5), 6, 'Test 35');
test(countPairs([1,2,null,3,4,null,5,6,7,null,null,null,8,9,10,null,null,null,null,null,null,null,null,null,null,11], 5), 6, 'Test 36');
test(countPairs([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15,null,16,null,17,null,18,null,19,null,20], 10), 0, 'Test 37');
test(countPairs([1,2,3,4,null,null,5,null,6,null,7,null,8,null,9,null,10], 5), 0, 'Test 38');
test(countPairs([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10], 2), 0, 'Test 39');
test(countPairs([5,1,2,3,4,6,7,8,9,10,11,12,13,14,15], 4), 12, 'Test 40');
test(countPairs([5,1,4,null,2,null,3,6,7,null,8,null,9,10,11,null,null,null,null,null,null], 5), 3, 'Test 41');
test(countPairs([1,2,3,4,null,5,6,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15], 5), 0, 'Test 42');
test(countPairs([1,2,3,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15,null,16,null,17,null,18,null,19,null,20,null,21,null,22,null,23,null,24,null,25,null,26,null,27,null,28,null,29,null,30,null,31,null,32,null,33,null,34,null,35,null,36,null,37,null,38,null,39,null,40,null,41,null,42,null,43,null,44,null,45,null,46,null,47,null,48,null,49,null,50], 6), 0, 'Test 43');
test(countPairs([10,5,15,3,7,12,18,1,4,6,8,11,13,17,19,null,null,null,null,null,null,null,null,2,null,9], 4), 8, 'Test 44');
test(countPairs([1,2,3,4,null,null,5,6,null,null,7,8,null,null,9,null,10,null,null,11], 5), 0, 'Test 45');
test(countPairs([5,4,8,11,null,17,4,7,1,null,null,5,3], 6), 10, 'Test 46');
test(countPairs([1,2,3,null,4,null,5,null,null,6,7,null,null,8,9], 3), 3, 'Test 47');
test(countPairs([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100], 3), 25, 'Test 48');
test(countPairs([1,2,3,null,null,4,null,null,5,null,6,null,7,null,8,null,9], 5), 0, 'Test 49');
test(countPairs([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 4), 12, 'Test 50');
test(countPairs([1,2,3,null,null,4,5,6,7,null,null,null,null,8,9,null,null,null,null,null,null,null,null,null,10], 5), 10, 'Test 51');
test(countPairs([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,null,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31], 4), 24, 'Test 52');
test(countPairs([1,2,3,null,4,null,5,null,null,6,7,null,null,8,9,null,null,null,null,10,null,11,null,null,null,null,null,null,null,null,null], 4), 3, 'Test 53');
test(countPairs([3,5,1,6,2,0,8,null,null,7,4,null,null,10,null,null,11,null,null,12,null,null,13,null,null,14,null,null,15], 4), 3, 'Test 54');
test(countPairs([1,2,3,4,5,6,7,8,9,null,null,null,10,null,null,11,null,null,12], 4), 5, 'Test 55');
test(countPairs([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 5), 17, 'Test 56');
test(countPairs([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,null,41,null,42], 4), 26, 'Test 57');
test(countPairs([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50], 10), 300, 'Test 58');
test(countPairs([3,5,1,6,2,0,8,null,null,7,4,null,null,null,null,null,null], 3), 4, 'Test 59');
test(countPairs([1,2,3,null,null,4,5,null,null,null,null,6,null,null,7], 5), 3, 'Test 60');
test(countPairs([1,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9], 7), 0, 'Test 61');
test(countPairs([1,2,3,null,4,null,null,5,6,null,null,null,null,null,null,null,null,null,null,7,8,null,null,null,null,null,null,null,null,9,10,null,null,null,null,null,null,null,null,null,11,12,null,null,null,null,null,null,null,null,null,13,14,null,null,null,null,null,null,null,null,null,15,16,null,null,null,null,null,null,null,null,null,17,18], 5), 3, 'Test 62');
test(countPairs([1,2,3,null,null,4,5,null,null,6,7,null,null,8,9], 4), 8, 'Test 63');
test(countPairs([50,25,75,12,37,63,87,6,18,31,43,55,70,81,93,3,9,15,21,27,33,39,45,51,57,61,67,73,77,83,89,95,null,10,19,28,35,41,47,53,59,65,71,75,79,85,91,97,null,13,23,32,40,46,52,58,64,70,76,82,88,94,100,null,null,null,16,22,29,36,42,48,54,60,66,72,78,84,90,96,null,null,null,null,null,20,26,31,37,43,49,55,61,67,73,79,85,91,97,null,null,null,null,null,null,null,null,24,30,35,41,47,53,59,65,71,77,83,89,95,null,null,null,null,null,null,null,null,null,28,33,38,44,50,56,62,68,74,80,86,92,98,null,null,null,null,null,null,null,null,null,null,null,32,37,43,49,55,61,67,73,79,85,91,97,null,null,null,null,null,null,null,null,null,null,null,null,36,42,48,54,60,66,72,78,84,90,96,null,null,null,null,null,null,null,null,null,null,null,null,null,null,40,46,52,58,64,70,76,82,88,94,100], 5), 118, 'Test 64');
test(countPairs([31,30,48,29,38,39,49,27,null,null,null,null,null,null,null,28,null,26,null,null,null,null,null,null], 2), 1, 'Test 65');
test(countPairs([1,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15,null,16], 7), 0, 'Test 66');

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
