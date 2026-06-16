// Test: 2930. Number Of Strings Which Can Be Rearranged To Contain Substring
// 31 test cases from LeetCodeDataset
// Run: node test.js

const { stringCount } = require("./solution");

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

console.log("\n2930. Number Of Strings Which Can Be Rearranged To Contain Substring\n");

test(stringCount(100000), Error: maximum recursion depth exceeded, 'Test 1');
test(stringCount(4), 12, 'Test 2');
test(stringCount(1), 0, 'Test 3');
test(stringCount(10), 83943898, 'Test 4');
test(stringCount(5), 1460, 'Test 5');
test(stringCount(99999), Error: maximum recursion depth exceeded, 'Test 6');
test(stringCount(3), 0, 'Test 7');
test(stringCount(125), 558399309, 'Test 8');
test(stringCount(7500), Error: maximum recursion depth exceeded, 'Test 9');
test(stringCount(90000), Error: maximum recursion depth exceeded, 'Test 10');
test(stringCount(100), 86731066, 'Test 11');
test(stringCount(50000), Error: maximum recursion depth exceeded, 'Test 12');
test(stringCount(1000), Error: maximum recursion depth exceeded, 'Test 13');
test(stringCount(50), 232825199, 'Test 14');
test(stringCount(30), 52805056, 'Test 15');
test(stringCount(10000), Error: maximum recursion depth exceeded, 'Test 16');
test(stringCount(2), 0, 'Test 17');
test(stringCount(80), 974106352, 'Test 18');
test(stringCount(8), 295164156, 'Test 19');
test(stringCount(250), 889526859, 'Test 20');
test(stringCount(75), 842828500, 'Test 21');
test(stringCount(5000), Error: maximum recursion depth exceeded, 'Test 22');
test(stringCount(75000), Error: maximum recursion depth exceeded, 'Test 23');
test(stringCount(20), 291395991, 'Test 24');
test(stringCount(15), 430509685, 'Test 25');
test(stringCount(9), 947613240, 'Test 26');
test(stringCount(6), 106620, 'Test 27');
test(stringCount(500), Error: maximum recursion depth exceeded, 'Test 28');
test(stringCount(7), 6058192, 'Test 29');
test(stringCount(90), 122933939, 'Test 30');
test(stringCount(25), 935610434, 'Test 31');

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
