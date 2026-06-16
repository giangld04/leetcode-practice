// Test: 709. To Lower Case
// 41 test cases from LeetCodeDataset
// Run: node test.js

const { toLowerCase } = require("./solution");

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

console.log("\n709. To Lower Case\n");

test(toLowerCase("Hello"), "hello", 'Test 1');
test(toLowerCase("here"), "here", 'Test 2');
test(toLowerCase("LOVELY"), "lovely", 'Test 3');
test(toLowerCase("\nNew\nLine\n"), new
line, 'Test 4');
test(toLowerCase("Alreadylowercase"), alreadylowercase, 'Test 5');
test(toLowerCase("Python3.8"), python3.8, 'Test 6');
test(toLowerCase("\u0041\u0042\u0043abc"), abcabc, 'Test 7');
test(toLowerCase("123456"), 123456, 'Test 8');
test(toLowerCase("Spaces in between"), spaces in between, 'Test 9');
test(toLowerCase("MIXEDCase"), mixedcase, 'Test 10');
test(toLowerCase("Multiple    Spaces"), multiple    spaces, 'Test 11');
test(toLowerCase("\tTabbed\tText\t"), tabbed	text, 'Test 12');
test(toLowerCase("MIXEDCase123"), mixedcase123, 'Test 13');
test(toLowerCase("MiXeD CaSe"), mixed case, 'Test 14');
test(toLowerCase("tHiS iS a tEsT"), this is a test, 'Test 15');
test(toLowerCase(""), , 'Test 16');
test(toLowerCase("\tTabCharacters\n"), tabcharacters, 'Test 17');
test(toLowerCase("Special!@#CHARS"), special!@#chars, 'Test 18');
test(toLowerCase("HELLO world!"), hello world!, 'Test 19');
test(toLowerCase("Th1s!s@T35t$"), th1s!s@t35t$, 'Test 20');
test(toLowerCase("1234567890"), 1234567890, 'Test 21');
test(toLowerCase("MIXEDcaseSTRING123"), mixedcasestring123, 'Test 22');
test(toLowerCase("UPPERlower123"), upperlower123, 'Test 23');
test(toLowerCase("123abcXYZ"), 123abcxyz, 'Test 24');
test(toLowerCase("Spaces    Here"), spaces    here, 'Test 25');
test(toLowerCase("!@#$%^&*[]"), !@#$%^&*[], 'Test 26');
test(toLowerCase("Special_Characters_!@#"), special_characters_!@#, 'Test 27');
test(toLowerCase("123ABCdef"), 123abcdef, 'Test 28');
test(toLowerCase("Spaces Are Fun"), spaces are fun, 'Test 29');
test(toLowerCase("SPACED OUT STRING WITH MULTIPLE SPACES"), spaced out string with multiple spaces, 'Test 30');
test(toLowerCase("Multiple LINES\nWITH NEWLINES"), multiple lines
with newlines, 'Test 31');
test(toLowerCase("UPPERlower"), upperlower, 'Test 32');
test(toLowerCase("Special_Characters_&*[]"), special_characters_&*[], 'Test 33');
test(toLowerCase("SpecialChars\x5c\\x22\x27\x3b"), specialchars\\x22';, 'Test 34');
test(toLowerCase("LeadingAndTrailing   "), leadingandtrailing, 'Test 35');
test(toLowerCase("123 ABC xyz"), 123 abc xyz, 'Test 36');
test(toLowerCase("PYTHON programming"), python programming, 'Test 37');
test(toLowerCase("a1B2c3D4"), a1b2c3d4, 'Test 38');
test(toLowerCase("MIXED_with_numbers_123"), mixed_with_numbers_123, 'Test 39');
test(toLowerCase("UPPERCASElowercase"), uppercaselowercase, 'Test 40');
test(toLowerCase("SPECIAL$%^&*[]"), special$%^&*[], 'Test 41');

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
