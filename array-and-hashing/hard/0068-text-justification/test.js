// Test: 68. Text Justification
// 108 test cases from LeetCodeDataset
// Run: node test.js

const { fullJustify } = require("./solution");

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

console.log("\n68. Text Justification\n");

test(fullJustify(["Try","your","best","to","be","like","them","at","best","you","can","be","like","them."], 20), ['Try  your best to be', 'like  them  at  best', 'you   can   be  like', 'them.               '], 'Test 1');
test(fullJustify(["a","b","c","d","e"], 3), ['a b', 'c d', 'e  '], 'Test 2');
test(fullJustify(["What","must","be","acknowledgment","shall","be"], 16), ['What   must   be', 'acknowledgment  ', 'shall be        '], 'Test 3');
test(fullJustify(["Listen","to","many","people","so","that","you","can","speak","to","none."], 15), ['Listen  to many', 'people  so that', 'you  can  speak', 'to none.       '], 'Test 4');
test(fullJustify(["short","longwordhere","longwordhere","short"], 20), ['short   longwordhere', 'longwordhere short  '], 'Test 5');
test(fullJustify(["a"], 2), ['a '], 'Test 6');
test(fullJustify(["a", "b", "c", "d", "e"], 3), ['a b', 'c d', 'e  '], 'Test 7');
test(fullJustify(["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], 20), ['Science  is  what we', 'understand      well', 'enough to explain to', 'a  computer.  Art is', 'everything  else  we', 'do                  '], 'Test 8');
test(fullJustify(["Listen","to","many","people","so","you","can","speak","to","all","people"], 7), ['Listen ', 'to many', 'people ', 'so  you', 'can    ', 'speak  ', 'to  all', 'people '], 'Test 9');
test(fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 16), ['This    is    an', 'example  of text', 'justification.  '], 'Test 10');
test(fullJustify(["Lorem", "ipsum", "dolor", "sit", "amet,", "consectetur", "adipiscing", "elit.", "Vestibulum", "bibendum", "porttitor", "diam,"], 20), ['Lorem   ipsum  dolor', 'sit            amet,', 'consectetur         ', 'adipiscing     elit.', 'Vestibulum  bibendum', 'porttitor diam,     '], 'Test 11');
test(fullJustify(["Even", "though", "the", "path", "may", "seem", "long", "and", "difficult."], 18), ['Even   though  the', 'path may seem long', 'and difficult.    '], 'Test 12');
test(fullJustify(["OneWordHereIsVeryLongIndeedAndItWillCauseSomeIssuesWithTheAlgorithmIfNotHandledProperly"], 50), ['OneWordHereIsVeryLongIndeedAndItWillCauseSomeIssuesWithTheAlgorithmIfNotHandledProperly'], 'Test 13');
test(fullJustify(["Longer", "words", "and", "evenlongerwords", "are", "here"], 25), ['Longer      words     and', 'evenlongerwords are here '], 'Test 14');
test(fullJustify(["Pack", "my", "box", "with", "five", "dozen", "liquor", "jugs"], 20), ['Pack   my  box  with', 'five   dozen  liquor', 'jugs                '], 'Test 15');
test(fullJustify(["In","the","middle","of","the","night","the","old","owl","wisely","spread","his","wings"], 35), ['In  the middle of the night the old', 'owl wisely spread his wings        '], 'Test 16');
test(fullJustify(["Do", "what", "you", "can", "with", "all", "you", "have,", "wherever", "you", "are."], 23), ['Do  what  you  can with', 'all  you have, wherever', 'you are.               '], 'Test 17');
test(fullJustify(["Keep", "your", "face", "always", "toward", "the", "sunset."], 21), ['Keep your face always', 'toward the sunset.   '], 'Test 18');
test(fullJustify(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t"], 5), ['a b c', 'd e f', 'g h i', 'j k l', 'm n o', 'p q r', 's t  '], 'Test 19');
test(fullJustify(["Look","into","the","distance","where","you","can","see","the","futuristic","cityscape"], 35), ['Look  into  the  distance where you', 'can see the futuristic cityscape   '], 'Test 20');
test(fullJustify(["Why","do","we","fall","ape","not","to","rise"], 8), ['Why   do', 'we  fall', 'ape  not', 'to rise '], 'Test 21');
test(fullJustify(["To", "be", "or", "not", "to", "be", "that", "is", "the", "question"], 12), ['To be or not', 'to  be  that', 'is       the', 'question    '], 'Test 22');
test(fullJustify(["Listen", "to", "many,", "speak", "to", "a", "few."], 15), ['Listen to many,', 'speak to a few.'], 'Test 23');
test(fullJustify(["Success", "is", "not", "final,", "failure", "is", "not", "fatal:", "It", "is", "the", "courage", "to", "continue", "that", "counts."], 25), ['Success   is  not  final,', 'failure  is not fatal: It', 'is    the    courage   to', 'continue that counts.    '], 'Test 24');
test(fullJustify(["To", "be", "or", "not", "to", "be", "that", "is", "the", "question"], 15), ['To be or not to', 'be  that is the', 'question       '], 'Test 25');
test(fullJustify(["To", "be", "or", "not", "to", "be," "that", "is", "the", "question:"], 10), ['To  be  or', 'not     to', 'be,that is', 'the       ', 'question: '], 'Test 26');
test(fullJustify(["Python", "programming", "is", "fun," "and", "effective."], 25), ['Python   programming   is', 'fun,and effective.       '], 'Test 27');
test(fullJustify(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"], 5), ['A B C', 'D E F', 'G H I', 'J    '], 'Test 28');
test(fullJustify(["Programming","is","not","about","what","you","know;","it", "is","about","what","you","can","figure","out."], 25), ['Programming  is not about', 'what   you  know;  it  is', 'about what you can figure', 'out.                     '], 'Test 29');
test(fullJustify(["One", "ring", "to", "rule", "them", "all,", "One", "ring", "to", "find", "them."], 18), ['One  ring  to rule', 'them all, One ring', 'to find them.     '], 'Test 30');
test(fullJustify(["To", "be", "or", "not", "to", "be,", "that", "is", "the", "question:"], 25), ['To  be or not to be, that', 'is the question:         '], 'Test 31');
test(fullJustify(["Left", "justified", "line"], 30), ['Left justified line           '], 'Test 32');
test(fullJustify(["In", "order", "to", "write", "about", "life,", "one", "must", "live", "it."], 22), ['In   order   to  write', 'about  life,  one must', 'live it.              '], 'Test 33');
test(fullJustify(["The","quick","brown","fox","jumps","over","the","lazy","dog"], 20), ['The  quick brown fox', 'jumps  over the lazy', 'dog                 '], 'Test 34');
test(fullJustify(["Sometimes", "the", "wisest", "course", "requires", "a", "great", "deal", "of", "courage"], 25), ['Sometimes    the   wisest', 'course  requires  a great', 'deal of courage          '], 'Test 35');
test(fullJustify(["The", "only", "way", "to", "do", "great", "work", "is", "to", "love", "what", "you", "do."], 25), ['The  only way to do great', 'work  is to love what you', 'do.                      '], 'Test 36');
test(fullJustify(["How", "much", "wood", "would", "a", "woodchuck", "chuck", "if", "a", "woodchuck", "could", "chuck", "wood"], 20), ['How  much wood would', 'a woodchuck chuck if', 'a   woodchuck  could', 'chuck wood          '], 'Test 37');
test(fullJustify(["Sometimes","you","have","to","run","before","you","can","walk"], 20), ['Sometimes  you  have', 'to  run  before  you', 'can walk            '], 'Test 38');
test(fullJustify(["So", "musing", "on", "the", "marvel", "of", "this", "theatre,"], 25), ['So  musing  on the marvel', 'of this theatre,         '], 'Test 39');
test(fullJustify(["Knowledge","is","a","treasure,","and","practice","is","the","key","to","mastering","it."], 28), ['Knowledge is a treasure, and', 'practice   is   the  key  to', 'mastering it.               '], 'Test 40');
test(fullJustify(["Do","not","wait","to","strike","till","the","iron","is","hot;","but","make","it","hot","by","striking."], 22), ['Do  not wait to strike', 'till  the iron is hot;', 'but  make  it  hot  by', 'striking.             '], 'Test 41');
test(fullJustify(["Just", "one", "word"], 50), ['Just one word                                     '], 'Test 42');
test(fullJustify(["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog."], 15), ['The quick brown', 'fox  jumps over', 'the lazy dog.  '], 'Test 43');
test(fullJustify(["Lorem", "ipsum", "dolor", "sit", "amet,", "consectetur", "adipiscing", "elit"], 20), ['Lorem   ipsum  dolor', 'sit            amet,', 'consectetur         ', 'adipiscing elit     '], 'Test 44');
test(fullJustify(["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"], 15), ['The quick brown', 'fox  jumps over', 'the lazy dog   '], 'Test 45');
test(fullJustify(["a", "very", "long", "sentence", "that", "needs", "to", "be", "formatted", "correctly", "with", "various", "spaces"], 10), ['a     very', 'long      ', 'sentence  ', 'that needs', 'to      be', 'formatted ', 'correctly ', 'with      ', 'various   ', 'spaces    '], 'Test 46');
test(fullJustify(["Lorem", "ipsum", "dolor", "sit", "amet,", "consectetur", "adipiscing", "elit."], 12), ['Lorem  ipsum', 'dolor    sit', 'amet,       ', 'consectetur ', 'adipiscing  ', 'elit.       '], 'Test 47');
test(fullJustify(["There", "is", "no", "royal", "road", "to", "learning."], 20), ['There  is  no  royal', 'road to learning.   '], 'Test 48');
test(fullJustify(["word"], 1), ['word'], 'Test 49');
test(fullJustify(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o"], 5), ['a b c', 'd e f', 'g h i', 'j k l', 'm n o'], 'Test 50');
test(fullJustify(["To","be","or","not","to","be","that","is","the","question"], 15), ['To be or not to', 'be  that is the', 'question       '], 'Test 51');
test(fullJustify(["A", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog."], 15), ['A  quick  brown', 'fox  jumps over', 'the lazy dog.  '], 'Test 52');
test(fullJustify(["Short", "words", "only"], 5), ['Short', 'words', 'only '], 'Test 53');
test(fullJustify(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"], 5), ['A B C', 'D E F', 'G H I', 'J K L', 'M N O', 'P Q R', 'S T U', 'V W X', 'Y Z  '], 'Test 54');
test(fullJustify(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"], 6), ['a  b c', 'd  e f', 'g  h i', 'j  k l', 'm  n o', 'p  q r', 's  t u', 'v  w x', 'y z   '], 'Test 55');
test(fullJustify(["The", "best", "way", "to", "predict", "the", "future", "is", "to", "create", "it."], 20), ['The   best   way  to', 'predict  the  future', 'is to create it.    '], 'Test 56');
test(fullJustify(["SingleWord"], 10), ['SingleWord'], 'Test 57');
test(fullJustify(["Failure","is","not","the","opposite","of","success;","it","is","part","of","success."], 30), ['Failure is not the opposite of', 'success;   it   is   part   of', 'success.                      '], 'Test 58');
test(fullJustify(["Lorem", "ipsum", "dolor", "sit", "amet,", "consectetur", "adipiscing", "elit."], 20), ['Lorem   ipsum  dolor', 'sit            amet,', 'consectetur         ', 'adipiscing elit.    '], 'Test 59');
test(fullJustify(["Listen","to","many,","speak","to","a","few."], 6), ['Listen', 'to    ', 'many, ', 'speak ', 'to   a', 'few.  '], 'Test 60');
test(fullJustify(["Equal", "space", "distribution"], 20), ['Equal          space', 'distribution        '], 'Test 61');
test(fullJustify(["Lorem","ipsum","dolor","sit","amet,","consectetur","adipiscing","elit."], 20), ['Lorem   ipsum  dolor', 'sit            amet,', 'consectetur         ', 'adipiscing elit.    '], 'Test 62');
test(fullJustify(["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"], 5), ['A B C', 'D E F', 'G H I', 'J K L', 'M N O', 'P Q R', 'S T U', 'V W X', 'Y Z  '], 'Test 63');
test(fullJustify(["A", "brave", "new", "world,"], 30), ['A brave new world,            '], 'Test 64');
test(fullJustify(["Listen", "to", "the", "wind.", "It", "is", "talking", "to", "you."], 20), ['Listen  to the wind.', 'It   is  talking  to', 'you.                '], 'Test 65');
test(fullJustify(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T"], 20), ['A  B C D E F G H I J', 'K L M N O P Q R S T '], 'Test 66');
test(fullJustify(["Let","us","hope","it","will","never","come","to","war"], 15), ['Let  us hope it', 'will never come', 'to war         '], 'Test 67');
test(fullJustify(["Equal","rights","for","all"], 10), ['Equal     ', 'rights for', 'all       '], 'Test 68');
test(fullJustify(["all","the","world","is","a","stage","and","all","the","men","and","women","merely","players"], 25), ['all  the world is a stage', 'and all the men and women', 'merely players           '], 'Test 69');
test(fullJustify(["One","two","three","four","five","six","seven","eight","nine","ten"], 12), ['One      two', 'three   four', 'five     six', 'seven  eight', 'nine ten    '], 'Test 70');
test(fullJustify(["It", "is", "during", "our", "darkest", "hours", "that", "we", "must", "trust", "in", "the", "light."], 24), ['It is during our darkest', 'hours that we must trust', 'in the light.           '], 'Test 71');
test(fullJustify(["Once", "upon", "a", "time", "in", "a", "land", "far", "far", "away"], 25), ['Once  upon  a  time  in a', 'land far far away        '], 'Test 72');
test(fullJustify(["LongWord1234567890", "Short", "AnotherLongWord1234567", "Tiny", "Word"], 25), ['LongWord1234567890  Short', 'AnotherLongWord1234567   ', 'Tiny Word                '], 'Test 73');
test(fullJustify(["We","are","now","a","great","nation","","must","make","amends","that","we","have","wronged","visitors","from","other","lands"], 12), ['We are now a', 'great nation', '  must  make', 'amends  that', 'we      have', 'wronged     ', 'visitors    ', 'from   other', 'lands       '], 'Test 74');
test(fullJustify(["Sometimes", "we", "have", "to", "let", "go", "of", "the", "past," "to", "move", "forward."], 22), ['Sometimes  we  have to', 'let  go of the past,to', 'move forward.         '], 'Test 75');
test(fullJustify(["A","journey","of","a","thousand","miles","begins","with","a","single","step"], 30), ['A  journey of a thousand miles', 'begins with a single step     '], 'Test 76');
test(fullJustify(["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"], 10), ['The  quick', 'brown  fox', 'jumps over', 'the   lazy', 'dog       '], 'Test 77');
test(fullJustify(["One", "two", "three", "four", "five", "six", "seven"], 10), ['One    two', 'three four', 'five   six', 'seven     '], 'Test 78');
test(fullJustify(["Short", "words", "only"], 10), ['Short     ', 'words only'], 'Test 79');
test(fullJustify(["Life", "is", "either", "a", "great", "adventure", "or", "nothing."], 19), ['Life  is  either  a', 'great  adventure or', 'nothing.           '], 'Test 80');
test(fullJustify(["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"], 20), ['The  quick brown fox', 'jumps  over the lazy', 'dog                 '], 'Test 81');
test(fullJustify(["Justification", "is", "a", "bit", "tricky,", "especially", "when", "the", "words", "are", "short.", "Here", "we", "go."], 20), ['Justification  is  a', 'bit          tricky,', 'especially  when the', 'words   are   short.', 'Here we go.         '], 'Test 82');
test(fullJustify(["Here","is","a","longer","word","that","will","require","some","additional","spaces","to","justify"], 30), ['Here  is  a  longer  word that', 'will  require  some additional', 'spaces to justify             '], 'Test 83');
test(fullJustify(["It", "is", "a", "truth", "universally", "acknowledged", "that", "a", "single", "man", "in", "possession", "of", "a", "good", "fortune"], 20), ['It    is   a   truth', 'universally         ', 'acknowledged  that a', 'single     man    in', 'possession of a good', 'fortune             '], 'Test 84');
test(fullJustify(["If", "you", "set", "your", "goals", "beyond", "your", "abilities,", "you", "will", "never", "achieve", "them."], 25), ['If  you  set  your  goals', 'beyond   your  abilities,', 'you  will  never  achieve', 'them.                    '], 'Test 85');
test(fullJustify(["The", "world", "is", "a", "book", "and", "those", "who", "do", "not", "travel", "read", "only", "one", "page."], 25), ['The  world  is a book and', 'those  who  do not travel', 'read only one page.      '], 'Test 86');
test(fullJustify(["Every","great","developer","you","know","got","where","he","is","by","solving","problems","they","were","uncomfortable","solving","before."], 40), ['Every great developer you know got where', 'he  is  by  solving  problems  they were', 'uncomfortable solving before.           '], 'Test 87');
test(fullJustify(["To","be","or","not","to","be","that","is","the","question"], 25), ['To  be  or not to be that', 'is the question          '], 'Test 88');
test(fullJustify(["Once","upon","a","time","in","a","land","far","far","away"], 22), ['Once  upon a time in a', 'land far far away     '], 'Test 89');
test(fullJustify(["I", "have", "a", "dream"], 10), ['I  have  a', 'dream     '], 'Test 90');
test(fullJustify(["Programming","is","the","art","of","telling","another","person","what","to","do","in","a","language","that","the","other","person","can","understand"], 60), ['Programming  is the art of telling another person what to do', 'in a language that the other person can understand          '], 'Test 91');
test(fullJustify(["One","small","step","for","man","one","giants","leap","for","mankind"], 30), ['One  small  step  for  man one', 'giants leap for mankind       '], 'Test 92');
test(fullJustify(["This", "is", "a", "test", "for", "justification", "algorithm", "to", "see", "how", "it", "works", "with", "longer", "texts"], 25), ['This   is   a   test  for', 'justification   algorithm', 'to  see how it works with', 'longer texts             '], 'Test 93');
test(fullJustify(["One", "word", "in", "each", "line"], 1), ['One', 'word', 'in', 'each', 'line'], 'Test 94');
test(fullJustify(["All", "the", "world’s", "a", "stage,", "And", "all", "the", "men", "and", "women", "merely", "players."], 20), ['All  the  world’s  a', 'stage,  And  all the', 'men and women merely', 'players.            '], 'Test 95');
test(fullJustify(["Continuous","learning","is","the","only","way","to","remain","relevant","in","the","fast-paced","world","of","technology."], 40), ['Continuous  learning  is the only way to', 'remain  relevant in the fast-paced world', 'of technology.                          '], 'Test 96');
test(fullJustify(["The","quick","brown","fox","jumps","over","the","lazy","dog"], 10), ['The  quick', 'brown  fox', 'jumps over', 'the   lazy', 'dog       '], 'Test 97');
test(fullJustify(["The","best","time","of","our","lives","The","worst","time","of","our","lives"], 20), ['The best time of our', 'lives The worst time', 'of our lives        '], 'Test 98');
test(fullJustify(["A", "simple", "sentence."], 20), ['A simple sentence.  '], 'Test 99');
test(fullJustify(["To", "be", "or", "not", "to", "be", "that", "is", "the", "question"], 20), ['To  be  or not to be', 'that is the question'], 'Test 100');
test(fullJustify(["SingleLongWordThatExceedsTheMaxWidthAndNeedsToBeHandledProperly"], 30), ['SingleLongWordThatExceedsTheMaxWidthAndNeedsToBeHandledProperly'], 'Test 101');
test(fullJustify(["Pneumonoultramicroscopicsilicovolcanoconiosis"], 40), ['Pneumonoultramicroscopicsilicovolcanoconiosis'], 'Test 102');
test(fullJustify(["Believe","you","can","and","you","re","halfway","there."], 15), ['Believe you can', 'and    you   re', 'halfway there. '], 'Test 103');
test(fullJustify(["To","be","or","not","to","be,","that","is","the","question:"], 10), ['To  be  or', 'not to be,', 'that    is', 'the       ', 'question: '], 'Test 104');
test(fullJustify(["This", "is", "an", "example", "of", "a", "longer", "text", "that", "will", "be", "used", "to", "test", "the", "algorithm"], 15), ['This    is   an', 'example   of  a', 'longer     text', 'that   will  be', 'used   to  test', 'the algorithm  '], 'Test 105');
test(fullJustify(["One", "Two", "Three", "Four", "Five"], 10), ['One    Two', 'Three Four', 'Five      '], 'Test 106');
test(fullJustify(["Many", "spaces", "should", "go", "here"], 23), ['Many  spaces  should go', 'here                   '], 'Test 107');
test(fullJustify(["Pack", "my", "box", "with", "five", "dozen", "liquor", "jugs."], 20), ['Pack   my  box  with', 'five   dozen  liquor', 'jugs.               '], 'Test 108');

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
