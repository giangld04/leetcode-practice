// Test: 1838. Frequency Of The Most Frequent Element
// 99 test cases from LeetCodeDataset
// Run: node test.js

const { maxFrequency } = require("./solution");

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

console.log("\n1838. Frequency Of The Most Frequent Element\n");

test(maxFrequency([1,2,4], 5), 3, 'Test 1');
test(maxFrequency([100000,100000,100000], 300000), 3, 'Test 2');
test(maxFrequency([1,2,3,4,5,6,7,8,9,10], 25), 7, 'Test 3');
test(maxFrequency([1,1,1,1], 0), 4, 'Test 4');
test(maxFrequency([5,5,5,5,5], 10), 5, 'Test 5');
test(maxFrequency([1,2,2,3,3,3,4], 7), 6, 'Test 6');
test(maxFrequency([1,1,1,1,1], 10), 5, 'Test 7');
test(maxFrequency([3,9,6], 2), 1, 'Test 8');
test(maxFrequency([1,1,1,1,1], 5), 5, 'Test 9');
test(maxFrequency([1,1,1], 0), 3, 'Test 10');
test(maxFrequency([1,100000], 100000), 2, 'Test 11');
test(maxFrequency([1,2,2,4], 6), 3, 'Test 12');
test(maxFrequency([1,4,8,13], 5), 2, 'Test 13');
test(maxFrequency([1,100000], 99999), 2, 'Test 14');
test(maxFrequency([5,5,5,5,5], 0), 5, 'Test 15');
test(maxFrequency([100000,100000,100000], 100000), 3, 'Test 16');
test(maxFrequency([5,9,11,13,15], 10), 3, 'Test 17');
test(maxFrequency([1,2,3,4,5], 10), 5, 'Test 18');
test(maxFrequency([1,2,2,3,3,3], 6), 6, 'Test 19');
test(maxFrequency([1,2,2,4], 3), 3, 'Test 20');
test(maxFrequency([1,2,2,3,3,3,4,4,4,4], 10), 10, 'Test 21');
test(maxFrequency([1,1,1,1], 10), 4, 'Test 22');
test(maxFrequency([1,2,3,4,5], 15), 5, 'Test 23');
test(maxFrequency([1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4], 50), 20, 'Test 24');
test(maxFrequency([5,10,15,20,25,30,35,40,45,50], 200), 9, 'Test 25');
test(maxFrequency([5,10,15,20,25,30,35,40,45,50], 150), 8, 'Test 26');
test(maxFrequency([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], 50), 15, 'Test 27');
test(maxFrequency([1,2,3,4,5,6,7,8,9,10], 45), 10, 'Test 28');
test(maxFrequency([2,2,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5], 150), 21, 'Test 29');
test(maxFrequency([5,5,5,5,5,6,6,6,6,7,7,7,8,8,9], 50), 15, 'Test 30');
test(maxFrequency([1,2,2,3,3,3,4,4,4,4], 15), 10, 'Test 31');
test(maxFrequency([1,1,2,2,2,3,3,3,3,4,4,4,4,4,5,5,5,5,5,5], 75), 20, 'Test 32');
test(maxFrequency([1,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6], 40), 19, 'Test 33');
test(maxFrequency([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150], 1000), 14, 'Test 34');
test(maxFrequency([1,3,5,7,9,11,13,15,17,19], 55), 7, 'Test 35');
test(maxFrequency([1,3,6,10,15], 25), 4, 'Test 36');
test(maxFrequency([1,2,3,4,5,6,7,8,9,10], 15), 6, 'Test 37');
test(maxFrequency([5,7,7,8,8,10,10,10,10], 30), 9, 'Test 38');
test(maxFrequency([5,5,5,5,5,5,5,5,5,5], 50), 10, 'Test 39');
test(maxFrequency([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3], 100), 20, 'Test 40');
test(maxFrequency([99999, 99999, 99999, 99999, 99999, 99999, 99999, 99999, 99999, 99999], 500000), 10, 'Test 41');
test(maxFrequency([5,7,7,8,8,10,10,10,12,12,12,12], 30), 11, 'Test 42');
test(maxFrequency([1,1,2,2,3,3,4,4,5,5], 10), 7, 'Test 43');
test(maxFrequency([1,1,2,2,2,3,3,3,3,4,4,4,4,4,5,5,5,5,5,5], 100), 20, 'Test 44');
test(maxFrequency([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 100000], 199999), 19, 'Test 45');
test(maxFrequency([100000,100000,100000,100000,100000], 500000), 5, 'Test 46');
test(maxFrequency([10,20,30,40,50,60,70,80,90,100], 150), 6, 'Test 47');
test(maxFrequency([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 50), 10, 'Test 48');
test(maxFrequency([1,1,1,1,1,2,2,2,2,3,3,3,4,4,5], 10), 10, 'Test 49');
test(maxFrequency([1,2,2,3,4,4,5,6,7,8,9], 30), 9, 'Test 50');
test(maxFrequency([1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4,5,5,5,5,5], 60), 25, 'Test 51');
test(maxFrequency([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 0), 20, 'Test 52');
test(maxFrequency([1,1,2,3,4,5,6,7,8,9,10], 50), 10, 'Test 53');
test(maxFrequency([10,20,30,40,50,60,70,80,90,100], 1000), 10, 'Test 54');
test(maxFrequency([1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5], 60), 20, 'Test 55');
test(maxFrequency([5,5,5,5,5,5,5,5,5,5], 0), 10, 'Test 56');
test(maxFrequency([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29], 100), 10, 'Test 57');
test(maxFrequency([1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5], 30), 17, 'Test 58');
test(maxFrequency([10,20,30,40,50], 100), 5, 'Test 59');
test(maxFrequency([100000, 100000, 100000, 100000, 100000], 100000), 5, 'Test 60');
test(maxFrequency([10,10,10,10,10,10,10,10,10,10], 0), 10, 'Test 61');
test(maxFrequency([5,5,5,5,5,5,5,5,5,5], 100), 10, 'Test 62');
test(maxFrequency([10,10,10,10,10,10,10,10,10,10], 50), 10, 'Test 63');
test(maxFrequency([10,10,20,20,30,30,40,40,50,50], 100), 7, 'Test 64');
test(maxFrequency([2,4,6,8,10,12,14,16,18,20,22,24,26,28,30], 200), 14, 'Test 65');
test(maxFrequency([1,2,2,2,3,3,3,3,4,4,4,4,4,5,5,5,5,5], 50), 18, 'Test 66');
test(maxFrequency([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10], 100), 20, 'Test 67');
test(maxFrequency([1,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200], 1500), 17, 'Test 68');
test(maxFrequency([1,1,2,2,2,3,3,3,3,3,4,4,4,4,4,4], 50), 16, 'Test 69');
test(maxFrequency([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25], 200), 20, 'Test 70');
test(maxFrequency([1,3,5,7,9,11,13,15,17,19], 100), 10, 'Test 71');
test(maxFrequency([1,5,9,13,17,21,25,29,33,37,41,45,49,53,57,61,65,69,73,77,81,85,89,93,97,101], 500), 16, 'Test 72');
test(maxFrequency([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 200), 20, 'Test 73');
test(maxFrequency([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 0), 15, 'Test 74');
test(maxFrequency([1,2,2,3,3,3,4,4,4,4], 20), 10, 'Test 75');
test(maxFrequency([100,200,300,400,500,600,700,800,900,1000], 3000), 8, 'Test 76');
test(maxFrequency([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 1000), 20, 'Test 77');
test(maxFrequency([10,10,10,10,10,10,10,10,10,10], 100), 10, 'Test 78');
test(maxFrequency([1,3,5,7,9,11,13,15,17,19], 50), 7, 'Test 79');
test(maxFrequency([1,3,5,7,9,11,13,15,17,19,21], 100), 10, 'Test 80');
test(maxFrequency([1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 100), 40, 'Test 81');
test(maxFrequency([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39], 300), 17, 'Test 82');
test(maxFrequency([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 100), 14, 'Test 83');
test(maxFrequency([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], 100), 20, 'Test 84');
test(maxFrequency([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 150), 17, 'Test 85');
test(maxFrequency([10,15,20,25,30,35,40,45,50], 100), 6, 'Test 86');
test(maxFrequency([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7], 100), 21, 'Test 87');
test(maxFrequency([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6], 200), 30, 'Test 88');
test(maxFrequency([1,1,2,2,2,3,3,3,3,4,4,4,4,4], 20), 14, 'Test 89');
test(maxFrequency([1000,2000,3000,4000,5000,6000,7000,8000,9000,10000], 50000), 10, 'Test 90');
test(maxFrequency([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20], 200), 29, 'Test 91');
test(maxFrequency([1,2,2,3,3,3,4,4,4,4,5,5,5,5,5], 15), 13, 'Test 92');
test(maxFrequency([100,90,80,70,60,50,40,30,20,10], 250), 7, 'Test 93');
test(maxFrequency([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 100), 14, 'Test 94');
test(maxFrequency([10,20,30,40,50,60,70,80,90,100], 500), 10, 'Test 95');
test(maxFrequency([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 100), 14, 'Test 96');
test(maxFrequency([100000, 100000, 100000, 100000, 100000], 500000), 5, 'Test 97');
test(maxFrequency([1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5], 50), 20, 'Test 98');
test(maxFrequency([1,1,1,1,2,2,2,3,3,4,5,6,7,8,9,10], 50), 12, 'Test 99');

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
