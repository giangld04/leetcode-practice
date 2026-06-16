// Test: 1588. Sum Of All Odd Length Subarrays
// 104 test cases from LeetCodeDataset
// Run: node test.js

const { sumOddLengthSubarrays } = require("./solution");

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

console.log("\n1588. Sum Of All Odd Length Subarrays\n");

test(sumOddLengthSubarrays([10,20,30,40,50,60,70,80,90,100,110]), 8760, 'Test 1');
test(sumOddLengthSubarrays([2,4,6,8,10]), 114, 'Test 2');
test(sumOddLengthSubarrays([1,2]), 3, 'Test 3');
test(sumOddLengthSubarrays([5]), 5, 'Test 4');
test(sumOddLengthSubarrays([3,1,4,1,5,9,2,6,5,3,5]), 614, 'Test 5');
test(sumOddLengthSubarrays([5,5,5,5,5]), 95, 'Test 6');
test(sumOddLengthSubarrays([100,200,300,400,500]), 5700, 'Test 7');
test(sumOddLengthSubarrays([10,11,12]), 66, 'Test 8');
test(sumOddLengthSubarrays([1]), 1, 'Test 9');
test(sumOddLengthSubarrays([7]), 7, 'Test 10');
test(sumOddLengthSubarrays([1,2,3,4,5,6,7,8,9,10]), 605, 'Test 11');
test(sumOddLengthSubarrays([100,200,300]), 1200, 'Test 12');
test(sumOddLengthSubarrays([1,2,3,4,5]), 57, 'Test 13');
test(sumOddLengthSubarrays([5,5,5,5,5,5,5,5,5]), 425, 'Test 14');
test(sumOddLengthSubarrays([1,3,5,7,9,11,13]), 308, 'Test 15');
test(sumOddLengthSubarrays([9,8,7,6,5,4,3,2,1]), 425, 'Test 16');
test(sumOddLengthSubarrays([1,4,2,5,3]), 58, 'Test 17');
test(sumOddLengthSubarrays([1,3,5,7,9]), 95, 'Test 18');
test(sumOddLengthSubarrays([2,4,6,8,10,12,14,16]), 540, 'Test 19');
test(sumOddLengthSubarrays([7,1,14,11]), 81, 'Test 20');
test(sumOddLengthSubarrays([99,98,97,96,95,94,93,92,91,90,89,88,87,86,85,84,83,82,81,80,79,78,77,76,75]), 127803, 'Test 21');
test(sumOddLengthSubarrays([50,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 281775, 'Test 22');
test(sumOddLengthSubarrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]), 281775, 'Test 23');
test(sumOddLengthSubarrays([1,3,5,7,9,11,13,15,17,19,21,23,25]), 3003, 'Test 24');
test(sumOddLengthSubarrays([4,8,12,16,20,24,28,32,36,40,44,48,52,56,60,64,68,72,76,80,84,88,92,96,100,104,108,112,116,120]), 153760, 'Test 25');
test(sumOddLengthSubarrays([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39]), 15400, 'Test 26');
test(sumOddLengthSubarrays([15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 2752, 'Test 27');
test(sumOddLengthSubarrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]), 19097, 'Test 28');
test(sumOddLengthSubarrays([10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 19540, 'Test 29');
test(sumOddLengthSubarrays([999, 1000, 999, 1000, 999, 1000, 999, 1000, 999, 1000]), 109945, 'Test 30');
test(sumOddLengthSubarrays([23,45,12,67,89,34,56,78,90,11,22,33,44,55,66,77,88,99,100,111,222,333,444,555,666,777,888,999]), 311940, 'Test 31');
test(sumOddLengthSubarrays([5,10,15,20,25,30,35,40,45,50,55,60,65,70,75]), 13760, 'Test 32');
test(sumOddLengthSubarrays([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41]), 18711, 'Test 33');
test(sumOddLengthSubarrays([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150]), 27520, 'Test 34');
test(sumOddLengthSubarrays([3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]), 8208, 'Test 35');
test(sumOddLengthSubarrays([250,240,230,220,210,200,190,180,170,160,150,140,130,120,110,100,90,80,70,60,50,40,30,20,10]), 190970, 'Test 36');
test(sumOddLengthSubarrays([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39]), 15400, 'Test 37');
test(sumOddLengthSubarrays([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59]), 74400, 'Test 38');
test(sumOddLengthSubarrays([8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120, 128, 136, 144, 152, 160]), 64680, 'Test 39');
test(sumOddLengthSubarrays([3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51]), 13203, 'Test 40');
test(sumOddLengthSubarrays([100,200,300,400,500,600,700,800,900,1000,1100,1200,1300,1400,1500,1600,1700]), 440100, 'Test 41');
test(sumOddLengthSubarrays([30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 38440, 'Test 42');
test(sumOddLengthSubarrays([2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97]), 60792, 'Test 43');
test(sumOddLengthSubarrays([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 13860, 'Test 44');
test(sumOddLengthSubarrays([11,22,33,44,55,66,77,88,99,110,121,132,143,154,165,176,187,198,209,220,231,242,253,264,275,286,297,308,319,330]), 422840, 'Test 45');
test(sumOddLengthSubarrays([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 7590, 'Test 46');
test(sumOddLengthSubarrays([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 9224, 'Test 47');
test(sumOddLengthSubarrays([99,98,97,96,95,94,93,92,91,90,89,88,87,86,85]), 31648, 'Test 48');
test(sumOddLengthSubarrays([5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100,105,110,115,120,125,130]), 110565, 'Test 49');
test(sumOddLengthSubarrays([100, 90, 80, 70, 60, 50, 40, 30, 20, 10]), 6050, 'Test 50');
test(sumOddLengthSubarrays([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25]), 3003, 'Test 51');
test(sumOddLengthSubarrays([101, 103, 105, 107, 109, 111, 113, 115, 117, 119, 121, 123]), 20384, 'Test 52');
test(sumOddLengthSubarrays([1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765]), 388680, 'Test 53');
test(sumOddLengthSubarrays([8,16,24,32,40,48,56,64,72,80,88,96,104,112,120,128,136,144]), 43320, 'Test 54');
test(sumOddLengthSubarrays([4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84, 88, 92, 96]), 65000, 'Test 55');
test(sumOddLengthSubarrays([5,15,25,35,45,55,65,75,85,95,105,115,125,135,145,155,165,175,185,195,205]), 93555, 'Test 56');
test(sumOddLengthSubarrays([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250]), 190970, 'Test 57');
test(sumOddLengthSubarrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 2752, 'Test 58');
test(sumOddLengthSubarrays([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200]), 80850, 'Test 59');
test(sumOddLengthSubarrays([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 2736, 'Test 60');
test(sumOddLengthSubarrays([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49]), 36725, 'Test 61');
test(sumOddLengthSubarrays([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]), 40425, 'Test 62');
test(sumOddLengthSubarrays([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500]), 275200, 'Test 63');
test(sumOddLengthSubarrays([5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100,105,110,115,120,125]), 95485, 'Test 64');
test(sumOddLengthSubarrays([5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100]), 40425, 'Test 65');
test(sumOddLengthSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]), 19097, 'Test 66');
test(sumOddLengthSubarrays([20,40,60,80,100,120,140,160,180,200,220,240,260,280,300,320,340,360,380,400,420,440,460,480,500]), 381940, 'Test 67');
test(sumOddLengthSubarrays([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]), 60792, 'Test 68');
test(sumOddLengthSubarrays([100,200,300,400,500,600,700,800,900,1000,1100,1200,1300,1400,1500,1600,1700,1800,1900,2000]), 808500, 'Test 69');
test(sumOddLengthSubarrays([99,98,97,96,95,94,93,92,91,90,89,88,87,86,85,84,83,82,81,80,79,78,77]), 101728, 'Test 70');
test(sumOddLengthSubarrays([5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100,105,110,115,120]), 81250, 'Test 71');
test(sumOddLengthSubarrays([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 3850, 'Test 72');
test(sumOddLengthSubarrays([150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170]), 142560, 'Test 73');
test(sumOddLengthSubarrays([7,14,21,28,35,42,49,56,63,70,77,84,91,98,105,112,119,126,133,140,147,154]), 81466, 'Test 74');
test(sumOddLengthSubarrays([3,6,9,12,15,18,21,24,27,30,33,36,39,42,45,48,51,54,57,60,63,66,69,72,75]), 57291, 'Test 75');
test(sumOddLengthSubarrays([101,103,105,107,109,111,113,115,117,119,121,123,125,127,129]), 39560, 'Test 76');
test(sumOddLengthSubarrays([7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), 24050, 'Test 77');
test(sumOddLengthSubarrays([6,12,18,24,30,36,42,48,54,60,66,72,78,84,90,96,102,108,114,120,126,132,138,144,150,156,162,168]), 176610, 'Test 78');
test(sumOddLengthSubarrays([50,25,75,100,200,150,300,350,400,450,500,550,600,650,700,750,800,850,900,950,1000]), 438225, 'Test 79');
test(sumOddLengthSubarrays([100,200,300,400,500,600,700,800,900,1000,1100,1200,1300,1400,1500]), 275200, 'Test 80');
test(sumOddLengthSubarrays([999,998,997,996,995,994,993,992,991,990,989,988,987,986,985,984,983,982,981,980]), 761915, 'Test 81');
test(sumOddLengthSubarrays([7,14,21,28,35,42,49,56,63,70,77,84,91,98,105,112,119,126,133,140,147,154,161,168,175]), 133679, 'Test 82');
test(sumOddLengthSubarrays([10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1,10,9,8,7,6,5,4,3,2,1]), 31570, 'Test 83');
test(sumOddLengthSubarrays([21, 34, 41, 53, 67, 71, 82, 95, 100, 121, 134, 141, 153, 167, 171, 182, 195]), 52492, 'Test 84');
test(sumOddLengthSubarrays([11,22,33,44,55,66,77,88,99,110,121,132,143,154,165,176,187,198,209,220,231,242,253,264,275,286,297]), 282436, 'Test 85');
test(sumOddLengthSubarrays([3,5,7,9,11,13,15,17,19,21,23,25,27,29]), 4480, 'Test 86');
test(sumOddLengthSubarrays([50, 40, 30, 20, 10, 0, -10, -20, -30, -40, -50]), 0, 'Test 87');
test(sumOddLengthSubarrays([1000,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]), 57040, 'Test 88');
test(sumOddLengthSubarrays([50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200]), 51000, 'Test 89');
test(sumOddLengthSubarrays([33,66,99,132,165,198,231,264,297,330,363,396,429,462,495,528,561,594,627,660,693,726,759,792,825]), 630201, 'Test 90');
test(sumOddLengthSubarrays([15,25,35,45,55,65,75,85,95,105,115,125,135,145,155,165,175,185,195]), 70350, 'Test 91');
test(sumOddLengthSubarrays([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300]), 161700, 'Test 92');
test(sumOddLengthSubarrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]), 117670, 'Test 93');
test(sumOddLengthSubarrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]), 8085, 'Test 94');
test(sumOddLengthSubarrays([100,200,300,400,500,600,700,800,900,1000]), 60500, 'Test 95');
test(sumOddLengthSubarrays([3,5,7,9,11,13,15,17,19,21,23,25,27,29,31]), 5848, 'Test 96');
test(sumOddLengthSubarrays([50, 40, 30, 20, 10, 5, 15, 25, 35, 45, 55, 65, 75, 85, 95]), 12770, 'Test 97');
test(sumOddLengthSubarrays([5, 15, 25, 35, 45, 55, 65, 75, 85, 95]), 5500, 'Test 98');
test(sumOddLengthSubarrays([300,200,100,50,25,12,6,3,1]), 5364, 'Test 99');
test(sumOddLengthSubarrays([9, 19, 29, 39, 49, 59, 69, 79, 89, 99, 109]), 8614, 'Test 100');
test(sumOddLengthSubarrays([7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91, 98]), 14700, 'Test 101');
test(sumOddLengthSubarrays([50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270]), 184960, 'Test 102');
test(sumOddLengthSubarrays([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]), 60500, 'Test 103');
test(sumOddLengthSubarrays([42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80]), 46970, 'Test 104');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

