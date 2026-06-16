// Test: 2496. Maximum Value Of A String In An Array
// 109 test cases from LeetCodeDataset
// Run: node test.js

const { maximumValue } = require("./solution");

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

console.log("\n2496. Maximum Value Of A String In An Array\n");

test(maximumValue(["xyz","xyzz","xyzzz","xyzzzz"]), 6, 'Test 1');
test(maximumValue(["a1","b2","c3","1a","2b","3c"]), 2, 'Test 2');
test(maximumValue(["abc", "123", "a1b2c3", "000"]), 123, 'Test 3');
test(maximumValue(["123456789","987654321","111111111","222222222","333333333"]), 987654321, 'Test 4');
test(maximumValue(["a","b","c","d","e","f","g","h","i","j"]), 1, 'Test 5');
test(maximumValue(["alic3","bob","3","4","00000"]), 5, 'Test 6');
test(maximumValue(["abc","123","abcd","4567","89"]), 4567, 'Test 7');
test(maximumValue(["a","b","c","1","2","3","10","11","12"]), 12, 'Test 8');
test(maximumValue(["987654321","abcdefg","hijklmn","000000000"]), 987654321, 'Test 9');
test(maximumValue(["987","654","321","0","abcdefg"]), 987, 'Test 10');
test(maximumValue(["1","01","001","0001"]), 1, 'Test 11');
test(maximumValue(["abc","123","a1b2","11111","zzzzz"]), 11111, 'Test 12');
test(maximumValue(["hello", "world", "python", "code"]), 6, 'Test 13');
test(maximumValue(["111","222","333","4444"]), 4444, 'Test 14');
test(maximumValue(["000","0000","00000","000000","0000000"]), 0, 'Test 15');
test(maximumValue(["98765", "4321", "11111", "222"]), 98765, 'Test 16');
test(maximumValue(["abc","123","def456","7890"]), 7890, 'Test 17');
test(maximumValue(["abc","123","a1b2c3","111111111"]), 111111111, 'Test 18');
test(maximumValue(["a","b","c","d"]), 1, 'Test 19');
test(maximumValue(["99999", "88888", "77777", "66666", "55555", "44444", "33333", "22222", "11111", "00000"]), 99999, 'Test 20');
test(maximumValue(["1","01","001","0001","00001","000001","0000001","00000001","000000001"]), 1, 'Test 21');
test(maximumValue(["123","456","789","abc","def","ghi","1","2","3","4","5","6","7","8","9"]), 789, 'Test 22');
test(maximumValue(["987654321","123456789","abcdefghi","jklmnopqr","000000000","111111111","222222222"]), 987654321, 'Test 23');
test(maximumValue(["a1b2c3d4e", "111111111", "fgh", "5678", "ijklmno"]), 111111111, 'Test 24');
test(maximumValue(["987","654","321","000","00","0","abcdef","ghijkl","mnopqr","stuvwx","yz123"]), 987, 'Test 25');
test(maximumValue(["abc","defg","hijkl","mnopqr","stuvwx","yz123","456789","000000000"]), 456789, 'Test 26');
test(maximumValue(["0","00","000","0000","00000","1","01","001","0001"]), 1, 'Test 27');
test(maximumValue(["a1","b2","c3","d4","e5","f6","g7","h8","i9","j10","k11","l12","m13","n14","o15"]), 3, 'Test 28');
test(maximumValue(["abcdefg","hijklmn","0000000","1234567","890","opqrstu","vwxyz","98765","43210","00001"]), 1234567, 'Test 29');
test(maximumValue(["123abc","456def","789ghi","0","1","2","3","4","5"]), 6, 'Test 30');
test(maximumValue(["a1", "b2", "c3", "d4", "e5", "f6", "g7", "h8", "i9", "j0"]), 2, 'Test 31');
test(maximumValue(["a1","b2","c3","d4","e5","f6","g7","h8","i9","j0","a1b2","c3d4","e5f6","g7h8","i9j0"]), 4, 'Test 32');
test(maximumValue(["a1","b2","c3","d4","e5","f6","g7","h8","i9","j0"]), 2, 'Test 33');
test(maximumValue(["a", "1", "ab", "12", "abc", "123", "abcd", "1234", "abcde", "12345"]), 12345, 'Test 34');
test(maximumValue(["1a2b3c4d5e6f7g8h9i0j","a1b2c3d4e5f6g7h8i9j01","abcde","12345","fghij","67890","klmno","1234","pqrst","5678","uvwxy","90123","z"]), 90123, 'Test 35');
test(maximumValue(["abc123", "456", "def", "7890", "ghi789"]), 7890, 'Test 36');
test(maximumValue(["123", "abc1", "234", "bcd2", "345", "cde3", "456", "def4", "567", "efg5"]), 567, 'Test 37');
test(maximumValue(["abc123","def","ghi","4567","89","0","abcdefg","hijklmn"]), 4567, 'Test 38');
test(maximumValue(["abc123","123abc","abc1","a1b2c3","123456789"]), 123456789, 'Test 39');
test(maximumValue(["123abc","456def","789ghi","abc123def","456ghi789","000abc123","123456789","abcdef000"]), 123456789, 'Test 40');
test(maximumValue(["a1","b2","c3","1a","2b","3c","10a","20b","30c"]), 3, 'Test 41');
test(maximumValue(["abc123","def456","ghi789","jkl012","mno345","pqr678","stu901","vwx234","yz567","0abc","1def","2ghi","3jkl","4mno","5pqr","6stu","7vwx","8yz","9abc"]), 6, 'Test 42');
test(maximumValue(["00001", "00002", "00003", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]), 10, 'Test 43');
test(maximumValue(["zzzzz","00000","11111","22222","33333","44444"]), 44444, 'Test 44');
test(maximumValue(["abcdefg", "hijklmn", "opqrstu", "vwxyz", "0123456", "7890123", "4567890", "1234567", "8901234", "5678901"]), 8901234, 'Test 45');
test(maximumValue(["abcdef","ghijkl","mnopqr","stuvwx","yz","123456","789012","345678","901234","567890"]), 901234, 'Test 46');
test(maximumValue(["1a", "2b", "3c", "4d", "5e", "6f", "7g", "8h", "9i", "0j"]), 2, 'Test 47');
test(maximumValue(["a1b2c3","d4e5f6","g7h8i9","00001","0002","03","40","500","6000","70000","800000","9000000","abcdefgh","ijklmnop","qrstuvwxyz"]), 9000000, 'Test 48');
test(maximumValue(["0","00","000","0000","00000","000000","0000000","00000000","1","2","3","4","5","6","7","8","9"]), 9, 'Test 49');
test(maximumValue(["987654321","87654321","7654321","654321","54321","4321","321","21","1","0","a1b2c3d4e5f6g7h8i9j0"]), 987654321, 'Test 50');
test(maximumValue(["00000000","00000001","00000010","00000100","00001000","00010000","00100000","01000000","10000000"]), 10000000, 'Test 51');
test(maximumValue(["1234567","abcdefg","7654321","gfedcba","123abc","abc123","abc123abc","123abc123","abc","123","1","a","000","999"]), 7654321, 'Test 52');
test(maximumValue(["abcde123", "123abcde", "abcd1234", "1234abcd", "11111111", "22222222", "33333333", "44444444", "55555555", "66666666", "77777777", "88888888", "99999999", "00000000"]), 99999999, 'Test 53');
test(maximumValue(["00001", "00010", "00100", "01000", "10000", "abcde", "fghij", "klmno", "pqrst"]), 10000, 'Test 54');
test(maximumValue(["abcd","efgh","ijkl","mnop","qrst","uvwx","yz01","2345","6789","0000","1111","2222","3333","4444","5555","6666","7777","8888","9999"]), 9999, 'Test 55');
test(maximumValue(["abc123","def","ghi456","789","012345678"]), 12345678, 'Test 56');
test(maximumValue(["a1b", "b2c", "c3d", "d4e", "e5f", "f6g", "g7h", "h8i", "i9j", "j0a", "1a2", "2b3", "3c4", "4d5", "5e6", "6f7", "7g8", "8h9", "9i0", "0j1"]), 3, 'Test 57');
test(maximumValue(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]), 1, 'Test 58');
test(maximumValue(["123","abc","456","def","789","ghi","12","ab","34","cd","56","ef","78","gh","90","ij"]), 789, 'Test 59');
test(maximumValue(["abc123","def456","789","ghi","012","jklmno789"]), 789, 'Test 60');
test(maximumValue(["abcd123","efgh456","ijkl789","mnop000","qrst111","uvwx222","yz333","444abc","555def","666ghi"]), 7, 'Test 61');
test(maximumValue(["zzzzz", "99999", "abcd", "00000", "123456789"]), 123456789, 'Test 62');
test(maximumValue(["a","ab","abc","abcd","abcde","abcdef","abcdefg","abcdefgh","abcdefghi"]), 9, 'Test 63');
test(maximumValue(["zzzz","aaaa","123456789","abcdefghi","000000000","987654321"]), 987654321, 'Test 64');
test(maximumValue(["987654321", "abcdefghi", "123abc", "0", "mnopqrstu"]), 987654321, 'Test 65');
test(maximumValue(["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","abc","bcd","cde","def","efg","fgh","ghi","hij","ijk","jkl","klm","lmn","mno","nop","opq","pqr","qrs","rst","stu","tuv","uvw","vwx","wxy","xyz"]), 30, 'Test 66');
test(maximumValue(["111111111", "abcdefghij", "987654321", "1234567890", "0000000001"]), 1234567890, 'Test 67');
test(maximumValue(["999","888","777","666","555","444","333","222","111","000"]), 999, 'Test 68');
test(maximumValue(["abc1","def2","ghi3","4","5","6","7","8","9","000000000","zzzzzzzzz","111111111","222222222","333333333","444444444","555555555","666666666","777777777","888888888","999999999"]), 999999999, 'Test 69');
test(maximumValue(["999","1000","0000999","01000","abcde12345","12345abcde","zzzzz","99999","000000000"]), 99999, 'Test 70');
test(maximumValue(["123abc456","abc123def","456def123","abcdef","123456","654321","abcdefg","hijklmn","opqrstu","456789","012345","6543210","0000000","9999999","abcdef1","1abcdef","a1b2c3d","d3c2b1a","123456789","987654321"]), 987654321, 'Test 71');
test(maximumValue(["abcd","1234","efgh","5678","ijkl","9012","mnop","3456","qrst","7890"]), 9012, 'Test 72');
test(maximumValue(["abc123","def456","ghi789","123456","123456789"]), 123456789, 'Test 73');
test(maximumValue(["zzz", "zzzz", "zzzzz", "zzzzzz", "zzzzzzz", "zzzzzzzz", "zzzzzzzzz", "zzzzzzzzzz"]), 10, 'Test 74');
test(maximumValue(["00001","000002","0000003","abc1","def2","ghi3","1234","4321","mnopq12345","543210"]), 543210, 'Test 75');
test(maximumValue(["zzz","999","zzz999","999zzz","zzz99","99zzz","zz99","99zz","z9","9z","z","9","000000","111111"]), 111111, 'Test 76');
test(maximumValue(["123abc", "abc123", "12345", "54321", "abcde"]), 54321, 'Test 77');
test(maximumValue(["abcdefg","hijklmn","opqrstu","vwxyz01","2345678","000000000","123456789"]), 123456789, 'Test 78');
test(maximumValue(["1", "01", "001", "0001", "00001", "000001", "0000001", "00000001", "000000001", "0000000001", "00000000001", "000000000001", "0000000000001", "00000000000001"]), 1, 'Test 79');
test(maximumValue(["0","00","000","0000","00000","000000","0000000","00000000","1","10","100","1000","10000","100000","1000000","10000000","100000000"]), 100000000, 'Test 80');
test(maximumValue(["12345", "1234a", "54321", "a1b2c3", "000000001"]), 54321, 'Test 81');
test(maximumValue(["a1b2c3","123abc","abc123","007","0x123","999999","123456789","abcdefghi"]), 123456789, 'Test 82');
test(maximumValue(["abc123","123abc","abc","123","000123","123000"]), 123000, 'Test 83');
test(maximumValue(["aaaaa","bbbbb","ccccc","ddddd","eeeee","11111","22222","33333","44444","55555"]), 55555, 'Test 84');
test(maximumValue(["abcdef","1","0000001","234567","ghijklm","00000","nopqr","00000000","98765"]), 234567, 'Test 85');
test(maximumValue(["xyz","123","456","789","000","111","abc123","def456","ghi789"]), 789, 'Test 86');
test(maximumValue(["a1b2c3","d4e5f6","g7h8i9","j0k1l2","m3n4o5","p6q7r8","s9t0u1","v2w3x4","y5z6a7","b8c9d0"]), 6, 'Test 87');
test(maximumValue(["a1b2c3","d4e5f6","g7h8i9","01234","56789","abcdefg","hijklmn","opqrstu","vwxyz01","23456789"]), 23456789, 'Test 88');
test(maximumValue(["a1","b2","c3","d4","e5","f6","g7","h8","i9","10","11","12","13","14","15"]), 15, 'Test 89');
test(maximumValue(["zzz","yyy","xxx","www","vvv","uuu","ttt","sss","rrr","qqq","ppp","ooo","nnn","mmm","lll","kkk","jjj","iii","hhh","ggg","fff","eee","ddd","ccc","bbb","aaa","123456789","987654321"]), 987654321, 'Test 90');
test(maximumValue(["a1b2c3", "1a2b3c", "abc123", "123abc", "abc", "123", "a1b2", "1a2b", "ab12", "12ab", "a1", "1a", "a", "1"]), 123, 'Test 91');
test(maximumValue(["0","00","000","0000","00000","000000","0000000","00000000","000000000"]), 0, 'Test 92');
test(maximumValue(["abc","123","456","def","789","ghi","012","345","678","jkl","mno","pqr","stu","vwx","yz1"]), 789, 'Test 93');
test(maximumValue(["abcdef","123456","abcdefg","1234567","abcdefgh","12345678","abcdefghi","123456789","abcdefghij"]), 123456789, 'Test 94');
test(maximumValue(["abcdef","ghijkl","mnopqr","123456","789012","321098","abcdefg","hijklmn","opqrstu","456789","012345","654321"]), 789012, 'Test 95');
test(maximumValue(["1234","4321","1111","2222","3333","0000","999","8888","77777","666666"]), 666666, 'Test 96');
test(maximumValue(["1","2","3","4","5","6","7","8","9","0","10","20","30","40","50"]), 50, 'Test 97');
test(maximumValue(["a1b2c3","1a2b3c","abc12","12abc","a1b2","1a2b","abc1","1abc","a1","1a","a","1"]), 6, 'Test 98');
test(maximumValue(["a","ab","abc","abcd","abcde","abcdef","abcdefg","abcdefgh","abcdefghi","abcdefghij","abcdefghijk","abcdefghijkl","abcdefghijklm","abcdefghijklmn","abcdefghijklmno"]), 15, 'Test 99');
test(maximumValue(["zzz","zzz9","zzz99","9zzz","99zzz","999zz","zzz999","zzz9999","zzz99999"]), 8, 'Test 100');
test(maximumValue(["zzzzzzzz","aaaaaaaa","11111111","22222222","33333333","44444444","55555555","66666666","77777777","88888888","99999999","12345678","87654321","abcd1234","4321dcba"]), 99999999, 'Test 101');
test(maximumValue(["1a","2b","3c","4d","5e","6f","7g","8h","9i","0j","001","002","003","004","005","006","007","008","009","000"]), 9, 'Test 102');
test(maximumValue(["abc123","123abc","abc","123","000000000","999999999"]), 999999999, 'Test 103');
test(maximumValue(["000000001","00000002","00000003","abcde","fghij","klmno","6789","987654321","000000000"]), 987654321, 'Test 104');
test(maximumValue(["0000000","0000001","0000002","0000003","0000004","0000005","0000006","0000007","0000008","0000009"]), 9, 'Test 105');
test(maximumValue(["a1b2c3","d4e5f6","g7h8i9","10","11","12","13","14","15"]), 15, 'Test 106');
test(maximumValue(["a1b2c3","d4e5f6","g7h8i9","00000","987654321","111111111"]), 987654321, 'Test 107');
test(maximumValue(["00123","000045","0000067","123","4567","89012"]), 89012, 'Test 108');
test(maximumValue(["9876543210","876543210","76543210","6543210","543210","43210","3210","210","10","0","abcdefghijklmnopqrstuvwxyz"]), 9876543210, 'Test 109');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

