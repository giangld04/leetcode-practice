// Test: 437. Path Sum Iii
// 68 test cases from LeetCodeDataset
// Run: node test.js

const { pathSum } = require("./solution");

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

console.log("\n437. Path Sum Iii\n");

test(pathSum([], 0), 0, 'Test 1');
test(pathSum([1,null,2,null,3,null,4,null,5], 3), 2, 'Test 2');
test(pathSum([10,5,-3,3,2,null,11,3,-2,null,1], 8), 3, 'Test 3');
test(pathSum([5,4,8,11,null,13,4,7,2,null,null,5,1], 22), 3, 'Test 4');
test(pathSum([1,-2,-3], -2), 2, 'Test 5');
test(pathSum([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 2), 47, 'Test 6');
test(pathSum([5,4,8,11,null,13,4,7,2,null,null,5,1,-1,-2], 22), 3, 'Test 7');
test(pathSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 33), 0, 'Test 8');
test(pathSum([1000,500,-300,300,200,null,1100,300,-200,null,1000,null,null,null,null], 800), 2, 'Test 9');
test(pathSum([10,5,-3,3,2,null,11,3,-2,null,1,1,null,-1,null,-1,2], 8), 4, 'Test 10');
test(pathSum([10,5,-3,3,2,null,11,3,-2,null,1,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31], 45), 1, 'Test 11');
test(pathSum([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14], 10), 2, 'Test 12');
test(pathSum([5,4,8,11,null,13,4,7,2,null,null,5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 22), 3, 'Test 13');
test(pathSum([100,-100,-100,-100,-100,-100,-100,-100,null,null,null,-100,null,null,null,-100], -100), 13, 'Test 14');
test(pathSum([10,5,-3,3,2,null,11,3,-2,null,1,1,null,2,null,3,null,4,null,5], 8), 4, 'Test 15');
test(pathSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-25,-24,-23,-22,-21,-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1], 0), 1, 'Test 16');
test(pathSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 38), 0, 'Test 17');
test(pathSum([10,5,15,3,7,null,18], 8), 1, 'Test 18');
test(pathSum([5,4,8,11,null,13,4,7,2,null,null,5,1,null,null,2,null,null,null,null,3], 22), 3, 'Test 19');
test(pathSum([10,-2,3,4,-5,6,-7,8,9,-10,11,-12,13,-14,15], 7), 1, 'Test 20');
test(pathSum([10,5,5,3,3,3,3,null,null,1,1,1,1,null,null,null,null,2,2,2,2,2,2,2,2], 8), 6, 'Test 21');
test(pathSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25], 10), 3, 'Test 22');
test(pathSum([0,0,0,0,0,null,null,0,0,0,null,0,0,null,0,null,0,null,0,0,0,null,0,0,null,0,0,null,0,null,0,null,0,0,0,null,0,0,null,0,null,0,null,0,0,0,null,0], 0), 186, 'Test 23');
test(pathSum([100,50,-50,25,25,-25,-25,12,null,null,3,null,null,null,null,-3,null,null,-3], 25), 5, 'Test 24');
test(pathSum([100,-100,0,50,-50,25,-25,null,null,null,null,10,-10,5,-5], 0), 2, 'Test 25');
test(pathSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15], 5), 3, 'Test 26');
test(pathSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 45), 0, 'Test 27');
test(pathSum([10,5,-3,3,2,null,11,3,-2,null,1,0,1,null,-1], 8), 4, 'Test 28');
test(pathSum([0,0,0,0,0,0,0,0,0], 0), 25, 'Test 29');
test(pathSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 28), 0, 'Test 30');
test(pathSum([10,-1,3,5,-2,2,-3,null,null,null,null,1,-1,null,-1,null,null,null,null,null,null,-1,null,-1,null,null,null,null,null,-1], 5), 2, 'Test 31');
test(pathSum([-2,null,-3,null,-4,null,-5,null,-6], -6), 1, 'Test 32');
test(pathSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25], 15), 4, 'Test 33');
test(pathSum([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 0), 124, 'Test 34');
test(pathSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 35), 2, 'Test 35');
test(pathSum([1,-2,-3,1,3,-2,null,-1,null,-3,null,null,null,null,null], -2), 5, 'Test 36');
test(pathSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 15), 4, 'Test 37');
test(pathSum([100,50,-30,30,20,null,110,30,-20,null,1,null,null,null,null], 80), 2, 'Test 38');
test(pathSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], 15), 4, 'Test 39');
test(pathSum([100,200,300,400,500,null,600,null,null,null,null,null,700], 1000), 1, 'Test 40');
test(pathSum([5,4,8,11,null,13,4,7,2,null,null,5,1,null,null,null,null,2,null,null,3], 22), 3, 'Test 41');
test(pathSum([10,5,-3,3,2,null,11,3,-2,null,1,1,1,1,1,null,null,null,null,null,null,null,null,null], 8), 3, 'Test 42');
test(pathSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 15), 4, 'Test 43');
test(pathSum([-1,null,-2,null,-3,null,-4,-5,null], -6), 1, 'Test 44');
test(pathSum([1,-2,-3,1,3,-2,null,-1], 3), 1, 'Test 45');
test(pathSum([10,5,10,3,3,2,1,null,null,3,-2,null,1,null,-1,2,null,1,null,null,null,null,1], 8), 3, 'Test 46');
test(pathSum([100,50,200,25,75,150,300,10,40,60,90,125,175,250,350,5,15,35,45,55,85,105,115,145,165,185,225,275,295,315,335], 100), 3, 'Test 47');
test(pathSum([1,-2,-3,1,3,-2,null,-1], -1), 4, 'Test 48');
test(pathSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25], 46), 2, 'Test 49');
test(pathSum([5,-10,15,20,-20,25,-25,null,30,35,null,40,45,null,null,null,null,null,50,55], 10), 2, 'Test 50');
test(pathSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51], 55), 2, 'Test 51');
test(pathSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 22), 3, 'Test 52');
test(pathSum([5,4,8,11,null,13,4,7,2,null,null,5,1,-1,-2,null,null,2,1], 22), 3, 'Test 53');
test(pathSum([0,1,1,1,null,null,1,1,null,null,null,null,1,null,1,null,1], 2), 8, 'Test 54');
test(pathSum([0,1,1,1,null,null,1,null,null,null,1,null,null,null,1], 2), 5, 'Test 55');
test(pathSum([5,4,8,11,null,13,4,7,2,null,null,5,1,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3], 22), 10, 'Test 56');
test(pathSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 38), 1, 'Test 57');
test(pathSum([1,-2,-3,1,3,-2,null,-1,null,-1,0,null,-3,null,null,null,-2,null,1], 3), 3, 'Test 58');
test(pathSum([1,-2,3,4,-5,6,-7,8,9,-10,11,-12,13,-14,15,-16,17,-18,19,-20,21,-22,23,-24,25], 10), 2, 'Test 59');
test(pathSum([10,5,-3,3,2,null,11,3,-2,null,1,1,null,2,null,1,null,null,null,null,1,1,null,2,null,1,null,null,null,null,1], 6), 3, 'Test 60');
test(pathSum([-10,-3,-5,-8,-9,-1,-2,-12,null,-4,null,null,null,-6,-7], -8), 2, 'Test 61');
test(pathSum([10,5,-3,3,2,null,11,3,-2,null,1,1,null,2,null,1,null,null,null,null,1], 8), 4, 'Test 62');
test(pathSum([10,5,5,3,2,2,1,3,-2,null,1,null,-1,0,null,null,null,null,null,null,0,null,null,null,null,null,null,0,null], 8), 3, 'Test 63');
test(pathSum([-10,-5,-3,-3,-2,-11,-3,-3,-2,-1,null,null,-1,null,null,-1,null,null,-1,null,null,-1,null,null,-1,null,null,-1,null,null,-1,null,null,-1,null,null,-1,null,null,-1,null,null,-1], -8), 4, 'Test 64');
test(pathSum([0,1,1,2,2,2,2,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4], 6), 16, 'Test 65');
test(pathSum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 23), 1, 'Test 66');
test(pathSum([10,15,3,7,20,-15,null,-20,-10,null,10,null,null,null,5], 10), 2, 'Test 67');
test(pathSum([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 10), 14, 'Test 68');

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
