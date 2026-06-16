// Test: 2108. Find First Palindromic String In The Array
// 104 test cases from LeetCodeDataset
// Run: node test.js

const { firstPalindrome } = require("./solution");

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

console.log("\n2108. Find First Palindromic String In The Array\n");

test(firstPalindrome(["hello","world","python","madam"]), madam, 'Test 1');
test(firstPalindrome(["hello","world","python"]), , 'Test 2');
test(firstPalindrome(["abba","abcba","abcdedcba","nonpalindrome"]), abba, 'Test 3');
test(firstPalindrome(["level","deified","civic","rotor"]), level, 'Test 4');
test(firstPalindrome(["abccba","def","ghi","jklmnoponmlkj"]), abccba, 'Test 5');
test(firstPalindrome(["abc","car","ada","racecar","cool"]), ada, 'Test 6');
test(firstPalindrome(["madam","refer","level","world"]), madam, 'Test 7');
test(firstPalindrome(["madam","racecar","refer","deed","peep","noon"]), madam, 'Test 8');
test(firstPalindrome(["reviled","civic","rotor","redder","repaper","deed"]), civic, 'Test 9');
test(firstPalindrome(["a","b","c","d","e"]), a, 'Test 10');
test(firstPalindrome(["a","b","c"]), a, 'Test 11');
test(firstPalindrome(["racecar","ada","cool","abc"]), racecar, 'Test 12');
test(firstPalindrome(["noon","level","deified","rotor","redder"]), noon, 'Test 13');
test(firstPalindrome(["notapalindrome","racecar"]), racecar, 'Test 14');
test(firstPalindrome(["Was","it","a","car","or","a","cat","I","saw"]), a, 'Test 15');
test(firstPalindrome(["racecar","car","level"]), racecar, 'Test 16');
test(firstPalindrome(["noon","moon","refer","deed"]), noon, 'Test 17');
test(firstPalindrome(["abcde","fghij","klmno","pqrst"]), , 'Test 18');
test(firstPalindrome(["madam","refer","deed","peep","level"]), madam, 'Test 19');
test(firstPalindrome(["abacaba","racecar","kayak","detartrated","repaper"]), abacaba, 'Test 20');
test(firstPalindrome(["hello","world","python","programming"]), , 'Test 21');
test(firstPalindrome(["level","deified","civic","rotor","kayak","reviled"]), level, 'Test 22');
test(firstPalindrome(["noon","level","world","deified"]), noon, 'Test 23');
test(firstPalindrome(["abccba","defed","ghi","jkllkj"]), abccba, 'Test 24');
test(firstPalindrome(["def","ghi"]), , 'Test 25');
test(firstPalindrome(["noon","civic","rotor","deified"]), noon, 'Test 26');
test(firstPalindrome(["abcba","xyz","madam","noon"]), abcba, 'Test 27');
test(firstPalindrome(["step","on","no","pets"]), , 'Test 28');
test(firstPalindrome(["noon","racecar","kayak","reviled","civic","madam","refer","deed","detartrated","repaper"]), noon, 'Test 29');
test(firstPalindrome(["notapalindrome","almostapalindrome","palindromebutnot","thisisnotapalindrome","palindromic","palindrome","palindromes","palindromicly"]), , 'Test 30');
test(firstPalindrome(["abba","acca","adda","aedd","aeeea","aeeeea","aeeeeea","aeeeeeea"]), abba, 'Test 31');
test(firstPalindrome(["algorithm","datastructure","python","java","csharp","javascript","typescript","ruby","swift","kotlin"]), , 'Test 32');
test(firstPalindrome(["notapalindrome","stillnotapalindrome","palindrome","palindromic","racecar","noon","level"]), racecar, 'Test 33');
test(firstPalindrome(["a","bb","ccc","dddd","eeeee","ffffff","ggggggg","hhhhhhhh","iiiiiiiii","jjjjjjjjjj"]), a, 'Test 34');
test(firstPalindrome(["abccba","defed","fedcbafedcba","zxyzyx","mnoponm","qwertyytrewq","poiuytghjklkjhgfdsapoiuytrewq"]), abccba, 'Test 35');
test(firstPalindrome(["racecar","level","civic","rotor","deified","repaper","reviver","rotator"]), racecar, 'Test 36');
test(firstPalindrome(["nonpalindrome","notapalindrome","neverpalindrome","nopalin","palindromeisnothere","stillnotapalindrome"]), , 'Test 37');
test(firstPalindrome(["racecar","refer","reviler","repaper","rotor","level","kayak","stats","repaper","reviler","rotor","level","kayak","stats","repaper","reviler","rotor","level","kayak","stats","ananab","banana","anana","level","deed","civic","rotor","detartrated","redivider","deified","racecar"]), racecar, 'Test 38');
test(firstPalindrome(["noon","civic","rotor","deed","peep","reed"]), noon, 'Test 39');
test(firstPalindrome(["x","y","z","aa","bb","cc","aaa","bbb","ccc","aaaa","bbbb","cccc","abcba","abccba","abba","racecar","madam","refer","deed","peep"]), x, 'Test 40');
test(firstPalindrome(["nonpalindromic","string","without","any","palindrome","here"]), , 'Test 41');
test(firstPalindrome(["deed","peep","noon","radar","repaper","reviver","rotator"]), deed, 'Test 42');
test(firstPalindrome(["racecar","deified","civic","rotor","level","repaper","rotor","reviled","detartrated","redivider","deed","peep","radar","redder","refer","rotator","reviver","rotor","racecar","madam","refer","racecar","deified","civic","rotor","level","repaper","rotor","reviled","detartrated","redivider","deed","peep","radar","redder","refer","rotator","reviver","rotor","racecar","madam","refer","racecar","deified","civic","rotor","level","repaper","rotor","reviled","detartrated","redivider","deed","peep","radar","redder","refer","rotator","reviver","rotor","racecar","madam","refer"]), racecar, 'Test 43');
test(firstPalindrome(["aabbccdd","ddccbbaa","abcdeedcba","abcdefghihgfedcba","abcdefghijkjihgfedcba","abcdefghijllkjihgfedcba","abcdefghijllkjihgfedcbaf","mnopqrstsrqponm"]), abcdeedcba, 'Test 44');
test(firstPalindrome(["a","bb","ccc","dddd","eeeee"]), a, 'Test 45');
test(firstPalindrome(["xylophone","guitar","piano","violin","flute","saxophone","trombone","trumpet","harp","xylophone","guitar","piano","violin","flute","saxophone","trombone","trumpet","harp","a","ab","aba","abcba","abcdedcba","abcdecba","abba","abcba"]), a, 'Test 46');
test(firstPalindrome(["racecar","refer","deed","peep","wow","madam","rotor","level"]), racecar, 'Test 47');
test(firstPalindrome(["zzzzzzzz","zzzyzzzz","zzzyyzzz","zzzyyyzz","zzzyyyyzzz","zzzyyyyyzzzz","zzzyyyyyyzzzzz"]), zzzzzzzz, 'Test 48');
test(firstPalindrome(["notapalindrome","noon","racecar","rotor","notapalindrome","reviled","detartrated","redivider","notapalindrome","deed","peep","radar","redder","refer","rotator","reviver","rotor","racecar","madam","refer","notapalindrome"]), noon, 'Test 49');
test(firstPalindrome(["noon","level","rotor","deified","civic","radar"]), noon, 'Test 50');
test(firstPalindrome(["abcdcba","dcba","efgh","hgef","ijkl","lkji","mnop","ponm","qrst","tsrq","uvw","wvu","xyz","zyx","racecar","level","deified","rotor","deed","peep","wow","civic","radar","refer","detartrated","repaper"]), abcdcba, 'Test 51');
test(firstPalindrome(["this","is","not","a","palindrome","racecar","madam","refer","repaper","rotor","level","kayak","stats","repaper","reviler","rotor","level","kayak","stats","ananab","banana","anana","level","deed","civic","rotor","detartrated","redivider","deified","racecar"]), a, 'Test 52');
test(firstPalindrome(["repaper","deed","civic","level","rotor","kayak","racecar","reviled"]), repaper, 'Test 53');
test(firstPalindrome(["bobby","radar","level","rotor","deed","peep","wow","madam"]), radar, 'Test 54');
test(firstPalindrome(["abccba","abcde","fghij","klmno","pqrst","xyzzyx","mnopqr","stuvuts"]), abccba, 'Test 55');
test(firstPalindrome(["abccba","bcb","a","bb","ccc","dddd","eeeee","ffffff","ggggggg","hhhhhhhh","iiiiiiiii","jjjjjjjjjj"]), abccba, 'Test 56');
test(firstPalindrome(["abcdedcba","abcdecba","abba","abcba","a","ab","aba","noon","civic","rotor","level","deified","redivider","detartrated","deed","peep","racecar","refer","reviler","repaper","rotor","level","kayak","stats","repaper","reviler","rotor","level","kayak","stats","ananab","banana","anana","level","deed","civic","rotor","detartrated","redivider","deified","racecar"]), abcdedcba, 'Test 57');
test(firstPalindrome(["verylongpalindromesequenceeosuqeeqosuerosequencemosuqeeqoserev","nonpalindrome","anotherlongword","racecar","level","deified"]), racecar, 'Test 58');
test(firstPalindrome(["nonpalindrome","another","longwordthatshouldnotbeapalindrome","almostapalindromemordnilapalmo","racecar","noon"]), racecar, 'Test 59');
test(firstPalindrome(["aabbcc","racecar","level","noon","civic","rotor","kayak"]), racecar, 'Test 60');
test(firstPalindrome(["aabb","abba","abcba","abcdedcba","abcdeedcba","abcdefgfedcba","ghijklmnonmlkjihg","poiuytrewqmrewtuyiop"]), abba, 'Test 61');
test(firstPalindrome(["noon","civic","rotor","level","deified","redivider","detartrated","deed","peep","racecar","refer","reviler","repaper","rotor","level","kayak","stats","repaper","reviler","rotor","level","kayak","stats","ananab","banana","anana","level","deed","civic","rotor","detartrated","redivider","deified","racecar"]), noon, 'Test 62');
test(firstPalindrome(["abacaba","bcb","abcba","a","racecar","level","deified","rotor","deed","peep","wow","civic","radar","refer","detartrated","repaper"]), abacaba, 'Test 63');
test(firstPalindrome(["madam","refer","stats","civic","rotor","kayak"]), madam, 'Test 64');
test(firstPalindrome(["zxcvbnm","mnbvcxz","qwertyuiop","poiuytrewq","asdfghjkl","lkjhgfdsa","qwertyuiopasdfghjklzxcvbnm","mnbvcxzlkjhgfdsapoiuytrewq","noon","civic","rotor","level","deified","redivider","detartrated","deed","peep","racecar","refer","reviler","repaper","rotor","level","kayak","stats","repaper","reviler","rotor","level","kayak","stats","ananab","banana","anana","level","deed","civic","rotor","detartrated","redivider","deified","racecar"]), noon, 'Test 65');
test(firstPalindrome(["madam","refer","deed","peep","reed","level","deified","repaper","deed","wow","did","civic","rotor","kayak","reviled","redder","repaper","peep","deed","madam","refer","civic","rotor","kayak","reviled"]), madam, 'Test 66');
test(firstPalindrome(["no","on","civic","rotor","deed","peep","noon","radar","racecar","redder","repaper","level","deified"]), civic, 'Test 67');
test(firstPalindrome(["level","deified","civic","rotor","refer","deed","peep","wow","madam"]), level, 'Test 68');
test(firstPalindrome(["xylophone","keyboard","guitar","piano","violin","flute","drums","harp","saxophone","trumpet"]), , 'Test 69');
test(firstPalindrome(["xylophone","guitar","piano","drums","violin","harp","flute","trumpet"]), , 'Test 70');
test(firstPalindrome(["a","bb","ccc","dddd","eeeee","ffffff"]), a, 'Test 71');
test(firstPalindrome(["aabb","bbcc","ccdd","ddeeff","ffeeggee","hhiijjkk","llmmnnoopp","qqrrssttuuvvww","xxxyyyyzzzz"]), , 'Test 72');
test(firstPalindrome(["racecar","refer","deified","civic","level","rotor","kayak","reviled","deed","noon","madam","repaper","elppa","stuvuts","xyzzyx"]), racecar, 'Test 73');
test(firstPalindrome(["noon","level","deified","rotor","repaper","reviled","detartrated","redivider","deed","peep","radar","redder","refer","rotator","reviver","rotor","racecar","madam","refer"]), noon, 'Test 74');
test(firstPalindrome(["12321","1234321","123454321","12345654321","1234567654321","123456787654321","12345678987654321","1234567890987654321","123456789010987654321","12345678901210987654321","1234567890123210987654321"]), 12321, 'Test 75');
test(firstPalindrome(["qwerty","asdfgh","zxcvbn","police","museum","kayak"]), kayak, 'Test 76');
test(firstPalindrome(["a","aa","aaa","aaaa","abcba","abccba","abcdcba","abcdeba","abcdefedcba","abcdeedcba"]), a, 'Test 77');
test(firstPalindrome(["ab","aba","abcba","abcdedcba","abcdeedcba","abcdefgfedcba"]), aba, 'Test 78');
test(firstPalindrome(["banana","ananab","mango","orange","grape","apple","elppa"]), , 'Test 79');
test(firstPalindrome(["noon","level","civic","rotor","deified","repaper","reviver","rotator","a","bb","ccc","dddd","eeeee","ffffff","ggggggg","hhhhhhhh","iiiiiiiii","jjjjjjjjjj"]), noon, 'Test 80');
test(firstPalindrome(["xyzzyx","xyzyx","xyx","xx","x","aaa","abba","abcba","abcdedcba","abcdefghihgfedcba"]), xyzzyx, 'Test 81');
test(firstPalindrome(["madam","refer","level","deified","rotor","kayak","reviled","rotor","redder","repaper"]), madam, 'Test 82');
test(firstPalindrome(["aaaaaaaa","abccba","abcddcba","abcdedcba","abcdefghihgfedcba","abcdefghgfedcba","abcdeffedcba"]), aaaaaaaa, 'Test 83');
test(firstPalindrome(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]), a, 'Test 84');
test(firstPalindrome(["abba","acca","adca","aeia","afda","agga"]), abba, 'Test 85');
test(firstPalindrome(["a","ab","abc","abcd","abcde","abcdef","abcdefg","abcdefgh","abcdefghi","abcdefghij","abcdefghijk","abcdefghijkl","abcdefghijklm","abcdefghijklmn","abcdefghijklmno","abcdefghijklmnop","abcdefghijklmnopq","abcdefghijklmnopqr","abcdefghijklmnopqrs","abcdefghijklmnopqrst","abcdefghijklmnopqrstu","abcdefghijklmnopqrstuv","abcdefghijklmnopqrstuvw","abcdefghijklmnopqrstuvwx","abcdefghijklmnopqrstuvwxy","abcdefghijklmnopqrstuvwxyz"]), a, 'Test 86');
test(firstPalindrome(["abcdeedcba","fghihgf","jklmlkj","nopon","qrsrstq","tuvut","xyzzyx","abcdedcba","fghigfh","jklkjl","mnoponm","qrstsrq","tuvutuv","xyzyx","abccba","madam","refer","noon","peep","deed","racecar","repaper","redder"]), abcdeedcba, 'Test 87');
test(firstPalindrome(["level","deified","civic","rotor","kayak","madam","racecar","refer","reviled"]), level, 'Test 88');
test(firstPalindrome(["aabbcc","baccab","racecar","madam","refer","reviler","repaper","repaper","rotor","level","kayak","stats","rotor","refer","reviler","repaper","rotor","level","kayak","stats"]), baccab, 'Test 89');
test(firstPalindrome(["notapalindrome","almostapalindrome","palindromebutnot","thisisnotapalindrome","palindromic","palindrome","palindromes","palindromicly","a","aa","aaa","aaaa","abcba","abccba","abcdcba","abcdeba","abcdefedcba","abcdeedcba"]), a, 'Test 90');
test(firstPalindrome(["anana","banana","ananab","level","deed","civic","rotor","detartrated","redivider","deified","kayak","stats","repaper","reviler","rotor","level","kayak","stats","repaper","reviler","rotor","level","kayak","stats"]), anana, 'Test 91');
test(firstPalindrome(["abccba","defg","hijklm","nopqrst","uvwxyz"]), abccba, 'Test 92');
test(firstPalindrome(["deified","repaper","detartrated","reviled","redder","repaid","deed"]), deified, 'Test 93');
test(firstPalindrome(["aabbccddeeff","ffeeddccbbaa","abcdefedcba","abcdefgihgfedcba","abcdefghijkjihgfedcba","abcdefghijllkjihgfedcba","abcdefghijllkjihgfedcbaf"]), abcdefedcba, 'Test 94');
test(firstPalindrome(["abac","abcba","abccba","abcdedcba","abcdeedcba","abcdeedcbaf","abcdeedcba","abcdefedcbaf","abcdefedcba","abcdefgihgfedcba","abcdefghihgfedcba","abcdefghihgfedcba123"]), abcba, 'Test 95');
test(firstPalindrome(["thisisnotapalindrome","neitheristhis","butthisoneis","civic","rotor","madam","refer","noon","deed","racecar","repaper","redder","level","deified","abccba","abcba","abba","baab","abcdedcba","fghigfh","jklkjl","mnoponm","qrstsrq","tuvutuv","xyzyx"]), civic, 'Test 96');
test(firstPalindrome(["noon","level","deified","rotor","reviled"]), noon, 'Test 97');
test(firstPalindrome(["level","deified","rotor","redder","repaper","deed","peep","wow","civic","radar"]), level, 'Test 98');
test(firstPalindrome(["madam","refer","level","deified","rotor","reviled"]), madam, 'Test 99');
test(firstPalindrome(["deified","level","civic","rotor","kayak","reviled","madam","refer","noon","peep","redder","repaper","racecar","deed"]), deified, 'Test 100');
test(firstPalindrome(["aabb","bbaa","abba","baab","abcba","abccba","madam","refer","noon","deed","racecar","repaper","redder","civic","rotor","kayak","reviled","deified","level","rotor","redder","repaper","level","deified"]), abba, 'Test 101');
test(firstPalindrome(["xylophone","guitar","piano","drums","flute","violin","harp"]), , 'Test 102');
test(firstPalindrome(["abcd","dcba","efgh","hgef","ijkl","lkji","mnop","ponm","qrst","tsrq","uvw","wvu","xyz","zyx"]), , 'Test 103');
test(firstPalindrome(["noon","civic","rotor","level","deified","redivider","detartrated","deed","peep","racecar"]), noon, 'Test 104');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

