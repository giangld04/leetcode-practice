// Test: 2946. Matrix Similarity After Cyclic Shifts
// 99 test cases from LeetCodeDataset
// Run: node test.js

const { areSimilar } = require("./solution");

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

console.log("\n2946. Matrix Similarity After Cyclic Shifts\n");

test(areSimilar([[2,2],[2,2]], 3), true, 'Test 1');
test(areSimilar([[1,2,1,2],[5,5,5,5],[6,3,6,3]], 2), true, 'Test 2');
test(areSimilar([[1,2,3,4],[5,6,7,8],[9,10,11,12]], 1), false, 'Test 3');
test(areSimilar([[10,20,30],[40,50,60],[70,80,90]], 3), true, 'Test 4');
test(areSimilar([[3,3,3],[3,3,3],[3,3,3]], 25), true, 'Test 5');
test(areSimilar([[1,1,1],[1,1,1],[1,1,1]], 10), true, 'Test 6');
test(areSimilar([[3,4,5],[6,7,8]], 1), false, 'Test 7');
test(areSimilar([[1,1,1,1],[1,1,1,1],[1,1,1,1]], 50), true, 'Test 8');
test(areSimilar([[5,10],[15,20]], 1), false, 'Test 9');
test(areSimilar([[1,2,3],[4,5,6],[7,8,9]], 4), false, 'Test 10');
test(areSimilar([[3,4,5],[8,7,6]], 2), false, 'Test 11');
test(areSimilar([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]], 4), true, 'Test 12');
test(areSimilar([[2, 2, 2, 2, 2], [2, 2, 2, 2, 2], [2, 2, 2, 2, 2], [2, 2, 2, 2, 2], [2, 2, 2, 2, 2]], 100), true, 'Test 13');
test(areSimilar([[2,3,4,5,6],[6,5,4,3,2],[1,2,3,4,5],[5,4,3,2,1],[3,3,3,3,3]], 7), false, 'Test 14');
test(areSimilar([[1,2,3,4,5,6,7,8],[8,7,6,5,4,3,2,1],[1,3,5,7,9,11,13,15],[16,14,12,10,8,6,4,2]], 8), true, 'Test 15');
test(areSimilar([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]], 17), false, 'Test 16');
test(areSimilar([[7,7,7],[7,7,7],[7,7,7],[7,7,7],[7,7,7]], 20), true, 'Test 17');
test(areSimilar([[1,2,3,4,5,6,7],[8,9,10,11,12,13,14],[15,16,17,18,19,20,21],[22,23,24,25,1,2,3]], 7), true, 'Test 18');
test(areSimilar([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]], 20), true, 'Test 19');
test(areSimilar([[1,2,3,4,5,6],[6,5,4,3,2,1],[1,2,3,4,5,6],[6,5,4,3,2,1]], 12), true, 'Test 20');
test(areSimilar([[1,2,3],[4,5,6],[7,8,9],[10,11,12],[13,14,15],[16,17,18],[19,20,21]], 1), false, 'Test 21');
test(areSimilar([[7, 8, 9], [16, 17, 18], [25, 26, 27], [34, 35, 36], [43, 44, 45]], 9), true, 'Test 22');
test(areSimilar([[7,8,9],[8,9,7],[9,7,8]], 9), true, 'Test 23');
test(areSimilar([[1,2,3,4,5,6,7,8,9,10],[11,12,13,14,15,16,17,18,19,20],[21,22,23,24,25,24,23,22,21,20]], 30), true, 'Test 24');
test(areSimilar([[7, 8, 9, 10], [11, 12, 13, 14], [15, 16, 17, 18], [19, 20, 21, 22]], 8), true, 'Test 25');
test(areSimilar([[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1]], 25), true, 'Test 26');
test(areSimilar([[7,8,9,10],[11,12,13,14],[15,16,17,18],[19,20,21,22]], 40), true, 'Test 27');
test(areSimilar([[9,8,7,6,5],[4,3,2,1,0],[9,8,7,6,5],[4,3,2,1,0]], 5), true, 'Test 28');
test(areSimilar([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]], 25), false, 'Test 29');
test(areSimilar([[1, 1, 1, 1, 1], [2, 2, 2, 2, 2], [3, 3, 3, 3, 3], [4, 4, 4, 4, 4], [5, 5, 5, 5, 5]], 25), true, 'Test 30');
test(areSimilar([[1, 2, 1, 2], [2, 1, 2, 1], [1, 2, 1, 2], [2, 1, 2, 1]], 3), false, 'Test 31');
test(areSimilar([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]], 1), false, 'Test 32');
test(areSimilar([[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]], 1), false, 'Test 33');
test(areSimilar([[1,2,3],[4,5,6],[7,8,9],[10,11,12],[13,14,15]], 3), true, 'Test 34');
test(areSimilar([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]], 5), false, 'Test 35');
test(areSimilar([[1, 2, 3], [3, 2, 1], [1, 2, 3], [3, 2, 1], [1, 2, 3]], 7), false, 'Test 36');
test(areSimilar([[1,1,2,2,3,3],[3,3,1,1,2,2],[2,2,3,3,1,1],[1,1,2,2,3,3]], 6), true, 'Test 37');
test(areSimilar([[25, 1, 2, 3, 4], [5, 6, 7, 8, 9], [10, 11, 12, 13, 14], [15, 16, 17, 18, 19], [20, 21, 22, 23, 24]], 10), true, 'Test 38');
test(areSimilar([[1,2,3,4,5,6,7,8,9,10],[10,9,8,7,6,5,4,3,2,1],[2,4,6,8,10,12,14,16,18,20]], 15), false, 'Test 39');
test(areSimilar([[1, 1, 2, 2], [3, 3, 4, 4], [1, 1, 2, 2], [3, 3, 4, 4]], 2), false, 'Test 40');
test(areSimilar([[1,2,1,2,1,2],[2,1,2,1,2,1],[1,2,1,2,1,2],[2,1,2,1,2,1]], 12), true, 'Test 41');
test(areSimilar([[1,2,3,4,5,6],[7,8,9,10,11,12],[13,14,15,16,17,18]], 6), true, 'Test 42');
test(areSimilar([[25, 24, 23, 22, 21], [20, 19, 18, 17, 16], [15, 14, 13, 12, 11], [10, 9, 8, 7, 6], [5, 4, 3, 2, 1]], 25), true, 'Test 43');
test(areSimilar([[1, 2, 3, 4, 5], [5, 4, 3, 2, 1], [1, 2, 3, 4, 5], [5, 4, 3, 2, 1], [1, 2, 3, 4, 5]], 30), true, 'Test 44');
test(areSimilar([[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]], 50), true, 'Test 45');
test(areSimilar([[1,2,3,4,5,6],[6,5,4,3,2,1],[2,3,4,5,6,7],[7,6,5,4,3,2]], 12), true, 'Test 46');
test(areSimilar([[2,2,2,2,2,2],[2,2,2,2,2,2],[2,2,2,2,2,2],[2,2,2,2,2,2],[2,2,2,2,2,2]], 30), true, 'Test 47');
test(areSimilar([[1,2,3],[4,5,6],[7,8,9],[10,11,12]], 10), false, 'Test 48');
test(areSimilar([[1, 2, 3, 4, 5], [10, 20, 30, 40, 50], [100, 200, 300, 400, 500], [2, 4, 6, 8, 10], [11, 22, 33, 44, 55]], 5), true, 'Test 49');
test(areSimilar([[1,2,3,4,5],[5,4,3,2,1],[1,1,1,1,1],[2,2,2,2,2]], 3), false, 'Test 50');
test(areSimilar([[7,7,7,7,7,7],[8,8,8,8,8,8],[9,9,9,9,9,9],[10,10,10,10,10,10]], 15), true, 'Test 51');
test(areSimilar([[2,3,2,3],[3,2,3,2],[2,3,2,3],[3,2,3,2]], 7), false, 'Test 52');
test(areSimilar([[9,8,7,6],[5,4,3,2],[1,0,1,0],[9,8,7,6]], 2), false, 'Test 53');
test(areSimilar([[1, 2, 3, 4, 5], [5, 4, 3, 2, 1], [1, 2, 3, 4, 5], [5, 4, 3, 2, 1], [1, 2, 3, 4, 5]], 20), true, 'Test 54');
test(areSimilar([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]], 8), true, 'Test 55');
test(areSimilar([[1, 2, 3, 4, 5], [5, 4, 3, 2, 1], [6, 7, 8, 9, 10], [10, 9, 8, 7, 6]], 5), true, 'Test 56');
test(areSimilar([[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]], 5), true, 'Test 57');
test(areSimilar([[1, 2, 3, 4, 5, 6], [6, 5, 4, 3, 2, 1], [1, 2, 3, 4, 5, 6], [6, 5, 4, 3, 2, 1], [1, 2, 3, 4, 5, 6]], 6), true, 'Test 58');
test(areSimilar([[1,2,3,4,5,6,7,8],[8,7,6,5,4,3,2,1],[1,2,3,4,5,6,7,8],[8,7,6,5,4,3,2,1]], 16), true, 'Test 59');
test(areSimilar([[1, 2, 3, 4], [4, 3, 2, 1], [1, 2, 3, 4], [4, 3, 2, 1]], 2), false, 'Test 60');
test(areSimilar([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20]], 5), true, 'Test 61');
test(areSimilar([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16], [17, 18, 19, 20]], 12), true, 'Test 62');
test(areSimilar([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16],[17,18,19,20],[21,22,23,24]], 8), true, 'Test 63');
test(areSimilar([[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 9, 8, 7, 6, 5, 4, 3, 2, 1], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]], 10), true, 'Test 64');
test(areSimilar([[5,5,5,5,5],[5,5,5,5,5],[5,5,5,5,5],[5,5,5,5,5]], 49), true, 'Test 65');
test(areSimilar([[1,2,3,4,5],[5,4,3,2,1],[2,3,4,5,6],[6,5,4,3,2]], 5), true, 'Test 66');
test(areSimilar([[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20]], 5), true, 'Test 67');
test(areSimilar([[1,2,3,4,5,6],[6,5,4,3,2,1],[1,3,5,7,9,11],[12,10,8,6,4,2]], 3), false, 'Test 68');
test(areSimilar([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10], [11, 12]], 1), false, 'Test 69');
test(areSimilar([[1,1,2,2,3,3],[4,4,5,5,6,6],[7,7,8,8,9,9]], 3), false, 'Test 70');
test(areSimilar([[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]], 24), false, 'Test 71');
test(areSimilar([[5,5,5,5,5],[4,4,4,4,4],[3,3,3,3,3],[2,2,2,2,2]], 50), true, 'Test 72');
test(areSimilar([[1,1,2,2,3,3,4,4,5,5],[5,5,4,4,3,3,2,2,1,1],[1,2,3,4,5,6,7,8,9,10],[10,9,8,7,6,5,4,3,2,1]], 100), true, 'Test 73');
test(areSimilar([[7,8,9,10,11],[12,13,14,15,16],[17,18,19,20,21],[22,23,24,25,26]], 25), true, 'Test 74');
test(areSimilar([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16],[17,18,19,20],[21,22,23,24],[25,1,2,3]], 12), true, 'Test 75');
test(areSimilar([[1, 2, 3, 4, 5, 6, 7], [7, 6, 5, 4, 3, 2, 1], [1, 2, 3, 4, 5, 6, 7], [7, 6, 5, 4, 3, 2, 1], [1, 2, 3, 4, 5, 6, 7]], 14), true, 'Test 76');
test(areSimilar([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12], [13, 14, 15]], 3), true, 'Test 77');
test(areSimilar([[23,24,25,23,24],[24,25,23,24,25],[25,23,24,25,23],[23,24,25,23,24],[24,25,23,24,25]], 7), false, 'Test 78');
test(areSimilar([[1,2],[3,4],[5,6],[7,8],[9,10],[11,12]], 30), true, 'Test 79');
test(areSimilar([[1,2,3,4,5,6,7,8,9,10],[10,9,8,7,6,5,4,3,2,1],[1,3,5,7,9,2,4,6,8,10],[10,8,6,4,2,1,3,5,7,9]], 25), false, 'Test 80');
test(areSimilar([[10,20,30,40,50],[50,40,30,20,10],[10,20,30,40,50],[50,40,30,20,10]], 25), true, 'Test 81');
test(areSimilar([[1, 2, 3], [6, 5, 4], [7, 8, 9], [12, 11, 10], [13, 14, 15]], 15), true, 'Test 82');
test(areSimilar([[10,20,30,40,50],[90,80,70,60,50],[45,35,25,15,5]], 10), true, 'Test 83');
test(areSimilar([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]], 30), true, 'Test 84');
test(areSimilar([[9,8,7,6,5,4,3,2,1],[1,2,3,4,5,6,7,8,9],[9,8,7,6,5,4,3,2,1],[1,2,3,4,5,6,7,8,9]], 25), false, 'Test 85');
test(areSimilar([[5,5,5,5,5,5,5,5],[6,6,6,6,6,6,6,6],[7,7,7,7,7,7,7,7],[8,8,8,8,8,8,8,8]], 40), true, 'Test 86');
test(areSimilar([[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5]], 1), false, 'Test 87');
test(areSimilar([[1,2,3],[3,2,1],[1,2,3],[3,2,1]], 6), true, 'Test 88');
test(areSimilar([[1,2],[2,1],[1,2],[2,1]], 3), false, 'Test 89');
test(areSimilar([[5,5,5,5,5,5],[5,5,5,5,5,5],[5,5,5,5,5,5]], 100), true, 'Test 90');
test(areSimilar([[1,2,3,4,5],[5,4,3,2,1],[2,3,4,5,6],[6,5,4,3,2],[3,4,5,6,7]], 15), true, 'Test 91');
test(areSimilar([[1,2,3,4,5,6,7],[7,6,5,4,3,2,1],[2,3,4,5,6,7,8],[8,7,6,5,4,3,2]], 14), true, 'Test 92');
test(areSimilar([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12], [13, 14, 15]], 15), true, 'Test 93');
test(areSimilar([[1,1,1,1,1,1],[1,1,1,1,1,1],[1,1,1,1,1,1],[1,1,1,1,1,1]], 15), true, 'Test 94');
test(areSimilar([[25,24,23],[22,21,20],[19,18,17]], 20), false, 'Test 95');
test(areSimilar([[9,8,7,6,5],[4,3,2,1,0],[5,6,7,8,9],[3,4,5,6,7]], 5), true, 'Test 96');
test(areSimilar([[1,1,2,2],[2,2,1,1],[3,3,4,4],[4,4,3,3]], 15), false, 'Test 97');
test(areSimilar([[1,2,3,4,5,6,7,8],[8,7,6,5,4,3,2,1],[1,3,5,7,9,11,13,15]], 8), true, 'Test 98');
test(areSimilar([[5,5,5],[5,5,5],[5,5,5],[5,5,5]], 100), true, 'Test 99');

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
