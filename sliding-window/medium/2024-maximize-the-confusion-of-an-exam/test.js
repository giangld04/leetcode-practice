// Test: 2024. Maximize The Confusion Of An Exam
// 141 test cases from LeetCodeDataset
// Run: node test.js

const { maxConsecutiveAnswers } = require("./solution");

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

console.log("\n2024. Maximize The Confusion Of An Exam\n");

test(maxConsecutiveAnswers("TTTTFFFF", 2), 6, 'Test 1');
test(maxConsecutiveAnswers("FFFFFF", 3), 6, 'Test 2');
test(maxConsecutiveAnswers("TFFTFFTFFTFT", 3), 10, 'Test 3');
test(maxConsecutiveAnswers("TFTFTFTF", 2), 5, 'Test 4');
test(maxConsecutiveAnswers("FFTFFT", 2), 6, 'Test 5');
test(maxConsecutiveAnswers("FFTTFFTTFF", 5), 10, 'Test 6');
test(maxConsecutiveAnswers("FFTFFTFF", 2), 8, 'Test 7');
test(maxConsecutiveAnswers("TFTFTFTFTF", 4), 9, 'Test 8');
test(maxConsecutiveAnswers("T", 1), 1, 'Test 9');
test(maxConsecutiveAnswers("FFTFFTFF", 3), 8, 'Test 10');
test(maxConsecutiveAnswers("TTFF", 2), 4, 'Test 11');
test(maxConsecutiveAnswers("TFTFTFTF", 4), 8, 'Test 12');
test(maxConsecutiveAnswers("FTFTFTFT", 2), 5, 'Test 13');
test(maxConsecutiveAnswers("TTFTTFTT", 1), 5, 'Test 14');
test(maxConsecutiveAnswers("TF TFT TFTF", 3), 10, 'Test 15');
test(maxConsecutiveAnswers("FFFFFFFF", 5), 8, 'Test 16');
test(maxConsecutiveAnswers("FFFFFFT", 2), 7, 'Test 17');
test(maxConsecutiveAnswers("FTFTFTFTFTFT", 5), 11, 'Test 18');
test(maxConsecutiveAnswers("TTTTFFT", 1), 5, 'Test 19');
test(maxConsecutiveAnswers("TTTTTTFTTTTT", 2), 12, 'Test 20');
test(maxConsecutiveAnswers("TTTTTT", 0), 6, 'Test 21');
test(maxConsecutiveAnswers("TTTTT", 0), 5, 'Test 22');
test(maxConsecutiveAnswers("TFFTFFTT", 3), 7, 'Test 23');
test(maxConsecutiveAnswers("TTTTFFTFFT", 3), 8, 'Test 24');
test(maxConsecutiveAnswers("FTFFTFFT", 3), 8, 'Test 25');
test(maxConsecutiveAnswers("TTTTTTTT", 3), 8, 'Test 26');
test(maxConsecutiveAnswers("TFFT", 1), 3, 'Test 27');
test(maxConsecutiveAnswers("FFFFFFF", 3), 7, 'Test 28');
test(maxConsecutiveAnswers("FFFFF", 3), 5, 'Test 29');
test(maxConsecutiveAnswers("FFFFF", 0), 5, 'Test 30');
test(maxConsecutiveAnswers("TFFFFF", 2), 6, 'Test 31');
test(maxConsecutiveAnswers("TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT", 20), 38, 'Test 32');
test(maxConsecutiveAnswers("FTFTFTFTFTFTFTFT", 4), 9, 'Test 33');
test(maxConsecutiveAnswers("FFFFFFFFFFFFFFFF", 10), 16, 'Test 34');
test(maxConsecutiveAnswers("FTFTFTFTFTFTFTFT", 8), 16, 'Test 35');
test(maxConsecutiveAnswers("TTTTTTTFFFFFFFFFFFFFFTTTTTTTTTTTTTTTTTTTTTT", 15), 43, 'Test 36');
test(maxConsecutiveAnswers("TTTTTTTTTTTTTTTT", 5), 16, 'Test 37');
test(maxConsecutiveAnswers("TFTFTFTFTFTFTFTFTFTFTFTFTFTFTFTFTFTFTFTFTFTFTFTFTFTFTFTFTFTFTFTFTFTFTFT", 25), 51, 'Test 38');
test(maxConsecutiveAnswers("TFFTFTFTFTFTFTFTFTFT", 10), 20, 'Test 39');
test(maxConsecutiveAnswers("TTTTTTTTTTTTTTTTTTTTTTTT", 15), 24, 'Test 40');
test(maxConsecutiveAnswers("TTFTFTFFTFTF", 4), 10, 'Test 41');
test(maxConsecutiveAnswers("TFFFFFFFFFTTTTTTTTTT", 6), 16, 'Test 42');
test(maxConsecutiveAnswers("TTFTFTFTFT", 4), 10, 'Test 43');
test(maxConsecutiveAnswers("FTFTFTFTFTFTFTFTFT", 8), 17, 'Test 44');
test(maxConsecutiveAnswers("TFFTFFTFFTFFTFFTFFTFFTFFTFFT", 21), 28, 'Test 45');
test(maxConsecutiveAnswers("TFTFTFTFTFTFTFTFTFTF", 10), 20, 'Test 46');
test(maxConsecutiveAnswers("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF", 20), 32, 'Test 47');
test(maxConsecutiveAnswers("FFFFFFFFTTTTTTTT", 5), 13, 'Test 48');
test(maxConsecutiveAnswers("TFFTFTFFTFFTFFTFFTFFTFFTFFTFFTFFTFFTFFTFFTFFTFFTFFTFFTFFTFT", 7), 23, 'Test 49');
test(maxConsecutiveAnswers("FFFFFFFFFFFFFFFFFFFFFFFFFFFF", 20), 28, 'Test 50');
test(maxConsecutiveAnswers("FFFFFFFFFTTTTTTTTT", 5), 14, 'Test 51');
test(maxConsecutiveAnswers("FTTFTTFTTFFTFTTFFT", 11), 18, 'Test 52');
test(maxConsecutiveAnswers("FFFFFFFFTTTTTTFFFFFFFFTTTTTTTTT", 9), 25, 'Test 53');
test(maxConsecutiveAnswers("TFTFTFTFTFTFTFTF", 10), 16, 'Test 54');
test(maxConsecutiveAnswers("TTTTTTTTTTTTTTTT", 10), 16, 'Test 55');
test(maxConsecutiveAnswers("FFFFFFFFTTTTTTTTTTFT", 2), 13, 'Test 56');
test(maxConsecutiveAnswers("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF", 0), 44, 'Test 57');
test(maxConsecutiveAnswers("TTTFFFFTTTFFTFTFFF", 3), 9, 'Test 58');
test(maxConsecutiveAnswers("FTFTFTFTFTFTFTFTFTFTFTFTFTFTFTFTFTFTFTFTFTFTFTFTFTFTFTFTFTFTFTFTFT", 20), 41, 'Test 59');
test(maxConsecutiveAnswers("FTTTFTTFTTFTTFTTFT", 7), 18, 'Test 60');
test(maxConsecutiveAnswers("TFTFTFTFTF", 5), 10, 'Test 61');
test(maxConsecutiveAnswers("FFFTTTFFFFTTTTFF", 5), 12, 'Test 62');
test(maxConsecutiveAnswers("TTFFFFFFFFTTTTTTTTTTTTFFFFFFF", 8), 22, 'Test 63');
test(maxConsecutiveAnswers("TTTFFFTTTFFFTTTFFF", 5), 11, 'Test 64');
test(maxConsecutiveAnswers("FFFFFFFFFTTTTTTTTTTTTTT", 10), 23, 'Test 65');
test(maxConsecutiveAnswers("FTFTFTFTFTFTFTFTFTFTFT", 2), 5, 'Test 66');
test(maxConsecutiveAnswers("TTFTFTFTFTFTFTFT", 5), 12, 'Test 67');
test(maxConsecutiveAnswers("FFTTFFTTFFTTFFTTFF", 10), 18, 'Test 68');
test(maxConsecutiveAnswers("TTTTFFFFFFFFFFFFTTTTTTTTTTTT", 15), 28, 'Test 69');
test(maxConsecutiveAnswers("TTFTFTFTFTFTFTFTFTFTFT", 12), 22, 'Test 70');
test(maxConsecutiveAnswers("TTTTTTTTTTFFFFFFFFFFFFFFFFF", 11), 27, 'Test 71');
test(maxConsecutiveAnswers("TTTTTTTTTFFFFFFF", 5), 14, 'Test 72');
test(maxConsecutiveAnswers("FTFFTFFTFFTFFTFFTFF", 10), 19, 'Test 73');
test(maxConsecutiveAnswers("TTFTFTFTFTFTFTFTFTFTFTFTFTFT", 7), 16, 'Test 74');
test(maxConsecutiveAnswers("FFFFFFFFFTTTTT", 5), 14, 'Test 75');
test(maxConsecutiveAnswers("TFFTFTFTFFTTFTFT", 3), 9, 'Test 76');
test(maxConsecutiveAnswers("TFTFTFTFTFTFTFTFTF", 6), 13, 'Test 77');
test(maxConsecutiveAnswers("TTTFTFTFTFTFTFTF", 6), 15, 'Test 78');
test(maxConsecutiveAnswers("TTTTTTTTTTTTTTTTT", 15), 17, 'Test 79');
test(maxConsecutiveAnswers("FFTFTFTFTFFTFTFTFT", 6), 15, 'Test 80');
test(maxConsecutiveAnswers("FFFFFFFFTTTTTFFFFF", 4), 12, 'Test 81');
test(maxConsecutiveAnswers("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFTTTTTTTTTTTTTTTT", 8), 38, 'Test 82');
test(maxConsecutiveAnswers("FFFFFFFFTTTTTTTTTT", 12), 18, 'Test 83');
test(maxConsecutiveAnswers("TTTTTTFFTFFTFFFF", 4), 12, 'Test 84');
test(maxConsecutiveAnswers("TFTFTFTFTFTFTFTFTF", 9), 18, 'Test 85');
test(maxConsecutiveAnswers("TTTTTTTTTTFFTTFFTT", 5), 18, 'Test 86');
test(maxConsecutiveAnswers("TTTFFFFTTTFFFFTTTFFFFTTT", 6), 18, 'Test 87');
test(maxConsecutiveAnswers("TTFFTTFFTFFTFFTT", 7), 15, 'Test 88');
test(maxConsecutiveAnswers("FFTTFFFTTF", 2), 7, 'Test 89');
test(maxConsecutiveAnswers("FFFFFFFF", 0), 8, 'Test 90');
test(maxConsecutiveAnswers("FFFFFFFFFTTTTTTT", 6), 15, 'Test 91');
test(maxConsecutiveAnswers("TTFTTTFTFTFTFTFFTFTF", 4), 12, 'Test 92');
test(maxConsecutiveAnswers("TTTTTTTTTTFFFFFFFFFF", 8), 18, 'Test 93');
test(maxConsecutiveAnswers("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF", 20), 36, 'Test 94');
test(maxConsecutiveAnswers("TTTFFFFTTTTFTTTFFTTT", 7), 20, 'Test 95');
test(maxConsecutiveAnswers("TFFTFTFTFTFTFTFTFT", 8), 17, 'Test 96');
test(maxConsecutiveAnswers("TTFFFTFTFTFTFFFT", 6), 15, 'Test 97');
test(maxConsecutiveAnswers("FTFTFTFTFTFTFTFT", 5), 11, 'Test 98');
test(maxConsecutiveAnswers("FTFTFTFTFTFTFTFTFTFTFTFTFTFTFTFTFTFTFT", 20), 38, 'Test 99');
test(maxConsecutiveAnswers("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF", 25), 32, 'Test 100');
test(maxConsecutiveAnswers("FTFTFTFTFTFTFTFTFTFTFTFTFTFTFTFTFTFTFTFTFT", 15), 31, 'Test 101');
test(maxConsecutiveAnswers("TFTFTFTFTFTFTFTFTFTFTFTFTFTFTFTFTFTFTFTFTF", 20), 41, 'Test 102');
test(maxConsecutiveAnswers("FTFTFTFTFTFTFTFTFT", 9), 18, 'Test 103');
test(maxConsecutiveAnswers("TTTTTFFTTTTFFTT", 4), 15, 'Test 104');
test(maxConsecutiveAnswers("FTFTFTFTFTFTFTFTFTFTFTFTFTFT", 15), 28, 'Test 105');
test(maxConsecutiveAnswers("TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT", 0), 48, 'Test 106');
test(maxConsecutiveAnswers("FFTFTFFTFTFFTFTFFTFT", 5), 14, 'Test 107');
test(maxConsecutiveAnswers("TTFFFFFFFFFFFFFFFFFT", 3), 20, 'Test 108');
test(maxConsecutiveAnswers("TFFTFFTFFTFFTFFTFF", 10), 18, 'Test 109');
test(maxConsecutiveAnswers("FFFFFFFFTTTTTTTTFFFFFFFFTTTTTTTT", 8), 24, 'Test 110');
test(maxConsecutiveAnswers("TTTTTTFTTTTTFTTTTTFTTTTT", 7), 24, 'Test 111');
test(maxConsecutiveAnswers("TFFFFFFFTTTTTTTTTT", 10), 18, 'Test 112');
test(maxConsecutiveAnswers("TFTFTFTFTFTFTFTFTFTF", 15), 20, 'Test 113');
test(maxConsecutiveAnswers("TTTTTTTTTTTTTTTTTTTTTTTTTTTTTT", 25), 30, 'Test 114');
test(maxConsecutiveAnswers("FTTFTTFTTFFTFTTFFTFFTFTTFTT", 22), 27, 'Test 115');
test(maxConsecutiveAnswers("TTFFFFFFFFFFFFFFFFFF", 10), 20, 'Test 116');
test(maxConsecutiveAnswers("FFFFFFFFFTTTTTTT", 7), 16, 'Test 117');
test(maxConsecutiveAnswers("TFTFTFTFTFTFTFTFTFTFTFTFTFTF", 18), 28, 'Test 118');
test(maxConsecutiveAnswers("FTFTFTFTFTFTFTFTFTFTFTFTFTFTFTFTFTFTFTFTFTFTFTFTFTFTFTFT", 10), 21, 'Test 119');
test(maxConsecutiveAnswers("TTTTTTTTTTTTTTTTTTTTTT", 15), 22, 'Test 120');
test(maxConsecutiveAnswers("FFTTFFTFFTFFTFFT", 4), 12, 'Test 121');
test(maxConsecutiveAnswers("TTTTTFFFFF", 2), 7, 'Test 122');
test(maxConsecutiveAnswers("TTTFFFTTTFFFTTTFFFTTTFFFTTTFFTFTFFTT", 15), 32, 'Test 123');
test(maxConsecutiveAnswers("TFFTFFTTFFTTFFTTFFTT", 9), 19, 'Test 124');
test(maxConsecutiveAnswers("FTFTFTTTTTFTFTFT", 6), 16, 'Test 125');
test(maxConsecutiveAnswers("TTTTTTTTTTTTTTTTTTTTTTTTTTTT", 20), 28, 'Test 126');
test(maxConsecutiveAnswers("FFFFFFFFFFFFFFFFF", 15), 17, 'Test 127');
test(maxConsecutiveAnswers("FTFTFTFTFTFTFTFTFTFT", 8), 17, 'Test 128');
test(maxConsecutiveAnswers("TFFTFFTFFTFFTFFTFFTFFTFFTFFT", 12), 28, 'Test 129');
test(maxConsecutiveAnswers("TTTTFFTTFFTTFF", 4), 12, 'Test 130');
test(maxConsecutiveAnswers("FTFTFTFTFTFTFTFTFTFTFTFTFTFTFTFTFT", 12), 25, 'Test 131');
test(maxConsecutiveAnswers("TFFFFFFFTTTTTTTT", 7), 16, 'Test 132');
test(maxConsecutiveAnswers("TTTTTTTTTT", 0), 10, 'Test 133');
test(maxConsecutiveAnswers("TFFTFFTFFTFFTFFTFFTFFT", 7), 21, 'Test 134');
test(maxConsecutiveAnswers("FFFFFFFFFFFFFFFFFFFFFFFFFFFFF", 20), 29, 'Test 135');
test(maxConsecutiveAnswers("TTFTFTFTFTFTFTFTFTFTFTFTFTFTFTFT", 24), 32, 'Test 136');
test(maxConsecutiveAnswers("TTFTTTTTTTTTTTTTTTTT", 1), 20, 'Test 137');
test(maxConsecutiveAnswers("TTFFTFTFFTFFTFTFFTFFTFFTTFFTFTFFTFFTFFTFFTFTFFTFF", 6), 19, 'Test 138');
test(maxConsecutiveAnswers("TTFTFTFTFTFTFTFTFTFTFTFT", 12), 24, 'Test 139');
test(maxConsecutiveAnswers("TTTTTTTTTFFFFFFF", 6), 15, 'Test 140');
test(maxConsecutiveAnswers("FFFFFFFFFFFFFFFFFFFFFFFF", 15), 24, 'Test 141');

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
