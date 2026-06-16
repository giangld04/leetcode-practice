// Test: 2413. Smallest Even Multiple
// 91 test cases from LeetCodeDataset
// Run: node test.js

const { smallestEvenMultiple } = require("./solution");

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

console.log("\n2413. Smallest Even Multiple\n");

test(smallestEvenMultiple(3), 6, 'Test 1');
test(smallestEvenMultiple(100), 100, 'Test 2');
test(smallestEvenMultiple(33), 66, 'Test 3');
test(smallestEvenMultiple(75), 150, 'Test 4');
test(smallestEvenMultiple(6), 6, 'Test 5');
test(smallestEvenMultiple(2), 2, 'Test 6');
test(smallestEvenMultiple(1), 2, 'Test 7');
test(smallestEvenMultiple(7), 14, 'Test 8');
test(smallestEvenMultiple(5), 10, 'Test 9');
test(smallestEvenMultiple(150), 150, 'Test 10');
test(smallestEvenMultiple(45), 90, 'Test 11');
test(smallestEvenMultiple(119), 238, 'Test 12');
test(smallestEvenMultiple(53), 106, 'Test 13');
test(smallestEvenMultiple(43), 86, 'Test 14');
test(smallestEvenMultiple(103), 206, 'Test 15');
test(smallestEvenMultiple(145), 290, 'Test 16');
test(smallestEvenMultiple(37), 74, 'Test 17');
test(smallestEvenMultiple(23), 46, 'Test 18');
test(smallestEvenMultiple(73), 146, 'Test 19');
test(smallestEvenMultiple(133), 266, 'Test 20');
test(smallestEvenMultiple(8), 8, 'Test 21');
test(smallestEvenMultiple(147), 294, 'Test 22');
test(smallestEvenMultiple(131), 262, 'Test 23');
test(smallestEvenMultiple(27), 54, 'Test 24');
test(smallestEvenMultiple(35), 70, 'Test 25');
test(smallestEvenMultiple(77), 154, 'Test 26');
test(smallestEvenMultiple(11), 22, 'Test 27');
test(smallestEvenMultiple(142), 142, 'Test 28');
test(smallestEvenMultiple(55), 110, 'Test 29');
test(smallestEvenMultiple(65), 130, 'Test 30');
test(smallestEvenMultiple(97), 194, 'Test 31');
test(smallestEvenMultiple(88), 88, 'Test 32');
test(smallestEvenMultiple(29), 58, 'Test 33');
test(smallestEvenMultiple(135), 270, 'Test 34');
test(smallestEvenMultiple(144), 144, 'Test 35');
test(smallestEvenMultiple(107), 214, 'Test 36');
test(smallestEvenMultiple(21), 42, 'Test 37');
test(smallestEvenMultiple(115), 230, 'Test 38');
test(smallestEvenMultiple(87), 174, 'Test 39');
test(smallestEvenMultiple(137), 274, 'Test 40');
test(smallestEvenMultiple(17), 34, 'Test 41');
test(smallestEvenMultiple(42), 42, 'Test 42');
test(smallestEvenMultiple(101), 202, 'Test 43');
test(smallestEvenMultiple(89), 178, 'Test 44');
test(smallestEvenMultiple(112), 112, 'Test 45');
test(smallestEvenMultiple(71), 142, 'Test 46');
test(smallestEvenMultiple(81), 162, 'Test 47');
test(smallestEvenMultiple(41), 82, 'Test 48');
test(smallestEvenMultiple(9), 18, 'Test 49');
test(smallestEvenMultiple(83), 166, 'Test 50');
test(smallestEvenMultiple(121), 242, 'Test 51');
test(smallestEvenMultiple(105), 210, 'Test 52');
test(smallestEvenMultiple(79), 158, 'Test 53');
test(smallestEvenMultiple(84), 84, 'Test 54');
test(smallestEvenMultiple(63), 126, 'Test 55');
test(smallestEvenMultiple(61), 122, 'Test 56');
test(smallestEvenMultiple(130), 130, 'Test 57');
test(smallestEvenMultiple(49), 98, 'Test 58');
test(smallestEvenMultiple(47), 94, 'Test 59');
test(smallestEvenMultiple(113), 226, 'Test 60');
test(smallestEvenMultiple(93), 186, 'Test 61');
test(smallestEvenMultiple(57), 114, 'Test 62');
test(smallestEvenMultiple(111), 222, 'Test 63');
test(smallestEvenMultiple(123), 246, 'Test 64');
test(smallestEvenMultiple(95), 190, 'Test 65');
test(smallestEvenMultiple(141), 282, 'Test 66');
test(smallestEvenMultiple(51), 102, 'Test 67');
test(smallestEvenMultiple(127), 254, 'Test 68');
test(smallestEvenMultiple(15), 30, 'Test 69');
test(smallestEvenMultiple(13), 26, 'Test 70');
test(smallestEvenMultiple(69), 138, 'Test 71');
test(smallestEvenMultiple(125), 250, 'Test 72');
test(smallestEvenMultiple(12), 12, 'Test 73');
test(smallestEvenMultiple(117), 234, 'Test 74');
test(smallestEvenMultiple(59), 118, 'Test 75');
test(smallestEvenMultiple(67), 134, 'Test 76');
test(smallestEvenMultiple(99), 198, 'Test 77');
test(smallestEvenMultiple(64), 64, 'Test 78');
test(smallestEvenMultiple(143), 286, 'Test 79');
test(smallestEvenMultiple(128), 128, 'Test 80');
test(smallestEvenMultiple(129), 258, 'Test 81');
test(smallestEvenMultiple(140), 140, 'Test 82');
test(smallestEvenMultiple(149), 298, 'Test 83');
test(smallestEvenMultiple(19), 38, 'Test 84');
test(smallestEvenMultiple(39), 78, 'Test 85');
test(smallestEvenMultiple(91), 182, 'Test 86');
test(smallestEvenMultiple(139), 278, 'Test 87');
test(smallestEvenMultiple(85), 170, 'Test 88');
test(smallestEvenMultiple(109), 218, 'Test 89');
test(smallestEvenMultiple(31), 62, 'Test 90');
test(smallestEvenMultiple(25), 50, 'Test 91');

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
