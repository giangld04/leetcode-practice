// Test: 3038. Maximum Number Of Operations With The Same Score I
// 109 test cases from LeetCodeDataset
// Run: node test.js

const { maxOperations } = require("./solution");

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

console.log("\n3038. Maximum Number Of Operations With The Same Score I\n");

test(maxOperations([10,20,30,40,50,60]), 1, 'Test 1');
test(maxOperations([1,100,1,100,1,100]), 3, 'Test 2');
test(maxOperations([5,5,5,5,5,5,5,5]), 4, 'Test 3');
test(maxOperations([2,2,2,2,2,2,2,2,2,2]), 5, 'Test 4');
test(maxOperations([1000,1,999,2,998,3]), 3, 'Test 5');
test(maxOperations([1,10,1,10,1,10,1,10,1,10]), 5, 'Test 6');
test(maxOperations([10,9,8,7,6,5,4,3,2,1]), 1, 'Test 7');
test(maxOperations([1,5,3,3,4,1,3,2,2,3]), 2, 'Test 8');
test(maxOperations([1,2,3,4,5,6,7,8,9,10]), 1, 'Test 9');
test(maxOperations([7,7,7,7,7,7,7,7,7,7]), 5, 'Test 10');
test(maxOperations([1000,1,1000,1,1000,1]), 3, 'Test 11');
test(maxOperations([100,200,100,200,100,200]), 3, 'Test 12');
test(maxOperations([3,2,1,4,5]), 2, 'Test 13');
test(maxOperations([100,200,100,200,100]), 2, 'Test 14');
test(maxOperations([2,2,2,2,2,1,1,1,1,1]), 2, 'Test 15');
test(maxOperations([5,3]), 1, 'Test 16');
test(maxOperations([99,1,98,2,97,3]), 3, 'Test 17');
test(maxOperations([10,10,10,10,10,10]), 3, 'Test 18');
test(maxOperations([10,10,20,20,30,30]), 1, 'Test 19');
test(maxOperations([2,3,2,3,2,3,2,3]), 4, 'Test 20');
test(maxOperations([7,7,8,8,9,9,10,10]), 1, 'Test 21');
test(maxOperations([5,5,5,5,5,5,5,5,5,5]), 5, 'Test 22');
test(maxOperations([1,1,1,1,1,1]), 3, 'Test 23');
test(maxOperations([2,2,3,3,4,4,5,5]), 1, 'Test 24');
test(maxOperations([10,20,10,20,30,40]), 2, 'Test 25');
test(maxOperations([7, 13, 13, 7, 10, 10, 10, 10, 15, 15]), 4, 'Test 26');
test(maxOperations([42, 42, 84, 0, 84, 0, 168, -42, 42, 84, 168, -84, 84, 168, -168, 42]), 3, 'Test 27');
test(maxOperations([10, 10, 20, 20, 10, 10, 20, 20, 10, 10, 20, 20, 10, 10]), 1, 'Test 28');
test(maxOperations([250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250]), 11, 'Test 29');
test(maxOperations([50, 50, 25, 75, 25, 75, 100, 0, 0, 100, 10, 90, 20, 80, 30, 70]), 8, 'Test 30');
test(maxOperations([20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 1, 'Test 31');
test(maxOperations([100, 1, 100, 1, 100, 1, 100, 1, 100, 1, 100, 1, 100, 1]), 7, 'Test 32');
test(maxOperations([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 10, 'Test 33');
test(maxOperations([5, 5, 10, 10, 20, 20, 40, 40, 80, 80, 160, 160, 320, 320, 640, 640, 1280, 1280, 2560, 2560]), 1, 'Test 34');
test(maxOperations([33, 67, 33, 67, 33, 67, 33, 67, 33, 67, 33, 67, 33, 67, 33, 67, 33, 67, 33, 67, 33, 67]), 11, 'Test 35');
test(maxOperations([45,55,45,55,45,55,45,55,45,55,45,55,45,55,45,55,45,55,45,55]), 10, 'Test 36');
test(maxOperations([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 15, 'Test 37');
test(maxOperations([10,10,20,20,30,30,40,40,50,50]), 1, 'Test 38');
test(maxOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 1, 'Test 39');
test(maxOperations([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1]), 1, 'Test 40');
test(maxOperations([100,100,1,1,100,100,2,2,100,100,3,3,100,100,4,4]), 1, 'Test 41');
test(maxOperations([6, 6, 12, 12, 18, 18, 24, 24, 30, 30, 36, 36, 42, 42, 48, 48, 54, 54, 60, 60]), 1, 'Test 42');
test(maxOperations([10, 10, 20, 20, 30, 30, 40, 40, 50, 50, 60, 60]), 1, 'Test 43');
test(maxOperations([10, 10, 20, 20, 30, 30, 40, 40, 50, 50, 60, 60, 70, 70, 80, 80, 90, 90, 100, 100]), 1, 'Test 44');
test(maxOperations([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), 1, 'Test 45');
test(maxOperations([10, 20, 10, 20, 10, 20, 10, 20, 10, 20, 10, 20]), 6, 'Test 46');
test(maxOperations([1, 2, 3, 4, 3, 4, 5, 6, 5, 6, 7, 8, 7, 8]), 1, 'Test 47');
test(maxOperations([10, 10, 5, 5, 2, 8, 6, 4, 3, 7, 1, 9]), 1, 'Test 48');
test(maxOperations([2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]), 30, 'Test 49');
test(maxOperations([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]), 8, 'Test 50');
test(maxOperations([500, 500, 250, 250, 125, 125, 625, 625, 312, 312]), 1, 'Test 51');
test(maxOperations([9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1]), 16, 'Test 52');
test(maxOperations([1, 2, 2, 1, 1, 2, 2, 1, 1, 2, 2, 1, 1, 2, 2, 1]), 8, 'Test 53');
test(maxOperations([3,1,2,1,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1,3,2,1,3,2]), 1, 'Test 54');
test(maxOperations([100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100]), 5, 'Test 55');
test(maxOperations([7, 3, 3, 7, 5, 5, 2, 2, 8, 8, 1, 1, 9, 9, 4, 4, 6, 6]), 3, 'Test 56');
test(maxOperations([1,100,1,100,1,100,1,100,1,100,1,100,1,100,1,100,1,100]), 9, 'Test 57');
test(maxOperations([5,5,10,10,15,15,20,20,25,25,30,30,35,35,40,40]), 1, 'Test 58');
test(maxOperations([1, 2, 3, 3, 2, 1, 4, 5, 5, 4, 6, 7, 7, 6]), 1, 'Test 59');
test(maxOperations([7, 3, 3, 7, 7, 3, 3, 7, 7, 3, 3, 7, 7, 3, 3, 7]), 8, 'Test 60');
test(maxOperations([1,2,1,3,1,4,1,5,1,6,1,7,1,8,1,9,1,10,1,11,1,12,1,13,1,14,1,15,1,16,1,17,1,18,1,19,1,20]), 1, 'Test 61');
test(maxOperations([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]), 1, 'Test 62');
test(maxOperations([42, 42, 84, 0, 42, 42, 84, 0, 42, 42]), 5, 'Test 63');
test(maxOperations([7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]), 1, 'Test 64');
test(maxOperations([50, 50, 50, 49, 49, 50, 49, 50, 49, 48, 48, 48]), 1, 'Test 65');
test(maxOperations([10, 20, 10, 20, 10, 20, 10, 20, 10, 20]), 5, 'Test 66');
test(maxOperations([100, 1, 99, 2, 98, 3, 97, 4, 96, 5, 95, 6, 94, 7, 93, 8, 92, 9]), 9, 'Test 67');
test(maxOperations([10,20,10,20,30,30,40,40,50,50]), 2, 'Test 68');
test(maxOperations([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 15, 'Test 69');
test(maxOperations([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 9, 2, 6, 5, 3]), 1, 'Test 70');
test(maxOperations([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 1, 'Test 71');
test(maxOperations([1,100,1,100,1,100,1,100,1,100,1,100,1,100,1,100,1,100,1,100]), 10, 'Test 72');
test(maxOperations([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2]), 19, 'Test 73');
test(maxOperations([5, 5, 10, 5, 5, 10, 5, 5, 10, 5, 5, 10, 5, 5, 10, 5, 5, 10, 5, 5, 10, 5, 5, 10, 5, 5, 10, 5, 5, 10]), 1, 'Test 74');
test(maxOperations([10, 10, 5, 5, 10, 10, 5, 5, 10, 10, 5, 5, 10, 10]), 1, 'Test 75');
test(maxOperations([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 11, 'Test 76');
test(maxOperations([500, 500, 250, 250, 750, 250, 500, 250, 500, 250, 750, 250, 500, 250, 750, 250, 500, 250]), 1, 'Test 77');
test(maxOperations([999, 1, 998, 2, 997, 3, 996, 4, 995, 5]), 5, 'Test 78');
test(maxOperations([100, 1, 100, 1, 100, 1, 100, 1, 100, 1, 100, 1]), 6, 'Test 79');
test(maxOperations([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14]), 1, 'Test 80');
test(maxOperations([1, 1000, 1, 1000, 1, 1000, 1, 1000, 1, 1000, 1, 1000]), 6, 'Test 81');
test(maxOperations([50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50]), 15, 'Test 82');
test(maxOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 1, 'Test 83');
test(maxOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 1, 'Test 84');
test(maxOperations([7,3,7,3,7,3,7,3,7,3,7,3,7,3,7,3,7,3,7,3,7,3,7,3]), 12, 'Test 85');
test(maxOperations([50, 50, 25, 25, 75, 75, 25, 25, 75, 75]), 1, 'Test 86');
test(maxOperations([5,5,10,10,15,15,20,20,25,25,30,30,35,35,40,40,45,45,50,50]), 1, 'Test 87');
test(maxOperations([100, 1, 2, 98, 3, 97, 4, 96, 5, 95, 6, 94, 7, 93]), 1, 'Test 88');
test(maxOperations([8, 1, 1, 8, 2, 7, 3, 6, 4, 5, 1, 8, 1, 8, 2, 7, 3, 6, 4, 5]), 10, 'Test 89');
test(maxOperations([99,1,98,2,97,3,96,4,95,5,94,6,93,7,92,8,91,9]), 9, 'Test 90');
test(maxOperations([7,3,7,3,7,3,7,3,7,3,7,3,7,3,7,3,7,3,7,3,7,3,7,3,7,3,7,3,7,3]), 15, 'Test 91');
test(maxOperations([8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1]), 11, 'Test 92');
test(maxOperations([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]), 1, 'Test 93');
test(maxOperations([100,200,100,200,100,200,100,200,100,200,100,200]), 6, 'Test 94');
test(maxOperations([5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1]), 8, 'Test 95');
test(maxOperations([2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1]), 13, 'Test 96');
test(maxOperations([100, 1, 100, 1, 100, 1, 100, 1, 100, 1]), 5, 'Test 97');
test(maxOperations([1, 999, 998, 1, 499, 500, 249, 751, 374, 626, 187, 813, 93, 907, 46, 954]), 1, 'Test 98');
test(maxOperations([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 1, 'Test 99');
test(maxOperations([1, 999, 1, 999, 1, 999, 1, 999, 1, 999, 1, 999, 1, 999, 1, 999, 1, 999]), 9, 'Test 100');
test(maxOperations([7,3,7,3,7,3,7,3,7,3,7,3,7,3,7,3,7,3,7,3]), 10, 'Test 101');
test(maxOperations([7, 7, 14, 0, 14, 0, 21, -7, 7, 14, 28, -14, 14, 28, -21, 7]), 4, 'Test 102');
test(maxOperations([10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1]), 1, 'Test 103');
test(maxOperations([10, 10, 15, 5, 20, 0, 15, 5]), 4, 'Test 104');
test(maxOperations([1, 99, 2, 98, 3, 97, 4, 96, 5, 95, 6, 94, 7, 93, 8, 92]), 8, 'Test 105');
test(maxOperations([1, 999, 1, 999, 1, 999, 1, 999, 1, 999]), 5, 'Test 106');
test(maxOperations([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]), 5, 'Test 107');
test(maxOperations([10,20,30,40,50,10,20,30,40,50,10,20,30,40,50,10,20,30,40,50]), 1, 'Test 108');
test(maxOperations([10,20,10,20,30,30,40,40,50,50,60,60]), 2, 'Test 109');

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
