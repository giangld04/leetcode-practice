// Test: 134. Gas Station
// 96 test cases from LeetCodeDataset
// Run: node test.js

const { canCompleteCircuit } = require("./solution");

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

console.log("\n134. Gas Station\n");

test(canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2]), 3, 'Test 1');
test(canCompleteCircuit([1,1,1,1], [1,1,1,1]), 3, 'Test 2');
test(canCompleteCircuit([1,1,1,1,1], [1,1,1,1,1]), 4, 'Test 3');
test(canCompleteCircuit([5,1,2,3,4], [4,5,1,2,3]), 2, 'Test 4');
test(canCompleteCircuit([1,2,3,4,5], [5,4,3,2,1]), 3, 'Test 5');
test(canCompleteCircuit([2,3,4], [3,4,3]), -1, 'Test 6');
test(canCompleteCircuit([5,8,2,8], [6,5,6,6]), 3, 'Test 7');
test(canCompleteCircuit([0,0,0,0,0], [0,0,0,0,0]), 4, 'Test 8');
test(canCompleteCircuit([10,20,30,40,50], [15,25,35,45,55]), -1, 'Test 9');
test(canCompleteCircuit([3,1,1], [1,2,2]), 0, 'Test 10');
test(canCompleteCircuit([10,1,2,3,4], [3,4,5,1,2]), 4, 'Test 11');
test(canCompleteCircuit([3,3,4], [3,4,4]), -1, 'Test 12');
test(canCompleteCircuit([100,100,100,100,100,100,100,100,100,100], [101,99,101,99,101,99,101,99,101,99]), 9, 'Test 13');
test(canCompleteCircuit([100,50,20,5,10], [10,20,50,100,5]), 4, 'Test 14');
test(canCompleteCircuit([20,20,20,20,20,20,20,20,20,20], [19,19,19,19,19,19,19,19,19,20]), 9, 'Test 15');
test(canCompleteCircuit([10,10,10,10,10,10,10,10,10,10], [9,9,9,9,9,9,9,9,9,9]), 9, 'Test 16');
test(canCompleteCircuit([1,1,1,1,1,1,1,1,1,1], [2,2,2,2,2,2,2,2,2,1]), -1, 'Test 17');
test(canCompleteCircuit([1,2,3,4,5,6,7,8,9,10], [10,1,2,3,4,5,6,7,8,9]), 1, 'Test 18');
test(canCompleteCircuit([100,50,25,75,200,300], [200,150,200,20,100,50]), 3, 'Test 19');
test(canCompleteCircuit([50,60,70,80,90,100,110,120,130,140], [100,110,120,130,140,150,160,170,180,190]), -1, 'Test 20');
test(canCompleteCircuit([10,20,30,40,50], [50,10,20,30,40]), 1, 'Test 21');
test(canCompleteCircuit([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], [1,1,1,1,1,1,1,1,1,1,1,1,1,1,2]), -1, 'Test 22');
test(canCompleteCircuit([6,5,4,3,2,1], [1,2,3,4,5,6]), 0, 'Test 23');
test(canCompleteCircuit([10,30,20,10,5,40,10,30,20,10], [15,25,10,15,10,30,10,20,15,15]), 7, 'Test 24');
test(canCompleteCircuit([1,2,3,4,5,6,7,8,9,10], [1,2,3,4,5,6,7,8,10,1]), 9, 'Test 25');
test(canCompleteCircuit([5,8,2,8,4], [6,5,6,6,8]), -1, 'Test 26');
test(canCompleteCircuit([3,3,4,4,1,1,2,2], [3,3,3,3,2,2,2,2]), 7, 'Test 27');
test(canCompleteCircuit([1,10,10,10,1], [10,1,1,1,10]), 2, 'Test 28');
test(canCompleteCircuit([0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0]), 9, 'Test 29');
test(canCompleteCircuit([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 19, 'Test 30');
test(canCompleteCircuit([3,3,4,4,5,5,6,6,7,7], [1,1,1,1,1,1,1,1,1,1]), 9, 'Test 31');
test(canCompleteCircuit([100, 200, 300, 400, 500], [500, 100, 200, 300, 400]), 1, 'Test 32');
test(canCompleteCircuit([30,25,20,15,10,5,0], [5,10,15,20,25,30,1]), -1, 'Test 33');
test(canCompleteCircuit([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], [20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 10, 'Test 34');
test(canCompleteCircuit([10,20,30,40,50], [9,19,29,39,49]), 4, 'Test 35');
test(canCompleteCircuit([10,20,30,40,50], [5,10,15,20,25]), 4, 'Test 36');
test(canCompleteCircuit([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 8, 'Test 37');
test(canCompleteCircuit([15,14,13,12,11,10,9,8,7,6,5,4,3,2,1], [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 0, 'Test 38');
test(canCompleteCircuit([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [100, 90, 80, 70, 60, 50, 40, 30, 20, 10]), 5, 'Test 39');
test(canCompleteCircuit([10,20,30,40,50,60,70,80,90,100], [90,80,70,60,50,40,30,20,10,150]), -1, 'Test 40');
test(canCompleteCircuit([2,3,4,5,1,6], [3,4,5,1,6,2]), 5, 'Test 41');
test(canCompleteCircuit([15,20,5,20,15,20,15,20,15,20], [10,10,10,10,10,10,10,10,10,10]), 9, 'Test 42');
test(canCompleteCircuit([3,1,4,1,5,9,2,6,5,3,5], [5,3,5,3,9,2,6,5,3,5,3]), -1, 'Test 43');
test(canCompleteCircuit([100,100,100,100,100,100,100,100,100,100], [99,99,99,99,99,99,99,99,99,100]), 9, 'Test 44');
test(canCompleteCircuit([10,0,10,0,10], [0,10,0,10,0]), 4, 'Test 45');
test(canCompleteCircuit([10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,100]), -1, 'Test 46');
test(canCompleteCircuit([10,20,30,40,50], [40,30,20,10,5]), 4, 'Test 47');
test(canCompleteCircuit([15,10,10,10,10], [10,10,10,15,10]), 4, 'Test 48');
test(canCompleteCircuit([5,5,5,5,5,5,5,5,5,5], [4,4,4,4,4,4,4,4,4,5]), 9, 'Test 49');
test(canCompleteCircuit([8,6,7,4,5], [5,6,7,3,4]), 4, 'Test 50');
test(canCompleteCircuit([5,8,2,8,4,7,6,6,1,4], [4,4,5,7,1,5,4,4,5,4]), 9, 'Test 51');
test(canCompleteCircuit([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150], [150,140,130,120,110,100,90,80,70,60,50,40,30,20,10]), 8, 'Test 52');
test(canCompleteCircuit([1,1,1,1,1], [2,2,2,2,2]), -1, 'Test 53');
test(canCompleteCircuit([10,20,30,10,5,15], [20,15,10,5,15,10]), 2, 'Test 54');
test(canCompleteCircuit([10,20,30,40,50,60,70,80,90,100], [10,20,30,40,50,60,70,80,90,100]), 9, 'Test 55');
test(canCompleteCircuit([10,20,30,40,50,60,70,80,90,100], [1,2,3,4,5,6,7,8,9,10]), 9, 'Test 56');
test(canCompleteCircuit([10,9,8,7,6,5,4,3,2,1], [1,2,3,4,5,6,7,8,9,10]), 0, 'Test 57');
test(canCompleteCircuit([3,3,4,5,1,2], [4,1,5,1,2,3]), 3, 'Test 58');
test(canCompleteCircuit([20,30,10,40,50,60], [50,10,60,10,20,30]), 4, 'Test 59');
test(canCompleteCircuit([3,5,7,2,8,10,6,4,12,9], [4,4,8,5,5,6,7,8,3,2]), 9, 'Test 60');
test(canCompleteCircuit([10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,20]), -1, 'Test 61');
test(canCompleteCircuit([2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2], [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2]), 19, 'Test 62');
test(canCompleteCircuit([10,20,10,20,10,20,10,20,10,20], [11,9,11,9,11,9,11,9,11,9]), 9, 'Test 63');
test(canCompleteCircuit([5, 5, 5, 5, 5, 5, 5], [6, 6, 6, 6, 6, 6, 6]), -1, 'Test 64');
test(canCompleteCircuit([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [5,6,7,8,9,10,11,12,13,14,15,1,2,3,4]), 11, 'Test 65');
test(canCompleteCircuit([1,2,3,4,5,6,7,8,9,10], [1,1,1,1,1,1,1,1,1,20]), 7, 'Test 66');
test(canCompleteCircuit([2,3,4,5,6,7,8,9,10], [10,2,3,4,5,6,7,8,9]), 1, 'Test 67');
test(canCompleteCircuit([2,2,2,2,2], [1,1,1,1,1]), 4, 'Test 68');
test(canCompleteCircuit([4, 3, 2, 1, 5, 6, 7], [5, 4, 3, 2, 6, 7, 1]), 6, 'Test 69');
test(canCompleteCircuit([2,3,4,5,6,7,8,9,10], [3,4,5,6,7,8,9,10,2]), 8, 'Test 70');
test(canCompleteCircuit([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 5, 'Test 71');
test(canCompleteCircuit([30,20,10,40,50,20,10,60,70,80], [20,30,40,50,60,70,80,90,10,10]), -1, 'Test 72');
test(canCompleteCircuit([50,100,150,200,250,300,350,400,450,500], [400,450,500,50,100,150,200,250,300,350]), 3, 'Test 73');
test(canCompleteCircuit([100,20,10,15,5], [70,15,10,10,5]), 4, 'Test 74');
test(canCompleteCircuit([1, 6, 3, 4, 5, 2, 8], [2, 5, 4, 3, 6, 1, 5]), 6, 'Test 75');
test(canCompleteCircuit([1,6,3,4,5,6,7,8,9,10], [10,9,8,7,6,5,4,3,2,1]), 7, 'Test 76');
test(canCompleteCircuit([10,20,30,40,50,60,70,80,90,100], [110,9,19,29,39,49,59,69,79,89]), -1, 'Test 77');
test(canCompleteCircuit([1,1,1,1,1,1,1,1,1,1], [1,1,1,1,1,1,1,1,1,1]), 9, 'Test 78');
test(canCompleteCircuit([0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0, 1, 0]), 9, 'Test 79');
test(canCompleteCircuit([2,5,7,3,8,4,6], [6,2,4,8,7,3,5]), 1, 'Test 80');
test(canCompleteCircuit([15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15], [14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14]), 19, 'Test 81');
test(canCompleteCircuit([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2, 2, 2, 2, 2, 2, 2, 2, 2, 1]), -1, 'Test 82');
test(canCompleteCircuit([1,2,3,4,5,6,7,8,9,10], [10,9,8,7,6,5,4,3,2,1]), 5, 'Test 83');
test(canCompleteCircuit([3,2,6,5,10,1], [6,5,4,3,1,2]), 4, 'Test 84');
test(canCompleteCircuit([20,20,20,20,20], [15,15,15,15,15]), 4, 'Test 85');
test(canCompleteCircuit([3,3,3,3,3,3,3,3,3,3], [3,3,3,3,3,3,3,3,3,3]), 9, 'Test 86');
test(canCompleteCircuit([2,4,5,3,1], [3,4,3,2,2]), 2, 'Test 87');
test(canCompleteCircuit([3,2,6,5,4], [2,3,4,5,3]), 4, 'Test 88');
test(canCompleteCircuit([20,30,10,40,50], [35,15,25,20,40]), 3, 'Test 89');
test(canCompleteCircuit([8, 1, 3, 5, 2, 6, 7], [7, 2, 5, 4, 1, 3, 6]), 5, 'Test 90');
test(canCompleteCircuit([50,30,10,20,40], [30,40,15,25,30]), 4, 'Test 91');
test(canCompleteCircuit([5,5,5,5,5], [4,4,4,4,4]), 4, 'Test 92');
test(canCompleteCircuit([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [2,3,4,5,6,7,8,9,10,11,12,13,14,15,1]), 14, 'Test 93');
test(canCompleteCircuit([2, 3, 6, 5, 1, 3, 4], [3, 4, 3, 1, 2, 4, 3]), 3, 'Test 94');
test(canCompleteCircuit([1,3,5,7,9], [9,7,5,3,1]), 3, 'Test 95');
test(canCompleteCircuit([1000,1000,1000,1000,1000], [999,999,999,999,5000]), -1, 'Test 96');

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
