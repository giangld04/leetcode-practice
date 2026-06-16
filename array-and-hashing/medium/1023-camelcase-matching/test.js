// Test: 1023. Camelcase Matching
// 114 test cases from LeetCodeDataset
// Run: node test.js

const { camelMatch } = require("./solution");

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

console.log("\n1023. Camelcase Matching\n");

test(camelMatch(["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"], "FB"), [true, false, true, true, false], 'Test 1');
test(camelMatch(["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"], "FoBa"), [true, false, true, false, false], 'Test 2');
test(camelMatch(["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"], "FoBaT"), [false, true, false, false, false], 'Test 3');
test(camelMatch(["Interleaving","InTerLeaVing","InterLeaving","InterLEAVING"], "InLeV"), [false, false, false, false], 'Test 4');
test(camelMatch(["MixedCASE","MxCs","MxCASE","MixCsE","MxCsECASE"], "MxCsE"), [false, false, false, true, false], 'Test 5');
test(camelMatch(["AaAaAaAaAa","aAaAaAaAa","AaAaAaA","AaAa","Aa"], "Aa"), [false, false, false, false, true], 'Test 6');
test(camelMatch(["samePattern", "samePatternEverywhere", "same", "pattern"], "sP"), [true, false, false, false], 'Test 7');
test(camelMatch(["ComplexPattern","CompPat","ComplexPatt","ComplPtn","CompPattn"], "CompPtn"), [true, false, false, true, true], 'Test 8');
test(camelMatch(["SoftwareEngineering", "softwareENGINEERING", "SoftWaReEnGiNeErInG", "SOFTWAREENGINEERING"], "SWE"), [false, false, false, false], 'Test 9');
test(camelMatch(["PatternMatching","Pattern","Pat","PatMatch","PatternMatchInString"], "Pat"), [false, true, true, false, false], 'Test 10');
test(camelMatch(["testCase","testCase1","testCase2","testCase3","testCase4"], "testCase"), [true, false, false, false, false], 'Test 11');
test(camelMatch(["xYzAbCdEfG","xYzAbCdEfGhI","xYzAbCd","xYzAbCdEfGhIjK","xYzAbCdEfGhIjKlM"], "xYzAbCd"), [false, false, true, false, false], 'Test 12');
test(camelMatch(["ComplexPattern","ComplexPatternQuery","ComplexPatternMatch","ComplexPatternMismatch","ComplexPatternCase"], "CPM"), [false, false, true, true, false], 'Test 13');
test(camelMatch(["ComplexPatternMatching", "ComplexPattern", "ComplexMatch", "PatternMatching", "PatternMatch"], "CPM"), [true, false, false, false, false], 'Test 14');
test(camelMatch(["Java","JavaScript","JavaS","JavaScr","JavaScriptAndMore"], "JS"), [false, true, true, true, false], 'Test 15');
test(camelMatch(["TestCase1","TestCase2","TestCase3","testCase4","testCase5","testCase6"], "TestCase"), [false, false, false, false, false, false], 'Test 16');
test(camelMatch(["CamelCase", "CamelCasePattern", "Camel", "Case"], "CCP"), [false, true, false, false], 'Test 17');
test(camelMatch(["MultipleUpperCaseLetters", "MultipleLowerCaseLetters", "MixOfUpperAndLowerCase", "OnlyUpperCase", "OnlyLowerCase"], "MUCL"), [true, false, false, false, false], 'Test 18');
test(camelMatch(["LongPatternMatchingExample","LongPattern","Long","LongPatternExample","LongPatternMatchingExampleInPython"], "Long"), [false, false, true, false, false], 'Test 19');
test(camelMatch(["CamelHump","CamelHumpQuery","CamelHouse","CamelHousekeeping","CamelHorseRace"], "CH"), [true, false, true, true, false], 'Test 20');
test(camelMatch(["EdgeCase","EdgeCaseQuery","EdgeCaseMatch","EdgeCaseMismatch","EdgeCaseCase"], "ECMc"), [false, false, true, true, false], 'Test 21');
test(camelMatch(["ABcDeFgHiJkLmNoPqRsTuVwXyZ","abcdefgHIJKLmnopQRstUVwxYZ","AbCdEfGhIjKlMnOpQrStUvWxYz"], "AbCdEfG"), [false, false, false], 'Test 22');
test(camelMatch(["MixedCasePattern","Mixed","Case","Pattern","MixedPatternCase"], "Mix"), [false, true, false, false, false], 'Test 23');
test(camelMatch(["ExamplePattern","Ex","ExPat","Example","PatternExample"], "Ex"), [false, true, false, true, false], 'Test 24');
test(camelMatch(["DeepLearning", "deepLEARNING", "DeEpLeArNiNg", "DEEPLEARNING"], "DL"), [true, false, false, false], 'Test 25');
test(camelMatch(["veryComplexPattern", "veryComplexPat", "veryComp", "very"], "vCP"), [true, true, false, false], 'Test 26');
test(camelMatch(["LeetCode","Leet_Code","Leet_Co_Dee","L_C_D","L_C_D_E_T"], "LCDE"), [false, false, false, false, false], 'Test 27');
test(camelMatch(["ComplexPatternMatching","Complex","Pat","ComplexPat","PatternComplex"], "Com"), [false, true, false, false, false], 'Test 28');
test(camelMatch(["aAaAaAaA","AAAAAAAA","aAaAaAa","AaAaAaAaAaAaAaAa","aAaAaAaAaAaAaAaAa","AaAaAaAaAaAaAaAaAaAa","AaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAa"], "aAaAaAaA"), [true, false, false, false, false, false, false], 'Test 29');
test(camelMatch(["CamelCase","camelCase","Camelcase","camelCASE"], "Camel"), [false, false, true, false], 'Test 30');
test(camelMatch(["CamelCaseExample","CamelCase","CamelExample","ExampleCamel","Camel"], "CamEx"), [false, false, true, false, false], 'Test 31');
test(camelMatch(["CamelCase","Camel","CamelCasePattern","CamelPattern","PatternCamel"], "Cam"), [false, true, false, false, false], 'Test 32');
test(camelMatch(["Match","MaTch","MatCh","MatcH","MatchiNg"], "Match"), [true, false, false, false, false], 'Test 33');
test(camelMatch(["aAbBcC","aabbcc","aaBbCc","aAaBbCc","aAbbcC"], "abc"), [false, true, false, false, false], 'Test 34');
test(camelMatch(["testCase","TestCase","testCase1","testCase2","testCase3"], "tc"), [false, false, false, false, false], 'Test 35');
test(camelMatch(["VariableLength","VarLen","VarLenPattern","VL","VariablePatLen"], "VarPatLen"), [false, false, false, false, true], 'Test 36');
test(camelMatch(["lowerCasePattern", "lowercasepattern", "LOWERCASEPATTERN", "lowerCASE"], "lCP"), [true, false, false, false], 'Test 37');
test(camelMatch(["Python","PythoN","PythOn","PyThOn","PYTHOn","PYTHOnS"], "PyTh"), [false, false, false, false, false, false], 'Test 38');
test(camelMatch(["aAbBcCdDeEfF","aabbccddeeff","Aabbccddeeff","aAbbccddeeff"], "aBcDeF"), [false, false, false, false], 'Test 39');
test(camelMatch(["Programming", "PrograMMing", "PROGRAMMING", "programming"], "PrM"), [false, false, false, false], 'Test 40');
test(camelMatch(["helloWorld","HELLOworld","hElLoWoRlD","HeLLoWoRLd","HELLOWORLD"], "hELo"), [false, false, false, false, false], 'Test 41');
test(camelMatch(["aAbB", "aabb", "AABB", "aAaA"], "aAbB"), [true, false, false, false], 'Test 42');
test(camelMatch(["aAbBcCdDeE", "aabbccddeeff", "AaBbCcDdEeFf", "AABBCCDDEEFF"], "aBcDeF"), [false, false, false, false], 'Test 43');
test(camelMatch(["DataScience","Data_Science","DaSc","DaTaSci","DaTaSceNiCe"], "DaS"), [true, false, true, false, false], 'Test 44');
test(camelMatch(["AlGoRiThM","algoRiThm","AlgorIthM","Algorithm"], "AlGoRiThM"), [true, false, false, false], 'Test 45');
test(camelMatch(["ThisIsJustARandomQuery", "ThisIsJustAQuery", "ThisIsARandomQuery", "ThisJustARandomQuery", "ThisIsJustARandomQ"], "TIJARQ"), [true, false, false, false, true], 'Test 46');
test(camelMatch(["ComplexPattern","ComplexPAttern","ComplexPattern1","ComplexPattern2","ComplexPattern3"], "ComplexPat"), [true, false, false, false, false], 'Test 47');
test(camelMatch(["QuantumComputing", "quantumCOMPUTING", "QuAnTuMCoMpUtInG", "QUANTUMCOMPUTING"], "QC"), [true, false, false, false], 'Test 48');
test(camelMatch(["ComplexPattern","complexPattern","ComplexPATTERN","complexpATTERN","ComplexpAtTeRn"], "CP"), [true, false, false, false, false], 'Test 49');
test(camelMatch(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"], "a"), [true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], 'Test 50');
test(camelMatch(["aBcDeFgHiJ","aBcDeFgHiJkLmNoPqR","aBcDeFgHiJkL","aBcDeFgHiJkLmNoP","aBcDeFgHiJkLmNoPqRsTuVwXyZ"], "aBcDeFgHiJ"), [true, false, false, false, false], 'Test 51');
test(camelMatch(["EdgeCase","EdgeCaseQuery","EdgeCaseMatch","EdgeCaseMismatch","EdgeCaseCase"], "ECq"), [false, false, false, false, false], 'Test 52');
test(camelMatch(["EdgeCase","EdgeCaseQuery","EdgeCaseMatch","EdgeCaseMismatch","EdgeCaseCase"], "ECM"), [false, false, true, true, false], 'Test 53');
test(camelMatch(["Pattern","Pattern1","Pattern2","Pattern3","Pattern4"], "Pattern"), [true, false, false, false, false], 'Test 54');
test(camelMatch(["ArtificialIntelligence", "artificialINTELLIGENCE", "ArTiFiCiAlInTeLlIgEnCe", "ARTIFICIALINTELLIGENCE"], "AI"), [true, false, false, false], 'Test 55');
test(camelMatch(["ComplexPattern","ComplexPatternQuery","ComplexPatternMatch","ComplexPatternMismatch","ComplexPatternCase"], "CPMc"), [false, false, true, true, false], 'Test 56');
test(camelMatch(["camelMatch","CamelMatch","camelMATCH","CamelMATCH","camelMatchTEST"], "CMt"), [false, true, false, false, false], 'Test 57');
test(camelMatch(["MiXeDcAsE","MiXeDcAsEc","MiXeDcAsEcc","MiXeDcAsEcce","MiXeDcAsEcces","MiXeDcAsEccese"], "MiXeDcAsEcces"), [false, false, false, false, true, true], 'Test 58');
test(camelMatch(["upperCASE","UpperCASE","upperCase","UPPERcase","uPPERCase"], "uPR"), [false, false, false, false, false], 'Test 59');
test(camelMatch(["AbCdEfGh", "AbCdEfGhIj", "AbCdEfGhIjKl", "AbCdEfGhIjKlMn"], "ACEGIK"), [false, false, true, false], 'Test 60');
test(camelMatch(["SubsequenceMatching","SubseqMatch","SubSeqMatch","SbqMtch","SubsqMtch"], "SbqMtch"), [true, true, false, true, true], 'Test 61');
test(camelMatch(["TestPattern","TestPatternQuery","TestPatternMatch","TestPatternMismatch","TestPatternCase"], "TPq"), [false, false, false, false, false], 'Test 62');
test(camelMatch(["xYzXyZ", "xyzyxzyx", "XYXYXY", "xyXyXy"], "XyZ"), [false, false, false, false], 'Test 63');
test(camelMatch(["multipleUpperCases", "multipleUPPERCASES", "MULTIPLEUPPERCASES", "multipleUPPER"], "mUC"), [true, false, false, false], 'Test 64');
test(camelMatch(["CamelMatch","camelMatch","CaMeLmAtCh","CAMELMATCH","camelMATCH"], "CaM"), [true, false, false, false, false], 'Test 65');
test(camelMatch(["PatternMatching","PatternMATching","PatternMATCHing","PatternMATCHINg"], "PatternMATCHINg"), [false, false, false, true], 'Test 66');
test(camelMatch(["ComplexPattern","ComplexPatternQuery","ComplexPatternMatch","ComplexPatternMismatch","ComplexPatternCase"], "CPq"), [false, false, false, false, false], 'Test 67');
test(camelMatch(["XyZ","XYZabc","xYzAbC","xyZabc","XyZABC"], "XyZ"), [true, false, false, false, false], 'Test 68');
test(camelMatch(["MachineLearning", "machineLEARNING", "MaChInELeArNiNg", "MACHINELEARNING"], "ML"), [true, false, false, false], 'Test 69');
test(camelMatch(["aBcDeFgHiJ","aBcDeFgHiJkL","aBcDeFgHiJkLmN","aBcDeFgHiJkLmNoP","aBcDeFgHiJkLmNoPqR"], "aBcFj"), [false, false, false, false, false], 'Test 70');
test(camelMatch(["SamePatternSamePattern", "SamePattern", "Pattern", "Same", ""], "SPSP"), [true, false, false, false, false], 'Test 71');
test(camelMatch(["CamelCasePatternMatching", "camelCasePatternMatching", "CamelCasePattern", "CamelCasePatternMatch", "CamelCasePatt"], "CCPM"), [true, false, false, true, false], 'Test 72');
test(camelMatch(["AbCdEfG", "AbcDeFG", "AbCDefg", "AbcDefgHiJk", "AbCdEfGhIjk"], "ACEG"), [true, false, false, false, false], 'Test 73');
test(camelMatch(["TestPattern","TestPatternQuery","TestPatternMatch","TestPatternMismatch","TestPatternCase"], "TPM"), [false, false, true, true, false], 'Test 74');
test(camelMatch(["CamelCase", "camelCase", "CamelCASE", "CAMELcase"], "CaC"), [true, false, false, false], 'Test 75');
test(camelMatch(["aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ", "abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "aBcDeFgHiJkLmNoPqRsTuVwXyZ", "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz"], "aBcEfHjLpTz"), [false, false, false, false, false], 'Test 76');
test(camelMatch(["OneTwoThreeFourFiveSixSevenEightNineTen", "OneTwoThreeFourFiveSixSevenEightNine", "OneTwoThreeFourFiveSixSevenEight", "OneTwoThreeFourFiveSixSeven", "OneTwoThreeFourFiveSix"], "OTFSF"), [false, false, false, false, false], 'Test 77');
test(camelMatch(["CamelCasePatternMatching","camelCasePatternMatching","CAMELCASEPATTERNMATCHING","camelcasepatternmatching"], "CamElCaSePaTtErNmAtChInG"), [false, false, false, false], 'Test 78');
test(camelMatch(["aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ","aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyY"], "aBcDeFgHiJkLmNoPqRsTuVwXyZ"), [false, false], 'Test 79');
test(camelMatch(["AnotherExample","Another","An","AnotherExampleString","ExampleAnotherString"], "An"), [false, true, true, false, false], 'Test 80');
test(camelMatch(["TestCase","Test","TestCasePattern","TestPattern","PatternTest"], "Tes"), [false, true, false, false, false], 'Test 81');
test(camelMatch(["MachineLearning","ML","MaChine_Learning","MachLeaRning","MachineLearNiNg"], "MLe"), [true, false, false, false, false], 'Test 82');
test(camelMatch(["PatternMatching", "PatternMatchingExample", "PatMatch", "PatMatchEx"], "PM"), [true, false, true, false], 'Test 83');
test(camelMatch(["abAB","abab","ABab","abABab","abABAB"], "abAB"), [true, false, false, true, false], 'Test 84');
test(camelMatch(["PatternMatchingIsFun", "PatternMatching", "PatternMatchingIs", "PatternIsFun", "PatternMatchingFun"], "PMIF"), [true, false, false, false, false], 'Test 85');
test(camelMatch(["AlGoRiThM","algoR","alGOrIthM","aLGOrIth","AlgOrIthM"], "aGI"), [false, false, false, false, false], 'Test 86');
test(camelMatch(["aBcDeFgHiJ","aBcDeFgHiJkL","aBcDeFgHiJkLmN","aBcDeFgHiJkLmNoP","aBcDeFgHiJkLmNoPqR"], "aBcDFgHj"), [false, false, false, false, false], 'Test 87');
test(camelMatch(["PaTtErN123","Pattern123","pAtTeRn123","PaTtErN","Pattern","pAtTeRn"], "PaTtErN"), [false, false, false, true, false, false], 'Test 88');
test(camelMatch(["aBCdEf","abcdef","abDef","aBcDE","aBcDeF","aBcDEf"], "aBcEf"), [false, false, false, false, false, false], 'Test 89');
test(camelMatch(["TestCasesWithDifferentLengths", "TestCasesWithDifferentLength", "TestCasesWithDifferent", "TestCasesWith", "TestCases"], "TCWDL"), [true, true, false, false, false], 'Test 90');
test(camelMatch(["Pattern","pattern","PatternMatch","PAtTERNmAtCH","PaTtErNmAtCh"], "PaT"), [false, false, false, false, false], 'Test 91');
test(camelMatch(["ComputerVision", "computerVISION", "CoMpUtErViSiOn", "COMPUTERVISION"], "CV"), [true, false, false, false], 'Test 92');
test(camelMatch(["Xylophone","xylophone","XyLopHone","XyLoPhone","xyLoPhOnE"], "XyLoPhOnE"), [false, false, false, false, false], 'Test 93');
test(camelMatch(["CoMpLeXqUeRiEs","complexqueries","CoMpLeXqUeRiE","CoMpLeXqUeRiEz","CoMpLeXqUeRiEsZ","CoMpLeXqUeRiEsZz"], "CoMpLeXqUeRiEs"), [true, false, false, false, false, false], 'Test 94');
test(camelMatch(["CamelHump","CamelHumpQuery","CamelHouse","CamelHousekeeping","CamelHorseRace"], "CHq"), [false, false, false, false, false], 'Test 95');
test(camelMatch(["OpenAI","Open_Artificial_Intelligence","O_A_I","OpenA","OpenAIAI"], "OAI"), [true, false, false, false, false], 'Test 96');
test(camelMatch(["looongPattern","looongPattern","longPattern","lOnGPattern","LoNgPatTerN"], "LoNgPat"), [false, false, false, false, false], 'Test 97');
test(camelMatch(["Algorithm", "AlgoRhythm", "AlGoRiThM", "ALGORITHM"], "AlGM"), [false, false, false, false], 'Test 98');
test(camelMatch(["TestString","TestingString","TeststrIng","TstStr","TestStrng"], "TstStr"), [true, true, false, true, true], 'Test 99');
test(camelMatch(["OneTwoThreeFour","OTFT","OneTwoF","OneTwoThrFor","OTFTF"], "OTFT"), [false, true, false, false, false], 'Test 100');
test(camelMatch(["qWeRtY","qwerty","QwErTy","QwErTyUiOp"], "qWeRtY"), [true, false, false, false], 'Test 101');
test(camelMatch(["TestPattern","TestPatternQuery","TestPatternMatch","TestPatternMismatch","TestPatternCase"], "TPMc"), [false, false, true, true, false], 'Test 102');
test(camelMatch(["NaturalLanguageProcessing", "naturalLANGUAGEPROCESSING", "NaTuRaLlAnGuAgEPrOcEsSiNg", "NATURALLANGUAGEPROCESSING"], "NLP"), [true, false, false, false], 'Test 103');
test(camelMatch(["MIXEDcase","MiXEDcase","MiXeDCase","MIXeDCase","MiXEdCASE"], "MXc"), [false, false, false, false, false], 'Test 104');
test(camelMatch(["MiXeDcASe","MiXeDCase","MiXeD","MiX","MixeDCase"], "MiX"), [false, false, false, true, false], 'Test 105');
test(camelMatch(["aAaAaA","aaaaaa","Aaaaaa","aAaaaa","aaaaAa"], "aAa"), [false, false, false, true, true], 'Test 106');
test(camelMatch(["CamelHump","CamelHumpQuery","CamelHouse","CamelHousekeeping","CamelHorseRace"], "CHH"), [false, false, false, false, false], 'Test 107');
test(camelMatch(["PatternMatching","PatMat","PatrnMtch","PatternMtching","PatMatch"], "PtnMtch"), [true, false, true, true, false], 'Test 108');
test(camelMatch(["AlphabetPattern","Al","Alpha","Pattern","AlphabetPatternInString"], "Al"), [false, true, true, false, false], 'Test 109');
test(camelMatch(["lowercase","Lowercase","LOWERCASE","lowerCASE","lowERCASE"], "lwr"), [true, false, false, false, false], 'Test 110');
test(camelMatch(["aAbBcCdDeEfFgG","aBcDeFg","aBcD","aB","a"], "aBcD"), [false, false, true, false, false], 'Test 111');
test(camelMatch(["AlGoRiThM","algorithm","AlGoRiThMs","AlGoRiThMuS","algorithms","AlGoRiThmSUs","AlGoRiThMuSiC"], "AlGoRiThMuS"), [false, false, false, true, false, false, false], 'Test 112');
test(camelMatch(["exampleQuery","ExampleQUERY","exampleQUERY","exampleQueryTest","exampleQueryTestTest"], "eQ"), [true, false, false, false, false], 'Test 113');
test(camelMatch(["DataStructure", "dataStructure", "DataSTRUCTURE", "DATAstructure"], "DtS"), [true, false, false, false], 'Test 114');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

