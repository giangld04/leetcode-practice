// Test: 3040. Maximum Number Of Operations With The Same Score Ii
// 116 test cases from LeetCodeDataset
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

console.log("\n3040. Maximum Number Of Operations With The Same Score Ii\n");

test(maxOperations([10,20,30,40,50,60]), 3, 'Test 1');
test(maxOperations([1,1,1,1,2,2,2,2]), 4, 'Test 2');
test(maxOperations([1,3,2,2,3,1]), 3, 'Test 3');
test(maxOperations([2,2,2,2,2,2,2,2,2,2]), 5, 'Test 4');
test(maxOperations([1,1,2,2,3,3,4,4]), 4, 'Test 5');
test(maxOperations([5,8,8,5,8,8,5]), 3, 'Test 6');
test(maxOperations([1,2,3,4,5,6,7,8,9,10]), 5, 'Test 7');
test(maxOperations([1000,1,1000,1,1000,1]), 3, 'Test 8');
test(maxOperations([1,3,2,3,1]), 2, 'Test 9');
test(maxOperations([7,7,7,7,7,7,7]), 3, 'Test 10');
test(maxOperations([10,10,10,10,10,10,10,10]), 4, 'Test 11');
test(maxOperations([3,2,6,1,4]), 2, 'Test 12');
test(maxOperations([1,2,3,4,3,2,1]), 2, 'Test 13');
test(maxOperations([3,2,1,2,3,4]), 3, 'Test 14');
test(maxOperations([5,8,9,1,2,3,4,8,5]), 3, 'Test 15');
test(maxOperations([1,1,1,1,1,1,1,1]), 4, 'Test 16');
test(maxOperations([10,10,10,10,10,10]), 3, 'Test 17');
test(maxOperations([1000,1,1,1000]), 2, 'Test 18');
test(maxOperations([1,2,3,4,5,6,7,8]), 4, 'Test 19');
test(maxOperations([2,2,2,2,2,2,2,2]), 4, 'Test 20');
test(maxOperations([1,2,3,2,1]), 2, 'Test 21');
test(maxOperations([5,5,5,5,5,5,5,5,5,5]), 5, 'Test 22');
test(maxOperations([1,1,1,1,1,1,1,1,1,1,1,1]), 6, 'Test 23');
test(maxOperations([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 10, 'Test 24');
test(maxOperations([10,10,10,10,10]), 2, 'Test 25');
test(maxOperations([1,3,2,3,1,2,3,1]), 4, 'Test 26');
test(maxOperations([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31]), 8, 'Test 27');
test(maxOperations([9, 8, 7, 6, 5, 6, 7, 8, 9, 10, 11, 12, 13, 12, 11, 10, 9, 8, 7, 6, 5, 6, 7, 8, 9]), 2, 'Test 28');
test(maxOperations([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2]), 10, 'Test 29');
test(maxOperations([5,1,5,1,5,1,5,1,5]), 4, 'Test 30');
test(maxOperations([8,5,8,5,8,5,8,5,8,5,8,5,8,5,8,5]), 8, 'Test 31');
test(maxOperations([1000,999,1000,999,1000,999,1000,999,1000,999,1000]), 5, 'Test 32');
test(maxOperations([1,2,3,4,3,4,3,2,1,2,3,2,3,2,1,2,3,4,3,2,1]), 2, 'Test 33');
test(maxOperations([1000,1,1000,1,1000,1,1000,1,1000,1]), 5, 'Test 34');
test(maxOperations([100,200,300,400,500,600,500,400,300,200,100]), 2, 'Test 35');
test(maxOperations([4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]), 10, 'Test 36');
test(maxOperations([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39]), 10, 'Test 37');
test(maxOperations([10, 20, 30, 40, 50, 40, 30, 20, 10, 20, 30, 40, 50, 40, 30, 20, 10]), 2, 'Test 38');
test(maxOperations([9,7,5,3,1,2,4,6,8,10,9,7,5,3,1,2,4,6,8,10]), 1, 'Test 39');
test(maxOperations([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1]), 2, 'Test 40');
test(maxOperations([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), 15, 'Test 41');
test(maxOperations([5,10,15,10,5,10,15,10,5]), 2, 'Test 42');
test(maxOperations([1,1,2,2,1,1,2,2,1,1,2,2,1,1,2,2,1,1,2,2,1,1,2,2,1,1,2,2,1,1,2,2]), 16, 'Test 43');
test(maxOperations([1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3]), 9, 'Test 44');
test(maxOperations([2,4,6,8,10,12,14,16,18,20,18,16,14,12,10,8,6,4,2,2,4,6,8,10,12,14,16,18,20]), 10, 'Test 45');
test(maxOperations([5,10,15,20,25,30,35,40,45,50]), 5, 'Test 46');
test(maxOperations([3, 2, 1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1, 2, 3, 4]), 6, 'Test 47');
test(maxOperations([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 16, 'Test 48');
test(maxOperations([1, 2, 3, 4, 3, 2, 1, 4, 5, 6, 5, 4, 3, 2, 1, 6, 7, 8, 7, 6, 5, 4, 3, 2, 1]), 2, 'Test 49');
test(maxOperations([1,1,2,1,1,1,1,1,1,2,1,1,1,1,1,1]), 4, 'Test 50');
test(maxOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), 3, 'Test 51');
test(maxOperations([1,3,2,4,3,2,1,3,2,4,3,2,1,3,2,4,3,2,1,3,2,4,3,2,1,3,2,4,3,2,1,3,2,4,3,2,1]), 1, 'Test 52');
test(maxOperations([3,2,1,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 3, 'Test 53');
test(maxOperations([9, 3, 9, 3, 9, 3, 9, 3, 9, 3]), 5, 'Test 54');
test(maxOperations([1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2]), 1, 'Test 55');
test(maxOperations([1,3,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3]), 1, 'Test 56');
test(maxOperations([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 2, 'Test 57');
test(maxOperations([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 9, 2, 6, 5, 3, 5, 9, 2, 6, 5, 3, 5, 9, 2, 6, 5, 3, 5, 9]), 1, 'Test 58');
test(maxOperations([5, 10, 15, 10, 5, 10, 15, 10, 5]), 2, 'Test 59');
test(maxOperations([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]), 14, 'Test 60');
test(maxOperations([7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91, 98, 105, 112]), 8, 'Test 61');
test(maxOperations([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 13, 'Test 62');
test(maxOperations([9, 8, 7, 6, 5, 4, 3, 2, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9]), 2, 'Test 63');
test(maxOperations([5, 8, 5, 8, 5, 8, 5, 8]), 4, 'Test 64');
test(maxOperations([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 21, 'Test 65');
test(maxOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 2, 'Test 66');
test(maxOperations([8,1,4,3,2,1,8,1,4,3,2,1]), 1, 'Test 67');
test(maxOperations([10, 20, 30, 40, 50, 40, 30, 20, 10, 20, 30, 40, 50, 40, 30, 20, 10, 20, 30, 40]), 5, 'Test 68');
test(maxOperations([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,9,9,8,8,7,7,6,6,5,5,4,4,3,3,2,2,1,1]), 2, 'Test 69');
test(maxOperations([1000, 1, 1000, 2, 1000, 3, 1000, 4, 1000, 5, 1000, 6, 1000, 7, 1000, 8, 1000, 9, 1000, 10]), 1, 'Test 70');
test(maxOperations([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50]), 10, 'Test 71');
test(maxOperations([1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1]), 2, 'Test 72');
test(maxOperations([100,200,100,300,200,100,300,200,100]), 2, 'Test 73');
test(maxOperations([100, 200, 100, 300, 200, 100, 400, 300]), 1, 'Test 74');
test(maxOperations([3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 27, 24, 21, 18, 15, 12, 9, 6, 3]), 2, 'Test 75');
test(maxOperations([1,2,3,4,5,6,5,4,3,2,1]), 2, 'Test 76');
test(maxOperations([10,20,30,40,50,40,30,20,10,10,20,30,40,50,40,30,20,10,10,20,30,40,50,40,30,20,10]), 2, 'Test 77');
test(maxOperations([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]), 12, 'Test 78');
test(maxOperations([2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2]), 2, 'Test 79');
test(maxOperations([100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700]), 6, 'Test 80');
test(maxOperations([5, 5, 5, 5, 10, 10, 15, 15, 20, 20, 25, 25, 30, 30, 35, 35]), 2, 'Test 81');
test(maxOperations([1, 3, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3]), 1, 'Test 82');
test(maxOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 20, 'Test 83');
test(maxOperations([100,200,300,400,500,400,300,200,100,100,200,300,400,500,400,300,200,100]), 2, 'Test 84');
test(maxOperations([2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]), 15, 'Test 85');
test(maxOperations([7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91, 98, 105, 112, 119, 126, 133, 140, 147, 154, 161, 168, 175, 182, 189, 196, 203, 210]), 15, 'Test 86');
test(maxOperations([10,15,10,15,10,15,10,15,10,15,10,15,10,15,10,15,10,15,10,15]), 10, 'Test 87');
test(maxOperations([20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]), 10, 'Test 88');
test(maxOperations([2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40]), 10, 'Test 89');
test(maxOperations([10,20,10,30,10,40,10,50,10,60,10,70,10,80,10,90,10,100]), 1, 'Test 90');
test(maxOperations([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]), 15, 'Test 91');
test(maxOperations([1,2,3,4,5,4,3,2,1,2,3,4,5,4,3,2,1]), 2, 'Test 92');
test(maxOperations([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 10, 'Test 93');
test(maxOperations([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120]), 6, 'Test 94');
test(maxOperations([5,15,25,35,45,55,65,75,85,95,105,95,85,75,65,55,45,35,25,15,5]), 2, 'Test 95');
test(maxOperations([9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), 2, 'Test 96');
test(maxOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 10, 'Test 97');
test(maxOperations([10,20,30,40,50,60,70,80,90,100,90,80,70,60,50,40,30,20,10]), 2, 'Test 98');
test(maxOperations([5,9,5,9,5,9,5,9,5,9]), 5, 'Test 99');
test(maxOperations([10,9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,9,10]), 2, 'Test 100');
test(maxOperations([15, 25, 15, 25, 15, 25, 15, 25, 15, 25, 15, 25, 15, 25, 15, 25, 15, 25, 15, 25]), 10, 'Test 101');
test(maxOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 10, 'Test 102');
test(maxOperations([3, 1, 2, 1, 3, 1, 2, 1, 3, 1, 2, 1, 3, 1, 2, 1, 3, 1, 2, 1]), 1, 'Test 103');
test(maxOperations([100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200]), 10, 'Test 104');
test(maxOperations([1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8]), 16, 'Test 105');
test(maxOperations([9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9]), 2, 'Test 106');
test(maxOperations([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,300]), 15, 'Test 107');
test(maxOperations([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]), 23, 'Test 108');
test(maxOperations([1,2,3,4,5,6,5,4,3,2,1,6,5,4,3,2,1]), 2, 'Test 109');
test(maxOperations([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80]), 8, 'Test 110');
test(maxOperations([10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]), 9, 'Test 111');
test(maxOperations([500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500]), 15, 'Test 112');
test(maxOperations([3,1,3,2,3,1,3,2,3,1,3,2,3,1]), 2, 'Test 113');
test(maxOperations([1,2,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4]), 17, 'Test 114');
test(maxOperations([5,9,1,9,5,9,1,9,5,9]), 2, 'Test 115');
test(maxOperations([100,200,300,400,500,500,400,300,200,100]), 2, 'Test 116');

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
