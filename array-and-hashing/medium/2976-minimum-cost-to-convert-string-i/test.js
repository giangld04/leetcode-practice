// Test: 2976. Minimum Cost To Convert String I
// 94 test cases from LeetCodeDataset
// Run: node test.js

const { minimumCost } = require("./solution");

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

console.log("\n2976. Minimum Cost To Convert String I\n");

test(minimumCost("abcd", "abce", ["a"], ["e"], [10000]), -1, 'Test 1');
test(minimumCost("aaaa", "bbbb", ["a","c"], ["c","b"], [1,2]), 12, 'Test 2');
test(minimumCost("abc", "def", ["a","b","c"], ["d","e","f"], [1,1,1]), 3, 'Test 3');
test(minimumCost("abcd", "acbe", ["a","b","c","c","e","d"], ["b","c","b","e","b","e"], [2,5,5,1,2,20]), 28, 'Test 4');
test(minimumCost("zzz", "aaa", ["z","z","z"], ["a","b","a"], [2,3,1]), 3, 'Test 5');
test(minimumCost("aabbccddeeff", "zzzzyyyxxx", ["a","b","c","d","e","f","z","y","x"], ["z","y","x","z","y","x","a","b","c"], [100,200,300,400,500,600,1,2,3]), -1, 'Test 6');
test(minimumCost("abcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba", ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"], ["z","y","x","w","v","u","t","s","r","q","p","o","n","m","l","k","j","i","h","g","f","e","d","c","b","a"], [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), -1, 'Test 7');
test(minimumCost("hello", "ohell", ["h","e","l","o"], ["o","l","e","h"], [10,20,30,40]), -1, 'Test 8');
test(minimumCost("aaaaabbbbbcccc", "bbbbbccccddddd", ["a","b","c","d"], ["b","c","d","a"], [1,1,1,1]), 15, 'Test 9');
test(minimumCost("aaaaaaaaaa", "bbbbbbbbbb", ["a","b"], ["b","a"], [1000000,1000000]), 10000000, 'Test 10');
test(minimumCost("abcabcabc", "defdefdef", ["a","b","c"], ["d","e","f"], [100,200,300]), 1800, 'Test 11');
test(minimumCost("abcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba", ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"], ["z","y","x","w","v","u","t","s","r","q","p","o","n","m","l","k","j","i","h","g","f","e","d","c","b","a"], [26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]), 351, 'Test 12');
test(minimumCost("hello", "world", ["h","e","l","l","o","w","o","r","l","d"], ["w","o","o","d","r","r","r","l","l","h"], [7,5,1,1,6,8,4,9,2,3]), 31, 'Test 13');
test(minimumCost("abcde", "edcba", ["a","b","c","d","e"], ["e","d","c","b","a"], [5,4,3,2,1]), 12, 'Test 14');
test(minimumCost("abcabcabcabc", "abcabcabcabc", ["a","b","c"], ["b","c","a"], [10,20,30]), 0, 'Test 15');
test(minimumCost("sourcestring", "targetstri", ["s","o","u","r","c","e","t","a","g","i","n"], ["t","a","r","g","e","t","s","o","u","n","g"], [1,2,3,4,5,6,7,8,9,10,11]), 21, 'Test 16');
test(minimumCost("aaaaaa", "bbbbbb", ["a","a","a","a","a","a"], ["b","c","d","e","f","g"], [1,10,100,1000,10000,100000]), 6, 'Test 17');
test(minimumCost("aaaaaaaaaa", "bbbbbbbbbb", ["a","b","c","d","e","f","g","h","i","j"], ["b","c","d","e","f","g","h","i","j","a"], [1,2,3,4,5,6,7,8,9,10]), 10, 'Test 18');
test(minimumCost("abcdefghij", "abcdefghij", ["a","b","c","d","e","f","g","h","i","j"], ["a","b","c","d","e","f","g","h","i","j"], [1,2,3,4,5,6,7,8,9,10]), 0, 'Test 19');
test(minimumCost("aaabbbccc", "bbbaaaccb", ["a","b","c"], ["b","a","b"], [1,2,3]), 12, 'Test 20');
test(minimumCost("abcdefghij", "abcdefghij", ["a","b","c","d","e","f","g","h","i","j"], ["b","c","d","e","f","g","h","i","j","a"], [1,2,3,4,5,6,7,8,9,10]), 0, 'Test 21');
test(minimumCost("zzzzzzzzzz", "aaaaaaaaaa", ["z","a"], ["a","z"], [1000000,1]), 10000000, 'Test 22');
test(minimumCost("abacabadabacaba", "zyxzyxzyxzyxzyx", ["a","b","c"], ["z","y","x"], [1,2,3]), -1, 'Test 23');
test(minimumCost("aaaaaabbbbbccccc", "bbbbbaaaaaccccc", ["a","b","c"], ["b","c","a"], [1,2,3]), 27, 'Test 24');
test(minimumCost("abcdabcdabcd", "dcbaabcddcba", ["a","b","c","d"], ["d","c","b","a"], [1,2,3,4]), 20, 'Test 25');
test(minimumCost("conversion", "converting", ["v","s","i"], ["r","t","n"], [15,25,35]), -1, 'Test 26');
test(minimumCost("zzzzzzzzzzzzzzzzzzzz", "zzzzzzzzzzzzzzzzzzzz", ["z"], ["z"], [1]), 0, 'Test 27');
test(minimumCost("aabbcc", "bbccdd", ["a","b","c"], ["b","c","d"], [1,1,1]), 6, 'Test 28');
test(minimumCost("aaaaaabbbbb", "bbbaaaaab", ["a","b"], ["b","a"], [1,2]), 7, 'Test 29');
test(minimumCost("programming", "debugging", ["p","r","o","g","a","m","d","e","b","u","i","n"], ["d","e","b","u","g","g","i","n","g","p","r","o"], [1,2,3,4,5,6,7,8,9,10,11,12]), 171, 'Test 30');
test(minimumCost("abcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba", ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"], ["z","y","x","w","v","u","t","s","r","q","p","o","n","m","l","k","j","i","h","g","f","e","d","c","b","a"], [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]), -1, 'Test 31');
test(minimumCost("abababab", "babababa", ["a","b"], ["b","a"], [1,1]), 8, 'Test 32');
test(minimumCost("aaaaaaaaaa", "bbbbbbbbbb", ["a","b"], ["b","a"], [1,10]), 10, 'Test 33');
test(minimumCost("example", "sample", ["e","x","a","m","p","l"], ["s","a","m","p","l","e"], [1000,2000,3000,4000,5000,6000]), 21000, 'Test 34');
test(minimumCost("abcdefghij", "ghijklmnop", ["a","b","c","d","e","f","g","h","i","j"], ["g","h","i","j","a","b","c","d","e","f"], [1,1,1,1,1,1,1,1,1,1]), -1, 'Test 35');
test(minimumCost("abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyza", ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"], ["b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","a"], [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 0, 'Test 36');
test(minimumCost("mmmmmmmmmmmmmmmmmmmm", "nnnnnnnnnnnnnnnnnnnn", ["m","n"], ["n","m"], [10,1]), 200, 'Test 37');
test(minimumCost("abcde", "edcba", ["a","b","c","d","e"], ["e","d","c","b","a"], [5,5,5,5,5]), 20, 'Test 38');
test(minimumCost("abacabadabacaba", "xyzxyzxyzxyzxyz", ["a","b","c"], ["x","y","z"], [3,4,5]), -1, 'Test 39');
test(minimumCost("complexstring", "simpleststr", ["c","o","m","p","l","e","x","s","t","r","i","n","g"], ["s","i","m","p","l","e","s","t","r","i","n","g","c"], [10,20,30,40,50,60,70,80,90,100,110,120,130]), 1830, 'Test 40');
test(minimumCost("abcdefghij", "abcdefghij", ["a","b","c","d","e","f","g","h","i","j"], ["a","b","c","d","e","f","g","h","i","j"], [1,1,1,1,1,1,1,1,1,1]), 0, 'Test 41');
test(minimumCost("aaaaa", "bbbbb", ["a","a","a","a","a"], ["b","b","b","b","b"], [1,2,3,4,5]), 5, 'Test 42');
test(minimumCost("abcdefghijklmnopqrstuvwxyza", "abcdefghijklmnopqrstuvwxyzb", ["a","z"], ["b","a"], [10,20]), 10, 'Test 43');
test(minimumCost("testing", "success", ["t","e","s","i","n","c"], ["s","s","c","s","c","s"], [10,20,30,40,50,60]), -1, 'Test 44');
test(minimumCost("zzzzzzzzzzzzzzzzzzzz", "aaaaaaaaaaaaaaaaaaaa", ["z"], ["a"], [1]), 20, 'Test 45');
test(minimumCost("abcdef", "fedcba", ["a","b","c","d","e","f"], ["f","e","d","c","b","a"], [1,2,3,4,5,6]), 21, 'Test 46');
test(minimumCost("abcdefg", "hijklmn", ["a","b","c","d","e","f","g"], ["h","i","j","k","l","m","n"], [1,1,1,1,1,1,1]), 7, 'Test 47');
test(minimumCost("abcdabcdabcd", "zzzzzzzzzzzz", ["a","b","c","d"], ["z","z","z","z"], [1,2,3,4]), 30, 'Test 48');
test(minimumCost("hello", "world", ["h","e","l","o","w","r","d"], ["w","r","l","r","h","o","l"], [1,2,3,4,5,6,7]), -1, 'Test 49');
test(minimumCost("xyxzy", "yxyzx", ["x","y","z"], ["y","z","x"], [1,1,1]), 6, 'Test 50');
test(minimumCost("programming", "algorithm", ["p","r","o","g","a","m","i","n","t","l","e"], ["a","l","g","o","r","i","t","h","m","p","e"], [11,22,33,44,55,66,77,88,99,100,110]), -1, 'Test 51');
test(minimumCost("xyxyxy", "yzyzyz", ["x","y"], ["y","z"], [10,20]), 90, 'Test 52');
test(minimumCost("abcde", "aaaaa", ["a","b","c","d","e"], ["a","a","a","a","a"], [1,1,1,1,1]), 4, 'Test 53');
test(minimumCost("aaaaaaaaaa", "zzzzzzzzzz", ["a","b","c","d","e","f","g","h","i","j"], ["z","y","x","w","v","u","t","s","r","q"], [1,2,3,4,5,6,7,8,9,10]), 10, 'Test 54');
test(minimumCost("abacabadabacaba", "xyzxyzyxzyzyxzy", ["a","b","c"], ["x","y","z"], [10,20,30]), -1, 'Test 55');
test(minimumCost("abcdefghij", "jihgfedcba", ["a","b","c","d","e","f","g","h","i","j"], ["j","i","h","g","f","e","d","c","b","a"], [10,9,8,7,6,5,4,3,2,1]), 55, 'Test 56');
test(minimumCost("abcabcabcabc", "xyzxyzxyzxyz", ["a","b","c","x","y","z"], ["x","y","z","a","b","c"], [10,20,30,40,50,60]), 240, 'Test 57');
test(minimumCost("hellohellohello", "worldworldworld", ["h","e","l","o","w","r","d"], ["w","r","d","o","h","e","l"], [5,15,25,35,45,55,65]), -1, 'Test 58');
test(minimumCost("abcdefghij", "jihgfedcba", ["a","b","c","d","e","f","g","h","i","j"], ["j","i","h","g","f","e","d","c","b","a"], [1,2,3,4,5,6,7,8,9,10]), 55, 'Test 59');
test(minimumCost("mississippi", "sssmmmipipi", ["m","i","s","p"], ["s","m","i","p"], [2,3,4,5]), -1, 'Test 60');
test(minimumCost("hello", "world", ["h","e","l","o","w","r","d"], ["w","r","d","r","o","l","l"], [1,2,3,4,5,6,7]), -1, 'Test 61');
test(minimumCost("quickbrownfox", "jumpingoverlazy", ["q","u","i","c","k","b","r","o","w","n","f","o","x"], ["j","u","m","p","i","n","g","v","e","r","l","a","z"], [10,20,30,40,50,60,70,80,90,100,110,120,130]), -1, 'Test 62');
test(minimumCost("aabbcc", "bbccdd", ["a","b","c","d"], ["b","c","d","e"], [1,2,3,4]), 12, 'Test 63');
test(minimumCost("abracadabra", "zabzazaba", ["a","b","c","d","r"], ["z","a","a","a","a"], [10,20,30,40,5]), -1, 'Test 64');
test(minimumCost("mississippi", "hississippi", ["m"], ["h"], [5]), 5, 'Test 65');
test(minimumCost("xyxyxyxyxyxyxyxyxy", "yzyzyzyzyzyzyzyzyz", ["x","y","z"], ["y","z","x"], [5,4,3]), 81, 'Test 66');
test(minimumCost("conversion", "transformation", ["c","o","n","v","e","r","s","i","o","n"], ["t","r","a","n","s","f","o","r","m","a"], [10,20,30,40,50,60,70,80,90,100]), 480, 'Test 67');
test(minimumCost("abcabcabcabcabcabc", "defdefdefdefdefdef", ["a","b","c"], ["d","e","f"], [1,2,3]), 36, 'Test 68');
test(minimumCost("algorithm", "algorithm", ["a","l","g","o","r","i","t","h","m"], ["m","a","l","g","o","r","i","t","h"], [9,8,7,6,5,4,3,2,1]), 0, 'Test 69');
test(minimumCost("repeated", "rotating", ["e","p","t","a","d"], ["o","a","i","t","n"], [5,7,3,9,12]), -1, 'Test 70');
test(minimumCost("abcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba", ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"], ["z","y","x","w","v","u","t","s","r","q","p","o","n","m","l","k","j","i","h","g","f","e","d","c","b","a"], [10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260]), 3510, 'Test 71');
test(minimumCost("abcdefghij", "fedcbaghij", ["a","b","c","d","e","f","g","h","i","j"], ["e","d","c","b","a","j","i","h","g","f"], [1,2,3,4,5,6,7,8,9,10]), -1, 'Test 72');
test(minimumCost("abababababababababab", "bcbcbcbcbcbcbcbcbcbc", ["a","b","c"], ["b","c","a"], [1,2,3]), 30, 'Test 73');
test(minimumCost("abcde", "edcba", ["a","b","c","d","e"], ["e","d","c","b","a"], [1,1,1,1,1]), 4, 'Test 74');
test(minimumCost("abcdefghijklmnopqrstuvwxyz", "bcdefghijklmnopqrstuvwxyza", ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"], ["b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","a"], [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 26, 'Test 75');
test(minimumCost("aaaabbbbcccc", "bbccccddddee", ["a","b","c"], ["b","c","d"], [1,2,3]), -1, 'Test 76');
test(minimumCost("abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyz", ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"], ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 0, 'Test 77');
test(minimumCost("aaaaaaaaaaaaaaaaaa", "bbbbbbbbbbbbbbbbbb", ["a","b","a","b","a","b","a","b","a","b","a","b","a","b","a","b","a","b","a","b"], ["b","a","b","a","b","a","b","a","b","a","b","a","b","a","b","a","b","a","b","a"], [2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1]), 36, 'Test 78');
test(minimumCost("abcdefghijklmnopqrstuvwxyza", "zyxwvutsrqponmlkjihgfedcbaa", ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"], ["z","y","x","w","v","u","t","s","r","q","p","o","n","m","l","k","j","i","h","g","f","e","d","c","b","a"], [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]), 351, 'Test 79');
test(minimumCost("abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyz", ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"], ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"], [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]), 0, 'Test 80');
test(minimumCost("transform", "convert", ["t","r","a","n","s","f","o","m"], ["c","o","n","v","e","r","t","d"], [4,2,1,3,6,5,7,8]), 28, 'Test 81');
test(minimumCost("abcabcabcabcabcabcabcabcabcabc", "xyzxyzxyzxyzxyzxyzxyzxyzxyzxyz", ["a","b","c","x","y","z"], ["x","y","z","a","b","c"], [10,20,30,40,50,60]), 600, 'Test 82');
test(minimumCost("abcabcabcabcabc", "defdefdefdefdef", ["a","b","c"], ["d","e","f"], [100,200,300]), 3000, 'Test 83');
test(minimumCost("abcabcabcabc", "xyzxyzxyzxyz", ["a","b","c","x","y","z"], ["x","y","z","a","b","c"], [10,20,30,5,15,25]), 240, 'Test 84');
test(minimumCost("abcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba", ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"], ["z","y","x","w","v","u","t","s","r","q","p","o","n","m","l","k","j","i","h","g","f","e","d","c","b","a"], [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]), 351, 'Test 85');
test(minimumCost("python", "java", ["p","y","t","h","o","n","j","a","v"], ["j","a","v","a","v","a","p","y","t"], [10,20,30,40,50,60,70,80,90]), 100, 'Test 86');
test(minimumCost("aaaaaaaaaaaaaaaaaaaa", "bbbbbbbbbbbbbbbbbbbb", ["a","b","c"], ["b","c","a"], [100,200,300]), 2000, 'Test 87');
test(minimumCost("programming", "ppppppppppp", ["p","r","o","g","a","m"], ["p","p","p","p","p","p"], [1,2,3,4,5,6]), -1, 'Test 88');
test(minimumCost("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz", "zzzzyyxxwwvvuuttssrrqqppoonnmmllkkjjiihhggffeeeeddccbaa", ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"], ["z","y","x","w","v","u","t","s","r","q","p","o","n","m","l","k","j","i","h","g","f","e","d","c","b","a"], [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]), -1, 'Test 89');
test(minimumCost("abacabadabacaba", "xyzxyzxyzxyzxyz", ["a","b","c"], ["x","y","z"], [100,200,300]), -1, 'Test 90');
test(minimumCost("abcdefghij", "klmnopqrst", ["a","b","c","d","e","f","g","h","i","j"], ["k","l","m","n","o","p","q","r","s","t"], [10,20,30,40,50,60,70,80,90,100]), 550, 'Test 91');
test(minimumCost("abcde", "fghij", ["a","b","c","d","e","f","g","h","i","j"], ["f","g","h","i","j","a","b","c","d","e"], [100,200,300,400,500,600,700,800,900,1000]), 1500, 'Test 92');
test(minimumCost("abcdefg", "gfedcba", ["a","b","c","d","e","f","g"], ["g","f","e","d","c","b","a"], [7,6,5,4,3,2,1]), 24, 'Test 93');
test(minimumCost("aaaaabbbbbaaaaa", "bbbbbbaaaaabbbb", ["a","b"], ["b","a"], [100,150]), 1500, 'Test 94');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

