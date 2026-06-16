// Test: 292. Nim Game
// 114 test cases from LeetCodeDataset
// Run: node test.js

const { canWinNim } = require("./solution");

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

console.log("\n292. Nim Game\n");

test(canWinNim(3), true, 'Test 1');
test(canWinNim(21), true, 'Test 2');
test(canWinNim(2147483647), true, 'Test 3');
test(canWinNim(104), false, 'Test 4');
test(canWinNim(100), false, 'Test 5');
test(canWinNim(10), true, 'Test 6');
test(canWinNim(5), true, 'Test 7');
test(canWinNim(28), false, 'Test 8');
test(canWinNim(40), false, 'Test 9');
test(canWinNim(4), false, 'Test 10');
test(canWinNim(16), false, 'Test 11');
test(canWinNim(33), true, 'Test 12');
test(canWinNim(17), true, 'Test 13');
test(canWinNim(37), true, 'Test 14');
test(canWinNim(2), true, 'Test 15');
test(canWinNim(23), true, 'Test 16');
test(canWinNim(1024), false, 'Test 17');
test(canWinNim(8), false, 'Test 18');
test(canWinNim(27), true, 'Test 19');
test(canWinNim(35), true, 'Test 20');
test(canWinNim(32), false, 'Test 21');
test(canWinNim(20), false, 'Test 22');
test(canWinNim(19), true, 'Test 23');
test(canWinNim(24), false, 'Test 24');
test(canWinNim(15), true, 'Test 25');
test(canWinNim(31), true, 'Test 26');
test(canWinNim(1), true, 'Test 27');
test(canWinNim(7), true, 'Test 28');
test(canWinNim(13), true, 'Test 29');
test(canWinNim(25), true, 'Test 30');
test(canWinNim(2147483646), true, 'Test 31');
test(canWinNim(536870912), false, 'Test 32');
test(canWinNim(1000), false, 'Test 33');
test(canWinNim(262143), true, 'Test 34');
test(canWinNim(268435456), false, 'Test 35');
test(canWinNim(300), false, 'Test 36');
test(canWinNim(2147483643), true, 'Test 37');
test(canWinNim(33554432), false, 'Test 38');
test(canWinNim(333333333), true, 'Test 39');
test(canWinNim(2048), false, 'Test 40');
test(canWinNim(1048576), false, 'Test 41');
test(canWinNim(999), true, 'Test 42');
test(canWinNim(8191), true, 'Test 43');
test(canWinNim(36), false, 'Test 44');
test(canWinNim(1000000000), false, 'Test 45');
test(canWinNim(11), true, 'Test 46');
test(canWinNim(32768), false, 'Test 47');
test(canWinNim(200), false, 'Test 48');
test(canWinNim(1048575), true, 'Test 49');
test(canWinNim(500), false, 'Test 50');
test(canWinNim(29), true, 'Test 51');
test(canWinNim(131071), true, 'Test 52');
test(canWinNim(67108864), false, 'Test 53');
test(canWinNim(524288), false, 'Test 54');
test(canWinNim(524287), true, 'Test 55');
test(canWinNim(268435455), true, 'Test 56');
test(canWinNim(134217728), false, 'Test 57');
test(canWinNim(1073741823), true, 'Test 58');
test(canWinNim(80), false, 'Test 59');
test(canWinNim(16777215), true, 'Test 60');
test(canWinNim(256), false, 'Test 61');
test(canWinNim(131072), false, 'Test 62');
test(canWinNim(81), true, 'Test 63');
test(canWinNim(9), true, 'Test 64');
test(canWinNim(6), true, 'Test 65');
test(canWinNim(123456789), true, 'Test 66');
test(canWinNim(8388608), false, 'Test 67');
test(canWinNim(63), true, 'Test 68');
test(canWinNim(999999999), true, 'Test 69');
test(canWinNim(130), true, 'Test 70');
test(canWinNim(47), true, 'Test 71');
test(canWinNim(4096), false, 'Test 72');
test(canWinNim(67108863), true, 'Test 73');
test(canWinNim(32767), true, 'Test 74');
test(canWinNim(34), true, 'Test 75');
test(canWinNim(16384), false, 'Test 76');
test(canWinNim(123), true, 'Test 77');
test(canWinNim(16777216), false, 'Test 78');
test(canWinNim(4194303), true, 'Test 79');
test(canWinNim(30), true, 'Test 80');
test(canWinNim(345), true, 'Test 81');
test(canWinNim(2147483644), false, 'Test 82');
test(canWinNim(8192), false, 'Test 83');
test(canWinNim(65536), false, 'Test 84');
test(canWinNim(18), true, 'Test 85');
test(canWinNim(1023), true, 'Test 86');
test(canWinNim(127), true, 'Test 87');
test(canWinNim(2147483641), true, 'Test 88');
test(canWinNim(14), true, 'Test 89');
test(canWinNim(26), true, 'Test 90');
test(canWinNim(536870911), true, 'Test 91');
test(canWinNim(1000000), false, 'Test 92');
test(canWinNim(33554431), true, 'Test 93');
test(canWinNim(1337), true, 'Test 94');
test(canWinNim(2097152), false, 'Test 95');
test(canWinNim(12), false, 'Test 96');
test(canWinNim(50), true, 'Test 97');
test(canWinNim(134217727), true, 'Test 98');
test(canWinNim(99), true, 'Test 99');
test(canWinNim(8388607), true, 'Test 100');
test(canWinNim(2097151), true, 'Test 101');
test(canWinNim(4194304), false, 'Test 102');
test(canWinNim(64), false, 'Test 103');
test(canWinNim(2147483645), true, 'Test 104');
test(canWinNim(128), false, 'Test 105');
test(canWinNim(1073741824), false, 'Test 106');
test(canWinNim(22), true, 'Test 107');
test(canWinNim(262144), false, 'Test 108');
test(canWinNim(39), true, 'Test 109');
test(canWinNim(2147483640), false, 'Test 110');
test(canWinNim(2147483642), true, 'Test 111');
test(canWinNim(65535), true, 'Test 112');
test(canWinNim(512), false, 'Test 113');
test(canWinNim(38), true, 'Test 114');

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
