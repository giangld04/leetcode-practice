// Test: 1642. Furthest Building You Can Reach
// 118 test cases from LeetCodeDataset
// Run: node test.js

const { furthestBuilding } = require("./solution");

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

console.log("\n1642. Furthest Building You Can Reach\n");

test(furthestBuilding([10,15,20,25,30], 0, 2), 2, 'Test 1');
test(furthestBuilding([3,1,2,1,5], 2, 1), 4, 'Test 2');
test(furthestBuilding([5,5,5,5,5], 0, 0), 4, 'Test 3');
test(furthestBuilding([1,1000000,1,1000000,1], 1000000, 1), 4, 'Test 4');
test(furthestBuilding([10,15,20,25,30], 30, 2), 4, 'Test 5');
test(furthestBuilding([1,1000000], 999999, 0), 1, 'Test 6');
test(furthestBuilding([14,3,19,3], 17, 0), 3, 'Test 7');
test(furthestBuilding([1,2,3,4,5], 10, 0), 4, 'Test 8');
test(furthestBuilding([5,4,3,2,1], 0, 0), 4, 'Test 9');
test(furthestBuilding([4,4,4,4,4,4,4,4,4,4], 100, 5), 9, 'Test 10');
test(furthestBuilding([100,90,80,70,60], 50, 0), 4, 'Test 11');
test(furthestBuilding([10,15,20,25,30], 30, 0), 4, 'Test 12');
test(furthestBuilding([1,3,5,7,9], 20, 2), 4, 'Test 13');
test(furthestBuilding([1,2,3,4,5,6,7,8,9,10], 0, 5), 5, 'Test 14');
test(furthestBuilding([3,14,3,14,3,3,14,3,14], 1, 1), 2, 'Test 15');
test(furthestBuilding([1,3,5,7,9,11,13,15], 20, 3), 7, 'Test 16');
test(furthestBuilding([1,3,5,7,9], 10, 0), 4, 'Test 17');
test(furthestBuilding([1,1,1,1,1], 0, 0), 4, 'Test 18');
test(furthestBuilding([1,2,3,4,5,6,7,8,9,10], 18, 1), 9, 'Test 19');
test(furthestBuilding([4,2,7,6,9,14,12], 5, 1), 4, 'Test 20');
test(furthestBuilding([1,5,1,2,3,4,10000], 4, 1), 5, 'Test 21');
test(furthestBuilding([5,1,3,4,2], 0, 1), 2, 'Test 22');
test(furthestBuilding([4,2,3], 0, 1), 2, 'Test 23');
test(furthestBuilding([5,18,22,33,8,26,48,29,55,46], 83, 3), 9, 'Test 24');
test(furthestBuilding([1,2], 0, 0), 0, 'Test 25');
test(furthestBuilding([4,12,2,7,3,18,20,3,19], 10, 2), 7, 'Test 26');
test(furthestBuilding([1,3,5,7,9], 100, 0), 4, 'Test 27');
test(furthestBuilding([9,8,7,6,5], 0, 5), 4, 'Test 28');
test(furthestBuilding([1,3,6,10,15,21,28,36,45,55,66,78,91,105], 100, 2), 13, 'Test 29');
test(furthestBuilding([5,4,3,2,1,0,1,2,3,4,5], 10, 0), 10, 'Test 30');
test(furthestBuilding([1,3,5,4,2,1,3,5,4,2,1,3,5,4,2,1,3,5,4,2,1], 20, 3), 20, 'Test 31');
test(furthestBuilding([5,18,3,14,5,19,2,13,11,18,23,25,28,30,35], 30, 4), 14, 'Test 32');
test(furthestBuilding([10,20,30,40,50,60,70,80,90,100], 200, 3), 9, 'Test 33');
test(furthestBuilding([10,9,8,7,6,5,4,3,2,1], 10, 0), 9, 'Test 34');
test(furthestBuilding([1,2,3,100,101,102,103,104,105], 10, 3), 8, 'Test 35');
test(furthestBuilding([1,5,3,6,7,3,8,4,9,2,10,6,11,7,12,8,13,9,14,10], 20, 4), 17, 'Test 36');
test(furthestBuilding([1,3,6,10,15,21,28,36,45,55], 50, 2), 9, 'Test 37');
test(furthestBuilding([4,12,2,7,3,18,20,3,19,10,5,21,17,8,15], 15, 3), 13, 'Test 38');
test(furthestBuilding([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31], 100, 3), 15, 'Test 39');
test(furthestBuilding([5,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36], 50, 5), 19, 'Test 40');
test(furthestBuilding([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 0, 0), 19, 'Test 41');
test(furthestBuilding([4,2,6,10,14,18,22,26,30,34,38,42,46,50], 20, 4), 10, 'Test 42');
test(furthestBuilding([100,90,80,70,60,50,40,30,20,10], 100, 3), 9, 'Test 43');
test(furthestBuilding([50,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1], 0, 0), 49, 'Test 44');
test(furthestBuilding([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2], 100, 10), 59, 'Test 45');
test(furthestBuilding([100,90,80,70,60,50,40,30,20,10], 0, 0), 9, 'Test 46');
test(furthestBuilding([5,8,17,14,12,19,21,16,18,25,27,22,24,26,30], 30, 4), 14, 'Test 47');
test(furthestBuilding([5,10,15,20,25,30,35,40,45,50], 50, 5), 9, 'Test 48');
test(furthestBuilding([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49], 100, 5), 24, 'Test 49');
test(furthestBuilding([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 50, 5), 19, 'Test 50');
test(furthestBuilding([10,15,20,25,30,35,40], 30, 2), 6, 'Test 51');
test(furthestBuilding([1,1,1,1,1,1,1,1,1,1000], 0, 0), 8, 'Test 52');
test(furthestBuilding([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], 15, 3), 19, 'Test 53');
test(furthestBuilding([3,17,9,16,14,3,17,13,19,20,15,2,18,12,1,12,14,9,1,19], 20, 3), 14, 'Test 54');
test(furthestBuilding([1,10,1,10,1,10,1,10,1,10], 25, 3), 9, 'Test 55');
test(furthestBuilding([5,18,3,14,5,19,2,13,11,18], 20, 3), 9, 'Test 56');
test(furthestBuilding([40,20,30,10,50,60,70,80,90], 100, 2), 8, 'Test 57');
test(furthestBuilding([1,2,3,4,5,15,20,25,30,35], 10, 0), 4, 'Test 58');
test(furthestBuilding([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3], 0, 0), 29, 'Test 59');
test(furthestBuilding([1,1,2,1,1,2,1,1,2,1], 1, 1), 7, 'Test 60');
test(furthestBuilding([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2], 10, 0), 19, 'Test 61');
test(furthestBuilding([100,90,80,70,60,50,40,30,20,10,1], 10, 5), 10, 'Test 62');
test(furthestBuilding([10,16,18,15,12,19,20,18,17,16], 15, 2), 9, 'Test 63');
test(furthestBuilding([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2], 0, 5), 10, 'Test 64');
test(furthestBuilding([5,4,3,2,1,0], 10, 1), 5, 'Test 65');
test(furthestBuilding([1,3,6,7,8,10,12,13,14,15,17], 15, 2), 10, 'Test 66');
test(furthestBuilding([1,3,6,7,9,12,15,18,21,24,27,30,33,36,39,42,45,48,51,54], 100, 5), 19, 'Test 67');
test(furthestBuilding([10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1], 30, 5), 19, 'Test 68');
test(furthestBuilding([1,10,1,10,1,10,1,10,1,10], 30, 1), 8, 'Test 69');
test(furthestBuilding([100,99,98,97,96,95,94,93,92,91], 5, 0), 9, 'Test 70');
test(furthestBuilding([1,100,2,99,3,98,4,97,5,96], 100, 5), 9, 'Test 71');
test(furthestBuilding([4,10,15,20,25,30,35,40,45,50], 50, 2), 9, 'Test 72');
test(furthestBuilding([10,20,10,20,10,20,10,20,10,20], 50, 4), 9, 'Test 73');
test(furthestBuilding([25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1], 0, 0), 24, 'Test 74');
test(furthestBuilding([5,5,5,5,5,5,5,5,5,5], 10, 1), 9, 'Test 75');
test(furthestBuilding([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39], 100, 3), 19, 'Test 76');
test(furthestBuilding([100,150,200,250,300,350,400,450,500], 1000, 3), 8, 'Test 77');
test(furthestBuilding([1,5,1,5,1,5,1,5,1,5], 20, 3), 9, 'Test 78');
test(furthestBuilding([10,15,20,25,30,35,40,45,50,55], 100, 2), 9, 'Test 79');
test(furthestBuilding([1,5,20,30,40,50,60,70,80,90], 150, 2), 9, 'Test 80');
test(furthestBuilding([1,100,2,101,3,102,4,103,5], 100, 2), 6, 'Test 81');
test(furthestBuilding([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25], 100, 5), 24, 'Test 82');
test(furthestBuilding([1,3,6,10,15,21,28,36,45,55,66,78,91,105], 100, 5), 13, 'Test 83');
test(furthestBuilding([10,9,8,7,6,5,4,3,2,1], 50, 5), 9, 'Test 84');
test(furthestBuilding([1,1000000,1,1000000,1,1000000,1,1000000,1,1000000], 1000000, 4), 9, 'Test 85');
test(furthestBuilding([5,18,12,15,20,10,19,21], 50, 3), 7, 'Test 86');
test(furthestBuilding([4,4,4,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 20, 2), 19, 'Test 87');
test(furthestBuilding([1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2], 1, 1), 29, 'Test 88');
test(furthestBuilding([1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9], 30, 5), 15, 'Test 89');
test(furthestBuilding([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], 150, 5), 29, 'Test 90');
test(furthestBuilding([10,15,20,25,30,35,40,45,50], 30, 2), 8, 'Test 91');
test(furthestBuilding([1,2,3,4,5,6,7,8,9,10], 45, 0), 9, 'Test 92');
test(furthestBuilding([1,3,6,10,15,21,28,36,45,55,66,78,91,105], 100, 1), 13, 'Test 93');
test(furthestBuilding([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 50, 5), 14, 'Test 94');
test(furthestBuilding([1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9], 20, 3), 16, 'Test 95');
test(furthestBuilding([30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11], 50, 3), 19, 'Test 96');
test(furthestBuilding([1,3,6,10,15,21,28,36,45,55], 100, 3), 9, 'Test 97');
test(furthestBuilding([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40], 200, 15), 39, 'Test 98');
test(furthestBuilding([10,20,10,20,10,20,10,20,10,20], 25, 2), 8, 'Test 99');
test(furthestBuilding([4,3,2,1,4,3,2,1,4,3,2,1,4,3,2,1,4,3,2,1], 15, 2), 19, 'Test 100');
test(furthestBuilding([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], 20, 3), 19, 'Test 101');
test(furthestBuilding([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39], 100, 10), 19, 'Test 102');
test(furthestBuilding([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 30, 2), 19, 'Test 103');
test(furthestBuilding([100,200,300,400,500,600,700,800,900,1000], 4000, 5), 9, 'Test 104');
test(furthestBuilding([5,8,6,7,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24], 50, 3), 19, 'Test 105');
test(furthestBuilding([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 50, 4), 19, 'Test 106');
test(furthestBuilding([1,5,7,8,10,12,15,20,25,30], 15, 3), 9, 'Test 107');
test(furthestBuilding([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], 150, 10), 29, 'Test 108');
test(furthestBuilding([1,10,20,30,40,50,60,70,80,90,100], 55, 3), 8, 'Test 109');
test(furthestBuilding([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 50, 2), 19, 'Test 110');
test(furthestBuilding([10,15,20,25,30,35,40,45,50,55], 20, 2), 6, 'Test 111');
test(furthestBuilding([100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119], 50, 5), 19, 'Test 112');
test(furthestBuilding([100,90,80,70,60,50,40,30,20,10], 50, 3), 9, 'Test 113');
test(furthestBuilding([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 0, 0), 31, 'Test 114');
test(furthestBuilding([100,90,80,70,60,50,40,30,20,10], 100, 0), 9, 'Test 115');
test(furthestBuilding([5,10,15,10,5,10,15,20,25,30], 40, 1), 9, 'Test 116');
test(furthestBuilding([10,20,30,40,50,60,70,80,90,100], 150, 3), 9, 'Test 117');
test(furthestBuilding([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25], 100, 4), 24, 'Test 118');

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
