// Test: 309. Best Time To Buy And Sell Stock With Cooldown
// 108 test cases from LeetCodeDataset
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

console.log("\n309. Best Time To Buy And Sell Stock With Cooldown\n");

test(maxProfit([1,2,4]), 3, 'Test 1');
test(maxProfit([1,2,3,0,2,3,1,4,2,5]), 7, 'Test 2');
test(maxProfit([2,1,4,5,2,9,7]), 10, 'Test 3');
test(maxProfit([1]), 0, 'Test 4');
test(maxProfit([3,2,6,5,0,3]), 7, 'Test 5');
test(maxProfit([3,2,1]), 0, 'Test 6');
test(maxProfit([8,9,7,9,10,1,2,3,4,1,5]), 8, 'Test 7');
test(maxProfit([8,6,4,3,3,2,3,5,8,3,8,2,6]), 10, 'Test 8');
test(maxProfit([1,3,2,8,4,9]), 8, 'Test 9');
test(maxProfit([6,1,3,2,4,7]), 6, 'Test 10');
test(maxProfit([7,1,5,3,6,4]), 5, 'Test 11');
test(maxProfit([5,4,3,2,1]), 0, 'Test 12');
test(maxProfit([1,2,3,4,5]), 4, 'Test 13');
test(maxProfit([1,2,3,0,2]), 3, 'Test 14');
test(maxProfit([1,3,7,5,10,3]), 9, 'Test 15');
test(maxProfit([8,9,2,8,4,9]), 7, 'Test 16');
test(maxProfit([5,2,3,4,1,6,7,8,9,1]), 9, 'Test 17');
test(maxProfit([3,2,6,5,0,3,1,4,5,4,7,8,9,3,2,1,0,12,14,16,18,20,19,18,17,16,15,14]), 33, 'Test 18');
test(maxProfit([1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5]), 12, 'Test 19');
test(maxProfit([1,1,1,1,1,1,1,1,1,1]), 0, 'Test 20');
test(maxProfit([8,6,4,3,3,2,3,5,0,0,3,1,4,0,2,1,2,0,1,3]), 11, 'Test 21');
test(maxProfit([1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,2,1]), 12, 'Test 22');
test(maxProfit([1,2,3,0,2,3,4,5,0,6,7,8,0,9]), 21, 'Test 23');
test(maxProfit([7,1,5,3,6,4,9,2,5,8]), 12, 'Test 24');
test(maxProfit([100,50,200,10,150,80,120,20,180,100,140,50,250,200,300,150,350,300,400,250,450,400,500,350,550,500,600,450,650]), 1310, 'Test 25');
test(maxProfit([1,5,3,8,12,6,2,9,15,10,13,7,16,11]), 33, 'Test 26');
test(maxProfit([5,1,1,2,9,8,7,6,5,4,3,2,1]), 8, 'Test 27');
test(maxProfit([1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3]), 8, 'Test 28');
test(maxProfit([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10]), 19, 'Test 29');
test(maxProfit([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 19, 'Test 30');
test(maxProfit([10,1,1,6,9,10,7,12,6,7,5,18,9]), 26, 'Test 31');
test(maxProfit([1,10,1,10,1,10,1,10,1,10]), 27, 'Test 32');
test(maxProfit([10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1]), 45, 'Test 33');
test(maxProfit([10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10]), 10, 'Test 34');
test(maxProfit([1,2,3,8,7,6,5,4,3,2,1,9]), 15, 'Test 35');
test(maxProfit([1, 2, 3, 0, 2, 5, 0, 6, 1, 8]), 13, 'Test 36');
test(maxProfit([10,20,10,10,10,20,30,10,40,50,10,60,70,10,80,90,10]), 180, 'Test 37');
test(maxProfit([8,6,4,3,3,2,3,5,7,8,9,10,11,10,9,8,7,6,5,4,3,2,1]), 9, 'Test 38');
test(maxProfit([1,4,2,7,4,8,1,10,12,20,2]), 25, 'Test 39');
test(maxProfit([10,9,8,7,6,5,4,3,2,1,11]), 10, 'Test 40');
test(maxProfit([3,3,5,0,0,3,1,4]), 6, 'Test 41');
test(maxProfit([1,2,1,2,1,2,1,2,1,2]), 3, 'Test 42');
test(maxProfit([1,2,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), 5, 'Test 43');
test(maxProfit([1,5,1,3,1,7,1,9,1,11,1,13,1,15,1,17,1,19,1,21]), 60, 'Test 44');
test(maxProfit([10,9,8,7,6,5,4,3,2,1]), 0, 'Test 45');
test(maxProfit([7,1,5,3,6,4,2,8]), 11, 'Test 46');
test(maxProfit([1,1,0,0,1,1,0,0,1,1]), 2, 'Test 47');
test(maxProfit([10,5,20,1,15,8,12,2,18,10,14,5,25,20,30,15,35,30,40,25,45,40,50,35,55,50,60,45,65]), 131, 'Test 48');
test(maxProfit([1,2,3,4,1,2,1,2,3,4,1,2]), 6, 'Test 49');
test(maxProfit([8,6,4,3,3,2,3,5,0,0,1,2,3,4,5,6,7,8,9,10,11]), 14, 'Test 50');
test(maxProfit([1,2,3,0,2,3,4,5,0,6]), 11, 'Test 51');
test(maxProfit([6, 1, 3, 2, 4, 7]), 6, 'Test 52');
test(maxProfit([7,1,5,3,6,4,8,2,10,3,5]), 13, 'Test 53');
test(maxProfit([1,2,3,4,5,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5]), 15, 'Test 54');
test(maxProfit([1,2,3,0,3,2,3,0,4,2,0,1,2,3,4,5,0,0,0,0,0]), 13, 'Test 55');
test(maxProfit([1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5]), 16, 'Test 56');
test(maxProfit([1,2,5,0,1,8,0,3,4,0,5,2,3,8,9,1,2,3,4,5,0,1,2,3,4,5,6,7,8,9,10,11,12]), 36, 'Test 57');
test(maxProfit([1, 4, 2, 7, 2, 8, 3, 9, 1, 10, 1, 11, 1, 12, 1, 13]), 34, 'Test 58');
test(maxProfit([1,5,2,3,7,1,4,2,8,3,5]), 14, 'Test 59');
test(maxProfit([1,2,5,0,2,1,2,0,2,1,0,2,3,4,5,0,0,1,2,3,4,5,6,7,8,9,10]), 21, 'Test 60');
test(maxProfit([100,180,260,310,40,535,695,200,400,310,350,410,300,500,600,500,400,600,700,800,900,1000,500,1100,1200,1300]), 2455, 'Test 61');
test(maxProfit([5,2,5,4,6,9,1,3,2,8,1,7,6,3,8,9,10,5]), 20, 'Test 62');
test(maxProfit([1,2,3,4,5,0,6,7,8,9,0,1,2,3,4,5,0,6,7,8,9]), 24, 'Test 63');
test(maxProfit([7,1,5,3,6,4,5,2]), 5, 'Test 64');
test(maxProfit([1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4]), 9, 'Test 65');
test(maxProfit([3,1,4,8,7,2,5,10,9,6,11]), 20, 'Test 66');
test(maxProfit([7,1,5,3,6,4,1,5,3,6,4,1,5,3,6,4,1,5,3,6,4]), 20, 'Test 67');
test(maxProfit([1,4,2,10,7,5,15,13,9,11]), 21, 'Test 68');
test(maxProfit([10,20,10,5,2,3,10,15,20,25,30,35,40,45,50]), 58, 'Test 69');
test(maxProfit([10,14,14,14,13,10,9,8,7,6,5,10,12,13,14,15,16,17,18,19,20]), 19, 'Test 70');
test(maxProfit([100,90,80,50,25,20,10,5,3,1,2,3,4,5,6,7,8,9,10]), 9, 'Test 71');
test(maxProfit([1,2,3,4,5,6,7,8,9,10]), 9, 'Test 72');
test(maxProfit([1,2,3,0,2,1,3,4,1,5,0,6,3]), 11, 'Test 73');
test(maxProfit([8,6,4,6,8,7,6,5,4,3,2,1,0]), 4, 'Test 74');
test(maxProfit([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), 4, 'Test 75');
test(maxProfit([2,3,5,0,1,8,0,3,4,0,5,2,3,8,9,1,2,3,4,5,0,1,2,3,4,5,6,7]), 30, 'Test 76');
test(maxProfit([1,2,3,2,1,0,1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1,0]), 11, 'Test 77');
test(maxProfit([1,2,3,0,2,5,0,4,6,0,3,8,0,10]), 20, 'Test 78');
test(maxProfit([1,4,2,7,2,4,1,6,1,5,2,7,2,4,1,6,1,5,2,7,2,4,1,6,1,5,2,7,2,4,1]), 36, 'Test 79');
test(maxProfit([9,8,7,6,5,4,3,2,1,0]), 0, 'Test 80');
test(maxProfit([1,2,3,4,5,1,2,3,4,5,6,7,8,9,10]), 12, 'Test 81');
test(maxProfit([5,2,5,0,1,8,0,3,4,0,5,2,3,8,9,1,2,3,4,5,0,1,2,3,4,5,6,7,8,9]), 32, 'Test 82');
test(maxProfit([7,6,4,3,1]), 0, 'Test 83');
test(maxProfit([8,6,4,6,8,7,3,5,1,9]), 12, 'Test 84');
test(maxProfit([10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1]), 9, 'Test 85');
test(maxProfit([1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4]), 11, 'Test 86');
test(maxProfit([1,2,3,4,5,6,7,8,9,10,11,12,13]), 12, 'Test 87');
test(maxProfit([1,2,3,4,5,4,3,2,1,0,0,1,2,3,4,5,4,3,2,1,0,0,1,2,3,4,5]), 14, 'Test 88');
test(maxProfit([6,1,3,2,8,0,4,2,5,10,1,3]), 15, 'Test 89');
test(maxProfit([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 9, 'Test 90');
test(maxProfit([3, 3, 5, 0, 0, 3, 1, 4]), 6, 'Test 91');
test(maxProfit([2,1,4,5,2,9,7,10,3,12,8,15]), 22, 'Test 92');
test(maxProfit([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2]), 5, 'Test 93');
test(maxProfit([7,1,5,3,6,4,3,7,8,2,5,10,4]), 17, 'Test 94');
test(maxProfit([1,2,3,8,4,9,0,5,6,7,8,9,10,11,12]), 19, 'Test 95');
test(maxProfit([10, 1, 2, 8, 4, 9, 5, 6, 3, 10]), 15, 'Test 96');
test(maxProfit([10,5,0,2,1,7,5,3,2,8]), 13, 'Test 97');
test(maxProfit([1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]), 5, 'Test 98');
test(maxProfit([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 0, 'Test 99');
test(maxProfit([1,2,3,4,5,6,7,8,9,10,0,1,2,3,4,5,6,7,8,9,10]), 18, 'Test 100');
test(maxProfit([3, 2, 6, 5, 0, 3, 8, 1, 2, 4, 5]), 15, 'Test 101');
test(maxProfit([3,2,6,5,0,3,4,7,8,0,5,2,3,8,9,1,2,3,4,5]), 25, 'Test 102');
test(maxProfit([1,2,3,0,2,5,6,1,2,3,4,5,6]), 11, 'Test 103');
test(maxProfit([10,1,1,6,9,1,6,1,4,7]), 14, 'Test 104');
test(maxProfit([10,1,1,6,9,10,3,1,3,9,5,5,5,4,5,5,6,6,6,8]), 21, 'Test 105');
test(maxProfit([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 0, 'Test 106');
test(maxProfit([1,2,3,0,2,1,2,0,2,1,0,2,3,4,5,0,0,1,2,3,4]), 14, 'Test 107');
test(maxProfit([8, 6, 4, 3, 3, 2, 3, 5, 7, 8, 5, 3, 5, 7, 8]), 11, 'Test 108');

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
