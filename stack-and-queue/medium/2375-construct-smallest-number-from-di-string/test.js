// Test: 2375. Construct Smallest Number From Di String
// 116 test cases from LeetCodeDataset
// Run: node test.js

const { smallestNumber } = require("./solution");

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

console.log("\n2375. Construct Smallest Number From Di String\n");

test(smallestNumber("DDD"), 4321, 'Test 1');
test(smallestNumber("IIIDIDDD"), 123549876, 'Test 2');
test(smallestNumber("ID"), 132, 'Test 3');
test(smallestNumber("IIDDD"), 126543, 'Test 4');
test(smallestNumber("DDIII"), 321456, 'Test 5');
test(smallestNumber("IDID"), 13254, 'Test 6');
test(smallestNumber("IIII"), 12345, 'Test 7');
test(smallestNumber("DI"), 213, 'Test 8');
test(smallestNumber("IID"), 1243, 'Test 9');
test(smallestNumber("DDIDDIID"), 321654798, 'Test 10');
test(smallestNumber("IDIDIDID"), 132547698, 'Test 11');
test(smallestNumber("I"), 12, 'Test 12');
test(smallestNumber("DID"), 2143, 'Test 13');
test(smallestNumber("IIIII"), 123456, 'Test 14');
test(smallestNumber("DDDDD"), 654321, 'Test 15');
test(smallestNumber("D"), 21, 'Test 16');
test(smallestNumber("DDDD"), 54321, 'Test 17');
test(smallestNumber("DDIIDDIID"), null, 'Test 18');
test(smallestNumber("IDIDIDIDID"), null, 'Test 19');
test(smallestNumber("DDDIDIII"), 432165789, 'Test 20');
test(smallestNumber("DDDDDDIIIIIIII"), null, 'Test 21');
test(smallestNumber("DDDIIIII"), 432156789, 'Test 22');
test(smallestNumber("IIIIIIIII"), null, 'Test 23');
test(smallestNumber("IDDDDDID"), 176543298, 'Test 24');
test(smallestNumber("IDDDDDIDI"), null, 'Test 25');
test(smallestNumber("DDIDIDIDIDIDID"), null, 'Test 26');
test(smallestNumber("IIDID"), 124365, 'Test 27');
test(smallestNumber("DIIIDDDI"), 213487659, 'Test 28');
test(smallestNumber("DDDDDDDDDD"), null, 'Test 29');
test(smallestNumber("IIIIIIIIII"), null, 'Test 30');
test(smallestNumber("IIDDDDDDII"), null, 'Test 31');
test(smallestNumber("DDIIDIDID"), null, 'Test 32');
test(smallestNumber("IIIIIIDDD"), null, 'Test 33');
test(smallestNumber("DDDDDDD"), 87654321, 'Test 34');
test(smallestNumber("DIDIDIDI"), 214365879, 'Test 35');
test(smallestNumber("IIDDDDDDD"), null, 'Test 36');
test(smallestNumber("DDDDDDDD"), 987654321, 'Test 37');
test(smallestNumber("IIDDIIDDI"), null, 'Test 38');
test(smallestNumber("IIDDDIIID"), null, 'Test 39');
test(smallestNumber("DDDDIIII"), 543216789, 'Test 40');
test(smallestNumber("DDIIDDDDD"), null, 'Test 41');
test(smallestNumber("IIDIDIDDD"), null, 'Test 42');
test(smallestNumber("IIIIIDDDDDD"), null, 'Test 43');
test(smallestNumber("IDIDIDDDDD"), null, 'Test 44');
test(smallestNumber("IIIDIDID"), 123547698, 'Test 45');
test(smallestNumber("IDDDIIDI"), 154326879, 'Test 46');
test(smallestNumber("IIDIDDDI"), 124387659, 'Test 47');
test(smallestNumber("IIDDIDDIID"), null, 'Test 48');
test(smallestNumber("DDDDDDDDDDDD"), null, 'Test 49');
test(smallestNumber("DIDIDID"), 21436587, 'Test 50');
test(smallestNumber("IIIDDDIID"), null, 'Test 51');
test(smallestNumber("DDIIIDDDIDI"), null, 'Test 52');
test(smallestNumber("IIDDIIIIID"), null, 'Test 53');
test(smallestNumber("DDDDIII"), 54321678, 'Test 54');
test(smallestNumber("IDIDID"), 1325476, 'Test 55');
test(smallestNumber("IIDIDIDI"), 124365879, 'Test 56');
test(smallestNumber("DDDDDDDDD"), null, 'Test 57');
test(smallestNumber("DDDDDDI"), 76543218, 'Test 58');
test(smallestNumber("DDIDDDID"), 321765498, 'Test 59');
test(smallestNumber("DDIIIIIII"), null, 'Test 60');
test(smallestNumber("DIIIIIII"), 213456789, 'Test 61');
test(smallestNumber("IIIDDDDDDID"), null, 'Test 62');
test(smallestNumber("IDDDIDII"), 154327689, 'Test 63');
test(smallestNumber("DDIIDIDDDI"), null, 'Test 64');
test(smallestNumber("DDDDIIIID"), null, 'Test 65');
test(smallestNumber("DDIDIDID"), 321547698, 'Test 66');
test(smallestNumber("IIIDDDDD"), 123987654, 'Test 67');
test(smallestNumber("DDDDDIIIIII"), null, 'Test 68');
test(smallestNumber("IIIDDDDIII"), null, 'Test 69');
test(smallestNumber("IIIIIIIDDDDDD"), null, 'Test 70');
test(smallestNumber("IIIIIID"), 12345687, 'Test 71');
test(smallestNumber("IIIIIIIIIII"), null, 'Test 72');
test(smallestNumber("IDIDDDID"), 132765498, 'Test 73');
test(smallestNumber("IDIDIDIDIDIDID"), null, 'Test 74');
test(smallestNumber("IDIDIIDID"), null, 'Test 75');
test(smallestNumber("IIIIIII"), 12345678, 'Test 76');
test(smallestNumber("DDIIDDDD"), 321498765, 'Test 77');
test(smallestNumber("IIIIIIID"), 123456798, 'Test 78');
test(smallestNumber("IDIDIDIDIDID"), null, 'Test 79');
test(smallestNumber("DIIDIDID"), 213547698, 'Test 80');
test(smallestNumber("DDIIDIDI"), 321465879, 'Test 81');
test(smallestNumber("DDDIIIDID"), null, 'Test 82');
test(smallestNumber("IIDDDIIII"), null, 'Test 83');
test(smallestNumber("IIDDDIID"), 126543798, 'Test 84');
test(smallestNumber("IIDDDIII"), 126543789, 'Test 85');
test(smallestNumber("IDIDIDIDIDIDIDID"), null, 'Test 86');
test(smallestNumber("DIDID"), 214365, 'Test 87');
test(smallestNumber("DDDDDIII"), 654321789, 'Test 88');
test(smallestNumber("DDII"), 32145, 'Test 89');
test(smallestNumber("DDDIDDDD"), 432198765, 'Test 90');
test(smallestNumber("IIIDDDIDDD"), null, 'Test 91');
test(smallestNumber("DDIDDDDDDID"), null, 'Test 92');
test(smallestNumber("IDDDDDD"), 18765432, 'Test 93');
test(smallestNumber("IDII"), 13245, 'Test 94');
test(smallestNumber("DDDDDDII"), 765432189, 'Test 95');
test(smallestNumber("IIIDDDDI"), 123876549, 'Test 96');
test(smallestNumber("IDDDIDID"), 154327698, 'Test 97');
test(smallestNumber("IIIIIDDI"), 123458769, 'Test 98');
test(smallestNumber("DDDDDD"), 7654321, 'Test 99');
test(smallestNumber("IIDDDIDDDDD"), null, 'Test 100');
test(smallestNumber("IIIIIDDD"), 123459876, 'Test 101');
test(smallestNumber("IDIDDDIDID"), null, 'Test 102');
test(smallestNumber("IIIIIIIID"), null, 'Test 103');
test(smallestNumber("DDDDDDDDDDDID"), null, 'Test 104');
test(smallestNumber("IIIIIDDDD"), null, 'Test 105');
test(smallestNumber("DDDDIID"), 54321687, 'Test 106');
test(smallestNumber("IDDDIIDDD"), null, 'Test 107');
test(smallestNumber("IIIDDDDDDDDDD"), null, 'Test 108');
test(smallestNumber("DDIIDDID"), 321476598, 'Test 109');
test(smallestNumber("IIDDDDDD"), 129876543, 'Test 110');
test(smallestNumber("IIDDDII"), 12654378, 'Test 111');
test(smallestNumber("DDIIDIDD"), 321465987, 'Test 112');
test(smallestNumber("IIDDIIDD"), 125436987, 'Test 113');
test(smallestNumber("IIIIIIII"), 123456789, 'Test 114');
test(smallestNumber("IIIDDDD"), 12387654, 'Test 115');
test(smallestNumber("DDIID"), 321465, 'Test 116');

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
