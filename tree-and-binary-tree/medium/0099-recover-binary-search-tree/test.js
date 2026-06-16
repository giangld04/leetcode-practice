// Test: 99. Recover Binary Search Tree
// 102 test cases from LeetCodeDataset
// Run: node test.js

const { recoverTree } = require("./solution");

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

console.log("\n99. Recover Binary Search Tree\n");

test(recoverTree([2,3,1]), null, 'Test 1');
test(recoverTree([3,1,4,null,null,2]), null, 'Test 2');
test(recoverTree([5,1,4,null,null,3,6]), null, 'Test 3');
test(recoverTree([1,3,null,null,2]), null, 'Test 4');
test(recoverTree([3,2,1]), null, 'Test 5');
test(recoverTree([5,3,9,-20,10]), null, 'Test 6');
test(recoverTree([10,5,15,null,null,6,20]), null, 'Test 7');
test(recoverTree([7,3,15,1,5,9,20]), Error: 'nullType' object has no attribute 'val', 'Test 8');
test(recoverTree([5,3,8,1,4,7,10,0,null,null,null,null,null,null,12]), Error: 'nullType' object has no attribute 'val', 'Test 9');
test(recoverTree([10,9,8,7,6,5,4,3,2,1]), null, 'Test 10');
test(recoverTree([30,15,70,10,20,60,90,5,12,18,25,55,65,85,95]), Error: 'nullType' object has no attribute 'val', 'Test 11');
test(recoverTree([7,3,10,null,null,8,12,1,null,null,9,11,13]), null, 'Test 12');
test(recoverTree([15,10,20,8,12,16,25,5,9,11,13,null,17,22,27]), Error: 'nullType' object has no attribute 'val', 'Test 13');
test(recoverTree([15,5,25,3,10,18,30,1,4,8,12,16,22,28,35]), Error: 'nullType' object has no attribute 'val', 'Test 14');
test(recoverTree([15,10,20,8,12,16,25,null,null,null,null,null,null,18,22]), null, 'Test 15');
test(recoverTree([9,3,15,1,5,13,20,0,2,4,6,12,14,18,25]), Error: 'nullType' object has no attribute 'val', 'Test 16');
test(recoverTree([50,25,75,10,35,60,80,5,15,27,40,55,70,77,85]), Error: 'nullType' object has no attribute 'val', 'Test 17');
test(recoverTree([7,3,15,null,4,10,18,2,5,9,12,8,16,14,19]), null, 'Test 18');
test(recoverTree([12,5,18,2,8,15,25,1,3,7,10,13,17,22,27,null,null,null,null,6,9,null,null,null,null,14,null,11,16,19,21,24,23,26,28,29,30]), null, 'Test 19');
test(recoverTree([30,15,45,5,20,35,50,1,7,10,25,33,40,48,60]), null, 'Test 20');
test(recoverTree([7,3,10,1,5,8,12,null,null,4,null,9,11,13,14]), null, 'Test 21');
test(recoverTree([15,10,20,5,12,18,25,3,7,null,14,null,null,16,null,null,null,null,null]), null, 'Test 22');
test(recoverTree([8,4,12,2,6,10,14,1,3,5,7,9,11,13,15]), Error: 'nullType' object has no attribute 'val', 'Test 23');
test(recoverTree([25,15,35,10,20,30,40,5,12,18,22,28,32,38,45]), Error: 'nullType' object has no attribute 'val', 'Test 24');
test(recoverTree([60,30,80,20,40,70,90,10,25,35,50,65,75,85,95,5,15,22,28,32,45,48,63,73,82,88,93,98,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]), null, 'Test 25');
test(recoverTree([7,3,9,1,5,8,10,0,2,4,6,null,null,null,null,null,11]), null, 'Test 26');
test(recoverTree([12,8,15,6,10,13,18,3,7,9,11,12,14,16,19]), Error: 'nullType' object has no attribute 'val', 'Test 27');
test(recoverTree([5,2,6,1,4,3,8,null,null,null,null,7,9]), null, 'Test 28');
test(recoverTree([8,5,10,2,7,9,11,1,3,6,null,null,null,null,null,4]), null, 'Test 29');
test(recoverTree([8,3,10,1,5,9,12,null,2,4,7,11,13]), null, 'Test 30');
test(recoverTree([5,2,8,1,4,null,10,null,null,3,6]), null, 'Test 31');
test(recoverTree([15,10,20,5,12,16,25,3,7,11,13,14,17,22,30]), null, 'Test 32');
test(recoverTree([12,9,15,5,11,13,18,3,6,8,10,14,16,17,19]), null, 'Test 33');
test(recoverTree([20,15,30,10,18,25,35,5,11,16,19,null,null,14]), null, 'Test 34');
test(recoverTree([20,15,30,10,25,28,40,5,12,18,27,35,38,45,50]), null, 'Test 35');
test(recoverTree([10,15,8,null,null,12,20]), null, 'Test 36');
test(recoverTree([25,15,35,10,20,30,40,null,12,18,22,28,32,38,45,11,13,16,19,21,23,27,29,31,33,37,39,43,47]), Error: 'nullType' object has no attribute 'val', 'Test 37');
test(recoverTree([25,15,35,10,20,30,40,5,12,17,22,28,33,37,45]), Error: 'nullType' object has no attribute 'val', 'Test 38');
test(recoverTree([9,4,20,null,null,15,60,null,null,10,25,null,null,7,12,null,30]), null, 'Test 39');
test(recoverTree([50,30,70,20,40,60,80,10,25,35,45,55,65,75,85,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]), Error: 'nullType' object has no attribute 'val', 'Test 40');
test(recoverTree([25,15,35,10,20,30,40,5,12,18,22,28,33,38,45]), Error: 'nullType' object has no attribute 'val', 'Test 41');
test(recoverTree([8,3,12,1,5,10,15,null,2,4,6,9,11,13,17]), Error: 'nullType' object has no attribute 'val', 'Test 42');
test(recoverTree([25,15,35,10,20,30,40,5,12,18,22,28,32,38,45,null,null,2,8,14,16,21,24,27,31,34,37,42,48,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]), null, 'Test 43');
test(recoverTree([20,10,30,5,15,25,35,3,7,12,18,23,28,33,38]), Error: 'nullType' object has no attribute 'val', 'Test 44');
test(recoverTree([250,125,375,62,187,312,437,31,93,156,221,278,363,412,492,null,null,15,46,78,138,171,206,254,341,400,458,518,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]), null, 'Test 45');
test(recoverTree([30,15,45,10,20,40,50,null,null,18,25,35,48,null,null,null,null,22,null,null,null,null]), null, 'Test 46');
test(recoverTree([30,15,45,10,20,40,50,5,12,17,23,35,48,1,8,11,13,16,18,21,22,27,33,42,47,53,null,4,null,null,6,9,null,null,14,null,7,10,null,null,null,null,19,null,24,null,26,28,29,null,31,34,null,null,38,null,41,43,null,46,null,49,null,51,52,null,54,null,55]), null, 'Test 47');
test(recoverTree([60,30,90,20,40,70,100,10,25,35,45,65,85,95,110]), Error: 'nullType' object has no attribute 'val', 'Test 48');
test(recoverTree([60,30,90,20,40,70,100,10,25,35,45,65,75,85,105]), null, 'Test 49');
test(recoverTree([5,10,15,3,null,null,20,null,null,null,25]), null, 'Test 50');
test(recoverTree([5,3,7,2,4,6,8,1,null,null,null,null,5.5]), null, 'Test 51');
test(recoverTree([8,3,10,1,5,9,12,null,2,4,6,7,11,13,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]), null, 'Test 52');
test(recoverTree([100,50,150,25,75,125,200,10,30,60,80,110,140,190,220]), Error: 'nullType' object has no attribute 'val', 'Test 53');
test(recoverTree([100,50,150,25,75,125,175,10,40,60,80,110,140,160,180,5,15,28,45,65,75,105,135,155,170,190,null,null,null,null,20,35,null,53,null,null,null,null,null,54,null,78,null,null,null,null,null,115,null,null,null,null,null,null,null,null,null,null,null,null,null,null]), null, 'Test 54');
test(recoverTree([100,50,150,25,75,125,175,10,35,60,85,115,145,160,190]), Error: 'nullType' object has no attribute 'val', 'Test 55');
test(recoverTree([30,20,50,10,25,40,60,null,null,15,27,35,55,45,65]), null, 'Test 56');
test(recoverTree([7,3,10,1,5,8,12,null,2,null,4,6,9,11,13]), null, 'Test 57');
test(recoverTree([9,7,10,6,8,11,12,5,null,null,null,13,14]), null, 'Test 58');
test(recoverTree([15,10,20,7,12,16,25,2,6,11,14,13,17,21,30]), null, 'Test 59');
test(recoverTree([20,15,25,10,18,22,30,5,12,null,17,21,27,26,35]), null, 'Test 60');
test(recoverTree([21,14,28,10,18,24,32,7,12,16,19,22,26,30,35]), Error: 'nullType' object has no attribute 'val', 'Test 61');
test(recoverTree([30,15,45,10,20,40,50,5,12,17,22,35,42,47,55]), Error: 'nullType' object has no attribute 'val', 'Test 62');
test(recoverTree([12,9,15,6,10,13,18,2,7,8,11,14,16,17,20]), null, 'Test 63');
test(recoverTree([4,2,5,1,3,6,7,0,null,null,null,null,null,null,8]), null, 'Test 64');
test(recoverTree([15,10,20,null,12,null,25,11,13]), Error: 'nullType' object has no attribute 'val', 'Test 65');
test(recoverTree([100,50,150,25,75,125,175,10,30,60,80,110,140,160,190,5,15,27,33,55,65,77,85,105,115,135,145,155,165,185,195]), Error: 'nullType' object has no attribute 'val', 'Test 66');
test(recoverTree([40,20,60,10,30,50,70,5,15,25,35,45,55,65,75]), Error: 'nullType' object has no attribute 'val', 'Test 67');
test(recoverTree([15,10,20,null,null,6,25,4,null,11,17]), null, 'Test 68');
test(recoverTree([60,30,80,10,40,70,90,5,25,35,55,65,85,95,null,1,null,15,28,40,53,63,75,88,93,100,null,null,11,null,26,null,36,45,54,64,76,89,null,null,null,null,null,101]), null, 'Test 69');
test(recoverTree([8,5,10,2,7,null,15,1,null,6,9,12,18,null,null,null,null,null,null,null,null]), null, 'Test 70');
test(recoverTree([100,50,150,25,75,125,200,10,30,60,80,110,140,180,220,null,12,28,null,55,85,105,135,165,195,210,225,null,null,null,null,null,null,null,null,null,null,null,null,null,null,17,null,null,100]), null, 'Test 71');
test(recoverTree([7,3,15,null,null,9,20,8,11]), Error: 'nullType' object has no attribute 'val', 'Test 72');
test(recoverTree([100,50,150,25,75,125,175,10,35,60,90,110,140,160,180,5,15,28,40,65,85,105,135,155,170,190]), null, 'Test 73');
test(recoverTree([30,15,45,10,20,40,50,5,12,17,25,35,48,3,8,14,19,24,31,47,49,null,null,null,null,null,null,null,null,9,null,null,16,null,null,null,null,23,null,null,null,null,32,null,null,null,null,46,null,null,null,null,null,null]), null, 'Test 74');
test(recoverTree([9,5,12,3,7,10,15,2,4,6,8,11,13,14,17]), null, 'Test 75');
test(recoverTree([18,9,27,6,12,21,36,3,7,10,15,19,24,33,45,null,null,null,null,null,null,null,null,null,null,null,null,null,null]), Error: 'nullType' object has no attribute 'val', 'Test 76');
test(recoverTree([30,20,40,10,25,35,50,5,15,null,null,22,null,27,33,null,45,48,55]), null, 'Test 77');
test(recoverTree([20,10,30,5,15,25,35,2,7,12,18,23,27,32,38]), Error: 'nullType' object has no attribute 'val', 'Test 78');
test(recoverTree([7,3,15,null,null,9,20,null,null,8,16]), null, 'Test 79');
test(recoverTree([5,3,8,2,4,6,9,1,null,null,null,null,null,7,10]), null, 'Test 80');
test(recoverTree([30,15,45,10,20,40,50,5,12,18,25,35,42,48,55]), Error: 'nullType' object has no attribute 'val', 'Test 81');
test(recoverTree([8,5,12,3,7,10,15,2,4,6,9,11,13,14,16]), null, 'Test 82');
test(recoverTree([20,15,25,10,18,22,30,5,12,16,19,21,24,28,32,3,7,11,13,17,23,27,31]), null, 'Test 83');
test(recoverTree([9,5,12,3,7,11,14,2,4,6,8,10,13,null,null,null,null,null,null,1]), null, 'Test 84');
test(recoverTree([22,10,30,5,15,25,40,2,7,13,18,21,35,38,45,1,3,6,8,11,14,17,20,24,28,33,36,43,41,44,47,48,4,9,12,16,19,23,27,29,32,34,37,42,46,49,50,51]), null, 'Test 85');
test(recoverTree([50,30,70,20,40,60,80,10,25,35,45,55,65,75,85]), Error: 'nullType' object has no attribute 'val', 'Test 86');
test(recoverTree([1,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]), null, 'Test 87');
test(recoverTree([90,60,120,30,70,100,150,10,50,65,80,95,110,140,160,5,25,45,55,75,85,92,105,125,135,155,170,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]), null, 'Test 88');
test(recoverTree([20,10,30,5,15,25,35,1,8,12,18,22,28,32,38,null,null,4,null,6,null,null,null,9,null,null,11,null,null,14,null,null,16,null,null,19,null,null,23,null,null,27,null,null,31,null,null,34,null,null,37,null,null,null,null,null,null,null,null,null,null,null]), null, 'Test 89');
test(recoverTree([15,10,20,null,12,17,25,8,null,null,13,null,19,16,23]), null, 'Test 90');
test(recoverTree([7,3,9,1,5,8,10,null,2,4,6,null,null,null,null,null,null]), Error: 'nullType' object has no attribute 'val', 'Test 91');
test(recoverTree([100,50,150,25,75,125,175,10,40,60,90,110,140,160,190,null,null,5,15,30,45,65,85,95,105,120,130,145,155,170,185,195,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]), null, 'Test 92');
test(recoverTree([9,5,15,2,7,12,20,1,3,6,8,11,13,18,25]), Error: 'nullType' object has no attribute 'val', 'Test 93');
test(recoverTree([100,50,150,25,75,125,175,10,30,60,80,110,140,160,180]), Error: 'nullType' object has no attribute 'val', 'Test 94');
test(recoverTree([8,3,10,1,5,9,12,null,2,4,7,11,13,null,null,null,null,null,null,null,null,null,null,null]), null, 'Test 95');
test(recoverTree([25,15,35,10,20,30,40,5,12,17,23,28,33,38,45]), Error: 'nullType' object has no attribute 'val', 'Test 96');
test(recoverTree([35,20,55,10,30,50,60,null,null,25,34,45,56,null,null,27,32,null,33,40,47,null,null,null,null,null,null,null,null,null]), null, 'Test 97');
test(recoverTree([15,10,20,5,12,18,25,3,7,11,13,17,19,23,27]), Error: 'nullType' object has no attribute 'val', 'Test 98');
test(recoverTree([200,100,300,50,150,250,350,25,75,125,175,225,275,325,375,null,null,10,40,60,90,110,140,160,190,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]), null, 'Test 99');
test(recoverTree([5,3,6,2,4,null,null,1]), Error: 'nullType' object has no attribute 'val', 'Test 100');
test(recoverTree([7,6,8,null,null,7,9]), Error: 'nullType' object has no attribute 'val', 'Test 101');
test(recoverTree([50,30,70,20,40,60,80,null,25,35,55,65,75,90]), null, 'Test 102');

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
