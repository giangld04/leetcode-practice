// Test: 793. Preimage Size Of Factorial Zeroes Function
// 104 test cases from LeetCodeDataset
// Run: node test.js

const { preimageSizeFZF } = require("./solution");

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

console.log("\n793. Preimage Size Of Factorial Zeroes Function\n");

test(preimageSizeFZF(100), 5, 'Test 1');
test(preimageSizeFZF(1), 5, 'Test 2');
test(preimageSizeFZF(10000), 5, 'Test 3');
test(preimageSizeFZF(1000000), 5, 'Test 4');
test(preimageSizeFZF(3), 5, 'Test 5');
test(preimageSizeFZF(0), 5, 'Test 6');
test(preimageSizeFZF(1000), 5, 'Test 7');
test(preimageSizeFZF(100000), 5, 'Test 8');
test(preimageSizeFZF(5), 0, 'Test 9');
test(preimageSizeFZF(25), 5, 'Test 10');
test(preimageSizeFZF(10), 5, 'Test 11');
test(preimageSizeFZF(48828125), 5, 'Test 12');
test(preimageSizeFZF(1192092), 5, 'Test 13');
test(preimageSizeFZF(9999), 5, 'Test 14');
test(preimageSizeFZF(50), 5, 'Test 15');
test(preimageSizeFZF(100000000), 5, 'Test 16');
test(preimageSizeFZF(2384185), 5, 'Test 17');
test(preimageSizeFZF(6), 5, 'Test 18');
test(preimageSizeFZF(1000045), 5, 'Test 19');
test(preimageSizeFZF(19073486), 5, 'Test 20');
test(preimageSizeFZF(13), 5, 'Test 21');
test(preimageSizeFZF(1000025), 5, 'Test 22');
test(preimageSizeFZF(625), 5, 'Test 23');
test(preimageSizeFZF(3125), 5, 'Test 24');
test(preimageSizeFZF(1000035), 0, 'Test 25');
test(preimageSizeFZF(5000), 5, 'Test 26');
test(preimageSizeFZF(78125), 5, 'Test 27');
test(preimageSizeFZF(1249), 5, 'Test 28');
test(preimageSizeFZF(10000000), 5, 'Test 29');
test(preimageSizeFZF(200000), 5, 'Test 30');
test(preimageSizeFZF(1250), 5, 'Test 31');
test(preimageSizeFZF(4768371), 5, 'Test 32');
test(preimageSizeFZF(50000001), 5, 'Test 33');
test(preimageSizeFZF(80000), 5, 'Test 34');
test(preimageSizeFZF(750000), 5, 'Test 35');
test(preimageSizeFZF(4096), 5, 'Test 36');
test(preimageSizeFZF(627), 5, 'Test 37');
test(preimageSizeFZF(1000050), 5, 'Test 38');
test(preimageSizeFZF(536870912), 5, 'Test 39');
test(preimageSizeFZF(2500000), 5, 'Test 40');
test(preimageSizeFZF(2048), 5, 'Test 41');
test(preimageSizeFZF(1000015), 5, 'Test 42');
test(preimageSizeFZF(152587890), 5, 'Test 43');
test(preimageSizeFZF(123456789), 5, 'Test 44');
test(preimageSizeFZF(1000001), 5, 'Test 45');
test(preimageSizeFZF(5000000), 5, 'Test 46');
test(preimageSizeFZF(31250), 5, 'Test 47');
test(preimageSizeFZF(1000000000), 5, 'Test 48');
test(preimageSizeFZF(20000), 5, 'Test 49');
test(preimageSizeFZF(1000005), 5, 'Test 50');
test(preimageSizeFZF(2), 5, 'Test 51');
test(preimageSizeFZF(1000020), 5, 'Test 52');
test(preimageSizeFZF(99999), 5, 'Test 53');
test(preimageSizeFZF(610351562), 5, 'Test 54');
test(preimageSizeFZF(2499999), 5, 'Test 55');
test(preimageSizeFZF(1000010), 0, 'Test 56');
test(preimageSizeFZF(9), 5, 'Test 57');
test(preimageSizeFZF(123456), 5, 'Test 58');
test(preimageSizeFZF(987654321), 5, 'Test 59');
test(preimageSizeFZF(258), 5, 'Test 60');
test(preimageSizeFZF(500000), 5, 'Test 61');
test(preimageSizeFZF(9765625), 5, 'Test 62');
test(preimageSizeFZF(32), 5, 'Test 63');
test(preimageSizeFZF(268435456), 5, 'Test 64');
test(preimageSizeFZF(101), 5, 'Test 65');
test(preimageSizeFZF(76293945), 5, 'Test 66');
test(preimageSizeFZF(99999999), 5, 'Test 67');
test(preimageSizeFZF(15625), 5, 'Test 68');
test(preimageSizeFZF(999999), 5, 'Test 69');
test(preimageSizeFZF(64), 5, 'Test 70');
test(preimageSizeFZF(390625), 5, 'Test 71');
test(preimageSizeFZF(38146972), 5, 'Test 72');
test(preimageSizeFZF(2147483647), 5, 'Test 73');
test(preimageSizeFZF(1953125), 5, 'Test 74');
test(preimageSizeFZF(31), 5, 'Test 75');
test(preimageSizeFZF(50000000), 5, 'Test 76');
test(preimageSizeFZF(1220703125), 5, 'Test 77');
test(preimageSizeFZF(250), 5, 'Test 78');
test(preimageSizeFZF(125), 5, 'Test 79');
test(preimageSizeFZF(16), 5, 'Test 80');
test(preimageSizeFZF(999999999), 5, 'Test 81');
test(preimageSizeFZF(256), 5, 'Test 82');
test(preimageSizeFZF(1001), 5, 'Test 83');
test(preimageSizeFZF(249), 5, 'Test 84');
test(preimageSizeFZF(9536743), 5, 'Test 85');
test(preimageSizeFZF(500000000), 5, 'Test 86');
test(preimageSizeFZF(1000030), 5, 'Test 87');
test(preimageSizeFZF(20), 5, 'Test 88');
test(preimageSizeFZF(1024), 5, 'Test 89');
test(preimageSizeFZF(39062), 5, 'Test 90');
test(preimageSizeFZF(244140625), 5, 'Test 91');
test(preimageSizeFZF(500), 5, 'Test 92');
test(preimageSizeFZF(1000040), 5, 'Test 93');
test(preimageSizeFZF(21), 5, 'Test 94');
test(preimageSizeFZF(800000000), 5, 'Test 95');
test(preimageSizeFZF(12345), 5, 'Test 96');
test(preimageSizeFZF(4), 5, 'Test 97');
test(preimageSizeFZF(129), 0, 'Test 98');
test(preimageSizeFZF(305175781), 5, 'Test 99');
test(preimageSizeFZF(8), 5, 'Test 100');
test(preimageSizeFZF(512), 5, 'Test 101');
test(preimageSizeFZF(11), 0, 'Test 102');
test(preimageSizeFZF(128), 5, 'Test 103');
test(preimageSizeFZF(50000), 5, 'Test 104');

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
