// Test: 2810. Faulty Keyboard
// 171 test cases from LeetCodeDataset
// Run: node test.js

const { finalString } = require("./solution");

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

console.log("\n2810. Faulty Keyboard\n");

test(finalString("string"), rtsng, 'Test 1');
test(finalString("aibcdie"), dcbae, 'Test 2');
test(finalString("noicanoati"), taonacno, 'Test 3');
test(finalString("abcide"), cbade, 'Test 4');
test(finalString("poiinter"), ponter, 'Test 5');
test(finalString("abcidifgh"), dabcfgh, 'Test 6');
test(finalString("a"), a, 'Test 7');
test(finalString("iabc"), abc, 'Test 8');
test(finalString("abcdefghi"), hgfedcba, 'Test 9');
test(finalString("lowihello"), wolhello, 'Test 10');
test(finalString("abci"), cba, 'Test 11');
test(finalString("aibiciici"), ccab, 'Test 12');
test(finalString("iiii"), , 'Test 13');
test(finalString("abcidiefgh"), dabcefgh, 'Test 14');
test(finalString("icba"), cba, 'Test 15');
test(finalString("ii"), , 'Test 16');
test(finalString("exampleistring"), rtsexampleng, 'Test 17');
test(finalString("abc"), abc, 'Test 18');
test(finalString("abcdefgh"), abcdefgh, 'Test 19');
test(finalString("aibici"), cab, 'Test 20');
test(finalString("abcidefghi"), hgfedabc, 'Test 21');
test(finalString("noiidea"), nodea, 'Test 22');
test(finalString("iaibic"), bac, 'Test 23');
test(finalString("abcdefghij"), hgfedcbaj, 'Test 24');
test(finalString("abcdei"), edcba, 'Test 25');
test(finalString("thisisateststringwithmanyireversals"), ynamhtrtstsetashtsngwreversals, 'Test 26');
test(finalString("abcdefghiihgfedcbaabcdeffedcba"), abcdefghhgfedcbaabcdeffedcba, 'Test 27');
test(finalString("complexityiincreasesiiwithiiireversals"), htxelpmoctyncreaseswreversals, 'Test 28');
test(finalString("floccinaucinihilipilification"), tacllnccolfnauchpfon, 'Test 29');
test(finalString("startwithiinthemiddle"), mehtnhtstartwddle, 'Test 30');
test(finalString("softwaredevelopmentiitheory"), softwaredevelopmenttheory, 'Test 31');
test(finalString("iinnoouuttffyycckkhhhgggeee"), nnoouuttffyycckkhhhgggeee, 'Test 32');
test(finalString("palindromelevel"), lapndromelevel, 'Test 33');
test(finalString("endwithiiiiiiiiiiiiiiiiii"), wdneth, 'Test 34');
test(finalString("nestedireversalsiiii"), detsenreversals, 'Test 35');
test(finalString("aquickbrownfoxjumpsoverthelazydogi"), godyzalehtrevospmujxofnworbkcaqu, 'Test 36');
test(finalString("abracadabra"), abracadabra, 'Test 37');
test(finalString("pythonprogramming"), mmargorpnohtypng, 'Test 38');
test(finalString("programmingiisfun"), mmargorpngsfun, 'Test 39');
test(finalString("iiiiiii"), , 'Test 40');
test(finalString("xylophoneix"), enohpolyxx, 'Test 41');
test(finalString("iiireversalsnestedinsideiiiii"), eddetsenslasreverns, 'Test 42');
test(finalString("longstringwithseveralireversalsandmorecharacters"), lareveshtrtsgnolngwreversalsandmorecharacters, 'Test 43');
test(finalString("trickytongueiishere"), rtckytongueshere, 'Test 44');
test(finalString("randomcharacterswithiabcdefghijklmnopqrstuvwxyz"), hgfedcbawsretcarahcmodnarthjklmnopqrstuvwxyz, 'Test 45');
test(finalString("longstringwithnointerference"), onhtrtsgnolngwnterference, 'Test 46');
test(finalString("singleireversal"), elgnsreversal, 'Test 47');
test(finalString("datastructuresiiialgorithms"), rogladatastructuresthms, 'Test 48');
test(finalString("thisisaverylongstringthatneedstobechecked"), rtsgnolyrevashtsngthatneedstobechecked, 'Test 49');
test(finalString("algorithmisawesome"), mhtalgorsawesome, 'Test 50');
test(finalString("interview"), vretnew, 'Test 51');
test(finalString("almostdone"), almostdone, 'Test 52');
test(finalString("imississippi"), ppssmss, 'Test 53');
test(finalString("racecariispeedoomeokarttercecar"), racecarspeedoomeokarttercecar, 'Test 54');
test(finalString("reverseiiiandthencontinue"), tnocnehtdnareversenue, 'Test 55');
test(finalString("abcdefghijiiiiiiiiiiiiiijklmnopqrstuvwxyz"), hgfedcbajjklmnopqrstuvwxyz, 'Test 56');
test(finalString("algorithmiiengineering"), reenroglathmengng, 'Test 57');
test(finalString("xylophoneiikeyboard"), xylophonekeyboard, 'Test 58');
test(finalString("almostmiintrandomiisequence"), almostmntrandomsequence, 'Test 59');
test(finalString("aaaaaaaaaaibbbbbbbbbaaaaaaaaaa"), aaaaaaaaaabbbbbbbbbaaaaaaaaaa, 'Test 60');
test(finalString("algorithm"), roglathm, 'Test 61');
test(finalString("simpletestcase"), smpletestcase, 'Test 62');
test(finalString("aaaaabbbbccccdddd"), aaaaabbbbccccdddd, 'Test 63');
test(finalString("redder"), redder, 'Test 64');
test(finalString("reverseeveryithirdcharacter"), htreverseeveryrdcharacter, 'Test 65');
test(finalString("intermittent"), mretnttent, 'Test 66');
test(finalString("supercalifragilisticexpialidocious"), codpxecllacrepusfragstalous, 'Test 67');
test(finalString("abcdefghiijklmnopqrstuvwxyz"), abcdefghjklmnopqrstuvwxyz, 'Test 68');
test(finalString("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii"), , 'Test 69');
test(finalString("nestedreversalsiiinesting"), tsennestedreversalsng, 'Test 70');
test(finalString("iiiiiiiiiii"), , 'Test 71');
test(finalString("onetwothreefourfiveisixseveneightnine"), nthgsfruofeerhtowtenovexsevenene, 'Test 72');
test(finalString("withmultipleis"), elpwthmults, 'Test 73');
test(finalString("nestedintegers"), detsenntegers, 'Test 74');
test(finalString("reversal"), reversal, 'Test 75');
test(finalString("reversingireversibility"), lsreversreverngbty, 'Test 76');
test(finalString("abcdefghiiiiiiiiiijklmnopqrstuvwxyz"), abcdefghjklmnopqrstuvwxyz, 'Test 77');
test(finalString("iiiiiiiii"), , 'Test 78');
test(finalString("sequenceofireversalsii"), foecneuqesreversals, 'Test 79');
test(finalString("abcdefghijiklmnopqrstuvwxyziiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiijklmnopqrstuvwxyz"), jabcdefghklmnopqrstuvwxyzjklmnopqrstuvwxyz, 'Test 80');
test(finalString("thisstringhasiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiinside"), snsahgnhtsstrde, 'Test 81');
test(finalString("abcdefghijiklmnopqrstuvwxyz"), jabcdefghklmnopqrstuvwxyz, 'Test 82');
test(finalString("twofour"), twofour, 'Test 83');
test(finalString("aiaiaiaiaiaiaiai"), aaaaaaaa, 'Test 84');
test(finalString("reverseeveryiinthisstring"), rtssreverseeverynthng, 'Test 85');
test(finalString("complexityincreaseswithmoreireversals"), eromhtytcomplexncreaseswreversals, 'Test 86');
test(finalString("thisisnotsoeasyasitis"), tsthsnotsoeasyass, 'Test 87');
test(finalString("nnnnmmmmlllkkkjjjiiihgfedcbaiiijjkkllmmnn"), abcdefghnnnnmmmmlllkkkjjjjjkkllmmnn, 'Test 88');
test(finalString("faultykeyboardstests"), faultykeyboardstests, 'Test 89');
test(finalString("onlyonei"), enoylno, 'Test 90');
test(finalString("specialcharactersarefun"), cepsalcharactersarefun, 'Test 91');
test(finalString("intermittentireversalsiiii"), tnettntermreversals, 'Test 92');
test(finalString("mississippiii"), ppssmss, 'Test 93');
test(finalString("aaabbbcccdddeeefffggghhhiiiiijjjjkkkkllllmmmmnnnnooooppppqqqqrrrrssssttttuuuuvvvvwwwwxxxxyyyyzzzz"), hhhgggfffeeedddcccbbbaaajjjjkkkkllllmmmmnnnnooooppppqqqqrrrrssssttttuuuuvvvvwwwwxxxxyyyyzzzz, 'Test 94');
test(finalString("icancodeinpython"), edocnacnpython, 'Test 95');
test(finalString("thisisaverylongstringthatwilltestthealgorithm"), roglaehttsetllrtsgnolyrevashtsngthatwthm, 'Test 96');
test(finalString("singleiiiiiiiiiii"), elgns, 'Test 97');
test(finalString("aibohphobia"), bohphobaa, 'Test 98');
test(finalString("aaaaaaaaiiiiiii"), aaaaaaaa, 'Test 99');
test(finalString("debuggingiiibugs"), gndebuggbugs, 'Test 100');
test(finalString("complexstringwithmultipleiiiiinversions"), srevntlumhtrtsxelpmocngwpleons, 'Test 101');
test(finalString("level"), level, 'Test 102');
test(finalString("thisisaverylongstringwithmultipleireversals"), elpwgnsthsaverylongstrthmultreversals, 'Test 103');
test(finalString("interviewi"), wenterv, 'Test 104');
test(finalString("backtothebeginning"), nnbacktothebegng, 'Test 105');
test(finalString("mixedwithiandothercharacters"), htmxedwandothercharacters, 'Test 106');
test(finalString("aibohphobiai"), aabohphob, 'Test 107');
test(finalString("complexityiiis"), ytcomplexs, 'Test 108');
test(finalString("almostdoneii"), almostdone, 'Test 109');
test(finalString("mississippiiiiii"), ssmsspp, 'Test 110');
test(finalString("aaaaabbbbccccddddiiii"), aaaaabbbbccccdddd, 'Test 111');
test(finalString("abcdefghiihgfedcbaiiijjkkllmmnn"), abcdefghhgfedcbajjkkllmmnn, 'Test 112');
test(finalString("ireversalatthestart"), reversalatthestart, 'Test 113');
test(finalString("abcdefghiabcdefghi"), hgfedcbaabcdefgh, 'Test 114');
test(finalString("initialization"), taztnalon, 'Test 115');
test(finalString("bananaananab"), bananaananab, 'Test 116');
test(finalString("congratulations"), talutargnocons, 'Test 117');
test(finalString("nointerruptshere"), onnterruptshere, 'Test 118');
test(finalString("endwithiiiiireversal"), htendwreversal, 'Test 119');
test(finalString("abcdefghijkilmnopqrstuvwtuvrqpomnlijkihgfedcba"), kjkjabcdefghlmnopqrstuvwtuvrqpomnlhgfedcba, 'Test 120');
test(finalString("complexstringwithiiiiiiiiiii"), htrtsxelpmocngw, 'Test 121');
test(finalString("mammaiamamma"), ammamamamma, 'Test 122');
test(finalString("introductiontoalgorithm"), roglaotnontroductthm, 'Test 123');
test(finalString("reversethisplease"), htesreversplease, 'Test 124');
test(finalString("aquickbrownfoxjumpsoverthelazydogii"), uqackbrownfoxjumpsoverthelazydog, 'Test 125');
test(finalString("multipleiiireversalsinbetween"), slasrevertlumplenbetween, 'Test 126');
test(finalString("multipeiiiiiinsersions"), sresnepmultons, 'Test 127');
test(finalString("performanceiiioptimization"), taztpoperformancemon, 'Test 128');
test(finalString("endingwithi"), htdnengw, 'Test 129');
test(finalString("iinbetweeni"), neewtebn, 'Test 130');
test(finalString("noireversals"), onreversals, 'Test 131');
test(finalString("reversalsarefun"), reversalsarefun, 'Test 132');
test(finalString("sequenceiiwithiiiiiiiiiinterspersediiiis"), wecneuqesthntersperseds, 'Test 133');
test(finalString("mixandmatchi"), hctamdnaxm, 'Test 134');
test(finalString("programmingii"), mmargorpng, 'Test 135');
test(finalString("multipleiiiiireversals"), elpmultreversals, 'Test 136');
test(finalString("thisisaverylongstringwithoutianyireversals"), ynawgnsthsaverylongstrthoutreversals, 'Test 137');
test(finalString("xyzzzyxzyzyzyzzyxzyzyzyz"), xyzzzyxzyzyzyzzyxzyzyzyz, 'Test 138');
test(finalString("verylongstringwithrandomcharactersandiiiiiiiiiintersions"), sretndnasretcarahcmodnarhtrtsgnolyrevngwons, 'Test 139');
test(finalString("thisisaverylongstringwithmanyireversals"), ynamhtrtsgnolyrevashtsngwreversals, 'Test 140');
test(finalString("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), aabbccddeeffgghhjjkkllmmnnooppqqrrssttuuvvwwxxyyzz, 'Test 141');
test(finalString("abcdefghiiihgfedcbaiiijjkkllmmnniiihgfedcba"), nnmmllkkjjhgfedcbahgfedcbahgfedcba, 'Test 142');
test(finalString("interviewinterview"), vretnvretnewew, 'Test 143');
test(finalString("oneletter"), oneletter, 'Test 144');
test(finalString("nestedinversionexampleiiii"), srevnnestedonexample, 'Test 145');
test(finalString("deified"), fdeed, 'Test 146');
test(finalString("abcdefghiijiklmnopqrstuvwxyz"), jhgfedcbaklmnopqrstuvwxyz, 'Test 147');
test(finalString("iiiiiiiiiiiibbbbbbbbbbcccccccccceeeeeeeeee"), bbbbbbbbbbcccccccccceeeeeeeeee, 'Test 148');
test(finalString("thisisaverylongstringwithsomeireversalsintheend"), slasreverwgnsthsaverylongstrthsomentheend, 'Test 149');
test(finalString("programmingchallengesarefun"), mmargorpngchallengesarefun, 'Test 150');
test(finalString("nolemonnomelon"), nolemonnomelon, 'Test 151');
test(finalString("nestediinici"), cnestedn, 'Test 152');
test(finalString("continuousintegration"), targetntnocnuouson, 'Test 153');
test(finalString("iiiiiiii"), , 'Test 154');
test(finalString("intermixedcharacters"), mretnxedcharacters, 'Test 155');
test(finalString("racecar"), racecar, 'Test 156');
test(finalString("abracaicabracai"), acarbacabraca, 'Test 157');
test(finalString("quickbrownfoxjumpsovertheilazydog"), ehtrevospmujxofnworbkcqulazydog, 'Test 158');
test(finalString("iiiiiiiiii"), , 'Test 159');
test(finalString("abcdefghiihgfedcba"), abcdefghhgfedcba, 'Test 160');
test(finalString("abcdefghiihgfedcbaabcdefghiihgfedcba"), abcdefghhgfedcbaabcdefghhgfedcba, 'Test 161');
test(finalString("nestedinversionswithinstrings"), rtsnwsnodetsennversthngs, 'Test 162');
test(finalString("thisisatestoftheinputstring"), rtstupnsthsatestoftheng, 'Test 163');
test(finalString("intermittentinversionsareconfusing"), sufnocerasnotnettntermnversng, 'Test 164');
test(finalString("intermittentireversalsiiiiiintermittent"), mretnslasrevermretnttentttent, 'Test 165');
test(finalString("mississippi"), ppssmss, 'Test 166');
test(finalString("incomprehensibility"), lsneherpmocnbty, 'Test 167');
test(finalString("iiiii"), , 'Test 168');
test(finalString("shortiiilong"), trohslong, 'Test 169');
test(finalString("reversemeifoundyou"), emesreverfoundyou, 'Test 170');
test(finalString("reversethisstring"), rtssreversethng, 'Test 171');

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
