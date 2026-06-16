// Test: 698. Partition To K Equal Sum Subsets
// 87 test cases from LeetCodeDataset
// Run: node test.js

const { canPartitionKSubsets } = require("./solution");

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

console.log("\n698. Partition To K Equal Sum Subsets\n");

test(canPartitionKSubsets([2,2,2,2,3,4,5], 4), false, 'Test 1');
test(canPartitionKSubsets([4,4,6,2,3,8,10,2,10,7], 4), true, 'Test 2');
test(canPartitionKSubsets([1,1,1,1,1,1,1,1], 2), true, 'Test 3');
test(canPartitionKSubsets([1,2,3,4], 3), false, 'Test 4');
test(canPartitionKSubsets([1,1,1,1,1,1,1,1], 8), true, 'Test 5');
test(canPartitionKSubsets([1,2,3,4,5,6,7,8], 4), true, 'Test 6');
test(canPartitionKSubsets([10,10,10,10,10,10,10,10], 4), true, 'Test 7');
test(canPartitionKSubsets([4,3,2,3,5,2,1], 4), true, 'Test 8');
test(canPartitionKSubsets([10,10,10,10,10,10,10,10], 8), true, 'Test 9');
test(canPartitionKSubsets([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 16), true, 'Test 10');
test(canPartitionKSubsets([100,200,300,400,500,600,700,800,900,1000,1100,1200,1300,1400,1500,1600], 8), true, 'Test 11');
test(canPartitionKSubsets([9,4,4,9,2,4,5,4,5,3,2,9,10,7,4,7], 8), false, 'Test 12');
test(canPartitionKSubsets([4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,16], 4), false, 'Test 13');
test(canPartitionKSubsets([2,2,2,2,3,4,5,5,5,5,6,6,6,6,7,7], 7), false, 'Test 14');
test(canPartitionKSubsets([12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27], 6), false, 'Test 15');
test(canPartitionKSubsets([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3], 16), true, 'Test 16');
test(canPartitionKSubsets([9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9], 6), false, 'Test 17');
test(canPartitionKSubsets([3,5,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 5), false, 'Test 18');
test(canPartitionKSubsets([15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0], 5), true, 'Test 19');
test(canPartitionKSubsets([33,33,33,33,33,33,33,33,33,33,33,33,33,33,33,33], 12), false, 'Test 20');
test(canPartitionKSubsets([16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16], 8), true, 'Test 21');
test(canPartitionKSubsets([1,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9], 8), false, 'Test 22');
test(canPartitionKSubsets([8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8], 12), false, 'Test 23');
test(canPartitionKSubsets([8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8], 16), true, 'Test 24');
test(canPartitionKSubsets([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], 16), false, 'Test 25');
test(canPartitionKSubsets([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], 2), true, 'Test 26');
test(canPartitionKSubsets([15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15], 12), false, 'Test 27');
test(canPartitionKSubsets([8,16,32,64,128,256,512,1024,1,2,3,4,5,6,7,8], 8), false, 'Test 28');
test(canPartitionKSubsets([7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7], 16), true, 'Test 29');
test(canPartitionKSubsets([6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6], 12), false, 'Test 30');
test(canPartitionKSubsets([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1], 8), false, 'Test 31');
test(canPartitionKSubsets([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], 1), true, 'Test 32');
test(canPartitionKSubsets([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160], 8), true, 'Test 33');
test(canPartitionKSubsets([10,10,20,20,30,30,40,40,50,50,60,60,70,70,80,80], 8), true, 'Test 34');
test(canPartitionKSubsets([1,2,2,3,3,3,4,4,4,4,5,5,5,5,5,6], 6), false, 'Test 35');
test(canPartitionKSubsets([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8], 8), true, 'Test 36');
test(canPartitionKSubsets([9,8,7,6,5,4,3,2,1,9,8,7,6,5,4,3], 8), false, 'Test 37');
test(canPartitionKSubsets([9,18,27,36,45,54,63,72,81,90,99,108,117,126,135,144], 9), false, 'Test 38');
test(canPartitionKSubsets([10000,10000,10000,10000,10000,10000,10000,10000], 8), true, 'Test 39');
test(canPartitionKSubsets([3,5,3,5,3,5,3,5,3,5,3,5,3,5,3,5], 8), true, 'Test 40');
test(canPartitionKSubsets([16,16,16,16,4,4,4,4,4,4,4,4,4,4,4,4], 8), false, 'Test 41');
test(canPartitionKSubsets([7,2,1,6,3,4,3,3,1,2,1,2,2,2,3,3], 6), false, 'Test 42');
test(canPartitionKSubsets([9,4,5,9,8,4,5,10,3,4,6,7,1,2,8], 3), false, 'Test 43');
test(canPartitionKSubsets([9,3,9,3,9,3,9,3,9,3,9,3,9,3,9,3], 8), true, 'Test 44');
test(canPartitionKSubsets([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 15), false, 'Test 45');
test(canPartitionKSubsets([16,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8], 16), false, 'Test 46');
test(canPartitionKSubsets([100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100], 8), true, 'Test 47');
test(canPartitionKSubsets([1,2,3,6,9,12,18,27,54,81,162,324,648,1296,2592,5184], 6), false, 'Test 48');
test(canPartitionKSubsets([15,15,15,15,10,10,10,10,5,5,5,5,1,1,1,1], 6), false, 'Test 49');
test(canPartitionKSubsets([1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2], 16), false, 'Test 50');
test(canPartitionKSubsets([100,200,300,400,500,600,700,800,900,1000,1100,1200,1300,1400,1500,1600], 4), true, 'Test 51');
test(canPartitionKSubsets([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], 8), true, 'Test 52');
test(canPartitionKSubsets([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32], 16), true, 'Test 53');
test(canPartitionKSubsets([2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2], 16), true, 'Test 54');
test(canPartitionKSubsets([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3], 15), false, 'Test 55');
test(canPartitionKSubsets([7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7], 7), false, 'Test 56');
test(canPartitionKSubsets([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 2), true, 'Test 57');
test(canPartitionKSubsets([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], 4), true, 'Test 58');
test(canPartitionKSubsets([4,1,5,3,2,7,6,9,8,11,10,13,12,15,14,16], 8), true, 'Test 59');
test(canPartitionKSubsets([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3], 4), true, 'Test 60');
test(canPartitionKSubsets([2,2,2,2,3,4,5,5,5,5,5,5,5,5,5,5], 5), false, 'Test 61');
test(canPartitionKSubsets([3,6,9,12,15,18,21,24,27,30,33,36,39,42,45,48], 16), false, 'Test 62');
test(canPartitionKSubsets([15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], 6), false, 'Test 63');
test(canPartitionKSubsets([1,2,3,6,9,12,15,18,21,24,27,30,33,36,39,42], 8), false, 'Test 64');
test(canPartitionKSubsets([15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15], 15), false, 'Test 65');
test(canPartitionKSubsets([7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7], 8), true, 'Test 66');
test(canPartitionKSubsets([15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15], 16), true, 'Test 67');
test(canPartitionKSubsets([7,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36], 16), false, 'Test 68');
test(canPartitionKSubsets([10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000], 8), true, 'Test 69');
test(canPartitionKSubsets([9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9], 9), false, 'Test 70');
test(canPartitionKSubsets([16,8,4,2,1,1,1,1,1,1,1,1,1,1,1,1], 10), false, 'Test 71');
test(canPartitionKSubsets([20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5], 8), true, 'Test 72');
test(canPartitionKSubsets([2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2], 8), true, 'Test 73');
test(canPartitionKSubsets([1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4], 4), true, 'Test 74');
test(canPartitionKSubsets([8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8], 8), true, 'Test 75');
test(canPartitionKSubsets([8,16,24,32,40,48,56,64,72,80,88,96,104,112,120,128], 16), false, 'Test 76');
test(canPartitionKSubsets([5,5,10,10,15,15,20,20,25,25,30,30,35,35,40,40], 8), true, 'Test 77');
test(canPartitionKSubsets([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160], 16), false, 'Test 78');
test(canPartitionKSubsets([2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5], 16), false, 'Test 79');
test(canPartitionKSubsets([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160], 4), true, 'Test 80');
test(canPartitionKSubsets([100,200,300,400,500,600,700,800,900,1000,1100,1200,1300,1400,1500,1600], 16), false, 'Test 81');
test(canPartitionKSubsets([7,8,9,10,11,12,13,14,15,16,1,2,3,4,5,6], 3), false, 'Test 82');
test(canPartitionKSubsets([12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12], 6), false, 'Test 83');
test(canPartitionKSubsets([1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9], 6), false, 'Test 84');
test(canPartitionKSubsets([3,1,2,2,3,3,2,2,1,3,3,3,2,1,2,2], 6), false, 'Test 85');
test(canPartitionKSubsets([3,5,1,1,3,2,2,3,1,1,1,1,1,1,1,1], 5), false, 'Test 86');
test(canPartitionKSubsets([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 10), false, 'Test 87');

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
