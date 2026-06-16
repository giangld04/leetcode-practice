// Test: 2139. Minimum Moves To Reach Target Score
// 140 test cases from LeetCodeDataset
// Run: node test.js

const { minMoves } = require("./solution");

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

console.log("\n2139. Minimum Moves To Reach Target Score\n");

test(minMoves(2, 1), 1, 'Test 1');
test(minMoves(6, 0), 5, 'Test 2');
test(minMoves(1000000000, 100), 41, 'Test 3');
test(minMoves(8, 3), 3, 'Test 4');
test(minMoves(100, 10), 8, 'Test 5');
test(minMoves(256, 8), 8, 'Test 6');
test(minMoves(3, 1), 2, 'Test 7');
test(minMoves(3, 2), 2, 'Test 8');
test(minMoves(7, 1), 4, 'Test 9');
test(minMoves(100, 5), 8, 'Test 10');
test(minMoves(10, 4), 4, 'Test 11');
test(minMoves(100, 0), 99, 'Test 12');
test(minMoves(100, 1), 50, 'Test 13');
test(minMoves(5, 0), 4, 'Test 14');
test(minMoves(7, 0), 6, 'Test 15');
test(minMoves(1, 5), 0, 'Test 16');
test(minMoves(1, 1), 0, 'Test 17');
test(minMoves(1, 10), 0, 'Test 18');
test(minMoves(20, 0), 19, 'Test 19');
test(minMoves(19, 2), 7, 'Test 20');
test(minMoves(6, 1), 3, 'Test 21');
test(minMoves(1023, 10), 18, 'Test 22');
test(minMoves(1000000000, 50), 41, 'Test 23');
test(minMoves(8193, 13), 14, 'Test 24');
test(minMoves(4095, 10), 22, 'Test 25');
test(minMoves(32768, 16), 15, 'Test 26');
test(minMoves(123456789, 30), 41, 'Test 27');
test(minMoves(987654321, 25), 66, 'Test 28');
test(minMoves(34359738367, 35), 68, 'Test 29');
test(minMoves(32767, 15), 28, 'Test 30');
test(minMoves(524288, 20), 19, 'Test 31');
test(minMoves(246813579, 0), 246813578, 'Test 32');
test(minMoves(333333333, 100), 43, 'Test 33');
test(minMoves(8192, 12), 13, 'Test 34');
test(minMoves(15, 1), 8, 'Test 35');
test(minMoves(63, 3), 12, 'Test 36');
test(minMoves(16, 4), 4, 'Test 37');
test(minMoves(4294967295, 32), 62, 'Test 38');
test(minMoves(2147483647, 20), 2086, 'Test 39');
test(minMoves(255, 7), 14, 'Test 40');
test(minMoves(2, 2), 1, 'Test 41');
test(minMoves(8192, 13), 13, 'Test 42');
test(minMoves(131072, 18), 17, 'Test 43');
test(minMoves(4, 1), 2, 'Test 44');
test(minMoves(131071, 17), 32, 'Test 45');
test(minMoves(17179869183, 34), 66, 'Test 46');
test(minMoves(8, 0), 7, 'Test 47');
test(minMoves(1, 0), 0, 'Test 48');
test(minMoves(999999999, 100), 49, 'Test 49');
test(minMoves(777777777, 75), 46, 'Test 50');
test(minMoves(95, 6), 11, 'Test 51');
test(minMoves(68719476735, 36), 70, 'Test 52');
test(minMoves(500, 9), 13, 'Test 53');
test(minMoves(999999999, 0), 999999998, 'Test 54');
test(minMoves(987654321, 50), 45, 'Test 55');
test(minMoves(19, 1), 10, 'Test 56');
test(minMoves(1001, 10), 15, 'Test 57');
test(minMoves(8, 4), 3, 'Test 58');
test(minMoves(16, 5), 4, 'Test 59');
test(minMoves(23, 3), 7, 'Test 60');
test(minMoves(65535, 16), 30, 'Test 61');
test(minMoves(16, 3), 4, 'Test 62');
test(minMoves(31, 3), 8, 'Test 63');
test(minMoves(500000, 15), 32, 'Test 64');
test(minMoves(47, 5), 9, 'Test 65');
test(minMoves(1023, 0), 1022, 'Test 66');
test(minMoves(199999999, 100), 46, 'Test 67');
test(minMoves(500, 0), 499, 'Test 68');
test(minMoves(987654321, 0), 987654320, 'Test 69');
test(minMoves(2048, 15), 11, 'Test 70');
test(minMoves(19, 3), 6, 'Test 71');
test(minMoves(123456789, 50), 41, 'Test 72');
test(minMoves(1023, 5), 40, 'Test 73');
test(minMoves(10000, 100), 17, 'Test 74');
test(minMoves(4, 2), 2, 'Test 75');
test(minMoves(15, 3), 6, 'Test 76');
test(minMoves(2147483647, 31), 60, 'Test 77');
test(minMoves(23456789, 20), 51, 'Test 78');
test(minMoves(1024, 512), 10, 'Test 79');
test(minMoves(8, 2), 3, 'Test 80');
test(minMoves(4095, 12), 22, 'Test 81');
test(minMoves(11, 2), 5, 'Test 82');
test(minMoves(511, 8), 16, 'Test 83');
test(minMoves(127, 4), 14, 'Test 84');
test(minMoves(1000000, 0), 999999, 'Test 85');
test(minMoves(9, 1), 5, 'Test 86');
test(minMoves(32768, 15), 15, 'Test 87');
test(minMoves(8192, 0), 8191, 'Test 88');
test(minMoves(123456, 20), 21, 'Test 89');
test(minMoves(987654321, 10), 964519, 'Test 90');
test(minMoves(262143, 18), 34, 'Test 91');
test(minMoves(128, 7), 7, 'Test 92');
test(minMoves(131072, 16), 17, 'Test 93');
test(minMoves(1048576, 21), 20, 'Test 94');
test(minMoves(31, 5), 8, 'Test 95');
test(minMoves(987654321, 45), 45, 'Test 96');
test(minMoves(65536, 17), 16, 'Test 97');
test(minMoves(127, 6), 12, 'Test 98');
test(minMoves(8589934591, 33), 64, 'Test 99');
test(minMoves(2, 0), 1, 'Test 100');
test(minMoves(16, 0), 15, 'Test 101');
test(minMoves(1023, 9), 18, 'Test 102');
test(minMoves(500000000, 10), 488291, 'Test 103');
test(minMoves(25, 3), 6, 'Test 104');
test(minMoves(1024, 10), 10, 'Test 105');
test(minMoves(8191, 10), 26, 'Test 106');
test(minMoves(16384, 16), 14, 'Test 107');
test(minMoves(678901234, 50), 45, 'Test 108');
test(minMoves(7, 3), 4, 'Test 109');
test(minMoves(63, 5), 10, 'Test 110');
test(minMoves(999999999, 1), 500000000, 'Test 111');
test(minMoves(1048575, 20), 38, 'Test 112');
test(minMoves(64, 6), 6, 'Test 113');
test(minMoves(137438953471, 37), 72, 'Test 114');
test(minMoves(135792468, 10), 132623, 'Test 115');
test(minMoves(8, 1), 4, 'Test 116');
test(minMoves(1048576, 20), 20, 'Test 117');
test(minMoves(123456789, 25), 41, 'Test 118');
test(minMoves(888888888, 88), 46, 'Test 119');
test(minMoves(32, 5), 5, 'Test 120');
test(minMoves(65535, 0), 65534, 'Test 121');
test(minMoves(1000000000, 1), 500000000, 'Test 122');
test(minMoves(16, 1), 8, 'Test 123');
test(minMoves(2047, 10), 20, 'Test 124');
test(minMoves(2048, 10), 11, 'Test 125');
test(minMoves(16, 2), 5, 'Test 126');
test(minMoves(1000, 10), 14, 'Test 127');
test(minMoves(1000000000, 0), 999999999, 'Test 128');
test(minMoves(999999999, 50), 49, 'Test 129');
test(minMoves(65535, 15), 30, 'Test 130');
test(minMoves(7, 2), 4, 'Test 131');
test(minMoves(31, 4), 8, 'Test 132');
test(minMoves(262144, 19), 18, 'Test 133');
test(minMoves(524287, 19), 36, 'Test 134');
test(minMoves(19, 4), 6, 'Test 135');
test(minMoves(268435456, 28), 28, 'Test 136');
test(minMoves(1000000000, 30), 41, 'Test 137');
test(minMoves(512, 9), 9, 'Test 138');
test(minMoves(16383, 14), 26, 'Test 139');
test(minMoves(8973424, 50), 32, 'Test 140');

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
