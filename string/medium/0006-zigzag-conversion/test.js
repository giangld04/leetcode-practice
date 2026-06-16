// Test: 6. Zigzag Conversion
// 104 test cases from LeetCodeDataset
// Run: node test.js

const { convert } = require("./solution");

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

console.log("\n6. Zigzag Conversion\n");

test(convert("PAYPALISHIRING", 4), PINALSIGYAHRPI, 'Test 1');
test(convert("ABCDEFGHI", 3), AEIBDFHCG, 'Test 2');
test(convert("A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z", 5), AEIMQUY,,,,,,,,,,,,,BDFHJLNPRTVXZ,,,,,,,,,,,,CGKOSW, 'Test 3');
test(convert("PAYPALISHIRING", 3), PAHNAPLSIIGYIR, 'Test 4');
test(convert("A", 1), A, 'Test 5');
test(convert("HELLO", 5), HELLO, 'Test 6');
test(convert("ABCDEF", 2), ACEBDF, 'Test 7');
test(convert("HELLO WORLD", 5), HREOLLWDL O, 'Test 8');
test(convert("a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z", 20), atM,,,,,bsuLN,,,,,crvKO,,,,,dqwJP,,,,,epxIQ,,,,,foyHR,,,,,gnzGSZ,,,,,,hmAFTY,,,,,,ilBEUX,,,,,,jkCDVW,,,, 'Test 9');
test(convert("AB", 1), AB, 'Test 10');
test(convert("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 5), AIQYBHJPRXZCGKOSWDFLNTVEMU, 'Test 11');
test(convert("ABCD", 2), ACBD, 'Test 12');
test(convert("ABCDEFGHIJKL", 4), AGBFHLCEIKDJ, 'Test 13');
test(convert("HELLO.WORLD.", 3), HOREL.OL.LWD, 'Test 14');
test(convert("ABC", 2), ACB, 'Test 15');
test(convert("ABCDEFG", 1), ABCDEFG, 'Test 16');
test(convert("A,B.C", 3), AC,.B, 'Test 17');
test(convert("A,B,C,D,E,F,G", 3), ACEG,,,,,,BDF, 'Test 18');
test(convert("ABCDEFGHIJKL", 3), AEIBDFHJLCGK, 'Test 19');
test(convert("", 1), , 'Test 20');
test(convert("COMPLEX.EXAMPLE", 6), CAOXMMEPP.LLXEE, 'Test 21');
test(convert("A,B,C.,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z.", 7), A,,,,,FGLMRSXYB,,,,,,,,,EHKNQTWZC,,,,,,,..DIJOPUV,,,,, 'Test 22');
test(convert("..............................", 10), .............................., 'Test 23');
test(convert("ZIGZAG", 6), ZIGZAG, 'Test 24');
test(convert("ThisIsATestOfTheEmergencyBroadcastSystem", 10), TeshmrytiEgSeseetmIhnssTcaAfycTOBdetraso, 'Test 25');
test(convert("The quick brown fox jumps over the lazy dog.", 3), Tqkofjsehadh uc rw o up vrtelz o.eibnxmo  yg, 'Test 26');
test(convert("WithSpecialCharacters!@#$%^&*[]", 5), Wic$icaat#%telre@^]hpCar!&[Shs*, 'Test 27');
test(convert("The quick brown fox jumps over the lazy dog.", 8), Tneghw vro.eofo d ro t qbxshyu  pezikjm acul, 'Test 28');
test(convert("This,is,a,longer,string,with,punctuation!", 7), Tnwthog,iaiilegtuos,rnhtn,a,i,c!i,srpnstu, 'Test 29');
test(convert("", 5), , 'Test 30');
test(convert("Short", 1), Short, 'Test 31');
test(convert("Lorem.ipsum.dolor.sit.amet.consectetur.adipiscing.elit", 12), Laso.micrtepieitinms.dg..ca.iro.eponrlslsuiuoettmdce.t, 'Test 32');
test(convert("ABCD", 1), ABCD, 'Test 33');
test(convert("ZigzagPatternConversionIsCool.", 7), ZnsirCICgeonoztnooatvilgaes.Pr, 'Test 34');
test(convert("ZIGZAGCONVERSION", 6), ZEIVRGNSZOIACOGN, 'Test 35');
test(convert(".,,..,.", 3), ..,.,,., 'Test 36');
test(convert("1234567890", 2), 1357924680, 'Test 37');
test(convert("a.b.c.d.e.f.g.h.i.j.k.l.m.n.o.p.q.r.s.t.u.v.w.x.y.z.", 12), alw.....bkmvx.....cjnuy.....diotz.....ehps....fgqr.., 'Test 38');
test(convert("HELLOALLOHELLOALLOHELLOALLO", 2), HLOLOELALHLOLOELALHLOLOELAL, 'Test 39');
test(convert("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", 10), asKbrtJLcquIMdpvHNZeowGOYfnxFPXgmyEQWhlzDRVikACSUjBT, 'Test 40');
test(convert("AnotherExampleWithALongerStringThatShouldBeChallengingToFormatCorrectly", 8), AWieFyneirnBCoololttgdhTrttphSTlagmchmArhulnaeeaLeaolitrrxogthegCrEnSno, 'Test 41');
test(convert("A", 5), A, 'Test 42');
test(convert("SHORT", 25), SHORT, 'Test 43');
test(convert("Zigzag.patters.are.pretty.cool.and.fascinating", 10), Z.aiepfsgrr.czaedia.tnngstaa.ry.tpe.liatcontog, 'Test 44');
test(convert("ZigZagConversion", 6), ZeivrgnsZoiaCogn, 'Test 45');
test(convert("PYTHONISAWESOMELANGUAGEFORTACKLINGCOMPLEXPROBLEMS", 6), PEALXYWSUGKIEPTAOGECNLRSHSMNFAGPOMOIEAOTCMBENLROL, 'Test 46');
test(convert("PYTHONPROGRAMMING", 5), POGYRGNTPRIHNAMOM, 'Test 47');
test(convert("BUTTERTOOMELON", 3), BEOOUTROMLNTTE, 'Test 48');
test(convert("1234567890abcdefghijklmnopqrstuvwxyz", 7), 1co2bdnpz3aemqy40flrx59gksw68hjtv7iu, 'Test 49');
test(convert("ZIGZAGCONVERSION", 8), ZOIINGSZRAEGVCNO, 'Test 50');
test(convert("HELLOPYTHONHELLOPYTHONHELLOPYTHONHELLOPYTHON", 8), HLYOELOPTHNLEPOHTLHYLOYONTLNPPOHEHOYHOHELTNL, 'Test 51');
test(convert("A.B.C.D.E.F.G.H.I.J.K.L.M.N.O.P.Q.R.S.T.U.V.W.X.Y.Z.", 5), AEIMQUY.............BDFHJLNPRTVXZ.............CGKOSW, 'Test 52');
test(convert("ALGORITHMSANDDATASTRUCTURES", 8), AALDTGDASONSERATRISRUTMUTHC, 'Test 53');
test(convert("A.B.C.D.E.F.G.H.I.J.K.L.M.N.O.P.Q.R.S.T.U.V.W.X.Y.Z.", 10), AJS.....BIKRT......CHLQUZ......DGMPVY......EFNOWX..., 'Test 54');
test(convert("A.B.C.D.E.F.G.H.I.J.K.L.M.N.O.P.Q.R.S.T.U.V.W.X.Y.Z.", 6), AFKPUZ...........BEGJLOQTVY..........CDHIMNRSWX....., 'Test 55');
test(convert("ToCodeOrNotToCode.", 2), TCdONtooeooeroTCd., 'Test 56');
test(convert("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", 11), auObtvNPcswMQdrxLReqyKSfpzJTgoAIUhnBHVimCGWjlDFXZkEY, 'Test 57');
test(convert("HELLO.WORLD.THIS.IS.A.TEST", 8), HIEHSLT.L.ITODSS.L.EWRATO., 'Test 58');
test(convert("Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 6), Lmtna ou i os dgersdsacerinlepo m cupiimilre,ttict otes., 'Test 59');
test(convert("Longer.string.for.testing.the.zigzag.conversion", 2), Lne.tigfrtsigtezga.ovrinogrsrn.o.etn.h.izgcneso, 'Test 60');
test(convert("THISISAMUCHLONGERSTRINGTHANTHEPREVIOUSONES", 9), TREHESRVIGTPISNREOIOIHUSLNTSAHGNOMCTANSUHE, 'Test 61');
test(convert("REPEATEREPEATEREPEATEREPEATEREPEAT", 15), RREEEPTPEAEAEATPTEERREEPTEAAETPEER, 'Test 62');
test(convert("1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", 12), 1Mi2LNhj3KOgk4JPfl5IQem6HRdnz7GScoy8FTbpx9EUaqw0DVZrvACWYsuBXt, 'Test 63');
test(convert("HELLOWORLDTHISISATEST", 7), HIEHSLTILDSOLATWRTSOE, 'Test 64');
test(convert("AQuickBrownFoxJumpsOverTheLazyDog", 11), AvQOeusripTcmhkueBJLrxaoozgwFyonD, 'Test 65');
test(convert("123456789012345678901234567890", 5), 197528068463715937462402805319, 'Test 66');
test(convert("........................................", 4), ........................................, 'Test 67');
test(convert("ThisIsALongStringToTestTheFunctionalityOfTheZigZagConversion", 7), TthiahSrTeltZgnigitFaygCosnnsunOioiIogenofZnssLTTciTevrAothe, 'Test 68');
test(convert("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 8), AOBNPCMQDLRZEKSYFJTXGIUWHV, 'Test 69');
test(convert("HELLO.,WORLD.,HELLO.,WORLD.,HELLO.,WORLD.", 10), HOOEL.WRLL,,LLEW.DOHOO..,RL,.LLWDDEOL.HR,, 'Test 70');
test(convert("Short.string", 1), Short.string, 'Test 71');
test(convert("THISISALONGSTRINGFORTHETESTCASE", 7), TTEHSRTSIGIETSNNHCIOGTASLFRSAOE, 'Test 72');
test(convert("12345678901234567890", 10), 19280374655647382910, 'Test 73');
test(convert("ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", 7), AMYBLNXZ9CKOW08DJPV17EIQU26FHRT35GS4, 'Test 74');
test(convert("ONETWO,THREE,FOUR,FIVE,SIX,SEVEN,EIGHT,NINE,TEN", 12), O,TNES,EEVIENTIXNWF,IO,SN,RE,TUVTHOEHRFNGE,,IEE, 'Test 75');
test(convert("THEQUICK.BROWN.FOX.JUMPS.OVER.THE.LAZY.DOG.", 5), T.O.EOHKBFXSOH.DGECR..PVTL..QIONJME.AYUWURZ, 'Test 76');
test(convert("ALGORITHMSAREFUN", 6), AALSRGMEOHFRTUIN, 'Test 77');
test(convert("123456789012345678901234567890", 6), 111202020393939484848575757666, 'Test 78');
test(convert("This.is.a.test.string", 5), Tath..srist.isietn.sg, 'Test 79');
test(convert("ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ", 12), AWSBVXRTCUYQUDTZPVESAOWFRBNXGQCMYHPDLZIOEKJNFJKMGILH, 'Test 80');
test(convert("AQUICKMOVEMENTOFTHEBROWNFOX", 9), ATQFHUOEITBCNRKEOMMWXOENOVF, 'Test 81');
test(convert("OneTwoThreeFourFiveSixSevenEightNineTenElevenTwelveThirteenFourteenFifteen", 9), OiNlenFvtievteerehnwernTuSgeTTuFwoiiTnhoioFxEeeiFfTeSnnvrntheeeEeteenrvlee, 'Test 82');
test(convert("abcdefghijklmnopqrstuvwxyz", 13), aybxzcwdveuftgshriqjpkolnm, 'Test 83');
test(convert("AVERYLONGSTRINGTHATWILLBETESTEDTOENSURETHECORRECTNESSOFTHETEST", 20), AEVRTEUHRSEYNCLEOOORNTRGDESECTTTRSNIEENTSGESTBOTHLFSALTETIHTWE, 'Test 84');
test(convert("Python.is.awesome.and.fun", 9), Peym.toahsnoednw..afi.usn, 'Test 85');
test(convert("", 3), , 'Test 86');
test(convert("ABCDEFGHIJKLMNOPQRSTUVWXYZ.,", 5), AIQYBHJPRXZCGKOSW.DFLNTV,EMU, 'Test 87');
test(convert("PythonIsFun", 5), PFysutInhno, 'Test 88');
test(convert("COMPLEXTESTCASEWITHVARYINGCHARS,.,", 9), CI.OWT,,MEHSPSVRLAAAECRHXTYCTSIGEN, 'Test 89');
test(convert("Mississippi", 2), Msispiissip, 'Test 90');
test(convert("PythonProgrammingIsFunAndEducational!", 7), Pmd!yamnEltriAdahgnnunooguconrIFaiPst, 'Test 91');
test(convert("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 10), ASBRTCQUDPVEOWFNXGMYHLZIKJ, 'Test 92');
test(convert("zigzagzigzagzigzagzigzagzigzagzigzagzigzag", 4), zzzzzzzigigigigigigiggagagagagagagazzzzzzz, 'Test 93');
test(convert("SOMETIMESGOODPROGRAMSMAKEYOUCRY", 2), SMTMSODRGASAEOCYOEIEGOPORMMKYUR, 'Test 94');
test(convert("REPEATEDCHARACTERSTESTCASEEEEEEEEEEEEEEEEEEEEEE", 15), REEEEPEEEEEASETAEECEDTECSEHEEATEERSEEAREECEEETE, 'Test 95');
test(convert("TheQuickBrownFoxJumpsOverTheLazyDog", 6), ToszhrwpOayeBnmvLDQkFueeoucoJrhgixT, 'Test 96');
test(convert("HELLO.,WORLD.,HELLO.,WORLD.", 5), HOLLEWRELRDL,LHOO.L.D,.WO.,, 'Test 97');
test(convert("AABBAABBCCDDEEFFGGHHIIJJKKLLMMNNOOPPQQRRSSTTUUVVWWXXYYZZ", 12), AJUAIJTUBIKTVBHKSVAHLSWAGLRWBGMRXBFMQXCFNQYCENPYDEOPZDOZ, 'Test 98');
test(convert("PYTHON.IS.A.GREAT.LANGUAGE.", 4), P.GLGYNI.R.AAETOSAETNU.H.AG, 'Test 99');
test(convert("MULTIPLELINESAREHERE.FIXEDFONTISNEAT.", 15), MNUOTLFITDSIENPXELIAEFTL..IENREESHAER, 'Test 100');
test(convert("MixedCASEAndNumbers123", 4), MANsiCSdur1xdEnme2eAb3, 'Test 101');
test(convert("PythonIsFunAndChallenging", 5), PFagysuhlntInClihnAdegonn, 'Test 102');
test(convert("S.P.E.C.I.A.L.,C.H.A.R.A.C.T.E.R.S.", 9), S...CHRSP,.....AEEL....RTCA....ACI., 'Test 103');
test(convert("OneMoreExampleHere", 10), OneerMeoHreelEpxma, 'Test 104');

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
