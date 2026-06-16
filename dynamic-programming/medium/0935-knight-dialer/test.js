// Test: 935. Knight Dialer
// 42 test cases from LeetCodeDataset
// Run: node test.js

const { knightDialer } = require("./solution");

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

console.log("\n935. Knight Dialer\n");

test(knightDialer(3), 46, 'Test 1');
test(knightDialer(100), 540641702, 'Test 2');
test(knightDialer(50), 267287516, 'Test 3');
test(knightDialer(2500), 851996060, 'Test 4');
test(knightDialer(5000), 406880451, 'Test 5');
test(knightDialer(2), 20, 'Test 6');
test(knightDialer(1), 10, 'Test 7');
test(knightDialer(500), 84202957, 'Test 8');
test(knightDialer(1000), 88106097, 'Test 9');
test(knightDialer(10), 14912, 'Test 10');
test(knightDialer(5), 240, 'Test 11');
test(knightDialer(3131), 136006598, 'Test 12');
test(knightDialer(4000), 315083963, 'Test 13');
test(knightDialer(1600), 585618181, 'Test 14');
test(knightDialer(4750), 955420830, 'Test 15');
test(knightDialer(4600), 152432289, 'Test 16');
test(knightDialer(2000), 71794716, 'Test 17');
test(knightDialer(3750), 17358003, 'Test 18');
test(knightDialer(2400), 248946071, 'Test 19');
test(knightDialer(3333), 857043783, 'Test 20');
test(knightDialer(3500), 624537543, 'Test 21');
test(knightDialer(3000), 447863713, 'Test 22');
test(knightDialer(30), 986742198, 'Test 23');
test(knightDialer(1200), 823605881, 'Test 24');
test(knightDialer(4900), 790356323, 'Test 25');
test(knightDialer(2750), 49052199, 'Test 26');
test(knightDialer(1800), 159765442, 'Test 27');
test(knightDialer(2800), 779464575, 'Test 28');
test(knightDialer(250), 296754066, 'Test 29');
test(knightDialer(4250), 12437801, 'Test 30');
test(knightDialer(20), 58689536, 'Test 31');
test(knightDialer(1250), 926597988, 'Test 32');
test(knightDialer(3132), 915594565, 'Test 33');
test(knightDialer(800), 709497038, 'Test 34');
test(knightDialer(15), 944000, 'Test 35');
test(knightDialer(4999), 659158877, 'Test 36');
test(knightDialer(200), 38950354, 'Test 37');
test(knightDialer(400), 23117445, 'Test 38');
test(knightDialer(1234), 758728301, 'Test 39');
test(knightDialer(750), 185434245, 'Test 40');
test(knightDialer(4500), 756988614, 'Test 41');
test(knightDialer(1500), 487569438, 'Test 42');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

