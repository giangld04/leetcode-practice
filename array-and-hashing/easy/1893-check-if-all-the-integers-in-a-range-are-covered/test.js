// Test: 1893. Check If All The Integers In A Range Are Covered
// 106 test cases from LeetCodeDataset
// Run: node test.js

const { isCovered } = require("./solution");

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

console.log("\n1893. Check If All The Integers In A Range Are Covered\n");

test(isCovered([[5,7],[1,3]], 1, 7), false, 'Test 1');
test(isCovered([[5,10],[15,20]], 10, 15), false, 'Test 2');
test(isCovered([[1,1],[2,2],[3,3]], 1, 3), true, 'Test 3');
test(isCovered([[1,3],[3,5],[5,7]], 3, 5), true, 'Test 4');
test(isCovered([[10,20],[21,30]], 15, 25), true, 'Test 5');
test(isCovered([[1,3],[5,7]], 2, 6), false, 'Test 6');
test(isCovered([[1,3],[5,7],[9,11]], 4, 6), false, 'Test 7');
test(isCovered([[5,10],[15,20]], 8, 12), false, 'Test 8');
test(isCovered([[1,2],[3,4],[5,6]], 2, 5), true, 'Test 9');
test(isCovered([[1,2],[4,5]], 3, 4), false, 'Test 10');
test(isCovered([[1,10],[10,20]], 21, 21), false, 'Test 11');
test(isCovered([[1,5],[6,10]], 1, 10), true, 'Test 12');
test(isCovered([[1,50]], 1, 50), true, 'Test 13');
test(isCovered([[5,10],[10,15]], 10, 10), true, 'Test 14');
test(isCovered([[5,10],[11,16],[17,22],[23,28]], 8, 25), true, 'Test 15');
test(isCovered([[3,6],[7,10],[11,14],[15,18]], 5, 17), true, 'Test 16');
test(isCovered([[1,10],[15,25],[30,40]], 11, 14), false, 'Test 17');
test(isCovered([[1,5],[6,10],[11,15],[16,20],[21,25]], 5, 25), true, 'Test 18');
test(isCovered([[5,15],[10,20],[25,35]], 7, 28), false, 'Test 19');
test(isCovered([[1,2],[3,5],[6,8],[9,11],[12,14]], 1, 14), true, 'Test 20');
test(isCovered([[2,5],[6,9],[10,15],[16,20]], 3, 19), true, 'Test 21');
test(isCovered([[1,3],[6,8],[11,13],[16,18]], 5, 17), false, 'Test 22');
test(isCovered([[2,6],[8,12],[14,18],[20,24],[26,30]], 3, 28), false, 'Test 23');
test(isCovered([[1,2],[3,4],[5,6],[7,8],[9,10],[11,12]], 1, 12), true, 'Test 24');
test(isCovered([[5,5],[10,10],[15,15],[20,20]], 5, 20), false, 'Test 25');
test(isCovered([[1, 50]], 1, 50), true, 'Test 26');
test(isCovered([[10,20],[5,15],[25,35]], 12, 28), false, 'Test 27');
test(isCovered([[5,7],[8,10],[15,20],[25,30]], 7, 27), false, 'Test 28');
test(isCovered([[1,100],[101,200],[201,300]], 50, 250), Error: list index out of range, 'Test 29');
test(isCovered([[1,4],[6,9],[11,14],[16,19],[21,24],[26,29]], 1, 29), false, 'Test 30');
test(isCovered([[3,6],[8,11],[13,16]], 4, 15), false, 'Test 31');
test(isCovered([[10,15],[16,20],[21,25],[26,30]], 12, 28), true, 'Test 32');
test(isCovered([[1,5],[5,10],[10,15],[15,20]], 6, 14), true, 'Test 33');
test(isCovered([[5,8],[10,13],[15,18],[20,23],[25,28],[30,33]], 3, 31), false, 'Test 34');
test(isCovered([[5, 10], [15, 25], [30, 35]], 25, 30), false, 'Test 35');
test(isCovered([[1,20],[21,40],[41,50]], 1, 50), true, 'Test 36');
test(isCovered([[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9],[10,10]], 1, 10), true, 'Test 37');
test(isCovered([[3,7],[9,13],[15,19],[21,25],[27,31]], 6, 30), false, 'Test 38');
test(isCovered([[10,15],[15,20],[20,25]], 12, 23), true, 'Test 39');
test(isCovered([[5,5],[6,6],[7,7],[8,8]], 5, 8), true, 'Test 40');
test(isCovered([[5,8],[10,15],[18,23],[25,30]], 8, 27), false, 'Test 41');
test(isCovered([[1,2],[3,4],[5,6],[7,8],[9,10]], 1, 8), true, 'Test 42');
test(isCovered([[1,2],[4,6],[8,10],[12,14]], 3, 13), false, 'Test 43');
test(isCovered([[1, 3], [4, 6], [7, 9], [10, 12]], 1, 12), true, 'Test 44');
test(isCovered([[1,1],[2,2],[3,3],[4,4],[5,5]], 1, 5), true, 'Test 45');
test(isCovered([[3,7],[10,14],[17,21]], 5, 19), false, 'Test 46');
test(isCovered([[1,2],[4,8],[10,15],[16,20],[22,25]], 1, 25), false, 'Test 47');
test(isCovered([[1,2],[2,3],[3,4],[4,5],[5,6]], 2, 5), true, 'Test 48');
test(isCovered([[2,5],[7,10],[12,15],[17,20],[22,25],[27,30]], 4, 29), false, 'Test 49');
test(isCovered([[2,4],[5,7],[8,10],[11,13]], 2, 13), true, 'Test 50');
test(isCovered([[1,2],[4,5],[7,8],[10,11]], 3, 9), false, 'Test 51');
test(isCovered([[10,20],[21,30],[31,40],[41,50]], 15, 45), true, 'Test 52');
test(isCovered([[10,12],[15,17],[20,22]], 10, 22), false, 'Test 53');
test(isCovered([[1,2],[3,4],[5,6],[7,8],[9,10]], 1, 10), true, 'Test 54');
test(isCovered([[1,3],[4,6],[7,9],[10,12],[13,15]], 1, 15), true, 'Test 55');
test(isCovered([[5,7],[7,9],[9,11],[11,13]], 6, 12), true, 'Test 56');
test(isCovered([[5,10],[15,20],[25,30]], 12, 17), false, 'Test 57');
test(isCovered([[1,5],[6,10],[11,15],[16,20],[21,25],[26,30]], 1, 30), true, 'Test 58');
test(isCovered([[1,2],[2,3],[3,4],[4,5],[5,6]], 1, 6), true, 'Test 59');
test(isCovered([[3,6],[8,12],[15,20],[22,25],[27,30]], 5, 28), false, 'Test 60');
test(isCovered([[5,8],[10,12],[15,18]], 6, 17), false, 'Test 61');
test(isCovered([[1,10],[12,20],[22,30]], 5, 25), false, 'Test 62');
test(isCovered([[5,10],[12,15],[16,20],[22,25]], 11, 21), false, 'Test 63');
test(isCovered([[1,10],[15,25],[30,40]], 5, 35), false, 'Test 64');
test(isCovered([[1, 5], [10, 15], [20, 25], [30, 35]], 5, 30), false, 'Test 65');
test(isCovered([[3,3],[5,5],[7,7],[9,9],[11,11],[13,13]], 3, 13), false, 'Test 66');
test(isCovered([[1,10],[11,20],[21,30],[31,40]], 5, 35), true, 'Test 67');
test(isCovered([[1, 10], [11, 20], [21, 30], [31, 40], [41, 50]], 25, 45), true, 'Test 68');
test(isCovered([[1,5],[6,10],[11,15],[16,20]], 3, 19), true, 'Test 69');
test(isCovered([[5,10],[15,20],[25,30],[35,40]], 2, 38), false, 'Test 70');
test(isCovered([[2,4],[6,8],[10,12],[14,16],[18,20],[22,24]], 1, 24), false, 'Test 71');
test(isCovered([[1,3],[5,7],[9,11],[13,15],[17,19],[21,23]], 1, 23), false, 'Test 72');
test(isCovered([[2,4],[5,7],[8,10],[11,13],[14,16]], 3, 15), true, 'Test 73');
test(isCovered([[2,4],[5,8],[9,11],[12,15],[16,18],[19,22]], 2, 22), true, 'Test 74');
test(isCovered([[2, 4], [6, 8], [10, 12], [14, 16], [18, 20]], 3, 19), false, 'Test 75');
test(isCovered([[10,20],[20,30],[30,40]], 5, 45), false, 'Test 76');
test(isCovered([[1,2],[4,5],[7,8],[10,11],[13,14],[16,17],[19,20]], 1, 20), false, 'Test 77');
test(isCovered([[1,10],[11,20],[21,30],[31,40],[41,50]], 25, 45), true, 'Test 78');
test(isCovered([[5,10],[15,20],[25,30]], 3, 28), false, 'Test 79');
test(isCovered([[3,7],[8,12],[13,17],[18,22]], 5, 20), true, 'Test 80');
test(isCovered([[1,10],[20,30],[40,50]], 15, 35), false, 'Test 81');
test(isCovered([[1,2],[4,5],[7,8],[10,11]], 1, 11), false, 'Test 82');
test(isCovered([[2, 4], [7, 9], [12, 14], [17, 19]], 4, 19), false, 'Test 83');
test(isCovered([[1,2],[2,3],[3,4],[4,5]], 1, 5), true, 'Test 84');
test(isCovered([[1,5],[6,10],[11,15],[16,20],[21,25]], 1, 25), true, 'Test 85');
test(isCovered([[1,10],[11,20],[21,30],[31,40],[41,50]], 5, 45), true, 'Test 86');
test(isCovered([[1,3],[4,7],[8,10],[11,15],[16,20]], 5, 15), true, 'Test 87');
test(isCovered([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]], 1, 10), true, 'Test 88');
test(isCovered([[5,10],[15,20],[25,30],[35,40]], 25, 35), false, 'Test 89');
test(isCovered([[5,10],[11,20],[21,30]], 7, 29), true, 'Test 90');
test(isCovered([[1,25],[26,50]], 1, 50), true, 'Test 91');
test(isCovered([[3, 5], [8, 10], [13, 15], [18, 20]], 1, 20), false, 'Test 92');
test(isCovered([[5, 10], [15, 20], [25, 30]], 1, 30), false, 'Test 93');
test(isCovered([[1,3],[4,6],[7,9],[10,12],[13,15]], 2, 14), true, 'Test 94');
test(isCovered([[1,2],[3,4],[5,6],[7,8],[9,10],[11,12]], 5, 10), true, 'Test 95');
test(isCovered([[2,5],[6,9],[10,14]], 3, 13), true, 'Test 96');
test(isCovered([[1,10],[15,25],[30,40]], 5, 20), false, 'Test 97');
test(isCovered([[1,5],[6,10],[11,15],[16,20]], 1, 20), true, 'Test 98');
test(isCovered([[1,3],[4,6],[7,9]], 1, 9), true, 'Test 99');
test(isCovered([[2,4],[6,8],[10,12],[14,16],[18,20]], 1, 20), false, 'Test 100');
test(isCovered([[1,2],[3,4],[5,6],[7,8],[9,10]], 2, 9), true, 'Test 101');
test(isCovered([[2, 5], [7, 10], [12, 15], [17, 20]], 3, 18), false, 'Test 102');
test(isCovered([[5,9],[10,14],[15,19],[20,24]], 8, 22), true, 'Test 103');
test(isCovered([[1,4],[5,8],[9,12],[13,16]], 3, 15), true, 'Test 104');
test(isCovered([[1,10],[10,20],[20,30],[30,40]], 1, 40), true, 'Test 105');
test(isCovered([[5,10],[15,20],[25,30],[35,40]], 10, 35), false, 'Test 106');

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
