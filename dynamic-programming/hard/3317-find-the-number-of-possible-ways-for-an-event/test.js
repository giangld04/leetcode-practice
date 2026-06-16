// Test: 3317. Find The Number Of Possible Ways For An Event
// 91 test cases from LeetCodeDataset
// Run: node test.js

const { numberOfWays } = require("./solution");

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

console.log("\n3317. Find The Number Of Possible Ways For An Event\n");

test(numberOfWays(500, 250, 250), 604049962, 'Test 1');
test(numberOfWays(6, 6, 6), 150265836, 'Test 2');
test(numberOfWays(4, 2, 4), 232, 'Test 3');
test(numberOfWays(500, 5, 20), 955685646, 'Test 4');
test(numberOfWays(100, 10, 10), 757713628, 'Test 5');
test(numberOfWays(1, 2, 3), 6, 'Test 6');
test(numberOfWays(1000, 1000, 1000), 295964505, 'Test 7');
test(numberOfWays(5, 2, 1), 32, 'Test 8');
test(numberOfWays(1, 1, 1), 1, 'Test 9');
test(numberOfWays(7, 4, 3), 882264, 'Test 10');
test(numberOfWays(10, 10, 1), 999999937, 'Test 11');
test(numberOfWays(7, 1, 10), 10, 'Test 12');
test(numberOfWays(2, 3, 2), 30, 'Test 13');
test(numberOfWays(100, 10, 100), 273493465, 'Test 14');
test(numberOfWays(500, 500, 1), 742761597, 'Test 15');
test(numberOfWays(10, 5, 5), 574980399, 'Test 16');
test(numberOfWays(10, 5, 10), 786818193, 'Test 17');
test(numberOfWays(2, 2, 2), 12, 'Test 18');
test(numberOfWays(3, 3, 4), 684, 'Test 19');
test(numberOfWays(2, 4, 3), 120, 'Test 20');
test(numberOfWays(500, 20, 30), 969962044, 'Test 21');
test(numberOfWays(7, 3, 2), 15966, 'Test 22');
test(numberOfWays(1000, 100, 100), 31082313, 'Test 23');
test(numberOfWays(999, 1000, 999), 529470001, 'Test 24');
test(numberOfWays(300, 100, 200), 920174716, 'Test 25');
test(numberOfWays(500, 700, 300), 848923924, 'Test 26');
test(numberOfWays(2, 2, 1000), 2002000, 'Test 27');
test(numberOfWays(100, 100, 100), 169878723, 'Test 28');
test(numberOfWays(1000, 10, 100), 639122056, 'Test 29');
test(numberOfWays(500, 500, 10), 945662039, 'Test 30');
test(numberOfWays(600, 300, 300), 952131693, 'Test 31');
test(numberOfWays(800, 25, 25), 241877807, 'Test 32');
test(numberOfWays(750, 25, 35), 837224424, 'Test 33');
test(numberOfWays(100, 50, 50), 54657599, 'Test 34');
test(numberOfWays(500, 500, 500), 295516381, 'Test 35');
test(numberOfWays(250, 5, 200), 919377263, 'Test 36');
test(numberOfWays(999, 999, 999), 490429319, 'Test 37');
test(numberOfWays(999, 1000, 1000), 78742301, 'Test 38');
test(numberOfWays(500, 1000, 1000), 736888411, 'Test 39');
test(numberOfWays(1000, 10, 10), 187897528, 'Test 40');
test(numberOfWays(999, 999, 1), 760074701, 'Test 41');
test(numberOfWays(400, 400, 2), 877938741, 'Test 42');
test(numberOfWays(100, 100, 1), 424090053, 'Test 43');
test(numberOfWays(750, 30, 40), 725279144, 'Test 44');
test(numberOfWays(300, 200, 150), 446039088, 'Test 45');
test(numberOfWays(1000, 1, 1000), 1000, 'Test 46');
test(numberOfWays(600, 50, 100), 201548400, 'Test 47');
test(numberOfWays(750, 500, 250), 201743686, 'Test 48');
test(numberOfWays(20, 10, 10), 250624124, 'Test 49');
test(numberOfWays(750, 250, 350), 298617350, 'Test 50');
test(numberOfWays(800, 2, 3), 105983888, 'Test 51');
test(numberOfWays(450, 150, 200), 836208120, 'Test 52');
test(numberOfWays(999, 999, 1000), 759466025, 'Test 53');
test(numberOfWays(1000, 500, 500), 754687589, 'Test 54');
test(numberOfWays(600, 3, 500), 507224996, 'Test 55');
test(numberOfWays(250, 250, 250), 37703966, 'Test 56');
test(numberOfWays(200, 1000, 1), 500816181, 'Test 57');
test(numberOfWays(200, 100, 1), 794576212, 'Test 58');
test(numberOfWays(10, 1, 1000), 1000, 'Test 59');
test(numberOfWays(400, 40, 40), 130346951, 'Test 60');
test(numberOfWays(500, 3, 5), 954723270, 'Test 61');
test(numberOfWays(1000, 50, 50), 429860379, 'Test 62');
test(numberOfWays(300, 2, 100), 507547660, 'Test 63');
test(numberOfWays(600, 300, 400), 520792267, 'Test 64');
test(numberOfWays(1, 1000, 1000), 1000000, 'Test 65');
test(numberOfWays(750, 250, 500), 534179249, 'Test 66');
test(numberOfWays(10, 50, 100), 512711582, 'Test 67');
test(numberOfWays(10, 100, 50), 634873075, 'Test 68');
test(numberOfWays(50, 5, 10), 182572441, 'Test 69');
test(numberOfWays(750, 200, 300), 719876888, 'Test 70');
test(numberOfWays(550, 100, 100), 128555335, 'Test 71');
test(numberOfWays(50, 10, 20), 139021947, 'Test 72');
test(numberOfWays(1000, 200, 200), 985949432, 'Test 73');
test(numberOfWays(800, 200, 200), 116750119, 'Test 74');
test(numberOfWays(50, 10, 5), 722025534, 'Test 75');
test(numberOfWays(800, 800, 2), 34432269, 'Test 76');
test(numberOfWays(999, 1, 999), 999, 'Test 77');
test(numberOfWays(500, 10, 100), 266610171, 'Test 78');
test(numberOfWays(1000, 1000, 1), 524700271, 'Test 79');
test(numberOfWays(800, 250, 250), 375598308, 'Test 80');
test(numberOfWays(200, 300, 100), 159926237, 'Test 81');
test(numberOfWays(700, 7, 7), 275200648, 'Test 82');
test(numberOfWays(999, 500, 500), 547290861, 'Test 83');
test(numberOfWays(500, 50, 50), 25088782, 'Test 84');
test(numberOfWays(900, 50, 50), 414449887, 'Test 85');
test(numberOfWays(500, 300, 700), 800306839, 'Test 86');
test(numberOfWays(2, 1000, 2), 3998000, 'Test 87');
test(numberOfWays(300, 1, 1000), 1000, 'Test 88');
test(numberOfWays(600, 100, 100), 172044181, 'Test 89');
test(numberOfWays(1000, 2, 2), 753692822, 'Test 90');
test(numberOfWays(500, 1, 1000), 1000, 'Test 91');

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
