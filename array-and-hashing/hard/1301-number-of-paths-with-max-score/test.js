// Test: 1301. Number Of Paths With Max Score
// 108 test cases from LeetCodeDataset
// Run: node test.js

const { pathsWithMaxScore } = require("./solution");

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

console.log("\n1301. Number Of Paths With Max Score\n");

test(pathsWithMaxScore(["E123","45X7","89XS"]), [21, 1], 'Test 1');
test(pathsWithMaxScore(["E11","XXX","11S"]), [0, 0], 'Test 2');
test(pathsWithMaxScore(["EX","XS"]), [0, 1], 'Test 3');
test(pathsWithMaxScore(["E","S"]), Error: string index out of range, 'Test 4');
test(pathsWithMaxScore(["E111","1X11","1111","111S"]), [5, 8], 'Test 5');
test(pathsWithMaxScore(["E22","222","22S"]), [6, 6], 'Test 6');
test(pathsWithMaxScore(["E1X","X1X","X1S"]), [3, 1], 'Test 7');
test(pathsWithMaxScore(["E123","12X3","21XS"]), [4, 3], 'Test 8');
test(pathsWithMaxScore(["E123","1X21","21XS"]), [5, 1], 'Test 9');
test(pathsWithMaxScore(["EX","1S"]), [1, 1], 'Test 10');
test(pathsWithMaxScore(["E23","2X2","12S"]), [7, 1], 'Test 11');
test(pathsWithMaxScore(["E1","X1","1S"]), Error: string index out of range, 'Test 12');
test(pathsWithMaxScore(["E111","1111","11X1","111S"]), [5, 8], 'Test 13');
test(pathsWithMaxScore(["E12","1X1","21S"]), [4, 2], 'Test 14');
test(pathsWithMaxScore(["E123","456X","789S"]), [28, 1], 'Test 15');
test(pathsWithMaxScore(["E123","4X56","789S"]), [28, 1], 'Test 16');
test(pathsWithMaxScore(["E1X","1X1","S11"]), [3, 2], 'Test 17');
test(pathsWithMaxScore(["E1","1S"]), [1, 2], 'Test 18');
test(pathsWithMaxScore(["E123456","2345678","345678X","456789X","56789XS","6789XSX"]), [44, 35], 'Test 19');
test(pathsWithMaxScore(["E121","2121","1212","1S11"]), [9, 6], 'Test 20');
test(pathsWithMaxScore(["E12X4","56789","X1234","5678X","9XS12"]), [40, 1], 'Test 21');
test(pathsWithMaxScore(["E12345","6789X1","234567","89XS12","345678"]), [49, 1], 'Test 22');
test(pathsWithMaxScore(["E1X1X1X1","1X1X1X1X","1X1X1X1X","1X1X1X1X","1X1X1X1X","1X1X1X1X","1X1X1X1S"]), [0, 0], 'Test 23');
test(pathsWithMaxScore(["E11","1X1","11X","X1S"]), Error: string index out of range, 'Test 24');
test(pathsWithMaxScore(["E1234","56X89","4X321","12X56","789XS"]), [30, 1], 'Test 25');
test(pathsWithMaxScore(["E1234567","23456789","3456789X","456789XS","56789XSX","6789XSXX","789XSXXX","89XSXXXX"]), [0, 0], 'Test 26');
test(pathsWithMaxScore(["E123","45X7","89XS","1234","5678","9XS1","2345","6789","XS12","3456"]), Error: string index out of range, 'Test 27');
test(pathsWithMaxScore(["E1234","56789","X123X","45678","9XS12"]), [46, 1], 'Test 28');
test(pathsWithMaxScore(["E1X1","1X1X","1X1X","1X1S"]), [4, 1], 'Test 29');
test(pathsWithMaxScore(["E2222","22222","22X22","22222","2222S"]), [14, 34], 'Test 30');
test(pathsWithMaxScore(["E11111111","1X1X1X1X1","111X111X1","1X1X1X1X1","111X111X1","1X1X1X1X1","111X111X1","1X1X1X1X1","11111111S"]), [15, 11], 'Test 31');
test(pathsWithMaxScore(["E9876","9X8X7","6X5X4","3X2X1","4321S"]), [42, 1], 'Test 32');
test(pathsWithMaxScore(["E1234567","89X12345","6789X123","456789X1","23456789","1234567S","89XS1234"]), [90, 1], 'Test 33');
test(pathsWithMaxScore(["E999","9X99","99X9","999S"]), [45, 4], 'Test 34');
test(pathsWithMaxScore(["E12X4","56789","X1234","56789","S1234"]), [52, 1], 'Test 35');
test(pathsWithMaxScore(["E123456","789X123","456789X","1234567","89X1234","56789XS"]), [63, 1], 'Test 36');
test(pathsWithMaxScore(["E111","1X11","11X1","111S"]), [5, 4], 'Test 37');
test(pathsWithMaxScore(["E222","2X22","2X22","2X2S"]), [10, 4], 'Test 38');
test(pathsWithMaxScore(["E12345","6X7X89","1X2X3X","4X5X6X","7X8X9X","12345S"]), [41, 1], 'Test 39');
test(pathsWithMaxScore(["E1234","1X1X1","21212","31313","4141S"]), [16, 2], 'Test 40');
test(pathsWithMaxScore(["E1234","56X78","9X0X1","23456","7XS9E"]), [37, 1], 'Test 41');
test(pathsWithMaxScore(["E1234567","1X2X3X4X","5X6X7X8X","9X0X1X2X","3X4X5X6X","7X8X9X0X","1234567S"]), [53, 2], 'Test 42');
test(pathsWithMaxScore(["E11","X11","11S","111","111","111","111","111","111","111"]), Error: string index out of range, 'Test 43');
test(pathsWithMaxScore(["E12345","1X2X3X","4X5X6X","7X8X9X","1X2X3X","45678X","12345S"]), Error: string index out of range, 'Test 44');
test(pathsWithMaxScore(["E2222","2X2X2","2X2X2","2X2X2","2222S"]), [14, 3], 'Test 45');
test(pathsWithMaxScore(["E123456","789X123","456789X","1234567","89XS123","3456789"]), [70, 1], 'Test 46');
test(pathsWithMaxScore(["E1X1X1X1X1X1","111111111111","1X1X1X1X1X11","111X1X1X1X11","1X1X1X1X1X11","111X1X1X1X11","1X1X1X1X1X11","111X1X1X1X1S"]), [13, 2], 'Test 47');
test(pathsWithMaxScore(["E1X1X1X1X1X1X1X1","1111111111111111","1X1X1X1X1X1X1X11","111X1X1X1X1X1X11","1X1X1X1X1X1X1X11","111X1X1X1X1X1X11","1X1X1X1X1X1X1X11","111X1X1X1X1X1X11","1X1X1X1X1X1X1X11","111X1X1X1X1X1X11","1X1X1X1X1X1X1X11","111X1X1X1X1X1X11","1X1X1X1X1X1X1X11","111111111111111S"]), [26, 18], 'Test 48');
test(pathsWithMaxScore(["E12X45","1X2X3X","4X5X6X","7X8X9X","1X2X3X","45678S"]), [43, 1], 'Test 49');
test(pathsWithMaxScore(["E1111","1X1X1","111X1","1X1X1","1111S"]), [7, 4], 'Test 50');
test(pathsWithMaxScore(["E1234","56X78","9XABC","DEFXS"]), [14, 2], 'Test 51');
test(pathsWithMaxScore(["E12121","1X1X11","212121","1X1X11","212121","11111S"]), [13, 12], 'Test 52');
test(pathsWithMaxScore(["E12345","6789XS","54321X","98765X","43210X","32109S"]), [55, 1], 'Test 53');
test(pathsWithMaxScore(["E123","4567","89X1","2345","678S"]), Error: string index out of range, 'Test 54');
test(pathsWithMaxScore(["E12345","1X1X1X","212121","1X1X1X","32323S"]), [17, 2], 'Test 55');
test(pathsWithMaxScore(["E22222","2X2X22","222X22","2X2X22","222X22","22222S"]), [18, 11], 'Test 56');
test(pathsWithMaxScore(["E11111","1X1X11","1X1X11","1X1X11","1X1X11","11111S"]), [9, 8], 'Test 57');
test(pathsWithMaxScore(["E12345","67X9X1","234567","89XS12","345678","456789"]), [64, 10], 'Test 58');
test(pathsWithMaxScore(["E1X1X1X1X1X1X1","11111111111111","1X1X1X1X1X1X11","111X1X1X1X1X11","1X1X1X1X1X1X11","111X1X1X1X1X11","1X1X1X1X1X1X11","111X1X1X1X1X11","1X1X1X1X1X1X11","111X1X1X1X1X11","1X1X1X1X1X1X11","1111111111111S"]), [22, 15], 'Test 59');
test(pathsWithMaxScore(["E1234","56X78","9X123","45678","89XS1"]), [45, 1], 'Test 60');
test(pathsWithMaxScore(["E234","1X12","21XS","3456"]), [21, 1], 'Test 61');
test(pathsWithMaxScore(["E1111","1X1X1","1X1X1","1X1X1","1111S"]), [7, 3], 'Test 62');
test(pathsWithMaxScore(["E11111","111111","111X11","111111","111111","11111S"]), [9, 152], 'Test 63');
test(pathsWithMaxScore(["E1111111","1X1X1X11","111X1111","1X1X1X11","111X1111","1X1X1X11","111X1111","1111111S"]), [13, 28], 'Test 64');
test(pathsWithMaxScore(["E12345678910","1X1X1X1X1X1X11","212121212121","1X1X1X1X1X1X11","323232323232","1X1X1X1X1X1X11","414141414141","1X1X1X1X1X1X11","515151515151","1X1X1X1X1X1X11","616161616161","1111111111111S"]), [73, 2], 'Test 65');
test(pathsWithMaxScore(["E123456789","987654321X","123456789X","X987654321","123456789X","X987654321","123456789X","X987654321","123456789X","XS12345678"]), [121, 72], 'Test 66');
test(pathsWithMaxScore(["E12345","67X890","123X45","678X90","123X45","6789XS"]), [45, 1], 'Test 67');
test(pathsWithMaxScore(["E12345678","9X1234567","89X123456","789X12345","6789X1234","56789X123","456789XS1","345678912","234567891","12345678S"]), Error: string index out of range, 'Test 68');
test(pathsWithMaxScore(["E12345","1X2X3X","4X5X6X","7X8X9X","1X2X3X","45678S"]), [43, 1], 'Test 69');
test(pathsWithMaxScore(["E1111","11111","11X11","11111","1111S"]), [7, 34], 'Test 70');
test(pathsWithMaxScore(["E11X1","1X1X1","1X1X1","1X1X1","111XS"]), [0, 0], 'Test 71');
test(pathsWithMaxScore(["E111111","1X1X1X1","111X111","1X1X1X1","111X111","1X1X1X1","111111S"]), [11, 8], 'Test 72');
test(pathsWithMaxScore(["E1X1X1","1X1X1X","1X1X1X","1X1X1X","1X1X1S"]), [0, 0], 'Test 73');
test(pathsWithMaxScore(["E123456789","1X2X3X4X5","6X7X8X9X0","1X2X3X4X5","6X7X8X9X0","1X2X3X4X5","6X7X8X9X0","1X2X3X4X5","6X7X8X9X0","123456789S"]), Error: string index out of range, 'Test 74');
test(pathsWithMaxScore(["E11111","1X1X1X","111X11","1X1X1X","11111S"]), [8, 4], 'Test 75');
test(pathsWithMaxScore(["E1X1X1X1X1X1X1X1X1","111111111111111111","1X1X1X1X1X1X1X1X11","111X1X1X1X1X1X1X11","1X1X1X1X1X1X1X1X11","111X1X1X1X1X1X1X11","1X1X1X1X1X1X1X1X11","111X1X1X1X1X1X1X11","1X1X1X1X1X1X1X1X11","111X1X1X1X1X1X1X11","1X1X1X1X1X1X1X1X11","111X1X1X1X1X1X1X11","1X1X1X1X1X1X1X1X11","111X1X1X1X1X1X1X11","1X1X1X1X1X1X1X1X11","11111111111111111S"]), [30, 21], 'Test 76');
test(pathsWithMaxScore(["E9876","8765X","76543","65432","54321","4321S"]), Error: string index out of range, 'Test 77');
test(pathsWithMaxScore(["E111111","1X1X1X1","111X1X1","1X1X1X1","111X1X1","1X1X1X1","111111S"]), [11, 6], 'Test 78');
test(pathsWithMaxScore(["E11X1","1X1X1","1X1X1","1X1X1","11X1S"]), [6, 1], 'Test 79');
test(pathsWithMaxScore(["E1234","56X78","9X1X2","34567","89XS"]), Error: string index out of range, 'Test 80');
test(pathsWithMaxScore(["E123","21X1","1X1X","321S"]), [9, 1], 'Test 81');
test(pathsWithMaxScore(["E11111","1X1X11","111X11","1X1X11","111X11","11111S"]), [9, 11], 'Test 82');
test(pathsWithMaxScore(["E1111","1X1X1","11111","1X1X1","1111S"]), [7, 6], 'Test 83');
test(pathsWithMaxScore(["E1X11","11X11","111X1","1111X","1111S"]), [7, 19], 'Test 84');
test(pathsWithMaxScore(["E123456","1X2X3X4","5X6X7X8","9X0X1X2","3X4X5X6","7X8X9XS"]), [35, 1], 'Test 85');
test(pathsWithMaxScore(["E12345678","9X1234567","89X12345X","789XS1234","6789XS123","56789XS12","456789XS1","3456789XS"]), [111, 1], 'Test 86');
test(pathsWithMaxScore(["E11111","1X1X11","111111","1X1X1X","111111","11XS11"]), [10, 12], 'Test 87');
test(pathsWithMaxScore(["E1111111","1X1X1X11","11111111","1X1X1X11","11111111","1X1X1X11","11111111","11XS1111"]), [14, 90], 'Test 88');
test(pathsWithMaxScore(["E123456","789X123","456789X","1234567","89XS123","456789S"]), [71, 1], 'Test 89');
test(pathsWithMaxScore(["E12345","1X2X3X","4X5X6X","7X8X9X","1X2X3X","4567XS"]), [31, 1], 'Test 90');
test(pathsWithMaxScore(["E1212121","1X1X1X11","21212121","1X1X1X11","21212121","1X1X1X11","21212121","1111111S"]), [19, 40], 'Test 91');
test(pathsWithMaxScore(["E1234","4321X","1234X","4321X","1234S"]), [21, 8], 'Test 92');
test(pathsWithMaxScore(["E2222","2X2X2","222X2","2X2X2","2222S"]), [14, 4], 'Test 93');
test(pathsWithMaxScore(["E11111","1X1X1X","1X1X1X","1X1X1X","1X1X1X","11111S"]), [9, 3], 'Test 94');
test(pathsWithMaxScore(["E1111","11111","11111","11111","1111S"]), [7, 70], 'Test 95');
test(pathsWithMaxScore(["E123456789","1X11111111","2121212121","3131313131","4141414141","5151515151","6161616161","7171717171","8181818181","9191919191S"]), [86, 1], 'Test 96');
test(pathsWithMaxScore(["E12X12","234567","89XS12","345678","456789","56789S"]), [58, 15], 'Test 97');
test(pathsWithMaxScore(["E12345","678X91","234567","89X123","456789","9XS123"]), [63, 2], 'Test 98');
test(pathsWithMaxScore(["E123456789","1X2X3X4X5","6X7X8X9X0","1X2X3X4X5","6X7X8X9X0","1X2X3X4X5","6X7X8X9X0","1X2X3X4X5","6X7X8X9XS"]), [56, 1], 'Test 99');
test(pathsWithMaxScore(["E1111","1X1X1","1X1X1","1111S"]), [6, 2], 'Test 100');
test(pathsWithMaxScore(["E1X1X1X1X","1X1X1X1X1","1X1X1X1X1","1X1X1X1X1","1X1X1X1X1","1X1X1X1X1","1X1X1X1X1","1X1X1X1X1","1X1X1X1X1","1X1X1X1X1","1X1X1X1XS"]), Error: string index out of range, 'Test 101');
test(pathsWithMaxScore(["E12","2X3","321","X1S"]), Error: string index out of range, 'Test 102');
test(pathsWithMaxScore(["E1234567","89X12345","6789XS12","3456789S","456789XS","56789XS1","6789XS12"]), [0, 0], 'Test 103');
test(pathsWithMaxScore(["E12X45","6789X1","234567","89X123","45678X","9XS123"]), [56, 4], 'Test 104');
test(pathsWithMaxScore(["E123456789","987654X789","87654321X9","7654321X89","654321X789","54321X6789","4321X56789","321X456789","21X3456789","1XS2345678"]), [125, 1], 'Test 105');
test(pathsWithMaxScore(["E1111","11X11","1X1X1","11X11","1111S"]), [7, 4], 'Test 106');
test(pathsWithMaxScore(["E12345","67X89X","123XS1","456789","X98765","4321XS"]), [55, 2], 'Test 107');
test(pathsWithMaxScore(["E1234","1X1X1","23X32","1X1X1","4321S"]), [14, 2], 'Test 108');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

