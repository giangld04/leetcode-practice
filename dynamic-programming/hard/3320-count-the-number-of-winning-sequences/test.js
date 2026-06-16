// Test: 3320. Count The Number Of Winning Sequences
// 30 test cases from LeetCodeDataset
// Run: node test.js

const { countWinningSequences } = require("./solution");

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

console.log("\n3320. Count The Number Of Winning Sequences\n");

test(countWinningSequences("WFWFWFWFWFWFWFWFWFWF"), 730500, 'Test 1');
test(countWinningSequences("WFW"), 6, 'Test 2');
test(countWinningSequences("FWEFWEFW"), 157, 'Test 3');
test(countWinningSequences("FWFWFWFWFWFWFWFWFWFW"), 730500, 'Test 4');
test(countWinningSequences("EWE"), 6, 'Test 5');
test(countWinningSequences("WFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"), 377759202, 'Test 6');
test(countWinningSequences("EEEEEEEEEEEE"), 2364, 'Test 7');
test(countWinningSequences("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFWE"), 697784136, 'Test 8');
test(countWinningSequences("FWEFWFWFEF"), 671, 'Test 9');
test(countWinningSequences("EFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"), 942021245, 'Test 10');
test(countWinningSequences("EWFEWFWEWFWEWFWEWFWE"), 723067, 'Test 11');
test(countWinningSequences("FFFFFFFFFFFF"), 2364, 'Test 12');
test(countWinningSequences("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"), 486882611, 'Test 13');
test(countWinningSequences("WWE"), 4, 'Test 14');
test(countWinningSequences("FWFWFW"), 40, 'Test 15');
test(countWinningSequences("FWFEWFWEWF"), 670, 'Test 16');
test(countWinningSequences("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"), 956577544, 'Test 17');
test(countWinningSequences("FFF"), 3, 'Test 18');
test(countWinningSequences("WFWFWFW"), 86, 'Test 19');
test(countWinningSequences("FWEFW"), 18, 'Test 20');
test(countWinningSequences("F"), 1, 'Test 21');
test(countWinningSequences("EWW"), 4, 'Test 22');
test(countWinningSequences("FWFWFWFW"), 168, 'Test 23');
test(countWinningSequences("EFEFEF"), 40, 'Test 24');
test(countWinningSequences("FFFFFFFFFFFFFFFFFF"), 158972, 'Test 25');
test(countWinningSequences("FWFWFWFWFWFWFWFWFWFWFWFWFWFWFWFWFWFWFWFWFWFWFWFW"), 380726528, 'Test 26');
test(countWinningSequences("EEWEEWEEWE"), 678, 'Test 27');
test(countWinningSequences("FWFWFWFWFW"), 688, 'Test 28');
test(countWinningSequences("EEEE"), 8, 'Test 29');
test(countWinningSequences("FWFWFWFWFWFWFWFWFWFWFWFWFWFWFWFWFWFWFWFWFWFWFWFWFWE"), 116417994, 'Test 30');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

