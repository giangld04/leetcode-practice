// Test: 1658. Minimum Operations To Reduce X To Zero
// 107 test cases from LeetCodeDataset
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

console.log("\n1658. Minimum Operations To Reduce X To Zero\n");

test(minOperations([1,2,3,4,5], 15), 5, 'Test 1');
test(minOperations([1,1,4,2,3], 5), 2, 'Test 2');
test(minOperations([10,20,30,40,50], 100), 3, 'Test 3');
test(minOperations([10000,10000,10000,10000,10000], 30000), 3, 'Test 4');
test(minOperations([1,1,1,1,1,1,1,1,1,1], 10), 10, 'Test 5');
test(minOperations([3,2,20,1,1,3], 10), 5, 'Test 6');
test(minOperations([1,1,1,1,1], 5), 5, 'Test 7');
test(minOperations([1,1,1,1,1], 3), 3, 'Test 8');
test(minOperations([1,2,3,4,5,6,7,8,9,10], 15), 5, 'Test 9');
test(minOperations([2,3,1,2,4,3], 7), 2, 'Test 10');
test(minOperations([1,2,3,4,5,6,7,8,9,10], 11), 2, 'Test 11');
test(minOperations([10000,10000,10000,10000,10000], 50000), 5, 'Test 12');
test(minOperations([5,6,7,8,9], 4), -1, 'Test 13');
test(minOperations([5000,5000,5000,5000,5000,5000,5000,5000,5000,5000], 25000), 5, 'Test 14');
test(minOperations([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2], 15), 10, 'Test 15');
test(minOperations([1000,1000,1000,1000,1000,1000,1000,1000,1000,1000], 5000), 5, 'Test 16');
test(minOperations([10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000], 1400000), -1, 'Test 17');
test(minOperations([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2], 10), 7, 'Test 18');
test(minOperations([1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000], 1111111111), 10, 'Test 19');
test(minOperations([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200], 1000), 9, 'Test 20');
test(minOperations([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 190), 15, 'Test 21');
test(minOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 190), 15, 'Test 22');
test(minOperations([1000,2000,3000,4000,5000,6000,7000,8000,9000,10000], 55000), 10, 'Test 23');
test(minOperations([3, 5, 10, 7, 15, 1, 4, 2, 8, 6], 29), 7, 'Test 24');
test(minOperations([1,2,3,4,5,6,7,8,9,10], 21), 6, 'Test 25');
test(minOperations([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 5), 5, 'Test 26');
test(minOperations([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 95), 15, 'Test 27');
test(minOperations([10000, 9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000], 55000), 10, 'Test 28');
test(minOperations([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 30), 30, 'Test 29');
test(minOperations([1,2,3,4,5,6,7,8,9,10], 25), 5, 'Test 30');
test(minOperations([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10], 55), 7, 'Test 31');
test(minOperations([9, 8, 7, 6, 5, 4, 3, 2, 1], 15), 4, 'Test 32');
test(minOperations([1,3,2,4,5,6,7,8,9,10], 15), 5, 'Test 33');
test(minOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 85), 8, 'Test 34');
test(minOperations([9, 8, 7, 6, 5, 4, 3, 2, 1], 100), -1, 'Test 35');
test(minOperations([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 10), 10, 'Test 36');
test(minOperations([1, 2, 3, 4, 5], 15), 5, 'Test 37');
test(minOperations([5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000], 35000), 7, 'Test 38');
test(minOperations([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 10), 10, 'Test 39');
test(minOperations([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 50), 50, 'Test 40');
test(minOperations([3,2,20,1,1,3,5,10,1,1], 29), 7, 'Test 41');
test(minOperations([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1000), -1, 'Test 42');
test(minOperations([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 150), 5, 'Test 43');
test(minOperations([10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000], 50000), 5, 'Test 44');
test(minOperations([5, 3, 2, 5, 3, 2, 5, 3, 2, 5, 3, 2, 5, 3, 2], 20), 6, 'Test 45');
test(minOperations([1, 3, 2, 4, 5, 2, 3, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 150), 12, 'Test 46');
test(minOperations([5,2,3,1,1,2,3,4,5], 9), 2, 'Test 47');
test(minOperations([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50], 1225), 45, 'Test 48');
test(minOperations([2, 3, 2, 2, 3, 2, 3, 2, 2, 3, 2, 3, 2, 2, 3, 2, 3, 2, 2, 3, 2, 3, 2, 2, 3, 2, 3, 2, 2, 3], 15), 6, 'Test 49');
test(minOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 100), 9, 'Test 50');
test(minOperations([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 100), 20, 'Test 51');
test(minOperations([3,5,2,1,4,7,8,9,6,10], 18), 3, 'Test 52');
test(minOperations([10000,9000,8000,7000,6000,5000,4000,3000,2000,1000], 45000), 6, 'Test 53');
test(minOperations([3, 2, 2, 2, 3, 2, 3, 3, 2, 2, 3, 3, 3, 2, 2, 3, 3, 3, 3, 2, 3, 3, 2, 3, 2, 2, 3, 3, 3, 3], 30), 11, 'Test 54');
test(minOperations([100, 90, 80, 70, 60, 50, 40, 30, 20, 10], 370), 6, 'Test 55');
test(minOperations([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 50), 5, 'Test 56');
test(minOperations([9, 8, 7, 6, 5, 4, 3, 2, 1], 9), 1, 'Test 57');
test(minOperations([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,300], 1500), 9, 'Test 58');
test(minOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 210), 20, 'Test 59');
test(minOperations([1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000], 55000), 10, 'Test 60');
test(minOperations([10000, 20000, 30000, 40000, 50000], 120000), 3, 'Test 61');
test(minOperations([10000,20000,30000,40000,50000], 120000), 3, 'Test 62');
test(minOperations([5,6,7,8,9,10,11,12,13,14,15], 90), -1, 'Test 63');
test(minOperations([9, 8, 7, 6, 5, 4, 3, 2, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9], 45), 9, 'Test 64');
test(minOperations([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25], 275), 20, 'Test 65');
test(minOperations([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 60), 20, 'Test 66');
test(minOperations([10000,10000,10000,10000,10000,10000,10000,10000,10000,10000], 100000), 10, 'Test 67');
test(minOperations([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 55), 10, 'Test 68');
test(minOperations([1,3,2,4,5,6,7,8,9,10], 30), -1, 'Test 69');
test(minOperations([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 50), 10, 'Test 70');
test(minOperations([1,2,3,4,5,6,7,8,9,10], 100), -1, 'Test 71');
test(minOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 15), 1, 'Test 72');
test(minOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 55), 10, 'Test 73');
test(minOperations([10000, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9000], 20000), -1, 'Test 74');
test(minOperations([10000, 9999, 10000, 9999, 10000, 9999], 59996), -1, 'Test 75');
test(minOperations([1000,900,800,700,600,500,400,300,200,100], 3000), 5, 'Test 76');
test(minOperations([9,1,2,3,9,3,2,1,9], 18), 2, 'Test 77');
test(minOperations([9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,9], 80), 14, 'Test 78');
test(minOperations([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 25), 5, 'Test 79');
test(minOperations([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 105), 10, 'Test 80');
test(minOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50], 1275), 50, 'Test 81');
test(minOperations([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 50), 50, 'Test 82');
test(minOperations([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], 435), 25, 'Test 83');
test(minOperations([10,20,30,40,50,60,70,80,90,100], 550), 10, 'Test 84');
test(minOperations([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 65), 13, 'Test 85');
test(minOperations([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 100), 9, 'Test 86');
test(minOperations([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 100), 10, 'Test 87');
test(minOperations([9, 8, 7, 6, 5, 4, 3, 2, 1], 45), 9, 'Test 88');
test(minOperations([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 20), 4, 'Test 89');
test(minOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 120), 15, 'Test 90');
test(minOperations([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 450), 6, 'Test 91');
test(minOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 55), 10, 'Test 92');
test(minOperations([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 5500), 10, 'Test 93');
test(minOperations([1,2,3,4,5,6,7,8,9,10], 55), 10, 'Test 94');
test(minOperations([9999, 9999, 9999, 9999, 9999, 9999, 9999, 9999, 9999, 9999], 49995), 5, 'Test 95');
test(minOperations([5,2,3,1,1,5,5,3,2,5], 10), 2, 'Test 96');
test(minOperations([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3], 90), 30, 'Test 97');
test(minOperations([10,10,10,10,10,10,10,10,10,10], 80), 8, 'Test 98');
test(minOperations([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150], 950), 10, 'Test 99');
test(minOperations([3,5,2,4,1,9,6,7,8,10], 25), 3, 'Test 100');
test(minOperations([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 100), 20, 'Test 101');
test(minOperations([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40], 120), 5, 'Test 102');
test(minOperations([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 15), 15, 'Test 103');
test(minOperations([1, 2, 3, 4, 5], 0), 0, 'Test 104');
test(minOperations([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 20), 20, 'Test 105');
test(minOperations([5000, 3000, 2000, 4000, 1000, 6000], 21000), 6, 'Test 106');
test(minOperations([10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000], 70000), 7, 'Test 107');

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
