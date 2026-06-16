// Test: 869. Reordered Power Of 2
// 87 test cases from LeetCodeDataset
// Run: node test.js

const { reorderedPowerOf2 } = require("./solution");

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

console.log("\n869. Reordered Power Of 2\n");

test(reorderedPowerOf2(46875), false, 'Test 1');
test(reorderedPowerOf2(3245), false, 'Test 2');
test(reorderedPowerOf2(86), false, 'Test 3');
test(reorderedPowerOf2(10), false, 'Test 4');
test(reorderedPowerOf2(4326), false, 'Test 5');
test(reorderedPowerOf2(16), true, 'Test 6');
test(reorderedPowerOf2(82084), false, 'Test 7');
test(reorderedPowerOf2(1024), true, 'Test 8');
test(reorderedPowerOf2(128), true, 'Test 9');
test(reorderedPowerOf2(821), true, 'Test 10');
test(reorderedPowerOf2(8192), true, 'Test 11');
test(reorderedPowerOf2(65536), true, 'Test 12');
test(reorderedPowerOf2(46), true, 'Test 13');
test(reorderedPowerOf2(256), true, 'Test 14');
test(reorderedPowerOf2(1000000000), false, 'Test 15');
test(reorderedPowerOf2(24), false, 'Test 16');
test(reorderedPowerOf2(987654321), false, 'Test 17');
test(reorderedPowerOf2(512), true, 'Test 18');
test(reorderedPowerOf2(4102), true, 'Test 19');
test(reorderedPowerOf2(1), true, 'Test 20');
test(reorderedPowerOf2(462), false, 'Test 21');
test(reorderedPowerOf2(862467834), false, 'Test 22');
test(reorderedPowerOf2(8258), false, 'Test 23');
test(reorderedPowerOf2(2097152), true, 'Test 24');
test(reorderedPowerOf2(786432), false, 'Test 25');
test(reorderedPowerOf2(3145728), false, 'Test 26');
test(reorderedPowerOf2(885842624), false, 'Test 27');
test(reorderedPowerOf2(999999999), false, 'Test 28');
test(reorderedPowerOf2(2359296), false, 'Test 29');
test(reorderedPowerOf2(67108864), true, 'Test 30');
test(reorderedPowerOf2(4096), true, 'Test 31');
test(reorderedPowerOf2(891891891), false, 'Test 32');
test(reorderedPowerOf2(2147483647), false, 'Test 33');
test(reorderedPowerOf2(8256), false, 'Test 34');
test(reorderedPowerOf2(683184), false, 'Test 35');
test(reorderedPowerOf2(536870912), true, 'Test 36');
test(reorderedPowerOf2(111222333), false, 'Test 37');
test(reorderedPowerOf2(524288), true, 'Test 38');
test(reorderedPowerOf2(82944), false, 'Test 39');
test(reorderedPowerOf2(94371840), false, 'Test 40');
test(reorderedPowerOf2(16384), true, 'Test 41');
test(reorderedPowerOf2(393216), false, 'Test 42');
test(reorderedPowerOf2(16777216), true, 'Test 43');
test(reorderedPowerOf2(258048), false, 'Test 44');
test(reorderedPowerOf2(125874), false, 'Test 45');
test(reorderedPowerOf2(78125), false, 'Test 46');
test(reorderedPowerOf2(1024576), false, 'Test 47');
test(reorderedPowerOf2(2415919), false, 'Test 48');
test(reorderedPowerOf2(134217728), true, 'Test 49');
test(reorderedPowerOf2(46340), false, 'Test 50');
test(reorderedPowerOf2(9437184), false, 'Test 51');
test(reorderedPowerOf2(33554432), true, 'Test 52');
test(reorderedPowerOf2(900000000), false, 'Test 53');
test(reorderedPowerOf2(1073741824), false, 'Test 54');
test(reorderedPowerOf2(2176782336), false, 'Test 55');
test(reorderedPowerOf2(24681357), false, 'Test 56');
test(reorderedPowerOf2(333333333), false, 'Test 57');
test(reorderedPowerOf2(2621440), false, 'Test 58');
test(reorderedPowerOf2(1048576), true, 'Test 59');
test(reorderedPowerOf2(9876543210), false, 'Test 60');
test(reorderedPowerOf2(2048), true, 'Test 61');
test(reorderedPowerOf2(22448811), false, 'Test 62');
test(reorderedPowerOf2(112233445566778899), false, 'Test 63');
test(reorderedPowerOf2(327684), false, 'Test 64');
test(reorderedPowerOf2(18), false, 'Test 65');
test(reorderedPowerOf2(768), false, 'Test 66');
test(reorderedPowerOf2(196608), false, 'Test 67');
test(reorderedPowerOf2(27962028), false, 'Test 68');
test(reorderedPowerOf2(894784864), false, 'Test 69');
test(reorderedPowerOf2(43112), false, 'Test 70');
test(reorderedPowerOf2(262144), true, 'Test 71');
test(reorderedPowerOf2(131072), true, 'Test 72');
test(reorderedPowerOf2(82128), false, 'Test 73');
test(reorderedPowerOf2(111111111), false, 'Test 74');
test(reorderedPowerOf2(31415926), false, 'Test 75');
test(reorderedPowerOf2(499999999), false, 'Test 76');
test(reorderedPowerOf2(318666), false, 'Test 77');
test(reorderedPowerOf2(180), false, 'Test 78');
test(reorderedPowerOf2(8589934592), false, 'Test 79');
test(reorderedPowerOf2(32768), true, 'Test 80');
test(reorderedPowerOf2(3221225472), false, 'Test 81');
test(reorderedPowerOf2(4104), false, 'Test 82');
test(reorderedPowerOf2(35184372088832), false, 'Test 83');
test(reorderedPowerOf2(123456789), false, 'Test 84');
test(reorderedPowerOf2(555555), false, 'Test 85');
test(reorderedPowerOf2(4608), false, 'Test 86');
test(reorderedPowerOf2(8388608), true, 'Test 87');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

