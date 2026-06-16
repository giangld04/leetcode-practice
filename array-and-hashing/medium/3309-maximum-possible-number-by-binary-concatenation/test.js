// Test: 3309. Maximum Possible Number By Binary Concatenation
// 91 test cases from LeetCodeDataset
// Run: node test.js

const { maxGoodNumber } = require("./solution");

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

console.log("\n3309. Maximum Possible Number By Binary Concatenation\n");

test(maxGoodNumber([64,1,127]), 32704, 'Test 1');
test(maxGoodNumber([7,5,3]), 253, 'Test 2');
test(maxGoodNumber([127,127,127]), 2097151, 'Test 3');
test(maxGoodNumber([32,16,8]), 17440, 'Test 4');
test(maxGoodNumber([1,5,7]), 125, 'Test 5');
test(maxGoodNumber([64,32,16]), 135232, 'Test 6');
test(maxGoodNumber([1,2,3]), 30, 'Test 7');
test(maxGoodNumber([2,8,16]), 1296, 'Test 8');
test(maxGoodNumber([1,1,1]), 7, 'Test 9');
test(maxGoodNumber([127,64,32]), 1044544, 'Test 10');
test(maxGoodNumber([3,4,126]), 4084, 'Test 11');
test(maxGoodNumber([127,1,1]), 511, 'Test 12');
test(maxGoodNumber([15, 31, 63]), 32767, 'Test 13');
test(maxGoodNumber([64, 32, 16]), 135232, 'Test 14');
test(maxGoodNumber([99, 66, 33]), 815298, 'Test 15');
test(maxGoodNumber([63, 1, 127]), 16383, 'Test 16');
test(maxGoodNumber([8, 4, 2]), 328, 'Test 17');
test(maxGoodNumber([110, 111, 112]), 1849326, 'Test 18');
test(maxGoodNumber([5, 10, 15]), 2010, 'Test 19');
test(maxGoodNumber([63, 31, 15]), 32767, 'Test 20');
test(maxGoodNumber([50, 60, 70]), 497990, 'Test 21');
test(maxGoodNumber([63,15,31]), 32767, 'Test 22');
test(maxGoodNumber([4,16,8]), 2320, 'Test 23');
test(maxGoodNumber([55, 25, 10]), 28570, 'Test 24');
test(maxGoodNumber([10,200,30]), 126090, 'Test 25');
test(maxGoodNumber([127, 1, 127]), 32767, 'Test 26');
test(maxGoodNumber([7, 7, 7]), 511, 'Test 27');
test(maxGoodNumber([7,5,9]), 985, 'Test 28');
test(maxGoodNumber([21, 42, 84]), 177492, 'Test 29');
test(maxGoodNumber([64, 1, 127]), 32704, 'Test 30');
test(maxGoodNumber([1, 2, 4]), 52, 'Test 31');
test(maxGoodNumber([60, 61, 62]), 257916, 'Test 32');
test(maxGoodNumber([1, 4, 8]), 200, 'Test 33');
test(maxGoodNumber([3, 9, 27]), 1977, 'Test 34');
test(maxGoodNumber([8, 16, 32]), 17440, 'Test 35');
test(maxGoodNumber([100,20,30]), 126100, 'Test 36');
test(maxGoodNumber([63, 64, 65]), 1040576, 'Test 37');
test(maxGoodNumber([15, 31, 127]), 65535, 'Test 38');
test(maxGoodNumber([10, 15, 20]), 8020, 'Test 39');
test(maxGoodNumber([1, 4, 2]), 52, 'Test 40');
test(maxGoodNumber([99,100,101]), 1667683, 'Test 41');
test(maxGoodNumber([7, 14, 28]), 4060, 'Test 42');
test(maxGoodNumber([6, 12, 24]), 3480, 'Test 43');
test(maxGoodNumber([10, 20, 30]), 15700, 'Test 44');
test(maxGoodNumber([9, 5, 7]), 985, 'Test 45');
test(maxGoodNumber([63, 15, 7]), 8191, 'Test 46');
test(maxGoodNumber([6,12,24]), 3480, 'Test 47');
test(maxGoodNumber([31, 30, 29]), 32733, 'Test 48');
test(maxGoodNumber([126, 125, 124]), 2080508, 'Test 49');
test(maxGoodNumber([101, 56, 29]), 244837, 'Test 50');
test(maxGoodNumber([45, 30, 60]), 126765, 'Test 51');
test(maxGoodNumber([127, 64, 32]), 1044544, 'Test 52');
test(maxGoodNumber([1, 127, 64]), 32704, 'Test 53');
test(maxGoodNumber([63, 7, 2]), 2046, 'Test 54');
test(maxGoodNumber([11, 22, 44]), 23980, 'Test 55');
test(maxGoodNumber([111, 44, 88]), 915032, 'Test 56');
test(maxGoodNumber([123,45,67]), 1013443, 'Test 57');
test(maxGoodNumber([85, 17, 34]), 175202, 'Test 58');
test(maxGoodNumber([15, 14, 13]), 4077, 'Test 59');
test(maxGoodNumber([5, 10, 20]), 2900, 'Test 60');
test(maxGoodNumber([100, 50, 75]), 832075, 'Test 61');
test(maxGoodNumber([5, 7, 9]), 985, 'Test 62');
test(maxGoodNumber([45, 44, 43]), 187179, 'Test 63');
test(maxGoodNumber([3, 6, 9]), 489, 'Test 64');
test(maxGoodNumber([3,6,9]), 489, 'Test 65');
test(maxGoodNumber([12, 15, 9]), 4041, 'Test 66');
test(maxGoodNumber([63, 32, 16]), 130080, 'Test 67');
test(maxGoodNumber([120, 96, 64]), 1978432, 'Test 68');
test(maxGoodNumber([100, 50, 25]), 211300, 'Test 69');
test(maxGoodNumber([63, 126, 96]), 1048416, 'Test 70');
test(maxGoodNumber([1, 1, 1]), 7, 'Test 71');
test(maxGoodNumber([126, 63, 31]), 262142, 'Test 72');
test(maxGoodNumber([31, 3, 15]), 2047, 'Test 73');
test(maxGoodNumber([120, 121, 122]), 2014456, 'Test 74');
test(maxGoodNumber([99, 65, 32]), 815200, 'Test 75');
test(maxGoodNumber([99, 88, 77]), 1633357, 'Test 76');
test(maxGoodNumber([120, 124, 126]), 2080376, 'Test 77');
test(maxGoodNumber([100, 99, 101]), 1667683, 'Test 78');
test(maxGoodNumber([127, 1, 2]), 1022, 'Test 79');
test(maxGoodNumber([7, 5, 9]), 985, 'Test 80');
test(maxGoodNumber([80, 81, 82]), 1353936, 'Test 81');
test(maxGoodNumber([9, 18, 27]), 14130, 'Test 82');
test(maxGoodNumber([1,127,64]), 32704, 'Test 83');
test(maxGoodNumber([10, 15, 3]), 1018, 'Test 84');
test(maxGoodNumber([31, 15, 7]), 4095, 'Test 85');
test(maxGoodNumber([30, 20, 10]), 15700, 'Test 86');
test(maxGoodNumber([5, 9, 3]), 473, 'Test 87');
test(maxGoodNumber([23, 45, 67]), 194243, 'Test 88');
test(maxGoodNumber([73, 28, 14]), 61001, 'Test 89');
test(maxGoodNumber([77, 22, 88]), 371789, 'Test 90');
test(maxGoodNumber([60, 30, 15]), 32700, 'Test 91');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

