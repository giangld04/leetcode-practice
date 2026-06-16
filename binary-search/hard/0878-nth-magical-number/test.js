// Test: 878. Nth Magical Number
// 104 test cases from LeetCodeDataset
// Run: node test.js

const { nthMagicalNumber } = require("./solution");

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

console.log("\n878. Nth Magical Number\n");

test(nthMagicalNumber(5, 6, 5), 15, 'Test 1');
test(nthMagicalNumber(10, 3, 7), 24, 'Test 2');
test(nthMagicalNumber(1000000000, 2, 3), 499999993, 'Test 3');
test(nthMagicalNumber(10, 7, 3), 24, 'Test 4');
test(nthMagicalNumber(5, 3, 5), 10, 'Test 5');
test(nthMagicalNumber(5, 7, 5), 15, 'Test 6');
test(nthMagicalNumber(10, 3, 5), 21, 'Test 7');
test(nthMagicalNumber(500000000, 40000, 40001), 249930000, 'Test 8');
test(nthMagicalNumber(4, 2, 3), 6, 'Test 9');
test(nthMagicalNumber(10, 7, 11), 44, 'Test 10');
test(nthMagicalNumber(1, 2, 3), 2, 'Test 11');
test(nthMagicalNumber(10, 12, 18), 90, 'Test 12');
test(nthMagicalNumber(1000000000, 40000, 40000), 999720007, 'Test 13');
test(nthMagicalNumber(234567890, 66666, 99999), 277133959, 'Test 14');
test(nthMagicalNumber(750000000, 8000, 16000), 999958007, 'Test 15');
test(nthMagicalNumber(600000000, 29, 37), 904615333, 'Test 16');
test(nthMagicalNumber(500000000, 10000, 10000), 999965007, 'Test 17');
test(nthMagicalNumber(100, 234, 567), 16848, 'Test 18');
test(nthMagicalNumber(500000000, 33333, 44444), 999922230, 'Test 19');
test(nthMagicalNumber(500, 100, 300), 50000, 'Test 20');
test(nthMagicalNumber(1000000000, 39999, 40000), 999860007, 'Test 21');
test(nthMagicalNumber(999999999, 3, 11), 538461521, 'Test 22');
test(nthMagicalNumber(750000000, 20001, 30002), 689943000, 'Test 23');
test(nthMagicalNumber(120000000, 11, 23), 920000000, 'Test 24');
test(nthMagicalNumber(900000000, 89, 127), 314883394, 'Test 25');
test(nthMagicalNumber(999999999, 3, 5), 142857126, 'Test 26');
test(nthMagicalNumber(100000000, 12345, 67890), 754478652, 'Test 27');
test(nthMagicalNumber(800000000, 7999, 8000), 999977607, 'Test 28');
test(nthMagicalNumber(800000000, 789, 321), 30893061, 'Test 29');
test(nthMagicalNumber(75000000, 8888, 9999), 962497382, 'Test 30');
test(nthMagicalNumber(500000000, 23, 47), 833333281, 'Test 31');
test(nthMagicalNumber(400000000, 13579, 24680), 891663244, 'Test 32');
test(nthMagicalNumber(300000000, 11111, 22222), 299976669, 'Test 33');
test(nthMagicalNumber(250000000, 50000, 50001), 124956250, 'Test 34');
test(nthMagicalNumber(500000000, 10000, 10001), 249982500, 'Test 35');
test(nthMagicalNumber(5000000, 3456, 7890), 22857132, 'Test 36');
test(nthMagicalNumber(200000000, 23456, 34567), 814186778, 'Test 37');
test(nthMagicalNumber(654321098, 55555, 88888), 872244777, 'Test 38');
test(nthMagicalNumber(600000000, 5000, 5001), 299989500, 'Test 39');
test(nthMagicalNumber(900000000, 13, 19), 170967696, 'Test 40');
test(nthMagicalNumber(345678901, 11111, 22222), 838242131, 'Test 41');
test(nthMagicalNumber(1, 3, 5), 3, 'Test 42');
test(nthMagicalNumber(250000000, 89756, 34213), 771543424, 'Test 43');
test(nthMagicalNumber(1000000000, 2, 2), 999999993, 'Test 44');
test(nthMagicalNumber(500000000, 2, 5), 833333334, 'Test 45');
test(nthMagicalNumber(100000000, 10000, 20000), 999993007, 'Test 46');
test(nthMagicalNumber(987654321, 27182, 31415), 137264409, 'Test 47');
test(nthMagicalNumber(999999999, 33333, 66666), 999733343, 'Test 48');
test(nthMagicalNumber(750000000, 11, 29), 134615346, 'Test 49');
test(nthMagicalNumber(123456789, 4321, 9876), 119975644, 'Test 50');
test(nthMagicalNumber(999999999, 37, 41), 701298547, 'Test 51');
test(nthMagicalNumber(456789012, 14142, 17320), 441321430, 'Test 52');
test(nthMagicalNumber(999999999, 12345, 67890), 544786471, 'Test 53');
test(nthMagicalNumber(1000000000, 29, 31), 237288036, 'Test 54');
test(nthMagicalNumber(400000000, 34567, 45678), 751276078, 'Test 55');
test(nthMagicalNumber(100000, 11111, 22222), 111099993, 'Test 56');
test(nthMagicalNumber(150000000, 40000, 40003), 149973375, 'Test 57');
test(nthMagicalNumber(750000000, 456, 789), 260868172, 'Test 58');
test(nthMagicalNumber(999999999, 37, 100), 205882140, 'Test 59');
test(nthMagicalNumber(100000000, 11111, 22222), 99992223, 'Test 60');
test(nthMagicalNumber(200000000, 100, 101), 99999930, 'Test 61');
test(nthMagicalNumber(123456789, 1234, 5678), 183610385, 'Test 62');
test(nthMagicalNumber(150000000, 11111, 22222), 649988338, 'Test 63');
test(nthMagicalNumber(600000000, 111, 222), 599999538, 'Test 64');
test(nthMagicalNumber(999999999, 2, 3), 499999991, 'Test 65');
test(nthMagicalNumber(500000001, 8000, 8001), 249994000, 'Test 66');
test(nthMagicalNumber(200000000, 15000, 17000), 161273485, 'Test 67');
test(nthMagicalNumber(500000000, 10000, 12345), 981180666, 'Test 68');
test(nthMagicalNumber(1000, 2, 3), 1500, 'Test 69');
test(nthMagicalNumber(250000000, 10000, 10003), 249963753, 'Test 70');
test(nthMagicalNumber(300000000, 34567, 98765), 656326046, 'Test 71');
test(nthMagicalNumber(300000000, 15000, 16000), 999983207, 'Test 72');
test(nthMagicalNumber(150000000, 17, 23), 503846139, 'Test 73');
test(nthMagicalNumber(789012345, 1111, 2222), 592709163, 'Test 74');
test(nthMagicalNumber(500000000, 37337, 49249), 524562485, 'Test 75');
test(nthMagicalNumber(600000000, 9000, 18000), 999962207, 'Test 76');
test(nthMagicalNumber(400000000, 20001, 20002), 399972000, 'Test 77');
test(nthMagicalNumber(800000000, 12345, 67890), 35841519, 'Test 78');
test(nthMagicalNumber(100000000, 12345, 54321), 944440755, 'Test 79');
test(nthMagicalNumber(678901234, 12345, 12346), 857288152, 'Test 80');
test(nthMagicalNumber(123456789, 12345, 67890), 820330907, 'Test 81');
test(nthMagicalNumber(600000000, 23456, 78901), 617619200, 'Test 82');
test(nthMagicalNumber(500000000, 10001, 10007), 124765147, 'Test 83');
test(nthMagicalNumber(50000000, 789, 1234), 75815670, 'Test 84');
test(nthMagicalNumber(650000000, 46810, 57921), 397052571, 'Test 85');
test(nthMagicalNumber(1000000000, 40000, 40001), 499860000, 'Test 86');
test(nthMagicalNumber(345678912, 2345, 6789), 570799481, 'Test 87');
test(nthMagicalNumber(500000000, 12345, 67890), 772393239, 'Test 88');
test(nthMagicalNumber(876543210, 23456, 78901), 803519554, 'Test 89');
test(nthMagicalNumber(123456789, 13579, 24680), 448025793, 'Test 90');
test(nthMagicalNumber(50000000, 10000, 10001), 24998250, 'Test 91');
test(nthMagicalNumber(100000000, 10001, 10002), 99996500, 'Test 92');
test(nthMagicalNumber(999999999, 10000, 10001), 499955000, 'Test 93');
test(nthMagicalNumber(800000000, 41, 53), 692472990, 'Test 94');
test(nthMagicalNumber(1000000, 1234, 5678), 13987665, 'Test 95');
test(nthMagicalNumber(300000000, 12345, 23456), 516628373, 'Test 96');
test(nthMagicalNumber(250000000, 50000, 75000), 999934382, 'Test 97');
test(nthMagicalNumber(123456789, 20000, 30000), 851827043, 'Test 98');
test(nthMagicalNumber(500000000, 4, 6), 499999993, 'Test 99');
test(nthMagicalNumber(100000, 10001, 10002), 500100000, 'Test 100');
test(nthMagicalNumber(765432109, 33333, 44444), 432218246, 'Test 101');
test(nthMagicalNumber(800000000, 10001, 20002), 799944000, 'Test 102');
test(nthMagicalNumber(456789123, 2020, 3030), 35515996, 'Test 103');
test(nthMagicalNumber(450000000, 17, 29), 929999972, 'Test 104');

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
