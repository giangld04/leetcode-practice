// Test: 1592. Rearrange Spaces Between Words
// 137 test cases from LeetCodeDataset
// Run: node test.js

const { reorderSpaces } = require("./solution");

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

console.log("\n1592. Rearrange Spaces Between Words\n");

test(reorderSpaces("  leading and trailing spaces  "), leading  and  trailing  spaces, 'Test 1');
test(reorderSpaces("one"), one, 'Test 2');
test(reorderSpaces("  a  "), a, 'Test 3');
test(reorderSpaces("hello   world"), hello   world, 'Test 4');
test(reorderSpaces("example   example   example"), example   example   example, 'Test 5');
test(reorderSpaces("a b c d e"), a b c d e, 'Test 6');
test(reorderSpaces("  this   is  a sentence "), this   is   a   sentence, 'Test 7');
test(reorderSpaces("one two three"), one two three, 'Test 8');
test(reorderSpaces("  multiple    spaces  here "), multiple    spaces    here, 'Test 9');
test(reorderSpaces("the    quick brown   fox"), the  quick  brown  fox, 'Test 10');
test(reorderSpaces("    a    "), a, 'Test 11');
test(reorderSpaces("uneven    spacing in   text"), uneven  spacing  in  text, 'Test 12');
test(reorderSpaces("  hello world  "), hello     world, 'Test 13');
test(reorderSpaces(" practice   makes   perfect"), practice   makes   perfect, 'Test 14');
test(reorderSpaces("two words"), two words, 'Test 15');
test(reorderSpaces("one two three four"), one two three four, 'Test 16');
test(reorderSpaces("a     b"), a     b, 'Test 17');
test(reorderSpaces("  one    two  three four "), one   two   three   four, 'Test 18');
test(reorderSpaces("a b"), a b, 'Test 19');
test(reorderSpaces("  welcome to  the jungle "), welcome  to  the  jungle, 'Test 20');
test(reorderSpaces("a"), a, 'Test 21');
test(reorderSpaces("equal spaces"), equal spaces, 'Test 22');
test(reorderSpaces("a b c d e f g h i j"), a b c d e f g h i j, 'Test 23');
test(reorderSpaces("longerwordwithnospaces"), longerwordwithnospaces, 'Test 24');
test(reorderSpaces("word"), word, 'Test 25');
test(reorderSpaces("consecutive    spaces    should    be    handled"), consecutive    spaces    should    be    handled, 'Test 26');
test(reorderSpaces("a b c d e f g h i j k l m n o p q r s t u v w x y z"), a b c d e f g h i j k l m n o p q r s t u v w x y z, 'Test 27');
test(reorderSpaces("equal    spaces between words"), equal  spaces  between  words, 'Test 28');
test(reorderSpaces("  spaces  before  and  after  and  in  between  "), spaces  before  and  after  and  in  between, 'Test 29');
test(reorderSpaces("equal   spaces   should   be   here"), equal   spaces   should   be   here, 'Test 30');
test(reorderSpaces("   spaces before and after and    in between    "), spaces  before  and  after  and  in  between, 'Test 31');
test(reorderSpaces("spaces at the beginning and end      of the sentence"), spaces at the beginning and end of the sentence, 'Test 32');
test(reorderSpaces("   uneven   spaces   distribution   is   tricky   "), uneven    spaces    distribution    is    tricky, 'Test 33');
test(reorderSpaces("               a"), a, 'Test 34');
test(reorderSpaces("onewordwith         trailing"), onewordwith         trailing, 'Test 35');
test(reorderSpaces("  uneven    spacing everywhere   "), uneven     spacing     everywhere, 'Test 36');
test(reorderSpaces("evenly   distributed   spaces   are   good   for   readability"), evenly   distributed   spaces   are   good   for   readability, 'Test 37');
test(reorderSpaces("one verylongwordthatwillnotgetsplit"), one verylongwordthatwillnotgetsplit, 'Test 38');
test(reorderSpaces("a  b   c    d     e"), a   b   c   d   e, 'Test 39');
test(reorderSpaces("   equal    spacing    here "), equal      spacing      here, 'Test 40');
test(reorderSpaces("short longword verylongwordwithnospaces"), short longword verylongwordwithnospaces, 'Test 41');
test(reorderSpaces("a long sentence with more words to test the functionality"), a long sentence with more words to test the functionality, 'Test 42');
test(reorderSpaces("one          two           three            four"), one           two           three           four, 'Test 43');
test(reorderSpaces("     singlewordwithmanyspacesbeforeandafterspaces      "), singlewordwithmanyspacesbeforeandafterspaces, 'Test 44');
test(reorderSpaces("one two three four five six seven eight nine ten"), one two three four five six seven eight nine ten, 'Test 45');
test(reorderSpaces("tiny gaps"), tiny gaps, 'Test 46');
test(reorderSpaces("   one   two   three   four   five   six   seven   eight   nine   ten   "), one   two   three   four   five   six   seven   eight   nine   ten, 'Test 47');
test(reorderSpaces("averylongwordwithnospaces"), averylongwordwithnospaces, 'Test 48');
test(reorderSpaces("unequal   spaces   should   be   here   with   extra"), unequal   spaces   should   be   here   with   extra, 'Test 49');
test(reorderSpaces("    spacesbeforeand    spacesafter    "), spacesbeforeand            spacesafter, 'Test 50');
test(reorderSpaces("averylongwordandanotherlongwordandafewmorewords"), averylongwordandanotherlongwordandafewmorewords, 'Test 51');
test(reorderSpaces("this is a test with multiple     spaces"), this is a test with multiple spaces, 'Test 52');
test(reorderSpaces(" one  two three four five six seven eight nine ten "), one two three four five six seven eight nine ten, 'Test 53');
test(reorderSpaces("leading         oneword"), leading         oneword, 'Test 54');
test(reorderSpaces("many       spaces      in      the      middle"), many      spaces      in      the      middle, 'Test 55');
test(reorderSpaces("  singleword  "), singleword, 'Test 56');
test(reorderSpaces("equal spaces between each"), equal spaces between each, 'Test 57');
test(reorderSpaces("testcase    with    varied    spacing"), testcase    with    varied    spacing, 'Test 58');
test(reorderSpaces("  uneven    spacing   in    this   sentence  "), uneven    spacing    in    this    sentence, 'Test 59');
test(reorderSpaces("    verylongwordwithnospaces    "), verylongwordwithnospaces, 'Test 60');
test(reorderSpaces("     multiple        spaces      between     words    "), multiple         spaces         between         words, 'Test 61');
test(reorderSpaces("equal equal equal equal"), equal equal equal equal, 'Test 62');
test(reorderSpaces("a very long sentence with multiple    spaces between words to test the algorithm"), a very long sentence with multiple spaces between words to test the algorithm, 'Test 63');
test(reorderSpaces("onetwothreefourfivesixseveneightnineten"), onetwothreefourfivesixseveneightnineten, 'Test 64');
test(reorderSpaces("words     with     uneven      spaces"), words     with     uneven     spaces, 'Test 65');
test(reorderSpaces("      many        spaces      around        each    word      "), many         spaces         around         each         word, 'Test 66');
test(reorderSpaces("spaces   at   the   beginning   and   the   end   "), spaces   at   the   beginning   and   the   end, 'Test 67');
test(reorderSpaces("   multiple     spaces     between     words    "), multiple       spaces       between       words, 'Test 68');
test(reorderSpaces("    multiplelines
are
not
allowed    "), Error: Solution.reorderSpaces[] missing 1 required positional argument: 'text', 'Test 69');
test(reorderSpaces("  onewordwithspacesonbothends"), onewordwithspacesonbothends, 'Test 70');
test(reorderSpaces("equal    spaces    between    words"), equal    spaces    between    words, 'Test 71');
test(reorderSpaces("uneven    spacing between     words"), uneven   spacing   between   words, 'Test 72');
test(reorderSpaces("spaces    at    the    beginning    and    end    spaces"), spaces    at    the    beginning    and    end    spaces, 'Test 73');
test(reorderSpaces("    a    b    c    d    e    f    g    "), a     b     c     d     e     f     g, 'Test 74');
test(reorderSpaces("lastwordwithaspaceattheend "), lastwordwithaspaceattheend, 'Test 75');
test(reorderSpaces("equal spacing between words"), equal spacing between words, 'Test 76');
test(reorderSpaces("     spaces     at     the     start     and     end     "), spaces       at       the       start       and       end, 'Test 77');
test(reorderSpaces("short words in here"), short words in here, 'Test 78');
test(reorderSpaces("shortwords"), shortwords, 'Test 79');
test(reorderSpaces("equal spaces   should   be   here"), equal  spaces  should  be  here, 'Test 80');
test(reorderSpaces("a b c d e f g"), a b c d e f g, 'Test 81');
test(reorderSpaces("one twothree four five six seven"), one twothree four five six seven, 'Test 82');
test(reorderSpaces("   onebigwordwith  manyspaces   and  a few   words"), onebigwordwith  manyspaces  and  a  few  words, 'Test 83');
test(reorderSpaces("averylongword         withaverylongword"), averylongword         withaverylongword, 'Test 84');
test(reorderSpaces("no extra spaces"), no extra spaces, 'Test 85');
test(reorderSpaces("     spacesatthestart"), spacesatthestart, 'Test 86');
test(reorderSpaces("    one    two    three    four    five    six    seven    eight    nine    ten    eleven    twelve    thirteen    fourteen    fifteen"), one    two    three    four    five    six    seven    eight    nine    ten    eleven    twelve    thirteen    fourteen    fifteen, 'Test 87');
test(reorderSpaces("spacesattheend     "), spacesattheend, 'Test 88');
test(reorderSpaces("many   many   many   spaces"), many   many   many   spaces, 'Test 89');
test(reorderSpaces("    multiple      spaces     between words    "), multiple      spaces      between      words, 'Test 90');
test(reorderSpaces("onlyone"), onlyone, 'Test 91');
test(reorderSpaces("a    a    a    a    a    a"), a    a    a    a    a    a, 'Test 92');
test(reorderSpaces("   extra    spaces   should    go    to    the    end"), extra    spaces    should    go    to    the    end, 'Test 93');
test(reorderSpaces("     a     b     c     d     "), a        b        c        d, 'Test 94');
test(reorderSpaces("                             singlewordwithmanyspaces"), singlewordwithmanyspaces, 'Test 95');
test(reorderSpaces("averylongword   with  spaces"), averylongword  with  spaces, 'Test 96');
test(reorderSpaces("  multiplelines
withspaces  "), Error: Solution.reorderSpaces[] missing 1 required positional argument: 'text', 'Test 97');
test(reorderSpaces("equal spaces between words"), equal spaces between words, 'Test 98');
test(reorderSpaces("uneven    spacing    is    tricky"), uneven    spacing    is    tricky, 'Test 99');
test(reorderSpaces("    singleword    "), singleword, 'Test 100');
test(reorderSpaces("beginning spaces are    here"), beginning  spaces  are  here, 'Test 101');
test(reorderSpaces("justoneverylongwordwithoutspaces"), justoneverylongwordwithoutspaces, 'Test 102');
test(reorderSpaces("    a    b    c    d    e    f    g    h    i    j    "), a    b    c    d    e    f    g    h    i    j, 'Test 103');
test(reorderSpaces("   one     two    three     four    "), one       two       three       four, 'Test 104');
test(reorderSpaces("only one space"), only one space, 'Test 105');
test(reorderSpaces("longwordssubstitutingforspaceswhicharespacious"), longwordssubstitutingforspaceswhicharespacious, 'Test 106');
test(reorderSpaces("a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a"), a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a, 'Test 107');
test(reorderSpaces("verylongwordwithoutspaces"), verylongwordwithoutspaces, 'Test 108');
test(reorderSpaces("multiple    spaces   between    words"), multiple   spaces   between   words, 'Test 109');
test(reorderSpaces("singleword"), singleword, 'Test 110');
test(reorderSpaces("onewordwithspacesonbothends  "), onewordwithspacesonbothends, 'Test 111');
test(reorderSpaces("uneven    spaces at the end"), uneven spaces at the end, 'Test 112');
test(reorderSpaces("shorttext"), shorttext, 'Test 113');
test(reorderSpaces(" firstwordwithaspaceatthebeginning"), firstwordwithaspaceatthebeginning, 'Test 114');
test(reorderSpaces("singlewordwithmanyspaces                               "), singlewordwithmanyspaces, 'Test 115');
test(reorderSpaces("short words"), short words, 'Test 116');
test(reorderSpaces("just one word in here"), just one word in here, 'Test 117');
test(reorderSpaces("verylongwordwithnospaces"), verylongwordwithnospaces, 'Test 118');
test(reorderSpaces("thisisaverylongword"), thisisaverylongword, 'Test 119');
test(reorderSpaces("just     one    word    but    many    spaces"), just    one    word    but    many    spaces, 'Test 120');
test(reorderSpaces("a               "), a, 'Test 121');
test(reorderSpaces("    spaces    at    the    beginning    and    the    end    "), spaces     at     the     beginning     and     the     end, 'Test 122');
test(reorderSpaces(" spaces at the end of the sentence    "), spaces at the end of the sentence, 'Test 123');
test(reorderSpaces("a    single    word    surrounded    by    spaces"), a    single    word    surrounded    by    spaces, 'Test 124');
test(reorderSpaces("    "), , 'Test 125');
test(reorderSpaces("    multiple    spaces    between    words    "), multiple      spaces      between      words, 'Test 126');
test(reorderSpaces("  word  with  multiple  spaces  in  between  words  "), word  with  multiple  spaces  in  between  words, 'Test 127');
test(reorderSpaces("      justone      "), justone, 'Test 128');
test(reorderSpaces("short longword evenlongerword"), short longword evenlongerword, 'Test 129');
test(reorderSpaces("     multiple      spaces      between      words     "), multiple         spaces         between         words, 'Test 130');
test(reorderSpaces("just   one   more   test   case"), just   one   more   test   case, 'Test 131');
test(reorderSpaces("a    b c   d e    f g"), a  b  c  d  e  f  g, 'Test 132');
test(reorderSpaces("many    many    many    many    many"), many    many    many    many    many, 'Test 133');
test(reorderSpaces("many    spaces    at    the    end    "), many     spaces     at     the     end, 'Test 134');
test(reorderSpaces("word1 word2word3word4word5"), word1 word2word3word4word5, 'Test 135');
test(reorderSpaces("multiple    spaces    between    words"), multiple    spaces    between    words, 'Test 136');
test(reorderSpaces("multiple   spaces    between    words"), multiple   spaces   between   words, 'Test 137');

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
