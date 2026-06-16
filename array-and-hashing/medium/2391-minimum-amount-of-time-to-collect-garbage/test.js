// Test: 2391. Minimum Amount Of Time To Collect Garbage
// 110 test cases from LeetCodeDataset
// Run: node test.js

const { garbageCollection } = require("./solution");

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

console.log("\n2391. Minimum Amount Of Time To Collect Garbage\n");

test(garbageCollection(["M","P","G","M","P","G"], [1,2,3,4,5]), 37, 'Test 1');
test(garbageCollection(["P","G","M","P"], [1,1,1]), 10, 'Test 2');
test(garbageCollection(["GGG","PPP","MMM","GGG","PPP","MMM"], [10,10,10,10,10]), 138, 'Test 3');
test(garbageCollection(["G"], []), 1, 'Test 4');
test(garbageCollection(["G","P","M"], [1,1]), 6, 'Test 5');
test(garbageCollection(["","G","","M","P"], [2,3,2,5]), 24, 'Test 6');
test(garbageCollection(["M","P","G"], [1,1]), 6, 'Test 7');
test(garbageCollection(["GGGG","MM","PP","GG"], [5,5,5]), 40, 'Test 8');
test(garbageCollection(["GGP","GGP","GGP","GGP"], [2,2,2]), 24, 'Test 9');
test(garbageCollection(["","","","",""], [1,1,1,1]), 0, 'Test 10');
test(garbageCollection(["P","M","G"], [1]), 4, 'Test 11');
test(garbageCollection(["M","M","M","M","M"], [1,1,1,1]), 9, 'Test 12');
test(garbageCollection(["","","",""], [1,1,1]), 0, 'Test 13');
test(garbageCollection(["G","P","GP","GG"], [2,4,3]), 21, 'Test 14');
test(garbageCollection(["MMM","PGM","GP"], [3,10]), 37, 'Test 15');
test(garbageCollection(["GMP","GMP","GMP"], [10,10]), 69, 'Test 16');
test(garbageCollection(["MG","GP","PM","MG"], [3,4,2]), 33, 'Test 17');
test(garbageCollection(["MG","GP","MM","PG","GG"], [2,3,1,5]), 32, 'Test 18');
test(garbageCollection(["MGP","MGP","MGP","MGP"], [5,5,5]), 57, 'Test 19');
test(garbageCollection(["GGG","MMM","PPP"], [5,5]), 24, 'Test 20');
test(garbageCollection(["GP","GP","GP","GP"], [1,1,1]), 14, 'Test 21');
test(garbageCollection(["GP","MM","GG","PP","GG"], [5,2,4,3]), 40, 'Test 22');
test(garbageCollection(["P","G","M"], [1,2]), 7, 'Test 23');
test(garbageCollection(["G","M","P","","","G","P","M",""], [1,1,1,1,1,1,1,1]), 24, 'Test 24');
test(garbageCollection(["G", "P", "M", "GP", "MG", "PG", "GMP", "MGP", "PMG", "G"], [2, 3, 1, 5, 4, 2, 3, 1, 4]), 86, 'Test 25');
test(garbageCollection(["G","P","M","G","P","M","G","P","M"], [2,2,2,2,2,2,2,2]), 51, 'Test 26');
test(garbageCollection(["G", "P", "M", "GP", "GM", "MP", "PGM", "MGP", "GMP", "PGMG", "GMPG", "MPGM"], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]), 228, 'Test 27');
test(garbageCollection(["MPG","G","M","P","G","M","P","G"], [10,20,30,40,50,60,70]), 650, 'Test 28');
test(garbageCollection(["GGG","PPP","MMM","GPM","GPM","GPM","GPM"], [2,2,2,2,2,2]), 57, 'Test 29');
test(garbageCollection(["GGP","PGM","MG","PG","GM","MP","GG","PP","MM"], [3,3,3,3,3,3,3,3]), 83, 'Test 30');
test(garbageCollection(["G","P","M","G","P","M","G","P","M"], [1,2,1,2,1,2,1,2]), 40, 'Test 31');
test(garbageCollection(["GGGPPPMMM","GGGPPPMMM","GGGPPPMMM","GGGPPPMMM"], [10,10,10]), 126, 'Test 32');
test(garbageCollection(["","G","P","M","","GP","MG","","","MG"], [2,1,4,2,1,5,2,1,1]), 57, 'Test 33');
test(garbageCollection(["M","G","P","MG","PG","GM","GMP","P","M"], [2,3,1,4,2,3,1,2]), 63, 'Test 34');
test(garbageCollection(["G","M","P","G","M","P","G","M","P","G","M","P","G","M","P"], [1,2,3,4,5,6,7,8,9,10,11,12,13,14]), 289, 'Test 35');
test(garbageCollection(["M","P","G","P","M","G","P","M","G","P","M"], [5,5,5,5,5,5,5,5,5,5]), 146, 'Test 36');
test(garbageCollection(["GGG","PPP","MMM","GGG","PPP","MMM","GGG","PPP","MMM"], [10,20,30,10,20,30,10,20]), 427, 'Test 37');
test(garbageCollection(["MP","GP","MG","PG","GM","PM","MG","PG","GM","PM"], [5,5,5,5,5,5,5,5,5]), 150, 'Test 38');
test(garbageCollection(["MGP","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","MGP"], [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 6, 'Test 39');
test(garbageCollection(["G","P","M","G","P","M","G","P","M","G","P","M","G","P","M","G","P","M","G","P","M"], [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 58, 'Test 40');
test(garbageCollection(["MGP","MGP","MGP","MGP","MGP","MGP","MGP","MGP"], [2,2,2,2,2,2,2]), 66, 'Test 41');
test(garbageCollection(["MMM","MMM","MMM","MMM","MMM","MMM","MMM","MMM","MMM","MMM"], [1,1,1,1,1,1,1,1,1]), 39, 'Test 42');
test(garbageCollection(["GMPGMP","PMPMPM","MGMGMG","PGPGPG","GMPGMP","PMPMPM","MGMGMG","PGPGPG"], [15,15,15,15,15,15,15]), 348, 'Test 43');
test(garbageCollection(["G","M","P","G","M","P","G","M","P"], [1,2,3,4,5,6,7,8]), 94, 'Test 44');
test(garbageCollection(["PG","G","P","G","P","G","P","G","P","G","P"], [1,2,3,4,5,6,7,8,9,10]), 112, 'Test 45');
test(garbageCollection(["G","P","M","G","P","M","G","P","M","G","P","M","G","P","M","G","P","M"], [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 66, 'Test 46');
test(garbageCollection(["GMM", "GGP", "PPP", "MMM", "GGG", "PPP", "MMM"], [7, 8, 9, 10, 11, 12]), 157, 'Test 47');
test(garbageCollection(["GMM", "GGP", "PPP", "MMM", "GGG", "PPP", "MMM", "GPP", "MG", "PGM", "PG", "GM", "MP", "PGM", "GMP"], [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 608, 'Test 48');
test(garbageCollection(["","","","","MGP","MGP","MGP","MGP","MGP","MGP"], [1,1,1,1,1,1,1,1,1]), 45, 'Test 49');
test(garbageCollection(["GGGG","PPPP","MMMM","PPPP","GGGG","MMMM"], [3,4,5,6,7]), 79, 'Test 50');
test(garbageCollection(["G", "P", "M", "GP", "MG", "PG", "GMP", "MGP", "PMG", "G", "P", "M", "GP", "MG", "PG", "GMP", "MGP", "PMG", "G"], [2, 3, 1, 5, 4, 2, 3, 1, 4, 2, 3, 1, 5, 4, 2, 3, 1, 4]), 179, 'Test 51');
test(garbageCollection(["GP","MG","PM","MG","PM","MG","PM","MG","PM","MG"], [5,10,5,10,5,10,5,10,5]), 210, 'Test 52');
test(garbageCollection(["P", "M", "G", "M", "G", "P", "M", "G", "P", "M"], [5, 5, 5, 5, 5, 5, 5, 5, 5]), 130, 'Test 53');
test(garbageCollection(["GMP", "P", "G", "M", "P", "G", "M", "P", "G", "M"], [1, 2, 3, 4, 5, 6, 7, 8, 9]), 121, 'Test 54');
test(garbageCollection(["MPG", "PGM", "GMP", "MGP", "GPM", "PGM", "GMP", "MGP", "GPM", "PGM"], [5, 10, 15, 20, 25, 30, 35, 40, 45]), 705, 'Test 55');
test(garbageCollection(["","","","","","","","","","MGP"], [1,1,1,1,1,1,1,1,1]), 30, 'Test 56');
test(garbageCollection(["G","M","P","G","M","P","G","M","P","G"], [5,5,5,5,5,5,5,5,5]), 130, 'Test 57');
test(garbageCollection(["MGP","G","P","M","GP","MG","PG","GM","PM"], [10,5,7,6,8,9,2,3]), 163, 'Test 58');
test(garbageCollection(["MMM","GGG","PPP","MMM","GGG","PPP","MMM"], [5,5,5,5,5,5]), 96, 'Test 59');
test(garbageCollection(["G","P","M","G","P","M","G","P","M","G","P","M"], [1,1,1,1,1,1,1,1,1,1,1]), 42, 'Test 60');
test(garbageCollection(["GMP", "GMP", "GMP", "GMP", "GMP", "GMP", "GMP", "GMP", "GMP", "GMP", "GMP", "GMP", "GMP", "GMP", "GMP", "GMP", "GMP", "GMP"], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]), 513, 'Test 61');
test(garbageCollection(["MMG","PG","MM","GGG","PP","G"], [3,5,2,6,4]), 57, 'Test 62');
test(garbageCollection(["GGGG","PPPP","MMMM","GGGG","PPPP","MMMM"], [1,2,3,4,5]), 55, 'Test 63');
test(garbageCollection(["G","M","P","GM","PG","MG","GPM","PMG","MPG","GMP"], [2,3,4,5,6,7,8,9,10]), 183, 'Test 64');
test(garbageCollection(["MGP" for _ in range[10000]], [1] * 9999), Error: Solution.garbageCollection[] missing 2 required positional arguments: 'garbage' and 'travel', 'Test 65');
test(garbageCollection(["MGP", "MGP", "MGP", "MGP", "MGP", "MGP", "MGP", "MGP", "MGP", "MGP"], [1, 2, 3, 4, 5, 6, 7, 8, 9]), 165, 'Test 66');
test(garbageCollection(["MGP","","MGP","","MGP","","MGP"], [2,2,2,2,2,2]), 48, 'Test 67');
test(garbageCollection(["MGP","GP","MGG","PGG","MMM","GGP","PGM"], [3,5,2,4,6,7]), 101, 'Test 68');
test(garbageCollection(["MGP","MGP","MGP","MGP","MGP","MGP","MGP","MGP","MGP","MGP"], [10,10,10,10,10,10,10,10,10]), 300, 'Test 69');
test(garbageCollection(["MMMGGGPPP","MMMGGGPPP","MMMGGGPPP","MMMGGGPPP"], [15,15,15]), 171, 'Test 70');
test(garbageCollection(["","","","","","","","","","","PGM"], [1,2,3,4,5,6,7,8,9,10]), 168, 'Test 71');
test(garbageCollection(["GMP", "GMP", "GMP", "", "", "", "GMP", "", "", "GMP", "GMP", "GMP", "", "", "", "GMP", "GMP", "GMP", ""], [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]), 285, 'Test 72');
test(garbageCollection(["","","","","","","",""], [1,1,1,1,1,1,1]), 0, 'Test 73');
test(garbageCollection(["MGPG","GPMP","PGMG","P","M","G","MGP","P","G","MP"], [1,2,3,4,5,6,7,8,9]), 148, 'Test 74');
test(garbageCollection(["", "", "MGP", "", "", "", "", "", "", "MGP"], [1, 2, 3, 4, 5, 6, 7, 8, 9]), 141, 'Test 75');
test(garbageCollection(["MPG","G","P","M","PG","GM","PGM"], [7,3,8,2,5,6]), 106, 'Test 76');
test(garbageCollection(["G", "P", "M", "G", "P", "M", "G", "P", "M", "G", "P", "M", "G", "P", "M", "G", "P", "M", "G", "P", "M"], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]), 382, 'Test 77');
test(garbageCollection(["MMM","MMM","MMM","MMM","MMM"], [10,10,10,10]), 55, 'Test 78');
test(garbageCollection(["G","G","G","G","G","G","G","G","G","G","G"], [1,1,1,1,1,1,1,1,1,1]), 21, 'Test 79');
test(garbageCollection(["", "MGP", "", "P", "G", "MP", "", "MGP", "", "P", "G", "MP", "", "MGP", ""], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]), 290, 'Test 80');
test(garbageCollection(["GMP","P","M","G","MPG","MG","PG","GMP","GMP","P"], [5,5,5,5,5,5,5,5,5]), 145, 'Test 81');
test(garbageCollection(["GP","GP","GP","GP","GP","GP","GP"], [1,1,1,1,1,1]), 26, 'Test 82');
test(garbageCollection(["MMM","PPP","GGG","MMM","PPP","GGG","MMM","PPP","GGG"], [10,10,10,10,10,10,10,10]), 237, 'Test 83');
test(garbageCollection(["MG","PGP","GGM","PPG","MMG"], [3,5,2,7]), 58, 'Test 84');
test(garbageCollection(["MMM","","GG","","","P","","G"], [10,2,3,4,5,6,7]), 68, 'Test 85');
test(garbageCollection(["MMM","MMM","MMM","MMM","MMM","MMM","MMM","MMM","MMM"], [10,10,10,10,10,10,10,10]), 107, 'Test 86');
test(garbageCollection(["GMP","GMP","GMP","GMP","GMP","GMP","GMP","GMP","GMP","GMP"], [5,5,5,5,5,5,5,5,5]), 165, 'Test 87');
test(garbageCollection(["G","G","G","G","G","G","G","G","G","G"], [1,1,1,1,1,1,1,1,1]), 19, 'Test 88');
test(garbageCollection(["G", "P", "M", "G", "", "P", "M", "G", "", "P", "M", "G", "", "P", "M", "G", "", "P", "M", "G"], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 51, 'Test 89');
test(garbageCollection(["G","P","M","G","P","M","G","P","M"], [1,2,3,4,5,6,7,8]), 94, 'Test 90');
test(garbageCollection(["G","P","M","","G","P","M",""], [1,2,3,4,5,6,7]), 52, 'Test 91');
test(garbageCollection(["MPG","MPG","MPG","MPG","MPG","MPG","MPG","MPG"], [5,5,5,5,5,5,5]), 129, 'Test 92');
test(garbageCollection(["MPG","MPG","MPG","MPG","MPG","MPG","MPG","MPG","MPG","MPG"], [1,1,1,1,1,1,1,1,1]), 57, 'Test 93');
test(garbageCollection(["MGP","MGP","","","","","","MGP","MGP","MGP","","","","","MGP"], [2,2,3,3,4,4,5,5,6,6,7,7,8,8]), 228, 'Test 94');
test(garbageCollection(["","","","","","","","","","G"], [1,1,1,1,1,1,1,1,1]), 10, 'Test 95');
test(garbageCollection(["G","P","M","G","P","M","G","P","M","G","P","M","G","P","M","G","P","M"], [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]), 427, 'Test 96');
test(garbageCollection(["MMMM", "PPPP", "GGGG", "MMMM", "PPPP", "GGGG"], [10, 10, 10, 10, 10]), 144, 'Test 97');
test(garbageCollection(["MMM","PPP","GGG","MMM","PPP","GGG","MMM"], [10,10,10,10,10,10]), 171, 'Test 98');
test(garbageCollection(["MGP","MGP","MGP","MGP","MGP","MGP","MGP","MGP","MGP","MGP","MGP","MGP"], [1,1,1,1,1,1,1,1,1,1,1]), 69, 'Test 99');
test(garbageCollection(["MMM", "GGG", "PPP", "MGP", "GMP", "PMM", "GGP", "PPG", "MPM", "MGP"], [10, 20, 15, 10, 5, 12, 8, 18, 7]), 345, 'Test 100');
test(garbageCollection(["M","P","G","MPG","GMP","PGM"], [1,3,2,4,5]), 57, 'Test 101');
test(garbageCollection(["MGP","","","MGP","","","MGP","","","MGP"], [2,1,3,2,1,3,2,1,3]), 66, 'Test 102');
test(garbageCollection(["M", "P", "G", "MP", "PG", "GM", "MG", "PGM"], [2, 3, 1, 4, 5, 6]), 14, 'Test 103');
test(garbageCollection(["G", "P", "M", "G", "P", "M", "G", "P", "M", "G", "P", "M", "G", "P", "M", "G", "P", "M"], [2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3]), 115, 'Test 104');
test(garbageCollection(["MGP", "MG", "P", "G", "MP", "GM", "PG", "MG", "PGM"], [5, 5, 5, 5, 5, 5, 5, 5]), 138, 'Test 105');
test(garbageCollection(["G", "M", "P", "G", "M", "P", "G", "M", "P", "G", "M", "P", "G", "M", "P", "G", "M", "P"], [1] * 17), Error: Solution.garbageCollection[] missing 1 required positional argument: 'travel', 'Test 106');
test(garbageCollection(["G","","P","","M","","G","","P","","M"], [1,2,1,2,1,2,1,2,1,2]), 42, 'Test 107');
test(garbageCollection(["G","P","M","G","P","M","G","P","M","G","P","M","G","P","M"], [1,2,3,4,5,6,7,8,9,10,11,12,13,14]), 289, 'Test 108');
test(garbageCollection(["MGP", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "MGP"], [1] * 19), Error: Solution.garbageCollection[] missing 1 required positional argument: 'travel', 'Test 109');
test(garbageCollection(["G", "P", "M", "PG", "GM", "MP", "PGM"], [1, 2, 3, 4, 5, 6]), 75, 'Test 110');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

