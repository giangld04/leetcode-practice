// Test: 921. Minimum Add To Make Parentheses Valid
// 120 test cases from LeetCodeDataset
// Run: node test.js

const { minAddToMakeValid } = require("./solution");

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

console.log("\n921. Minimum Add To Make Parentheses Valid\n");

test(minAddToMakeValid("[[]]]"), 1, 'Test 1');
test(minAddToMakeValid("[]]"), 1, 'Test 2');
test(minAddToMakeValid("[]"), 0, 'Test 3');
test(minAddToMakeValid("[[[[[[[]]]"), 4, 'Test 4');
test(minAddToMakeValid("[]][[]"), 2, 'Test 5');
test(minAddToMakeValid("[[[]]]"), 0, 'Test 6');
test(minAddToMakeValid("[["), 2, 'Test 7');
test(minAddToMakeValid(""), 0, 'Test 8');
test(minAddToMakeValid("[[]]]["), 2, 'Test 9');
test(minAddToMakeValid("[[]]"), 0, 'Test 10');
test(minAddToMakeValid("[[]]][[]"), 2, 'Test 11');
test(minAddToMakeValid("[]]][["), 4, 'Test 12');
test(minAddToMakeValid("]][[][][[[][[]]]]]"), 2, 'Test 13');
test(minAddToMakeValid("[][][[][[]]][[][[][[][[]]]]]"), 0, 'Test 14');
test(minAddToMakeValid("[[[[[[[[[[[]]]]]]]]]"), 2, 'Test 15');
test(minAddToMakeValid("[[]]]][[]"), 3, 'Test 16');
test(minAddToMakeValid("][[]]][][]"), 2, 'Test 17');
test(minAddToMakeValid("[[][[[]][][]]]"), 0, 'Test 18');
test(minAddToMakeValid("[[[[[[[]]"), 5, 'Test 19');
test(minAddToMakeValid("[][[][[]]]"), 0, 'Test 20');
test(minAddToMakeValid("[[][[]]][][][[][[][][][[][]][]]"), 1, 'Test 21');
test(minAddToMakeValid("[[[[[][][][[]]]]]"), 1, 'Test 22');
test(minAddToMakeValid("[[][[][[][[][[][]][]]]]"), 1, 'Test 23');
test(minAddToMakeValid("[[][[]]]]][[[]"), 4, 'Test 24');
test(minAddToMakeValid("[[][[]]][[][[][[][[]]]]]"), 0, 'Test 25');
test(minAddToMakeValid("[[][]][[[]]]"), 0, 'Test 26');
test(minAddToMakeValid("[]]][[[[[[]]]]][]]"), 2, 'Test 27');
test(minAddToMakeValid("[[[[][[][[][[]]]]]]]"), 0, 'Test 28');
test(minAddToMakeValid("[[[]]][[]][][[][[]]]"), 0, 'Test 29');
test(minAddToMakeValid("[[][[][[][[][[]]]]][]]"), 0, 'Test 30');
test(minAddToMakeValid("[[][]][[][]][[][]]"), 0, 'Test 31');
test(minAddToMakeValid("[][][][[][[]]][[[]]][[][[][[][[]]]][][[]]]"), 0, 'Test 32');
test(minAddToMakeValid("[[[]]][]][[[]][][]]"), 1, 'Test 33');
test(minAddToMakeValid("[][][][][][][][][][][][][][]"), 0, 'Test 34');
test(minAddToMakeValid("[[][[][][[][][[][][[]]]]]]][[][[][[][[][[]]]]]]]), Error: Solution.minAddToMakeValid[] missing 1 required positional argument: 's', 'Test 35');
test(minAddToMakeValid("[[]]][[[[]]][][][[][[][[]]]]][[]]"), 1, 'Test 36');
test(minAddToMakeValid("[[[[[[[[[]]]]]]]][][]"), 1, 'Test 37');
test(minAddToMakeValid("[[[[[[[]]]]]"), 2, 'Test 38');
test(minAddToMakeValid("]][[][[]]]"), 2, 'Test 39');
test(minAddToMakeValid("[[[[[[[]]]]]]]"), 0, 'Test 40');
test(minAddToMakeValid("[[][[[]][][[]]]"), 1, 'Test 41');
test(minAddToMakeValid("][[[[[[[[[[[]]"), 10, 'Test 42');
test(minAddToMakeValid("[[][[][[][[]]]]]"), 0, 'Test 43');
test(minAddToMakeValid("[[][[][[][[][[][]]]]][[][[][[]]]]][]"), 0, 'Test 44');
test(minAddToMakeValid("[[][[][[][[]]][[][[]]]]]"), 0, 'Test 45');
test(minAddToMakeValid("[[[[[[[]]]]]]]]"), 1, 'Test 46');
test(minAddToMakeValid("[[]]][[][[[][]][[][]]]]"), 1, 'Test 47');
test(minAddToMakeValid("[[][]][]]"), 1, 'Test 48');
test(minAddToMakeValid("[]][][][][[[[]]]]"), 1, 'Test 49');
test(minAddToMakeValid("[[][[]]][[][]][[][[]]]"), 0, 'Test 50');
test(minAddToMakeValid("[[[[]]][[][[]]]]"), 0, 'Test 51');
test(minAddToMakeValid("[][][[]]][[][[[][]]]]"), 1, 'Test 52');
test(minAddToMakeValid("[[[]][[][[][[]]]]]"), 0, 'Test 53');
test(minAddToMakeValid("[[][][[]]][[][[][[]]][[][[]]]]]"), 1, 'Test 54');
test(minAddToMakeValid("[[][[]]]"), 0, 'Test 55');
test(minAddToMakeValid("[[][[][[][[][[][[][[][[][]][]]]]]]][]][]]"]), Error: Solution.minAddToMakeValid[] missing 1 required positional argument: 's', 'Test 56');
test(minAddToMakeValid("][[[[[[[][]]"), 6, 'Test 57');
test(minAddToMakeValid("[[[[]]][[][[]]][[][[]]]"), 1, 'Test 58');
test(minAddToMakeValid("][][[]]][[]"), 3, 'Test 59');
test(minAddToMakeValid("[][][][]"), 0, 'Test 60');
test(minAddToMakeValid("[[[[]][[]]]]"), 0, 'Test 61');
test(minAddToMakeValid("[[][[][[][[][[][[]]]]]]]"), 0, 'Test 62');
test(minAddToMakeValid("[[[]][]][[][[][[]]][]]"), 0, 'Test 63');
test(minAddToMakeValid("[[][[][[][]]]]"), 0, 'Test 64');
test(minAddToMakeValid("[]][[]]][[][[]]]"), 2, 'Test 65');
test(minAddToMakeValid("[[][[][[][[][[][[][]][]]]][]][]]"), 0, 'Test 66');
test(minAddToMakeValid("[[][]][[[][][[]]]]"), 0, 'Test 67');
test(minAddToMakeValid("[[][[]]]]"), 1, 'Test 68');
test(minAddToMakeValid("[[][][[][[]]]][][[][[]]]"), 0, 'Test 69');
test(minAddToMakeValid("[[[[[[]]]]]][][][][[[[][[]]]]][][]"), 0, 'Test 70');
test(minAddToMakeValid("[[[[[[[[[[]]]), Error: Solution.minAddToMakeValid[] missing 1 required positional argument: 's', 'Test 71');
test(minAddToMakeValid("[[][[][[][[][[][[][[]]]]]]]]]"), 1, 'Test 72');
test(minAddToMakeValid("[][[][[][[][[]]]]]"), 0, 'Test 73');
test(minAddToMakeValid("[[][[]]][[][[]]]"), 0, 'Test 74');
test(minAddToMakeValid("[][[][[][[][]]]]"), 0, 'Test 75');
test(minAddToMakeValid("[]][[[[]]]]"), 1, 'Test 76');
test(minAddToMakeValid("[][]][[][[]]][[]"), 2, 'Test 77');
test(minAddToMakeValid("][[][[][[][[][[]]]]]]"), 1, 'Test 78');
test(minAddToMakeValid("[[[[[[[[[[[]]]]]]]]]]]"), 0, 'Test 79');
test(minAddToMakeValid("[[]]]]]][[[[][][][[][[]]]]]]]"), 5, 'Test 80');
test(minAddToMakeValid("][[][[][[][[]]]]]"), 1, 'Test 81');
test(minAddToMakeValid("[][[][[]]][[][[][[][[]]]]]"), 0, 'Test 82');
test(minAddToMakeValid("[[[[[[[[]]]]]]]]"), 0, 'Test 83');
test(minAddToMakeValid("[]][[]]][[][[][[][]]]][[[][]][]]"), 2, 'Test 84');
test(minAddToMakeValid("[[[[[[[[]]]]]]"), 2, 'Test 85');
test(minAddToMakeValid("[[[[][]][]]]"), 0, 'Test 86');
test(minAddToMakeValid("[[][[][[][[]]]]][]]"), 1, 'Test 87');
test(minAddToMakeValid("[[]]][[]]][[]]]]"), 4, 'Test 88');
test(minAddToMakeValid("[][][][[][][]][][][][]"), 0, 'Test 89');
test(minAddToMakeValid("[[][]][[][]]"), 0, 'Test 90');
test(minAddToMakeValid("[[][[]]][[][[][[][[][[]]]]]]"), 0, 'Test 91');
test(minAddToMakeValid("][][][][][][]"), 1, 'Test 92');
test(minAddToMakeValid("[][[]]][[[]][[[]][]]"), 2, 'Test 93');
test(minAddToMakeValid("[]][[][[]]]"), 1, 'Test 94');
test(minAddToMakeValid("[]][]][]][]][]][]]"), 6, 'Test 95');
test(minAddToMakeValid("[[]]][]][[]"), 3, 'Test 96');
test(minAddToMakeValid("[][][][][][][][]"), 0, 'Test 97');
test(minAddToMakeValid("[[[]][[]]]"), 0, 'Test 98');
test(minAddToMakeValid("[[]]]]]][]"), 4, 'Test 99');
test(minAddToMakeValid("[][[][[[]]]][][][[][[]]]]]"), 2, 'Test 100');
test(minAddToMakeValid("[[][[]]][][[][[]]]"), 0, 'Test 101');
test(minAddToMakeValid("[[]]][[]]]"), 2, 'Test 102');
test(minAddToMakeValid("[[[[]]][[]]]"), 0, 'Test 103');
test(minAddToMakeValid("[][][][][][]"), 0, 'Test 104');
test(minAddToMakeValid("][][[][][[[][]]]]"), 1, 'Test 105');
test(minAddToMakeValid("[[[][][[][][[][[][[][[]]]]]][]][]]"]), Error: Solution.minAddToMakeValid[] missing 1 required positional argument: 's', 'Test 106');
test(minAddToMakeValid("[[]]][[[]][[][[]]]]"), 1, 'Test 107');
test(minAddToMakeValid("[][[][][[][[][]]]]"), 0, 'Test 108');
test(minAddToMakeValid("[]][[[]]"), 2, 'Test 109');
test(minAddToMakeValid("[[[[[[[[]]][]][]][]][[]]]]]]"), 2, 'Test 110');
test(minAddToMakeValid("[[[[[[]]]]]][]"), 0, 'Test 111');
test(minAddToMakeValid("]]]]]]]]]]]]"), 12, 'Test 112');
test(minAddToMakeValid("[][][][[[[]]]]][[[]]][[][[]]][[][]]"), 1, 'Test 113');
test(minAddToMakeValid("[[[]][][[][[]]]"), 1, 'Test 114');
test(minAddToMakeValid("[[][[][[][[][[][[][[][[]]]]]][][[][[]]][]]"]), Error: Solution.minAddToMakeValid[] missing 1 required positional argument: 's', 'Test 115');
test(minAddToMakeValid("[]][[][]"), 2, 'Test 116');
test(minAddToMakeValid("[[][[[[[[[[[[]]]]]]]"), 4, 'Test 117');
test(minAddToMakeValid("[[[[[]]]]]"), 0, 'Test 118');
test(minAddToMakeValid("[[[[[[]]]]]][][[][[]]]"), 0, 'Test 119');
test(minAddToMakeValid("[[][[[[]]]][]]"), 0, 'Test 120');

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
