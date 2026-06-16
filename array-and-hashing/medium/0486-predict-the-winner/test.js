// Test: 486. Predict The Winner
// 109 test cases from LeetCodeDataset
// Run: node test.js

const { predictTheWinner } = require("./solution");

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

console.log("\n486. Predict The Winner\n");

test(predictTheWinner([10,10,10,10]), true, 'Test 1');
test(predictTheWinner([1,5,2]), false, 'Test 2');
test(predictTheWinner([10,9,8,7,6,5,4,3,2,1]), true, 'Test 3');
test(predictTheWinner([1,2,3,4,5,6,7,8,9,10]), true, 'Test 4');
test(predictTheWinner([10]), true, 'Test 5');
test(predictTheWinner([1]), true, 'Test 6');
test(predictTheWinner([5,17,100,11]), true, 'Test 7');
test(predictTheWinner([20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), true, 'Test 8');
test(predictTheWinner([1,2,3,4]), true, 'Test 9');
test(predictTheWinner([1,2,3,4,5]), true, 'Test 10');
test(predictTheWinner([1,2,3,7]), true, 'Test 11');
test(predictTheWinner([0,0,7,6,5,6,1]), false, 'Test 12');
test(predictTheWinner([5,18,6,3,1,19,2,4,10,11]), true, 'Test 13');
test(predictTheWinner([1,5,233,7]), true, 'Test 14');
test(predictTheWinner([1,1,1,1,1,1,1,1]), true, 'Test 15');
test(predictTheWinner([0,0,0,0]), true, 'Test 16');
test(predictTheWinner([8,15,3,7]), true, 'Test 17');
test(predictTheWinner([10,10]), true, 'Test 18');
test(predictTheWinner([1,2,3,4,5,6,7,8]), true, 'Test 19');
test(predictTheWinner([1,2]), true, 'Test 20');
test(predictTheWinner([1,2,3]), true, 'Test 21');
test(predictTheWinner([1,3,1]), false, 'Test 22');
test(predictTheWinner([5,18,4,3,9,13,13,17]), true, 'Test 23');
test(predictTheWinner([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), true, 'Test 24');
test(predictTheWinner([3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41]), true, 'Test 25');
test(predictTheWinner([8,15,3,7,25,10]), true, 'Test 26');
test(predictTheWinner([10000000,9999999,9999998,9999997,9999996,9999995,9999994,9999993,9999992,9999991]), true, 'Test 27');
test(predictTheWinner([10000000, 1000000, 100000, 10000, 1000, 100, 10, 1, 0]), true, 'Test 28');
test(predictTheWinner([23, 17, 10, 14, 3, 8, 15, 21]), true, 'Test 29');
test(predictTheWinner([2,4,6,8,10,12,14,16]), true, 'Test 30');
test(predictTheWinner([1, 100, 1, 100, 1, 100, 1, 100]), true, 'Test 31');
test(predictTheWinner([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), true, 'Test 32');
test(predictTheWinner([10,20,30,40,50]), true, 'Test 33');
test(predictTheWinner([9, 8, 7, 6, 5, 4, 3, 2, 1]), true, 'Test 34');
test(predictTheWinner([1000, 100, 10, 1, 1, 10, 100, 1000]), true, 'Test 35');
test(predictTheWinner([3,1,5,4,2]), true, 'Test 36');
test(predictTheWinner([1, 2, 3, 6, 5, 4, 3]), true, 'Test 37');
test(predictTheWinner([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), true, 'Test 38');
test(predictTheWinner([10000000, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), true, 'Test 39');
test(predictTheWinner([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39]), true, 'Test 40');
test(predictTheWinner([10,20,30,40,50,60,70,80]), true, 'Test 41');
test(predictTheWinner([10,2,5,6,7,8]), true, 'Test 42');
test(predictTheWinner([5,10,15,20,25,30,35,40,45,50]), true, 'Test 43');
test(predictTheWinner([8,15,3,7,10,12,14,13]), true, 'Test 44');
test(predictTheWinner([10, 80, 90, 30, 50]), true, 'Test 45');
test(predictTheWinner([100,90,80,70,60,50,40,30,20,10,0,10,20,30,40,50,60,70,80,90]), true, 'Test 46');
test(predictTheWinner([100,50,200,250,300,150,100,50,200,250,300]), true, 'Test 47');
test(predictTheWinner([10, 80, 60, 20, 40, 30]), true, 'Test 48');
test(predictTheWinner([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,10000000]), true, 'Test 49');
test(predictTheWinner([7,6,5,4,3,2,1]), true, 'Test 50');
test(predictTheWinner([100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), true, 'Test 51');
test(predictTheWinner([23,19,45,3,12,67,2,9,15,18,21,34,56,78,90]), true, 'Test 52');
test(predictTheWinner([12, 5, 7, 23, 19, 18, 15, 10]), true, 'Test 53');
test(predictTheWinner([1,3,5,7,9,11,13,15,17,19]), true, 'Test 54');
test(predictTheWinner([5,2,3,4,1,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), true, 'Test 55');
test(predictTheWinner([9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10]), true, 'Test 56');
test(predictTheWinner([1,5,2,4,6,8,10]), true, 'Test 57');
test(predictTheWinner([1,2,100,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]), true, 'Test 58');
test(predictTheWinner([9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9]), true, 'Test 59');
test(predictTheWinner([10,20,30,40,50,60]), true, 'Test 60');
test(predictTheWinner([8,15,3,7,10]), false, 'Test 61');
test(predictTheWinner([19, 17, 15, 13, 11, 9, 7, 5, 3, 1]), true, 'Test 62');
test(predictTheWinner([8,15,3,7,6,12]), true, 'Test 63');
test(predictTheWinner([3, 4, 6, 10, 2, 1, 5, 9, 7, 8]), true, 'Test 64');
test(predictTheWinner([10000000, 1, 10000000, 1, 10000000, 1, 10000000, 1]), true, 'Test 65');
test(predictTheWinner([7, 10, 12, 5, 8, 7, 3, 9]), true, 'Test 66');
test(predictTheWinner([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), true, 'Test 67');
test(predictTheWinner([2,4,6,8,10,12,14,16,18,20,22,24,26,28,30]), true, 'Test 68');
test(predictTheWinner([1, 3, 5, 7, 9, 11, 13, 15, 17, 19]), true, 'Test 69');
test(predictTheWinner([10000000,9999999,9999998,9999997,9999996]), true, 'Test 70');
test(predictTheWinner([30,28,26,24,22,20,18,16,14,12,10,8,6,4,2]), true, 'Test 71');
test(predictTheWinner([10, 20, 15, 10, 5]), true, 'Test 72');
test(predictTheWinner([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), true, 'Test 73');
test(predictTheWinner([50,40,30,20,10,0,10,20,30,40,50,60,70,80,90,100,110,120,130,140]), true, 'Test 74');
test(predictTheWinner([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200]), true, 'Test 75');
test(predictTheWinner([9,8,7,6,5,4,3,2,1,0]), true, 'Test 76');
test(predictTheWinner([2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40]), true, 'Test 77');
test(predictTheWinner([23, 12, 32, 4, 55, 2, 3]), false, 'Test 78');
test(predictTheWinner([3, 1, 5, 4, 2, 9, 10, 6, 8, 7]), true, 'Test 79');
test(predictTheWinner([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]), true, 'Test 80');
test(predictTheWinner([9,8,7,6,5,4,3,2,1,0,9,8,7,6,5,4,3,2,1,0]), true, 'Test 81');
test(predictTheWinner([10000000,0,10000000,0,10000000,0,10000000,0,10000000,0]), true, 'Test 82');
test(predictTheWinner([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), true, 'Test 83');
test(predictTheWinner([8,15,3,7,10,12]), true, 'Test 84');
test(predictTheWinner([2, 8, 5, 3, 7, 1, 9, 4]), true, 'Test 85');
test(predictTheWinner([20,10,3,8,5,2,7,6,1,4]), true, 'Test 86');
test(predictTheWinner([5,10,15,20,25,30,35]), true, 'Test 87');
test(predictTheWinner([10000000,1,10000000,1,10000000,1,10000000,1,10000000,1]), true, 'Test 88');
test(predictTheWinner([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200]), true, 'Test 89');
test(predictTheWinner([100,200,150,100,50,25]), true, 'Test 90');
test(predictTheWinner([8, 15, 3, 7, 11, 12]), true, 'Test 91');
test(predictTheWinner([23,15,56,7,98,1]), true, 'Test 92');
test(predictTheWinner([2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]), true, 'Test 93');
test(predictTheWinner([3,30,27,5,20,10]), true, 'Test 94');
test(predictTheWinner([1,3,5,7,9,11,13,15,17,19,21]), true, 'Test 95');
test(predictTheWinner([5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), true, 'Test 96');
test(predictTheWinner([2,4,6,8,10,12,14,16,18,20]), true, 'Test 97');
test(predictTheWinner([5, 23, 7, 1, 9, 15, 3, 18, 11, 17, 2, 14, 6, 12, 8, 10, 4, 13, 16, 19]), true, 'Test 98');
test(predictTheWinner([23,11,17,19,21,13,5,3,2,8]), true, 'Test 99');
test(predictTheWinner([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), true, 'Test 100');
test(predictTheWinner([1,100,50,25,20,10,5,1]), true, 'Test 101');
test(predictTheWinner([3,1,5,8,9,2]), true, 'Test 102');
test(predictTheWinner([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), true, 'Test 103');
test(predictTheWinner([3,9,1,2]), true, 'Test 104');
test(predictTheWinner([1,23,45,6,78,90,12,34]), true, 'Test 105');
test(predictTheWinner([10000000, 9000000, 8000000, 7000000, 6000000, 5000000, 4000000, 3000000, 2000000, 1000000]), true, 'Test 106');
test(predictTheWinner([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150]), true, 'Test 107');
test(predictTheWinner([1, 3, 1, 5, 2, 4]), true, 'Test 108');
test(predictTheWinner([10,8,6,4,2,1,3,5,7,9]), true, 'Test 109');

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
