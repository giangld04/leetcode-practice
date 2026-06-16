// Test: 1528. Shuffle String
// 87 test cases from LeetCodeDataset
// Run: node test.js

const { restoreString } = require("./solution");

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

console.log("\n1528. Shuffle String\n");

test(restoreString("codeleet", [4,5,6,7,0,2,1,3]), leetcode, 'Test 1');
test(restoreString("aaiougrt", [4,0,2,6,7,3,1,5]), arigatou, 'Test 2');
test(restoreString("aiohn", [3,1,4,2,0]), nihao, 'Test 3');
test(restoreString("abc", [0,1,2]), abc, 'Test 4');
test(restoreString("art", [1,0,2]), rat, 'Test 5');
test(restoreString("different", [3,6,0,5,2,1,4]), Error: list index out of range, 'Test 6');
test(restoreString("abcdefgh", [7,6,5,4,3,2,1,0]), hgfedcba, 'Test 7');
test(restoreString("permutation", [8,5,4,10,0,9,2,6,3,1,7]), uoairetnptm, 'Test 8');
test(restoreString("pythonprogramming", [16,18,5,0,9,15,8,1,7,17,6,12,13,2,4,10,11,14,3,19]), Error: list assignment index out of range, 'Test 9');
test(restoreString("randomizedplacement", [20,16,10,9,5,18,1,7,15,2,11,13,4,3,12,14,8,17,19,6,0]), Error: list assignment index out of range, 'Test 10');
test(restoreString("development", [3,6,5,1,0,4,8,9,2,7,10]), leedovenpmt, 'Test 11');
test(restoreString("complexproblem", [15,1,7,11,5,3,6,2,10,0,4,8,9,12,14,13]), Error: list assignment index out of range, 'Test 12');
test(restoreString("permutation", [9,3,1,6,5,7,4,2,8,0]), Error: list index out of range, 'Test 13');
test(restoreString("exampleinput", [11,2,5,0,8,1,6,7,4,3,9,10]), mlxpnaeipute, 'Test 14');
test(restoreString("abcdefghij", [5,8,1,6,7,0,3,2,9,4]), fchgjadebi, 'Test 15');
test(restoreString("randomization", [11,10,3,1,9,6,8,0,7,2,5,4]), Error: list index out of range, 'Test 16');
test(restoreString("abcdefgxyz", [6,1,7,5,8,0,9,4,3,2]), fbzyxdaceg, 'Test 17');
test(restoreString("pneumonia", [2,8,7,6,5,4,3,1,0]), aipnomuen, 'Test 18');
test(restoreString("randomization", [4,1,5,0,2,7,8,6,3,9,10,11,12]), daoarnzmition, 'Test 19');
test(restoreString("programming", [10,6,1,7,4,8,2,0,11,5,9,3]), Error: list assignment index out of range, 'Test 20');
test(restoreString("character", [8,4,2,5,6,1,0,7,3]), tcarhraec, 'Test 21');
test(restoreString("fqtv", [1,3,2,0]), vftq, 'Test 22');
test(restoreString("visualization", [10,1,9,12,0,2,8,4,6,7,11,3,5]), ailoznatisviu, 'Test 23');
test(restoreString("waterbottle", [8,7,6,5,4,3,2,1,9,0,10]), ltobretawte, 'Test 24');
test(restoreString("datastructures", [15,14,2,7,3,6,1,9,10,12,0,8,4,5,11,13]), Error: list assignment index out of range, 'Test 25');
test(restoreString("shuffle", [4,2,5,1,6,3,0]), efhlsuf, 'Test 26');
test(restoreString("intermediate", [11,8,2,0,7,3,4,9,1,6,5,10]), eitmetarndei, 'Test 27');
test(restoreString("permutationexample", [13,11,15,17,1,12,19,0,5,7,9,2,14,10,8,6,4,3,16,18]), Error: list assignment index out of range, 'Test 28');
test(restoreString("programming", [10,2,1,7,8,6,5,3,0,9,4]), iormgmagrnp, 'Test 29');
test(restoreString("alphabet", [5,6,7,4,3,2,1,0]), tebahalp, 'Test 30');
test(restoreString("permutation", [1,10,9,0,8,6,3,5,4,2,7]), mpoaittnure, 'Test 31');
test(restoreString("rearrange", [6,4,1,7,3,0,9,2,5,8]), Error: list assignment index out of range, 'Test 32');
test(restoreString("shuffling", [8,4,3,5,7,2,6,1,0]), gnluhfifs, 'Test 33');
test(restoreString("exampleinput", [11,4,0,7,8,3,5,6,2,9,1,10]), aunlxeimppte, 'Test 34');
test(restoreString("generation", [5,3,6,7,2,1,8,0,4,9]), iareognetn, 'Test 35');
test(restoreString("characters", [2,3,7,5,6,0,4,1]), Error: list index out of range, 'Test 36');
test(restoreString("xylophone", [1,4,8,2,7,5,3,6,0]), exooyhnpl, 'Test 37');
test(restoreString("uniquecharacters", [12,1,13,2,0,15,5,14,4,7,11,6,8,10,9,3]), unqsaccrtreauihe, 'Test 38');
test(restoreString("complexstringshuffle", [15,6,11,19,8,1,0,12,18,5,2,3,10,13,17,14,4,16,7,9]), xeInfinityrollegmssucfhtp, 'Test 39');
test(restoreString("alphanumeric", [9,5,7,3,4,8,10,0,11,2,1,6]), mirhalcpnaue, 'Test 40');
test(restoreString("abracadabra", [10,6,5,3,0,9,7,8,2,1,4]), crbaarbdaaa, 'Test 41');
test(restoreString("python", [4,0,1,5,3,2]), ytnoph, 'Test 42');
test(restoreString("shufflethis", [9,4,10,5,1,11,6,8,3,7,2,0]), Error: list assignment index out of range, 'Test 43');
test(restoreString("algorithm", [1,2,3,0,4,5,6,7,8]), oalgrithm, 'Test 44');
test(restoreString("characters", [9,3,0,7,5,2,1,6,4,8]), atchraersc, 'Test 45');
test(restoreString("rearrangingcharacters", [19,5,7,2,13,8,1,3,15,11,10,18,9,14,6,0,17,4,16,12]), Error: list index out of range, 'Test 46');
test(restoreString("visualization", [8,15,4,0,13,1,11,9,2,10,5,7,3,6,12,14]), Error: list assignment index out of range, 'Test 47');
test(restoreString("python", [5,1,2,4,0,3]), oytnhp, 'Test 48');
test(restoreString("algorithmdesign", [8,12,1,10,9,13,0,5,2,4,3,6,7,11,14]), tgmedhsiaroglin, 'Test 49');
test(restoreString("randomized", [7,1,8,2,0,4,5,9,6,3]), oaddmiernz, 'Test 50');
test(restoreString("shufflethis", [8,2,0,5,3,7,4,1,6,9,10,11]), uthfefhlsis, 'Test 51');
test(restoreString("complex", [6,4,1,2,5,0,3]), empxolc, 'Test 52');
test(restoreString("jumble", [3,0,5,4,2,1]), ueljbm, 'Test 53');
test(restoreString("xylophone", [1,9,7,3,5,0,2,8,4,6]), Error: list assignment index out of range, 'Test 54');
test(restoreString("rearrange", [8,4,3,0,5,2,7,6,1]), reaaergnr, 'Test 55');
test(restoreString("algorithm", [5,1,4,0,2,7,6,8,3]), olrmgatih, 'Test 56');
test(restoreString("randomization", [12,1,6,5,0,11,10,9,8,7,4,3,2]), oanoidntazimr, 'Test 57');
test(restoreString("questionable", [10,3,9,8,4,6,5,7,2,0,1]), Error: list index out of range, 'Test 58');
test(restoreString("programming", [1,5,9,12,0,3,7,11,4,8,10,2,6]), Error: list assignment index out of range, 'Test 59');
test(restoreString("continuous", [1,6,5,9,0,3,7,4,8,2]), icsnonouut, 'Test 60');
test(restoreString("programming", [2,4,5,0,1,6,3,7,8,9,10,11,12]), grpmroaming, 'Test 61');
test(restoreString("shufflingstring", [11,7,9,6,13,2,0,10,1,12,3,4,5,8,14]), igltrifhnunssfg, 'Test 62');
test(restoreString("complexity", [3,6,1,5,2,0,7,4,9,8]), emlcipoxyt, 'Test 63');
test(restoreString("rearrange", [3,7,5,2,8,0,4,1,6]), agrrnaeer, 'Test 64');
test(restoreString("permutation", [9,0,4,7,1,5,3,6,2,8]), Error: list index out of range, 'Test 65');
test(restoreString("python", [3,1,5,0,2,4]), hyopnt, 'Test 66');
test(restoreString("algorithm", [1,0,6,4,2,5,3,7,8]), lartoighm, 'Test 67');
test(restoreString("shuffling", [8,2,7,3,5,6,9,0,4,1]), Error: list assignment index out of range, 'Test 68');
test(restoreString("algorithm", [6,4,3,0,5,2,1,8,7]), otiglramh, 'Test 69');
test(restoreString("permutation", [8,5,1,6,7,3,9,2,0,4,10]), irttoemupan, 'Test 70');
test(restoreString("shufflethisstring", [12,5,0,13,2,7,10,4,1,8,11,14,6,9,3]), Error: list index out of range, 'Test 71');
test(restoreString("scrambled", [3,2,0,6,7,4,1,5,8]), rlcsbeamd, 'Test 72');
test(restoreString("algorithm", [9,6,1,4,5,7,8,3,2,0]), Error: list assignment index out of range, 'Test 73');
test(restoreString("complexexample", [5,1,7,2,11,10,6,9,0,3,4,8]), Error: list index out of range, 'Test 74');
test(restoreString("shuffling", [1,3,6,8,0,2,5,4,7]), fslhniugf, 'Test 75');
test(restoreString("vivid", [2,0,4,3,1]), idviv, 'Test 76');
test(restoreString("abcdefghijklmnopqrstuvwxyz", [25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0]), zyxwvutsrqponmlkjihgfedcba, 'Test 77');
test(restoreString("zkrw", [2,3,0,1]), rwzk, 'Test 78');
test(restoreString("complexstring", [10,9,8,7,6,5,4,3,2,1,0]), Error: list index out of range, 'Test 79');
test(restoreString("randomize", [3,8,0,5,4,7,2,6,1]), neirodzma, 'Test 80');
test(restoreString("jumbledtext", [9,0,5,3,8,6,1,2,7,4,10]), udtbxmeeljt, 'Test 81');
test(restoreString("environment", [1,7,4,6,2,0,3,8,10,5,9]), oernvninmte, 'Test 82');
test(restoreString("characters", [6,2,9,5,7,4,1,0,3,8]), ethrcrcasa, 'Test 83');
test(restoreString("permutation", [8,6,0,7,2,9,1,5,4,3]), Error: list index out of range, 'Test 84');
test(restoreString("jfbm", [3,0,1,2]), fbmj, 'Test 85');
test(restoreString("shufflethis", [9,10,11,12,0,1,2,3,4,5,6,7,8]), Error: list assignment index out of range, 'Test 86');
test(restoreString("stressed", [5,1,0,4,3,2]), Error: list index out of range, 'Test 87');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

