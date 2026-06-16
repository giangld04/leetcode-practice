// Test: 1739. Building Boxes
// 101 test cases from LeetCodeDataset
// Run: node test.js

const { minimumBoxes } = require("./solution");

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

console.log("\n1739. Building Boxes\n");

test(minimumBoxes(8), 6, 'Test 1');
test(minimumBoxes(3), 3, 'Test 2');
test(minimumBoxes(100), 34, 'Test 3');
test(minimumBoxes(15), 9, 'Test 4');
test(minimumBoxes(4), 3, 'Test 5');
test(minimumBoxes(1000000), 16443, 'Test 6');
test(minimumBoxes(20), 10, 'Test 7');
test(minimumBoxes(1), 1, 'Test 8');
test(minimumBoxes(1000000000), 1650467, 'Test 9');
test(minimumBoxes(1000), 161, 'Test 10');
test(minimumBoxes(10), 6, 'Test 11');
test(minimumBoxes(329), 75, 'Test 12');
test(minimumBoxes(344), 77, 'Test 13');
test(minimumBoxes(729), 130, 'Test 14');
test(minimumBoxes(567890), 11279, 'Test 15');
test(minimumBoxes(324), 75, 'Test 16');
test(minimumBoxes(300), 71, 'Test 17');
test(minimumBoxes(333), 76, 'Test 18');
test(minimumBoxes(316), 74, 'Test 19');
test(minimumBoxes(23), 12, 'Test 20');
test(minimumBoxes(303), 72, 'Test 21');
test(minimumBoxes(334), 76, 'Test 22');
test(minimumBoxes(35), 15, 'Test 23');
test(minimumBoxes(347), 77, 'Test 24');
test(minimumBoxes(5000), 474, 'Test 25');
test(minimumBoxes(567890123), 1131581, 'Test 26');
test(minimumBoxes(4913), 464, 'Test 27');
test(minimumBoxes(200), 53, 'Test 28');
test(minimumBoxes(500000000), 1039682, 'Test 29');
test(minimumBoxes(313), 73, 'Test 30');
test(minimumBoxes(500), 100, 'Test 31');
test(minimumBoxes(317), 74, 'Test 32');
test(minimumBoxes(3375), 365, 'Test 33');
test(minimumBoxes(897543210), 1535456, 'Test 34');
test(minimumBoxes(341), 76, 'Test 35');
test(minimumBoxes(216), 55, 'Test 36');
test(minimumBoxes(50000), 2210, 'Test 37');
test(minimumBoxes(987654), 16287, 'Test 38');
test(minimumBoxes(314), 73, 'Test 39');
test(minimumBoxes(318), 74, 'Test 40');
test(minimumBoxes(100000), 3536, 'Test 41');
test(minimumBoxes(25), 13, 'Test 42');
test(minimumBoxes(350), 77, 'Test 43');
test(minimumBoxes(5000000), 48159, 'Test 44');
test(minimumBoxes(325), 75, 'Test 45');
test(minimumBoxes(305), 72, 'Test 46');
test(minimumBoxes(123456789), 408968, 'Test 47');
test(minimumBoxes(999999), 16443, 'Test 48');
test(minimumBoxes(308), 73, 'Test 49');
test(minimumBoxes(12167), 857, 'Test 50');
test(minimumBoxes(342), 77, 'Test 51');
test(minimumBoxes(666), 120, 'Test 52');
test(minimumBoxes(315), 74, 'Test 53');
test(minimumBoxes(999999999), 1650467, 'Test 54');
test(minimumBoxes(2000), 252, 'Test 55');
test(minimumBoxes(250000000), 654763, 'Test 56');
test(minimumBoxes(30), 14, 'Test 57');
test(minimumBoxes(23456789), 135151, 'Test 58');
test(minimumBoxes(345), 77, 'Test 59');
test(minimumBoxes(336), 76, 'Test 60');
test(minimumBoxes(9261), 719, 'Test 61');
test(minimumBoxes(311), 73, 'Test 62');
test(minimumBoxes(310), 73, 'Test 63');
test(minimumBoxes(337), 76, 'Test 64');
test(minimumBoxes(343), 77, 'Test 65');
test(minimumBoxes(339), 76, 'Test 66');
test(minimumBoxes(320), 74, 'Test 67');
test(minimumBoxes(332), 76, 'Test 68');
test(minimumBoxes(987654321), 1636751, 'Test 69');
test(minimumBoxes(307), 72, 'Test 70');
test(minimumBoxes(309), 73, 'Test 71');
test(minimumBoxes(500000), 10365, 'Test 72');
test(minimumBoxes(328), 75, 'Test 73');
test(minimumBoxes(348), 77, 'Test 74');
test(minimumBoxes(304), 72, 'Test 75');
test(minimumBoxes(1500), 208, 'Test 76');
test(minimumBoxes(2197), 272, 'Test 77');
test(minimumBoxes(1331), 191, 'Test 78');
test(minimumBoxes(319), 74, 'Test 79');
test(minimumBoxes(125), 39, 'Test 80');
test(minimumBoxes(321), 74, 'Test 81');
test(minimumBoxes(6859), 586, 'Test 82');
test(minimumBoxes(50), 20, 'Test 83');
test(minimumBoxes(323), 75, 'Test 84');
test(minimumBoxes(331), 75, 'Test 85');
test(minimumBoxes(40), 18, 'Test 86');
test(minimumBoxes(327), 75, 'Test 87');
test(minimumBoxes(349), 77, 'Test 88');
test(minimumBoxes(10000), 756, 'Test 89');
test(minimumBoxes(335), 76, 'Test 90');
test(minimumBoxes(302), 72, 'Test 91');
test(minimumBoxes(312), 73, 'Test 92');
test(minimumBoxes(330), 75, 'Test 93');
test(minimumBoxes(322), 74, 'Test 94');
test(minimumBoxes(338), 76, 'Test 95');
test(minimumBoxes(306), 72, 'Test 96');
test(minimumBoxes(326), 75, 'Test 97');
test(minimumBoxes(301), 71, 'Test 98');
test(minimumBoxes(123456), 4068, 'Test 99');
test(minimumBoxes(346), 77, 'Test 100');
test(minimumBoxes(340), 76, 'Test 101');

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
