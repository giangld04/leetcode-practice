// Test: 941. Valid Mountain Array
// 141 test cases from LeetCodeDataset
// Run: node test.js

const { validMountainArray } = require("./solution");

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

console.log("\n941. Valid Mountain Array\n");

test(validMountainArray([5,4,3,2,1]), false, 'Test 1');
test(validMountainArray([9,8,7,6,5,4,3,2,1,0]), false, 'Test 2');
test(validMountainArray([3,1,2]), false, 'Test 3');
test(validMountainArray([1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1]), true, 'Test 4');
test(validMountainArray([1,2]), false, 'Test 5');
test(validMountainArray([0,2,3,3,2,1]), false, 'Test 6');
test(validMountainArray([0,1,2,3,4,5,4,3,2,1]), true, 'Test 7');
test(validMountainArray([0,3,2,1]), true, 'Test 8');
test(validMountainArray([0,1,2,1,2]), false, 'Test 9');
test(validMountainArray([0,1,2,3,1]), true, 'Test 10');
test(validMountainArray([0,2,3,4,5,3,2,1]), true, 'Test 11');
test(validMountainArray([1]), false, 'Test 12');
test(validMountainArray([1,1,1,1,1]), false, 'Test 13');
test(validMountainArray([2,1]), false, 'Test 14');
test(validMountainArray([0,1,2,3,1,0]), true, 'Test 15');
test(validMountainArray([0,2,3,3,2,0]), false, 'Test 16');
test(validMountainArray([3,5,5]), false, 'Test 17');
test(validMountainArray([1,2,3,4,5]), false, 'Test 18');
test(validMountainArray([0,1,2,3,4,5,6,7,8,9]), false, 'Test 19');
test(validMountainArray([1,3,2]), true, 'Test 20');
test(validMountainArray([0,2,3,4,5,3,1]), true, 'Test 21');
test(validMountainArray([1,2,3,4,3,2,1]), true, 'Test 22');
test(validMountainArray([0,2,3,4,5]), false, 'Test 23');
test(validMountainArray([1,2,3,4,5,3,2,1]), true, 'Test 24');
test(validMountainArray([0,1,0]), true, 'Test 25');
test(validMountainArray([1,2,3,4,5,6,7,8,9,10,11,10,9,8,7,6,5,4,3,2,1,0,-1,-2,-3]), true, 'Test 26');
test(validMountainArray([1,2,3,2,1,2,3,4,5]), false, 'Test 27');
test(validMountainArray([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1]), true, 'Test 28');
test(validMountainArray([1,2,3,4,5,4,3,2,1,0,1]), false, 'Test 29');
test(validMountainArray([1,2,2,1]), false, 'Test 30');
test(validMountainArray([1,2,2,3,4,3,2,1]), false, 'Test 31');
test(validMountainArray([1,2,3,4,5,6,5,4,3,2,1]), true, 'Test 32');
test(validMountainArray([1,3,5,7,9,8,6,4,2,0]), true, 'Test 33');
test(validMountainArray([1,3,5,7,9,11,13,15,14,12,10,8,6,4,2,0]), true, 'Test 34');
test(validMountainArray([1, 1, 1, 1, 1]), false, 'Test 35');
test(validMountainArray([0,1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,0]), true, 'Test 36');
test(validMountainArray([1,2,3,4,5,4,3,2,1]), true, 'Test 37');
test(validMountainArray([1,2,3,4,5,6,7,8,9,10,11,10,9,8,7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11]), true, 'Test 38');
test(validMountainArray([9,8,7,6,5,4,3,2,1]), false, 'Test 39');
test(validMountainArray([1,2,3,2,3,1]), false, 'Test 40');
test(validMountainArray([1,2,3,4,5,4,3,2,1,0,1,2,3,4,5,6,5,4,3,2,1]), false, 'Test 41');
test(validMountainArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), true, 'Test 42');
test(validMountainArray([1,4,7,9,10,8,6,4,2]), true, 'Test 43');
test(validMountainArray([1,3,5,7,6,4,2]), true, 'Test 44');
test(validMountainArray([5,4,3,2,1,2,3,4,5,6,7,8,9,10]), false, 'Test 45');
test(validMountainArray([1,4,7,9,11,10,8,6,4,2,0]), true, 'Test 46');
test(validMountainArray([1,2,3,4,3,2,1,0,-1,-2]), true, 'Test 47');
test(validMountainArray([1,3,2,1,3,2,1]), false, 'Test 48');
test(validMountainArray([1,3,5,4,3,2,1,0,-1,-2,-3,-4]), true, 'Test 49');
test(validMountainArray([8, 9, 10, 10, 9, 8]), false, 'Test 50');
test(validMountainArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15,-16,-17,-18,-19,-20]), true, 'Test 51');
test(validMountainArray([1,3,2,1,2,3,2,1]), false, 'Test 52');
test(validMountainArray([1, 2, 2, 3, 4, 5]), false, 'Test 53');
test(validMountainArray([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1]), false, 'Test 54');
test(validMountainArray([0,1,2,3,4,3,2,1,0]), true, 'Test 55');
test(validMountainArray([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,29,27,25,23,21,19,17,15,13,11,9,7,5,3,1]), true, 'Test 56');
test(validMountainArray([2,3,1,2,3,4,5]), false, 'Test 57');
test(validMountainArray([1, 3, 5, 4, 3, 5, 4, 3, 2, 1]), false, 'Test 58');
test(validMountainArray([1, 3, 5, 7, 9, 7, 5, 3, 1]), true, 'Test 59');
test(validMountainArray([0,1,2,3,4,5,4,3,2,1,0]), true, 'Test 60');
test(validMountainArray([1,2,3,2,1,0,1,2,3,4,5,6,5,4,3,2,1]), false, 'Test 61');
test(validMountainArray([1,2,3,4,5,6,7,8,7,6,5,4,3,2,1]), true, 'Test 62');
test(validMountainArray([10,9,8,7,6,5,4,3,2,1]), false, 'Test 63');
test(validMountainArray([1,2,3,4,5,4,3,2,1,0]), true, 'Test 64');
test(validMountainArray([1,3,2,1,0,-1,-2,-1,0,1,2,3,2,1,0]), false, 'Test 65');
test(validMountainArray([100,200,300,400,500,600,700,800,900,1000,900,800,700,600,500,400,300,200,100]), true, 'Test 66');
test(validMountainArray([1,3,2,1,0,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10]), true, 'Test 67');
test(validMountainArray([1,2,3,2,1,2,3,2,1]), false, 'Test 68');
test(validMountainArray([1,5,4,3,2,1,0,2,3]), false, 'Test 69');
test(validMountainArray([1,1,1,2,3,4,3,2,1,1,1]), false, 'Test 70');
test(validMountainArray([1,2,2,3,4,5,6,7,8,9]), false, 'Test 71');
test(validMountainArray([1,2,3,4,3,2,1,2,3,4,5]), false, 'Test 72');
test(validMountainArray([1, 2, 3, 4, 3, 2, 1]), true, 'Test 73');
test(validMountainArray([1,2,3,4,5,6,5,4,3,2,1,0]), true, 'Test 74');
test(validMountainArray([1,2,3,4,3,4,3,2,1]), false, 'Test 75');
test(validMountainArray([1,3,5,7,9,11,13,15,17,19,17,15,13,11,9,7,5,3,1]), true, 'Test 76');
test(validMountainArray([1, 3, 5, 7, 6, 4, 2]), true, 'Test 77');
test(validMountainArray([1,2,3,4,3,2,1,0,-1,-2,-3,-4,-5,-6]), true, 'Test 78');
test(validMountainArray([3,5,7,9,11,13,15,17,19,21,19,17,15,13,11,9,7,5,3]), true, 'Test 79');
test(validMountainArray([5, 6, 7, 8, 9, 8, 7, 6, 5]), true, 'Test 80');
test(validMountainArray([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), false, 'Test 81');
test(validMountainArray([10,20,30,40,50,45,40,35,30,25,20,15,10]), true, 'Test 82');
test(validMountainArray([5,6,7,8,9,10,9,8,7,6,5]), true, 'Test 83');
test(validMountainArray([1, 2, 3, 4, 5, 3, 2, 1, 0]), true, 'Test 84');
test(validMountainArray([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,6,7,8,9,10]), false, 'Test 85');
test(validMountainArray([1,3,5,7,9,11,10,8,6,4,2,0,-2,-4,-6]), true, 'Test 86');
test(validMountainArray([1,2,3,2,3,4,3,2,1]), false, 'Test 87');
test(validMountainArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), true, 'Test 88');
test(validMountainArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), true, 'Test 89');
test(validMountainArray([1,2,3,4,5,4,3,4,5,6,5,4,3,2,1]), false, 'Test 90');
test(validMountainArray([0,1,2,3,4,5,6,7,8,9,10,11,10,9,8,7,6,5,4,3,2,1,0]), true, 'Test 91');
test(validMountainArray([1,2,3,4,5,6,5,4,3,2,1,0,1]), false, 'Test 92');
test(validMountainArray([1,3,2,1,0,-1]), true, 'Test 93');
test(validMountainArray([1,2,3,4,5,6,7,8,9,10,11,10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10]), false, 'Test 94');
test(validMountainArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), true, 'Test 95');
test(validMountainArray([1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1, 0]), true, 'Test 96');
test(validMountainArray([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15]), true, 'Test 97');
test(validMountainArray([10,9,8,7,6,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1]), false, 'Test 98');
test(validMountainArray([1,3,4,5,6,5,4,3,2,1,0]), true, 'Test 99');
test(validMountainArray([1,3,5,7,9,11,13,12,11,9,7,5,3,1]), true, 'Test 100');
test(validMountainArray([0,1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15]), true, 'Test 101');
test(validMountainArray([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10]), true, 'Test 102');
test(validMountainArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), true, 'Test 103');
test(validMountainArray([2,3,4,5,6,5,4,3,2,1]), true, 'Test 104');
test(validMountainArray([1,2,3,2,1,2,3,4,3,2,1]), false, 'Test 105');
test(validMountainArray([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), true, 'Test 106');
test(validMountainArray([1,2,3,4,5,4,3,2,1,0,1,0,1,0,1,0]), false, 'Test 107');
test(validMountainArray([1,2,3,4,5,4,3,2,3,4,5,4,3,2,1]), false, 'Test 108');
test(validMountainArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), true, 'Test 109');
test(validMountainArray([1, 2, 3, 4, 5, 4, 3, 2, 1, 0, -1]), true, 'Test 110');
test(validMountainArray([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5]), true, 'Test 111');
test(validMountainArray([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,27,25,23,21,19,17,15,13,11,9,7,5,3,1]), true, 'Test 112');
test(validMountainArray([1,3,5,7,9,11,13,15,17,19,21,19,17,15,13,11,9,7,5,3,1,0,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12]), true, 'Test 113');
test(validMountainArray([1,10,9,8,7,6,5,4,3,2,1]), true, 'Test 114');
test(validMountainArray([3,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10]), true, 'Test 115');
test(validMountainArray([1,3,5,7,9,11,13,15,14,12,10,8,6,4,2]), true, 'Test 116');
test(validMountainArray([1,3,5,4,3,2,1]), true, 'Test 117');
test(validMountainArray([1,2,3,4,3,2,1,0,-1,-2,-3,-4]), true, 'Test 118');
test(validMountainArray([1,2,3,4,5,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7]), true, 'Test 119');
test(validMountainArray([1,2,3,4,5,5,4,3,2,1]), false, 'Test 120');
test(validMountainArray([5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,0]), true, 'Test 121');
test(validMountainArray([1, 3, 2, 4, 3, 2]), false, 'Test 122');
test(validMountainArray([10,20,30,25,20,15,10,5,0,-5,-10]), true, 'Test 123');
test(validMountainArray([1, 3, 5, 7, 9, 11, 13, 11, 9, 7, 5, 3, 1]), true, 'Test 124');
test(validMountainArray([10,9,8,7,6,7,8,9,10]), false, 'Test 125');
test(validMountainArray([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,0,1]), false, 'Test 126');
test(validMountainArray([1,3,2,4,3,2,1]), false, 'Test 127');
test(validMountainArray([1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4, 3, 2, 1]), true, 'Test 128');
test(validMountainArray([0,1,2,3,4,3,2,1,0,-1,-2,-3,-4]), true, 'Test 129');
test(validMountainArray([1,3,2,1,0,-1,-2]), true, 'Test 130');
test(validMountainArray([9,8,7,6,5,6,7,8,9]), false, 'Test 131');
test(validMountainArray([1, 2, 3, 2, 1, 0, -1, -2]), true, 'Test 132');
test(validMountainArray([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,0]), true, 'Test 133');
test(validMountainArray([1,2,3,4,5,6,7,8,9,10,11,12,11,10,9,8,7,6,5,4,3,2,1]), true, 'Test 134');
test(validMountainArray([1,2,3,4,5,4,5,6,5,4,3,2,1]), false, 'Test 135');
test(validMountainArray([1, 2, 2, 3, 4, 5, 4, 3, 2, 1]), false, 'Test 136');
test(validMountainArray([1,2,3,4,5,6,7,8,9]), false, 'Test 137');
test(validMountainArray([1,2,3,4,5,4,3,2,1,0,-1,-2,-3,-4,-5]), true, 'Test 138');
test(validMountainArray([1,2,2,3,4,5,6,5,4,3,2,1]), false, 'Test 139');
test(validMountainArray([1,2,3,4,3,2,1,2,3]), false, 'Test 140');
test(validMountainArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), true, 'Test 141');

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
