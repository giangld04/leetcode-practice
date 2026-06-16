// Test: 844. Backspace String Compare
// 109 test cases from LeetCodeDataset
// Run: node test.js

const { backspaceCompare } = require("./solution");

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

console.log("\n844. Backspace String Compare\n");

test(backspaceCompare("###", ""), true, 'Test 1');
test(backspaceCompare("#a#c", "c"), true, 'Test 2');
test(backspaceCompare("xywrrmp", "xywrrmu#p"), true, 'Test 3');
test(backspaceCompare("bbbextm#w", "bb#bbbextm#w"), false, 'Test 4');
test(backspaceCompare("ab", "a#b"), false, 'Test 5');
test(backspaceCompare("abc#d", "abzd#"), false, 'Test 6');
test(backspaceCompare("ab#", "a#b"), false, 'Test 7');
test(backspaceCompare("abc#d", "abcd#"), false, 'Test 8');
test(backspaceCompare("xywrrmp", "xywrrmp"), true, 'Test 9');
test(backspaceCompare("a####b", "b"), true, 'Test 10');
test(backspaceCompare("ab#", "ab#"), true, 'Test 11');
test(backspaceCompare("######", ""), true, 'Test 12');
test(backspaceCompare("aaa###a", "aaaa##a"), false, 'Test 13');
test(backspaceCompare("abcd", "dcba"), false, 'Test 14');
test(backspaceCompare("a#c", "b"), false, 'Test 15');
test(backspaceCompare("abc#d", "abz#d"), true, 'Test 16');
test(backspaceCompare("abcd####", ""), true, 'Test 17');
test(backspaceCompare("#####", ""), true, 'Test 18');
test(backspaceCompare("ab#c", "ad#c"), true, 'Test 19');
test(backspaceCompare("hello#world#", "hello#wor#ld"), false, 'Test 20');
test(backspaceCompare("#a#c", "b"), false, 'Test 21');
test(backspaceCompare("a##c", "#a#c"), true, 'Test 22');
test(backspaceCompare("####", ""), true, 'Test 23');
test(backspaceCompare("a###b", "b"), true, 'Test 24');
test(backspaceCompare("a###b", "a###b"), true, 'Test 25');
test(backspaceCompare("ab##", "c#d#"), true, 'Test 26');
test(backspaceCompare("ab#cd", "a#b#cd"), false, 'Test 27');
test(backspaceCompare("y#fo##f", "y#f#o##f"), true, 'Test 28');
test(backspaceCompare("ab#cd#e##f", "acdf"), false, 'Test 29');
test(backspaceCompare("abc###d##e##f##g##h##i##j##k##l##m##n##o##p##q##r##s##t##u##v##w##x##y##z##", "abc"), false, 'Test 30');
test(backspaceCompare("ab#cde##fg#", "ab#def#g#"), false, 'Test 31');
test(backspaceCompare("ab#cd#e##f", "abcdef##"), false, 'Test 32');
test(backspaceCompare("abcdef#####", "ab"), false, 'Test 33');
test(backspaceCompare("###abc###def###ghi###jkl###mno###pqr###stu###vwx###yz#", "abc###def###ghi###jkl###mno###pqr###stu###vwx###yz###"), false, 'Test 34');
test(backspaceCompare("a#b#cd#ef#gh##ij##klm#nop##qrst##uvw#xyz####", "a#b#cd#ef#gh##ij##klm#nop##qrst##uvw#xy#z#"), false, 'Test 35');
test(backspaceCompare("#a#b#c#d#e#f#g#h#i#j#k#l#m#n#o#p#q#r#s#t#u#v#w#x#y#z#", "#"), true, 'Test 36');
test(backspaceCompare("abcdefghij#klmnopqrst#uvwxyz#", "uvwxyz#tsrqponmlkjihgfedcba"), false, 'Test 37');
test(backspaceCompare("a#b#c#d#e#f#g", ""), false, 'Test 38');
test(backspaceCompare("abcdef#ghijkl#mnopqr#stuvwx#yz##", "yz##xwvu#tsrqpon#mlkjihg#fedcba"), false, 'Test 39');
test(backspaceCompare("a#b#cd#ef#gh##ij##klm#nop##qrst##uvw#xyz###", "abcdef#ghijklmnopqrstuvwxyz###"), false, 'Test 40');
test(backspaceCompare("abcd#efgh#ijkl#mnop#qrst#uvwx#yz##", "zyxw#vuts#rqpon#mlkj#ihgf#edcb#a"), false, 'Test 41');
test(backspaceCompare("x###y##z", "xyz###"), false, 'Test 42');
test(backspaceCompare("a#b#c#d#e#f#g#h#i#j#k#l#m#n#o#p#q#r#s#t#u#v#w#x#y#z#", "abcdefghijklmnopqrstuvwxyz"), false, 'Test 43');
test(backspaceCompare("zzzzzzzzzz####zzzzzzzzzz##", "zzzzzzzzzzzzzzzzzz"), false, 'Test 44');
test(backspaceCompare("a##b##c##d##e##f##g##h##i##j##k##l##m##n##o##p##q##r##s##t##u##v##w##x##y##z##", ""), true, 'Test 45');
test(backspaceCompare("abcd##efghijkl##mnopqr##stuv##wxyz####", "abcd##efghijkl##mnopqr##stuv##wxy##z###"), false, 'Test 46');
test(backspaceCompare("abcd#e#f#gh#i#j#k#l#m#n#o#p#q#r#s#t#u#v#w#x#y#z#", "abcdefghijklmnopqrstuvwxyz"), false, 'Test 47');
test(backspaceCompare("f####jkl###xyz##", "jkxyz#"), false, 'Test 48');
test(backspaceCompare("a#b#c#d#e#f#g#h#i#j#k#l#m#n#o#p#q#r#s#t#u#v#w#x#y#z#", "abcdefghijklmnopqrstuvwxyz#"), false, 'Test 49');
test(backspaceCompare("ab#cdef###gh#ij#kl##mno###pqr####stu#####vwxyz##", "vwxyz##"), false, 'Test 50');
test(backspaceCompare("ab#c#d#efg", "abcdefg###"), false, 'Test 51');
test(backspaceCompare("abcdefg#h#i#j#k#l#m#n#o#p#q#r#s#t#u#v#w#x#y#z#", "z#y#x#w#v#u#t#s#r#q#p#o#n#m#l#k#j#i#h#g#f#e#d#c#b#a#"), false, 'Test 52');
test(backspaceCompare("a#b#c#d#e#f#", "#f#e#d#c#b#a#"), true, 'Test 53');
test(backspaceCompare("abcde#fghij#klmno#pqrs#tu#v#w#x#y#z#", "abcdefghijklmnopqrstuvwxy"), false, 'Test 54');
test(backspaceCompare("a#b#c#d#e#f#g#h#i#j#k#l#m#n#o#p#q#r#s#t#u#v#w#x#y#z#", ""), true, 'Test 55');
test(backspaceCompare("a#b#c#d#e#f#g#h#i#j#k#l#m#n#o#p#q#r#s#t#u#v#w#x#y#z#", "z#y#x#w#v#u#t#s#r#q#p#o#n#m#l#k#j#i#h#g#f#e#d#c#b#a#"), true, 'Test 56');
test(backspaceCompare("z#x#c#v#b#n#m#w#q#o#p#l#k#j#i#h#g#f#e#d#c#b#a#", ""), true, 'Test 57');
test(backspaceCompare("##ab#c#d#e#f##g#h#i#j#k#l#m#n#o#p#q#r#s#t#u#v#w#x#y#z#", "abcdefghijklmnopqrstuvwxyz"), false, 'Test 58');
test(backspaceCompare("a#b#c#d#e#f#g#h#i#j#k#l#m#n#o#p#q#r#s#t#u#v#w#x#y#z#", "z##y##x##w##v##u##t##s##r##q##p##o##n##m##l##k##j##i##h##g##f##e##d##c##b##a"), false, 'Test 59');
test(backspaceCompare("x#y#z#", "x#y#z#"), true, 'Test 60');
test(backspaceCompare("a###a###a###a###a###a###a###a###a###a###", "a#"), true, 'Test 61');
test(backspaceCompare("a#b#b#c#d#d#e#e#f#f#g#g#h#h#i#i#j#j#k#k#l#l#m#m#n#n#o#o#p#p#q#q#r#r#s#s#t#t#u#u#v#v#w#w#x#x#y#y#z#z#", "zz#yy#xx#ww#vv#uu#tt#ss#rr#qq#pp#oo#nn#mm#ll#kk#jj#ii#hh#gg#ff#ee#dd#cc#bb#aa"), false, 'Test 62');
test(backspaceCompare("abc#d##ef###", "ab##ef"), false, 'Test 63');
test(backspaceCompare("z#y#x#w#v#u#t#s#r#q#p#o#n#m#l#k#j#i#h#g#f#e#d#c#b#a#", "zyxwvutsrqponmlkjihgfedcba#"), false, 'Test 64');
test(backspaceCompare("a#b#cd#ef#gh##ij##klm#nop##qrst##uvw#xyz###", "a#b#cd#ef#gh##ij##klm#nop##qrst##uvw#xy##z###"), false, 'Test 65');
test(backspaceCompare("a#b#c#d#e#f#g#h#i#j#", "abcdefghij#"), false, 'Test 66');
test(backspaceCompare("abcabcabcabc#abcabcabcabc#", "abcabcabcabcabcabcabcabc"), false, 'Test 67');
test(backspaceCompare("abcdefghijklmnopqrstuvwxyz#abc#d##", "abcdefghijklmnopqrstuvwxy#"), false, 'Test 68');
test(backspaceCompare("abcde#f#ghi#jkl#m#n#o#p#q#r#s#t#u#v#w#x#y#z#", "z"), false, 'Test 69');
test(backspaceCompare("######abc", "abc######"), false, 'Test 70');
test(backspaceCompare("abc#de#fgh#ijk#l#m#n#o#p#q#r#s#t#u#v#w#x#y#z#", "z#y#x#w#v#u#t#s#r#q#p#o#n#m#l#k#j#i#h#g#f#e#d#c#b#a"), false, 'Test 71');
test(backspaceCompare("abcde#f#gh#i#j#k#l#m#n#o#p#q#r#s#t#u#v#w#x#y#z#", "zxywvutsrqponmlkjihgfedcba"), false, 'Test 72');
test(backspaceCompare("abcde##fgh##ij##k#", "abcd#efgh#ij##k"), false, 'Test 73');
test(backspaceCompare("a##b##c##d##e##f##g##", ""), true, 'Test 74');
test(backspaceCompare("abcdefghijklmnopqrstuvwxyz#abcdefghijklmnopqrstuvwxyz#", "abcdefghijklmnopqrstuvwxyz#abcdefghijklmnopqrstuvwxyz#"), true, 'Test 75');
test(backspaceCompare("#a#b#c#d#e#f#g#h#i#j#k#", "abcdefghijk#"), false, 'Test 76');
test(backspaceCompare("a##b##c##d##e##f##g##h##i##j##k##l##m##n##o##p##q##r##s##t##u##v##w##x##y##z##", "#z##y##x##w##v##u##t##s##r##q##p##o##n##m##l##k##j##i##h##g##f##e##d##c##b##a##"), true, 'Test 77');
test(backspaceCompare("a##b#c#d#e#f#g#h#i#j#k#l#m#n#o#p#q#r#s#t#u#v#w#x#y#z#", "abcdefghijklmnopqrstuvwxyz"), false, 'Test 78');
test(backspaceCompare("#a#b#c#d#e#f#", ""), true, 'Test 79');
test(backspaceCompare("####abc##d##ef###g####", "abc##d##ef###g####"), true, 'Test 80');
test(backspaceCompare("#a#a#a#a#a#a#a#a#a#a#", "a#a#a#a#a#a#a#a#a#a#"), true, 'Test 81');
test(backspaceCompare("ab#cd##ef#g#h#i#j#k#l#m#n#o#p#q#r#s#t#u#v#w#x#y#z#", "efghijklmnopqrstuvwxyz"), false, 'Test 82');
test(backspaceCompare("a##b##c##d##e##f##g##h##i##j##k##l##m##n##o##p##q##r##s##t##u##v##w##x##y##z##", "abcdefghijklmnopqrstuvwxyz"), false, 'Test 83');
test(backspaceCompare("longstring#####anotherstring", "longanotherstring"), false, 'Test 84');
test(backspaceCompare("###xyz", "xyz###"), false, 'Test 85');
test(backspaceCompare("a##b##c##d##e##f##g##h##i##j##k##l##m##n##o##p##q##r##s##t##u##v##w##x##y##z##", "a##b##c##d##e##f##g##h##i##j##k##l##m##n##o##p##q##r##s##t##u##v##w##x##y##z##"), true, 'Test 86');
test(backspaceCompare("#a#b#c#d#e#f#g#h#i#j#k#l#m#n#o#p#q#r#s#t#u#v#w#x#y#z#", "abcdefghijklmnopqrstuvwxyz"), false, 'Test 87');
test(backspaceCompare("#a##b##c##d##e##f##g##h##i##j##k##l##m##n##o##p##q##r##s##t##u##v##w##x##y##z##", "z##y##x##w##v##u##t##s##r##q##p##o##n##m##l##k##j##i##h##g##f##e##d##c##b##a##"), true, 'Test 88');
test(backspaceCompare("#a#b#c#d#e#f#g#h#i#j#k#l#m#n#o#p#q#r#s#t#u#v#w#x#y#z#a#b#c#d#e#f#g#h#i#j#k#l#m#n#o#p#q#r#s#t#u#v#w#x#y#z#", "#a#b#c#d#e#f#g#h#i#j#k#l#m#n#o#p#q#r#s#t#u#v#w#x#y#z#a#b#c#d#e#f#g#h#i#j#k#l#m#n#o#p#q#r#s#t#u#v#w#x#y#z#"), true, 'Test 89');
test(backspaceCompare("xy#z##", "xzz#"), false, 'Test 90');
test(backspaceCompare("abc#def##ghi###jkl####mno#####pqr######stu#######vwx########yz#########", ""), true, 'Test 91');
test(backspaceCompare("x####y", "xy#"), false, 'Test 92');
test(backspaceCompare("qwerty#uiop##asdfghjkl##zxcvbnm##", "qwerty#uiop##asdfghjkl##zxcvbnm##"), true, 'Test 93');
test(backspaceCompare("abc#d##e", "ab##de"), false, 'Test 94');
test(backspaceCompare("abcdefg#####hijkl#####mnop#####qrstu#####vwxyz", "hijklmnopqrstuuvwxyz"), false, 'Test 95');
test(backspaceCompare("abcde######", "fghij#####"), true, 'Test 96');
test(backspaceCompare("#a#b#c#d#e#f#g#h#i#j#k#l#m#n#o#p#q#r#s#t#u#v#w#x#y#z#", ""), true, 'Test 97');
test(backspaceCompare("xylophone##music####", "xylophone###music####"), false, 'Test 98');
test(backspaceCompare("a#b#c#d#e#f#g#h#i#j#k#l#m#n#o#p#q#r#s#t#u#v#w#x#y#z#", "zxywvutsrqponmlkjihgfedcba"), false, 'Test 99');
test(backspaceCompare("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz##", "aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyz##"), false, 'Test 100');
test(backspaceCompare("z#z#z#z#z#", ""), true, 'Test 101');
test(backspaceCompare("ab#cd#ef#gh#ij#kl#mn#op#qr#st#uv#wx#yz#", "yz#xw#vu#ts#rq#po#nm#lk#ji#hg#fe#dc#ba"), false, 'Test 102');
test(backspaceCompare("abcde###fghijk###lmnop###qrstuvwxyz###", "qrstuvwxyz###mnop###fghijk###abcde###"), false, 'Test 103');
test(backspaceCompare("#a#b#b#c#d#d#e#e#f#f#g#g#h#h#i#i#j#j#k#k#l#l#m#m#n#n#o#o#p#p#q#q#r#r#s#s#t#t#u#u#v#v#w#w#x#x#y#y#z#z#", ""), true, 'Test 104');
test(backspaceCompare("a###b#c###d#e###f#g###h#i###j#k###l#m###n#o###p#q###r#s###t#u###v#w###x###y###z###", ""), true, 'Test 105');
test(backspaceCompare("a###b###c###d###e###f###g###h###i###j###k###l###m###n###o###p###q###r###s###t###u###v###w###x###y###z###", ""), true, 'Test 106');
test(backspaceCompare("ab##cd##ef##gh##ij##kl##mn##op##qr##st##uv##wx##yz##", "a#b#c#d#e#f#g#h#i#j#k#l#m#n#o#p#q#r#s#t#u#v#w#x#y#z#"), true, 'Test 107');
test(backspaceCompare("abc#de#f##g#hi#jkl##mno###pqr####stu#####vwxyz##", "abc#de#f##g#hi#jkl##mno###pqr####stu#####"), false, 'Test 108');
test(backspaceCompare("##abc#d##ef#g#h#i#j#k#l#m#n#o#p#q#r#s#t#u#v#w#x#y#z#", "abcdefghijklnopqrstuvwxyz"), false, 'Test 109');

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
