// Test: 3151. Special Array I
// 127 test cases from LeetCodeDataset
// Run: node test.js

const { isArraySpecial } = require("./solution");

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

console.log("\n3151. Special Array I\n");

test(isArraySpecial([100,99,100]), true, 'Test 1');
test(isArraySpecial([5,2,7,8]), true, 'Test 2');
test(isArraySpecial([20,30,40,50,60]), false, 'Test 3');
test(isArraySpecial([3,8,3,8,3,8]), true, 'Test 4');
test(isArraySpecial([2,3,4,5]), true, 'Test 5');
test(isArraySpecial([10,11,12,13]), true, 'Test 6');
test(isArraySpecial([3,6,3,6]), true, 'Test 7');
test(isArraySpecial([2,4,6,8,10]), false, 'Test 8');
test(isArraySpecial([1,3,5,7,9]), false, 'Test 9');
test(isArraySpecial([1]), true, 'Test 10');
test(isArraySpecial([2,3]), true, 'Test 11');
test(isArraySpecial([100]), true, 'Test 12');
test(isArraySpecial([10,11,10,11]), true, 'Test 13');
test(isArraySpecial([1,2,3,4,5]), true, 'Test 14');
test(isArraySpecial([4,3,1,6]), false, 'Test 15');
test(isArraySpecial([50,51,50,51,50]), true, 'Test 16');
test(isArraySpecial([15,14,13,12,11]), true, 'Test 17');
test(isArraySpecial([1,2,3,4,5,6]), true, 'Test 18');
test(isArraySpecial([2,1,4]), true, 'Test 19');
test(isArraySpecial([20,19,18,17,16]), true, 'Test 20');
test(isArraySpecial([5,8,7,2]), true, 'Test 21');
test(isArraySpecial([15]), true, 'Test 22');
test(isArraySpecial([50,51,50,51]), true, 'Test 23');
test(isArraySpecial([2,3,2,3]), true, 'Test 24');
test(isArraySpecial([1,2]), true, 'Test 25');
test(isArraySpecial([1,3,5,7]), false, 'Test 26');
test(isArraySpecial([98,99]), true, 'Test 27');
test(isArraySpecial([100,99,100,99]), true, 'Test 28');
test(isArraySpecial([5]), true, 'Test 29');
test(isArraySpecial([2,4,6,8]), false, 'Test 30');
test(isArraySpecial([7,2,7,2,7,2,7,2,7,2,7,2,7,2,7,2,7,2,7,2,7,2,7,2,7,2,7,2,7,2]), true, 'Test 31');
test(isArraySpecial([101,102,103,104,105,106,107,108,109,110]), true, 'Test 32');
test(isArraySpecial([37,38,39,40,41,42,43,44,45,46,47,48]), true, 'Test 33');
test(isArraySpecial([7, 14, 21, 28, 35, 42, 49, 56, 63, 70]), true, 'Test 34');
test(isArraySpecial([1, 1, 1, 2, 2, 2, 3, 3, 3]), false, 'Test 35');
test(isArraySpecial([1,2,3,4,5,6,7,8,9,10]), true, 'Test 36');
test(isArraySpecial([7, 2, 9, 4, 11, 6, 13, 8, 15, 10]), true, 'Test 37');
test(isArraySpecial([60, 59, 58, 57, 56, 55, 54, 53, 52, 51, 50]), true, 'Test 38');
test(isArraySpecial([5,4,3,2,1,1,2,3,4,5]), false, 'Test 39');
test(isArraySpecial([89, 90, 91, 92, 93, 94, 95, 96, 97, 98]), true, 'Test 40');
test(isArraySpecial([89,90,89,90,89,90,89,90,89,90]), true, 'Test 41');
test(isArraySpecial([25,50,25,50,25,50,25,50,25]), true, 'Test 42');
test(isArraySpecial([99, 2, 97, 4, 95, 6, 93, 8, 91, 10]), true, 'Test 43');
test(isArraySpecial([61, 62, 63, 64, 65, 66, 67, 68, 69, 70]), true, 'Test 44');
test(isArraySpecial([1, 2, 2, 3, 4, 5, 6]), false, 'Test 45');
test(isArraySpecial([2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1]), true, 'Test 46');
test(isArraySpecial([100,99,98,97,96,95,94,93,92,91]), true, 'Test 47');
test(isArraySpecial([1,4,9,16,25,36,49,64,81,100,121,144,169,196,225]), true, 'Test 48');
test(isArraySpecial([10,1,20,3,40,5,60,7,80,9]), true, 'Test 49');
test(isArraySpecial([1,1,2,2,3,3,4,4,5,5,6,6]), false, 'Test 50');
test(isArraySpecial([10,20,30,40,50,51,52,53,54,55]), false, 'Test 51');
test(isArraySpecial([1, 4, 3, 8, 5, 12, 7, 16, 9, 20]), true, 'Test 52');
test(isArraySpecial([2, 1, 4, 3, 6, 5, 8, 7]), true, 'Test 53');
test(isArraySpecial([10,20,30,40,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65]), false, 'Test 54');
test(isArraySpecial([10, 11, 12, 13, 14, 15, 16, 17, 18, 19]), true, 'Test 55');
test(isArraySpecial([13, 24, 35, 46, 57, 68, 79, 80, 91, 102]), true, 'Test 56');
test(isArraySpecial([25,26,27,28,29,30,31,32,33,34,35,36]), true, 'Test 57');
test(isArraySpecial([3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]), true, 'Test 58');
test(isArraySpecial([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29]), false, 'Test 59');
test(isArraySpecial([5,6,7,8,9,10,11,12,13,14,15]), true, 'Test 60');
test(isArraySpecial([1,3,5,7,9,11,13,15,17,19]), false, 'Test 61');
test(isArraySpecial([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]), false, 'Test 62');
test(isArraySpecial([99, 100, 101, 102, 103, 104, 105]), true, 'Test 63');
test(isArraySpecial([97,98,99,100,101,102,103,104,105,106]), true, 'Test 64');
test(isArraySpecial([100,99,98,97,96,95,94,93,92,91,90]), true, 'Test 65');
test(isArraySpecial([45, 46, 47, 48, 49, 50, 51]), true, 'Test 66');
test(isArraySpecial([1,3,5,7,9,11,13,15,17,19,21,23]), false, 'Test 67');
test(isArraySpecial([2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32]), false, 'Test 68');
test(isArraySpecial([2, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]), true, 'Test 69');
test(isArraySpecial([100, 99, 98, 97, 96, 95, 94, 93, 92, 91]), true, 'Test 70');
test(isArraySpecial([61, 62, 63, 64, 65, 66, 67, 68, 69]), true, 'Test 71');
test(isArraySpecial([5, 6, 7, 8, 9, 10, 11]), true, 'Test 72');
test(isArraySpecial([7, 6, 5, 4, 3, 2, 1, 0]), true, 'Test 73');
test(isArraySpecial([2, 4, 6, 8, 10, 12, 14, 16]), false, 'Test 74');
test(isArraySpecial([83, 84, 85, 86, 87, 88, 89, 90, 91, 92]), true, 'Test 75');
test(isArraySpecial([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), true, 'Test 76');
test(isArraySpecial([101,202,303,404,505,606,707,808,909,1010]), true, 'Test 77');
test(isArraySpecial([50,51,52,53,54,55,56,57,58,59]), true, 'Test 78');
test(isArraySpecial([100,99,98,97,96,95,94,93,92,91,90,89,88,87,86,85,84,83,82,81]), true, 'Test 79');
test(isArraySpecial([25, 26, 27, 28, 29, 30]), true, 'Test 80');
test(isArraySpecial([3,6,9,12,15,18,21,24,27,30,33,36,39,42,45,48,51,54,57,60]), true, 'Test 81');
test(isArraySpecial([101, 100, 99, 98, 97, 96, 95, 94, 93, 92]), true, 'Test 82');
test(isArraySpecial([5,4,5,4,5,4,5,4,5,4,5]), true, 'Test 83');
test(isArraySpecial([50, 49, 48, 47, 46, 45, 44, 43, 42, 41]), true, 'Test 84');
test(isArraySpecial([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22]), false, 'Test 85');
test(isArraySpecial([100, 99, 100, 99, 100, 99]), true, 'Test 86');
test(isArraySpecial([23, 22, 25, 24, 27, 26, 29, 28, 31, 30]), true, 'Test 87');
test(isArraySpecial([31, 22, 33, 24, 35, 26, 37, 28, 39, 20]), true, 'Test 88');
test(isArraySpecial([100, 99, 98, 97, 96]), true, 'Test 89');
test(isArraySpecial([47, 48, 49, 50, 51, 52, 53, 54, 55, 56]), true, 'Test 90');
test(isArraySpecial([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), true, 'Test 91');
test(isArraySpecial([1,3,5,7,9,2,4,6,8,10]), false, 'Test 92');
test(isArraySpecial([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), true, 'Test 93');
test(isArraySpecial([5, 4, 3, 2, 1]), true, 'Test 94');
test(isArraySpecial([2, 1, 2, 1, 2, 1, 2, 1, 2, 1]), true, 'Test 95');
test(isArraySpecial([97, 98, 95, 96, 93, 94]), true, 'Test 96');
test(isArraySpecial([2,1,2,1,2,1,2,1,2,1]), true, 'Test 97');
test(isArraySpecial([11,22,33,44,55,66,77,88,99,100]), true, 'Test 98');
test(isArraySpecial([1, 3, 5, 7, 9, 11, 13, 15]), false, 'Test 99');
test(isArraySpecial([99, 100, 99, 100, 99, 100, 99, 100, 99, 100]), true, 'Test 100');
test(isArraySpecial([50,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31]), true, 'Test 101');
test(isArraySpecial([100,99,100,99,100,99,100,99,100,99,100,99,100,99]), true, 'Test 102');
test(isArraySpecial([100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81, 80, 79, 78, 77, 76, 75, 74, 73, 72, 71, 70]), true, 'Test 103');
test(isArraySpecial([2, 4, 6, 8, 10, 12, 14]), false, 'Test 104');
test(isArraySpecial([49,50,49,50,49,50,49,50,49,50]), true, 'Test 105');
test(isArraySpecial([42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30]), true, 'Test 106');
test(isArraySpecial([7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]), true, 'Test 107');
test(isArraySpecial([99,2,99,2,99,2,99,2,99,2]), true, 'Test 108');
test(isArraySpecial([3,6,9,12,15,18,21,24,27,30]), true, 'Test 109');
test(isArraySpecial([1, 3, 5, 7, 9, 11, 13]), false, 'Test 110');
test(isArraySpecial([97, 98, 99, 100, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]), true, 'Test 111');
test(isArraySpecial([3,2,3,2,3,2,3,2,3,2]), true, 'Test 112');
test(isArraySpecial([2,2,2,2,2,2,2,2,2,2]), false, 'Test 113');
test(isArraySpecial([51,52,51,52,51,52,51,52,51,52,51,52]), true, 'Test 114');
test(isArraySpecial([5, 8, 3, 12, 7, 14, 9, 16, 11, 18]), true, 'Test 115');
test(isArraySpecial([7, 8, 7, 8, 7, 8, 7]), true, 'Test 116');
test(isArraySpecial([2,4,6,8,10,12,14,16,18,20,22,24]), false, 'Test 117');
test(isArraySpecial([97, 98, 99, 100, 1, 2, 3, 4]), true, 'Test 118');
test(isArraySpecial([1, 2, 3, 4, 5, 6]), true, 'Test 119');
test(isArraySpecial([82, 81, 82, 83, 82, 81, 82, 83, 82, 81]), true, 'Test 120');
test(isArraySpecial([1,1,1,1,1,1,1,1,1,1]), false, 'Test 121');
test(isArraySpecial([2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1]), true, 'Test 122');
test(isArraySpecial([2,4,6,8,10,12,14,16,18,20]), false, 'Test 123');
test(isArraySpecial([100,1,100,1,100,1,100,1,100,1,100,1,100,1,100,1,100,1,100,1]), true, 'Test 124');
test(isArraySpecial([31, 32, 33, 34, 35, 36, 37, 38, 39, 40]), true, 'Test 125');
test(isArraySpecial([50, 51, 50, 51, 50, 51, 50, 51, 50, 51, 50, 51, 50, 51, 50, 51, 50, 51]), true, 'Test 126');
test(isArraySpecial([5,8,7,6,5,4,3,2,1,0]), true, 'Test 127');

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
