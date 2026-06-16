// Test: 1541. Minimum Insertions To Balance A Parentheses String
// 118 test cases from LeetCodeDataset
// Run: node test.js

const { minInsertions } = require("./solution");

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

console.log("\n1541. Minimum Insertions To Balance A Parentheses String\n");

test(minInsertions("[[]]]"), 1, 'Test 1');
test(minInsertions("]][]]["), 3, 'Test 2');
test(minInsertions("[]]"), 0, 'Test 3');
test(minInsertions("[[][[]]]]]]]]]]]][][]"), 6, 'Test 4');
test(minInsertions("[[]]][[]]][[]]][[]]][[]]]][]"), 5, 'Test 5');
test(minInsertions("[[][[][[][[][[][[][[][[][[][[][[][[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]"]), Error: Solution.minInsertions[] missing 1 required positional argument: 's', 'Test 6');
test(minInsertions("[[][[][[][[][[]]]]]]"), 10, 'Test 7');
test(minInsertions("[][[][[]]][]][[][[]]][]"), 10, 'Test 8');
test(minInsertions("[[][[][[]]]][][[][[][[]]]][][]"), 15, 'Test 9');
test(minInsertions("[[[[][[][[][[][[]]]]]][]]]]]]]]]]]]]]]]]]]]]"), 10, 'Test 10');
test(minInsertions("[[][[][[]]]][][[][[][[]]]]"), 13, 'Test 11');
test(minInsertions("[[[[[[[]]"), 12, 'Test 12');
test(minInsertions("[[][[][[][[][[]]]]]]]][][[]]][[]]]][]"), 11, 'Test 13');
test(minInsertions("][[[[[]]]]]]]]]]]]]"), 5, 'Test 14');
test(minInsertions("[[][[]]][]]"), 4, 'Test 15');
test(minInsertions("[[[[[[[]]]]]]"), 8, 'Test 16');
test(minInsertions("[[[[[[]]]]]]]]"), 4, 'Test 17');
test(minInsertions("[[][]][][[][[][[]]]]"), 10, 'Test 18');
test(minInsertions("[[[[[[[]]]]]]]]]]"), 4, 'Test 19');
test(minInsertions("[[][[][[]]]][][][[][[][[]]]]][[]]][[]]][[]]]"), 16, 'Test 20');
test(minInsertions("[][][][][][][][][][][][][][][][]"), 16, 'Test 21');
test(minInsertions("[[]]][[]]][[]]][[]]][[]]][[]]][[]]][[]]][[]]]"), 9, 'Test 22');
test(minInsertions("[[[]][][]]"), 5, 'Test 23');
test(minInsertions("[[]]][[][[]]]"), 5, 'Test 24');
test(minInsertions("[][[][[][[][[][[]]]]][]][][]"), 14, 'Test 25');
test(minInsertions("[]][][[]]]"), 2, 'Test 26');
test(minInsertions("[[[[[]]]]][[][[]]][][[][[]]][][]"), 16, 'Test 27');
test(minInsertions("[[][[]]][[][[]]][[][[]]][[][[]]]"), 16, 'Test 28');
test(minInsertions("]]]]]]]]]]]]]]]]"), 8, 'Test 29');
test(minInsertions("[[][[[[][[]]][]][][][[]]]]"), 13, 'Test 30');
test(minInsertions("[[[[[[]]]][[[[[[]]]]"), 16, 'Test 31');
test(minInsertions("[[[[[[[[[]]]]]]]]]"), 9, 'Test 32');
test(minInsertions("[[][[][[][[][[]]]]]]]]"), 8, 'Test 33');
test(minInsertions("[[[[]]]]][][[][[]]][[][[]]][]"), 13, 'Test 34');
test(minInsertions("[[[[[[[]]]]]]]"), 7, 'Test 35');
test(minInsertions("[[[[[[]]][]]"]), Error: Solution.minInsertions[] missing 1 required positional argument: 's', 'Test 36');
test(minInsertions("[[]]][[]]][[][]]"), 5, 'Test 37');
test(minInsertions("[[[[]]]]"]), Error: Solution.minInsertions[] missing 1 required positional argument: 's', 'Test 38');
test(minInsertions("[[[]]]]]][[[]]]]]"), 1, 'Test 39');
test(minInsertions("[[][[][[]]]][][][[][[][[]]]][][][[][[][[]]]]"), 22, 'Test 40');
test(minInsertions("[[[[[[]]]]]][][[]]][[]]][[]]][[]]][[]]]"), 12, 'Test 41');
test(minInsertions("[][[][[][[][[][[]]]]][]][]"), 13, 'Test 42');
test(minInsertions("[][[][[][[][[]]]]][[]]]]"), 9, 'Test 43');
test(minInsertions("][[[[[[[[[[[[[[]]]]]]]]]]]]"), 18, 'Test 44');
test(minInsertions("[[[[[]]]]][[][[]]][][[][[]]]"), 14, 'Test 45');
test(minInsertions("[][[][[][[][[][[][[]]]]]][][][][][][][][][]"), 23, 'Test 46');
test(minInsertions("[[[[[[]]]][[[[[[]]]]]]]]"), 12, 'Test 47');
test(minInsertions("[[]]][[]]][[]]][[]]][[]]][[]]][[]]][[]]]"), 8, 'Test 48');
test(minInsertions("][[]]][[][[]]]"), 7, 'Test 49');
test(minInsertions("[[]]][[]]][[]]][[]]][[]]][[]]][[]]][[]]][[]]][[]]][[]]][[]]]"), 12, 'Test 50');
test(minInsertions("[[][[][[]]]][][][[][[][[]]]]][[]]]"), 14, 'Test 51');
test(minInsertions("[][[][[][[][[][[]]]]][]][][][]"), 15, 'Test 52');
test(minInsertions("[][][][][][][][][][]"), 10, 'Test 53');
test(minInsertions("[[[[[[]]][[]]][]]]"), 9, 'Test 54');
test(minInsertions("[[[[]]]]][][[][[]]][[][[]]]"), 12, 'Test 55');
test(minInsertions("[[[[[[[[[[]]]]]]]]"), 12, 'Test 56');
test(minInsertions("[[][[[]][[]]]"), 8, 'Test 57');
test(minInsertions("[[[[[[[[[[[[[[[]]]]]]]]]]]]]][][][][][][][][][][][][][][][][][][][][][][][]"), 39, 'Test 58');
test(minInsertions("[[]]][[][[]]][]]"), 5, 'Test 59');
test(minInsertions("[[]]][]]"), 1, 'Test 60');
test(minInsertions("[][][][]"), 4, 'Test 61');
test(minInsertions("[[]]][[]]][[][[][][[]]]]"), 9, 'Test 62');
test(minInsertions("[[]]][[]]][[]]][[]]]"), 4, 'Test 63');
test(minInsertions("[[[[[[[[[[[[[[]]]]]]]]]]]]"), 16, 'Test 64');
test(minInsertions("[[][[][[][[][[]]]]]]]][][[]]]"), 10, 'Test 65');
test(minInsertions("[[[[[]]]]]]]"), 3, 'Test 66');
test(minInsertions("[[]]][[]]][[]]][[]]][[]]][[]]]"), 6, 'Test 67');
test(minInsertions("[[][[][[][[]]]][][]]"), 10, 'Test 68');
test(minInsertions("[]][[]]][[][[]]]"), 5, 'Test 69');
test(minInsertions("[[][[][[][[][[]]]]]]]][][[]]][[]]]]"), 10, 'Test 70');
test(minInsertions("[[][[][[]]]]"), 6, 'Test 71');
test(minInsertions("[[]]][[]]][[]]]"), 3, 'Test 72');
test(minInsertions("[[]]][[]]][[]]][[]]][[]]][[]]][[]]]"), 7, 'Test 73');
test(minInsertions("[[[]]][][][][][][][]"), 10, 'Test 74');
test(minInsertions("[[]]][]][[]]]]"), 1, 'Test 75');
test(minInsertions("][][][][][][][][][][][][][][][][][][][][][]"), 23, 'Test 76');
test(minInsertions("[[[[[[]]][]][[][[[[]]][]]]]"), 15, 'Test 77');
test(minInsertions("[][[][[][[][[][[][[]]]]]][][][][][][][][][][][][][][]"), 28, 'Test 78');
test(minInsertions("[[[[[[]]]]]][][[]]][[]]][[]]][[]]][[]]][][[]]][[]]][[]]][][[]]][[]]][][[]]]"), 21, 'Test 79');
test(minInsertions("[][[][[][[][[]]]]]"), 9, 'Test 80');
test(minInsertions("[[]]][[]]][[]]][[]]][[]]][[]]][[]]][[]]][[]]][[]]]"), 10, 'Test 81');
test(minInsertions("[][[][[][[][[][[]]][]]]]"), 12, 'Test 82');
test(minInsertions("[][[[[[]]]]]]][[[[[]]]]]]]"), 7, 'Test 83');
test(minInsertions("[[][[]]][[]"), 7, 'Test 84');
test(minInsertions("[[[[]]]]"), 4, 'Test 85');
test(minInsertions("[[[[[[]]]]]][][[]]][[]]][[]]][[]]][[]]][][[]]][[]]][[]]]"), 16, 'Test 86');
test(minInsertions("[[][[][[][[][[]]]]]]]][][]"), 10, 'Test 87');
test(minInsertions("[][[][[][[][[][[]]][]]]][][]"), 14, 'Test 88');
test(minInsertions("[[][[][[][[][[]]]]]]]][][]]"), 9, 'Test 89');
test(minInsertions("[]][][[][[][[][[]]]]]"), 9, 'Test 90');
test(minInsertions("]]]][[["), 8, 'Test 91');
test(minInsertions("[[][[][[][[]]]]][]]"), 8, 'Test 92');
test(minInsertions("[[]]][[]]][[]]]]"), 2, 'Test 93');
test(minInsertions("[][[][[][[]]]][]"), 8, 'Test 94');
test(minInsertions("[[][[][[]]]][][][[][[][[]]]]][[]]][[]]][[]]][[]]]"), 17, 'Test 95');
test(minInsertions("[][][][][][][][][][][[][[][[][[][[]]]]]]"), 20, 'Test 96');
test(minInsertions("[[][[][[][[][[]]]]][[]]]]"), 11, 'Test 97');
test(minInsertions("][][][][][][]"), 8, 'Test 98');
test(minInsertions("[][[][[][[][[][[]]]]][]]"), 12, 'Test 99');
test(minInsertions("[[]]][[]]][[]]][[]]][[]]]"), 5, 'Test 100');
test(minInsertions("[[][[][[]]]][][][[][[][[]]]]"), 14, 'Test 101');
test(minInsertions("[[]]][[][[][[]]]][][][[][[][[]]]]][[]]][[]]]"), 16, 'Test 102');
test(minInsertions("[[[[[[]]]]][[][[]]][[][[]]][][][][]"), 19, 'Test 103');
test(minInsertions("[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]"), 9, 'Test 104');
test(minInsertions("[[][[]]][]][[]]]"), 5, 'Test 105');
test(minInsertions("[[]]][[]]]"), 2, 'Test 106');
test(minInsertions("[][][][][][]"), 6, 'Test 107');
test(minInsertions("[[]]][[[[]]]][[[]]][[]]][][][[][[]]]]"), 14, 'Test 108');
test(minInsertions("[]]]]][[[[]]][[]]]"), 9, 'Test 109');
test(minInsertions("[[]]][[][[][[]]][]]"), 8, 'Test 110');
test(minInsertions("[[][[][[][[][[]]]]]]]]]]]]]]]"), 7, 'Test 111');
test(minInsertions("[[[]]]]]"), 1, 'Test 112');
test(minInsertions("[]][[][[][[]]][]]"), 7, 'Test 113');
test(minInsertions("[[[[[[[]]]]]]]]]"), 5, 'Test 114');
test(minInsertions("[][][][][][][][][]"), 9, 'Test 115');
test(minInsertions("[][[][[][[][[][[][[]]]]]][][][][][][]"), 20, 'Test 116');
test(minInsertions("[[[[[]]]]][[][[]]][][[][[]]][][][]"), 17, 'Test 117');
test(minInsertions("[[][[][[][[][[]]]]]]]][][[]]][[]]]"), 11, 'Test 118');

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
