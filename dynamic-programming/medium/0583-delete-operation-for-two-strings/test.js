// Test: 583. Delete Operation For Two Strings
// 104 test cases from LeetCodeDataset
// Run: node test.js

const { minDistance } = require("./solution");

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

console.log("\n583. Delete Operation For Two Strings\n");

test(minDistance('abc', 'def'), 6, 'Test 1');
test(minDistance("abcde", "fghij"), 10, 'Test 2');
test(minDistance("abcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba"), 50, 'Test 3');
test(minDistance("sea", "eat"), 2, 'Test 4');
test(minDistance('abcd', 'dcba'), 6, 'Test 5');
test(minDistance('leetcode', 'etco'), 4, 'Test 6');
test(minDistance("abc", "abc"), 0, 'Test 7');
test(minDistance('a', 'b'), 2, 'Test 8');
test(minDistance("park", "spake"), 3, 'Test 9');
test(minDistance("flaw", "lawn"), 2, 'Test 10');
test(minDistance("leetcode", "etco"), 4, 'Test 11');
test(minDistance('abcde', 'ace'), 2, 'Test 12');
test(minDistance('pneumonoultramicroscopicsilicovolcanoconiosis', 'ultramicroscopicsilicovolcanoconiosis'), 8, 'Test 13');
test(minDistance('qwertyuiop', 'asdfghjklzxcvbnm'), 26, 'Test 14');
test(minDistance("a", "b"), 2, 'Test 15');
test(minDistance('abc', 'abc'), 0, 'Test 16');
test(minDistance('sea', 'eat'), 2, 'Test 17');
test(minDistance('a', 'a'), 0, 'Test 18');
test(minDistance("intention", "execution"), 8, 'Test 19');
test(minDistance("abcd", "dcba"), 6, 'Test 20');
test(minDistance("abc", "def"), 6, 'Test 21');
test(minDistance('aabbccdd', 'ddccbbaa'), 12, 'Test 22');
test(minDistance('algorithm', 'alligator'), 8, 'Test 23');
test(minDistance('abcdabcdeabc', 'abcdeabcdeabcd'), 2, 'Test 24');
test(minDistance('mississippi', 'pississippi'), 2, 'Test 25');
test(minDistance('abcdefgh', 'hgfedcba'), 14, 'Test 26');
test(minDistance('pneumonoultramicroscopicsilicovolcanoconiosis', 'pseudopseudohypoparathyroidism'), 49, 'Test 27');
test(minDistance('interstellar', 'interplanetary'), 10, 'Test 28');
test(minDistance('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb'), 808, 'Test 29');
test(minDistance('thisisalongstring', 'thisisanotherrandomstring'), 12, 'Test 30');
test(minDistance('dynamic', 'programming'), 12, 'Test 31');
test(minDistance('karolin', 'kathrin'), 4, 'Test 32');
test(minDistance('mississippi', 'mississipi'), 1, 'Test 33');
test(minDistance('abcdabcdefabcde', 'abcde'), 10, 'Test 34');
test(minDistance('hippopotomonstrosesquippedaliophobia', 'supercalifragilisticexpialidocious'), 50, 'Test 35');
test(minDistance('algorithm', 'rhythm'), 7, 'Test 36');
test(minDistance('ababababab', 'bababababa'), 2, 'Test 37');
test(minDistance('programming', 'program'), 4, 'Test 38');
test(minDistance('abacaxabayabacaxabay', 'abayabacaxabayabacaxab'), 6, 'Test 39');
test(minDistance('flibbertigibbet', 'fribblegibbet'), 6, 'Test 40');
test(minDistance('longest', 'substring'), 12, 'Test 41');
test(minDistance('flaw', 'lawn'), 2, 'Test 42');
test(minDistance('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb'), 120, 'Test 43');
test(minDistance('flower', 'flow'), 2, 'Test 44');
test(minDistance('xyzxyz', 'zyxzyx'), 6, 'Test 45');
test(minDistance('abracadabra', 'abrakadabradabra'), 7, 'Test 46');
test(minDistance('aaaaa', 'bbbbb'), 10, 'Test 47');
test(minDistance('pneumonoultramicroscopicsilicovolcanoconiosis', 'pneumonoultramicroscopicsilicovolcanoconiosisxyz'), 3, 'Test 48');
test(minDistance('evaporate', 'volatile'), 7, 'Test 49');
test(minDistance('racecar', 'civic'), 8, 'Test 50');
test(minDistance('abacabadabacaba', 'abacabadabacabax'), 1, 'Test 51');
test(minDistance('longest', 'shortest'), 7, 'Test 52');
test(minDistance('abcd', 'abef'), 4, 'Test 53');
test(minDistance('algorithm', 'altruistic'), 9, 'Test 54');
test(minDistance('mississippi', 'missisippi'), 1, 'Test 55');
test(minDistance('longestcommonsubsequence', 'longestcommonsubstring'), 10, 'Test 56');
test(minDistance('kittens', 'sitting'), 6, 'Test 57');
test(minDistance('aaaaaaaaaaaaaa', 'bbbbbbbbbbbbbb'), 28, 'Test 58');
test(minDistance('abcdefghijklmnopqrstuvwxyz', 'zyxwvutsrqponmlkjihgfedcba'), 50, 'Test 59');
test(minDistance('thequickbrownfoxjumpsoverthelazydog', 'packmyboxwithfivedozenliquorjugs'), 43, 'Test 60');
test(minDistance('aaaaaa', 'bbbbbb'), 12, 'Test 61');
test(minDistance('abracadabra', 'abacaxabay'), 5, 'Test 62');
test(minDistance('racecar', 'racecar'), 0, 'Test 63');
test(minDistance('abcdxyz', 'xyzabcd'), 6, 'Test 64');
test(minDistance('palindrome', 'madam'), 9, 'Test 65');
test(minDistance('mississippi', 'missisipi'), 2, 'Test 66');
test(minDistance('programming', 'prognosis'), 10, 'Test 67');
test(minDistance('sequence', 'subsequence'), 3, 'Test 68');
test(minDistance('floccinaucinihilipilification', 'antidisestablishmentarianism'), 39, 'Test 69');
test(minDistance('abracadabra', 'avadakedavra'), 9, 'Test 70');
test(minDistance('programming', 'programmer'), 5, 'Test 71');
test(minDistance('mississippi', 'misisippi'), 2, 'Test 72');
test(minDistance('aaaaaabbbbb', 'bbbbbbaaaaa'), 12, 'Test 73');
test(minDistance('dissimilar', 'similarly'), 5, 'Test 74');
test(minDistance('kitten', 'sitting'), 5, 'Test 75');
test(minDistance('mississippi', 'mississsippi'), 1, 'Test 76');
test(minDistance('abc', 'xyz'), 6, 'Test 77');
test(minDistance('gumbo', 'gambol'), 3, 'Test 78');
test(minDistance('elephant', 'relevant'), 4, 'Test 79');
test(minDistance('abcde', 'fghij'), 10, 'Test 80');
test(minDistance('supercalifragilisticexpialidocious', 'pneumonoultramicroscopicsilicovolcanoconiosis'), 45, 'Test 81');
test(minDistance('palindrome', 'emordnilap'), 18, 'Test 82');
test(minDistance('dynamicprogramming', 'dynamicprogram'), 4, 'Test 83');
test(minDistance('abacaxi', 'bacana'), 5, 'Test 84');
test(minDistance('abcd', 'abcde'), 1, 'Test 85');
test(minDistance('abracadabra', 'abracadabrac'), 1, 'Test 86');
test(minDistance('abcdefgh', 'efghijkl'), 8, 'Test 87');
test(minDistance('abacaxi', 'bacaxia'), 2, 'Test 88');
test(minDistance('abcdefgh', 'fghijklm'), 10, 'Test 89');
test(minDistance('abcd', 'abcd'), 0, 'Test 90');
test(minDistance('qwertyuiopasdfghjklzxcvbnm', 'mnbvcxzlkjhgfdsapoiuytrewq'), 50, 'Test 91');
test(minDistance('xylophone', 'balalaika'), 16, 'Test 92');
test(minDistance('abcdefghijk', 'kjihgfedcba'), 20, 'Test 93');
test(minDistance('transformation', 'transfigure'), 11, 'Test 94');
test(minDistance('abacaxi', 'abacaxi'), 0, 'Test 95');
test(minDistance('similarities', 'dissimilarities'), 3, 'Test 96');
test(minDistance('characters', 'chartreuse'), 6, 'Test 97');
test(minDistance('floccinaucinihilipilification', 'supercalifragilisticexpialidocious'), 37, 'Test 98');
test(minDistance('deleting', 'leting'), 2, 'Test 99');
test(minDistance('abcabcabc', 'cbacbacba'), 8, 'Test 100');
test(minDistance('pneumonoultramicroscopicsilicovolcanoconiosis', 'supercalifragilisticexpialidocious'), 45, 'Test 101');
test(minDistance('ababababababababababababababababababababababababab', 'bababababababababababababababababababababababababa'), 2, 'Test 102');
test(minDistance('dynamic', 'algorithm'), 12, 'Test 103');
test(minDistance('dabc', 'dcba'), 4, 'Test 104');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

