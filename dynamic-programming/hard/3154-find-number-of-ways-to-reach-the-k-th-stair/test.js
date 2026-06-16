// Test: 3154. Find Number Of Ways To Reach The K Th Stair
// 79 test cases from LeetCodeDataset
// Run: node test.js

const { waysToReachStair } = require("./solution");

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

console.log("\n3154. Find Number Of Ways To Reach The K Th Stair\n");

test(waysToReachStair(1000), 0, 'Test 1');
test(waysToReachStair(100), 0, 'Test 2');
test(waysToReachStair(20), 0, 'Test 3');
test(waysToReachStair(1000000000), 0, 'Test 4');
test(waysToReachStair(1), 4, 'Test 5');
test(waysToReachStair(10), 0, 'Test 6');
test(waysToReachStair(10000), 0, 'Test 7');
test(waysToReachStair(500), 0, 'Test 8');
test(waysToReachStair(1000000), 0, 'Test 9');
test(waysToReachStair(10000000), 0, 'Test 10');
test(waysToReachStair(3), 3, 'Test 11');
test(waysToReachStair(100000000), 0, 'Test 12');
test(waysToReachStair(0), 2, 'Test 13');
test(waysToReachStair(2), 4, 'Test 14');
test(waysToReachStair(100000), 0, 'Test 15');
test(waysToReachStair(5), 4, 'Test 16');
test(waysToReachStair(4), 2, 'Test 17');
test(waysToReachStair(50), 0, 'Test 18');
test(waysToReachStair(127), 8, 'Test 19');
test(waysToReachStair(8388608), 1, 'Test 20');
test(waysToReachStair(63), 7, 'Test 21');
test(waysToReachStair(65536), 1, 'Test 22');
test(waysToReachStair(16384), 1, 'Test 23');
test(waysToReachStair(5000), 0, 'Test 24');
test(waysToReachStair(60000000), 0, 'Test 25');
test(waysToReachStair(4194304), 1, 'Test 26');
test(waysToReachStair(8191), 14, 'Test 27');
test(waysToReachStair(30000000), 0, 'Test 28');
test(waysToReachStair(750000), 0, 'Test 29');
test(waysToReachStair(4096), 1, 'Test 30');
test(waysToReachStair(65535), 17, 'Test 31');
test(waysToReachStair(536870912), 1, 'Test 32');
test(waysToReachStair(2048), 1, 'Test 33');
test(waysToReachStair(1000001), 0, 'Test 34');
test(waysToReachStair(8192), 1, 'Test 35');
test(waysToReachStair(20000000), 0, 'Test 36');
test(waysToReachStair(5000000), 0, 'Test 37');
test(waysToReachStair(32767), 16, 'Test 38');
test(waysToReachStair(1000100), 0, 'Test 39');
test(waysToReachStair(524288), 1, 'Test 40');
test(waysToReachStair(1000010), 0, 'Test 41');
test(waysToReachStair(9), 0, 'Test 42');
test(waysToReachStair(32768), 1, 'Test 43');
test(waysToReachStair(23), 0, 'Test 44');
test(waysToReachStair(500000), 0, 'Test 45');
test(waysToReachStair(1073741824), 1, 'Test 46');
test(waysToReachStair(131072), 1, 'Test 47');
test(waysToReachStair(268435456), 1, 'Test 48');
test(waysToReachStair(4095), 13, 'Test 49');
test(waysToReachStair(15), 5, 'Test 50');
test(waysToReachStair(33554432), 1, 'Test 51');
test(waysToReachStair(999999), 0, 'Test 52');
test(waysToReachStair(64), 1, 'Test 53');
test(waysToReachStair(70000000), 0, 'Test 54');
test(waysToReachStair(31), 6, 'Test 55');
test(waysToReachStair(1100000), 0, 'Test 56');
test(waysToReachStair(50000000), 0, 'Test 57');
test(waysToReachStair(16), 1, 'Test 58');
test(waysToReachStair(2097152), 1, 'Test 59');
test(waysToReachStair(999999999), 0, 'Test 60');
test(waysToReachStair(256), 1, 'Test 61');
test(waysToReachStair(262144), 1, 'Test 62');
test(waysToReachStair(134217728), 1, 'Test 63');
test(waysToReachStair(1001000), 0, 'Test 64');
test(waysToReachStair(90000000), 0, 'Test 65');
test(waysToReachStair(2047), 12, 'Test 66');
test(waysToReachStair(30), 15, 'Test 67');
test(waysToReachStair(1024), 1, 'Test 68');
test(waysToReachStair(67108864), 1, 'Test 69');
test(waysToReachStair(7), 4, 'Test 70');
test(waysToReachStair(1048576), 1, 'Test 71');
test(waysToReachStair(255), 9, 'Test 72');
test(waysToReachStair(512), 1, 'Test 73');
test(waysToReachStair(80000000), 0, 'Test 74');
test(waysToReachStair(1023), 11, 'Test 75');
test(waysToReachStair(16777216), 1, 'Test 76');
test(waysToReachStair(40000000), 0, 'Test 77');
test(waysToReachStair(511), 10, 'Test 78');
test(waysToReachStair(1010000), 0, 'Test 79');

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
