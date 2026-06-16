// Test: 1502. Can Make Arithmetic Progression From Sequence
// 164 test cases from LeetCodeDataset
// Run: node test.js

const { canMakeArithmeticProgression } = require("./solution");

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

console.log("\n1502. Can Make Arithmetic Progression From Sequence\n");

test(canMakeArithmeticProgression([2,4,6,8,10]), true, 'Test 1');
test(canMakeArithmeticProgression([-1,1,0]), true, 'Test 2');
test(canMakeArithmeticProgression([5,3,1,4,2]), true, 'Test 3');
test(canMakeArithmeticProgression([10,20,30,40,50]), true, 'Test 4');
test(canMakeArithmeticProgression([10,5,15]), true, 'Test 5');
test(canMakeArithmeticProgression([5,3,1,2,4]), true, 'Test 6');
test(canMakeArithmeticProgression([1,3,5,7,9,11]), true, 'Test 7');
test(canMakeArithmeticProgression([1]), Error: list index out of range, 'Test 8');
test(canMakeArithmeticProgression([5,3,1,4]), false, 'Test 9');
test(canMakeArithmeticProgression([1,2,3,5]), false, 'Test 10');
test(canMakeArithmeticProgression([10]), Error: list index out of range, 'Test 11');
test(canMakeArithmeticProgression([100,-100,0]), true, 'Test 12');
test(canMakeArithmeticProgression([-5,-3,-1,1,3,5]), true, 'Test 13');
test(canMakeArithmeticProgression([10,9,8,7,6,5,4,3,2,1]), true, 'Test 14');
test(canMakeArithmeticProgression([5,3,1]), true, 'Test 15');
test(canMakeArithmeticProgression([1,2,3,4,5]), true, 'Test 16');
test(canMakeArithmeticProgression([0,0,0,0]), true, 'Test 17');
test(canMakeArithmeticProgression([10,5,0,-5,-10]), true, 'Test 18');
test(canMakeArithmeticProgression([1,1,1,1]), true, 'Test 19');
test(canMakeArithmeticProgression([2,4,6,8,10,12,14,16,18,20]), true, 'Test 20');
test(canMakeArithmeticProgression([1,2,4]), false, 'Test 21');
test(canMakeArithmeticProgression([-1,1,3]), true, 'Test 22');
test(canMakeArithmeticProgression([100,50,0,-50,-100]), true, 'Test 23');
test(canMakeArithmeticProgression([3,5,1]), true, 'Test 24');
test(canMakeArithmeticProgression([0,0,0]), true, 'Test 25');
test(canMakeArithmeticProgression([-1,0,1,2]), true, 'Test 26');
test(canMakeArithmeticProgression([1,2,2,3,3,4]), false, 'Test 27');
test(canMakeArithmeticProgression([10,10,10,10]), true, 'Test 28');
test(canMakeArithmeticProgression([1000000,-1000000,0]), true, 'Test 29');
test(canMakeArithmeticProgression([10, 0, 20, 10]), false, 'Test 30');
test(canMakeArithmeticProgression([-5, 0, 5, 10, 15, 20, 25]), true, 'Test 31');
test(canMakeArithmeticProgression([5, 8, 11, 14, 17, 20]), true, 'Test 32');
test(canMakeArithmeticProgression([100, 200, 300, 400, 500]), true, 'Test 33');
test(canMakeArithmeticProgression([-3, -6, -9, -12, -15]), true, 'Test 34');
test(canMakeArithmeticProgression([5, 10, 15, 20, 25, 30, 35, 40, 45]), true, 'Test 35');
test(canMakeArithmeticProgression([5, 5, 5, 5, 5]), true, 'Test 36');
test(canMakeArithmeticProgression([3, 6, 9, 12, 15, 18, 21]), true, 'Test 37');
test(canMakeArithmeticProgression([2, 4, 6, 8, 10, 12, 14, 16]), true, 'Test 38');
test(canMakeArithmeticProgression([1, 2, 2, 3, 4]), false, 'Test 39');
test(canMakeArithmeticProgression([1, 6, 3, 11, 9, 5]), false, 'Test 40');
test(canMakeArithmeticProgression([-1000000, -999998, -999996, -999994]), true, 'Test 41');
test(canMakeArithmeticProgression([1000000, -1000000, 500000, -500000, 0]), true, 'Test 42');
test(canMakeArithmeticProgression([1, 2, 4, 8, 16, 32, 64, 128, 256, 512]), false, 'Test 43');
test(canMakeArithmeticProgression([1000000, 999998, 999996, 999994]), true, 'Test 44');
test(canMakeArithmeticProgression([3, 6, 9, 12, 15, 18, 21, 24, 27]), true, 'Test 45');
test(canMakeArithmeticProgression([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), true, 'Test 46');
test(canMakeArithmeticProgression([1, 2, 3, 5, 8, 13, 21, 34, 55, 89]), false, 'Test 47');
test(canMakeArithmeticProgression([1000000, 2000000, 3000000, 4000000, 5000000]), true, 'Test 48');
test(canMakeArithmeticProgression([1000000, 999998, 1000002, 999996, 1000004, 999994, 1000006, 999992, 1000008, 999990]), true, 'Test 49');
test(canMakeArithmeticProgression([1, 2, 3, 4, 6, 8, 10]), false, 'Test 50');
test(canMakeArithmeticProgression([12, 15, 18, 21, 24, 27, 30, 33, 36, 39]), true, 'Test 51');
test(canMakeArithmeticProgression([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110]), true, 'Test 52');
test(canMakeArithmeticProgression([-2, -4, -6, -8, -10, -12, -14, -16]), true, 'Test 53');
test(canMakeArithmeticProgression([1, 2, 3, 4, 5, 6, 7, 8, 9, 100]), false, 'Test 54');
test(canMakeArithmeticProgression([7, 7, 7, 7, 7, 7, 7, 7, 7, 7]), true, 'Test 55');
test(canMakeArithmeticProgression([38, 34, 30, 26, 22, 18, 14, 10, 6, 2]), true, 'Test 56');
test(canMakeArithmeticProgression([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), true, 'Test 57');
test(canMakeArithmeticProgression([42, 42, 42, 42, 42, 42, 42, 42, 42, 42]), true, 'Test 58');
test(canMakeArithmeticProgression([-5, 0, 5, 10, 15]), true, 'Test 59');
test(canMakeArithmeticProgression([1, 4, 9, 16, 25, 36, 49, 64, 81, 100]), false, 'Test 60');
test(canMakeArithmeticProgression([1000000, 1000000, 1000000, 1000000, 1000000]), true, 'Test 61');
test(canMakeArithmeticProgression([7, 14, 21, 28, 35, 42, 49, 56]), true, 'Test 62');
test(canMakeArithmeticProgression([5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), true, 'Test 63');
test(canMakeArithmeticProgression([1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000]), true, 'Test 64');
test(canMakeArithmeticProgression([1000, 1001, 1002, 1003, 1004, 1005]), true, 'Test 65');
test(canMakeArithmeticProgression([-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), true, 'Test 66');
test(canMakeArithmeticProgression([1, 2, 2, 3, 4, 5]), false, 'Test 67');
test(canMakeArithmeticProgression([1, 3, 5, 7, 9, 11, 13, 15, 17, 19]), true, 'Test 68');
test(canMakeArithmeticProgression([100, 50, 0, -50, -100]), true, 'Test 69');
test(canMakeArithmeticProgression([10, 20, 30, 40, 50, 60]), true, 'Test 70');
test(canMakeArithmeticProgression([-1000000, -1000001, -1000002, -1000003, -1000004]), true, 'Test 71');
test(canMakeArithmeticProgression([1000, 500, 250, 125, 62, 31, 15, 7, 3, 1, 0, -1, -3, -7, -15, -31, -62, -125, -250, -500, -1000]), false, 'Test 72');
test(canMakeArithmeticProgression([1000000, 500000, 0, -500000, -1000000]), true, 'Test 73');
test(canMakeArithmeticProgression([100, 50, 25, 0, -25, -50, -100]), false, 'Test 74');
test(canMakeArithmeticProgression([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30]), true, 'Test 75');
test(canMakeArithmeticProgression([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]), true, 'Test 76');
test(canMakeArithmeticProgression([-1000000, -999999, -999998, -999997, -999996]), true, 'Test 77');
test(canMakeArithmeticProgression([9, 3, 15, 6, 12, 0, 18, 21, 24, 27]), true, 'Test 78');
test(canMakeArithmeticProgression([-10, -20, -30, -40, -50, -60, -70, -80, -90, -100]), true, 'Test 79');
test(canMakeArithmeticProgression([1, 3, 6, 10, 15]), false, 'Test 80');
test(canMakeArithmeticProgression([-3, -1, 1, 3, 5, 7, 9, 11, 13]), true, 'Test 81');
test(canMakeArithmeticProgression([100, 90, 80, 70, 60, 50, 40, 30, 20, 10]), true, 'Test 82');
test(canMakeArithmeticProgression([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25]), true, 'Test 83');
test(canMakeArithmeticProgression([1, 2, 2, 3, 4, 5, 6, 7, 8, 9, 10]), false, 'Test 84');
test(canMakeArithmeticProgression([3, 6, 9, 12, 15, 18, 21, 24, 27, 30]), true, 'Test 85');
test(canMakeArithmeticProgression([100, 200, 300, 400, 500, 600, 700]), true, 'Test 86');
test(canMakeArithmeticProgression([1, 6, 11, 16, 21, 26]), true, 'Test 87');
test(canMakeArithmeticProgression([7, 3, 11, 5, 9, 1]), true, 'Test 88');
test(canMakeArithmeticProgression([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]), true, 'Test 89');
test(canMakeArithmeticProgression([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]), false, 'Test 90');
test(canMakeArithmeticProgression([7, 14, 21, 28, 35]), true, 'Test 91');
test(canMakeArithmeticProgression([10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48]), true, 'Test 92');
test(canMakeArithmeticProgression([1, 2, 3, 4, 6, 7, 8, 9, 10]), false, 'Test 93');
test(canMakeArithmeticProgression([7, 7, 7, 7, 7]), true, 'Test 94');
test(canMakeArithmeticProgression([-1000, 1000, 0, 500, -500, 250, -250, 750, -750]), true, 'Test 95');
test(canMakeArithmeticProgression([5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25]), true, 'Test 96');
test(canMakeArithmeticProgression([7, 7, 7, 7, 7, 7]), true, 'Test 97');
test(canMakeArithmeticProgression([23, 19, 15, 11, 7, 3, -1, -5]), true, 'Test 98');
test(canMakeArithmeticProgression([10, 20, 30, 40, 50]), true, 'Test 99');
test(canMakeArithmeticProgression([10, 5, 0, -5, -10, -15, -20, -25, -30]), true, 'Test 100');
test(canMakeArithmeticProgression([-10, -20, -30, -40, -50]), true, 'Test 101');
test(canMakeArithmeticProgression([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), true, 'Test 102');
test(canMakeArithmeticProgression([10, 20, 40, 50, 60]), false, 'Test 103');
test(canMakeArithmeticProgression([42, 42]), true, 'Test 104');
test(canMakeArithmeticProgression([-1000000, 1000000, 0, 500000, -500000]), true, 'Test 105');
test(canMakeArithmeticProgression([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), true, 'Test 106');
test(canMakeArithmeticProgression([100, 200, 300, 400, 500, 600]), true, 'Test 107');
test(canMakeArithmeticProgression([7, 7, 7, 7, 7, 7, 7]), true, 'Test 108');
test(canMakeArithmeticProgression([10, 20, 30, 40, 50, 60, 70, 80, 90, 101]), false, 'Test 109');
test(canMakeArithmeticProgression([0, 2, 4, 6, 8, 10, 12, 14, 16, 18]), true, 'Test 110');
test(canMakeArithmeticProgression([-5, -10, -15, -20, -25, -30]), true, 'Test 111');
test(canMakeArithmeticProgression([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), true, 'Test 112');
test(canMakeArithmeticProgression([-1000000, -1000001, -1000002, -1000003]), true, 'Test 113');
test(canMakeArithmeticProgression([3, -1, 1, 5, -3, 7]), true, 'Test 114');
test(canMakeArithmeticProgression([1, 2, 3, 4, 5, 6, 7, 8, 9, 11]), false, 'Test 115');
test(canMakeArithmeticProgression([2, 6, 10, 14, 18, 22, 26, 30, 34, 38]), true, 'Test 116');
test(canMakeArithmeticProgression([0, 1, 3, 6, 10, 15, 21]), false, 'Test 117');
test(canMakeArithmeticProgression([100, 99, 97, 94, 90, 85, 79, 72, 64, 55, 45]), false, 'Test 118');
test(canMakeArithmeticProgression([5, 1, 7, 3, 9]), true, 'Test 119');
test(canMakeArithmeticProgression([42]), Error: list index out of range, 'Test 120');
test(canMakeArithmeticProgression([-5, -10, -15, -20, -25]), true, 'Test 121');
test(canMakeArithmeticProgression([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24]), true, 'Test 122');
test(canMakeArithmeticProgression([42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42]), true, 'Test 123');
test(canMakeArithmeticProgression([1000000, 999999, 999998, 999997]), true, 'Test 124');
test(canMakeArithmeticProgression([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10]), true, 'Test 125');
test(canMakeArithmeticProgression([1000000, -1000000, 500000, 0, 1500000, -500000]), true, 'Test 126');
test(canMakeArithmeticProgression([3, 6, 9, 12, 15, 18, 21, 24]), true, 'Test 127');
test(canMakeArithmeticProgression([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -11, -12, -13, -14, -15, -16, -17, -18, -19, -20]), true, 'Test 128');
test(canMakeArithmeticProgression([1, 2, 3, 6, 5, 4]), true, 'Test 129');
test(canMakeArithmeticProgression([100, 200, 150, 50, 250, 0]), true, 'Test 130');
test(canMakeArithmeticProgression([3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33]), true, 'Test 131');
test(canMakeArithmeticProgression([-3, -2, -1, 0, 1, 2, 3]), true, 'Test 132');
test(canMakeArithmeticProgression([1, 2, 2, 3, 4, 5, 6]), false, 'Test 133');
test(canMakeArithmeticProgression([50, 60, 70, 80, 90, 100, 110, 120]), true, 'Test 134');
test(canMakeArithmeticProgression([2, 4, 8, 16, 32]), false, 'Test 135');
test(canMakeArithmeticProgression([1, 2, 4, 8, 16, 32, 64]), false, 'Test 136');
test(canMakeArithmeticProgression([1, 3, 5, 7, 9, 11, 13, 15]), true, 'Test 137');
test(canMakeArithmeticProgression([1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009]), true, 'Test 138');
test(canMakeArithmeticProgression([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21]), true, 'Test 139');
test(canMakeArithmeticProgression([1, 5, 9, 13, 17, 21, 25, 29, 33, 37]), true, 'Test 140');
test(canMakeArithmeticProgression([5, 9, 13, 17, 21, 25]), true, 'Test 141');
test(canMakeArithmeticProgression([12, 18, 24, 30, 36, 42, 48]), true, 'Test 142');
test(canMakeArithmeticProgression([1, 1, 2, 3, 5, 8, 13, 21]), false, 'Test 143');
test(canMakeArithmeticProgression([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200]), true, 'Test 144');
test(canMakeArithmeticProgression([100, 200, 150, 250, 300, 350, 400]), true, 'Test 145');
test(canMakeArithmeticProgression([9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1]), true, 'Test 146');
test(canMakeArithmeticProgression([10, 70, 30, 50, 90]), true, 'Test 147');
test(canMakeArithmeticProgression([1, 100, 50, 75, 25]), false, 'Test 148');
test(canMakeArithmeticProgression([500000, 499998, 499996, 499994, 499992]), true, 'Test 149');
test(canMakeArithmeticProgression([1, 4, 7, 10, 13, 16, 19, 22, 25]), true, 'Test 150');
test(canMakeArithmeticProgression([10, 5, 0, -5, -10]), true, 'Test 151');
test(canMakeArithmeticProgression([1, 1, 1, 1, 1, 1]), true, 'Test 152');
test(canMakeArithmeticProgression([50, 40, 30, 20, 10, 0, -10, -20, -30, -40]), true, 'Test 153');
test(canMakeArithmeticProgression([5, 15, 25, 35, 45, 55, 65, 75, 85, 95]), true, 'Test 154');
test(canMakeArithmeticProgression([-1000, -500, 0, 500, 1000]), true, 'Test 155');
test(canMakeArithmeticProgression([5, 3, 1, -1, -3, -5, -7, -9, -11, -13]), true, 'Test 156');
test(canMakeArithmeticProgression([1000000, -1000000, 0, 500000, -500000]), true, 'Test 157');
test(canMakeArithmeticProgression([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]), true, 'Test 158');
test(canMakeArithmeticProgression([10, 0, -10, -20, -30]), true, 'Test 159');
test(canMakeArithmeticProgression([-5, 0, 5, 10, 15, 20]), true, 'Test 160');
test(canMakeArithmeticProgression([5, 10, 15, 20, 25, 30]), true, 'Test 161');
test(canMakeArithmeticProgression([5, 10, 15, 20, 25]), true, 'Test 162');
test(canMakeArithmeticProgression([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]), false, 'Test 163');
test(canMakeArithmeticProgression([3, 1, 5, 7, 9]), true, 'Test 164');

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
