// Test: 2383. Minimum Hours Of Training To Win A Competition
// 169 test cases from LeetCodeDataset
// Run: node test.js

const { minNumberOfHours } = require("./solution");

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

console.log("\n2383. Minimum Hours Of Training To Win A Competition\n");

test(minNumberOfHours(50, 50, [50,50], [50,50]), 52, 'Test 1');
test(minNumberOfHours(5, 3, [1,4,3,2], [2,6,3,1]), 8, 'Test 2');
test(minNumberOfHours(1, 1, [100], [100]), 200, 'Test 3');
test(minNumberOfHours(100, 100, [50,25,25], [50,25,25]), 1, 'Test 4');
test(minNumberOfHours(50, 50, [10,20,30], [10,20,30]), 11, 'Test 5');
test(minNumberOfHours(100, 100, [100], [100]), 2, 'Test 6');
test(minNumberOfHours(100, 100, [50,50], [50,50]), 1, 'Test 7');
test(minNumberOfHours(100, 100, [1,1,1,1], [1,1,1,1]), 0, 'Test 8');
test(minNumberOfHours(50, 50, [1,1,1,1,1,1,1,1,1,1], [1,1,1,1,1,1,1,1,1,1]), 0, 'Test 9');
test(minNumberOfHours(2, 4, [1], [3]), 0, 'Test 10');
test(minNumberOfHours(1, 1, [1,1,1,1], [1,1,1,1]), 5, 'Test 11');
test(minNumberOfHours(99, 99, [100], [100]), 4, 'Test 12');
test(minNumberOfHours(50, 50, [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 71, 'Test 13');
test(minNumberOfHours(50, 25, [1,2,3,4,5,6,7,8,9,10], [10,9,8,7,6,5,4,3,2,1]), 6, 'Test 14');
test(minNumberOfHours(30, 25, [10,15,20,5,10], [20,15,10,25,15]), 31, 'Test 15');
test(minNumberOfHours(40, 40, [20, 20, 20, 20], [20, 20, 20, 20]), 41, 'Test 16');
test(minNumberOfHours(30, 20, [10,20,30,40,50], [1,2,3,4,5]), 121, 'Test 17');
test(minNumberOfHours(15, 8, [7, 7, 7, 7, 7, 7], [6, 6, 6, 6, 6, 6]), 28, 'Test 18');
test(minNumberOfHours(70, 40, [5, 15, 25, 35, 45], [45, 35, 25, 15, 5]), 62, 'Test 19');
test(minNumberOfHours(1, 1, [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], [15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 135, 'Test 20');
test(minNumberOfHours(2, 2, [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 19, 'Test 21');
test(minNumberOfHours(20, 25, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 36, 'Test 22');
test(minNumberOfHours(10, 5, [5,6,7,8], [1,2,3,4]), 17, 'Test 23');
test(minNumberOfHours(20, 5, [10,15,5,20], [3,7,10,2]), 31, 'Test 24');
test(minNumberOfHours(50, 50, [10,20,30,40], [5,15,25,35]), 51, 'Test 25');
test(minNumberOfHours(40, 25, [10,15,10,20,15,25], [25,20,15,10,25,20]), 57, 'Test 26');
test(minNumberOfHours(30, 30, [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], [20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 181, 'Test 27');
test(minNumberOfHours(10, 20, [1,3,5,7,9], [9,7,5,3,1]), 16, 'Test 28');
test(minNumberOfHours(1, 1, [5,5,5,5,5,5,5,5,5,5], [1,2,3,4,5,6,7,8,9,10]), 51, 'Test 29');
test(minNumberOfHours(50, 30, [40,35,20,10,5], [25,20,15,10,5]), 61, 'Test 30');
test(minNumberOfHours(70, 30, [20,10,30,5,20], [15,25,10,20,5]), 16, 'Test 31');
test(minNumberOfHours(20, 15, [10,20,30], [5,15,25]), 41, 'Test 32');
test(minNumberOfHours(1, 10, [1,2,3,4,5,6,7,8,9], [9,8,7,6,5,4,3,2,1]), 45, 'Test 33');
test(minNumberOfHours(20, 15, [5, 6, 7, 8, 9, 10, 11, 12, 13, 14], [14, 13, 12, 11, 10, 9, 8, 7, 6, 5]), 76, 'Test 34');
test(minNumberOfHours(50, 50, [25,25,25,25], [20,20,20,20]), 51, 'Test 35');
test(minNumberOfHours(15, 10, [1,2,3,4,5,6,7,8,9,10], [10,9,8,7,6,5,4,3,2,1]), 42, 'Test 36');
test(minNumberOfHours(25, 15, [8, 7, 6, 5, 4, 3, 2, 1], [1, 2, 3, 4, 5, 6, 7, 8]), 12, 'Test 37');
test(minNumberOfHours(5, 5, [3, 3, 3, 3, 3, 3, 3, 3, 3, 3], [3, 3, 3, 3, 3, 3, 3, 3, 3, 3]), 26, 'Test 38');
test(minNumberOfHours(10, 15, [3,2,6,1], [8,4,2,7]), 3, 'Test 39');
test(minNumberOfHours(20, 25, [10, 10, 10, 10], [25, 26, 27, 28]), 22, 'Test 40');
test(minNumberOfHours(10, 10, [5, 15, 25, 35], [30, 20, 10, 5]), 92, 'Test 41');
test(minNumberOfHours(30, 30, [1,1,1,1,1,1,1,1,1,1], [9,9,9,9,9,9,9,9,9,9]), 0, 'Test 42');
test(minNumberOfHours(10, 10, [1,2,3,4,5,6,7,8,9,10], [10,9,8,7,6,5,4,3,2,1]), 47, 'Test 43');
test(minNumberOfHours(30, 50, [10, 20, 30], [25, 20, 15]), 31, 'Test 44');
test(minNumberOfHours(10, 10, [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 91, 'Test 45');
test(minNumberOfHours(15, 20, [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3], [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2]), 46, 'Test 46');
test(minNumberOfHours(100, 100, [20,30,40,50,60,70,80,90,100], [1,2,3,4,5,6,7,8,9]), 441, 'Test 47');
test(minNumberOfHours(10, 10, [10,20,30,40,50], [1,2,3,4,5]), 141, 'Test 48');
test(minNumberOfHours(25, 25, [20,15,10,5], [5,10,15,20]), 26, 'Test 49');
test(minNumberOfHours(30, 20, [15, 25, 10], [10, 15, 25]), 21, 'Test 50');
test(minNumberOfHours(50, 30, [10, 20, 15, 25], [5, 25, 20, 30]), 21, 'Test 51');
test(minNumberOfHours(1, 1, [99, 98, 97, 96, 95], [95, 96, 97, 98, 99]), 580, 'Test 52');
test(minNumberOfHours(1, 1, [10,20,30,40], [40,30,20,10]), 140, 'Test 53');
test(minNumberOfHours(10, 5, [3,2,6,1], [5,4,3,2]), 4, 'Test 54');
test(minNumberOfHours(5, 5, [3,3,3,3,3,3,3,3,3,3], [3,3,3,3,3,3,3,3,3,3]), 26, 'Test 55');
test(minNumberOfHours(5, 5, [1, 2, 3, 4, 5], [5, 4, 3, 2, 1]), 12, 'Test 56');
test(minNumberOfHours(60, 30, [20, 20, 20, 20, 20], [20, 20, 20, 20, 20]), 41, 'Test 57');
test(minNumberOfHours(75, 40, [40, 30, 20, 10, 5], [50, 40, 30, 20, 10]), 42, 'Test 58');
test(minNumberOfHours(50, 50, [25,10,10,5], [20,25,30,10]), 1, 'Test 59');
test(minNumberOfHours(50, 50, [50, 49, 48, 47, 46, 45, 44, 43, 42, 41], [51, 49, 48, 47, 46, 45, 44, 43, 42, 41]), 408, 'Test 60');
test(minNumberOfHours(10, 5, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 52, 'Test 61');
test(minNumberOfHours(20, 10, [25, 15, 5, 10, 20], [30, 20, 10, 5, 15]), 77, 'Test 62');
test(minNumberOfHours(1, 1, [99,98,97,96,95,94,93,92,91,90], [2,3,4,5,6,7,8,9,10,11]), 947, 'Test 63');
test(minNumberOfHours(1, 100, [0,0,0,0], [99,98,97,96]), 0, 'Test 64');
test(minNumberOfHours(30, 30, [1,2,3,4,5,6,7,8,9,10], [10,9,8,7,6,5,4,3,2,1]), 26, 'Test 65');
test(minNumberOfHours(5, 3, [1,2,3,4,5], [5,4,3,2,1]), 14, 'Test 66');
test(minNumberOfHours(10, 10, [5, 6, 7, 8], [15, 14, 13, 12]), 23, 'Test 67');
test(minNumberOfHours(80, 60, [15,20,25,30,35], [65,70,75,80,85]), 52, 'Test 68');
test(minNumberOfHours(40, 30, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10], [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]), 61, 'Test 69');
test(minNumberOfHours(100, 100, [50,30,20], [20,30,50]), 1, 'Test 70');
test(minNumberOfHours(25, 25, [13, 14, 15, 16, 17], [17, 16, 15, 14, 13]), 51, 'Test 71');
test(minNumberOfHours(30, 30, [29, 28, 27, 26, 25], [25, 26, 27, 28, 29]), 106, 'Test 72');
test(minNumberOfHours(20, 20, [5,5,5,5,5,5,5,5,5,5], [1,2,3,4,5,6,7,8,9,10]), 31, 'Test 73');
test(minNumberOfHours(100, 100, [50,25,12,6,3,1], [1,3,6,12,25,50]), 0, 'Test 74');
test(minNumberOfHours(80, 70, [10,20,30,40,50,60,70,80,90,100], [1,2,3,4,5,6,7,8,9,10]), 471, 'Test 75');
test(minNumberOfHours(100, 1, [99, 99, 99], [98, 97, 96]), 296, 'Test 76');
test(minNumberOfHours(10, 15, [3,4,5,6,7], [5,6,7,8,9]), 16, 'Test 77');
test(minNumberOfHours(20, 10, [1,2,3,4,5,6,7,8,9,10], [10,9,8,7,6,5,4,3,2,1]), 37, 'Test 78');
test(minNumberOfHours(50, 20, [25,25,25,25], [15,15,15,15]), 51, 'Test 79');
test(minNumberOfHours(50, 50, [10, 20, 30, 40], [40, 30, 20, 10]), 51, 'Test 80');
test(minNumberOfHours(10, 10, [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], [20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 212, 'Test 81');
test(minNumberOfHours(100, 100, [50,40,30,20,10], [10,20,30,40,50]), 51, 'Test 82');
test(minNumberOfHours(60, 25, [20, 20, 20, 20], [15, 25, 35, 45]), 21, 'Test 83');
test(minNumberOfHours(60, 40, [10,20,30,40], [40,30,20,10]), 42, 'Test 84');
test(minNumberOfHours(10, 10, [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 11, 'Test 85');
test(minNumberOfHours(50, 50, [10, 20, 30, 40], [45, 35, 25, 15]), 51, 'Test 86');
test(minNumberOfHours(3, 4, [2,5,7,8], [5,3,6,10]), 22, 'Test 87');
test(minNumberOfHours(50, 10, [30,20,10,5,25], [15,25,5,10,30]), 47, 'Test 88');
test(minNumberOfHours(1, 1, [99, 1, 1], [1, 99, 1]), 199, 'Test 89');
test(minNumberOfHours(20, 20, [10,20,30,40], [15,15,15,15]), 81, 'Test 90');
test(minNumberOfHours(100, 100, [99,99,99,99], [99,99,99,99]), 297, 'Test 91');
test(minNumberOfHours(1, 1, [90,80,70,60,50,40,30,20,10], [9,8,7,6,5,4,3,2,1]), 459, 'Test 92');
test(minNumberOfHours(50, 50, [25,25,25,25], [20,30,20,30]), 51, 'Test 93');
test(minNumberOfHours(10, 10, [10, 10, 10, 10], [11, 12, 13, 14]), 33, 'Test 94');
test(minNumberOfHours(1, 1, [10,20,30,40,50], [50,40,30,20,10]), 200, 'Test 95');
test(minNumberOfHours(1, 1, [1, 3, 2, 4, 5, 3, 2, 1], [2, 1, 3, 2, 1, 4, 3, 2]), 23, 'Test 96');
test(minNumberOfHours(100, 1, [98,1,0,0,0], [98,1,0,0,0]), 98, 'Test 97');
test(minNumberOfHours(30, 25, [5,15,25,35,45], [40,35,30,25,20]), 112, 'Test 98');
test(minNumberOfHours(20, 10, [5,10,15,20], [8,6,4,2]), 31, 'Test 99');
test(minNumberOfHours(50, 30, [10, 20, 30, 40], [20, 30, 40, 50]), 51, 'Test 100');
test(minNumberOfHours(15, 20, [3, 3, 3, 3, 3], [1, 2, 3, 4, 5]), 1, 'Test 101');
test(minNumberOfHours(10, 50, [25,25,25,25], [51,52,53,54]), 93, 'Test 102');
test(minNumberOfHours(1, 1, [10,20,30], [30,20,10]), 90, 'Test 103');
test(minNumberOfHours(50, 100, [1,2,3,4,5,6,7,8,9,10], [10,9,8,7,6,5,4,3,2,1]), 6, 'Test 104');
test(minNumberOfHours(1, 1, [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]), 16, 'Test 105');
test(minNumberOfHours(30, 15, [5, 10, 15, 20, 25], [10, 15, 20, 25, 30]), 46, 'Test 106');
test(minNumberOfHours(50, 50, [25,25,25,25], [25,25,25,25]), 51, 'Test 107');
test(minNumberOfHours(60, 60, [10,20,30,40,50,60,70,80,90,100], [100,90,80,70,60,50,40,30,20,10]), 532, 'Test 108');
test(minNumberOfHours(10, 10, [5, 5, 5, 5], [5, 5, 5, 5]), 11, 'Test 109');
test(minNumberOfHours(1, 1, [10,9,8,7,6,5,4,3,2,1], [1,2,3,4,5,6,7,8,9,10]), 56, 'Test 110');
test(minNumberOfHours(50, 50, [10,20,30], [15,25,35]), 11, 'Test 111');
test(minNumberOfHours(10, 10, [5,5,5,5,5], [1,2,3,4,5]), 16, 'Test 112');
test(minNumberOfHours(1, 1, [1,1,1], [1,1,1]), 4, 'Test 113');
test(minNumberOfHours(1, 100, [1, 1, 1], [1, 1, 1]), 3, 'Test 114');
test(minNumberOfHours(1, 50, [50, 50, 50, 50], [1, 1, 1, 1]), 200, 'Test 115');
test(minNumberOfHours(100, 1, [100], [1]), 2, 'Test 116');
test(minNumberOfHours(100, 100, [50, 25, 25], [50, 25, 25]), 1, 'Test 117');
test(minNumberOfHours(5, 5, [2, 3, 4], [4, 3, 2]), 5, 'Test 118');
test(minNumberOfHours(30, 30, [10,20,10], [5,15,10]), 11, 'Test 119');
test(minNumberOfHours(15, 15, [5, 5, 5], [5, 5, 5]), 1, 'Test 120');
test(minNumberOfHours(50, 50, [10, 20, 30, 40], [10, 20, 30, 40]), 51, 'Test 121');
test(minNumberOfHours(50, 50, [50, 50], [50, 50]), 52, 'Test 122');
test(minNumberOfHours(1, 1, [1, 1, 1, 1], [1, 1, 1, 1]), 5, 'Test 123');
test(minNumberOfHours(20, 20, [5, 5, 5, 5, 5], [5, 5, 5, 5, 5]), 6, 'Test 124');
test(minNumberOfHours(50, 50, [50, 40, 30], [30, 40, 50]), 71, 'Test 125');
test(minNumberOfHours(50, 1, [25, 25, 25], [25, 25, 25]), 51, 'Test 126');
test(minNumberOfHours(1, 1, [5, 4, 3, 2, 1], [1, 2, 3, 4, 5]), 16, 'Test 127');
test(minNumberOfHours(10, 10, [10,10,10], [10,10,10]), 22, 'Test 128');
test(minNumberOfHours(50, 1, [1, 1, 1, 1], [50, 50, 50, 50]), 50, 'Test 129');
test(minNumberOfHours(1, 100, [1], [100]), 2, 'Test 130');
test(minNumberOfHours(20, 20, [10, 10, 10], [10, 10, 10]), 11, 'Test 131');
test(minNumberOfHours(100, 1, [99, 98, 97], [97, 98, 99]), 292, 'Test 132');
test(minNumberOfHours(50, 50, [10, 10, 10, 10, 10], [10, 10, 10, 10, 10]), 1, 'Test 133');
test(minNumberOfHours(1, 100, [1, 1, 1, 1], [1, 1, 1, 1]), 4, 'Test 134');
test(minNumberOfHours(5, 5, [3,2,1], [1,2,3]), 2, 'Test 135');
test(minNumberOfHours(50, 50, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 0, 'Test 136');
test(minNumberOfHours(5, 5, [10, 10, 10], [10, 10, 10]), 32, 'Test 137');
test(minNumberOfHours(30, 10, [10,10,10], [5,5,5]), 1, 'Test 138');
test(minNumberOfHours(100, 100, [1,1,1,1,1,1,1,1,1,1], [1,1,1,1,1,1,1,1,1,1]), 0, 'Test 139');
test(minNumberOfHours(10, 10, [1,2,3,4,5], [5,4,3,2,1]), 6, 'Test 140');
test(minNumberOfHours(50, 50, [25, 25, 25, 25], [25, 25, 25, 25]), 51, 'Test 141');
test(minNumberOfHours(10, 10, [1, 2, 3, 4, 5], [5, 4, 3, 2, 1]), 6, 'Test 142');
test(minNumberOfHours(50, 50, [5,5,5,5,5,5,5,5,5,5], [5,5,5,5,5,5,5,5,5,5]), 1, 'Test 143');
test(minNumberOfHours(50, 50, [10, 20, 30], [15, 25, 35]), 11, 'Test 144');
test(minNumberOfHours(10, 1, [2,3,4,5], [3,4,5,6]), 8, 'Test 145');
test(minNumberOfHours(100, 100, [10,20,30], [30,20,10]), 0, 'Test 146');
test(minNumberOfHours(100, 100, [50, 30], [40, 60]), 0, 'Test 147');
test(minNumberOfHours(10, 10, [5,5,5,5], [5,5,5,5]), 11, 'Test 148');
test(minNumberOfHours(1, 1, [1, 2, 3], [1, 2, 3]), 7, 'Test 149');
test(minNumberOfHours(10, 10, [1,1,1,1], [1,1,1,1]), 0, 'Test 150');
test(minNumberOfHours(10, 10, [10,9,8,7], [7,8,9,10]), 25, 'Test 151');
test(minNumberOfHours(50, 50, [50, 25, 25], [50, 25, 25]), 52, 'Test 152');
test(minNumberOfHours(3, 3, [1,1,1,1], [1,1,1,1]), 2, 'Test 153');
test(minNumberOfHours(50, 50, [50,50,50], [50,50,50]), 102, 'Test 154');
test(minNumberOfHours(100, 100, [50,50,50], [30,30,30]), 51, 'Test 155');
test(minNumberOfHours(20, 20, [10, 10], [10, 10]), 1, 'Test 156');
test(minNumberOfHours(10, 10, [10, 10, 10], [10, 10, 10]), 22, 'Test 157');
test(minNumberOfHours(10, 1, [10, 10, 10], [1, 1, 1]), 22, 'Test 158');
test(minNumberOfHours(30, 10, [15, 15, 15], [5, 5, 5]), 16, 'Test 159');
test(minNumberOfHours(60, 50, [30, 20, 10], [10, 20, 30]), 1, 'Test 160');
test(minNumberOfHours(50, 50, [10,20,30], [5,15,25]), 11, 'Test 161');
test(minNumberOfHours(1, 1, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 11, 'Test 162');
test(minNumberOfHours(100, 100, [50, 40, 30], [10, 20, 30]), 21, 'Test 163');
test(minNumberOfHours(3, 3, [1,1,3,3], [3,3,1,1]), 7, 'Test 164');
test(minNumberOfHours(50, 50, [10, 20, 30], [5, 15, 25]), 11, 'Test 165');
test(minNumberOfHours(1, 50, [25, 25, 25], [25, 25, 25]), 75, 'Test 166');
test(minNumberOfHours(100, 1, [1, 1, 1], [1, 1, 1]), 1, 'Test 167');
test(minNumberOfHours(50, 50, [50], [50]), 2, 'Test 168');
test(minNumberOfHours(10, 10, [5,5,5], [5,5,5]), 6, 'Test 169');

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
