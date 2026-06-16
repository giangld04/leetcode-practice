// Test: 747. Largest Number At Least Twice Of Others
// 143 test cases from LeetCodeDataset
// Run: node test.js

const { dominantIndex } = require("./solution");

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

console.log("\n747. Largest Number At Least Twice Of Others\n");

test(dominantIndex([1,2,3,6]), 3, 'Test 1');
test(dominantIndex([3,6,1,0]), 1, 'Test 2');
test(dominantIndex([7,1,3,2]), 0, 'Test 3');
test(dominantIndex([10,1,2,3]), 0, 'Test 4');
test(dominantIndex([100,1,2,3]), 0, 'Test 5');
test(dominantIndex([7,1,3,5]), -1, 'Test 6');
test(dominantIndex([1,100,2,3]), 1, 'Test 7');
test(dominantIndex([1]), Error: not enough values to unpack [expected 2, got 1], 'Test 8');
test(dominantIndex([8,8,8,8,8,16]), 5, 'Test 9');
test(dominantIndex([5,0,3,2]), -1, 'Test 10');
test(dominantIndex([1,2,3,4]), -1, 'Test 11');
test(dominantIndex([5,8,3,4]), -1, 'Test 12');
test(dominantIndex([1,1,1,7,1,1,1]), 3, 'Test 13');
test(dominantIndex([1,1,1,1,1,1,7]), 6, 'Test 14');
test(dominantIndex([5,3,1,4]), -1, 'Test 15');
test(dominantIndex([50,25,12,6,3,1]), 0, 'Test 16');
test(dominantIndex([1,20,3,4]), 1, 'Test 17');
test(dominantIndex([1,1,1,100]), 3, 'Test 18');
test(dominantIndex([10,20]), 1, 'Test 19');
test(dominantIndex([10,5,3,1]), 0, 'Test 20');
test(dominantIndex([1,20,3,1]), 1, 'Test 21');
test(dominantIndex([1,0,0,0,0]), 0, 'Test 22');
test(dominantIndex([0,0,0,1]), 3, 'Test 23');
test(dominantIndex([8,16,32,4]), 2, 'Test 24');
test(dominantIndex([1,2,0,4]), 3, 'Test 25');
test(dominantIndex([2,1,3,6]), 3, 'Test 26');
test(dominantIndex([10,5,2]), 0, 'Test 27');
test(dominantIndex([7,0,3,10]), -1, 'Test 28');
test(dominantIndex([7,1,1,1,1,1,1]), 0, 'Test 29');
test(dominantIndex([1,10,2,3]), 1, 'Test 30');
test(dominantIndex([8,1,3,4]), 0, 'Test 31');
test(dominantIndex([1,2,0]), 1, 'Test 32');
test(dominantIndex([81, 27, 9, 3, 1]), 0, 'Test 33');
test(dominantIndex([100,25,50,75,0,100]), -1, 'Test 34');
test(dominantIndex([2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072, 262144, 524288, 1048576]), 19, 'Test 35');
test(dominantIndex([7, 14, 21, 28, 35, 42, 49, 56, 63, 70]), -1, 'Test 36');
test(dominantIndex([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2]), 79, 'Test 37');
test(dominantIndex([5, 50, 500, 5000, 50000]), 4, 'Test 38');
test(dominantIndex([30, 15, 7, 4, 2]), 0, 'Test 39');
test(dominantIndex([8,4,4,2,1]), 0, 'Test 40');
test(dominantIndex([50,25,10,5,1]), 0, 'Test 41');
test(dominantIndex([42,21,7,3,1]), 0, 'Test 42');
test(dominantIndex([50, 25, 10, 5, 1, 0]), 0, 'Test 43');
test(dominantIndex([10,20,30,40,50]), -1, 'Test 44');
test(dominantIndex([60,30,10,5,2]), 0, 'Test 45');
test(dominantIndex([30,15,9,4,2]), 0, 'Test 46');
test(dominantIndex([36,18,9,4,2]), 0, 'Test 47');
test(dominantIndex([3,6,9,12,15,18,21,24,27,30,60]), 10, 'Test 48');
test(dominantIndex([100,99,98,97,96,95,94,93,92,91,90,89,88,87,86,85,84,83,82,81,80,79,78,77,76,75,74,73,72,71,70,69,68,67,66,65,64,63,62,61,60,59,58,57,56,55,54,53,52,51,50,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), -1, 'Test 49');
test(dominantIndex([42, 21, 10, 5, 2]), 0, 'Test 50');
test(dominantIndex([100,99,98,97,96,95,94,93,92,91,90,89,88,87,86,85,84,83,82,81,80,79,78,77,76,75,74,73,72,71,70,69,68,67,66,65,64,63,62,61,60]), -1, 'Test 51');
test(dominantIndex([50,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), -1, 'Test 52');
test(dominantIndex([1, 2, 4, 8, 16, 32, 64]), 6, 'Test 53');
test(dominantIndex([100, 1, 2, 3, 4, 5, 6, 7, 8, 9]), 0, 'Test 54');
test(dominantIndex([100,50,25,12,6,3,1]), 0, 'Test 55');
test(dominantIndex([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49]), -1, 'Test 56');
test(dominantIndex([100, 99, 98, 97, 96, 95]), -1, 'Test 57');
test(dominantIndex([49,24,12,6,3,1]), 0, 'Test 58');
test(dominantIndex([85,84,83,82,81,80]), -1, 'Test 59');
test(dominantIndex([10,10,10,10,20]), 4, 'Test 60');
test(dominantIndex([25, 24, 23, 22, 21]), -1, 'Test 61');
test(dominantIndex([99,49,33,24,19,16,14,12,11,10,9,8,7,6,5,4,3,2,1]), 0, 'Test 62');
test(dominantIndex([3, 6, 9, 12, 15, 18, 21, 24, 27, 30]), -1, 'Test 63');
test(dominantIndex([20,10,5,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 0, 'Test 64');
test(dominantIndex([30,20,10,5,2,1]), -1, 'Test 65');
test(dominantIndex([55,27,13,6,3]), 0, 'Test 66');
test(dominantIndex([80, 40, 20, 10, 5]), 0, 'Test 67');
test(dominantIndex([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]), -1, 'Test 68');
test(dominantIndex([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2]), 44, 'Test 69');
test(dominantIndex([5,4,3,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), -1, 'Test 70');
test(dominantIndex([99, 33, 22, 11, 6, 5, 4, 3, 2, 1]), 0, 'Test 71');
test(dominantIndex([20,10,5,1]), 0, 'Test 72');
test(dominantIndex([8, 7, 6, 5, 4, 3, 2, 1]), -1, 'Test 73');
test(dominantIndex([98,49,1,1,1,1,1,1,1,1]), 0, 'Test 74');
test(dominantIndex([50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), -1, 'Test 75');
test(dominantIndex([48,24,12,6,3]), 0, 'Test 76');
test(dominantIndex([2,4,8,16,32,64,128,256]), 7, 'Test 77');
test(dominantIndex([100,99,98,97,96,95,94,93,92,91,90]), -1, 'Test 78');
test(dominantIndex([100,50,25,10,5]), 0, 'Test 79');
test(dominantIndex([50, 25, 12, 6, 3, 1]), 0, 'Test 80');
test(dominantIndex([49, 24, 12, 6, 3, 1]), 0, 'Test 81');
test(dominantIndex([100, 50, 25, 12, 6, 3, 1]), 0, 'Test 82');
test(dominantIndex([9,18,3,6,12,24,48]), 6, 'Test 83');
test(dominantIndex([100, 50, 25, 12, 6, 3, 1, 0]), 0, 'Test 84');
test(dominantIndex([25, 15, 5, 30, 10]), -1, 'Test 85');
test(dominantIndex([49,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48]), -1, 'Test 86');
test(dominantIndex([50, 49, 25, 10]), -1, 'Test 87');
test(dominantIndex([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 40]), 10, 'Test 88');
test(dominantIndex([100,99,98,97,96]), -1, 'Test 89');
test(dominantIndex([90,45,30,15,7]), 0, 'Test 90');
test(dominantIndex([100,50,25,12,6,3,1,0]), 0, 'Test 91');
test(dominantIndex([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61, 63, 65, 67, 69, 71, 73, 75, 77, 79, 81, 83, 85, 87, 89, 91, 93, 95, 97, 99]), -1, 'Test 92');
test(dominantIndex([9, 7, 5, 3, 1]), -1, 'Test 93');
test(dominantIndex([50,49,48,47,46]), -1, 'Test 94');
test(dominantIndex([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 78]), 20, 'Test 95');
test(dominantIndex([3, 6, 9, 18, 36]), 4, 'Test 96');
test(dominantIndex([1,3,5,7,9,11,13,15,17,19,20]), -1, 'Test 97');
test(dominantIndex([10,20,30,40,50,60,70,80,90,100]), -1, 'Test 98');
test(dominantIndex([8,80,20,40,10]), 1, 'Test 99');
test(dominantIndex([100, 99, 98, 97, 96]), -1, 'Test 100');
test(dominantIndex([34, 17, 8, 4, 2, 1]), 0, 'Test 101');
test(dominantIndex([42,21,10,5,3]), 0, 'Test 102');
test(dominantIndex([60,59,58,57,56,55,54,53,52,51,50]), -1, 'Test 103');
test(dominantIndex([77, 38, 19, 9, 4, 2, 1]), 0, 'Test 104');
test(dominantIndex([70, 69, 35, 20, 10, 5, 1]), -1, 'Test 105');
test(dominantIndex([10, 20, 30, 40, 50]), -1, 'Test 106');
test(dominantIndex([98, 49, 24, 12, 6, 3, 1, 0]), 0, 'Test 107');
test(dominantIndex([2, 4, 8, 16, 32, 64, 128]), 6, 'Test 108');
test(dominantIndex([3,3,3,3,3,6]), 5, 'Test 109');
test(dominantIndex([150,75,37,18,9]), 0, 'Test 110');
test(dominantIndex([8,16,32,64,128]), 4, 'Test 111');
test(dominantIndex([90,45,30,20,10,5,1]), 0, 'Test 112');
test(dominantIndex([42, 21, 10, 9, 8, 7, 6, 5]), 0, 'Test 113');
test(dominantIndex([30, 15, 14, 13, 12, 11]), 0, 'Test 114');
test(dominantIndex([99, 33, 11, 3, 1]), 0, 'Test 115');
test(dominantIndex([20, 10, 5, 1, 0]), 0, 'Test 116');
test(dominantIndex([100,99,98,97,96,95]), -1, 'Test 117');
test(dominantIndex([99,98,97,96,95,94,93,92,91,90,89,88,87,86,85,84,83,82,81,80,79,78,77,76,75,74,73,72,71,70,69,68,67,66,65,64,63,62,61,60,59,58,57,56,55,54,53,52,51,50,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0]), -1, 'Test 118');
test(dominantIndex([64, 32, 16, 8, 4, 2, 1]), 0, 'Test 119');
test(dominantIndex([9,3,1,0,0]), 0, 'Test 120');
test(dominantIndex([18,9,4,2,1]), 0, 'Test 121');
test(dominantIndex([20,10,5,2,1]), 0, 'Test 122');
test(dominantIndex([9,18,27,36,45,54,63,72,81,90]), -1, 'Test 123');
test(dominantIndex([10,9,8,7,6]), -1, 'Test 124');
test(dominantIndex([100,50,25,12,6]), 0, 'Test 125');
test(dominantIndex([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]), 10, 'Test 126');
test(dominantIndex([1, 100, 2, 3, 4, 5, 6, 7, 8, 9]), 1, 'Test 127');
test(dominantIndex([42, 21, 10, 5, 3, 1]), 0, 'Test 128');
test(dominantIndex([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,20]), 19, 'Test 129');
test(dominantIndex([42, 21, 10, 5, 3, 2, 1]), 0, 'Test 130');
test(dominantIndex([25,10,5,3,1]), 0, 'Test 131');
test(dominantIndex([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), -1, 'Test 132');
test(dominantIndex([100,49,48,47,46,45]), 0, 'Test 133');
test(dominantIndex([5, 50, 25, 100, 75]), -1, 'Test 134');
test(dominantIndex([8, 16, 32, 64, 128]), 4, 'Test 135');
test(dominantIndex([30,29,28,27,26,25,24,23,22,21]), -1, 'Test 136');
test(dominantIndex([100,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 0, 'Test 137');
test(dominantIndex([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,50]), -1, 'Test 138');
test(dominantIndex([1,10,100,1000,10000]), 4, 'Test 139');
test(dominantIndex([4,4,4,4,8]), 4, 'Test 140');
test(dominantIndex([120,60,30,15,7]), 0, 'Test 141');
test(dominantIndex([8,4,2,1,1,1,1]), 0, 'Test 142');
test(dominantIndex([8,16,2,4,6]), 1, 'Test 143');

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
