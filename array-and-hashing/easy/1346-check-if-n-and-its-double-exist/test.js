// Test: 1346. Check If N And Its Double Exist
// 147 test cases from LeetCodeDataset
// Run: node test.js

const { checkIfExist } = require("./solution");

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

console.log("\n1346. Check If N And Its Double Exist\n");

test(checkIfExist([2,4,6,8,10]), true, 'Test 1');
test(checkIfExist([6,10,1,0,-3,3]), true, 'Test 2');
test(checkIfExist([-3,-6,-1,0,1,2,3]), true, 'Test 3');
test(checkIfExist([-2,-4,-6,-8,-10]), true, 'Test 4');
test(checkIfExist([100,200,300,400,500]), true, 'Test 5');
test(checkIfExist([1,2,4,8,16,32,64]), true, 'Test 6');
test(checkIfExist([-10,-20,-5,-3]), true, 'Test 7');
test(checkIfExist([1,2,3,6,12]), true, 'Test 8');
test(checkIfExist([0,0]), true, 'Test 9');
test(checkIfExist([1,2,4,8,16,32,64,128,256,512,1024]), true, 'Test 10');
test(checkIfExist([1,2,3,4,5,6,7,8,9,10]), true, 'Test 11');
test(checkIfExist([-10,10]), false, 'Test 12');
test(checkIfExist([10,2,5,3]), true, 'Test 13');
test(checkIfExist([1,2,3,4,5]), true, 'Test 14');
test(checkIfExist([1,2,3,4,5,6]), true, 'Test 15');
test(checkIfExist([1,2,4,8,16]), true, 'Test 16');
test(checkIfExist([-2,0,10,-19,4,6,-8]), false, 'Test 17');
test(checkIfExist([1,3,5,7,9]), false, 'Test 18');
test(checkIfExist([3,1,7,11]), false, 'Test 19');
test(checkIfExist([-10,-20,-30,-40,-50]), true, 'Test 20');
test(checkIfExist([-10,-5,-3,-1,2]), true, 'Test 21');
test(checkIfExist([10, 5, 15, 20, 25]), true, 'Test 22');
test(checkIfExist([1, -1, 2, -2, 4, -4, 8, -8, 16, -16]), true, 'Test 23');
test(checkIfExist([-1, -2, -3, -4, -5, -6, -7, -8]), true, 'Test 24');
test(checkIfExist([3, 6, 12, 24, 48, 96, 192, 384, 768, 1536]), true, 'Test 25');
test(checkIfExist([2, 1, 4, 2, 8, 4, 16]), true, 'Test 26');
test(checkIfExist([1, 2, 3, 5, 6, 10, 20, 40]), true, 'Test 27');
test(checkIfExist([5, 10, 15, 20, 25, 30, 35, 40, 45]), true, 'Test 28');
test(checkIfExist([-100, -50, -25, -12, -6, -3, -1, 0, 1, 2, 4]), true, 'Test 29');
test(checkIfExist([4, 8, 16, 32, 64, 128, 256, 512]), true, 'Test 30');
test(checkIfExist([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 5]), true, 'Test 31');
test(checkIfExist([-1, -2, -3, -4, -5, -10, -20]), true, 'Test 32');
test(checkIfExist([1, 2, 4, 8, 16, 32, 64, 128, 256, 512]), true, 'Test 33');
test(checkIfExist([1, 2, 4, 8, 16, 32, 64, 128, 256]), true, 'Test 34');
test(checkIfExist([0, 0, 0, 0]), true, 'Test 35');
test(checkIfExist([100, 50, 25, 12, 6, 3, 1]), true, 'Test 36');
test(checkIfExist([101, 202, 50, 25, 12, 6, 3]), true, 'Test 37');
test(checkIfExist([1000, 501, 250, 125, 62, 31, 15, 7, 3, 1]), true, 'Test 38');
test(checkIfExist([5, 10, 15, 20, 25, 30, 60]), true, 'Test 39');
test(checkIfExist([1023, 511, 255, 127, 63, 31, 15, 7, 3, 1]), false, 'Test 40');
test(checkIfExist([100, 50, 25, 125, 625, 3125]), true, 'Test 41');
test(checkIfExist([-1, 2, -3, 6, -4, 8]), false, 'Test 42');
test(checkIfExist([-10, -20, 5, 3, 15]), true, 'Test 43');
test(checkIfExist([100, 200, 300, 400, 500, 250, 125]), true, 'Test 44');
test(checkIfExist([-1, -2, -3, -6, -12]), true, 'Test 45');
test(checkIfExist([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]), true, 'Test 46');
test(checkIfExist([100, 50, 25, 12.5, 6.25, 3.125, 1.5625]), true, 'Test 47');
test(checkIfExist([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), true, 'Test 48');
test(checkIfExist([1, 0, 2, 0, 4, 0, 8, 0]), true, 'Test 49');
test(checkIfExist([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200]), true, 'Test 50');
test(checkIfExist([3, 6, 9, 18, 27, 54, 81]), true, 'Test 51');
test(checkIfExist([7, 14, 21, 28, 35, 42, 49, 56]), true, 'Test 52');
test(checkIfExist([1, 2, 3, 6, 9, 18, 36, 72]), true, 'Test 53');
test(checkIfExist([-1, -2, -3, -4, -5]), true, 'Test 54');
test(checkIfExist([101, 202, 303, 404, 505, 606, 707, 808, 909, 1010]), true, 'Test 55');
test(checkIfExist([1, 5, 10, 15, 20, 25, 50, 100]), true, 'Test 56');
test(checkIfExist([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]), true, 'Test 57');
test(checkIfExist([2, 4, 8, 16, 32, 64, 128, 256, 512]), true, 'Test 58');
test(checkIfExist([-1, 1, -2, 2, -3, 3, -4, 4, -5, 5, -6, 6, -7, 7, -8, 8, -9, 9, -10, 10]), true, 'Test 59');
test(checkIfExist([1, 2, 3, 6, 12, 24, 48, 96, 192, 384]), true, 'Test 60');
test(checkIfExist([-1, -2, -4, -8, -16]), true, 'Test 61');
test(checkIfExist([-10, -20, -30, -40, -50, -60, -70, -80, -90, -100]), true, 'Test 62');
test(checkIfExist([0, 0, 1, 2, 4]), true, 'Test 63');
test(checkIfExist([11, 22, 33, 44, 55, 66, 77, 88, 99, 110, 220, 330, 440, 550, 660, 770, 880, 990, 1100]), true, 'Test 64');
test(checkIfExist([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 38]), true, 'Test 65');
test(checkIfExist([1, 2, 3, 5, 6, 10, 15, 20, 30, 60]), true, 'Test 66');
test(checkIfExist([1, 2, 2, 3, 4, 4, 5, 5, 6, 6]), true, 'Test 67');
test(checkIfExist([-2, 2, -4, 4, -8, 8, -16, 16]), true, 'Test 68');
test(checkIfExist([-10, -5, -15, -20, -25]), true, 'Test 69');
test(checkIfExist([3, 6, 9, 12, 15, 18, 21, 24, 27, 30]), true, 'Test 70');
test(checkIfExist([-1, 1, -2, 2, -4, 4, 8, -8]), true, 'Test 71');
test(checkIfExist([0, 1, 2, 3, 6, 12, 24, 48, 96]), true, 'Test 72');
test(checkIfExist([13, 26, 52, 104, 208, 416]), true, 'Test 73');
test(checkIfExist([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]), true, 'Test 74');
test(checkIfExist([-5, 10, -15, 20, -25, 50, -75]), true, 'Test 75');
test(checkIfExist([5, 10, 15, 20, 25, 50, 75]), true, 'Test 76');
test(checkIfExist([21, 42, 84, 168, 336, 672, 1344]), true, 'Test 77');
test(checkIfExist([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384]), true, 'Test 78');
test(checkIfExist([5, 10, 20, 40, 80, 160, 320, 640, 1280, 2560]), true, 'Test 79');
test(checkIfExist([6, 12, 18, 24, 48]), true, 'Test 80');
test(checkIfExist([1, 0, 2, 0, 4, 0, 8, 0, 16, 0]), true, 'Test 81');
test(checkIfExist([1, 2, 3, 6, 12, 24, 48, 96]), true, 'Test 82');
test(checkIfExist([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 40]), true, 'Test 83');
test(checkIfExist([1000, -500, 250, -125, 62.5, 31.25]), true, 'Test 84');
test(checkIfExist([-1, 2, -2, 4, -4, 8]), true, 'Test 85');
test(checkIfExist([15, 30, 45, 60, 75, 90, 105, 120, 135, 150]), true, 'Test 86');
test(checkIfExist([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), true, 'Test 87');
test(checkIfExist([1, 5, 25, 125, 625, 3125, 15625, 78125]), false, 'Test 88');
test(checkIfExist([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]), true, 'Test 89');
test(checkIfExist([1, 1, 1, 2, 2, 2, 4, 4, 4, 8, 8, 8]), true, 'Test 90');
test(checkIfExist([15, 30, 45, 90, 135, 270]), true, 'Test 91');
test(checkIfExist([-10, -5, -1, -2, -3, -4, -6, -8, -12, -16]), true, 'Test 92');
test(checkIfExist([100, 200, 300, 400, 500, 1000, 2000]), true, 'Test 93');
test(checkIfExist([10, 20, 40, 80, 160, 320, 640]), true, 'Test 94');
test(checkIfExist([-10, -5, 0, 5, 10]), true, 'Test 95');
test(checkIfExist([-10, -20, -30, -40, -50, -100, -200, -300]), true, 'Test 96');
test(checkIfExist([-3, -6, -9, -12, -15, -18, -21, -24]), true, 'Test 97');
test(checkIfExist([3, 6, 12, 24, 48, 96, 192, 384]), true, 'Test 98');
test(checkIfExist([0,0,0,0,0]), true, 'Test 99');
test(checkIfExist([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), true, 'Test 100');
test(checkIfExist([1000, 500, 250, 125, 62, 31, 15, 7, 3, 1]), true, 'Test 101');
test(checkIfExist([-5, -10, -15, -20, -25, -30, -35, -40, -45]), true, 'Test 102');
test(checkIfExist([3, 9, 27, 81, 243, 729, 2187, 6561, 19683, 59049]), false, 'Test 103');
test(checkIfExist([1, 1, 2, 2, 4, 4, 8, 8, 16, 16]), true, 'Test 104');
test(checkIfExist([100, 200, 300, 400, 500, 10]), true, 'Test 105');
test(checkIfExist([11, 22, 44, 88, 176, 352, 704]), true, 'Test 106');
test(checkIfExist([0, 0, 0, 0, 0]), true, 'Test 107');
test(checkIfExist([3, 6, 9, 12, 15, 18, 21, 24]), true, 'Test 108');
test(checkIfExist([100, 51, 25, 12, 6, 3, 1]), true, 'Test 109');
test(checkIfExist([1, 3, 5, 7, 9, 11, 13, 17, 19, 21]), false, 'Test 110');
test(checkIfExist([0, 1, 2, 4, 8, 16, 32]), true, 'Test 111');
test(checkIfExist([0, 0, 0, 0, 0, 0]), true, 'Test 112');
test(checkIfExist([1, 3, 9, 27, 81, 243, 729]), false, 'Test 113');
test(checkIfExist([0, 1, 2, 3, 4, 8, 16]), true, 'Test 114');
test(checkIfExist([5, 10, 15, 20, 25, 50, 100]), true, 'Test 115');
test(checkIfExist([9, 18, 36, 72, 144, 288, 576]), true, 'Test 116');
test(checkIfExist([7, 14, 21, 28, 35, 42, 49, 56, 63, 70]), true, 'Test 117');
test(checkIfExist([1, 3, 5, 7, 9, 18, 36, 72]), true, 'Test 118');
test(checkIfExist([7, 14, 28, 56, 112, 224, 448]), true, 'Test 119');
test(checkIfExist([1000, 500, 250, 125, 62.5]), true, 'Test 120');
test(checkIfExist([1, 2, 3, 6, 12, 24, 48, 96, 192, 384, 768]), true, 'Test 121');
test(checkIfExist([100, 50, 25, 12, 6, 3, 1, 0]), true, 'Test 122');
test(checkIfExist([1, 5, 10, 20, 25, 50, 100]), true, 'Test 123');
test(checkIfExist([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200, 300, 400, 500]), true, 'Test 124');
test(checkIfExist([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), true, 'Test 125');
test(checkIfExist([-2, -4, -6, -8, -16]), true, 'Test 126');
test(checkIfExist([-10, -20, -30, -200, -300, -150]), true, 'Test 127');
test(checkIfExist([1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1]), true, 'Test 128');
test(checkIfExist([0,1,2,4,8,16,32,64]), true, 'Test 129');
test(checkIfExist([1, 2, 3, 5, 6, 10, 15, 20, 30, 60, 120, 240]), true, 'Test 130');
test(checkIfExist([100, 50, 25, 12, 6, 3, 1, 0, -1, -2, -4]), true, 'Test 131');
test(checkIfExist([7, 14, 28, 56, 112, 224]), true, 'Test 132');
test(checkIfExist([0, 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192]), true, 'Test 133');
test(checkIfExist([-5, -10, -15, -20, -25, -30, -35, -40, -45, -50]), true, 'Test 134');
test(checkIfExist([7, 14, 28, 56, 112, 224, 448, 896]), true, 'Test 135');
test(checkIfExist([23, 46, 69, 92, 115, 138, 161, 184, 207, 230, 115]), true, 'Test 136');
test(checkIfExist([10, 5, 15, 20, 2, 25, 50]), true, 'Test 137');
test(checkIfExist([-2, -4, -1, -3, -5, -10]), true, 'Test 138');
test(checkIfExist([-1, 2, -3, 4, -5, 6, -7, 8, -9, 10]), true, 'Test 139');
test(checkIfExist([-1, -2, -4, -8, -16, -32, -64]), true, 'Test 140');
test(checkIfExist([1, 1, 2, 2, 4, 4, 8, 8, 16, 16, 32, 32]), true, 'Test 141');
test(checkIfExist([1, 2, 3, 6, 9, 18, 27, 54]), true, 'Test 142');
test(checkIfExist([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]), true, 'Test 143');
test(checkIfExist([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]), true, 'Test 144');
test(checkIfExist([1, 0, 2, 0, 4, 0, 8, 0, 16, 0, 32, 0, 64, 0, 128, 0]), true, 'Test 145');
test(checkIfExist([4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048]), true, 'Test 146');
test(checkIfExist([-2, -4, -8, -16, -32, -64, -128]), true, 'Test 147');

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
