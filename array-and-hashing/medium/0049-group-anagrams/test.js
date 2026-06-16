// Test: 49. Group Anagrams
// 69 test cases from LeetCodeDataset
// Run: node test.js

const { groupAnagrams } = require("./solution");

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

console.log("\n49. Group Anagrams\n");

test(groupAnagrams(["a","b","c","d","e"]), [['a'], ['b'], ['c'], ['d'], ['e']], 'Test 1');
test(groupAnagrams(["abc","bca","cab","xyz","zyx","yxz"]), [['abc', 'bca', 'cab'], ['xyz', 'zyx', 'yxz']], 'Test 2');
test(groupAnagrams(["abc","def","ghi","jkl"]), [['abc'], ['def'], ['ghi'], ['jkl']], 'Test 3');
test(groupAnagrams(["abc","acb","bac","bca","cab","cba"]), [['abc', 'acb', 'bac', 'bca', 'cab', 'cba']], 'Test 4');
test(groupAnagrams(["eat","tea","tan","ate","nat","bat"]), [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']], 'Test 5');
test(groupAnagrams(["listen","silent","enlist"]), [['listen', 'silent', 'enlist']], 'Test 6');
test(groupAnagrams(["a"]), [['a']], 'Test 7');
test(groupAnagrams(["aabb","bbaa","abab","baab","baba","abba","aaaa","bbbb"]), [['aabb', 'bbaa', 'abab', 'baab', 'baba', 'abba'], ['aaaa'], ['bbbb']], 'Test 8');
test(groupAnagrams(["listen","silent","enlist","google","gooegl"]), [['listen', 'silent', 'enlist'], ['google', 'gooegl']], 'Test 9');
test(groupAnagrams(["listen","silent","enlist","google","gooegl","rat","tar","art"]), [['listen', 'silent', 'enlist'], ['google', 'gooegl'], ['rat', 'tar', 'art']], 'Test 10');
test(groupAnagrams(["abc","bac","cab","bca","acb","cba"]), [['abc', 'bac', 'cab', 'bca', 'acb', 'cba']], 'Test 11');
test(groupAnagrams(["dormitory","dirtyroom","conversation","voicesranton","listen","silent"]), [['dormitory', 'dirtyroom'], ['conversation', 'voicesranton'], ['listen', 'silent']], 'Test 12');
test(groupAnagrams(["a","b","c","d","e","f","g","h","i","j"]), [['a'], ['b'], ['c'], ['d'], ['e'], ['f'], ['g'], ['h'], ['i'], ['j']], 'Test 13');
test(groupAnagrams(["hello","world","hold","olelh","dlrow","owrld"]), [['hello', 'olelh'], ['world', 'dlrow', 'owrld'], ['hold']], 'Test 14');
test(groupAnagrams(["dormitory","dirtyroom","conversation","voicesranton","schoolmaster","theclassroom"]), [['dormitory', 'dirtyroom'], ['conversation', 'voicesranton'], ['schoolmaster', 'theclassroom']], 'Test 15');
test(groupAnagrams(["hello","bello","olelh","world","dlrow","dlorw","droll"]), [['hello', 'olelh'], ['bello'], ['world', 'dlrow', 'dlorw'], ['droll']], 'Test 16');
test(groupAnagrams([""]), [['']], 'Test 17');
test(groupAnagrams(["abcdefghijklmnopqrstuvwxyz","zyxwvutsrqponmlkjihgfedcba","cba","bca","bac","acb","cab","abc"]), [['abcdefghijklmnopqrstuvwxyz', 'zyxwvutsrqponmlkjihgfedcba'], ['cba', 'bca', 'bac', 'acb', 'cab', 'abc']], 'Test 18');
test(groupAnagrams(["abc","abcd","abdc","bacd","badc","cabd","cadb","dcba","dcab","abcd","abdc","bacd","badc","cabd","cadb","dcba","dcab","abcd","abdc","bacd","badc","cabd","cadb","dcba","dcab"]), [['abc'], ['abcd', 'abdc', 'bacd', 'badc', 'cabd', 'cadb', 'dcba', 'dcab', 'abcd', 'abdc', 'bacd', 'badc', 'cabd', 'cadb', 'dcba', 'dcab', 'abcd', 'abdc', 'bacd', 'badc', 'cabd', 'cadb', 'dcba', 'dcab']], 'Test 19');
test(groupAnagrams(["abcdefghijklmnopqrstuvwxyz","zyxwvutsrqponmlkjihgfedcba","mnopqrstuvwxyzabcdefghijkl","qrstuvwxyzaabcdefghijklmnop","hgfedcbazyxwvutsrqponmlkjijklmnopqrstuvwxyzabcde"]), [['abcdefghijklmnopqrstuvwxyz', 'zyxwvutsrqponmlkjihgfedcba', 'mnopqrstuvwxyzabcdefghijkl'], ['qrstuvwxyzaabcdefghijklmnop'], ['hgfedcbazyxwvutsrqponmlkjijklmnopqrstuvwxyzabcde']], 'Test 20');
test(groupAnagrams(["dusty","study","night","thing","child","brink","drink","crimp","crimp","stick","smirk","smirk","smith","tinsy","stint"]), [['dusty', 'study'], ['night', 'thing'], ['child'], ['brink'], ['drink'], ['crimp', 'crimp'], ['stick'], ['smirk', 'smirk'], ['smith'], ['tinsy'], ['stint']], 'Test 21');
test(groupAnagrams(["aabb","abab","baba","baab","abba","bbaa","aabb","abab","baba","baab","abba","bbaa"]), [['aabb', 'abab', 'baba', 'baab', 'abba', 'bbaa', 'aabb', 'abab', 'baba', 'baab', 'abba', 'bbaa']], 'Test 22');
test(groupAnagrams(["apple","pepal","ppale","pplea","ppela","elppa","ppael","palpe","ppale","pplea","ppela","elppa","ppael","palpe","appel","ppale","pplea","ppela","elppa","ppael","palpe","ppale","pplea","ppela","elppa","ppael","palpe"]), [['apple', 'pepal', 'ppale', 'pplea', 'ppela', 'elppa', 'ppael', 'palpe', 'ppale', 'pplea', 'ppela', 'elppa', 'ppael', 'palpe', 'appel', 'ppale', 'pplea', 'ppela', 'elppa', 'ppael', 'palpe', 'ppale', 'pplea', 'ppela', 'elppa', 'ppael', 'palpe']], 'Test 23');
test(groupAnagrams(["dusty","study","night","thing","delta","tigon","state","taste","date","rated"]), [['dusty', 'study'], ['night', 'thing'], ['delta'], ['tigon'], ['state', 'taste'], ['date'], ['rated']], 'Test 24');
test(groupAnagrams(["aabbcc","abcabc","baccab","acbbac","cabbaa","aabbcc","abcabc"]), [['aabbcc', 'abcabc', 'baccab', 'acbbac', 'aabbcc', 'abcabc'], ['cabbaa']], 'Test 25');
test(groupAnagrams(["rat","car","tar","arc","cat","tac","act","rat","car","tar","arc","cat","tac","act"]), [['rat', 'tar', 'rat', 'tar'], ['car', 'arc', 'car', 'arc'], ['cat', 'tac', 'act', 'cat', 'tac', 'act']], 'Test 26');
test(groupAnagrams(["aabbcc","abcabc","bcaabc","cababc","aabbcc","ccbaab","abcabc","baccab","bacabc","cababc","abcabc"]), [['aabbcc', 'abcabc', 'bcaabc', 'cababc', 'aabbcc', 'ccbaab', 'abcabc', 'baccab', 'bacabc', 'cababc', 'abcabc']], 'Test 27');
test(groupAnagrams(["aabb","abab","bbaa","abba","baab","aaba","baba","bbba","baaa","aaaa","bbbb"]), [['aabb', 'abab', 'bbaa', 'abba', 'baab', 'baba'], ['aaba', 'baaa'], ['bbba'], ['aaaa'], ['bbbb']], 'Test 28');
test(groupAnagrams(["ab","ba","ac","ca","ad","da","bc","cb","ef","fe","gh","hg","ij","ji","kl","lk","mnop","nopm","opmn","pmno","qrst","srqt","tqrs","qrst","stqr","qrstuv","rstquv","tsrquv","uvqrst","vqrstu","wxyz","xyzw","yzwx","zwxy"]), [['ab', 'ba'], ['ac', 'ca'], ['ad', 'da'], ['bc', 'cb'], ['ef', 'fe'], ['gh', 'hg'], ['ij', 'ji'], ['kl', 'lk'], ['mnop', 'nopm', 'opmn', 'pmno'], ['qrst', 'srqt', 'tqrs', 'qrst', 'stqr'], ['qrstuv', 'rstquv', 'tsrquv', 'uvqrst', 'vqrstu'], ['wxyz', 'xyzw', 'yzwx', 'zwxy']], 'Test 29');
test(groupAnagrams(["listen","silent","enlist","google","gooegl","rat","tar","art","arc","car","arc"]), [['listen', 'silent', 'enlist'], ['google', 'gooegl'], ['rat', 'tar', 'art'], ['arc', 'car', 'arc']], 'Test 30');
test(groupAnagrams(["listen","silent","enlist","google","gooegl","abc","cab","bac","bca","acb","cba"]), [['listen', 'silent', 'enlist'], ['google', 'gooegl'], ['abc', 'cab', 'bac', 'bca', 'acb', 'cba']], 'Test 31');
test(groupAnagrams(["zzzz","zazaz","zzzzz","zz","z","za","az","zzzz","zazaz","zzzzz","zz","z","za","az"]), [['zzzz', 'zzzz'], ['zazaz', 'zazaz'], ['zzzzz', 'zzzzz'], ['zz', 'zz'], ['z', 'z'], ['za', 'az', 'za', 'az']], 'Test 32');
test(groupAnagrams(["aabb","bbaa","abab","abba","baab","baba","aaaa","bbbb","aabbcc","ccbaab","aabbc","abbac","abc","acb","bac","bca","cab","cba","zzz","zzzz","zzzzz"]), [['aabb', 'bbaa', 'abab', 'abba', 'baab', 'baba'], ['aaaa'], ['bbbb'], ['aabbcc', 'ccbaab'], ['aabbc', 'abbac'], ['abc', 'acb', 'bac', 'bca', 'cab', 'cba'], ['zzz'], ['zzzz'], ['zzzzz']], 'Test 33');
test(groupAnagrams(["aabbcc","abcabc","bcaabc","cababc","aabbcc","ccbaab","abcabc","baccab","bacabc","cababc","abcabc","xyz","zyx","yzx","zyx","xyz","yzx","zyx","xyz","zyx","yzx","zyx","xyz","yzx","zyx","xyz","zyx","yzx","zyx","xyz","yzx","zyx","xyz"]), [['aabbcc', 'abcabc', 'bcaabc', 'cababc', 'aabbcc', 'ccbaab', 'abcabc', 'baccab', 'bacabc', 'cababc', 'abcabc'], ['xyz', 'zyx', 'yzx', 'zyx', 'xyz', 'yzx', 'zyx', 'xyz', 'zyx', 'yzx', 'zyx', 'xyz', 'yzx', 'zyx', 'xyz', 'zyx', 'yzx', 'zyx', 'xyz', 'yzx', 'zyx', 'xyz']], 'Test 34');
test(groupAnagrams(["python","typhon","hypton","pythno","ypthon","thypno","hypnot","hypnotize","notphyno","nothpyin"," hypnot","hypnotic","hypnothize","hypnothise","notthpyin","pythonic","typhonian","pythongod","hypno","hypnosis","hypnotherapy","hypnagogia","hypnoid"]), [['python', 'typhon', 'hypton', 'pythno', 'ypthon', 'thypno', 'hypnot'], ['hypnotize'], ['notphyno'], ['nothpyin'], [' hypnot'], ['hypnotic', 'pythonic'], ['hypnothize'], ['hypnothise'], ['notthpyin'], ['typhonian'], ['pythongod'], ['hypno'], ['hypnosis'], ['hypnotherapy'], ['hypnagogia'], ['hypnoid']], 'Test 35');
test(groupAnagrams(["abcde","edcba","bcdea","decba","bacde","cabde","eabcd","acbde","dbcea","adbce"]), [['abcde', 'edcba', 'bcdea', 'decba', 'bacde', 'cabde', 'eabcd', 'acbde', 'dbcea', 'adbce']], 'Test 36');
test(groupAnagrams(["abcde","edcba","bcdea","decba","edbac","acbed","abcde","edcba","bcdea","decba","edbac","acbed","abcde","edcba","bcdea","decba","edbac","acbed","abcde","edcba","bcdea","decba","edbac","acbed","abcde","edcba","bcdea","decba","edbac","acbed","abcde","edcba","bcdea","decba","edbac","acbed"]), [['abcde', 'edcba', 'bcdea', 'decba', 'edbac', 'acbed', 'abcde', 'edcba', 'bcdea', 'decba', 'edbac', 'acbed', 'abcde', 'edcba', 'bcdea', 'decba', 'edbac', 'acbed', 'abcde', 'edcba', 'bcdea', 'decba', 'edbac', 'acbed', 'abcde', 'edcba', 'bcdea', 'decba', 'edbac', 'acbed', 'abcde', 'edcba', 'bcdea', 'decba', 'edbac', 'acbed']], 'Test 37');
test(groupAnagrams(["abcd","dcba","adbc","cbad","abcd","bcda","abcd","dcba","adbc","cbad","abcd","bcda","abcd","dcba","adbc","cbad","abcd","bcda","abcd","dcba"]), [['abcd', 'dcba', 'adbc', 'cbad', 'abcd', 'bcda', 'abcd', 'dcba', 'adbc', 'cbad', 'abcd', 'bcda', 'abcd', 'dcba', 'adbc', 'cbad', 'abcd', 'bcda', 'abcd', 'dcba']], 'Test 38');
test(groupAnagrams(["abcd","dcba","cabd","badc","dacb","cdab","bcad","bcda","acbd","cadb","acdb","abdc"]), [['abcd', 'dcba', 'cabd', 'badc', 'dacb', 'cdab', 'bcad', 'bcda', 'acbd', 'cadb', 'acdb', 'abdc']], 'Test 39');
test(groupAnagrams(["dormitory","dirtyroom","listen","silent","enlist","google","gooegl","abc","cab","bac","bca","acb","cba","zzz","zzzz","zzzzz","zzzzzz"]), [['dormitory', 'dirtyroom'], ['listen', 'silent', 'enlist'], ['google', 'gooegl'], ['abc', 'cab', 'bac', 'bca', 'acb', 'cba'], ['zzz'], ['zzzz'], ['zzzzz'], ['zzzzzz']], 'Test 40');
test(groupAnagrams(["abcd","dcba","abcd","cdab","bdac","cabd","bacd","abcd","dcba","abcd"]), [['abcd', 'dcba', 'abcd', 'cdab', 'bdac', 'cabd', 'bacd', 'abcd', 'dcba', 'abcd']], 'Test 41');
test(groupAnagrams(["aabb","abab","bbaa","abba","aaaa","aaab","baaa","baba","abba","aabb","abab","bbaa","aaaa"]), [['aabb', 'abab', 'bbaa', 'abba', 'baba', 'abba', 'aabb', 'abab', 'bbaa'], ['aaaa', 'aaaa'], ['aaab', 'baaa']], 'Test 42');
test(groupAnagrams(["abcd","dcba","adcb","cbad","bdac","cabd","bacd","acbd","dbca","bcad","cadb","abcd","dcba","adcb","cbad","bdac","cabd","bacd","acbd","dbca","bcad","cadb","abcd","dcba","adcb","cbad","bdac","cabd","bacd","acbd","dbca","bcad","cadb","abcd","dcba","adcb","cbad","bdac","cabd","bacd","acbd","dbca","bcad","cadb"]), [['abcd', 'dcba', 'adcb', 'cbad', 'bdac', 'cabd', 'bacd', 'acbd', 'dbca', 'bcad', 'cadb', 'abcd', 'dcba', 'adcb', 'cbad', 'bdac', 'cabd', 'bacd', 'acbd', 'dbca', 'bcad', 'cadb', 'abcd', 'dcba', 'adcb', 'cbad', 'bdac', 'cabd', 'bacd', 'acbd', 'dbca', 'bcad', 'cadb', 'abcd', 'dcba', 'adcb', 'cbad', 'bdac', 'cabd', 'bacd', 'acbd', 'dbca', 'bcad', 'cadb']], 'Test 43');
test(groupAnagrams(["anagram","nagaram","margana","anagrama","anagram","anagram","granama","nagaramm"]), [['anagram', 'nagaram', 'margana', 'anagram', 'anagram', 'granama'], ['anagrama'], ['nagaramm']], 'Test 44');
test(groupAnagrams(["aaa","bbb","ccc","aaa","bbb","ccc","aaa","bbb","ccc","aaa","bbb","ccc","aaa","bbb","ccc","aaa","bbb","ccc","aaa","bbb","ccc","aaa","bbb","ccc"]), [['aaa', 'aaa', 'aaa', 'aaa', 'aaa', 'aaa', 'aaa', 'aaa'], ['bbb', 'bbb', 'bbb', 'bbb', 'bbb', 'bbb', 'bbb', 'bbb'], ['ccc', 'ccc', 'ccc', 'ccc', 'ccc', 'ccc', 'ccc', 'ccc']], 'Test 45');
test(groupAnagrams(["aabb","bbaa","abab","baba","abba","baab","abc","bac","bca","acb","cba","zzz","zzzz","zzzzz","zzzzzz","zzzzzzz","zzzzzzzz","zzzzzzzzz"]), [['aabb', 'bbaa', 'abab', 'baba', 'abba', 'baab'], ['abc', 'bac', 'bca', 'acb', 'cba'], ['zzz'], ['zzzz'], ['zzzzz'], ['zzzzzz'], ['zzzzzzz'], ['zzzzzzzz'], ['zzzzzzzzz']], 'Test 46');
test(groupAnagrams(["dusty","study","night","thing","gnhit","inthe","night","thing","night","thing","night"]), [['dusty', 'study'], ['night', 'thing', 'gnhit', 'night', 'thing', 'night', 'thing', 'night'], ['inthe']], 'Test 47');
test(groupAnagrams(["aabbcc","abcabc","bcaacb","cababc","bcacab","bacbac","aabbcc","aabbcc","aabcbc","bcaabc","abacbc","babcac","abcabc","bcaacb","cababc","bcacab","bacbac","aabbcc","aabbcc","aabcbc","bcaabc","abacbc","babcac","abcabc","bcaacb","cababc","bcacab","bacbac","aabbcc","aabbcc","aabcbc","bcaabc","abacbc","babcac","abcabc","bcaacb","cababc","bcacab","bacbac","aabbcc","aabbcc","aabcbc","bcaabc","abacbc","babcac"]), [['aabbcc', 'abcabc', 'bcaacb', 'cababc', 'bcacab', 'bacbac', 'aabbcc', 'aabbcc', 'aabcbc', 'bcaabc', 'abacbc', 'babcac', 'abcabc', 'bcaacb', 'cababc', 'bcacab', 'bacbac', 'aabbcc', 'aabbcc', 'aabcbc', 'bcaabc', 'abacbc', 'babcac', 'abcabc', 'bcaacb', 'cababc', 'bcacab', 'bacbac', 'aabbcc', 'aabbcc', 'aabcbc', 'bcaabc', 'abacbc', 'babcac', 'abcabc', 'bcaacb', 'cababc', 'bcacab', 'bacbac', 'aabbcc', 'aabbcc', 'aabcbc', 'bcaabc', 'abacbc', 'babcac']], 'Test 48');
test(groupAnagrams(["aabbcc","abcabc","bcaabc","cababc","abccba","acbbac","baccab","bcacab","bacbac","acbacb","bacbac","bacbac","bacbac","bacbac","bacbac"]), [['aabbcc', 'abcabc', 'bcaabc', 'cababc', 'abccba', 'acbbac', 'baccab', 'bcacab', 'bacbac', 'acbacb', 'bacbac', 'bacbac', 'bacbac', 'bacbac', 'bacbac']], 'Test 49');
test(groupAnagrams(["dusty","study","night","thing","eight","gnite","inthe","front","trofn","gnhet","gfno","gnfoe","thingo","niothg","ightn"]), [['dusty', 'study'], ['night', 'thing', 'ightn'], ['eight'], ['gnite'], ['inthe'], ['front', 'trofn'], ['gnhet'], ['gfno'], ['gnfoe'], ['thingo', 'niothg']], 'Test 50');
test(groupAnagrams(["rat","car","tar","arc","arc","rta","cat","tac","act","cta","tca","atc"]), [['rat', 'tar', 'rta'], ['car', 'arc', 'arc'], ['cat', 'tac', 'act', 'cta', 'tca', 'atc']], 'Test 51');
test(groupAnagrams(["abcde","edcba","fghij","jihgf","mnopq","qponm","rstuv","vutsr","wxyz","zyxw","aaaaa","bbbbb","ccccc","ddddd","eeeee","zzzzz"]), [['abcde', 'edcba'], ['fghij', 'jihgf'], ['mnopq', 'qponm'], ['rstuv', 'vutsr'], ['wxyz', 'zyxw'], ['aaaaa'], ['bbbbb'], ['ccccc'], ['ddddd'], ['eeeee'], ['zzzzz']], 'Test 52');
test(groupAnagrams(["listen","silent","enlist","google","gooegl","inlets","banana","anabna","xyz","zyx"]), [['listen', 'silent', 'enlist', 'inlets'], ['google', 'gooegl'], ['banana', 'anabna'], ['xyz', 'zyx']], 'Test 53');
test(groupAnagrams(["abcd","dcba","abcd","abcd","dcba","abcd","dcba","abcd","abcd"]), [['abcd', 'dcba', 'abcd', 'abcd', 'dcba', 'abcd', 'dcba', 'abcd', 'abcd']], 'Test 54');
test(groupAnagrams(["zzzz","zzz","zz","z","aaaa","aaa","aa","a","bbbb","bbb","bb","b","cccc","ccc","cc","c","dddd","ddd","dd","d","eeee","eee","ee","e"]), [['zzzz'], ['zzz'], ['zz'], ['z'], ['aaaa'], ['aaa'], ['aa'], ['a'], ['bbbb'], ['bbb'], ['bb'], ['b'], ['cccc'], ['ccc'], ['cc'], ['c'], ['dddd'], ['ddd'], ['dd'], ['d'], ['eeee'], ['eee'], ['ee'], ['e']], 'Test 55');
test(groupAnagrams(["listen","silent","enlist","google","gooegl","rat","tar","art","elbow","below"]), [['listen', 'silent', 'enlist'], ['google', 'gooegl'], ['rat', 'tar', 'art'], ['elbow', 'below']], 'Test 56');
test(groupAnagrams(["listen","silent","enlist","google","gooegl","abc","cab","bac"]), [['listen', 'silent', 'enlist'], ['google', 'gooegl'], ['abc', 'cab', 'bac']], 'Test 57');
test(groupAnagrams(["xyz","zyx","yxz","xzy","zyx","yzy","xyx","xxy","xyy","yxx","yyx","yyy","xxx"]), [['xyz', 'zyx', 'yxz', 'xzy', 'zyx'], ['yzy'], ['xyx', 'xxy', 'yxx'], ['xyy', 'yyx'], ['yyy'], ['xxx']], 'Test 58');
test(groupAnagrams(["dusty","study","night","thing","enlist","google","gogole","inlets","abc","cba","bac","zyx","xyz","xyzzyx","zyxzyx"]), [['dusty', 'study'], ['night', 'thing'], ['enlist', 'inlets'], ['google', 'gogole'], ['abc', 'cba', 'bac'], ['zyx', 'xyz'], ['xyzzyx', 'zyxzyx']], 'Test 59');
test(groupAnagrams(["hello","ohell","lohel","ollhe","elohl","","","","a","a","a","a","a"]), [['hello', 'ohell', 'lohel', 'ollhe', 'elohl'], ['', '', ''], ['a', 'a', 'a', 'a', 'a']], 'Test 60');
test(groupAnagrams(["listen","silent","enlist","google","gooegl","rat","tar","art","rom","mor","arm","rmo"]), [['listen', 'silent', 'enlist'], ['google', 'gooegl'], ['rat', 'tar', 'art'], ['rom', 'mor', 'rmo'], ['arm']], 'Test 61');
test(groupAnagrams(["aabbcc","abcabc","aabbbc","aacbbc","aabcc","abcacb","abacbc","bbaacc","abccba","bcaacb"]), [['aabbcc', 'abcabc', 'aacbbc', 'abcacb', 'abacbc', 'bbaacc', 'abccba', 'bcaacb'], ['aabbbc'], ['aabcc']], 'Test 62');
test(groupAnagrams(["listen","silent","enlist","google","gooegl","inlets","banana"]), [['listen', 'silent', 'enlist', 'inlets'], ['google', 'gooegl'], ['banana']], 'Test 63');
test(groupAnagrams(["abcde","edcba","bcdea","decab","cabed","edbac","baced","deabc","ebadc","acbed"]), [['abcde', 'edcba', 'bcdea', 'decab', 'cabed', 'edbac', 'baced', 'deabc', 'ebadc', 'acbed']], 'Test 64');
test(groupAnagrams(["abc","bcd","cab","bac","bca","cba","xyz","zyx","yxz","zy","yz","z","a","b","c"]), [['abc', 'cab', 'bac', 'bca', 'cba'], ['bcd'], ['xyz', 'zyx', 'yxz'], ['zy', 'yz'], ['z'], ['a'], ['b'], ['c']], 'Test 65');
test(groupAnagrams(["a","b","c","aa","bb","cc","aaa","bbb","ccc","aaaa","bbbb","cccc"]), [['a'], ['b'], ['c'], ['aa'], ['bb'], ['cc'], ['aaa'], ['bbb'], ['ccc'], ['aaaa'], ['bbbb'], ['cccc']], 'Test 66');
test(groupAnagrams(["dusty","study","night","thing","inhti","ytsud","ytsdu","gnith","dusty","study","night","thing","inhti","ytsud","ytsdu","gnith","dusty","study","night","thing","inhti","ytsud","ytsdu","gnith","dusty","study","night","thing","inhti","ytsud","ytsdu","gnith"]), [['dusty', 'study', 'ytsud', 'ytsdu', 'dusty', 'study', 'ytsud', 'ytsdu', 'dusty', 'study', 'ytsud', 'ytsdu', 'dusty', 'study', 'ytsud', 'ytsdu'], ['night', 'thing', 'gnith', 'night', 'thing', 'gnith', 'night', 'thing', 'gnith', 'night', 'thing', 'gnith'], ['inhti', 'inhti', 'inhti', 'inhti']], 'Test 67');
test(groupAnagrams(["ab","ba","abc","cba","bac","bca","cab","acb","abc","cba","bac","bca","cab","acb"]), [['ab', 'ba'], ['abc', 'cba', 'bac', 'bca', 'cab', 'acb', 'abc', 'cba', 'bac', 'bca', 'cab', 'acb']], 'Test 68');
test(groupAnagrams(["dusty","study","night","thing","sight","fling","tying","sting","dusty"]), [['dusty', 'study', 'dusty'], ['night', 'thing'], ['sight'], ['fling'], ['tying'], ['sting']], 'Test 69');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

