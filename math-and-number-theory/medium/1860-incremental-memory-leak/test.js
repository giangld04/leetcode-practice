// Test: 1860. Incremental Memory Leak
// 82 test cases from LeetCodeDataset
// Run: node test.js

const { memLeak } = require("./solution");

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

console.log("\n1860. Incremental Memory Leak\n");

test(memLeak(0, 0), [1, 0, 0], 'Test 1');
test(memLeak(2147483647, 2147483647), [92681, 88047, 41707], 'Test 2');
test(memLeak(1000000000, 1000000000), [63245, 49116, 17494], 'Test 3');
test(memLeak(15, 10), [7, 4, 0], 'Test 4');
test(memLeak(100, 100), [20, 0, 10], 'Test 5');
test(memLeak(10, 10), [6, 1, 4], 'Test 6');
test(memLeak(1073741823, 1073741823), [65535, 65534, 32767], 'Test 7');
test(memLeak(1, 1), [2, 0, 1], 'Test 8');
test(memLeak(8, 11), [6, 0, 4], 'Test 9');
test(memLeak(1073741824, 1073741824), [65536, 0, 32768], 'Test 10');
test(memLeak(15, 15), [7, 6, 3], 'Test 11');
test(memLeak(1, 2), [2, 1, 1], 'Test 12');
test(memLeak(15, 5), [6, 0, 5], 'Test 13');
test(memLeak(100, 50), [17, 3, 11], 'Test 14');
test(memLeak(2, 2), [3, 1, 0], 'Test 15');
test(memLeak(1000000000, 500000000), [54772, 3472, 37922], 'Test 16');
test(memLeak(0, 1000000), [1414, 0, 1009], 'Test 17');
test(memLeak(1024, 512), [55, 12, 39], 'Test 18');
test(memLeak(123456789, 987654321), [47140, 11258, 33622], 'Test 19');
test(memLeak(256, 255), [32, 15, 0], 'Test 20');
test(memLeak(1000000000, 999999999), [63245, 17493, 49116], 'Test 21');
test(memLeak(2048, 512), [71, 67, 8], 'Test 22');
test(memLeak(5, 1), [3, 2, 1], 'Test 23');
test(memLeak(500000000, 499999999), [44721, 8039, 30400], 'Test 24');
test(memLeak(100000, 100001), [632, 460, 145], 'Test 25');
test(memLeak(1073741823, 1073741824), [65536, 32767, 0], 'Test 26');
test(memLeak(2147483647, 1073741824), [80264, 34153, 76602], 'Test 27');
test(memLeak(1000000, 0), [1414, 1009, 0], 'Test 28');
test(memLeak(5, 5), [4, 1, 3], 'Test 29');
test(memLeak(0, 100), [14, 0, 9], 'Test 30');
test(memLeak(1000000000, 2000000000), [77459, 17790, 72599], 'Test 31');
test(memLeak(500000000, 500000001), [44721, 8040, 30401], 'Test 32');
test(memLeak(500000, 500000), [1414, 151, 858], 'Test 33');
test(memLeak(2000000000, 1000000000), [77459, 72599, 17790], 'Test 34');
test(memLeak(1, 0), [2, 0, 0], 'Test 35');
test(memLeak(4000000000, 3000000000), [118321, 102440, 27200], 'Test 36');
test(memLeak(1000000, 1000000), [2000, 0, 1000], 'Test 37');
test(memLeak(1, 1), Error: Solution.memLeak[] missing 1 required positional argument: 'memory2', 'Test 38');
test(memLeak(3000000000, 1000000000), [89442, 62751, 46288], 'Test 39');
test(memLeak(2147483647, 0), [65536, 32767, 0], 'Test 40');
test(memLeak(500000000, 500000000), [44721, 30400, 8040], 'Test 41');
test(memLeak(1234567890, 1234567890), [70272, 29394, 64530], 'Test 42');
test(memLeak(1024, 1023), [64, 31, 0], 'Test 43');
test(memLeak(1023, 1024), [64, 31, 0], 'Test 44');
test(memLeak(1048576, 1048576), [2048, 0, 1024], 'Test 45');
test(memLeak(512, 1024), [55, 39, 12], 'Test 46');
test(memLeak(1000000000, 1000000001), [63245, 17494, 49117], 'Test 47');
test(memLeak(4, 5), [4, 2, 1], 'Test 48');
test(memLeak(0, 2147483647), [65536, 0, 32767], 'Test 49');
test(memLeak(512, 2048), [71, 8, 67], 'Test 50');
test(memLeak(1000000, 999999), [2000, 999, 0], 'Test 51');
test(memLeak(2147483647, 2147483646), [92681, 41706, 88047], 'Test 52');
test(memLeak(4, 4), [4, 0, 2], 'Test 53');
test(memLeak(4096, 2048), [110, 102, 47], 'Test 54');
test(memLeak(1024, 1024), [64, 0, 32], 'Test 55');
test(memLeak(2147483646, 1), [65536, 32766, 1], 'Test 56');
test(memLeak(234567890, 234567890), [30631, 18665, 3350], 'Test 57');
test(memLeak(2147483646, 2147483646), [92681, 88046, 41706], 'Test 58');
test(memLeak(1, 1000000000), [44721, 1, 38440], 'Test 59');
test(memLeak(999999999, 1), [44721, 38439, 1], 'Test 60');
test(memLeak(500, 500), [44, 16, 38], 'Test 61');
test(memLeak(2, 1), [2, 1, 1], 'Test 62');
test(memLeak(128, 256), [27, 23, 10], 'Test 63');
test(memLeak(1, 1073741823), [46341, 1, 20853], 'Test 64');
test(memLeak(100000, 100000), [632, 144, 460], 'Test 65');
test(memLeak(4294967295, 4294967295), [131071, 131070, 65535], 'Test 66');
test(memLeak(0, 1000), [45, 0, 10], 'Test 67');
test(memLeak(2147483646, 2147483645), [92681, 41705, 88046], 'Test 68');
test(memLeak(10, 1), [5, 0, 1], 'Test 69');
test(memLeak(0, 1), [2, 0, 0], 'Test 70');
test(memLeak(1000000001, 1000000000), [63245, 17494, 49117], 'Test 71');
test(memLeak(1, 2147483647), [65536, 1, 32767], 'Test 72');
test(memLeak(100, 0), [14, 9, 0], 'Test 73');
test(memLeak(2147483646, 2147483647), [92681, 41706, 88047], 'Test 74');
test(memLeak(1073741823, 1073741825), [65536, 0, 32768], 'Test 75');
test(memLeak(10, 15), [7, 0, 4], 'Test 76');
test(memLeak(9, 9), [6, 0, 3], 'Test 77');
test(memLeak(1000, 1000), [63, 39, 8], 'Test 78');
test(memLeak(2048, 4096), [110, 47, 102], 'Test 79');
test(memLeak(1000, 0), [45, 10, 0], 'Test 80');
test(memLeak(1, 5), [3, 1, 2], 'Test 81');
test(memLeak(1000000000, 1), [44721, 38440, 1], 'Test 82');

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
