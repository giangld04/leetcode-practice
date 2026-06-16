// Test: 2185. Counting Words With A Given Prefix
// 153 test cases from LeetCodeDataset
// Run: node test.js

const { prefixCount } = require("./solution");

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

console.log("\n2185. Counting Words With A Given Prefix\n");

test(prefixCount(["test","testing","tested","testing"], "test"), 4, 'Test 1');
test(prefixCount(["abc","bcd","cde"], "a"), 1, 'Test 2');
test(prefixCount(["hello","world","helium","helper"], "hel"), 3, 'Test 3');
test(prefixCount(["banana","bandana","banner","balance"], "ban"), 3, 'Test 4');
test(prefixCount(["hello","hell","hero","herald"], "he"), 4, 'Test 5');
test(prefixCount(["pay","attention","practice","attend"], "at"), 2, 'Test 6');
test(prefixCount(["hello","world"], "hi"), 0, 'Test 7');
test(prefixCount(["hello","hell","helper"], "hel"), 3, 'Test 8');
test(prefixCount(["apple","apricot","application"], "app"), 2, 'Test 9');
test(prefixCount(["apple","apricot","application","appetite"], "app"), 3, 'Test 10');
test(prefixCount(["cat","caterpillar","catalog","category"], "cat"), 4, 'Test 11');
test(prefixCount(["apple","apricot","banana","apex"], "ap"), 3, 'Test 12');
test(prefixCount(["banana","band","ball"], "ba"), 3, 'Test 13');
test(prefixCount(["banana","bandana","baptism"], "ban"), 2, 'Test 14');
test(prefixCount(["apple","application","apricot","apex"], "ap"), 4, 'Test 15');
test(prefixCount(["leetcode","win","loops","success"], "code"), 0, 'Test 16');
test(prefixCount(["database","datacenter","datamine","data"], "data"), 4, 'Test 17');
test(prefixCount(["integration","integrate","interact","interactive"], "inte"), 4, 'Test 18');
test(prefixCount(["algorithm","array","application","arithmetic"], "arr"), 1, 'Test 19');
test(prefixCount(["intersection","interface","internal","interact"], "inter"), 4, 'Test 20');
test(prefixCount(["unpredictable","unpredicted","unpredictably","unpredicting"], "unpred"), 4, 'Test 21');
test(prefixCount(["prefix","prepend","presentation","preference"], "pre"), 4, 'Test 22');
test(prefixCount(["challenge","champion","chance","character"], "cha"), 4, 'Test 23');
test(prefixCount(["management","manager","manufacture","maintain"], "man"), 3, 'Test 24');
test(prefixCount(["interpolation","interpolate","interpolator","interpolated"], "inter"), 4, 'Test 25');
test(prefixCount(["technology","technique","technical","technological"], "tech"), 4, 'Test 26');
test(prefixCount(["universe","uniform","unique","unit"], "uni"), 4, 'Test 27');
test(prefixCount(["programming","python","problem","project","practice"], "pro"), 3, 'Test 28');
test(prefixCount(["document","documentation","documentary","documents"], "docu"), 4, 'Test 29');
test(prefixCount(["environment","envelope","encyclopedia","enterprise"], "env"), 2, 'Test 30');
test(prefixCount(["interview","international","internet","introduce"], "inter"), 3, 'Test 31');
test(prefixCount(["communication","community","commemoration","commentary"], "comm"), 4, 'Test 32');
test(prefixCount(["algorithm","array","application","apricot"], "app"), 1, 'Test 33');
test(prefixCount(["cryptography","cryptanalysis","cryptographic","cryptology"], "crypto"), 3, 'Test 34');
test(prefixCount(["interact","interaction","interactive","interior","intercept"], "inter"), 5, 'Test 35');
test(prefixCount(["fantastic","fancy","fantasy","fanatic"], "fan"), 4, 'Test 36');
test(prefixCount(["pseudo","pseudocode","pseudorandom","pseudoscience"], "pseudo"), 4, 'Test 37');
test(prefixCount(["mathematical","mathematics","mathematically","mathematize"], "math"), 4, 'Test 38');
test(prefixCount(["programming","problem","prefix","preference"], "pre"), 2, 'Test 39');
test(prefixCount(["biography","biologist","biological","biographical"], "bio"), 4, 'Test 40');
test(prefixCount(["unbelievable","universe","unique","unanimous"], "un"), 4, 'Test 41');
test(prefixCount(["congratulations","congratulate","congratulatory","congregate","congruity"], "cong"), 5, 'Test 42');
test(prefixCount(["supplementary","supplement","supplier","suppose"], "sup"), 4, 'Test 43');
test(prefixCount(["community","commune","communicate","common"], "comm"), 4, 'Test 44');
test(prefixCount(["extraterrestrial","extraterrestrial","extraterrestrial","extraterrestrial"], "extra"), 4, 'Test 45');
test(prefixCount(["algorithm","array","application","applet"], "app"), 2, 'Test 46');
test(prefixCount(["abracadabra","abstract","absorb","academic"], "abs"), 2, 'Test 47');
test(prefixCount(["congruence","congruent","congruently","congruency"], "congru"), 4, 'Test 48');
test(prefixCount(["meticulous","meticulate","metaphor","metaphysics"], "metic"), 2, 'Test 49');
test(prefixCount(["biological","biography","biologist","biology","bioluminescence"], "biol"), 4, 'Test 50');
test(prefixCount(["application","approach","appetizer","append"], "app"), 4, 'Test 51');
test(prefixCount(["scientific","scientist","science","sciences"], "sci"), 4, 'Test 52');
test(prefixCount(["communication","community","common","commodity"], "com"), 4, 'Test 53');
test(prefixCount(["quantization","quantize","quantitative","quantitative"], "quant"), 4, 'Test 54');
test(prefixCount(["prefix","prepend","presentation","premature"], "pre"), 4, 'Test 55');
test(prefixCount(["continuous","concurrent","conclusion","condition"], "con"), 4, 'Test 56');
test(prefixCount(["programming","program","pro","professor"], "pro"), 4, 'Test 57');
test(prefixCount(["management","manager","manage","mandate"], "man"), 4, 'Test 58');
test(prefixCount(["transformation","transmit","transparent","transient"], "tran"), 4, 'Test 59');
test(prefixCount(["administrator","administration","administrative","administratively"], "admin"), 4, 'Test 60');
test(prefixCount(["circumstance","circuit","circulate","circulation","circular"], "circu"), 5, 'Test 61');
test(prefixCount(["characterization","character","characteristic","characterization"], "char"), 4, 'Test 62');
test(prefixCount(["environment","envy","envelope","evening"], "env"), 3, 'Test 63');
test(prefixCount(["database","data","datagram","datastructure"], "data"), 4, 'Test 64');
test(prefixCount(["celebration","celebrate","celebrity","celebratory","celestial"], "celeb"), 4, 'Test 65');
test(prefixCount(["cryptography","crypt","crypto","cryptanalysis"], "crypt"), 4, 'Test 66');
test(prefixCount(["photography","photo","photobook","photographer"], "photo"), 4, 'Test 67');
test(prefixCount(["magnify","magnificent","magnetic","magnetism"], "mag"), 4, 'Test 68');
test(prefixCount(["organization","organize","organ","organically"], "org"), 4, 'Test 69');
test(prefixCount(["algorithm","algebra","almond","alert"], "alg"), 2, 'Test 70');
test(prefixCount(["algorithm","array","application","apple"], "app"), 2, 'Test 71');
test(prefixCount(["communication","community","commitment","common"], "comm"), 4, 'Test 72');
test(prefixCount(["developer","debug","deploy","document"], "de"), 3, 'Test 73');
test(prefixCount(["perpendicular","perpendicularity","perpendicularity","perpendicularly"], "perpendicular"), 4, 'Test 74');
test(prefixCount(["environment","engine","error","example"], "en"), 2, 'Test 75');
test(prefixCount(["university","uniform","unique","universe"], "uni"), 4, 'Test 76');
test(prefixCount(["community","communist","common","comment"], "comm"), 4, 'Test 77');
test(prefixCount(["literature","literacy","literary","literate"], "lit"), 4, 'Test 78');
test(prefixCount(["sequoia","sequence","series","serial"], "ser"), 2, 'Test 79');
test(prefixCount(["communication","community","companion","commune"], "comm"), 3, 'Test 80');
test(prefixCount(["algorithm","algebra","alignment","algorithmic"], "algo"), 2, 'Test 81');
test(prefixCount(["character","chart","chapter","charge"], "char"), 3, 'Test 82');
test(prefixCount(["transport","trap","trapezium","traverse"], "tra"), 4, 'Test 83');
test(prefixCount(["communication","commute","community","commotion","common"], "comm"), 5, 'Test 84');
test(prefixCount(["environment","energy","engage","engageable"], "en"), 4, 'Test 85');
test(prefixCount(["identification","individual","idea","illegal"], "iden"), 1, 'Test 86');
test(prefixCount(["supreme","superior","surpass","surround"], "sur"), 2, 'Test 87');
test(prefixCount(["transformation","transmit","transit","transformation","transition"], "trans"), 5, 'Test 88');
test(prefixCount(["automation","automatic","automate","auto"], "auto"), 4, 'Test 89');
test(prefixCount(["configuration","compute","container","cloud"], "con"), 2, 'Test 90');
test(prefixCount(["communication","community","commitment","compassionate"], "comm"), 3, 'Test 91');
test(prefixCount(["programming","program","pro","progress"], "pro"), 4, 'Test 92');
test(prefixCount(["absolutely","absolute","absorb","abnormal"], "abs"), 3, 'Test 93');
test(prefixCount(["statistics","statistical","statue","status"], "stat"), 4, 'Test 94');
test(prefixCount(["prefix","prefixes","preferring","preference"], "pref"), 4, 'Test 95');
test(prefixCount(["congratulations","congratulate","congratulatory","congratulated"], "congrat"), 4, 'Test 96');
test(prefixCount(["environment","essential","establish","engage"], "en"), 2, 'Test 97');
test(prefixCount(["substitution","substitute","substituted","substituting"], "sub"), 4, 'Test 98');
test(prefixCount(["distribution","distribute","disastrous","discuss","disease"], "dis"), 5, 'Test 99');
test(prefixCount(["development","deploy","debug","document"], "de"), 3, 'Test 100');
test(prefixCount(["super","superhero","supercalifragilisticexpialidocious","supervillain"], "super"), 4, 'Test 101');
test(prefixCount(["maintenance","maintain","maintenance","maintained"], "maint"), 4, 'Test 102');
test(prefixCount(["python","pyramid","pythia","pyrotechnic"], "pyt"), 2, 'Test 103');
test(prefixCount(["algorithm","algebra","alibi","alien","alimony"], "ali"), 3, 'Test 104');
test(prefixCount(["remarkable","remark","remember","remind"], "rem"), 4, 'Test 105');
test(prefixCount(["septagon","septagonal","septembre","septenary"], "sept"), 4, 'Test 106');
test(prefixCount(["programming","progress","prompt","priority"], "pro"), 3, 'Test 107');
test(prefixCount(["document","documentation","documentary","documents"], "doc"), 4, 'Test 108');
test(prefixCount(["monarch","monarchy","monarchic","monarchically"], "monarch"), 4, 'Test 109');
test(prefixCount(["hemisphere","hemispherical","hemispheres","hemispheric"], "hemis"), 4, 'Test 110');
test(prefixCount(["environment","engage","enhance","enforce","ensure"], "enf"), 1, 'Test 111');
test(prefixCount(["persistent","perspective","personality","person","personnel"], "pers"), 5, 'Test 112');
test(prefixCount(["prefix","preference","presentation","prevent","president"], "pre"), 5, 'Test 113');
test(prefixCount(["parallelogram","parallelepiped","parallel","parallelograms"], "parallel"), 4, 'Test 114');
test(prefixCount(["intelligence","integrate","intensity","interact"], "inte"), 4, 'Test 115');
test(prefixCount(["Infinityormation","Infinityrastructure","insurance","initial"], "in"), 4, 'Test 116');
test(prefixCount(["transport","transmit","transformation","transition"], "trans"), 4, 'Test 117');
test(prefixCount(["establish","estimate","essential","establishment"], "est"), 3, 'Test 118');
test(prefixCount(["algorithm","algebra","alchemist","alchemy"], "alg"), 2, 'Test 119');
test(prefixCount(["environment","envelope","engage","enhance"], "en"), 4, 'Test 120');
test(prefixCount(["transport","transmit","transit","transformation","transition"], "trans"), 5, 'Test 121');
test(prefixCount(["programming","problem","process","productivity"], "pro"), 4, 'Test 122');
test(prefixCount(["programming","pro","processor","productivity"], "pro"), 4, 'Test 123');
test(prefixCount(["encyclopedia","encyclopedias","encyclopedic","encyclopedically"], "ency"), 4, 'Test 124');
test(prefixCount(["apple","application","appetite","apparent"], "app"), 4, 'Test 125');
test(prefixCount(["zebra","zephyr","zoo","zealous"], "ze"), 3, 'Test 126');
test(prefixCount(["prefix","prefixes","preference","preferring"], "pref"), 4, 'Test 127');
test(prefixCount(["communication","community","commitment","commission"], "com"), 4, 'Test 128');
test(prefixCount(["hypothesis","historical","hyphen","hydrogen"], "hy"), 3, 'Test 129');
test(prefixCount(["transformation","transfer","transform","transformer"], "trans"), 4, 'Test 130');
test(prefixCount(["transaction","transfer","transition","transportation"], "tran"), 4, 'Test 131');
test(prefixCount(["abracadabra","abrakadabras","abracadabrac","abracadabrad"], "abrac"), 3, 'Test 132');
test(prefixCount(["interview","integrate","interaction","interface"], "inte"), 4, 'Test 133');
test(prefixCount(["fantastic","fantasy","fancy","fantastician"], "fant"), 3, 'Test 134');
test(prefixCount(["communication","communicate","communist","commune"], "comm"), 4, 'Test 135');
test(prefixCount(["environment","environ","environmental","envelope"], "env"), 4, 'Test 136');
test(prefixCount(["education","educational","educate","educator"], "edu"), 4, 'Test 137');
test(prefixCount(["automation","automobile","automatic","automate"], "auto"), 4, 'Test 138');
test(prefixCount(["customization","customize","custom","customarily"], "cust"), 4, 'Test 139');
test(prefixCount(["environment","encourage","endure","ensure"], "en"), 4, 'Test 140');
test(prefixCount(["prefix","predict","prevent","preach","prelude"], "pre"), 5, 'Test 141');
test(prefixCount(["elephant","elegant","elephantine","election"], "ele"), 4, 'Test 142');
test(prefixCount(["celebration","celebrity","celebratory","celebration"], "celeb"), 4, 'Test 143');
test(prefixCount(["achievement","achieve","achiever","achievable"], "achi"), 4, 'Test 144');
test(prefixCount(["development","debug","document","disk"], "de"), 2, 'Test 145');
test(prefixCount(["prefix","preference","prevent","president"], "pre"), 4, 'Test 146');
test(prefixCount(["automobile","automatic","automate","automaton"], "auto"), 4, 'Test 147');
test(prefixCount(["terrific","terrify","terrestrial","territory"], "terr"), 4, 'Test 148');
test(prefixCount(["synchronization","synchronous","synchronize","synchronized"], "synch"), 4, 'Test 149');
test(prefixCount(["abbreviation","abrupt","absorb","absolute"], "abs"), 2, 'Test 150');
test(prefixCount(["repetition","reproductive","represent","reputation","reprehend"], "rep"), 5, 'Test 151');
test(prefixCount(["apple","application","applicant","appetite"], "app"), 4, 'Test 152');
test(prefixCount(["xylophone","xylography","xylophone","xylophone"], "xy"), 4, 'Test 153');

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
