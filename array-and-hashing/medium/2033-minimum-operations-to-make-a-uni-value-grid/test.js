// Test: 2033. Minimum Operations To Make A Uni Value Grid
// 95 test cases from LeetCodeDataset
// Run: node test.js

const { minOperations } = require("./solution");

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

console.log("\n2033. Minimum Operations To Make A Uni Value Grid\n");

test(minOperations([[1,5],[2,3]], 1), 5, 'Test 1');
test(minOperations([[10,10],[10,10]], 5), 0, 'Test 2');
test(minOperations([[10,10],[10,10]], 3), 0, 'Test 3');
test(minOperations([[10,12],[14,16]], 2), 4, 'Test 4');
test(minOperations([[5,5,5],[5,5,5],[5,5,5]], 1), 0, 'Test 5');
test(minOperations([[2,4],[6,8]], 2), 4, 'Test 6');
test(minOperations([[1,2,3],[4,5,6],[7,8,9]], 1), 20, 'Test 7');
test(minOperations([[1,2],[3,4]], 2), -1, 'Test 8');
test(minOperations([[1,1,1],[1,1,1],[1,1,1]], 5), 0, 'Test 9');
test(minOperations([[1,1,1],[1,1,1]], 3), 0, 'Test 10');
test(minOperations([[1,2,3],[4,5,6],[7,8,9]], 2), -1, 'Test 11');
test(minOperations([[1,1],[2,2]], 3), -1, 'Test 12');
test(minOperations([[1,1,1],[1,1,1],[1,1,1]], 1), 0, 'Test 13');
test(minOperations([[1,2,3],[6,5,4],[7,8,9]], 1), 20, 'Test 14');
test(minOperations([[1,3,5,7],[9,11,13,15],[17,19,21,23]], 2), 36, 'Test 15');
test(minOperations([[7,14,21,28,35],[42,49,56,63,70],[77,84,91,98,105],[112,119,126,133,140]], 7), 100, 'Test 16');
test(minOperations([[100,200,300],[400,500,600],[700,800,900]], 100), 20, 'Test 17');
test(minOperations([[5,6,7,8],[9,10,11,12],[13,14,15,16]], 1), 36, 'Test 18');
test(minOperations([[1,2,3,4,5,6],[7,8,9,10,11,12],[13,14,15,16,17,18]], 1), 81, 'Test 19');
test(minOperations([[1,2],[3,4],[5,6]], 1), 9, 'Test 20');
test(minOperations([[1,5,9],[13,17,21],[25,29,33]], 4), 20, 'Test 21');
test(minOperations([[7,14,21],[14,28,42],[21,42,63]], 7), 17, 'Test 22');
test(minOperations([[1,1,1,1],[2,2,2,2],[3,3,3,3]], 1), 8, 'Test 23');
test(minOperations([[2,4,6,8],[10,12,14,16],[18,20,22,24]], 2), 36, 'Test 24');
test(minOperations([[1,2],[3,4],[5,7]], 2), -1, 'Test 25');
test(minOperations([[7,7,7],[7,8,7],[7,7,7]], 1), 1, 'Test 26');
test(minOperations([[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1]], 1), 0, 'Test 27');
test(minOperations([[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15]], 2), -1, 'Test 28');
test(minOperations([[7,11,15],[19,23,27],[31,35,39]], 2), 40, 'Test 29');
test(minOperations([[1,1,1],[2,2,2],[3,3,3]], 1), 6, 'Test 30');
test(minOperations([[10,20,30],[40,50,60],[70,80,90]], 15), -1, 'Test 31');
test(minOperations([[1,3,5,7,9],[2,4,6,8,10],[3,5,7,9,11]], 2), -1, 'Test 32');
test(minOperations([[3,6,9,12],[15,18,21,24],[27,30,33,36],[39,42,45,48]], 3), 64, 'Test 33');
test(minOperations([[100,200],[300,400]], 100), 4, 'Test 34');
test(minOperations([[1001,1002,1003,1004],[1005,1006,1007,1008],[1009,1010,1011,1012]], 1), 36, 'Test 35');
test(minOperations([[3,6,9,12],[6,12,18,24],[9,18,27,36],[12,24,36,48]], 3), 54, 'Test 36');
test(minOperations([[1,3,5],[7,9,11],[13,15,17]], 2), 20, 'Test 37');
test(minOperations([[1,1,1],[1,1,1],[1,2,1]], 1), 1, 'Test 38');
test(minOperations([[5000,5000,5000],[5000,5000,5000],[5000,5000,5000]], 1000), 0, 'Test 39');
test(minOperations([[1,2,3],[4,5,6],[7,8,9]], 3), -1, 'Test 40');
test(minOperations([[5,10,15],[20,25,30],[35,40,45]], 5), 20, 'Test 41');
test(minOperations([[2,4,6],[8,10,12],[14,16,18]], 2), 20, 'Test 42');
test(minOperations([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]], 7), -1, 'Test 43');
test(minOperations([[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20]], 1), 100, 'Test 44');
test(minOperations([[10,20,30,40,50],[60,70,80,90,100]], 10), 25, 'Test 45');
test(minOperations([[10,20,30],[20,30,40],[30,40,50]], 10), 8, 'Test 46');
test(minOperations([[2,4,6],[8,10,12],[14,16,18]], 5), -1, 'Test 47');
test(minOperations([[4,8,12,16],[8,16,24,32],[12,24,36,48],[16,32,48,64]], 4), 54, 'Test 48');
test(minOperations([[4,8,12],[16,20,24],[28,32,36]], 4), 20, 'Test 49');
test(minOperations([[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,2]], 1), 1, 'Test 50');
test(minOperations([[101,202,303],[404,505,606],[707,808,909]], 101), 20, 'Test 51');
test(minOperations([[7,14,21,28],[35,42,49,56],[63,70,77,84]], 7), 36, 'Test 52');
test(minOperations([[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20]], 5), -1, 'Test 53');
test(minOperations([[1,3,5,7,9],[11,13,15,17,19],[21,23,25,27,29]], 2), 56, 'Test 54');
test(minOperations([[1,2,3],[4,5,6],[7,8,9]], 4), -1, 'Test 55');
test(minOperations([[1,5,9],[2,6,10],[3,7,11]], 2), -1, 'Test 56');
test(minOperations([[1,3,5,7,9],[11,13,15,17,19],[21,23,25,27,29],[31,33,35,37,39]], 2), 100, 'Test 57');
test(minOperations([[101,102,103],[104,105,106],[107,108,109]], 1), 20, 'Test 58');
test(minOperations([[1,4,7,10],[13,16,19,22],[25,28,31,34]], 3), 36, 'Test 59');
test(minOperations([[1,2,3],[2,3,4],[3,4,5]], 1), 8, 'Test 60');
test(minOperations([[1,5,9],[2,6,10],[3,7,11]], 3), -1, 'Test 61');
test(minOperations([[5,5,5],[5,5,5],[5,5,10]], 5), 1, 'Test 62');
test(minOperations([[5,10,15,20],[25,30,35,40],[45,50,55,60]], 5), 36, 'Test 63');
test(minOperations([[1,2,3],[4,5,6],[7,8,9]], 10), -1, 'Test 64');
test(minOperations([[5,9,13],[17,21,25],[29,33,37]], 4), 20, 'Test 65');
test(minOperations([[3,6,9],[12,15,18],[21,24,27]], 3), 20, 'Test 66');
test(minOperations([[10,20,30],[40,50,60],[70,80,90]], 10), 20, 'Test 67');
test(minOperations([[1,1,1,1,1,1],[1,1,1,1,1,1],[1,1,1,1,1,1],[1,1,1,1,1,1]], 5), 0, 'Test 68');
test(minOperations([[1,1,1,1,1],[1,1,1,1,1],[1,1,2,1,1]], 1), 1, 'Test 69');
test(minOperations([[3,3,3,3,3],[3,3,3,3,3],[3,3,3,3,4]], 1), 1, 'Test 70');
test(minOperations([[3,9,15],[12,15,18],[21,24,27]], 3), 17, 'Test 71');
test(minOperations([[5,15,25,35],[45,55,65,75],[85,95,105,115],[125,135,145,155]], 10), 64, 'Test 72');
test(minOperations([[2,4,6],[8,10,12],[14,16,18]], 3), -1, 'Test 73');
test(minOperations([[100,102,104],[106,108,110],[112,114,116]], 2), 20, 'Test 74');
test(minOperations([[3,9,15],[21,27,33],[39,45,51]], 6), 20, 'Test 75');
test(minOperations([[1,1,1,1],[1,1,1,1],[1,1,2,1]], 1), 1, 'Test 76');
test(minOperations([[5,15,25],[35,45,55],[65,75,85]], 10), 20, 'Test 77');
test(minOperations([[1,1,1,2],[1,1,2,2],[1,2,2,3]], 1), 7, 'Test 78');
test(minOperations([[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1]], 1), 0, 'Test 79');
test(minOperations([[123,456,789],[1011,1213,1415],[1617,1819,2021]], 3), -1, 'Test 80');
test(minOperations([[1,3,5,7],[9,11,13,15],[17,19,21,23],[25,27,29,31]], 2), 64, 'Test 81');
test(minOperations([[5,10,15,20],[10,20,30,40],[15,30,45,60]], 5), 30, 'Test 82');
test(minOperations([[2,4,6,8,10],[12,14,16,18,20],[22,24,26,28,30]], 2), 56, 'Test 83');
test(minOperations([[1,5,9,13,17],[21,25,29,33,37],[41,45,49,53,57]], 4), 56, 'Test 84');
test(minOperations([[2,4,6,8],[10,12,14,16],[18,20,22,24],[26,28,30,32]], 2), 64, 'Test 85');
test(minOperations([[7,14,21],[28,35,42],[49,56,63]], 7), 20, 'Test 86');
test(minOperations([[10,20,30,40],[50,60,70,80],[90,100,110,120]], 10), 36, 'Test 87');
test(minOperations([[5,15,25,35],[45,55,65,75],[85,95,105,115]], 10), 36, 'Test 88');
test(minOperations([[1,2,3,4],[5,6,7,8],[9,10,11,12]], 1), 36, 'Test 89');
test(minOperations([[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15]], 1), 56, 'Test 90');
test(minOperations([[3,6,9,12],[15,18,21,24],[27,30,33,36]], 3), 36, 'Test 91');
test(minOperations([[1,4,7,10],[2,5,8,11],[3,6,9,12]], 3), -1, 'Test 92');
test(minOperations([[4,8,12,16],[20,24,28,32],[36,40,44,48]], 4), 36, 'Test 93');
test(minOperations([[2,4,6],[8,10,12],[14,16,18]], 1), 40, 'Test 94');
test(minOperations([[11,22,33],[44,55,66],[77,88,99]], 11), 20, 'Test 95');

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
