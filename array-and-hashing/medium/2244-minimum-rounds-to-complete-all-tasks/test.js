// Test: 2244. Minimum Rounds To Complete All Tasks
// 58 test cases from LeetCodeDataset
// Run: node test.js

const { minimumRounds } = require("./solution");

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

console.log("\n2244. Minimum Rounds To Complete All Tasks\n");

test(minimumRounds([9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]), 5, 'Test 1');
test(minimumRounds([7,7,7,7,7,7,7,7,7,7,7,7,7]), 5, 'Test 2');
test(minimumRounds([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]), 7, 'Test 3');
test(minimumRounds([7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7]), 7, 'Test 4');
test(minimumRounds([10,10,10,10,10,10,10,10,10,10]), 4, 'Test 5');
test(minimumRounds([5,5,5,5,5,5,5,5,5]), 3, 'Test 6');
test(minimumRounds([1,1,1,2,2,2,2,3,3,3,3,3]), 5, 'Test 7');
test(minimumRounds([1]), -1, 'Test 8');
test(minimumRounds([2,3,3]), -1, 'Test 9');
test(minimumRounds([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]), 10, 'Test 10');
test(minimumRounds([2,2,2,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4]), 7, 'Test 11');
test(minimumRounds([1,1,1,1,1,1]), 2, 'Test 12');
test(minimumRounds([2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]), 8, 'Test 13');
test(minimumRounds([10,10,10,20,20,30,30,30,30]), 4, 'Test 14');
test(minimumRounds([2,2,3,3,2,4,4,4,4,4]), 4, 'Test 15');
test(minimumRounds([1,2,3,4,5]), -1, 'Test 16');
test(minimumRounds([5,5,5,5,5,5,5]), 3, 'Test 17');
test(minimumRounds([5,5,5,5,5,5]), 2, 'Test 18');
test(minimumRounds([1,1,2,2,2,3,3,3,3,3,4,4,4,4,4,4]), 6, 'Test 19');
test(minimumRounds([8,8,8,8,8,8,8,8,8,8,8,8,8,8]), 5, 'Test 20');
test(minimumRounds([1,2,3,4,5,6,7,8,9,10]), -1, 'Test 21');
test(minimumRounds([1,1,1,2,2,2,3]), -1, 'Test 22');
test(minimumRounds([6,6,6,6,6,6,6,6,6,6,6,6]), 4, 'Test 23');
test(minimumRounds([9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]), 15, 'Test 24');
test(minimumRounds([1,2,2,3,3,3,4,4,4,4,5,5,5,5,5,6,6,6,6,6,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8]), -1, 'Test 25');
test(minimumRounds([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 9, 'Test 26');
test(minimumRounds([7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7]), 9, 'Test 27');
test(minimumRounds([1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]), 11, 'Test 28');
test(minimumRounds([2,2,3,3,3,3,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 13, 'Test 29');
test(minimumRounds([100,100,100,100,100,100,100,100,100,100,200,200,200,200,200,200,200,200,200,200,300,300,300,300,300]), 10, 'Test 30');
test(minimumRounds([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 11, 'Test 31');
test(minimumRounds([1,1,1,1,1,1,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]), 14, 'Test 32');
test(minimumRounds([1000000000,1000000000,1000000000,1000000000,2000000000,2000000000,3000000000,3000000000,3000000000]), 4, 'Test 33');
test(minimumRounds([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6]), 16, 'Test 34');
test(minimumRounds([1,1,1,1,2,2,2,2,3,3,3,3,3,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6]), 15, 'Test 35');
test(minimumRounds([400,400,400,400,500,500,500,500,500,600,600,600,600,600,600,700,700,700,700,700,700,700]), 9, 'Test 36');
test(minimumRounds([1,1,1,2,2,2,2,3,3,3,3,3,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 13, 'Test 37');
test(minimumRounds([1,1,1,1,2,2,3,3,3,3,4,4,4,4,5,5,5,5,5,5,6,6,6,6,6,6,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8]), 17, 'Test 38');
test(minimumRounds([1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]), 16, 'Test 39');
test(minimumRounds([3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]), 14, 'Test 40');
test(minimumRounds([1,2,2,3,3,3,4,4,4,4,5,5,5,5,5,6,6,6,6,6,6,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8]), -1, 'Test 41');
test(minimumRounds([100,100,100,101,101,101,101,101,102,102,102,103,103,103,103,103,103,104,104]), 7, 'Test 42');
test(minimumRounds([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]), 20, 'Test 43');
test(minimumRounds([1,1,2,2,2,3,3,3,3,4,4,4,4,4,5,5,5,5,5,5,6,6,6,6,6,6,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8]), 16, 'Test 44');
test(minimumRounds([1,1,1,1,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5]), 13, 'Test 45');
test(minimumRounds([1,2,2,3,3,3,4,4,4,4,5,5,5,5,5,6,6,6,6,6,6]), -1, 'Test 46');
test(minimumRounds([7,7,7,8,8,8,8,8,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10]), 11, 'Test 47');
test(minimumRounds([1,1,2,2,3,3,4,4,4,5,5,5,5,6,6,6,6,6]), 8, 'Test 48');
test(minimumRounds([1,1,1,1,2,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6]), 19, 'Test 49');
test(minimumRounds([1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]), 15, 'Test 50');
test(minimumRounds([6,6,6,6,6,6,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9]), 13, 'Test 51');
test(minimumRounds([9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]), 12, 'Test 52');
test(minimumRounds([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,1,1,2,2,3,3,3,4,4,4,4,5,5,5,5,5]), -1, 'Test 53');
test(minimumRounds([8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8]), 10, 'Test 54');
test(minimumRounds([1,1,1,1,2,2,2,3,3,3,3,4,4,4,4,4,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6]), 14, 'Test 55');
test(minimumRounds([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]), 7, 'Test 56');
test(minimumRounds([1,1,1,2,2,3,3,3,3,3,4,4,4,4,4,4,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6]), 14, 'Test 57');
test(minimumRounds([1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3]), 9, 'Test 58');

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
