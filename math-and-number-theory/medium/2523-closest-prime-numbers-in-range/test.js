// Test: 2523. Closest Prime Numbers In Range
// 95 test cases from LeetCodeDataset
// Run: node test.js

const { closestPrimes } = require("./solution");

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

console.log("\n2523. Closest Prime Numbers In Range\n");

test(closestPrimes(500, 550), [521, 523], 'Test 1');
test(closestPrimes(1000, 1100), [1019, 1021], 'Test 2');
test(closestPrimes(10000, 10020), [10007, 10009], 'Test 3');
test(closestPrimes(1000, 1010), [-1, -1], 'Test 4');
test(closestPrimes(999983, 999999), [-1, -1], 'Test 5');
test(closestPrimes(20, 30), [23, 29], 'Test 6');
test(closestPrimes(100, 110), [101, 103], 'Test 7');
test(closestPrimes(500, 600), [521, 523], 'Test 8');
test(closestPrimes(1, 10), [2, 3], 'Test 9');
test(closestPrimes(7, 11), [7, 11], 'Test 10');
test(closestPrimes(500, 520), [503, 509], 'Test 11');
test(closestPrimes(30, 50), [41, 43], 'Test 12');
test(closestPrimes(5000, 6000), [5009, 5011], 'Test 13');
test(closestPrimes(100000, 100010), [-1, -1], 'Test 14');
test(closestPrimes(500, 510), [503, 509], 'Test 15');
test(closestPrimes(1000, 1020), [1009, 1013], 'Test 16');
test(closestPrimes(100000, 100020), [100003, 100019], 'Test 17');
test(closestPrimes(500000, 500010), [-1, -1], 'Test 18');
test(closestPrimes(999950, 1000000), [999959, 999961], 'Test 19');
test(closestPrimes(10000, 10010), [10007, 10009], 'Test 20');
test(closestPrimes(4, 6), [-1, -1], 'Test 21');
test(closestPrimes(104743, 104759), [104743, 104759], 'Test 22');
test(closestPrimes(1, 1), [-1, -1], 'Test 23');
test(closestPrimes(999900, 1000000), [999959, 999961], 'Test 24');
test(closestPrimes(10, 19), [11, 13], 'Test 25');
test(closestPrimes(5000, 5500), [5009, 5011], 'Test 26');
test(closestPrimes(100000, 100100), [100043, 100049], 'Test 27');
test(closestPrimes(999990, 1000000), [-1, -1], 'Test 28');
test(closestPrimes(100000, 100001), [-1, -1], 'Test 29');
test(closestPrimes(800000, 810000), [800117, 800119], 'Test 30');
test(closestPrimes(500000, 510000), [500111, 500113], 'Test 31');
test(closestPrimes(200000, 210000), [200381, 200383], 'Test 32');
test(closestPrimes(1, 29), [2, 3], 'Test 33');
test(closestPrimes(999979, 1000037), [999979, 999983], 'Test 34');
test(closestPrimes(1000000, 1000010), [-1, -1], 'Test 35');
test(closestPrimes(5000, 5010), [5003, 5009], 'Test 36');
test(closestPrimes(300000, 310000), [300149, 300151], 'Test 37');
test(closestPrimes(104740, 104760), [104743, 104759], 'Test 38');
test(closestPrimes(100000, 100050), [100043, 100049], 'Test 39');
test(closestPrimes(140000, 150000), [140069, 140071], 'Test 40');
test(closestPrimes(800, 850), [809, 811], 'Test 41');
test(closestPrimes(1000000, 1000006), [-1, -1], 'Test 42');
test(closestPrimes(541, 547), [541, 547], 'Test 43');
test(closestPrimes(1487, 1600), [1487, 1489], 'Test 44');
test(closestPrimes(700000, 700100), [700079, 700081], 'Test 45');
test(closestPrimes(100, 200), [101, 103], 'Test 46');
test(closestPrimes(50000, 50100), [50021, 50023], 'Test 47');
test(closestPrimes(999000, 999100), [999023, 999029], 'Test 48');
test(closestPrimes(200000, 200100), [200029, 200033], 'Test 49');
test(closestPrimes(999983, 999983), [-1, -1], 'Test 50');
test(closestPrimes(999950, 1000050), [999959, 999961], 'Test 51');
test(closestPrimes(300000, 300050), [300017, 300023], 'Test 52');
test(closestPrimes(100000, 101000), [100151, 100153], 'Test 53');
test(closestPrimes(50000, 51000), [50021, 50023], 'Test 54');
test(closestPrimes(600000, 600010), [-1, -1], 'Test 55');
test(closestPrimes(200000, 201000), [200381, 200383], 'Test 56');
test(closestPrimes(14, 16), [-1, -1], 'Test 57');
test(closestPrimes(900000, 910000), [900089, 900091], 'Test 58');
test(closestPrimes(10000, 10050), [10007, 10009], 'Test 59');
test(closestPrimes(999983, 1000033), [999983, 1000003], 'Test 60');
test(closestPrimes(1, 100), [2, 3], 'Test 61');
test(closestPrimes(3000, 3010), [-1, -1], 'Test 62');
test(closestPrimes(600000, 600100), [600071, 600073], 'Test 63');
test(closestPrimes(987654, 987700), [987659, 987697], 'Test 64');
test(closestPrimes(123456, 123556), [123491, 123493], 'Test 65');
test(closestPrimes(2, 3), [2, 3], 'Test 66');
test(closestPrimes(770000, 770100), [770039, 770041], 'Test 67');
test(closestPrimes(100000, 110000), [100151, 100153], 'Test 68');
test(closestPrimes(5000, 5100), [5009, 5011], 'Test 69');
test(closestPrimes(800000, 800100), [800053, 800057], 'Test 70');
test(closestPrimes(2, 5), [2, 3], 'Test 71');
test(closestPrimes(1000000, 1000050), [1000037, 1000039], 'Test 72');
test(closestPrimes(14, 20), [17, 19], 'Test 73');
test(closestPrimes(50000, 50010), [-1, -1], 'Test 74');
test(closestPrimes(345678, 345778), [345731, 345733], 'Test 75');
test(closestPrimes(654321, 654421), [654343, 654349], 'Test 76');
test(closestPrimes(200000, 200050), [200029, 200033], 'Test 77');
test(closestPrimes(999990, 999998), [-1, -1], 'Test 78');
test(closestPrimes(300000, 300100), [300017, 300023], 'Test 79');
test(closestPrimes(500000, 500100), [500029, 500041], 'Test 80');
test(closestPrimes(100000, 100500), [100151, 100153], 'Test 81');
test(closestPrimes(987654, 987754), [987697, 987713], 'Test 82');
test(closestPrimes(1, 1000000), [2, 3], 'Test 83');
test(closestPrimes(700000, 710000), [700079, 700081], 'Test 84');
test(closestPrimes(950, 1000), [967, 971], 'Test 85');
test(closestPrimes(2, 2), [-1, -1], 'Test 86');
test(closestPrimes(500000, 501000), [500111, 500113], 'Test 87');
test(closestPrimes(560030, 560050), [560039, 560047], 'Test 88');
test(closestPrimes(3, 5), [3, 5], 'Test 89');
test(closestPrimes(800000, 800200), [800117, 800119], 'Test 90');
test(closestPrimes(200, 300), [227, 229], 'Test 91');
test(closestPrimes(999990, 1000010), [-1, -1], 'Test 92');
test(closestPrimes(1487, 1601), [1487, 1489], 'Test 93');
test(closestPrimes(1000000, 1000100), [1000037, 1000039], 'Test 94');
test(closestPrimes(150000, 150100), [150089, 150091], 'Test 95');

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
