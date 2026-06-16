// Test: 831. Masking Personal Information
// 187 test cases from LeetCodeDataset
// Run: node test.js

const { maskPII } = require("./solution");

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

console.log("\n831. Masking Personal Information\n");

test(maskPII("12345678901"), +*-***-***-8901, 'Test 1');
test(maskPII("+11234567890"), +*-***-***-7890, 'Test 2');
test(maskPII("123 456 7890"), ***-***-7890, 'Test 3');
test(maskPII("+1-800-555-0199"), +*-***-***-0199, 'Test 4');
test(maskPII("9876543210"), ***-***-3210, 'Test 5');
test(maskPII("123456789012"), +**-***-***-9012, 'Test 6');
test(maskPII("123.456.7890"), ***-***-7890, 'Test 7');
test(maskPII("jane.doe@domain.co"), j*****e@domain.co, 'Test 8');
test(maskPII("1234567890"), ***-***-7890, 'Test 9');
test(maskPII("John.Doe@example.com"), j*****e@example.com, 'Test 10');
test(maskPII("alice@leetcode.com"), a*****e@leetcode.com, 'Test 11');
test(maskPII("LeetCode@LeetCode.com"), l*****e@leetcode.com, 'Test 12');
test(maskPII("AB@qq.com"), a*****b@qq.com, 'Test 13');
test(maskPII("0-213-321-2345"), +*-***-***-2345, 'Test 14');
test(maskPII("+91[123] 456-7890"), +**-***-***-7890, 'Test 15');
test(maskPII("+123[123] 456-7890"), +***-***-***-7890, 'Test 16');
test(maskPII("[123] 456-7890"), ***-***-7890, 'Test 17');
test(maskPII("abcdef@gmail.com"), a*****f@gmail.com, 'Test 18');
test(maskPII("+111234567890"), +**-***-***-7890, 'Test 19');
test(maskPII("+1-234-567-890"), ***-***-7890, 'Test 20');
test(maskPII("+1234567890"), ***-***-7890, 'Test 21');
test(maskPII("a@leetcode.com"), a*****a@leetcode.com, 'Test 22');
test(maskPII("+1111234567890"), +***-***-***-7890, 'Test 23');
test(maskPII("john.doe@example.co.uk"), j*****e@example.co.uk, 'Test 24');
test(maskPII("+1-123-456-7890"), +*-***-***-7890, 'Test 25');
test(maskPII("+12[123] 456-7890"), +**-***-***-7890, 'Test 26');
test(maskPII("1234567890123"), +***-***-***-0123, 'Test 27');
test(maskPII("+[123]-456-7890"), ***-***-7890, 'Test 28');
test(maskPII("bob.cathy@leetcode.com"), b*****y@leetcode.com, 'Test 29');
test(maskPII("a.b@c.com"), a*****b@c.com, 'Test 30');
test(maskPII("abcdefghijk@leetcode.com"), a*****k@leetcode.com, 'Test 31');
test(maskPII("aBcD@eFgHiJ.com"), a*****d@efghij.com, 'Test 32');
test(maskPII("1[234]567-890"), ***-***-7890, 'Test 33');
test(maskPII("+49 176 2345 6789"), +***-***-***-6789, 'Test 34');
test(maskPII("+49[123] 456-7890"), +**-***-***-7890, 'Test 35');
test(maskPII("ABCDE@FGHI.JKL"), a*****e@fghi.jkl, 'Test 36');
test(maskPII("+442079460958"), +**-***-***-0958, 'Test 37');
test(maskPII("abcdefghijklmnopqrstuvwxyz@abc.def.ghijklmnopqrstuvwxyz"), a*****z@abc.def.ghijklmnopqrstuvwxyz, 'Test 38');
test(maskPII("Annie.Marie@service.org"), a*****e@service.org, 'Test 39');
test(maskPII("+91-8765432109"), +**-***-***-2109, 'Test 40');
test(maskPII("+1-800-MY-BANK"), +-***-***-1800, 'Test 41');
test(maskPII("+911234567890"), +**-***-***-7890, 'Test 42');
test(maskPII("[123] 456-7890 ext. 1234"), +****-***-***-1234, 'Test 43');
test(maskPII("user@website.co"), u*****r@website.co, 'Test 44');
test(maskPII("john.doe@EXAMPLE.COM"), j*****e@example.com, 'Test 45');
test(maskPII("+91 [123] 456 7890"), +**-***-***-7890, 'Test 46');
test(maskPII("+91 [123] 456-7890"), +**-***-***-7890, 'Test 47');
test(maskPII("[+123] 456-7890123"), +***-***-***-0123, 'Test 48');
test(maskPII("001234567890"), +**-***-***-7890, 'Test 49');
test(maskPII("+44 20 7946 0958"), +**-***-***-0958, 'Test 50');
test(maskPII("[012] 345 6789"), ***-***-6789, 'Test 51');
test(maskPII("user@domain.c"), u*****r@domain.c, 'Test 52');
test(maskPII("ABC.DEF@GMAIL.COM"), a*****f@gmail.com, 'Test 53');
test(maskPII("A.B.C.D.E.F.G.H.I.J.K.L.M.N.O.P.Q.R.S.T.U.V.W.X.Y.Z@domain.com"), a*****z@domain.com, 'Test 54');
test(maskPII("Alice.Bob.Charlie@example.co.uk"), a*****e@example.co.uk, 'Test 55');
test(maskPII("+31[0]123456789"), +**-***-***-6789, 'Test 56');
test(maskPII("+1 800 555 0199"), +*-***-***-0199, 'Test 57');
test(maskPII("+0 1234 5678901"), +**-***-***-8901, 'Test 58');
test(maskPII("An.Extremely.Long.Name@subdomain.example.com"), a*****e@subdomain.example.com, 'Test 59');
test(maskPII("John_Doe@domain.com"), j*****e@domain.com, 'Test 60');
test(maskPII("John-Doe@Example.com"), j*****e@example.com, 'Test 61');
test(maskPII("foo-bar@baz-qux.org"), f*****r@baz-qux.org, 'Test 62');
test(maskPII("FirstName.LastName@domain.co.uk"), f*****e@domain.co.uk, 'Test 63');
test(maskPII("+01-123-456-7890"), +**-***-***-7890, 'Test 64');
test(maskPII("PhoneNumber123@domain.com"), p*****3@domain.com, 'Test 65');
test(maskPII("+1234-567-8901"), +*-***-***-8901, 'Test 66');
test(maskPII("user@domain"), u*****r@domain, 'Test 67');
test(maskPII("abcdefghij@klmno.pqr"), a*****j@klmno.pqr, 'Test 68');
test(maskPII("Alice.Bob-Charlie.D@example.co.uk"), a*****d@example.co.uk, 'Test 69');
test(maskPII("+1-234-567-89012"), +**-***-***-9012, 'Test 70');
test(maskPII("[123] 456-7890; 123-456-7891; 123-456-7892"), +********************-***-***-7892, 'Test 71');
test(maskPII("+44 [0] 1234 567890"), +***-***-***-7890, 'Test 72');
test(maskPII("abcdefghijklmnopqrstuvwxyz@abc.def"), a*****z@abc.def, 'Test 73');
test(maskPII("1-800-555-0199"), +*-***-***-0199, 'Test 74');
test(maskPII("0012345678901"), +***-***-***-8901, 'Test 75');
test(maskPII("+1234567890123"), +***-***-***-0123, 'Test 76');
test(maskPII("user@domain.com"), u*****r@domain.com, 'Test 77');
test(maskPII("abcdefg@hijklmnopqrstuvwxyz.co"), a*****g@hijklmnopqrstuvwxyz.co, 'Test 78');
test(maskPII("+1 [234] 567-8901"), +*-***-***-8901, 'Test 79');
test(maskPII("Nina.Nightly-Owl@Mailbox.ORG"), n*****l@mailbox.org, 'Test 80');
test(maskPII("Name@Domain.co"), n*****e@domain.co, 'Test 81');
test(maskPII("+91 12345 67890"), +**-***-***-7890, 'Test 82');
test(maskPII("+33123456789"), +*-***-***-6789, 'Test 83');
test(maskPII("user.name@sub.domain.co.uk"), u*****e@sub.domain.co.uk, 'Test 84');
test(maskPII("234-567-8901"), ***-***-8901, 'Test 85');
test(maskPII("+358 [0]10 123 4567"), +***-***-***-4567, 'Test 86');
test(maskPII("+1 [123] 456-7890x1234"), +*****-***-***-1234, 'Test 87');
test(maskPII("user.name@sub.domain.com"), u*****e@sub.domain.com, 'Test 88');
test(maskPII("123-4567-890"), ***-***-7890, 'Test 89');
test(maskPII("+33 [0]1 23 45 67 89"), +**-***-***-6789, 'Test 90');
test(maskPII("+91-1234567890"), +**-***-***-7890, 'Test 91');
test(maskPII("[+12] 123 456-7890x1234"), +******-***-***-1234, 'Test 92');
test(maskPII("+44 1234567890"), +**-***-***-7890, 'Test 93');
test(maskPII("A.B.C.D.E.F@domain.com"), a*****f@domain.com, 'Test 94');
test(maskPII("[+1] 123 456 7890"), +*-***-***-7890, 'Test 95');
test(maskPII("+1 800-555-0199 ext. 1234"), +*****-***-***-1234, 'Test 96');
test(maskPII("+33 1 23 45 67 89"), +*-***-***-6789, 'Test 97');
test(maskPII("++44-1234567890"), +**-***-***-7890, 'Test 98');
test(maskPII("EMail+Address@domain.com"), e*****s@domain.com, 'Test 99');
test(maskPII("abc-def@ghi.jkl.mno"), a*****f@ghi.jkl.mno, 'Test 100');
test(maskPII("@domain.com"), +-***-***-, 'Test 101');
test(maskPII("VeryLongFirstName.Last@website.org"), v*****t@website.org, 'Test 102');
test(maskPII("+31 [6] 1234 5678"), +*-***-***-5678, 'Test 103');
test(maskPII("[123] 4567 89012"), +**-***-***-9012, 'Test 104');
test(maskPII("12345678901234567890"), +**********-***-***-7890, 'Test 105');
test(maskPII("+123 [456] 7890-1234"), +****-***-***-1234, 'Test 106');
test(maskPII("++1-123-456-7890"), +*-***-***-7890, 'Test 107');
test(maskPII("John_Doe-123@website.net"), j*****3@website.net, 'Test 108');
test(maskPII("+44 1234 567890"), +**-***-***-7890, 'Test 109');
test(maskPII("[123] 456-7890x1234"), +****-***-***-1234, 'Test 110');
test(maskPII("[+12] 345-678-9012"), +**-***-***-9012, 'Test 111');
test(maskPII("McDonalds.Restaurant@domain.co.in"), m*****t@domain.co.in, 'Test 112');
test(maskPII("+55[11]1234-5678"), +**-***-***-5678, 'Test 113');
test(maskPII("[123]4567890"), ***-***-7890, 'Test 114');
test(maskPII("123-456-7890"), ***-***-7890, 'Test 115');
test(maskPII("a.b.c.d.e@f.com"), a*****e@f.com, 'Test 116');
test(maskPII("++33 6 12 34 56 78"), +*-***-***-5678, 'Test 117');
test(maskPII("FOO@BAR.COM"), f*****o@bar.com, 'Test 118');
test(maskPII("Elizabeth-II@royal.gov.uk"), e*****i@royal.gov.uk, 'Test 119');
test(maskPII("+1 [123] 456-7890 ext 1234"), +*****-***-***-1234, 'Test 120');
test(maskPII("++++1234567890"), ***-***-7890, 'Test 121');
test(maskPII("[123] 456 7890"), ***-***-7890, 'Test 122');
test(maskPII("[123] 456-7890, 123-456-7891, 123-456-7892"), +********************-***-***-7892, 'Test 123');
test(maskPII("alice+bob.cathy@leetcode.com"), a*****y@leetcode.com, 'Test 124');
test(maskPII("001 415 796 2345"), +***-***-***-2345, 'Test 125');
test(maskPII("aBCdE@fGh.iJk"), a*****e@fgh.ijk, 'Test 126');
test(maskPII("user.name+tag+sorting@example.com"), u*****g@example.com, 'Test 127');
test(maskPII("+123-456-7890123"), +***-***-***-0123, 'Test 128');
test(maskPII("[123] 456-7890, 123-456-7891"), +**********-***-***-7891, 'Test 129');
test(maskPII("1234567890123456"), +******-***-***-3456, 'Test 130');
test(maskPII("[123]456-789012"), +**-***-***-9012, 'Test 131');
test(maskPII("++44 1234 567890"), +**-***-***-7890, 'Test 132');
test(maskPII("first.last@sub.domain.com"), f*****t@sub.domain.com, 'Test 133');
test(maskPII("a.b.c@domain.com"), a*****c@domain.com, 'Test 134');
test(maskPII("[012]-34567890"), +*-***-***-7890, 'Test 135');
test(maskPII("firstname.lastname@sub.domain.co.uk"), f*****e@sub.domain.co.uk, 'Test 136');
test(maskPII("++44[0]1234 567890"), +***-***-***-7890, 'Test 137');
test(maskPII("+49 1234 5678901"), +***-***-***-8901, 'Test 138');
test(maskPII("+49-89-636-48018"), +**-***-***-8018, 'Test 139');
test(maskPII("john.doe@mywebsite.net"), j*****e@mywebsite.net, 'Test 140');
test(maskPII("a@b.c"), a*****a@b.c, 'Test 141');
test(maskPII("[123]-456-78901"), +*-***-***-8901, 'Test 142');
test(maskPII("John.Doe123@example.co"), j*****3@example.co, 'Test 143');
test(maskPII("[+44]1234567890"), +**-***-***-7890, 'Test 144');
test(maskPII("+123 456 7890123"), +***-***-***-0123, 'Test 145');
test(maskPII("eMail@Company.com"), e*****l@company.com, 'Test 146');
test(maskPII("+1 [415] 796 2345"), +*-***-***-2345, 'Test 147');
test(maskPII("Abc@xyz.co"), a*****c@xyz.co, 'Test 148');
test(maskPII("[+12] 123 456-7890 ext 1234"), +******-***-***-1234, 'Test 149');
test(maskPII("[123] 456-7890 [ext. 1234]"), +****-***-***-1234, 'Test 150');
test(maskPII("Email@Subdomain.MyDomain.co.uk"), e*****l@subdomain.mydomain.co.uk, 'Test 151');
test(maskPII("12345678901234"), +****-***-***-1234, 'Test 152');
test(maskPII("user@.com"), u*****r@.com, 'Test 153');
test(maskPII("USER.NAME@DOMAIN.COM"), u*****e@domain.com, 'Test 154');
test(maskPII("123456789012345"), +*****-***-***-2345, 'Test 155');
test(maskPII("FirstName.LastName@sub.domain.com"), f*****e@sub.domain.com, 'Test 156');
test(maskPII("+86 123 4567 8901"), +***-***-***-8901, 'Test 157');
test(maskPII("Foo@bar.com"), f*****o@bar.com, 'Test 158');
test(maskPII("Alice.Bob.Clarke@mydomain.org"), a*****e@mydomain.org, 'Test 159');
test(maskPII("Alice.Bob-Carol@domain.co.uk"), a*****l@domain.co.uk, 'Test 160');
test(maskPII("++++1-234-567-8901"), +*-***-***-8901, 'Test 161');
test(maskPII("FIRST.Last@domain.com"), f*****t@domain.com, 'Test 162');
test(maskPII("user@sub.domain.com"), u*****r@sub.domain.com, 'Test 163');
test(maskPII("++44 1234567890"), +**-***-***-7890, 'Test 164');
test(maskPII("Alice.Bob-Jones@company.org"), a*****s@company.org, 'Test 165');
test(maskPII("001-123-456-7890"), +***-***-***-7890, 'Test 166');
test(maskPII("+358101234567"), +**-***-***-4567, 'Test 167');
test(maskPII("987654321098765"), +*****-***-***-8765, 'Test 168');
test(maskPII("[123]-456-7890"), ***-***-7890, 'Test 169');
test(maskPII("+49-123-456789-0"), +**-***-***-7890, 'Test 170');
test(maskPII("-123-456-7890"), ***-***-7890, 'Test 171');
test(maskPII("+44[0]1234-567890"), +***-***-***-7890, 'Test 172');
test(maskPII("9876543210123"), +***-***-***-0123, 'Test 173');
test(maskPII("[123] 456-7890 x1234"), +****-***-***-1234, 'Test 174');
test(maskPII("Alice.Bob-Carol@domain.co"), a*****l@domain.co, 'Test 175');
test(maskPII("A.B.C.D.E.F.G.H@subdomain.example.com"), a*****h@subdomain.example.com, 'Test 176');
test(maskPII("[123] 456-7890; 123-456-7891"), +**********-***-***-7891, 'Test 177');
test(maskPII("name@sub.sub.domain.com"), n*****e@sub.sub.domain.com, 'Test 178');
test(maskPII("[123]456-7890"), ***-***-7890, 'Test 179');
test(maskPII("[123] 456-7890-1234"), +****-***-***-1234, 'Test 180');
test(maskPII("[123]456-7890-1234"), +****-***-***-1234, 'Test 181');
test(maskPII("valid.email@sub.domain.co.uk"), v*****l@sub.domain.co.uk, 'Test 182');
test(maskPII("++1-234-567-8901"), +*-***-***-8901, 'Test 183');
test(maskPII("+1 [123] 456-7890"), +*-***-***-7890, 'Test 184');
test(maskPII("[123] 456-7890 ext 1234"), +****-***-***-1234, 'Test 185');
test(maskPII("123456789012123"), +*****-***-***-2123, 'Test 186');
test(maskPII("123-456-7890-1234"), +****-***-***-1234, 'Test 187');

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
