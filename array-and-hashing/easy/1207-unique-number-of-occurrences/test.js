// Test: 1207. Unique Number Of Occurrences
// 107 test cases from LeetCodeDataset
// Run: node test.js

const { uniqueOccurrences } = require("./solution");

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

console.log("\n1207. Unique Number Of Occurrences\n");

test(uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0]), true, 'Test 1');
test(uniqueOccurrences([1,2]), false, 'Test 2');
test(uniqueOccurrences([5]), true, 'Test 3');
test(uniqueOccurrences([5,5,5,5,5]), true, 'Test 4');
test(uniqueOccurrences([1,1,2,2,3,3]), false, 'Test 5');
test(uniqueOccurrences([-1,-1,-2,-2,-3,-3]), false, 'Test 6');
test(uniqueOccurrences([5,5,5,5]), true, 'Test 7');
test(uniqueOccurrences([1]), true, 'Test 8');
test(uniqueOccurrences([1000,-1000,0]), false, 'Test 9');
test(uniqueOccurrences([1,2,2,1,1,3]), true, 'Test 10');
test(uniqueOccurrences([1,1,2,2,3,3,4,4,5,5]), false, 'Test 11');
test(uniqueOccurrences([1,2,3,4,5,6,7,8,9,10]), false, 'Test 12');
test(uniqueOccurrences([0,0,0,0,0,0,0,0,0,0]), true, 'Test 13');
test(uniqueOccurrences([1,2,2,3,3,3,4,4,4,4]), true, 'Test 14');
test(uniqueOccurrences([1,2,3,4,5]), false, 'Test 15');
test(uniqueOccurrences([0,0,0,0,0]), true, 'Test 16');
test(uniqueOccurrences([1,1,1,2,2,3,4,4,4,4]), true, 'Test 17');
test(uniqueOccurrences([1,-1,1,-1,1,-1]), false, 'Test 18');
test(uniqueOccurrences([1000,-1000,1000,-1000]), false, 'Test 19');
test(uniqueOccurrences([1,2,3,2,1]), false, 'Test 20');
test(uniqueOccurrences([1000,1000,-1000,-1000]), false, 'Test 21');
test(uniqueOccurrences([-1,-2,-3,-2,-1]), false, 'Test 22');
test(uniqueOccurrences([1,1,2,2,2,3,3,3,3]), true, 'Test 23');
test(uniqueOccurrences([1,1,2,2,3,3,4,4]), false, 'Test 24');
test(uniqueOccurrences([5,5,5,5,5,6,6,6,6,7,7,7,8,8,9]), true, 'Test 25');
test(uniqueOccurrences([100,-100,100,-100,100,-100,100,-100,100,-100]), false, 'Test 26');
test(uniqueOccurrences([1,1,1,2,2,2,3,3,3,3,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6]), false, 'Test 27');
test(uniqueOccurrences([1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]), true, 'Test 28');
test(uniqueOccurrences([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), true, 'Test 29');
test(uniqueOccurrences([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), true, 'Test 30');
test(uniqueOccurrences([1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]), true, 'Test 31');
test(uniqueOccurrences([-1000,1000,-1000,1000,-1000,1000,-1000,1000,-1000,1000,-1000,1000]), false, 'Test 32');
test(uniqueOccurrences([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]), false, 'Test 33');
test(uniqueOccurrences([1,2,2,3,3,3,4,4,4,4,5,5,5,5,5,6,6,6,6,6,6]), true, 'Test 34');
test(uniqueOccurrences([10, 20, 30, 40, 50, 10, 20, 30, 40, 50, 10, 20, 30, 40, 50, 10, 20, 30, 40, 50]), false, 'Test 35');
test(uniqueOccurrences([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), true, 'Test 36');
test(uniqueOccurrences([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2]), false, 'Test 37');
test(uniqueOccurrences([5,5,5,5,5,6,6,6,7,7,8]), true, 'Test 38');
test(uniqueOccurrences([1,1,2,2,2,3,3,3,3,4,4,4,4,4,5,5,5,5,5,5,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7]), true, 'Test 39');
test(uniqueOccurrences([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]), false, 'Test 40');
test(uniqueOccurrences([10,20,30,40,50,10,20,30,40,50,10,20,30,40,50,10,20,30,40,50,10]), false, 'Test 41');
test(uniqueOccurrences([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), false, 'Test 42');
test(uniqueOccurrences([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 100, 200, 300, 400, 500]), false, 'Test 43');
test(uniqueOccurrences([999,999,999,999,999,999,999,999,999,999,999,999,999,999,999,999,999,999,999,999]), true, 'Test 44');
test(uniqueOccurrences([1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5]), true, 'Test 45');
test(uniqueOccurrences([-500, -499, -498, -497, -496, -495, -494, -493, -492, -491]), false, 'Test 46');
test(uniqueOccurrences([0,0,0,0,0,0,0,0,0,0,0,0]), true, 'Test 47');
test(uniqueOccurrences([7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7]), true, 'Test 48');
test(uniqueOccurrences([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5]), false, 'Test 49');
test(uniqueOccurrences([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), false, 'Test 50');
test(uniqueOccurrences([5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), true, 'Test 51');
test(uniqueOccurrences([0,1,1,2,2,2,3,3,3,3,4,4,4,4,4,5,5,5,5,5,6,6,6,6,6,6,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8]), false, 'Test 52');
test(uniqueOccurrences([-1,-1,-2,-2,-3,-3,-4,-4,-5,-5,-6,-6,-7,-7,-8,-8,-9,-9,-10,-10]), false, 'Test 53');
test(uniqueOccurrences([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 10]), false, 'Test 54');
test(uniqueOccurrences([1000, 1000, 1000, 999, 999, 998, 997, 996, 995, 994]), false, 'Test 55');
test(uniqueOccurrences([1,1,1,2,2,3,3,3,4,4,4,4,5,5,5,5,5,6,6,6,6,6,6,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9]), false, 'Test 56');
test(uniqueOccurrences([1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5]), true, 'Test 57');
test(uniqueOccurrences([1,2,2,3,3,3,4,4,4,4,5,5,5,5,5,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7]), true, 'Test 58');
test(uniqueOccurrences([-50,-50,-50,-50,-50,50,50,50,50,50,50,50,50,50,50]), true, 'Test 59');
test(uniqueOccurrences([0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1]), false, 'Test 60');
test(uniqueOccurrences([1,2,3,4,5,6,7,8,9,10,10,9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,9,10]), false, 'Test 61');
test(uniqueOccurrences([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), true, 'Test 62');
test(uniqueOccurrences([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]), true, 'Test 63');
test(uniqueOccurrences([1,2,2,3,3,3,4,4,4,4,5,5,5,5,5]), true, 'Test 64');
test(uniqueOccurrences([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), true, 'Test 65');
test(uniqueOccurrences([0,1,1,2,2,2,3,3,3,3,4,4,4,4,4,5,5,5,5,5,5,6,6,6,6,6,6,6]), true, 'Test 66');
test(uniqueOccurrences([1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5]), true, 'Test 67');
test(uniqueOccurrences([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), true, 'Test 68');
test(uniqueOccurrences([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,2,3,4,5,6,7,8,9,10]), false, 'Test 69');
test(uniqueOccurrences([1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), true, 'Test 70');
test(uniqueOccurrences([4,4,4,4,4,5,5,5,6,6,6,6]), true, 'Test 71');
test(uniqueOccurrences([1,1,1,1,2,2,2,3,3,4,5,6,7,8,9,10,10,10,10,10,10,10,10,10,10]), false, 'Test 72');
test(uniqueOccurrences([1,1,2,2,3,3,3,4,4,4,4,5,5,5,5,5,6,6,6,6,6,6,7,7,7,7,7,7,7]), false, 'Test 73');
test(uniqueOccurrences([-10, -20, -30, -40, -50, -50, -40, -30, -20, -10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), false, 'Test 74');
test(uniqueOccurrences([5, 5, 5, 5, 4, 4, 4, 3, 3, 2, 1]), false, 'Test 75');
test(uniqueOccurrences([10,20,20,10,30,30,30,40,40,40,40]), false, 'Test 76');
test(uniqueOccurrences([1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000, 1000, -1000]), false, 'Test 77');
test(uniqueOccurrences([999, 998, 997, 996, 995, 994, 993, 992, 991, 990, 989, 988, 987, 986, 985, 984]), false, 'Test 78');
test(uniqueOccurrences([1000, -1000, 500, -500, 0, 0, 0, 0, 0, 0, 0, 0]), false, 'Test 79');
test(uniqueOccurrences([1,1,1,1,1,2,2,2,3,3,4,5,6,7,8,9,10,10,10,10]), false, 'Test 80');
test(uniqueOccurrences([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10]), false, 'Test 81');
test(uniqueOccurrences([-5,-5,-5,-5,0,0,0,0,0,1,1,1,1,1,1]), true, 'Test 82');
test(uniqueOccurrences([1,1,1,2,2,3,3,3,4,4,4,4,5,5,5,5,5,6,6,6,6,6,6]), false, 'Test 83');
test(uniqueOccurrences([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), false, 'Test 84');
test(uniqueOccurrences([1000,-1000,1000,-1000,1000,-1000,1000,-1000,1000,-1000]), false, 'Test 85');
test(uniqueOccurrences([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), false, 'Test 86');
test(uniqueOccurrences([100,200,100,200,100,200,100,200,100,200,100,200,100,200,100,200]), false, 'Test 87');
test(uniqueOccurrences([10,10,20,20,30,30,40,40,50,50,60,60,70,70,80,80,90,90,100,100]), false, 'Test 88');
test(uniqueOccurrences([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3]), true, 'Test 89');
test(uniqueOccurrences([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), true, 'Test 90');
test(uniqueOccurrences([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), false, 'Test 91');
test(uniqueOccurrences([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]), false, 'Test 92');
test(uniqueOccurrences([10,20,10,10,30,40,40,50,50,50]), false, 'Test 93');
test(uniqueOccurrences([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]), false, 'Test 94');
test(uniqueOccurrences([10, 20, 20, 10, 30, 30, 30, 40, 40, 40, 40]), false, 'Test 95');
test(uniqueOccurrences([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), false, 'Test 96');
test(uniqueOccurrences([-1, -2, -3, -4, -5, -5, -4, -3, -2, -1, 0, 0, 0, 0, 0]), false, 'Test 97');
test(uniqueOccurrences([0,0,0,1,1,1,2,2,3,4,5,6,7,8,9]), false, 'Test 98');
test(uniqueOccurrences([1, 2, 3, 4, 5, 5, 4, 3, 2, 1, 6, 7, 8, 9, 10, 10, 9, 8, 7, 6]), false, 'Test 99');
test(uniqueOccurrences([1,2,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1]), false, 'Test 100');
test(uniqueOccurrences([1,1,1,2,2,3,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5]), true, 'Test 101');
test(uniqueOccurrences([-1000,1000,-1000,1000,-1000,1000,-1000,1000,0,0,0,0,0,0,0]), false, 'Test 102');
test(uniqueOccurrences([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), false, 'Test 103');
test(uniqueOccurrences([100,200,300,400,500,600,700,800,900,1000]), false, 'Test 104');
test(uniqueOccurrences([1,1,2,2,2,3,3,3,3,4,4,4,4,4,5,5,5,5,5,5]), true, 'Test 105');
test(uniqueOccurrences([10,20,20,10,30,40,40,40,50,50,50,50]), false, 'Test 106');
test(uniqueOccurrences([5,5,5,5,5,5,5,5,5,5]), true, 'Test 107');

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
