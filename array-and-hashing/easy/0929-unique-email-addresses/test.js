// Test: 929. Unique Email Addresses
// 105 test cases from LeetCodeDataset
// Run: node test.js

const { numUniqueEmails } = require("./solution");

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

console.log("\n929. Unique Email Addresses\n");

test(numUniqueEmails(["user.name+foo@hostname.com","user.name+bar@hostname.com","user.name@hostname.com"]), 1, 'Test 1');
test(numUniqueEmails(["m.y+name@email.com","my.name@email.com","myname@email.com"]), 2, 'Test 2');
test(numUniqueEmails(["m.y+name@email.com","my@email.com","m+y.name@email.com"]), 2, 'Test 3');
test(numUniqueEmails(["me+alex@leetcode.com","me@leetcode.com"]), 1, 'Test 4');
test(numUniqueEmails(["m.y+name@email.com","my@email.com"]), 1, 'Test 5');
test(numUniqueEmails(["alice.z@leetcode.com","alicez@leetcode.com"]), 1, 'Test 6');
test(numUniqueEmails(["foo@bar.com","foo@bar.com","foo@bar.com"]), 1, 'Test 7');
test(numUniqueEmails(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]), 2, 'Test 8');
test(numUniqueEmails(["my.email@gmail.com","myemail+foo@gmail.com","my_email+bar@gmail.com"]), 2, 'Test 9');
test(numUniqueEmails(["a+b@leetcode.com","a@leetcode.com+b","a+b+c+d@leetcode.com"]), 2, 'Test 10');
test(numUniqueEmails(["my.email+alex@leetcode.com","my.e.mail+alex@leetcode.com","myemail+alex@leetcode.com"]), 1, 'Test 11');
test(numUniqueEmails(["foo@gmail.com+foo","foo2@gmail.com+bar","foo3@gmail.com+baz"]), 3, 'Test 12');
test(numUniqueEmails(["foo@bar.com","foo.bar@bar.com","foo.bar.baz@bar.com"]), 3, 'Test 13');
test(numUniqueEmails(["john.doe@example.com","john.doe+foo@example.com","johndoe@example.com"]), 1, 'Test 14');
test(numUniqueEmails(["alice+bob.cathy@leetcode.com","alice.bob.cathy@leetcode.com","alicebobcathy@leetcode.com"]), 2, 'Test 15');
test(numUniqueEmails(["alice.z@leetcode.com","alicez@leetcode.com","al.icez@leetcode.com"]), 1, 'Test 16');
test(numUniqueEmails(["foo@bar.com","foo@bar.com"]), 1, 'Test 17');
test(numUniqueEmails(["alex@leetcode.com","alex+alex@leetcode.com","alex.alex@leetcode.com"]), 2, 'Test 18');
test(numUniqueEmails(["a@leetcode.com","b@leetcode.com","c@leetcode.com"]), 3, 'Test 19');
test(numUniqueEmails(["user.name+tag+more@domain.co.uk","user.name+tag@domain.co.uk","user+tag@domain.co.uk","user@domain.co.uk"]), 2, 'Test 20');
test(numUniqueEmails(["email+filter@domain.com","email@domain.com","email+filter+ignore@domain.com","email.filter@domain.com"]), 2, 'Test 21');
test(numUniqueEmails(["user.name+tag@domain.com","user.name.tag@domain.com","user.name@domain.com","user.name@sub.domain.com","user.name+tag@sub.domain.com","user.name.tag@sub.domain.com"]), 4, 'Test 22');
test(numUniqueEmails(["john.doe+newsletter@domain.com","johndoe+offers@domain.com","johndoe@sub.domain.com","john.doe@domain.co.uk"]), 3, 'Test 23');
test(numUniqueEmails(["user.name+tag@domain.co","user.name@domain.co","user.name+tag+another.tag@domain.co"]), 1, 'Test 24');
test(numUniqueEmails(["john.doe+extra.Infinityo@company.org","john.doe@company.org","john.doe+extra+Infinityo@company.org","john.doe+extra+Infinityo+more@company.org"]), 1, 'Test 25');
test(numUniqueEmails(["alice..bob.cathy@leetcode.com","alice+bob.cathy@leetcode.com","alice+bob..cathy@leetcode.com"]), 2, 'Test 26');
test(numUniqueEmails(["john.doe+notes@leetcode.com","john.doe+notes1@leetcode.com","johndoe+notes@leetcode.com","john.doe@leetcode.com"]), 1, 'Test 27');
test(numUniqueEmails(["a+b+c+d@domain.com","a.b.c.d@domain.com","abcd@domain.com","a..b.c+d.@domain.com"]), 3, 'Test 28');
test(numUniqueEmails(["user.name+tag+sorting@example.com","user.name@example.com","user.name+sorting@example.com","user+name@example.com","user+name+tag@example.com","user+name+tag+sorting@example.com"]), 2, 'Test 29');
test(numUniqueEmails(["john.doe+some.text@domain.com","johndoe+some.text@domain.com","johndoe@domain.com","john.doe@domain.com"]), 1, 'Test 30');
test(numUniqueEmails(["multiple+dots.here+ignore@sample.com","multiple+dots.here@sample.com","multiple.dots+here@sample.com","multiple.dots.here@sample.com"]), 3, 'Test 31');
test(numUniqueEmails(["user.name+foo@domain.com","user+name@domain.com","user.name+foo.bar@domain.com","user+name+foo@domain.com","user.name+bar.foo@domain.com","user+bar.foo@domain.com"]), 2, 'Test 32');
test(numUniqueEmails(["multiple+parts+in+the+local@name.com","multiple.parts.in.the.local@name.com","multiple+parts+in.the+local@name.com","multiple.parts+in+the.local@name.com","multiplepartsinthe.local@name.com"]), 3, 'Test 33');
test(numUniqueEmails(["my.email+alex@leetcode.com","my.e.mail+alex@leetcode.com","myemail+alex@leetcode.com","my.email+alex@leetcode.co.uk","my.e.mail+alex@leetcode.co.uk","myemail+alex@leetcode.co.uk"]), 2, 'Test 34');
test(numUniqueEmails(["a.b.c.d+e@website.com","abcd@website.com","a.b.c.d@website.com","abc.d+efg@website.com","a.b.c.d+efg@website.com","a.b.c+defg@website.com"]), 2, 'Test 35');
test(numUniqueEmails(["alice.z@leetcode.com","alicez@leetcode.com","al.i.c.e+blog@leetcode.com","alic.e@leetcode.com"]), 2, 'Test 36');
test(numUniqueEmails(["user@my+invalid+input.com","user.myinvalid+input@com","user.my+invalid@input.com","user@myinvalidinput+com"]), 4, 'Test 37');
test(numUniqueEmails(["email.name+suffix@sub.domain.com","email+suffix@sub.domain.com","email.name@sub.domain.com"]), 2, 'Test 38');
test(numUniqueEmails(["user.name+tag1+tag2@domain.com","user.name+tag1.tag2@domain.com","user+name+tag1.tag2@domain.com"]), 2, 'Test 39');
test(numUniqueEmails(["example.email+alex@leetcode.com","e.x.a.m.p.l.e.e.mail+bob.cathy@leetcode.com","ex.ampleemail+david@lee.tcode.com","ex.ample.email+david@lee.tcode.com"]), 2, 'Test 40');
test(numUniqueEmails(["alice+bob.cathy@leetcode.com","alice.bob.cathy@leetcode.com","alice.bob+cathy@leetcode.com","alice+bob+cathy@leetcode.com"]), 3, 'Test 41');
test(numUniqueEmails(["name@domain.com","name@sub.domain.com","name+suffix@sub.domain.com","name.suffix@domain.com"]), 3, 'Test 42');
test(numUniqueEmails(["user.name@domain.com","user.name+everything_after@domain.com","user.name.+everything_after@domain.com"]), 1, 'Test 43');
test(numUniqueEmails(["my.email+alex@leetcode.com","my.e.mail+alex@leetcode.com","myemail+alex@leetcode.com","my.email+alex@leetcode.co.uk","my.e.mail+alex@sub.leetcode.com"]), 3, 'Test 44');
test(numUniqueEmails(["peter.parker+spiderman@marvel.com","peter.parker+spiderman+amazing@marvel.com","peter+spiderman@marvel.com","spiderman+@marvel.com"]), 3, 'Test 45');
test(numUniqueEmails(["complex+part.with.dots@complex.com","complex.partwithdots@complex.com","complexpart+with.dots@complex.com","complexpartwithdots@complex.com"]), 3, 'Test 46');
test(numUniqueEmails(["jane.doe+newsletter@example.com","jane.doe@example.com","janedoe@example.com","jane.doe.+ignore@example.com","jane.doe+ignore@example.co.uk","jane+doe@example.com"]), 3, 'Test 47');
test(numUniqueEmails(["long.email.name+with.many.dots.and.tags@longdomain.com","long.email+name+with.many.dots.and.tags@longdomain.com","longemail+name+with.many.dots.and.tags@longdomain.com","longemailname+with.many.dots.and.tags@longdomain.com"]), 2, 'Test 48');
test(numUniqueEmails(["tom+tommy+tomm@mydomain.com","tommy.tom+tom@mydomain.com","tom.tommy.tom+tommy@mydomain.com","tommy+tom+tommy@mydomain.com","tom.tommy@mydomain.com"]), 5, 'Test 49');
test(numUniqueEmails(["user+ignore@domain.com","user+ignore@sub.domain.com","user+ignore@subdomain.com","user@domain.com","user@sub.domain.com","user@subdomain.com"]), 3, 'Test 50');
test(numUniqueEmails(["user.name@sub.domain.com","user.name+ignore@sub.domain.com","user.name@sub.domain.org","user.name+ignore@sub.domain.org"]), 2, 'Test 51');
test(numUniqueEmails(["user@sub.domain.com","user@subdomain.com","user.sub@domain.com"]), 3, 'Test 52');
test(numUniqueEmails(["alice+bob.cathy@leetcode.com","alice.bob.cathy@leetcode.com","alice+bob@cathy@leetcode.com","alice+@leetcode.com","alice@leetcode.com"]), Error: too many values to unpack [expected 2], 'Test 53');
test(numUniqueEmails(["first.last+tag1+tag2@service.com","firstlast+tag1tag2@service.com","first.last@service.com"]), 1, 'Test 54');
test(numUniqueEmails(["a.b.c+d.e.f+g.h.i@website.com","a.b.c.d.e.f.g.h.i@website.com","a+b+c+d+e+f+g+h+i@website.com"]), 3, 'Test 55');
test(numUniqueEmails(["abc.d.+def@example.com","abc.d+def@example.com","abc.def@example.com","abc.d.@example.com","abc.d+@example.com"]), 2, 'Test 56');
test(numUniqueEmails(["user+ignore.all.this@mydomain.net","user@mydomain.net","user.name+ignore@mydomain.net","user.name@mydomain.net"]), 2, 'Test 57');
test(numUniqueEmails(["a.b.c.d.e@domain.com","a+b+c+d+e@domain.com","abcde@domain.com","a.b+c.d+e@domain.com","a+b.c.d.e@domain.com"]), 3, 'Test 58');
test(numUniqueEmails(["user@sub.domain.com","user@sub.sub.domain.com","user.sub@sub.domain.com","user@sub.domain.co","user@sub.domain.co.uk"]), 5, 'Test 59');
test(numUniqueEmails(["user.name+tag+ignore@domain.com","user.name+tag_ignore@domain.com","user.name+tag_ignore@domain.co.uk"]), 2, 'Test 60');
test(numUniqueEmails(["user.name+foo@sub.domain.com","user.name@sub.domain.com","user+name@sub.domain.com","user@sub.domain.com"]), 2, 'Test 61');
test(numUniqueEmails(["user.name+foo@domain.com","user+name@domain.com","user.name+foo.bar@domain.com","user+name+foo@domain.com"]), 2, 'Test 62');
test(numUniqueEmails(["user.name+tag+Infinityo@domain.com","user.name+tag@domain.com","user.name@domain.com","user+name@domain.com","username@domain.com"]), 2, 'Test 63');
test(numUniqueEmails(["x+y.z+@example.com","x.y.z.@example.com","x.y.z@example.com","x+y+z@example.com","x.y.z+tag@example.com"]), 2, 'Test 64');
test(numUniqueEmails(["first.last+alias1@domain.org","first.last+alias2@domain.org","first.last+alias1@another.org","first.last@another.org"]), 2, 'Test 65');
test(numUniqueEmails(["user.name+tag+sorting@example.com","user.name@example.com","user.name+sorting@example.com","user+name@example.com","user+name+tag@example.com"]), 2, 'Test 66');
test(numUniqueEmails(["nested+dot.and.plus@sub.sub.domain.com","nested.dot.and.plus@sub.sub.domain.com","nested+dot.and+plus@subdomain.com","nested.dot.and.plus@subdomain.com"]), 4, 'Test 67');
test(numUniqueEmails(["alice+bob.cathy+david@leetcode.com","alice.david+bob.cathy@leetcode.com","alice+david@leetcode.com"]), 2, 'Test 68');
test(numUniqueEmails(["user.name+tag+more@sub.domain.com","user.name+tag@sub.domain.com","user+tag@sub.domain.com","user@sub.domain.com"]), 2, 'Test 69');
test(numUniqueEmails(["user@domain.com","user+tag@domain.com","user+tag+ignore@domain.com","user+tag@domain.co.uk","user+tag@sub.domain.com"]), 3, 'Test 70');
test(numUniqueEmails(["nested+dot.dot.dot@domain.org","nested.dot+dot.dot@domain.org","nested.dot.dot+dot@domain.org","nesteddot.dotdot@domain.org","nesteddotdotdot@domain.org"]), 4, 'Test 71');
test(numUniqueEmails(["john.doe+newsletter@tech.com","johndoe+news+letter@tech.com","john+doe+news@tech.com","johndoe@tech.com"]), 2, 'Test 72');
test(numUniqueEmails(["contact+Infinityo@Infinityo.contact.org","contact.Infinityo@Infinityo.contact.org","contact.Infinityo+more@Infinityo.contact.org","contact+Infinityo+more@Infinityo.contact.org"]), 2, 'Test 73');
test(numUniqueEmails(["user.name+ignore.this.part@domain.co.uk","user.name@domain.co.uk","user+name@domain.co.uk","user@domain.co.uk","user.name+another.part@domain.co.uk"]), 2, 'Test 74');
test(numUniqueEmails(["user.name+tag@domain.co.uk","user.name@domain.co.uk","user+name@domain.co.uk","user.name+@domain.co.uk"]), 2, 'Test 75');
test(numUniqueEmails(["john.doe+newsletter@tech.com","johndoe+news+letter@tech.com","john+doe+news@tech.com","johndoe@tech.com","johndoe+ignore@tech.com","john.doe+ignore@tech.com"]), 2, 'Test 76');
test(numUniqueEmails(["email.with+plus.and.dots@website.com","emailwith+plusanddots@website.com","emailwithplus.anddots@website.com","emailwithplusanddots@website.com"]), 2, 'Test 77');
test(numUniqueEmails(["a.b.c+d@domain.com","a.b.c+e+f@domain.com","a+b+c+d@domain.com","a.b.c.d@domain.com"]), 3, 'Test 78');
test(numUniqueEmails(["user+name+with+many+pluses@mydomain.com","user+name.with+many+pluses@mydomain.com","user.name+with+many+pluses@mydomain.com","user.name.with+many+pluses@mydomain.com","user.name.with.many+pluses@mydomain.com"]), 4, 'Test 79');
test(numUniqueEmails(["john.doe+, mailing@company.com","jane.doe+, hr@company.com","johndoe@company.com"]), 2, 'Test 80');
test(numUniqueEmails(["a.b.c+d.e.f@domain.com","a.b.c.d.e.f@domain.com","a+b.c+d.e.f@domain.com","a+b.c.d.e.f@domain.com","a.b+c.d.e+f@domain.com"]), 4, 'Test 81');
test(numUniqueEmails(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com","test.email+david@lee.tcode.com","testemail+david+extra@lee.tcode.com"]), 2, 'Test 82');
test(numUniqueEmails(["a+@domain.com","a@domain.com","a+very+long+part+here@domain.com","a.very.long.part.here@domain.com"]), 2, 'Test 83');
test(numUniqueEmails(["a+b+c+d+e+f+g+h+i+j+k+l+m+n+o+p+q+r+s+t+u+v+w+x+y+z@domain.com","a.b.c.d.e.f.g.h.i.j.k.l.m.n.o.p.q.r.s.t.u.v.w.x.y.z@domain.com","abcdefghijklmnopqrstuvwxyz@domain.com"]), 2, 'Test 84');
test(numUniqueEmails(["x.y.z+12345@service.net","x.y.z@service.net","x.y.z+67890@service.net"]), 1, 'Test 85');
test(numUniqueEmails(["john.doe@example.com","john.doe+newsletter@example.com","johndoe@example.com","john.doe.+ignore@example.com","john.doe+ignore@example.co.uk"]), 2, 'Test 86');
test(numUniqueEmails(["user+filter+ignore@site.com","user@site.com","user.filter@site.com","user+filter@site.com"]), 2, 'Test 87');
test(numUniqueEmails(["peter.parker+spiderman@marvel.com","peter.parker+spiderman+amazing@marvel.com","peter+spiderman@marvel.com","spiderman+@marvel.com","peter.parker@marvel.com","peter+spiderman+@marvel.com"]), 3, 'Test 88');
test(numUniqueEmails(["alice+bob+cathy@domain.com","alice+bob.cathy@domain.com","alice+bob.cathy@domain.co.uk"]), 2, 'Test 89');
test(numUniqueEmails(["first.last+middle.name@company.com","first.last@company.com","first+last@company.com","firstlast@company.com","first+last+middle@company.com"]), 2, 'Test 90');
test(numUniqueEmails(["same.name+tag@same.domain.com","same.name+another.tag@same.domain.com","same.name@same.domain.com","same.name+tag@different.domain.com"]), 2, 'Test 91');
test(numUniqueEmails(["user.name+tag.Infinityo@domain.com","user.name+tagInfinityo@domain.com","user.name+tag+Infinityo@domain.co","user.name+tagInfinityo@domain.co.uk","user.name@domain.com"]), 3, 'Test 92');
test(numUniqueEmails(["alice.z+ignore@leetcode.com","alicez+ignore@leetcode.com","alice+ignore@leetcode.com","alice.z@leetcode.com","alicez@leetcode.com","alice@leetcode.com"]), 2, 'Test 93');
test(numUniqueEmails(["alice.bob.john+foo@mydomain.com","alice.bob.john@mydomain.com","alice.bob.john+bar@mydomain.com"]), 1, 'Test 94');
test(numUniqueEmails(["user.name+tag1+tag2@domain.com","user.name.tag1+tag2@domain.com","user.name+tag1.tag2@domain.com"]), 2, 'Test 95');
test(numUniqueEmails(["example+ignore.this@domain.net","example.ignore.this@domain.net","example+ignore+this@domain.net","exampleignorethis@domain.net"]), 2, 'Test 96');
test(numUniqueEmails(["a.b.c.d+e@website.com","abcd@website.com","a.b.c.d@website.com","abc.d+efg@website.com"]), 1, 'Test 97');
test(numUniqueEmails(["alice.bob+c@site.org","alice+offers@site.org","alice.bob@site.org","alice.b+o+b@site.org"]), 3, 'Test 98');
test(numUniqueEmails(["complex.email+with+plus@longdomain.com","complex.email+with.plus@longdomain.com","complex.email@longdomain.com","complex+email@longdomain.com"]), 2, 'Test 99');
test(numUniqueEmails(["john.doe+, sales+, west@company.com","john.doe+, hr+, east@company.com","john.doe@company.com"]), 1, 'Test 100');
test(numUniqueEmails(["user+ignore+ignore@domain.com","user.name+ignore+ignore@domain.com","user.name+ignore.ignore@domain.com","user.name+ignore.ignore+ignore@domain.com"]), 2, 'Test 101');
test(numUniqueEmails(["user.name+tag1@domain.com","user.name+tag2@domain.com","user.name+tag1.tag2@domain.com","user.name+tag2.tag1@domain.com"]), 1, 'Test 102');
test(numUniqueEmails(["user.name+tag+more@domain.com","user.name+tag@domain.com","user+tag@domain.com","user@domain.com"]), 2, 'Test 103');
test(numUniqueEmails(["x+user.name+y@domain.com","user.name+z@domain.com","user.name+@domain.com","user.name@domain.com"]), 2, 'Test 104');
test(numUniqueEmails(["user+tag@domain.com","user@domain.com","user.name@domain.com","user+tag.name@domain.com"]), 2, 'Test 105');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

