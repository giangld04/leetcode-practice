// Test: 902. Numbers At Most N Given Digit Set
// 113 test cases from LeetCodeDataset
// Run: node test.js

const { atMostNGivenDigitSet } = require("./solution");

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

console.log("\n902. Numbers At Most N Given Digit Set\n");

test(atMostNGivenDigitSet(["1","4","9"], 1000000000), 29523, 'Test 1');
test(atMostNGivenDigitSet(["7"], 8), 1, 'Test 2');
test(atMostNGivenDigitSet(["1","2","3"], 123), 18, 'Test 3');
test(atMostNGivenDigitSet(["2","3","5"], 250), 18, 'Test 4');
test(atMostNGivenDigitSet(["1","2","3","4","5","6","7","8","9"], 999), 819, 'Test 5');
test(atMostNGivenDigitSet(["3","4","5"], 1000), 39, 'Test 6');
test(atMostNGivenDigitSet(["1","3","5","7"], 100), 20, 'Test 7');
test(atMostNGivenDigitSet(["1","2","3"], 123456789), 14214, 'Test 8');
test(atMostNGivenDigitSet(["1", "3", "5", "7"], 100000000), 87380, 'Test 9');
test(atMostNGivenDigitSet(["2", "4", "6", "8"], 5000), 212, 'Test 10');
test(atMostNGivenDigitSet(["2", "4"], 100), 6, 'Test 11');
test(atMostNGivenDigitSet(["2", "4", "6", "8"], 468246824), 198406, 'Test 12');
test(atMostNGivenDigitSet(["1", "2", "3", "4", "5", "6", "7", "8", "9"], 1000000000), 435848049, 'Test 13');
test(atMostNGivenDigitSet(["1", "3", "5", "7", "9"], 99999), 3905, 'Test 14');
test(atMostNGivenDigitSet(["1","5","9"], 99999), 363, 'Test 15');
test(atMostNGivenDigitSet(["2","3","6","7","8"], 123456789), 488280, 'Test 16');
test(atMostNGivenDigitSet(["1", "2", "3", "4"], 1000), 84, 'Test 17');
test(atMostNGivenDigitSet(["5", "9"], 555555555), 511, 'Test 18');
test(atMostNGivenDigitSet(["2","5","9"], 10000), 120, 'Test 19');
test(atMostNGivenDigitSet(["2", "4", "8"], 888888888), 29523, 'Test 20');
test(atMostNGivenDigitSet(["1", "2", "3", "4", "5", "6", "7", "8", "9"], 999999999), 435848049, 'Test 21');
test(atMostNGivenDigitSet(["3", "6", "9"], 333699), 381, 'Test 22');
test(atMostNGivenDigitSet(["1", "2", "3"], 10000), 120, 'Test 23');
test(atMostNGivenDigitSet(["1","2","3","4"], 5000), 340, 'Test 24');
test(atMostNGivenDigitSet(["2", "4", "6", "8"], 1000000), 5460, 'Test 25');
test(atMostNGivenDigitSet(["1","3","5","7","9"], 555555555), 1464843, 'Test 26');
test(atMostNGivenDigitSet(["1", "2", "3", "4", "5"], 9999), 780, 'Test 27');
test(atMostNGivenDigitSet(["4","5","6"], 456), 18, 'Test 28');
test(atMostNGivenDigitSet(["1", "3", "5", "7", "9"], 500000000), 1269530, 'Test 29');
test(atMostNGivenDigitSet(["1", "2", "5"], 100000), 363, 'Test 30');
test(atMostNGivenDigitSet(["1", "2"], 212121212), 852, 'Test 31');
test(atMostNGivenDigitSet(["1","2","3"], 111111111), 9841, 'Test 32');
test(atMostNGivenDigitSet(["2", "3", "7", "8"], 5000), 212, 'Test 33');
test(atMostNGivenDigitSet(["2","6","9"], 123456789), 9840, 'Test 34');
test(atMostNGivenDigitSet(["1", "3", "7", "9"], 123456789), 103764, 'Test 35');
test(atMostNGivenDigitSet(["2","6","8"], 100000), 363, 'Test 36');
test(atMostNGivenDigitSet(["2", "5", "8"], 500), 21, 'Test 37');
test(atMostNGivenDigitSet(["1", "2", "3", "4", "5"], 5000), 655, 'Test 38');
test(atMostNGivenDigitSet(["8", "9"], 999999999), 1022, 'Test 39');
test(atMostNGivenDigitSet(["1","2","3","4"], 43210), 1252, 'Test 40');
test(atMostNGivenDigitSet(["1", "9"], 999999999), 1022, 'Test 41');
test(atMostNGivenDigitSet(["2", "6", "8"], 4500), 66, 'Test 42');
test(atMostNGivenDigitSet(["1", "3", "5"], 555555555), 29523, 'Test 43');
test(atMostNGivenDigitSet(["1","4","7","9"], 123456789), 103764, 'Test 44');
test(atMostNGivenDigitSet(["1", "2", "3", "4", "5", "6", "7", "8", "9"], 123456789), 54481005, 'Test 45');
test(atMostNGivenDigitSet(["5"], 1000000000), 9, 'Test 46');
test(atMostNGivenDigitSet(["1", "9"], 1000000000), 1022, 'Test 47');
test(atMostNGivenDigitSet(["1", "6", "8"], 5678), 66, 'Test 48');
test(atMostNGivenDigitSet(["1","2","3","4","5","6","7","8","9"], 123456789), 54481005, 'Test 49');
test(atMostNGivenDigitSet(["1","3","5","7","9"], 99999), 3905, 'Test 50');
test(atMostNGivenDigitSet(["2","4","6","8"], 888888888), 349524, 'Test 51');
test(atMostNGivenDigitSet(["1", "2", "3", "4", "5"], 100000), 3905, 'Test 52');
test(atMostNGivenDigitSet(["1","2","4","8"], 1024), 84, 'Test 53');
test(atMostNGivenDigitSet(["1", "2", "3", "4"], 987654321), 349524, 'Test 54');
test(atMostNGivenDigitSet(["1","5","7","9"], 1579), 112, 'Test 55');
test(atMostNGivenDigitSet(["2","6","8"], 2688), 57, 'Test 56');
test(atMostNGivenDigitSet(["1", "3", "5", "7"], 777777777), 349524, 'Test 57');
test(atMostNGivenDigitSet(["9"], 999999999), 9, 'Test 58');
test(atMostNGivenDigitSet(["1","2","3","4","5","6","7","8","9"], 111111111), 48427561, 'Test 59');
test(atMostNGivenDigitSet(["1"], 1000000000), 9, 'Test 60');
test(atMostNGivenDigitSet(["1","3","5","7","9"], 563827194), 1503905, 'Test 61');
test(atMostNGivenDigitSet(["2", "6", "9"], 1000000), 1092, 'Test 62');
test(atMostNGivenDigitSet(["1","2","3"], 1111), 40, 'Test 63');
test(atMostNGivenDigitSet(["1","6","8"], 1000000000), 29523, 'Test 64');
test(atMostNGivenDigitSet(["5", "7", "9"], 100000), 363, 'Test 65');
test(atMostNGivenDigitSet(["4", "8"], 888), 14, 'Test 66');
test(atMostNGivenDigitSet(["1", "2", "3"], 333), 39, 'Test 67');
test(atMostNGivenDigitSet(["1","2","5"], 1111), 40, 'Test 68');
test(atMostNGivenDigitSet(["1","2"], 1024), 14, 'Test 69');
test(atMostNGivenDigitSet(["5","8"], 5885), 21, 'Test 70');
test(atMostNGivenDigitSet(["6", "7", "8"], 99999), 363, 'Test 71');
test(atMostNGivenDigitSet(["1", "2", "3", "4"], 9999), 340, 'Test 72');
test(atMostNGivenDigitSet(["3", "5", "7", "9"], 1000000), 5460, 'Test 73');
test(atMostNGivenDigitSet(["2","3","5","7"], 777777777), 349524, 'Test 74');
test(atMostNGivenDigitSet(["1", "2", "3", "4", "5"], 12345), 975, 'Test 75');
test(atMostNGivenDigitSet(["1","7","9"], 979797), 1001, 'Test 76');
test(atMostNGivenDigitSet(["1", "2", "3", "4", "5", "6"], 654321), 54121, 'Test 77');
test(atMostNGivenDigitSet(["1", "3", "5", "7", "9"], 987654321), 2363280, 'Test 78');
test(atMostNGivenDigitSet(["1","2","5"], 1000000000), 29523, 'Test 79');
test(atMostNGivenDigitSet(["1", "4", "9"], 100000000), 9840, 'Test 80');
test(atMostNGivenDigitSet(["1","5","9"], 1000000000), 29523, 'Test 81');
test(atMostNGivenDigitSet(["3","9"], 393939), 84, 'Test 82');
test(atMostNGivenDigitSet(["1", "2"], 1024), 14, 'Test 83');
test(atMostNGivenDigitSet(["1","5","9"], 999999999), 29523, 'Test 84');
test(atMostNGivenDigitSet(["1","3","5","7"], 777777777), 349524, 'Test 85');
test(atMostNGivenDigitSet(["1", "3", "5", "7", "9"], 123456789), 566405, 'Test 86');
test(atMostNGivenDigitSet(["1","2","3","4","5"], 50000), 3280, 'Test 87');
test(atMostNGivenDigitSet(["1", "3", "5", "7", "9"], 20000), 1405, 'Test 88');
test(atMostNGivenDigitSet(["1", "3", "7"], 77777777), 9840, 'Test 89');
test(atMostNGivenDigitSet(["5","7","9"], 888888888), 22962, 'Test 90');
test(atMostNGivenDigitSet(["1","2","4","8"], 999999999), 349524, 'Test 91');
test(atMostNGivenDigitSet(["3","7","8"], 378378378), 13626, 'Test 92');
test(atMostNGivenDigitSet(["1","2","3","4","5","6","7","8","9"], 999999999), 435848049, 'Test 93');
test(atMostNGivenDigitSet(["1", "2", "3", "4", "5", "6", "7", "8", "9"], 987654321), 429794605, 'Test 94');
test(atMostNGivenDigitSet(["3", "7", "9"], 999999999), 29523, 'Test 95');
test(atMostNGivenDigitSet(["1", "2", "3"], 321), 34, 'Test 96');
test(atMostNGivenDigitSet(["3","7","8"], 1234), 39, 'Test 97');
test(atMostNGivenDigitSet(["1", "5", "9"], 987654321), 27336, 'Test 98');
test(atMostNGivenDigitSet(["1","3","5","7","9"], 999999999), 2441405, 'Test 99');
test(atMostNGivenDigitSet(["1","2","3","4","5","6","7","8","9"], 987654321), 429794605, 'Test 100');
test(atMostNGivenDigitSet(["2","3","7","8"], 8732), 313, 'Test 101');
test(atMostNGivenDigitSet(["2","4","6","8"], 100000000), 87380, 'Test 102');
test(atMostNGivenDigitSet(["1"], 1000000), 6, 'Test 103');
test(atMostNGivenDigitSet(["3", "5", "7"], 100000000), 9840, 'Test 104');
test(atMostNGivenDigitSet(["2", "6", "7"], 10000), 120, 'Test 105');
test(atMostNGivenDigitSet(["1", "3", "7", "9"], 50000), 852, 'Test 106');
test(atMostNGivenDigitSet(["1","2","3","4","5"], 222222222), 976562, 'Test 107');
test(atMostNGivenDigitSet(["1","9"], 500000000), 766, 'Test 108');
test(atMostNGivenDigitSet(["1","3","5"], 999999999), 29523, 'Test 109');
test(atMostNGivenDigitSet(["1", "5", "7", "8"], 100000), 1364, 'Test 110');
test(atMostNGivenDigitSet(["1","9"], 1000000000), 1022, 'Test 111');
test(atMostNGivenDigitSet(["5","6","7"], 777777777), 29523, 'Test 112');
test(atMostNGivenDigitSet(["3", "5", "7"], 357357), 504, 'Test 113');

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
