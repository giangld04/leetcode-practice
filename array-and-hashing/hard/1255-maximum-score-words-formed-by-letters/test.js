// Test: 1255. Maximum Score Words Formed By Letters
// 77 test cases from LeetCodeDataset
// Run: node test.js

const { maxScoreWords } = require("./solution");

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

console.log("\n1255. Maximum Score Words Formed By Letters\n");

test(maxScoreWords(["xxxz","ax","bx","cx"], ["z","a","b","c","x","x","x"], [4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,10]), Error: list index out of range, 'Test 1');
test(maxScoreWords(["xxxz","ax","bx","cx"], ["z","a","b","c","x","x","x"], [4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,10]), 27, 'Test 2');
test(maxScoreWords(["leetcode"], ["l","e","t","c","o","d"], [0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0]), 0, 'Test 3');
test(maxScoreWords(["dog","cat","dad","good"], ["a","a","c","d","d","d","g","o","o"], [1,0,9,5,0,0,3,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0]), 23, 'Test 4');
test(maxScoreWords(["supercalifragilisticexpialidocious","antidisestablishmentarianism","floccinaucinihilipilification"], ["s","u","p","e","r","c","a","l","i","f","r","a","g","i","l","i","s","t","i","c","e","x","p","i","a","l","i","d","o","c","i","o","u","s","a","n","t","i","d","i","s","e","t","a","b","l","i","s","h","m","e","n","t","a","r","i","a","n","i","s","m","f","l","o","c","c","i","n","a","u","c","i","n","i","h","i","l","i","p","i","l","i","f","i","c","a","t","i","o","n"], [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]), 659, 'Test 5');
test(maxScoreWords(["dynamic","programming","complexity","analysis"], ["d","y","n","a","m","i","c","p","r","o","g","r","a","m","m","i","n","g","c","o","m","p","l","e","x","i","t","y","a","n","a","l","y","s","i","s"], [1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9]), 184, 'Test 6');
test(maxScoreWords(["quartz","pearl","opal"], ["q","u","a","r","t","z","p","e","a","r","l","o","p","a","l"], [1,3,3,2,1,4,2,4,1,8,5,1,3,4,1,3,10,1,1,1,2,4,2,4,1,10]), 38, 'Test 7');
test(maxScoreWords(["programming","code","python","challenge"], ["a","c","d","e","e","g","h","i","l","l","m","n","n","n","o","o","p","p","r","r","r","s","t","u","y","z"], [1,3,3,2,1,4,2,4,1,8,5,1,3,4,1,3,10,1,1,1,1,4,4,8,4,10]), 24, 'Test 8');
test(maxScoreWords(["university","college","school"], ["u","n","i","v","e","r","s","i","t","y","c","o","l","l","e","g","e","s","c","h","o","o","l"], [1,3,3,2,1,4,2,4,1,8,5,1,3,4,1,3,10,1,1,1,2,4,2,4,1,10]), 38, 'Test 9');
test(maxScoreWords(["complex","example","test"], ["c","o","m","p","l","e","x","e","a","m","p","l","e","t","e","s","t","c","o","m","p","l","e","x"], [10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260]), 2280, 'Test 10');
test(maxScoreWords(["zebra","elephant","giraffe","hippo"], ["a","e","e","f","g","h","i","i","l","n","o","p","p","r","r","s","t","u","z","z"], [1,3,3,2,1,4,2,4,1,8,5,1,3,1,1,3,10,1,1,1,1,4,4,8,4,10]), 13, 'Test 11');
test(maxScoreWords(["kangaroo","koala","hippopotamus"], ["k","a","n","g","a","r","o","o","o","o","l","i","p","p","o","t","a","m","u","s"], [8,1,13,3,1,1,1,1,1,1,4,1,5,9,7,6,5,3,0,9,0,5,5,0,0,0]), 47, 'Test 12');
test(maxScoreWords(["optimization","performance","scalability","expert","knowledge","skill"], ["o","p","t","i","m","i","z","a","t","i","o","n","p","e","r","f","o","r","m","a","n","c","e","s","c","a","l","a","b","i","l","i","t","y","e","x","p","e","r","t","k","n","o","w","l","e","d","g","e","s","k","i","l","l"], [1,3,3,2,1,4,2,4,1,8,5,1,3,4,1,3,10,1,1,1,2,4,4,8,8,10]), 118, 'Test 13');
test(maxScoreWords(["onomatopoeia","palindrome","multifarious"], ["o","n","o","m","a","t","o","p","o","e","i","a","p","a","l","i","n","d","r","o","m","e","m","u","l","t","i","f","a","r","i","o","u","s"], [1,3,3,2,1,4,2,4,1,8,5,1,3,4,1,3,10,1,1,1,2,4,2,4,1,10]), 56, 'Test 14');
test(maxScoreWords(["abcd", "abcde", "abcdef", "abcdefg"], ["a","b","c","d","e","f","g","a","b","c","d","e","f","g","a","b","c","d","e","f","g","a","b","c","d","e","f","g"], [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]), 74, 'Test 15');
test(maxScoreWords(["optimization","performance","efficiency"], ["o","p","t","i","m","i","z","a","t","i","o","n","p","e","r","f","o","r","m","a","n","c","e","e","f","f","i","c","i","e","n","c","y"], [1,3,3,2,1,4,2,4,1,8,5,1,3,4,1,3,10,1,1,1,2,4,2,4,1,2]), 66, 'Test 16');
test(maxScoreWords(["mississippi","alabama","tennessee"], ["m","i","s","s","i","s","s","i","p","p","i","a","l","a","b","a","m","a","t","e","n","n","e","s","s","e"], [3,1,9,4,1,5,9,2,6,5,3,5,8,9,7,9,3,2,3,8,5,5,0,2,3,9]), 88, 'Test 17');
test(maxScoreWords(["zzzz", "zzz", "zz", "z"], ["z","z","z","z","z","z","z","z","z","z","z","z","z","z","z","z","z","z","z","z","z","z","z","z","z","z","z"], [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]), 260, 'Test 18');
test(maxScoreWords(["algorithm","datastructure","machinelearning"], ["a","l","g","o","r","i","t","h","m","d","a","t","a","s","t","r","u","c","t","u","r","e","m","a","c","h","i","n","e","l","e","a","r","n","i","n","g"], [1,3,3,2,1,4,2,4,1,8,5,1,3,4,1,3,10,1,1,1,2,4,2,4,1,2]), 65, 'Test 19');
test(maxScoreWords(["amazing","zebra","apple"], ["a","m","a","z","i","n","g","z","e","b","r","a","a","p","p","l"], [1,3,3,2,1,4,2,4,1,8,5,1,3,4,1,3,10,1,1,1,2,4,2,4,1,10]), 38, 'Test 20');
test(maxScoreWords(["algorithm","data","structure"], ["a","l","g","o","r","i","t","h","m","d","a","t","a","s","t","r","u","c","t","u","r","e"], [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]), 274, 'Test 21');
test(maxScoreWords(["syzygy","zygote","zygomycete"], ["s","y","z","y","g","y","z","y","g","o","t","e","z","y","g","o","m","y","c","e","t","e"], [1,3,3,2,1,4,2,4,1,8,5,1,3,4,1,3,10,1,1,1,2,4,2,4,1,10]), 56, 'Test 22');
test(maxScoreWords(["zebra","monkey","giraffe"], ["z","e","r","b","a","o","n","k","m","y","g","i","r","a","f","f","e"], [1,0,0,0,1,3,0,0,0,0,0,0,0,3,0,0,0,0,0,4,0,0,0,5,0,0]), 12, 'Test 23');
test(maxScoreWords(["algorithm","data","structure","software"], ["a","a","a","c","d","d","e","g","h","i","i","l","m","n","o","o","o","r","s","s","s","t","u","w","y"], [1,3,3,2,1,4,2,4,1,8,5,1,3,4,1,3,10,1,1,1,1,4,4,8,4,10]), 15, 'Test 24');
test(maxScoreWords(["algorithm", "data", "structure", "code"], ["a","l","g","o","r","i","t","h","m","d","a","t","a","s","t","r","u","c","t","u","r","e","c","o","d","e"], [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]), 301, 'Test 25');
test(maxScoreWords(["abacaxi","kiwi","pineapple"], ["a","b","a","c","a","x","i","k","i","w","i","p","i","n","e","a","p","p","l","e"], [1,3,3,2,1,4,2,4,1,8,5,1,3,4,1,3,10,1,1,1,2,4,2,4,1,10]), 41, 'Test 26');
test(maxScoreWords(["kitten","puppy","dog","cat"], ["a","c","d","d","d","g","k","n","o","p","p","p","p","p","t","u","y","y"], [1,3,3,2,1,4,2,4,1,8,5,1,3,1,1,3,10,1,1,1,1,4,4,8,4,10]), 24, 'Test 27');
test(maxScoreWords(["hello","world","python","java"], ["h","e","l","l","o","w","r","d","p","y","t","h","o","n","j","a","v"], [1,3,3,2,1,4,2,4,1,8,5,1,3,4,1,3,10,1,1,1,1,4,4,8,4,10]), 26, 'Test 28');
test(maxScoreWords(["algorithm","data","structure"], ["a","l","g","o","r","i","t","h","m","d","a","t","a","s","t","r","u","c","t","u","r","e"], [1,3,3,2,1,4,2,4,1,8,5,1,3,4,1,3,10,1,1,1,2,4,4,8,8,10]), 33, 'Test 29');
test(maxScoreWords(["apple","banana","cherry","date"], ["a","a","b","b","c","d","e","e","e","h","i","l","n","n","p","r","t","u"], [1,3,3,2,1,4,2,4,1,8,5,1,3,4,1,3,10,1,1,1,1,4,4,8,4,10]), 5, 'Test 30');
test(maxScoreWords(["zebra", "elephant", "giraffe"], ["z","e","b","r","a","e","l","p","h","a","n","t","g","i","r","a","f","f","e"], [5,1,3,2,1,4,2,4,1,8,5,1,3,1,1,3,10,1,1,1,1,4,4,8,4,10]), 36, 'Test 31');
test(maxScoreWords(["xylophone","guitar","piano","drums"], ["a","d","e","g","h","i","l","m","n","n","n","o","o","p","p","r","s","t","u","u","x","y","y","y","z"], [1,3,3,2,1,4,2,4,1,8,5,1,3,1,1,3,10,1,1,1,1,4,4,8,4,10]), 32, 'Test 32');
test(maxScoreWords(["complexity","theory","graph","tree"], ["a","b","c","c","d","d","e","e","f","g","g","g","h","i","j","k","l","m","n","n","n","o","o","o","o","p","q","r","r","s","s","t","t","u","v","w","x","y","z","z"], [1,3,3,2,1,4,2,4,1,8,5,1,3,4,1,3,10,1,1,1,2,4,2,4,1,5]), 19, 'Test 33');
test(maxScoreWords(["hello", "world", "python", "code"], ["h","e","l","l","o","w","o","r","l","d","p","y","t","h","o","n","c","o","d","e"], [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]), 249, 'Test 34');
test(maxScoreWords(["expert","knowledge","skill"], ["e","x","p","e","r","t","k","n","o","w","l","e","d","g","e","s","k","i","l","l"], [1,3,3,2,1,4,2,4,1,8,5,1,3,4,1,3,10,1,1,1,2,4,4,8,8,10]), 45, 'Test 35');
test(maxScoreWords(["apple","banana","cherry"], ["a","a","b","b","c","c","e","e","h","n","n","p","p","r","r","y"], [1,3,3,2,1,4,2,4,1,8,5,1,3,4,1,3,10,1,1,1,2,4,5,9,7]), 17, 'Test 36');
test(maxScoreWords(["programming","contest","challenge"], ["p","r","o","g","a","m","m","i","n","g","c","o","n","t","e","s","t","c","h","a","l","l","e","n","g","e"], [3,5,1,3,1,3,10,1,1,1,1,4,4,8,4,10,8,7,5,4,4,3,7,2,9,4]), 60, 'Test 37');
test(maxScoreWords(["fantastic","extraordinary","amazing"], ["f","a","n","t","a","s","t","i","c","e","x","t","r","o","d","i","n","a","r","y","a","m","a","z","i","n","g"], [1,3,3,2,1,4,2,4,1,8,5,1,3,4,1,3,10,1,1,1,2,4,2,4,1,10]), 39, 'Test 38');
test(maxScoreWords(["complex","challenging","problems","solutions"], ["c","o","m","p","l","e","x","c","h","a","l","l","e","n","g","i","n","g","p","r","o","b","l","e","m","s","o","l","u","t","i","o","n","s"], [1,3,3,2,1,4,2,4,1,8,5,1,3,4,1,3,10,1,1,1,2,4,2,4,1,2]), 54, 'Test 39');
test(maxScoreWords(["backtracking","heuristic","algorithm","search"], ["b","a","c","k","t","r","a","c","k","i","n","g","h","e","u","r","i","s","t","i","c","a","l","g","o","r","i","t","h","m","s","e","a","r","c","h"], [1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9]), 165, 'Test 40');
test(maxScoreWords(["fantastic","breathtaking","transformation","unbelievable"], ["a","a","a","a","a","a","a","b","b","b","b","c","d","d","e","e","e","e","f","g","h","i","i","i","k","l","m","n","n","n","o","o","o","o","p","r","r","s","t","t","t","u","u","v","w","x","y","z"], [1,3,3,2,1,4,2,4,1,8,5,1,3,4,1,3,10,1,1,1,1,4,4,8,4,10]), 25, 'Test 41');
test(maxScoreWords(["python","java","csharp","javascript"], ["a","a","a","b","c","c","d","d","e","e","f","g","g","h","i","i","j","j","k","k","l","m","n","n","o","o","p","p","q","q","r","s","t","t","u","u","v","w","x","y","z"], [1,3,3,2,1,4,2,4,1,8,5,1,3,4,1,3,10,1,1,1,2,4,2,4,1,5]), 38, 'Test 42');
test(maxScoreWords(["optimization","algorithm","data","structure"], ["a","a","a","b","c","c","d","d","e","e","g","h","i","i","l","m","n","o","o","p","p","r","s","t","t","u","v","x","y","z"], [1,3,3,2,1,4,2,4,1,8,5,1,3,4,1,3,10,1,1,1,2,4,2,4,1,5]), 20, 'Test 43');
test(maxScoreWords(["zebra","xylophone","quartz","jigsaw"], ["a","a","e","g","h","i","j","j","k","l","o","o","p","q","r","s","t","u","w","x","y","z","z"], [1,3,3,2,1,4,2,4,1,8,5,1,3,4,1,3,10,1,1,1,1,4,4,8,4,10]), 41, 'Test 44');
test(maxScoreWords(["wizard","oracle","sorcerer"], ["w","i","z","a","r","d","o","r","a","c","l","e","s","o","r","c","e","r","e"], [1,3,3,2,1,4,2,4,1,8,5,1,3,4,1,3,10,1,1,1,2,4,2,4,1,10]), 27, 'Test 45');
test(maxScoreWords(["hello","world","python","code"], ["h","e","l","l","o","w","r","d","p","y","t","h","o","n","c","o","d","e"], [4,5,1,2,4,3,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]), 190, 'Test 46');
test(maxScoreWords(["abcdefg","hijklmn","opqrstu","vwxyz"], ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","a","b","c","d"], [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]), 351, 'Test 47');
test(maxScoreWords(["greedy","algorithm","optimization","heuristic"], ["g","r","e","e","d","y","a","l","g","o","r","i","t","h","m","o","p","t","i","m","i","z","a","t","i","o","n","h","e","u","r","i","s","t","i","c"], [1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9]), 188, 'Test 48');
test(maxScoreWords(["programming","code","hackathon","python"], ["p","r","o","g","r","a","m","m","i","n","g","c","o","d","e","h","a","c","k","a","t","h","o","n","p","y","t","h","o","n"], [1,3,3,2,1,4,2,4,1,8,5,1,3,4,1,3,10,1,1,1,2,4,2,4,1,2]), 67, 'Test 49');
test(maxScoreWords(["orange","grape","apple","banana"], ["a","a","a","b","e","g","n","n","n","o","p","r","r","r","s","t","u","u","u","u","u"], [1,3,3,2,1,4,2,4,1,8,5,1,3,1,1,3,10,1,1,1,1,4,4,8,4,10]), 8, 'Test 50');
test(maxScoreWords(["interview","question","programming","challenge"], ["i","n","t","e","r","v","i","e","w","q","u","e","s","t","i","o","n","p","r","o","g","r","a","m","m","i","n","g","c","h","a","l","l","e","n","g","e"], [1,2,3,4,5,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9,10,9,8,7,6,5]), 175, 'Test 51');
test(maxScoreWords(["abacax","banana","cherry"], ["a","b","a","c","a","x","b","a","n","a","n","a","c","h","e","r","r","y","a","b","a","c","a","x"], [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]), 142, 'Test 52');
test(maxScoreWords(["xylophone","guitar","piano","drums"], ["a","a","a","b","b","b","c","c","d","d","d","e","e","e","f","g","g","h","i","i","j","k","l","m","n","n","o","o","p","p","q","r","r","s","t","u","u","v","w","x","x","y","y","z","z"], [1,3,3,2,1,4,2,4,1,8,5,1,3,1,1,3,10,1,1,1,1,4,4,8,4,10,9,7,5,3,2,1,6,4,2,9,7,5,3,2,1,6,4,2]), 39, 'Test 53');
test(maxScoreWords(["abracadabra","alakazam","sorcery","spellbound"], ["a","a","a","a","a","a","a","b","b","b","b","c","d","e","e","e","i","l","l","l","m","o","o","o","p","r","r","r","s","s","t","u","z"], [1,3,3,2,1,4,2,4,1,8,5,1,3,4,1,3,10,1,1,1,1,4,4,8,4,10]), 18, 'Test 54');
test(maxScoreWords(["supercalifragilisticexpialidocious","antidisestablishmentarianism","floccinaucinihilipilification"], ["s","u","p","e","r","c","a","l","i","f","r","a","g","i","l","i","s","t","i","c","e","x","p","i","a","l","i","d","o","c","i","o","u","s","a","n","t","i","d","i","s","e","t","a","b","l","i","s","h","m","e","n","t","a","r","i","a","n","i","s","m","f","l","o","c","c","i","n","a","u","c","i","n","i","h","i","l","i","p","i","l","i","f","i","c","a","t","i","o","n"], [1,3,3,2,1,4,2,4,1,8,5,1,3,4,1,3,10,1,1,1,2,4,2,4,1,10]), 112, 'Test 55');
test(maxScoreWords(["abcdefghij","klmnopqrstu","vwxyz"], ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"], [1,3,3,2,1,4,2,4,1,8,5,1,3,4,1,3,10,1,1,1,2,4,2,4,1,2]), 74, 'Test 56');
test(maxScoreWords(["abcdefghij","jihgfedcba","mnopqrstuv"], ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"], [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6]), 110, 'Test 57');
test(maxScoreWords(["abc","def","ghi","jkl","mno","pqr","stu","vwx","yz"], ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"], [1,3,3,2,1,4,2,4,1,8,5,1,3,4,1,3,10,1,1,1,1,4,4,8,4,10]), 90, 'Test 58');
test(maxScoreWords(["apple","banana","cherry","date"], ["a","a","a","b","c","d","e","e","e","e","n","n","r","t","y"], [1,3,3,2,1,4,2,4,1,8,5,1,3,4,1,3,10,1,1,1,2,4,2,4,1,5]), 14, 'Test 59');
test(maxScoreWords(["optimization","resource","constraint","solution"], ["o","p","t","i","m","i","z","a","t","i","o","n","r","e","s","o","u","r","c","e","c","o","n","s","t","r","a","i","n","t","s","o","l","u","t","i","o","n"], [1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,8,9]), 169, 'Test 60');
test(maxScoreWords(["abcdefg","hijklmnop","qrstuvwxyz"], ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"], [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]), 351, 'Test 61');
test(maxScoreWords(["quantum","computing","artificial","intelligence"], ["q","u","a","n","t","u","m","c","o","m","p","u","t","i","n","g","a","r","t","i","f","i","c","i","a","l","i","n","t","e","l","l","i","g","e","n","c","e"], [1,3,3,2,1,4,2,4,1,8,5,1,3,4,1,3,10,1,1,1,2,4,2,4,1,2]), 79, 'Test 62');
test(maxScoreWords(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p"], ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p"], [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]), 136, 'Test 63');
test(maxScoreWords(["programming","challenge","solution"], ["p","r","o","g","r","a","m","m","i","n","g","c","h","a","l","l","e","n","g","e","s","o","l","u","t","i","o","n"], [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]), 28, 'Test 64');
test(maxScoreWords(["aabbcc","ddeeff","gghhii"], ["a","b","c","d","e","f","g","h","i","a","b","c","d","e","f","g","h","i","a","b","c","d","e","f","g","h","i","a","b","c","d","e","f","g","h","i"], [1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3]), 18, 'Test 65');
test(maxScoreWords(["apple","banana","cherry","date"], ["a","b","c","d","e","e","e","g","h","i","n","n","p","p","r","t","u"], [1,3,3,2,1,4,2,4,1,8,5,1,3,1,1,3,10,1,1,1,1,4,4,8,4,10]), 5, 'Test 66');
test(maxScoreWords(["apple", "banana", "grape", "orange"], ["a","a","p","l","e","b","a","n","a","n","a","g","r","a","p","e","o","r","a","n","g","e"], [1,3,3,2,1,4,2,4,1,8,5,1,3,1,1,3,10,1,1,1,1,4,4,8,4,10]), 24, 'Test 67');
test(maxScoreWords(["apple","banana","cherry"], ["a","p","p","l","e","b","a","n","a","n","a","c","h","e","r","r","y"], [1,3,3,2,1,4,2,4,1,8,5,1,3,4,1,3,10,1,1,1,2,4,2,4,1,2]), 34, 'Test 68');
test(maxScoreWords(["xylophone","violin","guitar"], ["x","y","l","o","p","h","o","n","e","v","i","o","l","i","n","g","u","i","t","a","r"], [8,24,12,15,15,19,6,9,8,4,4,8,9,9,5,14,9,7,8,6,5,7,4,6,10,10]), 166, 'Test 69');
test(maxScoreWords(["programming","is","fun","and","educational"], ["a","a","a","b","c","d","e","e","e","e","f","g","h","i","i","i","j","k","l","m","n","n","n","o","o","p","p","p","p","r","r","s","t","u","u","v","w","x","y","z"], [1,3,3,2,1,4,2,4,1,8,5,1,3,4,1,3,10,1,1,1,2,4,2,4,1,5]), 30, 'Test 70');
test(maxScoreWords(["optimization","performance","scalability"], ["o","p","t","i","m","i","z","a","t","i","o","n","p","e","r","f","o","r","m","a","n","c","e","s","c","a","l","a","b","i","l","i","t","y"], [1,3,3,2,1,4,2,4,1,8,5,1,3,4,1,3,10,1,1,1,2,4,4,8,8,10]), 73, 'Test 71');
test(maxScoreWords(["abcd", "efgh", "ijkl", "mnop"], ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p"], [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]), 136, 'Test 72');
test(maxScoreWords(["zebra","giraffe","hippo"], ["z","e","b","r","a","g","i","r","a","f","f","e","h","i","p","p","o"], [1,3,3,2,1,4,2,4,1,8,5,1,3,4,1,3,10,1,1,1,2,4,2,4,1,2]), 34, 'Test 73');
test(maxScoreWords(["apple","banana","cherry"], ["a","a","a","a","a","b","b","c","c","h","e","r","r","y","n"], [1,3,3,2,1,4,2,4,1,8,5,1,3,4,1,3,10,1,1,1,1,4,4,8,4,10]), 14, 'Test 74');
test(maxScoreWords(["abcd", "dcba", "bacd", "cadb"], ["a","b","c","d","a","b","c","d","a","b","c","d","a","b","c","d"], [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]), 40, 'Test 75');
test(maxScoreWords(["programming", "python", "java", "code"], ["p","r","o","g","r","a","m","m","i","n","g","p","y","t","h","o","n","j","a","v","a","c","o","d","e"], [3,1,3,7,2,2,4,6,5,3,5,1,3,7,2,1,4,6,5,3,5,1,3,7,2,1]), 89, 'Test 76');
test(maxScoreWords(["algorithm","data","structure","code"], ["a","l","g","o","r","i","t","h","m","d","a","t","a","s","t","r","u","c","t","u","r","e","c","o","d","e"], [1,3,2,2,1,2,3,5,1,1,1,1,2,1,1,1,2,4,2,4,1,6,2,5,3,5]), 59, 'Test 77');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

// Auto-mark DONE when all tests pass
if (!failed) {
  const path = require("path");
  const fs = require("fs");
  const dir = __dirname;
  const folder = path.basename(dir);
  if (!folder.startsWith("DONE-")) {
    const parent = path.dirname(dir);
    const newDir = path.join(parent, "DONE-" + folder);
    fs.renameSync(dir, newDir);
    const readme = path.join(newDir, "README.md");
    if (fs.existsSync(readme)) {
      let c = fs.readFileSync(readme, "utf-8");
      if (!c.includes("<!-- SOLVED -->")) {
        c = c.replace(/^(# .+)$/m, "$1 ✅\n<!-- SOLVED -->");
        fs.writeFileSync(readme, c);
      }
    }
    console.log("✅ DONE → " + "DONE-" + folder);
  }
}
