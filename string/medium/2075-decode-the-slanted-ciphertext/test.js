// Test: 2075. Decode The Slanted Ciphertext
// 112 test cases from LeetCodeDataset
// Run: node test.js

const { decodeCiphertext } = require("./solution");

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

console.log("\n2075. Decode The Slanted Ciphertext\n");

test(decodeCiphertext("a", 1), a, 'Test 1');
test(decodeCiphertext("abcd efg hijk", 3), aeibfjcgd, 'Test 2');
test(decodeCiphertext("a   b   c   d", 2), a  c    b, 'Test 3');
test(decodeCiphertext("coding", 1), coding, 'Test 4');
test(decodeCiphertext("abc def ghi jkl mno", 5), adgbec, 'Test 5');
test(decodeCiphertext("ab c  de", 2), a bd ec, 'Test 6');
test(decodeCiphertext("ch   ie   pr", 3), cipher, 'Test 7');
test(decodeCiphertext("iveo    eed   l te   olc", 4), i love leetcode, 'Test 8');
test(decodeCiphertext("python programming is fun", 4), ppm yriftonuhggorn, 'Test 9');
test(decodeCiphertext("algorithms and data structures", 5), ah telmdrsgsauo trai, 'Test 10');
test(decodeCiphertext("hello world  from    leetcode     challenges", 6), hrmt nel c gld ocl  do   fw, 'Test 11');
test(decodeCiphertext("t a c o s e q u i r r e s e l l   f o o d   s o u p", 5), t e s q f a s o u o c e u i o o l  r s, 'Test 12');
test(decodeCiphertext("one    two    three    four    five    six", 3), oh nrfeei ev  e      t  wf oos ui rx, 'Test 13');
test(decodeCiphertext("programming challenges are fun", 4), pilrrneeogn g gfrceahm, 'Test 14');
test(decodeCiphertext("filling   the   matrix   in   a   slanted   manner", 6), f t aaitr nnlhi tnlexaei   n  g, 'Test 15');
test(decodeCiphertext("p y trh    e  t s    o    n    a", 3), pe    y   t t nrs h, 'Test 16');
test(decodeCiphertext("m e t a l l i c a", 3), mai   elc  t, 'Test 17');
test(decodeCiphertext("", 10), , 'Test 18');
test(decodeCiphertext("padding   with   spaces   at   the   end     ", 5), pwc  aiet dtsh dh e i    n   g a s, 'Test 19');
test(decodeCiphertext("a    b    c    d    e    f    g    h    i", 9), abcd, 'Test 20');
test(decodeCiphertext("qo   su   me   ve   rt", 5), qsmvoue, 'Test 21');
test(decodeCiphertext("sh jfuew xq  z   r e", 3), sw h   x jqrf u, 'Test 22');
test(decodeCiphertext("this  is a   test  string", 5), ti  ghstsi esa, 'Test 23');
test(decodeCiphertext("abcdef ghijkl mnopqr stuvwx yz", 5), agmsybhntzcioudjpekf, 'Test 24');
test(decodeCiphertext("a quick brown fox jumps over the lazy dog", 6), a fp z bostqrx uo iwc, 'Test 25');
test(decodeCiphertext("wcy  hmu  eai  xfi", 3), wu c xy f ei ah, 'Test 26');
test(decodeCiphertext("two words", 1), two words, 'Test 27');
test(decodeCiphertext("th qzih xof  c ", 3), th h c x qoz, 'Test 28');
test(decodeCiphertext("ab  c   d    e     f      g       h        i         j", 10), a    b ef d   c, 'Test 29');
test(decodeCiphertext("programming in python is fun", 3), pgnr  oiignsr  apfmyumti, 'Test 30');
test(decodeCiphertext("spaces   in   between   words", 4), s twpiwoanerc ede ns, 'Test 31');
test(decodeCiphertext("qjewukcuvm xs   ezmrg", 4), qcsmju rev wmu, 'Test 32');
test(decodeCiphertext("this is a longer example to test the decoding function", 8), t epteharlei  esle oi, 'Test 33');
test(decodeCiphertext("q w   e r   t y   u i   o p", 4), q y  r  w, 'Test 34');
test(decodeCiphertext("a    q    o    q    r    s", 6), aqoq, 'Test 35');
test(decodeCiphertext("abcdefghi jklmnop qrstuv wx yz", 5), ahntybiouzc pvdj ekf, 'Test 36');
test(decodeCiphertext("i s l a n d   o f   d r e a m s", 3), i r   s e o l a f a m   n, 'Test 37');
test(decodeCiphertext("s h e e l  s  s  f  i  r  e", 5), se       hls  e, 'Test 38');
test(decodeCiphertext("abc def ghi jkl mno pqr stu vwx yz", 6), afjosb k cgl hd, 'Test 39');
test(decodeCiphertext("hello   world   this   is   a   test", 5), hwtsteoh elri slls od, 'Test 40');
test(decodeCiphertext("c o n s t a n t i n o p o l i s", 6), csnno    ott  n, 'Test 41');
test(decodeCiphertext("a b c d e f g h i j k l m n o p q r s t u v w x y z", 5), a l w g r b m x h s c n y i t d o  j e, 'Test 42');
test(decodeCiphertext("this is a test of the emergency broadcast system", 6), t tedththnceieecamss ys te i mso, 'Test 43');
test(decodeCiphertext("x w v u t s r q p o n m l k j i h g f e d c b a", 26), x, 'Test 44');
test(decodeCiphertext("keep it secret keep it safe", 6), kicketre p, 'Test 45');
test(decodeCiphertext("a    b   c  d e f g h i j k l m n o p q r s t u v w x y z", 26), a, 'Test 46');
test(decodeCiphertext("hello world from the other side", 4), hr eeltrldh l esof  rw, 'Test 47');
test(decodeCiphertext("data structures and algorithms", 8), d uast, 'Test 48');
test(decodeCiphertext("abcdefghij klmnopqrst uvwxyz", 3), a tbk cludmvenwfoxgpyhqi, 'Test 49');
test(decodeCiphertext("singleword", 10), s, 'Test 50');
test(decodeCiphertext("the quick brown fox jumps over the lazy dog", 6), tkfshdh o eoebxo  r vqojuwi, 'Test 51');
test(decodeCiphertext("thisisaverylongstringthatwillbereconstructedusingtheslantedciphertechnique", 7), tlhcunehoaostcintniehsgwsndnisitgcstlrtarluvibenr, 'Test 52');
test(decodeCiphertext("one", 1), one, 'Test 53');
test(decodeCiphertext("z y x w v u t s r q p o n m l k j i h g f e d c b a", 5), z o d t i y n c s h x m b r g w l  q v, 'Test 54');
test(decodeCiphertext("t h e q u i c k b r o w n   f o x   j u m p s   o v e r   t h e   l a z y   d o g", 7), tcnjohy       hk uve        ebfme d      qropr    uox  i, 'Test 55');
test(decodeCiphertext("abcdefgh ijklmnop qrstuvwx yz      this is a test", 5), ajs ibkt sclu  dmv aenw  foxtgp h, 'Test 56');
test(decodeCiphertext("a quick movement of the enemy will jeopardize five gunboats", 7), aofme b v yofoqet piumhwaieeicn kt, 'Test 57');
test(decodeCiphertext("slantedtranspositioncipheriscomplexandfun", 7), sdpoeltonarsnat, 'Test 58');
test(decodeCiphertext("one two three four five six seven eight nine ten eleven twelve", 4), oun nr ee el fietigvwvheoetn    tsnthiiwrxnee eles  ef, 'Test 59');
test(decodeCiphertext("abcdefghij", 1), abcdefghij, 'Test 60');
test(decodeCiphertext("x    y     z      ", 3), x            zy, 'Test 61');
test(decodeCiphertext("machine learning is fascinating", 7), mnagaerc h, 'Test 62');
test(decodeCiphertext("lqtk e o mu yzfe ot i g rya wne l oxtesn gdeo", 5), luie q   gtygldkz  e frooeeyx  aoo, 'Test 63');
test(decodeCiphertext("p r o g r a m m i n g   l a n g u a g e s", 5), p n g a n r g e m g o    m g, 'Test 64');
test(decodeCiphertext("wecoloveleetcode", 2), weeectocloodvee, 'Test 65');
test(decodeCiphertext("example     of    a    very    long    encoded    text", 7), e  eon x  rnca aygm   po lfe, 'Test 66');
test(decodeCiphertext("longer text with multiple spaces in between", 3), lheo snm guielnrt  ibtpeeltxewt e sewpi, 'Test 67');
test(decodeCiphertext("it wof  eit   ss dp", 4), iftst    w, 'Test 68');
test(decodeCiphertext("a      b      c      d      e", 5), a     b    c, 'Test 69');
test(decodeCiphertext("abcd efgh ijkl mnop qrst uvwx yz", 5), ag rxbhms c ntdio je, 'Test 70');
test(decodeCiphertext("the quick brown fox jumps over lazy dogs", 4), trmzhopyews  n dq ooufvgioescxrk, 'Test 71');
test(decodeCiphertext("special    characters    !@#$%^&*[] are    allowed    in    the    text", 10), s c * ep t![ e e@]ccr#ihsaal, 'Test 72');
test(decodeCiphertext("thisisaverylongtextthatneedstobeencodedusingaslantedtranspositioncipher", 8), trtsdsaohyttelnilhodasoabuintesgnatv, 'Test 73');
test(decodeCiphertext("spaces    are   handled   correctly", 5), s h tp a laancycrdoeels, 'Test 74');
test(decodeCiphertext("f l e x i b l e   r e s o u r c e s", 5), fi oe     lbrus    ele  x, 'Test 75');
test(decodeCiphertext("t h e   q u i c k   b r o w n   f o x   j u m p s   o v e r   l a z y   d o g s", 3), t v n h e   e r f     o q l x u a   i z j c y u k   m   d p b o s r g   o, 'Test 76');
test(decodeCiphertext("a    b     c      d       e        f         g          h           i", 9), a              de  c     b, 'Test 77');
test(decodeCiphertext("python programming is fun", 3), po ygitrsha omfnmu ip, 'Test 78');
test(decodeCiphertext("spaces   between   words   are   preserved", 3), sn p  a  c pewrsoe rs de srb ve et dwae, 'Test 79');
test(decodeCiphertext("keep calm and code on", 2), knede pc ocdael mo, 'Test 80');
test(decodeCiphertext("abcdefgh ijklmnop qrstuv wxyz", 4), a p bi wcjqxdkryelsfmg, 'Test 81');
test(decodeCiphertext("decoding slanted transposition cipher is challenging", 7), d  si gestipcclrthoaaidnnitn, 'Test 82');
test(decodeCiphertext("a quick brown fox jumps over the lazy dog", 3), af  otqxhu eij culkma pzbsyr  oodwvn, 'Test 83');
test(decodeCiphertext("the quick brown fox jumps over the lazy dog and then some more text to fill", 8), tbj der hrutonefeomhg   wpe sqns au  lifocok, 'Test 84');
test(decodeCiphertext("empty string test", 1), empty string test, 'Test 85');
test(decodeCiphertext("u p   d o w n   w i d e   t h i n g s", 4), uwdi    pnen       g    dwt  o, 'Test 86');
test(decodeCiphertext("this is a test of the emergency broadcast system", 5), tteythe   isebsstmry  eosiorasfg  a, 'Test 87');
test(decodeCiphertext("shorttext", 1), shorttext, 'Test 88');
test(decodeCiphertext("a quick brown fox jumps over the lazy dog", 5), arjry ou  qwmtdunphoi secf ko, 'Test 89');
test(decodeCiphertext("a   bcd efgh  ijklm nopqrst uvwxy z", 5), aekry fls  gmtz h  b nc d, 'Test 90');
test(decodeCiphertext("one two three four five six seven eight nine ten", 4), o x nf neosi uentrvew e ofnt i etvenheir e, 'Test 91');
test(decodeCiphertext("a    b    c    d    e", 5), abcd, 'Test 92');
test(decodeCiphertext("thisisaverylongtextthatneedstobeencodedproperly", 6), teeeerhrxenoiytdcsltsiohsna, 'Test 93');
test(decodeCiphertext("the quick brown fox jumps over a lazy dog", 3), tneh ref  oaqx u lijacuzkmy p bsdr o, 'Test 94');
test(decodeCiphertext("one two    three four    five six seven", 3), oeene e s fitoxwu ors  e  v  e  ntfh, 'Test 95');
test(decodeCiphertext("pythonprogramminglanguageisawesome", 5), priuwyonaetggghrloan, 'Test 96');
test(decodeCiphertext("sl  yz  vx  qu  tm", 4), sz  l, 'Test 97');
test(decodeCiphertext("this   is   a   long   encoded   text   for   testing", 7), tsln fsh octoi noes gd a, 'Test 98');
test(decodeCiphertext("abcdefghij    klmnopqrst    uvwxyz", 3), a  b  ck dl emufnvgowhpxiqyjr, 'Test 99');
test(decodeCiphertext("a quick brown fox jumps over the lazy dog", 4), awsl n aq ozufvyioe cxrdk  o jtbur, 'Test 100');
test(decodeCiphertext("a            b           c          d         e", 5), a               b          c, 'Test 101');
test(decodeCiphertext("a   bcd   efgh   ijklm   nopqrst   uvwxyz", 6), a  mqu    r     eibfc, 'Test 102');
test(decodeCiphertext("a   a   a   a   a   a   a   a   a   a", 10), aaa, 'Test 103');
test(decodeCiphertext("exampleofasingleword", 1), exampleofasingleword, 'Test 104');
test(decodeCiphertext("the quick brown fox jumps over lazy dogs", 5), t xvdhb eoerjrg ou sqwmlunpi c, 'Test 105');
test(decodeCiphertext("a very long text that is used to test the edge cases of the problem statement", 10), ao   ea ntut vghsee aerttye, 'Test 106');
test(decodeCiphertext("a  b c d e f g h i j k l m n o p q r s t u v w x y z", 6), ae n w  j s  f o xb k t g pc l hd, 'Test 107');
test(decodeCiphertext("onewordonly", 1), onewordonly, 'Test 108');
test(decodeCiphertext("python is an interpreted high level general purpose programming language", 6), piiepayngrrntthaoghe lguorl ranpepag rvumeieermstlp e adn, 'Test 109');
test(decodeCiphertext("abcdefghijklmnopqrstuvwxyz", 10), adb, 'Test 110');
test(decodeCiphertext("abcdefghijklmnopqrstuvwxyz", 26), a, 'Test 111');
test(decodeCiphertext("slantedtranspositioncipherexample", 10), strlea, 'Test 112');

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
