// Test: 434. Number Of Segments In A String
// 38 test cases from LeetCodeDataset
// Run: node test.js

const { countSegments } = require("./solution");

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

console.log("\n434. Number Of Segments In A String\n");

test(countSegments("Hello, my name is John"), 5, 'Test 1');
test(countSegments("Hello"), 1, 'Test 2');
test(countSegments("Punctuation,should,not:be;problematic"), 1, 'Test 3');
test(countSegments("New\nlines\nare\nalso\nsegments"), 5, 'Test 4');
test(countSegments("Mixed    \t  \n  delimiters    should    work"), 4, 'Test 5');
test(countSegments("NoSpaces"), 1, 'Test 6');
test(countSegments("OneTwoThreeFour"), 1, 'Test 7');
test(countSegments("\t   \t   Hello   \t   my   \t   name   \t   is   \t   John   \t"), 5, 'Test 8');
test(countSegments(""), 0, 'Test 9');
test(countSegments("Multiple    spaces between words"), 4, 'Test 10');
test(countSegments("   Hello,   my name is John   "), 5, 'Test 11');
test(countSegments("Leading and trailing spaces should be ignored   "), 7, 'Test 12');
test(countSegments("Punctuation, should! not? matter: here."), 5, 'Test 13');
test(countSegments("123 456 789 0"), 4, 'Test 14');
test(countSegments("Mixing\t\nand\tspecial\t\ncharacters"), 4, 'Test 15');
test(countSegments("Multiple   spaces   between words"), 4, 'Test 16');
test(countSegments(" Leading and trailing spaces "), 4, 'Test 17');
test(countSegments("\tTabs\tare\tconsidered\tspaces"), 4, 'Test 18');
test(countSegments("\t\t\tTabbed\t\t\tSegments\t\t\t"), 2, 'Test 19');
test(countSegments("  a  b  c  d  e  "), 5, 'Test 20');
test(countSegments("\u0020\u0020\u0020Unicode\u0020spaces\u0020\u0020\u0020"), 2, 'Test 21');
test(countSegments("    a   b   c   "), 3, 'Test 22');
test(countSegments("   "), 0, 'Test 23');
test(countSegments("Hello\tmy\tname\tis\tJohn"), 5, 'Test 24');
test(countSegments("    "), 0, 'Test 25');
test(countSegments("\nNew\nlines\nare\nspaces\ntoo"), 5, 'Test 26');
test(countSegments("Punctuation, should! not? affect: the; count"), 6, 'Test 27');
test(countSegments("Multiple     spaces   between   words"), 4, 'Test 28');
test(countSegments("   Hello, my name is John   "), 5, 'Test 29');
test(countSegments("a b c d e f g"), 7, 'Test 30');
test(countSegments("Hello    my     name    is    John"), 5, 'Test 31');
test(countSegments("\tTabs\tare\tcounted\tas\tspaces"), 5, 'Test 32');
test(countSegments("Mixed\tTabs\t\tand\t\t\tSpaces"), 4, 'Test 33');
test(countSegments("   Leading and trailing spaces   "), 4, 'Test 34');
test(countSegments("Multiple    spaces    between   words"), 4, 'Test 35');
test(countSegments("SingleWord"), 1, 'Test 36');
test(countSegments("Tab	Separated"), 2, 'Test 37');
test(countSegments("\nHello\nmy\nname\nis\nJohn\n"), 5, 'Test 38');

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
