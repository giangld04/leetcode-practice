// Test: 808. Soup Servings
// 55 test cases from LeetCodeDataset
// Run: node test.js

const { soupServings } = require("./solution");

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

console.log("\n808. Soup Servings\n");

test(soupServings(0), 0.5, 'Test 1');
test(soupServings(125), 0.7421875, 'Test 2');
test(soupServings(200), 0.796875, 'Test 3');
test(soupServings(100), 0.71875, 'Test 4');
test(soupServings(1000000000), 1, 'Test 5');
test(soupServings(50), 0.625, 'Test 6');
test(soupServings(625), 0.9417028725147247, 'Test 7');
test(soupServings(1000000003), 1, 'Test 8');
test(soupServings(999999999), 1, 'Test 9');
test(soupServings(12345), 1, 'Test 10');
test(soupServings(999999996), 1, 'Test 11');
test(soupServings(7500), 1, 'Test 12');
test(soupServings(2000), 0.9977163163248763, 'Test 13');
test(soupServings(300000), 1, 'Test 14');
test(soupServings(50000), 1, 'Test 15');
test(soupServings(1000), 0.9765650521094358, 'Test 16');
test(soupServings(1000000002), 1, 'Test 17');
test(soupServings(3333), 0.9998851608898072, 'Test 18');
test(soupServings(250000), 1, 'Test 19');
test(soupServings(999999998), 1, 'Test 20');
test(soupServings(3000), 0.9997529725570642, 'Test 21');
test(soupServings(875000000), 1, 'Test 22');
test(soupServings(1200), 0.9855064973468473, 'Test 23');
test(soupServings(750000), 1, 'Test 24');
test(soupServings(10000), 1, 'Test 25');
test(soupServings(750000000), 1, 'Test 26');
test(soupServings(12345678), 1, 'Test 27');
test(soupServings(250), 0.82763671875, 'Test 28');
test(soupServings(999999995), 1, 'Test 29');
test(soupServings(100000), 1, 'Test 30');
test(soupServings(20000), 1, 'Test 31');
test(soupServings(375), 0.88482666015625, 'Test 32');
test(soupServings(999), 0.9765650521094358, 'Test 33');
test(soupServings(5000), 1, 'Test 34');
test(soupServings(75000), 1, 'Test 35');
test(soupServings(25000), 1, 'Test 36');
test(soupServings(9999), 1, 'Test 37');
test(soupServings(1000000001), 1, 'Test 38');
test(soupServings(987654321), 1, 'Test 39');
test(soupServings(800), 0.961617625085637, 'Test 40');
test(soupServings(567890123), 1, 'Test 41');
test(soupServings(2500), 0.99925483400331, 'Test 42');
test(soupServings(500000), 1, 'Test 43');
test(soupServings(999999997), 1, 'Test 44');
test(soupServings(400), 0.8896331787109375, 'Test 45');
test(soupServings(500000000), 1, 'Test 46');
test(soupServings(1000000), 1, 'Test 47');
test(soupServings(750), 0.9564644806087017, 'Test 48');
test(soupServings(123456789), 1, 'Test 49');
test(soupServings(1234567), 1, 'Test 50');
test(soupServings(999999), 1, 'Test 51');
test(soupServings(123456), 1, 'Test 52');
test(soupServings(500), 0.916344165802002, 'Test 53');
test(soupServings(25), 0.625, 'Test 54');
test(soupServings(1500), 0.9928319024738018, 'Test 55');

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
