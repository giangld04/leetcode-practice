// Test: 2076. Process Restricted Friend Requests
// 73 test cases from LeetCodeDataset
// Run: node test.js

const { friendRequests } = require("./solution");

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

console.log("\n2076. Process Restricted Friend Requests\n");

test(friendRequests(4, [[0,2],[1,3]], [[0,1],[2,3],[0,3]]), [true, true, false], 'Test 1');
test(friendRequests(4, [], [[0,1],[1,2],[2,3],[3,0]]), [true, true, true, true], 'Test 2');
test(friendRequests(4, [[0,2],[1,3]], [[0,1],[2,3],[1,2]]), [true, true, false], 'Test 3');
test(friendRequests(5, [[0,1],[1,2],[2,3]], [[0,4],[1,2],[3,1],[3,4]]), [true, false, true, false], 'Test 4');
test(friendRequests(6, [[1,4],[2,5]], [[0,3],[1,2],[3,4]]), [true, true, true], 'Test 5');
test(friendRequests(6, [[0,1],[2,3],[4,5]], [[0,2],[1,3],[2,4],[3,5],[4,0],[5,1]]), [true, true, true, true, true, true], 'Test 6');
test(friendRequests(6, [[0,1],[2,3],[4,5]], [[0,2],[1,3],[4,5],[2,4]]), [true, true, false, true], 'Test 7');
test(friendRequests(3, [[0,1]], [[1,2],[0,2]]), [true, false], 'Test 8');
test(friendRequests(3, [[0,1]], [[0,2],[2,1]]), [true, false], 'Test 9');
test(friendRequests(10, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,0]], [[0,5],[2,7],[4,9],[1,6]]), [true, true, true, true], 'Test 10');
test(friendRequests(12, [[0,1],[2,3],[4,5],[6,7],[8,9],[10,11]], [[0,2],[1,3],[4,6],[5,7],[8,10],[9,11],[0,5],[2,7],[4,9],[6,11]]), [true, true, true, true, true, true, true, true, true, true], 'Test 11');
test(friendRequests(7, [[0,6],[1,5],[2,4]], [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,0]]), [true, true, true, false, true, true, false], 'Test 12');
test(friendRequests(20, [[0,10],[1,11],[2,12],[3,13],[4,14],[5,15],[6,16],[7,17],[8,18],[9,19]], [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,0],[10,11],[11,12],[12,13],[13,14],[14,15],[15,16],[16,17],[17,18],[18,19],[19,10]]), [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true], 'Test 13');
test(friendRequests(9, [[0,3],[1,4],[2,5],[6,8]], [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,0],[0,2],[1,3],[2,4],[3,5],[4,6],[5,7],[6,0],[7,1],[8,2]]), [true, true, false, true, true, true, true, false, true, true, false, false, true, true, true, false, false, true], 'Test 14');
test(friendRequests(50, [[i,i+1] for i in range[0,49,2]], [[i,i+1] for i in range[1,49,2]] + [[i,i+1] for i in range[0,49,2]]), Error: Solution.friendRequests[] missing 2 required positional arguments: 'restrictions' and 'requests', 'Test 15');
test(friendRequests(7, [[0,3],[1,4],[2,5],[3,6],[4,0],[5,1],[6,2]], [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,0]]), [true, true, false, true, true, false, false], 'Test 16');
test(friendRequests(10, [[0,2],[1,3],[4,6],[5,7],[8,9]], [[0,1],[2,3],[4,5],[6,7],[8,9],[0,9],[1,8],[2,7],[3,6],[4,3],[5,2],[6,1],[7,0],[8,5],[9,4]]), [true, true, true, true, false, true, false, true, true, false, false, false, false, true, false], 'Test 17');
test(friendRequests(15, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,0]], [[0,2],[1,3],[2,4],[3,5],[4,6],[5,7],[6,8],[7,9],[8,10],[9,11],[10,12],[11,13],[12,14],[13,0],[14,1]]), [true, true, true, true, true, true, true, true, true, true, true, true, false, false, false], 'Test 18');
test(friendRequests(8, [[0,4],[1,5],[2,6],[3,7]], [[0,1],[2,3],[4,5],[6,7],[0,5]]), [true, true, true, true, false], 'Test 19');
test(friendRequests(10, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9]], [[0,9],[1,8],[2,7],[3,6],[4,5]]), [true, true, true, true, false], 'Test 20');
test(friendRequests(8, [[0,7],[1,6],[2,5],[3,4]], [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,0]]), [true, true, true, false, true, true, true, false], 'Test 21');
test(friendRequests(9, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,0],[0,2],[1,3],[2,4],[3,5],[4,6],[5,7],[6,8],[7,0],[8,1]], [[0,4],[1,5],[2,6],[3,7],[4,8],[5,0],[6,1],[7,2],[8,3]]), [true, true, true, true, false, false, false, false, false], 'Test 22');
test(friendRequests(12, [[0,1],[2,3],[4,5],[6,7],[8,9],[10,11]], [[0,2],[1,3],[2,4],[3,5],[4,6],[5,7],[6,8],[7,9],[8,10],[9,11],[0,11],[1,10],[2,9],[3,8],[4,7],[5,6]]), [true, true, true, true, true, true, true, true, true, true, false, false, false, false, false, false], 'Test 23');
test(friendRequests(15, [[0,1],[1,2],[2,3],[3,4],[4,0],[5,6],[6,7],[7,8],[8,5],[9,10],[10,11],[11,12],[12,9],[13,14],[14,13]], [[0,3],[1,4],[2,0],[3,1],[4,2],[5,8],[6,9],[7,10],[8,11],[9,12],[10,5],[11,6],[12,7]]), [true, true, false, false, false, false, true, true, true, false, true, true, true], 'Test 24');
test(friendRequests(12, [[0,6],[1,7],[2,8],[3,9],[4,10],[5,11]], [[0,1],[2,3],[4,5],[6,7],[8,9],[10,11],[0,11]]), [true, true, true, true, true, true, true], 'Test 25');
test(friendRequests(8, [[0,4],[1,5],[2,6],[3,7]], [[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,5],[1,6],[2,7],[3,4]]), [true, true, true, true, true, true, true, true, false, false, false, false], 'Test 26');
test(friendRequests(8, [[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4]], [[0,4],[1,5],[2,6],[3,7],[0,5],[1,6],[2,7],[3,4]]), [true, true, true, true, false, false, false, false], 'Test 27');
test(friendRequests(8, [[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4]], [[0,4],[1,5],[2,6],[3,7]]), [true, true, true, true], 'Test 28');
test(friendRequests(10, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,0]], [[0,5],[2,7],[4,9],[1,6],[3,8]]), [true, true, true, true, true], 'Test 29');
test(friendRequests(10, [[0,1],[2,3],[4,5],[6,7],[8,9]], [[0,2],[1,3],[4,6],[5,7],[8,0],[9,1]]), [true, true, true, true, true, true], 'Test 30');
test(friendRequests(7, [[0,3],[1,4],[2,5],[3,6],[4,0],[5,1],[6,2]], [[0,6],[1,5],[2,4],[3,0],[4,1],[5,2],[6,3]]), [true, false, true, false, false, false, false], 'Test 31');
test(friendRequests(15, [[0,5],[1,6],[2,7],[3,8],[4,9],[5,10],[6,11],[7,12],[8,13],[9,14]], [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14]]), [true, true, true, true, false, true, true, true, true, false, true, true, true, true], 'Test 32');
test(friendRequests(8, [[0,2],[1,3],[4,6],[5,7]], [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,0],[0,3],[1,4],[2,5],[3,6],[4,7],[5,0],[6,1],[7,2]]), [true, false, true, true, true, false, true, true, false, false, true, false, false, false, true, false], 'Test 33');
test(friendRequests(15, [[0,1],[2,3],[4,5],[6,7],[8,9],[10,11],[12,13],[14,0]], [[0,2],[2,4],[4,6],[6,8],[8,10],[10,12],[12,14],[14,1]]), [true, true, true, true, true, true, false, true], 'Test 34');
test(friendRequests(9, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[0,8]], [[0,8],[1,7],[2,6],[3,5],[4,8],[0,7],[1,6],[2,5],[3,4]]), [false, true, true, true, true, false, false, false, false], 'Test 35');
test(friendRequests(10, [[0,9],[1,8],[2,7],[3,6],[4,5]], [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,0],[0,2],[2,4],[4,6],[6,8],[8,0]]), [true, true, true, true, false, true, true, true, true, false, true, true, false, true, false], 'Test 36');
test(friendRequests(10, [[0,1],[2,3],[4,5],[6,7],[8,9]], [[0,2],[1,3],[2,4],[3,5],[4,6],[5,7],[6,8],[7,9],[8,0],[9,1]]), [true, true, true, true, true, true, true, true, true, true], 'Test 37');
test(friendRequests(15, [[0,5],[1,6],[2,7],[3,8],[4,9],[5,10],[6,11],[7,12],[8,13],[9,14]], [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,0]]), [true, true, true, true, false, true, true, true, true, false, true, true, true, true, true], 'Test 38');
test(friendRequests(7, [[0,2],[1,3],[4,6]], [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,0],[0,3],[1,4],[2,5]]), [true, false, true, true, true, false, true, false, false, true], 'Test 39');
test(friendRequests(12, [[0,6],[1,7],[2,8],[3,9],[4,10],[5,11]], [[0,1],[1,2],[2,3],[3,4],[4,5],[5,0],[6,7],[7,8],[8,9],[9,10],[10,11],[11,6],[0,7],[1,8],[2,9],[3,10],[4,11],[5,6]]), [true, true, true, true, true, true, true, true, true, true, true, true, false, false, false, false, false, false], 'Test 40');
test(friendRequests(10, [[0,5],[1,6],[2,7],[3,8],[4,9]], [[0,9],[1,8],[2,7],[3,6],[4,5],[5,0],[6,1],[7,2],[8,3],[9,4]]), [true, true, false, true, true, false, false, false, false, false], 'Test 41');
test(friendRequests(15, [[0,2],[1,3],[2,4],[3,5],[4,6],[5,7],[6,8],[7,9],[8,10],[9,11],[10,12],[11,13],[12,14],[13,0],[14,1]], [[0,14],[1,13],[2,12],[3,11],[4,10],[5,9],[6,8],[7,0]]), [true, true, true, true, true, true, false, true], 'Test 42');
test(friendRequests(12, [[0,1],[2,3],[4,5],[6,7],[8,9],[10,11],[0,11],[1,10],[2,9],[3,8],[4,7],[5,6]], [[0,6],[1,7],[2,8],[3,9],[4,10],[5,11],[6,0],[7,1],[8,2],[9,3],[10,4],[11,5]]), [true, true, true, true, true, true, true, true, true, true, true, true], 'Test 43');
test(friendRequests(7, [[0,2],[1,3],[4,6]], [[0,1],[2,3],[4,5],[5,6],[0,3],[2,5]]), [true, true, true, false, false, true], 'Test 44');
test(friendRequests(9, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,0]], [[0,2],[1,3],[2,4],[3,5],[4,6],[5,7],[6,8],[7,0],[8,1]]), [true, true, true, true, true, true, false, false, false], 'Test 45');
test(friendRequests(9, [[0,1],[2,3],[4,5],[6,7],[8,0]], [[0,2],[1,3],[2,4],[3,5],[4,6],[5,7],[6,8],[7,0],[8,1],[0,4]]), [true, true, true, true, true, true, false, false, true, true], 'Test 46');
test(friendRequests(15, [[0,14],[1,13],[2,12],[3,11],[4,10],[5,9],[6,8]], [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,0],[0,13],[1,12],[2,11],[3,10],[4,9],[5,8],[6,7]]), [true, true, true, true, true, true, true, false, true, true, true, true, true, true, false, false, false, false, false, false, false, true], 'Test 47');
test(friendRequests(5, [[0,2],[1,3]], [[0,1],[2,3],[1,4],[3,4]]), [true, true, true, false], 'Test 48');
test(friendRequests(7, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6]], [[0,6],[1,5],[2,4],[3,0],[4,1],[5,2],[6,3]]), [true, true, true, true, false, false, true], 'Test 49');
test(friendRequests(20, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,15],[15,16],[16,17],[17,18],[18,19],[19,0]], [[0,10],[1,11],[2,12],[3,13],[4,14],[5,15],[6,16],[7,17],[8,18],[9,19],[0,5],[1,6],[2,7],[3,8],[4,9],[10,15],[11,16],[12,17],[13,18],[14,19]]), [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true], 'Test 50');
test(friendRequests(10, [[0,1],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9]], [[0,9],[1,8],[2,7],[3,6],[4,5]]), [true, true, true, true, false], 'Test 51');
test(friendRequests(8, [[0,1],[2,3],[4,5],[5,6],[6,7]], [[0,2],[1,4],[3,5],[5,7],[0,7],[4,6]]), [true, true, true, true, false, true], 'Test 52');
test(friendRequests(15, [[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,4],[7,8],[8,9],[9,7],[10,11],[11,12],[12,10],[13,14]], [[0,4],[1,5],[2,6],[3,7],[4,8],[5,9],[6,10],[7,11],[8,12],[9,13],[10,14],[11,0],[12,1],[13,2],[14,3]]), [true, true, true, true, true, true, true, true, true, true, true, false, false, false, false], 'Test 53');
test(friendRequests(8, [[0,2],[1,3],[4,6],[5,7]], [[0,1],[2,3],[4,5],[6,7],[0,2],[1,3],[4,6],[5,7],[0,4],[2,6],[1,5],[3,7],[0,6],[2,4],[1,7],[3,5]]), [true, true, true, true, false, false, false, false, true, true, true, true, false, false, false, false], 'Test 54');
test(friendRequests(7, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,0]], [[0,3],[1,4],[2,5],[3,6],[4,0],[5,1],[6,2]]), [true, true, true, false, false, false, false], 'Test 55');
test(friendRequests(10, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,0]], [[0,9],[1,0],[2,1],[3,2],[4,3],[5,4],[6,5],[7,6],[8,7],[9,8]]), [false, false, false, false, false, false, false, false, false, false], 'Test 56');
test(friendRequests(12, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11]], [[0,6],[1,7],[2,8],[3,9],[4,10],[5,11],[6,0],[7,1],[8,2],[9,3],[10,4],[11,5]]), [true, true, true, true, true, true, true, true, true, true, true, true], 'Test 57');
test(friendRequests(10, [[0,1],[1,2],[2,3],[3,4],[4,0]], [[0,5],[5,6],[6,7],[7,8],[8,9],[9,5]]), [true, true, true, true, true, true], 'Test 58');
test(friendRequests(10, [[0,9],[1,8],[2,7],[3,6],[4,5]], [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[0,9]]), [true, true, true, true, false, true, true, true, true, false], 'Test 59');
test(friendRequests(8, [[0,3],[1,4],[2,5],[3,6],[4,7]], [[0,2],[1,3],[2,4],[3,5],[4,6],[5,7],[0,7],[1,6]]), [true, true, true, true, true, true, false, false], 'Test 60');
test(friendRequests(12, [[0,6],[1,7],[2,8],[3,9],[4,10],[5,11]], [[0,5],[1,4],[2,3],[6,11],[7,10],[8,9],[0,11],[1,10],[2,9],[3,8],[4,7],[5,6]]), [true, true, true, true, true, true, false, false, false, false, false, false], 'Test 61');
test(friendRequests(10, [[0,9],[1,8],[2,7],[3,6],[4,5]], [[0,1],[1,2],[2,3],[3,4],[4,0],[5,6],[6,7],[7,8],[8,9],[9,5]]), [true, true, true, true, true, true, true, true, true, true], 'Test 62');
test(friendRequests(12, [[0,1],[2,3],[4,5],[6,7],[8,9],[10,11]], [[0,2],[1,3],[4,6],[5,7],[8,10],[9,11],[0,11],[1,10],[2,9],[3,8],[4,7],[5,6]]), [true, true, true, true, true, true, true, true, true, true, false, false], 'Test 63');
test(friendRequests(11, [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10]], [[0,2],[1,3],[2,4],[3,5],[4,6],[5,7],[6,8],[7,9],[8,10],[9,0],[10,1]]), [true, true, true, true, true, true, true, true, true, false, false], 'Test 64');
test(friendRequests(20, [[0,1],[2,3],[4,5],[6,7],[8,9],[10,11],[12,13],[14,15],[16,17],[18,19]], [[0,2],[1,3],[4,6],[5,7],[8,10],[9,11],[12,14],[13,15],[16,18],[17,19],[0,19],[1,18],[2,17],[3,16],[4,15],[5,14],[6,13],[7,12],[8,11],[9,10]]), [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false, false], 'Test 65');
test(friendRequests(12, [[0,6],[1,7],[2,8],[3,9],[4,10],[5,11]], [[0,1],[1,2],[2,3],[3,4],[4,5],[0,7],[1,8],[2,9],[3,10],[4,11],[5,6]]), [true, true, true, true, true, false, false, false, false, false, false], 'Test 66');
test(friendRequests(15, [[0,7],[1,8],[2,9],[3,10],[4,11],[5,12],[6,13],[7,14]], [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14]]), [true, true, true, true, true, true, false, true, true, true, true, true, true, false], 'Test 67');
test(friendRequests(9, [[0,1],[2,3],[4,5],[6,7]], [[0,2],[1,3],[2,4],[3,5],[4,6],[5,7],[6,8],[7,0],[8,1],[0,8],[1,7],[2,6],[3,5],[4,3],[5,2],[6,1],[7,0],[8,6],[0,4],[1,5],[2,7],[3,8]]), [true, true, true, true, true, true, true, false, false, true, true, true, true, false, false, false, false, true, true, true, false, false], 'Test 68');
test(friendRequests(12, [[0,3],[1,4],[2,5],[6,9],[7,10],[8,11]], [[0,1],[1,2],[3,4],[4,5],[6,7],[7,8],[9,10],[10,11],[0,6],[1,7],[2,8],[3,9],[4,10],[5,11],[0,2],[1,3],[4,6],[5,7],[8,10],[9,11]]), [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false, false, false, false, true], 'Test 69');
test(friendRequests(6, [[0,1],[2,3],[4,5]], [[0,2],[1,3],[2,4],[3,5],[0,5],[1,4]]), [true, true, true, true, false, false], 'Test 70');
test(friendRequests(10, [[0,5],[1,6],[2,7],[3,8],[4,9]], [[0,1],[1,2],[2,3],[3,4],[4,0],[5,6],[6,7],[7,8],[8,9],[9,5]]), [true, true, true, true, true, true, true, true, true, true], 'Test 71');
test(friendRequests(10, [[0,9],[1,8],[2,7],[3,6],[4,5]], [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,0]]), [true, true, true, true, false, true, true, true, true, false], 'Test 72');
test(friendRequests(8, [[0,2],[1,3],[2,4],[3,5],[4,6],[5,7]], [[0,3],[1,4],[2,5],[3,6],[4,7],[0,1],[2,3],[4,5],[6,7]]), [true, true, true, true, true, false, false, false, false], 'Test 73');

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
