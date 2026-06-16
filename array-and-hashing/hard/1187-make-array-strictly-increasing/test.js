// Test: 1187. Make Array Strictly Increasing
// 145 test cases from LeetCodeDataset
// Run: node test.js

const { makeArrayIncreasing } = require("./solution");

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

console.log("\n1187. Make Array Strictly Increasing\n");

test(makeArrayIncreasing([1,3,5,7], [2,4,6,8]), 0, 'Test 1');
test(makeArrayIncreasing([1,5,3,6,7], [1,6,3,3]), -1, 'Test 2');
test(makeArrayIncreasing([1,2,3,4,5], [6,7,8,9]), 0, 'Test 3');
test(makeArrayIncreasing([1,5,3,6,7], [1,3,2,4]), 1, 'Test 4');
test(makeArrayIncreasing([10,11,12], [5,6,7]), 0, 'Test 5');
test(makeArrayIncreasing([1], [2]), 0, 'Test 6');
test(makeArrayIncreasing([1,5,3,6,7], [4,3,1]), 2, 'Test 7');
test(makeArrayIncreasing([5,4,3,2,1], [1,2,3,4,5]), 4, 'Test 8');
test(makeArrayIncreasing([1,2,3,4], [2,3,4,5]), 0, 'Test 9');
test(makeArrayIncreasing([10,9,8,7,6], [1,2,3,4,5]), 4, 'Test 10');
test(makeArrayIncreasing([1,2,3,4,5], [5,4,3,2,1]), 0, 'Test 11');
test(makeArrayIncreasing([1,3,5,7,9], [2,4,6,8,10]), 0, 'Test 12');
test(makeArrayIncreasing([1,10,20,30], [5,15,25,35]), 0, 'Test 13');
test(makeArrayIncreasing([1,2,2,3,4], [2,3,4,5,6]), 3, 'Test 14');
test(makeArrayIncreasing([10,9,8,7,6], [5,4,3,2,1]), 4, 'Test 15');
test(makeArrayIncreasing([1,1,1,1], [2,2,2,2]), -1, 'Test 16');
test(makeArrayIncreasing([1,2,3,4,5], [6,7,8,9,10]), 0, 'Test 17');
test(makeArrayIncreasing([1,1,1], [2,2,2]), -1, 'Test 18');
test(makeArrayIncreasing([1,1,1,1,1], [2,2,2,2,2]), -1, 'Test 19');
test(makeArrayIncreasing([1,2000], [1000]), 0, 'Test 20');
test(makeArrayIncreasing([10,20,30], [5,15,25,35]), 0, 'Test 21');
test(makeArrayIncreasing([1,2,3], [1,2,3]), 0, 'Test 22');
test(makeArrayIncreasing([1,2,3], [4,5,6]), 0, 'Test 23');
test(makeArrayIncreasing([1,1,1,1,1], [1,2,3,4,5]), 4, 'Test 24');
test(makeArrayIncreasing([1,2,2,3,4], [3,4,5]), 3, 'Test 25');
test(makeArrayIncreasing([1,2,2,4,3,5,6,7,8], [2,3,5,7,9]), -1, 'Test 26');
test(makeArrayIncreasing([1, 3, 2, 5, 4], [2, 3, 4, 5, 6, 7]), 2, 'Test 27');
test(makeArrayIncreasing([1, 2, 2, 3, 3, 4, 5], [2, 3, 4, 5, 6, 7, 8]), 5, 'Test 28');
test(makeArrayIncreasing([1, 3, 3, 3, 3], [2, 4, 6, 8, 10]), 3, 'Test 29');
test(makeArrayIncreasing([1, 1, 1, 1, 1], [2, 3, 4, 5, 6]), 4, 'Test 30');
test(makeArrayIncreasing([1, 3, 2, 5, 4], [2, 2, 2, 2, 2, 2]), -1, 'Test 31');
test(makeArrayIncreasing([1, 100, 200, 300, 400], [2, 150, 250, 350]), 0, 'Test 32');
test(makeArrayIncreasing([1, 2, 2, 2, 2], [3, 4, 5, 6, 7]), 3, 'Test 33');
test(makeArrayIncreasing([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 0, 'Test 34');
test(makeArrayIncreasing([10, 9, 8, 7, 6], [1, 2, 3, 4, 5, 11, 12]), 4, 'Test 35');
test(makeArrayIncreasing([1, 1, 1, 1, 1], [2, 3, 4, 5, 6, 7, 8, 9, 10]), 4, 'Test 36');
test(makeArrayIncreasing([1,10,9,10,9,10], [2,3,4,5,6,7,8,9]), 3, 'Test 37');
test(makeArrayIncreasing([1, 100, 200, 300, 400], [50, 150, 250, 350]), 0, 'Test 38');
test(makeArrayIncreasing([1, 2, 3, 10, 1], [4, 5, 6, 7, 8, 9]), 2, 'Test 39');
test(makeArrayIncreasing([5, 2, 1, 3, 4], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 4, 'Test 40');
test(makeArrayIncreasing([10,20,30,40,50,60,70,80,90,100], [5,15,25,35,45,55,65,75,85,95]), 0, 'Test 41');
test(makeArrayIncreasing([10,20,30,40,50], [15,25,35,45,55]), 0, 'Test 42');
test(makeArrayIncreasing([1, 3, 3, 4, 5], [2, 2, 2, 6, 7]), 1, 'Test 43');
test(makeArrayIncreasing([1,5,2,3,4,6,7,8,9,10], [1,2,3,4,5]), 4, 'Test 44');
test(makeArrayIncreasing([9,8,7,6,5,4,3,2,1], [10,9,8,7,6,5,4,3,2,1]), 8, 'Test 45');
test(makeArrayIncreasing([1,2,3,4,5,6], [2,3,4,5,6,7,8,9]), 0, 'Test 46');
test(makeArrayIncreasing([1000000000, 999999999, 999999998], [1, 2, 3, 1000000001]), 2, 'Test 47');
test(makeArrayIncreasing([1, 100, 2, 101, 3, 102, 4], [50, 51, 52, 53, 54]), -1, 'Test 48');
test(makeArrayIncreasing([1,1,1,1,1,1,1,1,1,1], [1,2,3,4,5,6,7,8,9,10]), 9, 'Test 49');
test(makeArrayIncreasing([10, 5, 3, 8, 2], [1, 4, 6, 9, 11]), 3, 'Test 50');
test(makeArrayIncreasing([1, 5, 9, 13, 17, 21], [2, 6, 10, 14, 18, 22]), 0, 'Test 51');
test(makeArrayIncreasing([1,2,3,4,5,6,7,8,9,10], [11,13,15,17,19,21,23,25,27,29]), 0, 'Test 52');
test(makeArrayIncreasing([1, 2, 10, 3, 4], [5, 6, 7, 8, 9]), 3, 'Test 53');
test(makeArrayIncreasing([3, 2, 1], [4, 5, 6]), 2, 'Test 54');
test(makeArrayIncreasing([1, 3, 2, 4, 5], [1, 2, 3, 4, 5]), 2, 'Test 55');
test(makeArrayIncreasing([5,4,3,2,1], [10,9,8,7,6,5,4,3,2,1]), 4, 'Test 56');
test(makeArrayIncreasing([10,10,10,10], [1,2,3,4,5,6,7,8,9]), 3, 'Test 57');
test(makeArrayIncreasing([1, 2, 2, 2, 2], [2, 2, 2, 2, 2]), -1, 'Test 58');
test(makeArrayIncreasing([1, 5, 5, 5, 5], [2, 3, 4, 6, 7, 8]), 3, 'Test 59');
test(makeArrayIncreasing([1, 3, 5, 7, 9], [1, 3, 5, 7, 9]), 0, 'Test 60');
test(makeArrayIncreasing([5, 5, 5, 5, 5], [6, 6, 6, 6, 6]), -1, 'Test 61');
test(makeArrayIncreasing([1, 3, 5, 7, 9], [8, 9, 10, 11, 12]), 0, 'Test 62');
test(makeArrayIncreasing([5, 25, 100, 150, 200], [1, 20, 50, 125]), 0, 'Test 63');
test(makeArrayIncreasing([1, 5, 3, 6, 7, 8, 2, 10, 11, 12], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 2, 'Test 64');
test(makeArrayIncreasing([1, 5, 3, 6, 7], [2, 4, 6, 8, 10, 12, 14]), 1, 'Test 65');
test(makeArrayIncreasing([5,6,3,4,8,9], [2,3,7,8,11]), -1, 'Test 66');
test(makeArrayIncreasing([10,9,8,7,6,5], [1,2,3,4,5,6,7,8,9,10]), 5, 'Test 67');
test(makeArrayIncreasing([3,1,1,3], [2,4]), -1, 'Test 68');
test(makeArrayIncreasing([1,2,3,1,2,3], [2,3,4,5,6]), 3, 'Test 69');
test(makeArrayIncreasing([1, 2, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 8, 'Test 70');
test(makeArrayIncreasing([1, 2, 3, 4, 5], [5, 5, 5, 5, 5]), 0, 'Test 71');
test(makeArrayIncreasing([1, 2, 2, 3, 4], [2, 3, 4, 5]), 3, 'Test 72');
test(makeArrayIncreasing([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 9, 'Test 73');
test(makeArrayIncreasing([1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 0, 'Test 74');
test(makeArrayIncreasing([10,20,30,40,50], [5,15,25,35,45,55]), 0, 'Test 75');
test(makeArrayIncreasing([5, 4, 3, 2, 1], [6, 7, 8, 9, 10]), 4, 'Test 76');
test(makeArrayIncreasing([5,6,7,8,9,10], [1,2,3,4,5,6]), 0, 'Test 77');
test(makeArrayIncreasing([1, 10, 20, 30, 40], [5, 15, 25, 35]), 0, 'Test 78');
test(makeArrayIncreasing([1, 3, 5, 7, 9, 11, 13], [2, 4, 6, 8, 10, 12, 14]), 0, 'Test 79');
test(makeArrayIncreasing([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 0, 'Test 80');
test(makeArrayIncreasing([1, 3, 3, 5, 7], [2, 2, 4, 6, 8]), 1, 'Test 81');
test(makeArrayIncreasing([1, 9, 8, 7, 6], [2, 3, 4, 5, 6, 7, 8, 9, 10]), 3, 'Test 82');
test(makeArrayIncreasing([1, 2, 2, 3, 3, 4, 4], [1, 2, 3, 4, 5]), -1, 'Test 83');
test(makeArrayIncreasing([5, 3, 1, 2, 4, 6, 7, 8, 9, 10], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 5, 'Test 84');
test(makeArrayIncreasing([1,2,3,4,5,6,7,8,9,10], [11,12,13,14,15,16,17,18,19,20]), 0, 'Test 85');
test(makeArrayIncreasing([1, 2, 3, 4, 100], [2, 5, 8, 9]), 0, 'Test 86');
test(makeArrayIncreasing([1,1000000000,2,999999999,3], [500000000,600000000,700000000,800000000,900000000]), 4, 'Test 87');
test(makeArrayIncreasing([3, 3, 3, 3, 3], [1, 2, 2, 2, 4, 5]), 4, 'Test 88');
test(makeArrayIncreasing([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 10, 'Test 89');
test(makeArrayIncreasing([1,2,3,4,5,6,7,8,9,10], [10,9,8,7,6,5,4,3,2,1]), 0, 'Test 90');
test(makeArrayIncreasing([5, 14, 13, 8, 12], [1, 4, 3, 9, 11, 10]), 3, 'Test 91');
test(makeArrayIncreasing([10, 9, 8, 7, 6], [1, 2, 3, 4, 5]), 4, 'Test 92');
test(makeArrayIncreasing([10, 20, 30, 40, 50], [5, 15, 25, 35, 45, 55]), 0, 'Test 93');
test(makeArrayIncreasing([100, 200, 300, 400, 500], [150, 250, 350, 450, 550]), 0, 'Test 94');
test(makeArrayIncreasing([10,9,8,7,6,5,4,3,2,1], [2,4,6,8,10,12,14,16,18,20]), 9, 'Test 95');
test(makeArrayIncreasing([1, 10, 10, 10, 1], [2, 3, 4, 5, 6]), 4, 'Test 96');
test(makeArrayIncreasing([1,1,1,1,1,1,1,1,1,1], [1,1,1,1,1,1,1,1,1,1]), -1, 'Test 97');
test(makeArrayIncreasing([1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), -1, 'Test 98');
test(makeArrayIncreasing([1, 10, 2, 9, 3, 8, 4, 7, 5, 6], [2, 5, 8, 11, 14]), -1, 'Test 99');
test(makeArrayIncreasing([1, 2, 3, 100, 100], [4, 5, 6, 7]), 1, 'Test 100');
test(makeArrayIncreasing([5, 5, 5, 5, 5], [1, 2, 3, 4, 5]), 4, 'Test 101');
test(makeArrayIncreasing([9, 8, 7, 6, 5], [1, 2, 3, 4, 5, 6, 7, 8, 9]), 4, 'Test 102');
test(makeArrayIncreasing([1,2,3,4,5], [1,3,5,7,9]), 0, 'Test 103');
test(makeArrayIncreasing([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]), 0, 'Test 104');
test(makeArrayIncreasing([100, 200, 150, 300, 250], [120, 160, 180, 220, 260]), 2, 'Test 105');
test(makeArrayIncreasing([1, 2, 2, 2, 2], [2, 3, 4, 5, 6]), 3, 'Test 106');
test(makeArrayIncreasing([5, 5, 5, 5, 5, 5, 5], [1, 2, 3, 4, 5, 6, 7]), 6, 'Test 107');
test(makeArrayIncreasing([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [5, 6, 7, 8, 9]), 0, 'Test 108');
test(makeArrayIncreasing([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]), 0, 'Test 109');
test(makeArrayIncreasing([1, 10, 20, 30, 40], [5, 15, 25, 35, 45]), 0, 'Test 110');
test(makeArrayIncreasing([1, 5, 3, 6, 7, 8, 9], [1, 3, 2, 4, 5, 6, 7]), 1, 'Test 111');
test(makeArrayIncreasing([1, 2, 3, 4, 5], [2, 4, 6, 8, 10]), 0, 'Test 112');
test(makeArrayIncreasing([1, 2, 2, 3, 4], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 3, 'Test 113');
test(makeArrayIncreasing([6, 7, 8, 10, 9], [2, 3, 5, 6, 11, 13, 15]), 1, 'Test 114');
test(makeArrayIncreasing([1, 2, 3, 4, 5], [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]), 0, 'Test 115');
test(makeArrayIncreasing([100, 90, 80, 70, 60], [55, 65, 75, 85, 95, 105]), 4, 'Test 116');
test(makeArrayIncreasing([1,1000000000,1,1000000000,1], [2,3,4,5]), 4, 'Test 117');
test(makeArrayIncreasing([1, 50, 200, 250, 300], [2, 20, 100, 225]), 0, 'Test 118');
test(makeArrayIncreasing([10, 12, 14, 16, 18], [9, 11, 13, 15, 17]), 0, 'Test 119');
test(makeArrayIncreasing([1, 2, 2, 4, 5], [1, 3, 5]), 1, 'Test 120');
test(makeArrayIncreasing([1, 3, 2, 4, 3, 5], [2, 3, 4, 5, 6]), 4, 'Test 121');
test(makeArrayIncreasing([1, 20, 3, 40, 5], [2, 19, 4, 39, 6]), 2, 'Test 122');
test(makeArrayIncreasing([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [5, 6, 7, 8, 9, 10]), 0, 'Test 123');
test(makeArrayIncreasing([1,3,5,7,9], [2,4,6,8,10,12,14,16,18,20]), 0, 'Test 124');
test(makeArrayIncreasing([1000000000,1000000000,1000000000], [500000000,500000000,500000000]), -1, 'Test 125');
test(makeArrayIncreasing([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 11, 12, 13, 14, 15]), 0, 'Test 126');
test(makeArrayIncreasing([1, 5, 9, 13, 17], [2, 6, 10, 14, 18]), 0, 'Test 127');
test(makeArrayIncreasing([1, 3, 2, 4, 6, 5, 7, 8, 10, 9], [2, 5, 6, 8, 9, 11]), -1, 'Test 128');
test(makeArrayIncreasing([2000, 1999, 1998, 1997, 1996], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 4, 'Test 129');
test(makeArrayIncreasing([10,20,30,40,50], [25,35,45,55,65]), 0, 'Test 130');
test(makeArrayIncreasing([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]), 0, 'Test 131');
test(makeArrayIncreasing([1,2,3,4,5], [1,2,3,4,5,6,7,8,9,10]), 0, 'Test 132');
test(makeArrayIncreasing([1, 2, 3, 4, 5], [5, 4, 3, 2, 1]), 0, 'Test 133');
test(makeArrayIncreasing([1,2,3,4,5], [3,4,5,6,7,8,9,10]), 0, 'Test 134');
test(makeArrayIncreasing([1,10,100,1000,10000], [5000,500,50,5,50000]), 0, 'Test 135');
test(makeArrayIncreasing([5, 3, 4, 2, 1], [1, 2, 3, 4, 5, 6]), 3, 'Test 136');
test(makeArrayIncreasing([1, 9, 5, 7, 3], [2, 4, 6, 8, 10]), 2, 'Test 137');
test(makeArrayIncreasing([10, 20, 30, 25, 40, 50], [15, 22, 28, 35, 45, 55]), 1, 'Test 138');
test(makeArrayIncreasing([1000000000, 1000000000, 1000000000], [1, 2, 3]), 2, 'Test 139');
test(makeArrayIncreasing([1,3,5,7,9], [2,4,6,8,10,12,14,16,18]), 0, 'Test 140');
test(makeArrayIncreasing([1,3,2,4,5,6], [2,3,4,5,6,7]), 2, 'Test 141');
test(makeArrayIncreasing([1,3,5,7,9,11,13,15,17,19], [2,4,6,8,10,12,14,16,18,20]), 0, 'Test 142');
test(makeArrayIncreasing([1,2,3,4,5,6,7,8,9,10], [5,15,25,35,45,55,65,75,85,95]), 0, 'Test 143');
test(makeArrayIncreasing([1, 3, 20, 30, 100], [2, 15, 25, 90]), 0, 'Test 144');
test(makeArrayIncreasing([1, 3, 2, 4, 3, 5, 4], [2, 3, 4, 5, 6, 7]), 5, 'Test 145');

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
