// Test: 273. Integer To English Words
// 74 test cases from LeetCodeDataset
// Run: node test.js

const { numberToWords } = require("./solution");

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

console.log("\n273. Integer To English Words\n");

test(numberToWords(9), Nine, 'Test 1');
test(numberToWords(10), Ten, 'Test 2');
test(numberToWords(100000000), One Hundred Million, 'Test 3');
test(numberToWords(1234567), One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven, 'Test 4');
test(numberToWords(999), Nine Hundred Ninety Nine, 'Test 5');
test(numberToWords(10000000), Ten Million, 'Test 6');
test(numberToWords(29), Twenty Nine, 'Test 7');
test(numberToWords(31), Thirty One, 'Test 8');
test(numberToWords(30), Thirty, 'Test 9');
test(numberToWords(1000000000), One Billion, 'Test 10');
test(numberToWords(110), One Hundred Ten, 'Test 11');
test(numberToWords(5), Five, 'Test 12');
test(numberToWords(11), Eleven, 'Test 13');
test(numberToWords(1000), One Thousand, 'Test 14');
test(numberToWords(123), One Hundred Twenty Three, 'Test 15');
test(numberToWords(12345), Twelve Thousand Three Hundred Forty Five, 'Test 16');
test(numberToWords(1001), One Thousand One, 'Test 17');
test(numberToWords(21), Twenty One, 'Test 18');
test(numberToWords(0), Zero, 'Test 19');
test(numberToWords(39), Thirty Nine, 'Test 20');
test(numberToWords(100), One Hundred, 'Test 21');
test(numberToWords(111), One Hundred Eleven, 'Test 22');
test(numberToWords(2147483647), Two Billion One Hundred Forty Seven Million Four Hundred Eighty Three Thousand Six Hundred Forty Seven, 'Test 23');
test(numberToWords(100000), One Hundred Thousand, 'Test 24');
test(numberToWords(999999999), Nine Hundred Ninety Nine Million Nine Hundred Ninety Nine Thousand Nine Hundred Ninety Nine, 'Test 25');
test(numberToWords(1000000), One Million, 'Test 26');
test(numberToWords(999999), Nine Hundred Ninety Nine Thousand Nine Hundred Ninety Nine, 'Test 27');
test(numberToWords(19), Nineteen, 'Test 28');
test(numberToWords(10000), Ten Thousand, 'Test 29');
test(numberToWords(101), One Hundred One, 'Test 30');
test(numberToWords(500000050), Five Hundred Million Fifty, 'Test 31');
test(numberToWords(111111111), One Hundred Eleven Million One Hundred Eleven Thousand One Hundred Eleven, 'Test 32');
test(numberToWords(555555555), Five Hundred Fifty Five Million Five Hundred Fifty Five Thousand Five Hundred Fifty Five, 'Test 33');
test(numberToWords(1111111111), One Billion One Hundred Eleven Million One Hundred Eleven Thousand One Hundred Eleven, 'Test 34');
test(numberToWords(10000000000), Ten Billion, 'Test 35');
test(numberToWords(890123456), Eight Hundred Ninety Million One Hundred Twenty Three Thousand Four Hundred Fifty Six, 'Test 36');
test(numberToWords(508), Five Hundred Eight, 'Test 37');
test(numberToWords(999999999999), Nine Hundred Ninety Nine Billion Nine Hundred Ninety Nine Million Nine Hundred Ninety Nine Thousand Nine Hundred Ninety Nine, 'Test 38');
test(numberToWords(1010101010), One Billion Ten Million One Hundred One Thousand Ten, 'Test 39');
test(numberToWords(50000050), Fifty Million Fifty, 'Test 40');
test(numberToWords(99), Ninety Nine, 'Test 41');
test(numberToWords(1000010001), One Billion Ten Thousand One, 'Test 42');
test(numberToWords(807000000), Eight Hundred Seven Million, 'Test 43');
test(numberToWords(900000009), Nine Hundred Million Nine, 'Test 44');
test(numberToWords(123456789), One Hundred Twenty Three Million Four Hundred Fifty Six Thousand Seven Hundred Eighty Nine, 'Test 45');
test(numberToWords(11000011), Eleven Million Eleven, 'Test 46');
test(numberToWords(900000090), Nine Hundred Million Ninety, 'Test 47');
test(numberToWords(1010001000), One Billion Ten Million One Thousand, 'Test 48');
test(numberToWords(1000000001), One Billion One, 'Test 49');
test(numberToWords(1001001001), One Billion One Million One Thousand One, 'Test 50');
test(numberToWords(999000999), Nine Hundred Ninety Nine Million Nine Hundred Ninety Nine, 'Test 51');
test(numberToWords(1234567890), One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety, 'Test 52');
test(numberToWords(2000000000), Two Billion, 'Test 53');
test(numberToWords(9876), Nine Thousand Eight Hundred Seventy Six, 'Test 54');
test(numberToWords(1000010), One Million Ten, 'Test 55');
test(numberToWords(1000000000001), Ten Hundred Billion One, 'Test 56');
test(numberToWords(987654321), Nine Hundred Eighty Seven Million Six Hundred Fifty Four Thousand Three Hundred Twenty One, 'Test 57');
test(numberToWords(990000000), Nine Hundred Ninety Million, 'Test 58');
test(numberToWords(123000456), One Hundred Twenty Three Million Four Hundred Fifty Six, 'Test 59');
test(numberToWords(203040506), Two Hundred Three Million Forty Thousand Five Hundred Six, 'Test 60');
test(numberToWords(101010101), One Hundred One Million Ten Thousand One Hundred One, 'Test 61');
test(numberToWords(500000500), Five Hundred Million Five Hundred, 'Test 62');
test(numberToWords(2100000100), Two Billion One Hundred Million One Hundred, 'Test 63');
test(numberToWords(450000000), Four Hundred Fifty Million, 'Test 64');
test(numberToWords(4321098765), Four Billion Three Hundred Twenty One Million Ninety Eight Thousand Seven Hundred Sixty Five, 'Test 65');
test(numberToWords(123000000), One Hundred Twenty Three Million, 'Test 66');
test(numberToWords(4321), Four Thousand Three Hundred Twenty One, 'Test 67');
test(numberToWords(900009000), Nine Hundred Million Nine Thousand, 'Test 68');
test(numberToWords(1100000000), One Billion One Hundred Million, 'Test 69');
test(numberToWords(123400000), One Hundred Twenty Three Million Four Hundred Thousand, 'Test 70');
test(numberToWords(1000001), One Million One, 'Test 71');
test(numberToWords(9999), Nine Thousand Nine Hundred Ninety Nine, 'Test 72');
test(numberToWords(900900000), Nine Hundred Million Nine Hundred Thousand, 'Test 73');
test(numberToWords(60012003), Sixty Million Twelve Thousand Three, 'Test 74');

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
