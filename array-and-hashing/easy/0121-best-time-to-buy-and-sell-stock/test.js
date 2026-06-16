// Test: 121. Best Time To Buy And Sell Stock
// 99 test cases from LeetCodeDataset
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

console.log("\n121. Best Time To Buy And Sell Stock\n");

test(maxProfit([10,9,8,2]), 0, 'Test 1');
test(maxProfit([1]), 0, 'Test 2');
test(maxProfit([2,1,2,1,0,1,2]), 2, 'Test 3');
test(maxProfit([2,1]), 0, 'Test 4');
test(maxProfit([7,6,4,3,1]), 0, 'Test 5');
test(maxProfit([3,3,5,0,0,3,1,4]), 4, 'Test 6');
test(maxProfit([7,1,5,3,6,4]), 5, 'Test 7');
test(maxProfit([1,2,3,4,5]), 4, 'Test 8');
test(maxProfit([1,2]), 1, 'Test 9');
test(maxProfit([8,9,7,9,8,7,9,10,7,9,8,10,11,10,12]), 5, 'Test 10');
test(maxProfit([1,2,3,2,1,4,3,2,1,5,4,3,2,1,6]), 5, 'Test 11');
test(maxProfit([7,1,5,3,6,4,1,2,3,8,2,10]), 9, 'Test 12');
test(maxProfit([1,1,1,1,1,1,1,1,1,1]), 0, 'Test 13');
test(maxProfit([8,6,7,3,3,5,1,0,6,5]), 6, 'Test 14');
test(maxProfit([1,5,3,8,12,10,9,15,18,5,7]), 17, 'Test 15');
test(maxProfit([3,2,6,5,0,3,1,5,3,7,10,4,8,12,6,14,2,18,9,20,1,22,10,24,5,26,11,28,12,30,13,32,14,34,15,36,16,38,17,40]), 40, 'Test 16');
test(maxProfit([8,3,6,2,8,8,8,4,2,0,9,5,7,6,2]), 9, 'Test 17');
test(maxProfit([4,1,2,3,5,6,1,2,3,1,5,6,7,8,1,2,3,1]), 7, 'Test 18');
test(maxProfit([897,456,680,509,535,695,890,456,509,535,695,890,456,509,535,695]), 434, 'Test 19');
test(maxProfit([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10]), 10, 'Test 20');
test(maxProfit([100, 180, 260, 40, 310, 535, 695, 10, 1]), 655, 'Test 21');
test(maxProfit([1,2,3,4,5,6,7,8,9,10,10,9,8,7,6,5,4,3,2,1,0,0,1,2,3,4,5,6,7,8,9,10]), 10, 'Test 22');
test(maxProfit([100,90,80,50,20,10]), 0, 'Test 23');
test(maxProfit([1,2,3,2,3,4,2,3,4,5,3,4,5,6,4,5,6,7,5,6,7,8]), 7, 'Test 24');
test(maxProfit([3,2,6,5,0,3]), 4, 'Test 25');
test(maxProfit([100,180,260,40,310,535,695]), 655, 'Test 26');
test(maxProfit([1,9,2,8,3,7,4,6,5,10]), 9, 'Test 27');
test(maxProfit([1,9,6,9,1,7,1,1,5,9,9,9,8,9,8,9,10,9,8,9,10]), 9, 'Test 28');
test(maxProfit([1,2,4,2,5,7,2,4,9,0]), 8, 'Test 29');
test(maxProfit([10,9,8,7,6,5,4,3,2,1,0]), 0, 'Test 30');
test(maxProfit([8,6,4,6,8,9,3,4,5,1]), 5, 'Test 31');
test(maxProfit([7, 1, 5, 3, 6, 4, 10, 2, 8, 15]), 14, 'Test 32');
test(maxProfit([5,2,3,4,1,6,8,7,8,9]), 8, 'Test 33');
test(maxProfit([100,180,260,310,40,535,695]), 655, 'Test 34');
test(maxProfit([1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10]), 9, 'Test 35');
test(maxProfit([10,10,10,5,5,5,10,10,15,15]), 10, 'Test 36');
test(maxProfit([8, 5, 12, 9, 19, 1, 7, 17, 3, 18]), 17, 'Test 37');
test(maxProfit([30,15,50,10,60,35,100,40,90,50,120,60,130,70,140,80,150,90]), 140, 'Test 38');
test(maxProfit([10,9,8,7,6,5,4,3,2,1]), 0, 'Test 39');
test(maxProfit([50,20,30,10,50,20,30,10,50,20,30,10,50,20,30,10,50,20,30,10,50]), 40, 'Test 40');
test(maxProfit([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2]), 1, 'Test 41');
test(maxProfit([8,4,6,2,3,10,14,11,13]), 12, 'Test 42');
test(maxProfit([100,90,80,70,60,50,40,30,20,10]), 0, 'Test 43');
test(maxProfit([1,5,3,7,10,4,8,12,6,14,2,18,9,20,1,22,10,24,5,26,11,28,12,30,13,32,14,34,15,36]), 35, 'Test 44');
test(maxProfit([5,4,3,2,1,2,3,4,5,6,7,8,9,10]), 9, 'Test 45');
test(maxProfit([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), 0, 'Test 46');
test(maxProfit([7,1,5,3,6,4,8,9,2,1,5,6,3,10]), 9, 'Test 47');
test(maxProfit([10,20,10,20,10,20,10,20,10,20,10,20,10,20]), 10, 'Test 48');
test(maxProfit([1,3,2,5,7,11,8,12,14,15]), 14, 'Test 49');
test(maxProfit([1,2,3,2,1,2,3,2,1,2,3,2,1,2,3]), 2, 'Test 50');
test(maxProfit([10,1,1,6,9,1,2,1,8,1,2,3,4,5,6,7,8,9,10]), 9, 'Test 51');
test(maxProfit([1, 5, 3, 8, 12, 7, 9, 2, 3, 15, 10]), 14, 'Test 52');
test(maxProfit([8,6,7,8,4,9,1,9,4,5]), 8, 'Test 53');
test(maxProfit([1,2,3,4,5,4,3,2,1,2,3,4,5,6,7,8,9,10]), 9, 'Test 54');
test(maxProfit([1,2,1,3,1,2,3,1,2,3,4]), 3, 'Test 55');
test(maxProfit([5,2,3,0,3,1,6,2,8,3,4]), 8, 'Test 56');
test(maxProfit([7,1,5,3,6,4,10,2,3,4,5,6,7,8,9,1]), 9, 'Test 57');
test(maxProfit([7,1,5,3,6,4,1,2,3,4,5,6,7,8,9,10]), 9, 'Test 58');
test(maxProfit([1,5,3,6,7,10,1,2,3,4,5,6,7,8,9,10]), 9, 'Test 59');
test(maxProfit([10,1,1,1,10,1,1,1,10,1,1,1,10,1,1,1]), 9, 'Test 60');
test(maxProfit([1,9,1,9,1,9,1,9,1,9]), 8, 'Test 61');
test(maxProfit([100,200,300,100,150,200,250,100,150,200,250,300,100,150,200,250]), 200, 'Test 62');
test(maxProfit([1,3,2,8,4,9,3,5,2,10,1,3,7,2,4,9,1,6,3,5]), 9, 'Test 63');
test(maxProfit([1,9,18,2,7,21,12,17,6,19]), 20, 'Test 64');
test(maxProfit([1,3,1,3,1,3,1,3,1,3,1,3,1,3,1]), 2, 'Test 65');
test(maxProfit([10,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1]), 9, 'Test 66');
test(maxProfit([5,11,3,50,60,90,70,80,65,30,55,95]), 92, 'Test 67');
test(maxProfit([1,2,3,4,5,6,7,8,9,10]), 9, 'Test 68');
test(maxProfit([8,6,4,3,3,5,10,0,6,2,9,10,4,7,1]), 10, 'Test 69');
test(maxProfit([1,2,3,4,1,2,3,4,5,6,1,2,3,4,5]), 5, 'Test 70');
test(maxProfit([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 0, 'Test 71');
test(maxProfit([2,2,5,11,1,3,4,11,1,2,11,3,4]), 10, 'Test 72');
test(maxProfit([1,7,2,9,4,6,3,8,5,10]), 9, 'Test 73');
test(maxProfit([9,8,7,6,5,4,3,2,1,0]), 0, 'Test 74');
test(maxProfit([1,2,2,2,2,2,2,2,2,2]), 1, 'Test 75');
test(maxProfit([10,22,5,75,65,80]), 75, 'Test 76');
test(maxProfit([1,2,4,2,5,7,2,4,9,0,9]), 9, 'Test 77');
test(maxProfit([1,9,6,9,2,8,7,1,9,4,9,2,3,8,1,6,5,8,1,1,5]), 8, 'Test 78');
test(maxProfit([5,3,6,7,2,8,1,4,9,10,1,11]), 10, 'Test 79');
test(maxProfit([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 0, 'Test 80');
test(maxProfit([1,2,3,2,4,5,4,3,2,1,9,8,7,6,5,4,3,2,1]), 8, 'Test 81');
test(maxProfit([1,9,6,9,1,7,1,1,5,9,9,9,8]), 8, 'Test 82');
test(maxProfit([1,9,6,9,1,7,1,1,5,9,9,9]), 8, 'Test 83');
test(maxProfit([5,2,6,1,9,12,9,12,12,1,5,3,3,5,2,8,10,9,1,2]), 11, 'Test 84');
test(maxProfit([1,3,2,8,4,9,3,5,10,6,2,3,1,5,20,3,1,2,3,10]), 19, 'Test 85');
test(maxProfit([10,7,5,8,11,9]), 6, 'Test 86');
test(maxProfit([1,5,3,7,10,4,8,12,6,14,2,18,9,20,1,22,10,24,5,26,11,28,12,30,13,32]), 31, 'Test 87');
test(maxProfit([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 9, 'Test 88');
test(maxProfit([3, 3, 5, 0, 0, 3, 1, 4]), 4, 'Test 89');
test(maxProfit([1,2,4,2,5,7,2,4,9,0,1,2,4,2,5,7,2,4,9,0,1,2,4,2,5,7,2,4,9,0]), 9, 'Test 90');
test(maxProfit([1,100,1,100,1,100,1,100,1,100,1,100,1,100,1,100,1,100,1,100]), 99, 'Test 91');
test(maxProfit([1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3]), 3, 'Test 92');
test(maxProfit([100,90,80,70,60,50,40,30,20,10,1,2,3,4,5,6,7,8,9,10]), 9, 'Test 93');
test(maxProfit([5,9,1,6,2,8,3,7,4,10]), 9, 'Test 94');
test(maxProfit([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 0, 'Test 95');
test(maxProfit([10,1,1,10,1,1,10,1,1,10,1,1,10,1,1,10,1,1,10,1,1,10,1,1]), 9, 'Test 96');
test(maxProfit([310,310,275,275,260,260,260,230,230,230]), 0, 'Test 97');
test(maxProfit([1, 2, 4, 2, 5, 7, 2, 4, 9, 0]), 8, 'Test 98');
test(maxProfit([1, 3, 2, 4, 7, 5, 8, 11, 9, 13]), 12, 'Test 99');

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
