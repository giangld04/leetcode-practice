// Test: 756. Pyramid Transition Matrix
// 81 test cases from LeetCodeDataset
// Run: node test.js

const { pyramidTransition } = require("./solution");

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

console.log("\n756. Pyramid Transition Matrix\n");

test(pyramidTransition("FFFA", ["FFF","FFA","FAF","AFF"]), true, 'Test 1');
test(pyramidTransition("ABC", ["ABD","BDC","CDB","BDD","DEF","DEE"]), false, 'Test 2');
test(pyramidTransition("ABC", ["ABD","BCE","DEF"]), true, 'Test 3');
test(pyramidTransition("ABC", ["ABD","BCE","DEF","FFF","GHI"]), true, 'Test 4');
test(pyramidTransition("CDC", ["ABA","ACA","BCD","BDA","CDE","CBD","DEC","DEF","FFF"]), false, 'Test 5');
test(pyramidTransition("XXY", ["XXY","XYX","YXX","XYY","YYX","YYY"]), true, 'Test 6');
test(pyramidTransition("BCD", ["BCC","CDE","CEA","FFF"]), true, 'Test 7');
test(pyramidTransition("XXY", ["XYX","XYD","YXZ","XYZ","XZX","XYX","YZX","XYZ","XYZ"]), false, 'Test 8');
test(pyramidTransition("BDD", ["ABB","ACB","BDC","BDB","BCC","BDD","CCC","BCB","CBC","DEC","CDB","DEB","CDE"]), false, 'Test 9');
test(pyramidTransition("AB", ["ABA","ABB"]), true, 'Test 10');
test(pyramidTransition("AFA", ["AFF","FAA","FFF"]), true, 'Test 11');
test(pyramidTransition("XYZ", ["XYA","YZB","AXY","BYZ","XYZ"]), false, 'Test 12');
test(pyramidTransition("ABC", ["ABD","BCE","DEF","FFF"]), true, 'Test 13');
test(pyramidTransition("ABC", ["ABA","BCB","ACA"]), true, 'Test 14');
test(pyramidTransition("AAAA", ["AAB","AAC","BCD","BBE","DEF"]), false, 'Test 15');
test(pyramidTransition("CCD", ["CCC","CDC","CDD","DDD"]), true, 'Test 16');
test(pyramidTransition("XYZ", ["XYX","YZY","ZXZ"]), true, 'Test 17');
test(pyramidTransition("ABCDEFG", ["ABC","BCD","CDE","DEF","EFG","FGH","GHA","BCG","CDG","DEG","EFG","FGH","GHA","BCH","CDH","DEH","EFH","FGH","GHB","ACI","CDI","DEI","EFI","FGI","GHI","HIH","IDA","DEC","EFD","FDG","DGE","EFG","FGH","GHI","HII","IDE","DEC","EFD","FDG","DGE","EFG","FGH","GHI","HII","IDB","DEB","EFC","FDC","DGB","EHB","FHC","GHA","HIB"]), false, 'Test 18');
test(pyramidTransition("BCDE", ["BCF","CDE","DEF","EFG","FGH"]), false, 'Test 19');
test(pyramidTransition("ABCDEF", ["ABC","BCD","CDE","DEF","EFA","FAB","BCG","CDG","DEG","EFG","FGH","GHA","BCH","CDH","DEH","EFH","FGH","GHB","ACI","CDI","DEI","EFI","FGI","GHI","HIH","IDA","DEC","EFD","FDG","DGE","EFG","FGH","GHI","HII","IDE","DEC","EFD","FDG","DGE","EFG","FGH","GHI","HII","IDB","DEB","EFC","FDC","DGB","EHB","FHC","GHA","HIB","IDA","IDB","IDC","IDE","IDF","IDG","IDH","IDI"]), true, 'Test 20');
test(pyramidTransition("ABCD", ["ABA","BAC","CAD","ADC","BCD","CDB","DBD","BCF","CFF","FFA"]), true, 'Test 21');
test(pyramidTransition("ABCDEFA", ["ABC","BCD","CDE","DEF","EFA","FAB","ABE","BCE","CEF","DEF","EFD","FDA","ADB","BDC","CEB","DFC","EAD","FBE","ACB","BDC","CDB","DEA","EFD","FAD","BDA","CBD","DCB","EAF","FDB","AEB","BEC","CFA","DFB","EAD","FBA","ABC","BCD","CDE","DEF","EFA","FAB","ABE","BCE","CEF","DEF","EFD","FDA"]), true, 'Test 22');
test(pyramidTransition("ABCDEFG", ["ABC","BCD","CDE","DEF","EFG","FGG","GGA","GGB","GBC","GCD","GDE","GEF","GFG","GHH","HHA","HHB","HHC","HHD","HEH","HHF","HGG","HHH"]), true, 'Test 23');
test(pyramidTransition("AABBB", ["AAA","AAB","ABA","ABB","BBB","BBA","BAB","BAA"]), true, 'Test 24');
test(pyramidTransition("ABCDEF", ["ABF","BCG","CDF","DEH","EFA","FGA","GHB","HHA","HIB","IBC","JCA","KBD","LCE","MDF","NEG","OFA","PGH","QHI","RIB","SJC","TKD","ULC","VMF","WNG","XOH","YPI","ZQJ"]), false, 'Test 25');
test(pyramidTransition("BCD", ["BCD","CDE","DEE","EEA","EAB","ABC","BCA","CAB","BAC","ACB","BCD","CDE","DEF","EFG","FGH","GHI","HIJ","IJK","JKL","KLM","LMN","MNO","NOP","OPQ","PQR","QRS","RST","STU","TUV","UVW","VWX","WXZ","XYZ","YZA","ZAB"]), true, 'Test 26');
test(pyramidTransition("ABCDE", ["ABC","BCD","CDE","DEF","EFG","FGH","GHI"]), true, 'Test 27');
test(pyramidTransition("FEDCBA", ["FEG","EGD","GDC","DCA","CAB","ABF","BFB"]), false, 'Test 28');
test(pyramidTransition("FEDCBA", ["FED","EDC","DCB","CBA","BAC","ACB","CAB","ABC","BCA","BCD","CDB","DBD","BCF","CFF","FFA","ACF","CFA","FAC"]), true, 'Test 29');
test(pyramidTransition("AAAAAA", ["AAA","AAB","ABA","ABB","BAA","BAB","BBA","BBB","AAC","ACA","ACC","BAC","BCA","BCB","BBC","BCC","CCC","CCA","CCC","BCC","CCC","CCC"]), true, 'Test 30');
test(pyramidTransition("ABCDEF", ["ABG","BCG","CDE","DEC","EFA","FGH","GHI","HIJ","IJK","JKL","KLM","LMN","MNO","NOP","OPQ","PQR","QRS","RST","STU","TUV","UVW","VWX","WXY","XYZ"]), false, 'Test 31');
test(pyramidTransition("ABCDEF", ["ABC","BCD","CDE","DEF","EFG","FGH","GHI","HIJ","IJK","JKL","KLM","LMN","MNO","NOP","OPQ","PQR","QRS","RST","STU","TUV","UVW","VWX","WXYZ","XYZA","YZAB","ZABC","ABCD"]), Error: too many values to unpack [expected 3], 'Test 32');
test(pyramidTransition("ABCDEF", ["ABC","BCD","CDE","DEF","EFA","FAB","BCG","CDG","DEG","EFG","FGH","GHA","BCH","CDH","DEH","EFH","FGH","GHB","ACI","CDI","DEI","EFI","FGI","GHI","HIH","IDA","DEC","EFD","FDG","DGE","EFG","FGH","GHI","HIG","IHA","IDB","DEB","EFC","FDC","DGB","EHB","FHC","GHA","HIB","IDA","IDB","IDC","IDE","IDF","IDG","IDH","IDI"]), true, 'Test 33');
test(pyramidTransition("ABCDEF", ["ABG","BCG","CDE","DEC","EFA","FGH"]), false, 'Test 34');
test(pyramidTransition("ABCDE", ["ABC","BCD","CDE","DEE","EEF","EFA","FAB","ABE","BEC","ECA","CAD","CDA","DAB","ACF","CFB"]), true, 'Test 35');
test(pyramidTransition("ABCABC", ["ABA","BCB","CAC","CBC","BDB","CDC","ADA","AEA","CEC","DEC","BEB","FEC"]), true, 'Test 36');
test(pyramidTransition("ABACDA", ["ABA","BAC","ACD","CDA","DAB","ABC","BCD","CDA","DEF","EFG","FGH","GHI","HIJ","IJK","JKL","KLM","LMN","MNO","NOP","OPQ","PQR","QRS","RST","STU","TUV","UVW","VWX","WXYZ","XYZA"]), Error: too many values to unpack [expected 3], 'Test 37');
test(pyramidTransition("FEDCBA", ["FEE","EDD","DCC","CCB","BBA","AAB","ABD","BCE","DEF","FFF","GHI","IJH","KIG","LIF","MEG","NHF","OGI","PHJ","QIK","RLH","SGM","THN","UIO","VJP","WKQ","XLR","YMV","ZNW","AOX","BQP","CRS","DUT","EVV","FWW","GXW","HYX","IZY","JZZ"]), false, 'Test 38');
test(pyramidTransition("FEDCBA", ["ABC","BCD","CDE","DEF","EFG","FGH","GHI","HIJ","IJK","JKL","KLM","LMN","MNO","NOP","OPQ","PQR","QRS","RST","STU","TUV","UVW","VWX","WXYZ","XYZ","YZA","ZAB","ABC","BCA","CAB","CBA","BAC","ACB"]), Error: too many values to unpack [expected 3], 'Test 39');
test(pyramidTransition("XYZXYZ", ["XYA","YZB","ZXC","XYD","YZE","ZXF","XYG","YZH","ZXI","XYJ","YZK","ZXL","XYM","YZN","ZXM","XYP","YZQ","ZXZ","XYX","YZY","ZXZ","XZX","YZX","ZZX","XXY","YZZ","ZZY","XXZ","YXY","ZYZ","XYX","YZY","ZXZ","XYZ","YZX","ZXY","XZY","YZZ","ZZX","XYZ","YZX","ZXY","XZY","YZZ","ZZX"]), true, 'Test 40');
test(pyramidTransition("ABCDEF", ["ABE","BCD","CDE","DEF","EFG","FGA","GAB","BCF","CDA","DEB","EFC","FAB","GBC","HCD","IEA","JFB","KGA","LHB","MIA","NJB","OKC","PLD","QME","RNF","SGO","THP","UIQ","VRJ","WTK","XSL","YMV","ZNU"]), false, 'Test 41');
test(pyramidTransition("ABCDEFG", ["ABC","BCD","CDE","DEF","EFG","FGH","GHA","BCG","CDG","DEG","EFG","FGH","GHA","BCH","CDH","DEH","EFH","FGH","GHB","ACI","CDI","DEI","EFI","FGI","GHI","HIH","IDA","DEC","EFD","FDG","DGE","EFG","FGH","GHI","HII","IDE","DEC","EFD","FDG","DGE","EFG","FGH","GHI","HII"]), false, 'Test 42');
test(pyramidTransition("ABCDEFG", ["ABA","BAC","ACA","CAD","BDA","BAA","BBA","ABA","AAA","BBA","CAA","DAD","BBD","ABA","BAC","ACA","CAD","BDA","BAA","BBA","ABA","AAA","BBA","CAA","DAD","BBD","ABA","BAC","ACA","CAD","BDA","BAA","BBA","ABA","AAA","BBA","CAA","DAD","BBD"]), false, 'Test 43');
test(pyramidTransition("ABCD", ["ABC","BCD","CDA","DAB","ABE","BCE","CEA","EAB","ACD","CDB","DBA","BAC","CAD","DCA","ACF","CFE","FEA","EAC","BDF","DFG","FGH","GHB","CDF","DFH","FHG","HGD","ACE","CEB","EBD","DBA","CFA","FAB","ABF","BFD","FDC","DCB"]), true, 'Test 44');
test(pyramidTransition("ABCD", ["ABE","BEC","ECA","CAD","CDA","DAB","ABC"]), false, 'Test 45');
test(pyramidTransition("ACF", ["ACF","CFA","FAC","BAC","BCA","CAB","ACB","BCC","CBA","ABC"]), true, 'Test 46');
test(pyramidTransition("FEDCBA", ["FEE","EDC","DBA","CBA","BAE","AEG"]), false, 'Test 47');
test(pyramidTransition("FEDCBA", ["FEG","EGD","GDC","DCA","CAB","ABF","BFB","BAE","AEC","ECF","CFD","DFG","FGH","GHG","HGH","GGH"]), false, 'Test 48');
test(pyramidTransition("ABCDEF", ["ABC","BCD","CDE","DEF","EFG","FGH","GHI","HIJ","IJK","JKL","KLM","LMN","MNO","NOP","OPQ","PQR","QRS","RST","STU","TUV","UVW","VWX","WXZ","XYZ","YZA","ZAB","BCG","CGD","DGE","EGF","FGH","GHJ","HJK","IKL","JKM","KLN","LMO","MNP","NOP","OPQ","PQR","QRS","RST","STU","TUV","UVW","VWX","WXZ","XYZ","YZA","ZAB"]), true, 'Test 49');
test(pyramidTransition("ABCDE", ["ABC","BCD","CDE","DEF","EFG","FGH","GHI","HIJ","IJK","JKL","KLM","LMN","MNO","NOP","OPQ","PQR","QRS","RST","STU","TUV","UVW","VWX","WXZ","XYZ","YZA","ZAB","ABB","BBD","CCD","DDF","EFF","GFF","HFF","IFF","JFF","KFF","LFF","MFF","NFF","OFF","PFF","QFF","RFF","SFF","TFF","UFF","VFF","WFF","XFF","YFF","ZFF"]), true, 'Test 50');
test(pyramidTransition("ABCDEF", ["ABC","BCD","CDE","DEF","EFG","FGH","GHI","HIJ","IJK","JKL","KLM","LMN","MNO","NOP","OPQ","PQR","QRS","RST","STU","TUV","UVW","VWX","WXYZ","XYZA"]), Error: too many values to unpack [expected 3], 'Test 51');
test(pyramidTransition("ABCDEF", ["ABC","BCD","CDE","DEF","EFG","FGH","GHI","HIJ","IJK","JKL","KLM","LMN","MNO","NOP","OPQ","PQR","QRS","RST","STU","TUV","UVW","VWX","WXZ","XYZ","YZA","ZAB","FED","EDC","DCB","CBA","BAC","ACB","BCA","CAB","EAB","FCD","GHI","HJK","IKL","JKM","KLN","LMO","MNP","NOP","OPQ","PQR","QRS","RST","STU","TUV","UVW","VWX","WXZ","XYZ","YZA","ZAB","ABB","BBD","CCD","DDF","EFF","GFF","HFF","IFF","JFF","KFF","LFF","MFF","NFF","OFF","PFF","QFF","RFF","SFF","TFF","UFF","VFF","WFF","XFF","YFF","ZFF"]), true, 'Test 52');
test(pyramidTransition("FFFFF", ["FFF","FFG","FGF","GFF","GGG","FGG","GFG","GGF","FGH","GHF","GFG","HFG","FGF","GGG","FGF","GFG"]), true, 'Test 53');
test(pyramidTransition("ABCDEF", ["ABG","BCD","CDE","DEF","EFG","FGH"]), false, 'Test 54');
test(pyramidTransition("ABCDEF", ["ABB","BCD","CDE","DEF","EFG","FGH","GHI","HIJ"]), false, 'Test 55');
test(pyramidTransition("ABACD", ["ABA","BAC","ACD","CDE","DEA","EAB","ABC","BCD","CDA","DAB","ABD","BCE","CEF","DFE","EFD","FAC"]), true, 'Test 56');
test(pyramidTransition("ABCDEF", ["ABC","BCD","CDE","DEF","EFG","FGH","GHI","HIJ","IJK","JKL","KLM","LMN","MNO","NOP","OPQ","PQR","QRS","RST","STU","TUV","UVW","VWX","WXYZ","XYZA","XYZB","XYZZ","XYZC","XYZD"]), Error: too many values to unpack [expected 3], 'Test 57');
test(pyramidTransition("ABCD", ["ABE","BCE","CDE","DEF","EFG","FGH"]), false, 'Test 58');
test(pyramidTransition("XYZXYZ", ["XYZ","YZX","ZXY","XZY","ZYX","YXZ","XYX","YYX","YXY","YXX","XXX","XXY","XYY","XZX","XZX","XZY","XYX","XYZ","YZX","ZXY","YZY","ZYY","ZZY","ZZZ","YZZ","XZZ","XXZ","XYX","XYZ","YYX","YXY","YZY","YZZ"]), true, 'Test 59');
test(pyramidTransition("AABB", ["AAB","ABA","BAA","AAA","BBB","ABB","BBA","BAB"]), true, 'Test 60');
test(pyramidTransition("EABCD", ["EAB","ABF","BCG","CDF","DEH","FGI","GHI"]), false, 'Test 61');
test(pyramidTransition("ABCDE", ["ABB","BCC","CDD","DEE","EFF","FGG","GHH","HHI"]), true, 'Test 62');
test(pyramidTransition("ABCDEF", ["ABC","BCD","CDE","DEF","EFA","FAB","ABE","BCE","CEF","DEF","EFD","FDA","ADB","BDC","CEB","DFC","EAD","FBE","ACB","BDC","CDB","DEA","EFD","FAD","BDA","CBD","DCB","EAF","FDB","AEB","BEC","CFA","DFB","EAD","FBA"]), true, 'Test 63');
test(pyramidTransition("ACDF", ["ACA","CDF","ACF","CDF","CAF","FAC","FCA","FCD","DFC","FDC","ADC","CAD","ACD","CDA","CAF","FAC","CAD","ACD","FCA","FCD","CDA","FDC","DFC","CFA","CAF","FCA","FCD","FDC","CDA","DFC","FAC","CAD","ACD","FCA","FCD","CDA","FDC","DFC","CFA","CAF","FCA","FCD","FDC","CDA","DFC","FAC","CAD","ACD","FCA","FCD","CDA","FDC","DFC"]), true, 'Test 64');
test(pyramidTransition("ABCDEF", ["ABC","BCD","CDE","DEF","EFG","FGH","GHI","HIJ","IJK"]), true, 'Test 65');
test(pyramidTransition("ABCDEF", ["ABC","BCD","CDE","DEF","EFG","FGH","GHI","HIJ","IJK","JKL","KLM","LMN","MNO","NOP","OPQ","PQR","QRS","RST","STU","TUV","UVW","VWX","WXYZ","XYZ","YZA","ZAB","ABC","BCA","CAB","CBA","BAC","ACB","ABB","BBA","ABA","AAA","BBB","CCC","DDD","EEE","FFF","GGG","HHH","III","JJJ","KKK","LLL","MMM","NNN","OOO","PPP","QQQ","RRR","SSS","TTT","UUU","VVV","WWW","XXX","YYY","ZZZ"]), Error: too many values to unpack [expected 3], 'Test 66');
test(pyramidTransition("FAEBC", ["FAB","ABD","BCE","CEB","EFA","FAB","ABC","BCD","CDE","DEF","EFA","FFF","GHI","HIJ","IJK","JKL","KLM","LMN","MNO","NOP","OPQ","PQR","QRS","RST","STU","TUV","UVW","VWX","WXY","XYZ"]), false, 'Test 67');
test(pyramidTransition("ABCABC", ["ABA","BAC","ACB","BCA","CAB","CBA","AAB","BAA","ABB","BBA","AAC","CAA","ACC","CCA","BCC","CBB","BBB","AAA","CCC","FFF","GGG","HHH","III","JJJ","KKK","LLL","MMM","NNN","OOO","PPP","QQQ","RRR","SSS","TTT","UUU","VVV","WWW","XXX","YYY","ZZZ"]), true, 'Test 68');
test(pyramidTransition("ABCFE", ["ABC","BCF","CFE","FED","EDA","DAB","ABE","BEC","ECA","CAD","CDA","DAB","ACF","CFB","BCE"]), true, 'Test 69');
test(pyramidTransition("FEDCBA", ["ABC","BCD","CDE","DEF","EFG","FGH","GHI","HIJ","IJK","JKL","KLM","LMN","MNO","NOP","OPQ","PQR","QRS","RST","STU","TUV","UVW","VWX","WXZ","XYZ","YZA","ZAB","FED","EDC","DCB","CBA","BAC","ACB","BCA","CAB","EAB","FCD","GHI","HJK","IKL","JKM","KLN","LMO","MNP","NOP","OPQ","PQR","QRS","RST","STU","TUV","UVW","VWX","WXZ","XYZ","YZA","ZAB"]), true, 'Test 70');
test(pyramidTransition("ABAC", ["ABA","BAC","ACA","BAA","CAA","ACB","CBA","BAB","ABA","BAA","AAB","BBA","ABA","ABB","BAC","BAA","BBA","BBA","BAC","BAC","BAC","BAC"]), true, 'Test 71');
test(pyramidTransition("ABCDEF", ["ABC","BCD","CDE","DEF","EFA","FAB","ABG","BCG","CDG","DEG","EFG","FGA","GAB","BCH","CDH","DEH","EFH","FGH","GHG","CHD","DHE","EFH","FGH","GHG","ACI","CDI","DEI","EFI","FGI","GHI","HIH","IDC","DEC","EFD","FDG","DGE","EFG","FGH","GHI","HII","IDE","DEC","EFD","FDG","DGE","EFG","FGH","GHI","HII"]), true, 'Test 72');
test(pyramidTransition("ABCDEFGF", ["ABH","BCI","CJG","DKE","ELF","FGA","GHB","HHA","HIB","IBC","JCA","KBD","LCE","MDF","NEG","OFA","PGH","QHI","RIB","SJC","TKD","ULC","VMF","WNG","XOH","YPI","ZQJ","RST","STU","TUV","UVW","VWX","WXYZ","XYZX","YZXY","ZXYZ","XYZY","YZYY","ZXYZ","XXY","YZZ","ZZY","XXZ","YXY","ZYZ","XYX","YZY","ZXZ","XYX","YZY","ZXZ","XYZ","YZX","ZXY","XZY","YZZ","ZZX","XYZ","YZX","ZXY","XZY","YZZ","ZZX"]), Error: too many values to unpack [expected 3], 'Test 73');
test(pyramidTransition("AAAAAA", ["AAA","AAB","ABA","ABB","BBA","BAB","BAA","BBB","ABA","AAA","BBA","BAA","ABB","AAB","BAB","BBA","ABB","BAB","BAA","BBB","AAA","BBA","ABB","AAB","BAB","BBA","ABB","BAB","BAA","BBB","AAA","BBA","ABB","AAB","BAB","BBA","ABB","BAB","BAA","BBB","AAA","BBA","ABB","AAB","BAB","BBA","ABB","BAB","BAA","BBB","AAA"]), true, 'Test 74');
test(pyramidTransition("ABCDEF", ["ABA","BCB","CDC","DED","EFE","FGF","GAG","GBG","GGG","GHH","GHI","GJJ","GJG","HJH","HJI","HJG","IJJ","IJK","IJG","JKJ","JKK","JKG","KLL","KLK","KLG","LLL","LLM","LLG","MLM","MLN","MLG","NLO","NLP","NMG","OOO","OOP","ONP","PPP","PPQ","PMQ","QQQ","QQR","QSR","RRR","RSS","RST","SSS","SST","TTT","TTU","TTV","UUU","UUV","UVU","VVV","VVW","WWW"]), true, 'Test 75');
test(pyramidTransition("ABACAB", ["ABA","BAC","ACA","CAD","BDA","BAA","BBA","ABA","AAA","BBA","CAA","DAD","BBD"]), true, 'Test 76');
test(pyramidTransition("ABCDEF", ["ABA","BCB","CDE","DEF","EFG","FGA","GAB","BDA","DBA","ADB","CDB","DCB","BEC","ECB","CEB","DCE","EDC","DEC","FED","EFD","FDE","DFE","EDE","DED","EEF","FEF","EFF","FFF","FGF","GFF","FGG","GGF","GFG","GGG"]), false, 'Test 77');
test(pyramidTransition("FEDCBA", ["FED","EDC","DCB","CBA","BAF","AFB","FAB","ABD","BCE","CEB","EFA","FAB","ABC","BCD","CDE","DEF","EFA","FFF","GHI","HIJ","IJK","JKL","KLM","LMN","MNO","NOP","OPQ","PQR","QRS","RST","STU","TUV","UVW","VWX","WXY","XYZ"]), false, 'Test 78');
test(pyramidTransition("ABCDEF", ["ABG","BCG","CDE","DEC","EFA","FGH","GHI"]), false, 'Test 79');
test(pyramidTransition("ABCDEF", ["ABC","BCD","CDE","DEF","EFA","FAB","ABD","BCE","CEF","DFE","EFD","FAC"]), true, 'Test 80');
test(pyramidTransition("FEDCBA", ["FED","EDC","DCB","CBA","BCA","CAB","ABC","BCD","CDE","DEF","EFG","FGH","GHI","HIJ","IJK","JKL","KLM","LMN","MNO","NOP","OPQ","PQR","QRS","RST","STU","TUV","UVW","VWX","WXYZ","XYZA"]), Error: too many values to unpack [expected 3], 'Test 81');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

