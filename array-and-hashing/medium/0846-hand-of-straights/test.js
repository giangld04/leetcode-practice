// Test: 846. Hand Of Straights
// 81 test cases from LeetCodeDataset
// Run: node test.js

const { isNStraightHand } = require("./solution");

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

console.log("\n846. Hand Of Straights\n");

test(isNStraightHand([1,2,3,4,5,6], 2), true, 'Test 1');
test(isNStraightHand([1,1,2,2,3,3], 3), true, 'Test 2');
test(isNStraightHand([1,2,3,4,5,6,7,8,9,10,11,12], 4), true, 'Test 3');
test(isNStraightHand([1,2,3,4,5,6,7,8,9,10], 5), true, 'Test 4');
test(isNStraightHand([1,2,3,4,5,6], 3), true, 'Test 5');
test(isNStraightHand([1,2,3,4,5], 4), false, 'Test 6');
test(isNStraightHand([1,2,3,6,2,3,4,7,8], 3), true, 'Test 7');
test(isNStraightHand([8,10,12], 3), false, 'Test 8');
test(isNStraightHand([1,2,2,3,3,3,4,4,4,4,5,5,5,5,5,6,6,6,6,6,6,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9], 5), false, 'Test 9');
test(isNStraightHand([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40], 10), true, 'Test 10');
test(isNStraightHand([1,2,2,3,3,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13], 4), false, 'Test 11');
test(isNStraightHand([1,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12], 3), false, 'Test 12');
test(isNStraightHand([100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120], 5), false, 'Test 13');
test(isNStraightHand([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40], 10), true, 'Test 14');
test(isNStraightHand([2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40], 4), false, 'Test 15');
test(isNStraightHand([10,11,12,13,14,15,16,17,18,19,20,21,22,23,24], 5), true, 'Test 16');
test(isNStraightHand([5,5,5,5,5,6,6,6,6,6,7,7,7,7,7,8,8,8,8,8], 5), false, 'Test 17');
test(isNStraightHand([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20], 4), true, 'Test 18');
test(isNStraightHand([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31], 2), false, 'Test 19');
test(isNStraightHand([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40], 8), true, 'Test 20');
test(isNStraightHand([1,2,3,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 5), false, 'Test 21');
test(isNStraightHand([1,2,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32], 8), false, 'Test 22');
test(isNStraightHand([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39], 5), false, 'Test 23');
test(isNStraightHand([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], 3), false, 'Test 24');
test(isNStraightHand([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 2), true, 'Test 25');
test(isNStraightHand([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 4), false, 'Test 26');
test(isNStraightHand([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], 5), true, 'Test 27');
test(isNStraightHand([1,1,2,2,2,3,3,4,4,4,5,5,5,6,6,7,7,8,8,9,9,10,10], 4), false, 'Test 28');
test(isNStraightHand([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20,21,21,22,22], 6), false, 'Test 29');
test(isNStraightHand([1,3,2,4,5,6,8,7,10,9,12,11,14,13,16,15,18,17,20,19], 2), true, 'Test 30');
test(isNStraightHand([5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 4), true, 'Test 31');
test(isNStraightHand([1,2,2,3,3,4,5,6,7,8,9,10], 3), true, 'Test 32');
test(isNStraightHand([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 4), true, 'Test 33');
test(isNStraightHand([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45], 5), true, 'Test 34');
test(isNStraightHand([1,3,2,5,4,6,7,9,8,11,10,13,12,15,14,17,16,19,18,21,20,23,22,25,24,27,26,29,28,31,30], 2), false, 'Test 35');
test(isNStraightHand([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60], 6), true, 'Test 36');
test(isNStraightHand([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36], 4), true, 'Test 37');
test(isNStraightHand([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 5), false, 'Test 38');
test(isNStraightHand([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34], 10), false, 'Test 39');
test(isNStraightHand([1,2,2,3,3,3,4,4,5,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15], 5), false, 'Test 40');
test(isNStraightHand([10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40], 5), false, 'Test 41');
test(isNStraightHand([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 5), true, 'Test 42');
test(isNStraightHand([3,3,3,2,2,1,4,4,4], 3), false, 'Test 43');
test(isNStraightHand([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12], 4), true, 'Test 44');
test(isNStraightHand([10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14], 4), false, 'Test 45');
test(isNStraightHand([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59,61], 6), false, 'Test 46');
test(isNStraightHand([3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10], 5), false, 'Test 47');
test(isNStraightHand([5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28], 7), false, 'Test 48');
test(isNStraightHand([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45], 7), false, 'Test 49');
test(isNStraightHand([5,6,7,8,8,9,10,11,12,12,13,14], 4), false, 'Test 50');
test(isNStraightHand([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], 2), true, 'Test 51');
test(isNStraightHand([3,3,3,3,4,4,5,5,5], 3), false, 'Test 52');
test(isNStraightHand([1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10], 3), false, 'Test 53');
test(isNStraightHand([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25], 5), true, 'Test 54');
test(isNStraightHand([100,200,300,400,500,600,700,800,900,1000], 10), false, 'Test 55');
test(isNStraightHand([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15], 3), true, 'Test 56');
test(isNStraightHand([5,6,7,8,9,10,11,12,13,14], 5), true, 'Test 57');
test(isNStraightHand([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100], 5), true, 'Test 58');
test(isNStraightHand([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40], 5), true, 'Test 59');
test(isNStraightHand([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], 3), true, 'Test 60');
test(isNStraightHand([10,10,10,10,10,11,11,11,11,11], 5), false, 'Test 61');
test(isNStraightHand([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100], 10), true, 'Test 62');
test(isNStraightHand([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8], 2), true, 'Test 63');
test(isNStraightHand([1,3,2,5,4,6,9,8,7,12,11,10,15,14,13,18,17,16,21,20,19,24,23,22,27,26,25,30,29,28,33,32,31,36,35,34,39,38,37,42,41,40], 3), true, 'Test 64');
test(isNStraightHand([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], 10), true, 'Test 65');
test(isNStraightHand([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50], 5), true, 'Test 66');
test(isNStraightHand([1,2,3,4,5,6,7,8,9,10,11,12], 3), true, 'Test 67');
test(isNStraightHand([1,2,2,3,3,3,4,4,4,4,5,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10], 5), false, 'Test 68');
test(isNStraightHand([10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], 5), false, 'Test 69');
test(isNStraightHand([10,11,12,13,14,15,16,17,18,19,20,21], 3), true, 'Test 70');
test(isNStraightHand([1,1,1,1,1,1,2,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4], 3), false, 'Test 71');
test(isNStraightHand([3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10], 3), false, 'Test 72');
test(isNStraightHand([1,2,3,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], 4), false, 'Test 73');
test(isNStraightHand([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 5), true, 'Test 74');
test(isNStraightHand([1,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], 2), true, 'Test 75');
test(isNStraightHand([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], 5), true, 'Test 76');
test(isNStraightHand([100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115], 8), true, 'Test 77');
test(isNStraightHand([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10], 3), false, 'Test 78');
test(isNStraightHand([1,3,2,4,5,6,8,7,10,9,12,11,14,13,16,15], 4), true, 'Test 79');
test(isNStraightHand([1,3,3,4,4,5,5,5,6,6,7,7,8,8,9,9,10,10,11,11], 4), false, 'Test 80');
test(isNStraightHand([1,1,2,2,3,3,4,4,5,5,6,6], 2), true, 'Test 81');

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
