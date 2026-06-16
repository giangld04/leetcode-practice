// Test: 3402. Minimum Operations To Make Columns Strictly Increasing
// 93 test cases from LeetCodeDataset
// Run: node test.js

const { minimumOperations } = require("./solution");

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

console.log("\n3402. Minimum Operations To Make Columns Strictly Increasing\n");

test(minimumOperations([[5,5,5],[5,5,5],[5,5,5]]), 9, 'Test 1');
test(minimumOperations([[0,0,0],[1,1,1],[2,2,2]]), 0, 'Test 2');
test(minimumOperations([[3,2,1],[2,1,0],[1,2,3]]), 12, 'Test 3');
test(minimumOperations([[10,20],[15,25],[12,30],[8,35]]), 13, 'Test 4');
test(minimumOperations([[1,2,3],[2,3,4],[3,4,5]]), 0, 'Test 5');
test(minimumOperations([[3,2],[1,3],[3,4],[0,1]]), 15, 'Test 6');
test(minimumOperations([[1,1,1,1],[2,1,1,1],[3,2,1,1],[4,3,2,1],[5,4,3,2]]), 20, 'Test 7');
test(minimumOperations([[100,200,300],[200,100,400],[300,300,200],[400,500,100]]), 604, 'Test 8');
test(minimumOperations([[1,1,1,1,1],[2,2,2,2,2],[3,3,3,3,3],[4,4,4,4,4],[5,5,5,5,5]]), 0, 'Test 9');
test(minimumOperations([[100,90,80],[90,80,70],[80,70,60],[70,60,50]]), 198, 'Test 10');
test(minimumOperations([[1,2,3,4,5,6,7,8,9,10],[10,9,8,7,6,5,4,3,2,1],[2,4,6,8,10,12,14,16,18,20]]), 48, 'Test 11');
test(minimumOperations([[2500,2499,2498],[2497,2496,2495],[2494,2493,2492],[2491,2490,2489]]), 72, 'Test 12');
test(minimumOperations([[10,10,10,10,10],[9,9,9,9,9],[8,8,8,8,8],[7,7,7,7,7],[6,6,6,6,6]]), 100, 'Test 13');
test(minimumOperations([[10,9,8],[7,6,5],[4,3,2],[1,0,0]]), 71, 'Test 14');
test(minimumOperations([[10,10,10],[20,20,20],[30,30,30],[40,40,40],[50,50,50],[60,60,60]]), 0, 'Test 15');
test(minimumOperations([[1,1,1,1,1],[2,3,4,5,6],[6,5,4,3,2],[7,8,9,10,11]]), 9, 'Test 16');
test(minimumOperations([[3, 5, 7], [2, 4, 6], [1, 3, 5], [0, 2, 4]]), 36, 'Test 17');
test(minimumOperations([[1,2,3,4,5,6,7,8,9,10],[10,9,8,7,6,5,4,3,2,1],[2,3,4,5,6,7,8,9,10,11]]), 60, 'Test 18');
test(minimumOperations([[1,0,1,0,1],[2,1,2,1,2],[3,2,3,2,3],[4,3,4,3,4]]), 0, 'Test 19');
test(minimumOperations([[1,10,100,1000,10000],[2,20,200,2000,20000],[3,30,300,3000,30000],[4,40,400,4000,40000]]), 0, 'Test 20');
test(minimumOperations([[2499,2498,2497],[2496,2495,2494],[2493,2492,2491],[2490,2489,2488]]), 72, 'Test 21');
test(minimumOperations([[0,1000],[1000,0],[500,1500],[1500,500]]), 2503, 'Test 22');
test(minimumOperations([[2499,2499,2499],[2498,2498,2498],[2497,2497,2497],[2496,2496,2496],[2495,2495,2495]]), 60, 'Test 23');
test(minimumOperations([[1, 10, 20], [5, 15, 25], [10, 20, 30], [15, 25, 35]]), 0, 'Test 24');
test(minimumOperations([[1,2,3,4,5],[5,4,3,2,1],[6,7,8,9,10],[10,9,8,7,6],[11,12,13,14,15]]), 18, 'Test 25');
test(minimumOperations([[5,3,9],[1,7,8],[6,4,2],[10,11,12]]), 21, 'Test 26');
test(minimumOperations([[9,10,11],[12,13,14],[15,16,17],[18,19,20],[21,22,23]]), 0, 'Test 27');
test(minimumOperations([[1,10,100],[2,20,200],[3,30,300],[4,40,400]]), 0, 'Test 28');
test(minimumOperations([[1,2],[3,4],[5,6],[7,8],[9,10],[11,12],[13,14],[15,16],[17,18],[19,20]]), 0, 'Test 29');
test(minimumOperations([[2,1,1],[3,3,3],[4,4,5],[5,6,6]]), 0, 'Test 30');
test(minimumOperations([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10]]), 0, 'Test 31');
test(minimumOperations([[100,200],[200,100],[150,150],[300,50],[250,75]]), 537, 'Test 32');
test(minimumOperations([[5, 4, 3, 2, 1], [4, 3, 2, 1, 0], [3, 2, 1, 0, 2500], [2, 1, 0, 2500, 2499], [1, 0, 2500, 2499, 2498]]), 68, 'Test 33');
test(minimumOperations([[9,8,7,6,5,4,3,2,1,0],[0,9,8,7,6,5,4,3,2,1],[1,0,9,8,7,6,5,4,3,2],[2,1,0,9,8,7,6,5,4,3],[3,2,1,0,9,8,7,6,5,4]]), 100, 'Test 34');
test(minimumOperations([[10,20],[10,20],[10,20],[10,20],[10,20]]), 20, 'Test 35');
test(minimumOperations([[1,1,1,1,1,1],[2,2,2,2,2,2],[3,3,3,3,3,3],[4,4,4,4,4,4],[5,5,5,5,5,5]]), 0, 'Test 36');
test(minimumOperations([[1,1,1,1,1,1,1,1,1,1],[2,2,2,2,2,2,2,2,2,2],[3,3,3,3,3,3,3,3,3,3],[4,4,4,4,4,4,4,4,4,4]]), 0, 'Test 37');
test(minimumOperations([[2500,0,2500,0,2500,0,2500,0,2500,0],[0,2500,0,2500,0,2500,0,2500,0,2500],[1250,1250,1250,1250,1250,1250,1250,1250,1250,1250]]), 25020, 'Test 38');
test(minimumOperations([[1,1,1,1,1,1,1,1,1,1],[0,2,4,6,8,10,12,14,16,18],[1,3,5,7,9,11,13,15,17,19]]), 4, 'Test 39');
test(minimumOperations([[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,1,1]]), 30, 'Test 40');
test(minimumOperations([[1,10,100],[2,9,99],[3,8,98],[4,7,97],[5,6,96]]), 40, 'Test 41');
test(minimumOperations([[1,0,0,0,0,0,0,0,0,0],[2,1,0,0,0,0,0,0,0,0],[3,2,1,0,0,0,0,0,0,0],[4,3,2,1,0,0,0,0,0,0]]), 44, 'Test 42');
test(minimumOperations([[1,10,100],[1000,100,10],[10,100,1000],[100,10,1],[1000,1000,1000]]), 3082, 'Test 43');
test(minimumOperations([[1,3,5,7,9,11,13,15,17,19],[2,4,6,8,10,12,14,16,18,20],[3,5,7,9,11,13,15,17,19,21],[4,6,8,10,12,14,16,18,20,22]]), 0, 'Test 44');
test(minimumOperations([[300,250,200],[250,200,150],[200,150,100],[150,100,50]]), 918, 'Test 45');
test(minimumOperations([[2499,2499,2499],[2498,2498,2498],[2497,2497,2497],[2496,2496,2496]]), 36, 'Test 46');
test(minimumOperations([[100,200,300],[300,200,100],[250,150,50],[10,10,10]]), 1335, 'Test 47');
test(minimumOperations([[2500,2499,2498],[2499,2498,2497],[2498,2497,2496],[2497,2496,2495]]), 36, 'Test 48');
test(minimumOperations([[0,0,0,0,0,0,0],[1,1,1,1,1,1,1],[2,2,2,2,2,2,2],[3,3,3,3,3,3,3],[4,4,4,4,4,4,4],[5,5,5,5,5,5,5]]), 0, 'Test 49');
test(minimumOperations([[1,2,3,4],[2,3,4,5],[3,4,5,6],[4,5,6,7]]), 0, 'Test 50');
test(minimumOperations([[1,2,3],[3,4,5],[5,6,7],[7,8,9]]), 0, 'Test 51');
test(minimumOperations([[9,8,7],[6,5,4],[3,2,1],[0,-1,-2]]), 72, 'Test 52');
test(minimumOperations([[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1]]), 50, 'Test 53');
test(minimumOperations([[1,2,3,4,5,6],[0,1,2,3,4,5],[2,3,4,5,6,7],[3,4,5,6,7,8]]), 24, 'Test 54');
test(minimumOperations([[10,20,30,40,50],[5,15,25,35,45],[1,11,21,31,41],[6,16,26,36,46]]), 120, 'Test 55');
test(minimumOperations([[10, 10, 10], [9, 9, 9], [8, 8, 8], [7, 7, 7], [6, 6, 6], [5, 5, 5], [4, 4, 4], [3, 3, 3], [2, 2, 2], [1, 1, 1]]), 270, 'Test 56');
test(minimumOperations([[1,2,3,4,5],[5,4,3,2,1],[2,3,4,5,6],[6,5,4,3,2]]), 32, 'Test 57');
test(minimumOperations([[10,9,8,7,6,5,4,3,2,1],[20,19,18,17,16,15,14,13,12,11]]), 0, 'Test 58');
test(minimumOperations([[2499,2498,2497,2496],[2495,2494,2493,2492],[2491,2490,2489,2488],[2487,2486,2485,2484],[2483,2482,2481,2480]]), 200, 'Test 59');
test(minimumOperations([[1,1,1,1,1,1],[1,2,2,2,2,2],[1,2,3,3,3,3],[1,2,3,4,4,4]]), 10, 'Test 60');
test(minimumOperations([[5,5,5,5],[4,4,4,4],[3,3,3,3],[2,2,2,2],[1,1,1,1]]), 80, 'Test 61');
test(minimumOperations([[100,200,300],[50,250,150],[200,100,350],[150,350,50]]), 705, 'Test 62');
test(minimumOperations([[100,200,300,400,500],[250,250,250,250,250],[500,400,300,200,100],[1000,500,0,500,1000]]), 1362, 'Test 63');
test(minimumOperations([[1,5,9,13,17],[2,6,10,14,18],[3,7,11,15,19],[4,8,12,16,20]]), 0, 'Test 64');
test(minimumOperations([[1,2,3,4,5],[5,4,3,2,1],[2,3,4,5,6],[6,5,4,3,2],[3,4,5,6,7]]), 46, 'Test 65');
test(minimumOperations([[1,2,3,4,5],[5,4,3,2,1],[10,9,8,7,6],[15,14,13,12,11]]), 10, 'Test 66');
test(minimumOperations([[10,20,30],[25,15,35],[30,35,25],[35,25,40]]), 28, 'Test 67');
test(minimumOperations([[10,9,8,7],[7,6,5,4],[4,3,2,1],[1,0,-1,-2]]), 96, 'Test 68');
test(minimumOperations([[1000,999,998],[999,998,997],[998,997,996],[997,996,995]]), 36, 'Test 69');
test(minimumOperations([[10,20,30,40,50],[5,15,25,35,45],[1,11,21,31,41],[2,12,22,32,42],[3,13,23,33,43]]), 195, 'Test 70');
test(minimumOperations([[1, 1, 1, 1, 1], [1, 2, 3, 4, 5], [5, 4, 3, 2, 1], [1, 3, 5, 7, 9], [9, 7, 5, 3, 1]]), 32, 'Test 71');
test(minimumOperations([[1,1,1,1,1,1,1,1,1,1],[2,2,2,2,2,2,2,2,2,2],[3,3,3,3,3,3,3,3,3,3]]), 0, 'Test 72');
test(minimumOperations([[0,1000],[1000,0],[500,500],[250,750],[750,250]]), 4016, 'Test 73');
test(minimumOperations([[1,3,5,7,9],[2,4,6,8,10],[3,5,7,9,11],[4,6,8,10,12]]), 0, 'Test 74');
test(minimumOperations([[500,500,500,500,500,500],[1000,1000,1000,1000,1000,1000],[1500,1500,1500,1500,1500,1500],[2000,2000,2000,2000,2000,2000]]), 0, 'Test 75');
test(minimumOperations([[5,4,3,2,1],[10,9,8,7,6],[15,14,13,12,11],[20,19,18,17,16],[25,24,23,22,21]]), 0, 'Test 76');
test(minimumOperations([[0,1,2,3,4,5],[1,0,1,2,3,4],[2,1,0,1,2,3],[3,2,1,0,1,2],[4,3,2,1,0,1],[5,4,3,2,1,0]]), 110, 'Test 77');
test(minimumOperations([[100,200],[150,150],[200,100]]), 153, 'Test 78');
test(minimumOperations([[100, 200, 300], [90, 190, 290], [80, 180, 280], [70, 170, 270]]), 198, 'Test 79');
test(minimumOperations([[0,0],[1,0],[2,0],[3,0],[4,0],[5,0]]), 15, 'Test 80');
test(minimumOperations([[2500,2499,2498,2497,2496],[2495,2494,2493,2492,2491],[2490,2489,2488,2487,2486],[2485,2484,2483,2482,2481]]), 180, 'Test 81');
test(minimumOperations([[2, 3, 4, 5, 6], [1, 1, 1, 1, 1], [6, 5, 4, 3, 2], [1, 2, 3, 4, 5], [5, 4, 3, 2, 1]]), 81, 'Test 82');
test(minimumOperations([[100,200,300],[99,199,299],[98,198,298],[97,197,297]]), 36, 'Test 83');
test(minimumOperations([[0, 0, 0, 0], [1, 1, 1, 1], [2, 2, 2, 2], [3, 3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5], [6, 6, 6, 6], [7, 7, 7, 7], [8, 8, 8, 8], [9, 9, 9, 9]]), 0, 'Test 84');
test(minimumOperations([[1, 2, 3, 4], [2, 3, 4, 5], [3, 4, 5, 6], [4, 5, 6, 7], [5, 6, 7, 8]]), 0, 'Test 85');
test(minimumOperations([[1,2,3,4,5,6,7,8,9,10],[2,3,4,5,6,7,8,9,10,11],[3,4,5,6,7,8,9,10,11,12],[4,5,6,7,8,9,10,11,12,13]]), 0, 'Test 86');
test(minimumOperations([[1,2],[2,1],[3,4],[4,3],[5,6],[6,5]]), 6, 'Test 87');
test(minimumOperations([[1,9,3],[4,8,7],[6,5,10],[2,6,12]]), 19, 'Test 88');
test(minimumOperations([[10,20,30],[30,20,10],[20,30,20],[10,20,30],[30,20,10]]), 120, 'Test 89');
test(minimumOperations([[0,1,2,3,4,5],[0,1,2,3,4,5],[0,1,2,3,4,5],[0,1,2,3,4,5],[0,1,2,3,4,5]]), 60, 'Test 90');
test(minimumOperations([[2500, 2499, 2498], [2497, 2496, 2495], [2494, 2493, 2492], [2491, 2490, 2489]]), 72, 'Test 91');
test(minimumOperations([[1,1,1,1,1,1,1,1,1,1],[2,2,2,2,2,2,2,2,2,2],[3,3,3,3,3,3,3,3,3,3],[4,4,4,4,4,4,4,4,4,4],[5,5,5,5,5,5,5,5,5,5]]), 0, 'Test 92');
test(minimumOperations([[1,5,3],[4,2,6],[7,8,9],[10,11,12]]), 4, 'Test 93');

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
