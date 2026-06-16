// Test: 606. Construct String From Binary Tree
// 107 test cases from LeetCodeDataset
// Run: node test.js

const { tree2str } = require("./solution");

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

console.log("\n606. Construct String From Binary Tree\n");

test(tree2str([1,2,3,4,5,6,7]), 1[2[4][5]][3[6][7]], 'Test 1');
test(tree2str([1,null,2,null,3,null,4,null,5]), 1[][2[][3[][4[][5]]]], 'Test 2');
test(tree2str([1,2,3,null,null,6,7]), 1[2][3[6][7]], 'Test 3');
test(tree2str([1,2,3,4]), 1[2[4]][3], 'Test 4');
test(tree2str([1,2,3,null,4]), 1[2[][4]][3], 'Test 5');
test(tree2str([1,2,3,4,5,null,7]), 1[2[4][5]][3[][7]], 'Test 6');
test(tree2str([1,2]), 1[2], 'Test 7');
test(tree2str([1,null,2]), 1[][2], 'Test 8');
test(tree2str([1,2,null,3]), 1[2[3]], 'Test 9');
test(tree2str([1]), 1, 'Test 10');
test(tree2str([1,null,2,null,3]), 1[][2[][3]], 'Test 11');
test(tree2str([3,1,4,null,null,2]), 3[1][4[2]], 'Test 12');
test(tree2str([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10]), 1[][2[][3[][4[][5[][6[][7[][8[][9[][10]]]]]]]]], 'Test 13');
test(tree2str([1,2,3,4,null,5,6,null,7,8,9,null,null,10,null,11,12,13,null,14,15,null,null,null,null,null,16,17,18,19]), 1[2[4[][7[10[14[17][18]][15[19]]]]]][3[5[8[11][12]][9[13[][16]]]][6]], 'Test 14');
test(tree2str([10,5,15,null,null,6,20]), 10[5][15[6][20]], 'Test 15');
test(tree2str([1,2,3,null,null,4,5,null,null,6,7,null,null,8,9,null,null,10,11,null,null,12,13,null,null,null,null,null,14,15,null,null,16,17,18,19]), 1[2][3[4][5[6][7[8][9[10][11[12][13]]]]]], 'Test 16');
test(tree2str([1,2,3,4,null,5,null,6,null,7,null,8,null,9,null,10,11,12]), 1[2[4[6[8[10][11]]]]][3[5[7[9[12]]]]], 'Test 17');
test(tree2str([1,2,3,null,4,5,6,null,null,7,8,9,10]), 1[2[][4]][3[5[7][8]][6[9][10]]], 'Test 18');
test(tree2str([1,null,2,null,null,3,null,4,null,null,5]), 1[][2], 'Test 19');
test(tree2str([1,2,3,null,4,null,5,null,null,6,null,null,7,null,null,8,null,9]), 1[2[][4]][3[][5[6[][7]]]], 'Test 20');
test(tree2str([1,2,3,4,null,5,6,7,null,null,null,null,8]), 1[2[4[7]]][3[5][6[][8]]], 'Test 21');
test(tree2str([1,2,3,4,5,6,7,null,null,8,9,null,null,10,null,11,null,null,12]), 1[2[4][5[8[11]][9[][12]]]][3[6][7[10]]], 'Test 22');
test(tree2str([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15]), 1[][2[][3[][4[][5[][6[][7[][8[][9[][10[][11[][12[][13[][14[][15]]]]]]]]]]]]]], 'Test 23');
test(tree2str([1,2,3,null,4,5,null,6,null,7]), 1[2[][4[6]]][3[5[7]]], 'Test 24');
test(tree2str([1,2,3,4,null,null,5,6,null,7,8,9,null,null,10,11,null,null,12,13]), 1[2[4[6[9[][12]]]]][3[][5[7[][10[13]]][8[11]]]], 'Test 25');
test(tree2str([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8]), 1[][2[][3[][4[][5[][6[][7[][8]]]]]]], 'Test 26');
test(tree2str([1,2,3,4,5,6,7,8,9,10,11,null,13,null,null,14,null,15,null,16]), 1[2[4[8[14]][9[15]]][5[10[16]][11]]][3[6[][13]][7]], 'Test 27');
test(tree2str([1,null,2,3,null,4,null,5,null,6,null,7,null,8,null,9]), 1[][2[3[4[5[6[7[8[9]]]]]]]], 'Test 28');
test(tree2str([1,2,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15,null,16]), 1[2[][4[][6[][8[][10[][12[][14[][16]]]]]]]][3[][5[][7[][9[][11[][13[][15]]]]]]], 'Test 29');
test(tree2str([1,2,null,3,null,4,null,5,null,6,null,7,null,8]), 1[2[3[4[5[6[7[8]]]]]]], 'Test 30');
test(tree2str([1,2,3,4,null,5,null,null,null,null,null,6]), 1[2[4]][3[5]], 'Test 31');
test(tree2str([1,2,3,null,null,4,5,null,null,6,7,null,null,8,9]), 1[2][3[4][5[6][7[8][9]]]], 'Test 32');
test(tree2str([1,2,null,3,4,null,5,null,6,null,7,8,9]), 1[2[3[][5[][7]]][4[][6[8][9]]]], 'Test 33');
test(tree2str([1,2,3,4,null,null,5,6,7,null,null,null,8,9,10,null,null,null,null,null,11,12,null,null,13,14,15]), 1[2[4[6[][8]][7[9][10[][11[12[][13[14][15]]]]]]]][3[][5]], 'Test 34');
test(tree2str([1,2,3,4,5,6,7,8,9,10,11,12,13,14,null,15,null,null,16]), 1[2[4[8[15]][9[][16]]][5[10][11]]][3[6[12][13]][7[14]]], 'Test 35');
test(tree2str([1,null,2,3,4,5,6,7,8,9,10,11,12,13,14]), 1[][2[3[5[9][10]][6[11][12]]][4[7[13][14]][8]]], 'Test 36');
test(tree2str([1,null,2,null,null,null,3,null,null,null,4,null,null,null,5]), 1[][2], 'Test 37');
test(tree2str([5,2,3,null,null,1,6,null,null,null,8]), 5[2][3[1][6[][8]]], 'Test 38');
test(tree2str([1,null,2,3,null,4,null,5,6,null,7,8,null,9,10]), 1[][2[3[4[5[][7[9][10]]][6[8]]]]], 'Test 39');
test(tree2str([1,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11]), 1[2[3[4[5[6[7[8[9[10[11]]]]]]]]]], 'Test 40');
test(tree2str([1,2,3,4,null,5,6,null,7,null,null,8,9]), 1[2[4[][7]]][3[5][6[8][9]]], 'Test 41');
test(tree2str([1,null,2,3,null,4,5,6,null,null,7,8,null,9,null,10]), 1[][2[3[4[6[8[10]]]][5[][7[9]]]]], 'Test 42');
test(tree2str([1,2,3,4,null,null,5,null,6,null,null,7,null,8,null,9]), 1[2[4[][6[7[8[9]]]]]][3[][5]], 'Test 43');
test(tree2str([1,2,null,3,4,null,null,5,null,6,null,7,null,8,null,9,null,10]), 1[2[3][4[5[6[7[8[9[10]]]]]]]], 'Test 44');
test(tree2str([1,2,3,null,4,5,null,6,null,7,8,null,9,10,11]), 1[2[][4[6[][9]]]][3[5[7[10][11]][8]]], 'Test 45');
test(tree2str([1,null,2,null,null,3,null,null,4,null,null,5,null,null,6,null,null,7,null,null,8,null,null,9,null,null,10]), 1[][2], 'Test 46');
test(tree2str([1,2,3,4,null,5,null,null,null,null,6,7,null,8,null,9]), 1[2[4]][3[5[][6[7[8[9]]]]]], 'Test 47');
test(tree2str([1,2,null,3,4,null,null,5,null,6,null,7]), 1[2[3][4[5[6[7]]]]], 'Test 48');
test(tree2str([1,2,3,4,null,5,null,6,null,7,null,8,null,9]), 1[2[4[6[8]]]][3[5[7[9]]]], 'Test 49');
test(tree2str([1,2,3,4,null,6,null,7,null,8,null,9,null,10]), 1[2[4[7[9]]]][3[6[8[10]]]], 'Test 50');
test(tree2str([1,2,3,null,4,5,null,6,7,null,8,9,10,null,null,11,12,null,13,14,null,null,15,16,17,18,19,null,20,21,22,23,null,null,24,25]), 1[2[][4[6[9[][13[18[25]][19]]][10[14[][20]]]][7]]][3[5[][8[11[][15[21][22]]][12[16[23]][17[][24]]]]]], 'Test 51');
test(tree2str([1,null,2,3,4,null,5,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15]), 1[][2[3[][5[7[9[11[13[15]]]]]]][4[6[8[10[12[14]]]]]]], 'Test 52');
test(tree2str([20,10,30,5,15,null,null,3,7,null,12,null,null,null,null,6,9]), 20[10[5[3][7]][15[][12[6][9]]]][30], 'Test 53');
test(tree2str([0,-1,1,-2,2,-3,3,-4,4]), 0[-1[-2[-4][4]][2]][1[-3][3]], 'Test 54');
test(tree2str([5,3,7,2,4,6,8,1,null,null,null,null,null,9,10]), 5[3[2[1]][4]][7[6][8[9][10]]], 'Test 55');
test(tree2str([1,2,3,null,4,null,5,6,null,7,8,null,9,null,10,null,11,null,12,null,13]), 1[2[][4[6[][9[][12]]]]][3[][5[7[][10[][13]]][8[][11]]]], 'Test 56');
test(tree2str([1,2,3,4,null,null,5,6,null,7,8,null,9,null,10]), 1[2[4[6[][9]]]][3[][5[7[][10]][8]]], 'Test 57');
test(tree2str([1,2,3,null,null,4,5,6,7,8,9,null,null,10,11]), 1[2][3[4[6][7[10][11]]][5[8][9]]], 'Test 58');
test(tree2str([1,2,3,null,4,5,null,null,6,7,8,9,10,11,null,null,null,null,null,null,12,13,14,15]), 1[2[][4[][6[9][10[][12[15]]]]]][3[5[7[11[13][14]]][8]]], 'Test 59');
test(tree2str([1,2,3,null,null,4,5]), 1[2][3[4][5]], 'Test 60');
test(tree2str([1,2,3,null,null,4,5,null,null,6,7,null,null,8,9,null,null,10,11,null,null,12,13]), 1[2][3[4][5[6][7[8][9[10][11[12][13]]]]]], 'Test 61');
test(tree2str([1,-2,3,4,null,-5,null,6,null,7]), 1[-2[4[6]]][3[-5[7]]], 'Test 62');
test(tree2str([1,2,3,4,5,6,7,8,9,null,null,null,null,14,null,16,17,18,19,null,null,22,23,null,25,null,27]), 1[2[4[8[16[22][23]][17[][25]]][9[18[][27]][19]]][5]][3[6][7[14]]], 'Test 63');
test(tree2str([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]), 1[2[4[8][9]][5[10][11]]][3[6[12][13]][7[14][15]]], 'Test 64');
test(tree2str([1,2,3,null,null,4,5,null,null,null,null,6,7,null,null,null,null,null,8,9,null,null,null,null,null,10,11,12,13,null,null,14,15]), 1[2][3[4][5]], 'Test 65');
test(tree2str([1,2,3,null,null,6,7,null,null,10,11,null,null,14,15]), 1[2][3[6][7[10][11[14][15]]]], 'Test 66');
test(tree2str([1,null,2,null,null,3,null,null,4,null,null,5,null,null,6]), 1[][2], 'Test 67');
test(tree2str([1,null,2,null,null,3,4,null,null,5,6,null,null,7,8,null,null,9,10]), 1[][2], 'Test 68');
test(tree2str([1,2,3,null,4,null,null,5,6]), 1[2[][4[5][6]]][3], 'Test 69');
test(tree2str([1,2,3,4,5,null,6,null,7,null,8,null,9,null,10]), 1[2[4[][7[][10]]][5[][8]]][3[][6[][9]]], 'Test 70');
test(tree2str([1,2,3,4,5,null,6,7,null,8,9,null,null,10]), 1[2[4[7[10]]][5[8][9]]][3[][6]], 'Test 71');
test(tree2str([1,2,3,4,5,6,7,8,9,null,null,null,null,null,null,null,10,null,null,null,11,null,null,null,12,null,null,null,13]), 1[2[4[8[][10[][11]]][9]][5]][3[6][7]], 'Test 72');
test(tree2str([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]), 1[2[4[8[16][17]][9[18][19]]][5[10[20][21]][11[22][23]]]][3[6[12[24][25]][13]][7[14][15]]], 'Test 73');
test(tree2str([1,2,3,4,5,null,null,6,7,8,9,null,10,null,null,null,null,null,11,12,13,null,null,null,14,15]), 1[2[4[6[][10[12[][14]][13[15]]]][7]][5[8][9[][11]]]][3], 'Test 74');
test(tree2str([1,2,3,4,5,6,7,8,9,null,null,10,11,null,12]), 1[2[4[8][9]][5]][3[6[10][11]][7[][12]]], 'Test 75');
test(tree2str([1,2,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12,null,13,null,14,null,15]), 1[2[][4[][6[][8[][10[][12[][14]]]]]]][3[][5[][7[][9[][11[][13[][15]]]]]]], 'Test 76');
test(tree2str([1,2,3,4,null,5,null,6,null,7,null,8,null,null,9]), 1[2[4[6[8]]]][3[5[7[][9]]]], 'Test 77');
test(tree2str([1,2,3,null,4,5,null,null,6,7,null,8,9,null,null,null,10]), 1[2[][4[][6[8[][10]][9]]]][3[5[7]]], 'Test 78');
test(tree2str([1,2,3,4,null,null,5,null,6,null,7,null,8,null,9,null,10]), 1[2[4[][6[][8[][10]]]]][3[][5[][7[][9]]]], 'Test 79');
test(tree2str([1,null,2,null,3,null,4,null,5,null,6,null,7]), 1[][2[][3[][4[][5[][6[][7]]]]]], 'Test 80');
test(tree2str([1,null,2,3,null,null,4,5,6,null,null,null,null,7]), 1[][2[3[][4[5][6]]]], 'Test 81');
test(tree2str([1,2,3,4,null,5,null,null,6,7,8,null,null,9,null,10,null,11]), 1[2[4[][6]]][3[5[7[9[11]]][8[10]]]], 'Test 82');
test(tree2str([1,2,3,4,5,6,7,null,null,8,9,10,11,12,13]), 1[2[4][5[8][9]]][3[6[10][11]][7[12][13]]], 'Test 83');
test(tree2str([1,2,3,4,5,6,7,8,9,null,10,null,null,11,null,12]), 1[2[4[8[12]][9]][5[][10]]][3[6][7[11]]], 'Test 84');
test(tree2str([1,2,null,null,3,null,null,4,null,null,5,null,null,6,null,null,7,null,null,8,null,null,9,null,null,10]), 1[2[][3]], 'Test 85');
test(tree2str([1,2,3,4,null,5,6,7,null,8,9,null,null,10,null,11,12]), 1[2[4[7[10]]]][3[5[8[11][12]][9]][6]], 'Test 86');
test(tree2str([1,2,3,4,5,null,null,6,7,null,null,8,9,null,null,10,11,null,null,12,13]), 1[2[4[6[8[10[12][13]][11]][9]][7]][5]][3], 'Test 87');
test(tree2str([1,2,3,null,5,6,7,null,null,8,9,10,11,null,null,null,null,12]), 1[2[][5]][3[6[8][9]][7[10[12]][11]]], 'Test 88');
test(tree2str([1,2,3,4,5,null,6,7,null,8,null,9]), 1[2[4[7]][5[8]]][3[][6[9]]], 'Test 89');
test(tree2str([1,2,3,4,5,6,7,null,null,null,null,null,null,null,null,8]), 1[2[4][5]][3[6][7]], 'Test 90');
test(tree2str([1,2,3,4,5,null,6,7,null,8,9]), 1[2[4[7]][5[8][9]]][3[][6]], 'Test 91');
test(tree2str([1,2,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10]), 1[2[][4[][6[][8[][10]]]]][3[][5[][7[][9]]]], 'Test 92');
test(tree2str([1,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11,null,12]), 1[2[3[4[5[6[7[8[9[10[11[12]]]]]]]]]]], 'Test 93');
test(tree2str([1,2,3,null,4,5,null,null,6,null,null,7,null,null,8,null,null,9,null,null,10,null,null,11,null,null,12]), 1[2[][4[][6[7[][8]]]]][3[5]], 'Test 94');
test(tree2str([1,null,2,3,4,null,5,6,null,7,null,null,8,9,10,null,null,null,null,11]), 1[][2[3[][5[7[9][10[11]]]]][4[6[][8]]]], 'Test 95');
test(tree2str([1,2,null,null,3,null,null,4,null,null,5,null,null,6]), 1[2[][3]], 'Test 96');
test(tree2str([1,2,3,4,null,null,5,null,null,6,7,null,null,8,9,null,null,10,11]), 1[2[4]][3[][5[6][7[8][9[10][11]]]]], 'Test 97');
test(tree2str([1,2,3,4,5,6,7,null,8,9,null,null,null,null,10]), 1[2[4[][8]][5[9]]][3[6][7[][10]]], 'Test 98');
test(tree2str([3,1,2,6,null,null,4,5]), 3[1[6[5]]][2[][4]], 'Test 99');
test(tree2str([1,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]), 1[2[3[4[5[6[7[8[9]]]]]]]], 'Test 100');
test(tree2str([1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10,null,11]), 1[][2[][3[][4[][5[][6[][7[][8[][9[][10[][11]]]]]]]]]], 'Test 101');
test(tree2str([1,2,3,null,null,4,5,6,null,7,8,9,null,null,10,null,null,11,12,null,null,13,14]), 1[2][3[4[6[9[11[13][14]][12]]]][5[7[][10]][8]]], 'Test 102');
test(tree2str([1,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9,null,10]), 1[2[3[4[5[6[7[8[9[10]]]]]]]]], 'Test 103');
test(tree2str([1,2,3,null,4,null,5,null,6,null,7]), 1[2[][4[][6]]][3[][5[][7]]], 'Test 104');
test(tree2str([1,2,null,3,4,null,null,5,6,7,null,null,8,9,null,null,10,11,null,null,12,13,null,null,14,15]), 1[2[3][4[5[7[9[11[13[15]]]]]][6[][8[][10[][12[][14]]]]]]], 'Test 105');
test(tree2str([1,null,2,3,null,4,null,5,null,6,null,7]), 1[][2[3[4[5[6[7]]]]]], 'Test 106');
test(tree2str([1,2,null,3,4,null,null,5,null,6,null,7,null,8,null,9,null,10,null,11]), 1[2[3][4[5[6[7[8[9[10[11]]]]]]]]], 'Test 107');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

