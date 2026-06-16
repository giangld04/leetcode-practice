// Test: 1621. Number Of Sets Of K Non Overlapping Line Segments
// 58 test cases from LeetCodeDataset
// Run: node test.js

const { numberOfSets } = require("./solution");

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

console.log("\n1621. Number Of Sets Of K Non Overlapping Line Segments\n");

test(numberOfSets(3, 1), 3, 'Test 1');
test(numberOfSets(1000, 500), 70047606, 'Test 2');
test(numberOfSets(30, 7), 796297179, 'Test 3');
test(numberOfSets(6, 3), 28, 'Test 4');
test(numberOfSets(8, 4), 165, 'Test 5');
test(numberOfSets(5, 2), 15, 'Test 6');
test(numberOfSets(7, 1), 21, 'Test 7');
test(numberOfSets(100, 50), 237930091, 'Test 8');
test(numberOfSets(4, 2), 5, 'Test 9');
test(numberOfSets(20, 10), 10015005, 'Test 10');
test(numberOfSets(9, 2), 210, 'Test 11');
test(numberOfSets(10, 3), 924, 'Test 12');
test(numberOfSets(400, 200), 849395041, 'Test 13');
test(numberOfSets(300, 150), 188049093, 'Test 14');
test(numberOfSets(250, 125), 61117700, 'Test 15');
test(numberOfSets(200, 100), 412289370, 'Test 16');
test(numberOfSets(150, 50), 703668401, 'Test 17');
test(numberOfSets(500, 200), 89039524, 'Test 18');
test(numberOfSets(80, 20), 527894588, 'Test 19');
test(numberOfSets(1000, 999), 1, 'Test 20');
test(numberOfSets(999, 998), 1, 'Test 21');
test(numberOfSets(750, 300), 966786381, 'Test 22');
test(numberOfSets(800, 350), 811412361, 'Test 23');
test(numberOfSets(950, 400), 686452764, 'Test 24');
test(numberOfSets(25, 10), 391975633, 'Test 25');
test(numberOfSets(1000, 300), 535696304, 'Test 26');
test(numberOfSets(50, 10), 984308396, 'Test 27');
test(numberOfSets(600, 250), 917595427, 'Test 28');
test(numberOfSets(400, 150), 37130153, 'Test 29');
test(numberOfSets(998, 499), 990039585, 'Test 30');
test(numberOfSets(700, 250), 1718306, 'Test 31');
test(numberOfSets(50, 20), 875426906, 'Test 32');
test(numberOfSets(700, 350), 906610068, 'Test 33');
test(numberOfSets(999, 499), 970118741, 'Test 34');
test(numberOfSets(900, 450), 891508928, 'Test 35');
test(numberOfSets(600, 100), 945626632, 'Test 36');
test(numberOfSets(8, 3), 210, 'Test 37');
test(numberOfSets(150, 75), 937415442, 'Test 38');
test(numberOfSets(250, 20), 344905395, 'Test 39');
test(numberOfSets(250, 100), 47365034, 'Test 40');
test(numberOfSets(25, 5), 20030010, 'Test 41');
test(numberOfSets(100, 10), 697218647, 'Test 42');
test(numberOfSets(100, 20), 114267332, 'Test 43');
test(numberOfSets(15, 5), 92378, 'Test 44');
test(numberOfSets(50, 15), 188331431, 'Test 45');
test(numberOfSets(100, 40), 234333249, 'Test 46');
test(numberOfSets(1000, 1), 499500, 'Test 47');
test(numberOfSets(600, 220), 66442708, 'Test 48');
test(numberOfSets(800, 300), 374845297, 'Test 49');
test(numberOfSets(750, 375), 796219809, 'Test 50');
test(numberOfSets(600, 300), 508930020, 'Test 51');
test(numberOfSets(50, 5), 930713009, 'Test 52');
test(numberOfSets(800, 400), 530286193, 'Test 53');
test(numberOfSets(250, 75), 928665746, 'Test 54');
test(numberOfSets(999, 500), 688428127, 'Test 55');
test(numberOfSets(350, 175), 134369598, 'Test 56');
test(numberOfSets(500, 100), 698790075, 'Test 57');
test(numberOfSets(500, 250), 540818587, 'Test 58');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

