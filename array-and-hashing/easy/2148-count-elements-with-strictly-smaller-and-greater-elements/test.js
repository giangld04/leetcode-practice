// Test: 2148. Count Elements With Strictly Smaller And Greater Elements
// 120 test cases from LeetCodeDataset
// Run: node test.js

const { countElements } = require("./solution");

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

console.log("\n2148. Count Elements With Strictly Smaller And Greater Elements\n");

test(countElements([1,1,2,2,3,3,4,4]), 4, 'Test 1');
test(countElements([-100000,100000]), 0, 'Test 2');
test(countElements([10,9,8,7,6,5,4,3,2,1]), 8, 'Test 3');
test(countElements([100000,-100000,0,1,2]), 3, 'Test 4');
test(countElements([7,7,7,7,7,7,8,9]), 1, 'Test 5');
test(countElements([1]), 0, 'Test 6');
test(countElements([1,1,2,2,3,3]), 2, 'Test 7');
test(countElements([100000,-100000,0,10,20]), 3, 'Test 8');
test(countElements([1,1,2,2,3,3,4,4,5,5]), 6, 'Test 9');
test(countElements([11,7,2,15]), 2, 'Test 10');
test(countElements([5,5,5,5,5]), 0, 'Test 11');
test(countElements([0,0,0,0,0]), 0, 'Test 12');
test(countElements([5,5,5,5]), 0, 'Test 13');
test(countElements([1,2,3,4,5]), 3, 'Test 14');
test(countElements([0]), 0, 'Test 15');
test(countElements([100,200,300,400,500]), 3, 'Test 16');
test(countElements([0,0,0,1]), 0, 'Test 17');
test(countElements([-1,0,1]), 1, 'Test 18');
test(countElements([1,2]), 0, 'Test 19');
test(countElements([1,2,3,3,3,4,5]), 5, 'Test 20');
test(countElements([-3,3,3,90]), 2, 'Test 21');
test(countElements([10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]), 0, 'Test 22');
test(countElements([1,2,2,3,4,5,5,6,7,8,9,10,10,11]), 12, 'Test 23');
test(countElements([100000,100000,100000,100000,100000,100000,100000,100000,100000,100000]), 0, 'Test 24');
test(countElements([1000,900,800,700,600,500,400,300,200,100,0,-100,-200,-300,-400,-500,-600,-700,-800,-900,-1000]), 19, 'Test 25');
test(countElements([50000,-50000,0,1000,500,250,750,150,300,600]), 8, 'Test 26');
test(countElements([100000,100000,99999,99999,50000,50000,-50000,-50000,-99999,-99999,-100000,-100000]), 8, 'Test 27');
test(countElements([50,20,30,40,10,60,70,80,90,100]), 8, 'Test 28');
test(countElements([1,2,3,4,5,6,7,8,9,10]), 8, 'Test 29');
test(countElements([50000, -50000, 25000, -25000, 12500, -12500, 6250, -6250, 3125, -3125]), 8, 'Test 30');
test(countElements([0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1]), 0, 'Test 31');
test(countElements([1,2,2,3,4,4,5,6,6,7]), 8, 'Test 32');
test(countElements([-1000,-500,-250,-100,-50,-25,0,25,50,100,250,500,1000]), 11, 'Test 33');
test(countElements([1,2,3,4,5,1,2,3,4,5]), 6, 'Test 34');
test(countElements([15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 13, 'Test 35');
test(countElements([-10,10,-20,20,-30,30,-40,40,-50,50]), 8, 'Test 36');
test(countElements([1,1000,2,999,3,998,4,997,5,996]), 8, 'Test 37');
test(countElements([5,3,8,6,2,7,4,1,9,10]), 8, 'Test 38');
test(countElements([5, 6, 7, 8, 9, 10, 11, 12, 13, 14]), 8, 'Test 39');
test(countElements([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29]), 13, 'Test 40');
test(countElements([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39]), 18, 'Test 41');
test(countElements([10,10,10,10,11,11,11,11,12,12,12,12]), 4, 'Test 42');
test(countElements([10,10,20,20,30,30,40,40,50,50]), 6, 'Test 43');
test(countElements([10000, 9999, 9998, 9997, 9996, 9995, 9994, 9993, 9992, 9991]), 8, 'Test 44');
test(countElements([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1]), 16, 'Test 45');
test(countElements([100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81]), 18, 'Test 46');
test(countElements([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), 28, 'Test 47');
test(countElements([100,200,300,400,500,100,200,300,400,500]), 6, 'Test 48');
test(countElements([1,1,1,1,1,1,1,1,1,2]), 0, 'Test 49');
test(countElements([10,20,10,20,10,20,10,20,10,20]), 0, 'Test 50');
test(countElements([10,10,10,10,10,11,12,13,14,15,15,15,15,15]), 4, 'Test 51');
test(countElements([50000, 49999, 49998, 49997, 49996, 49995, 49994, 49993, 49992, 49991, 49990, 49989, 49988, 49987, 49986, 49985, 49984, 49983, 49982, 49981]), 18, 'Test 52');
test(countElements([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 13, 'Test 53');
test(countElements([1,2,2,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]), 15, 'Test 54');
test(countElements([-100000,100000,-90000,90000,-80000,80000,-70000,70000,-60000,60000]), 8, 'Test 55');
test(countElements([-100, -99, -98, -97, -96, -95, -94, -93, -92, -91, -90]), 9, 'Test 56');
test(countElements([100,200,300,400,500,600,700,800,900,1000,100,200,300,400,500]), 12, 'Test 57');
test(countElements([10,10,10,9,8,7,6,5,4,3,2,1]), 8, 'Test 58');
test(countElements([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10]), 16, 'Test 59');
test(countElements([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29]), 13, 'Test 60');
test(countElements([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]), 16, 'Test 61');
test(countElements([1,2,3,4,5,5,4,3,2,1]), 6, 'Test 62');
test(countElements([1,3,2,4,5,6,7,8,9,10,11,12]), 10, 'Test 63');
test(countElements([100000,100000,100000,100000,100000,100000]), 0, 'Test 64');
test(countElements([1, 2, 2, 3, 4, 4, 5]), 5, 'Test 65');
test(countElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]), 23, 'Test 66');
test(countElements([-10000, -9999, -9998, -9997, -9996, -9995, -9994, -9993, -9992, -9991]), 8, 'Test 67');
test(countElements([1,2,3,4,5,6,7,8,9,10,10,10]), 8, 'Test 68');
test(countElements([0,0,0,0,1,1,1,1,-1,-1,-1,-1]), 4, 'Test 69');
test(countElements([10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000]), 0, 'Test 70');
test(countElements([1, 10, 100, 1000, 10000, 100000, 1, 10, 100, 1000, 10000, 100000]), 8, 'Test 71');
test(countElements([50,50,50,50,50,49,48,47,46,45,51,52,53,54,55]), 13, 'Test 72');
test(countElements([-100000,-99999,-99998,-99997,-99996]), 3, 'Test 73');
test(countElements([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 18, 'Test 74');
test(countElements([10000, 10000, 10001, 10001, 9999, 9999, 9998, 9998, 10002, 10002]), 6, 'Test 75');
test(countElements([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, -1, -2, -3, -4, -5]), 18, 'Test 76');
test(countElements([100, 90, 80, 70, 60, 50, 40, 30, 20, 10]), 8, 'Test 77');
test(countElements([1,-1,2,-2,3,-3,4,-4,5,-5,6,-6,7,-7,8,-8,9,-9,10,-10]), 18, 'Test 78');
test(countElements([1,2,2,3,3,3,4,4,4,4,5,5,5,5,5]), 9, 'Test 79');
test(countElements([0,0,0,1,2,3,4,5,6,7,8,9,10]), 9, 'Test 80');
test(countElements([30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 28, 'Test 81');
test(countElements([2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10]), 14, 'Test 82');
test(countElements([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]), 23, 'Test 83');
test(countElements([30,28,26,24,22,20,18,16,14,12,10,8,6,4,2]), 13, 'Test 84');
test(countElements([1,2,2,3,3,3,4,4,4,4,5,5,5,5,5,5,6,6,6,6,6,6]), 15, 'Test 85');
test(countElements([300, 200, 100, 400, 500, 600, 150, 250, 350, 450]), 8, 'Test 86');
test(countElements([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, -10, -20, -30, -40, -50]), 13, 'Test 87');
test(countElements([0,0,0,1,1,1,2,2,2,3,3,3]), 6, 'Test 88');
test(countElements([1, 100000, -1, -100000, 50000, 50001, 50002, 50003, 50004, 50005]), 8, 'Test 89');
test(countElements([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 0, 'Test 90');
test(countElements([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5]), 9, 'Test 91');
test(countElements([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150]), 13, 'Test 92');
test(countElements([-1000, -2000, -3000, -4000, -5000, -6000, -7000, -8000, -9000, -10000, -1000, -2000, -3000, -4000, -5000]), 12, 'Test 93');
test(countElements([1,3,2,4,5,6,7,8,9,10,1,3,2,4,5,6,7,8,9,10]), 16, 'Test 94');
test(countElements([5,4,3,2,1,2,3,4,5,6,7,8,9,10]), 12, 'Test 95');
test(countElements([50,10,20,30,40,50,60,70,80,90,100]), 9, 'Test 96');
test(countElements([100,101,99,102,98,103,97,104,96,105]), 8, 'Test 97');
test(countElements([100000, 90000, 80000, 70000, 60000, 50000, 40000, 30000, 20000, 10000]), 8, 'Test 98');
test(countElements([100000, 99999, 99998, 99997, 99996, 99995, 99994, 99993, 99992, 99991, 99990]), 9, 'Test 99');
test(countElements([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 0, 'Test 100');
test(countElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 16, 'Test 101');
test(countElements([1,1,1,2,2,2,2,3,3,3,3,3,4,4,4,4,4,5,5,5,5,5,5]), 14, 'Test 102');
test(countElements([100000,100000,100000,99999,99999,99998,99998,99997,99997,99996]), 6, 'Test 103');
test(countElements([-50000, 50000, 0, 1, 2, -1, -2, -3, 3, 4, -4, 5, -5, 6, -6]), 13, 'Test 104');
test(countElements([1,1,2,3,4,5,6,7,8,9,10,10,9,8,7,6,5,4,3,2,1,1]), 16, 'Test 105');
test(countElements([1000,500,250,125,62,31,15,7,3,1]), 8, 'Test 106');
test(countElements([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10]), 8, 'Test 107');
test(countElements([5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1]), 0, 'Test 108');
test(countElements([1,1,1,1,2,2,2,2,2,3,3,3,3,4,4,4,5,5,6,7,8,9,10]), 18, 'Test 109');
test(countElements([30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11]), 18, 'Test 110');
test(countElements([50000, 50000, 50000, 40000, 60000, 30000, 70000, 20000, 80000, 10000]), 8, 'Test 111');
test(countElements([1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010]), 9, 'Test 112');
test(countElements([1,2,3,4,5,6,7,8,9,10,10,10,10,10]), 8, 'Test 113');
test(countElements([1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100,110]), 18, 'Test 114');
test(countElements([-1,-2,-3,-4,-5,-6,-7,-8,-9,-10]), 8, 'Test 115');
test(countElements([1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 1000, 2000, 3000, 4000, 5000]), 12, 'Test 116');
test(countElements([12345,-12345,67890,-67890,11111,-11111,22222,-22222,33333,-33333,44444,-44444,55555,-55555]), 12, 'Test 117');
test(countElements([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150]), 13, 'Test 118');
test(countElements([-100000,-50000,-10000,-5000,-1000,-500,-100,-50,-10,-5,0,5,10,50,100,500,1000,5000,10000,50000,100000]), 19, 'Test 119');
test(countElements([10, 20, 20, 30, 30, 40, 40, 50, 50]), 6, 'Test 120');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

