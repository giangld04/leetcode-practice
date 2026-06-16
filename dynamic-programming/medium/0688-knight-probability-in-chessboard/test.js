// Test: 688. Knight Probability In Chessboard
// 79 test cases from LeetCodeDataset
// Run: node test.js

const { knightProbability } = require("./solution");

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

console.log("\n688. Knight Probability In Chessboard\n");

test(knightProbability(3, 2, 0, 0), 0.0625, 'Test 1');
test(knightProbability(5, 3, 2, 2), 0.25, 'Test 2');
test(knightProbability(1, 0, 0, 0), 1, 'Test 3');
test(knightProbability(25, 10, 5, 5), 0.6104710195213556, 'Test 4');
test(knightProbability(8, 5, 3, 3), 0.35565185546875, 'Test 5');
test(knightProbability(16, 4, 8, 8), 0.9921875, 'Test 6');
test(knightProbability(20, 50, 0, 0), 0.004271113933844097, 'Test 7');
test(knightProbability(10, 10, 3, 7), 0.16516215726733208, 'Test 8');
test(knightProbability(18, 18, 9, 9), 0.4891442786281308, 'Test 9');
test(knightProbability(7, 3, 3, 0), 0.2578125, 'Test 10');
test(knightProbability(20, 30, 5, 5), 0.20150920194594582, 'Test 11');
test(knightProbability(20, 30, 10, 10), 0.3188507083330616, 'Test 12');
test(knightProbability(16, 10, 15, 0), 0.04366329871118069, 'Test 13');
test(knightProbability(24, 8, 0, 23), 0.054056644439697266, 'Test 14');
test(knightProbability(18, 40, 9, 9), 0.11635625115510018, 'Test 15');
test(knightProbability(7, 7, 3, 3), 0.1180572509765625, 'Test 16');
test(knightProbability(25, 100, 12, 12), 0.04742876069380138, 'Test 17');
test(knightProbability(12, 25, 6, 6), 0.04940514803013356, 'Test 18');
test(knightProbability(12, 10, 2, 2), 0.1920044720172882, 'Test 19');
test(knightProbability(20, 5, 19, 19), 0.0821533203125, 'Test 20');
test(knightProbability(15, 5, 7, 7), 0.9296875, 'Test 21');
test(knightProbability(15, 20, 7, 7), 0.25474967076243493, 'Test 22');
test(knightProbability(18, 40, 8, 8), 0.11635625115510018, 'Test 23');
test(knightProbability(20, 5, 10, 10), 0.998046875, 'Test 24');
test(knightProbability(15, 20, 14, 0), 0.016829922789494044, 'Test 25');
test(knightProbability(10, 15, 5, 5), 0.08643433569193348, 'Test 26');
test(knightProbability(20, 20, 10, 10), 0.5426220046393063, 'Test 27');
test(knightProbability(10, 5, 7, 3), 0.432373046875, 'Test 28');
test(knightProbability(12, 3, 0, 0), 0.125, 'Test 29');
test(knightProbability(25, 10, 0, 0), 0.04390144161880016, 'Test 30');
test(knightProbability(12, 4, 6, 6), 0.86083984375, 'Test 31');
test(knightProbability(20, 30, 15, 15), 0.1555184742490744, 'Test 32');
test(knightProbability(12, 40, 3, 3), 0.004399547953837918, 'Test 33');
test(knightProbability(22, 80, 11, 11), 0.044116795483744795, 'Test 34');
test(knightProbability(25, 75, 20, 20), 0.03918538196240853, 'Test 35');
test(knightProbability(18, 60, 8, 8), 0.03143644403748678, 'Test 36');
test(knightProbability(11, 10, 3, 3), 0.2401371169835329, 'Test 37');
test(knightProbability(25, 50, 12, 12), 0.2764224343078947, 'Test 38');
test(knightProbability(20, 5, 19, 0), 0.0821533203125, 'Test 39');
test(knightProbability(25, 10, 10, 10), 0.9512526337057352, 'Test 40');
test(knightProbability(10, 5, 0, 0), 0.08154296875, 'Test 41');
test(knightProbability(25, 0, 24, 24), 1, 'Test 42');
test(knightProbability(9, 15, 4, 4), 0.04816485046694652, 'Test 43');
test(knightProbability(10, 10, 4, 5), 0.22588835656642914, 'Test 44');
test(knightProbability(25, 1, 0, 0), 0.25, 'Test 45');
test(knightProbability(15, 25, 7, 7), 0.16093826349037266, 'Test 46');
test(knightProbability(25, 1, 24, 24), 0.25, 'Test 47');
test(knightProbability(15, 5, 14, 14), 0.0821533203125, 'Test 48');
test(knightProbability(20, 2, 19, 0), 0.1875, 'Test 49');
test(knightProbability(12, 1, 11, 11), 0.25, 'Test 50');
test(knightProbability(18, 15, 9, 9), 0.5923417936583064, 'Test 51');
test(knightProbability(10, 5, 9, 9), 0.08154296875, 'Test 52');
test(knightProbability(20, 2, 19, 19), 0.1875, 'Test 53');
test(knightProbability(15, 10, 7, 7), 0.6320731192827225, 'Test 54');
test(knightProbability(20, 25, 5, 5), 0.2637784288176317, 'Test 55');
test(knightProbability(25, 50, 10, 10), 0.26126116581179654, 'Test 56');
test(knightProbability(10, 5, 9, 0), 0.08154296875, 'Test 57');
test(knightProbability(10, 10, 5, 5), 0.22588835656642914, 'Test 58');
test(knightProbability(22, 25, 11, 11), 0.5187071674337155, 'Test 59');
test(knightProbability(15, 20, 0, 14), 0.016829922789494044, 'Test 60');
test(knightProbability(10, 50, 0, 0), 1.4257173418698251e-05, 'Test 61');
test(knightProbability(15, 15, 14, 0), 0.026700135945247894, 'Test 62');
test(knightProbability(20, 7, 19, 19), 0.060955047607421875, 'Test 63');
test(knightProbability(10, 8, 9, 9), 0.04556155204772949, 'Test 64');
test(knightProbability(20, 10, 0, 0), 0.04390097223222256, 'Test 65');
test(knightProbability(12, 3, 11, 11), 0.125, 'Test 66');
test(knightProbability(16, 8, 8, 8), 0.8006306886672974, 'Test 67');
test(knightProbability(14, 25, 6, 6), 0.11653890928316238, 'Test 68');
test(knightProbability(10, 5, 0, 9), 0.08154296875, 'Test 69');
test(knightProbability(9, 4, 1, 1), 0.232421875, 'Test 70');
test(knightProbability(23, 2, 22, 22), 0.1875, 'Test 71');
test(knightProbability(12, 15, 3, 4), 0.1568282853916969, 'Test 72');
test(knightProbability(12, 30, 6, 6), 0.02475891397334001, 'Test 73');
test(knightProbability(8, 6, 1, 1), 0.121978759765625, 'Test 74');
test(knightProbability(7, 25, 3, 3), 0.0001764740896717054, 'Test 75');
test(knightProbability(20, 2, 0, 19), 0.1875, 'Test 76');
test(knightProbability(15, 7, 7, 7), 0.811187744140625, 'Test 77');
test(knightProbability(10, 0, 5, 5), 1, 'Test 78');
test(knightProbability(12, 3, 0, 11), 0.125, 'Test 79');

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
