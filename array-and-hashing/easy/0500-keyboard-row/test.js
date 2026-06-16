// Test: 500. Keyboard Row
// 81 test cases from LeetCodeDataset
// Run: node test.js

const { findWords } = require("./solution");

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

console.log("\n500. Keyboard Row\n");

test(findWords(["Hello","Alaska","Dad","Peace"]), ['Alaska', 'Dad'], 'Test 1');
test(findWords(["qwerty","ASDFGH","zxcvbN"]), ['qwerty', 'ASDFGH', 'zxcvbN'], 'Test 2');
test(findWords(["QwErTy","aSdF","zXcV"]), ['QwErTy', 'aSdF', 'zXcV'], 'Test 3');
test(findWords(["AAAAA","eeeee","QQQqq","zzzzz"]), ['AAAAA', 'eeeee', 'QQQqq', 'zzzzz'], 'Test 4');
test(findWords(["QwErTy","AsDfGh","ZxCvBn"]), ['QwErTy', 'AsDfGh', 'ZxCvBn'], 'Test 5');
test(findWords(["omk"]), [], 'Test 6');
test(findWords(["adsdf","sfd"]), ['adsdf', 'sfd'], 'Test 7');
test(findWords(["Flask","kite","BAT"]), ['Flask'], 'Test 8');
test(findWords(["Unbelievable","Incomprehensible","Supernatural","Phenomenal","Transcendent","Metaphysical","Ethereal","Mystical","Enigmatic","Paradoxical"]), [], 'Test 9');
test(findWords(["MixedCASE", "Keyboard", "TESTING", "qwerty", "ASDF", "ZXCV", "QwErTy", "AsDf", "ZxCv"]), ['qwerty', 'ASDF', 'ZXCV', 'QwErTy', 'AsDf', 'ZxCv'], 'Test 10');
test(findWords(["Programming","Python","Keyboard","Typing","Challenge"]), [], 'Test 11');
test(findWords(["quick", "brown", "fox", "jumps", "over", "lazy", "dogs", "cat", "bat", "rat", "mat", "hat", "sat", "van", "pan", "tan", "man", "can", "fan", "fan"]), [], 'Test 12');
test(findWords(["helloWorld", "pythonProgramming", "dataScience", "machineLearning", "artificialIntelligence"]), [], 'Test 13');
test(findWords(["The","Quick","Brown","Fox","Jumps","Over","Lazy","Dog","Zoology"]), [], 'Test 14');
test(findWords(["a","A","b","B","c","C","d","D","e","E","f","F","g","G","h","H","i","I","j","J","k","K","l","L","m","M","n","N","o","O","p","P","q","Q","r","R","s","S","t","T","u","U","v","V","w","W","x","X","y","Y","z","Z"]), ['a', 'A', 'b', 'B', 'c', 'C', 'd', 'D', 'e', 'E', 'f', 'F', 'g', 'G', 'h', 'H', 'i', 'I', 'j', 'J', 'k', 'K', 'l', 'L', 'm', 'M', 'n', 'N', 'o', 'O', 'p', 'P', 'q', 'Q', 'r', 'R', 's', 'S', 't', 'T', 'u', 'U', 'v', 'V', 'w', 'W', 'x', 'X', 'y', 'Y', 'z', 'Z'], 'Test 15');
test(findWords(["qwerty","ASDFGH","ZXCVBNM","QwErTy","AsDfGh","ZxCvBnM"]), ['qwerty', 'ASDFGH', 'ZXCVBNM', 'QwErTy', 'AsDfGh', 'ZxCvBnM'], 'Test 16');
test(findWords(["developer","programming","software","engineer","algorithm","datastructure"]), [], 'Test 17');
test(findWords(["qwertyuiopq", "asdfghjklasdf", "zxcvbnmzxcvbnm", "qwertyuiopqwertyuiop", "asdfghjklasdfghjkl", "zxcvbnmzxcvbnmzxcvbnm"]), ['qwertyuiopq', 'asdfghjklasdf', 'zxcvbnmzxcvbnm', 'qwertyuiopqwertyuiop', 'asdfghjklasdfghjkl', 'zxcvbnmzxcvbnmzxcvbnm'], 'Test 18');
test(findWords(["neurotransmitter","photosynthesis","biochemistry","mitochondria","cytoplasm","hypothalamus","glucose","enzymes","photosynthetic","photosynthesis"]), [], 'Test 19');
test(findWords(["MixedCaseWords","CamelCase","PascalCase","SnakeCase","KebabCase"]), [], 'Test 20');
test(findWords(["Programming","Python","Keyboard","Layout","Challenges"]), [], 'Test 21');
test(findWords(["supercalifragilisticexpialidocious", "antidisestablishmentarianism", "honorificabilitudinitatibus", "floccinaucinihilipilification", "pneumonoultramicroscopicsilicovolcanoconiosis", "supercalifragilisticexpialidocious", "antidisestablishmentarianism"]), [], 'Test 22');
test(findWords(["HELLOworld", "aLpHa", "KEYbOArD", "OnEtwOthReE", "QuICkBrOWnFoXJUMPsOvErLAZYdOG", "PYtHoNcOdInG"]), [], 'Test 23');
test(findWords(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]), ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'], 'Test 24');
test(findWords(["Mississippi","Delaware","Washington","California","Texas","Alabama","Georgia","Virginia","Florida"]), [], 'Test 25');
test(findWords(["Typewriter","Keyboard","Mouse","Monitor","Motherboard"]), ['Typewriter'], 'Test 26');
test(findWords(["Python", "Java", "C++", "JavaScript", "Ruby", "Go", "Swift", "Kotlin"]), [], 'Test 27');
test(findWords(["Quickly","Brown","Fox","Jumps","Over","Lazy","Dog"]), [], 'Test 28');
test(findWords(["qwertyuiop","asdfghjkl","zxcvbnm","QWERTYUIOP","ASDFGHJKL","ZXCVBNM","qazwsxedcrfvtgbyhnujmikolp","poiuytrewqlkjhgfdsamnbvcxz","mnbvcxzlkjhgfdsapoiuytrewq","abcdefghijklmnopqrstuvwxyz","zyxwvutsrqponmlkjihgfedcba","aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz","zzzyyxxwwvvuuttrrssqqppoonnmmllkkjjiihhggffeeddccbbaa"]), ['qwertyuiop', 'asdfghjkl', 'zxcvbnm', 'QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM'], 'Test 29');
test(findWords(["International","Pineapple","Keyboard","Queen","Zebra","Alphabet","Quick","Brown","Fox","Lazy"]), [], 'Test 30');
test(findWords(["abcdefghijklmnopqrstuvwxyz", "ZYXWVUTSRQPONMLKJIHGFEDCBA", "QwErTyUiOpAsDfGhJkLzXcVbNm"]), [], 'Test 31');
test(findWords(["Mississippi","Alabama","Hawaii","Delaware","Alaska","Florida"]), ['Alaska'], 'Test 32');
test(findWords(["OneRow","TwoRows","ThreeRows","FourRows","FiveRows"]), [], 'Test 33');
test(findWords(["abcdefghijklmnopqrstuvwxyz","ZYXWVUTSRQPONMLKJIHGFEDCBA","QwErTyUiOpAsDfGhJkLzXcVbNm","mnbvcxzlkjhgfdsapoiuytrewq"]), [], 'Test 34');
test(findWords(["Supercalifragilisticexpialidocious","Pneumonoultramicroscopicsilicovolcanoconiosis","Honorificabilitudinitatibus","Antidisestablishmentarianism","Floccinaucinihilipilification"]), [], 'Test 35');
test(findWords(["qwerty","asdfgh","zxcvbnm","QWERTY","ASDFGH","ZXCVBNM"]), ['qwerty', 'asdfgh', 'zxcvbnm', 'QWERTY', 'ASDFGH', 'ZXCVBNM'], 'Test 36');
test(findWords(["Quick","Brown","Fox","Jumps","Over","Lazy","Dog"]), [], 'Test 37');
test(findWords(["helloWorld", "OpenAI", "Python", "Java", "CSharp", "JavaScript", "TypeScript"]), [], 'Test 38');
test(findWords(["Python","Keyboard","Alphabet","Row","Line"]), ['Row'], 'Test 39');
test(findWords(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]), ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'], 'Test 40');
test(findWords(["Shift","Ctrl","Alt","Fn","Enter","Space","Backspace","Tab","CapsLock","Esc","PrintScreen","ScrollLock","Pause","Insert","Delete","Home","End","PageUp","PageDown","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"]), [], 'Test 41');
test(findWords(["aaaaabbbbcccccdddddeeeeefffffggggghhhhhiiiiiijjjjjkkkkklllllmnnnnnooooo", "pppppqqqqqrrrrrssssstttttuuuuuvvvvvwwwwwxxxxyyyyyzzzzz"]), [], 'Test 42');
test(findWords(["asdfghjklASDFGHJKL","zxcvbnmZXCVBNM","qwertyuiopQWERTYUIOP"]), ['asdfghjklASDFGHJKL', 'zxcvbnmZXCVBNM', 'qwertyuiopQWERTYUIOP'], 'Test 43');
test(findWords(["RowOne", "RowTwo", "RowThree", "roWONe", "roWTWo", "roWTHrEE", "ONE", "TWO", "THREE", "one", "two", "three"]), ['RowTwo', 'roWTWo', 'TWO', 'two'], 'Test 44');
test(findWords(["Alphabet","Zebra","Python","Java","CSharp","Ruby"]), [], 'Test 45');
test(findWords(["racecar","madam","refer","deed","level","noon","rotor"]), ['rotor'], 'Test 46');
test(findWords(["single", "double", "triple", "quadruple", "quintuple", "sextuple", "septuple", "octuple", "nonuple", "decuple"]), [], 'Test 47');
test(findWords(["aaaaaaaaa","bbbbbbbbb","ccccccccc","ddddddddd","eeeeeeeee","fffffffff","ggggggggg","hhhhhhhhh","iiiiiiiii","jjjjjjjjj","kkkkkkkkk","lllllllll","mmmmmmmmm","nnnnnnnnn","ooooooooo","ppppppppp","qqqqqqqqq","rrrrrrrrr","sssssssss","ttttttttt","uuuuuuuuu","vvvvvvvvv","wwwwwwwww","xxxxxxxxx","yyyyyyyyy","zzzzzzzzz"]), ['aaaaaaaaa', 'bbbbbbbbb', 'ccccccccc', 'ddddddddd', 'eeeeeeeee', 'fffffffff', 'ggggggggg', 'hhhhhhhhh', 'iiiiiiiii', 'jjjjjjjjj', 'kkkkkkkkk', 'lllllllll', 'mmmmmmmmm', 'nnnnnnnnn', 'ooooooooo', 'ppppppppp', 'qqqqqqqqq', 'rrrrrrrrr', 'sssssssss', 'ttttttttt', 'uuuuuuuuu', 'vvvvvvvvv', 'wwwwwwwww', 'xxxxxxxxx', 'yyyyyyyyy', 'zzzzzzzzz'], 'Test 48');
test(findWords(["Mississippi","Delaware","California","Texas","Montana","Alaska","Hawaii","Vermont","Wyoming","RhodeIsland","NewJersey","Connecticut","Pennsylvania","NewYork","Ohio","Michigan","Illinois","Indiana","Wisconsin","Minnesota","Iowa","Kansas","Nebraska","NorthDakota","SouthDakota","NorthCarolina","SouthCarolina","Georgia","Florida","Alabama","Missouri","Kentucky","Tennessee","Virginia","WestVirginia","Maryland","Delaware","NewHampshire","RhodeIsland","Massachusetts","Connecticut","Vermont","NewHampshire","Maine"]), ['Alaska'], 'Test 49');
test(findWords(["unique","characters","strings","keyboard","input","typing","fast"]), [], 'Test 50');
test(findWords(["supercalifragilisticexpialidocious","antidisestablishmentarianism","honorificabilitudinitatibus","floccinaucinihilipilification"]), [], 'Test 51');
test(findWords(["Supercalifragilisticexpialidocious","abcdefghijklmnopqrstuvwxyz","ABCDEFGHIJKLMNOPQRSTUVWXYZ"]), [], 'Test 52');
test(findWords(["gaming","console","controller","joystick","keyboard","monitor"]), [], 'Test 53');
test(findWords(["Alaska","AlaskaAlaska","DadDadDad","PeacePeacePeace"]), ['Alaska', 'AlaskaAlaska', 'DadDadDad'], 'Test 54');
test(findWords(["AaAaAaAaAaAa", "BbBbBbBbBbBb", "CcCcCcCcCcCc", "DdDdDdDdDdDd", "EeEeEeEeEeEe", "FfFfFfFfFfFf", "GgGgGgGgGgGg", "HhHhHhHhHhHh", "IiIiIiIiIiIi", "JjJjJjJjJjJj", "KkKkKkKkKkKk", "LlLlLlLlLlLl", "MmMmMmMmMmMm", "NnNnNnNnNnNn", "OoOoOoOoOoOo", "PpPpPpPpPpPp", "QqQqQqQqQqQq", "RrRrRrRrRrRr", "SsSsSsSsSsSs", "TtTtTtTtTtTt", "UuUuUuUuUuUu", "VvVvVvVvVvVv", "WwWwWwWwWwWw", "XxXxXxXxXxXx", "YyYyYyYyYyYy", "ZzZzZzZzZzZz"]), ['AaAaAaAaAaAa', 'BbBbBbBbBbBb', 'CcCcCcCcCcCc', 'DdDdDdDdDdDd', 'EeEeEeEeEeEe', 'FfFfFfFfFfFf', 'GgGgGgGgGgGg', 'HhHhHhHhHhHh', 'IiIiIiIiIiIi', 'JjJjJjJjJjJj', 'KkKkKkKkKkKk', 'LlLlLlLlLlLl', 'MmMmMmMmMmMm', 'NnNnNnNnNnNn', 'OoOoOoOoOoOo', 'PpPpPpPpPpPp', 'QqQqQqQqQqQq', 'RrRrRrRrRrRr', 'SsSsSsSsSsSs', 'TtTtTtTtTtTt', 'UuUuUuUuUuUu', 'VvVvVvVvVvVv', 'WwWwWwWwWwWw', 'XxXxXxXxXxXx', 'YyYyYyYyYyYy', 'ZzZzZzZzZzZz'], 'Test 55');
test(findWords(["Consistency","Maintainability","Scalability","Performance","Efficiency","Optimization","Debugging","Testing","Deployment","Maintenance"]), [], 'Test 56');
test(findWords(["aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ"]), [], 'Test 57');
test(findWords(["Quick","Brown","Fox","Jumps","Over","Lazy","Dogs"]), [], 'Test 58');
test(findWords(["aA","bB","cC","dD","eE","fF","gG","hH","iI","jJ","kK","lL","mM","nN","oO","pP","qQ","rR","sS","tT","uU","vV","wW","xX","yY","zZ"]), ['aA', 'bB', 'cC', 'dD', 'eE', 'fF', 'gG', 'hH', 'iI', 'jJ', 'kK', 'lL', 'mM', 'nN', 'oO', 'pP', 'qQ', 'rR', 'sS', 'tT', 'uU', 'vV', 'wW', 'xX', 'yY', 'zZ'], 'Test 59');
test(findWords(["qwertyuiop", "ASDFGHJKL", "zxcvbnm", "QwErTyUiOp", "AsDfGhJkL", "Zx Cv Bn M"]), ['qwertyuiop', 'ASDFGHJKL', 'zxcvbnm', 'QwErTyUiOp', 'AsDfGhJkL'], 'Test 60');
test(findWords(["supercalifragilisticexpialidocious", "antidisestablishmentarianism", "floccinaucinihilipilification", "pneumonoultramicroscopicsilicovolcanoconiosis", "thyroparathyroidectomized"]), [], 'Test 61');
test(findWords(["aBcDeFgHiJ","klMnOpQrSt","uVwXyZ","AeIoU","bcd","fgh","jkl","mno","pqr","stv","wxy","z"]), ['fgh', 'jkl', 'pqr', 'z'], 'Test 62');
test(findWords(["Super","Califragilisticexpialidocious","ExpiAlIdoCious","Antidisestablishmentarianism","Pneumonoultramicroscopicsilicovolcanoconiosis"]), [], 'Test 63');
test(findWords(["MIXED","CaSe","sEnSiTiViTy","UpPeR","LoWeR"]), ['UpPeR'], 'Test 64');
test(findWords(["qwertyuiop","asdfghjkl","zxcvbnm","QWERTYUIOP","ASDFGHJKL","ZXCVBNM"]), ['qwertyuiop', 'asdfghjkl', 'zxcvbnm', 'QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM'], 'Test 65');
test(findWords(["ASDFG", "ZXCVBNM", "QWERTYUIOP", "alabama", "kentucky", "delaware"]), ['ASDFG', 'ZXCVBNM', 'QWERTYUIOP'], 'Test 66');
test(findWords(["qwertyuiop","Qwertyuiop","asdfghjkl","Asdfghjkl","zxcvbnm","Zxcvbnm","QWERTYUIOP","ASDFGHJKL","ZXCVBNM","qQwWeErRtTyYuUiIoOpP","aAsSdDfFgGhHjJkKlL","zZxXcCvVbBnNmM"]), ['qwertyuiop', 'Qwertyuiop', 'asdfghjkl', 'Asdfghjkl', 'zxcvbnm', 'Zxcvbnm', 'QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM', 'qQwWeErRtTyYuUiIoOpP', 'aAsSdDfFgGhHjJkKlL', 'zZxXcCvVbBnNmM'], 'Test 67');
test(findWords(["Quick", "Brown", "Fox", "Jumps", "Over", "Lazy", "Dog"]), [], 'Test 68');
test(findWords(["qwertyuiopasdfghjklzxcvbnmqwertyuiop", "asdfghjklzxcvbnmqwertyuiopasdfghjkl", "zxcvbnmqwertyuiopasdfghjklzxcvbnm"]), [], 'Test 69');
test(findWords(["Shift", "Ctrl", "Alt", "Enter", "Space", "Esc", "Tab", "Backspace", "Delete", "Insert", "Home", "End", "PageUp", "PageDown", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12"]), [], 'Test 70');
test(findWords(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]), ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'], 'Test 71');
test(findWords(["aAaAaAaAaA","bBbBbBbBbB","cCcCcCcCcC","dDdDdDdDdD","eEeEeEeEeE","fFfFfFfFfF","gGgGgGgGgG","hHhHhHhHhH","iIiIiIiIiI","jJjJjJjJjJ","kKkKkKkKkK","lLlLlLlLlL","mMmMmMmMmM","nNnNnNnNnN","oOoOoOoOoO","pPpPpPpPpP","qQqQqQqQqQ","rRrRrRrRrR","sSsSsSsSsS","tTtTtTtTtT","uUuUuUuUuU","vVvVvVvVvV","wWwWwWwWwW","xXxXxXxXxX","yYyYyYyYyY","zZzZzZzZzZ"]), ['aAaAaAaAaA', 'bBbBbBbBbB', 'cCcCcCcCcC', 'dDdDdDdDdD', 'eEeEeEeEeE', 'fFfFfFfFfF', 'gGgGgGgGgG', 'hHhHhHhHhH', 'iIiIiIiIiI', 'jJjJjJjJjJ', 'kKkKkKkKkK', 'lLlLlLlLlL', 'mMmMmMmMmM', 'nNnNnNnNnN', 'oOoOoOoOoO', 'pPpPpPpPpP', 'qQqQqQqQqQ', 'rRrRrRrRrR', 'sSsSsSsSsS', 'tTtTtTtTtT', 'uUuUuUuUuU', 'vVvVvVvVvV', 'wWwWwWwWwW', 'xXxXxXxXxX', 'yYyYyYyYyY', 'zZzZzZzZzZ'], 'Test 72');
test(findWords(["abcdefghij", "klmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba", "mnopqrstu", "vwxyz", "qazwsxedcrfvtgbyhnujmiklop", "lkjhgfdsapoiuytrewq", "poiuytrewqazxcvbnm", "mnbvcxzlkjhgfdsapoiuytrewq"]), [], 'Test 73');
test(findWords(["Quick","brown","fox","jumps","over","lazy","dogs"]), [], 'Test 74');
test(findWords(["abcdefghijklmnopqrstuvwxyz","zyxwvutsrqponmlkjihgfedcba","qwertyuiopasdfghjklzxcvbnm","mnbvcxzlkjhgfdsapoiuytrewq"]), [], 'Test 75');
test(findWords(["RowOne","RowTWO","ROWthree","rOWFOUR","RoWFIVe","ROWsiX","ROWseVE","ROWeiGHT","ROWniNE","ROWten"]), ['RowTWO'], 'Test 76');
test(findWords(["qwerty", "asdfghjkl", "zxcvbnm", "QWERTY", "ASDFGHJKL", "ZXCVBNM", "QwErTyUiOp", "AsDfGhJkL", "ZxCvBnM"]), ['qwerty', 'asdfghjkl', 'zxcvbnm', 'QWERTY', 'ASDFGHJKL', 'ZXCVBNM', 'QwErTyUiOp', 'AsDfGhJkL', 'ZxCvBnM'], 'Test 77');
test(findWords(["Programming", "Language", "Python", "Java", "CSharp", "Ruby"]), [], 'Test 78');
test(findWords(["abcdefghij","klmnopqrstu","vwxyz","ABCDEFGHIJ","KLMNOPQRSTU","VWXYZ"]), [], 'Test 79');
test(findWords(["aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb", "cccccccccccccccccccccccccccccccccccccc", "dddddddddddddddddddddddddddddddddddddd", "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee", "ffffffffffffffffffffffffffffffffffffffff", "gggggggggggggggggggggggggggggggggggggggg", "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh", "iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii", "jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj", "kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk", "llllllllllllllllllllllllllllllllllllll", "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm", "nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn", "oooooooooooooooooooooooooooooooooooooo", "pppppppppppppppppppppppppppppppppppppp", "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq", "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr", "ssssssssssssssssssssssssssssssssssssss", "tttttttttttttttttttttttttttttttttttttt", "uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu", "vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv", "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww", "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", "yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy", "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"]), ['aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb', 'cccccccccccccccccccccccccccccccccccccc', 'dddddddddddddddddddddddddddddddddddddd', 'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', 'ffffffffffffffffffffffffffffffffffffffff', 'gggggggggggggggggggggggggggggggggggggggg', 'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh', 'iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii', 'jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj', 'kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk', 'llllllllllllllllllllllllllllllllllllll', 'mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm', 'nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn', 'oooooooooooooooooooooooooooooooooooooo', 'pppppppppppppppppppppppppppppppppppppp', 'qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq', 'rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr', 'ssssssssssssssssssssssssssssssssssssss', 'tttttttttttttttttttttttttttttttttttttt', 'uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu', 'vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv', 'wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww', 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', 'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy', 'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz'], 'Test 80');
test(findWords(["Typewriter", "Keyboard", "Mouse", "Monitor", "qwerty", "zxcvbnm"]), ['Typewriter', 'qwerty', 'zxcvbnm'], 'Test 81');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

