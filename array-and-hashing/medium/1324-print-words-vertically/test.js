// Test: 1324. Print Words Vertically
// 141 test cases from LeetCodeDataset
// Run: node test.js

const { printVertically } = require("./solution");

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

console.log("\n1324. Print Words Vertically\n");

test(printVertically("AB CD"), ['AC', 'BD'], 'Test 1');
test(printVertically("A B C D"), ['ABCD'], 'Test 2');
test(printVertically("A B C D E"), ['ABCDE'], 'Test 3');
test(printVertically("SINGLEWORD"), ['S', 'I', 'N', 'G', 'L', 'E', 'W', 'O', 'R', 'D'], 'Test 4');
test(printVertically("A B C"), ['ABC'], 'Test 5');
test(printVertically("PYTHON"), ['P', 'Y', 'T', 'H', 'O', 'N'], 'Test 6');
test(printVertically("HELLO WORLD"), ['HW', 'EO', 'LR', 'LL', 'OD'], 'Test 7');
test(printVertically("ABCD EF GHIJK"), ['AEG', 'BFH', 'C I', 'D J', '  K'], 'Test 8');
test(printVertically("PROGRAMMING IS FUN"), ['PIF', 'RSU', 'O N', 'G', 'R', 'A', 'M', 'M', 'I', 'N', 'G'], 'Test 9');
test(printVertically("MAKE AMERICA GREAT AGAIN"), ['MAGA', 'AMRG', 'KEEA', 'ERAI', ' ITN', ' C', ' A'], 'Test 10');
test(printVertically("SPACE  BETWEEN"), ['SB', 'PE', 'AT', 'CW', 'EE', ' E', ' N'], 'Test 11');
test(printVertically("UPPER CASE ONLY"), ['UCO', 'PAN', 'PSL', 'EEY', 'R'], 'Test 12');
test(printVertically("HOW ARE YOU"), ['HAY', 'ORO', 'WEU'], 'Test 13');
test(printVertically("PYTHON CODING CHALLENGE"), ['PCC', 'YOH', 'TDA', 'HIL', 'ONL', 'NGE', '  N', '  G', '  E'], 'Test 14');
test(printVertically("JUMP HIGH"), ['JH', 'UI', 'MG', 'PH'], 'Test 15');
test(printVertically("A"), ['A'], 'Test 16');
test(printVertically("ALIGNED TEXT VERTICALLY"), ['ATV', 'LEE', 'IXR', 'GTT', 'N I', 'E C', 'D A', '  L', '  L', '  Y'], 'Test 17');
test(printVertically("KEEP IT SIMPLE"), ['KIS', 'ETI', 'E M', 'P P', '  L', '  E'], 'Test 18');
test(printVertically("HELLO HELLO HELLO"), ['HHH', 'EEE', 'LLL', 'LLL', 'OOO'], 'Test 19');
test(printVertically("TO BE OR NOT TO BE"), ['TBONTB', 'OEROOE', '   T'], 'Test 20');
test(printVertically("CONTEST IS COMING"), ['CIC', 'OSO', 'N M', 'T I', 'E N', 'S G', 'T'], 'Test 21');
test(printVertically("SAME LENGTH"), ['SL', 'AE', 'MN', 'EG', ' T', ' H'], 'Test 22');
test(printVertically("PYTHON IS FUN"), ['PIF', 'YSU', 'T N', 'H', 'O', 'N'], 'Test 23');
test(printVertically("MULTIPLE    SPACES BETWEEN WORDS"), ['MSBW', 'UPEO', 'LATR', 'TCWD', 'IEES', 'PSE', 'L N', 'E'], 'Test 24');
test(printVertically("VERTICAL PRINTING TEST"), ['VPT', 'ERE', 'RIS', 'TNT', 'IT', 'CI', 'AN', 'LG'], 'Test 25');
test(printVertically("VERTICALALIGNMENT WITH SPACES"), ['VWS', 'EIP', 'RTA', 'THC', 'I E', 'C S', 'A', 'L', 'A', 'L', 'I', 'G', 'N', 'M', 'E', 'N', 'T'], 'Test 26');
test(printVertically("VERYLONGWORDSTOCHALLENGEIMPLEMENTATION"), ['V', 'E', 'R', 'Y', 'L', 'O', 'N', 'G', 'W', 'O', 'R', 'D', 'S', 'T', 'O', 'C', 'H', 'A', 'L', 'L', 'E', 'N', 'G', 'E', 'I', 'M', 'P', 'L', 'E', 'M', 'E', 'N', 'T', 'A', 'T', 'I', 'O', 'N'], 'Test 27');
test(printVertically("SHORT LONGER LONGEST"), ['SLL', 'HOO', 'ONN', 'RGG', 'TEE', ' RS', '  T'], 'Test 28');
test(printVertically("UNIVERSITY OF WATERLOO"), ['UOW', 'NFA', 'I T', 'V E', 'E R', 'R L', 'S O', 'I O', 'T', 'Y'], 'Test 29');
test(printVertically("VERTICAL ALIGNMENT TEST"), ['VAT', 'ELE', 'RIS', 'TGT', 'IN', 'CM', 'AE', 'LN', ' T'], 'Test 30');
test(printVertically("COMPACT AND READABLE CODE"), ['CARC', 'ONEO', 'MDAD', 'P DE', 'A A', 'C B', 'T L', '  E'], 'Test 31');
test(printVertically("MIXED CASE words"), ['MCw', 'IAo', 'XSr', 'EEd', 'D s'], 'Test 32');
test(printVertically("LONGESTWORDHERE SHORT MEDIUM"), ['LSM', 'OHE', 'NOD', 'GRI', 'ETU', 'S M', 'T', 'W', 'O', 'R', 'D', 'H', 'E', 'R', 'E'], 'Test 33');
test(printVertically("SMALL BIGGEST WORD"), ['SBW', 'MIO', 'AGR', 'LGD', 'LE', ' S', ' T'], 'Test 34');
test(printVertically("HELLO WORLD THIS IS A TEST"), ['HWTIAT', 'EOHS E', 'LRI  S', 'LLS  T', 'OD'], 'Test 35');
test(printVertically("MIXED LENGTH WORDS HERE"), ['MLWH', 'IEOE', 'XNRR', 'EGDE', 'DTS', ' H'], 'Test 36');
test(printVertically("COMPUTER SCIENCE DEPARTMENT"), ['CSD', 'OCE', 'MIP', 'PEA', 'UNR', 'TCT', 'EEM', 'R E', '  N', '  T'], 'Test 37');
test(printVertically("VERYLONGWORDSTO TEST THE SYSTEM"), ['VTTS', 'EEHY', 'RSES', 'YT T', 'L  E', 'O  M', 'N', 'G', 'W', 'O', 'R', 'D', 'S', 'T', 'O'], 'Test 38');
test(printVertically("SAMEWORDSAMEWORD"), ['S', 'A', 'M', 'E', 'W', 'O', 'R', 'D', 'S', 'A', 'M', 'E', 'W', 'O', 'R', 'D'], 'Test 39');
test(printVertically("SMALL WORDS"), ['SW', 'MO', 'AR', 'LD', 'LS'], 'Test 40');
test(printVertically("MULTILINE
TEXT
SHOULD
NOT
BE
HERE"), Error: Solution.printVertically[] missing 1 required positional argument: 's', 'Test 41');
test(printVertically("VERTICAL PRINTING IS FUN"), ['VPIF', 'ERSU', 'RI N', 'TN', 'IT', 'CI', 'AN', 'LG'], 'Test 42');
test(printVertically("ALGORITHMS DATA STRUCTURES"), ['ADS', 'LAT', 'GTR', 'OAU', 'R C', 'I T', 'T U', 'H R', 'M E', 'S S'], 'Test 43');
test(printVertically("A B C D E F G H I J K L M N O P Q R S T U V W X Y Z"), ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'], 'Test 44');
test(printVertically("EFFICIENT AND POWERFUL"), ['EAP', 'FNO', 'FDW', 'I E', 'C R', 'I F', 'E U', 'N L', 'T'], 'Test 45');
test(printVertically("AVERYLONGWORD THATFITSSNICELY INTOTHECOLUMN"), ['ATI', 'VHN', 'EAT', 'RTO', 'YFT', 'LIH', 'OTE', 'NSC', 'GSO', 'WNL', 'OIU', 'RCM', 'DEN', ' L', ' Y'], 'Test 46');
test(printVertically("MIXEDCASEANDUPPERCASE"), ['M', 'I', 'X', 'E', 'D', 'C', 'A', 'S', 'E', 'A', 'N', 'D', 'U', 'P', 'P', 'E', 'R', 'C', 'A', 'S', 'E'], 'Test 47');
test(printVertically("MIXEDCASE mixedcase"), ['Mm', 'Ii', 'Xx', 'Ee', 'Dd', 'Cc', 'Aa', 'Ss', 'Ee'], 'Test 48');
test(printVertically("MIXED CASE Words AND NUMBERS 123"), ['MCWAN1', 'IAoNU2', 'XSrDM3', 'EEd B', 'D s E', '    R', '    S'], 'Test 49');
test(printVertically("SPACES   ARE   IGNORED   BETWEEN   WORDS"), ['SAIBW', 'PRGEO', 'AENTR', 'C OWD', 'E RES', 'S EE', '  DN'], 'Test 50');
test(printVertically("PYTHONPROGRAMMING"), ['P', 'Y', 'T', 'H', 'O', 'N', 'P', 'R', 'O', 'G', 'R', 'A', 'M', 'M', 'I', 'N', 'G'], 'Test 51');
test(printVertically("CHECK FOR SPACES IN BETWEEN"), ['CFSIB', 'HOPNE', 'ERA T', 'C C W', 'K E E', '  S E', '    N'], 'Test 52');
test(printVertically("DATA SCIENCE AND MACHINE LEARNING"), ['DSAML', 'ACNAE', 'TIDCA', 'AE HR', ' N IN', ' C NI', ' E EN', '    G'], 'Test 53');
test(printVertically("LEADING AND TRAILING SPACES"), ['LATS', 'ENRP', 'ADAA', 'D IC', 'I LE', 'N IS', 'G N', '  G'], 'Test 54');
test(printVertically("VERYLONGWORDSHOULDTESTTHEFUNCTION"), ['V', 'E', 'R', 'Y', 'L', 'O', 'N', 'G', 'W', 'O', 'R', 'D', 'S', 'H', 'O', 'U', 'L', 'D', 'T', 'E', 'S', 'T', 'T', 'H', 'E', 'F', 'U', 'N', 'C', 'T', 'I', 'O', 'N'], 'Test 55');
test(printVertically("MULTILINE VERTICAL OUTPUT"), ['MVO', 'UEU', 'LRT', 'TTP', 'IIU', 'LCT', 'IA', 'NL', 'E'], 'Test 56');
test(printVertically("LONGESTWORD IN A SENTENCE"), ['LIAS', 'ON E', 'N  N', 'G  T', 'E  E', 'S  N', 'T  C', 'W  E', 'O', 'R', 'D'], 'Test 57');
test(printVertically("ONE TWO THREE FOUR FIVE SIX SEVEN EIGHT NINE TEN"), ['OTTFFSSENT', 'NWHOIIEIIE', 'EORUVXVGNN', '  ERE EHE', '  E   NT'], 'Test 58');
test(printVertically("ALIGNED COLUMN OUTPUT PRINTING"), ['ACOP', 'LOUR', 'ILTI', 'GUPN', 'NMUT', 'ENTI', 'D  N', '   G'], 'Test 59');
test(printVertically("ANOTHEREXAMPLEFOR TESTING"), ['AT', 'NE', 'OS', 'TT', 'HI', 'EN', 'RG', 'E', 'X', 'A', 'M', 'P', 'L', 'E', 'F', 'O', 'R'], 'Test 60');
test(printVertically("SHORT LONGEST SHORTEST"), ['SLS', 'HOH', 'ONO', 'RGR', 'TET', ' SE', ' TS', '  T'], 'Test 61');
test(printVertically("SAMEWORD SAMEWORD SAMEWORD"), ['SSS', 'AAA', 'MMM', 'EEE', 'WWW', 'OOO', 'RRR', 'DDD'], 'Test 62');
test(printVertically("ALIGNED ROWS"), ['AR', 'LO', 'IW', 'GS', 'N', 'E', 'D'], 'Test 63');
test(printVertically("JUSTIFIED TEXT"), ['JT', 'UE', 'SX', 'TT', 'I', 'F', 'I', 'E', 'D'], 'Test 64');
test(printVertically("SHORTEST LONGEST WORD"), ['SLW', 'HOO', 'ONR', 'RGD', 'TE', 'ES', 'ST', 'T'], 'Test 65');
test(printVertically("ENDING SPACES ARE NOT ALLOWED   "), ['ESANA', 'NPROL', 'DAETL', 'IC  O', 'NE  W', 'GS  E', '    D'], 'Test 66');
test(printVertically("S P A C E S E P A R A T E D"), ['SPACESEPARATED'], 'Test 67');
test(printVertically("VERYLONGWORDTHATREQUIRESPROPERVERTICALALIGNMENT"), ['V', 'E', 'R', 'Y', 'L', 'O', 'N', 'G', 'W', 'O', 'R', 'D', 'T', 'H', 'A', 'T', 'R', 'E', 'Q', 'U', 'I', 'R', 'E', 'S', 'P', 'R', 'O', 'P', 'E', 'R', 'V', 'E', 'R', 'T', 'I', 'C', 'A', 'L', 'A', 'L', 'I', 'G', 'N', 'M', 'E', 'N', 'T'], 'Test 68');
test(printVertically("MIX SOME VERY LONG WORDS IN THIS STRING"), ['MSVLWITS', 'IOEOONHT', 'XMRNR IR', ' EYGD SI', '    S  N', '       G'], 'Test 69');
test(printVertically("MULTILINE TEXT PRINTING"), ['MTP', 'UER', 'LXI', 'TTN', 'I T', 'L I', 'I N', 'N G', 'E'], 'Test 70');
test(printVertically("VERY LONG WORDS IN THIS SENTENCE"), ['VLWITS', 'EOONHE', 'RNR IN', 'YGD ST', '  S  E', '     N', '     C', '     E'], 'Test 71');
test(printVertically("LEADING SPACES   ARE   IGNORED"), ['LSAI', 'EPRG', 'AAEN', 'DC O', 'IE R', 'NS E', 'G  D'], 'Test 72');
test(printVertically("VERTICAL PRINTING TEST CASE"), ['VPTC', 'EREA', 'RISS', 'TNTE', 'IT', 'CI', 'AN', 'LG'], 'Test 73');
test(printVertically("REALLYLONGWORD THATS EVENLONGER"), ['RTE', 'EHV', 'AAE', 'LTN', 'LSL', 'Y O', 'L N', 'O G', 'N E', 'G R', 'W', 'O', 'R', 'D'], 'Test 74');
test(printVertically("SIXTEENCHARACTERLIMITHERE"), ['S', 'I', 'X', 'T', 'E', 'E', 'N', 'C', 'H', 'A', 'R', 'A', 'C', 'T', 'E', 'R', 'L', 'I', 'M', 'I', 'T', 'H', 'E', 'R', 'E'], 'Test 75');
test(printVertically("HIGH LEVEL LANGUAGE"), ['HLL', 'IEA', 'GVN', 'HEG', ' LU', '  A', '  G', '  E'], 'Test 76');
test(printVertically("SAMELENGTH WORDS"), ['SW', 'AO', 'MR', 'ED', 'LS', 'E', 'N', 'G', 'T', 'H'], 'Test 77');
test(printVertically("ONECHAR PER WORD A B C D E"), ['OPWABCDE', 'NEO', 'ERR', 'C D', 'H', 'A', 'R'], 'Test 78');
test(printVertically("VARYING WORD LENGTHS"), ['VWL', 'AOE', 'RRN', 'YDG', 'I T', 'N H', 'G S'], 'Test 79');
test(printVertically("PYTHON IS AWESOME"), ['PIA', 'YSW', 'T E', 'H S', 'O O', 'N M', '  E'], 'Test 80');
test(printVertically("SHOULD HANDLE LARGE WORDS CORRECTLY"), ['SHLWC', 'HAAOO', 'ONRRR', 'UDGDR', 'LLESE', 'DE  C', '    T', '    L', '    Y'], 'Test 81');
test(printVertically("ONEVERYLONGWORDHERE"), ['O', 'N', 'E', 'V', 'E', 'R', 'Y', 'L', 'O', 'N', 'G', 'W', 'O', 'R', 'D', 'H', 'E', 'R', 'E'], 'Test 82');
test(printVertically("HELLO WORLD FROM ALIBABA CLOUD"), ['HWFAC', 'EORLL', 'LROIO', 'LLMBU', 'OD AD', '   B', '   A'], 'Test 83');
test(printVertically("DIFFERENT LENGTH WORDS"), ['DLW', 'IEO', 'FNR', 'FGD', 'ETS', 'RH', 'E', 'N', 'T'], 'Test 84');
test(printVertically("UPPERCASE WORDS ONLY"), ['UWO', 'PON', 'PRL', 'EDY', 'RS', 'C', 'A', 'S', 'E'], 'Test 85');
test(printVertically("THIS IS A LONG STRING FOR TESTING"), ['TIALSFT', 'HS OTOE', 'I  NRRS', 'S  GI T', '    N I', '    G N', '      G'], 'Test 86');
test(printVertically("LEADING AND TRAILING SPACES ARE NOT ALLOWED"), ['LATSANA', 'ENRPROL', 'ADAAETL', 'D IC  O', 'I LE  W', 'N IS  E', 'G N   D', '  G'], 'Test 87');
test(printVertically("SPECIAL CASES LIKE EMPTY STRING"), ['SCLES', 'PAIMT', 'ESKPR', 'CEETI', 'IS YN', 'A   G', 'L'], 'Test 88');
test(printVertically("UNIVERSAL ACCEPTANCE OF PYTHON"), ['UAOP', 'NCFY', 'IC T', 'VE H', 'EP O', 'RT N', 'SA', 'AN', 'LC', ' E'], 'Test 89');
test(printVertically("HELLO WORLD FROM THE OTHER SIDE"), ['HWFTOS', 'EORHTI', 'LROEHD', 'LLM EE', 'OD  R'], 'Test 90');
test(printVertically("TESTING WITH SPECIAL CHARACTERS !@#"), ['TWSC!', 'EIPH@', 'STEA#', 'THCR', 'I IA', 'N AC', 'G LT', '   E', '   R', '   S'], 'Test 91');
test(printVertically("MULTILINE STRING WITH MULTIPLE LINES"), ['MSWML', 'UTIUI', 'LRTLN', 'TIHTE', 'IN IS', 'LG P', 'I  L', 'N  E', 'E'], 'Test 92');
test(printVertically("SHORTEST WORD"), ['SW', 'HO', 'OR', 'RD', 'T', 'E', 'S', 'T'], 'Test 93');
test(printVertically("TEST WITH MANY WORDS AND DIFFERENT LENGTHS"), ['TWMWADL', 'EIAONIE', 'STNRDFN', 'THYD FG', '   S ET', '     RH', '     ES', '     N', '     T'], 'Test 94');
test(printVertically("EXTREMELYLONGWORD SOMETIMES ARE NECESSARY"), ['ESAN', 'XORE', 'TMEC', 'RE E', 'ET S', 'MI S', 'EM A', 'LE R', 'YS Y', 'L', 'O', 'N', 'G', 'W', 'O', 'R', 'D'], 'Test 95');
test(printVertically("EQUAL LENGTH WORDS HERE"), ['ELWH', 'QEOE', 'UNRR', 'AGDE', 'LTS', ' H'], 'Test 96');
test(printVertically("HELLO WORLD THIS IS A VERTICALLY PRINTED TEXT"), ['HWTIAVPT', 'EOHS ERE', 'LRI  RIX', 'LLS  TNT', 'OD   IT', '     CE', '     AD', '     L', '     L', '     Y'], 'Test 97');
test(printVertically("SINGLE"), ['S', 'I', 'N', 'G', 'L', 'E'], 'Test 98');
test(printVertically("PYTHONCODE JAVA CODE CSHARP"), ['PJCC', 'YAOS', 'TVDH', 'HAEA', 'O  R', 'N  P', 'C', 'O', 'D', 'E'], 'Test 99');
test(printVertically("WITH MANY DIFFERENT LENGTHS"), ['WMDL', 'IAIE', 'TNFN', 'HYFG', '  ET', '  RH', '  ES', '  N', '  T'], 'Test 100');
test(printVertically("DIFFERENT LENGTHS"), ['DL', 'IE', 'FN', 'FG', 'ET', 'RH', 'ES', 'N', 'T'], 'Test 101');
test(printVertically("PYTHON PROGRAMMING"), ['PP', 'YR', 'TO', 'HG', 'OR', 'NA', ' M', ' M', ' I', ' N', ' G'], 'Test 102');
test(printVertically("ALMOSTDONE"), ['A', 'L', 'M', 'O', 'S', 'T', 'D', 'O', 'N', 'E'], 'Test 103');
test(printVertically("VARYING LENGTHS IN THIS STRING"), ['VLITS', 'AENHT', 'RN IR', 'YG SI', 'IT  N', 'NH  G', 'GS'], 'Test 104');
test(printVertically("AVERYLONGWORDWITHNOSPACE"), ['A', 'V', 'E', 'R', 'Y', 'L', 'O', 'N', 'G', 'W', 'O', 'R', 'D', 'W', 'I', 'T', 'H', 'N', 'O', 'S', 'P', 'A', 'C', 'E'], 'Test 105');
test(printVertically("PROGRAMMING CHALLENGES ARE FUN"), ['PCAF', 'RHRU', 'OAEN', 'GL', 'RL', 'AE', 'MN', 'MG', 'IE', 'NS', 'G'], 'Test 106');
test(printVertically("TESTING EDGE CASES HERE"), ['TECH', 'EDAE', 'SGSR', 'TEEE', 'I S', 'N', 'G'], 'Test 107');
test(printVertically("DIFFERENT    SPACING TEST"), ['DST', 'IPE', 'FAS', 'FCT', 'EI', 'RN', 'EG', 'N', 'T'], 'Test 108');
test(printVertically("MIXED    SPACES AND    VARYING    LENGTHS"), ['MSAVL', 'IPNAE', 'XADRN', 'EC YG', 'DE IT', ' S NH', '   GS'], 'Test 109');
test(printVertically("SPARSEMATRIX AND DENSEMATRIX"), ['SAD', 'PNE', 'ADN', 'R S', 'S E', 'E M', 'M A', 'A T', 'T R', 'R I', 'I X', 'X'], 'Test 110');
test(printVertically("ALIGNED   COLUMN   OUTPUT"), ['ACO', 'LOU', 'ILT', 'GUP', 'NMU', 'ENT', 'D'], 'Test 111');
test(printVertically("UPPERCASE LOWERCASE MIXEDCASE"), ['ULM', 'POI', 'PWX', 'EEE', 'RRD', 'CCC', 'AAA', 'SSS', 'EEE'], 'Test 112');
test(printVertically("REALLYLONGWORD AND SHORT"), ['RAS', 'ENH', 'ADO', 'L R', 'L T', 'Y', 'L', 'O', 'N', 'G', 'W', 'O', 'R', 'D'], 'Test 113');
test(printVertically("ONE"), ['O', 'N', 'E'], 'Test 114');
test(printVertically("PYTHONJAVAJS CPLUSPLUS RUBY"), ['PCR', 'YPU', 'TLB', 'HUY', 'OS', 'NP', 'JL', 'AU', 'VS', 'A', 'J', 'S'], 'Test 115');
test(printVertically("MULTILINE STRINGS ARE NOT ALLOWED"), ['MSANA', 'UTROL', 'LRETL', 'TI  O', 'IN  W', 'LG  E', 'IS  D', 'N', 'E'], 'Test 116');
test(printVertically("VERTICAL PRINTING"), ['VP', 'ER', 'RI', 'TN', 'IT', 'CI', 'AN', 'LG'], 'Test 117');
test(printVertically("VERTICAL PRINTING OF STRINGS"), ['VPOS', 'ERFT', 'RI R', 'TN I', 'IT N', 'CI G', 'AN S', 'LG'], 'Test 118');
test(printVertically("TRAILING SPACES   ARE   NOT   ALLOWED   "), ['TSANA', 'RPROL', 'AAETL', 'IC  O', 'LE  W', 'IS  E', 'N   D', 'G'], 'Test 119');
test(printVertically("MULTILINE VERTICAL PRINT"), ['MVP', 'UER', 'LRI', 'TTN', 'IIT', 'LC', 'IA', 'NL', 'E'], 'Test 120');
test(printVertically("SINGLELETTERS ABC DEF GHI"), ['SADG', 'IBEH', 'NCFI', 'G', 'L', 'E', 'L', 'E', 'T', 'T', 'E', 'R', 'S'], 'Test 121');
test(printVertically("SMALL LARGER LARGEST"), ['SLL', 'MAA', 'ARR', 'LGG', 'LEE', ' RS', '  T'], 'Test 122');
test(printVertically("SAME LENGTH WORDS"), ['SLW', 'AEO', 'MNR', 'EGD', ' TS', ' H'], 'Test 123');
test(printVertically("ALIGNS WORDS CORRECTLY"), ['AWC', 'LOO', 'IRR', 'GDR', 'NSE', 'S C', '  T', '  L', '  Y'], 'Test 124');
test(printVertically("MIXED CASE STRING"), ['MCS', 'IAT', 'XSR', 'EEI', 'D N', '  G'], 'Test 125');
test(printVertically("UPPERCASE LOWERCASE MIXED"), ['ULM', 'POI', 'PWX', 'EEE', 'RRD', 'CC', 'AA', 'SS', 'EE'], 'Test 126');
test(printVertically("VERIFYING THE CORRECTNESS OF THE IMPLEMENTATION"), ['VTCOTI', 'EHOFHM', 'RER EP', 'I R  L', 'F E  E', 'Y C  M', 'I T  E', 'N N  N', 'G E  T', '  S  A', '  S  T', '     I', '     O', '     N'], 'Test 127');
test(printVertically("HELLO WORLD HELLO WORLD"), ['HWHW', 'EOEO', 'LRLR', 'LLLL', 'ODOD'], 'Test 128');
test(printVertically("PYTHON IS A GREAT LANGUAGE"), ['PIAGL', 'YS RA', 'T  EN', 'H  AG', 'O  TU', 'N   A', '    G', '    E'], 'Test 129');
test(printVertically("MIXEDCASE Words ARE Allowed"), ['MWAA', 'IoRl', 'XrEl', 'Ed o', 'Ds w', 'C  e', 'A  d', 'S', 'E'], 'Test 130');
test(printVertically("ONE TWO THREE FOUR FIVE SIX"), ['OTTFFS', 'NWHOII', 'EORUVX', '  ERE', '  E'], 'Test 131');
test(printVertically("SPECIAL !@#$%^&*[] CHARACTERS ARE NOT ALLOWED BUT UPPER CASE ONLY"), ['S!CANABUCO', 'P@HROLUPAN', 'E#AETLTPSL', 'C$R  O EEY', 'I%A  W R', 'A^C  E', 'L&T  D', ' *E', ' [R', ' ]S'], 'Test 132');
test(printVertically("MIXED CASE WITH VARYING LENGTHS"), ['MCWVL', 'IAIAE', 'XSTRN', 'EEHYG', 'D  IT', '   NH', '   GS'], 'Test 133');
test(printVertically("HELLO WORLD FROM PYTHON"), ['HWFP', 'EORY', 'LROT', 'LLMH', 'OD O', '   N'], 'Test 134');
test(printVertically("LONGESTWORDINASENTENCEISHERE"), ['L', 'O', 'N', 'G', 'E', 'S', 'T', 'W', 'O', 'R', 'D', 'I', 'N', 'A', 'S', 'E', 'N', 'T', 'E', 'N', 'C', 'E', 'I', 'S', 'H', 'E', 'R', 'E'], 'Test 135');
test(printVertically("EQUAL LENGTH WORDS"), ['ELW', 'QEO', 'UNR', 'AGD', 'LTS', ' H'], 'Test 136');
test(printVertically("ONE TWO THREE FOUR FIVE SIX SEVEN"), ['OTTFFSS', 'NWHOIIE', 'EORUVXV', '  ERE E', '  E   N'], 'Test 137');
test(printVertically("MIXED LENGTHS SHORTEST LONGEST MIDDLE"), ['MLSLM', 'IEHOI', 'XNOND', 'EGRGD', 'DTTEL', ' HESE', ' SST', '  T'], 'Test 138');
test(printVertically("PYTHON PROGRAMMING LANGUAGE"), ['PPL', 'YRA', 'TON', 'HGG', 'ORU', 'NAA', ' MG', ' ME', ' I', ' N', ' G'], 'Test 139');
test(printVertically("LONGESTWORDFORTESTING VARYING LENGTHS TESTING"), ['LVLT', 'OAEE', 'NRNS', 'GYGT', 'EITI', 'SNHN', 'TGSG', 'W', 'O', 'R', 'D', 'F', 'O', 'R', 'T', 'E', 'S', 'T', 'I', 'N', 'G'], 'Test 140');
test(printVertically("DIFFERENT LENGTH WORDS HERE"), ['DLWH', 'IEOE', 'FNRR', 'FGDE', 'ETS', 'RH', 'E', 'N', 'T'], 'Test 141');

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
