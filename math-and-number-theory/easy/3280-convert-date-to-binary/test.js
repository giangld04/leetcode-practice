// Test: 3280. Convert Date To Binary
// 87 test cases from LeetCodeDataset
// Run: node test.js

const { convertDateToBinary } = require("./solution");

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

console.log("\n3280. Convert Date To Binary\n");

test(convertDateToBinary("1950-06-30"), 11110011110-110-11110, 'Test 1');
test(convertDateToBinary("1912-04-20"), 11101111000-100-10100, 'Test 2');
test(convertDateToBinary("2080-02-29"), 100000100000-10-11101, 'Test 3');
test(convertDateToBinary("2023-10-05"), 11111100111-1010-101, 'Test 4');
test(convertDateToBinary("2100-12-31"), 100000110100-1100-11111, 'Test 5');
test(convertDateToBinary("2050-07-17"), 100000000010-111-10001, 'Test 6');
test(convertDateToBinary("1984-11-09"), 11111000000-1011-1001, 'Test 7');
test(convertDateToBinary("1900-01-01"), 11101101100-1-1, 'Test 8');
test(convertDateToBinary("1950-06-15"), 11110011110-110-1111, 'Test 9');
test(convertDateToBinary("1999-12-31"), 11111001111-1100-11111, 'Test 10');
test(convertDateToBinary("2000-03-15"), 11111010000-11-1111, 'Test 11');
test(convertDateToBinary("2023-10-15"), 11111100111-1010-1111, 'Test 12');
test(convertDateToBinary("1950-06-23"), 11110011110-110-10111, 'Test 13');
test(convertDateToBinary("2095-09-20"), 100000101111-1001-10100, 'Test 14');
test(convertDateToBinary("2015-11-11"), 11111011111-1011-1011, 'Test 15');
test(convertDateToBinary("2099-11-11"), 100000110011-1011-1011, 'Test 16');
test(convertDateToBinary("2048-08-16"), 100000000000-1000-10000, 'Test 17');
test(convertDateToBinary("1999-04-30"), 11111001111-100-11110, 'Test 18');
test(convertDateToBinary("2033-03-15"), 11111110001-11-1111, 'Test 19');
test(convertDateToBinary("1987-05-31"), 11111000011-101-11111, 'Test 20');
test(convertDateToBinary("1965-08-17"), 11110101101-1000-10001, 'Test 21');
test(convertDateToBinary("1970-01-01"), 11110110010-1-1, 'Test 22');
test(convertDateToBinary("2088-02-29"), 100000101000-10-11101, 'Test 23');
test(convertDateToBinary("1984-01-01"), 11111000000-1-1, 'Test 24');
test(convertDateToBinary("2020-05-22"), 11111100100-101-10110, 'Test 25');
test(convertDateToBinary("1969-12-31"), 11110110001-1100-11111, 'Test 26');
test(convertDateToBinary("2099-07-31"), 100000110011-111-11111, 'Test 27');
test(convertDateToBinary("1987-10-15"), 11111000011-1010-1111, 'Test 28');
test(convertDateToBinary("2033-03-10"), 11111110001-11-1010, 'Test 29');
test(convertDateToBinary("1960-09-16"), 11110101000-1001-10000, 'Test 30');
test(convertDateToBinary("2099-12-15"), 100000110011-1100-1111, 'Test 31');
test(convertDateToBinary("2005-03-10"), 11111010101-11-1010, 'Test 32');
test(convertDateToBinary("1975-10-25"), 11110110111-1010-11001, 'Test 33');
test(convertDateToBinary("2024-02-29"), 11111101000-10-11101, 'Test 34');
test(convertDateToBinary("2099-09-09"), 100000110011-1001-1001, 'Test 35');
test(convertDateToBinary("2090-11-30"), 100000101010-1011-11110, 'Test 36');
test(convertDateToBinary("2015-09-01"), 11111011111-1001-1, 'Test 37');
test(convertDateToBinary("1910-02-28"), 11101110110-10-11100, 'Test 38');
test(convertDateToBinary("2050-03-17"), 100000000010-11-10001, 'Test 39');
test(convertDateToBinary("1953-04-22"), 11110100001-100-10110, 'Test 40');
test(convertDateToBinary("2084-04-04"), 100000100100-100-100, 'Test 41');
test(convertDateToBinary("2050-10-25"), 100000000010-1010-11001, 'Test 42');
test(convertDateToBinary("1901-03-01"), 11101101101-11-1, 'Test 43');
test(convertDateToBinary("2023-11-25"), 11111100111-1011-11001, 'Test 44');
test(convertDateToBinary("2048-04-10"), 100000000000-100-1010, 'Test 45');
test(convertDateToBinary("2023-03-15"), 11111100111-11-1111, 'Test 46');
test(convertDateToBinary("1919-08-08"), 11101111111-1000-1000, 'Test 47');
test(convertDateToBinary("2038-01-19"), 11111110110-1-10011, 'Test 48');
test(convertDateToBinary("1989-04-30"), 11111000101-100-11110, 'Test 49');
test(convertDateToBinary("2100-06-15"), 100000110100-110-1111, 'Test 50');
test(convertDateToBinary("2034-05-09"), 11111110010-101-1001, 'Test 51');
test(convertDateToBinary("1900-02-28"), 11101101100-10-11100, 'Test 52');
test(convertDateToBinary("1992-09-15"), 11111001000-1001-1111, 'Test 53');
test(convertDateToBinary("1924-02-29"), 11110000100-10-11101, 'Test 54');
test(convertDateToBinary("1992-07-19"), 11111001000-111-10011, 'Test 55');
test(convertDateToBinary("1956-07-21"), 11110100100-111-10101, 'Test 56');
test(convertDateToBinary("2072-11-01"), 100000011000-1011-1, 'Test 57');
test(convertDateToBinary("2075-12-04"), 100000011011-1100-100, 'Test 58');
test(convertDateToBinary("2000-02-29"), 11111010000-10-11101, 'Test 59');
test(convertDateToBinary("2000-01-01"), 11111010000-1-1, 'Test 60');
test(convertDateToBinary("2100-02-28"), 100000110100-10-11100, 'Test 61');
test(convertDateToBinary("2048-08-09"), 100000000000-1000-1001, 'Test 62');
test(convertDateToBinary("1955-10-21"), 11110100011-1010-10101, 'Test 63');
test(convertDateToBinary("2019-12-31"), 11111100011-1100-11111, 'Test 64');
test(convertDateToBinary("2099-12-31"), 100000110011-1100-11111, 'Test 65');
test(convertDateToBinary("2001-01-01"), 11111010001-1-1, 'Test 66');
test(convertDateToBinary("2020-02-29"), 11111100100-10-11101, 'Test 67');
test(convertDateToBinary("2050-06-25"), 100000000010-110-11001, 'Test 68');
test(convertDateToBinary("1980-04-15"), 11110111100-100-1111, 'Test 69');
test(convertDateToBinary("1995-11-05"), 11111001011-1011-101, 'Test 70');
test(convertDateToBinary("2010-11-07"), 11111011010-1011-111, 'Test 71');
test(convertDateToBinary("2050-07-31"), 100000000010-111-11111, 'Test 72');
test(convertDateToBinary("1919-11-11"), 11101111111-1011-1011, 'Test 73');
test(convertDateToBinary("2070-08-15"), 100000010110-1000-1111, 'Test 74');
test(convertDateToBinary("1971-07-20"), 11110110011-111-10100, 'Test 75');
test(convertDateToBinary("2050-07-15"), 100000000010-111-1111, 'Test 76');
test(convertDateToBinary("1967-04-19"), 11110101111-100-10011, 'Test 77');
test(convertDateToBinary("2099-06-14"), 100000110011-110-1110, 'Test 78');
test(convertDateToBinary("1970-07-20"), 11110110010-111-10100, 'Test 79');
test(convertDateToBinary("2099-10-10"), 100000110011-1010-1010, 'Test 80');
test(convertDateToBinary("1904-02-29"), 11101110000-10-11101, 'Test 81');
test(convertDateToBinary("1944-02-29"), 11110011000-10-11101, 'Test 82');
test(convertDateToBinary("1988-09-15"), 11111000100-1001-1111, 'Test 83');
test(convertDateToBinary("1981-08-08"), 11110111101-1000-1000, 'Test 84');
test(convertDateToBinary("2048-08-15"), 100000000000-1000-1111, 'Test 85');
test(convertDateToBinary("2045-11-12"), 11111111101-1011-1100, 'Test 86');
test(convertDateToBinary("2060-12-08"), 100000001100-1100-1000, 'Test 87');

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
