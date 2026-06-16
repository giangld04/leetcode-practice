// Test: 2129. Capitalize The Title
// 137 test cases from LeetCodeDataset
// Run: node test.js

const { capitalizeTitle } = require("./solution");

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

console.log("\n2129. Capitalize The Title\n");

test(capitalizeTitle("ai and ml"), ai And ml, 'Test 1');
test(capitalizeTitle("First leTTeR of EACH Word"), First Letter of Each Word, 'Test 2');
test(capitalizeTitle("tHis iS a tEsT"), This is a Test, 'Test 3');
test(capitalizeTitle("a b c"), a b c, 'Test 4');
test(capitalizeTitle("HELLO WORLD"), Hello World, 'Test 5');
test(capitalizeTitle("a b c d e f g"), a b c d e f g, 'Test 6');
test(capitalizeTitle("sMaLl wOrDs"), Small Words, 'Test 7');
test(capitalizeTitle("mY nAmE is Qwen"), my Name is Qwen, 'Test 8');
test(capitalizeTitle("abc"), Abc, 'Test 9');
test(capitalizeTitle("mY sOLution IS Awesome"), my Solution is Awesome, 'Test 10');
test(capitalizeTitle("ab"), ab, 'Test 11');
test(capitalizeTitle("Python Programming"), Python Programming, 'Test 12');
test(capitalizeTitle("this is a test"), This is a Test, 'Test 13');
test(capitalizeTitle("i lOve leetcode"), i Love Leetcode, 'Test 14');
test(capitalizeTitle("mY NaMe Is Qwen"), my Name is Qwen, 'Test 15');
test(capitalizeTitle("capiTalIze tHe titLe"), Capitalize The Title, 'Test 16');
test(capitalizeTitle("Alibaba Cloud"), Alibaba Cloud, 'Test 17');
test(capitalizeTitle("machine learning"), Machine Learning, 'Test 18');
test(capitalizeTitle("tHis is a TeSt"), This is a Test, 'Test 19');
test(capitalizeTitle("a"), a, 'Test 20');
test(capitalizeTitle("hello world"), Hello World, 'Test 21');
test(capitalizeTitle("tHis is A tEsT cASE"), This is a Test Case, 'Test 22');
test(capitalizeTitle("data science"), Data Science, 'Test 23');
test(capitalizeTitle("data science and machine learning"), Data Science And Machine Learning, 'Test 24');
test(capitalizeTitle("the quick"), The Quick, 'Test 25');
test(capitalizeTitle("tiny a big BIGGEST"), Tiny a Big Biggest, 'Test 26');
test(capitalizeTitle("advanced DATABASE MANAGEMENT SYSTEM"), Advanced Database Management System, 'Test 27');
test(capitalizeTitle("FLASK and DJANGO web FRAMEWORKS"), Flask And Django Web Frameworks, 'Test 28');
test(capitalizeTitle("sINGLEcHaRaCters AND twOCHaRaCters"), Singlecharacters And Twocharacters, 'Test 29');
test(capitalizeTitle("PYTHON pROGRAMMING"), Python Programming, 'Test 30');
test(capitalizeTitle("pyThOn cOdInG chAlLenge"), Python Coding Challenge, 'Test 31');
test(capitalizeTitle("data sCience and MaChine LeArning"), Data Science And Machine Learning, 'Test 32');
test(capitalizeTitle("PYTHON programming LANGUAGE"), Python Programming Language, 'Test 33');
test(capitalizeTitle("DESIGN PATTERNS in software ENGINEERING"), Design Patterns in Software Engineering, 'Test 34');
test(capitalizeTitle("lowercase with small words like a and the"), Lowercase With Small Words Like a And The, 'Test 35');
test(capitalizeTitle("wHy cApItAlIzE sOmE wOrDs"), Why Capitalize Some Words, 'Test 36');
test(capitalizeTitle("data sCience and MaChInE lEaRnInG"), Data Science And Machine Learning, 'Test 37');
test(capitalizeTitle("WEB DEVELOPMENT essentials"), Web Development Essentials, 'Test 38');
test(capitalizeTitle("an"), an, 'Test 39');
test(capitalizeTitle("Data Science and Machine Learning"), Data Science And Machine Learning, 'Test 40');
test(capitalizeTitle("INformation TECHNOLOGY"), Information Technology, 'Test 41');
test(capitalizeTitle("cryptography and SECURITY"), Cryptography And Security, 'Test 42');
test(capitalizeTitle("UPPER lower CASE"), Upper Lower Case, 'Test 43');
test(capitalizeTitle("SOFTWARE ENGINEERING principles"), Software Engineering Principles, 'Test 44');
test(capitalizeTitle("LONGEST wORD"), Longest Word, 'Test 45');
test(capitalizeTitle("pYtHoN pRoGrAmMiNg"), Python Programming, 'Test 46');
test(capitalizeTitle("multiple     spaces   here"), Multiple Spaces Here, 'Test 47');
test(capitalizeTitle("sInGlE"), Single, 'Test 48');
test(capitalizeTitle("openai gpt four"), Openai Gpt Four, 'Test 49');
test(capitalizeTitle("user INTERFACE and user EXPERIENCE"), User Interface And User Experience, 'Test 50');
test(capitalizeTitle("VIRTUALIZATION technology"), Virtualization Technology, 'Test 51');
test(capitalizeTitle("in the land OF wonder AND magic"), in The Land of Wonder And Magic, 'Test 52');
test(capitalizeTitle("CoMpLeX wOrDs LiKe SuPeRcAlIfR aNd qUiXoTtIc"), Complex Words Like Supercalifr And Quixottic, 'Test 53');
test(capitalizeTitle("tHis is A tEsT String"), This is a Test String, 'Test 54');
test(capitalizeTitle("INTERNET of THINGS iot"), Internet of Things Iot, 'Test 55');
test(capitalizeTitle("tHiS is a sHoRt TeSt"), This is a Short Test, 'Test 56');
test(capitalizeTitle("python programming LANGUAGE"), Python Programming Language, 'Test 57');
test(capitalizeTitle("a quick brown fox jumps over the lazy dog"), a Quick Brown Fox Jumps Over The Lazy Dog, 'Test 58');
test(capitalizeTitle("UPPERCASE lowercase MIXEDcase"), Uppercase Lowercase Mixedcase, 'Test 59');
test(capitalizeTitle("a SHORT story IN a SMALL town"), a Short Story in a Small Town, 'Test 60');
test(capitalizeTitle("single"), Single, 'Test 61');
test(capitalizeTitle("data STRUCTURE and ALGORITHMS"), Data Structure And Algorithms, 'Test 62');
test(capitalizeTitle("this is a test STRING with MIXED CASE"), This is a Test String With Mixed Case, 'Test 63');
test(capitalizeTitle("to be or not to be"), to be or Not to be, 'Test 64');
test(capitalizeTitle("wordlengthsofthreetwoone"), Wordlengthsofthreetwoone, 'Test 65');
test(capitalizeTitle("wiTh lOnG wOrDs liKe suPercalifragilisticexpialidocious"), With Long Words Like Supercalifragilisticexpialidocious, 'Test 66');
test(capitalizeTitle("this is a longer sentence with more words to test the function"), This is a Longer Sentence With More Words to Test The Function, 'Test 67');
test(capitalizeTitle("very Very LONG title with MANY Words indeed"), Very Very Long Title With Many Words Indeed, 'Test 68');
test(capitalizeTitle("Algorithms and DATA structures"), Algorithms And Data Structures, 'Test 69');
test(capitalizeTitle("tEsTiNg WoRdS wItH vArIoUs lEnGtHs"), Testing Words With Various Lengths, 'Test 70');
test(capitalizeTitle("a quick brown fox"), a Quick Brown Fox, 'Test 71');
test(capitalizeTitle("tExT pRoCeSsInG"), Text Processing, 'Test 72');
test(capitalizeTitle("the quick BROWN fox JUMPS OVER the LAZY DOG"), The Quick Brown Fox Jumps Over The Lazy Dog, 'Test 73');
test(capitalizeTitle("algorithms and data structures"), Algorithms And Data Structures, 'Test 74');
test(capitalizeTitle("a short AND a LONG word"), a Short And a Long Word, 'Test 75');
test(capitalizeTitle("AlGoRiThM aNd dAtA sTrUcTuRe"), Algorithm And Data Structure, 'Test 76');
test(capitalizeTitle("data sCIENCE and maCHine LEARNING"), Data Science And Machine Learning, 'Test 77');
test(capitalizeTitle("cOnsIdEr tHiS eXaMpLe"), Consider This Example, 'Test 78');
test(capitalizeTitle("cloud COMPUTING"), Cloud Computing, 'Test 79');
test(capitalizeTitle("fLASK aNd dJANGO"), Flask And Django, 'Test 80');
test(capitalizeTitle("To be OR not TO be"), to be or Not to be, 'Test 81');
test(capitalizeTitle("multiple words of varying length and CASE"), Multiple Words of Varying Length And Case, 'Test 82');
test(capitalizeTitle("network SECURITY"), Network Security, 'Test 83');
test(capitalizeTitle("programming IN python"), Programming in Python, 'Test 84');
test(capitalizeTitle("the QUICK brown FOX jumps OVER the LAZY dog"), The Quick Brown Fox Jumps Over The Lazy Dog, 'Test 85');
test(capitalizeTitle("MiXcAsE wOrDlEnGtH"), Mixcase Wordlength, 'Test 86');
test(capitalizeTitle("in"), in, 'Test 87');
test(capitalizeTitle("wiTh grEat pOwEr cOmEs gReAt rEsPoNsIbIlItY"), With Great Power Comes Great Responsibility, 'Test 88');
test(capitalizeTitle("algorithms AND dataSTRUCTURES"), Algorithms And Datastructures, 'Test 89');
test(capitalizeTitle("wiTh gReAt pOWeR cOmEs gReAt rEsPoNsIbIlItY"), With Great Power Comes Great Responsibility, 'Test 90');
test(capitalizeTitle("A B c D E F G"), a b c d e f g, 'Test 91');
test(capitalizeTitle("AI and MACHINE LEARNING"), ai And Machine Learning, 'Test 92');
test(capitalizeTitle("big DATA ANALYSIS"), Big Data Analysis, 'Test 93');
test(capitalizeTitle("mUlTiPlE sMaLl wOrDs"), Multiple Small Words, 'Test 94');
test(capitalizeTitle("LEETcode IS coOL"), Leetcode is Cool, 'Test 95');
test(capitalizeTitle("two Words"), Two Words, 'Test 96');
test(capitalizeTitle("introduction to ARTIFICIAL INTELLIGENCE"), Introduction to Artificial Intelligence, 'Test 97');
test(capitalizeTitle("sOlVe tHe rObOt wOrLd cHAlLeNgEs"), Solve The Robot World Challenges, 'Test 98');
test(capitalizeTitle("mIxEd cAsE iNpUt"), Mixed Case Input, 'Test 99');
test(capitalizeTitle("EACH WORD IN THE TITLE"), Each Word in The Title, 'Test 100');
test(capitalizeTitle("programming in PYTHON"), Programming in Python, 'Test 101');
test(capitalizeTitle("one two three four five six seven eight nine ten"), One Two Three Four Five Six Seven Eight Nine Ten, 'Test 102');
test(capitalizeTitle("very very LONG words in THIS sentence"), Very Very Long Words in This Sentence, 'Test 103');
test(capitalizeTitle("leet code CHALLENGE"), Leet Code Challenge, 'Test 104');
test(capitalizeTitle("the"), The, 'Test 105');
test(capitalizeTitle("double two"), Double Two, 'Test 106');
test(capitalizeTitle("a B c D E F G"), a b c d e f g, 'Test 107');
test(capitalizeTitle("a b c d e f g h i j k l m n o p q r s t u v w x y z"), a b c d e f g h i j k l m n o p q r s t u v w x y z, 'Test 108');
test(capitalizeTitle("in The HoLlyWoOd"), in The Hollywood, 'Test 109');
test(capitalizeTitle("tHis is a tEsT string"), This is a Test String, 'Test 110');
test(capitalizeTitle("MiXeD CaSe wOrDs"), Mixed Case Words, 'Test 111');
test(capitalizeTitle("multiple small words in here"), Multiple Small Words in Here, 'Test 112');
test(capitalizeTitle("in the HEART of the CITY"), in The Heart of The City, 'Test 113');
test(capitalizeTitle("randomly CaPiTaLiZed WoRds"), Randomly Capitalized Words, 'Test 114');
test(capitalizeTitle("To BE OR NOT to BE"), to be or Not to be, 'Test 115');
test(capitalizeTitle("MiNiMaL MaXiMaL"), Minimal Maximal, 'Test 116');
test(capitalizeTitle("HELLO wORLD"), Hello World, 'Test 117');
test(capitalizeTitle("THE quick BROWN fox JUMPS OVER the LAZY dog"), The Quick Brown Fox Jumps Over The Lazy Dog, 'Test 118');
test(capitalizeTitle("data SCIENCE and MACHINE LEARNING"), Data Science And Machine Learning, 'Test 119');
test(capitalizeTitle("pYthon programming lanGuage"), Python Programming Language, 'Test 120');
test(capitalizeTitle("OpenAI GPT-4"), Openai Gpt-4, 'Test 121');
test(capitalizeTitle("triple three words"), Triple Three Words, 'Test 122');
test(capitalizeTitle("eNcYcLopEdIa oF pHySiCs aNd mAtHeMaTiCs"), Encyclopedia of Physics And Mathematics, 'Test 123');
test(capitalizeTitle("a a a a a a a"), a a a a a a a, 'Test 124');
test(capitalizeTitle("openAI GPT AND machineLEARNING"), Openai Gpt And Machinelearning, 'Test 125');
test(capitalizeTitle("PYTHON programming"), Python Programming, 'Test 126');
test(capitalizeTitle("sOFTWARE dEVELOPMENT"), Software Development, 'Test 127');
test(capitalizeTitle("tHiS iS a TeSt CaSe"), This is a Test Case, 'Test 128');
test(capitalizeTitle("wEb dEveLopMeNt fOr bEgInNeRs"), Web Development For Beginners, 'Test 129');
test(capitalizeTitle("one"), One, 'Test 130');
test(capitalizeTitle("Data STRUCTURES and ALGORITHMs"), Data Structures And Algorithms, 'Test 131');
test(capitalizeTitle("aBcDeFgHiJ kLmNoPqRsT"), Abcdefghij Klmnopqrst, 'Test 132');
test(capitalizeTitle("Python Programming Language"), Python Programming Language, 'Test 133');
test(capitalizeTitle("blockCHAIN technology"), Blockchain Technology, 'Test 134');
test(capitalizeTitle("Python Programming Is Fun"), Python Programming is Fun, 'Test 135');
test(capitalizeTitle("LoNg WoRdS aNd sHoRt wOrDs"), Long Words And Short Words, 'Test 136');
test(capitalizeTitle("tHe qUiCk bRoWn fOx"), The Quick Brown Fox, 'Test 137');

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
