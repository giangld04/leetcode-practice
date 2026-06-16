// Test: 1925. Count Square Sum Triples
// 23 test cases from LeetCodeDataset
// Run: node test.js

const { countTriples } = require("./solution");

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

console.log("\n1925. Count Square Sum Triples\n");

test(countTriples(250), 330, 'Test 1');
test(countTriples(5), 2, 'Test 2');
test(countTriples(15), 8, 'Test 3');
test(countTriples(200), 254, 'Test 4');
test(countTriples(20), 12, 'Test 5');
test(countTriples(100), 104, 'Test 6');
test(countTriples(50), 40, 'Test 7');
test(countTriples(1), 0, 'Test 8');
test(countTriples(10), 4, 'Test 9');
test(countTriples(25), 16, 'Test 10');
test(countTriples(150), 178, 'Test 11');
test(countTriples(80), 78, 'Test 12');
test(countTriples(230), 302, 'Test 13');
test(countTriples(125), 142, 'Test 14');
test(countTriples(75), 74, 'Test 15');
test(countTriples(240), 314, 'Test 16');
test(countTriples(199), 250, 'Test 17');
test(countTriples(120), 132, 'Test 18');
test(countTriples(225), 296, 'Test 19');
test(countTriples(249), 324, 'Test 20');
test(countTriples(190), 236, 'Test 21');
test(countTriples(175), 214, 'Test 22');
test(countTriples(180), 218, 'Test 23');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

