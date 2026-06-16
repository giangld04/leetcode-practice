// Test: 2541. Minimum Operations To Make Array Equal Ii
// 109 test cases from LeetCodeDataset
// Run: node test.js

const { minOperations } = require("./solution");

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

console.log("\n2541. Minimum Operations To Make Array Equal Ii\n");

test(minOperations([3,8,5,2], [2,4,1,6], 1), -1, 'Test 1');
test(minOperations([5,5,5,5], [10,10,10,10], 5), -1, 'Test 2');
test(minOperations([1,2,3,4], [1,2,3,4], 2), 0, 'Test 3');
test(minOperations([10,20,30], [20,30,40], 10), -1, 'Test 4');
test(minOperations([1,2,3], [3,2,1], 2), 1, 'Test 5');
test(minOperations([0,0,0,0], [0,0,0,0], 0), 0, 'Test 6');
test(minOperations([5,5,5,5], [10,10,0,0], 5), 2, 'Test 7');
test(minOperations([1,1,1], [2,2,2], 0), -1, 'Test 8');
test(minOperations([1,2,3], [1,2,3], 0), 0, 'Test 9');
test(minOperations([0,0,0], [0,0,0], 0), 0, 'Test 10');
test(minOperations([10,20,30], [30,20,10], 10), 2, 'Test 11');
test(minOperations([5,5,5,5], [1,1,1,1], 2), -1, 'Test 12');
test(minOperations([10,20,30], [10,20,30], 5), 0, 'Test 13');
test(minOperations([4,3,1,4], [1,3,7,1], 3), 2, 'Test 14');
test(minOperations([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], [20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1], 1), 100, 'Test 15');
test(minOperations([1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1], 100000), 0, 'Test 16');
test(minOperations([100, 200, 300, 400, 500], [500, 400, 300, 200, 100], 50), 12, 'Test 17');
test(minOperations([1000000000,0,0,0], [0,0,0,1000000000], 250000000), 4, 'Test 18');
test(minOperations([1,1,1,1,1,1,1,1], [9,9,9,9,9,9,9,9], 2), -1, 'Test 19');
test(minOperations([1, 1, 1, 1, 1, 1], [2, 2, 2, 2, 2, 3], 1), -1, 'Test 20');
test(minOperations([1000000000, 1000000000, 1000000000], [500000000, 500000000, 500000000], 500000000), -1, 'Test 21');
test(minOperations([10,20,30,40,50], [20,30,40,50,60], 10), -1, 'Test 22');
test(minOperations([1, 3, 5, 7, 9], [9, 7, 5, 3, 1], 2), 6, 'Test 23');
test(minOperations([10,20,30,40], [40,30,20,10], 10), 4, 'Test 24');
test(minOperations([100, 200, 300, 400, 500], [50, 150, 250, 350, 451], 50), -1, 'Test 25');
test(minOperations([5,5,5,5,5,5,5,5,5,5], [1,1,1,1,1,1,1,1,1,1], 2), -1, 'Test 26');
test(minOperations([2, 4, 6, 8, 10], [10, 8, 6, 4, 2], 2), 6, 'Test 27');
test(minOperations([1000000000, 0, 0, 1000000000], [500000000, 500000000, 500000000, 500000000], 500000000), 2, 'Test 28');
test(minOperations([100,200,300,400], [400,300,200,100], 50), 8, 'Test 29');
test(minOperations([100000, 200000, 300000], [300000, 200000, 100000], 100000), 2, 'Test 30');
test(minOperations([0, 0, 0, 0, 0], [0, 0, 0, 0, 0], 0), 0, 'Test 31');
test(minOperations([1,2,3,4,5,6], [6,5,4,3,2,1], 1), 9, 'Test 32');
test(minOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [2, 3, 4, 5, 6, 7, 8, 9, 10, 1], 1), 9, 'Test 33');
test(minOperations([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], [10, 10, 10, 10, 10, 0, 0, 0, 0, 0], 5), 5, 'Test 34');
test(minOperations([0, 0, 0, 0], [10, -10, 20, -20], 10), 3, 'Test 35');
test(minOperations([10, 20, 30, 40], [40, 30, 20, 10], 10), 4, 'Test 36');
test(minOperations([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 0), 0, 'Test 37');
test(minOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 2, 3, 4, 5, 6, 7, 8, 9, 11], 1), -1, 'Test 38');
test(minOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 2, 3, 4, 5, 6, 7, 8, 10, 9], 1), 1, 'Test 39');
test(minOperations([10, 20, 30, 40, 50], [50, 40, 30, 20, 10], 10), 6, 'Test 40');
test(minOperations([100,150,200,250,300], [300,250,200,150,100], 50), 6, 'Test 41');
test(minOperations([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 100), 0, 'Test 42');
test(minOperations([1, 1, 1, 1, 1], [2, 2, 2, 2, 2], 1), -1, 'Test 43');
test(minOperations([0,0,0,0,0,0], [0,0,0,0,0,0], 100000), 0, 'Test 44');
test(minOperations([100,200,300,400], [400,300,200,100], 100), 4, 'Test 45');
test(minOperations([1,1,1,1,1,1,1,1], [7,7,7,7,7,7,7,7], 3), -1, 'Test 46');
test(minOperations([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 1), -1, 'Test 47');
test(minOperations([1, 3, 5, 7, 9, 11, 13], [13, 11, 9, 7, 5, 3, 1], 2), 12, 'Test 48');
test(minOperations([10, 20, 30, 40, 50], [50, 40, 30, 20, 10], 15), -1, 'Test 49');
test(minOperations([100,200,300,400,500,600], [600,500,400,300,200,100], 100), 9, 'Test 50');
test(minOperations([1000000000, 500000000, 250000000, 125000000], [0, 0, 0, 0], 125000000), -1, 'Test 51');
test(minOperations([100, 200, 300, 400, 500], [50, 100, 150, 200, 250], 50), -1, 'Test 52');
test(minOperations([2,4,6,8,10], [10,8,6,4,2], 2), 6, 'Test 53');
test(minOperations([2, 4, 6, 8, 10], [1, 3, 5, 7, 9], 1), -1, 'Test 54');
test(minOperations([2, 4, 6, 8, 10], [10, 8, 6, 4, 2], 3), -1, 'Test 55');
test(minOperations([1, 2, 3, 4, 5, 6, 7, 8, 9], [9, 8, 7, 6, 5, 4, 3, 2, 1], 2), 10, 'Test 56');
test(minOperations([100, 200, 300, 400, 500], [500, 400, 300, 200, 100], 10), 60, 'Test 57');
test(minOperations([10, 10, 10, 10, 10, 10, 10, 10, 10, 10], [10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 0), 0, 'Test 58');
test(minOperations([10,20,30,40,50,60], [60,50,40,30,20,10], 10), 9, 'Test 59');
test(minOperations([1,1,1,1], [1,1,1,1], 0), 0, 'Test 60');
test(minOperations([10, 15, 20, 25, 30, 35], [35, 30, 25, 20, 15, 10], 5), 9, 'Test 61');
test(minOperations([100,200,300,400,500], [500,400,300,200,100], 50), 12, 'Test 62');
test(minOperations([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 1), 0, 'Test 63');
test(minOperations([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 1), 25, 'Test 64');
test(minOperations([5,15,25,35,45,55,65], [15,25,35,45,55,65,75], 10), -1, 'Test 65');
test(minOperations([1, 1, 1, 1, 1, 1], [2, 2, 2, 2, 2, 2], 1), -1, 'Test 66');
test(minOperations([1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], 100), 0, 'Test 67');
test(minOperations([10,20,30,40,50], [50,40,30,20,10], 10), 6, 'Test 68');
test(minOperations([10,20,30,40,50], [10,20,30,40,50], 5), 0, 'Test 69');
test(minOperations([1000000, 1000000, 1000000], [500000, 500000, 500000], 500000), -1, 'Test 70');
test(minOperations([7, 7, 7, 7], [1, 13, 1, 13], 3), 4, 'Test 71');
test(minOperations([10, 20, 30, 40, 50], [5, 15, 25, 35, 45], 5), -1, 'Test 72');
test(minOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [2, 3, 4, 5, 6, 7, 8, 9, 10, 9], 2), -1, 'Test 73');
test(minOperations([5,6,7,8,9,10], [15,14,13,12,11,10], 2), -1, 'Test 74');
test(minOperations([1,1,1,1], [1,1,1,1], 5), 0, 'Test 75');
test(minOperations([1,1,1,1,1,1,1,1,1,1], [1,1,1,1,1,1,1,1,1,1], 1), 0, 'Test 76');
test(minOperations([5, 15, 25, 35, 45, 55, 65], [65, 55, 45, 35, 25, 15, 5], 10), 12, 'Test 77');
test(minOperations([1000000000, 0, 500000000, 500000000], [500000000, 500000000, 0, 1000000000], 500000000), 2, 'Test 78');
test(minOperations([0, 0, 0, 0, 0], [0, 0, 0, 0, 0], 10), 0, 'Test 79');
test(minOperations([1,1,1,1,1,1,1,1,1,1], [9,9,9,9,9,9,9,9,9,9], 1), -1, 'Test 80');
test(minOperations([1,2,3,4,5,6,7,8,9,10], [10,9,8,7,6,5,4,3,2,1], 1), 25, 'Test 81');
test(minOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 1), 25, 'Test 82');
test(minOperations([1, 1, 1, 1, 1, 1], [2, 2, 2, 2, 2, 2], 0), -1, 'Test 83');
test(minOperations([1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1], 0), 0, 'Test 84');
test(minOperations([0,0,0,0,0,0], [0,0,0,0,0,0], 10), 0, 'Test 85');
test(minOperations([1,1,1,1,1,1], [5,5,5,5,5,5], 4), -1, 'Test 86');
test(minOperations([1, 2, 3, 4, 5, 6], [6, 5, 4, 3, 2, 1], 1), 9, 'Test 87');
test(minOperations([0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], 1000), 0, 'Test 88');
test(minOperations([1000000000, 1000000000, 1000000000], [999999998, 1000000002, 1000000000], 1), 2, 'Test 89');
test(minOperations([0, 0, 0, 0, 0], [0, 0, 0, 0, 0], 5), 0, 'Test 90');
test(minOperations([1,2,3,4,5,6,7,8,9,10], [2,3,4,5,6,7,8,9,10,11], 1), -1, 'Test 91');
test(minOperations([1,3,5,7,9], [9,7,5,3,1], 2), 6, 'Test 92');
test(minOperations([1, 1, 1, 1, 1, 1], [2, 2, 2, 2, 2, 3], 2), -1, 'Test 93');
test(minOperations([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 100000), 0, 'Test 94');
test(minOperations([1, 1, 1, 1, 1, 1], [6, 6, 6, 6, 6, 6], 1), -1, 'Test 95');
test(minOperations([0, 0, 0, 0, 0], [10, 20, 30, 40, 50], 0), -1, 'Test 96');
test(minOperations([1, 1, 1, 1, 1, 1], [6, 6, 6, 6, 6, 6], 5), -1, 'Test 97');
test(minOperations([9,8,7,6,5,4,3,2,1], [1,2,3,4,5,6,7,8,9], 2), 10, 'Test 98');
test(minOperations([100, 200, 300, 400, 500], [50, 150, 250, 350, 450], 50), -1, 'Test 99');
test(minOperations([10,20,30,40,50,60,70,80,90,100], [100,90,80,70,60,50,40,30,20,10], 10), 25, 'Test 100');
test(minOperations([10, 20, 30, 40], [40, 30, 20, 10], 5), 8, 'Test 101');
test(minOperations([9,18,27,36,45], [45,36,27,18,9], 9), 6, 'Test 102');
test(minOperations([2, 4, 6, 8, 10, 12, 14, 16], [16, 14, 12, 10, 8, 6, 4, 2], 2), 16, 'Test 103');
test(minOperations([1,2,3,4,5], [1,2,3,4,5], 0), 0, 'Test 104');
test(minOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 1), 56, 'Test 105');
test(minOperations([10,20,30,40,50], [50,40,30,20,10], 5), 12, 'Test 106');
test(minOperations([10,20,30,40], [40,30,20,10], 5), 8, 'Test 107');
test(minOperations([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], [5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 1), 0, 'Test 108');
test(minOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 10), -1, 'Test 109');

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
