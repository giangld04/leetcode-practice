// Test: 629. K Inverse Pairs Array
// 80 test cases from LeetCodeDataset
// Run: node test.js

const { kInversePairs } = require("./solution");

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

console.log("\n629. K Inverse Pairs Array\n");

test(kInversePairs(1000, 500), 955735232, 'Test 1');
test(kInversePairs(100, 0), 1, 'Test 2');
test(kInversePairs(20, 50), 788876615, 'Test 3');
test(kInversePairs(1000, 0), 1, 'Test 4');
test(kInversePairs(10, 10), 21670, 'Test 5');
test(kInversePairs(3, 0), 1, 'Test 6');
test(kInversePairs(100, 50), 445329159, 'Test 7');
test(kInversePairs(10, 20), 230131, 'Test 8');
test(kInversePairs(10, 5), 1068, 'Test 9');
test(kInversePairs(6, 4), 49, 'Test 10');
test(kInversePairs(500, 500), 334048938, 'Test 11');
test(kInversePairs(4, 2), 5, 'Test 12');
test(kInversePairs(5, 3), 15, 'Test 13');
test(kInversePairs(3, 1), 2, 'Test 14');
test(kInversePairs(1000, 1000), 663677020, 'Test 15');
test(kInversePairs(7, 10), 573, 'Test 16');
test(kInversePairs(6, 5), 71, 'Test 17');
test(kInversePairs(100, 100), 959322173, 'Test 18');
test(kInversePairs(500, 250), 340232605, 'Test 19');
test(kInversePairs(400, 200), 155930478, 'Test 20');
test(kInversePairs(300, 150), 954108341, 'Test 21');
test(kInversePairs(250, 125), 963392607, 'Test 22');
test(kInversePairs(450, 350), 817469743, 'Test 23');
test(kInversePairs(550, 350), 753008434, 'Test 24');
test(kInversePairs(200, 100), 372936062, 'Test 25');
test(kInversePairs(900, 700), 867124875, 'Test 26');
test(kInversePairs(950, 600), 304125714, 'Test 27');
test(kInversePairs(650, 325), 651704209, 'Test 28');
test(kInversePairs(750, 300), 319486156, 'Test 29');
test(kInversePairs(500, 1), 499, 'Test 30');
test(kInversePairs(750, 200), 784163913, 'Test 31');
test(kInversePairs(500, 600), 423901727, 'Test 32');
test(kInversePairs(800, 350), 167531348, 'Test 33');
test(kInversePairs(800, 600), 545089101, 'Test 34');
test(kInversePairs(200, 199), 113707737, 'Test 35');
test(kInversePairs(350, 100), 882052434, 'Test 36');
test(kInversePairs(800, 500), 237860861, 'Test 37');
test(kInversePairs(200, 150), 691281198, 'Test 38');
test(kInversePairs(850, 750), 613893680, 'Test 39');
test(kInversePairs(550, 275), 829312124, 'Test 40');
test(kInversePairs(750, 250), 998393645, 'Test 41');
test(kInversePairs(700, 250), 533593353, 'Test 42');
test(kInversePairs(750, 700), 199653602, 'Test 43');
test(kInversePairs(200, 300), 818876359, 'Test 44');
test(kInversePairs(100, 75), 472228743, 'Test 45');
test(kInversePairs(999, 999), 570203540, 'Test 46');
test(kInversePairs(700, 350), 622326263, 'Test 47');
test(kInversePairs(825, 412), 680368220, 'Test 48');
test(kInversePairs(900, 450), 610615323, 'Test 49');
test(kInversePairs(300, 299), 425310890, 'Test 50');
test(kInversePairs(900, 900), 218855132, 'Test 51');
test(kInversePairs(400, 399), 759251773, 'Test 52');
test(kInversePairs(990, 500), 863155312, 'Test 53');
test(kInversePairs(600, 100), 777381270, 'Test 54');
test(kInversePairs(600, 800), 139677600, 'Test 55');
test(kInversePairs(150, 75), 532579469, 'Test 56');
test(kInversePairs(750, 600), 37939667, 'Test 57');
test(kInversePairs(800, 750), 420581417, 'Test 58');
test(kInversePairs(120, 119), 156717557, 'Test 59');
test(kInversePairs(500, 0), 1, 'Test 60');
test(kInversePairs(900, 100), 68842652, 'Test 61');
test(kInversePairs(800, 0), 1, 'Test 62');
test(kInversePairs(250, 250), 946579835, 'Test 63');
test(kInversePairs(850, 700), 259344610, 'Test 64');
test(kInversePairs(950, 900), 333369296, 'Test 65');
test(kInversePairs(950, 450), 946420580, 'Test 66');
test(kInversePairs(650, 400), 449625333, 'Test 67');
test(kInversePairs(150, 149), 480922327, 'Test 68');
test(kInversePairs(900, 300), 64634329, 'Test 69');
test(kInversePairs(300, 100), 86577949, 'Test 70');
test(kInversePairs(600, 300), 537290507, 'Test 71');
test(kInversePairs(998, 0), 1, 'Test 72');
test(kInversePairs(350, 150), 604337481, 'Test 73');
test(kInversePairs(800, 400), 628007887, 'Test 74');
test(kInversePairs(750, 500), 620935219, 'Test 75');
test(kInversePairs(400, 150), 958391787, 'Test 76');
test(kInversePairs(500, 100), 725526442, 'Test 77');
test(kInversePairs(600, 200), 785265253, 'Test 78');
test(kInversePairs(50, 25), 913564693, 'Test 79');
test(kInversePairs(600, 550), 430003494, 'Test 80');

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
