// Test: 3440. Reschedule Meetings For Maximum Free Time Ii
// 117 test cases from LeetCodeDataset
// Run: node test.js

const { maxFreeTime } = require("./solution");

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

console.log("\n3440. Reschedule Meetings For Maximum Free Time Ii\n");

test(maxFreeTime(eventTime), Error: Solution.maxFreeTime[] missing 3 required positional arguments: 'eventTime', 'startTime', and 'endTime', 'Test 1');
test(maxFreeTime(endTime), Error: Solution.maxFreeTime[] missing 3 required positional arguments: 'eventTime', 'startTime', and 'endTime', 'Test 2');
test(maxFreeTime(startTime), Error: Solution.maxFreeTime[] missing 3 required positional arguments: 'eventTime', 'startTime', and 'endTime', 'Test 3');
test(maxFreeTime(50, [0, 5, 10, 15, 20], [3, 8, 13, 18, 23]), 29, 'Test 4');
test(maxFreeTime(50, [5,15,25,35], [10,20,30,40]), 20, 'Test 5');
test(maxFreeTime(20, [0, 5, 10, 15], [3, 8, 13, 18]), 4, 'Test 6');
test(maxFreeTime(100, [10,30,50], [20,40,60]), 60, 'Test 7');
test(maxFreeTime(20, [1,5,10,15], [3,8,13,18]), 5, 'Test 8');
test(maxFreeTime(1000, [500,600,700,800], [550,650,750,850]), 600, 'Test 9');
test(maxFreeTime(100, [5,25,45,65,85], [15,35,55,75,95]), 30, 'Test 10');
test(maxFreeTime(20, [0,5,10], [3,8,15]), 7, 'Test 11');
test(maxFreeTime(1000, [100,300,500,700], [200,400,600,800]), 400, 'Test 12');
test(maxFreeTime(100, [10,30,50,70,90], [20,40,60,80,100]), 30, 'Test 13');
test(maxFreeTime(15, [1,4,8,12], [3,7,11,15]), 2, 'Test 14');
test(maxFreeTime(20, [0,5,10,15], [2,7,12,17]), 8, 'Test 15');
test(maxFreeTime(20, [2,5,10], [4,8,15]), 7, 'Test 16');
test(maxFreeTime(12, [1, 4, 7], [3, 6, 9]), 4, 'Test 17');
test(maxFreeTime(1000, [100,300,500,700,900], [200,400,600,800,1000]), 300, 'Test 18');
test(maxFreeTime(30, [0,10,20], [5,15,25]), 15, 'Test 19');
test(maxFreeTime(20, [2,5,11,15], [3,7,14,20]), 8, 'Test 20');
test(maxFreeTime(50, [5,15,25,35,45], [10,20,30,40,50]), 15, 'Test 21');
test(maxFreeTime(25, [3,9,15,21], [6,12,18,24]), 9, 'Test 22');
test(maxFreeTime(20, [1,6,12,15], [4,8,14,20]), 7, 'Test 23');
test(maxFreeTime(15, [1,6,11], [4,9,14]), 4, 'Test 24');
test(maxFreeTime(10, [0, 3, 7, 9], [1, 4, 8, 10]), 6, 'Test 25');
test(maxFreeTime(50, [0,15,30], [10,25,40]), 20, 'Test 26');
test(maxFreeTime(20, [0, 5, 10, 15], [2, 8, 13, 20]), 7, 'Test 27');
test(maxFreeTime(100, [10,20,30,40,50], [20,30,40,50,60]), 50, 'Test 28');
test(maxFreeTime(100, [0,20,40,60,80], [10,30,50,70,90]), 30, 'Test 29');
test(maxFreeTime(10, [0,3,6,9], [2,5,8,10]), 2, 'Test 30');
test(maxFreeTime(50, [10,20,30,40], [15,25,35,45]), 20, 'Test 31');
test(maxFreeTime(30, [5,15,25], [10,20,27]), 15, 'Test 32');
test(maxFreeTime(8, [0,2,5], [1,4,7]), 2, 'Test 33');
test(maxFreeTime(30, [0,10,20], [5,15,30]), 10, 'Test 34');
test(maxFreeTime(5, [0, 1, 2, 3, 4], [1, 2, 3, 4, 5]), 0, 'Test 35');
test(maxFreeTime(12, [0,3,6,9], [2,5,8,12]), 2, 'Test 36');
test(maxFreeTime(100, [10,20,30,40,50], [15,25,35,45,55]), 55, 'Test 37');
test(maxFreeTime(100, [0, 20, 40, 60, 80], [10, 30, 50, 70, 90]), 30, 'Test 38');
test(maxFreeTime(1000000, [0,100000,200000,300000,400000], [50000,150000,250000,350000,450000]), 650000, 'Test 39');
test(maxFreeTime(8, [1,3,5], [2,4,6]), 4, 'Test 40');
test(maxFreeTime(15, [0,2,5,9,12], [1,4,6,10,15]), 6, 'Test 41');
test(maxFreeTime(10, [0,2,4,6], [1,3,5,7]), 5, 'Test 42');
test(maxFreeTime(20, [1,5,10,15], [3,7,12,18]), 8, 'Test 43');
test(maxFreeTime(10, [0,2,4,6,8], [1,3,5,7,10]), 3, 'Test 44');
test(maxFreeTime(25, [0,5,15,20], [3,10,20,25]), 7, 'Test 45');
test(maxFreeTime(25, [1,6,11,16,21], [3,8,13,18,23]), 8, 'Test 46');
test(maxFreeTime(25, [0,15,20], [5,20,25]), 10, 'Test 47');
test(maxFreeTime(25, [1,6,11,16], [4,9,14,19]), 8, 'Test 48');
test(maxFreeTime(20, [0,5,10,15], [4,9,14,19]), 2, 'Test 49');
test(maxFreeTime(15, [2,6,10], [4,8,12]), 7, 'Test 50');
test(maxFreeTime(10, [0,7,9], [1,8,10]), 7, 'Test 51');
test(maxFreeTime(1000000000, [0,100000000], [100000000,200000000]), 800000000, 'Test 52');
test(maxFreeTime(15, [0,4,8,12], [2,6,10,14]), 6, 'Test 53');
test(maxFreeTime(25, [2,6,10,14,18], [4,8,12,16,20]), 9, 'Test 54');
test(maxFreeTime(15, [3,8,11], [5,10,13]), 8, 'Test 55');
test(maxFreeTime(50, [3,15,30,45], [10,25,40,50]), 10, 'Test 56');
test(maxFreeTime(20, [1, 5, 10, 15], [3, 7, 13, 19]), 7, 'Test 57');
test(maxFreeTime(100, [0, 10, 20, 30, 40], [5, 25, 35, 50, 60]), 30, 'Test 58');
test(maxFreeTime(20, [2,5,9,15], [3,6,10,20]), 9, 'Test 59');
test(maxFreeTime(15, [1,6,9,12], [2,8,11,15]), 6, 'Test 60');
test(maxFreeTime(100, [0,20,40,60,80], [10,30,50,70,100]), 30, 'Test 61');
test(maxFreeTime(8, [0,1,2,3], [2,3,4,5]), 2, 'Test 62');
test(maxFreeTime(20, [1,6,11,16], [5,10,15,20]), 2, 'Test 63');
test(maxFreeTime(100, [5,15,30,45,60], [10,20,40,55,70]), 45, 'Test 64');
test(maxFreeTime(100, [0,10,20,30,40,50,60,70,80,90], [5,15,25,35,45,55,65,75,85,95]), 15, 'Test 65');
test(maxFreeTime(15, [2, 6, 9, 11], [4, 7, 10, 13]), 6, 'Test 66');
test(maxFreeTime(7, [0,2,4], [1,3,5]), 4, 'Test 67');
test(maxFreeTime(7, [0, 2, 4], [1, 3, 5]), 4, 'Test 68');
test(maxFreeTime(9, [1,4,7], [2,5,8]), 5, 'Test 69');
test(maxFreeTime(18, [0,3,6,9,12], [2,5,8,11,15]), 4, 'Test 70');
test(maxFreeTime(20, [1,6,11,16], [3,8,13,18]), 8, 'Test 71');
test(maxFreeTime(25, [0,10,20], [5,15,25]), 10, 'Test 72');
test(maxFreeTime(15, [0, 5, 10], [2, 8, 12]), 8, 'Test 73');
test(maxFreeTime(12, [0,3,6,9], [2,5,8,11]), 2, 'Test 74');
test(maxFreeTime(7, [1, 2], [3, 4]), 2, 'Test 75');
test(maxFreeTime(15, [2,5,8,11], [4,7,10,13]), 5, 'Test 76');
test(maxFreeTime(20, [1,5,10,15], [2,6,11,20]), 9, 'Test 77');
test(maxFreeTime(100, [10, 30, 50, 70], [20, 40, 60, 80]), 40, 'Test 78');
test(maxFreeTime(20, [1,6,10,15], [3,9,14,17]), 7, 'Test 79');
test(maxFreeTime(10, [0, 7, 9], [1, 8, 10]), 7, 'Test 80');
test(maxFreeTime(30, [3,9,15,21,27], [6,12,18,24,30]), 9, 'Test 81');
test(maxFreeTime(15, [2,5,9,12], [4,7,11,14]), 5, 'Test 82');
test(maxFreeTime(20, [0, 10, 15], [5, 15, 20]), 5, 'Test 83');
test(maxFreeTime(1000000, [100000, 300000, 500000, 700000], [200000, 400000, 600000, 800000]), 400000, 'Test 84');
test(maxFreeTime(8, [1, 4, 6], [2, 5, 8]), 4, 'Test 85');
test(maxFreeTime(100, [0,20,50,80], [10,30,60,90]), 50, 'Test 86');
test(maxFreeTime(10000, [0,1000,2000,3000,4000,5000], [500,1500,2500,3500,4500,5500]), 5500, 'Test 87');
test(maxFreeTime(25, [3,8,13,18], [5,10,15,20]), 10, 'Test 88');
test(maxFreeTime(100, [5,15,25,35,45,55,65,75,85,95], [10,20,30,40,50,60,70,80,90,100]), 15, 'Test 89');
test(maxFreeTime(12, [0, 3, 8, 10], [2, 6, 10, 12]), 3, 'Test 90');
test(maxFreeTime(5, [1, 3], [2, 5]), 2, 'Test 91');
test(maxFreeTime(1000, [0,100,200,300,400,500,600,700,800,900], [100,200,300,400,500,600,700,800,900,1000]), 0, 'Test 92');
test(maxFreeTime(20, [0,5,10,15], [2,6,12,16]), 9, 'Test 93');
test(maxFreeTime(50, [0,25,30], [10,35,40]), 25, 'Test 94');
test(maxFreeTime(50, [5, 15, 25, 35], [10, 20, 30, 45]), 15, 'Test 95');
test(maxFreeTime(10, [0,3,7,9], [1,4,8,10]), 6, 'Test 96');
test(maxFreeTime(100, [0,50,75], [25,75,100]), 25, 'Test 97');
test(maxFreeTime(15, [1,6,11], [3,8,13]), 8, 'Test 98');
test(maxFreeTime(100, [0,10,20,30,40], [5,15,25,35,45]), 65, 'Test 99');
test(maxFreeTime(15, [2,6,10], [5,9,13]), 3, 'Test 100');
test(maxFreeTime(15, [0,6,10], [3,9,12]), 7, 'Test 101');
test(maxFreeTime(1000, [100, 300, 500, 700], [200, 400, 600, 800]), 400, 'Test 102');
test(maxFreeTime(25, [1,6,11,16], [3,8,13,18]), 12, 'Test 103');
test(maxFreeTime(1000000, [100000,200000,300000,400000], [150000,250000,350000,450000]), 650000, 'Test 104');
test(maxFreeTime(15, [0,5,10], [3,9,13]), 3, 'Test 105');
test(maxFreeTime(5, [1,3], [2,5]), 2, 'Test 106');
test(maxFreeTime(25, [2,7,13], [5,11,18]), 9, 'Test 107');
test(maxFreeTime(50, [0,10,20,30,40], [5,15,25,35,45]), 15, 'Test 108');
test(maxFreeTime(100, [5,20,40,60,80], [10,30,50,70,90]), 30, 'Test 109');
test(maxFreeTime(30, [0,6,12,18,24], [4,10,16,22,30]), 4, 'Test 110');
test(maxFreeTime(20, [1,5,9,13,17], [3,7,11,15,19]), 6, 'Test 111');
test(maxFreeTime(20, [2, 5, 10, 15], [4, 8, 12, 18]), 7, 'Test 112');
test(maxFreeTime(100, [0,25,50,75], [20,45,70,95]), 10, 'Test 113');
test(maxFreeTime(20, [0,10,15,18], [5,12,17,20]), 8, 'Test 114');
test(maxFreeTime(25, [0, 5, 10, 15, 20], [3, 8, 13, 18, 23]), 4, 'Test 115');
test(maxFreeTime(5, [0,1,2,3,4], [1,2,3,4,5]), 0, 'Test 116');
test(maxFreeTime(10, [1,2,3,4], [2,3,4,5]), 6, 'Test 117');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

