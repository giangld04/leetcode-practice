// Test: 495. Teemo Attacking
// 120 test cases from LeetCodeDataset
// Run: node test.js

const { findPoisonedDuration } = require("./solution");

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

console.log("\n495. Teemo Attacking\n");

test(findPoisonedDuration([0,1,2,3,4,5], 1), 6, 'Test 1');
test(findPoisonedDuration([1,5,9], 4), 12, 'Test 2');
test(findPoisonedDuration([1], 5), 5, 'Test 3');
test(findPoisonedDuration([10,14,15], 5), 10, 'Test 4');
test(findPoisonedDuration([0,1,2,3,4], 1), 5, 'Test 5');
test(findPoisonedDuration([1,2,3,4,5,6,7,8,9,10], 1), 10, 'Test 6');
test(findPoisonedDuration([1,2,3,4,5], 1), 5, 'Test 7');
test(findPoisonedDuration([0,5,10,15], 5), 20, 'Test 8');
test(findPoisonedDuration([0,1,2,3,4,5,6,7,8,9], 1), 10, 'Test 9');
test(findPoisonedDuration([10,14,15], 4), 9, 'Test 10');
test(findPoisonedDuration([1,1,1,1], 2), 2, 'Test 11');
test(findPoisonedDuration([1,2], 2), 3, 'Test 12');
test(findPoisonedDuration([1,4], 2), 4, 'Test 13');
test(findPoisonedDuration([10,20,30,40,50], 10), 50, 'Test 14');
test(findPoisonedDuration([1,10,15,20,25], 5), 25, 'Test 15');
test(findPoisonedDuration([5,7,8,10], 3), 8, 'Test 16');
test(findPoisonedDuration([1, 100, 200, 300, 400, 500], 10), 60, 'Test 17');
test(findPoisonedDuration([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 8), 53, 'Test 18');
test(findPoisonedDuration([1,2,4,8,16,32,64,128,256,512], 100), 427, 'Test 19');
test(findPoisonedDuration([1, 3, 5, 6, 10, 12, 15], 3), 16, 'Test 20');
test(findPoisonedDuration([1, 3, 6, 10], 3), 11, 'Test 21');
test(findPoisonedDuration([1,1,1,1,1,1,1,1,1,1], 1), 1, 'Test 22');
test(findPoisonedDuration([1, 2, 3, 5, 8, 13, 21, 34, 55], 5), 32, 'Test 23');
test(findPoisonedDuration([0, 2, 4, 6, 8, 10], 2), 12, 'Test 24');
test(findPoisonedDuration([100, 101, 102, 103, 104, 105, 106, 107, 108, 109], 10), 19, 'Test 25');
test(findPoisonedDuration([5,10,15,20,25], 3), 15, 'Test 26');
test(findPoisonedDuration([1, 10, 20, 30, 40, 50, 60, 70, 80, 90], 8), 80, 'Test 27');
test(findPoisonedDuration([1, 4, 7, 10, 13, 16, 19, 22, 25, 28], 3), 30, 'Test 28');
test(findPoisonedDuration([100, 101, 102, 103, 104, 105, 106, 107, 108, 109], 1), 10, 'Test 29');
test(findPoisonedDuration([1, 2, 4, 5, 7, 8, 10, 11, 13, 14], 2), 15, 'Test 30');
test(findPoisonedDuration([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1), 10, 'Test 31');
test(findPoisonedDuration([1,2,5,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200], 50), 249, 'Test 32');
test(findPoisonedDuration([1, 2, 3, 5, 8, 13, 21, 34, 55, 89], 7), 47, 'Test 33');
test(findPoisonedDuration([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29], 2), 30, 'Test 34');
test(findPoisonedDuration([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 7), 52, 'Test 35');
test(findPoisonedDuration([0, 1, 3, 6, 10, 15, 21, 28, 36, 45], 8), 52, 'Test 36');
test(findPoisonedDuration([5,10,15,20,25,30], 7), 32, 'Test 37');
test(findPoisonedDuration([1, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40], 5), 44, 'Test 38');
test(findPoisonedDuration([2, 3, 5, 6, 8, 9, 11], 2), 11, 'Test 39');
test(findPoisonedDuration([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29], 2), 30, 'Test 40');
test(findPoisonedDuration([0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 1), 11, 'Test 41');
test(findPoisonedDuration([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 5), 23, 'Test 42');
test(findPoisonedDuration([0, 2, 5, 10, 15, 20, 25], 5), 30, 'Test 43');
test(findPoisonedDuration([0,5,10,15,20,25,30,35,40], 5), 45, 'Test 44');
test(findPoisonedDuration([1, 4, 7, 10, 13, 16], 3), 18, 'Test 45');
test(findPoisonedDuration([0,2,5,9,12,15,18,21,24,27], 5), 32, 'Test 46');
test(findPoisonedDuration([100,200,300,400,500], 150), 550, 'Test 47');
test(findPoisonedDuration([5, 10, 15, 20, 25, 30], 7), 32, 'Test 48');
test(findPoisonedDuration([1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31], 3), 33, 'Test 49');
test(findPoisonedDuration([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 4), 18, 'Test 50');
test(findPoisonedDuration([1, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 10), 109, 'Test 51');
test(findPoisonedDuration([10, 12, 15, 17, 18, 20, 25, 30], 4), 22, 'Test 52');
test(findPoisonedDuration([1, 3, 5, 7, 9], 3), 11, 'Test 53');
test(findPoisonedDuration([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 2), 16, 'Test 54');
test(findPoisonedDuration([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 2), 16, 'Test 55');
test(findPoisonedDuration([100, 101, 102, 103, 104, 105], 5), 10, 'Test 56');
test(findPoisonedDuration([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 1), 20, 'Test 57');
test(findPoisonedDuration([2, 5, 10, 15, 20], 6), 24, 'Test 58');
test(findPoisonedDuration([5, 10, 15, 20, 25, 30], 3), 18, 'Test 59');
test(findPoisonedDuration([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 15), 60, 'Test 60');
test(findPoisonedDuration([10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60], 10), 60, 'Test 61');
test(findPoisonedDuration([1, 10, 20, 30, 40, 50, 60, 70, 80, 90], 10), 99, 'Test 62');
test(findPoisonedDuration([1, 2, 2, 3, 4, 5, 5, 6, 7, 8, 8, 9], 3), 11, 'Test 63');
test(findPoisonedDuration([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], 10), 39, 'Test 64');
test(findPoisonedDuration([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39], 2), 40, 'Test 65');
test(findPoisonedDuration([1, 2, 3, 5, 7, 9, 12, 15, 20, 25], 2), 18, 'Test 66');
test(findPoisonedDuration([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,300], 15), 305, 'Test 67');
test(findPoisonedDuration([1,10,20,30,40,50,60,70,80,90], 15), 104, 'Test 68');
test(findPoisonedDuration([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 2), 20, 'Test 69');
test(findPoisonedDuration([0, 2, 5, 10, 15, 20, 25, 30], 10), 40, 'Test 70');
test(findPoisonedDuration([1,2,3,4,5,6,7,8,9,10], 3), 12, 'Test 71');
test(findPoisonedDuration([1, 2, 3, 5, 7, 9, 12, 15, 18, 22, 26], 4), 29, 'Test 72');
test(findPoisonedDuration([5, 15, 25, 35, 45, 55, 65, 75, 85, 95], 10), 100, 'Test 73');
test(findPoisonedDuration([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 1), 20, 'Test 74');
test(findPoisonedDuration([10,20,30,40,50,60,70,80,90,100], 10), 100, 'Test 75');
test(findPoisonedDuration([1, 4, 7, 10, 13, 16, 19, 22, 25, 28], 2), 20, 'Test 76');
test(findPoisonedDuration([1, 2, 3, 4, 5, 10, 11, 12, 13, 14, 15], 3), 15, 'Test 77');
test(findPoisonedDuration([100, 102, 105, 110, 115, 121, 128, 136, 145, 155], 15), 70, 'Test 78');
test(findPoisonedDuration([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1), 1, 'Test 79');
test(findPoisonedDuration([1,3,5,7,9,11,13,15,17,19], 2), 20, 'Test 80');
test(findPoisonedDuration([5, 10, 15, 20, 25], 5), 25, 'Test 81');
test(findPoisonedDuration([0, 0, 0, 0, 0], 10000), 10000, 'Test 82');
test(findPoisonedDuration([0, 2, 4, 6, 8, 10, 12, 14], 2), 16, 'Test 83');
test(findPoisonedDuration([1000, 1005, 1010, 1015, 1020, 1025], 5), 30, 'Test 84');
test(findPoisonedDuration([100,150,200,250,300,350,400,450,500,550], 50), 500, 'Test 85');
test(findPoisonedDuration([2, 2, 2, 2, 2], 5), 5, 'Test 86');
test(findPoisonedDuration([1,1,1,1,1,1,1,1,1,1], 5), 5, 'Test 87');
test(findPoisonedDuration([2, 4, 8, 12, 16, 20, 24, 28], 6), 32, 'Test 88');
test(findPoisonedDuration([5, 10, 15, 20, 25, 30], 5), 30, 'Test 89');
test(findPoisonedDuration([1,2,4,8,16,32,64,128,256,512], 50), 263, 'Test 90');
test(findPoisonedDuration([1, 3, 6, 10, 15], 3), 14, 'Test 91');
test(findPoisonedDuration([0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 5), 25, 'Test 92');
test(findPoisonedDuration([1, 3, 5, 6, 8, 10, 12, 15], 4), 18, 'Test 93');
test(findPoisonedDuration([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2), 11, 'Test 94');
test(findPoisonedDuration([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], 3), 33, 'Test 95');
test(findPoisonedDuration([1, 3, 6, 10, 15, 21, 28, 36, 45], 7), 48, 'Test 96');
test(findPoisonedDuration([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 10), 100, 'Test 97');
test(findPoisonedDuration([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3), 13, 'Test 98');
test(findPoisonedDuration([5, 15, 25, 35, 45, 55], 10), 60, 'Test 99');
test(findPoisonedDuration([0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 10), 110, 'Test 100');
test(findPoisonedDuration([1, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140], 10), 149, 'Test 101');
test(findPoisonedDuration([1,100,200,300,400,500,600,700,800,900,1000], 100), 1099, 'Test 102');
test(findPoisonedDuration([1, 4, 10, 20, 30, 40, 50, 60, 70, 80, 90], 5), 53, 'Test 103');
test(findPoisonedDuration([0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 3), 23, 'Test 104');
test(findPoisonedDuration([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5), 14, 'Test 105');
test(findPoisonedDuration([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75], 8), 78, 'Test 106');
test(findPoisonedDuration([1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34, 37, 40, 43], 3), 45, 'Test 107');
test(findPoisonedDuration([1,10,19,28,37,46,55,64,73,82], 9), 90, 'Test 108');
test(findPoisonedDuration([5, 10, 15, 20, 25, 30, 35, 40], 10), 45, 'Test 109');
test(findPoisonedDuration([1, 4, 8, 12, 16], 3), 15, 'Test 110');
test(findPoisonedDuration([100, 200, 300, 400, 500], 150), 550, 'Test 111');
test(findPoisonedDuration([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 50), 500, 'Test 112');
test(findPoisonedDuration([1, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200], 50), 249, 'Test 113');
test(findPoisonedDuration([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 100), 100, 'Test 114');
test(findPoisonedDuration([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 15), 105, 'Test 115');
test(findPoisonedDuration([0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70], 7), 77, 'Test 116');
test(findPoisonedDuration([0,0,0,0,0,0,0,0,0,0], 10), 10, 'Test 117');
test(findPoisonedDuration([1, 2, 3, 10, 15, 20], 5), 22, 'Test 118');
test(findPoisonedDuration([1, 10, 20, 30, 40, 50, 60, 70, 80, 90], 9), 90, 'Test 119');
test(findPoisonedDuration([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], 2), 27, 'Test 120');

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
