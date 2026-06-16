// Test: 1629. Slowest Key
// 72 test cases from LeetCodeDataset
// Run: node test.js

const { slowestKey } = require("./solution");

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

console.log("\n1629. Slowest Key\n");

test(slowestKey([2,3,7,10,15], "zzzaa"), a, 'Test 1');
test(slowestKey([5,10,15,20,25], "zabzc"), z, 'Test 2');
test(slowestKey([5,15,25,35,45,55], "abcdef"), f, 'Test 3');
test(slowestKey([50,70,80,90], "abcd"), a, 'Test 4');
test(slowestKey([9,29,49,50], "cbcd"), c, 'Test 5');
test(slowestKey([10,15,20,25,30], "aabcd"), a, 'Test 6');
test(slowestKey([12,23,36,46,62], "spuda"), a, 'Test 7');
test(slowestKey([1,2,3,4,5], "abcde"), e, 'Test 8');
test(slowestKey([50,75,100,125,150], "zzzzz"), z, 'Test 9');
test(slowestKey([1,10,20,30,40,50,60,70,80,90,100], "qwertyuiopz"), z, 'Test 10');
test(slowestKey([100,200,300,400,500], "aaaaa"), a, 'Test 11');
test(slowestKey([2,5,10,15,20,25,30], "zzzzzz"), z, 'Test 12');
test(slowestKey([1,3,5,7,9], "abcde"), e, 'Test 13');
test(slowestKey([1,2,3,4,5,6,7,8,9,10], "abcdefghij"), j, 'Test 14');
test(slowestKey([100,200,300,400], "abcd"), d, 'Test 15');
test(slowestKey([10,20,30,40,50], "aaaaa"), a, 'Test 16');
test(slowestKey([1,5,9,13,17,21,25,29,33,37,41], "abcdefghijk"), k, 'Test 17');
test(slowestKey([5,10,15,20,25,30], "ppppp"), p, 'Test 18');
test(slowestKey([10,20,30,40], "abcd"), d, 'Test 19');
test(slowestKey([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], "abcdefghijklmnopqrstuvwxyz"), z, 'Test 20');
test(slowestKey([10,21,33,46,60,75,91,108,126,145,165,186,208,231,255,280,306,333,361,390,420,451,483,516,550,585,621,658,696,735], "abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba"), Error: list index out of range, 'Test 21');
test(slowestKey([1,5,9,13,17,21,25,29,33,37,41,45,49,53,57,61,65,69,73,77,81,85,89,93,97,101,105,109,113,117,121,125,129,133,137,141,145,149,153,157,161,165,169,173,177,181,185,189,193,197,201,205,209,213,217,221,225,229,233], "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), Error: list index out of range, 'Test 22');
test(slowestKey([10,20,35,55,75,95,115,135,155,175,195,215,235,255,275,295,315,335,355,375,395,415,435,455,475,495,515,535,555,575,595], "abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba"), Error: list index out of range, 'Test 23');
test(slowestKey([10,30,70,150,230,320,420,530,650,780,920,1080,1260,1460,1680,1920], "zzzzzzzzzzzzzzzz"), z, 'Test 24');
test(slowestKey([1,3,6,10,15,21,28,36,45,55,66,78,91,105,120,136,153,171,190,210,231,253,276,300,325,351,378,406,435,465,496,528,561,595,630,666,703,741,780,820,861,903,946,990,1035,1081,1128,1176,1225,1275,1326,1378,1431,1485,1540,1596,1653,1711,1770,1830,1891,1953,2016,2080,2145,2211,2278,2346,2415,2485,2556,2628,2701,2775,2850,2926,3003,3081,3160,3240,3321,3403,3486,3570,3655,3741,3828,3916,4005,4095,4186,4278,4371,4465,4560,4656,4753,4851,4950], "abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcbazyxwvutsrqponmlkjihgfedcba"), a, 'Test 25');
test(slowestKey([10,25,40,55,70,85,100,115,130,145,160,175,190,205,220,235,250,265,280,295,310,325,340,355,370,385,400,415,430,445], "zyxwvutsrqponmlkjihgfedcba"), y, 'Test 26');
test(slowestKey([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150], "abcdefghijklmno"), o, 'Test 27');
test(slowestKey([5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100], "zzzzzzzzzzzzzzzzzzzz"), z, 'Test 28');
test(slowestKey([20,40,60,80,100,120,140,160,180,200,220,240,260,280,300], "nopqrstuvwxyz"), z, 'Test 29');
test(slowestKey([5,10,20,35,55,80,115,160,215,280,360,450,550,665,795,940,1100,1275,1465,1670,1890,2125,2375,2640,2920,3215,3535,3870,4220,4585,4965,5360,5770,6205,6665,7150,7660,8205,8785,9400,10050,10745,11485,12270,13100,13985,14935,15950,17030,18175,19395,20690,22060,23505,25035,26650,28350,30135,32005,33960,36000,38125,40345,42650,45040,47515,50075,52720,55450,58265,61165,64150,67220,70375,73615,76940,80350,83845,87425,91100,94860,98715,102665,106710,110850], "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), Error: list index out of range, 'Test 30');
test(slowestKey([10,50,100,150,200,250,300,350,400,450,500,550,600,650,700], "abcdefghijklmnopqrstuvwx"), Error: list index out of range, 'Test 31');
test(slowestKey([10,25,45,70,100,135,175,220,270,325,385,450,520,595,675,760,850,945,1045,1150], "aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), Error: list index out of range, 'Test 32');
test(slowestKey([15,25,35,45,55,65,75,85,95,105,115,125,135,145,155], "abcdefghijklmno"), a, 'Test 33');
test(slowestKey([1,3,6,10,15,21,28,36,45,55,66,78,91,105,120,136,153,171,190,210,231,253,276,300,325,351,378,406,435,465,496], "aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), Error: list index out of range, 'Test 34');
test(slowestKey([2, 6, 12, 20, 30, 42, 56, 72, 90, 110, 132, 156, 182, 210, 240, 272, 306, 342, 380, 420, 462, 506, 552, 600, 650, 702, 756, 812, 870, 930, 1000], "abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba"), Error: list index out of range, 'Test 35');
test(slowestKey([1, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100], "abcdefghijklmnopqrstuvwxyza"), Error: list index out of range, 'Test 36');
test(slowestKey([1,2,4,7,11,16,22,29,37,46,56,67,79,92,106,121,137,154,172,191,211,232,254,277,301,326,352,379,407,436,466], "zyxwvutsrqponmlkjihgfedcbaabcdefghijklmnopqrstuvwxyz"), Error: list index out of range, 'Test 37');
test(slowestKey([2,5,9,14,20,27,35,44,54,65,77,90,104,119,135,152,170,189,209,230,252,275,300,326,353,381,410,440,471,503], "thequickbrownfoxjumpsoverthelazydog"), Error: list index out of range, 'Test 38');
test(slowestKey([50,150,250,350,450,550,650,750,850,950,1050,1150,1250,1350,1450,1550,1650,1750,1850,1950,2050,2150,2250,2350,2450,2550,2650,2750,2850,2950,3050], "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), Error: list index out of range, 'Test 39');
test(slowestKey([100,250,400,550,700,850,1000,1150,1300,1450,1600,1750,1900,2050,2200,2350,2500,2650,2800,2950,3100,3250,3400,3550,3700,3850,4000,4150,4300,4450], "aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), Error: list index out of range, 'Test 40');
test(slowestKey([10,25,35,45,55,65,75,85,95,105,115,125,135,145], "abcdefghijklmn"), b, 'Test 41');
test(slowestKey([150,250,350,450,550,650,750,850,950,1050,1150,1250,1350,1450,1550], "zzzzzzzzzzzzzzzz"), Error: list index out of range, 'Test 42');
test(slowestKey([5, 15, 25, 35, 45, 55, 65, 75, 85, 95, 105, 115, 125, 135, 145, 155, 165, 175, 185, 195, 200], "zzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), Error: list index out of range, 'Test 43');
test(slowestKey([5,11,18,26,35,45,56,68,81,95,110,126,143,161,180,200,221,243,266,290,315,341,368,396,425,455,486,518,551,585], "abracadabraalakazamabracadabraalakazamabracadabra"), Error: list index out of range, 'Test 44');
test(slowestKey([1, 5, 10, 15, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200], "abcdefghijklmnopqrstuvwxyz"), Error: list index out of range, 'Test 45');
test(slowestKey([20,45,60,80,100,120,140,160,180,200], "abcdefghij"), b, 'Test 46');
test(slowestKey([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60], "aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), z, 'Test 47');
test(slowestKey([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], "aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), Error: list index out of range, 'Test 48');
test(slowestKey([3,9,15,21,27,33,39,45,51,57,63,69,75,81,87,93,99], "abcdefghijklmnopqrstuvwxzy"), Error: list index out of range, 'Test 49');
test(slowestKey([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), Error: list index out of range, 'Test 50');
test(slowestKey([2,5,8,11,14,17,20,23,26,29,32,35,38,41,44,47,50,53,56,59,62,65,68,71,74,77,80,83,86,89,92,95,98,101,104,107,110,113,116,119,122,125,128,131,134,137,140,143,146,149,152,155,158,161,164,167,170,173,176,179,182,185,188,191,194,197,200], "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), z, 'Test 51');
test(slowestKey([5,15,30,45,60,75,90,105,120,135], "abcdefghij"), j, 'Test 52');
test(slowestKey([10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100,105,110,115,120,125,130,135,140,145,150,155,160,165,170,175,180,185,190,195,200,205,210,215,220,225,230,235,240,245,250,255,260,265,270,275,280,285,290,295,300], "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), a, 'Test 53');
test(slowestKey([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,300,310,320,330,340,350,360,370,380,390,400,410,420,430,440,450,460,470,480,490,500], "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"), Error: list index out of range, 'Test 54');
test(slowestKey([1,100,200,300,400,500,600,700,800,900,1000,1100,1200,1300,1400,1500,1600,1700,1800,1900,2000], "aabcdefghijklmnopqrstuvwxyzz"), Error: list index out of range, 'Test 55');
test(slowestKey([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200], "abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcbaabcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcbaabcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcbaabcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba"), Error: list index out of range, 'Test 56');
test(slowestKey([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150], "zzzzzzzzzzzzzzz"), z, 'Test 57');
test(slowestKey([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], "abcdefghijklmnopqrst"), t, 'Test 58');
test(slowestKey([99,199,299,399,499,599,699,799,899,999,1099,1199,1299,1399,1499,1599,1699,1799,1899,1999,2099,2199,2299,2399,2499,2599,2699,2799,2899,2999,3099,3199,3299,3399,3499,3599,3699,3799,3899,3999,4099,4199,4299,4399,4499,4599,4699,4799,4899,4999], "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), Error: list index out of range, 'Test 59');
test(slowestKey([5, 11, 18, 26, 35, 45, 56, 68, 81, 95, 110, 126, 143, 161, 180, 200, 221, 243, 266, 290, 315, 341, 368, 396, 425, 455, 486, 518, 551, 585, 620], "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), Error: list index out of range, 'Test 60');
test(slowestKey([1,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,300,310,320,330,340,350,360,370,380,390,400,410,420,430,440,450,460,470,480,490,500,510,520,530,540,550,560,570,580,590,600], "zyxwvutsrqponmlkjihgfedcbaabcdefghijklmnopqrstuvwxyz"), z, 'Test 61');
test(slowestKey([5,9,15,21,28,36,45,55,66,78,91,105,120,136,153,171,190,210,231,253], "mississippiissiippi"), i, 'Test 62');
test(slowestKey([10, 25, 45, 70, 100, 135, 175, 220, 270, 325, 385, 450, 520, 595, 675, 760, 850, 945, 1045, 1150, 1260], "zzzzzzzzzzzzzzzzzzzzzzzzzzzzz"), Error: list index out of range, 'Test 63');
test(slowestKey([50,100,150,200,250,300,350,400,450,500,550,600,650,700,750,800,850,900,950,1000], "abcdefghijklmnopqrst"), t, 'Test 64');
test(slowestKey([5,15,30,45,60,75,90,105,120,135,150,165,180,195,210,225,240,255,270,285,300,315,330,345,360,375,390,405,420,435,450,465,480,495,510,525,540,555,570,585,600,615,630,645,660,675,690,705,720,735,750,765,780,795,810,825,840,855,870,885,900,915,930,945,960,975,990,1005], "aabcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcbazyxwvutsrqponmlkjihgfedcbaa"), Error: list index out of range, 'Test 65');
test(slowestKey([50,120,180,240,300,360,420], "abcdefgh"), Error: list index out of range, 'Test 66');
test(slowestKey([10, 25, 40, 55, 70, 85, 100, 115, 130, 145, 160, 175, 190, 205, 220, 235, 250, 265, 280, 295, 310, 325, 340, 355, 370, 385, 400, 415, 430, 445, 460, 475, 490, 505, 520, 535, 550, 565, 580, 595, 610, 625, 640, 655, 670, 685, 700, 715, 730, 745, 760, 775, 790, 805, 820, 835, 850, 865, 880, 895, 910, 925, 940, 955, 970, 985, 1000], "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), Error: list index out of range, 'Test 67');
test(slowestKey([1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 66, 78, 91, 105, 120, 136, 153, 171, 190, 210], "aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"), Error: list index out of range, 'Test 68');
test(slowestKey([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100], "zyxwvutsrqponmlkjihgfedcbazyxwvutsrqponmlkjihgfedcbazyxwvutsrqponmlkjihgfedcbazyxwvutsrqponmlkjihgfedcbazyxwvutsrqponmlkjihgfedcbazyxwvutsrqponmlkjihgfedcba"), Error: list index out of range, 'Test 69');
test(slowestKey([1,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100,105,110,115,120,125,130,135,140,145,150,155,160,165,170,175,180,185,190,195,200,205,210,215,220,225,230,235,240,245,250,255,260,265,270,275,280,285,290,295,300,305,310,315,320,325,330,335,340,345,350,355,360,365,370,375,380,385,390,395,400], "zabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), Error: list index out of range, 'Test 70');
test(slowestKey([2,5,9,14,20,27,35,44,54,65,77,90,104,119,135,152,170,189,209,230,252,275,300,325,351,378,406,435,465,496,528,561,595,630,666,703,741,780,820,861,903,946,990,1035,1081,1128,1176,1225,1275,1326,1378,1431,1485,1540,1596,1653,1711,1770,1830,1891,1953,2016,2080,2145,2211,2278,2346,2415,2485,2556,2628,2701,2775,2850,2926,3003,3081,3160,3240,3321,3403,3486,3570,3655,3741,3828,3916,4005,4095,4186,4278,4371,4465,4560,4656,4753,4851,4950], "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"), Error: list index out of range, 'Test 71');
test(slowestKey([1,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100,105,110,115,120], "abcdefghijklmnopqrstuvwxyzz"), Error: list index out of range, 'Test 72');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

