// Test: 2465. Number Of Distinct Averages
// 113 test cases from LeetCodeDataset
// Run: node test.js

const { distinctAverages } = require("./solution");

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

console.log("\n2465. Number Of Distinct Averages\n");

test(distinctAverages([10,20,30,40,50,60]), 1, 'Test 1');
test(distinctAverages([50,50,50,50]), 1, 'Test 2');
test(distinctAverages([0,0,0,0,0,0,0,0]), 1, 'Test 3');
test(distinctAverages([1,2,3,4]), 1, 'Test 4');
test(distinctAverages([0,100,50,50,25,75]), 1, 'Test 5');
test(distinctAverages([1,100]), 1, 'Test 6');
test(distinctAverages([4,1,4,0,3,5]), 2, 'Test 7');
test(distinctAverages([5,5,5,5]), 1, 'Test 8');
test(distinctAverages([6,6,6,6,6,6,6,6]), 1, 'Test 9');
test(distinctAverages([99,1,98,2,97,3]), 1, 'Test 10');
test(distinctAverages([0,0,0,0]), 1, 'Test 11');
test(distinctAverages([0,0,0,0,0,0]), 1, 'Test 12');
test(distinctAverages([5,5,5,5,5,5]), 1, 'Test 13');
test(distinctAverages([6,6,6,6,6,6]), 1, 'Test 14');
test(distinctAverages([99,1,98,2,97,3,96,4]), 1, 'Test 15');
test(distinctAverages([1,3,2,4,6,5]), 1, 'Test 16');
test(distinctAverages([1,2,3,4,5,6,7,8]), 1, 'Test 17');
test(distinctAverages([100,0,50,50,25,75,20,80]), 1, 'Test 18');
test(distinctAverages([2,2,2,2,2,2,2,2]), 1, 'Test 19');
test(distinctAverages([0,100,50,50]), 1, 'Test 20');
test(distinctAverages([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31]), 1, 'Test 21');
test(distinctAverages([42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42]), 1, 'Test 22');
test(distinctAverages([1,2,3,4,5,6,7,8,9,10]), 1, 'Test 23');
test(distinctAverages([10, 20, 30, 40, 50, 60]), 1, 'Test 24');
test(distinctAverages([1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3]), 1, 'Test 25');
test(distinctAverages([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]), 1, 'Test 26');
test(distinctAverages([50,50,50,50,50,50,50,50]), 1, 'Test 27');
test(distinctAverages([99,98,97,96,95,94,93,92,91,90]), 1, 'Test 28');
test(distinctAverages([100, 99, 98, 97, 96, 95, 94, 93]), 1, 'Test 29');
test(distinctAverages([0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6]), 6, 'Test 30');
test(distinctAverages([99, 1, 98, 2, 97, 3, 96, 4, 95, 5, 94, 6]), 1, 'Test 31');
test(distinctAverages([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]), 1, 'Test 32');
test(distinctAverages([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 1, 2, 3, 4, 5, 6, 7, 8, 9]), 9, 'Test 33');
test(distinctAverages([1, 100, 2, 99, 3, 98, 4, 97]), 1, 'Test 34');
test(distinctAverages([10,10,20,20,30,30,40,40,50,50]), 1, 'Test 35');
test(distinctAverages([25, 75, 20, 80, 15, 85, 10, 90, 5, 95]), 1, 'Test 36');
test(distinctAverages([33, 33, 33, 67, 67, 67]), 1, 'Test 37');
test(distinctAverages([12, 34, 56, 78, 90, 24, 46, 68]), 1, 'Test 38');
test(distinctAverages([0, 100, 1, 99, 2, 98, 3, 97, 4, 96, 5, 95, 6, 94, 7, 93]), 1, 'Test 39');
test(distinctAverages([5, 8, 13, 21, 34, 55, 89, 144]), 4, 'Test 40');
test(distinctAverages([1, 1, 1, 99, 99, 99, 2, 2, 2, 98, 98, 98]), 1, 'Test 41');
test(distinctAverages([95, 85, 75, 65, 55, 45, 35, 25, 15, 5, 105, 94, 84, 74, 64, 54, 44, 34]), 2, 'Test 42');
test(distinctAverages([0,1,2,99,98,97,96,95]), 2, 'Test 43');
test(distinctAverages([50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50]), 1, 'Test 44');
test(distinctAverages([100,1,99,2,98,3,97,4,96,5]), 1, 'Test 45');
test(distinctAverages([1, 99, 2, 98, 3, 97, 4, 96, 5, 95]), 1, 'Test 46');
test(distinctAverages([1,1,1,1,100,100,100,100]), 1, 'Test 47');
test(distinctAverages([23, 21, 19, 17, 15, 13, 11, 9, 7, 5, 3, 1]), 1, 'Test 48');
test(distinctAverages([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 1, 'Test 49');
test(distinctAverages([88, 92, 77, 65, 99, 100, 42, 33, 21, 11, 55, 66, 78, 89, 90, 91]), 7, 'Test 50');
test(distinctAverages([1,3,5,7,9,11,13,15,17,19]), 1, 'Test 51');
test(distinctAverages([1,2,3,4,5,5,4,3,2,1]), 1, 'Test 52');
test(distinctAverages([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]), 1, 'Test 53');
test(distinctAverages([5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8]), 1, 'Test 54');
test(distinctAverages([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9]), 1, 'Test 55');
test(distinctAverages([1, 2, 3, 3, 2, 1, 4, 5, 5, 4, 6, 7, 7, 6, 8, 9, 9, 8]), 1, 'Test 56');
test(distinctAverages([5, 25, 15, 35, 45, 55, 65, 75, 85, 95, 105, 115]), 1, 'Test 57');
test(distinctAverages([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]), 1, 'Test 58');
test(distinctAverages([40, 20, 60, 80, 100, 0, 50, 30, 90, 70]), 2, 'Test 59');
test(distinctAverages([100, 0, 100, 0, 100, 0, 100, 0]), 1, 'Test 60');
test(distinctAverages([100, 99, 98, 97, 96, 95, 94, 93, 92, 91]), 1, 'Test 61');
test(distinctAverages([1, 1, 1, 2, 2, 3, 3, 3, 4, 4, 5, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 10]), 2, 'Test 62');
test(distinctAverages([50,40,30,20,10,0,100,90,80,70,60,50,40,30,20,10,15,35,55,75]), 4, 'Test 63');
test(distinctAverages([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 1, 'Test 64');
test(distinctAverages([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6]), 1, 'Test 65');
test(distinctAverages([100, 0, 50, 50, 25, 75, 20, 80]), 1, 'Test 66');
test(distinctAverages([1, 100, 2, 99, 3, 98, 4, 97, 5, 96]), 1, 'Test 67');
test(distinctAverages([23, 45, 12, 67, 89, 34, 56, 78, 90, 10]), 2, 'Test 68');
test(distinctAverages([99, 98, 97, 96, 95, 94, 93, 92, 91, 90]), 1, 'Test 69');
test(distinctAverages([99, 88, 77, 66, 55, 44, 33, 22, 11, 0]), 1, 'Test 70');
test(distinctAverages([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]), 1, 'Test 71');
test(distinctAverages([2,3,1,4,6,5,8,7]), 1, 'Test 72');
test(distinctAverages([50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50]), 1, 'Test 73');
test(distinctAverages([10,20,30,40,50,60,70,80,90,100]), 1, 'Test 74');
test(distinctAverages([5,5,5,5,5,5,5,5,5,5,5,5]), 1, 'Test 75');
test(distinctAverages([8, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45]), 2, 'Test 76');
test(distinctAverages([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 1, 'Test 77');
test(distinctAverages([100, 1, 99, 2, 98, 3, 97, 4, 96, 5, 95, 6, 94, 7, 93, 8, 92, 9, 91, 10, 90, 11, 89, 12, 88, 13, 87, 14, 86]), 1, 'Test 78');
test(distinctAverages([8, 8, 8, 8, 8, 8, 8, 8, 8, 8]), 1, 'Test 79');
test(distinctAverages([1, 99, 2, 98, 3, 97, 4, 96, 5, 95, 6, 94, 7, 93, 8, 92, 9, 91, 10, 90]), 1, 'Test 80');
test(distinctAverages([50, 40, 30, 20, 10, 0, 100, 90, 80, 70, 60, 55]), 2, 'Test 81');
test(distinctAverages([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]), 1, 'Test 82');
test(distinctAverages([99, 98, 97, 96, 95, 94, 93, 92]), 1, 'Test 83');
test(distinctAverages([50,1,50,2,50,3,50,4]), 4, 'Test 84');
test(distinctAverages([100, 1, 99, 2, 98, 3, 97, 4, 96, 5, 95, 6, 94, 7, 93, 8]), 1, 'Test 85');
test(distinctAverages([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 1, 'Test 86');
test(distinctAverages([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 1, 'Test 87');
test(distinctAverages([50, 50, 50, 50, 50, 50, 50, 50, 50, 50]), 1, 'Test 88');
test(distinctAverages([1, 99, 2, 98, 3, 97, 4, 96]), 1, 'Test 89');
test(distinctAverages([1,100,2,99,3,98,4,97,5,96]), 1, 'Test 90');
test(distinctAverages([99, 1, 98, 2, 97, 3, 96, 4]), 1, 'Test 91');
test(distinctAverages([9, 2, 5, 7, 3, 8, 10, 1]), 2, 'Test 92');
test(distinctAverages([1, 1, 1, 1, 100, 100, 100, 100, 50, 50, 50, 50]), 2, 'Test 93');
test(distinctAverages([49, 51, 24, 76, 38, 62, 19, 81, 9, 90]), 2, 'Test 94');
test(distinctAverages([8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9]), 1, 'Test 95');
test(distinctAverages([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7]), 1, 'Test 96');
test(distinctAverages([0, 100, 50, 51, 49, 52, 48, 53, 47, 54]), 2, 'Test 97');
test(distinctAverages([50,40,30,20,10,0,100,90,80,70,60,50,40,30,20,10]), 3, 'Test 98');
test(distinctAverages([25, 25, 25, 25, 26, 26, 26, 26, 27, 27, 27, 27, 28, 28, 28, 28]), 1, 'Test 99');
test(distinctAverages([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]), 1, 'Test 100');
test(distinctAverages([2,2,4,4,6,6,8,8,10,10]), 1, 'Test 101');
test(distinctAverages([100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89]), 1, 'Test 102');
test(distinctAverages([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 30]), 2, 'Test 103');
test(distinctAverages([50, 20, 30, 10, 40, 60, 80, 70]), 1, 'Test 104');
test(distinctAverages([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 1, 'Test 105');
test(distinctAverages([5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 1, 'Test 106');
test(distinctAverages([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]), 1, 'Test 107');
test(distinctAverages([1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10]), 1, 'Test 108');
test(distinctAverages([100, 0, 100, 0, 100, 0, 100, 0, 100, 0, 100, 0, 100, 0, 100, 0, 100, 0, 100, 0]), 1, 'Test 109');
test(distinctAverages([50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50]), 1, 'Test 110');
test(distinctAverages([42, 42, 42, 42, 42, 42, 42, 42, 42, 42]), 1, 'Test 111');
test(distinctAverages([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23]), 1, 'Test 112');
test(distinctAverages([10, 20, 30, 40, 50, 60, 70, 80]), 1, 'Test 113');

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
