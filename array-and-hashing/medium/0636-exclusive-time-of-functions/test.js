// Test: 636. Exclusive Time Of Functions
// 69 test cases from LeetCodeDataset
// Run: node test.js

const { exclusiveTime } = require("./solution");

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

console.log("\n636. Exclusive Time Of Functions\n");

test(exclusiveTime(1, ["0:start:0","0:end:1"]), [2], 'Test 1');
test(exclusiveTime(4, ["0:start:0","1:start:1","2:start:2","2:end:3","1:end:4","0:end:5","3:start:6","3:end:7"]), [2, 2, 2, 2], 'Test 2');
test(exclusiveTime(4, ["0:start:0","1:start:1","1:end:2","2:start:3","2:end:4","3:start:5","3:end:6","0:end:7"]), [2, 2, 2, 2], 'Test 3');
test(exclusiveTime(2, ["0:start:0","1:start:1","1:end:2","0:end:3"]), [2, 2], 'Test 4');
test(exclusiveTime(1, ["0:start:0","0:start:2","0:end:5","0:start:6","0:end:6","0:end:7"]), [8], 'Test 5');
test(exclusiveTime(2, ["0:start:0","0:start:2","0:end:5","1:start:6","1:end:6","0:end:7"]), [7, 1], 'Test 6');
test(exclusiveTime(3, ["0:start:0","0:start:2","0:end:5","1:start:6","1:end:9","2:start:10","2:end:12","0:end:13"]), [7, 4, 3], 'Test 7');
test(exclusiveTime(2, ["0:start:0","1:start:2","1:end:5","0:end:6"]), [3, 4], 'Test 8');
test(exclusiveTime(3, ["0:start:0","0:start:2","1:start:3","1:end:4","0:end:5","2:start:6","2:end:7"]), [4, 2, 2], 'Test 9');
test(exclusiveTime(3, ["0:start:0","0:start:2","1:start:3","1:end:5","0:end:6","2:start:7","2:end:8"]), [4, 3, 2], 'Test 10');
test(exclusiveTime(3, ["0:start:0","1:start:1","2:start:2","2:end:3","1:end:4","0:end:5","0:start:6","1:start:7","2:start:8","2:end:9","1:end:10","0:end:11","0:start:12","1:start:13","2:start:14","2:end:15","1:end:16","0:end:17"]), [6, 6, 6], 'Test 11');
test(exclusiveTime(5, ["0:start:0","0:start:1","1:start:2","1:start:3","1:end:4","2:start:5","2:end:6","1:end:7","0:end:8","4:start:9","4:end:10"]), [3, 4, 2, 0, 2], 'Test 12');
test(exclusiveTime(6, ["0:start:0","1:start:1","2:start:2","3:start:3","4:start:4","5:start:5","5:end:6","4:end:7","3:end:8","2:end:9","1:end:10","0:end:11"]), [2, 2, 2, 2, 2, 2], 'Test 13');
test(exclusiveTime(4, ["0:start:0","0:start:1","1:start:2","1:start:3","1:end:4","0:end:5","2:start:6","2:end:7","3:start:8","3:start:9","3:end:10","3:end:11","2:end:12","0:end:13"]), [4, 4, 2, 4], 'Test 14');
test(exclusiveTime(7, ["0:start:0","1:start:1","2:start:2","3:start:3","4:start:4","5:start:5","6:start:6","6:end:7","5:end:8","4:end:9","3:end:10","2:end:11","1:end:12","0:end:13"]), [2, 2, 2, 2, 2, 2, 2], 'Test 15');
test(exclusiveTime(3, ["0:start:0","0:start:1","0:start:2","0:end:3","0:end:4","0:end:5","1:start:6","1:end:7","2:start:8","2:end:9"]), [6, 2, 2], 'Test 16');
test(exclusiveTime(3, ["0:start:0","0:start:1","0:start:2","0:start:3","0:end:4","0:end:5","0:end:6","0:end:7","1:start:8","1:start:9","1:end:10","1:end:11","2:start:12","2:end:13"]), [8, 4, 2], 'Test 17');
test(exclusiveTime(5, ["0:start:0","1:start:1","1:start:2","1:end:3","1:start:4","1:end:5","2:start:6","2:end:7","3:start:8","3:end:9","4:start:10","4:end:11"]), [1, 5, 2, 2, 2], 'Test 18');
test(exclusiveTime(3, ["0:start:0","0:start:2","0:start:4","0:end:5","0:end:7","0:end:9","1:start:10","1:end:11","2:start:12","2:end:13"]), [10, 2, 2], 'Test 19');
test(exclusiveTime(3, ["0:start:0","1:start:1","1:start:2","1:start:3","1:end:4","1:end:5","1:end:6","0:end:7","2:start:8","2:start:9","2:end:10","2:end:11","0:start:12","0:end:13"]), [4, 6, 4], 'Test 20');
test(exclusiveTime(2, ["0:start:0","0:start:1","0:start:2","0:start:3","0:end:4","0:end:5","0:end:6","0:end:7","1:start:8","1:end:9"]), [8, 2], 'Test 21');
test(exclusiveTime(4, ["0:start:0","0:start:1","1:start:2","1:end:3","0:end:4","0:start:5","0:start:6","2:start:7","2:end:8","0:end:9","0:end:10","3:start:11","3:end:12","0:start:13","0:end:14"]), [9, 2, 2, 2], 'Test 22');
test(exclusiveTime(4, ["0:start:0","0:start:1","1:start:2","1:end:3","1:start:4","1:end:5","0:end:6","2:start:7","2:end:8","3:start:9","3:end:10"]), [3, 4, 2, 2], 'Test 23');
test(exclusiveTime(5, ["0:start:0","0:start:2","1:start:3","1:end:5","2:start:6","2:end:9","0:end:10","3:start:11","4:start:12","4:end:14","3:end:15"]), [4, 3, 4, 2, 3], 'Test 24');
test(exclusiveTime(4, ["0:start:0","1:start:1","2:start:2","1:start:3","2:end:4","1:end:5","0:end:6","3:start:7","3:start:8","3:end:9","3:end:10"]), [1, 4, 2, 4], 'Test 25');
test(exclusiveTime(10, ["0:start:0","1:start:1","2:start:2","3:start:3","4:start:4","5:start:5","6:start:6","7:start:7","8:start:8","9:start:9","9:end:11","8:end:12","7:end:13","6:end:14","5:end:15","4:end:16","3:end:17","2:end:18","1:end:19","0:end:20"]), [2, 2, 2, 2, 2, 2, 2, 2, 2, 3], 'Test 26');
test(exclusiveTime(6, ["0:start:0","0:start:2","1:start:3","1:end:4","0:end:5","2:start:6","2:start:7","3:start:8","3:end:9","2:end:10","2:end:11","0:end:12","4:start:13","4:end:14","5:start:15","5:end:16"]), [5, 2, 4, 2, 2, 2], 'Test 27');
test(exclusiveTime(3, ["0:start:0","1:start:1","1:start:2","1:start:3","1:end:4","1:end:5","1:end:6","2:start:7","2:start:8","2:end:9","2:end:10"]), [1, 6, 4], 'Test 28');
test(exclusiveTime(4, ["0:start:0","1:start:1","2:start:2","2:end:3","2:start:4","3:start:5","3:end:6","2:end:7","1:end:8","0:end:9","0:start:10","0:end:11"]), [4, 2, 4, 2], 'Test 29');
test(exclusiveTime(6, ["0:start:0","0:start:2","0:end:3","1:start:4","1:start:6","1:end:7","1:end:9","0:end:10"]), [5, 6, 0, 0, 0, 0], 'Test 30');
test(exclusiveTime(3, ["0:start:0","0:start:1","1:start:2","1:start:3","1:end:4","1:end:5","0:end:6","0:end:7","2:start:8","2:start:9","2:start:10","2:end:11","2:end:12","2:end:13","0:start:14","0:end:15"]), [6, 4, 6], 'Test 31');
test(exclusiveTime(3, ["0:start:0","0:start:2","0:start:4","0:end:5","0:end:6","0:end:7"]), [8, 0, 0], 'Test 32');
test(exclusiveTime(7, ["0:start:0","0:start:1","0:start:2","1:start:3","1:start:4","1:start:5","2:start:6","2:start:7","2:end:8","2:end:9","1:end:10","1:end:11","1:end:12","0:end:13","0:end:14","0:end:15","3:start:16","3:end:17","4:start:18","4:end:19","5:start:20","5:end:21","6:start:22","6:end:23"]), [6, 6, 4, 2, 2, 2, 2], 'Test 33');
test(exclusiveTime(2, ["0:start:0","1:start:1","1:start:2","1:end:3","1:start:4","1:end:5","0:end:6"]), [1, 6], 'Test 34');
test(exclusiveTime(4, ["0:start:0","0:start:1","0:start:2","0:end:3","0:end:4","0:end:5","1:start:6","1:start:7","1:start:8","1:end:9","1:end:10","1:end:11","2:start:12","2:start:13","2:start:14","2:end:15","2:end:16","2:end:17","3:start:18","3:start:19","3:start:20","3:end:21","3:end:22","3:end:23"]), [6, 6, 6, 6], 'Test 35');
test(exclusiveTime(5, ["0:start:0","1:start:1","2:start:2","3:start:3","4:start:4","4:end:5","3:end:6","2:end:7","1:end:8","0:end:9"]), [2, 2, 2, 2, 2], 'Test 36');
test(exclusiveTime(5, ["0:start:0","1:start:1","1:start:2","1:end:3","2:start:4","2:end:5","3:start:6","3:end:7","4:start:8","4:end:9","1:start:10","1:end:11","0:end:12"]), [1, 6, 2, 2, 2], 'Test 37');
test(exclusiveTime(3, ["0:start:0","1:start:1","2:start:2","2:end:3","1:end:4","1:start:5","1:end:6","0:end:7","0:start:8","2:start:9","2:end:10","0:end:11"]), [4, 4, 4], 'Test 38');
test(exclusiveTime(4, ["0:start:0","1:start:1","2:start:2","3:start:3","3:end:4","3:start:5","3:end:6","2:end:7","1:end:8","0:end:9"]), [2, 2, 2, 4], 'Test 39');
test(exclusiveTime(3, ["0:start:0","0:start:1","1:start:2","1:end:3","2:start:4","2:end:5","0:end:6"]), [3, 2, 2], 'Test 40');
test(exclusiveTime(5, ["0:start:0","1:start:2","2:start:4","3:start:6","3:end:8","2:end:10","1:end:12","0:end:14"]), [4, 4, 4, 3, 0], 'Test 41');
test(exclusiveTime(4, ["0:start:0","1:start:1","2:start:2","2:end:3","1:end:4","0:end:5","3:start:6","3:start:7","3:end:8","3:end:9"]), [2, 2, 2, 4], 'Test 42');
test(exclusiveTime(5, ["0:start:0","1:start:1","2:start:2","3:start:3","4:start:4","4:end:5","3:end:6","2:end:7","1:end:8","0:end:9","0:start:10","1:start:11","2:start:12","3:start:13","4:start:14","4:end:15","3:end:16","2:end:17","1:end:18","0:end:19"]), [4, 4, 4, 4, 4], 'Test 43');
test(exclusiveTime(2, ["0:start:0","1:start:1","1:start:2","1:start:3","1:end:4","1:end:5","1:end:6","0:end:7"]), [2, 6], 'Test 44');
test(exclusiveTime(5, ["0:start:0","0:start:2","1:start:3","1:end:4","2:start:5","2:end:6","0:end:7","3:start:8","4:start:9","4:end:10","3:end:11","0:start:12","0:end:13"]), [6, 2, 2, 2, 2], 'Test 45');
test(exclusiveTime(3, ["0:start:0","0:start:2","1:start:3","1:start:4","1:end:5","1:end:6","0:end:7","0:end:8","2:start:9","2:end:10"]), [5, 4, 2], 'Test 46');
test(exclusiveTime(2, ["0:start:0","0:start:1","0:start:2","0:end:3","0:end:4","0:end:5","0:start:6","0:start:7","0:end:8","0:end:9"]), [10, 0], 'Test 47');
test(exclusiveTime(6, ["0:start:0","1:start:1","1:start:2","2:start:3","2:end:5","1:end:6","0:end:7","3:start:8","3:start:9","4:start:10","4:end:12","3:end:13","5:start:14","5:end:16"]), [1, 4, 3, 3, 3, 3], 'Test 48');
test(exclusiveTime(3, ["0:start:0","1:start:1","1:start:2","1:start:3","1:end:4","1:end:5","1:end:6","2:start:7","2:end:8","0:end:9"]), [2, 6, 2], 'Test 49');
test(exclusiveTime(3, ["0:start:0","1:start:1","2:start:2","1:end:3","2:end:4","0:end:5","0:start:6","1:start:7","2:start:8","2:end:9","1:end:10","0:end:11","0:start:12","1:start:13","2:start:14","2:end:15","1:end:16","0:end:17"]), [6, 6, 6], 'Test 50');
test(exclusiveTime(4, ["0:start:0","1:start:1","2:start:2","3:start:3","2:end:4","1:end:5","0:end:6","3:start:7","3:end:8","2:start:9","2:end:10","1:start:11","1:end:12","0:start:13","0:end:14"]), [3, 4, 4, 4], 'Test 51');
test(exclusiveTime(5, ["0:start:0","0:start:1","1:start:2","1:start:3","2:start:4","2:end:5","1:end:6","1:end:7","0:end:8","3:start:9","3:end:10","4:start:11","4:end:12"]), [3, 4, 2, 2, 2], 'Test 52');
test(exclusiveTime(3, ["0:start:0","0:start:1","1:start:2","1:end:3","2:start:4","2:start:5","2:end:6","1:start:7","1:end:8","0:end:9"]), [2, 4, 4], 'Test 53');
test(exclusiveTime(3, ["0:start:0","0:start:1","0:start:2","0:end:3","0:end:4","0:end:5","1:start:6","1:start:7","1:end:8","1:end:9","2:start:10","2:end:11"]), [6, 4, 2], 'Test 54');
test(exclusiveTime(4, ["0:start:0","1:start:1","2:start:2","3:start:3","3:end:4","2:end:5","1:end:6","0:end:7","0:start:8","0:end:9"]), [4, 2, 2, 2], 'Test 55');
test(exclusiveTime(6, ["0:start:0","0:start:1","1:start:2","1:end:3","0:end:4","0:start:5","2:start:6","2:end:7","3:start:8","3:end:9","0:end:10","4:start:11","4:end:12","5:start:13","5:end:14"]), [5, 2, 2, 2, 2, 2], 'Test 56');
test(exclusiveTime(3, ["0:start:0","0:start:2","1:start:3","1:start:4","1:end:5","0:end:6","2:start:7","2:end:8"]), [3, 4, 2], 'Test 57');
test(exclusiveTime(5, ["0:start:0","1:start:1","2:start:2","2:end:3","1:end:4","0:end:5","3:start:6","4:start:7","4:end:8","3:end:9","0:start:10","0:end:11"]), [4, 2, 2, 2, 2], 'Test 58');
test(exclusiveTime(7, ["0:start:0","0:start:2","1:start:3","1:end:5","0:end:6","2:start:7","2:start:8","3:start:9","3:end:11","2:end:12","2:end:13","4:start:14","4:end:16","5:start:17","5:end:19","6:start:20","6:end:22"]), [4, 3, 4, 3, 3, 3, 3], 'Test 59');
test(exclusiveTime(5, ["0:start:0","1:start:1","2:start:2","2:start:3","3:start:4","3:end:5","2:end:6","2:end:7","1:end:8","0:end:9","4:start:10","4:end:11"]), [2, 2, 4, 2, 2], 'Test 60');
test(exclusiveTime(4, ["0:start:0","1:start:1","2:start:2","3:start:3","3:end:4","2:end:5","1:end:6","0:end:7"]), [2, 2, 2, 2], 'Test 61');
test(exclusiveTime(5, ["0:start:0","1:start:1","1:start:2","2:start:3","2:end:4","1:end:5","0:end:6","3:start:7","4:start:8","4:end:9","3:end:10","0:start:11","1:start:12","2:start:13","2:end:14","1:end:15","0:end:16"]), [3, 6, 4, 2, 2], 'Test 62');
test(exclusiveTime(4, ["0:start:0","0:start:1","0:end:2","1:start:3","1:end:4","0:start:5","0:end:6","2:start:7","2:end:8","3:start:9","3:end:10"]), [5, 2, 2, 2], 'Test 63');
test(exclusiveTime(5, ["0:start:0","0:start:1","0:start:2","1:start:3","1:end:4","0:end:5","0:end:6","2:start:7","2:start:8","2:end:9","2:end:10","3:start:11","3:end:12","4:start:13","4:end:14"]), [5, 2, 4, 2, 2], 'Test 64');
test(exclusiveTime(4, ["0:start:0","1:start:1","1:end:2","0:start:3","2:start:4","2:end:5","0:start:6","3:start:7","3:end:8","0:start:9","2:start:10","2:end:11","0:start:12","1:start:13","1:end:14","0:end:15","0:start:16","2:start:17","2:end:18","0:end:19"]), [8, 4, 6, 2], 'Test 65');
test(exclusiveTime(3, ["0:start:0","0:start:2","1:start:3","1:end:4","1:start:5","1:end:6","0:end:7","0:start:8","0:end:9"]), [6, 4, 0], 'Test 66');
test(exclusiveTime(4, ["0:start:0","1:start:1","1:start:2","1:end:3","2:start:4","2:end:5","3:start:6","3:end:7","1:start:8","1:end:9","0:end:10"]), [1, 6, 2, 2], 'Test 67');
test(exclusiveTime(5, ["0:start:0","1:start:2","2:start:3","2:end:4","1:end:5","3:start:6","4:start:7","4:end:8","3:end:9","0:end:10"]), [3, 2, 2, 2, 2], 'Test 68');
test(exclusiveTime(5, ["0:start:0","1:start:1","2:start:2","3:start:3","3:end:4","2:end:5","1:end:6","0:end:7"]), [2, 2, 2, 2, 0], 'Test 69');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

