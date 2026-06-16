// Test: 230. Kth Smallest Element In A Bst
// 78 test cases from LeetCodeDataset
// Run: node test.js

const { kthSmallest } = require("./solution");

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

console.log("\n230. Kth Smallest Element In A Bst\n");

test(kthSmallest([5,3,6,2,4,null,null,1], 3), 3, 'Test 1');
test(kthSmallest([3,1,4,null,2], 1), 1, 'Test 2');
test(kthSmallest([3,2,4,1], 2), 2, 'Test 3');
test(kthSmallest([1], 1), 1, 'Test 4');
test(kthSmallest([5,1,7,null,2,null,8,null,3], 4), 5, 'Test 5');
test(kthSmallest([3,1,4,null,2,null,null,null,null,null], 2), 2, 'Test 6');
test(kthSmallest([10,5,15,3,7,null,18], 4), 10, 'Test 7');
test(kthSmallest([8,4,12,2,6,10,14,1,3,5,7,9,11,13,15], 15), 15, 'Test 8');
test(kthSmallest([10,5,15,3,7,12,18,1,4,6,8,11,13,17,19], 5), 6, 'Test 9');
test(kthSmallest([50,25,75,10,30,60,80,5,15,27,35,55,65,70,90,1,null,8,12,20,28,32,38,40,52,58,62,68,72,78,85,95], 15), 38, 'Test 10');
test(kthSmallest([8,3,10,1,6,null,14,null,null,4,7,13,17,11,15], 7), 7, 'Test 11');
test(kthSmallest([7,3,15,null,null,9,20,8,10,11,19], 4), 9, 'Test 12');
test(kthSmallest([60,30,90,20,40,70,100,15,25,35,45,65,80,95,110], 17), null, 'Test 13');
test(kthSmallest([20,10,30,5,15,25,35,1,7,12,18,23,27,32,37], 10), 25, 'Test 14');
test(kthSmallest([7,3,9,2,5,8,10,1,4,6,null,null,null,null,null,null,null], 5), 6, 'Test 15');
test(kthSmallest([5,3,7,2,4,6,8,1], 8), 8, 'Test 16');
test(kthSmallest([20,10,30,5,15,25,35,2,7,13,17,23,27,32,37], 10), 25, 'Test 17');
test(kthSmallest([7,3,15,null,null,9,20,null,null,null,22], 5), 20, 'Test 18');
test(kthSmallest([5,3,7,2,4,6,8,1], 1), 1, 'Test 19');
test(kthSmallest([8,4,12,2,6,10,14,1,3,5,7,9,11,13,15], 7), 7, 'Test 20');
test(kthSmallest([10,5,15,3,7,null,18,1,null,6], 4), 6, 'Test 21');
test(kthSmallest([20,15,25,10,18,null,30,5,13,null,null,null,null,17,19], 10), 30, 'Test 22');
test(kthSmallest([100,50,150,25,75,125,175,10,30,60,80,110,140,160,180], 15), 180, 'Test 23');
test(kthSmallest([10,5,15,2,7,null,20,1,null,6,null,null,null,null,null,null,3], 6), 7, 'Test 24');
test(kthSmallest([30,15,45,10,20,40,50,5,12,18,25,35,42,48,55], 18), null, 'Test 25');
test(kthSmallest([25,15,35,10,20,30,40,5,12,18,22,28,32,38,42], 18), null, 'Test 26');
test(kthSmallest([30,15,45,10,20,40,50,5,12,18,22,35,42,48,55], 7), 22, 'Test 27');
test(kthSmallest([25,15,35,10,20,30,40,5,12,17,22,28,32,38,45,2,7,11,14,18,21,26,29,31,33,36,42,44,47,null,null,null,9,null,13,null,16,null,null,23,null,null,null,null,null,null,null,null,null,null,39,null,null,null,null,null,null,null,null,41,43,null,46,null,null,48,null,null,49], 22), 22, 'Test 28');
test(kthSmallest([25,15,35,10,20,30,40,5,12,18,22,28,32,38,45], 15), 45, 'Test 29');
test(kthSmallest([20,10,30,5,15,null,null,3,7,12,18], 8), 20, 'Test 30');
test(kthSmallest([50,20,80,10,30,70,90,5,15,25,35,60,75,85,95], 10), 70, 'Test 31');
test(kthSmallest([30,10,50,5,20,40,60,1,7,15,25,35,45,55,65], 20), null, 'Test 32');
test(kthSmallest([7,3,15,null,null,9,20], 3), 9, 'Test 33');
test(kthSmallest([60,40,80,30,50,70,90,20,35,45,55,65,75,85,95], 22), null, 'Test 34');
test(kthSmallest([10,5,15,3,7,12,18,1,4,6,8,null,null,null,null,11,14,16,null,null,13,17,19], 7), 5, 'Test 35');
test(kthSmallest([10,5,15,3,7,13,18,1,null,6], 5), 7, 'Test 36');
test(kthSmallest([10,5,15,null,null,12,20,11,null,null,13,14,16,null,null,null,18,19,21], 4), 18, 'Test 37');
test(kthSmallest([20,10,30,5,15,25,35,2,7,12,17,22,27,32,37,1,3,6,8,11,13,16,18,21,23,26,28,31,33,36,38,4,9,14,19,24,29,34,39], 20), 15, 'Test 38');
test(kthSmallest([7,3,15,null,null,9,20,8,null,null,null,null,25], 6), 15, 'Test 39');
test(kthSmallest([50,25,75,15,35,60,85,10,20,30,40,55,65,80,90], 12), 75, 'Test 40');
test(kthSmallest([15,10,20,5,12,18,25,null,7,11,14,16,19,22,27], 8), 16, 'Test 41');
test(kthSmallest([100,50,150,25,75,125,175,10,40,60,90,110,140,160,190], 15), 190, 'Test 42');
test(kthSmallest([25,15,35,10,20,30,40,5,12,null,18,28,32,38,45], 15), null, 'Test 43');
test(kthSmallest([20,10,30,5,15,25,35,2,7,12,18,22,28,32,38,1,null,6,null,11,13,null,17,19,null,21,23,null,27,29,null,31,33,null,37,39], 10), 39, 'Test 44');
test(kthSmallest([60,30,90,20,40,70,110,10,25,35,50,65,85,100,120], 9), 65, 'Test 45');
test(kthSmallest([20,10,30,5,15,25,35,1,null,12,18,22,28,null,null,null,null,14], 10), 25, 'Test 46');
test(kthSmallest([7,3,15,null,null,9,20,8,null,null,null,null,22], 12), null, 'Test 47');
test(kthSmallest([30,15,45,10,20,40,50,5,12,18,25,35,45,48,55], 7), 25, 'Test 48');
test(kthSmallest([100,50,150,25,75,125,175,10,40,60,85,110,140,160,185,5,15,35,45,55,70,80,90,105,115,130,135,155,170,190,3,7,13,17,20,30,43,47,53,65,72,87,88,95,103,108,112,127,132,138,148,157,165,168,172,182,187,192,197,2,4,6,8,11,12,14,16,19,21,22,23,24,26,27,28,29,31,32,33,34,36,37,38,39,41,42,44,46,48,49,51,52,54,56,57,58,59,61,62,63,64,66,67,68,69,71,73,74,76,77,78,79,81,82,83,84,86,89,91,92,93,94,96,97,98,99,100,101,102,104,106,107,109,111,113,114,116,117,118,119,120,121,122,123,124,126,128,129,131,133,134,136,137,139,141,142,143,144,145,146,147,149,150,151,152,153,154,156,158,159,161,162,163,164,166,167,169,171,173,174,175,176,177,178,179,180,181,183,184,186,188,189,191,193,194,195,196,198,199,200], 150), 66, 'Test 49');
test(kthSmallest([25,15,35,10,20,30,40,5,12,null,18,28,32,null,null,null,null,null,null,13,null,16,null,null,27,29,31,33,null,null,null,null,null,34], 18), 35, 'Test 50');
test(kthSmallest([75,50,100,25,60,85,125,15,35,55,65,90,110,130,150], 13), 130, 'Test 51');
test(kthSmallest([4,2,5,1,3], 2), 2, 'Test 52');
test(kthSmallest([100,50,150,25,75,125,175,10,30,60,90,110,140,160,180], 20), null, 'Test 53');
test(kthSmallest([55,30,80,15,40,70,90,10,20,35,45,65,75,85,95], 9), 65, 'Test 54');
test(kthSmallest([50,25,75,12,37,62,87,6,18,31,43,56,70,81,93,3,9,15,21,28,34,40,47,53,59,65,68,73,79,84,89,91,96], 25), 68, 'Test 55');
test(kthSmallest([25,15,35,10,20,30,40,5,12,18,22,28,32,38,45], 18), null, 'Test 56');
test(kthSmallest([7,3,9,1,5,null,10,null,2,4,6,8,null,null,null,null,null,null,null], 8), 9, 'Test 57');
test(kthSmallest([100,50,150,25,75,125,175,10,30,60,90,110,140,160,180], 15), 180, 'Test 58');
test(kthSmallest([8,3,10,1,6,null,14,null,null,4,7,13], 7), 10, 'Test 59');
test(kthSmallest([1,2,null,null,3,null,4,null,5,null,6,null,7], 7), 1, 'Test 60');
test(kthSmallest([8,4,12,2,6,10,14,1,3,5,7,9,11,13,15], 13), 13, 'Test 61');
test(kthSmallest([30,15,45,10,20,40,50,5,12,17,25,35,47,55,60], 20), null, 'Test 62');
test(kthSmallest([2,1,3,null,null,4,5,6,7,8,9,10,11,12,13], 7), 12, 'Test 63');
test(kthSmallest([15,10,20,8,12,null,25,7,9,11,13,22,30], 15), null, 'Test 64');
test(kthSmallest([8,3,10,null,6,9,14,null,7,8,11,12,15], 7), 11, 'Test 65');
test(kthSmallest([100,50,150,25,75,125,175,10,35,60,90,110,140,160,190], 10), 125, 'Test 66');
test(kthSmallest([20,10,30,5,15,25,35,3,7,13,17,23,27,33,37], 25), null, 'Test 67');
test(kthSmallest([8,4,12,2,6,10,14,1,3,5,7,9,11,13,15], 10), 10, 'Test 68');
test(kthSmallest([20,10,30,5,15,25,35,1,7,12,18,22,28,32,40], 15), 40, 'Test 69');
test(kthSmallest([37,23,49,10,30,44,55,5,15,25,33,41,47,52,60], 9), 41, 'Test 70');
test(kthSmallest([50,25,75,10,40,60,90,5,15,35,45,55,65,85,100,3,7,13,17,32,37,43,47,52,57,62,67,80,87,95,105,null,null,8,12,16,18,33,36,41,44,46,48,51,53,56,58,61,63,66,68,78,83,86,92,98,null,null,6,null,9,null,null,11,null,null,14,null,null,19,null,24,null,27,null,null,30,null,34,null,null,38,null,42,null,null,45,null,null,50,null,null,54,null,null,59,null,null,64,null,null,69,null,null,74,null,null,79,null,null,82,null,null,84,null,null,89,null,null,91,null,null,93,null,null,96,null,null,99,null,null,102,null,null,104], 30), 35, 'Test 71');
test(kthSmallest([4,2,6,1,3,5,7,0], 3), 2, 'Test 72');
test(kthSmallest([30,15,45,10,20,40,50,5,12,18,25,35,48,2,null,11,14,16,19,22,28,33,38,47,52,null,8,null,null,null,13,null,17,null,null,21,23,null,27,null,null,32,36,null,null,41,null,46,51,55,null,null,null,53,54,null,56], 12), 56, 'Test 73');
test(kthSmallest([9,5,13,2,7,11,15,1,3,6,8,10,12,14,16], 12), 13, 'Test 74');
test(kthSmallest([6,2,8,0,4,7,9,null,null,3,5], 5), 5, 'Test 75');
test(kthSmallest([100,75,125,50,85,110,140,30,60,80,90,105,120,135,150], 28), null, 'Test 76');
test(kthSmallest([10,5,15,2,7,null,20,1,null,6], 4), 6, 'Test 77');
test(kthSmallest([10,5,15,2,7,null,20,null,null,6,8], 4), 7, 'Test 78');

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
