// Test: 2559. Count Vowel Strings In Ranges
// 97 test cases from LeetCodeDataset
// Run: node test.js

const { vowelStrings } = require("./solution");

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

console.log("\n2559. Count Vowel Strings In Ranges\n");

test(vowelStrings(["aeiou","bcd","cde","ua"], [[0,0],[1,2],[0,3]]), [1, 0, 2], 'Test 1');
test(vowelStrings(["aeiou","bcd","cde","dea"], [[0,3],[1,2],[2,2]]), [1, 0, 0], 'Test 2');
test(vowelStrings(["aeiou","bcd","cde","aeiou"], [[0,3],[1,2],[3,3]]), [2, 0, 1], 'Test 3');
test(vowelStrings(["aaaa","ee","iii","oo","uu"], [[0,0],[1,1],[2,2],[3,3],[4,4]]), [1, 1, 1, 1, 1], 'Test 4');
test(vowelStrings(["abc","bcd","cde","dea"], [[0,1],[1,3],[2,3]]), [0, 0, 0], 'Test 5');
test(vowelStrings(["abc","bcd","cde","dea"], [[0,1],[1,3],[0,3]]), [0, 0, 0], 'Test 6');
test(vowelStrings(["a","e","i","o","u"], [[0,0],[1,1],[2,2],[3,3],[4,4]]), [1, 1, 1, 1, 1], 'Test 7');
test(vowelStrings(["aba","bcb","ece","aa","e"], [[0,2],[1,4],[1,1]]), [2, 3, 0], 'Test 8');
test(vowelStrings(["abc","bcd","cde","dea"], [[0,1],[2,3],[0,3]]), [0, 0, 0], 'Test 9');
test(vowelStrings(["aeiou","bcd","cde","dea","eae"], [[0,4],[1,3],[2,2]]), [2, 0, 0], 'Test 10');
test(vowelStrings(["abc","bcd","cde","dea","eae"], [[0,1],[1,3],[2,4]]), [0, 0, 1], 'Test 11');
test(vowelStrings(["a","e","i"], [[0,2],[0,1],[2,2]]), [3, 2, 1], 'Test 12');
test(vowelStrings(["abc","bcd","cde","dea"], [[0,3],[1,2],[2,2]]), [0, 0, 0], 'Test 13');
test(vowelStrings(["a","b","c","d","e"], [[0,0],[1,1],[2,2],[3,3],[4,4]]), [1, 0, 0, 0, 1], 'Test 14');
test(vowelStrings(["a","b","c","d","e"], [[0,4],[1,3],[2,2]]), [2, 0, 0], 'Test 15');
test(vowelStrings(["aeiou","bcd","eoe"], [[0,0],[1,2],[0,2]]), [1, 1, 2], 'Test 16');
test(vowelStrings(["aeioua", "beoibe", "ieoiie", "oioioi", "uaouau", "aeiou", "eioue", "iouoi", "ououo", "uouou"], [[0,9],[1,8],[2,7],[3,6],[4,5],[0,4],[5,9],[1,3],[2,4],[3,5],[4,6],[5,7],[6,8],[7,9]]), [9, 7, 6, 4, 2, 4, 5, 2, 3, 3, 3, 3, 3, 3], 'Test 17');
test(vowelStrings(["a","e","i","o","u","aeiou","uoiea","aeiouaeiou"], [[0,7],[1,6],[2,5],[3,4],[0,0],[7,7]]), [8, 6, 4, 2, 1, 1], 'Test 18');
test(vowelStrings(["ae", "ea", "aa", "ee", "ii", "oo", "uu", "aee", "eaa", "iee"], [[0,9],[0,5],[5,9],[3,6],[7,8]]), [10, 6, 5, 4, 2], 'Test 19');
test(vowelStrings(["aeiou"], [[0,0]]), [1], 'Test 20');
test(vowelStrings(["apple", "orange", "umbrella", "elephant", "ice"], [[0,2],[1,4],[2,2],[3,4],[0,4]]), [3, 3, 1, 1, 4], 'Test 21');
test(vowelStrings(["automobile","bicycle","car","plane","ship","train","truck","motorcycle","bus","ferry"], [[0,4],[1,5],[2,8],[0,9],[1,6],[2,4],[3,7],[0,7],[8,9]]), [1, 0, 0, 1, 0, 0, 0, 1, 0], 'Test 22');
test(vowelStrings(["education","environment","algorithm","finance","economics","optimization","development"], [[0,2],[3,5],[0,6],[2,4],[1,3],[0,5],[4,6]]), [0, 0, 0, 0, 0, 0, 0], 'Test 23');
test(vowelStrings(["umbrella","elephant","ice","onion","apple","orange"], [[0,2],[1,5],[3,4],[0,1],[2,3]]), [2, 3, 1, 1, 1], 'Test 24');
test(vowelStrings(["banana", "grape", "kiwi", "lemon", "melon", "mango", "peach", "pear", "plum"], [[0,8],[1,7],[2,6],[3,5],[4,4],[5,5],[6,6],[7,7],[0,1],[2,3],[4,5],[6,7]]), [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 'Test 25');
test(vowelStrings(["aabbcc","eoo","i","oee","u","aa","e","i","o","u"], [[0,9],[1,8],[2,7],[3,6],[4,5],[0,4],[5,9]]), [9, 8, 6, 4, 2, 4, 5], 'Test 26');
test(vowelStrings(["ab", "cd", "ef", "gh", "ij", "kl", "mn", "op", "qr", "st", "uv", "wx", "yz"], [[0,12],[1,11],[2,10],[3,9],[4,8]]), [0, 0, 0, 0, 0], 'Test 27');
test(vowelStrings(["aaaaaa","bbbbbb","cccccc","dddddd","eeeeee","ffffff","gggggg"], [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[0,6]]), [1, 0, 0, 1, 1, 0, 2], 'Test 28');
test(vowelStrings(["a", "e", "i", "o", "u"], [[0,0],[1,1],[2,2],[3,3],[4,4],[0,4],[0,3],[1,4]]), [1, 1, 1, 1, 1, 5, 4, 4], 'Test 29');
test(vowelStrings(["aeiou","bcd","efg","hij","klm","nop","qrstu","vwxyz","yzzzy","uaeuu"], [[0,9],[1,3],[2,8],[4,7],[5,5]]), [2, 0, 0, 0, 0], 'Test 30');
test(vowelStrings(["a","e","i","o","u","aa","ee","ii","oo","uu","aaa","eee","iii","ooo","uuu"], [[0,4],[5,9],[10,14],[0,9],[5,14],[0,14],[1,13]]), [5, 5, 5, 10, 10, 15, 13], 'Test 31');
test(vowelStrings(["banana", "apple", "grape", "kiwi", "melon", "peach", "pear"], [[0,3],[2,5],[1,6],[0,6],[4,4]]), [1, 0, 1, 1, 0], 'Test 32');
test(vowelStrings(["aeiouaeiou","bcdefghijklmno","pqrstuvwxyzz","zyxwvutsrqponmlkjihgfedcba","aeiouaeiouaeiou"], [[0,4],[1,3],[0,0],[2,2],[1,4]]), [2, 0, 1, 0, 1], 'Test 33');
test(vowelStrings(["education","university","college","school","academy","institute","faculty","student","teacher","research"], [[0,9],[1,4],[2,6],[3,8],[4,7]]), [1, 0, 1, 1, 1], 'Test 34');
test(vowelStrings(["umbrella","elephant","ice","onion","apple","orange","grape"], [[0,6],[1,5],[2,4],[0,1],[5,6],[2,3],[4,4]]), [4, 3, 2, 1, 1, 1, 1], 'Test 35');
test(vowelStrings(["aaa","bbb","ccc","ddd","eee","fff","ggg","hhh","iii","jjj"], [[0,9],[1,8],[2,7],[3,6],[4,5]]), [3, 2, 1, 1, 1], 'Test 36');
test(vowelStrings(["aaaa","eeeee","iiii","oooo","uuuu","aeiou","uoiea"], [[0,4],[3,6],[0,3],[4,4],[5,6],[1,1],[2,2]]), [5, 4, 4, 1, 2, 1, 1], 'Test 37');
test(vowelStrings(["abc","bcd","cde","dea","aeiou","uoiea"], [[0,5],[1,4],[2,3],[0,0],[5,5]]), [2, 1, 0, 0, 1], 'Test 38');
test(vowelStrings(["a","e","i","o","u","aeiou","uoiea"], [[0,6],[1,5],[2,4],[0,3],[3,6]]), [7, 5, 3, 4, 4], 'Test 39');
test(vowelStrings(["a","e","i","o","u","ae","ei","ou","io","ua"], [[0,9],[1,8],[2,7],[3,6],[4,5],[0,0],[9,9]]), [10, 8, 6, 4, 2, 1, 1], 'Test 40');
test(vowelStrings(["apple","orange","banana","grape","peach"], [[0,2],[1,3],[0,3],[2,2],[3,3],[1,4],[0,4]]), [2, 1, 2, 0, 0, 1, 2], 'Test 41');
test(vowelStrings(["bcd"], [[0,0]]), [0], 'Test 42');
test(vowelStrings(["banana","apricot","grape","kiwi","peach","melon"], [[0,5],[1,3],[2,4],[0,2],[3,5]]), [0, 0, 0, 0, 0], 'Test 43');
test(vowelStrings(["banana","anana","nana","ana","na","a","e","i","o","u"], [[0,5],[1,6],[2,7],[3,8],[4,9],[0,9]]), [3, 4, 4, 5, 5, 7], 'Test 44');
test(vowelStrings(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o"], [[0,14],[0,9],[5,10],[10,14]]), [4, 3, 1, 1], 'Test 45');
test(vowelStrings(["abcde","edcba","fghij","jihgf","klmno","onmlk","pqrst","tsrqp","uvwxy","yxwvu"], [[0,1],[2,3],[4,5],[6,7],[0,8],[1,9],[0,7],[2,5]]), [2, 0, 0, 0, 2, 1, 2, 0], 'Test 46');
test(vowelStrings(["banana","grape","avocado","kiwi","melon","orange","elderberry"], [[0,6],[1,5],[2,4],[3,3],[0,3]]), [2, 2, 1, 0, 1], 'Test 47');
test(vowelStrings(["x", "y", "z", "aeiou", "aeiou", "aeiou"], [[0,2],[2,4],[4,5],[0,5]]), [0, 2, 2, 3], 'Test 48');
test(vowelStrings(["aeiou", "bcd", "cde", "dea", "aeiou", "bcd", "cde", "dea", "aeiou", "bcd"], [[0,9],[1,8],[2,7],[3,6],[4,5]]), [3, 2, 1, 1, 1], 'Test 49');
test(vowelStrings(["aeiou", "bcd", "cde", "dea", "aeiou", "bcd", "cde", "dea", "aeiou", "bcd", "cde", "dea", "aeiou", "bcd", "cde", "dea"], [[0,15],[1,14],[2,13],[3,12],[4,11],[5,10],[6,9],[7,8]]), [4, 3, 3, 3, 2, 1, 1, 1], 'Test 50');
test(vowelStrings(["a","e","i","o","u","ae","ei","ou","ia","uo"], [[0,5],[2,8],[1,4],[0,9],[3,7],[5,9],[0,0],[9,9]]), [6, 7, 4, 10, 5, 5, 1, 1], 'Test 51');
test(vowelStrings(["abacax","azedo","oiue","ueia","uiaeu","uiaed","uieaeu","ueae","euae","aeu"], [[0,0],[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9]]), [0, 1, 1, 1, 1, 0, 1, 1, 1, 1], 'Test 52');
test(vowelStrings(["a", "e", "i", "o", "u", "ae", "ei", "ou", "uo", "ea"], [[0,9],[0,5],[5,9],[3,6],[7,8]]), [10, 6, 5, 4, 2], 'Test 53');
test(vowelStrings(["aeiou", "bcd", "aee", "oau", "bcd", "eaa"], [[0,2],[1,5],[3,5],[0,5]]), [2, 3, 2, 4], 'Test 54');
test(vowelStrings(["apple","orange","umbrella","elephant","ice","onion"], [[0,5],[1,4],[2,3],[0,0],[5,5]]), [4, 3, 1, 1, 0], 'Test 55');
test(vowelStrings(["aeiou","bcd","efgh","ijkl","mnop","qrst","uvw","xyz"], [[0,7],[1,6],[2,5],[3,4],[0,0],[7,7]]), [1, 0, 0, 0, 1, 0], 'Test 56');
test(vowelStrings(["aaa","eee","iii","ooo","uuu","aa","ee","ii","oo","uu"], [[0,9],[1,8],[2,7],[3,6],[4,5],[0,4],[5,9]]), [10, 8, 6, 4, 2, 5, 5], 'Test 57');
test(vowelStrings(["banana", "avocado", "elderberry", "kiwi", "grape", "lemon"], [[0,2],[1,5],[2,3],[0,5]]), [1, 1, 0, 1], 'Test 58');
test(vowelStrings(["aeiou","bcd","ocean","elephant","umbrella"], [[0,0],[0,4],[1,2],[2,3],[3,4],[0,3],[1,4]]), [1, 2, 0, 0, 1, 1, 1], 'Test 59');
test(vowelStrings(["under","over","around","before","after","above","below"], [[0,1],[2,4],[1,3],[0,6],[5,5]]), [0, 0, 0, 1, 1], 'Test 60');
test(vowelStrings(["a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u"], [[0,19],[1,18],[2,17],[3,16],[4,15],[5,14],[6,13],[7,12],[8,11],[9,10],[0,5],[5,10],[10,15],[15,20]]), [20, 18, 16, 14, 12, 10, 8, 6, 4, 2, 6, 6, 6, 5], 'Test 61');
test(vowelStrings(["aeiou", "bcd", "eae", "oio", "uaa"], [[0,2],[1,4],[0,4]]), [2, 3, 4], 'Test 62');
test(vowelStrings(["aabbcc","bbaacc","ccaabb","ccbbdd","ddeerr","eeffgg","ffggee","gghhee","hhiig","iihhj"], [[0,2],[1,5],[2,7],[0,8],[1,6],[2,4],[3,7],[0,7],[8,9]]), [0, 0, 0, 0, 0, 0, 0, 0, 0], 'Test 63');
test(vowelStrings(["algorithm","data","science","python","java","c++","javascript"], [[0,2],[3,5],[1,4],[0,6],[5,5],[2,3],[4,6]]), [0, 0, 0, 0, 0, 0, 0], 'Test 64');
test(vowelStrings(["abacax","azedo","oiue","ueia","uiaeu","uiaed","uieaeu","ueae","euae","aeu"], [[0,4],[1,7],[2,8],[3,9],[0,9]]), [4, 6, 6, 6, 8], 'Test 65');
test(vowelStrings(["aeiou", "bcdfg", "ae", "iou", "a", "e", "i", "o", "u"], [[0,8],[1,5],[2,7],[3,6],[4,4],[5,5],[6,6],[7,7],[8,8]]), [8, 4, 6, 4, 1, 1, 1, 1, 1], 'Test 66');
test(vowelStrings(["a","e","i","o","u","aeiou"], [[0,5],[1,4],[2,3],[0,0],[5,5],[1,1],[2,2],[3,3],[4,4]]), [6, 4, 2, 1, 1, 1, 1, 1, 1], 'Test 67');
test(vowelStrings(["a","e","i","o","u","aeiou"], [[0,5],[1,4],[0,0],[5,5]]), [6, 4, 1, 1], 'Test 68');
test(vowelStrings(["apple","orange","umbrella","echo","alpha"], [[0,4],[1,3],[0,0],[2,2],[1,4]]), [5, 3, 1, 1, 4], 'Test 69');
test(vowelStrings(["a","e","i","o","u","a","e","i","o","u","a","e","i","o","u"], [[0,14],[1,13],[2,12],[3,11],[4,10],[5,9],[6,8],[7,7],[0,9],[1,8]]), [15, 13, 11, 9, 7, 5, 3, 1, 10, 8], 'Test 70');
test(vowelStrings(["a","e","i","o","u","aeiou","uoiea","bcd"], [[0,6],[1,5],[2,7],[3,3]]), [7, 5, 5, 1], 'Test 71');
test(vowelStrings(["abcd","efgh","ijkl","mnop","qrst","uvwx","yz"], [[0,0],[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[0,6],[1,5],[2,4]]), [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 'Test 72');
test(vowelStrings(["amplifier","equalizer","microphone","audio","sound","voice","volume","level","peak","gain"], [[0,2],[1,5],[2,7],[3,8],[4,9],[0,9]]), [0, 1, 1, 1, 0, 1], 'Test 73');
test(vowelStrings(["algorithm","datastructure","programming","python","java","csharp","javascript","html","css","vue"], [[0,9],[1,8],[2,7],[3,6],[4,5]]), [0, 0, 0, 0, 0], 'Test 74');
test(vowelStrings(["a", "bcd", "cde", "dea", "aeiou", "bcd", "cde", "dea", "aeiou", "bcd", "cde", "dea", "aeiou", "bcd", "cde", "dea"], [[0,15],[0,0],[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9],[10,10],[11,11],[12,12],[13,13],[14,14],[15,15]]), [4, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0], 'Test 75');
test(vowelStrings(["strawberry","blueberry","raspberry","blackberry","kiwi","mango","papaya"], [[0,6],[1,5],[2,4],[0,1],[5,6]]), [0, 0, 0, 0, 0], 'Test 76');
test(vowelStrings(["aabb","bbaa","abcd","dcba","efgh","hgfe","ijkl","lkji","mnop","ponm"], [[0,1],[2,3],[4,5],[6,7],[8,9],[0,9]]), [0, 0, 0, 0, 0, 0], 'Test 77');
test(vowelStrings(["algorithm","engine","idea","open","ocean","under","education"], [[0,2],[1,5],[2,6],[0,6]]), [2, 2, 1, 2], 'Test 78');
test(vowelStrings(["abacaxi","ananas","acerola","banana","manga","abacaxi","manga","banana"], [[0,3],[4,7],[0,4],[3,6],[1,5],[2,2],[6,7]]), [2, 1, 2, 1, 2, 1, 0], 'Test 79');
test(vowelStrings(["umbrella","orange","apple","elephant","ocean","idea","education"], [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[0,6]]), [2, 2, 1, 0, 1, 1, 4], 'Test 80');
test(vowelStrings(["ae","ei","ou","ia","oe","uo","oi","ie","oa","eu"], [[0,9],[1,8],[2,7],[3,6],[4,5],[0,4],[5,9],[0,3],[1,7],[2,6]]), [10, 8, 6, 4, 2, 5, 5, 4, 7, 5], 'Test 81');
test(vowelStrings(["apple", "orange", "umbrella", "electric", "ice", "onion", "octopus"], [[0,6],[1,3],[2,5],[0,0],[6,6],[3,4],[1,5]]), [4, 2, 2, 1, 0, 1, 3], 'Test 82');
test(vowelStrings(["a","e","i","o","u","vowel","nonvowel"], [[0,6],[1,5],[2,4],[3,3],[4,4]]), [5, 4, 3, 1, 1], 'Test 83');
test(vowelStrings(["aeioua","aeioue","aeiouo","aeioui","aeiouu","euoeu","iuoie","oueia","uaeio","eaoui"], [[0,9],[1,8],[2,7],[3,6],[4,5],[0,4],[5,9],[0,3],[1,7],[2,6]]), [10, 8, 6, 4, 2, 5, 5, 4, 7, 5], 'Test 84');
test(vowelStrings(["algorithm","data","structure","design","computer","science","software","engineering"], [[0,3],[1,5],[2,7],[0,8],[1,6],[2,4],[3,7],[0,7]]), [0, 0, 0, 0, 0, 0, 0, 0], 'Test 85');
test(vowelStrings(["aabbcc", "ddeeff", "gg", "hhii", "jjkk", "llmm", "nnoopp", "qqrr", "ssttuu", "vvww"], [[0,9],[1,8],[2,7],[3,6],[4,5]]), [0, 0, 0, 0, 0], 'Test 86');
test(vowelStrings(["aeiou", "bcd", "eae", "oio", "uaa", "aeiou", "bcd", "eae", "oio", "uaa"], [[0,9],[1,8],[2,7],[3,6],[4,5],[0,5],[0,4],[1,9]]), [8, 6, 5, 3, 2, 5, 4, 7], 'Test 87');
test(vowelStrings(["apple", "orange", "ice", "elephant", "umbrella"], [[0,1],[1,3],[2,4],[0,4]]), [2, 2, 2, 4], 'Test 88');
test(vowelStrings(["aeiou", "bcd", "eee", "oee", "uau"], [[0,4],[1,3],[2,4],[0,0],[4,4]]), [4, 2, 3, 1, 1], 'Test 89');
test(vowelStrings(["umbrella","raincoat","umbrella","hat","scarf","umbrella","umbrella","raincoat"], [[0,3],[4,7],[0,4],[3,6],[1,5],[0,6],[2,2],[5,7]]), [2, 2, 2, 2, 2, 4, 1, 2], 'Test 90');
test(vowelStrings(["abacax","azedo","oiue","ueia","uiaeu","uiaed","uieaeu","ueae","euae","aeu"], [[0,4],[1,3],[2,5],[3,6],[4,7],[5,8],[6,9]]), [4, 3, 3, 3, 3, 3, 4], 'Test 91');
test(vowelStrings(["abcd","efgh","ijkl","mnop","qrst","uvw","xyz"], [[0,6],[1,5],[2,4],[0,2],[3,5],[0,6],[6,6]]), [0, 0, 0, 0, 0, 0, 0], 'Test 92');
test(vowelStrings(["aeiouaeiou", "bcd", "eee", "oau", "bcd", "eaa", "aeiou", "bcd", "cde", "dea"], [[0,4],[1,7],[3,8],[0,9],[5,5]]), [3, 4, 3, 5, 1], 'Test 93');
test(vowelStrings(["aabbcc", "eeffgg", "hhhiii", "jjjkll", "mmmoonnn", "pppqqq", "rrrsss", "tttuuu", "vvvwww", "xxxyyy"], [[0,9],[1,8],[2,7],[3,6],[4,5]]), [0, 0, 0, 0, 0], 'Test 94');
test(vowelStrings(["apple","orange","banana","umbrella","ice","elephant","octopus"], [[0,2],[3,6],[0,6],[2,4]]), [2, 2, 4, 2], 'Test 95');
test(vowelStrings(["banana","apple","orange","grape","kiwi"], [[0,4],[1,2],[2,3],[3,4],[0,3]]), [2, 2, 1, 0, 2], 'Test 96');
test(vowelStrings(["aeiou","banana","grape","kiwi","a","e","i","o","u"], [[0,8],[1,7],[2,6],[3,5],[4,4]]), [6, 4, 3, 2, 1], 'Test 97');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

