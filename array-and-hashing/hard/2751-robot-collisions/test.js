// Test: 2751. Robot Collisions
// 143 test cases from LeetCodeDataset
// Run: node test.js

const { survivedRobotsHealths } = require("./solution");

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

console.log("\n2751. Robot Collisions\n");

test(survivedRobotsHealths([2,4,6,8,10], [30,25,20,15,10], "LLRRR"), [30, 25, 20, 15, 10], 'Test 1');
test(survivedRobotsHealths([2,4,6,8], [1,2,3,4], 'LLLL'), [1, 2, 3, 4], 'Test 2');
test(survivedRobotsHealths([5,4,3,2,1], [2,17,9,15,10], "RRRRR"), [2, 17, 9, 15, 10], 'Test 3');
test(survivedRobotsHealths([1,2,3,4], [10,20,30,40], 'RLRL'), [19, 39], 'Test 4');
test(survivedRobotsHealths([100,200,300], [10,20,30], 'LRL'), [10, 29], 'Test 5');
test(survivedRobotsHealths([1,2,3,4,5], [5,5,5,5,5], "RRRLR"), [5, 5, 5], 'Test 6');
test(survivedRobotsHealths([10,20,30], [1,2,3], 'RRR'), [1, 2, 3], 'Test 7');
test(survivedRobotsHealths([1,2,3,4,5,6], [1,2,3,4,5,6], 'RRLLRR'), [1, 4, 5, 6], 'Test 8');
test(survivedRobotsHealths([1,3,5,7,9], [5,8,2,6,4], "RRRLL"), [5, 6], 'Test 9');
test(survivedRobotsHealths([1,2,3,4,5], [1,2,3,4,5], "RRRRR"), [1, 2, 3, 4, 5], 'Test 10');
test(survivedRobotsHealths([1,2,3,4,5], [10,10,10,10,10], "RLRLR"), [10], 'Test 11');
test(survivedRobotsHealths([10,20,30,40], [1,1,1,1], 'RRRR'), [1, 1, 1, 1], 'Test 12');
test(survivedRobotsHealths([1,3,5,7], [5,5,5,5], 'RLRL'), [], 'Test 13');
test(survivedRobotsHealths([10,20,30], [3,2,1], 'LLL'), [3, 2, 1], 'Test 14');
test(survivedRobotsHealths([4,2,6,8], [5,5,5,5], 'LRLR'), [5, 5], 'Test 15');
test(survivedRobotsHealths([6,5,4,3,2,1], [6,5,4,3,2,1], 'LLRRLL'), [6, 3, 2, 1], 'Test 16');
test(survivedRobotsHealths([50,40,30,20,10], [1,2,3,4,5], "LLLLL"), [1, 2, 3, 4, 5], 'Test 17');
test(survivedRobotsHealths([1,2,3,4,5], [10,9,8,7,6], 'RRRLL'), [10, 9, 6], 'Test 18');
test(survivedRobotsHealths([50,40,30,20,10], [1,2,3,4,5], "RRRRR"), [1, 2, 3, 4, 5], 'Test 19');
test(survivedRobotsHealths([2,3,4,5,6], [10,9,8,7,6], "LLLLL"), [10, 9, 8, 7, 6], 'Test 20');
test(survivedRobotsHealths([1,2,3,4,5], [1,2,3,4,5], "RLRLR"), [1, 3, 5], 'Test 21');
test(survivedRobotsHealths([1,10,20,30,40], [10,9,8,7,6], "RRRRR"), [10, 9, 8, 7, 6], 'Test 22');
test(survivedRobotsHealths([1,2,3,4,5], [1,2,3,4,5], 'LLRRL'), [1, 2, 3], 'Test 23');
test(survivedRobotsHealths([3,5,2,6], [10,10,15,12], 'RLRL'), [14], 'Test 24');
test(survivedRobotsHealths([1,3,5,7], [20,15,10,5], 'RRRR'), [20, 15, 10, 5], 'Test 25');
test(survivedRobotsHealths([1,3,5,7,9], [5,10,15,20,25], "RRRLL"), [17, 25], 'Test 26');
test(survivedRobotsHealths([1,3,5,7,9], [1,3,2,4,5], 'RLRLR'), [2, 3, 5], 'Test 27');
test(survivedRobotsHealths([3,5,2,6], [10,10,15,12], "RLRL"), [14], 'Test 28');
test(survivedRobotsHealths([2,4,6,8,10], [5,4,3,2,1], "RRRRR"), [5, 4, 3, 2, 1], 'Test 29');
test(survivedRobotsHealths([1,2,5,6], [10,10,11,11], "RLRL"), [], 'Test 30');
test(survivedRobotsHealths([5,4,3,2,1], [2,17,9,15,10], 'RRRRR'), [2, 17, 9, 15, 10], 'Test 31');
test(survivedRobotsHealths([1,2,5,6], [10,10,11,11], 'RLRL'), [], 'Test 32');
test(survivedRobotsHealths([1,3,5,7,9], [5,5,5,5,5], "RLRLR"), [5], 'Test 33');
test(survivedRobotsHealths([10,20,30,40,50], [1,2,3,4,5], "LLLLL"), [1, 2, 3, 4, 5], 'Test 34');
test(survivedRobotsHealths([1, 3, 5, 7, 9, 11, 13, 15], [8, 16, 24, 32, 40, 48, 56, 64], 'RRRLLLL'), Error: string index out of range, 'Test 35');
test(survivedRobotsHealths([10, 20, 30, 40, 50], [5, 10, 15, 20, 25], 'RLLRR'), [9, 15, 20, 25], 'Test 36');
test(survivedRobotsHealths([10,9,8,7,6,5,4,3,2,1], [10,10,10,10,10,10,10,10,10,10], 'LLRRLLRRLL'), [10, 10], 'Test 37');
test(survivedRobotsHealths([1, 10, 20, 30, 40, 50], [10, 9, 8, 7, 6, 5], 'RLRLRL'), [9, 7, 5], 'Test 38');
test(survivedRobotsHealths([10,20,30,40,50,60], [5,4,3,2,1,6], 'RLRLRL'), [], 'Test 39');
test(survivedRobotsHealths([1, 3, 5, 7, 9], [1, 3, 5, 7, 9], 'RLRLRL'), [2, 6, 9], 'Test 40');
test(survivedRobotsHealths([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 11, 12, 13, 14, 15, 16, 17, 18, 19], 'LRRLRLRLRL'), [10, 11, 14, 16, 18], 'Test 41');
test(survivedRobotsHealths([1, 10, 20, 30, 40], [100, 50, 200, 150, 250], 'RRRRL'), [246], 'Test 42');
test(survivedRobotsHealths([3,6,9,12,15,18], [100,200,300,400,500,600], 'RLRLRL'), [199, 399, 599], 'Test 43');
test(survivedRobotsHealths([100, 200, 300, 400, 500, 600, 700], [1, 2, 3, 4, 5, 6, 7], 'RLLRLRR'), [1, 3, 4, 6, 7], 'Test 44');
test(survivedRobotsHealths([5, 15, 25, 35, 45], [10, 20, 30, 40, 50], 'LRRRL'), [10, 47], 'Test 45');
test(survivedRobotsHealths([5, 4, 3, 2, 1], [1, 2, 3, 4, 5], 'LLLLR'), [1], 'Test 46');
test(survivedRobotsHealths([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 'RRRRRRRRRL'), [991], 'Test 47');
test(survivedRobotsHealths([3, 7, 11, 15, 19], [10, 15, 20, 25, 30], 'RLRLR'), [14, 24, 30], 'Test 48');
test(survivedRobotsHealths([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'RRLLRRLLRR'), [1, 2, 3, 6, 7, 10], 'Test 49');
test(survivedRobotsHealths([20, 30, 40, 50, 60], [100, 80, 90, 70, 60], 'RRRRR'), [100, 80, 90, 70, 60], 'Test 50');
test(survivedRobotsHealths([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 'RRRRRLLLLL'), [], 'Test 51');
test(survivedRobotsHealths([1,2,3,4,5,6,7,8,9,10], [1,1,1,1,1,1,1,1,1,1], 'LRRLLRRLLR'), [1, 1], 'Test 52');
test(survivedRobotsHealths([10, 20, 30, 40, 50], [60, 70, 80, 90, 100], 'LLLLL'), [60, 70, 80, 90, 100], 'Test 53');
test(survivedRobotsHealths([1, 3, 6, 8, 10], [10, 15, 20, 25, 30], 'RLRLR'), [14, 24, 30], 'Test 54');
test(survivedRobotsHealths([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 'RRRRRRRRRR'), [10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 'Test 55');
test(survivedRobotsHealths([5, 15, 25, 35, 45, 55], [5, 10, 15, 20, 25, 30], 'LRRRLR'), [5, 22, 30], 'Test 56');
test(survivedRobotsHealths([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 'RRRRRRRRRR'), [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 'Test 57');
test(survivedRobotsHealths([100,101,102,103,104,105,106,107,108,109], [10,20,30,40,50,60,70,80,90,100], 'LRRLLRLRLL'), [10, 38, 50, 69, 89, 100], 'Test 58');
test(survivedRobotsHealths([50,40,30,20,10], [1,2,3,4,5], 'RRRRR'), [1, 2, 3, 4, 5], 'Test 59');
test(survivedRobotsHealths([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], [10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 'RRLLLLRRLL'), [10, 10], 'Test 60');
test(survivedRobotsHealths([1,5,9,13,17], [1,2,3,4,5], 'RRRRR'), [1, 2, 3, 4, 5], 'Test 61');
test(survivedRobotsHealths([1,2,3,4,5,6,7,8,9,10], [1,2,3,4,5,6,7,8,9,10], 'RRRRRRRRRR'), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Test 62');
test(survivedRobotsHealths([2, 5, 7, 10, 13, 16], [10, 10, 10, 10, 10, 10], 'LLRRLL'), [10, 10], 'Test 63');
test(survivedRobotsHealths([1,2,3,4,5,6,7,8,9,10], [10,20,30,40,50,40,30,20,10,5], 'LRRRLLRLRL'), [10, 47, 40, 29, 9], 'Test 64');
test(survivedRobotsHealths([10,9,8,7,6,5,4,3,2,1], [10,20,30,40,50,60,70,80,90,100], 'RRRLLLRRRLL'), [10, 20, 30, 67, 80, 90, 100], 'Test 65');
test(survivedRobotsHealths([10, 20, 30, 40, 50], [100, 90, 80, 70, 60], 'RRRLL'), [100, 90, 78], 'Test 66');
test(survivedRobotsHealths([1, 3, 5, 7, 9, 11], [100, 90, 80, 70, 60, 50], 'RLRLRL'), [99, 79, 59], 'Test 67');
test(survivedRobotsHealths([100,200,300,400,500,600,700,800,900,1000], [1,2,3,4,5,6,7,8,9,10], 'LRLRLRLRLR'), [1, 2, 4, 6, 8, 10], 'Test 68');
test(survivedRobotsHealths([10, 20, 30, 40, 50], [5, 5, 5, 5, 5], 'RLRLR'), [5], 'Test 69');
test(survivedRobotsHealths([1,2,3,4,5,6,7,8,9,10], [10,9,8,7,6,5,4,3,2,1], 'RRRLLLLL'), Error: string index out of range, 'Test 70');
test(survivedRobotsHealths([2,6,10,14,18], [5,4,3,2,1], 'LLLLL'), [5, 4, 3, 2, 1], 'Test 71');
test(survivedRobotsHealths([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 'RLRLRLRLRL'), [9, 7, 5, 3, 1], 'Test 72');
test(survivedRobotsHealths([1, 6, 3, 8, 5, 10], [1, 1, 1, 1, 1, 1], 'RLRLRL'), [], 'Test 73');
test(survivedRobotsHealths([1, 10, 20, 30, 40, 50, 60, 70, 80, 90], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'RRRRRRRRRR'), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Test 74');
test(survivedRobotsHealths([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'RRLRLRLRLR'), [1, 4, 6, 8, 10], 'Test 75');
test(survivedRobotsHealths([1, 5, 10, 15, 20, 25, 30], [30, 25, 20, 15, 10, 5, 1], 'RRRRRLL'), [30, 25, 20, 15, 8], 'Test 76');
test(survivedRobotsHealths([3, 6, 9, 12, 15], [15, 20, 25, 30, 35], 'RRRLL'), [27, 35], 'Test 77');
test(survivedRobotsHealths([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [100, 90, 80, 70, 60, 50, 40, 30, 20, 10], 'RLRLRLRLRL'), [99, 79, 59, 39, 19], 'Test 78');
test(survivedRobotsHealths([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], [5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 'LLLLLRRRRR'), [], 'Test 79');
test(survivedRobotsHealths([5, 15, 25, 35, 45, 55], [5, 10, 15, 20, 25, 30], 'LRLRLR'), [5, 14, 24, 30], 'Test 80');
test(survivedRobotsHealths([5,15,25,35,45,55], [6,5,4,3,2,1], 'LLLLL'), Error: string index out of range, 'Test 81');
test(survivedRobotsHealths([10, 20, 30, 40, 50], [5, 15, 25, 35, 45], 'RLRLR'), [14, 34, 45], 'Test 82');
test(survivedRobotsHealths([10,20,30,40,50], [100,90,80,70,60], 'RLRLR'), [99, 79, 60], 'Test 83');
test(survivedRobotsHealths([50, 40, 30, 20, 10], [1, 2, 3, 4, 5], 'LLRRL'), [1, 4, 5], 'Test 84');
test(survivedRobotsHealths([100,200,300,400,500], [1000,900,800,700,600], 'RRRRR'), [1000, 900, 800, 700, 600], 'Test 85');
test(survivedRobotsHealths([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 'RRRRRRRRRR'), [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 'Test 86');
test(survivedRobotsHealths([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], [10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 'RRRRRRRRRL'), [91], 'Test 87');
test(survivedRobotsHealths([1,2,3,4,5,6,7,8,9,10], [10,20,30,40,50,60,70,80,90,100], 'LRRRRRRRRR'), [10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 'Test 88');
test(survivedRobotsHealths([5,10,15,20,25,30,35,40,45,50], [100,90,80,70,60,50,40,30,20,10], 'RRRRRRRRRR'), [100, 90, 80, 70, 60, 50, 40, 30, 20, 10], 'Test 89');
test(survivedRobotsHealths([100, 90, 80, 70, 60], [10, 20, 30, 40, 50], 'LRRRL'), [19, 30, 40, 50], 'Test 90');
test(survivedRobotsHealths([5, 15, 25, 35, 45], [10, 20, 30, 40, 50], 'RLRLR'), [19, 39, 50], 'Test 91');
test(survivedRobotsHealths([100, 200, 300, 400, 500], [50, 40, 30, 20, 10], 'RLRLR'), [49, 29, 10], 'Test 92');
test(survivedRobotsHealths([1, 3, 5, 7, 9], [10, 9, 8, 7, 6], 'RLRLR'), [9, 7, 6], 'Test 93');
test(survivedRobotsHealths([1,2,3,4,5], [5,5,5,5,5], 'LRRRL'), [5, 5, 5], 'Test 94');
test(survivedRobotsHealths([7, 6, 5, 4, 3, 2, 1], [1, 1, 1, 1, 1, 1, 1], 'RLRLRLR'), [1], 'Test 95');
test(survivedRobotsHealths([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 'RLRRLLRLRR'), [19, 48, 60, 79, 90, 100], 'Test 96');
test(survivedRobotsHealths([1,2,3,4,5,6,7,8,9,10], [10,20,30,40,50,60,70,80,90,100], 'RLRLRLRLRL'), [19, 39, 59, 79, 99], 'Test 97');
test(survivedRobotsHealths([5, 4, 3, 2, 1], [1, 2, 3, 4, 5], 'LLLLL'), [1, 2, 3, 4, 5], 'Test 98');
test(survivedRobotsHealths([1, 5, 10, 15, 20, 25], [1, 2, 3, 4, 5, 6], 'RRLLLL'), [1, 4, 5, 6], 'Test 99');
test(survivedRobotsHealths([5,10,15,20,25,30], [5,10,15,20,25,30], 'RRRLLL'), [17, 25, 30], 'Test 100');
test(survivedRobotsHealths([1, 5, 9, 13, 17], [2, 4, 6, 8, 10], 'RRRLL'), [5, 10], 'Test 101');
test(survivedRobotsHealths([1,10,2,9,3,8,4,7,5,6], [1,1,1,1,1,1,1,1,1,1], 'RLRLRLRLRL'), [], 'Test 102');
test(survivedRobotsHealths([5, 4, 3, 2, 1], [1, 10, 100, 1000, 10000], 'LLLLL'), [1, 10, 100, 1000, 10000], 'Test 103');
test(survivedRobotsHealths([2, 4, 6, 8, 10, 12, 14, 16, 18, 20], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'LRRLLRLRRL'), [1, 2, 5, 6, 8], 'Test 104');
test(survivedRobotsHealths([10,20,30,40,50,60,70,80,90,100], [1,2,3,4,5,6,7,8,9,10], 'LLLLLLLLLL'), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Test 105');
test(survivedRobotsHealths([1,3,5,7,9], [100,100,100,100,100], 'LLRLR'), [100, 100, 100], 'Test 106');
test(survivedRobotsHealths([1,2,3,4,5,6,7,8,9,10], [10,9,8,7,6,5,4,3,2,1], 'LLLLLLLLLL'), [10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 'Test 107');
test(survivedRobotsHealths([5,4,3,2,1], [1,2,3,4,5], 'RRLLR'), [1, 2, 3], 'Test 108');
test(survivedRobotsHealths([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 'RRRRLLLL'), Error: string index out of range, 'Test 109');
test(survivedRobotsHealths([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [5, 4, 3, 2, 1, 1, 2, 3, 4, 5], 'RLRLRLRLRL'), [], 'Test 110');
test(survivedRobotsHealths([8, 5, 2, 11, 14], [10, 20, 30, 40, 50], 'LRLLR'), [30, 39, 50], 'Test 111');
test(survivedRobotsHealths([1,9,2,8,3,7,4,6,5,10], [10,10,10,10,10,10,10,10,10,10], 'RLRLRLRLRL'), [], 'Test 112');
test(survivedRobotsHealths([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], [5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 'LRRRRRRRRR'), [9, 15, 20, 25, 30, 35, 40, 45, 50], 'Test 113');
test(survivedRobotsHealths([1, 5, 3, 7, 9], [9, 7, 5, 3, 1], 'LRRLR'), [9, 6, 5, 1], 'Test 114');
test(survivedRobotsHealths([1, 10, 20, 30, 40], [1, 2, 3, 4, 5], 'RLLLL'), [1, 3, 4, 5], 'Test 115');
test(survivedRobotsHealths([5, 2, 9, 3, 8], [10, 20, 15, 25, 30], 'RLRLR'), [10, 20, 15, 25, 30], 'Test 116');
test(survivedRobotsHealths([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 'LLLLLLLLLL'), [10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 'Test 117');
test(survivedRobotsHealths([10, 20, 30, 40, 50], [100, 200, 150, 50, 300], 'RLRLR'), [199, 149, 300], 'Test 118');
test(survivedRobotsHealths([1, 10, 2, 9, 3, 8, 4, 7, 5, 6], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 'LRRLRLRLRL'), [1, 1], 'Test 119');
test(survivedRobotsHealths([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 'LRRRRRRRRR'), [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], 'Test 120');
test(survivedRobotsHealths([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'RLRLRLRLRL'), [1, 3, 5, 7, 9], 'Test 121');
test(survivedRobotsHealths([10, 5, 15, 20, 25], [100, 50, 200, 300, 150], 'RLRLL'), [50, 298, 150], 'Test 122');
test(survivedRobotsHealths([10, 20, 30, 40, 50], [100, 90, 80, 70, 60], 'RRRRR'), [100, 90, 80, 70, 60], 'Test 123');
test(survivedRobotsHealths([10,20,30,40,50,60], [1,1,1,1,1,1], 'RLRLRL'), [], 'Test 124');
test(survivedRobotsHealths([1,2,3,4,5,6,7,8,9,10], [1,2,3,4,5,6,7,8,9,10], 'RRRLLLLL'), Error: string index out of range, 'Test 125');
test(survivedRobotsHealths([2, 4, 6, 8, 10, 12, 14, 16], [1, 2, 3, 4, 5, 6, 7, 8], 'LRRLLRRLL'), [1, 2, 5, 6], 'Test 126');
test(survivedRobotsHealths([1,2,3,4,5,6,7,8,9,10], [1,1,1,1,1,1,1,1,1,1], 'RLRLRLRLRL'), [], 'Test 127');
test(survivedRobotsHealths([9,7,5,3,1], [10,20,30,40,50], 'LLLLL'), [10, 20, 30, 40, 50], 'Test 128');
test(survivedRobotsHealths([5, 4, 3, 2, 1], [1, 2, 3, 4, 5], 'RLRLR'), [1, 2, 4], 'Test 129');
test(survivedRobotsHealths([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], [10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 'RLRLRLRLRL'), [], 'Test 130');
test(survivedRobotsHealths([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 'LLLLLLLLLL'), [10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 'Test 131');
test(survivedRobotsHealths([10,20,30,40,50,60,70,80,90,100], [100,90,80,70,60,50,40,30,20,10], 'RLLLLLLLLL'), [91], 'Test 132');
test(survivedRobotsHealths([1, 4, 6, 8, 10, 12], [5, 12, 7, 10, 3, 8], 'RLRLRR'), [11, 9, 3, 8], 'Test 133');
test(survivedRobotsHealths([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 'RLRLRLRLRL'), [], 'Test 134');
test(survivedRobotsHealths([100, 90, 80, 70, 60], [5, 10, 15, 20, 25], 'LLRRL'), [13, 20, 25], 'Test 135');
test(survivedRobotsHealths([1, 5, 9, 13, 17, 21, 25, 29], [25, 25, 25, 25, 25, 25, 25, 25], 'RLRLRLRL'), [], 'Test 136');
test(survivedRobotsHealths([1, 2, 3, 4, 5, 6, 7, 8, 9], [9, 8, 7, 6, 5, 4, 3, 2, 1], 'LRRLLRLRL'), [9, 8, 5, 3, 1], 'Test 137');
test(survivedRobotsHealths([1, 2, 3, 4, 5, 6], [6, 5, 4, 3, 2, 1], 'RRLLLR'), [6, 2, 1], 'Test 138');
test(survivedRobotsHealths([1, 3, 5, 7, 9], [2, 4, 6, 8, 10], 'LRRLL'), [2, 6, 10], 'Test 139');
test(survivedRobotsHealths([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6], 'RRRRRR'), [1, 2, 3, 4, 5, 6], 'Test 140');
test(survivedRobotsHealths([2, 4, 6, 8, 10, 12, 14, 16, 18, 20], [2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 'RRRRRLLLLL'), [7, 14, 16, 18, 20], 'Test 141');
test(survivedRobotsHealths([100, 90, 80, 70, 60, 50, 40, 30, 20, 10], [10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 'RLRLRLRLRL'), [10, 29, 49, 69, 89, 100], 'Test 142');
test(survivedRobotsHealths([5,1,9,3,7], [10,20,30,40,50], 'RLLRL'), [20, 30, 48], 'Test 143');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

// Auto-mark DONE when all tests pass
if (!failed) {
  const path = require("path");
  const fs = require("fs");
  const dir = __dirname;
  const folder = path.basename(dir);
  if (!folder.startsWith("DONE-")) {
    const parent = path.dirname(dir);
    const newDir = path.join(parent, "DONE-" + folder);
    fs.renameSync(dir, newDir);
    const readme = path.join(newDir, "README.md");
    if (fs.existsSync(readme)) {
      let c = fs.readFileSync(readme, "utf-8");
      if (!c.includes("<!-- SOLVED -->")) {
        c = c.replace(/^(# .+)$/m, "$1 ✅\n<!-- SOLVED -->");
        fs.writeFileSync(readme, c);
      }
    }
    console.log("✅ DONE → " + "DONE-" + folder);
  }
}
