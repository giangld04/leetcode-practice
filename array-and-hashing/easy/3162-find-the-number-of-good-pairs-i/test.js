// Test: 3162. Find The Number Of Good Pairs I
// 106 test cases from LeetCodeDataset
// Run: node test.js

const { numberOfPairs } = require("./solution");

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

console.log("\n3162. Find The Number Of Good Pairs I\n");

test(numberOfPairs([7,14,21], [1,7], 3), 2, 'Test 1');
test(numberOfPairs([1,3,4], [1,3,4], 1), 5, 'Test 2');
test(numberOfPairs([7,14,21], [1,7,14], 1), 7, 'Test 3');
test(numberOfPairs([7,14,21], [1,7,14], 3), 2, 'Test 4');
test(numberOfPairs([7,14,21], [7,14], 1), 4, 'Test 5');
test(numberOfPairs([20,40,60], [5,10], 4), 4, 'Test 6');
test(numberOfPairs([5,10,15], [1,2,3], 5), 5, 'Test 7');
test(numberOfPairs([10,20,30], [2,5,10], 1), 9, 'Test 8');
test(numberOfPairs([5,10,15], [1,5], 2), 2, 'Test 9');
test(numberOfPairs([10,20,30], [5,10], 2), 4, 'Test 10');
test(numberOfPairs([1,2,4,12], [2,4], 3), 2, 'Test 11');
test(numberOfPairs([12, 24, 36, 48, 60, 72, 84, 96, 108], [4, 8, 12], 4), 5, 'Test 12');
test(numberOfPairs([15,30,45,60,75,90], [1,5,15], 3), 14, 'Test 13');
test(numberOfPairs([8, 16, 24, 32], [2, 4, 8], 2), 10, 'Test 14');
test(numberOfPairs([121, 242, 363, 484, 605], [11, 121], 11), 5, 'Test 15');
test(numberOfPairs([12,24,36,48,60], [1,2,3,4,5,6], 4), 16, 'Test 16');
test(numberOfPairs([8, 16, 24, 32, 40], [2, 4, 8], 4), 8, 'Test 17');
test(numberOfPairs([121, 242, 363, 484, 605], [11, 22, 33], 11), 8, 'Test 18');
test(numberOfPairs([10, 20, 30, 40, 50], [2, 4, 5, 10], 5), 9, 'Test 19');
test(numberOfPairs([100,200,300,400,500], [5,10,20,25,50], 5), 17, 'Test 20');
test(numberOfPairs([25, 50, 75, 100, 125], [5, 25], 5), 6, 'Test 21');
test(numberOfPairs([10,20,30,40,50], [2,4,5,10], 2), 10, 'Test 22');
test(numberOfPairs([20, 40, 60, 80, 100], [2, 4, 5, 10], 5), 12, 'Test 23');
test(numberOfPairs([8,16,24,32,40,48,56,64,72], [1,2,4,8], 2), 31, 'Test 24');
test(numberOfPairs([35, 70, 105, 140, 175, 210, 245], [5, 7, 35], 7), 9, 'Test 25');
test(numberOfPairs([15, 30, 45, 60, 75, 90], [1, 3, 5, 15], 2), 12, 'Test 26');
test(numberOfPairs([169, 338, 507, 676, 845], [13, 26, 39], 13), 8, 'Test 27');
test(numberOfPairs([22,44,66,88,110], [1,2,11], 11), 10, 'Test 28');
test(numberOfPairs([28,56,84,112,140], [4,7,14], 4), 8, 'Test 29');
test(numberOfPairs([45,90,135,180,225], [5,9,15,45], 5), 8, 'Test 30');
test(numberOfPairs([18, 36, 54, 72, 90, 108, 126, 144, 162, 180], [1, 2, 3, 4, 6, 9], 9), 32, 'Test 31');
test(numberOfPairs([225, 450, 675, 900, 1125], [15, 30, 75], 15), 8, 'Test 32');
test(numberOfPairs([14, 28, 42, 56, 70, 84, 98, 112, 126, 140, 154, 168, 182, 196], [2, 7, 14], 7), 18, 'Test 33');
test(numberOfPairs([8,16,24,32,40,48,56], [2,4,8], 2), 17, 'Test 34');
test(numberOfPairs([13,26,39,52,65,78,91,104,117,130], [1,13,26], 1), 25, 'Test 35');
test(numberOfPairs([18,36,54,72,90], [1,2,3,6,9], 9), 12, 'Test 36');
test(numberOfPairs([35, 70, 105, 140, 175, 210, 245, 280, 315, 350], [5, 7, 35], 5), 14, 'Test 37');
test(numberOfPairs([21,42,63,84,105], [3,7,21], 7), 5, 'Test 38');
test(numberOfPairs([49, 98, 147, 196, 245], [7, 14, 21], 7), 8, 'Test 39');
test(numberOfPairs([4, 8, 12, 16, 20, 24, 28, 32, 36, 40], [2, 4, 8], 4), 8, 'Test 40');
test(numberOfPairs([40, 80, 120, 160, 200, 240, 280, 320], [4, 8, 20], 4), 10, 'Test 41');
test(numberOfPairs([11, 22, 33, 44, 55, 66, 77, 88, 99], [1, 11], 11), 9, 'Test 42');
test(numberOfPairs([6, 12, 18, 24, 30], [1, 2, 3, 4, 5], 2), 14, 'Test 43');
test(numberOfPairs([35,70,105,140,175,210], [5,7,35], 5), 8, 'Test 44');
test(numberOfPairs([6,12,18,24,30,36,42,48,54,60], [2,6,12], 2), 12, 'Test 45');
test(numberOfPairs([10,20,30,40,50], [2,5,10], 2), 9, 'Test 46');
test(numberOfPairs([100, 200, 300, 400, 500], [5, 10, 25], 10), 11, 'Test 47');
test(numberOfPairs([36, 72, 108, 144, 180], [2, 3, 6], 6), 15, 'Test 48');
test(numberOfPairs([42, 84, 126, 168, 210], [6, 12, 21], 7), 7, 'Test 49');
test(numberOfPairs([13, 26, 39, 52, 65, 78, 91, 104, 117, 130, 143, 156, 169, 182, 195], [1, 13], 13), 16, 'Test 50');
test(numberOfPairs([11,22,33,44,55,66,77,88,99], [11,22,33], 1), 16, 'Test 51');
test(numberOfPairs([30, 60, 90, 120, 150, 180, 210], [2, 5, 10], 6), 13, 'Test 52');
test(numberOfPairs([6, 12, 18, 24, 30, 36], [1, 2, 3, 4, 6], 2), 19, 'Test 53');
test(numberOfPairs([25, 50, 75, 100, 125], [5, 10, 25], 5), 8, 'Test 54');
test(numberOfPairs([10, 20, 30, 40, 50, 60], [5, 10, 15], 5), 2, 'Test 55');
test(numberOfPairs([33, 66, 99, 132, 165], [11, 22, 33], 3), 8, 'Test 56');
test(numberOfPairs([3, 9, 27, 81], [1, 3, 9], 3), 9, 'Test 57');
test(numberOfPairs([64, 128, 192, 256, 320], [8, 16, 32], 4), 12, 'Test 58');
test(numberOfPairs([14, 28, 42, 56, 70], [7, 14, 28], 2), 8, 'Test 59');
test(numberOfPairs([18, 36, 54, 72, 90, 108, 126, 144, 162, 180, 198, 216, 234, 252, 270], [3, 6, 9, 18], 9), 12, 'Test 60');
test(numberOfPairs([15, 30, 45, 60, 75], [3, 5, 15], 5), 7, 'Test 61');
test(numberOfPairs([45,90,135,180,225], [5,15,45], 3), 11, 'Test 62');
test(numberOfPairs([18,36,54,72,90], [2,3,6,9,18], 3), 17, 'Test 63');
test(numberOfPairs([60, 120, 180, 240], [2, 5, 10], 4), 8, 'Test 64');
test(numberOfPairs([15,30,45,60,75,90], [3,5,15], 5), 8, 'Test 65');
test(numberOfPairs([49, 98, 147, 196, 245], [7, 49], 7), 5, 'Test 66');
test(numberOfPairs([11,22,33,44,55], [1,11,22], 5), 2, 'Test 67');
test(numberOfPairs([8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96], [2, 4, 8], 8), 10, 'Test 68');
test(numberOfPairs([63, 126, 189, 252, 315], [9, 21, 63], 9), 1, 'Test 69');
test(numberOfPairs([16, 32, 48, 64, 80, 96, 112, 128, 144, 160], [2, 4, 8, 16], 8), 18, 'Test 70');
test(numberOfPairs([21, 42, 63, 84, 105, 126, 147, 168, 189, 210], [3, 7, 21], 7), 12, 'Test 71');
test(numberOfPairs([10,20,30,40,50,60,70,80,90,100], [1,5,10], 10), 13, 'Test 72');
test(numberOfPairs([99, 198, 297, 396], [9, 18, 27, 36], 9), 0, 'Test 73');
test(numberOfPairs([16, 32, 48, 64, 80], [4, 8, 16], 4), 8, 'Test 74');
test(numberOfPairs([18, 36, 54, 72, 90], [6, 9, 18], 3), 7, 'Test 75');
test(numberOfPairs([121, 143, 165, 187], [11, 13, 15], 11), 3, 'Test 76');
test(numberOfPairs([9, 18, 27, 36, 45, 54, 63, 72, 81, 90], [3, 6, 9], 3), 18, 'Test 77');
test(numberOfPairs([12,24,36,48,60], [3,6,12], 4), 8, 'Test 78');
test(numberOfPairs([12, 18, 24, 36, 48], [1, 3, 4, 6, 12], 2), 18, 'Test 79');
test(numberOfPairs([100, 150, 200, 250], [5, 10, 20], 5), 10, 'Test 80');
test(numberOfPairs([20, 40, 60, 80, 100], [4, 8, 20], 5), 8, 'Test 81');
test(numberOfPairs([15, 30, 45, 60, 75], [3, 5, 15], 3), 7, 'Test 82');
test(numberOfPairs([7,14,21,28,35,42,49,56], [1,7,14], 1), 20, 'Test 83');
test(numberOfPairs([25, 50, 75, 100, 125], [1, 5, 25], 5), 11, 'Test 84');
test(numberOfPairs([10, 20, 30, 40, 50], [2, 5, 10], 5), 7, 'Test 85');
test(numberOfPairs([25, 50, 75, 100, 125, 150], [5, 10, 25], 5), 10, 'Test 86');
test(numberOfPairs([11,22,33,44,55,66,77,88,99,110], [1,11], 11), 10, 'Test 87');
test(numberOfPairs([33, 66, 99, 132, 165], [11, 33], 3), 6, 'Test 88');
test(numberOfPairs([81, 108, 144, 180], [9, 18, 27], 3), 4, 'Test 89');
test(numberOfPairs([24, 48, 72, 96, 120], [8, 12, 24], 4), 4, 'Test 90');
test(numberOfPairs([50, 100, 150, 200, 250, 300, 350, 400, 450, 500], [5, 10, 25, 50], 10), 18, 'Test 91');
test(numberOfPairs([30,60,90,120], [2,5,10], 6), 8, 'Test 92');
test(numberOfPairs([15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180], [3, 5, 15], 5), 16, 'Test 93');
test(numberOfPairs([45,90,135,180], [3,9,15], 5), 8, 'Test 94');
test(numberOfPairs([12, 24, 36, 48, 60], [2, 4, 6, 8, 10], 4), 5, 'Test 95');
test(numberOfPairs([24, 36, 48], [2, 3, 6, 12], 4), 8, 'Test 96');
test(numberOfPairs([21, 42, 63, 84, 105, 126], [7, 14, 21], 3), 11, 'Test 97');
test(numberOfPairs([12, 18, 24, 30, 36, 42], [2, 3, 4], 6), 6, 'Test 98');
test(numberOfPairs([9, 18, 27, 36, 45], [3, 6, 9], 3), 8, 'Test 99');
test(numberOfPairs([9,18,27,36,45,54,63,72,81], [1,3,9], 3), 21, 'Test 100');
test(numberOfPairs([8, 16, 24, 32, 40], [2, 4, 8], 2), 12, 'Test 101');
test(numberOfPairs([28, 56, 84, 112], [7, 14, 21], 7), 0, 'Test 102');
test(numberOfPairs([25,50,75,100,125,150], [5,10,25], 5), 10, 'Test 103');
test(numberOfPairs([15, 25, 35, 45, 55], [5, 10, 15], 5), 1, 'Test 104');
test(numberOfPairs([7,14,21,28,35,42,49], [1,7,14], 7), 8, 'Test 105');
test(numberOfPairs([9, 18, 27, 36, 45], [1, 3, 9], 3), 11, 'Test 106');

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
