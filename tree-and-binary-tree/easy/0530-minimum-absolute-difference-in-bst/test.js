// Test: 530. Minimum Absolute Difference In Bst
// 87 test cases from LeetCodeDataset
// Run: node test.js

const { getMinimumDifference } = require("./solution");

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

console.log("\n530. Minimum Absolute Difference In Bst\n");

test(getMinimumDifference([4,2,6,1,3]), 1, 'Test 1');
test(getMinimumDifference([1,30,null,10,null,null,15,null,18]), -29, 'Test 2');
test(getMinimumDifference([1,null,2,null,3,null,4,null,5]), 1, 'Test 3');
test(getMinimumDifference([236,104,701,null,227,null,911]), 9, 'Test 4');
test(getMinimumDifference([5,4,7]), 1, 'Test 5');
test(getMinimumDifference([1,0,48,null,null,12,49]), 1, 'Test 6');
test(getMinimumDifference([5,3,7,2,4,6,8]), 1, 'Test 7');
test(getMinimumDifference([50,25,75,15,35,65,85,10,20,30,40,60,70,80,90]), 5, 'Test 8');
test(getMinimumDifference([100,50,150,25,75,125,175,10,40,60,80,110,140,160,190]), 5, 'Test 9');
test(getMinimumDifference([10,5,15,3,7,null,18,1,4,6,8]), 1, 'Test 10');
test(getMinimumDifference([10,5,15,3,7,null,18]), 2, 'Test 11');
test(getMinimumDifference([60,20,80,10,30,70,90,5,15,25,35,65,75,85,95,2,8,12,18,27,33,37,55,68,72,77,82,88,92,97,98]), -3, 'Test 12');
test(getMinimumDifference([10,9,20,null,null,15,21]), 1, 'Test 13');
test(getMinimumDifference([25,10,30,5,15,26,40,2,7,12,18,27,35,38,45]), -5, 'Test 14');
test(getMinimumDifference([30,15,45,10,20,40,50,5,12,17,22,35,43,48,55]), 2, 'Test 15');
test(getMinimumDifference([10,5,15,null,null,12,20,11,null,null,14]), -6, 'Test 16');
test(getMinimumDifference([100,50,150,25,75,125,175,10,30,60,90,110,140,160,190]), 5, 'Test 17');
test(getMinimumDifference([60,30,90,10,40,80,100,5,15,35,45,75,85,95,105]), 5, 'Test 18');
test(getMinimumDifference([10000,5000,15000,2500,7500,12500,17500,1250,3750,5875,8625,11250,15250,16750,18250]), -250, 'Test 19');
test(getMinimumDifference([8,4,12,2,6,10,14,1,3,5,7,9,11,13,15]), 1, 'Test 20');
test(getMinimumDifference([10,5,15,2,null,11,18,1,null,null,13]), 1, 'Test 21');
test(getMinimumDifference([999,499,1499,249,749,1249,1749,125,375,587,862,1124,1524,1674,1824]), -25, 'Test 22');
test(getMinimumDifference([150,75,225,37,112,188,263,18,56,87,100,163,200,242,284]), -12, 'Test 23');
test(getMinimumDifference([20,10,30,5,15,25,35,2,7,12,17,22,27,32,37]), 2, 'Test 24');
test(getMinimumDifference([9,3,15,null,8,12,20,4,7,11,13,18,25]), -1, 'Test 25');
test(getMinimumDifference([7,3,15,null,null,9,20,null,null,null,17]), -3, 'Test 26');
test(getMinimumDifference([70,35,105,20,50,85,125,10,25,40,60,80,90,110,130]), 5, 'Test 27');
test(getMinimumDifference([20,15,30,10,18,25,35,5,12,16,19,23,27,32,38]), 1, 'Test 28');
test(getMinimumDifference([30,15,45,10,20,40,50,5,12,17,22,37,42,47,52]), 2, 'Test 29');
test(getMinimumDifference([20,10,30,5,15,25,35,2,7,12,18,23,28,33,38]), 2, 'Test 30');
test(getMinimumDifference([100,50,150,25,75,125,175,10,30,60,80,110,140,160,180,5,15,22,32,42,58,68,78,88,108,118,138,158,178,190]), -12, 'Test 31');
test(getMinimumDifference([90,45,135,20,60,110,160,10,30,50,70,100,120,140,170]), 5, 'Test 32');
test(getMinimumDifference([8,3,13,null,7,10,18,null,null,9,11,null,15,19,22]), -12, 'Test 33');
test(getMinimumDifference([8,3,13,null,7,10,17,null,null,9,12,14,16,18,20]), -10, 'Test 34');
test(getMinimumDifference([250,125,375,62,188,312,438,31,93,156,220,275,356,400,480]), 19, 'Test 35');
test(getMinimumDifference([20,10,30,5,15,25,35,3,7,12,18,23,28,33,37]), 2, 'Test 36');
test(getMinimumDifference([15,10,20,5,12,null,null,2,null,11,14]), 1, 'Test 37');
test(getMinimumDifference([30,10,50,5,20,40,60,1,null,15,25,35,45,55,65]), 4, 'Test 38');
test(getMinimumDifference([15,10,20,5,12,18,25,3,8,11,14,17,22,24,30]), -2, 'Test 39');
test(getMinimumDifference([50,25,75,15,35,65,85,5,20,30,40,60,70,80,90]), 5, 'Test 40');
test(getMinimumDifference([15,10,20,8,12,17,25,7,9,11,13,16,18,23,27,6,null,10,null,14,null,null,19,21,26,30,null,null,null,null,null,null,null,null,1]), -12, 'Test 41');
test(getMinimumDifference([30,15,45,10,20,40,50,5,12,18,25,35,43,55,60]), -5, 'Test 42');
test(getMinimumDifference([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), -10, 'Test 43');
test(getMinimumDifference([20,10,30,5,15,25,35,2,7,13,18,23,28,33,37]), 2, 'Test 44');
test(getMinimumDifference([2,null,3,null,4,null,5]), 1, 'Test 45');
test(getMinimumDifference([10,5,15,3,7,null,18,2,null,6,8,17,19]), 1, 'Test 46');
test(getMinimumDifference([25,15,35,10,20,30,40,5,12,17,22,27,32,37,42]), 2, 'Test 47');
test(getMinimumDifference([500,250,750,125,375,625,875,63,188,288,469,513,688,763,938,31,94,134,225,334,409,494,569,654,729,794,859,904,964,987]), -141, 'Test 48');
test(getMinimumDifference([50,25,75,10,35,60,85,5,15,30,40,55,65,80,90,3,7,12,18,28,32,45,52,63,68,77,82,88,93,2,4,6,8,11,13,14,17,19,27,29,31,33,39,43,48,51,54,57,62,67,70,76,79,81,83,87,89,92,95,97,1,9,16,20,23,26,34,36,38,41,42,44,46,47,49,50,53,56,58,59,61,64,66,69,71,72,73,74,75,78,80,84,86,91,94,96,98,99]), -95, 'Test 49');
test(getMinimumDifference([9,4,17,2,6,12,22,1,3,5,7,11,13,18,25]), 1, 'Test 50');
test(getMinimumDifference([50,25,75,10,30,60,80,5,15,27,35,55,65,77,85]), 2, 'Test 51');
test(getMinimumDifference([20,10,null,5,15,null,25,2,null,13,18,null,null,16,null]), -8, 'Test 52');
test(getMinimumDifference([20,10,30,5,15,25,35,3,7,13,17,23,27,33,37,1,4,6,8,12,14,16,18,22,24,26,28,32,34,36,38]), 1, 'Test 53');
test(getMinimumDifference([50,25,75,10,35,60,85,5,15,30,40,55,65,80,90]), 5, 'Test 54');
test(getMinimumDifference([50,25,75,12,37,63,87,6,18,30,45,58,60,72,90]), -3, 'Test 55');
test(getMinimumDifference([7,3,15,null,null,9,20,null,null,null,18]), -2, 'Test 56');
test(getMinimumDifference([500,250,750,125,375,625,875,62,188,312,438,563,712,813,938]), 38, 'Test 57');
test(getMinimumDifference([60,30,90,20,40,70,100,15,25,35,45,65,75,85,105]), -5, 'Test 58');
test(getMinimumDifference([99,98,102,97,null,101,103,96,null,null,null,null,null,null]), 1, 'Test 59');
test(getMinimumDifference([90,60,120,30,75,100,150,20,40,65,80,95,110,140,160]), 5, 'Test 60');
test(getMinimumDifference([40,20,60,10,30,50,70,5,15,25,35,45,55,65,75]), 5, 'Test 61');
test(getMinimumDifference([100,50,150,25,75,125,175,10,35,60,90,110,140,160,190]), 10, 'Test 62');
test(getMinimumDifference([60,30,90,20,40,70,100,15,25,35,45,65,75,85,95,10,18,23,32,43,58,63,72,78,83,92,98,110,120,130,140,150]), -140, 'Test 63');
test(getMinimumDifference([2,1,3,null,null,null,4,null,null,null,null,null,null,5]), 1, 'Test 64');
test(getMinimumDifference([10,5,15,null,null,12,20,null,null,null,null,13,18]), 2, 'Test 65');
test(getMinimumDifference([70,35,105,15,50,85,120,10,25,40,60,80,90,110,130]), 5, 'Test 66');
test(getMinimumDifference([20,10,30,5,15,25,35,3,7,13,17,23,27,33,37]), 2, 'Test 67');
test(getMinimumDifference([100,50,150,25,75,125,175,10,35,60,90,110,140,160,180]), 5, 'Test 68');
test(getMinimumDifference([7,3,15,null,4,9,20,null,null,null,null,18,22]), 1, 'Test 69');
test(getMinimumDifference([90,45,135,22,67,112,178,11,33,55,82,100,123,165,190]), 8, 'Test 70');
test(getMinimumDifference([75,50,100,25,62,87,125,10,38,56,65,82,93,112,138]), 3, 'Test 71');
test(getMinimumDifference([30,15,45,10,20,40,50,5,12,18,25,35,42,48,55]), 2, 'Test 72');
test(getMinimumDifference([8,3,13,1,null,7,15,0,2,6,9,14,17,null,null,null,null,null,null,null,null]), -2, 'Test 73');
test(getMinimumDifference([30,15,null,10,20,18,25]), -10, 'Test 74');
test(getMinimumDifference([75,40,100,30,55,85,110,20,35,50,60,80,90,105,115]), 5, 'Test 75');
test(getMinimumDifference([30,10,50,5,25,40,60,null,15,null,20,35,45,55,65]), -5, 'Test 76');
test(getMinimumDifference([2,1,null]), 1, 'Test 77');
test(getMinimumDifference([50,30,70,20,40,60,80,10,25,35,45,55,65,75,85]), 5, 'Test 78');
test(getMinimumDifference([20,10,30,5,15,25,35,2,7,12,17,22,28,33,40]), 2, 'Test 79');
test(getMinimumDifference([40,20,60,10,30,50,70,5,15,25,35,45,55,65,75,1,9,13,22,28,33,42,48,53,57,63,68,73,77,80,83,88,93,98,100]), -90, 'Test 80');
test(getMinimumDifference([1,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]), -1, 'Test 81');
test(getMinimumDifference([99,49,149,24,74,124,174,12,37,62,87,112,137,162,187,6,22,31,43,56,71,82,93,103,118,132,143,158,168,178,182,193]), -187, 'Test 82');
test(getMinimumDifference([50,25,75,15,35,60,85,10,20,30,40,55,65,80,90]), 5, 'Test 83');
test(getMinimumDifference([100,50,150,25,75,125,175,10,30,60,80,110,140,160,180]), 5, 'Test 84');
test(getMinimumDifference([30,20,40,10,null,35,45,5,null,null,38,null,47]), 2, 'Test 85');
test(getMinimumDifference([1000,500,1500,250,750,1250,1750,125,375,625,875,1125,1375,1625,1875,63,225,313,438,563,688,763,894,1063,1188,1313,1438,1563,1688,1813,1938]), 13, 'Test 86');
test(getMinimumDifference([30,15,45,10,20,40,50,5,12,17,25,35,47,49,55]), -2, 'Test 87');

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
