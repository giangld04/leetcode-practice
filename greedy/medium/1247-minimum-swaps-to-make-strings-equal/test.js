// Test: 1247. Minimum Swaps To Make Strings Equal
// 103 test cases from LeetCodeDataset
// Run: node test.js

const { minimumSwap } = require("./solution");

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

console.log("\n1247. Minimum Swaps To Make Strings Equal\n");

test(minimumSwap("xyyy", "yxxx"), 3, 'Test 1');
test(minimumSwap("xx", "yy"), 1, 'Test 2');
test(minimumSwap("xxyy", "xyxy"), 2, 'Test 3');
test(minimumSwap("xxyyxyxyxx", "xyyxyxxxyx"), 4, 'Test 4');
test(minimumSwap("xxxyyy", "yyyxxx"), 4, 'Test 5');
test(minimumSwap("xyyx", "xxyy"), 2, 'Test 6');
test(minimumSwap("yx", "xy"), 2, 'Test 7');
test(minimumSwap("xxxx", "yyyy"), 2, 'Test 8');
test(minimumSwap("yxyy", "xyyx"), -1, 'Test 9');
test(minimumSwap("xx", "xy"), -1, 'Test 10');
test(minimumSwap("yy", "xx"), 1, 'Test 11');
test(minimumSwap("xyyx", "xyyx"), 0, 'Test 12');
test(minimumSwap("yyyy", "xxxx"), 2, 'Test 13');
test(minimumSwap("xyxy", "yxyx"), 2, 'Test 14');
test(minimumSwap("xyxx", "xyyx"), -1, 'Test 15');
test(minimumSwap("xxyx", "xyxy"), -1, 'Test 16');
test(minimumSwap("xy", "yx"), 2, 'Test 17');
test(minimumSwap("xyxyxy", "yxyxyx"), 4, 'Test 18');
test(minimumSwap("xyxyxyxyxyxyxyxyxyxyxyxyxy", "yxyxyxyxyxyxyxyxyxyxyxyxyx"), 14, 'Test 19');
test(minimumSwap("xyxxxyxxyy", "yxyyxyyxxy"), 3, 'Test 20');
test(minimumSwap("xyyyxy", "yxyxyx"), -1, 'Test 21');
test(minimumSwap("xxyyxx", "yyxxxy"), -1, 'Test 22');
test(minimumSwap("xyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxy", "yxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyx"), 16, 'Test 23');
test(minimumSwap("xyxyyx", "yxyxyx"), 2, 'Test 24');
test(minimumSwap("xyxyxyxyxyxyxyxyxyxyxyxyxyxy", "yxyxyxyxyxyxyxyxyxyxyxyxyxyx"), 14, 'Test 25');
test(minimumSwap("xyxyxyxyxyxy", "yxyxyxyxyxyx"), 6, 'Test 26');
test(minimumSwap("xxxyyyxx", "yyxxxyyy"), 3, 'Test 27');
test(minimumSwap("xyyxxyyyxy", "yxyyxxyxyx"), -1, 'Test 28');
test(minimumSwap("xyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxy", "yxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyx"), 20, 'Test 29');
test(minimumSwap("yxyxyxyxyx", "xyxyxyxyxy"), 6, 'Test 30');
test(minimumSwap("xyyxxyyxxy", "yxyxyxyxyx"), 4, 'Test 31');
test(minimumSwap("xxxyyyy", "yyyxxxx"), -1, 'Test 32');
test(minimumSwap("xyyxxyyx", "yxyxyxyx"), 2, 'Test 33');
test(minimumSwap("xxyyyy", "yyxxyx"), -1, 'Test 34');
test(minimumSwap("xxxxxyyyyy", "yyyyyyxxxx"), -1, 'Test 35');
test(minimumSwap("xxyxyxyy", "yyxyxyyx"), -1, 'Test 36');
test(minimumSwap("xyxyxxxy", "yyxxyxyx"), -1, 'Test 37');
test(minimumSwap("xxyxxyxyxy", "yxyxyxyxyy"), 3, 'Test 38');
test(minimumSwap("xxxyyyxy", "yyxxyxxy"), 2, 'Test 39');
test(minimumSwap("xyyx", "yxyx"), 2, 'Test 40');
test(minimumSwap("xxyyxyyx", "yyxyxxxy"), 4, 'Test 41');
test(minimumSwap("xxyxxy", "yyxyyx"), 3, 'Test 42');
test(minimumSwap("xyyxxyxyxy", "yxyxyxyxyy"), -1, 'Test 43');
test(minimumSwap("xyxyxyxyxyxyxy", "yxyxyxyxyxyxyx"), 8, 'Test 44');
test(minimumSwap("xxyyxy", "yyxyxx"), 2, 'Test 45');
test(minimumSwap("xyxyxy", "yxyxyy"), -1, 'Test 46');
test(minimumSwap("xyxxyyxy", "yxyyyxyx"), -1, 'Test 47');
test(minimumSwap("xxyxyxyxyx", "yxyxyxyxyx"), -1, 'Test 48');
test(minimumSwap("xxyyxyxyx", "yyxyxyxyx"), -1, 'Test 49');
test(minimumSwap("yxyxyxyxyx", "xyxyxyxyyx"), 4, 'Test 50');
test(minimumSwap("xyxxyxxyxy", "yxyxyxyxyx"), -1, 'Test 51');
test(minimumSwap("xyxyxyyxyx", "xyxyxyxyxy"), 2, 'Test 52');
test(minimumSwap("xxxxxy", "yyyxxx"), 3, 'Test 53');
test(minimumSwap("xxyyxxxyyy", "yyxxyyxyxx"), 4, 'Test 54');
test(minimumSwap("xxxxxx", "yyyyyy"), 3, 'Test 55');
test(minimumSwap("xyxyxyxyxy", "yxyxyxyxyx"), 6, 'Test 56');
test(minimumSwap("xxxxxyyyy", "yyyyxxxyx"), -1, 'Test 57');
test(minimumSwap("xxyx", "xyyx"), -1, 'Test 58');
test(minimumSwap("xxxxxxxx", "yyyyyyyy"), 4, 'Test 59');
test(minimumSwap("xxxxxxxxxx", "yyyyyyyyyy"), 5, 'Test 60');
test(minimumSwap("xyxxyxxyx", "yxyxyxyyx"), 3, 'Test 61');
test(minimumSwap("xyxxyy", "yxyxyx"), 2, 'Test 62');
test(minimumSwap("xxyxyxyx", "yxyxyxyy"), 1, 'Test 63');
test(minimumSwap("xyxyxxxyyx", "yxyxyxxyxy"), -1, 'Test 64');
test(minimumSwap("xxyyxxyyxx", "yyxyxxyyxy"), 3, 'Test 65');
test(minimumSwap("xyxyxyxyxyxyxyxyxyxy", "yxyxyxyxyxyxyxyxyxyx"), 10, 'Test 66');
test(minimumSwap("xyxyxyxy", "yxyxyxyx"), 4, 'Test 67');
test(minimumSwap("xxyy", "yyxx"), 2, 'Test 68');
test(minimumSwap("xxyxyxyxyxyxyxyxyx", "xyxyxyxyxyxyxyxyyx"), -1, 'Test 69');
test(minimumSwap("xxyyxyxyxyxyxy", "yyxyxyxyxyxyyx"), -1, 'Test 70');
test(minimumSwap("xyxyy", "yxyyx"), 2, 'Test 71');
test(minimumSwap("xyyxxyyxxyyx", "yxyxyxyxyxyy"), -1, 'Test 72');
test(minimumSwap("xxyxyxyx", "xyxyxyyx"), -1, 'Test 73');
test(minimumSwap("xxxxxyyy", "yyyyxxxx"), -1, 'Test 74');
test(minimumSwap("xyxyxyxyyy", "yxyxyxyxxx"), 5, 'Test 75');
test(minimumSwap("yyxyyyxxxyyy", "xyxxyyxyxxyx"), -1, 'Test 76');
test(minimumSwap("yxyxyxyx", "xyxyxyxy"), 4, 'Test 77');
test(minimumSwap("xyxxyxyxyx", "xyxyxyxyyx"), -1, 'Test 78');
test(minimumSwap("xyxxyxyx", "yxxyxyyx"), -1, 'Test 79');
test(minimumSwap("xxxxxxyy", "yyxxxxyx"), -1, 'Test 80');
test(minimumSwap("xyxyxyxyxyxyxyxyxyxyxy", "yxyxyxyxyxyxyxyxyxyxyx"), 12, 'Test 81');
test(minimumSwap("xxyyxyyx", "yyxyxyyx"), -1, 'Test 82');
test(minimumSwap("xxxyyyxyyx", "yyxyyxyxxy"), -1, 'Test 83');
test(minimumSwap("xxyxxyxyxy", "yxyxyxyxyx"), -1, 'Test 84');
test(minimumSwap("xyxxyxxyxxyxyy", "yxyxyxyxyxyyxy"), 5, 'Test 85');
test(minimumSwap("xxyxyxx", "yyxyxyy"), -1, 'Test 86');
test(minimumSwap("xxyxyxyxyx", "xyxyxyxyyx"), -1, 'Test 87');
test(minimumSwap("xyxyxyyy", "yxyxyxxx"), 5, 'Test 88');
test(minimumSwap("xyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxy", "yxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyx"), 18, 'Test 89');
test(minimumSwap("xxyxyxyxyx", "xyxxyxyxyx"), 2, 'Test 90');
test(minimumSwap("xyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxy", "yxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyx"), 18, 'Test 91');
test(minimumSwap("xyyxxyxyxy", "yxyxyxyxyx"), 4, 'Test 92');
test(minimumSwap("xxyxyx", "yyxyxy"), 3, 'Test 93');
test(minimumSwap("xxyyyy", "yyyxxx"), -1, 'Test 94');
test(minimumSwap("xyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxy", "yxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyxyx"), 20, 'Test 95');
test(minimumSwap("xyxxyxyx", "xyxyxyyx"), -1, 'Test 96');
test(minimumSwap("xyxyxyxyxy", "yxyxyxyxyy"), -1, 'Test 97');
test(minimumSwap("xyxxyxxyx", "yxyxyxyxy"), 3, 'Test 98');
test(minimumSwap("xyxxyxyxyxyxyxyxyxyxyxyxyxyx", "xyxyxyxyxyxyxyxyxyxyxyxyxyxy"), -1, 'Test 99');
test(minimumSwap("xxyxyxyxyy", "yyxyxyxyyx"), -1, 'Test 100');
test(minimumSwap("xyxyxyxyxyxyxyxy", "yxyxyxyxyxyxyxyx"), 8, 'Test 101');
test(minimumSwap("xyxxxy", "yxyyxy"), 3, 'Test 102');
test(minimumSwap("xxyxyyxy", "yyxyxyyx"), -1, 'Test 103');

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
