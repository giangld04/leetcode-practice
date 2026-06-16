// Test: 2338. Count The Number Of Ideal Arrays
// 80 test cases from LeetCodeDataset
// Run: node test.js

const { idealArrays } = require("./solution");

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

console.log("\n2338. Count The Number Of Ideal Arrays\n");

test(idealArrays(7, 7), 106, 'Test 1');
test(idealArrays(2, 5), 10, 'Test 2');
test(idealArrays(3, 7), 28, 'Test 3');
test(idealArrays(3, 6), 25, 'Test 4');
test(idealArrays(6, 12), 327, 'Test 5');
test(idealArrays(10, 5), 86, 'Test 6');
test(idealArrays(4, 4), 19, 'Test 7');
test(idealArrays(10, 10), 571, 'Test 8');
test(idealArrays(4, 7), 43, 'Test 9');
test(idealArrays(3, 2), 4, 'Test 10');
test(idealArrays(10000, 10000), 22940607, 'Test 11');
test(idealArrays(4, 10), 89, 'Test 12');
test(idealArrays(5, 3), 11, 'Test 13');
test(idealArrays(2000, 10), 347343994, 'Test 14');
test(idealArrays(15, 10), 1431, 'Test 15');
test(idealArrays(7, 20), 1191, 'Test 16');
test(idealArrays(8000, 8000), 106406983, 'Test 17');
test(idealArrays(8, 16), 1115, 'Test 18');
test(idealArrays(6000, 6000), 883250062, 'Test 19');
test(idealArrays(2000, 5000), 716352377, 'Test 20');
test(idealArrays(10000, 1), 1, 'Test 21');
test(idealArrays(100, 50), 604383896, 'Test 22');
test(idealArrays(1000, 4), 502501, 'Test 23');
test(idealArrays(9, 5), 73, 'Test 24');
test(idealArrays(7, 15), 575, 'Test 25');
test(idealArrays(10, 20), 3176, 'Test 26');
test(idealArrays(2000, 1000), 534638579, 'Test 27');
test(idealArrays(10, 15), 1341, 'Test 28');
test(idealArrays(50, 20), 519126, 'Test 29');
test(idealArrays(8, 3), 17, 'Test 30');
test(idealArrays(20, 2), 21, 'Test 31');
test(idealArrays(6, 3), 13, 'Test 32');
test(idealArrays(100, 3), 201, 'Test 33');
test(idealArrays(10000, 5000), 22892639, 'Test 34');
test(idealArrays(9999, 10000), 667133522, 'Test 35');
test(idealArrays(6000, 3000), 80648523, 'Test 36');
test(idealArrays(3000, 3000), 806624302, 'Test 37');
test(idealArrays(2000, 2000), 585712681, 'Test 38');
test(idealArrays(3, 1), 1, 'Test 39');
test(idealArrays(5000, 5), 12517501, 'Test 40');
test(idealArrays(5000, 2000), 802769368, 'Test 41');
test(idealArrays(1000, 2000), 228299266, 'Test 42');
test(idealArrays(8, 20), 1707, 'Test 43');
test(idealArrays(50, 25), 1630451, 'Test 44');
test(idealArrays(100, 2), 101, 'Test 45');
test(idealArrays(5, 1), 1, 'Test 46');
test(idealArrays(6, 8), 138, 'Test 47');
test(idealArrays(5, 9999), 6309016, 'Test 48');
test(idealArrays(100, 5), 5351, 'Test 49');
test(idealArrays(500, 3), 1001, 'Test 50');
test(idealArrays(2000, 50), 74895101, 'Test 51');
test(idealArrays(100, 100), 959337187, 'Test 52');
test(idealArrays(5, 100), 7537, 'Test 53');
test(idealArrays(100, 10), 202201, 'Test 54');
test(idealArrays(9, 9), 373, 'Test 55');
test(idealArrays(5000, 20), 436322284, 'Test 56');
test(idealArrays(2000, 10000), 239341549, 'Test 57');
test(idealArrays(20, 50), 388980, 'Test 58');
test(idealArrays(10000, 500), 397370814, 'Test 59');
test(idealArrays(1000, 1000), 91997497, 'Test 60');
test(idealArrays(7500, 7500), 143340271, 'Test 61');
test(idealArrays(25, 30), 153176, 'Test 62');
test(idealArrays(500, 500), 652553975, 'Test 63');
test(idealArrays(5000, 100), 853200627, 'Test 64');
test(idealArrays(5000, 5000), 144035088, 'Test 65');
test(idealArrays(1000, 100), 607180637, 'Test 66');
test(idealArrays(50, 100), 268368886, 'Test 67');
test(idealArrays(10000, 100), 200548806, 'Test 68');
test(idealArrays(10, 100), 105568, 'Test 69');
test(idealArrays(2, 10000), 93668, 'Test 70');
test(idealArrays(10, 10000), 466423769, 'Test 71');
test(idealArrays(1000, 10000), 888200964, 'Test 72');
test(idealArrays(15, 15), 3711, 'Test 73');
test(idealArrays(3000, 6000), 321990518, 'Test 74');
test(idealArrays(8, 2), 9, 'Test 75');
test(idealArrays(30, 30), 290436, 'Test 76');
test(idealArrays(1000, 10), 170172001, 'Test 77');
test(idealArrays(7500, 10000), 430119293, 'Test 78');
test(idealArrays(8000, 9000), 358648747, 'Test 79');
test(idealArrays(7500, 5000), 777616479, 'Test 80');

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
