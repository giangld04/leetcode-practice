// Test: 553. Optimal Division
// 114 test cases from LeetCodeDataset
// Run: node test.js

const { optimalDivision } = require("./solution");

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

console.log("\n553. Optimal Division\n");

test(optimalDivision([10,20,30]), 10/[20/30], 'Test 1');
test(optimalDivision([2,2,2,2,2,2,2,2,2,2]), 2/[2/2/2/2/2/2/2/2/2], 'Test 2');
test(optimalDivision([3,100,100,100,100,100,100,100,100,100]), 3/[100/100/100/100/100/100/100/100/100], 'Test 3');
test(optimalDivision([2,3,5,7,11]), 2/[3/5/7/11], 'Test 4');
test(optimalDivision([3,2]), 3/2, 'Test 5');
test(optimalDivision([10,9,8,7,6,5,4,3,2,1]), 10/[9/8/7/6/5/4/3/2/1], 'Test 6');
test(optimalDivision([9,8,7,6,5,4,3,2,1]), 9/[8/7/6/5/4/3/2/1], 'Test 7');
test(optimalDivision([10]), 10, 'Test 8');
test(optimalDivision([9,8,7,6,5]), 9/[8/7/6/5], 'Test 9');
test(optimalDivision([2,3]), 2/3, 'Test 10');
test(optimalDivision([5,6,7]), 5/[6/7], 'Test 11');
test(optimalDivision([5,5,5,5]), 5/[5/5/5], 'Test 12');
test(optimalDivision([5,6,7,8]), 5/[6/7/8], 'Test 13');
test(optimalDivision([10,2]), 10/2, 'Test 14');
test(optimalDivision([3,4,5,6,7,8,9,10]), 3/[4/5/6/7/8/9/10], 'Test 15');
test(optimalDivision([2,3,4]), 2/[3/4], 'Test 16');
test(optimalDivision([20,10,5,2]), 20/[10/5/2], 'Test 17');
test(optimalDivision([100,50,25,10]), 100/[50/25/10], 'Test 18');
test(optimalDivision([10,9,8,7,6,5,4,3,2]), 10/[9/8/7/6/5/4/3/2], 'Test 19');
test(optimalDivision([100,50,25,12,6,3,1]), 100/[50/25/12/6/3/1], 'Test 20');
test(optimalDivision([100,200,300,400,500,600,700,800,900,1000]), 100/[200/300/400/500/600/700/800/900/1000], 'Test 21');
test(optimalDivision([10,5]), 10/5, 'Test 22');
test(optimalDivision([1000,100,10,2]), 1000/[100/10/2], 'Test 23');
test(optimalDivision([10,20,30,40]), 10/[20/30/40], 'Test 24');
test(optimalDivision([100, 90, 80, 70, 60, 50, 40]), 100/[90/80/70/60/50/40], 'Test 25');
test(optimalDivision([101,202,303,404,505]), 101/[202/303/404/505], 'Test 26');
test(optimalDivision([100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]), 100/[200/300/400/500/600/700/800/900/1000], 'Test 27');
test(optimalDivision([3,3,3,3,3,3,3,3,3,3]), 3/[3/3/3/3/3/3/3/3/3], 'Test 28');
test(optimalDivision([10,5,2,6,3]), 10/[5/2/6/3], 'Test 29');
test(optimalDivision([10, 20, 30, 40, 50, 60]), 10/[20/30/40/50/60], 'Test 30');
test(optimalDivision([8,16,32,64,128,256]), 8/[16/32/64/128/256], 'Test 31');
test(optimalDivision([3, 1000, 2, 5, 10]), 3/[1000/2/5/10], 'Test 32');
test(optimalDivision([1024,512,256,128,64,32,16,8,4,2]), 1024/[512/256/128/64/32/16/8/4/2], 'Test 33');
test(optimalDivision([99,98,97,96,95,94,93,92,91,90]), 99/[98/97/96/95/94/93/92/91/90], 'Test 34');
test(optimalDivision([25,50,75,100,125]), 25/[50/75/100/125], 'Test 35');
test(optimalDivision([9, 8, 7, 6, 5, 4, 3, 2, 1]), 9/[8/7/6/5/4/3/2/1], 'Test 36');
test(optimalDivision([11,22,33,44,55,66,77,88,99]), 11/[22/33/44/55/66/77/88/99], 'Test 37');
test(optimalDivision([12,15,18,21,24,27,30]), 12/[15/18/21/24/27/30], 'Test 38');
test(optimalDivision([5,9,12,18,24,30,36]), 5/[9/12/18/24/30/36], 'Test 39');
test(optimalDivision([1000, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 1000/[2/3/4/5/6/7/8/9/10], 'Test 40');
test(optimalDivision([10,200,3000,40000,500000]), 10/[200/3000/40000/500000], 'Test 41');
test(optimalDivision([1000,500,250,125,62,31]), 1000/[500/250/125/62/31], 'Test 42');
test(optimalDivision([2,5,10,20,50,100]), 2/[5/10/20/50/100], 'Test 43');
test(optimalDivision([500,250,125,62,31,15,7]), 500/[250/125/62/31/15/7], 'Test 44');
test(optimalDivision([7, 11, 13, 17, 19, 23, 29, 31, 37, 41]), 7/[11/13/17/19/23/29/31/37/41], 'Test 45');
test(optimalDivision([11, 13, 17, 19, 23, 29]), 11/[13/17/19/23/29], 'Test 46');
test(optimalDivision([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]), 2/[2/2/2/2/2/2/2/2/2/2], 'Test 47');
test(optimalDivision([7, 14, 21, 28, 35, 42, 49]), 7/[14/21/28/35/42/49], 'Test 48');
test(optimalDivision([5, 10, 15, 20, 25]), 5/[10/15/20/25], 'Test 49');
test(optimalDivision([999, 998, 997, 996, 995]), 999/[998/997/996/995], 'Test 50');
test(optimalDivision([15,25,35,45,55,65,75,85,95]), 15/[25/35/45/55/65/75/85/95], 'Test 51');
test(optimalDivision([8,16,32,64,128,256,512,1024,2048,4096]), 8/[16/32/64/128/256/512/1024/2048/4096], 'Test 52');
test(optimalDivision([10, 5, 2, 8, 3, 7, 4, 6]), 10/[5/2/8/3/7/4/6], 'Test 53');
test(optimalDivision([8,16,24,32,40,48,56,64,72,80]), 8/[16/24/32/40/48/56/64/72/80], 'Test 54');
test(optimalDivision([30,20,10,5,1]), 30/[20/10/5/1], 'Test 55');
test(optimalDivision([12, 15, 20, 25, 30, 35, 40, 45, 50, 55]), 12/[15/20/25/30/35/40/45/50/55], 'Test 56');
test(optimalDivision([7,11,13,17,19,23,29,31]), 7/[11/13/17/19/23/29/31], 'Test 57');
test(optimalDivision([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]), 2/[2/2/2/2/2/2/2/2/2/2/2/2/2/2/2/2/2/2/2], 'Test 58');
test(optimalDivision([8,6,4,2]), 8/[6/4/2], 'Test 59');
test(optimalDivision([15,10,20,30,40,50]), 15/[10/20/30/40/50], 'Test 60');
test(optimalDivision([150,200,250,300,350,400,450]), 150/[200/250/300/350/400/450], 'Test 61');
test(optimalDivision([42,84,126,168,210,252,294,336]), 42/[84/126/168/210/252/294/336], 'Test 62');
test(optimalDivision([3, 12, 3, 12, 3, 12]), 3/[12/3/12/3/12], 'Test 63');
test(optimalDivision([100,200,300,400,500,600,700,800,900]), 100/[200/300/400/500/600/700/800/900], 'Test 64');
test(optimalDivision([100,20,4,2,1]), 100/[20/4/2/1], 'Test 65');
test(optimalDivision([6,12,18,24,30,36,42,48,54,60]), 6/[12/18/24/30/36/42/48/54/60], 'Test 66');
test(optimalDivision([10,20,30,40,50,60]), 10/[20/30/40/50/60], 'Test 67');
test(optimalDivision([100,200,300,400,500,600,700,800]), 100/[200/300/400/500/600/700/800], 'Test 68');
test(optimalDivision([100, 90, 80, 70, 60, 50, 40, 30, 20, 10]), 100/[90/80/70/60/50/40/30/20/10], 'Test 69');
test(optimalDivision([12,6,3,1,2,4,8]), 12/[6/3/1/2/4/8], 'Test 70');
test(optimalDivision([3,6,9,12,15,18,21,24,27]), 3/[6/9/12/15/18/21/24/27], 'Test 71');
test(optimalDivision([5, 8, 12, 15, 20]), 5/[8/12/15/20], 'Test 72');
test(optimalDivision([12, 14, 16, 18, 20, 22, 24, 26, 28]), 12/[14/16/18/20/22/24/26/28], 'Test 73');
test(optimalDivision([2, 2, 4, 8, 16, 32, 64, 128, 256, 512]), 2/[2/4/8/16/32/64/128/256/512], 'Test 74');
test(optimalDivision([10, 5, 2, 8, 6, 3, 4, 7]), 10/[5/2/8/6/3/4/7], 'Test 75');
test(optimalDivision([25, 30, 35, 40, 45, 50, 55, 60, 65, 70]), 25/[30/35/40/45/50/55/60/65/70], 'Test 76');
test(optimalDivision([10,20,30,40,50,60,70,80,90,100]), 10/[20/30/40/50/60/70/80/90/100], 'Test 77');
test(optimalDivision([2, 5, 3, 4, 6, 7, 8, 9, 10]), 2/[5/3/4/6/7/8/9/10], 'Test 78');
test(optimalDivision([5,10,15,20,25,30]), 5/[10/15/20/25/30], 'Test 79');
test(optimalDivision([3,5,8,2,6,4]), 3/[5/8/2/6/4], 'Test 80');
test(optimalDivision([8,12,4,7,9,2]), 8/[12/4/7/9/2], 'Test 81');
test(optimalDivision([33,66,99,132,165,198]), 33/[66/99/132/165/198], 'Test 82');
test(optimalDivision([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]), 2/[3/5/7/11/13/17/19/23/29], 'Test 83');
test(optimalDivision([3, 5, 7, 11, 13, 17, 19, 23, 29]), 3/[5/7/11/13/17/19/23/29], 'Test 84');
test(optimalDivision([3,9,3,9,3,9,3]), 3/[9/3/9/3/9/3], 'Test 85');
test(optimalDivision([500, 250, 125, 62, 31]), 500/[250/125/62/31], 'Test 86');
test(optimalDivision([50,10,5,2,1]), 50/[10/5/2/1], 'Test 87');
test(optimalDivision([10, 5, 2, 8, 4, 1]), 10/[5/2/8/4/1], 'Test 88');
test(optimalDivision([100, 50, 20, 10, 5]), 100/[50/20/10/5], 'Test 89');
test(optimalDivision([10,15,20,25,30,35,40,45,50,55]), 10/[15/20/25/30/35/40/45/50/55], 'Test 90');
test(optimalDivision([97,89,83,79,73,71,67,61,59,53]), 97/[89/83/79/73/71/67/61/59/53], 'Test 91');
test(optimalDivision([2,3,5,7,11,13,17,19,23]), 2/[3/5/7/11/13/17/19/23], 'Test 92');
test(optimalDivision([12, 14, 16, 18, 20, 22]), 12/[14/16/18/20/22], 'Test 93');
test(optimalDivision([9, 18, 27, 36, 45, 54, 63, 72, 81, 90]), 9/[18/27/36/45/54/63/72/81/90], 'Test 94');
test(optimalDivision([999,998,997,996,995,994,993,992,991,990]), 999/[998/997/996/995/994/993/992/991/990], 'Test 95');
test(optimalDivision([2,5,7,11,13,17,19]), 2/[5/7/11/13/17/19], 'Test 96');
test(optimalDivision([9,8,7,6,5,4,3,2]), 9/[8/7/6/5/4/3/2], 'Test 97');
test(optimalDivision([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 10/[20/30/40/50/60/70/80/90/100], 'Test 98');
test(optimalDivision([500, 100, 10, 2, 5, 4, 3, 2, 1]), 500/[100/10/2/5/4/3/2/1], 'Test 99');
test(optimalDivision([2,4,6,8,10,12,14,16,18,20]), 2/[4/6/8/10/12/14/16/18/20], 'Test 100');
test(optimalDivision([3, 5, 7, 9, 11, 13, 15, 17]), 3/[5/7/9/11/13/15/17], 'Test 101');
test(optimalDivision([5,10,15,20,25,30,35,40,45]), 5/[10/15/20/25/30/35/40/45], 'Test 102');
test(optimalDivision([4,3,2,1,5,6,7,8,9,10]), 4/[3/2/1/5/6/7/8/9/10], 'Test 103');
test(optimalDivision([10,5,2,1,2,5,10]), 10/[5/2/1/2/5/10], 'Test 104');
test(optimalDivision([3,13,5,4,17,6,7,8]), 3/[13/5/4/17/6/7/8], 'Test 105');
test(optimalDivision([3,11,19,27,35,43,51,59,67,75]), 3/[11/19/27/35/43/51/59/67/75], 'Test 106');
test(optimalDivision([2,3,5,7,11,13,17,19,23,29]), 2/[3/5/7/11/13/17/19/23/29], 'Test 107');
test(optimalDivision([1000, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]), 1000/[2/3/4/5/6/7/8/9/10/11], 'Test 108');
test(optimalDivision([500, 3, 2, 4, 10, 8, 6, 7]), 500/[3/2/4/10/8/6/7], 'Test 109');
test(optimalDivision([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]), 3/[3/3/3/3/3/3/3/3/3/3/3/3], 'Test 110');
test(optimalDivision([3,5,9,12,15,18]), 3/[5/9/12/15/18], 'Test 111');
test(optimalDivision([18,6,3,2]), 18/[6/3/2], 'Test 112');
test(optimalDivision([7,5,3,2]), 7/[5/3/2], 'Test 113');
test(optimalDivision([7,14,21,28,35,42,49,56,63]), 7/[14/21/28/35/42/49/56/63], 'Test 114');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

