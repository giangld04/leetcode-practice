// Test: 2086. Minimum Number Of Food Buckets To Feed The Hamsters
// 91 test cases from LeetCodeDataset
// Run: node test.js

const { minimumBuckets } = require("./solution");

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

console.log("\n2086. Minimum Number Of Food Buckets To Feed The Hamsters\n");

test(minimumBuckets("H"), -1, 'Test 1');
test(minimumBuckets("H.H.H.H.H.H"), 3, 'Test 2');
test(minimumBuckets("HH.H.H.H.H.H.H.H.H.H.H.H.H.H"), -1, 'Test 3');
test(minimumBuckets("H.H.H.H.H.H.H.H.H.H"), 5, 'Test 4');
test(minimumBuckets("....."), 0, 'Test 5');
test(minimumBuckets("."), 0, 'Test 6');
test(minimumBuckets("H..H"), 2, 'Test 7');
test(minimumBuckets("H.H"), 1, 'Test 8');
test(minimumBuckets("H....H"), 2, 'Test 9');
test(minimumBuckets("H.H.H.H.H"), 3, 'Test 10');
test(minimumBuckets("HHHH"), -1, 'Test 11');
test(minimumBuckets("H.H.H.H.H.H.H"), 4, 'Test 12');
test(minimumBuckets("HH"), -1, 'Test 13');
test(minimumBuckets("H.H.HH"), -1, 'Test 14');
test(minimumBuckets(".HHH."), -1, 'Test 15');
test(minimumBuckets("HH.H.H.H.H.H.H.H.H.H.H.H.H.H.H.H.H.H"), -1, 'Test 16');
test(minimumBuckets("HH.H.H.H.H.H.H.H.H.H.H.H.H.H.H.H.H.H.H.H"), -1, 'Test 17');
test(minimumBuckets("H.H.H.H.H.H.H.H.H.H.H.H.H.H.H"), 8, 'Test 18');
test(minimumBuckets("HH.HH.HH"), -1, 'Test 19');
test(minimumBuckets("H.H.H"), 2, 'Test 20');
test(minimumBuckets("HH.H.H.H.H"), -1, 'Test 21');
test(minimumBuckets("H.H.H.H"), 2, 'Test 22');
test(minimumBuckets("HH.HH"), -1, 'Test 23');
test(minimumBuckets("HH.H.H.H.H.H.H.H.H.H.H"), -1, 'Test 24');
test(minimumBuckets("HH.H.H.H.H.H.H.H.H.H.H.H"), -1, 'Test 25');
test(minimumBuckets(".H.H."), 1, 'Test 26');
test(minimumBuckets("H.H.H.H.H.H.H.H"), 4, 'Test 27');
test(minimumBuckets("H.HH"), -1, 'Test 28');
test(minimumBuckets("H.H.H.H.H.H.H.H.H.H.H.H.H"), 7, 'Test 29');
test(minimumBuckets("HHHHHH"), -1, 'Test 30');
test(minimumBuckets("HH.H.H"), -1, 'Test 31');
test(minimumBuckets("HH.H"), -1, 'Test 32');
test(minimumBuckets("H.H.H.H.H.H.H.H.H"), 5, 'Test 33');
test(minimumBuckets("HH.H.H.H.H.H.H"), -1, 'Test 34');
test(minimumBuckets("H.H.H.H.H.H.H.H.H.H.H.H.H.H.H.H.H.H.H"), 10, 'Test 35');
test(minimumBuckets("HH.H.H.H.H.H.H.H.H.H.H.H.H.H.H.H"), -1, 'Test 36');
test(minimumBuckets("HH.H.HH"), -1, 'Test 37');
test(minimumBuckets("......"), 0, 'Test 38');
test(minimumBuckets("H.H.H.H.H.H.H.H.H.H.H"), 6, 'Test 39');
test(minimumBuckets("..."), 0, 'Test 40');
test(minimumBuckets("H.H.H.H.H.H.H.H.H.H.H.H.H.H.H.H.H"), 9, 'Test 41');
test(minimumBuckets("H.H.HH.H.H"), 4, 'Test 42');
test(minimumBuckets('H.....H'), 2, 'Test 43');
test(minimumBuckets('H.H.H.H.H.H.H'), 4, 'Test 44');
test(minimumBuckets("H.....H"), 2, 'Test 45');
test(minimumBuckets("......."), 0, 'Test 46');
test(minimumBuckets("HH.HHHHH.HH"), -1, 'Test 47');
test(minimumBuckets('.H.H.'), 1, 'Test 48');
test(minimumBuckets("H.H.H.H.HH"), -1, 'Test 49');
test(minimumBuckets("........"), 0, 'Test 50');
test(minimumBuckets('H.H.H.H.H.H.H.H.H'), 5, 'Test 51');
test(minimumBuckets("..H.H.."), 1, 'Test 52');
test(minimumBuckets('H.H.H.H.H'), 3, 'Test 53');
test(minimumBuckets("HH.H.H.HH"), -1, 'Test 54');
test(minimumBuckets('HH'), -1, 'Test 55');
test(minimumBuckets("H.HH.H"), 2, 'Test 56');
test(minimumBuckets('HH.HH.HH.HH.HH.HH.HH.HH'), -1, 'Test 57');
test(minimumBuckets('...'), 0, 'Test 58');
test(minimumBuckets("H."), 1, 'Test 59');
test(minimumBuckets("H.H..H.H"), 2, 'Test 60');
test(minimumBuckets("H.......H"), 2, 'Test 61');
test(minimumBuckets('..H..H..'), 2, 'Test 62');
test(minimumBuckets("HHHHH"), -1, 'Test 63');
test(minimumBuckets('HH.HH'), -1, 'Test 64');
test(minimumBuckets("HH.H.H.H.HH"), -1, 'Test 65');
test(minimumBuckets("H...H"), 2, 'Test 66');
test(minimumBuckets("HH.HHH.HH"), -1, 'Test 67');
test(minimumBuckets('........'), 0, 'Test 68');
test(minimumBuckets("H.H.H.HH.H"), 3, 'Test 69');
test(minimumBuckets('HH.HH.HH.HH'), -1, 'Test 70');
test(minimumBuckets('H.H.H.H'), 2, 'Test 71');
test(minimumBuckets('.'), 0, 'Test 72');
test(minimumBuckets("HHHHHHHHHH"), -1, 'Test 73');
test(minimumBuckets('.HHH.'), -1, 'Test 74');
test(minimumBuckets("H.H.H.HH"), -1, 'Test 75');
test(minimumBuckets(".H"), 1, 'Test 76');
test(minimumBuckets(".H.H.H.H."), 2, 'Test 77');
test(minimumBuckets('H.H.H'), 2, 'Test 78');
test(minimumBuckets('H'), -1, 'Test 79');
test(minimumBuckets("........."), 0, 'Test 80');
test(minimumBuckets(".H.H.H.H.H.H.H.H.H."), 5, 'Test 81');
test(minimumBuckets(".H.H.H.H.H.H.H.H."), 4, 'Test 82');
test(minimumBuckets("HHHHHHH"), -1, 'Test 83');
test(minimumBuckets("HH...HH"), -1, 'Test 84');
test(minimumBuckets("H.H.H.H.H.H.H.H.H.H.H.H"), 6, 'Test 85');
test(minimumBuckets("H......H"), 2, 'Test 86');
test(minimumBuckets('H.H'), 1, 'Test 87');
test(minimumBuckets("HH.HH.HH.HH.HH"), -1, 'Test 88');
test(minimumBuckets('H..H'), 2, 'Test 89');
test(minimumBuckets("HH..HH"), -1, 'Test 90');
test(minimumBuckets('HHHH'), -1, 'Test 91');

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
