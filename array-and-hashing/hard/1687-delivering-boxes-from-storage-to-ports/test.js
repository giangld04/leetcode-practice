// Test: 1687. Delivering Boxes From Storage To Ports
// 80 test cases from LeetCodeDataset
// Run: node test.js

const { boxDelivering } = require("./solution");

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

console.log("\n1687. Delivering Boxes From Storage To Ports\n");

test(boxDelivering(boxes), Error: Solution.boxDelivering[] missing 4 required positional arguments: 'boxes', 'portsCount', 'maxBoxes', and 'maxWeight', 'Test 1');
test(boxDelivering(maxWeight), Error: Solution.boxDelivering[] missing 4 required positional arguments: 'boxes', 'portsCount', 'maxBoxes', and 'maxWeight', 'Test 2');
test(boxDelivering(portsCount), Error: Solution.boxDelivering[] missing 4 required positional arguments: 'boxes', 'portsCount', 'maxBoxes', and 'maxWeight', 'Test 3');
test(boxDelivering(maxBoxes), Error: Solution.boxDelivering[] missing 4 required positional arguments: 'boxes', 'portsCount', 'maxBoxes', and 'maxWeight', 'Test 4');
test(boxDelivering([[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]], 1, 5, 5), 4, 'Test 5');
test(boxDelivering([[2,2],[2,2],[3,3],[3,3],[4,4],[4,4]], 4, 2, 4), 10, 'Test 6');
test(boxDelivering([[1,2],[2,2],[1,2],[2,2],[1,2]], 2, 3, 6), 7, 'Test 7');
test(boxDelivering([[1,1],[2,2],[3,3],[4,4],[5,5]], 5, 1, 5), 10, 'Test 8');
test(boxDelivering([[1,5],[1,5],[1,5],[2,5],[2,5],[2,5]], 2, 2, 10), 7, 'Test 9');
test(boxDelivering([[1,5],[2,5],[1,5],[2,5],[1,5],[2,5]], 2, 2, 10), 9, 'Test 10');
test(boxDelivering([[1,1],[2,1],[3,1],[4,1],[5,1],[6,1],[7,1],[8,1],[9,1],[10,1],[11,1],[12,1],[13,1],[14,1],[15,1]], 15, 5, 15), 18, 'Test 11');
test(boxDelivering([[1,1],[2,2],[3,3],[4,4],[5,5],[1,1],[2,2],[3,3],[4,4],[5,5]], 5, 5, 15), 12, 'Test 12');
test(boxDelivering([[1,2],[2,2],[1,2],[2,2],[1,2],[2,2],[1,2],[2,2],[1,2],[2,2]], 2, 4, 10), 13, 'Test 13');
test(boxDelivering([[1,1],[2,1],[1,1]], 2, 3, 3), 4, 'Test 14');
test(boxDelivering([[1,1],[2,1],[3,1],[4,1],[5,1]], 5, 5, 5), 6, 'Test 15');
test(boxDelivering([[1,100],[2,100],[3,100],[4,100],[5,100]], 5, 5, 500), 6, 'Test 16');
test(boxDelivering([[2,2],[3,3],[4,4],[5,5],[1,1],[2,2],[3,3]], 5, 3, 10), 10, 'Test 17');
test(boxDelivering([[1,10],[2,10],[3,10],[4,10],[5,10]], 5, 3, 30), 7, 'Test 18');
test(boxDelivering([[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9]], 9, 3, 15), 13, 'Test 19');
test(boxDelivering([[1,5],[2,3],[3,2],[2,1],[1,4]], 3, 5, 15), 6, 'Test 20');
test(boxDelivering([[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]], 1, 2, 2), 6, 'Test 21');
test(boxDelivering([[1,1],[1,1],[1,1],[1,1],[1,1]], 1, 3, 5), 4, 'Test 22');
test(boxDelivering([[1,4],[1,2],[2,1],[2,1],[3,2],[3,4]], 3, 6, 7), 6, 'Test 23');
test(boxDelivering([[1,1],[1,1],[2,2],[2,2],[3,3],[3,3],[4,4],[4,4],[5,5],[5,5]], 5, 3, 5), 16, 'Test 24');
test(boxDelivering([[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9],[10,10]], 10, 10, 55), 11, 'Test 25');
test(boxDelivering([[1,10],[2,10],[3,10]], 3, 2, 20), 5, 'Test 26');
test(boxDelivering([[1,5],[2,5],[3,5],[4,5],[5,5]], 5, 2, 10), 8, 'Test 27');
test(boxDelivering([[1,3],[1,3],[1,3],[1,3],[1,3]], 1, 3, 9), 4, 'Test 28');
test(boxDelivering([[1,3],[2,5],[3,7],[4,9]], 4, 2, 12), 7, 'Test 29');
test(boxDelivering([[1,1],[2,2],[3,3],[4,4],[5,5]], 5, 2, 5), 9, 'Test 30');
test(boxDelivering([[1,10],[2,10],[3,10],[4,10],[5,10]], 5, 5, 50), 6, 'Test 31');
test(boxDelivering([[1,10],[2,10],[3,10],[4,10],[5,10]], 5, 5, 25), 8, 'Test 32');
test(boxDelivering([[1,5],[2,5],[3,5],[4,5],[5,5]], 5, 2, 5), 10, 'Test 33');
test(boxDelivering([[5,5],[4,4],[3,3],[2,2],[1,1]], 5, 5, 15), 6, 'Test 34');
test(boxDelivering([[1,2],[2,2],[3,2],[4,2],[5,2]], 5, 2, 4), 8, 'Test 35');
test(boxDelivering([[1,5],[2,2],[3,3],[1,1]], 3, 3, 11), 6, 'Test 36');
test(boxDelivering([[1,3],[2,3],[3,3],[4,3],[5,3],[6,3],[7,3],[8,3],[9,3],[10,3]], 10, 10, 30), 11, 'Test 37');
test(boxDelivering([[1,3],[2,3],[3,3],[4,3],[5,3]], 5, 5, 15), 6, 'Test 38');
test(boxDelivering([[1,3],[2,2],[3,1]], 3, 5, 6), 4, 'Test 39');
test(boxDelivering([[1,1],[2,1],[3,1],[4,1],[5,1],[6,1],[7,1],[8,1],[9,1],[10,1]], 10, 1, 1), 20, 'Test 40');
test(boxDelivering([[1,3],[2,3],[3,3],[4,3],[5,3],[1,3],[2,3],[3,3],[4,3],[5,3]], 5, 5, 15), 12, 'Test 41');
test(boxDelivering([[1,1],[1,1],[2,2],[2,2],[3,3],[3,3],[4,4],[4,4],[5,5],[5,5]], 5, 2, 4), 0, 'Test 42');
test(boxDelivering([[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]], 1, 5, 10), 4, 'Test 43');
test(boxDelivering([[1,3],[2,2],[1,4],[2,2],[3,1]], 3, 3, 10), 7, 'Test 44');
test(boxDelivering([[1,5],[1,5],[1,5],[1,5],[1,5]], 1, 5, 25), 2, 'Test 45');
test(boxDelivering([[1,2],[2,2],[3,2],[4,2],[5,2],[6,2],[7,2],[8,2],[9,2],[10,2]], 10, 5, 10), 12, 'Test 46');
test(boxDelivering([[1,10],[2,10],[3,10],[4,10],[5,10]], 5, 5, 30), 7, 'Test 47');
test(boxDelivering([[1,5],[2,5],[3,5],[4,5]], 4, 4, 20), 5, 'Test 48');
test(boxDelivering([[1,10],[2,10],[3,10],[1,10],[2,10],[3,10]], 3, 3, 20), 9, 'Test 49');
test(boxDelivering([[1,5],[1,5],[2,5],[2,5],[3,5],[3,5]], 3, 3, 15), 6, 'Test 50');
test(boxDelivering([[1,10],[2,20],[3,30],[4,40],[5,50]], 5, 2, 100), 8, 'Test 51');
test(boxDelivering([[1,1],[1,2],[1,3],[1,4],[1,5]], 1, 5, 15), 2, 'Test 52');
test(boxDelivering([[1,1],[1,1],[1,1],[1,1],[1,1]], 1, 5, 5), 2, 'Test 53');
test(boxDelivering([[1,10],[2,10],[3,10],[4,10],[5,10]], 5, 5, 40), 7, 'Test 54');
test(boxDelivering([[10,1],[10,2],[10,3],[10,4],[10,5]], 10, 5, 15), 2, 'Test 55');
test(boxDelivering([[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7]], 7, 4, 8), 12, 'Test 56');
test(boxDelivering([[1,3],[1,3],[2,3],[2,3],[3,3],[3,3]], 3, 4, 9), 6, 'Test 57');
test(boxDelivering([[1,10],[2,10],[3,10],[4,10],[5,10]], 5, 1, 10), 10, 'Test 58');
test(boxDelivering([[1,1],[2,2],[3,3],[4,4],[5,5]], 5, 5, 15), 6, 'Test 59');
test(boxDelivering([[2,3],[2,3],[3,2],[3,2],[3,2]], 3, 2, 5), 7, 'Test 60');
test(boxDelivering([[1,5],[2,5],[3,5],[4,5],[5,5],[1,5],[2,5],[3,5],[4,5],[5,5]], 5, 10, 50), 11, 'Test 61');
test(boxDelivering([[1,5],[2,2],[3,1],[4,4],[5,3]], 5, 2, 10), 8, 'Test 62');
test(boxDelivering([[1,10],[2,10],[3,10],[2,10],[1,10]], 3, 2, 20), 8, 'Test 63');
test(boxDelivering([[1,3],[2,3],[3,3],[2,3],[1,3]], 3, 2, 9), 8, 'Test 64');
test(boxDelivering([[1,2],[3,3],[3,1],[3,1],[2,4]], 3, 3, 6), 6, 'Test 65');
test(boxDelivering([[1,5],[2,5],[1,5],[2,5],[1,5],[2,5],[1,5],[2,5],[1,5],[2,5]], 2, 5, 25), 12, 'Test 66');
test(boxDelivering([[1,10],[2,10],[3,10],[4,10],[5,10]], 5, 2, 20), 8, 'Test 67');
test(boxDelivering([[1,5],[2,3],[3,2],[4,1],[2,2]], 4, 5, 10), 7, 'Test 68');
test(boxDelivering([[1,3],[2,2],[3,2],[4,2],[5,2]], 5, 3, 5), 8, 'Test 69');
test(boxDelivering([[1,5],[2,5],[1,5],[2,5],[1,5]], 2, 3, 15), 7, 'Test 70');
test(boxDelivering([[1,5],[2,6],[3,7]], 3, 2, 12), 5, 'Test 71');
test(boxDelivering([[1,1],[2,1],[3,1],[4,1],[5,1],[6,1],[7,1],[8,1],[9,1],[10,1]], 10, 10, 10), 11, 'Test 72');
test(boxDelivering([[2,5],[2,4],[5,1],[5,1],[5,1],[1,5],[1,5],[1,5],[1,5],[5,1]], 5, 5, 10), 10, 'Test 73');
test(boxDelivering([[1,1],[1,1],[1,1],[1,1],[1,1]], 1, 2, 2), 6, 'Test 74');
test(boxDelivering([[1,5],[2,3],[3,2],[4,1],[2,2]], 4, 4, 10), 7, 'Test 75');
test(boxDelivering([[1,1],[1,1],[2,2],[2,2],[3,3],[3,3]], 3, 3, 10), 6, 'Test 76');
test(boxDelivering([[1,10],[1,10],[1,10],[1,10]], 1, 2, 20), 4, 'Test 77');
test(boxDelivering([[1,1],[2,1],[3,1],[4,1],[5,1],[6,1],[7,1],[8,1],[9,1],[10,1]], 10, 5, 5), 12, 'Test 78');
test(boxDelivering([[1,5],[2,5],[3,5],[4,5],[5,5]], 5, 1, 5), 10, 'Test 79');
test(boxDelivering([[2,10],[2,10],[3,10],[3,10]], 3, 3, 20), 4, 'Test 80');

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
