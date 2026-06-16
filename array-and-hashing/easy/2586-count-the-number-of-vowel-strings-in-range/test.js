// Test: 2586. Count The Number Of Vowel Strings In Range
// 100 test cases from LeetCodeDataset
// Run: node test.js

const { vowelStrings } = require("./solution");

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

console.log("\n2586. Count The Number Of Vowel Strings In Range\n");

test(vowelStrings(["sky","fly","why"], 0, 2), 0, 'Test 1');
test(vowelStrings(["apple","banana","orange","umbrella"], 0, 3), 3, 'Test 2');
test(vowelStrings(["are","amy","u"], 0, 2), 2, 'Test 3');
test(vowelStrings(["hey","aeo","mu","ooo","artro"], 1, 4), 3, 'Test 4');
test(vowelStrings(["up","open","over"], 1, 2), 0, 'Test 5');
test(vowelStrings(["ae","ea","ei","ie","ou"], 0, 4), 5, 'Test 6');
test(vowelStrings(["aeiou","uoiea","aeiou","uoiea","aeiou","uoiea"], 0, 5), 6, 'Test 7');
test(vowelStrings(["sky","fly","why","a","e"], 0, 4), 2, 'Test 8');
test(vowelStrings(["umbrella","encyclopedia","analysis","outstanding","initiative"], 1, 3), 1, 'Test 9');
test(vowelStrings(["ocean","mountain","forest","desert","rain"], 0, 4), 0, 'Test 10');
test(vowelStrings(["beautiful","world","with","diverse","languages"], 2, 4), 0, 'Test 11');
test(vowelStrings(["aeiou","uoiea","uiaeou","ouaei","eioua"], 0, 4), 5, 'Test 12');
test(vowelStrings(["xylophone","zephyr","orchestra","xylophone","aeiou","uoiea","uoiea"], 0, 6), 4, 'Test 13');
test(vowelStrings(["aaa","eee","iii","ooo","uuu","aaee","eeaa","aeea","aaea","eeea","eaae","eaeaa","aeaae","aaeae"], 0, 13), 14, 'Test 14');
test(vowelStrings(["queue","adieu","ice","ocean","earth"], 0, 3), 2, 'Test 15');
test(vowelStrings(["umbrella","moon","noon","noon","moon"], 2, 4), 0, 'Test 16');
test(vowelStrings(["algorithm","education","umbrella","icecream","operation","university"], 1, 5), 1, 'Test 17');
test(vowelStrings(["umbrella","opposite","idea","encyclopedia","algorithm","umbrella","opposite","idea","encyclopedia","algorithm"], 3, 7), 4, 'Test 18');
test(vowelStrings(["elephant","umbrella","apple","orange","ice","echo","umbrella"], 1, 6), 6, 'Test 19');
test(vowelStrings(["aviation","exhibition","occasion","environment","instrumentation"], 1, 3), 0, 'Test 20');
test(vowelStrings(["vowel","nonvowel","aeiou","bvowel","endvowel"], 0, 4), 1, 'Test 21');
test(vowelStrings(["aabb","abba","baab","baba","abab"], 0, 4), 1, 'Test 22');
test(vowelStrings(["example","samples","tests","inputs","outputs"], 0, 4), 1, 'Test 23');
test(vowelStrings(["xyz","uvw","qwe","rty","poi"], 0, 4), 0, 'Test 24');
test(vowelStrings(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"], 0, 24), 5, 'Test 25');
test(vowelStrings(["environment","umbrella","education","algorithm","university","encyclopedia"], 2, 5), 1, 'Test 26');
test(vowelStrings(["beautiful","enormous","interesting","unexpected","odd"], 2, 4), 0, 'Test 27');
test(vowelStrings(["sequence","equal","education","algorithm","encyclopedia"], 0, 3), 0, 'Test 28');
test(vowelStrings(["eeeee","aaaaa","iiiii","ooooo","uuuuu","auaeu","eiaie","ouioo","uaeuu","ieoia"], 2, 9), 8, 'Test 29');
test(vowelStrings(["abcdefgh","ijklmnop","qrstuvwxyz","zyxwvutsr","qrstponmlkjihgfedcba"], 0, 4), 0, 'Test 30');
test(vowelStrings(["banana","orange","grape","kiwi","pear","peach","plum","grapefruit","blueberry","cherry"], 3, 9), 0, 'Test 31');
test(vowelStrings(["racecar","level","rotor","kayak","reviler"], 1, 4), 0, 'Test 32');
test(vowelStrings(["aerodynamic","encyclopedia","umbrella","idea","audio"], 1, 4), 4, 'Test 33');
test(vowelStrings(["umbrella","map","python","algorithm","encyclopedia"], 1, 4), 1, 'Test 34');
test(vowelStrings(["umbrella","opposite","idea","encyclopedia","algorithm"], 1, 4), 3, 'Test 35');
test(vowelStrings(["quick","brown","fox","jumps","over","lazy","dog"], 1, 5), 0, 'Test 36');
test(vowelStrings(["aardvark","elephant","iguana","okapi","umbrella"], 0, 4), 3, 'Test 37');
test(vowelStrings(["vowel","voewl","ovwle","wolve","volve"], 0, 4), 1, 'Test 38');
test(vowelStrings(["beautiful","umbrella","innovative","economic","outstanding","underwater"], 0, 5), 2, 'Test 39');
test(vowelStrings(["applepie","banana","orangejuice","grape","peach"], 1, 3), 1, 'Test 40');
test(vowelStrings(["ar","er","ir","or","ur"], 1, 4), 0, 'Test 41');
test(vowelStrings(["a","e","i","o","u","a","e","i","o","u"], 0, 9), 10, 'Test 42');
test(vowelStrings(["sequence","development","environment","assignment","Infinityormation"], 1, 3), 0, 'Test 43');
test(vowelStrings(["a","e","i","o","u","aeiou"], 0, 5), 6, 'Test 44');
test(vowelStrings(["racecar","level","rotor","deified","repaper"], 1, 4), 0, 'Test 45');
test(vowelStrings(["orchid","ocean","octopus","ostrich","oak","oceanography"], 0, 5), 0, 'Test 46');
test(vowelStrings(["volcano","trident","ozone","ocean","mountain"], 2, 4), 1, 'Test 47');
test(vowelStrings(["zzzzz","yyyyy","xxxxx","wwwww","vvvvv"], 0, 4), 0, 'Test 48');
test(vowelStrings(["banana","anana","nana","ana","na","a"], 0, 9), 3, 'Test 49');
test(vowelStrings(["education","university","algorithm","openai"], 1, 3), 1, 'Test 50');
test(vowelStrings(["aeiou","bcd","efg","hij","klm","nop","qrst","uvw","xyz"], 2, 7), 0, 'Test 51');
test(vowelStrings(["aardvark","algorithm","antelope","antenna","apple","antiquity","apricot","atlas"], 1, 7), 3, 'Test 52');
test(vowelStrings(["algorithm","evaluation","interview","education","optimization"], 0, 4), 0, 'Test 53');
test(vowelStrings(["aeiou","uoiea","iouea","uaieo","oieau","aeo","uoiea","uoiea","uoiea","uoiea","uoiea","uoiea"], 0, 11), 12, 'Test 54');
test(vowelStrings(["abracadabra","alabama","alaska","aerodynamic","algorithm","azalea"], 1, 5), 3, 'Test 55');
test(vowelStrings(["start","end","begin","finish","conclude"], 0, 4), 0, 'Test 56');
test(vowelStrings(["education","is","awesome","and","effective"], 1, 4), 2, 'Test 57');
test(vowelStrings(["xyz","uvw","qrs","tuv","lmn","opq"], 1, 5), 0, 'Test 58');
test(vowelStrings(["aeiou","ueiou","ieoai","oeuia","uaeio"], 0, 4), 5, 'Test 59');
test(vowelStrings(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o"], 0, 14), 4, 'Test 60');
test(vowelStrings(["xylophone","xylophones","xylophonically","xylophonist","xylophonists"], 0, 4), 0, 'Test 61');
test(vowelStrings(["aeiou","uaeiou","aeu","aue","eua"], 0, 4), 5, 'Test 62');
test(vowelStrings(["xylophone","yacht","gymnymphilia","hydrangea","ivory"], 0, 4), 0, 'Test 63');
test(vowelStrings(["bcd","efg","hij","klm","nop"], 0, 4), 0, 'Test 64');
test(vowelStrings(["algorithm","education","umbrella","encyclopedia","ocean"], 2, 4), 2, 'Test 65');
test(vowelStrings(["a","e","i","o","u"], 0, 4), 5, 'Test 66');
test(vowelStrings(["umbrella","raincoat","scarf","boots","gloves","jacket","shoes","hat","mittens","gloves","umbrella","hat"], 0, 11), 2, 'Test 67');
test(vowelStrings(["a","a","a","a","a","a"], 0, 5), 6, 'Test 68');
test(vowelStrings(["education","algorithm","encyclopedia","under","umbrella"], 1, 4), 2, 'Test 69');
test(vowelStrings(["aeiou","uoiea","aieou","euoia","oueai"], 0, 4), 5, 'Test 70');
test(vowelStrings(["education","university","algorithm","optimization","encyclopedia"], 1, 4), 1, 'Test 71');
test(vowelStrings(["aabbcc","ddeeff","gghhii","jjkkll","mmnnoo"], 0, 4), 0, 'Test 72');
test(vowelStrings(["education","algorithm","umbrella","opposite","idea"], 0, 4), 3, 'Test 73');
test(vowelStrings(["aeiouaeiou","uoieauoiea","aieouaieou","euoiaeuoia","oueaioueai"], 1, 3), 3, 'Test 74');
test(vowelStrings(["aaa","eee","iii","ooo","uuu"], 0, 4), 5, 'Test 75');
test(vowelStrings(["education","umbrella","idea","algorithm","elephant"], 1, 4), 2, 'Test 76');
test(vowelStrings(["abacaxi","elderberry","fig","grape","honeydew","kiwi","lemon","mango","nectarine","orange","papaya","quince"], 0, 11), 2, 'Test 77');
test(vowelStrings(["sequential","programming","leads","to","complexity"], 1, 3), 0, 'Test 78');
test(vowelStrings(["aeiou","uoiea","ioeau","oaeiu","ueiao"], 0, 4), 5, 'Test 79');
test(vowelStrings(["aaaaa","eeeee","iiiii","ooooo","uuuuu"], 1, 3), 3, 'Test 80');
test(vowelStrings(["sequence","encounter","interval","equation","occasion"], 2, 4), 0, 'Test 81');
test(vowelStrings(["acoustic","analysis","bassoon","clarinet","didgeridoo","flute","guitar","harp","harp","piano","tuba"], 2, 10), 0, 'Test 82');
test(vowelStrings(["sequence","sequences","sequentially","sequenceable","sequenceless"], 2, 4), 0, 'Test 83');
test(vowelStrings(["ae","ea","oi","io","ou","uo"], 0, 5), 6, 'Test 84');
test(vowelStrings(["understanding","learning","grows","every","day"], 0, 2), 0, 'Test 85');
test(vowelStrings(["a","b","c","d","e"], 0, 4), 2, 'Test 86');
test(vowelStrings(["","a","e","i","o","u"], 0, 5), Error: string index out of range, 'Test 87');
test(vowelStrings(["elephant","giraffe","hippo","iguana","jaguar"], 0, 4), 1, 'Test 88');
test(vowelStrings(["xylophone","xylo","yolo","mono","neon"], 1, 4), 0, 'Test 89');
test(vowelStrings(["sequence","structure","synergy","symmetry","spectrum","syzygy"], 2, 5), 0, 'Test 90');
test(vowelStrings(["vowel","testing","algorithm","education","umbrella","sequence","interview","exhibition","occasion","environment"], 3, 8), 1, 'Test 91');
test(vowelStrings(["algorithm","data","structure","programming","language"], 2, 4), 0, 'Test 92');
test(vowelStrings(["","a","e","i","o","u","aeiou","uoiea","euioa","aoieu"], 1, 9), 9, 'Test 93');
test(vowelStrings(["vowel","words","only","here","now"], 0, 4), 0, 'Test 94');
test(vowelStrings(["aeiou","eioua","iouae","ouaei","uaeio"], 0, 4), 5, 'Test 95');
test(vowelStrings(["vowel","vowels","vowelstring","vowelstrings","vowels","strings","string","vow","owel","vowels","vowel"], 3, 10), 0, 'Test 96');
test(vowelStrings(["vowel","start","end","middle","zone","sequence"], 2, 5), 0, 'Test 97');
test(vowelStrings(["sequence","queue","deque","peep","beep","keel","heel","heal","heap","heap","jeep","weep"], 1, 11), 0, 'Test 98');
test(vowelStrings(["elephant","antelope","giraffe","hippo","iguana","jackal","kangaroo","lemur"], 1, 7), 2, 'Test 99');
test(vowelStrings(["amazing","algorithm","umbrella","opposite","idea","beautiful","enormous","interesting","unexpected","odd"], 0, 9), 3, 'Test 100');

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
