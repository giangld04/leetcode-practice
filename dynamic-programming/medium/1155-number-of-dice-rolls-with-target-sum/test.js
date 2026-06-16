// Test: 1155. Number Of Dice Rolls With Target Sum
// 108 test cases from LeetCodeDataset
// Run: node test.js

const { numRollsToTarget } = require("./solution");

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

console.log("\n1155. Number Of Dice Rolls With Target Sum\n");

test(numRollsToTarget(15, 10, 100), 794915145, 'Test 1');
test(numRollsToTarget(4, 6, 12), 125, 'Test 2');
test(numRollsToTarget(30, 30, 500), 222616187, 'Test 3');
test(numRollsToTarget(2, 6, 7), 6, 'Test 4');
test(numRollsToTarget(10, 5, 30), 856945, 'Test 5');
test(numRollsToTarget(3, 4, 8), 12, 'Test 6');
test(numRollsToTarget(3, 2, 5), 3, 'Test 7');
test(numRollsToTarget(5, 4, 10), 101, 'Test 8');
test(numRollsToTarget(1, 6, 3), 1, 'Test 9');
test(numRollsToTarget(2, 2, 3), 2, 'Test 10');
test(numRollsToTarget(15, 4, 40), 83372562, 'Test 11');
test(numRollsToTarget(10, 10, 50), 374894389, 'Test 12');
test(numRollsToTarget(5, 5, 10), 121, 'Test 13');
test(numRollsToTarget(5, 10, 15), 996, 'Test 14');
test(numRollsToTarget(3, 2, 4), 3, 'Test 15');
test(numRollsToTarget(25, 20, 400), 239696222, 'Test 16');
test(numRollsToTarget(10, 5, 25), 473694, 'Test 17');
test(numRollsToTarget(18, 8, 100), 428096078, 'Test 18');
test(numRollsToTarget(26, 10, 130), 900662957, 'Test 19');
test(numRollsToTarget(28, 20, 250), 754162082, 'Test 20');
test(numRollsToTarget(30, 30, 800), 740208408, 'Test 21');
test(numRollsToTarget(29, 13, 385), 0, 'Test 22');
test(numRollsToTarget(15, 5, 60), 49360405, 'Test 23');
test(numRollsToTarget(27, 18, 380), 570408071, 'Test 24');
test(numRollsToTarget(27, 11, 243), 976265632, 'Test 25');
test(numRollsToTarget(14, 7, 98), 1, 'Test 26');
test(numRollsToTarget(12, 15, 120), 545528539, 'Test 27');
test(numRollsToTarget(25, 6, 100), 165343714, 'Test 28');
test(numRollsToTarget(19, 14, 260), 134596, 'Test 29');
test(numRollsToTarget(15, 8, 120), 1, 'Test 30');
test(numRollsToTarget(30, 5, 125), 699555125, 'Test 31');
test(numRollsToTarget(30, 12, 200), 740079054, 'Test 32');
test(numRollsToTarget(25, 10, 150), 166392150, 'Test 33');
test(numRollsToTarget(26, 12, 200), 768259128, 'Test 34');
test(numRollsToTarget(17, 9, 145), 735471, 'Test 35');
test(numRollsToTarget(22, 14, 280), 879336869, 'Test 36');
test(numRollsToTarget(27, 11, 220), 441656611, 'Test 37');
test(numRollsToTarget(30, 10, 150), 793899040, 'Test 38');
test(numRollsToTarget(16, 11, 105), 811426869, 'Test 39');
test(numRollsToTarget(30, 10, 250), 128709914, 'Test 40');
test(numRollsToTarget(22, 9, 180), 44386487, 'Test 41');
test(numRollsToTarget(28, 15, 350), 471189138, 'Test 42');
test(numRollsToTarget(15, 10, 150), 1, 'Test 43');
test(numRollsToTarget(30, 5, 90), 337060208, 'Test 44');
test(numRollsToTarget(18, 10, 150), 182972231, 'Test 45');
test(numRollsToTarget(29, 25, 400), 266275143, 'Test 46');
test(numRollsToTarget(30, 6, 150), 37027173, 'Test 47');
test(numRollsToTarget(24, 9, 155), 405028518, 'Test 48');
test(numRollsToTarget(18, 7, 120), 100947, 'Test 49');
test(numRollsToTarget(22, 7, 120), 404679730, 'Test 50');
test(numRollsToTarget(18, 8, 120), 747503719, 'Test 51');
test(numRollsToTarget(24, 14, 160), 26411763, 'Test 52');
test(numRollsToTarget(20, 15, 250), 504797596, 'Test 53');
test(numRollsToTarget(30, 6, 100), 449826955, 'Test 54');
test(numRollsToTarget(24, 15, 300), 688942594, 'Test 55');
test(numRollsToTarget(27, 11, 170), 11802847, 'Test 56');
test(numRollsToTarget(19, 9, 125), 406671426, 'Test 57');
test(numRollsToTarget(12, 7, 84), 1, 'Test 58');
test(numRollsToTarget(20, 20, 200), 270319085, 'Test 59');
test(numRollsToTarget(10, 15, 150), 1, 'Test 60');
test(numRollsToTarget(26, 9, 180), 843161626, 'Test 61');
test(numRollsToTarget(16, 6, 80), 248705155, 'Test 62');
test(numRollsToTarget(12, 3, 30), 8074, 'Test 63');
test(numRollsToTarget(18, 8, 150), 0, 'Test 64');
test(numRollsToTarget(22, 10, 155), 612108463, 'Test 65');
test(numRollsToTarget(22, 15, 180), 215154082, 'Test 66');
test(numRollsToTarget(28, 12, 200), 507319147, 'Test 67');
test(numRollsToTarget(20, 8, 100), 891516101, 'Test 68');
test(numRollsToTarget(28, 9, 252), 1, 'Test 69');
test(numRollsToTarget(20, 8, 160), 1, 'Test 70');
test(numRollsToTarget(20, 20, 350), 690236765, 'Test 71');
test(numRollsToTarget(25, 12, 150), 800893074, 'Test 72');
test(numRollsToTarget(12, 12, 75), 6445237, 'Test 73');
test(numRollsToTarget(30, 12, 360), 1, 'Test 74');
test(numRollsToTarget(19, 13, 221), 611881535, 'Test 75');
test(numRollsToTarget(20, 20, 400), 1, 'Test 76');
test(numRollsToTarget(28, 6, 100), 333372447, 'Test 77');
test(numRollsToTarget(14, 7, 90), 203294, 'Test 78');
test(numRollsToTarget(25, 6, 120), 253411631, 'Test 79');
test(numRollsToTarget(18, 6, 100), 1078497, 'Test 80');
test(numRollsToTarget(16, 7, 80), 150185177, 'Test 81');
test(numRollsToTarget(29, 7, 195), 30259499, 'Test 82');
test(numRollsToTarget(27, 30, 800), 254186856, 'Test 83');
test(numRollsToTarget(19, 25, 450), 359043931, 'Test 84');
test(numRollsToTarget(20, 10, 150), 366736536, 'Test 85');
test(numRollsToTarget(28, 12, 250), 782356560, 'Test 86');
test(numRollsToTarget(30, 25, 750), 1, 'Test 87');
test(numRollsToTarget(12, 7, 85), 0, 'Test 88');
test(numRollsToTarget(30, 25, 400), 656098604, 'Test 89');
test(numRollsToTarget(22, 9, 175), 592474733, 'Test 90');
test(numRollsToTarget(22, 8, 160), 781347627, 'Test 91');
test(numRollsToTarget(28, 18, 450), 94890353, 'Test 92');
test(numRollsToTarget(20, 15, 350), 0, 'Test 93');
test(numRollsToTarget(24, 18, 360), 517019157, 'Test 94');
test(numRollsToTarget(18, 12, 250), 0, 'Test 95');
test(numRollsToTarget(22, 15, 170), 332380631, 'Test 96');
test(numRollsToTarget(14, 20, 180), 267746915, 'Test 97');
test(numRollsToTarget(22, 6, 132), 1, 'Test 98');
test(numRollsToTarget(27, 18, 350), 91344166, 'Test 99');
test(numRollsToTarget(12, 12, 100), 201258020, 'Test 100');
test(numRollsToTarget(17, 9, 130), 241842734, 'Test 101');
test(numRollsToTarget(25, 15, 300), 861212713, 'Test 102');
test(numRollsToTarget(18, 7, 90), 183069607, 'Test 103');
test(numRollsToTarget(25, 20, 300), 161591689, 'Test 104');
test(numRollsToTarget(20, 10, 180), 522663924, 'Test 105');
test(numRollsToTarget(28, 15, 300), 813819263, 'Test 106');
test(numRollsToTarget(22, 7, 130), 712806895, 'Test 107');
test(numRollsToTarget(30, 20, 500), 541650286, 'Test 108');

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
