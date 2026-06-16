// Test: 720. Longest Word In Dictionary
// 116 test cases from LeetCodeDataset
// Run: node test.js

const { longestWord } = require("./solution");

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

console.log("\n720. Longest Word In Dictionary\n");

test(longestWord(["a","ab","abc","abcd","abcde","abcdef","abcdefg","abcdefgh"]), abcdefgh, 'Test 1');
test(longestWord(["a","b","c"]), a, 'Test 2');
test(longestWord(["w","wo","wor","worl","world"]), world, 'Test 3');
test(longestWord(["zebra","zeb","zebu","zebrae","zebraes","zebraest"]), , 'Test 4');
test(longestWord(["car","cars","carp","card","care","career","caree","careerl","careerle","careerled"]), , 'Test 5');
test(longestWord(["a","banana","app","appl","ap","apply","apple"]), apple, 'Test 6');
test(longestWord(["hello","hell","he","h","hero","her","here","heroic"]), here, 'Test 7');
test(longestWord(["ab","abc","bc","abcd"]), , 'Test 8');
test(longestWord(["layer","layers","layered","layering","layerss"]), , 'Test 9');
test(longestWord(["abcd","abc","ab","a"]), abcd, 'Test 10');
test(longestWord(["cat","banana","dog","do","doge"]), , 'Test 11');
test(longestWord(["apple","ape","app","appl","ap","application"]), , 'Test 12');
test(longestWord(["yo","yolo","yell","yes","yellow","ye","yellower"]), , 'Test 13');
test(longestWord(["sgz","sgzn","sgznwv","i","ksiaz","ksiazx","ksiazxp","iwc","iwcx","iwcxz","iwcxzo"]), i, 'Test 14');
test(longestWord(["apple","app","ap","appl","apply"]), , 'Test 15');
test(longestWord(["ab","abc","bcd","abcd","abcde"]), , 'Test 16');
test(longestWord(["yo","yoyomo","yoymomo","yoyomomo"]), , 'Test 17');
test(longestWord(["apple","ale","monkey","plea","pleas","please"]), , 'Test 18');
test(longestWord(["m","mo","moc","moch","mocha","mochas","mochahu","mochahuu","mochahuuu"]), mochas, 'Test 19');
test(longestWord(["m","mo","moc","moch","mocha","l","la","lat","latt","latte","c","ca","cat"]), latte, 'Test 20');
test(longestWord(["b","br","bre","brea","break","breaks","breakin","breaks"]), breaks, 'Test 21');
test(longestWord(["hello","hell","he","h"]), he, 'Test 22');
test(longestWord(["b","br","bre","brea","break","breaks"]), breaks, 'Test 23');
test(longestWord(["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]), , 'Test 24');
test(longestWord(["ab","abc","bcd","bc","cd"]), , 'Test 25');
test(longestWord(["a","b","c","ab","bc","abc","abcd","abcde","abcdef","abcdefg","abcdefgh"]), abcdefgh, 'Test 26');
test(longestWord(["cat","cats","dog","dogcatsdog","rat","catdog","dogdog","ratcatdog","catdogdog","dogratcat"]), , 'Test 27');
test(longestWord(["ocean","oce","oc","oceanic","oceani","oceanicw","oceanicwa","oceanicwam","oceanicwama","oceanicwamal","oceanicwamali","oceanicwamalin","oceanicwamalinl"]), , 'Test 28');
test(longestWord(["apple","apples","applesauce","applesauc","applesauced","applesauceme","applesaucemel","applesaucemell","applesaucemellu","applesaucemellus"]), , 'Test 29');
test(longestWord(["j","ja","jav","java","javas","javasc","javascri","javascrip","javascrip","javascript","javascripte","javascripten","javascripteng","javascriptengi","javascriptengin","javascriptenging"]), javasc, 'Test 30');
test(longestWord(["dog","doge","doged","dogedj","dogedju","dogedjud","dogedjudge","dogedjudges","dogedjudgese","dogedjudgeses"]), , 'Test 31');
test(longestWord(["dog","dogs","dogss","dogsss","dogssss","dogsssss"]), , 'Test 32');
test(longestWord(["z","zz","zzz","zzzz","zzzzz","zzzzzz","zzzzzzz"]), zzzzzzz, 'Test 33');
test(longestWord(["p","pa","pan","pang","pange","pangea","pangean"]), pangean, 'Test 34');
test(longestWord(["kangaroo","kangaro","kangaroos","kangar","kanga","kang","kan","ka","k"]), kangaroos, 'Test 35');
test(longestWord(["hello","hell","he","h","world","wor","wo","w","python","pyth","pyt","py","p"]), pyth, 'Test 36');
test(longestWord(["cat","bat","rat","car","catr","carr","cart","carth","carthe","carthes","carthesi","carthesis"]), , 'Test 37');
test(longestWord(["elephant","eleph","elephas","elephan","elephanc","elephantc","elephantco","elephantcor","elephantcorn","elephantcorns"]), , 'Test 38');
test(longestWord(["x","xy","xyz","xyza","xyzab","xyzabc","xyzabcd"]), xyzabcd, 'Test 39');
test(longestWord(["happy","happ","hap","ha","happier","happie","happyland","happylan","happyla","happyl","happyl"]), , 'Test 40');
test(longestWord(["xyz","xy","x","yz","y","z","xyzd","xyzde","xyzdef","xyzdefg"]), xyzdefg, 'Test 41');
test(longestWord(["x", "xy", "xyz", "xyzz", "xyzzz", "xyzzzz", "xyzzzzz", "xyzzzzzz", "xyzzzzzzz", "xyzzzzzzzz"]), xyzzzzzzzz, 'Test 42');
test(longestWord(["elephant","eleph","elep","ele","el","e","elephantman","elephantwoman","elephantmanwoman","elephantwomanman"]), eleph, 'Test 43');
test(longestWord(["a","abc","ab","abcd","abcde","abcdefg","abcdefgh"]), abcde, 'Test 44');
test(longestWord(["hello","hell","hellp","hellpa","hellpad","hellpadd","hellpaddr","hellpaddre","hellpadder","hellpadding"]), , 'Test 45');
test(longestWord(["m", "ma", "mat", "math", "maths", "mathem", "mathema", "mathemat", "mathemati", "mathematis", "mathematic", "mathematica", "mathematical", "mathematicals"]), maths, 'Test 46');
test(longestWord(["banana","bandana","band","bandanaa","bandanaaa","bandanaaaa","bandanaaaaa"]), , 'Test 47');
test(longestWord(["m","mo","moc","moch","mocha","mochau","mochaus","mochause","mochauset","mochausett"]), mochausett, 'Test 48');
test(longestWord(["programming","program","progra","programm","programmi","programmin","programmin","programmin","programmin","programmingl"]), , 'Test 49');
test(longestWord(["w", "wo", "wor", "worl", "world", "worls", "worlsa", "worlsas", "worlsask", "worlsaskp", "worlsaskph", "worlsaskphb", "worlsaskphbr", "worlsaskphbrn"]), worlsaskphbrn, 'Test 50');
test(longestWord(["zebra","zebr","zeb","ze","z","zebrazebr","zebrzebr","zebzeb","zeze","zz","zzz","zzzz","zzzzz"]), zebra, 'Test 51');
test(longestWord(["sun","sunny","sunnyd","sunnyda","sunnydar","sunnydark","sunnydarc","sunnydarck","sunnydarcks","sunnydarckso","sunnydarckson","sunnydarcksong"]), , 'Test 52');
test(longestWord(["r","ra","ran","ranc","ranch","rancha","ranchai","ranchain","ranchaind","ranchainde","ranchainden","ranchaindent","ranchaindente","ranchaindentel","ranchaindentels"]), ranchaindentels, 'Test 53');
test(longestWord(["abc","abcd","abcde","abcdef","abcdefg","abcdefgh","abcdefghi","abcdefghij","abcdefghijk"]), , 'Test 54');
test(longestWord(["x","xy","xyz","xyza","xyzab","xyzabc","xyzabcd","xyzabcde","xyzabcdef"]), xyzabcdef, 'Test 55');
test(longestWord(["a","b","c","ab","bc","abc","abcd","abcde","abcdef"]), abcdef, 'Test 56');
test(longestWord(["car", "cards", "carpet", "cart", "cat", "cats", "cattle", "dog", "dogs", "doghouse", "doghousee"]), , 'Test 57');
test(longestWord(["cat","cats","catsd","catsdo","catsdog","catsdogw","catsdogwa","catsdogwar","catsdogwarm","catsdogwarms"]), , 'Test 58');
test(longestWord(["banana","ban","band","bandi","bandit","bandits","bands","bandwidth","bandwidths","bandwidthing"]), , 'Test 59');
test(longestWord(["sheep","she","sh","s","shelter","shel","shele","sheleh","shelehi","shelehii"]), shelehii, 'Test 60');
test(longestWord(["at", "att", "atti", "attis", "attire", "attach", "attachs", "attaches", "attaching"]), , 'Test 61');
test(longestWord(["abcdefghijklmnopqrstuvwxyz","abcdefghijklmnopqrstuvwxy","abcdefghijklmnopqrstuvwx","abcdefghijklmnopqrstuvw","abcdefghijklmnopqrstu","abcdefghijklmnopqrst","abcdefghijklmnopqrs","abcdefghijklmnopqr","abcdefghijklmnopq","abcdefghijklmnop","abcdefghijklmno","abcdefghijklmn","abcdefghijklm","abcdefghijkl","abcdefghijk","abcdefghij","abcdefghi","abcdefgh","abcdefg","abcdef","abcde","abcd","abc","ab","a"]), abcdefghijklmnopqrstu, 'Test 62');
test(longestWord(["m","mo","moc","moch","mocha","mochas","mochatel"]), mochas, 'Test 63');
test(longestWord(["a","b","c","ab","bc","abc","abcd","abcde","abcdef","abcdefg"]), abcdefg, 'Test 64');
test(longestWord(["g","go","god","godd","godde","goddess","goddesss","goddessss","goddesssss","goddessssss","goddesssssss","goddessssssss"]), godde, 'Test 65');
test(longestWord(["w","wo","wor","worl","world","worldly","worldlyy","worldlyyy","worldlyyyy","worldlyyyyy","worldlyyyyyy","worldlyyyyyyy","worldlyyyyyyyy","worldlyyyyyyyyy","worldlyyyyyyyyyy","worldlyyyyyyyyyyy","worldlyyyyyyyyyyyy","worldlyyyyyyyyyyyyy","worldlyyyyyyyyyyyyyy","worldlyyyyyyyyyyyyyyy","worldlyyyyyyyyyyyyyyyy","worldlyyyyyyyyyyyyyyyyy","worldlyyyyyyyyyyyyyyyyyy","worldlyyyyyyyyyyyyyyyyyyy","worldlyyyyyyyyyyyyyyyyyyyy","worldlyyyyyyyyyyyyyyyyyyyyy","worldlyyyyyyyyyyyyyyyyyyyyyy","worldlyyyyyyyyyyyyyyyyyyyyyyy","worldlyyyyyyyyyyyyyyyyyyyyyyyy","worldlyyyyyyyyyyyyyyyyyyyyyyyyy","worldlyyyyyyyyyyyyyyyyyyyyyyyyyy"]), world, 'Test 66');
test(longestWord(["education","educati","educatio","educat","educati","educati","educati","educati","educati","educati"]), , 'Test 67');
test(longestWord(["elephant","eleph","elep","ele","el","e","giraffe","gira","gir","gi","g","zebra","zeb","ze","z"]), eleph, 'Test 68');
test(longestWord(["m","mo","mon","mond","mondo","mondoo","mondooo","mondooooo","mondoooooo","mondooooooo"]), mondooo, 'Test 69');
test(longestWord(["ab", "abc", "abca", "abcd", "abcde", "abcdef", "abcdefg", "abcdefgh", "abcdefghi", "abcdefghij", "abcdefghijk", "abcdefghijkl", "abcdefghijklm", "abcdefghijklmn"]), , 'Test 70');
test(longestWord(["word","wor","worl","world","worldd","worldde","worlddee","worlddeep","worlddeeper","worlddeepest","worlddeepestt","worlddeepesttt","worlddeepestttt","worlddeepesttttt","worlddeepesttttts","worlddeepesttttsss","worlddeepesttttssss","worlddeepesttttsssss","worlddeepesttttssssss"]), , 'Test 71');
test(longestWord(["zebra","zebras","zebrass","zebrasss","zebrassss","zebrasssss","zebrassssss"]), , 'Test 72');
test(longestWord(["a","b","c","ab","bc","abc","abcd","abcde","abcdef","abcdefg","abcdefgh","abcdefghi","abcdefghij"]), abcdefghij, 'Test 73');
test(longestWord(["m","mo","moc","moch","mocha","mochaa","mochaaa","mochaaaa","mochaaaaa","mochaaaaaa","mochaaaaaab","mochaaaaaabc"]), mochaaaaaabc, 'Test 74');
test(longestWord(["abcdefghij","abcdefghijk","abcdefghijkl","abcdefghijklm","abcdefghijklmn","abcdefghijklmnop","abcdefghijklmnopq","abcdefghijklmnopqr","abcdefghijklmnopqrs","abcdefghijklmnopqrst","abcdefghijklmnopqrstu","abcdefghijklmnopqrstuv","abcdefghijklmnopqrstuvw","abcdefghijklmnopqrstuvwx","abcdefghijklmnopqrstuvwxy","abcdefghijklmnopqrstuvwxyz"]), , 'Test 75');
test(longestWord(["a","aa","aaa","aaaa","aaaaa","aab","aabb","aaabb","aabbb","aabbbb","aabbbba","aabbbbac","aabbbbacc","aabbbbaccd","aabbbbaccde","aabbbbaccdef","aabbbbaccd","aabbbbacce","aabbbbaccf","aabbbbaccg"]), aabbbbaccdef, 'Test 76');
test(longestWord(["cat","cats","catdog","dog","dogcat","dogdog","catcat","catdogcat"]), , 'Test 77');
test(longestWord(["aardvark", "aardva", "aardv", "aard", "aarr", "aar", "aa", "a", "bark", "bar", "ba", "b"]), aardva, 'Test 78');
test(longestWord(["aaaaaa","aaaaab","aaaaac","aaaaad","aaaaae","aaaaaf","aaaaag","aaaaah","aaaaai","aaaaaj"]), , 'Test 79');
test(longestWord(["t","to","too","tool","tools","tooool","toooln","tooolna","tooolnan","tooolnanc","tooolnance","tooolnances"]), tools, 'Test 80');
test(longestWord(["x","xy","xyz","xyzz","xyzzz","xyzzzz"]), xyzzzz, 'Test 81');
test(longestWord(["aabbcc","aabbc","aabb","aab","aa","a","aabbbccc","aabbbcc","aabbbc","aabbb","aabbccdd","aabbccd","aabbccdd","aabbccdde","aabbccddeff","aabbccddefff"]), aabbccdde, 'Test 82');
test(longestWord(["x","xy","xyz","xyzz","xyzzz","xyzzzz","xyzzzzz","xyzzzzzz","xyzzzzzzz","xyzzzzzzzz"]), xyzzzzzzzz, 'Test 83');
test(longestWord(["cat","cats","catsd","catsdo","catsdog","catsdogs"]), , 'Test 84');
test(longestWord(["lion","lions","liones","lionesi","lionesis","lionesiss","lionesissi"]), , 'Test 85');
test(longestWord(["m","mi","mic","mice","micem","micems","micemse","micemsen","micemsens","micemsense","micemsenses"]), micemsenses, 'Test 86');
test(longestWord(["zebra","zeb","zebrai","zebraic","zebrain","zebrainc","zebrainco","zebraincor","zebraincorn","zebraincorns"]), , 'Test 87');
test(longestWord(["dog","dogg","doggo","doggos","doggoes","doggoest","doggoesta","doggoestas","doggoestast","doggoestaste","doggoestastes","doggoestastesf","doggoestastesfi","doggoestastesfir"]), , 'Test 88');
test(longestWord(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]), a, 'Test 89');
test(longestWord(["elephant","elephan","eleph","elep","ele","el","e"]), eleph, 'Test 90');
test(longestWord(["x","y","z","xy","xz","yx","yz","zx","zy","xyz","xzy","yxz","yzx","zxy","zyx","xyzs","xzyt","yxzu","yzxv","zxwy","zyxw","xyzw"]), xyzs, 'Test 91');
test(longestWord(["s","su","sun","sund","sunde","sunden","sundenw","sundenwe","sundenwet","sundenwete","sundenwetep","sundenweteps","sundenwetepsi","sundenwetepsir","sundenwetepsirc"]), sundenwetepsirc, 'Test 92');
test(longestWord(["x","xy","xyz","xyzz","xyzzz","xyzzzz","xyzzzzz","xyzzzzzz","xyzzzzzzz","xyzzzzzzzz","xyzzzzzzzzz"]), xyzzzzzzzzz, 'Test 93');
test(longestWord(["p","pa","par","para","paral","parale","paralle","paralle","parallel","parallell","parallellu","parallelly","parallellye","parallellyes","parallellyest","parallellyests"]), parale, 'Test 94');
test(longestWord(["xyz","xy","x","xz","xzv","xzvc","xzvcd"]), xzvcd, 'Test 95');
test(longestWord(["tiger","tig","ti","t","lion","lio","li","l","bear","bea","be","b","wolf","wo","w","fox","fo","f"]), bear, 'Test 96');
test(longestWord(["z","y","x","yz","xz","yx","xyz","yxz","zyx","zyxz","zyxw"]), yxz, 'Test 97');
test(longestWord(["z","zz","zzz","zzzz","zzzzz","zzzzzz","zzzzzzz","zzzzzzzz","zzzzzzzzz","zzzzzzzzzz","zzzzzzzzzzz"]), zzzzzzzzzzz, 'Test 98');
test(longestWord(["z","ze","zel","zela","zelat","zelato","zelaton","zelatona","zelatonam","zelatonami","zelatonamil","zelatonamilis","zelatonamilisa"]), zelatonamil, 'Test 99');
test(longestWord(["b","ba","ban","band","bands","bandw","bandwi","bandwin","bandwind","bandwindy","bandwindyt","bandwindytr","bandwindytri","bandwindytrin","bandwindytrink","bandwindytrinkt","bandwindytrinkte","bandwindytrinktel","bandwindytrinkle","bandwindytrinklet","bandwindytrinklety","bandwindytrinkletys","bandwindytrinkletysi","bandwindytrinkletysin","bandwindytrinkletysinc"]), bandwindytrinktel, 'Test 100');
test(longestWord(["zebra", "zebr", "zeb", "z", "appl", "apply", "apple", "app", "apples", "applf", "applfs", "applfst", "applfsth", "applfstha", "applfsthaw"]), z, 'Test 101');
test(longestWord(["giraffe","giraff","gira","gir","gi","g"]), gira, 'Test 102');
test(longestWord(["zebra","zeb","zebraa","zebraaa","zebraaaa","zebraaaaa","zebraaaaaa"]), , 'Test 103');
test(longestWord(["aaa","aa","a","aaaa","aab","aabbb","aabbbb","aabbbbb","aabbbbbb","aabbbbbbb","aabbbbbbbb"]), aaaa, 'Test 104');
test(longestWord(["a","apple","apply","apples","applesauce","applesauces"]), a, 'Test 105');
test(longestWord(["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]), aaaaaaaaaa, 'Test 106');
test(longestWord(["table", "tab", "tabl", "tabli", "tablir", "tablirt", "tablirte", "tablirtet", "tablirtete", "tablirtetep", "tablirtetepy", "tablirtetepyv", "tablirtetepyvu", "tablirtetepyvul"]), , 'Test 107');
test(longestWord(["cat","cats","catsd","catsdo","catsdog","catsdogs","catsdogsa","catsdogsau","catsdogsaus","catsdogsausa","catsdogsausag","catsdogsausag","catsdogsausage"]), , 'Test 108');
test(longestWord(["hello","hell","hel","he","h","world","wor","wo","w","python","pytho","pyth","pyt","py","p","programming","programmin","programmi","programm","program","progra","progr","prog","pro","pr","p"]), programming, 'Test 109');
test(longestWord(["a", "b", "ba", "bca", "bda", "bdca"]), ba, 'Test 110');
test(longestWord(["k","ka","kay","kaye","kayes","kayest","kayesta","kayestan","kayestana","kayestanap","kayestanapa","kayestanapal","kayestanapali","kayestanapaliu","kayestanapaliud","kayestanapaliude","kayestanapaliuder","kayestanapaliuderk","kayestanapaliuderks"]), kayestanapaliuderks, 'Test 111');
test(longestWord(["umbrella","umbrell","umbrel","umbre","umbr","umb","um","u"]), umbrella, 'Test 112');
test(longestWord(["apple","apples","banana","bananas","banan","bat","batman","batmans","batman","batman","batmans","batman"]), , 'Test 113');
test(longestWord(["abcdefghijklmnopqrstuvwxyz","abcdefghijklmnopqrstuvwxy","abcdefghijklmnopqrstuvwx","abcdefghijklmnopqrstuvw","abcdefghijklmnopqrstu","abcdefghijklmnopqrst","abcdefghijklmnopqr","abcdefghijklmnopq","abcdefghijklmnop","abcdefghijklnmopqrstu","abcdefghijklnmopqrst","abcdefghijklnmopqr","abcdefghijklnmopq","abcdefghijklnmop","abcdefghijklnmo","abcdefghijklnm","abcdefghijkln","abcdefghijk","abcdefghij","abcdefghi","abcdefgh","abcdefg","abcdef","abcde","abcd","abc","ab","a"]), abcdefghijk, 'Test 114');
test(longestWord(["one","only","onely","onelys","onelyso","onelysom","onelysome","onelysomeo","onelysomeon","onelysomeone","onelysomeonely","onelysomeonelys","onelysomeonelyso","onelysomeonelysom","onelysomeonelysome","onelysomeonelysomeo","onelysomeonelysomeon","onelysomeonelysomeone","onelysomeonelysomeonely","onelysomeonelysomeonelys","onelysomeonelysomeonelyso","onelysomeonelysomeonelysom","onelysomeonelysomeonelysome","onelysomeonelysomeonelysomeo","onelysomeonelysomeonelysomeon","onelysomeonelysomeonelysomeone","onelysomeonelysomeonelysomeonely","onelysomeonelysomeonelysomeonelys","onelysomeonelysomeonelysomeonelyso","onelysomeonelysomeonelysomeonelysom","onelysomeonelysomeonelysomeonelysome"]), , 'Test 115');
test(longestWord(["p","pa","pac","pack","packe","packet","packeta","packetas","packetasi","packetasic","packetasics","packetasicsl","packetasicsli","packetasicslib","packetasicslibs"]), packetasicslibs, 'Test 116');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

