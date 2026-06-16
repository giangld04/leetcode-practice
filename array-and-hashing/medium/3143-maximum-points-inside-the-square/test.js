// Test: 3143. Maximum Points Inside The Square
// 105 test cases from LeetCodeDataset
// Run: node test.js

const { maxPointsInsideSquare } = require("./solution");

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

console.log("\n3143. Maximum Points Inside The Square\n");

test(maxPointsInsideSquare([[1,1],[-1,-1],[2,-2]], "ccd"), 0, 'Test 1');
test(maxPointsInsideSquare([[0,0],[1,0],[-1,0],[0,1],[0,-1]], "abcde"), 5, 'Test 2');
test(maxPointsInsideSquare([[0,1],[1,0],[1,1]], "abc"), 3, 'Test 3');
test(maxPointsInsideSquare([[10,10],[-10,-10],[10,-10],[-10,10]], "abcd"), 4, 'Test 4');
test(maxPointsInsideSquare([[0,0],[0,1],[1,0],[1,1]], "abcd"), 4, 'Test 5');
test(maxPointsInsideSquare([[1,2],[2,1],[3,4],[4,3]], "abcd"), 4, 'Test 6');
test(maxPointsInsideSquare([[3,0],[-3,0],[0,3],[0,-3],[1,1],[-1,-1]], "abcdef"), 6, 'Test 7');
test(maxPointsInsideSquare([[1,1],[2,2],[3,3],[4,4]], "abcd"), 4, 'Test 8');
test(maxPointsInsideSquare([[0,0],[1,1],[2,2]], "abc"), 3, 'Test 9');
test(maxPointsInsideSquare([[1,2],[2,1],[1,-2],[-2,1],[-1,-2],[2,-1]], "abcdef"), 6, 'Test 10');
test(maxPointsInsideSquare([[0,0],[1,0],[0,1],[-1,0],[0,-1]], "abcde"), 5, 'Test 11');
test(maxPointsInsideSquare([[1,2],[2,1],[-1,-2],[-2,-1]], "abcd"), 4, 'Test 12');
test(maxPointsInsideSquare([[1,1],[2,2],[3,3],[4,4],[5,5]], "abcde"), 5, 'Test 13');
test(maxPointsInsideSquare([[1,0],[0,1],[-1,0],[0,-1]], "abcd"), 4, 'Test 14');
test(maxPointsInsideSquare([[1,1],[1,-1],[-1,1],[-1,-1]], "abcd"), 4, 'Test 15');
test(maxPointsInsideSquare([[1,1],[-2,-2],[-2,2]], "abb"), 1, 'Test 16');
test(maxPointsInsideSquare([[0,0],[1,0],[0,1]], "abc"), 3, 'Test 17');
test(maxPointsInsideSquare([[2,2],[-1,-2],[-4,4],[-3,1],[3,-3]], "abdca"), 2, 'Test 18');
test(maxPointsInsideSquare([[5,5],[5,-5],[-5,5],[-5,-5]], "abcd"), 4, 'Test 19');
test(maxPointsInsideSquare([[5,0],[0,5],[-5,0],[0,-5]], "abcd"), 4, 'Test 20');
test(maxPointsInsideSquare([[0,0]], "a"), 1, 'Test 21');
test(maxPointsInsideSquare([[10,10],[20,20],[30,30],[40,40]], "abcd"), 4, 'Test 22');
test(maxPointsInsideSquare([[0,0],[1,1],[-1,-1]], "aaa"), 1, 'Test 23');
test(maxPointsInsideSquare([[0,0],[1,1],[-1,-1],[2,2],[-2,-2]], "abcde"), 5, 'Test 24');
test(maxPointsInsideSquare([[5,5],[-5,-5],[0,0]], "aaa"), 1, 'Test 25');
test(maxPointsInsideSquare([[1,1],[2,2],[3,3]], "abc"), 3, 'Test 26');
test(maxPointsInsideSquare([[10,0],[-10,0],[0,10],[0,-10]], "abcd"), 4, 'Test 27');
test(maxPointsInsideSquare([[-1,-1],[-2,-2],[-3,-3],[-4,-4]], "abcd"), 4, 'Test 28');
test(maxPointsInsideSquare([[5,5],[-5,-5],[5,-5],[-5,5]], "abcd"), 4, 'Test 29');
test(maxPointsInsideSquare([[1,1],[1,2],[1,3],[2,1],[2,2],[2,3],[3,1],[3,2],[3,3],[0,0]], "abcdefghij"), 10, 'Test 30');
test(maxPointsInsideSquare([[10,10],[10,-10],[-10,10],[-10,-10],[20,20],[20,-20],[-20,20],[-20,-20],[30,30],[30,-30],[-30,30],[-30,-30]], "abcdefghijklmno"), 12, 'Test 31');
test(maxPointsInsideSquare([[0,0],[1,0],[0,1],[-1,0],[0,-1],[1,1],[-1,-1],[2,0],[0,2],[-2,0],[0,-2],[2,1],[1,2],[1,-1],[-1,1],[-2,-1],[-1,-2],[1,-2],[-2,1],[2,-1],[-1,2]], "abcdefghijklmnopqrstuvwxy"), 21, 'Test 32');
test(maxPointsInsideSquare([[1,2],[3,4],[5,6],[7,8],[9,10],[11,12],[13,14],[15,16],[17,18],[19,20],[21,22],[23,24],[25,26],[27,28],[29,30]], "abcdefghijklmnopqrstuvwxyzz"), 15, 'Test 33');
test(maxPointsInsideSquare([[10,0],[0,10],[-10,0],[0,-10],[5,5],[-5,-5],[5,-5],[-5,5],[15,15],[-15,-15],[15,-15],[-15,15],[20,20],[-20,-20],[20,-20],[-20,20]], "abcdefghijklmnopqrstuv"), 16, 'Test 34');
test(maxPointsInsideSquare([[-1,1],[1,-1],[2,2],[-2,-2],[3,3],[-3,-3],[4,4],[-4,-4],[5,5],[-5,-5]], "abcdefghijkm"), 10, 'Test 35');
test(maxPointsInsideSquare([[1,0],[0,1],[-1,0],[0,-1],[2,0],[0,2],[-2,0],[0,-2],[3,0],[0,3],[-3,0],[0,-3],[4,0],[0,4],[-4,0],[0,-4]], "abcdefghijklmnop"), 16, 'Test 36');
test(maxPointsInsideSquare([[0,0],[1,0],[-1,0],[0,1],[0,-1],[1,1],[-1,-1],[1,-1],[-1,1],[2,2],[-2,-2],[2,-2],[-2,2]], "abcdefghijkl"), Error: string index out of range, 'Test 37');
test(maxPointsInsideSquare([[0,0],[1,0],[-1,0],[0,1],[0,-1],[1,1],[-1,-1],[1,-1],[-1,1],[2,2]], "abcdefghij"), 10, 'Test 38');
test(maxPointsInsideSquare([[1,1],[1,-1],[-1,1],[-1,-1],[2,2],[2,-2],[-2,2],[-2,-2],[3,3],[3,-3],[-3,3],[-3,-3]], "abcdefghijkl"), 12, 'Test 39');
test(maxPointsInsideSquare([[0,1],[1,0],[0,-1],[-1,0],[2,0],[0,2],[-2,0],[0,-2],[3,0],[0,3],[-3,0],[0,-3]], "abcdefghijkl"), 12, 'Test 40');
test(maxPointsInsideSquare([[1,1],[1,2],[2,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9]], "abcdefghij"), Error: string index out of range, 'Test 41');
test(maxPointsInsideSquare([[-1000000000,1000000000],[1000000000,-1000000000],[0,0],[100,100],[-100,-100],[50,50],[-50,-50]], "abcdefghijkl"), 7, 'Test 42');
test(maxPointsInsideSquare([[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9],[10,10]], "abcdefghij"), 10, 'Test 43');
test(maxPointsInsideSquare([[5,5],[-5,-5],[5,-5],[-5,5],[10,10],[-10,-10],[10,-10],[-10,10],[15,15],[-15,-15],[15,-15],[-15,15]], "abcdefghijklmnopq"), 12, 'Test 44');
test(maxPointsInsideSquare([[1,2],[2,1],[3,4],[4,3],[5,6],[6,5],[7,8],[8,7],[9,10],[10,9],[11,12],[12,11],[13,14],[14,13],[15,16]], "abcdefghijklmnop"), 15, 'Test 45');
test(maxPointsInsideSquare([[1,1],[-1,-1],[2,2],[-2,-2],[3,3],[-3,-3],[4,4],[-4,-4],[5,5],[-5,-5]], "abcdefghij"), 10, 'Test 46');
test(maxPointsInsideSquare([[1,2],[2,1],[-1,-2],[-2,-1],[3,3],[-3,-3],[4,4],[-4,-4],[5,5],[-5,-5]], "abcdefghij"), 10, 'Test 47');
test(maxPointsInsideSquare([[0,0],[1,0],[0,1],[-1,0],[0,-1],[1,1],[-1,-1],[1,-1],[-1,1],[2,0],[0,2],[-2,0],[0,-2],[2,2],[-2,-2],[2,-2],[-2,2]], "abcdefghijklmnop"), Error: string index out of range, 'Test 48');
test(maxPointsInsideSquare([[1,2],[2,1],[-1,-2],[-2,-1],[1,-1],[-1,1],[2,2],[-2,-2],[2,-2],[-2,2]], "abcdefghij"), 10, 'Test 49');
test(maxPointsInsideSquare([[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9],[10,10],[11,11],[12,12],[13,13],[14,14],[15,15]], "abcdefghijklmno"), 15, 'Test 50');
test(maxPointsInsideSquare([[0,0],[1,0],[0,1],[1,1],[-1,0],[0,-1],[-1,-1],[-1,1],[1,-1]], "abcdefghi"), 9, 'Test 51');
test(maxPointsInsideSquare([[0,0],[1,1],[1,2],[2,1],[2,2],[3,3],[3,4],[4,3],[4,4],[5,5],[5,6],[6,5],[6,6],[7,7],[7,8],[8,7],[8,8]], "abcdefghijklmnop"), Error: string index out of range, 'Test 52');
test(maxPointsInsideSquare([[1,1],[1,2],[2,1],[2,2],[2,3],[3,2],[3,3],[4,4]], "abcdefgh"), 8, 'Test 53');
test(maxPointsInsideSquare([[10,10],[-10,-10],[5,0],[-5,0],[0,5],[0,-5],[3,4],[-3,-4],[4,-3],[-4,3]], "abcdefghij"), 10, 'Test 54');
test(maxPointsInsideSquare([[1,1],[2,2],[3,3],[4,4],[5,5],[1,2],[2,1],[-1,-2],[-2,-1]], "abcdefghijk"), 9, 'Test 55');
test(maxPointsInsideSquare([[-1,0],[0,1],[1,0],[0,-1],[1,1],[-1,-1],[2,2],[-2,-2],[3,3],[-3,-3],[4,4],[-4,-4]], "abcdefghijklmn"), 12, 'Test 56');
test(maxPointsInsideSquare([[1,0],[0,1],[-1,0],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1],[2,2],[-2,-2]], "abcdefghij"), 10, 'Test 57');
test(maxPointsInsideSquare([[1000000000,1000000000],[-1000000000,-1000000000],[500000000,0],[-500000000,0],[0,500000000],[0,-500000000],[300000000,400000000],[-300000000,-400000000],[400000000,-300000000],[-400000000,300000000]], "abcdefghij"), 10, 'Test 58');
test(maxPointsInsideSquare([[1,1],[1,-1],[-1,1],[-1,-1],[2,2],[2,-2],[-2,2],[-2,-2],[3,3],[3,-3],[-3,3],[-3,-3],[4,4],[4,-4],[-4,4],[-4,-4]], "abcdefghijklmnop"), 16, 'Test 59');
test(maxPointsInsideSquare([[999999999,999999999],[-999999999,-999999999],[999999999,-999999999],[-999999999,999999999]], "abcd"), 4, 'Test 60');
test(maxPointsInsideSquare([[0,0],[0,1],[0,-1],[1,0],[-1,0],[2,0],[0,2],[-2,0],[1,1],[1,-1],[-1,1],[-1,-1],[2,1],[2,-1],[-2,1],[-2,-1]], "abcdefghijklmno"), Error: string index out of range, 'Test 61');
test(maxPointsInsideSquare([[1,0],[0,1],[-1,0],[0,-1],[2,0],[0,2],[-2,0],[0,-2],[1,1],[1,-1],[-1,1],[-1,-1]], "abcdefghijkl"), 12, 'Test 62');
test(maxPointsInsideSquare([[1,1],[1,2],[2,1],[2,2],[1,-1],[-1,1],[-2,-2],[2,-2],[-2,2],[1,-2],[-2,1],[2,1],[-1,-2],[2,2],[-2,-1],[1,2],[2,-1],[-1,2],[3,3],[3,-3],[-3,3],[-3,-3]], "abcdefghijklmnopqrstuvwxyz"), 22, 'Test 63');
test(maxPointsInsideSquare([[10,10],[-10,-10],[10,-10],[-10,10],[1,1],[-1,-1],[0,0]], "abcdefghijk"), 7, 'Test 64');
test(maxPointsInsideSquare([[1,0],[-1,0],[0,1],[0,-1],[1,1],[-1,-1],[1,-1],[-1,1],[2,0],[-2,0],[0,2],[0,-2],[3,0],[-3,0],[0,3],[0,-3]], "abcdefghijklmnop"), 16, 'Test 65');
test(maxPointsInsideSquare([[-1,-1],[-2,-2],[-3,-3],[-4,-4],[-5,-5],[-6,-6],[-7,-7],[-8,-8],[-9,-9],[-10,-10]], "abcdefghijk"), 10, 'Test 66');
test(maxPointsInsideSquare([[1,2],[2,1],[-1,-2],[-2,-1],[1,-1],[-1,1],[2,-2],[-2,2],[3,3],[3,-3],[-3,3],[-3,-3],[4,4],[4,-4],[-4,4],[-4,-4]], "abcdefghijklmnopqr"), 16, 'Test 67');
test(maxPointsInsideSquare([[1,1],[1,2],[2,1],[2,2],[1,-1],[-1,1],[-2,-2],[2,-2],[-2,2],[1,-2],[-2,1],[2,1],[-1,-2],[2,2],[-2,-1],[1,2],[2,-1],[-1,2]], "abcdefghijklmnopqrstuv"), 18, 'Test 68');
test(maxPointsInsideSquare([[5,0],[-5,0],[0,5],[0,-5],[2,2],[-2,-2],[3,3],[-3,-3],[1,1],[-1,-1],[4,4],[-4,-4],[6,6],[-6,-6]], "abcdefghijklmnopqr"), 14, 'Test 69');
test(maxPointsInsideSquare([[1000000000,1000000000],[-1000000000,-1000000000],[1000000000,-1000000000],[-1000000000,1000000000],[500000000,500000000],[-500000000,-500000000]], "abcdef"), 6, 'Test 70');
test(maxPointsInsideSquare([[1,2],[2,1],[3,0],[0,3],[-1,-2],[-2,-1],[-3,0],[0,-3],[1,-1],[-1,1],[2,-2],[-2,2],[3,-3],[-3,3]], "abcdefghijklmno"), 14, 'Test 71');
test(maxPointsInsideSquare([[10,10],[-10,-10],[10,-10],[-10,10],[5,5],[-5,-5],[5,-5],[-5,5],[0,0],[3,3],[-3,-3],[3,-3],[-3,3],[7,7],[-7,-7]], "abcdefghijklmnopqrst"), 15, 'Test 72');
test(maxPointsInsideSquare([[1,1],[1,-1],[-1,1],[-1,-1],[2,2],[2,-2],[-2,2],[-2,-2]], "aaaaabbbbb"), 0, 'Test 73');
test(maxPointsInsideSquare([[-7,-7],[-7,7],[7,-7],[7,7],[2,2],[-2,-2],[2,-2],[-2,2],[0,0]], "abcdefghij"), 9, 'Test 74');
test(maxPointsInsideSquare([[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,0],[9,0],[10,0]], "abcdefghij"), 10, 'Test 75');
test(maxPointsInsideSquare([[0,0],[1,0],[-1,0],[0,1],[0,-1],[2,0],[0,2],[-2,0],[0,-2],[3,0],[0,3],[-3,0],[0,-3]], "abcdefghijklm"), 13, 'Test 76');
test(maxPointsInsideSquare([[0,0],[1,0],[0,1],[-1,0],[0,-1],[2,2],[-2,-2],[2,-2],[-2,2]], "abcdefghi"), 9, 'Test 77');
test(maxPointsInsideSquare([[1,1],[1,-1],[-1,1],[-1,-1],[2,2],[2,-2],[-2,2],[-2,-2],[3,3],[3,-3],[-3,3],[-3,-3],[0,0]], "abcdefghijklm"), 13, 'Test 78');
test(maxPointsInsideSquare([[0,0],[1,1],[-1,-1],[2,2],[-2,-2],[3,3],[-3,-3],[4,4],[-4,-4]], "abcdefghi"), 9, 'Test 79');
test(maxPointsInsideSquare([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11]], "abcdefghijk"), 10, 'Test 80');
test(maxPointsInsideSquare([[1,1],[1,2],[2,1],[2,2],[3,3],[3,4],[4,3],[4,4],[5,5],[5,6],[6,5],[6,6]], "abcdefghijkl"), 12, 'Test 81');
test(maxPointsInsideSquare([[0,0],[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9],[10,10]], "abcdefghijk"), 11, 'Test 82');
test(maxPointsInsideSquare([[1,0],[-1,0],[0,1],[0,-1],[2,0],[0,2],[-2,0],[0,-2],[3,0],[0,3],[-3,0],[0,-3],[4,0],[0,4],[-4,0],[0,-4]], "abcdefghijklmnop"), 16, 'Test 83');
test(maxPointsInsideSquare([[10,10],[-10,-10],[10,-10],[-10,10],[0,0]], "abcde"), 5, 'Test 84');
test(maxPointsInsideSquare([[100,0],[0,100],[-100,0],[0,-100],[50,50],[50,-50],[-50,50],[-50,-50],[25,25],[25,-25],[-25,25],[-25,-25]], "abcdefghijkl"), 12, 'Test 85');
test(maxPointsInsideSquare([[1000000000,0],[-1000000000,0],[0,1000000000],[0,-1000000000],[500000000,500000000]], "abcde"), 5, 'Test 86');
test(maxPointsInsideSquare([[10,0],[0,10],[-10,0],[0,-10],[20,0],[0,20],[-20,0],[0,-20],[10,10],[10,-10],[-10,10],[-10,-10]], "abcdefghijkl"), 12, 'Test 87');
test(maxPointsInsideSquare([[0,0],[1,1],[1,-1],[-1,1],[-1,-1]], "abcde"), 5, 'Test 88');
test(maxPointsInsideSquare([[5,5],[-5,-5],[4,4],[-4,-4],[3,3],[-3,-3],[2,2],[-2,-2],[1,1],[-1,-1]], "abcdefghij"), 10, 'Test 89');
test(maxPointsInsideSquare([[1,1],[1,-1],[-1,1],[-1,-1],[0,0],[0,1],[0,-1],[1,0],[-1,0]], "abcdefghi"), 9, 'Test 90');
test(maxPointsInsideSquare([[1000000000, 0], [0, 1000000000], [-1000000000, 0], [0, -1000000000]], "abcd"), 4, 'Test 91');
test(maxPointsInsideSquare([[5,0],[0,5],[-5,0],[0,-5],[3,4],[4,3],[-3,-4],[-4,-3]], "abcdefgh"), 8, 'Test 92');
test(maxPointsInsideSquare([[1,0],[0,1],[-1,0],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1],[2,2],[2,-2],[-2,2],[-2,-2]], "abcdefghijkl"), 12, 'Test 93');
test(maxPointsInsideSquare([[10,10],[20,20],[30,30],[40,40],[50,50],[60,60],[70,70],[80,80],[90,90],[100,100]], "abcdefghij"), 10, 'Test 94');
test(maxPointsInsideSquare([[-10,10],[10,-10],[10,10],[-10,-10],[5,5],[-5,-5],[5,-5],[-5,5]], "abcdefgh"), 8, 'Test 95');
test(maxPointsInsideSquare([[100,0],[0,100],[-100,0],[0,-100],[50,50],[50,-50],[-50,50],[-50,-50],[10,10],[-10,-10]], "abcdefghijklm"), 10, 'Test 96');
test(maxPointsInsideSquare([[5,0],[-5,0],[0,5],[0,-5],[2,2],[-2,-2],[3,3],[-3,-3]], "abcdefgh"), 8, 'Test 97');
test(maxPointsInsideSquare([[1000000000,1000000000],[-1000000000,-1000000000],[1000000000,-1000000000],[-1000000000,1000000000]], "abcd"), 4, 'Test 98');
test(maxPointsInsideSquare([[-1,-1],[1,1],[-1,1],[1,-1],[0,0],[2,0],[0,2],[-2,0],[0,-2],[3,3],[-3,-3]], "abcdefghijklm"), 11, 'Test 99');
test(maxPointsInsideSquare([[0,0],[1,1],[1,-1],[-1,1],[-1,-1],[2,2],[2,-2],[-2,2],[-2,-2]], "abcdefghi"), 9, 'Test 100');
test(maxPointsInsideSquare([[5,5],[5,-5],[-5,5],[-5,-5],[1,1],[1,-1],[-1,1],[-1,-1]], "abcdefgh"), 8, 'Test 101');
test(maxPointsInsideSquare([[1,0],[0,1],[-1,0],[0,-1],[2,0],[0,2],[-2,0],[0,-2],[3,0],[0,3],[-3,0],[0,-3]], "abcdefghijkl"), 12, 'Test 102');
test(maxPointsInsideSquare([[1000000000,1000000000],[1000000000,-1000000000],[-1000000000,1000000000],[-1000000000,-1000000000],[0,0]], "abcde"), 5, 'Test 103');
test(maxPointsInsideSquare([[1,1],[1,-1],[-1,1],[-1,-1],[2,2],[2,-2],[-2,2],[-2,-2],[3,3],[3,-3]], "abcdefghij"), 10, 'Test 104');
test(maxPointsInsideSquare([[-9,-9],[-9,9],[9,-9],[9,9],[1,2],[2,1],[-1,-2],[-2,-1],[0,0],[5,5]], "abcdefghijk"), 10, 'Test 105');

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
