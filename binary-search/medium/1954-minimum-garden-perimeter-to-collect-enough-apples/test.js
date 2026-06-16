// Test: 1954. Minimum Garden Perimeter To Collect Enough Apples
// 68 test cases from LeetCodeDataset
// Run: node test.js

const { minimumPerimeter } = require("./solution");

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

console.log("\n1954. Minimum Garden Perimeter To Collect Enough Apples\n");

test(minimumPerimeter(10000000000), 10856, 'Test 1');
test(minimumPerimeter(10), 8, 'Test 2');
test(minimumPerimeter(50), 16, 'Test 3');
test(minimumPerimeter(1000000), 504, 'Test 4');
test(minimumPerimeter(13), 16, 'Test 5');
test(minimumPerimeter(1000000000), 5040, 'Test 6');
test(minimumPerimeter(1000000000000000), 503968, 'Test 7');
test(minimumPerimeter(1000), 48, 'Test 8');
test(minimumPerimeter(987654321), 5016, 'Test 9');
test(minimumPerimeter(1000000000000), 50400, 'Test 10');
test(minimumPerimeter(999999999999999), 503968, 'Test 11');
test(minimumPerimeter(100), 24, 'Test 12');
test(minimumPerimeter(100000000), 2336, 'Test 13');
test(minimumPerimeter(123456789), 2512, 'Test 14');
test(minimumPerimeter(1), 8, 'Test 15');
test(minimumPerimeter(2000000000), 6352, 'Test 16');
test(minimumPerimeter(50000000000), 18568, 'Test 17');
test(minimumPerimeter(123456789012345), 250944, 'Test 18');
test(minimumPerimeter(1000000001), 5040, 'Test 19');
test(minimumPerimeter(18014398509481984), 1321120, 'Test 20');
test(minimumPerimeter(10000), 112, 'Test 21');
test(minimumPerimeter(5000000000), 8616, 'Test 22');
test(minimumPerimeter(50000), 184, 'Test 23');
test(minimumPerimeter(120), 24, 'Test 24');
test(minimumPerimeter(5), 8, 'Test 25');
test(minimumPerimeter(6), 8, 'Test 26');
test(minimumPerimeter(20), 16, 'Test 27');
test(minimumPerimeter(2000000000000), 63496, 'Test 28');
test(minimumPerimeter(100000000000), 23392, 'Test 29');
test(minimumPerimeter(2147483647), 6504, 'Test 30');
test(minimumPerimeter(100000), 232, 'Test 31');
test(minimumPerimeter(123456789123), 25096, 'Test 32');
test(minimumPerimeter(987654321987), 50192, 'Test 33');
test(minimumPerimeter(2500000000), 6840, 'Test 34');
test(minimumPerimeter(468), 40, 'Test 35');
test(minimumPerimeter(500000000000), 40000, 'Test 36');
test(minimumPerimeter(20736), 136, 'Test 37');
test(minimumPerimeter(256), 32, 'Test 38');
test(minimumPerimeter(500000000000000), 400000, 'Test 39');
test(minimumPerimeter(111111111111111), 242280, 'Test 40');
test(minimumPerimeter(99999999999999999), 2339216, 'Test 41');
test(minimumPerimeter(8000000000), 10080, 'Test 42');
test(minimumPerimeter(12), 8, 'Test 43');
test(minimumPerimeter(122500), 248, 'Test 44');
test(minimumPerimeter(25200), 144, 'Test 45');
test(minimumPerimeter(598593750000), 42472, 'Test 46');
test(minimumPerimeter(9261000), 1056, 'Test 47');
test(minimumPerimeter(754321098), 4584, 'Test 48');
test(minimumPerimeter(999999999999999999), 5039688, 'Test 49');
test(minimumPerimeter(876543210987654), 482312, 'Test 50');
test(minimumPerimeter(100000000000000000000), 23392144, 'Test 51');
test(minimumPerimeter(100000000000000), 233920, 'Test 52');
test(minimumPerimeter(400000000000000), 371328, 'Test 53');
test(minimumPerimeter(1000000000000000000), 5039688, 'Test 54');
test(minimumPerimeter(987654321098765), 501888, 'Test 55');
test(minimumPerimeter(9999999999999999), 1085768, 'Test 56');
test(minimumPerimeter(5000), 88, 'Test 57');
test(minimumPerimeter(10000000000000), 108576, 'Test 58');
test(minimumPerimeter(3500), 80, 'Test 59');
test(minimumPerimeter(1024), 48, 'Test 60');
test(minimumPerimeter(18), 16, 'Test 61');
test(minimumPerimeter(30000000000000), 156592, 'Test 62');
test(minimumPerimeter(2), 8, 'Test 63');
test(minimumPerimeter(500), 40, 'Test 64');
test(minimumPerimeter(4), 8, 'Test 65');
test(minimumPerimeter(3), 8, 'Test 66');
test(minimumPerimeter(10000000000000000000), 10857672, 'Test 67');
test(minimumPerimeter(4608), 80, 'Test 68');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

