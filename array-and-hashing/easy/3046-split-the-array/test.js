// Test: 3046. Split The Array
// 110 test cases from LeetCodeDataset
// Run: node test.js

const { isPossibleToSplit } = require("./solution");

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

console.log("\n3046. Split The Array\n");

test(isPossibleToSplit([2,2,3,3,4,4]), true, 'Test 1');
test(isPossibleToSplit([1,1,2,2,3,3,4,4]), true, 'Test 2');
test(isPossibleToSplit([1,1,1,1]), false, 'Test 3');
test(isPossibleToSplit([50,50,50,50]), false, 'Test 4');
test(isPossibleToSplit([1,1,2,2,3,4]), true, 'Test 5');
test(isPossibleToSplit([1,2,2,3,4,4]), true, 'Test 6');
test(isPossibleToSplit([1,2,2,3,3,4]), true, 'Test 7');
test(isPossibleToSplit([5,5,6,6,7,7,8,8]), true, 'Test 8');
test(isPossibleToSplit([1,1,2,3,4,5]), true, 'Test 9');
test(isPossibleToSplit([1,2,3,4,5,5]), true, 'Test 10');
test(isPossibleToSplit([5,5,6,6,7,7]), true, 'Test 11');
test(isPossibleToSplit([1,2,1,2,3,4]), true, 'Test 12');
test(isPossibleToSplit([2,2,2,2,3,3]), false, 'Test 13');
test(isPossibleToSplit([1,2,3,4,5,6]), true, 'Test 14');
test(isPossibleToSplit([10,20,10,20,30,30]), true, 'Test 15');
test(isPossibleToSplit([50,50,50,50,60,60]), false, 'Test 16');
test(isPossibleToSplit([10,10,20,20,30,30]), true, 'Test 17');
test(isPossibleToSplit([50,50,50,50,50,50]), false, 'Test 18');
test(isPossibleToSplit([1,2,3,4,5,6,7,8]), true, 'Test 19');
test(isPossibleToSplit([1,1,2,3,4,4]), true, 'Test 20');
test(isPossibleToSplit([1,2,1,2,3,3]), true, 'Test 21');
test(isPossibleToSplit([99,99,100,100,98,98]), true, 'Test 22');
test(isPossibleToSplit([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2]), false, 'Test 23');
test(isPossibleToSplit([9,9,8,8,7,7,6,6,5,5,4,4,3,3,2,2,1,1]), true, 'Test 24');
test(isPossibleToSplit([1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5]), false, 'Test 25');
test(isPossibleToSplit([1,1,1,2,2,2,2,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10]), false, 'Test 26');
test(isPossibleToSplit([42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42]), false, 'Test 27');
test(isPossibleToSplit([1,1,2,2,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9]), false, 'Test 28');
test(isPossibleToSplit([1,1,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9]), false, 'Test 29');
test(isPossibleToSplit([1,2,3,4,5,6,7,8,9,10]), true, 'Test 30');
test(isPossibleToSplit([7,8,8,9,10,10,11,11,12,12,13,13]), true, 'Test 31');
test(isPossibleToSplit([1,2,2,2,3,3,4,4,4,5,5,5,6,6,6,7,7,8,8,9,9]), false, 'Test 32');
test(isPossibleToSplit([10,10,20,20,30,30,40,40,50,50,60,60,70,70,80,80,90,90,100,100]), true, 'Test 33');
test(isPossibleToSplit([1,1,2,3,4,5,6,7,8,9,10,11]), true, 'Test 34');
test(isPossibleToSplit([1,2,3,4,5,6,1,2,3,4,5,6,7,8,9,10,7,8,9,10]), true, 'Test 35');
test(isPossibleToSplit([1,1,1,2,2,3,4,5,6,7,8,9]), false, 'Test 36');
test(isPossibleToSplit([1,2,2,3,4,4,5,5,6,6]), true, 'Test 37');
test(isPossibleToSplit([5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6]), false, 'Test 38');
test(isPossibleToSplit([1,1,2,2,2,2,3,3,4,4,5,5]), false, 'Test 39');
test(isPossibleToSplit([1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4]), false, 'Test 40');
test(isPossibleToSplit([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]), true, 'Test 41');
test(isPossibleToSplit([100,99,98,97,96,95,94,93,92,91,90,89,88,87,86,85,84,83,82,81,80,79,78,77,76,75,74,73,72,71,70,69,68,67,66,65,64,63,62,61,60,59,58,57,56,55,54,53,52,51,50,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), true, 'Test 42');
test(isPossibleToSplit([10,20,30,40,50,60,70,80,90,100,10,20,30,40,50,60,70,80,90,100]), true, 'Test 43');
test(isPossibleToSplit([1,2,3,4,5,6,7,8,9,10,10,9,8,7,6,5,4,3,2,1]), true, 'Test 44');
test(isPossibleToSplit([17,17,18,18,19,19,20,20,21,21,22,22,23,23]), true, 'Test 45');
test(isPossibleToSplit([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), true, 'Test 46');
test(isPossibleToSplit([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, 1]), false, 'Test 47');
test(isPossibleToSplit([7,7,8,8,8,8,9,9,10,10]), false, 'Test 48');
test(isPossibleToSplit([1,1,2,2,3,3,4,4,5,5,6,6]), true, 'Test 49');
test(isPossibleToSplit([1,2,3,4,4,5,5,6,6,7,7,8]), true, 'Test 50');
test(isPossibleToSplit([1,1,1,2,2,3,4,5,6,7]), false, 'Test 51');
test(isPossibleToSplit([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15]), true, 'Test 52');
test(isPossibleToSplit([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), true, 'Test 53');
test(isPossibleToSplit([1,2,2,3,3,4,4,4,5,5,6,6,7,7,8,8,9,9,10,10]), false, 'Test 54');
test(isPossibleToSplit([1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6]), false, 'Test 55');
test(isPossibleToSplit([1,2,3,4,5,6,1,2,3,4,5,6]), true, 'Test 56');
test(isPossibleToSplit([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10]), true, 'Test 57');
test(isPossibleToSplit([5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12]), true, 'Test 58');
test(isPossibleToSplit([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]), true, 'Test 59');
test(isPossibleToSplit([10,20,30,40,50,60,10,20,30,40,50,60]), true, 'Test 60');
test(isPossibleToSplit([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]), true, 'Test 61');
test(isPossibleToSplit([10,20,30,40,50,60,70,80,90,100,11,21,31,41,51,61,71,81,91,101,12,22,32,42,52,62,72,82,92,102]), true, 'Test 62');
test(isPossibleToSplit([10, 10, 20, 20, 30, 30, 40, 40, 50, 50]), true, 'Test 63');
test(isPossibleToSplit([1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12]), true, 'Test 64');
test(isPossibleToSplit([50,50,51,51,52,52,53,53,54,54,55,55,56,56,57,57,58,58,59,59,60,60]), true, 'Test 65');
test(isPossibleToSplit([2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5]), false, 'Test 66');
test(isPossibleToSplit([1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]), true, 'Test 67');
test(isPossibleToSplit([10,20,30,40,50,60,70,80,90,100,10,20,30,40,50,60]), true, 'Test 68');
test(isPossibleToSplit([5,5,5,5,6,6,7,7,8,8,9,9]), false, 'Test 69');
test(isPossibleToSplit([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9]), true, 'Test 70');
test(isPossibleToSplit([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), true, 'Test 71');
test(isPossibleToSplit([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,2,3,4,5,6,7,8,9,10]), true, 'Test 72');
test(isPossibleToSplit([1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7]), true, 'Test 73');
test(isPossibleToSplit([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6]), true, 'Test 74');
test(isPossibleToSplit([41,41,42,42,43,43,44,44,45,45,46,46,47,47,48,48,49,49,50,50]), true, 'Test 75');
test(isPossibleToSplit([42,42,43,43,44,44,45,45,46,46]), true, 'Test 76');
test(isPossibleToSplit([1,1,1,2,2,2,3,3,3,4,4,4]), false, 'Test 77');
test(isPossibleToSplit([51,51,52,52,53,53,54,54,55,55,56,56,57,57,58,58,59,59,60,60]), true, 'Test 78');
test(isPossibleToSplit([5,5,5,5,6,6,7,7]), false, 'Test 79');
test(isPossibleToSplit([9,9,9,9,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12]), false, 'Test 80');
test(isPossibleToSplit([1,2,2,3,4,4,5,6]), true, 'Test 81');
test(isPossibleToSplit([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14]), true, 'Test 82');
test(isPossibleToSplit([10,20,30,40,50,60,70,80,90,100]), true, 'Test 83');
test(isPossibleToSplit([61,61,62,62,63,63,64,64,65,65,66,66,67,67,68,68,69,69,70,70,71,71]), true, 'Test 84');
test(isPossibleToSplit([99,99,98,98,97,97,96,96,95,95,94,94,93,93,92,92,91,91,90,90,89,89,88,88,87,87,86,86,85,85]), true, 'Test 85');
test(isPossibleToSplit([11,11,12,12,13,13,14,14,15,15,16,16]), true, 'Test 86');
test(isPossibleToSplit([1,2,2,3,3,4,4,5]), true, 'Test 87');
test(isPossibleToSplit([1,2,2,3,3,4,4,5,5,6]), true, 'Test 88');
test(isPossibleToSplit([50,50,51,51,52,52,53,53,54,54,55,55,56,56]), true, 'Test 89');
test(isPossibleToSplit([1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8]), false, 'Test 90');
test(isPossibleToSplit([10,20,30,40,50,60,70,80,90,100,1,2,3,4,5,6]), true, 'Test 91');
test(isPossibleToSplit([1,2,3,4,5,6,7,8,9,10,10,9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,9,10]), false, 'Test 92');
test(isPossibleToSplit([1,1,2,2,2,3,3,4,4,5]), false, 'Test 93');
test(isPossibleToSplit([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]), true, 'Test 94');
test(isPossibleToSplit([10,20,20,30,30,30,40,40,50,50]), false, 'Test 95');
test(isPossibleToSplit([1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14]), true, 'Test 96');
test(isPossibleToSplit([5,5,5,5,6,6,6,6]), false, 'Test 97');
test(isPossibleToSplit([5,5,6,6,7,7,8,8,9,9,10,10]), true, 'Test 98');
test(isPossibleToSplit([6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]), true, 'Test 99');
test(isPossibleToSplit([1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8]), false, 'Test 100');
test(isPossibleToSplit([32,32,33,33,34,34,35,35,36,36,37,37,38,38,39,39,40,40]), true, 'Test 101');
test(isPossibleToSplit([5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7]), false, 'Test 102');
test(isPossibleToSplit([7,7,8,8,9,9,10,10,11,11,12,12]), true, 'Test 103');
test(isPossibleToSplit([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11]), true, 'Test 104');
test(isPossibleToSplit([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16]), true, 'Test 105');
test(isPossibleToSplit([99,99,100,100,98,98,97,97,96,96]), true, 'Test 106');
test(isPossibleToSplit([24,24,25,25,26,26,27,27,28,28,29,29,30,30,31,31]), true, 'Test 107');
test(isPossibleToSplit([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]), true, 'Test 108');
test(isPossibleToSplit([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2]), true, 'Test 109');
test(isPossibleToSplit([5,5,6,6,7,7,8,8,9,9]), true, 'Test 110');

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
