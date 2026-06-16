// Test: 2729. Check If The Number Is Fascinating
// 60 test cases from LeetCodeDataset
// Run: node test.js

const { isFascinating } = require("./solution");

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

console.log("\n2729. Check If The Number Is Fascinating\n");

test(isFascinating(933), false, 'Test 1');
test(isFascinating(147), false, 'Test 2');
test(isFascinating(576), false, 'Test 3');
test(isFascinating(789), false, 'Test 4');
test(isFascinating(579), false, 'Test 5');
test(isFascinating(273), true, 'Test 6');
test(isFascinating(327), true, 'Test 7');
test(isFascinating(192), true, 'Test 8');
test(isFascinating(369), false, 'Test 9');
test(isFascinating(258), false, 'Test 10');
test(isFascinating(932), false, 'Test 11');
test(isFascinating(100), false, 'Test 12');
test(isFascinating(819), false, 'Test 13');
test(isFascinating(735), false, 'Test 14');
test(isFascinating(342), false, 'Test 15');
test(isFascinating(269), false, 'Test 16');
test(isFascinating(135), false, 'Test 17');
test(isFascinating(729), false, 'Test 18');
test(isFascinating(639), false, 'Test 19');
test(isFascinating(657), false, 'Test 20');
test(isFascinating(846), false, 'Test 21');
test(isFascinating(964), false, 'Test 22');
test(isFascinating(402), false, 'Test 23');
test(isFascinating(123), false, 'Test 24');
test(isFascinating(396), false, 'Test 25');
test(isFascinating(300), false, 'Test 26');
test(isFascinating(854), false, 'Test 27');
test(isFascinating(852), false, 'Test 28');
test(isFascinating(439), false, 'Test 29');
test(isFascinating(673), false, 'Test 30');
test(isFascinating(384), false, 'Test 31');
test(isFascinating(621), false, 'Test 32');
test(isFascinating(270), false, 'Test 33');
test(isFascinating(471), false, 'Test 34');
test(isFascinating(741), false, 'Test 35');
test(isFascinating(594), false, 'Test 36');
test(isFascinating(783), false, 'Test 37');
test(isFascinating(186), false, 'Test 38');
test(isFascinating(654), false, 'Test 39');
test(isFascinating(873), false, 'Test 40');
test(isFascinating(297), false, 'Test 41');
test(isFascinating(927), false, 'Test 42');
test(isFascinating(725), false, 'Test 43');
test(isFascinating(999), false, 'Test 44');
test(isFascinating(294), false, 'Test 45');
test(isFascinating(519), false, 'Test 46');
test(isFascinating(518), false, 'Test 47');
test(isFascinating(140), false, 'Test 48');
test(isFascinating(513), false, 'Test 49');
test(isFascinating(504), false, 'Test 50');
test(isFascinating(693), false, 'Test 51');
test(isFascinating(843), false, 'Test 52');
test(isFascinating(918), false, 'Test 53');
test(isFascinating(534), false, 'Test 54');
test(isFascinating(624), false, 'Test 55');
test(isFascinating(183), false, 'Test 56');
test(isFascinating(753), false, 'Test 57');
test(isFascinating(486), false, 'Test 58');
test(isFascinating(243), false, 'Test 59');
test(isFascinating(924), false, 'Test 60');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

