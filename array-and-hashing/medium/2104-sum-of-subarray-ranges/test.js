// Test: 2104. Sum Of Subarray Ranges
// 127 test cases from LeetCodeDataset
// Run: node test.js

const { subArrayRanges } = require("./solution");

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

console.log("\n2104. Sum Of Subarray Ranges\n");

test(subArrayRanges([-1, -2, -3, -4]), 10, 'Test 1');
test(subArrayRanges([0, 0, 0, 0]), 0, 'Test 2');
test(subArrayRanges([10,9,8,7,6,5,4,3,2,1]), 165, 'Test 3');
test(subArrayRanges([1,2,3,4,5,6,7,8,9,10]), 165, 'Test 4');
test(subArrayRanges([1,-1,1,-1,1,-1]), 30, 'Test 5');
test(subArrayRanges([4,-2,-3,4,1]), 59, 'Test 6');
test(subArrayRanges([3,2,2,2,1]), 8, 'Test 7');
test(subArrayRanges([1000000000,-1000000000,1000000000,-1000000000,1000000000]), 20000000000, 'Test 8');
test(subArrayRanges([10,20,30,40,50]), 200, 'Test 9');
test(subArrayRanges([-1,-2,-3,-4,-5]), 20, 'Test 10');
test(subArrayRanges([0,0,0,0,0]), 0, 'Test 11');
test(subArrayRanges([1,2,3,4,5]), 20, 'Test 12');
test(subArrayRanges([100,100,100,100]), 0, 'Test 13');
test(subArrayRanges([1000000000, -1000000000, 1000000000, -1000000000]), 12000000000, 'Test 14');
test(subArrayRanges([1,1,1,1,1]), 0, 'Test 15');
test(subArrayRanges([10,-10,20,-20,30,-30]), 700, 'Test 16');
test(subArrayRanges([10, 20, 30, 40, 50]), 200, 'Test 17');
test(subArrayRanges([1,2,2,2,3]), 8, 'Test 18');
test(subArrayRanges([5,4,3,2,1]), 20, 'Test 19');
test(subArrayRanges([-10,-20,-30,-40,-50]), 200, 'Test 20');
test(subArrayRanges([1,3,3]), 4, 'Test 21');
test(subArrayRanges([1,2,3]), 4, 'Test 22');
test(subArrayRanges([-10,100,-20,200,-30,300]), 3580, 'Test 23');
test(subArrayRanges([5]), 0, 'Test 24');
test(subArrayRanges([-1, 0, 1, -1, 0, 1, -1, 0, 1]), 66, 'Test 25');
test(subArrayRanges([-1, 4, -2, 3, -3]), 60, 'Test 26');
test(subArrayRanges([1, 0, 1, 0, 1, 0, 1, 0, 1, 0]), 45, 'Test 27');
test(subArrayRanges([1,0,-1,2,-2,3,-3,4,-4,5,-5]), 384, 'Test 28');
test(subArrayRanges([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]), 16500, 'Test 29');
test(subArrayRanges([1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3]), 64, 'Test 30');
test(subArrayRanges([10,-10,20,-20,30,-30,40,-40,50]), 2400, 'Test 31');
test(subArrayRanges([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2]), 190, 'Test 32');
test(subArrayRanges([10, 20, 30, 25, 15, 10, 5, 2, 1, 0]), 743, 'Test 33');
test(subArrayRanges([0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0]), 105, 'Test 34');
test(subArrayRanges([15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 560, 'Test 35');
test(subArrayRanges([5,3,8,1,4]), 57, 'Test 36');
test(subArrayRanges([10, 20, 30, 25, 15, 5]), 240, 'Test 37');
test(subArrayRanges([1, -1, 2, -2, 3, -3, 4, -4]), 168, 'Test 38');
test(subArrayRanges([1000000000,-1000000000,1000000000,-1000000000]), 12000000000, 'Test 39');
test(subArrayRanges([1,-1,2,-2,3,-3,4,-4,5,-5]), 330, 'Test 40');
test(subArrayRanges([5,1,4,2,8,3]), 77, 'Test 41');
test(subArrayRanges([1,2,2,3,3,4,4,5,5]), 60, 'Test 42');
test(subArrayRanges([10,9,8,7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10]), 1540, 'Test 43');
test(subArrayRanges([100, 200, 300, 400, 500, -500, -400, -300, -200, -100]), 29000, 'Test 44');
test(subArrayRanges([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 560, 'Test 45');
test(subArrayRanges([100, 200, 300, 400, 500]), 2000, 'Test 46');
test(subArrayRanges([10, 20, 30, 40, 50, -50, -40, -30, -20, -10]), 2900, 'Test 47');
test(subArrayRanges([1000000000, -1000000000, 1000000000, -1000000000, 1000000000]), 20000000000, 'Test 48');
test(subArrayRanges([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5]), 635, 'Test 49');
test(subArrayRanges([1000000000, 1000000000, 1000000000, 1000000000]), 0, 'Test 50');
test(subArrayRanges([100, 200, 300, 400, 500, 100, 200, 300, 400, 500, 100, 200, 300, 400, 500]), 36000, 'Test 51');
test(subArrayRanges([20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0]), 1540, 'Test 52');
test(subArrayRanges([1, 1, 2, 2, 3, 3, 4, 4]), 40, 'Test 53');
test(subArrayRanges([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 0, 'Test 54');
test(subArrayRanges([100,10,1,0,1,10,100]), 1149, 'Test 55');
test(subArrayRanges([-1,0,1,-1,0,1,-1,0,1]), 66, 'Test 56');
test(subArrayRanges([9,-8,7,-6,5,-4,3,-2,1]), 444, 'Test 57');
test(subArrayRanges([1,3,5,7,9,11,13,15,17,19]), 330, 'Test 58');
test(subArrayRanges([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]), 80, 'Test 59');
test(subArrayRanges([0, 1, 0, 1, 0, 1, 0, 1]), 28, 'Test 60');
test(subArrayRanges([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9]), 480, 'Test 61');
test(subArrayRanges([10, 1, 20, 2, 30, 3, 40, 4, 50, 5]), 1655, 'Test 62');
test(subArrayRanges([1, 2, 3, 4, 5, -1, -2, -3, -4, -5]), 240, 'Test 63');
test(subArrayRanges([10, -10, 20, -20, 30, -30, 40, -40]), 1680, 'Test 64');
test(subArrayRanges([10, 20, 10, 20, 10, 20, 10]), 210, 'Test 65');
test(subArrayRanges([0, 1, 0, 1, 0, 1, 0, 1, 0, 1]), 45, 'Test 66');
test(subArrayRanges([1000000000, -1000000000, 500000000, -500000000, 250000000, -250000000]), 21000000000, 'Test 67');
test(subArrayRanges([150, 140, 130, 120, 110, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10]), 5600, 'Test 68');
test(subArrayRanges([100, 90, 80, 70, 60, 50, 40, 30, 20, 10]), 1650, 'Test 69');
test(subArrayRanges([19, 17, 15, 13, 11, 9, 7, 5, 3, 1]), 330, 'Test 70');
test(subArrayRanges([5, 8, 6, 7, 9, 1, 2, 3, 4, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 1736, 'Test 71');
test(subArrayRanges([9,7,5,3,1]), 40, 'Test 72');
test(subArrayRanges([5, 8, 3, 7, 9, 1]), 87, 'Test 73');
test(subArrayRanges([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 0, 'Test 74');
test(subArrayRanges([1000,900,800,700,600,500,400,300,200,100,0]), 22000, 'Test 75');
test(subArrayRanges([3,1,2,4,5,6,7,8,9,10]), 180, 'Test 76');
test(subArrayRanges([-1, -2, -3, -4, -5]), 20, 'Test 77');
test(subArrayRanges([10, -5, 3, 7, -2, 8]), 172, 'Test 78');
test(subArrayRanges([1, 2, 3, 4, 3, 2, 1]), 42, 'Test 79');
test(subArrayRanges([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 165, 'Test 80');
test(subArrayRanges([1, 3, 5, 7, 9, 11, 13, 15, 17, 19]), 330, 'Test 81');
test(subArrayRanges([1, 2, 3, 4, 5, 4, 3, 2, 1]), 90, 'Test 82');
test(subArrayRanges([-1, -5, -9, -3, -6]), 59, 'Test 83');
test(subArrayRanges([100, 200, 300, 400, 500, 600]), 3500, 'Test 84');
test(subArrayRanges([1,5,3,7,9,2,6,8,4,10]), 283, 'Test 85');
test(subArrayRanges([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 560, 'Test 86');
test(subArrayRanges([5, 4, 3, 2, 1]), 20, 'Test 87');
test(subArrayRanges([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 165, 'Test 88');
test(subArrayRanges([1, -1, 2, -2, 3, -3, 4, -4, 5]), 240, 'Test 89');
test(subArrayRanges([-10,-20,-30,-40,-50,-60,-70,-80,-90,-100]), 1650, 'Test 90');
test(subArrayRanges([5, 2, 9, 1, 5, 6]), 99, 'Test 91');
test(subArrayRanges([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]), 328, 'Test 92');
test(subArrayRanges([1, 3, 2, 5, 4, 7, 6, 9, 8, 11, 10, 13, 12, 15, 14]), 651, 'Test 93');
test(subArrayRanges([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 1540, 'Test 94');
test(subArrayRanges([1, 10, 2, 9, 3, 8, 4, 7, 5, 6]), 285, 'Test 95');
test(subArrayRanges([100, -100, 200, -200, 300]), 4000, 'Test 96');
test(subArrayRanges([10,20,30,40,50,60,70,80,90,100,90,80,70,60,50,40,30,20,10]), 8550, 'Test 97');
test(subArrayRanges([9,7,5,3,1,2,4,6,8,10]), 235, 'Test 98');
test(subArrayRanges([10, -20, 30, -40, 50, -60, 70, -80, 90, -100]), 6150, 'Test 99');
test(subArrayRanges([5,5,5,5,5,5,5,5,5,5,5,5,5]), 0, 'Test 100');
test(subArrayRanges([1000000000, 1000000000, -1000000000, -1000000000]), 8000000000, 'Test 101');
test(subArrayRanges([-1,2,-3,4,-5]), 70, 'Test 102');
test(subArrayRanges([1000000000, -1000000000, 500000000, -500000000, 250000000]), 15250000000, 'Test 103');
test(subArrayRanges([100,-200,300,-400,500]), 7000, 'Test 104');
test(subArrayRanges([5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5]), 220, 'Test 105');
test(subArrayRanges([5, 3, 1, 2, 4]), 27, 'Test 106');
test(subArrayRanges([5, 2, 3, 1, 4, 6, 8, 7, 9, 0]), 244, 'Test 107');
test(subArrayRanges([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39]), 2660, 'Test 108');
test(subArrayRanges([1, 2, 1, 2, 1, 2, 1, 2, 1, 2]), 45, 'Test 109');
test(subArrayRanges([5, 3, 8, 1, 4]), 57, 'Test 110');
test(subArrayRanges([5,2,4,6,1,3]), 60, 'Test 111');
test(subArrayRanges([1, -1, 1, -1, 1, -1, 1, -1]), 56, 'Test 112');
test(subArrayRanges([1, -1, 2, -2, 3, -3, 4, -4, 5, -5]), 330, 'Test 113');
test(subArrayRanges([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 1650, 'Test 114');
test(subArrayRanges([5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 0, 'Test 115');
test(subArrayRanges([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 0, 'Test 116');
test(subArrayRanges([1, -1, 1, -1, 1, -1, 1, -1, 1, -1]), 90, 'Test 117');
test(subArrayRanges([5, 3, 8, 2, 7]), 53, 'Test 118');
test(subArrayRanges([5, 1, 4, 3, 2]), 29, 'Test 119');
test(subArrayRanges([1, 2, 3, -1, -2, -3, 4, 5, 6]), 201, 'Test 120');
test(subArrayRanges([1, -2, 3, -4, 5, -6, 7, -8, 9, -10, 11, -12, 13, -14, 15]), 2135, 'Test 121');
test(subArrayRanges([-10, -20, -30, -40, -50, -60, -70, -80, -90, -100]), 1650, 'Test 122');
test(subArrayRanges([1, 2, 3, 2, 1, 0, -1, -2, -3, -2, -1, 0, 1, 2, 3]), 392, 'Test 123');
test(subArrayRanges([1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000]), 165000, 'Test 124');
test(subArrayRanges([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150]), 5600, 'Test 125');
test(subArrayRanges([7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6, -7]), 560, 'Test 126');
test(subArrayRanges([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 1540, 'Test 127');

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
