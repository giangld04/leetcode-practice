// Test: 1679. Max Number Of K Sum Pairs
// 68 test cases from LeetCodeDataset
// Run: node test.js

const { maxOperations } = require("./solution");

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

console.log("\n1679. Max Number Of K Sum Pairs\n");

test(maxOperations([3,1,3,4,3], 6), 1, 'Test 1');
test(maxOperations([1,1,1,1,1,1,1,1,1,1], 2), 5, 'Test 2');
test(maxOperations([1000000000], 1000000000), 0, 'Test 3');
test(maxOperations([1,5,4,2,9,6,5,3,4,7,8,10], 11), 5, 'Test 4');
test(maxOperations([1,3,5,7,9], 10), 2, 'Test 5');
test(maxOperations([5,5,5,5,5,5], 10), 3, 'Test 6');
test(maxOperations([1,5,7,8,2,6,3,4], 9), 4, 'Test 7');
test(maxOperations([1000000000,1,2,3,4,5,6,7,8,9,1000000000], 2000000000), 1, 'Test 8');
test(maxOperations([1,2,3,4,5,6,7,8,9,10], 11), 5, 'Test 9');
test(maxOperations([5,5,5,5,5], 10), 2, 'Test 10');
test(maxOperations([2,2,2,2,2,2,2,2,2,2], 4), 5, 'Test 11');
test(maxOperations([5,5,5,5,5,5,5,5], 10), 4, 'Test 12');
test(maxOperations([1,1,1,2,2,2,3,3,3], 3), 3, 'Test 13');
test(maxOperations([1,2,3,4], 5), 2, 'Test 14');
test(maxOperations([1,3,2,2,2,3,1], 4), 3, 'Test 15');
test(maxOperations([1,2,3,4,5,6,7,8,9], 10), 4, 'Test 16');
test(maxOperations([1, 3, 2, 2, 2, 3, 1], 4), 3, 'Test 17');
test(maxOperations([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25], 26), 12, 'Test 18');
test(maxOperations([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29], 30), 7, 'Test 19');
test(maxOperations([2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40], 42), 10, 'Test 20');
test(maxOperations([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14], 15), 14, 'Test 21');
test(maxOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 21), 20, 'Test 22');
test(maxOperations([1,3,3,5,7,7,5,9,9,11,11,13], 12), 5, 'Test 23');
test(maxOperations([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 21), 10, 'Test 24');
test(maxOperations([1,5,7,3,5,7,9,11,13,15], 12), 4, 'Test 25');
test(maxOperations([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 15), 7, 'Test 26');
test(maxOperations([1,3,2,2,2,2,2,3,1,3,3,2,2,2,3,2,2,1,3,2], 4), 8, 'Test 27');
test(maxOperations([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], 11), 10, 'Test 28');
test(maxOperations([1000000000, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1000000000], 1000000001), 1, 'Test 29');
test(maxOperations([7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97], 100), 5, 'Test 30');
test(maxOperations([1,5,7,1,5,7,1,5,7,1,5,7,1,5,7,1,5,7,1,5,7], 6), 7, 'Test 31');
test(maxOperations([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200], 300), 5, 'Test 32');
test(maxOperations([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15], 16), 15, 'Test 33');
test(maxOperations([1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5], 6), 25, 'Test 34');
test(maxOperations([999999999, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 1000000000), 1, 'Test 35');
test(maxOperations([1,5,7,1,5,9,5,5,5,5], 10), 4, 'Test 36');
test(maxOperations([5,1,4,8,6,9,7,2,3,10], 15), 3, 'Test 37');
test(maxOperations([5,15,25,35,45,55,65,75,85,95,105,115,125,135,145,155,165,175,185,195], 200), 10, 'Test 38');
test(maxOperations([1,1,2,2,2,3,3,3,4,4,4,4,5,5,5,5,5,6,6,6,6,6,7,7,7,7,7,8,8,8,8,8], 6), 6, 'Test 39');
test(maxOperations([10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], 20), 7, 'Test 40');
test(maxOperations([1000000000, 1000000000, 1, 1, 2, 2, 999999999, 999999999], 2000000000), 1, 'Test 41');
test(maxOperations([1,5,4,2,8,6,7,3,9], 10), 4, 'Test 42');
test(maxOperations([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200], 300), 11, 'Test 43');
test(maxOperations([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,300,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,300], 400), 21, 'Test 44');
test(maxOperations([1000000000, 1, 1000000000, 2, 3, 999999999, 3, 2], 2000000000), 1, 'Test 45');
test(maxOperations([2,5,4,4,1,3,4,4,1,4,4,1,2,1,2,2,3,2,4,2], 6), 8, 'Test 46');
test(maxOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 21), 10, 'Test 47');
test(maxOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 21), 30, 'Test 48');
test(maxOperations([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200], 300), 11, 'Test 49');
test(maxOperations([2, 4, 3, 5, 7, 8, 1, 9, 10, 6, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], 31), 15, 'Test 50');
test(maxOperations([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31], 32), 8, 'Test 51');
test(maxOperations([7,8,9,10,11,12,13,14,15,16,17,18,19,20], 27), 7, 'Test 52');
test(maxOperations([3,6,3,3,6,6,3,3,6,3,6,3,6,3,6,3,6,3,6,3,6,3,6,3,6,3,6,3,6,3,6], 9), 15, 'Test 53');
test(maxOperations([10, 15, 3, 7, 11, 15, 0, 7, 6, 10, 3, 11, 1], 15), 1, 'Test 54');
test(maxOperations([1,5,7,1,5,9,7,5,11,1], 10), 2, 'Test 55');
test(maxOperations([6,6,6,6,6,6,6,6,6,6,6,6,6,6,6], 12), 7, 'Test 56');
test(maxOperations([1000000000, 1, 999999999, 2, 999999998, 3, 999999997, 4], 1000000001), 4, 'Test 57');
test(maxOperations([1000000000,1000000000,1,1,2,2,3,3], 2000000000), 1, 'Test 58');
test(maxOperations([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 2), 16, 'Test 59');
test(maxOperations([10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1], 11), 10, 'Test 60');
test(maxOperations([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40], 41), 20, 'Test 61');
test(maxOperations([3,1,3,4,3,5,6,2,3,1], 6), 4, 'Test 62');
test(maxOperations([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49], 50), 12, 'Test 63');
test(maxOperations([1, 5, 7, -1, 5], 6), 2, 'Test 64');
test(maxOperations([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 16), 7, 'Test 65');
test(maxOperations([9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9], 18), 15, 'Test 66');
test(maxOperations([1,3,5,7,9,11,13,15,17,19], 20), 5, 'Test 67');
test(maxOperations([1000000000,1,2,3,4,5,1000000000,999999999,1], 2000000000), 1, 'Test 68');

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
