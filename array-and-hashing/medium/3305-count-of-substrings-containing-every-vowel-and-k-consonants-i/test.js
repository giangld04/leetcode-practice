// Test: 3305. Count Of Substrings Containing Every Vowel And K Consonants I
// 67 test cases from LeetCodeDataset
// Run: node test.js

const { countOfSubstrings } = require("./solution");

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

console.log("\n3305. Count Of Substrings Containing Every Vowel And K Consonants I\n");

test(countOfSubstrings("uuuaaeiooouueiiaaoou", 3), 0, 'Test 1');
test(countOfSubstrings("aeiouaeiouaeiouaeiou", 0), 136, 'Test 2');
test(countOfSubstrings("aeiouzzzzz", 5), 1, 'Test 3');
test(countOfSubstrings("aeioqq", 1), 0, 'Test 4');
test(countOfSubstrings("abcdefghijklmnopqrstuvwxyz", 5), 0, 'Test 5');
test(countOfSubstrings("abcdeaeiouxyz", 2), 4, 'Test 6');
test(countOfSubstrings("aieoubcdefg", 2), 1, 'Test 7');
test(countOfSubstrings("aeiouabcde", 2), 2, 'Test 8');
test(countOfSubstrings("aeiouaeiouaeiou", 3), 0, 'Test 9');
test(countOfSubstrings("bcdfghjklmnpqrstvwxyzaeiou", 5), 1, 'Test 10');
test(countOfSubstrings("aeiou", 0), 1, 'Test 11');
test(countOfSubstrings("abcdefghijklmnopqrstuvwxyz", 2), 0, 'Test 12');
test(countOfSubstrings("uaeiou", 0), 3, 'Test 13');
test(countOfSubstrings("aeioqz", 1), 0, 'Test 14');
test(countOfSubstrings("uuuuuaeiouuuuu", 4), 0, 'Test 15');
test(countOfSubstrings("aeiouaeiou", 0), 21, 'Test 16');
test(countOfSubstrings("zzzzzaeiou", 5), 1, 'Test 17');
test(countOfSubstrings("abcdefghijklmnopqrstuvwxyz", 10), 0, 'Test 18');
test(countOfSubstrings("aeiouaeiouaeiou", 0), 66, 'Test 19');
test(countOfSubstrings("aeiouaaa", 3), 0, 'Test 20');
test(countOfSubstrings("uoieaouiea", 0), 20, 'Test 21');
test(countOfSubstrings("uoiea", 0), 1, 'Test 22');
test(countOfSubstrings("voaiaoueeoiueoaiaioiouua", 4), 0, 'Test 23');
test(countOfSubstrings("uoieaaqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq", 5), 1, 'Test 24');
test(countOfSubstrings("ieaouqqieaouqq", 1), 3, 'Test 25');
test(countOfSubstrings("qwertyuiopasdfghjklzxcvbnmaeiou", 5), 3, 'Test 26');
test(countOfSubstrings("abcdefghijaeiouklmnopqrstuvwxyz", 10), 14, 'Test 27');
test(countOfSubstrings("uaieouaeiouaeiou", 2), 0, 'Test 28');
test(countOfSubstrings("aeiouqweuioaeiouaouieoiaeuoiaeuoiaeu", 7), 0, 'Test 29');
test(countOfSubstrings("aeiouqweaeiouasdfaeiouzxcvbnmaeiou", 8), 22, 'Test 30');
test(countOfSubstrings("aeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiou", 15), 0, 'Test 31');
test(countOfSubstrings("qwertyuiopasdfghjklzxcvbnmaeiouaeiouaeiou", 12), 14, 'Test 32');
test(countOfSubstrings("zxcvbnmlkjhgfdsapoiuytrewqaeiouaeiouaeiouaeiou", 12), 23, 'Test 33');
test(countOfSubstrings("qaeiouqaeiouqaeiouqaeiouqaeiou", 6), 0, 'Test 34');
test(countOfSubstrings("aeeeeiiioouuaeiouaeiou", 3), 0, 'Test 35');
test(countOfSubstrings("aeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiou", 20), 0, 'Test 36');
test(countOfSubstrings("zzzzzqqqaeiouzzzzzzqqqaeiouzzzzzz", 7), 15, 'Test 37');
test(countOfSubstrings("qzxcvbnmlkjhgfdsapoiuytrewqazxcvbnmlkjhgfdsapoiuytrew", 10), 12, 'Test 38');
test(countOfSubstrings("aeiouaeiouaeiouaeiou", 5), 0, 'Test 39');
test(countOfSubstrings("zebraaeiouxyzaeiouxyzaeiouxyzaeiou", 3), 77, 'Test 40');
test(countOfSubstrings("aeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiou", 15), 0, 'Test 41');
test(countOfSubstrings("aeiouaaaaaeiouuuuuuuueeeeeeeeiiooooooo", 5), 0, 'Test 42');
test(countOfSubstrings("aeiouzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 10), 1, 'Test 43');
test(countOfSubstrings("aeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiou", 30), 0, 'Test 44');
test(countOfSubstrings("aeiouaeiouaeiouqzxcvbnmqwertyuioplkjhgfd", 15), 11, 'Test 45');
test(countOfSubstrings("aeiouaouieoiaeuoiaeuoiaeu", 5), 0, 'Test 46');
test(countOfSubstrings("aeiouaeiouzzzzzzaeiouzzzzzaeiou", 4), 12, 'Test 47');
test(countOfSubstrings("uoieaqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq", 15), 1, 'Test 48');
test(countOfSubstrings("lkjhgfdwertyuiozxcvbnaeioumnopqrstaeiou", 11), 23, 'Test 49');
test(countOfSubstrings("aeiouzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz", 1), 1, 'Test 50');
test(countOfSubstrings("aeiouaaaaaaaeeeeeooooouuuuuiiiiaaaaaaeiou", 7), 0, 'Test 51');
test(countOfSubstrings("aeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiou", 25), 0, 'Test 52');
test(countOfSubstrings("iaioiueoaoeuiaoeoieaoeueiaoeuiaoeuiaoeuiaoeuiaoeuiaoeuiaoeu", 8), 0, 'Test 53');
test(countOfSubstrings("voaiaoueeoiueoaiaioiouuaeuoieoiaioiouu", 8), 0, 'Test 54');
test(countOfSubstrings("aeiouzzzzz", 2), 1, 'Test 55');
test(countOfSubstrings("zzzzzzaeiouzzzzz", 1), 2, 'Test 56');
test(countOfSubstrings("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzaeiou", 20), 1, 'Test 57');
test(countOfSubstrings("uaieoaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiou", 5), 0, 'Test 58');
test(countOfSubstrings("vowelsaeiouconsonantsaeiou", 2), 6, 'Test 59');
test(countOfSubstrings("aeioubcdfgheiklmnoqprstuvwxyz", 10), 2, 'Test 60');
test(countOfSubstrings("aeiouaouieoiaeuoiaeuoiaeuqwertyuiopasdfghjklzxcvbnm", 20), 27, 'Test 61');
test(countOfSubstrings("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzzaeiou", 6), 1, 'Test 62');
test(countOfSubstrings("lkjhgfdsapoiuytrewqaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiou", 20), 0, 'Test 63');
test(countOfSubstrings("aeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiou", 30), 0, 'Test 64');
test(countOfSubstrings("aeiouaeiouaeiouuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu", 25), 0, 'Test 65');
test(countOfSubstrings("aaaaaaeiouuuuuuaeiouuuuuuaeiouuuuuuaeiouuuuuu", 20), 0, 'Test 66');
test(countOfSubstrings("aeiouxyzaeiouxyzaeiouxyzaeiouxyzaeiouxyz", 10), 21, 'Test 67');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

