// Test: 2188. Minimum Time To Finish The Race
// 115 test cases from LeetCodeDataset
// Run: node test.js

const { minimumFinishTime } = require("./solution");

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

console.log("\n2188. Minimum Time To Finish The Race\n");

test(minimumFinishTime([[2,3],[3,4]], 5, 4), 21, 'Test 1');
test(minimumFinishTime([[5,2],[3,3]], 4, 3), 17, 'Test 2');
test(minimumFinishTime([[5,5],[3,3]], 10, 6), 56, 'Test 3');
test(minimumFinishTime([[100000,2]], 100000, 1000), 199900000, 'Test 4');
test(minimumFinishTime([[5,2]], 3, 3), 21, 'Test 5');
test(minimumFinishTime([[1,1],[2,1]], 1, 10), Error: list index out of range, 'Test 6');
test(minimumFinishTime([[10,10],[5,5],[2,2]], 5, 3), 13, 'Test 7');
test(minimumFinishTime([[10,5],[20,2]], 7, 8), 129, 'Test 8');
test(minimumFinishTime([[1,2]], 3, 1), 1, 'Test 9');
test(minimumFinishTime([[1,1],[2,1],[3,1]], 1, 10), Error: list index out of range, 'Test 10');
test(minimumFinishTime([[5,5],[10,2]], 7, 3), 29, 'Test 11');
test(minimumFinishTime([[10,5],[2,2]], 1, 10), 29, 'Test 12');
test(minimumFinishTime([[5,2]], 3, 2), 13, 'Test 13');
test(minimumFinishTime([[1,10],[2,2],[3,4]], 6, 5), 25, 'Test 14');
test(minimumFinishTime([[1,2]], 3, 10), 27, 'Test 15');
test(minimumFinishTime([[2,3],[3,2],[4,1]], 5, 2), Error: list index out of range, 'Test 16');
test(minimumFinishTime([[1,10],[2,9],[3,8],[4,7],[5,6]], 5, 750), 4495, 'Test 17');
test(minimumFinishTime([[2, 3], [3, 4], [5, 6], [7, 8]], 5, 15), 93, 'Test 18');
test(minimumFinishTime([[1,100000],[2,90000],[3,80000],[4,70000],[5,60000],[6,50000],[7,40000],[8,30000],[9,20000],[10,10000]], 100000, 1000), 99900500, 'Test 19');
test(minimumFinishTime([[10,5],[2,2],[3,3]], 6, 20), 114, 'Test 20');
test(minimumFinishTime([[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[1,10]], 1, 900), 1799, 'Test 21');
test(minimumFinishTime([[1,5],[2,3],[3,2]], 7, 15), 92, 'Test 22');
test(minimumFinishTime([[1,2],[1,3],[1,4],[1,5]], 1, 50), 99, 'Test 23');
test(minimumFinishTime([[1, 1], [2, 2], [3, 3], [4, 4], [5, 5]], 5, 50), Error: list index out of range, 'Test 24');
test(minimumFinishTime([[5,3],[2,8],[7,2]], 5, 200), 1395, 'Test 25');
test(minimumFinishTime([[100, 100], [200, 200], [300, 300]], 50, 1000), 149950, 'Test 26');
test(minimumFinishTime([[2,10],[3,9],[4,8],[5,7],[6,6],[7,5],[8,4],[9,3],[10,2]], 5, 500), 3495, 'Test 27');
test(minimumFinishTime([[5,5],[10,10],[15,15],[20,20],[25,25]], 20, 500), 12480, 'Test 28');
test(minimumFinishTime([[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9], [9, 10]], 5, 50), 195, 'Test 29');
test(minimumFinishTime([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]], 50, 750), 12100, 'Test 30');
test(minimumFinishTime([[2,3],[3,4],[4,5],[5,6],[6,7]], 10, 999), 8984, 'Test 31');
test(minimumFinishTime([[1,2],[3,4],[5,6]], 10, 15), 75, 'Test 32');
test(minimumFinishTime([[2,3],[3,4],[1,5]], 5, 10), 50, 'Test 33');
test(minimumFinishTime([[2,2],[3,3],[4,4],[5,5],[6,6]], 10, 25), 190, 'Test 34');
test(minimumFinishTime([[2,2],[2,3],[2,4],[2,5],[2,6],[2,7],[2,8]], 7, 50), 318, 'Test 35');
test(minimumFinishTime([[100,2],[200,3],[300,4],[400,5]], 150, 600), 134850, 'Test 36');
test(minimumFinishTime([[2,2],[3,3],[4,4],[5,5],[6,6]], 10, 1000), 7990, 'Test 37');
test(minimumFinishTime([[1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2], [1, 2]], 1, 1000), 1999, 'Test 38');
test(minimumFinishTime([[1000,2],[500,3],[250,4]], 500, 100), 74500, 'Test 39');
test(minimumFinishTime([[5,3],[7,4],[2,2]], 10, 20), 150, 'Test 40');
test(minimumFinishTime([[10, 10], [5, 5], [1, 1], [2, 2]], 20, 20), Error: list index out of range, 'Test 41');
test(minimumFinishTime([[100, 10], [50, 5], [25, 3], [10, 2], [5, 1]], 50, 100), Error: list index out of range, 'Test 42');
test(minimumFinishTime([[10,10],[9,9],[8,8],[7,7],[6,6]], 5, 500), 5495, 'Test 43');
test(minimumFinishTime([[1,2],[1,3],[1,4],[1,5]], 1, 100), 199, 'Test 44');
test(minimumFinishTime([[1, 2], [1, 2], [1, 2], [1, 2], [1, 2]], 100000, 1), 1, 'Test 45');
test(minimumFinishTime([[1,10000],[2,5000],[3,1000],[4,500],[5,250],[6,125],[7,62],[8,31],[9,15],[10,7]], 1000, 1000), 522400, 'Test 46');
test(minimumFinishTime([[1,10],[2,5],[3,3]], 15, 500), 6485, 'Test 47');
test(minimumFinishTime([[1,10],[2,2],[3,4],[4,5]], 5, 30), 160, 'Test 48');
test(minimumFinishTime([[100,100],[200,50],[300,25]], 100, 300), 59900, 'Test 49');
test(minimumFinishTime([[10,10],[20,20],[30,30]], 50, 750), 44950, 'Test 50');
test(minimumFinishTime([[1, 2], [1, 2], [1, 2]], 0, 100), 100, 'Test 51');
test(minimumFinishTime([[2, 2], [3, 2], [4, 2], [5, 2], [6, 2]], 10, 500), 3990, 'Test 52');
test(minimumFinishTime([[2,2],[3,3],[4,4],[5,5],[6,6]], 15, 50), 470, 'Test 53');
test(minimumFinishTime([[1, 2], [1, 2], [1, 2], [1, 2], [1, 2]], 5, 15), 55, 'Test 54');
test(minimumFinishTime([[3,5],[2,3],[4,4]], 10, 15), 128, 'Test 55');
test(minimumFinishTime([[5,10],[3,3],[2,2]], 10, 20), 150, 'Test 56');
test(minimumFinishTime([[100000,100000],[50000,50000],[25000,25000],[12500,12500],[6250,6250]], 100000, 1000), 106150000, 'Test 57');
test(minimumFinishTime([[100,10],[50,5],[25,2]], 20, 1000), 44980, 'Test 58');
test(minimumFinishTime([[100,10],[50,5],[20,2],[10,1]], 50, 100), Error: list index out of range, 'Test 59');
test(minimumFinishTime([[9,9],[8,8],[7,7],[6,6],[5,5],[4,4],[3,3],[2,2],[1,1]], 10, 100), Error: list index out of range, 'Test 60');
test(minimumFinishTime([[2,3],[3,4],[4,5],[5,6],[6,7],[7,8]], 3, 40), 197, 'Test 61');
test(minimumFinishTime([[10, 10], [20, 20], [30, 30]], 100, 50), 5150, 'Test 62');
test(minimumFinishTime([[1, 2], [2, 3], [3, 4], [4, 5]], 1, 1), 1, 'Test 63');
test(minimumFinishTime([[10000,2],[5000,3],[1000,4],[500,5],[250,6],[125,7],[62,8],[31,9],[15,10],[7,11]], 10000, 1000), 3639260, 'Test 64');
test(minimumFinishTime([[3,2],[4,3],[5,4],[6,5],[7,6]], 15, 30), 345, 'Test 65');
test(minimumFinishTime([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,15],[15,16]], 5, 200), 795, 'Test 66');
test(minimumFinishTime([[5,5],[5,5],[5,5],[5,5],[5,5],[5,5],[5,5],[5,5],[5,5],[5,5]], 10, 1000), 14990, 'Test 67');
test(minimumFinishTime([[1, 2], [2, 3], [3, 4]], 0, 100), 100, 'Test 68');
test(minimumFinishTime([[1,2],[1,3],[1,4],[1,5]], 5, 15), 55, 'Test 69');
test(minimumFinishTime([[5,2],[8,3],[1,2]], 20, 20), 155, 'Test 70');
test(minimumFinishTime([[5, 3], [10, 2], [15, 1]], 8, 15), Error: list index out of range, 'Test 71');
test(minimumFinishTime([[5,2],[10,2],[15,2]], 20, 1000), 17480, 'Test 72');
test(minimumFinishTime([[9,9],[8,8],[7,7],[6,6],[5,5]], 10, 800), 11990, 'Test 73');
test(minimumFinishTime([[2,3],[5,7],[8,9]], 5, 20), 125, 'Test 74');
test(minimumFinishTime([[5,3],[10,2],[2,6]], 7, 15), 128, 'Test 75');
test(minimumFinishTime([[5, 2], [3, 3], [4, 4]], 10, 20), 210, 'Test 76');
test(minimumFinishTime([[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10]], 7, 60), 443, 'Test 77');
test(minimumFinishTime([[1, 2], [2, 3], [3, 4], [4, 5]], 5, 30), 115, 'Test 78');
test(minimumFinishTime([[1,1],[1,1],[1,1],[1,1]], 1, 50), Error: list index out of range, 'Test 79');
test(minimumFinishTime([[1, 2], [1, 3], [1, 4], [1, 5], [1, 6]], 1, 1000), 1999, 'Test 80');
test(minimumFinishTime([[50,50],[25,25],[10,10],[5,5],[2,2]], 25, 750), 9725, 'Test 81');
test(minimumFinishTime([[100000, 2], [50000, 3]], 50000, 500), 49950000, 'Test 82');
test(minimumFinishTime([[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9], [9, 10], [10, 11]], 5, 50), 195, 'Test 83');
test(minimumFinishTime([[3,5],[5,3],[7,2]], 15, 200), 3285, 'Test 84');
test(minimumFinishTime([[1,2],[2,2],[3,2],[4,2],[5,2]], 10, 200), 1125, 'Test 85');
test(minimumFinishTime([[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9]], 20, 800), 11180, 'Test 86');
test(minimumFinishTime([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9]], 5, 50), 195, 'Test 87');
test(minimumFinishTime([[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9],[10,10]], 50, 500), Error: list index out of range, 'Test 88');
test(minimumFinishTime([[10,10],[5,5],[1,2]], 5, 30), 115, 'Test 89');
test(minimumFinishTime([[1, 100000], [2, 50000], [3, 25000], [4, 10000], [5, 5000]], 100000, 1000), 62402500, 'Test 90');
test(minimumFinishTime([[10,10],[20,20],[30,30]], 15, 100), 2485, 'Test 91');
test(minimumFinishTime([[1,10],[2,20],[3,30],[4,40]], 100, 500), 27650, 'Test 92');
test(minimumFinishTime([[10,10],[9,9],[8,8],[7,7],[6,6],[5,5],[4,4],[3,3],[2,2],[1,1]], 50, 1000), Error: list index out of range, 'Test 93');
test(minimumFinishTime([[1,2],[2,2],[3,2],[4,2],[5,2]], 100, 900), 23480, 'Test 94');
test(minimumFinishTime([[1000,1000],[1000,1000],[1000,1000]], 100000, 1000), 100900000, 'Test 95');
test(minimumFinishTime([[2,3],[5,7],[3,4]], 8, 100), 792, 'Test 96');
test(minimumFinishTime([[2,5],[3,4],[4,3]], 10, 100), 1090, 'Test 97');
test(minimumFinishTime([[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7]], 2, 900), Error: list index out of range, 'Test 98');
test(minimumFinishTime([[1, 10], [2, 5], [3, 2]], 10, 999), 9482, 'Test 99');
test(minimumFinishTime([[1,1],[1,2],[1,3],[1,4],[1,5]], 10, 1000), Error: list index out of range, 'Test 100');
test(minimumFinishTime([[5,5],[5,6],[5,7],[5,8],[5,9],[5,10]], 25, 1000), 27475, 'Test 101');
test(minimumFinishTime([[1,100],[2,50],[3,25],[4,10]], 5, 50), 295, 'Test 102');
test(minimumFinishTime([[1,2],[1,3],[1,4]], 5, 50), 195, 'Test 103');
test(minimumFinishTime([[7,2],[6,3],[5,4],[4,5],[3,6],[2,7],[1,8]], 8, 100), 842, 'Test 104');
test(minimumFinishTime([[5,2],[4,3],[3,4],[2,5]], 1, 999), 2996, 'Test 105');
test(minimumFinishTime([[1000, 100], [500, 50], [250, 25], [100, 10], [50, 5]], 500, 500), 199500, 'Test 106');
test(minimumFinishTime([[2, 2], [3, 3], [4, 4]], 10, 25), 190, 'Test 107');
test(minimumFinishTime([[100,100],[50,50],[25,25],[10,10]], 20, 50), 1480, 'Test 108');
test(minimumFinishTime([[1,2],[1,2],[1,2],[1,2],[1,2]], 1, 1000), 1999, 'Test 109');
test(minimumFinishTime([[2, 5], [1, 3], [3, 2], [2, 4]], 7, 30), 158, 'Test 110');
test(minimumFinishTime([[1,2],[2,3],[3,4],[4,5]], 2, 100), 248, 'Test 111');
test(minimumFinishTime([[1, 2], [1, 2], [1, 2], [1, 2]], 10, 50), 275, 'Test 112');
test(minimumFinishTime([[100000, 100000]], 100000, 1000), 199900000, 'Test 113');
test(minimumFinishTime([[1, 100000], [100000, 1]], 100000, 10), Error: list index out of range, 'Test 114');
test(minimumFinishTime([[1, 1000], [2, 500], [3, 250]], 50, 20), 970, 'Test 115');

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
