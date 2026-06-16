// Test: 2828. Check If A String Is An Acronym Of Words
// 129 test cases from LeetCodeDataset
// Run: node test.js

const { isAcronym } = require("./solution");

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

console.log("\n2828. Check If A String Is An Acronym Of Words\n");

test(isAcronym(["different","words","here"], "dwh"), true, 'Test 1');
test(isAcronym(["dog","cat"], "dc"), true, 'Test 2');
test(isAcronym(["single"], "s"), true, 'Test 3');
test(isAcronym(["make","america","great","again"], "mag"), false, 'Test 4');
test(isAcronym(["quick","brown","fox"], "qbf"), true, 'Test 5');
test(isAcronym(["one","two","three","four"], "otfh"), false, 'Test 6');
test(isAcronym(["python","programming","is","fun"], "ppif"), true, 'Test 7');
test(isAcronym(["an","apple"], "a"), false, 'Test 8');
test(isAcronym(["python","is","fun"], "pif"), true, 'Test 9');
test(isAcronym(["a","b","c","d","e"], "abcde"), true, 'Test 10');
test(isAcronym(["a"], "a"), true, 'Test 11');
test(isAcronym(["hello","world"], "hw"), true, 'Test 12');
test(isAcronym(["never","gonna","give","up","on","you"], "ngguoy"), true, 'Test 13');
test(isAcronym(["ab","cd"], "ac"), true, 'Test 14');
test(isAcronym(["one"], "o"), true, 'Test 15');
test(isAcronym(["abc","def","ghi"], "adg"), true, 'Test 16');
test(isAcronym(["longer","words","example"], "lwe"), true, 'Test 17');
test(isAcronym(["python","programming"], "pp"), true, 'Test 18');
test(isAcronym(["the","quick","brown","fox","jumps","over","the","lazy","dog"], "tqbfjotld"), true, 'Test 19');
test(isAcronym(["alice","bob","charlie"], "abc"), true, 'Test 20');
test(isAcronym(["one","two","three"], "ot"), false, 'Test 21');
test(isAcronym(["unique","words","here"], "uwh"), true, 'Test 22');
test(isAcronym(["same","same","same"], "sss"), true, 'Test 23');
test(isAcronym(["hello","every","one"], "heo"), true, 'Test 24');
test(isAcronym(["cloud","computing","services"], "ccs"), true, 'Test 25');
test(isAcronym(["very","long","words","in","the","list"], "vlwitl"), true, 'Test 26');
test(isAcronym(["internet","of","things"], "iot"), true, 'Test 27');
test(isAcronym(["many","letters","make","the","longest","acronym"], "mlmtla"), true, 'Test 28');
test(isAcronym(["binary","search","tree"], "bst"), true, 'Test 29');
test(isAcronym(["repeated","characters","characters","in","words"], "rcciw"), true, 'Test 30');
test(isAcronym(["magnificent","opulent","rich","elegant","grand"], "moreg"), true, 'Test 31');
test(isAcronym(["transcendent","effervescent","mellifluous"], "tem"), true, 'Test 32');
test(isAcronym(["aardvark","bear","cat","dog","elephant","frog"], "abcdef"), true, 'Test 33');
test(isAcronym(["quick","brown","fox","jumps","over","lazy","dogs"], "qbfjold"), true, 'Test 34');
test(isAcronym(["ambidextrous","bilingual","chirpy","dextrous","eloquent"], "abcde"), true, 'Test 35');
test(isAcronym(["quintessential","programming","language"], "qpl"), true, 'Test 36');
test(isAcronym(["cryptic","enigma","mystery"], "cem"), true, 'Test 37');
test(isAcronym(["gargantuan","colossal","tremendous"], "gct"), true, 'Test 38');
test(isAcronym(["phoenix","reborn","immortal"], "pri"), true, 'Test 39');
test(isAcronym(["abracadabra","is","amazing"], "aia"), true, 'Test 40');
test(isAcronym(["algorithm","data","structures"], "ads"), true, 'Test 41');
test(isAcronym(["almost","correct","acronym"], "aca"), true, 'Test 42');
test(isAcronym(["various","lengths","words","here"], "vlwh"), true, 'Test 43');
test(isAcronym(["creating","additional","sample","data","for","testing"], "cadft"), false, 'Test 44');
test(isAcronym(["this","is","just","another","test","case"], "tijatc"), true, 'Test 45');
test(isAcronym(["hong","kong","international","airport"], "hkia"), true, 'Test 46');
test(isAcronym(["xylophone","yak","zebra"], "xyz"), true, 'Test 47');
test(isAcronym(["vivacious","energetic","enthusiastic"], "vee"), true, 'Test 48');
test(isAcronym(["algorithm","data","structure"], "ads"), true, 'Test 49');
test(isAcronym(["hello","world","this","is","a","test"], "hwtiat"), true, 'Test 50');
test(isAcronym(["various","strings","concatenate","properly","form","acronyms"], "vspcfa"), false, 'Test 51');
test(isAcronym(["panoramic","vista","landscape"], "pvl"), true, 'Test 52');
test(isAcronym(["united","states","of","america"], "usoa"), true, 'Test 53');
test(isAcronym(["neurotransmitter","serotonin","dopamine"], "nsd"), true, 'Test 54');
test(isAcronym(["unique","letters","every","word"], "ulew"), true, 'Test 55');
test(isAcronym(["sunshine","in","the","morning"], "sitem"), false, 'Test 56');
test(isAcronym(["mount","rainier","national","park"], "mrnp"), true, 'Test 57');
test(isAcronym(["washington","d","c"], "wdc"), true, 'Test 58');
test(isAcronym(["artificial","intelligence"], "ai"), true, 'Test 59');
test(isAcronym(["central","park","zoo"], "cpz"), true, 'Test 60');
test(isAcronym(["zephyr","whisper","gale"], "zwg"), true, 'Test 61');
test(isAcronym(["development","environment","setup"], "des"), true, 'Test 62');
test(isAcronym(["randomized","quick","sort"], "rqs"), true, 'Test 63');
test(isAcronym(["programming","questions","are","fun"], "pqaf"), true, 'Test 64');
test(isAcronym(["multiple","words","with","different","lengths","here"], "mwdlh"), false, 'Test 65');
test(isAcronym(["natural","language","processing"], "nlp"), true, 'Test 66');
test(isAcronym(["philosophy","physics","psychology","programming","python"], "ppppp"), true, 'Test 67');
test(isAcronym(["exquisite","ornate","lavish"], "eol"), true, 'Test 68');
test(isAcronym(["beautiful","day","at","the","beach"], "bdatb"), true, 'Test 69');
test(isAcronym(["make","sure","every","character","is","captured"], "mseic"), false, 'Test 70');
test(isAcronym(["machine","learning","models","are","awesome"], "mlmaa"), true, 'Test 71');
test(isAcronym(["supercalifragilisticexpialidocious","antidisestablishmentarianism","pneumonoultramicroscopicsilicovolcanoconiosis"], "saap"), false, 'Test 72');
test(isAcronym(["almost","correct","but","one","letter","off"], "accblo"), false, 'Test 73');
test(isAcronym(["complex","example","with","repeated","characters"], "cewrcc"), false, 'Test 74');
test(isAcronym(["this","is","a","much","longer","acronym","test","case"], "tiamalte"), false, 'Test 75');
test(isAcronym(["golden","state","expressway"], "gsex"), false, 'Test 76');
test(isAcronym(["diamond","opal","emerald"], "doe"), true, 'Test 77');
test(isAcronym(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"], "abcdefghijklmnopqrstuvwxyz"), true, 'Test 78');
test(isAcronym(["multiple","characters","in","each","word"], "mciew"), true, 'Test 79');
test(isAcronym(["magnificent","butterfly","effect"], "mbe"), true, 'Test 80');
test(isAcronym(["xylophone","yankee","zebra"], "xyz"), true, 'Test 81');
test(isAcronym(["x","y","z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"], "xyzabcdefghijklmnopqrstuvwxyz"), true, 'Test 82');
test(isAcronym(["small","words","lead","to","big","results"], "swlttbr"), false, 'Test 83');
test(isAcronym(["random","words","for","testing","purposes"], "rwftp"), true, 'Test 84');
test(isAcronym(["repeated","words","words","repeated"], "rwwr"), true, 'Test 85');
test(isAcronym(["onomatopoeia","pneumonoultramicroscopicsilicovolcanoconiosis","supercalifragilisticexpialidocious"], "opu"), false, 'Test 86');
test(isAcronym(["extremely","long","string","to","test"], "elstt"), true, 'Test 87');
test(isAcronym(["question","writing","exclusive","nice","documents"], "qwend"), true, 'Test 88');
test(isAcronym(["generate","multiple","complex","examples","to","ensure"], "gmceet"), false, 'Test 89');
test(isAcronym(["this","problem","seems","fairly","interesting"], "tpsfii"), false, 'Test 90');
test(isAcronym(["mismatch","example"], "mme"), false, 'Test 91');
test(isAcronym(["quick","brown","fox","jumps","over","lazy","dog"], "qbfjold"), true, 'Test 92');
test(isAcronym(["random","characters","generate","test","inputs"], "rcgti"), true, 'Test 93');
test(isAcronym(["complex","programming","challenge"], "cpc"), true, 'Test 94');
test(isAcronym(["same","same","same","same","same","same","same","same","same","same"], "ssssssssss"), true, 'Test 95');
test(isAcronym(["let","us","test","some","edge","cases","here"], "lustsech"), false, 'Test 96');
test(isAcronym(["algorithms","data","structures","and","interviews"], "adssai"), false, 'Test 97');
test(isAcronym(["generate","additional","inputs","automatically"], "gaia"), true, 'Test 98');
test(isAcronym(["golden","gate","bridge"], "ggb"), true, 'Test 99');
test(isAcronym(["quicksilver","zephyr","deluxe"], "qzd"), true, 'Test 100');
test(isAcronym(["cryptic","enigmatic","mysterious","obscure"], "ceom"), false, 'Test 101');
test(isAcronym(["augmented","reality","technology"], "art"), true, 'Test 102');
test(isAcronym(["generative","adversarial","networks"], "gan"), true, 'Test 103');
test(isAcronym(["repeated","repeated","repeated","repeated"], "rrrr"), true, 'Test 104');
test(isAcronym(["tiny","words"], "tw"), true, 'Test 105');
test(isAcronym(["revelation","salvation","transformation","unification","verification","wisdom","xenial","youthful","zealous"], "rstuvwxyz"), true, 'Test 106');
test(isAcronym(["quicksilver","falcon","spiderman"], "qfs"), true, 'Test 107');
test(isAcronym(["xylophone","yellow","zoo"], "xyz"), true, 'Test 108');
test(isAcronym(["algorithms","data","structures"], "ads"), true, 'Test 109');
test(isAcronym(["find","the","hidden","pattern"], "fthp"), true, 'Test 110');
test(isAcronym(["machine","learning","algorithms"], "mla"), true, 'Test 111');
test(isAcronym(["abc","def","ghi","jkl","mno","pqr","stu","vwx","yz"], "adgjmpsvy"), true, 'Test 112');
test(isAcronym(["programming","languages","are","awesome"], "plaaw"), false, 'Test 113');
test(isAcronym(["very","long","wordstocheck","the","acronym","functionality"], "vlwtcaf"), false, 'Test 114');
test(isAcronym(["this","is","a","test","case","with","multiple","words"], "tiatcmw"), false, 'Test 115');
test(isAcronym(["quicksilver","silver","mercury"], "qsm"), true, 'Test 116');
test(isAcronym(["deep","neural","networks"], "dnn"), true, 'Test 117');
test(isAcronym(["programming","language","comprehension","practice"], "plcp"), true, 'Test 118');
test(isAcronym(["keep","coding","every","day"], "kced"), true, 'Test 119');
test(isAcronym(["a","quick","brown","fox","jumps","over","the","lazy","dog"], "aqbfojtld"), false, 'Test 120');
test(isAcronym(["mississippi","river","flows","southward"], "mrfs"), true, 'Test 121');
test(isAcronym(["longwordnumberone","longwordnumbertwo","longwordnumberthree"], "lmolwntlm"), false, 'Test 122');
test(isAcronym(["fantastic","terrific","excellent"], "fte"), true, 'Test 123');
test(isAcronym(["quick","brown","fox","jumps","over","lazy","dog"], "qbfojld"), false, 'Test 124');
test(isAcronym(["quick","brown","fox","jumps","over","the","lazy","dog"], "qbfjotld"), true, 'Test 125');
test(isAcronym(["virtual","reality","experience"], "vre"), true, 'Test 126');
test(isAcronym(["every","good","boy","does","fine"], "egbdf"), true, 'Test 127');
test(isAcronym(["ubiquitous","omnipresent","everywhere"], "uoe"), true, 'Test 128');
test(isAcronym(["new","york","city"], "nyc"), true, 'Test 129');

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
