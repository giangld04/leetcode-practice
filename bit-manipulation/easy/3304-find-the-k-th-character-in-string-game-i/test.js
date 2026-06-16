// Test: 3304. Find The K Th Character In String Game I
// 37 test cases from LeetCodeDataset
// Run: node test.js

const { kthCharacter } = require("./solution");

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

console.log("\n3304. Find The K Th Character In String Game I\n");

test(kthCharacter(27), d, 'Test 1');
test(kthCharacter(1), a, 'Test 2');
test(kthCharacter(7), c, 'Test 3');
test(kthCharacter(500), h, 'Test 4');
test(kthCharacter(26), d, 'Test 5');
test(kthCharacter(5), b, 'Test 6');
test(kthCharacter(10), c, 'Test 7');
test(kthCharacter(175), f, 'Test 8');
test(kthCharacter(400), g, 'Test 9');
test(kthCharacter(20), d, 'Test 10');
test(kthCharacter(325), d, 'Test 11');
test(kthCharacter(15), d, 'Test 12');
test(kthCharacter(50), d, 'Test 13');
test(kthCharacter(49), c, 'Test 14');
test(kthCharacter(350), g, 'Test 15');
test(kthCharacter(499), g, 'Test 16');
test(kthCharacter(190), g, 'Test 17');
test(kthCharacter(100), e, 'Test 18');
test(kthCharacter(53), d, 'Test 19');
test(kthCharacter(180), f, 'Test 20');
test(kthCharacter(78), e, 'Test 21');
test(kthCharacter(200), f, 'Test 22');
test(kthCharacter(250), g, 'Test 23');
test(kthCharacter(52), e, 'Test 24');
test(kthCharacter(98), d, 'Test 25');
test(kthCharacter(123), f, 'Test 26');
test(kthCharacter(125), f, 'Test 27');
test(kthCharacter(150), e, 'Test 28');
test(kthCharacter(450), e, 'Test 29');
test(kthCharacter(222), g, 'Test 30');
test(kthCharacter(256), i, 'Test 31');
test(kthCharacter(333), e, 'Test 32');
test(kthCharacter(375), g, 'Test 33');
test(kthCharacter(225), d, 'Test 34');
test(kthCharacter(300), f, 'Test 35');
test(kthCharacter(301), e, 'Test 36');
test(kthCharacter(25), c, 'Test 37');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

