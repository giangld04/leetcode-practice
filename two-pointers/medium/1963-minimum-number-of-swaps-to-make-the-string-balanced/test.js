// Test: 1963. Minimum Number Of Swaps To Make The String Balanced
// 114 test cases from LeetCodeDataset
// Run: node test.js

const { minSwaps } = require("./solution");

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

console.log("\n1963. Minimum Number Of Swaps To Make The String Balanced\n");

test(minSwaps("[]][[]"), 1, 'Test 1');
test(minSwaps("[[[[]]]]"), 0, 'Test 2');
test(minSwaps("]][[[]]]"), 0, 'Test 3');
test(minSwaps("][]["), 1, 'Test 4');
test(minSwaps("]]][[][["), 2, 'Test 5');
test(minSwaps("]]]][[[["), 2, 'Test 6');
test(minSwaps("][[]]["), 1, 'Test 7');
test(minSwaps("[][][][]"), 0, 'Test 8');
test(minSwaps("[[[]]]"), 0, 'Test 9');
test(minSwaps("[[[]]][[]]"), 0, 'Test 10');
test(minSwaps("]][[][]["), 1, 'Test 11');
test(minSwaps("]]][[["), 2, 'Test 12');
test(minSwaps("[][]"), 0, 'Test 13');
test(minSwaps("[]"), 0, 'Test 14');
test(minSwaps("]][["), 1, 'Test 15');
test(minSwaps("]]][[[[[[]]]]]"), 1, 'Test 16');
test(minSwaps("]][[[]"), 1, 'Test 17');
test(minSwaps("[[]][]"), 0, 'Test 18');
test(minSwaps("][[][]"), 1, 'Test 19');
test(minSwaps("[[[][]]]"), 0, 'Test 20');
test(minSwaps("]]][[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]), Error: Solution.minSwaps[] missing 1 required positional argument: 's', 'Test 21');
test(minSwaps("]]]]][[[[[[[]]]]]]"), 1, 'Test 22');
test(minSwaps("]][[[[[[]]]]][[[]]]][[][[[[[]]]]]]]][[[[[]]]][[]), Error: Solution.minSwaps[] missing 1 required positional argument: 's', 'Test 23');
test(minSwaps("]]]]][[[[[][][]]]]]][[[[[][][]]]]]"), 0, 'Test 24');
test(minSwaps("[[[[[[]]]]]]][[[[[[[]]]]]]][[[[[[[]]]]]]][[[[[[[]]]]]]"), 1, 'Test 25');
test(minSwaps("][]]]][[[[[]][[]]]"), 1, 'Test 26');
test(minSwaps("]][[[[[[[[[[]]]]]]]]][[[[[[[]]]]]]][[[[[[[]]]]]]][[[[[[[]]]]]]][[[[[[[]]]]]]][[[[[[[]]]]]]][[[[[[[]]]]]]"), 1, 'Test 27');
test(minSwaps("]][[[]]]]][[[[[]]]"), 1, 'Test 28');
test(minSwaps("]]][[][[[[[]]]]]]]"), 0, 'Test 29');
test(minSwaps("]]][[[[[[[[[[[][][][]]]]]]][[[[[[[[[][][][]]]]]]][[[[[[[[[][][][]]]]]]]"), 4, 'Test 30');
test(minSwaps("]]][[[[]]]][[[[[]]]]][[[[]]]]"), 0, 'Test 31');
test(minSwaps("]]][[[][]]][[[[[[[]]]]]][][][[]][["), 2, 'Test 32');
test(minSwaps("]][[[]]][][[[[[[[[]]]]]][][["), 2, 'Test 33');
test(minSwaps("]]][[[[[[[]]]]]]][[[[[]]]]]][[[[]]]]]]]]"), 0, 'Test 34');
test(minSwaps("]]]]][[[[[[]]][]]]"), 1, 'Test 35');
test(minSwaps("]][[]][[]][[]][[]][[]][[]][[]][[]][[]][[]][[]][[]][[]][[]][["), 1, 'Test 36');
test(minSwaps("]]][[[[[[[[[[[[[[[]]]]]]]]]]]]]]][[[[[[[[[]]]]]]]]]]]]][[[[[[[[[]]]]]]]]][[[[[[[[[]]]]]]]]]]][[[[[[[[[]]]]]]]]]]][[[[[[[[[]]]]]]]]]]][[[[[[[[[]]]]]]]]]]][[[[[[[[[]]]]]]]]]]][[[[[[[[[]]]]]]]]]]][[[[[[[[[]]]]]]]]]]][[[[[[[[[]]]]]]]]]]][[[[[[[[[]]]]]]]]]]][[[[[[[[[]]]]]]]]]]][[[[[[[[[]]]]]]]]]]][[[[[[[[[]]]]]]]]]]][[[[[[[[[]]]]]]]]]]][[[[[[[[[]]]]]]]]]), Error: Solution.minSwaps[] missing 1 required positional argument: 's', 'Test 37');
test(minSwaps("[[[[]]]]][[[[[]]]]][[[[[]]]]][[[[[]]]]]"), 0, 'Test 38');
test(minSwaps("]][[[]]][][[[]]]"), 0, 'Test 39');
test(minSwaps("]]]]]]]]][[[[[[[[[["), 5, 'Test 40');
test(minSwaps("[[][]]]][[[][][[]][][[]][[]]"), 1, 'Test 41');
test(minSwaps("[[]][[]][[]][[]][[]][[]][[]][[]][[]][[]][[]][[]][[]][[]][[]][[]]"), 0, 'Test 42');
test(minSwaps("]][[[][]]][[[[]]]"), 1, 'Test 43');
test(minSwaps("]][[[][]]][[[[[[[]]]]]]"), 1, 'Test 44');
test(minSwaps("]]][[[][]][[["), 2, 'Test 45');
test(minSwaps("]]][[[[[[[[[[[][]]]]]]]]][[[[[[[[[][]]]]]]]]][[[[[[[[[][]]]]]]]]]"), 1, 'Test 46');
test(minSwaps("[[[[]]]]][[[[]]]]"), 0, 'Test 47');
test(minSwaps("[[[[[[]]]]]]][[[[[]]]]][[[[[]]]]][[[[[]]]]][[[[[]]]]][[[[[]]]]]"), 0, 'Test 48');
test(minSwaps("]]][[[[[[[[[[[[[[[]]]]]]]]]]]]]]][[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]][[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]][[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]), Error: Solution.minSwaps[] missing 1 required positional argument: 's', 'Test 49');
test(minSwaps("]]][[[[[[[]]]]]]][[[[[]]]]]][[[[[]]]]]]][[[[[]]]]][[[[[]]]]][[[[[]]]]]]]]]]"), 0, 'Test 50');
test(minSwaps("]]][[[[[[[]]]]]]][[[[[]]]]]][[[[[]]]]]"), 0, 'Test 51');
test(minSwaps("[[[]]]]]][[[[]]]), Error: Solution.minSwaps[] missing 1 required positional argument: 's', 'Test 52');
test(minSwaps("]]][[[[[[[][]]]]]]][[[[[][]]]]][[[[[][]]]]]"), 0, 'Test 53');
test(minSwaps("]]][[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]][[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]][[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]][[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]), Error: Solution.minSwaps[] missing 1 required positional argument: 's', 'Test 54');
test(minSwaps("]]][[]]][[[[][["), 3, 'Test 55');
test(minSwaps("]]][[]][[[]][[[]][[[]][[[]][[[]][[[]][[[]][[[]][[]]]]]]]]]]]]]]]]]]), Error: Solution.minSwaps[] missing 1 required positional argument: 's', 'Test 56');
test(minSwaps("]][[][][][[][]][[]][["), 2, 'Test 57');
test(minSwaps("]]][[[[]][]][][[][]][][[[]][]][][[[]]]"), 1, 'Test 58');
test(minSwaps("[][][][][][][][][][][][][][][][][][][][][][][][]"), 0, 'Test 59');
test(minSwaps("]][[[]][[]][[[]]]"), 1, 'Test 60');
test(minSwaps("[[[[[[[[]]]]]]]][[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]"), 0, 'Test 61');
test(minSwaps("]]]]]][[[[[["), 3, 'Test 62');
test(minSwaps("]]]][[[[[][]]][]][[[[[]]]]]"), 1, 'Test 63');
test(minSwaps("]]][[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]][[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]), Error: Solution.minSwaps[] missing 1 required positional argument: 's', 'Test 64');
test(minSwaps("]]]]][[[[[]]]]"), 1, 'Test 65');
test(minSwaps("]]][[[[[[[]]]]][[[[[[]]]]]]][[[["), 3, 'Test 66');
test(minSwaps("]]]]][[[[[]]]][["), 2, 'Test 67');
test(minSwaps("]]][[[[[[[[[[[][][]][[]][]]]]]]][[[[[[[[[][][]][[]][]]]]]]][[[[[[[[[][][]][[]][]]]]]]][[[[[[[[[][]]]]]]]]]"), 3, 'Test 68');
test(minSwaps("]]][[[[[[[[[[[][][]]]]]]][[[[[[[[[][][]]]]]]][[[[[[[[[][][]]]]]]][[[[[[[[[][]]]]]]]]]"), 4, 'Test 69');
test(minSwaps("]][[[[[[[]]]]]]][[[[[]]]]]"), 0, 'Test 70');
test(minSwaps("]]][[[]][[[[]]]][]]]]][][[[[]]]]"), 0, 'Test 71');
test(minSwaps("]]][[[[]]][][[[]]]"), 1, 'Test 72');
test(minSwaps("]]][[[[[[[]]]]][[[["), 3, 'Test 73');
test(minSwaps("]][[[[[][]]]]]][[[[[][]]]]]][[[[[][]]]]][["), 1, 'Test 74');
test(minSwaps("]]][[[[[[]]]]]]][[[[[[[]]]]]]]]][[[[[[[]]]]]]]]][[[[[[[]]]]]]]), Error: Solution.minSwaps[] missing 1 required positional argument: 's', 'Test 75');
test(minSwaps("]]][[[[[[[[[[[[[[[]]]]]]]]]]]]]]][[[[[[[[[]]]]]]]]]]]]][[[[[[[[[]]]]]]]]][[[[[[[[[]]]]]]]]]]), Error: Solution.minSwaps[] missing 1 required positional argument: 's', 'Test 76');
test(minSwaps("]]][[[[[[[]]]]]]"), 1, 'Test 77');
test(minSwaps("]]][[[]][][[[]]]]"), 0, 'Test 78');
test(minSwaps("]][[[][]]][["), 1, 'Test 79');
test(minSwaps("]]][[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]][[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]][[[[[]]]]]]]]]]]]]), Error: Solution.minSwaps[] missing 1 required positional argument: 's', 'Test 80');
test(minSwaps("]]][[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]][[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]), Error: Solution.minSwaps[] missing 1 required positional argument: 's', 'Test 81');
test(minSwaps("]][[[[[[[[[[]]]]]]]]][[[[[[[[[[[]]]]]]]]]][[[[[[[[[[[]]]]]]]]]]]"), 1, 'Test 82');
test(minSwaps("]]][[[[[[[[]]]]]]][[[[[[[]]]]]]]]][[[[[[[]]]]]]]]][[[[[[[]]]]]]]]][[[[[[[]]]]]]]]][[[[[[[]]]]]]]]][[[[[[[]]]]]]]), Error: Solution.minSwaps[] missing 1 required positional argument: 's', 'Test 83');
test(minSwaps("]][[[]]][][["), 1, 'Test 84');
test(minSwaps("]]][[[[[]][[]]]]][[[[[]][[]]]]]"), 0, 'Test 85');
test(minSwaps("]]][[[[[[[]]]]]]][[[]]]"), 0, 'Test 86');
test(minSwaps("]]][[[]]][[[]]]]][[[[[]]]]"), 1, 'Test 87');
test(minSwaps("]]][[[][]][[[[[[[]]]]]][]"), 1, 'Test 88');
test(minSwaps("]][[]][[""), Error: Solution.minSwaps[] missing 1 required positional argument: 's', 'Test 89');
test(minSwaps("]]]]][[[[[[]]]]][[[[]]]]"), 1, 'Test 90');
test(minSwaps("]][[[[[][]]]]]][[[[[[[]]]]]][[[[[]]]]]]"), 0, 'Test 91');
test(minSwaps("]][[[[[][]]]]]][[[[]]]][[][[[[]]]]]]), Error: Solution.minSwaps[] missing 1 required positional argument: 's', 'Test 92');
test(minSwaps("]]][[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]][[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]][[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]), Error: Solution.minSwaps[] missing 1 required positional argument: 's', 'Test 93');
test(minSwaps("]]][[[[[[]]]][]][[[[]]]]]"), 0, 'Test 94');
test(minSwaps("]]][[[[[[[[[[[][][]][[]][]]]][][[[[[[[[][][]][[]][]]]][][[[[[[[[][][]][[]][]]]][][[[[[[[[][]]]]]]]]]"), 6, 'Test 95');
test(minSwaps("]]][[[[[[[]]]]]]][[[[[]]]]]][[[[[]]]]]]][[[[[]]]]]]]]]]"), 0, 'Test 96');
test(minSwaps("]]][[[]]]][[[["), 2, 'Test 97');
test(minSwaps("]]]][][][[[["), 2, 'Test 98');
test(minSwaps("]]][[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]][[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]), Error: Solution.minSwaps[] missing 1 required positional argument: 's', 'Test 99');
test(minSwaps("]]][[[[[[]]]]]]), Error: Solution.minSwaps[] missing 1 required positional argument: 's', 'Test 100');
test(minSwaps("]][[[[[[]]]]]][[[]]"), 1, 'Test 101');
test(minSwaps("]]][[[[[[[[[[[[[[[]]]]]]]]]]]]]]][[[[[[[[[]]]]]]]]]]]]][[[[[[[[[]]]]]]]]]), Error: Solution.minSwaps[] missing 1 required positional argument: 's', 'Test 102');
test(minSwaps("]][[[[[[]]]]][[[]]]][[][[[]]]][[[]]]][[[]]]][[[]]]][[]), Error: Solution.minSwaps[] missing 1 required positional argument: 's', 'Test 103');
test(minSwaps("]][[[[[][]]]]]][["), 1, 'Test 104');
test(minSwaps("]]][[[[[[[[[[[[[[[]]]]]]]]]]]]]]][[[[[[[[[]]]]]]]]]]]]][[[[[[[[[]]]]]]]]][[[[[[[[[]]]]]]]]]]][[[[[[[[[]]]]]]]]]]][[[[[[[[[]]]]]]]]]]][[[[[[[[[]]]]]]]]]]][[[[[[[[[]]]]]]]]]]][[[[[[[[[]]]]]]]]]]][[[[[[[[[]]]]]]]]]]][[[[[[[[[]]]]]]]]]]][[[[[[[[[]]]]]]]]]]][[[[[[[[[]]]]]]]]]]][[[[[[[[[]]]]]]]]]]), Error: Solution.minSwaps[] missing 1 required positional argument: 's', 'Test 105');
test(minSwaps("]]][[[[[]]]]][[[[[]]]]][[[[[]]]]][[[[[]]]]][[[[[]]]]]"), 0, 'Test 106');
test(minSwaps("]]][[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]), Error: Solution.minSwaps[] missing 1 required positional argument: 's', 'Test 107');
test(minSwaps("]]][[[[[[[][]]]]]]"), 1, 'Test 108');
test(minSwaps("]][[[]][[[]][]]]"), 0, 'Test 109');
test(minSwaps("]]][[[[[[[][][]]]]]]][[[[[][][]]]]][[[[[][][]]]]]"), 0, 'Test 110');
test(minSwaps("]]][[[[[[[]]]]][[[[[[]]]]]]"), 1, 'Test 111');
test(minSwaps("]]][[[[[[[[[[[[]]]]]]]]]]]]][[[[[[[]]]]]]]), Error: Solution.minSwaps[] missing 1 required positional argument: 's', 'Test 112');
test(minSwaps("]]][[[[]][]]"), 1, 'Test 113');
test(minSwaps("]]][[[[[[[]]]]]]]]][[[[[[[[[]]]]]]]]]"), 0, 'Test 114');

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
