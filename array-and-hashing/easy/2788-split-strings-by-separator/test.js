// Test: 2788. Split Strings By Separator
// 139 test cases from LeetCodeDataset
// Run: node test.js

const { splitWordsBySeparator } = require("./solution");

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

console.log("\n2788. Split Strings By Separator\n");

test(splitWordsBySeparator(["no-separator"], ","), ['no-separator'], 'Test 1');
test(splitWordsBySeparator(["hello.world","foo.bar.baz"], "."), ['hello', 'world', 'foo', 'bar', 'baz'], 'Test 2');
test(splitWordsBySeparator(["test|test|test"], "|"), ['test', 'test', 'test'], 'Test 3');
test(splitWordsBySeparator(["#a#b#","c#d","e#f#g"], "#"), ['a', 'b', 'c', 'd', 'e', 'f', 'g'], 'Test 4');
test(splitWordsBySeparator(["a,b,c","d,e","f,g,h"], ","), ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], 'Test 5');
test(splitWordsBySeparator(["..."], "."), [], 'Test 6');
test(splitWordsBySeparator(["multiple,,,commas"], ","), ['multiple', 'commas'], 'Test 7');
test(splitWordsBySeparator(["@a@","b@c@d","e@f@g@h"], "@"), ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], 'Test 8');
test(splitWordsBySeparator(["no-separator-here"], "-"), ['no', 'separator', 'here'], 'Test 9');
test(splitWordsBySeparator(["|a|b|c|","d|e|f","g|h|i|j"], "|"), ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'], 'Test 10');
test(splitWordsBySeparator(["|a|b|c|d|"], "|"), ['a', 'b', 'c', 'd'], 'Test 11');
test(splitWordsBySeparator(["abc","def","ghi"], "."), ['abc', 'def', 'ghi'], 'Test 12');
test(splitWordsBySeparator(["hello.world","how.are.you"], "."), ['hello', 'world', 'how', 'are', 'you'], 'Test 13');
test(splitWordsBySeparator(["1.2.3","4.5.6.7"], "."), ['1', '2', '3', '4', '5', '6', '7'], 'Test 14');
test(splitWordsBySeparator(["test|string|data"], "|"), ['test', 'string', 'data'], 'Test 15');
test(splitWordsBySeparator([",,",",,"], ","), [], 'Test 16');
test(splitWordsBySeparator(["hello.world","example.test"], "."), ['hello', 'world', 'example', 'test'], 'Test 17');
test(splitWordsBySeparator(["#abc#","#def#","#ghi#"], "#"), ['abc', 'def', 'ghi'], 'Test 18');
test(splitWordsBySeparator(["hello.world","python.is.awesome"], "."), ['hello', 'world', 'python', 'is', 'awesome'], 'Test 19');
test(splitWordsBySeparator(["###","@#@","$#$"], "#"), ['@', '@', '$', '$'], 'Test 20');
test(splitWordsBySeparator(["hello.world","python.code"], "."), ['hello', 'world', 'python', 'code'], 'Test 21');
test(splitWordsBySeparator(["@hello@world","@foo@bar@baz"], "@"), ['hello', 'world', 'foo', 'bar', 'baz'], 'Test 22');
test(splitWordsBySeparator(["$easy$","$problem$"], "$"), ['easy', 'problem'], 'Test 23');
test(splitWordsBySeparator(["|||"], "|"), [], 'Test 24');
test(splitWordsBySeparator(["a,b,c","d,e,f","g,h"], ","), ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], 'Test 25');
test(splitWordsBySeparator(["abc","def","ghi"], ","), ['abc', 'def', 'ghi'], 'Test 26');
test(splitWordsBySeparator(["#a#b#c#"], "#"), ['a', 'b', 'c'], 'Test 27');
test(splitWordsBySeparator(["one.two.three","four.five","six"], "."), ['one', 'two', 'three', 'four', 'five', 'six'], 'Test 28');
test(splitWordsBySeparator(["a.b.c.d.e"], "."), ['a', 'b', 'c', 'd', 'e'], 'Test 29');
test(splitWordsBySeparator(["a.b.c","d.e","f"], "."), ['a', 'b', 'c', 'd', 'e', 'f'], 'Test 30');
test(splitWordsBySeparator(["same|same|same", "different|path|here"], "|"), ['same', 'same', 'same', 'different', 'path', 'here'], 'Test 31');
test(splitWordsBySeparator(["special,characters|.,|$#@|example"], "|"), ['special,characters', '.,', '$#@', 'example'], 'Test 32');
test(splitWordsBySeparator([".,.", ".a.b.", ".c.d.e."], "."), [',', 'a', 'b', 'c', 'd', 'e'], 'Test 33');
test(splitWordsBySeparator(["hello|world|foo|bar", "baz|qux|quux", "corge|grault|garply"], "|"), ['hello', 'world', 'foo', 'bar', 'baz', 'qux', 'quux', 'corge', 'grault', 'garply'], 'Test 34');
test(splitWordsBySeparator(["this$that", "and", "the$other", "thing"], "$"), ['this', 'that', 'and', 'the', 'other', 'thing'], 'Test 35');
test(splitWordsBySeparator([".a.b.c.", ".d.e.", ".f.g.h."], "."), ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], 'Test 36');
test(splitWordsBySeparator(["a.b.c.d.e","f.g","h", "i..j", "k..l..m"], "."), ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'], 'Test 37');
test(splitWordsBySeparator(["a.b.c.d", "e.f.g", "h.i"], "."), ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'], 'Test 38');
test(splitWordsBySeparator(["complex..string", "string..with..multiple..dots", "empty.."], "."), ['complex', 'string', 'string', 'with', 'multiple', 'dots', 'empty'], 'Test 39');
test(splitWordsBySeparator(["##word1##", "##word2##word3##", "word4##word5##"], "#"), ['word1', 'word2', 'word3', 'word4', 'word5'], 'Test 40');
test(splitWordsBySeparator(["1,2,3", "4,,5", ",6,"], ","), ['1', '2', '3', '4', '5', '6'], 'Test 41');
test(splitWordsBySeparator(["start|end", "middle|middle|middle", "no|change"], "|"), ['start', 'end', 'middle', 'middle', 'middle', 'no', 'change'], 'Test 42');
test(splitWordsBySeparator(["noSeparatorHere","neitherHere","orHere"], "|"), ['noSeparatorHere', 'neitherHere', 'orHere'], 'Test 43');
test(splitWordsBySeparator(["a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z"], "|"), ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'], 'Test 44');
test(splitWordsBySeparator(["|||", "||||", "|||||"], "|"), [], 'Test 45');
test(splitWordsBySeparator(["nested..dots.and||pipes","and#hashes","mixed##..|||characters"], "."), ['nested', 'dots', 'and||pipes', 'and#hashes', 'mixed##', '|||characters'], 'Test 46');
test(splitWordsBySeparator(["nested|split|.|string|example"], "|"), ['nested', 'split', '.', 'string', 'example'], 'Test 47');
test(splitWordsBySeparator(["|a||b||c|", "|d||e|", "f|||g"], "|"), ['a', 'b', 'c', 'd', 'e', 'f', 'g'], 'Test 48');
test(splitWordsBySeparator(["a|b|c", "d.e.f", "g#h#i"], "|"), ['a', 'b', 'c', 'd.e.f', 'g#h#i'], 'Test 49');
test(splitWordsBySeparator(["abc#def#ghi#jkl", "mno#pqr", "stu#vw"], "#"), ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqr', 'stu', 'vw'], 'Test 50');
test(splitWordsBySeparator(["a|b|c|d|e", "f|g|h|i", "j|k|l|m|n|o"], "|"), ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o'], 'Test 51');
test(splitWordsBySeparator(["@start@middle@end", "@multiple@parts@here", "@only@one"], "@"), ['start', 'middle', 'end', 'multiple', 'parts', 'here', 'only', 'one'], 'Test 52');
test(splitWordsBySeparator(["abc...def...ghi", "jkl...mno", "pqr...stu...vwx...yz"], "..."), ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqr', 'stu', 'vwx', 'yz'], 'Test 53');
test(splitWordsBySeparator(["one..two...three","four....five","six......"], "."), ['one', 'two', 'three', 'four', 'five', 'six'], 'Test 54');
test(splitWordsBySeparator(["abc.def.ghi","jklmno.pqr.stu","vwxyz.123.456"], "."), ['abc', 'def', 'ghi', 'jklmno', 'pqr', 'stu', 'vwxyz', '123', '456'], 'Test 55');
test(splitWordsBySeparator(["a.b.c.d.e.f.g"], "."), ['a', 'b', 'c', 'd', 'e', 'f', 'g'], 'Test 56');
test(splitWordsBySeparator(["hello###world","###foo###bar","baz###"], "###"), ['hello', 'world', 'foo', 'bar', 'baz'], 'Test 57');
test(splitWordsBySeparator(["###abc###","def###ghi","###jkl###"], "#"), ['abc', 'def', 'ghi', 'jkl'], 'Test 58');
test(splitWordsBySeparator(["|a||b|c|", "|d|e||f|", "g|h|i||j"], "|"), ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'], 'Test 59');
test(splitWordsBySeparator(["no|separator", "only|one|separator", "two|separators|here"], "|"), ['no', 'separator', 'only', 'one', 'separator', 'two', 'separators', 'here'], 'Test 60');
test(splitWordsBySeparator(["test$test$test", "$test$test", "test$$test"], "$"), ['test', 'test', 'test', 'test', 'test', 'test', 'test'], 'Test 61');
test(splitWordsBySeparator(["nested|separators|are|here", "nested|separators|again"], "|"), ['nested', 'separators', 'are', 'here', 'nested', 'separators', 'again'], 'Test 62');
test(splitWordsBySeparator(["noSeparatorHere","norHere","stillNotHere"], "."), ['noSeparatorHere', 'norHere', 'stillNotHere'], 'Test 63');
test(splitWordsBySeparator(["||||","...","####"], "|"), ['...', '####'], 'Test 64');
test(splitWordsBySeparator(["one$two$three", "four$five", "$six$"], "$"), ['one', 'two', 'three', 'four', 'five', 'six'], 'Test 65');
test(splitWordsBySeparator(["hello|world|python|programming"], "|"), ['hello', 'world', 'python', 'programming'], 'Test 66');
test(splitWordsBySeparator(["abc@def@ghi","jkl@@mno@pqr","stu@vwx@@yz"], "@"), ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqr', 'stu', 'vwx', 'yz'], 'Test 67');
test(splitWordsBySeparator(["word1@word2", "word3", "word4@word5@word6"], "@"), ['word1', 'word2', 'word3', 'word4', 'word5', 'word6'], 'Test 68');
test(splitWordsBySeparator(["example.com", "user@example.co.uk"], "."), ['example', 'com', 'user@example', 'co', 'uk'], 'Test 69');
test(splitWordsBySeparator(["abc", "def", "ghi"], "z"), ['abc', 'def', 'ghi'], 'Test 70');
test(splitWordsBySeparator(["@@@@", "####", "&&&&"], "@"), ['####', '&&&&'], 'Test 71');
test(splitWordsBySeparator(["a.b.c.d.e", "f.g", "h"], "."), ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], 'Test 72');
test(splitWordsBySeparator(["@#$|%|^&*", "!@#$%^&*[]", "|{}[]<>:"], "$"), ['@#', '|%|^&*', '!@#', '%^&*[]', '|{}[]<>:'], 'Test 73');
test(splitWordsBySeparator(["startmiddleend","doubletriplequadruple"], "#"), ['startmiddleend', 'doubletriplequadruple'], 'Test 74');
test(splitWordsBySeparator(["hello###world", "foo###bar", "baz###qux"], "###"), ['hello', 'world', 'foo', 'bar', 'baz', 'qux'], 'Test 75');
test(splitWordsBySeparator(["hello.world$,another.world","yet.another.world","one.more.world"], "$"), ['hello.world', ',another.world', 'yet.another.world', 'one.more.world'], 'Test 76');
test(splitWordsBySeparator(["a,b,c,d,e","f,g,h,i,j","k,l,m,n,o"], ","), ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o'], 'Test 77');
test(splitWordsBySeparator(["||a||b||c||", "|||", "d|||e"], "|"), ['a', 'b', 'c', 'd', 'e'], 'Test 78');
test(splitWordsBySeparator(["multiple...dots...here", "and...here", "and...and...and"], "..."), ['multiple', 'dots', 'here', 'and', 'here', 'and', 'and', 'and'], 'Test 79');
test(splitWordsBySeparator(["multiple$$$dollar$$$signs", "another$$$test$$$case"], "$$$"), ['multiple', 'dollar', 'signs', 'another', 'test', 'case'], 'Test 80');
test(splitWordsBySeparator(["hello||world", "foo|bar|baz", "qux|||quux"], "|"), ['hello', 'world', 'foo', 'bar', 'baz', 'qux', 'quux'], 'Test 81');
test(splitWordsBySeparator(["word1#word2#word3", "word4#word5", "word6"], "#"), ['word1', 'word2', 'word3', 'word4', 'word5', 'word6'], 'Test 82');
test(splitWordsBySeparator(["x|y|z|w|v|u|t", "s|r|q", "p|o|n|m"], "|"), ['x', 'y', 'z', 'w', 'v', 'u', 't', 's', 'r', 'q', 'p', 'o', 'n', 'm'], 'Test 83');
test(splitWordsBySeparator(["a.b.c.d.e", "f.g", "h.i.j"], "."), ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'], 'Test 84');
test(splitWordsBySeparator(["|||", "|a|b|c|", "d|e|f|"], "|"), ['a', 'b', 'c', 'd', 'e', 'f'], 'Test 85');
test(splitWordsBySeparator(["###", "@#@"], "#"), ['@', '@'], 'Test 86');
test(splitWordsBySeparator(["......", "$.|$.|$.|$.|$.|$.|$.|$.|$.|$.|$.|$.|$.|$.|$.|$.|$.|$.|$.|$.|$."], "$"), ['......', '.|', '.|', '.|', '.|', '.|', '.|', '.|', '.|', '.|', '.|', '.|', '.|', '.|', '.|', '.|', '.|', '.|', '.|', '.|', '.|', '.'], 'Test 87');
test(splitWordsBySeparator(["start.with.dot.", ".end.with.dot", ".both.ends."], "."), ['start', 'with', 'dot', 'end', 'with', 'dot', 'both', 'ends'], 'Test 88');
test(splitWordsBySeparator(["nested|path|to|file", "another|path|with|multiple|segments"], "|"), ['nested', 'path', 'to', 'file', 'another', 'path', 'with', 'multiple', 'segments'], 'Test 89');
test(splitWordsBySeparator(["..", "$.$", "#@#@"], "."), ['$', '$', '#@#@'], 'Test 90');
test(splitWordsBySeparator([",,a,,b,,c,,", ",,,", "d,,,e"], ","), ['a', 'b', 'c', 'd', 'e'], 'Test 91');
test(splitWordsBySeparator(["a.b.c.d.e", "f.g.h", "i.j"], "."), ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'], 'Test 92');
test(splitWordsBySeparator(["#start#middle#end","##double##triple###","###quadruple####"], "#"), ['start', 'middle', 'end', 'double', 'triple', 'quadruple'], 'Test 93');
test(splitWordsBySeparator(["###abc###", "###def###ghi###", "###"], "#"), ['abc', 'def', 'ghi'], 'Test 94');
test(splitWordsBySeparator(["multiple$$$separators", "here$$$again$$$and$$$again"], "$"), ['multiple', 'separators', 'here', 'again', 'and', 'again'], 'Test 95');
test(splitWordsBySeparator(["noSeparator", "alsoNoSeparatorHere"], "$"), ['noSeparator', 'alsoNoSeparatorHere'], 'Test 96');
test(splitWordsBySeparator(["abc#def#ghi", "jkl|mno|pqr", "stu,vwx,yz"], "#"), ['abc', 'def', 'ghi', 'jkl|mno|pqr', 'stu,vwx,yz'], 'Test 97');
test(splitWordsBySeparator([",,comma,,", "separated,,values", ",,"], ","), ['comma', 'separated', 'values'], 'Test 98');
test(splitWordsBySeparator(["leading|trailing|", "|trailing|only", "only|leading|"], "|"), ['leading', 'trailing', 'trailing', 'only', 'only', 'leading'], 'Test 99');
test(splitWordsBySeparator(["no|separators", "here", "either"], "|"), ['no', 'separators', 'here', 'either'], 'Test 100');
test(splitWordsBySeparator(["a@b@c@d", "e@f@g", "h@i@j@k@l"], "@"), ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'], 'Test 101');
test(splitWordsBySeparator(["..", ".a.", "b.."];, "."), Error: Solution.splitWordsBySeparator[] missing 2 required positional arguments: 'words' and 'separator', 'Test 102');
test(splitWordsBySeparator(["1234567890", "", "0987654321"], "5"), ['1234', '67890', '09876', '4321'], 'Test 103');
test(splitWordsBySeparator(["x|y|z|w|v|u","t|s|r|q","p|o|n|m|l|k|j|i|h|g|f|e|d|c|b|a"], "|"), ['x', 'y', 'z', 'w', 'v', 'u', 't', 's', 'r', 'q', 'p', 'o', 'n', 'm', 'l', 'k', 'j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a'], 'Test 104');
test(splitWordsBySeparator(["###", "@@@", "$$$"], "#"), ['@@@', '$$$'], 'Test 105');
test(splitWordsBySeparator(["|a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|", "|"], "|"), ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'], 'Test 106');
test(splitWordsBySeparator(["|a||b||c|", "d||e|f||", "|g|h|i|"], "|"), ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'], 'Test 107');
test(splitWordsBySeparator(["nested.delimiters|inside|string", "another|one|here"], "|"), ['nested.delimiters', 'inside', 'string', 'another', 'one', 'here'], 'Test 108');
test(splitWordsBySeparator(["....", "|||", "@@@"], "."), ['|||', '@@@'], 'Test 109');
test(splitWordsBySeparator(["$first$$second$$third","fourth$$$$fifth","sixth$$$$"], "$"), ['first', 'second', 'third', 'fourth', 'fifth', 'sixth'], 'Test 110');
test(splitWordsBySeparator(["a.b.c.d.e","f.g","h"], "."), ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], 'Test 111');
test(splitWordsBySeparator(["@start", "end@", "@both@"], "@"), ['start', 'end', 'both'], 'Test 112');
test(splitWordsBySeparator(["###", "#foo#bar#", "###baz##"], "#"), ['foo', 'bar', 'baz'], 'Test 113');
test(splitWordsBySeparator(["repeated..dots", "triple|||pipes", "quadruple@@@@at"], "."), ['repeated', 'dots', 'triple|||pipes', 'quadruple@@@@at'], 'Test 114');
test(splitWordsBySeparator(["a@b@c@d", "e@f", "g@h@i@j@k"], "@"), ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'], 'Test 115');
test(splitWordsBySeparator(["multiple.separators.in.one.string", "another|string|with|separators"], "."), ['multiple', 'separators', 'in', 'one', 'string', 'another|string|with|separators'], 'Test 116');
test(splitWordsBySeparator(["complex@punctuation@marks", "@leading@", "@trailing@", "@@multiple@@@"], "@"), ['complex', 'punctuation', 'marks', 'leading', 'trailing', 'multiple'], 'Test 117');
test(splitWordsBySeparator(["a.b.c.d", "e.f", "g.h.i.j.k"], "."), ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'], 'Test 118');
test(splitWordsBySeparator(["end.with.dot.", ".start.with.dot", ".middle.dot."], "."), ['end', 'with', 'dot', 'start', 'with', 'dot', 'middle', 'dot'], 'Test 119');
test(splitWordsBySeparator(["x##y##z", "##", "w####v"], "#"), ['x', 'y', 'z', 'w', 'v'], 'Test 120');
test(splitWordsBySeparator(["|||abc|||", "def|||ghi|||", "|||jkl|||mno|||"], "|"), ['abc', 'def', 'ghi', 'jkl', 'mno'], 'Test 121');
test(splitWordsBySeparator(["word", "anotherword", "yetanotherword"], "x"), ['word', 'anotherword', 'yetanotherword'], 'Test 122');
test(splitWordsBySeparator(["........", "...", "."], "."), [], 'Test 123');
test(splitWordsBySeparator(["#example#test#case", "##", "no#separator"], "#"), ['example', 'test', 'case', 'no', 'separator'], 'Test 124');
test(splitWordsBySeparator(["........"], "."), [], 'Test 125');
test(splitWordsBySeparator(["apple,banana,cherry", "date,elderberry", "fig,grape"], ","), ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape'], 'Test 126');
test(splitWordsBySeparator(["..", "...", "...."], "."), [], 'Test 127');
test(splitWordsBySeparator(["|||||||"], "|"), [], 'Test 128');
test(splitWordsBySeparator(["abc.def.ghi", "jkl..mno", "pqr"], "."), ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqr'], 'Test 129');
test(splitWordsBySeparator(["nested#[separators]#inside#strings", "#multiple##hashes##here", "#no#trailing#hash"], "#"), ['nested', '[separators]', 'inside', 'strings', 'multiple', 'hashes', 'here', 'no', 'trailing', 'hash'], 'Test 130');
test(splitWordsBySeparator(["multiple...dots","here||||are","pipes","and###hashes"], "."), ['multiple', 'dots', 'here||||are', 'pipes', 'and###hashes'], 'Test 131');
test(splitWordsBySeparator(["a|b||c|||d||||e"], "|"), ['a', 'b', 'c', 'd', 'e'], 'Test 132');
test(splitWordsBySeparator([",,apple,,,banana,,,","cherry,,,","date,"], ","), ['apple', 'banana', 'cherry', 'date'], 'Test 133');
test(splitWordsBySeparator(["@start@", "middle@", "@end"], "@"), ['start', 'middle', 'end'], 'Test 134');
test(splitWordsBySeparator(["#a#b#c#d", "#e##f#", "g#h#i#"], "#"), ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'], 'Test 135');
test(splitWordsBySeparator(["a.b.c.d.e", "f.g.h", "i.j.k.l"], "."), ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'], 'Test 136');
test(splitWordsBySeparator(["a.b.c.d.e", "f.g.h", "i.j.k.l.m"], "."), ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'], 'Test 137');
test(splitWordsBySeparator(["special$characters$@#|$|@$#|", "@|#$|$#@|", "|@#$#@$|"], "|"), ['special$characters$@#', '$', '@$#', '@', '#$', '$#@', '@#$#@$'], 'Test 138');
test(splitWordsBySeparator(["foo$bar$baz", "qux$quux", "corge$grault$garply"], "$"), ['foo', 'bar', 'baz', 'qux', 'quux', 'corge', 'grault', 'garply'], 'Test 139');

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
