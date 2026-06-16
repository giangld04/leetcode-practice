// Test: 557. Reverse Words In A String Iii
// 91 test cases from LeetCodeDataset
// Run: node test.js

const { reverseWords } = require("./solution");

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

console.log("\n557. Reverse Words In A String Iii\n");

test(reverseWords("Reverse each word"), esreveR hcae drow, 'Test 1');
test(reverseWords("Python Programming"), nohtyP gnimmargorP, 'Test 2');
test(reverseWords("Python is fun"), nohtyP si nuf, 'Test 3');
test(reverseWords("reverse each word"), esrever hcae drow, 'Test 4');
test(reverseWords("Mr Ding"), rM gniD, 'Test 5');
test(reverseWords("Hello World"), olleH dlroW, 'Test 6');
test(reverseWords("Let's take LeetCode contest"), s'teL ekat edoCteeL tsetnoc, 'Test 7');
test(reverseWords("a b c d e"), a b c d e, 'Test 8');
test(reverseWords("a long sentence with multiple words to reverse each one"), a gnol ecnetnes htiw elpitlum sdrow ot esrever hcae eno, 'Test 9');
test(reverseWords("spaces    at    the    end    of    the    sentence    "), secaps ta eht dne fo eht ecnetnes, 'Test 10');
test(reverseWords("longwordswithoutspaces"), secapstuohtiwsdrowgnol, 'Test 11');
test(reverseWords("!@#$%^ &*[]"), ^%$#@! ][*&, 'Test 12');
test(reverseWords("longwordthatdoesnotcontainanywhitespace"), ecapsetihwynaniatnoctonseodtahtdrowgnol, 'Test 13');
test(reverseWords("Able was I ere I saw Elba"), elbA saw I ere I was ablE, 'Test 14');
test(reverseWords("a quick brown fox jumps over the lazy dog"), a kciuq nworb xof spmuj revo eht yzal god, 'Test 15');
test(reverseWords("Qwen AI assistant"), newQ IA tnatsissa, 'Test 16');
test(reverseWords("multiple    spaces between words"), elpitlum secaps neewteb sdrow, 'Test 17');
test(reverseWords("123 abc 456 def 789 ghi"), 321 cba 654 fed 987 ihg, 'Test 18');
test(reverseWords("Was it a car or a cat I saw"), saW ti a rac ro a tac I was, 'Test 19');
test(reverseWords("Eva can I see bees in a cave"), avE nac I ees seeb ni a evac, 'Test 20');
test(reverseWords("racecar level kayak deed civic"), racecar level kayak deed civic, 'Test 21');
test(reverseWords("A quick brown fox jumps over the lazy dog"), A kciuq nworb xof spmuj revo eht yzal god, 'Test 22');
test(reverseWords("Do geese see God"), oD eseeg ees doG, 'Test 23');
test(reverseWords("singleword"), drowelgnis, 'Test 24');
test(reverseWords("very long string with multiple words to ensure the solution handles large inputs efficiently"), yrev gnol gnirts htiw elpitlum sdrow ot erusne eht noitulos seldnah egral stupni yltneiciffe, 'Test 25');
test(reverseWords("The quick brown fox jumps over the lazy dog"), ehT kciuq nworb xof spmuj revo eht yzal god, 'Test 26');
test(reverseWords("EdgeCase"), esaCegdE, 'Test 27');
test(reverseWords("!@#$% ^&*[]"), %$#@! ][*&^, 'Test 28');
test(reverseWords("A B C D E F G H I J K L M N O P Q R S T U V W X Y Z"), A B C D E F G H I J K L M N O P Q R S T U V W X Y Z, 'Test 29');
test(reverseWords("abcdef ghijklm nopqrst uvwxyz"), fedcba mlkjihg tsrqpon zyxwvu, 'Test 30');
test(reverseWords("123 456 789"), 321 654 987, 'Test 31');
test(reverseWords("123abc def456 ghi789"), cba321 654fed 987ihg, 'Test 32');
test(reverseWords("SingleWord"), droWelgniS, 'Test 33');
test(reverseWords("12345 67890 111213"), 54321 09876 312111, 'Test 34');
test(reverseWords("12345 67890 09876 54321"), 54321 09876 67890 12345, 'Test 35');
test(reverseWords("Debugging is twice as hard as writing the code in the first place"), gniggubeD si eciwt sa drah sa gnitirw eht edoc ni eht tsrif ecalp, 'Test 36');
test(reverseWords("Palindrome level deed civic radar rotor kayak"), emordnilaP level deed civic radar rotor kayak, 'Test 37');
test(reverseWords("Special $characters #are &important"), laicepS sretcarahc$ era# tnatropmi&, 'Test 38');
test(reverseWords("a1 b2 c3 d4 e5 f6 g7 h8 i9 j0"), 1a 2b 3c 4d 5e 6f 7g 8h 9i 0j, 'Test 39');
test(reverseWords("Programming challenges are great"), gnimmargorP segnellahc era taerg, 'Test 40');
test(reverseWords("No lemon no melon"), oN nomel on nolem, 'Test 41');
test(reverseWords("Python is fun to learn"), nohtyP si nuf ot nrael, 'Test 42');
test(reverseWords("Desperation is the true mark of weakness"), noitarepseD si eht eurt kram fo ssenkaew, 'Test 43');
test(reverseWords("The quick brown fox"), ehT kciuq nworb xof, 'Test 44');
test(reverseWords("Multiple   spaces   in   between"), elpitluM secaps ni neewteb, 'Test 45');
test(reverseWords("special!@# characters $%^&* should be reversed"), #@!laiceps sretcarahc *&^%$ dluohs eb desrever, 'Test 46');
test(reverseWords("123abc def456 ghi789 jkl012"), cba321 654fed 987ihg 210lkj, 'Test 47');
test(reverseWords("special!@# $%^&*[] characters"), #@!laiceps ][*&^%$ sretcarahc, 'Test 48');
test(reverseWords("Very long sentence with multiple words to test the implementation correctly"), yreV gnol ecnetnes htiw elpitlum sdrow ot tset eht noitatnemelpmi yltcerroc, 'Test 49');
test(reverseWords("Mixed CASE with UPPER and lower"), dexiM ESAC htiw REPPU dna rewol, 'Test 50');
test(reverseWords("Reverse each word in this sentence"), esreveR hcae drow ni siht ecnetnes, 'Test 51');
test(reverseWords("Alibaba Cloud Services"), ababilA duolC secivreS, 'Test 52');
test(reverseWords("multiple   spaces between words"), elpitlum secaps neewteb sdrow, 'Test 53');
test(reverseWords("Step on no pets"), petS no on step, 'Test 54');
test(reverseWords("Special!@# $%^&*[] Characters"), #@!laicepS ][*&^%$ sretcarahC, 'Test 55');
test(reverseWords("OpenAI GPT-4"), IAnepO 4-TPG, 'Test 56');
test(reverseWords("Never odd or even"), reveN ddo ro neve, 'Test 57');
test(reverseWords("Keep calm and code on"), peeK mlac dna edoc no, 'Test 58');
test(reverseWords("OneLongWordWithoutSpaces"), secapStuohtiWdroWgnoLenO, 'Test 59');
test(reverseWords("Python is fun and challenging"), nohtyP si nuf dna gnignellahc, 'Test 60');
test(reverseWords("1234567890 0987654321 1122334455 5544332211"), 0987654321 1234567890 5544332211 1122334455, 'Test 61');
test(reverseWords("Mickey Mouse"), yekciM esuoM, 'Test 62');
test(reverseWords("Reverse each word but not the sentence order"), esreveR hcae drow tub ton eht ecnetnes redro, 'Test 63');
test(reverseWords("Programming Challenges"), gnimmargorP segnellahC, 'Test 64');
test(reverseWords("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), zzyyxxwwvvuuttssrrqqppoonnmmllkkjjiihhggffeeddccbbaa, 'Test 65');
test(reverseWords("12345 67890 54321 09876"), 54321 09876 12345 67890, 'Test 66');
test(reverseWords("verylongwordwithoutspaces"), secapstuohtiwdrowgnolyrev, 'Test 67');
test(reverseWords("CASE SENSITIVE or NOT"), ESAC EVITISNES ro TON, 'Test 68');
test(reverseWords("reverse this sentence please"), esrever siht ecnetnes esaelp, 'Test 69');
test(reverseWords("abcdefghijklmnopqrstuvwxyz"), zyxwvutsrqponmlkjihgfedcba, 'Test 70');
test(reverseWords("1a2b3c4d5e 6f7g8h9i0j"), e5d4c3b2a1 j0i9h8g7f6, 'Test 71');
test(reverseWords("spaces   between   words"), secaps neewteb sdrow, 'Test 72');
test(reverseWords("reversed words in this sentence should be flipped"), desrever sdrow ni siht ecnetnes dluohs eb deppilf, 'Test 73');
test(reverseWords("Multiple    spaces between words"), elpitluM secaps neewteb sdrow, 'Test 74');
test(reverseWords("1234567890"), 0987654321, 'Test 75');
test(reverseWords("a"), a, 'Test 76');
test(reverseWords("Try your best and you will succeed"), yrT ruoy tseb dna uoy lliw deeccus, 'Test 77');
test(reverseWords("Data structures and algorithms"), ataD serutcurts dna smhtirogla, 'Test 78');
test(reverseWords("This is a test for the reverseWords function"), sihT si a tset rof eht sdroWesrever noitcnuf, 'Test 79');
test(reverseWords("12345 67890"), 54321 09876, 'Test 80');
test(reverseWords("This is a test of the reverseWords function"), sihT si a tset fo eht sdroWesrever noitcnuf, 'Test 81');
test(reverseWords("Python is an awesome programming language"), nohtyP si na emosewa gnimmargorp egaugnal, 'Test 82');
test(reverseWords("MixedCASE Words"), ESACdexiM sdroW, 'Test 83');
test(reverseWords("aBcDeFg HiJkLmNoP QrStUvWxYz"), gFeDcBa PoNmLkJiH zYxWvUtSrQ, 'Test 84');
test(reverseWords("racecar level kayak rotator"), racecar level kayak rotator, 'Test 85');
test(reverseWords("123 456 789 0"), 321 654 987 0, 'Test 86');
test(reverseWords("Madam Arora teaches malayalam"), madaM arorA sehcaet malayalam, 'Test 87');
test(reverseWords("Palindrome madam racecar"), emordnilaP madam racecar, 'Test 88');
test(reverseWords("Another EdgeCase!"), rehtonA !esaCegdE, 'Test 89');
test(reverseWords("Multiple    spaces    between words"), elpitluM secaps neewteb sdrow, 'Test 90');
test(reverseWords("multiple     spaces between words should be preserved"), elpitlum secaps neewteb sdrow dluohs eb devreserp, 'Test 91');

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
