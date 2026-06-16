// Test: 1178. Number Of Valid Words For Each Puzzle
// 71 test cases from LeetCodeDataset
// Run: node test.js

const { findNumOfValidWords } = require("./solution");

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

console.log("\n1178. Number Of Valid Words For Each Puzzle\n");

test(findNumOfValidWords(["apple","pleas","please"], ["aelwxyz","aelpxyz","aelpsxy","saelpxy","xaelpsy"]), [0, 1, 3, 2, 0], 'Test 1');
test(findNumOfValidWords(["hello","world","abc","def","ghi"], ["ahelloz","dworldz","abcdefg","xyzghif","mnopqrs"]), [0, 1, 1, 0, 0], 'Test 2');
test(findNumOfValidWords(["aaaa","asas","able","ability","actt","actor","access"], ["aboveyz","abrodyz","abslute","absoryz","actresz","gaswxyz"]), [1, 1, 3, 2, 4, 0], 'Test 3');
test(findNumOfValidWords(["hello","world"], ["ehlol","dlrow"]), [1, 1], 'Test 4');
test(findNumOfValidWords(["cat","dog","bird"], ["act","dgo","bdir"]), [1, 1, 1], 'Test 5');
test(findNumOfValidWords(["zzzz","zzz","zz","z"], ["zabcdefghijklmnopqrstuvwxy"]), [4], 'Test 6');
test(findNumOfValidWords(["aaaa","aaa","aa","a"], ["abcdefg","gfedcba","agfedcb","bagfedc","cagfedb"]), [4, 0, 4, 0, 0], 'Test 7');
test(findNumOfValidWords(["aaa","aa","a"], ["abcdefg","ghijklm","nopqrst"]), [3, 0, 0], 'Test 8');
test(findNumOfValidWords(["a","b","c","d","e","f","g"], ["abcdefg"]), [1], 'Test 9');
test(findNumOfValidWords(["a","b","c","d","e","f","g"], ["abcdefg","gfedcba","agfedcb","bagfedc","cagfedb"]), [1, 1, 1, 1, 1], 'Test 10');
test(findNumOfValidWords(["a","b","c"], ["abc","def","ghi"]), [1, 0, 0], 'Test 11');
test(findNumOfValidWords(["abcdefg"], ["abcdefg"]), [1], 'Test 12');
test(findNumOfValidWords(["abc","def","ghi"], ["abcdefg","ghijklm","nopqrst"]), [1, 1, 0], 'Test 13');
test(findNumOfValidWords(["abcd","abce","abcf","abcg","abch","abci","abcj","abck","abcl","abcm","abcp","abcd","abcde","abcdf","abcde","abcde","abcdf"], ["abcdefg","gfedcba","agfedcb","bagfedc","cagfedb","defghij","ghijklm","ijklmno","jklmnop","klmnopq","lmnopqr","mnopqrs","nopqrst","opqrstu","pqrstuv","qrstuvw","rstuvwx","stuvwxy","tuvwxyz"]), [10, 1, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 'Test 14');
test(findNumOfValidWords(["ab","bc","cd","de","ef","fg","gh"], ["abcdefgh","bcdefghi","cdefghij","defghijk","efghijkl"]), [1, 1, 1, 1, 1], 'Test 15');
test(findNumOfValidWords(["abcdefghijklmnop","qrstuvwxyz"], ["abcdefghijklnoprstuvwxyz","zyxwvutsrqponmlkjihgfedcba"]), [0, 1], 'Test 16');
test(findNumOfValidWords(["abacax","bacbac","cababc","xdsv","abcd","dcba","abdc","bacd","acbd","cabd"], ["abcaxd","bacxzd","cabxdz","xdsvab","abcdx","dcba","abcd","bacd","acbd","cabd"]), [9, 9, 9, 1, 9, 6, 8, 8, 8, 8], 'Test 17');
test(findNumOfValidWords(["abcdefgh","ijklmnop","qrstuvwx","yzabcdef","mnopqrst","vwxyzabc"], ["abcdefgh","ijklmnop","qrstuvwx","yzabcdef","mnopqrst","vwxyzabc"]), [1, 1, 1, 1, 1, 1], 'Test 18');
test(findNumOfValidWords(["umbrella","raincoat","boot","galoshes","sunglasses","scarf","jacket","boots","mittens","hat"], ["blutgos","mireach","nabstgr","lgohtua","ogtsbem","rtgpsha","suboegt","ahrctbq","smrguth","bmeghiu"]), [2, 0, 0, 0, 2, 0, 1, 1, 0, 0], 'Test 19');
test(findNumOfValidWords(["hello","world","python","programming","challenge","algorithms","data","structure","complexity","algorithm"], ["ehlol","dlrow","htpon","gnimmargorp","llengec","smhtloga","aadtt","ctreusd","xytacpml","lgoitamha"]), [1, 1, 0, 1, 0, 0, 1, 1, 0, 0], 'Test 20');
test(findNumOfValidWords(["apple","pleas","please","apples","please","applesauce","pease","app","leap","pelase"], ["aelwxyz","aelpxyz","aelpsxy","saelpxy","xaelpsy","applsey","peasely","ppleasy","leaps","peaslp"]), [0, 3, 9, 6, 0, 9, 9, 9, 7, 9], 'Test 21');
test(findNumOfValidWords(["banana","orange","apple","grape","melon","kiwi","watermelon","strawberry","blueberry","raspberry","blackberry","mango","papaya","pineapple"], ["aegimno","abegijm","aceimnu","agikmnp","agiknpw","aegilmn","bcehikn","abefhij","acdefln","acdelpw","aeghijn","aeiklnt","agilnop","abcklmn"]), [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1], 'Test 22');
test(findNumOfValidWords(["abcdef","bcdefg","cdefgh","defghi","efghij","fghijk","ghijkl","hijklm"], ["abcdefg","bcdefgh","cdefghi","defghij","efghijk","fghijkl","ghijklm","hijklmn"]), [1, 1, 1, 1, 1, 1, 1, 1], 'Test 23');
test(findNumOfValidWords(["abcdefgh","ijklmnop","qrstuvwx","yzabcdef","mnopqrst","vwxyzabc","defghijk","lmnopqrs","tuvwxyz","abcdeefg"], ["aaaabbbb","ccccdddd","eeeeffff","ggggghhh","iiiijjjj","kkkkllll","mmmmnnnn","oooooooo","pppppppp","qqqqqqqq","rrrrrrrr","ssssssss","tttttttt","uuuuuuuu","vvvvvvvv","wwwwwwww","xxxxxxxx","yyyyyyyy","zzzzzzzz"]), [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 'Test 24');
test(findNumOfValidWords(["aabbcc","bbccdd","ccddeeff","ddeeffgg","effgghhi","ffgghhii","gghhiijj","hhiijjkk"], ["abcdefgh","hgfedcba","ijklmnop","ponmlkj","efghijkl","ghijklmn","opqrstuv","wzyxvutsr"]), [1, 0, 0, 0, 1, 1, 0, 0], 'Test 25');
test(findNumOfValidWords(["programming","python","java","javascript","ruby","csharp","swift","go","kotlin","typescript","scala","rust","perl","racket","elixir","haskell","erlang","fortran","cobol","pascal","ada","lisp","scheme","clojure","prolog","scheme","lisp","prolog","tcl","lua","d","vba","actionscript","haxe","fsharp","objective","c","c++","matlab"], ["programming","pythonic","javajam","scriptable","rubyric","sharpness","swiftboat","golang","kotlinlove","types","scala","rusty","perl","racketeer","elixiric","haskellholic","erlango","fortran","cobold","pascal","ada","lisp","schematics","clojure","prologue","lispic","prolog","tcl","lua","diamond","vba","action","haxe","fsharp","objectivec","cc","cpp","matlab"]), Error: negative shift count, 'Test 26');
test(findNumOfValidWords(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"], ["abcdefg","hijklmn","opqrstu","vwxyzab","cdefghi","jklmnop","qrstuvw","xyzabcd","efghijk","lmnopqr","stuvxyz","abcdefghi","jklmnopqr","stuvwxyz","abcdefghijklmnop","qrstuvwxyzabc","defghijklmn","opqrstuvwxy","zabcdefghij","klmnopqrstu","vwxyzabcde","fghijklmnop","ghijklmnopq","ijklmnopqr","jklmnopqrs","klmnopqrst","mnopqrstu","nopqrstuv","opqrstuvw","pqrsuvwxy","qrstuvxyz","rstuvwxyz","stuvwxyz","tuvwxyz","uvwxyz","vwxyz","wxyz","xyz","yz","z"]), [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 'Test 27');
test(findNumOfValidWords(["small","larger","largest","tiny","little","biggest"], ["smallest","largestp","tinyabc","littlezyx","biggestuvw","smallxyz"]), [1, 2, 1, 1, 1, 1], 'Test 28');
test(findNumOfValidWords(["algorithm","backpack","calculator","database","encoder","firewall","government","hierarchy","identifier","jungle","kangaroo","lemonade","molecule","narrative","occasion","printer","queue","rabbit","snapshot","treatment","umbrella","vaccinate","wonderful","xylophone","yield","zoo"], ["acdeinor","bfjkpstu","aghlmopt","cddegkln","egilnoqs","fhiklmpr","ajnpqrsv","bcdghstv","adeikmou","bcfgimnp"]), [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 'Test 29');
test(findNumOfValidWords(["quick","brown","fox","jumps","over","lazy","dogs"], ["quickbz","brownxz","foxgjkl","jumpsxz","overmnp","lazyuvw","dogswyz"]), [1, 1, 1, 1, 1, 1, 1], 'Test 30');
test(findNumOfValidWords(["aaa","bbb","ccc","ddd","eee","fff","ggg","hhh","iii","jjj","kkk","lll","mmm","nnn","ooo","ppp","qqq","rrr","sss","ttt","uuu","vvv","www","xxx","yyy","zzz"], ["abcdefgh","ijklmnop","qrstuvwx","yzabcdef","mnopqrst","vwxyzabc","defghijk","lmnopqrs","tuvwxyz","abcdeefg"]), [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 'Test 31');
test(findNumOfValidWords(["abcdefgh","efghijkl","ijklmnop","mnopqrst","opqrstuv","qrstuvwx","stuvwxyz","vwxyzabc","wxyzabcd","xyzabcde","yzabcdef","abcdefgh","ijklmnop","qrstuvwx","wxyzabcd"], ["abcdefghijkl","mnopqrstuv","qrstuvwxy","stuvwxyzab","vwxyzabcde","wxyzabcdef","xyzabcdefg","yzabcdefgh","zabcdefghi","abcdefghij","bcdefghijk","cdefghijkl","defghijklm","efghijklmn","fghijklmno","ghijklmnop","hijklmnopq","ijklmnopqr","jklmnopqrs","klmnopqrst","lmnopqrstu","mnopqrstuv","nopqrstuvw","opqrstuvwx","pqrstuvwxy","qrstuvwx","rstuvwxy","stuvwxyz","tuvwxyz","uvwxyz","vwxyz","wxyz","xyz","yz","z"]), [2, 1, 2, 1, 1, 2, 1, 1, 0, 2, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 1, 0, 1, 0, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0], 'Test 32');
test(findNumOfValidWords(["alphabet","apricot","banana","character","date","elderberry","fig","grape","honeydew"], ["abcdefgh","bdegijkm","aehlstu","cfimnpr","dgoqrsv","fhiklmt","ajnoprt","bgpqwxyz"]), [0, 0, 0, 0, 0, 0, 0, 0], 'Test 33');
test(findNumOfValidWords(["apple","apricot","banana","berry","blueberry","grape","orange","peach","pear","pineapple","plum","raspberry","strawberry"], ["abcde","fghij","klmno","pqrst","uvwxy","zabcde","efghij","klmnop","qrstuv","vwxyz","abcdefg","hijklmnop","qrstuvwxy"]), [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 'Test 34');
test(findNumOfValidWords(["programming","puzzle","valid","word","condition","satisfied","contain","letter","each","given","example","explained","characters","repeated","wordlist","respect","array","answer","number","words","validity","requirements","constraint","solution","algorithm","datastructure","python","java","cpp","ruby","javascript"], ["rogrammping","zlepuz","dlivav","drwo","noitcnidio","tdiatseifas","naicton","ttelr","aech","nevig","elpmaxe","dnaiexpleid","srcahracter","tepreprea","ltsidrowd","ectspor","yarra","srnaa","mrubov","noitpircsaj","vaftsiw","ogp","tsur","perl","alcas","niltok","lleksah","tpircsavaj","tekcarr","ual","gnerl","xirele","ailuj","lboc"]), [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0], 'Test 35');
test(findNumOfValidWords(["abcdefg","hijklmnop","qrstuvwxyz"], ["abcdefg","hijklmnop","qrstuvwxyz","mnopqrstuvw","abcdefgxyz"]), [1, 1, 1, 0, 1], 'Test 36');
test(findNumOfValidWords(["leetcode","contest","coding","challenges"], ["leetcodez","contestx","codingv","challengesm"]), [1, 1, 1, 1], 'Test 37');
test(findNumOfValidWords(["abcdefghijklmnopqrstuvwxyz","zyxwvutsrqponmlkjihgfedcba","abcdefgh","ijklmnop","qrstuvwx","yzabcdef"], ["abcdefghijklmnopqrstuvwxyz","zyxwvutsrqponmlkjihgfedcba","abcdefgh","ijklmnop","qrstuvwx","yzabcdef"]), Execution timed out, 'Test 38');
test(findNumOfValidWords(["aabbcc","bbaacc","ccddaa","aabbdd","bbccdd","aaccbb","aaddee","bbffee","ccddee","ddeeff","aabb","bbcc","ccdd","aadd","bbeeff","ddeegg"], ["abcdeff","aabbbcc","ccdddee","bbffeea","ddeeggh","ffggggg","aabbccc","dddeeff","aabbccf","aabbbcc","aacceeg","bbddeee","cdddeee","ddeeffe","eefffgg","bbbeeee"]), [8, 4, 2, 3, 1, 0, 4, 1, 4, 4, 0, 0, 2, 1, 0, 0], 'Test 39');
test(findNumOfValidWords(["puzzle","word","game","challenge","dictionary","trivia","clue"], ["elpuzs","drow","emag","nllgcahe","arnidcwoy","arvit","ucl"]), [1, 1, 1, 1, 0, 1, 0], 'Test 40');
test(findNumOfValidWords(["algorithm","datastructure","binarysearch","hashmap"], ["agrthmo","dtaustruc","binaryzse","hashmpq"]), [0, 0, 0, 1], 'Test 41');
test(findNumOfValidWords(["abcdefgh","ijklmnop","qrstuvwx","yzabcdef"], ["abcdefgh","ijklmnop","qrstuvwx","yzabcdef"]), [1, 1, 1, 1], 'Test 42');
test(findNumOfValidWords(["algorithm","datastructure","programming","python","java","csharp"], ["adphgrm","lstcrud","gyproam","nohtyp","avaj","rphscwa"]), [0, 0, 0, 1, 1, 1], 'Test 43');
test(findNumOfValidWords(["a","aa","aaa","aaaa","aaaaa"], ["a","aa","aaa","aaaa","aaaaa"]), [5, 5, 5, 5, 5], 'Test 44');
test(findNumOfValidWords(["aaaa","asas","able","ability","actt","actor","access","zzzz","zzzzz","zzzzzz"], ["aboveyz","abrodyz","abslute","absoryz","actresz","gaswxyz","zzzzzzy","zzzzzzz","zzzzzz","zzzzz"]), [1, 1, 3, 2, 4, 0, 3, 3, 3, 3], 'Test 45');
test(findNumOfValidWords(["unique","words","only","once"], ["uniqwxyz","wordpqr","onlyzxcv","oncevbnm"]), [0, 0, 1, 1], 'Test 46');
test(findNumOfValidWords(["apple","banana","cherry","date","elderberry","fig","grape"], ["plea","anab","rehcyr","ated","rielderby","gfi","erap"]), [1, 1, 1, 1, 1, 1, 0], 'Test 47');
test(findNumOfValidWords(["aaaaa","abcde","fghij","klmno","pqrst","uvwxy","zabcd","efghi","jklmn","opqrs","tuvwx","yzabc"], ["abcdefgh","ijklmnop","qrstuvwx","yzabcdef","ghijklmn","opqrstuv","wxyzabcd","efghijkl","mnopqrst","uvwxabcd","yzmnopqr","abcdefgh"]), [2, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 2], 'Test 48');
test(findNumOfValidWords(["aabbcc","bbaacc","ccaabb","abbcdd","ddeebf","ffgghh","iiijjk","kkllmm","nnoopp","qqrstu","vwxyzw","abcdefg","hijklmn","opqrstu","vwxyzab"], ["abcdefg","hijklmn","opqrstu","vwxyzab","bcdefgh","cdefghi","defghij","efghijk","fghijkl","ghijklm","hijklmn","ijklmno","jklmnop","klmnopq","lmnopqr","mnopqrs","nopqrst","opqrstu","pqrstuv","qrstuvw","rstuvwx","stuvwxy","tuvwxyz","uvwxyzx","vwxyzwy"]), [5, 1, 1, 2, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1], 'Test 49');
test(findNumOfValidWords(["optimization","performance","complexity","computation","algorithm","graph","network"], ["optimiz","perforanc","complex","compute","algorit","graphno","network"]), [0, 0, 0, 0, 0, 1, 1], 'Test 50');
test(findNumOfValidWords(["python","java","javascript","csharp","ruby","swift","go","kotlin","typescript","scala"], ["japvoty","pryanst","thcykop","itvslgo","khpscrw","gytrskf","sptiygo","otpsrga","ksvcrtp","dgipyst"]), [1, 0, 0, 0, 0, 0, 0, 1, 0, 0], 'Test 51');
test(findNumOfValidWords(["zebra","elephant","giraffe","hippopotamus","kangaroo","koala","panda","penguin","rhinoceros","sloth","tiger","wombat"], ["zebraele","elephantg","giraffehi","hippopota","kangaroop","koalapd","pandarh","penguinr","rhinocerosl","slothti","tigerwo","wombatze"]), [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1], 'Test 52');
test(findNumOfValidWords(["qwertyuiop","asdfghjklz","xcvbnm","python","java","csharp","javascript","html","css"], ["qwertyui","asdfghjk","zxcvbnmq","pythonj","javabc","csharpx","javascriptz","htmlc","cssd"]), [0, 0, 0, 1, 1, 2, 2, 1, 1], 'Test 53');
test(findNumOfValidWords(["a","ab","abc","abcd","abcde","abcdef","abcdefg","abcdefgh","abcdefghi","abcdefghij","abcdefghijk","abcdefghijkl","abcdefghijklm","abcdefghijklmn"], ["abcdefghijkl","ijklmnopqr","mnopqrstuvwx","nopqrstuvwxy","opqrstuvwxy","pqrstuvwxy","qrstuvwxyzab","rstuvwxy","stuvwxyz","tuvwxyz","uvwxyz","vwxyz","wxyz","xyz","yz","z"]), [12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 'Test 54');
test(findNumOfValidWords(["algorithm","data","structure","binary","tree","graph","queue","stack"], ["dabtr","qagtr","stgfa","gihrq","pholm","thrue","qrtha"]), [1, 0, 0, 0, 0, 1, 0], 'Test 55');
test(findNumOfValidWords(["aaaaab","bbbbb","ccccc","ddddd","eeeee","fffff","ggggg"], ["abccccd","bccdde","ccdee","ddeeef","eeefff","fffggg","gggggh"]), [1, 1, 1, 1, 1, 1, 1], 'Test 56');
test(findNumOfValidWords(["algorithm","data","structure","binary","tree","graph","queue","stack","hashmap","trie","heap","array","linkedlist","hashset","deque","priorityqueue","bloomfilter","bitmask","segmenttree","binarysearchtree"], ["hsdcafr","gimnhpt","qertabc","xylotzp","qexhtab","qabctrs","dhracgp","fgihmpr","afbnmpt","bcdehmp"]), [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 'Test 57');
test(findNumOfValidWords(["ability","actt","actor","access","apple","pleas","please","zzzz","zzyz","zzx","zzy","zzzzz"], ["aboveyz","abrodyz","abslute","absoryz","actresz","gaswxyz","zzzzzzz","zzzzzzy","zzzzzzy","zzzzzzx","zzzzzzy","zzzzzzz"]), [0, 0, 0, 0, 2, 0, 2, 4, 4, 3, 4, 2], 'Test 58');
test(findNumOfValidWords(["a","aa","aaa","aaaa","ab","abc","abcd","abcde","abcdef","abcdefg"], ["abcdefg","bagfedc","cagfedb","bcadefg","abcgfed","gfedcba","agfedcb","bagfedc","cagfedb","bcadefg","abcgfed","gfedcba","agfedcb","bagfedc","cagfedb","bcadefg","abcgfed","gfedcba","agfedcb","bagfedc","cagfedb","bcadefg","abcgfed","gfedcba","agfedcb","bagfedc","cagfedb"]), [10, 6, 5, 6, 10, 1, 10, 6, 5, 6, 10, 1, 10, 6, 5, 6, 10, 1, 10, 6, 5, 6, 10, 1, 10, 6, 5], 'Test 59');
test(findNumOfValidWords(["abcdef","abcdefg","bcdefg","cdefgh","defghi","efghij","fghijk","ghijkl"], ["abcdefgh","bcdefghi","cdefghij","defghijk","efghijkl","fghijklm","ghijklmn"]), [2, 1, 1, 1, 1, 1, 1], 'Test 60');
test(findNumOfValidWords(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"], ["abcdefg","hijklmn","opqrstu","vwxyzab","cdefghi","jklmnop","qrstuvi","wxyzabc","defghij","klmnopq","rstuvwx","yzabcde","fghijkl","mnopqrs","tuvwxy","xyzabcd","ghijklm","nopqrst","stuvwxy","tuvwxya","uvwxyab","vwxyzabc","wxyzabcd","xyzabcde"]), [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 'Test 61');
test(findNumOfValidWords(["xylophone","wonderful","algorithm","backpack","calculator","database","encoder","firewall","government","hierarchy","identifier","jungle","kangaroo","lemonade","molecule","narrative","occasion","printer","queue","rabbit","snapshot","treatment","umbrella","vaccinate","yield","zoo"], ["zxylophon","wonderfll","algorithm","bacpack","calcutor","datbase","enconder","frwall","govrnment","hierchy","idenfitier","jngl","kngroo","lmndade","mclucule","nrrtive","oacasion","printer","queue","rabbit","snapshot","tratment","umbrlla","vcninate","yeld","zoo"]), [1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1], 'Test 62');
test(findNumOfValidWords(["abcdefgh","bcdefgha","cdefghab","defghabc","efghabcd","fghabcde","ghabcdef","habcdefg"], ["abcdefgh","ghfedcba","bagfedch","cbaghfed","dcbagfhe","edcbaghf","fedcbagh","gfedcbah"]), [8, 8, 8, 8, 8, 8, 8, 8], 'Test 63');
test(findNumOfValidWords(["abc","bcd","cde","def","efg","fgh","ghi","hij","ijk","jkl","klm","lmn","mno","nop","opq","pqr","qrs","rst","stu","tuv","uvw","vwx","wxy","xyz"], ["abcdef","bcdefg","cdefgh","defghi","efghij","fghijk","ghijkl","hijklm","ijklmn","jklmno","klmnop","lmnopq","mnopqr","nopqrs","opqrst","pqrstu","qrstuv","rstuvw","stuvwx","tuvwxy","uvwxy","vwxyz","wxyz","xyz"]), [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 'Test 64');
test(findNumOfValidWords(["hello","world","python","programming"], ["hellozp","dlrowxy","thonpqr","grammxyz"]), [1, 1, 0, 0], 'Test 65');
test(findNumOfValidWords(["aabbcc","abcde","xyz","mnopqr","stuv","wxyz","abcdefgh","ijklmnop","qrstuv","vwxyz"], ["abcdefgh","hgfedcba","ijklmnop","ponmlkji","qrstuv","vutsrq","wxyz","zyxw","mnopqrs","tuvwxyz"]), [3, 1, 1, 1, 1, 2, 1, 2, 1, 0], 'Test 66');
test(findNumOfValidWords(["python","java","cpp","ruby","javascript","swift","go","rust","perl","scala","kotlin","haskell","typescript","racket","lua","fortran","erlang","elixir","julia","cobol"], ["ypthon","avaj","ppc","ybur","vtpircsaj","tfwsi","og","tsur","lerp","alcas","niltok","lleksah","tpircsavaj","tekcarr","ual","gnerl","xirele","ailuj","lboc"]), Error: ord[] expected a character, but string of length 6 found, 'Test 67');
test(findNumOfValidWords(["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa"], ["aabcdef","aabbcde","aaccdde","aadddee","aaeefgg","aaffggg","aaggghh"]), [7, 7, 7, 7, 7, 7, 7], 'Test 68');
test(findNumOfValidWords(["abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh"], ["abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh","abcdefgh"]), [33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33], 'Test 69');
test(findNumOfValidWords(["algorithm","data","structure","binary","search","tree"], ["abcdert","datastr","binsear","algorithm"]), [1, 1, 0, 1], 'Test 70');
test(findNumOfValidWords(["programming","coding","debugging","optimization","compilation","execution","interpretation","software"], ["cpdibqr","gingqru","eohpamg","spgroit","qtoadfn","hpramgi","ironsgd","digspqr"]), [0, 0, 0, 0, 0, 0, 0, 0], 'Test 71');

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
