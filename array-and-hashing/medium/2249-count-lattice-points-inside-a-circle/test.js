// Test: 2249. Count Lattice Points Inside A Circle
// 114 test cases from LeetCodeDataset
// Run: node test.js

const { countLatticePoints } = require("./solution");

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

console.log("\n2249. Count Lattice Points Inside A Circle\n");

test(countLatticePoints([[1,1,1],[2,2,2],[3,3,3]]), 33, 'Test 1');
test(countLatticePoints([[10,10,5],[15,15,5],[20,20,5],[25,25,5]]), 276, 'Test 2');
test(countLatticePoints([[2,2,1]]), 5, 'Test 3');
test(countLatticePoints([[10,10,5],[20,20,5],[30,30,5]]), 243, 'Test 4');
test(countLatticePoints([[2,2,2],[3,4,1]]), 16, 'Test 5');
test(countLatticePoints([[1,2,3],[4,5,6]]), 105, 'Test 6');
test(countLatticePoints([[100,100,1]]), 5, 'Test 7');
test(countLatticePoints([[100,100,50]]), 7845, 'Test 8');
test(countLatticePoints([[50,50,50]]), 7845, 'Test 9');
test(countLatticePoints([[50,50,40],[60,60,10]]), 5025, 'Test 10');
test(countLatticePoints([[100,100,100]]), 31417, 'Test 11');
test(countLatticePoints([[1,1,1]]), 5, 'Test 12');
test(countLatticePoints([[5,5,1],[5,5,2],[5,5,3]]), 29, 'Test 13');
test(countLatticePoints([[10,10,5]]), 81, 'Test 14');
test(countLatticePoints([[50,50,10],[40,40,10],[30,30,10]]), 833, 'Test 15');
test(countLatticePoints([[1,1,1],[3,3,1]]), 10, 'Test 16');
test(countLatticePoints([[1,1,1],[2,2,1],[3,3,1]]), 11, 'Test 17');
test(countLatticePoints([[50,50,20],[60,60,10]]), 1314, 'Test 18');
test(countLatticePoints([[10,10,1],[20,20,1],[30,30,1]]), 15, 'Test 19');
test(countLatticePoints([[10,10,5],[20,20,10],[30,30,15]]), 950, 'Test 20');
test(countLatticePoints([[50,50,50],[50,50,30]]), 7845, 'Test 21');
test(countLatticePoints([[50,50,10],[50,60,10],[50,70,10],[50,80,10],[50,90,10],[50,100,10],[50,40,10],[50,30,10],[50,20,10],[50,10,10]]), 2027, 'Test 22');
test(countLatticePoints([[100,100,10],[90,90,15],[80,80,20],[70,70,25]]), 2685, 'Test 23');
test(countLatticePoints([[1,99,10],[99,1,10],[50,50,40],[25,25,25],[75,75,25],[10,10,15],[90,90,15],[40,40,30],[60,60,30]]), 7615, 'Test 24');
test(countLatticePoints([[10,10,5],[20,20,5],[30,30,5],[40,40,5],[50,50,5],[60,60,5],[70,70,5],[80,80,5],[90,90,5]]), 729, 'Test 25');
test(countLatticePoints([[30,30,5],[40,40,5],[50,50,5],[60,60,5],[70,70,5],[80,80,5],[90,90,5]]), 567, 'Test 26');
test(countLatticePoints([[50,50,20],[50,50,15],[50,50,10],[50,50,5]]), 1257, 'Test 27');
test(countLatticePoints([[10,10,30],[20,20,30],[30,30,30],[40,40,30]]), 3938, 'Test 28');
test(countLatticePoints([[10,10,10],[10,20,10],[10,30,10],[10,40,10],[10,50,10],[10,60,10]]), 1267, 'Test 29');
test(countLatticePoints([[1,1,1],[99,1,1],[1,99,1],[99,99,1],[50,50,5]]), 101, 'Test 30');
test(countLatticePoints([[10,10,5],[20,20,5],[30,30,5],[40,40,5],[50,50,5],[60,60,5],[70,70,5],[80,80,5],[90,90,5],[100,100,5]]), 810, 'Test 31');
test(countLatticePoints([[50,50,20],[60,50,20],[70,50,20],[80,50,20]]), 2433, 'Test 32');
test(countLatticePoints([[25,25,10],[25,75,10],[75,25,10],[75,75,10]]), 1268, 'Test 33');
test(countLatticePoints([[10,10,15],[15,15,10],[20,20,5],[25,25,3]]), 638, 'Test 34');
test(countLatticePoints([[50,50,1],[50,50,2],[50,50,3],[50,50,4],[50,50,5]]), 81, 'Test 35');
test(countLatticePoints([[10,10,5],[10,20,5],[10,30,5],[10,40,5],[10,50,5],[10,60,5]]), 481, 'Test 36');
test(countLatticePoints([[10,50,30],[50,10,30],[90,50,30],[50,90,30]]), 9496, 'Test 37');
test(countLatticePoints([[30,30,10],[60,30,10],[30,60,10],[60,60,10],[45,45,15]]), 1837, 'Test 38');
test(countLatticePoints([[10,50,30],[20,40,25],[30,30,20],[40,20,15],[50,10,10]]), 3139, 'Test 39');
test(countLatticePoints([[100,100,50],[10,10,30],[90,10,20],[10,90,25]]), 11790, 'Test 40');
test(countLatticePoints([[50,50,20],[50,70,20],[50,30,20],[30,50,20],[70,50,20]]), 4113, 'Test 41');
test(countLatticePoints([[1,50,1],[50,1,1],[50,99,1],[99,50,1]]), 20, 'Test 42');
test(countLatticePoints([[10,10,10],[20,10,10],[30,10,10],[40,10,10],[50,10,10],[60,10,10]]), 1267, 'Test 43');
test(countLatticePoints([[10,10,5],[15,15,10],[20,20,15],[25,25,20]]), 1329, 'Test 44');
test(countLatticePoints([[25,25,15],[50,25,15],[75,25,15],[25,50,15],[50,50,15],[75,50,15],[25,75,15],[50,75,15],[75,75,15]]), 5733, 'Test 45');
test(countLatticePoints([[25,25,10],[25,75,10],[75,25,10],[75,75,10],[50,50,20]]), 2525, 'Test 46');
test(countLatticePoints([[1,1,1],[2,2,2],[3,3,3],[4,4,4]]), 56, 'Test 47');
test(countLatticePoints([[50,50,50],[30,30,30],[70,70,30],[20,20,20],[80,80,20]]), 8687, 'Test 48');
test(countLatticePoints([[90,90,5],[80,80,5],[70,70,5],[60,60,5]]), 324, 'Test 49');
test(countLatticePoints([[1,99,1],[99,1,1],[50,50,45],[25,25,25],[75,75,25]]), 7605, 'Test 50');
test(countLatticePoints([[20,20,5],[20,30,5],[30,20,5],[30,30,5],[40,40,5],[40,50,5],[50,40,5],[50,50,5]]), 640, 'Test 51');
test(countLatticePoints([[10,10,50],[30,30,30],[50,50,20],[70,70,10]]), 4388, 'Test 52');
test(countLatticePoints([[10,10,1],[20,20,1],[30,30,1],[40,40,1],[50,50,1],[60,60,1],[70,70,1],[80,80,1],[90,90,1],[10,90,1],[90,10,1]]), 55, 'Test 53');
test(countLatticePoints([[50,50,20],[70,50,20],[50,70,20],[50,30,20]]), 3447, 'Test 54');
test(countLatticePoints([[1,1,50],[50,50,50],[100,100,50],[50,1,50],[1,50,50]]), 15772, 'Test 55');
test(countLatticePoints([[10,10,1],[11,11,2],[12,12,3],[13,13,4],[14,14,5],[15,15,6],[16,16,7],[17,17,8],[18,18,9],[19,19,10]]), 347, 'Test 56');
test(countLatticePoints([[10,10,10],[20,10,10],[10,20,10],[20,20,10],[15,15,10]]), 797, 'Test 57');
test(countLatticePoints([[1,99,10],[99,1,10],[50,50,30]]), 3197, 'Test 58');
test(countLatticePoints([[1,1,2],[2,2,2],[3,3,2],[4,4,2],[5,5,2],[6,6,2],[7,7,2],[8,8,2],[9,9,2],[10,10,2]]), 56, 'Test 59');
test(countLatticePoints([[90,90,10],[80,80,15],[70,70,5],[60,60,20]]), 2036, 'Test 60');
test(countLatticePoints([[50,50,50],[60,60,20],[70,70,10],[80,80,5],[90,90,2],[100,100,1]]), 7863, 'Test 61');
test(countLatticePoints([[10,10,20],[20,10,20],[30,10,20],[40,10,20],[50,10,20],[60,10,20],[70,10,20],[80,10,20],[90,10,20]]), 3231, 'Test 62');
test(countLatticePoints([[30,30,15],[60,60,15],[90,90,15],[10,10,20],[80,80,20],[50,50,30],[25,25,10],[75,75,10]]), 5257, 'Test 63');
test(countLatticePoints([[50,50,1],[50,51,1],[51,50,1],[51,51,1],[1,1,1],[99,99,1],[1,99,1],[99,1,1]]), 32, 'Test 64');
test(countLatticePoints([[50,50,50],[40,40,40],[30,30,30],[20,20,20],[10,10,10],[60,60,10],[70,70,10],[80,80,10],[90,90,10]]), 8613, 'Test 65');
test(countLatticePoints([[50,50,25],[25,25,25],[75,75,25]]), 5171, 'Test 66');
test(countLatticePoints([[10,10,5],[20,10,5],[30,10,5],[40,10,5],[50,10,5],[60,10,5]]), 481, 'Test 67');
test(countLatticePoints([[1,1,100],[100,1,100],[100,100,100],[1,100,100]]), 37209, 'Test 68');
test(countLatticePoints([[10,10,1],[11,11,1],[12,12,1],[13,13,1],[14,14,1],[15,15,1],[16,16,1],[17,17,1],[18,18,1],[19,19,1],[20,20,1]]), 35, 'Test 69');
test(countLatticePoints([[1,1,10],[10,1,10],[19,1,10],[28,1,10],[37,1,10],[46,1,10],[55,1,10],[64,1,10],[73,1,10],[82,1,10],[91,1,10],[100,1,10]]), 1211, 'Test 70');
test(countLatticePoints([[10,10,15],[20,20,15],[15,25,10]]), 1011, 'Test 71');
test(countLatticePoints([[99,1,10],[1,99,10],[1,1,10],[99,99,10]]), 804, 'Test 72');
test(countLatticePoints([[50,50,5],[50,60,5],[50,70,5],[50,80,5],[50,90,5]]), 401, 'Test 73');
test(countLatticePoints([[10,10,20],[80,80,20],[45,45,30]]), 4891, 'Test 74');
test(countLatticePoints([[10,10,5],[20,20,5],[30,30,5],[40,40,5]]), 324, 'Test 75');
test(countLatticePoints([[20,20,30],[40,40,30],[60,60,30],[80,80,30]]), 7152, 'Test 76');
test(countLatticePoints([[100,100,10],[90,90,20],[80,80,15],[70,70,25]]), 2875, 'Test 77');
test(countLatticePoints([[1,50,49],[99,50,49],[50,1,49],[50,99,49],[50,50,40]]), 17421, 'Test 78');
test(countLatticePoints([[25,25,15],[75,75,15],[25,75,15],[75,25,15],[50,50,10]]), 3153, 'Test 79');
test(countLatticePoints([[10,10,5],[20,20,15],[30,30,10],[40,40,20]]), 1904, 'Test 80');
test(countLatticePoints([[25,25,5],[25,30,5],[25,35,5],[25,40,5],[25,45,5]]), 269, 'Test 81');
test(countLatticePoints([[25,25,15],[45,25,15],[25,45,15],[45,45,15]]), 2213, 'Test 82');
test(countLatticePoints([[10,10,30],[20,20,30],[30,30,30],[40,40,30],[50,50,30]]), 4782, 'Test 83');
test(countLatticePoints([[10,10,15],[20,20,20],[30,10,15]]), 1538, 'Test 84');
test(countLatticePoints([[10,90,10],[90,10,10],[50,50,20],[60,40,15]]), 2133, 'Test 85');
test(countLatticePoints([[10,50,10],[20,50,10],[30,50,10],[40,50,10],[50,50,10],[60,50,10]]), 1267, 'Test 86');
test(countLatticePoints([[30,30,20],[40,40,20],[50,50,20],[60,60,20]]), 2925, 'Test 87');
test(countLatticePoints([[10,10,5],[30,30,5],[50,50,5],[70,70,5],[90,90,5]]), 405, 'Test 88');
test(countLatticePoints([[1,1,20],[1,99,20],[99,1,20],[99,99,20],[50,50,20]]), 4266, 'Test 89');
test(countLatticePoints([[10,10,5],[15,15,3],[20,20,7]]), 244, 'Test 90');
test(countLatticePoints([[50,50,20],[60,60,20],[70,70,20],[80,80,20],[90,90,20]]), 3481, 'Test 91');
test(countLatticePoints([[50,50,50],[60,60,50],[70,70,50],[80,80,50]]), 12075, 'Test 92');
test(countLatticePoints([[1,50,20],[99,50,20],[50,1,20],[50,99,20],[50,50,10]]), 4207, 'Test 93');
test(countLatticePoints([[10,10,5],[15,15,10],[20,20,15],[25,25,20],[30,30,25],[35,35,30],[40,40,35],[45,45,40],[50,50,45],[55,55,50]]), 8352, 'Test 94');
test(countLatticePoints([[10,10,20],[20,20,20],[30,30,20],[40,40,20],[50,50,20],[60,60,20],[70,70,20],[80,80,20],[90,90,20],[10,90,20],[90,10,20]]), 7325, 'Test 95');
test(countLatticePoints([[10,10,1],[11,11,1],[12,12,1],[13,13,1],[14,14,1],[15,15,1],[16,16,1],[17,17,1],[18,18,1],[19,19,1]]), 32, 'Test 96');
test(countLatticePoints([[1,1,1],[1,2,2],[1,3,3],[1,4,4],[1,5,5],[1,6,6],[1,7,7],[1,8,8],[1,9,9],[1,10,10]]), 188, 'Test 97');
test(countLatticePoints([[1,1,50],[100,1,50],[1,100,50],[100,100,50],[50,50,50],[50,1,50],[1,50,50],[100,50,50],[50,100,50]]), 21676, 'Test 98');
test(countLatticePoints([[75,75,30],[25,25,15],[50,50,10]]), 3795, 'Test 99');
test(countLatticePoints([[10,10,5],[20,20,10],[30,30,15],[40,40,20],[50,50,25]]), 2761, 'Test 100');
test(countLatticePoints([[30,30,20],[30,70,20],[70,30,20],[70,70,20],[50,50,20]]), 5369, 'Test 101');
test(countLatticePoints([[50,50,10],[51,51,5],[52,52,15],[53,53,20]]), 1257, 'Test 102');
test(countLatticePoints([[1,1,1],[99,99,1],[50,50,40]]), 5035, 'Test 103');
test(countLatticePoints([[10,10,40],[50,50,40],[90,90,40]]), 10417, 'Test 104');
test(countLatticePoints([[1,1,1],[99,99,1],[50,50,50]]), 7855, 'Test 105');
test(countLatticePoints([[1,1,100],[100,100,100],[50,50,50],[25,25,25],[75,75,25]]), 33663, 'Test 106');
test(countLatticePoints([[1,1,1],[1,100,1],[100,1,1],[100,100,1],[50,50,45]]), 6381, 'Test 107');
test(countLatticePoints([[1,1,1],[2,2,2],[3,3,3],[4,4,4],[5,5,5]]), 90, 'Test 108');
test(countLatticePoints([[10,50,15],[50,10,15],[90,50,15],[50,90,15]]), 2702, 'Test 109');
test(countLatticePoints([[1,1,1],[2,2,2],[3,3,3],[4,4,4],[5,5,5],[6,6,6],[7,7,7],[8,8,8],[9,9,9],[10,10,10]]), 347, 'Test 110');
test(countLatticePoints([[100,100,100],[1,1,1],[99,99,1]]), 31422, 'Test 111');
test(countLatticePoints([[10,50,10],[20,40,15],[30,30,20],[40,20,25],[50,10,30]]), 3139, 'Test 112');
test(countLatticePoints([[1,99,10],[99,1,10],[50,50,10],[25,25,15],[75,75,15]]), 2111, 'Test 113');
test(countLatticePoints([[50,50,10],[50,60,10],[50,70,10],[50,80,10]]), 887, 'Test 114');

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
