// Test: 188. Best Time To Buy And Sell Stock Iv
// 97 test cases from LeetCodeDataset
// Run: node test.js

const { maxProfit } = require("./solution");

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

console.log("\n188. Best Time To Buy And Sell Stock Iv\n");

test(maxProfit(2, [10,22,5,75,65,80]), 87, 'Test 1');
test(maxProfit(5, [1,2,3,4,5]), 4, 'Test 2');
test(maxProfit(2, [2,4,1]), 2, 'Test 3');
test(maxProfit(1, [7,1,5,3,6,4]), 5, 'Test 4');
test(maxProfit(1, [3,3,3,3,3]), 0, 'Test 5');
test(maxProfit(1, [7,6,4,3,1]), 0, 'Test 6');
test(maxProfit(100, [10,22,5,75,65,80]), 97, 'Test 7');
test(maxProfit(5, [1,2,4,2,5,7,2,4,9,0]), 15, 'Test 8');
test(maxProfit(1, [1]), 0, 'Test 9');
test(maxProfit(10, [30,80,60,90,50,120,30,10,50,60]), 200, 'Test 10');
test(maxProfit(0, [1,2,3,4,5]), 0, 'Test 11');
test(maxProfit(2, [3,2,6,5,0,3]), 7, 'Test 12');
test(maxProfit(3, [3,3,5,0,0,3,1,4]), 8, 'Test 13');
test(maxProfit(2, [1,2,3,4,5,0,1,2,3,4,5]), 9, 'Test 14');
test(maxProfit(0, [7,6,4,3,1]), 0, 'Test 15');
test(maxProfit(3, [1,2,3,4,5]), 4, 'Test 16');
test(maxProfit(1, [3,3,5,0,0,3,1,4]), 4, 'Test 17');
test(maxProfit(4, [1,2,4,2,5,7,2,4,9,0]), 15, 'Test 18');
test(maxProfit(3, [1,2,4,2,5,7,2,4,9,0]), 15, 'Test 19');
test(maxProfit(10, [8,6,4,5,3,8,9,10,11,12,13,14,15]), 13, 'Test 20');
test(maxProfit(5, [1,2,4,2,5,7,2,4,9,0,9]), 24, 'Test 21');
test(maxProfit(5, [7,6,4,3,1,2,3,5,6,8,10,1,2,2,4,5,7,8,8,9,10]), 18, 'Test 22');
test(maxProfit(1, [1,2,3,4,5]), 4, 'Test 23');
test(maxProfit(5, [12,14,17,10,14,13,12,15]), 12, 'Test 24');
test(maxProfit(4, [30,80,50,90,100,150]), 150, 'Test 25');
test(maxProfit(5, [10,22,5,75,65,80,120,130,70,50,60,100,180]), 277, 'Test 26');
test(maxProfit(50, [1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2]), 27, 'Test 27');
test(maxProfit(2, [10,9,8,7,6,5,4,3,2,1]), 0, 'Test 28');
test(maxProfit(3, [12,14,17,10,14,13,12,15]), 12, 'Test 29');
test(maxProfit(10, [1,2,4,2,5,7,2,4,9,0,9,1,2,3,4,5,6,7,8,9]), 32, 'Test 30');
test(maxProfit(6, [1,2,3,4,5,6,7,8,9,10]), 9, 'Test 31');
test(maxProfit(3, [3,3,5,0,0,3,1,4,7,8,9,10]), 14, 'Test 32');
test(maxProfit(5, [10,22,5,75,65,80]), 97, 'Test 33');
test(maxProfit(3, [5,2,4,0,0,3,1,4,3,6,5,0,3,8,6,8,10,1,2,3,4,5]), 20, 'Test 34');
test(maxProfit(4, [8,5,12,19,21,10]), 16, 'Test 35');
test(maxProfit(3, [7,6,4,3,1,2,3,4,5,6,7,8,9,10]), 9, 'Test 36');
test(maxProfit(3, [1,2,2,4,5,7,8,8,9,10]), 9, 'Test 37');
test(maxProfit(5, [10,9,8,7,6,5,4,3,2,1]), 0, 'Test 38');
test(maxProfit(3, [1,2,3,4,5,6,7,8,9,10]), 9, 'Test 39');
test(maxProfit(5, [1,2,3,4,5,0,1,2,3,4,5,0,1,2,3,4,5]), 14, 'Test 40');
test(maxProfit(3, [1,3,2,8,4,9,10,11,10,9,10,11,10,9,10,11,10,9]), 16, 'Test 41');
test(maxProfit(2, [7,6,4,3,1]), 0, 'Test 42');
test(maxProfit(10, [2,1,2,0,1,0,1,0,1,0,1]), 5, 'Test 43');
test(maxProfit(4, [10,22,5,75,65,80]), 97, 'Test 44');
test(maxProfit(5, [31,31,27,39,59,91,92,58,84,100]), 107, 'Test 45');
test(maxProfit(3, [100, 90, 80, 70, 60, 50, 40, 30, 20, 10]), 0, 'Test 46');
test(maxProfit(1, [100,90,80,70,60,50,40,30,20,10]), 0, 'Test 47');
test(maxProfit(10, [8,9,8,10,9,10,9,10,9,10,9,10,9,10,9]), 8, 'Test 48');
test(maxProfit(4, [1,2,2,4,5,7,8,8,9,10,1,2,2,4,5,7,8,8,9,10]), 18, 'Test 49');
test(maxProfit(5, [30,10,20,40,50,15,35,60,70,25,45,80,90]), 160, 'Test 50');
test(maxProfit(5, [10,22,5,75,65,80,90,100,110,120,130,140,150]), 167, 'Test 51');
test(maxProfit(2, [3,3,5,0,0,3,1,4,7,11,10,13,12,9,15,18,17,20,22,21]), 26, 'Test 52');
test(maxProfit(3, [90,80,70,60,50,40,30,20,10,0]), 0, 'Test 53');
test(maxProfit(4, [7,6,4,3,1,2,5,6,4,3,1,2]), 6, 'Test 54');
test(maxProfit(4, [30,25,20,15,10,5]), 0, 'Test 55');
test(maxProfit(2, [3,2,1,4,3,5,3,6,4,7,8,10,6,12,14,8,15,16,18,20]), 25, 'Test 56');
test(maxProfit(6, [8,1,9,5,7,4,3,6,0,9,2,6,10,14]), 34, 'Test 57');
test(maxProfit(4, [10,1,1,10,3,5,10,9,1,3,5,6,8,9,0,2,1,2,3,4,5,6,7,8,9,10]), 34, 'Test 58');
test(maxProfit(4, [3,5,0,0,3,1,4,7,9,8,5,3,2,10,12,14,16,18,20,17,15,13,11,9,7,5,3,1]), 31, 'Test 59');
test(maxProfit(4, [1,2,3,4,5,0,1,2,3,4,5,0,1,2,3,4,5,0,1,2]), 16, 'Test 60');
test(maxProfit(5, [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 0, 'Test 61');
test(maxProfit(4, [1,2,3,4,5,6,7,8,9,10]), 9, 'Test 62');
test(maxProfit(20, [5,2,8,3,10,4,12,5,14,6,16,7,18,8,20,9,22,10,24,11]), 90, 'Test 63');
test(maxProfit(5, [1,3,2,8,4,9,5,11,6,10,7,12,8,13,9,14,10,15,11,16]), 32, 'Test 64');
test(maxProfit(2, [1,2,3,4,5]), 4, 'Test 65');
test(maxProfit(2, [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 0, 'Test 66');
test(maxProfit(1, [1000,900,800,700,600,500,400,300,200,100]), 0, 'Test 67');
test(maxProfit(4, [1,3,5,7,9,11,13,15,17,19,21,23]), 22, 'Test 68');
test(maxProfit(1, [1,1,1,1,1,1,1,1,1,1]), 0, 'Test 69');
test(maxProfit(3, [7,6,4,3,1]), 0, 'Test 70');
test(maxProfit(10, [1,2,3,4,5,6,7,8,9,10]), 9, 'Test 71');
test(maxProfit(2, [3,2,6,5,0,3,1,4,7,8,5]), 12, 'Test 72');
test(maxProfit(2, [1,3,2,8,4,9]), 12, 'Test 73');
test(maxProfit(1, [100,180,260,310,40,535,695]), 655, 'Test 74');
test(maxProfit(5, [3,3,5,0,0,3,1,4,7,9,8,5,3,2,10]), 21, 'Test 75');
test(maxProfit(2, [1,2,3,2,4,5,6,4,7,8,9,7,10,11,12,10,13,14,15,13,16,17,18,16,19,20,21,19]), 22, 'Test 76');
test(maxProfit(10, [100,300,200,400,500,800,300,600,500,700]), 1300, 'Test 77');
test(maxProfit(2, [100,180,260,310,40,535,695]), 865, 'Test 78');
test(maxProfit(3, [3,3,5,0,0,3,1,4,7,8,2]), 12, 'Test 79');
test(maxProfit(2, [1,2,4,2,5,7,2,4,9,0,9,1,2,3,5]), 17, 'Test 80');
test(maxProfit(3, [8,3,6,2,8,8,8,4,2,0,1,2,5,1,0,3,6,1,1,9]), 20, 'Test 81');
test(maxProfit(4, [3,3,5,0,0,3,1,4,7,8,5]), 12, 'Test 82');
test(maxProfit(3, [1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5]), 4, 'Test 83');
test(maxProfit(100, [1,2,3,4,5,4,3,2,1,2,3,4,5,4,3,2,1,2,3,4,5,4,3,2,1,2,3,4,5,4,3,2,1,2,3,4,5,4,3,2,1,2,3,4,5,4,3,2,1,2,3,4,5,4,3,2,1,2,3,4,5,4,3,2,1,2,3,4,5,4,3,2,1,2,3,4,5,4,3,2,1,2,3,4,5,4,3,2,1,2,3,4,5,4,3,2,1,2,3,4,5,4,3,2,1]), 52, 'Test 84');
test(maxProfit(2, [5,4,3,2,1]), 0, 'Test 85');
test(maxProfit(100, [1,2,3,4,5,6,7,8,9,10]), 9, 'Test 86');
test(maxProfit(3, [5,2,3,0,3,5,6,8,1,9]), 17, 'Test 87');
test(maxProfit(3, [1,3,2,8,4,9,5,10,11,15,13,14,16,17]), 24, 'Test 88');
test(maxProfit(5, [50,30,20,40,90,100,40,80,60,50,70,120,150,130,170]), 260, 'Test 89');
test(maxProfit(3, [10,22,5,75,65,80]), 97, 'Test 90');
test(maxProfit(4, [1,2,4,2,5,7,2,4,9,0,9]), 24, 'Test 91');
test(maxProfit(3, [3,3,5,0,0,3,1,4,7,11,10,13,12,9]), 17, 'Test 92');
test(maxProfit(1, [1,2,4,2,5,7,2,4,9,0]), 8, 'Test 93');
test(maxProfit(100, [1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3]), 68, 'Test 94');
test(maxProfit(7, [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 19, 'Test 95');
test(maxProfit(10, [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 19, 'Test 96');
test(maxProfit(5, [1,2,3,4,5,6,7,8,9,10]), 9, 'Test 97');

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
