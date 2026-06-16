// Test: 1175. Prime Arrangements
// 27 test cases from LeetCodeDataset
// Run: node test.js

const { numPrimeArrangements } = require("./solution");

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

console.log("\n1175. Prime Arrangements\n");

test(numPrimeArrangements(30), 13697484, 'Test 1');
test(numPrimeArrangements(99), 75763854, 'Test 2');
test(numPrimeArrangements(75), 918450925, 'Test 3');
test(numPrimeArrangements(20), 344376809, 'Test 4');
test(numPrimeArrangements(2), 1, 'Test 5');
test(numPrimeArrangements(19), 445364737, 'Test 6');
test(numPrimeArrangements(100), 682289015, 'Test 7');
test(numPrimeArrangements(50), 451768713, 'Test 8');
test(numPrimeArrangements(1), 1, 'Test 9');
test(numPrimeArrangements(10), 17280, 'Test 10');
test(numPrimeArrangements(5), 12, 'Test 11');
test(numPrimeArrangements(97), 519081041, 'Test 12');
test(numPrimeArrangements(3), 2, 'Test 13');
test(numPrimeArrangements(61), 250895270, 'Test 14');
test(numPrimeArrangements(47), 627742601, 'Test 15');
test(numPrimeArrangements(70), 892906519, 'Test 16');
test(numPrimeArrangements(60), 125049738, 'Test 17');
test(numPrimeArrangements(40), 965722612, 'Test 18');
test(numPrimeArrangements(4), 4, 'Test 19');
test(numPrimeArrangements(37), 546040181, 'Test 20');
test(numPrimeArrangements(98), 892915734, 'Test 21');
test(numPrimeArrangements(73), 78238453, 'Test 22');
test(numPrimeArrangements(80), 405243354, 'Test 23');
test(numPrimeArrangements(89), 673469112, 'Test 24');
test(numPrimeArrangements(85), 430788419, 'Test 25');
test(numPrimeArrangements(83), 913651722, 'Test 26');
test(numPrimeArrangements(90), 448961084, 'Test 27');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

