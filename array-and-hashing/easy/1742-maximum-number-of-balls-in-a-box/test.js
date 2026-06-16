// Test: 1742. Maximum Number Of Balls In A Box
// 86 test cases from LeetCodeDataset
// Run: node test.js

const { countBalls } = require("./solution");

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

console.log("\n1742. Maximum Number Of Balls In A Box\n");

test(countBalls(999, 1000), 1, 'Test 1');
test(countBalls(1000, 10000), 615, 'Test 2');
test(countBalls(50000, 50500), 44, 'Test 3');
test(countBalls(99, 999), 70, 'Test 4');
test(countBalls(500, 550), 6, 'Test 5');
test(countBalls(9999, 100000), 5520, 'Test 6');
test(countBalls(1, 10), 2, 'Test 7');
test(countBalls(100, 200), 10, 'Test 8');
test(countBalls(99, 199), 10, 'Test 9');
test(countBalls(1, 100), 10, 'Test 10');
test(countBalls(1, 20), 3, 'Test 11');
test(countBalls(10, 100), 9, 'Test 12');
test(countBalls(50, 150), 10, 'Test 13');
test(countBalls(5, 15), 2, 'Test 14');
test(countBalls(19, 28), 2, 'Test 15');
test(countBalls(45678, 98765), 3544, 'Test 16');
test(countBalls(40000, 50000), 670, 'Test 17');
test(countBalls(10000, 20000), 670, 'Test 18');
test(countBalls(33333, 44444), 782, 'Test 19');
test(countBalls(67890, 67990), 11, 'Test 20');
test(countBalls(54321, 54421), 10, 'Test 21');
test(countBalls(88888, 88988), 10, 'Test 22');
test(countBalls(100, 100), 1, 'Test 23');
test(countBalls(99999, 100000), 1, 'Test 24');
test(countBalls(9995, 10005), 1, 'Test 25');
test(countBalls(43210, 43250), 5, 'Test 26');
test(countBalls(99995, 100005), 1, 'Test 27');
test(countBalls(30000, 35000), 365, 'Test 28');
test(countBalls(98765, 98865), 10, 'Test 29');
test(countBalls(54321, 54341), 3, 'Test 30');
test(countBalls(11111, 11115), 1, 'Test 31');
test(countBalls(10000, 99999), 5520, 'Test 32');
test(countBalls(66666, 66766), 10, 'Test 33');
test(countBalls(77777, 77800), 3, 'Test 34');
test(countBalls(99990, 100000), 1, 'Test 35');
test(countBalls(11111, 11200), 9, 'Test 36');
test(countBalls(5000, 6000), 75, 'Test 37');
test(countBalls(56789, 56800), 2, 'Test 38');
test(countBalls(55555, 66666), 782, 'Test 39');
test(countBalls(9990, 10000), 1, 'Test 40');
test(countBalls(12345, 54321), 2854, 'Test 41');
test(countBalls(50000, 50100), 10, 'Test 42');
test(countBalls(23456, 23460), 1, 'Test 43');
test(countBalls(500, 5000), 340, 'Test 44');
test(countBalls(5000, 5100), 10, 'Test 45');
test(countBalls(90000, 95000), 365, 'Test 46');
test(countBalls(10000, 100000), 5520, 'Test 47');
test(countBalls(9999, 10000), 1, 'Test 48');
test(countBalls(999, 1009), 1, 'Test 49');
test(countBalls(12345, 12395), 6, 'Test 50');
test(countBalls(1, 99999), 6000, 'Test 51');
test(countBalls(12345, 12345), 1, 'Test 52');
test(countBalls(1, 1000), 75, 'Test 53');
test(countBalls(22222, 22322), 10, 'Test 54');
test(countBalls(12345, 67890), 3699, 'Test 55');
test(countBalls(56789, 56799), 2, 'Test 56');
test(countBalls(100, 1000), 70, 'Test 57');
test(countBalls(11111, 22222), 754, 'Test 58');
test(countBalls(77777, 77877), 10, 'Test 59');
test(countBalls(100000, 100000), 1, 'Test 60');
test(countBalls(250, 750), 46, 'Test 61');
test(countBalls(30000, 40000), 670, 'Test 62');
test(countBalls(99900, 100100), 10, 'Test 63');
test(countBalls(100000, 100050), 6, 'Test 64');
test(countBalls(12345, 12445), 11, 'Test 65');
test(countBalls(5000, 5050), 6, 'Test 66');
test(countBalls(995, 1005), 1, 'Test 67');
test(countBalls(1000, 1050), 6, 'Test 68');
test(countBalls(33333, 33433), 10, 'Test 69');
test(countBalls(1234, 5678), 344, 'Test 70');
test(countBalls(8888, 8900), 2, 'Test 71');
test(countBalls(11111, 11211), 10, 'Test 72');
test(countBalls(999, 1001), 1, 'Test 73');
test(countBalls(67890, 78900), 749, 'Test 74');
test(countBalls(20000, 30000), 670, 'Test 75');
test(countBalls(50000, 51000), 75, 'Test 76');
test(countBalls(99, 101), 1, 'Test 77');
test(countBalls(88888, 99999), 736, 'Test 78');
test(countBalls(1234, 1244), 2, 'Test 79');
test(countBalls(44444, 55555), 785, 'Test 80');
test(countBalls(300, 600), 28, 'Test 81');
test(countBalls(12345, 12355), 2, 'Test 82');
test(countBalls(70000, 80000), 670, 'Test 83');
test(countBalls(88888, 88999), 11, 'Test 84');
test(countBalls(20000, 25000), 365, 'Test 85');
test(countBalls(123, 456), 33, 'Test 86');

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
