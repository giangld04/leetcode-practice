// Test: 1309. Decrypt String From Alphabet To Integer Mapping
// 130 test cases from LeetCodeDataset
// Run: node test.js

const { freqAlphabets } = require("./solution");

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

console.log("\n1309. Decrypt String From Alphabet To Integer Mapping\n");

test(freqAlphabets("11#11#11#11#11#11#11#11#11#11#"), kkkkkkkkkk, 'Test 1');
test(freqAlphabets("12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#"), abcdefghijklmnopqrstuvwxyz, 'Test 2');
test(freqAlphabets("26#25#24#23#22#21#"), zyxwvu, 'Test 3');
test(freqAlphabets("1326#"), acz, 'Test 4');
test(freqAlphabets("26#25#24#23#22#21#20#19#18#17#16#15#14#13#12#11#10#9#8#7#6#5#4#3#2#1#"), Error: invalid literal for int[] with base 10: '#8', 'Test 5');
test(freqAlphabets("25#24#23#22#21#20#19#18#17#16#15#14#13#"), yxwvutsrqponm, 'Test 6');
test(freqAlphabets("11#12#13#14#15#16#17#18#19#"), klmnopqrs, 'Test 7');
test(freqAlphabets("1#10#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#"), Error: invalid literal for int[] with base 10: '#', 'Test 8');
test(freqAlphabets("10#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#"), jklmnopqrstuvwxyz, 'Test 9');
test(freqAlphabets("9#"), Error: invalid literal for int[] with base 10: '#', 'Test 10');
test(freqAlphabets("12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26"), abcdefghijklmnopqrstuvwxybf, 'Test 11');
test(freqAlphabets("10#11#12"), jkab, 'Test 12');
test(freqAlphabets("1#2#3#4#5#6#7#8#9#10#11#12#"), Error: invalid literal for int[] with base 10: '#2', 'Test 13');
test(freqAlphabets("1#10#100#"), Error: invalid literal for int[] with base 10: '#', 'Test 14');
test(freqAlphabets("1#2#3#4#5#6#7#8#9"), Error: invalid literal for int[] with base 10: '#2', 'Test 15');
test(freqAlphabets("9#8#7#6#5#4#3#2#1#"), Error: invalid literal for int[] with base 10: '#8', 'Test 16');
test(freqAlphabets("10#20#30#40#50#60#70#80#90#"), jt~¦°º, 'Test 17');
test(freqAlphabets("10#11#12#13#14#15#"), jklmno, 'Test 18');
test(freqAlphabets("10#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#987654321#"), jklmnopqrstuvwxyzihgfedcu, 'Test 19');
test(freqAlphabets("20#21#22#23#24#25#26#"), tuvwxyz, 'Test 20');
test(freqAlphabets("1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#"), Error: invalid literal for int[] with base 10: '#1', 'Test 21');
test(freqAlphabets("10#10#10#10#10#10#10#10#10#10#"), jjjjjjjjjj, 'Test 22');
test(freqAlphabets("1#2#3#4#5#6#7#8#9#"), Error: invalid literal for int[] with base 10: '#2', 'Test 23');
test(freqAlphabets("26#25#24#23#22#21#20#19#18#17#16#15#14#13#12#11#10#"), zyxwvutsrqponmlkj, 'Test 24');
test(freqAlphabets("25#26#"), yz, 'Test 25');
test(freqAlphabets("10#9#8#7#6#5#4#3#2#1#"), Error: invalid literal for int[] with base 10: '#8', 'Test 26');
test(freqAlphabets("1#2#3#4#5#"), Error: invalid literal for int[] with base 10: '#2', 'Test 27');
test(freqAlphabets("123456789"), abcdefghi, 'Test 28');
test(freqAlphabets("11#22#33#44#55#66#77#88#99#"), kv¢­¸Ã, 'Test 29');
test(freqAlphabets("910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#1#2#3#4#5#6#7#8#9"), Error: invalid literal for int[] with base 10: '#2', 'Test 30');
test(freqAlphabets("26#25#24#23#22#21#20#19#18#17#16#15#14#13#12#11#10#9#8#7#6#5#4#3#2#1#10#26#"), Error: invalid literal for int[] with base 10: '#8', 'Test 31');
test(freqAlphabets("9#8#7#6#5#4#3#2#1#10#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#9#8#7#6#5#4#3#2#1#10#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#"), Error: invalid literal for int[] with base 10: '#8', 'Test 32');
test(freqAlphabets("10#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#9#8#7#6#5#4#3#2#1#10#11#"), Error: invalid literal for int[] with base 10: '#8', 'Test 33');
test(freqAlphabets("111213141516171819202122232425261#2#3#4#5#6#7#8#910#11#12#"), Error: invalid literal for int[] with base 10: '#3', 'Test 34');
test(freqAlphabets("10#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#26#25#24#23#22#21#20#19#18#17#16#15#14#13#12#11#10#9#8#7#6#5#4#3#2#1#"), Error: invalid literal for int[] with base 10: '#8', 'Test 35');
test(freqAlphabets("10#20#30#40#50#60#70#80#90#10#20#3#2#1#"), Error: invalid literal for int[] with base 10: '#2', 'Test 36');
test(freqAlphabets("20#9#8#7#6#5#4#3#2#1"), Error: invalid literal for int[] with base 10: '#8', 'Test 37');
test(freqAlphabets("25#26#10#10#10#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#"), yzjjjklmnopqrstuvwxyz, 'Test 38');
test(freqAlphabets("1#2#3#4#5#6#7#8#920#21#22#23#24#25#26#10#11#12#13#14#15#16#17#18#19#"), Error: invalid literal for int[] with base 10: '#2', 'Test 39');
test(freqAlphabets("1#2#3#4#5#6#7#8#9#10#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#1#2#3#"), Error: invalid literal for int[] with base 10: '#2', 'Test 40');
test(freqAlphabets("1#10#20#11#21#12#22#13#23#14#24#15#25#16#26#17#18#19#"), Error: invalid literal for int[] with base 10: '#', 'Test 41');
test(freqAlphabets("26#10#15#20#25#5#9#13#17#21#23#1#6#11#16#21#22#"), Error: invalid literal for int[] with base 10: '#9', 'Test 42');
test(freqAlphabets("52525252525252525252525252525252525252525252525252525252525252525252525252525#"), ebebebebebebebebebebebebebebebebebebebebebebebebebebebebebebebebebebebebebey, 'Test 43');
test(freqAlphabets("26#25#24#23#22#21#20#19#18#17#16#15#14#13#12#11#10#987654321"), zyxwvutsrqponmlkjihgfedcba, 'Test 44');
test(freqAlphabets("20#21#22#23#24#25#26#1#2#3#4#5#6#7#8#9#10#11#12#13#14#15#16#17#18#19#"), Error: invalid literal for int[] with base 10: '#2', 'Test 45');
test(freqAlphabets("10#20#30#40#50#60#70#80#90#11#21#31#41#51#61#71#81#91#26#"), jt~¦°ºku§±»z, 'Test 46');
test(freqAlphabets("10#9#8#7#6#5#4#3#2#1#26#25#24#23#22#21#20#19#18#17#16#15#14#13#12#11#"), Error: invalid literal for int[] with base 10: '#8', 'Test 47');
test(freqAlphabets("26#9#25#8#24#7#23#6#22#5#21#4#20#3#19#2#18#1#17#16#15#14#13#12#11#10#"), Error: invalid literal for int[] with base 10: '#', 'Test 48');
test(freqAlphabets("26#25#24#23#22#21#20#19#18#17#16#15#14#13#12#11#9#8#7#6#5#4#3#2#1#"), Error: invalid literal for int[] with base 10: '#8', 'Test 49');
test(freqAlphabets("11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#1#2#3#4#5#6#7#8#9#10#"), Error: invalid literal for int[] with base 10: '#2', 'Test 50');
test(freqAlphabets("1#2#3#4#5#6#7#8#9#10#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#1#2#3#4#5#6#7#8#9#10#"), Error: invalid literal for int[] with base 10: '#2', 'Test 51');
test(freqAlphabets("20#19#18#17#16#15#14#13#12#11#10#9#8#7#6#5#4#3#2#1#26#25#24#23#22#21#"), Error: invalid literal for int[] with base 10: '#8', 'Test 52');
test(freqAlphabets("1#1#1#1#1#1#1#1#1#1#2#2#2#2#2#2#2#2#2#2#10#10#10#10#10#10#10#10#10#10#20#20#20#20#20#20#20#20#20#20#"), Error: invalid literal for int[] with base 10: '#1', 'Test 53');
test(freqAlphabets("5#4#3#2#1#10#20#30#11#12#13#14#15#16#17#18#19#21#22#23#24#25#26#"), Error: invalid literal for int[] with base 10: '#4', 'Test 54');
test(freqAlphabets("910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#9#8#7#6#5#4#3#2#1#"), Error: invalid literal for int[] with base 10: '#8', 'Test 55');
test(freqAlphabets("12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#98765432112345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#987654321"), abcdefghijklmnopqrstuvwxyzihgfedcbaabcdefghijklmnopqrstuvwxyzihgfedcba, 'Test 56');
test(freqAlphabets("9#8#7#6#5#4#3#2#1#10#20#30#40#50#60#70#80#90#11#12#13#14#15#"), Error: invalid literal for int[] with base 10: '#8', 'Test 57');
test(freqAlphabets("19#18#17#16#15#14#13#12#11#10#9#8#7#6#5#4#3#2#1#"), Error: invalid literal for int[] with base 10: '#8', 'Test 58');
test(freqAlphabets("10#20#30#11#21#31#12#22#32#13#23#14#24#15#25#16#26#17#18#19#1#2#3#4#5#6#7#8#9#10#"), Error: invalid literal for int[] with base 10: '#2', 'Test 59');
test(freqAlphabets("10#20#3#21#4#22#5#23#6#24#7#25#8#26#9#10#11#12#13#14#15#16#17#18#19"), Error: invalid literal for int[] with base 10: '#', 'Test 60');
test(freqAlphabets("1#2#3#4#5#6#7#8#9#10#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#"), Error: invalid literal for int[] with base 10: '#2', 'Test 61');
test(freqAlphabets("26#1#2#3#4#5#6#7#8#910#20#30#40#50#60#70#80#90#11#21#31#41#51#61#71#81#91#"), Error: invalid literal for int[] with base 10: '#2', 'Test 62');
test(freqAlphabets("12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#987654321"), lmnopqrstuvwxyzihgfedcba, 'Test 63');
test(freqAlphabets("910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26"), ijklmnopqrstuvwxybf, 'Test 64');
test(freqAlphabets("26#25#24#23#22#21#20#19#18#17#16#15#14#13#12#11#10#9#8#7#6#5#4#3#2#1#1#"), Error: invalid literal for int[] with base 10: '#8', 'Test 65');
test(freqAlphabets("26#25#24#23#22#21#20#19#18#17#16#15#14#13#12#11#10#9#8#7#6#5#4#3#2#1#1#2#"), Error: invalid literal for int[] with base 10: '#8', 'Test 66');
test(freqAlphabets("9#8#7#6#5#4#3#2#1#10#20#30#11#21#31#12#22#32#13#23#14#24#15#25#16#26#"), Error: invalid literal for int[] with base 10: '#8', 'Test 67');
test(freqAlphabets("1#2#3#4#5#6#7#8#926#25#24#23#22#21#20#19#18#17#16#15#14#13#12#11#10#1#2#3#4#5#6#7#8#9"), Error: invalid literal for int[] with base 10: '#2', 'Test 68');
test(freqAlphabets("11#21#12#22#13#23#14#24#15#25#16#26#7#8#9#1#2#3#4#5#6#"), Error: invalid literal for int[] with base 10: '#8', 'Test 69');
test(freqAlphabets("1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#"), Error: invalid literal for int[] with base 10: '#1', 'Test 70');
test(freqAlphabets("12345678910#20#30#40#50#60#70#80#90#11#21#31#41#51#61#71#81#91#26#"), abcdefghijt~¦°ºku§±»z, 'Test 71');
test(freqAlphabets("26#25#24#23#22#21#20#19#18#17#16#15#14#13#12#11#10#9#8#7#6#5#4#3#2#1#10#9#8#7#6#5#4#3#2#1#"), Error: invalid literal for int[] with base 10: '#8', 'Test 72');
test(freqAlphabets("1#10#11#2#20#21#3#30#26#25#24#23#22#21#20#19#18#17#16#15#14#13#12#11#10#"), Error: invalid literal for int[] with base 10: '#', 'Test 73');
test(freqAlphabets("11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#1#2#3#4#5#6#7#8#9#"), Error: invalid literal for int[] with base 10: '#2', 'Test 74');
test(freqAlphabets("9#8#7#6#5#4#3#2#126#25#24#23#22#21#20#19#18#17#16#15#14#13#12#11#10#"), Error: invalid literal for int[] with base 10: '#8', 'Test 75');
test(freqAlphabets("910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#987654321"), ijklmnopqrstuvwxyzihgfedcba, 'Test 76');
test(freqAlphabets("26#25#10#24#9#23#8#22#7#21#6#20#5#19#4#18#3#17#2#16#1#15#"), Error: invalid literal for int[] with base 10: '#', 'Test 77');
test(freqAlphabets("10#20#30#40#50#60#70#80#90#10#20#30#40#50#60#70#80#90#1#2#3#4#5#6#7#8#9"), Error: invalid literal for int[] with base 10: '#2', 'Test 78');
test(freqAlphabets("26#1#2#3#4#5#6#7#8#9#10#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#"), Error: invalid literal for int[] with base 10: '#2', 'Test 79');
test(freqAlphabets("1#2#3#4#5#6#7#8#9#10#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#9#8#7#6#5#4#3#2#1#"), Error: invalid literal for int[] with base 10: '#2', 'Test 80');
test(freqAlphabets("26#10#26#10#26#10#26#10#26#10#26#10#26#10#26#10#"), zjzjzjzjzjzjzjzj, 'Test 81');
test(freqAlphabets("1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#1#"), Error: invalid literal for int[] with base 10: '#1', 'Test 82');
test(freqAlphabets("9#8#7#6#5#4#3#2#1#10#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#"), Error: invalid literal for int[] with base 10: '#8', 'Test 83');
test(freqAlphabets("10#9#8#7#6#5#4#3#2#1#26#25#24#23#22#21#20#19#18#17#16#"), Error: invalid literal for int[] with base 10: '#8', 'Test 84');
test(freqAlphabets("10#20#30#11#21#31#12#22#32#13#23#33#14#24#34#15#25#35#16#26#36#"), jt~kulvmwnxoypz, 'Test 85');
test(freqAlphabets("1#1#1#1#1#1#1#1#1#1#10#10#10#10#10#10#10#10#10#10#"), Error: invalid literal for int[] with base 10: '#1', 'Test 86');
test(freqAlphabets("1#2#3#4#5#6#7#8#910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#987654321"), Error: invalid literal for int[] with base 10: '#2', 'Test 87');
test(freqAlphabets("91#82#73#64#55#46#37#28#19#10#11#12#13#14#15#16#17#18#"), »²© |sjklmnopqr, 'Test 88');
test(freqAlphabets("12#14#16#18#20#22#24#26#11#13#15#17#19#21#23#25#"), lnprtvxzkmoqsuwy, 'Test 89');
test(freqAlphabets("1#10#2#20#3#30#4#40#5#50#6#60#7#70#8#80#9#90#"), Error: invalid literal for int[] with base 10: '#', 'Test 90');
test(freqAlphabets("11#11#11#11#11#11#11#11#11#11#11#11#11#11#11#11#11#11#11#11#11#11#11#11#11#11#11#11#11#11#11#11#11#"), kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk, 'Test 91');
test(freqAlphabets("1#2#3#4#5#6#7#8#9#10#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#10#9#8#7#6#5#4#3#2#1#"), Error: invalid literal for int[] with base 10: '#2', 'Test 92');
test(freqAlphabets("26#25#24#23#22#21#20#19#18#17#16#15#14#13#12#11#10#9#8#7#6#5#4#3#2#1"), Error: invalid literal for int[] with base 10: '#8', 'Test 93');
test(freqAlphabets("25#26#25#26#25#26#25#26#25#26#25#26#25#26#25#26#25#26#25#26#25#26#25#26#25#26#25#26#25#26#25#26#25#26#25#26#25#26#25#26#25#26#25#26#25#26#25#26#25#26#"), yzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyzyz, 'Test 94');
test(freqAlphabets("26#1#2#3#4#5#6#7#8#9#10#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#"), Error: invalid literal for int[] with base 10: '#2', 'Test 95');
test(freqAlphabets("1#2#3#4#5#6#7#8#926#25#24#23#22#21#20#19#18#17#16#15#14#13#12#11#10#"), Error: invalid literal for int[] with base 10: '#2', 'Test 96');
test(freqAlphabets("11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#987654321"), klmnopqrstuvwxyzihgfedcba, 'Test 97');
test(freqAlphabets("99999999999999999999999999999999999999999999999999999999999999999999999999999#10#"), iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiÃj, 'Test 98');
test(freqAlphabets("26#19#20#21#22#23#24#25#9#8#7#6#5#4#3#2#1#10#11#12#13#14#15#16#17#18#"), Error: invalid literal for int[] with base 10: '#8', 'Test 99');
test(freqAlphabets("10#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#1#2#3#4#5#6#7#8#9#"), Error: invalid literal for int[] with base 10: '#2', 'Test 100');
test(freqAlphabets("1#2#3#4#5#6#7#8#9#10#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#1#2#3#4#5#6#7#8#9#10#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#1#2#3#4#5#6#7#8#9"), Error: invalid literal for int[] with base 10: '#2', 'Test 101');
test(freqAlphabets("26#1#26#2#26#3#26#4#26#5#26#6#26#7#26#8#26#9#10#11#12#13#14#15#16#17#18#19#20"), Error: invalid literal for int[] with base 10: '#', 'Test 102');
test(freqAlphabets("1#2#3#4#5#6#7#8#910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#98765432110#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#987654321"), Error: invalid literal for int[] with base 10: '#2', 'Test 103');
test(freqAlphabets("10#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#10#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#"), jklmnopqrstuvwxyzjklmnopqrstuvwxyz, 'Test 104');
test(freqAlphabets("10#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#1#2#3#4#5#6#7#8#9"), Error: invalid literal for int[] with base 10: '#2', 'Test 105');
test(freqAlphabets("10#10#10#10#10#10#10#10#10#10#10#10#10#10#10#10#10#10#10#10#10#10#10#10#"), jjjjjjjjjjjjjjjjjjjjjjjj, 'Test 106');
test(freqAlphabets("910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#"), ijklmnopqrstuvwxyz, 'Test 107');
test(freqAlphabets("10#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#9#8#7#6#5#4#3#2#1#"), Error: invalid literal for int[] with base 10: '#8', 'Test 108');
test(freqAlphabets("10#20#30#11#21#31#12#22#32#13#23#14#24#15#25#16#26"), jt~kulvmwnxoypbf, 'Test 109');
test(freqAlphabets("1#2#3#4#5#6#7#8#9#10#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#1#2#3#4#5#6#7#8#9"), Error: invalid literal for int[] with base 10: '#2', 'Test 110');
test(freqAlphabets("26#26#26#25#25#25#24#24#24#23#23#23#22#22#22#21#21#21#20#20#20#19#19#19#18#18#18#17#17#17#16#16#16#15#15#15#14#14#14#13#13#13#12#12#12#11#11#11#10#10#10#9#9#9#8#8#8#7#7#7#6#6#6#5#5#5#4#4#4#3#3#3#2#2#2#1#1#1"), Error: invalid literal for int[] with base 10: '#9', 'Test 111');
test(freqAlphabets("9#10#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#1#2#3#4#5#6#7#8#9#10#"), Error: invalid literal for int[] with base 10: '#', 'Test 112');
test(freqAlphabets("10#9#8#7#6#5#4#3#2#1#26#25#24#23#22#21#20#19#18#17#16#15#14#13#12#11#10#"), Error: invalid literal for int[] with base 10: '#8', 'Test 113');
test(freqAlphabets("10#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#1#2#3#4#5#6#7#8#9#10#"), Error: invalid literal for int[] with base 10: '#2', 'Test 114');
test(freqAlphabets("10#20#30#40#50#60#70#80#90#10#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#"), jt~¦°ºjklmnopqrstuvwxyz, 'Test 115');
test(freqAlphabets("10#10#10#11#11#11#12#12#12#13#13#13#14#14#14#15#15#15#16#16#16#17#17#17#18#18#18#19#19#19#20#20#20#21#21#21#22#22#22#23#23#23#24#24#24#25#25#25#26#26#26#"), jjjkkklllmmmnnnooopppqqqrrrssstttuuuvvvwwwxxxyyyzzz, 'Test 116');
test(freqAlphabets("10#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#9#8#7#6#5#4#3#2#126#25#24#23#22#21#20#19#18#17#16#15#14#13#12#11#10#"), Error: invalid literal for int[] with base 10: '#8', 'Test 117');
test(freqAlphabets("9876543210#9#8#7#6#5#4#3#2#1#26#25#24#23#22#21#20#19#18#17#"), Error: invalid literal for int[] with base 10: '#8', 'Test 118');
test(freqAlphabets("1#2#3#4#5#6#7#8#910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#"), Error: invalid literal for int[] with base 10: '#2', 'Test 119');
test(freqAlphabets("10#10#10#10#10#10#10#10#10#10#1#1#1#1#1#1#1#1#1#1#"), Error: invalid literal for int[] with base 10: '#1', 'Test 120');
test(freqAlphabets("10#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#9#8#7#6#5#4#3#2#1"), Error: invalid literal for int[] with base 10: '#8', 'Test 121');
test(freqAlphabets("10#10#10#10#10#10#10#10#10#10#10#10#10#10#10#10#10#10#10#10#10#10#10#"), jjjjjjjjjjjjjjjjjjjjjjj, 'Test 122');
test(freqAlphabets("20#19#18#17#16#15#14#13#12#11#10#9#8#7#6#5#4#3#2#1#"), Error: invalid literal for int[] with base 10: '#8', 'Test 123');
test(freqAlphabets("10#9#8#7#6#5#4#3#2#111#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#"), Error: invalid literal for int[] with base 10: '#8', 'Test 124');
test(freqAlphabets("26#10#20#15#19#11#18#12#17#13#16#14#9#8#7#6#5#4#3#2#1#"), Error: invalid literal for int[] with base 10: '#8', 'Test 125');
test(freqAlphabets("10#10#10#10#10#10#10#10#10#10#10#10#10#10#10#10#10#10#10#10#10#10#10#10#10#10#10#10#10#10#10#10#"), jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj, 'Test 126');
test(freqAlphabets("1#10#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#1#10#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#"), Error: invalid literal for int[] with base 10: '#', 'Test 127');
test(freqAlphabets("10#20#30#11#21#31#12#22#32#13#23#14#24#15#25#16#26#17#18#19#1#2#3#4#5"), Error: invalid literal for int[] with base 10: '#2', 'Test 128');
test(freqAlphabets("1#2#3#4#5#6#7#8#9#10#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#1#2#3"), Error: invalid literal for int[] with base 10: '#2', 'Test 129');
test(freqAlphabets("26#25#24#23#22#21#20#19#18#17#16#15#14#13#12#11#10#9#8#7#6#5#4#3#2#1#10#20#30#11#21#31#12#22#32#13#23#14#24#15#25#16#26#17#18#19#1#2#3#4#5#6#7#8#9#"), Error: invalid literal for int[] with base 10: '#8', 'Test 130');

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
