// Test: 621. Task Scheduler
// 86 test cases from LeetCodeDataset
// Run: node test.js

const { leastInterval } = require("./solution");

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

console.log("\n621. Task Scheduler\n");

test(leastInterval(["A","A","B","B","B","B","C","C","C","D","D","D"], 3), 13, 'Test 1');
test(leastInterval(["A","B","C","D"], 0), 4, 'Test 2');
test(leastInterval(["A","B","C","D","E","F","G"], 2), 7, 'Test 3');
test(leastInterval(["A"], 5), 1, 'Test 4');
test(leastInterval(["A","A","A","A","A","A","B","C","D"], 2), 16, 'Test 5');
test(leastInterval(["A","A","B","B"], 0), 4, 'Test 6');
test(leastInterval(["A","B","C","D","E","F","G"], 0), 7, 'Test 7');
test(leastInterval(["A"], 0), 1, 'Test 8');
test(leastInterval(["A","A","A","B","B","B"], 2), 8, 'Test 9');
test(leastInterval(["A","A","A","B","B","B"], 3), 10, 'Test 10');
test(leastInterval(["A","B","C","D","E","F"], 0), 6, 'Test 11');
test(leastInterval(["A","A","A","A","A","B","B","B","C","C","C"], 2), 13, 'Test 12');
test(leastInterval(["A","B","A","B","A","B"], 2), 8, 'Test 13');
test(leastInterval(["A","C","A","B","D","B"], 1), 6, 'Test 14');
test(leastInterval(["A","A","A","B","B","B","C","C","C","D","D","D"], 4), 14, 'Test 15');
test(leastInterval(["A","A","A","A","A","A","B","C","D","E","F","G"], 2), 16, 'Test 16');
test(leastInterval(["A","A","A","A","A","B","B","B","B","B","C","C","C","C","C","D","D","D","D","D"], 2), 20, 'Test 17');
test(leastInterval(["A","A","A","A","A","A","A","B","B","B","B","B","B","B","C","C","C","C","C","C","C"], 6), 45, 'Test 18');
test(leastInterval(["X","Y","Z","X","Y","Z","X","Y","Z","X","Y","Z","X","Y","Z","X","Y","Z","X","Y","Z","X","Y","Z","X","Y","Z"], 3), 35, 'Test 19');
test(leastInterval(["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"], 10), 52, 'Test 20');
test(leastInterval(["A","A","A","A","B","B","B","B","C","C","C","C","D","D","D","D","E","E","E","E"], 3), 20, 'Test 21');
test(leastInterval(["A","A","B","B","C","C","D","D","E","E","F","F","G","G","H","H","I","I","J","J","K","K","L","L","M","M","N","N","O","O","P","P","Q","Q","R","R","S","S","T","T","U","U","V","V","W","W","X","X","Y","Y","Z","Z"], 1), 52, 'Test 22');
test(leastInterval(["A","A","A","B","B","B","C","C","C","D","D","D","E","E","E","F","F","F","G","G","G","H","H","H","I","I","I","J","J","J","K","K","K","L","L","L"], 10), 36, 'Test 23');
test(leastInterval(["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"], 5), 52, 'Test 24');
test(leastInterval(["A","A","A","A","A","A","B","B","B","B","C","C","D","D","E","E","E","E","E","E"], 4), 27, 'Test 25');
test(leastInterval(["A","A","A","A","A","B","B","B","B","B","C","C","C","C","C","D","D","D","D","D","E","E","E","E","E"], 4), 25, 'Test 26');
test(leastInterval(["A","A","A","A","A","A","A","A","A","A","B","B","B","B","B","B","B","B","B","B","C","C","C","C","C","C","C","C","C","C","D","D","D","D","D","D","D","D","D","D"], 5), 58, 'Test 27');
test(leastInterval(["X","X","X","Y","Y","Y","Z","Z","W","W","W","W","W","V","V","V","V","V"], 5), 26, 'Test 28');
test(leastInterval(["A","A","A","A","A","A","A","A","A","A","A","A","B","B","B","B","B","B","B","B","B","B","B","B"], 2), 35, 'Test 29');
test(leastInterval(["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"], 0), 26, 'Test 30');
test(leastInterval(["X","Y","Z","X","Y","Z","X","Y","Z","X","Y","Z","X","Y","Z","X","Y","Z","X","Y","Z","X","Y","Z"], 2), 24, 'Test 31');
test(leastInterval(["A","A","A","B","B","B","C","C","C","D","D","D","E","E","E","F","F","F","G","G","G","H","H","H","I","I","I","J","J","J","K","K","K","L","L","L","M","M","M","N","N","N","O","O","O","P","P","P","Q","Q","Q","R","R","R","S","S","S","T","T","T","U","U","U","V","V","V","W","W","W","X","X","X","Y","Y","Y","Z","Z","Z"], 10), 78, 'Test 32');
test(leastInterval(["A","A","A","A","B","B","B","C","C","D","D","E","E","F","F","G","G"], 3), 17, 'Test 33');
test(leastInterval(["P","P","P","P","P","Q","Q","Q","Q","Q","R","R","R","R","S","S","S","S","T","T","T","T","U","U","U","U"], 4), 26, 'Test 34');
test(leastInterval(["X","X","X","X","Y","Y","Y","Y","Z","Z","Z","Z","Z","W","W","W","W","W","W"], 6), 36, 'Test 35');
test(leastInterval(["A","B","C","A","B","C","A","B","C","A","B","C","A","B","C","A","B","C","A","B","C","A","B","C"], 2), 24, 'Test 36');
test(leastInterval(["X","X","X","X","X","Y","Y","Y","Y","Y","Z","Z","Z","Z","Z","W","W","W","W","W"], 5), 28, 'Test 37');
test(leastInterval(["X","X","X","Y","Y","Y","Z","Z","Z","Z","Z"], 5), 25, 'Test 38');
test(leastInterval(["A","A","A","B","B","B","C","C","C","D","D","D","E","E","E","F","F","F","G","G","G","H","H","H","I","I","I","J","J","J"], 7), 30, 'Test 39');
test(leastInterval(["A","A","A","B","B","B","C","C","C","D","D","D","E","E","E","F","F","F","G","G","G","H","H","H","I","I","I","J","J","J","K","K","K"], 2), 33, 'Test 40');
test(leastInterval(["A","A","A","A","A","A","A","A","B","B","B","B","B","B","B","B","C","C","C","C","C","C","C","C","D","D","D","D","D","D","D","D","E","E","E","E","E","E","E","E","F","F","F","F","F","F","F","F","G","G","G","G","G","G","G","G","H","H","H","H","H","H","H","H"], 7), 64, 'Test 41');
test(leastInterval(["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"], 7), 78, 'Test 42');
test(leastInterval(["A","A","A","A","A","A","B","B","B","B","B","B","C","C","C","C","C","C"], 5), 33, 'Test 43');
test(leastInterval(["A","A","A","A","A","A","B","B","B","B","B","C","C","C","C","D","D","D","D","E","E","E"], 5), 31, 'Test 44');
test(leastInterval(["A","A","A","A","B","B","B","B","C","C","C","C","D","D","D","D"], 4), 19, 'Test 45');
test(leastInterval(["X","Y","X","Y","X","Y","X","Y","X","Y","Z","Z","Z","Z","Z","W","W","W","W","W"], 3), 20, 'Test 46');
test(leastInterval(["A","B","A","B","A","B","A","B","A","B","A","B","A","B","A","B","A","B","A","B","A","B","A","B","A","B","A","B","A","B","A","B","A","B","A","B","A","B","A","B","A","B","A","B","A","B","A","B","A","B","A","B","A","B","A","B","A","B","A","B","A","B"], 1), 62, 'Test 47');
test(leastInterval(["F","G","H","F","G","H","F","G","H","F","G","H","F","G","H","F","G","H","F","G","H","F","G","H","F","G","H"], 2), 27, 'Test 48');
test(leastInterval(["A","A","B","B","C","C","D","D","E","E","F","F","G","G","H","H","I","I","J","J","K","K","L","L","M","M","N","N","O","O","P","P","Q","Q","R","R","S","S","T","T","U","U","V","V","W","W","X","X","Y","Y","Z","Z"], 10), 52, 'Test 49');
test(leastInterval(["A","A","A","B","B","B","C","C","C","D","D","D","E","E","E","F","F","F","G","G","G","H","H","H","I","I","I","J","J","J","K","K","K"], 4), 33, 'Test 50');
test(leastInterval(["Q","Q","Q","R","R","R","S","S","T","T","U","U","V","V","W","W","X","X","Y","Y","Z","Z"], 7), 22, 'Test 51');
test(leastInterval(["P","Q","R","S","T","U","V","W","X","Y","Z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O"], 25), 26, 'Test 52');
test(leastInterval(["A","A","A","A","A","A","A","B","B","B","B","B","B","B","C","C","C","C","C","C","C","D","D","D","D","D","D","D"], 8), 58, 'Test 53');
test(leastInterval(["A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A"], 0), 68, 'Test 54');
test(leastInterval(["A","A","A","A","A","A","A","A","B","B","B","B","B","B","B","B","C","C","C","C","C","C","C","C","D","D","D","D","D","D","D","D","E","E","E","E","E","E","E","E","F","F","F","F","F","F","F","F","G","G","G","G","G","G","G","G"], 15), 119, 'Test 55');
test(leastInterval(["A","B","C","A","B","C","A","B","C","A","B","C","A","B","C","A","B","C","A","B","C","A","B","C","A","B","C","A","B","C"], 1), 30, 'Test 56');
test(leastInterval(["A","A","A","B","B","B","C","C","C","D","D","D","E","E","E","F","F","F"], 3), 18, 'Test 57');
test(leastInterval(["A","B","A","C","A","D","A","E","A","F","A","G","A","H","A","I","A","J","A"], 5), 55, 'Test 58');
test(leastInterval(["A","A","A","A","B","B","B","C","C","D","D","D","E","E","E","E"], 4), 17, 'Test 59');
test(leastInterval(["A","A","A","A","A","B","B","B","B","B","C","C","C","C","C"], 5), 27, 'Test 60');
test(leastInterval(["A","A","A","B","B","B","C","C","C","D","D","D","E","E","E","F","F","F","G","G","G","H","H","H","I","I","I","J","J","J","K","K","K","L","L","L","M","M","M","N","N","N","O","O","O","P","P","P","Q","Q","Q","R","R","R","S","S","S","T","T","T","U","U","U","V","V","V","W","W","W","X","X","X","Y","Y","Y","Z","Z","Z"], 2), 78, 'Test 61');
test(leastInterval(["A","A","A","A","A","A","A","A","A","B","B","B","B","B","B","B","B","B","C","C","C","C","C","C","C","C","C"], 1), 27, 'Test 62');
test(leastInterval(["U","V","W","X","Y","Z","U","V","W","X","Y","Z","U","V","W","X","Y","Z","U","V","W","X","Y","Z"], 6), 27, 'Test 63');
test(leastInterval(["X","X","X","X","X","X","X","X","Y","Y","Y","Y","Y","Y","Y","Y","Z","Z","Z","Z","Z","Z","Z","Z"], 6), 52, 'Test 64');
test(leastInterval(["A","A","A","B","B","B","B","C","C","C","D","D","D","E","E","E","F","F","F","G","G","G","H","H","H","I","I","I","J","J","J"], 2), 31, 'Test 65');
test(leastInterval(["A","A","A","A","A","B","B","B","B","B","C","C","C","C","C"], 4), 23, 'Test 66');
test(leastInterval(["M","M","M","M","M","M","N","N","N","N","N","N","O","O","O","O","O","O","P","P","P","P","P","P"], 6), 39, 'Test 67');
test(leastInterval(["M","M","M","N","N","N","N","N","O","O","O","O","O","P","P","P","P","P","P","P","Q","Q","Q","Q","Q","Q","Q"], 5), 38, 'Test 68');
test(leastInterval(["A","A","A","B","B","B","B","B","B","B","B","C","C","C","C","C","C","C","C","D","D","D","D","D","D","D","D","E","E","E","E","E","E","E","E","F","F","F","F","F","F","F","F","G","G","G","G","G","G","G","G","H","H","H","H","H","H","H","H"], 6), 59, 'Test 69');
test(leastInterval(["A","A","A","A","A","A","A","A","B","B","B","B","B","B","B","B","C","C","C","C","C","C","C","C","D","D","D","D","D","D","D","D"], 3), 32, 'Test 70');
test(leastInterval(["A","A","A","A","B","B","B","B","C","C","C","C","D","D","D","D","E","E","E","E","F","F","F","F","G","G","G","G","H","H","H","H"], 7), 32, 'Test 71');
test(leastInterval(["A","A","A","B","B","B","C","C","C","D","D","D","E","E","E","F","F","F","G","G","G","H","H","H"], 2), 24, 'Test 72');
test(leastInterval(["A","A","A","A","A","B","B","B","B","B","C","C","C","C","C","D","D","D","D","D"], 5), 28, 'Test 73');
test(leastInterval(["Q","Q","Q","Q","Q","R","R","R","R","R","R","S","S","S","S","S","T","T","T","T","T"], 5), 31, 'Test 74');
test(leastInterval(["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"], 10), 26, 'Test 75');
test(leastInterval(["A","A","A","A","A","B","B","B","B","B","B","B","C","C","C","C","C","C","C","D","D","D","D","D","D","D"], 6), 45, 'Test 76');
test(leastInterval(["A","A","A","A","A","B","B","B","B","C","C","C","C","D","D","D","D","E","E","E","E","F","F","F","F","G","G","G","G","H","H","H","H"], 8), 37, 'Test 77');
test(leastInterval(["A","A","A","A","B","B","B","B","C","C","C","C","D","D","D","D","E","E","E","E","F","F","F","F","G","G","G","G","H","H","H","H","I","I","I","I"], 10), 42, 'Test 78');
test(leastInterval(["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"], 25), 26, 'Test 79');
test(leastInterval(["A","A","A","A","B","B","B","C","C","D","E","E","F","F","F"], 4), 16, 'Test 80');
test(leastInterval(["A","A","A","A","A","A","B","B","B","B","B","C","C","C","D","D","D","E","E"], 4), 26, 'Test 81');
test(leastInterval(["A","A","A","A","B","B","B","B","C","C","C","C","D","D","D","D","E","E","E","E","F","F","F","F"], 3), 24, 'Test 82');
test(leastInterval(["A","A","A","A","A","A","A","A","B","B","B","B","B","B","B","B","C","C","C","C","C","C","C","C"], 5), 45, 'Test 83');
test(leastInterval(["A","B","A","B","A","B","A","B","A","B","A","B","A","B","A","B","A","B","A","B"], 0), 20, 'Test 84');
test(leastInterval(["A","A","A","A","A","A","B","B","B","B","B","B","C","C","C","C","C","D","D","D","D","D","D","D","D"], 6), 50, 'Test 85');
test(leastInterval(["A","A","A","A","B","B","B","B","B","C","C","C","C","C","C","D","D","D","D","D","D","D"], 3), 25, 'Test 86');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

