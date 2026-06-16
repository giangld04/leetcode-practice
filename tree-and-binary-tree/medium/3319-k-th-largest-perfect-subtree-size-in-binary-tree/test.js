// Test: 3319. K Th Largest Perfect Subtree Size In Binary Tree
// 75 test cases from LeetCodeDataset
// Run: node test.js

const { kthLargestPerfectSubtree } = require("./solution");

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

console.log("\n3319. K Th Largest Perfect Subtree Size In Binary Tree\n");

test(kthLargestPerfectSubtree([5,3,6,5,2,5,7,1,8,null,null,6,8], 2), 3, 'Test 1');
test(kthLargestPerfectSubtree([1,2,2,3,3,null,null,4,4,4,4], 2), 3, 'Test 2');
test(kthLargestPerfectSubtree([1,2,3,null,4], 3), -1, 'Test 3');
test(kthLargestPerfectSubtree([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 1), 15, 'Test 4');
test(kthLargestPerfectSubtree([1,2,3,4,5,6,7], 1), 7, 'Test 5');
test(kthLargestPerfectSubtree([1], 1), 1, 'Test 6');
test(kthLargestPerfectSubtree([2,3,4,5,6,7,8], 2), 3, 'Test 7');
test(kthLargestPerfectSubtree([2,1,3,4,5,6,7,8,9,10,11,12,13,14,15], 1), 15, 'Test 8');
test(kthLargestPerfectSubtree([1,2,2,3,3,null,null,4,4,4,4], 1), 7, 'Test 9');
test(kthLargestPerfectSubtree([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], 10), 3, 'Test 10');
test(kthLargestPerfectSubtree([1,2,3,4,5,6,7,8,9,10,null,null,11,12,13,14,null,null,null,null,15,null,16,null,null,17,null,null,18,19,null,20,null,null,21,22,23,24,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null], 10), -1, 'Test 11');
test(kthLargestPerfectSubtree([7,3,8,1,4,2,9,null,null,5,6,null,null,null,null,null,10], 2), 1, 'Test 12');
test(kthLargestPerfectSubtree([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,null,32,33,34,35,36,null,null,37,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null], 5), 3, 'Test 13');
test(kthLargestPerfectSubtree([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 4), 3, 'Test 14');
test(kthLargestPerfectSubtree([1,2,3,4,5,null,7,8,9,null,null,12,13,null,null,16,17], 3), 1, 'Test 15');
test(kthLargestPerfectSubtree([2,1,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 6), 3, 'Test 16');
test(kthLargestPerfectSubtree([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31], 4), 7, 'Test 17');
test(kthLargestPerfectSubtree([1,2,3,4,5,6,7,null,null,null,8,9,10,null,null,11,null,null,null,null,null,null,null,12,null,null,null,null,null,13,null,null,null,null,null,null,14,null,null,null,null,null,15], 4), 1, 'Test 18');
test(kthLargestPerfectSubtree([1,2,3,4,5,6,7,8,9,10,11,null,null,null,null,null,20,21,22,23,24,25,26,27], 4), 3, 'Test 19');
test(kthLargestPerfectSubtree([10,5,15,3,7,12,18,1,null,6,8,11,13,null,null,17,19], 5), 1, 'Test 20');
test(kthLargestPerfectSubtree([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,null,null,null,null,null,36], 6), 3, 'Test 21');
test(kthLargestPerfectSubtree([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null], 4), 3, 'Test 22');
test(kthLargestPerfectSubtree([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null], 2), 7, 'Test 23');
test(kthLargestPerfectSubtree([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63], 8), 7, 'Test 24');
test(kthLargestPerfectSubtree([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31], 5), 7, 'Test 25');
test(kthLargestPerfectSubtree([1,2,2,3,3,null,null,4,4,4,4], 4), 1, 'Test 26');
test(kthLargestPerfectSubtree([1,2,3,4,5,6,7,8,9,null,11,12,null,14,15], 4), 1, 'Test 27');
test(kthLargestPerfectSubtree([1,2,3,4,5,null,null,6,7,8,9,null,null,null,null,10,11], 3), 1, 'Test 28');
test(kthLargestPerfectSubtree([1,2,3,4,5,6,7,null,null,null,8,9,10,null,null,null,null,null,null], 2), 1, 'Test 29');
test(kthLargestPerfectSubtree([1,2,3,4,5,6,7,8,9,10,null,null,11,12,13,14,null,null,null,null,15,null,16,null,null,17,null,null,18,19], 8), -1, 'Test 30');
test(kthLargestPerfectSubtree([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,null,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31], 7), 3, 'Test 31');
test(kthLargestPerfectSubtree([5,3,6,5,2,5,7,1,8,null,null,6,8,9,10,11,12,13,14,15], 5), 1, 'Test 32');
test(kthLargestPerfectSubtree([1,2,3,4,5,6,7,8,9,10,11,12,13,null,null,16,17], 5), 1, 'Test 33');
test(kthLargestPerfectSubtree([1,2,2,3,3,null,null,4,4,null,null,5,5,null,null,6,6], 3), 1, 'Test 34');
test(kthLargestPerfectSubtree([1,2,3,4,5,6,7,8,9,10,null,null,11,12,13,14,null,null,null,null,15,null,16], 6), 1, 'Test 35');
test(kthLargestPerfectSubtree([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,16], 3), 7, 'Test 36');
test(kthLargestPerfectSubtree([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127], 8), 15, 'Test 37');
test(kthLargestPerfectSubtree([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,null,null,null,null,null,36,null,null,null,null,null,44], 7), 1, 'Test 38');
test(kthLargestPerfectSubtree([5,3,6,5,2,5,7,1,8,null,null,6,8,9,10,11,12,null,null,13,14,15,null,null,null,null,16,17,18,19], 5), 1, 'Test 39');
test(kthLargestPerfectSubtree([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 3), 7, 'Test 40');
test(kthLargestPerfectSubtree([1,2,3,4,5,6,7,null,null,8,9,10,11,12,13], 2), 3, 'Test 41');
test(kthLargestPerfectSubtree([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100], 7), 15, 'Test 42');
test(kthLargestPerfectSubtree([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63], 7), 3, 'Test 43');
test(kthLargestPerfectSubtree([10,9,20,null,null,15,7,13,16,18,25,22,23,26,27], 2), 3, 'Test 44');
test(kthLargestPerfectSubtree([1,2,3,4,5,6,7,8,9,10,null,null,11,12,13,14,null,null,null,null,15,null,16,null,null,17], 7), -1, 'Test 45');
test(kthLargestPerfectSubtree([2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32], 10), 3, 'Test 46');
test(kthLargestPerfectSubtree([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,31,32,33,34,35,36,37,38,39,40,null,null,43,44,45,46,47,48,49,50], 10), 1, 'Test 47');
test(kthLargestPerfectSubtree([5,3,6,5,2,5,7,1,8,null,null,6,8,null,null,null,null,1,8,9,10,11,12,13,14,15], 4), 3, 'Test 48');
test(kthLargestPerfectSubtree([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63], 6), 15, 'Test 49');
test(kthLargestPerfectSubtree([1,2,3,4,5,6,7,8,9,null,null,null,null,10,11,12,13,null,null,null,null,null,null,null,null,null], 3), 1, 'Test 50');
test(kthLargestPerfectSubtree([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,null,null,null,null,null,null,null,null,null,null,16], 5), 1, 'Test 51');
test(kthLargestPerfectSubtree([1,2,2,3,3,null,null,4,4,4,4,null,null,null,null,null,null], 5), 1, 'Test 52');
test(kthLargestPerfectSubtree([1,2,3,4,5,6,7,8,9,10,null,null,11,12,13,14,null,null,null,null,15], 2), 1, 'Test 53');
test(kthLargestPerfectSubtree([1,2,3,4,5,6,7,8,9,10,null,null,11,12,13,14,null,null,null,null,15,null,16,null,null,17,null,null,18,19,null,20], 9), -1, 'Test 54');
test(kthLargestPerfectSubtree([1,2,3,4,5,null,6,7,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15,null,16,null,17], 5), -1, 'Test 55');
test(kthLargestPerfectSubtree([5,3,6,5,2,5,7,1,8,null,null,6,8,9,10,11,12], 4), 3, 'Test 56');
test(kthLargestPerfectSubtree([1,2,3,4,5,6,7,8,null,null,null,null,null,null,null], 2), 1, 'Test 57');
test(kthLargestPerfectSubtree([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], 5), 3, 'Test 58');
test(kthLargestPerfectSubtree([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,null,null,null,null,null,null,null,null,null,null,null,null,null,null,21], 8), 1, 'Test 59');
test(kthLargestPerfectSubtree([1,2,3,4,5,6,7,null,null,null,null,null,null,null,null,null,null,null,null,null,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100], 5), 1, 'Test 60');
test(kthLargestPerfectSubtree([1,2,3,4,5,6,7,8,9,10,null,null,11,12,13,14,null,null,null,null,15,null,16,null,null,17,null,null,18,19,null,20,null,null,21,22,23,24,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,25,26,27,28,29,30,31,32], 11), -1, 'Test 61');
test(kthLargestPerfectSubtree([1,2,3,4,5,6,7,8,9,10,null,null,null,null,null,null,null,null,null,null,null], 3), 1, 'Test 62');
test(kthLargestPerfectSubtree([2,3,4,5,6,null,7,8,9,null,null,null,null,10,11], 3), 1, 'Test 63');
test(kthLargestPerfectSubtree([1,2,2,3,3,3,3,4,4,4,4,4,4,4,4], 4), 3, 'Test 64');
test(kthLargestPerfectSubtree([5,3,6,5,2,5,7,1,8,null,null,6,8,9,10,11,12,13,14,15], 3), 3, 'Test 65');
test(kthLargestPerfectSubtree([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null], 8), 1, 'Test 66');
test(kthLargestPerfectSubtree([5,3,6,5,2,5,7,1,8,null,null,6,8,11,12,13,null,null,null,null,null,null,14,15], 4), 1, 'Test 67');
test(kthLargestPerfectSubtree([3,1,4,3,null,1,5], 2), 1, 'Test 68');
test(kthLargestPerfectSubtree([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31], 6), 7, 'Test 69');
test(kthLargestPerfectSubtree([1,2,3,4,5,6,7,8,9,10,11,null,null,12,13,null,null,14,15], 3), 3, 'Test 70');
test(kthLargestPerfectSubtree([5,3,6,5,2,5,7,1,8,9,10,6,8,11,12], 3), 7, 'Test 71');
test(kthLargestPerfectSubtree([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 2), 7, 'Test 72');
test(kthLargestPerfectSubtree([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,31,32,33,34,35,36,37,38,39,40], 9), 1, 'Test 73');
test(kthLargestPerfectSubtree([1,2,3,4,5,6,7,8,null,null,null,null,null,null,9], 3), 1, 'Test 74');
test(kthLargestPerfectSubtree([1,2,3,4,5,null,6,7,8,9,null,10,null,11,null,12], 3), 1, 'Test 75');

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
