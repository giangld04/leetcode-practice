// Test: 1190. Reverse Substrings Between Each Pair Of Parentheses
// 105 test cases from LeetCodeDataset
// Run: node test.js

const { reverseParentheses } = require("./solution");

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

console.log("\n1190. Reverse Substrings Between Each Pair Of Parentheses\n");

test(reverseParentheses("[a[b[c]d]e]"), ebcda, 'Test 1');
test(reverseParentheses("[a[b]c[d[e]f]g]"), gdefcba, 'Test 2');
test(reverseParentheses("[abc][def]"), cbafed, 'Test 3');
test(reverseParentheses("[a[b]c[d]e[f]g]"), gfedcba, 'Test 4');
test(reverseParentheses("[z]"), z, 'Test 5');
test(reverseParentheses("[abcd]"), dcba, 'Test 6');
test(reverseParentheses("a[b]c[d[e]f]g"), abcfedg, 'Test 7');
test(reverseParentheses("[ed[et[oc]]el]"), leetcode, 'Test 8');
test(reverseParentheses("x[abc]d[efg]h[ij[k[lm]n]op]q"), xcbadgfehpokmlnjiq, 'Test 9');
test(reverseParentheses("abcdefghij[klmnop[qrstuvwxyz]]"), abcdefghijqrstuvwxyzponmlk, 'Test 10');
test(reverseParentheses("abc"), abc, 'Test 11');
test(reverseParentheses("[a[b[c[d[e[f[g[h]]]]]]]"]), Error: Solution.reverseParentheses[] missing 1 required positional argument: 's', 'Test 12');
test(reverseParentheses("[abc]d[efg]"), cbadgfe, 'Test 13');
test(reverseParentheses("[a[b[c]d]e[f[g]h]i"), [adcbehgfi, 'Test 14');
test(reverseParentheses("[]"), , 'Test 15');
test(reverseParentheses("a[bcdefghijkl[mno]p]q"), apmnolkjihgfedcbq, 'Test 16');
test(reverseParentheses("[a]"), a, 'Test 17');
test(reverseParentheses("[u[love]i]"), iloveu, 'Test 18');
test(reverseParentheses("ab[c[d[e[fg]h]i]j]k"), abjdhfgeick, 'Test 19');
test(reverseParentheses("[a[b[c[d[e[f[g[h]i]j]k]l]m]n]o"), [anclejghifkdmbo, 'Test 20');
test(reverseParentheses("x[y[z[wvu]tsr]qpo]nm"), xopqzuvwtsrynm, 'Test 21');
test(reverseParentheses("[a[b[c]d]e[f[g[h]i]j]k]l"), kfihgjebcdal, 'Test 22');
test(reverseParentheses("a[bc[def[ghi]jkl]mno[pqr[stu]vwx]y[z]]"), azypqrutsvwxonmdefihgjklcb, 'Test 23');
test(reverseParentheses("a[b[c]d[e[f[g]h]i]j[k[l[m]n]o]p"), a[bcdifghejolmnkp, 'Test 24');
test(reverseParentheses("a[bc[def[ghi[jkl[mno]pqr]stu]vwx[yz]]"), a[bcyzxwvghirqpmnolkjstufed, 'Test 25');
test(reverseParentheses("a[b[c]d[e[f[g[h]i]j]k]l]m"), alejghifkdcbm, 'Test 26');
test(reverseParentheses("x[y[z]]a[b[c]d]e[f[g[h]i]j]k"), xzyadcbejghifk, 'Test 27');
test(reverseParentheses("x[y[z]]w"), xzyw, 'Test 28');
test(reverseParentheses("a[b[c[d[e[f[g[h]i[j[k[l]m]n]o[p]q]r]s]t]u[v[w[x[y[z]]]]]]]]]]"), Error: list index out of range, 'Test 29');
test(reverseParentheses("p[q[r[s[t[u[v[w[x[y[z]]]]]]]]]]]"), Error: list index out of range, 'Test 30');
test(reverseParentheses("[a[b[c[d[e[f]g]h]i]j]k]l[m[n[o[p]q]r]s]t[u[v]w]x[y]z]"), Error: list index out of range, 'Test 31');
test(reverseParentheses("[a[b[c[d[e[f[g[h[i[j[k[l[m[n[o[p[q[r[s[t[u[v[w[x[y[z]]]]]]]]]]]]]]]]]]]]z[y[x[w[v[u[t[s[r[q[p[o[n[m[l[k[j[i[h[g[f[e[d[c[b[a]]]]]]]]]]]]]]]]]]]]"), [a[b[c[d[e[fhjlnprtvxzywusqomkigz[y[x[w[v[usqomkigecabdfhjlnprt, 'Test 32');
test(reverseParentheses("[a[b[c[d[e[f[g[h[i[j[k[l[m[n[o[p]q]r]s]t]u]v]w]x]y]z]]]]"), [a[bdfyhwjulsnqpormtkvixgzec, 'Test 33');
test(reverseParentheses("[a[b[c[d[e[f[g[h[i[j[k[l[m[n[o[p[q[r[s[t[u[v[w[x[y[z]]]]]]]]]]]]]]]]]]]]][a[b[c[d[e[f[g[h[i[j[k[l[m[n[o[p[q[r[s[t[u[v[w[x[y[z]]]]]]]]]]]]]]]]]]]]"), [a[b[c[d[egikmoqsuwyzxvtrpnljhf[a[b[c[d[e[fhjlnprtvxzywusqomkig, 'Test 34');
test(reverseParentheses("[abc][def][[ghi][jkl]][mno][pqr][[stu][vwx]][yz]"), cbafedjklghionmrqpvwxstuzy, 'Test 35');
test(reverseParentheses("[a[b[c[d[e[f[g[h[i]]]]]]]]"), [acegihfdb, 'Test 36');
test(reverseParentheses("[a[b[c[d[e[f[g[h[i[j[k[l[m[n[o[p]q]r]s]t]u]v]w]x]y]z]]]]z[y[x[w[v[u[t[s[r[q[p[o[n[m[l[k[j[i[h[g[f[e[d[c[b[a]]]]]]]]]]]]]]]]]]]]"), [a[bdfyhwjulsnqpormtkvixgzecz[y[x[w[v[usqomkigecabdfhjlnprt, 'Test 37');
test(reverseParentheses("a[b[c]d[e[f[g[h]i]j]k[l]m]n]o[p[q[r]s]t]u[v[w]x]y[z]]"), Error: list index out of range, 'Test 38');
test(reverseParentheses("p[q[r[s]t]u]v[w[x[y[z]]w]v]u"), purstqvvxzywwu, 'Test 39');
test(reverseParentheses("a[b[c[d[e[f[g]h]i]j]k]l]m"), alcjehgfidkbm, 'Test 40');
test(reverseParentheses("[a[bc]de]"), edbca, 'Test 41');
test(reverseParentheses("[a[b[c[d[e[f[g[h[i[j[k[l[m[n[o[p[q[r[s[t[u[v[w[x[y[z]]]]]]]]]]]]]]]]]]]]"]), Error: Solution.reverseParentheses[] missing 1 required positional argument: 's', 'Test 42');
test(reverseParentheses("[a[b[c[d[e[f[g[h]i]j]k]l]m]n]o[p[q[r[s[t[u[v[w[x[yz]]]]]]]]]]"), [anclejghifkdmboqsuwyzxvtrp, 'Test 43');
test(reverseParentheses("a[bc[def[ghi[jkl[mno[pqr[stu[vwx[yz]]]]]]]]]b"), adefjklpqrvwxzyutsonmihgcbb, 'Test 44');
test(reverseParentheses("[a[b[c[d[e[f[g[h]i]j]k]l]m]n]o[p[q[r[s[t[u]v]w]x]y]z]"), [anclejghifkdmbozqxsvutwryp, 'Test 45');
test(reverseParentheses("abcdefgh[ijklmnopqrstuvwxyz]"), abcdefghzyxwvutsrqponmlkji, 'Test 46');
test(reverseParentheses("[abc[def[ghi[jkl[mno]pqr]stu]vwx[yz]][abc[def[ghi[jkl[mno]pqr]stu]vwx[yz]]"), [abcyzxwvghirqpmnolkjstufed[abcyzxwvghirqpmnolkjstufed, 'Test 47');
test(reverseParentheses("a[b[c[d[e[f[g[h]i[j]k]l]m]n]o[p[q[r]s]t]u[v[w[x[y[z]]]]]]]]]]"), Error: list index out of range, 'Test 48');
test(reverseParentheses("[abcdefgh]ijklmnopqrstuvwxyz"), hgfedcbaijklmnopqrstuvwxyz, 'Test 49');
test(reverseParentheses("[[a[b]c]d]e[f[g[h]i]j]k[l[m[n]o]p]q[r[s]t]u[v[w]x]y[z]]"), Error: list index out of range, 'Test 50');
test(reverseParentheses("a[b[c[d[e[f[g[h]i]j]k]l]m]n]o[p[q[r[s[t[u[vw]x]y]z]]]"), anclejghifkdmbo[prztxvwuysq, 'Test 51');
test(reverseParentheses("a[b[c]d[e[f]g]h]i"), ahefgdcbi, 'Test 52');
test(reverseParentheses("[[abc][def]]"), defabc, 'Test 53');
test(reverseParentheses("[a[b[c]d]e[f[g[h]i]j]k]"), kfihgjebcda, 'Test 54');
test(reverseParentheses("[a[b[c[d[e[f[g[h]i]j]k[l]m]n]o[p[q[r]s]t]u[v[w]x]y[z]]]"), [acnejghifklmdotqrspuxwvyzb, 'Test 55');
test(reverseParentheses("a[b[c]d[e[f[g]h]i]j[k[l[m]n]o]p[q[r]s]t[u[v]w]x[y[z]]]"), ayzxuvwtqrspknmlojehgfidcb, 'Test 56');
test(reverseParentheses("[a[b[c[d[e[f[g[h]i]j]k]l]m]n]o[p[q[r[s[t[u[v[w[x[y[z[u[v[w[x]y]z]]]]]]]]]]]]]]"), prtvxzvyxwzuywusqobmdkfihgjelcna, 'Test 57');
test(reverseParentheses("a[b[c]d]e[f[g[h]i]j]k[l[m[n[o]p]q]r]s[t[u[v]w]x]yz"), adcbejghifkrmponqlsxuvwtyz, 'Test 58');
test(reverseParentheses("[a[b[c[d[e[f[g[h]i]j]k]l]m]n]o[p[q[r]s]t]u[v[w]x]y[z]]"), zyvwxupsrqtobmdkfihgjelcna, 'Test 59');
test(reverseParentheses("[a[b[c]d]e[f[g]h]i]"), ifghebcda, 'Test 60');
test(reverseParentheses("abc[def[ghi]jkl][mno[pqr]stu][vw[x[yz]]]"), abclkjghifedutspqronmxzywv, 'Test 61');
test(reverseParentheses("a[b[c[d[e[f[g[h[i[j[k[l[m[n[o[p[q[r[s[t[u[v[w[x[y[z]]]]]]]]]]]]]]]]]]]]b]c"), a[b[c[d[ebgikmoqsuwyzxvtrpnljhfc, 'Test 62');
test(reverseParentheses("a[b[c[d[e[f[g[h[i[j[k[l[m[n[o[p[q[r]s]t]u]v]w]x]y]z]]]]]]]]]"), acegizkxmvotqrspunwlyjhfdb, 'Test 63');
test(reverseParentheses("[ab][cd][ef][gh][ij][kl][mn][op][qr][st][uv][wx][yz]"), badcfehgjilknmporqtsvuxwzy, 'Test 64');
test(reverseParentheses("[abcdefgh[i[jklm[nopq]rst]uv]wxyz]"), zyxwitsrnopqmlkjuvhgfedcba, 'Test 65');
test(reverseParentheses("[a[b[c[d[e[f[g[h]i]j]k]l]m]n]o[p[q[r[s[t[u]v[w]x]y]z]]]"), [anclejghifkdmboqzsxwvutyrp, 'Test 66');
test(reverseParentheses("[p[q[r]s]t][u[v[w]x]y]"), tqrspyvwxu, 'Test 67');
test(reverseParentheses("a[b[c[d[e[f[g[h]i]j]k]l]m]n]o[p[q[r]s]t]u"), anclejghifkdmbotqrspu, 'Test 68');
test(reverseParentheses("[ab[cd[ef[gh[ij]kl]mn]op]qr]st"), rqcdnmghjiklfeopbast, 'Test 69');
test(reverseParentheses("[x[y[z]]]"), yzx, 'Test 70');
test(reverseParentheses("[a[b[c[d[e[f[g[h]i]j]k]l]m]n]o[p[q[r[s[t[u[v[w]x]y]z]u]v]w]x]y[z]]"), zypwrutyvwxuzsvqxobmdkfihgjelcna, 'Test 71');
test(reverseParentheses("[a[b]c[d[e[f[g]h]i]j]k[l[m]n]o[p[q[r]s]t]u]"), upsrqtolmnkdifghejcba, 'Test 72');
test(reverseParentheses("[[a[b]c][d[e[f]g]h]i[j[k[l[m[n[o[p[q[r[s[t[u[v[w[x[y[z]]]]]]]]]]]]]]]]j]"), [cbahefgdijkmoqsuwyzxvtrpnlj, 'Test 73');
test(reverseParentheses("[a[b[c[d[e[f[g[h]i[j]k]l]m]n]o[p[q[r]s]t]u]v]"), [avcnelghijkfmdotqrspub, 'Test 74');
test(reverseParentheses("x[y[z]]"), xzy, 'Test 75');
test(reverseParentheses("x[a[y[b[z[c]d]e]f]g]h[i[j[k[l]m]n]o]p"), xgyezcdbfahojmlknip, 'Test 76');
test(reverseParentheses("[a[b[c[d[e[f[g[h]i]j]k]l]m]n]o[p[q[r[s[t[u[v[w[x]y]z]u]v]w]x]y[z]]w]x]y[z]"), xpzyrwtuvyxwzuvsxqwobmdkfihgjelcnayz, 'Test 77');
test(reverseParentheses("[ab][cd][[ef][gh]][ij[kl[mn[op]qr]st][uv[w[x[yz]]]]"), badcghef[ijtsmnpoqrlkwyzxvu, 'Test 78');
test(reverseParentheses("[a[b[c[d[e[f[g[h[i[j[k[l[m[n[o[p[q[r[s[t[u[v[w[x[y[z]]]]]]]]]]]]]]]]]]]]"), [a[b[c[d[e[fhjlnprtvxzywusqomkig, 'Test 79');
test(reverseParentheses("x[y[z][w]]v[u[t[s[r[q[p[o[n[m[l[k[j[i[h[g[f[e[d[c[b[a]]]]]]]]]]]]]]]]]]]]"), xwzyv[usqomkigecabdfhjlnprt, 'Test 80');
test(reverseParentheses("[[[[[[[[[[[[a]]]]]]]]]]]]"), a, 'Test 81');
test(reverseParentheses("[[a[b[c[d[e[f[g[h]i]j]k]l]m]n]o[p[q[r[s[t[u]v]w]x]y]z]]"), [pyrwtuvsxqzobmdkfihgjelcna, 'Test 82');
test(reverseParentheses("x[y[z]]a[b[c]d]e[f[g[h]i]j]k[l[m]n]o[p[q[r]s]t[u[v]w]x[y[z]]]"), xzyadcbejghifknmloyzxuvwtqrsp, 'Test 83');
test(reverseParentheses("a[b[c[d[e[f[g[h]i]j]k]l]m]n]o[p[q[r]s]t]u[v[w[x[y[z]]]]]]]]"), Error: list index out of range, 'Test 84');
test(reverseParentheses("[a[b[c[d[e[f[g]]]]]]]"), bdfgeca, 'Test 85');
test(reverseParentheses("m[n[o[p[q[r[s[t[u[v[w[x[y[z[abc]def]ghi]jkl]mno]pqr]stu]vwx]yzz]"), m[n[o[p[q[rzzytutsvonmxihgzcbadefyjklwpqruvwxs, 'Test 86');
test(reverseParentheses("[p[q[r[s[t[u[v[w[x[y[z]]]]]]]]]]]"), qsuwyzxvtrp, 'Test 87');
test(reverseParentheses("a[b[c[d[e[f[g[h[i[j[k[l[m[n[o[p[q[r[s[t[u[v[w[x[y[z]]]]]]]]]]]]]]]]]]]]b"), a[b[c[d[e[fhjlnprtvxzywusqomkigb, 'Test 88');
test(reverseParentheses("[p[q[r[s[t[u]v]w]x]y]z]"), zqxsvutwryp, 'Test 89');
test(reverseParentheses("[abc[def[ghi[jkl[mno[pqr[stu[vwx[yz]]]]]]]]]"), defjklpqrvwxzyutsonmihgcba, 'Test 90');
test(reverseParentheses("a[b[c[d[e[f[g]h]i]j]k]l]"), alcjehgfidkb, 'Test 91');
test(reverseParentheses("[a[b[c[d[e[f[g[h[ij]kl]mno]pqr]stu]vw]xy]z]"), [azcwverqpglkijhmnofstudxyb, 'Test 92');
test(reverseParentheses("[a[b[c[d[e[f[g[h]i]j]k]l]m]n]o[p[q[r]s]t[u[v]w]x]y[z]]"), zypsrqtwvuxobmdkfihgjelcna, 'Test 93');
test(reverseParentheses("[a[bc[def]ghi]jkl]"), lkjbcfedghia, 'Test 94');
test(reverseParentheses("x[y[z][w[v[u[t[s[r[q[p[o[n[m[l[k[j[i[h[g[f[e[d[c[b[a]]]]]]]]]]]]]]]]]]]]"), x[yz[w[v[usqomkigecabdfhjlnprt, 'Test 95');
test(reverseParentheses("[[a[b]c][d[e[f]g]h]i[j[k[l[m]n]o]p]q"), [cbahefgdipknmlojq, 'Test 96');
test(reverseParentheses("[p[q[r[s[t[u[v[w[x[y[z]]]]]]]]]]]]"), Error: list index out of range, 'Test 97');
test(reverseParentheses("abc[def[ghi[jkl[mno[pqr[stu[vwx]y[z]]]]]]]"), abcghimnostuxwvyzrqplkjfed, 'Test 98');
test(reverseParentheses("[a[b[c[d[e[f[g[h]i]j]k[l]m]n]o[p[q[r]s]t]u[v[w]x]y[z]]][a[b[c[d[e[f[g[h]i]j]k[l]m]n]o[p[q[r]s]t]u[v[w]x]y[z]]]]"), [acnejghifklmdotqrspuxwvyzbbzyvwxupsrqtodmlkfihgjenca, 'Test 99');
test(reverseParentheses("a[b]c[d[e[f[g[h]i]j]k]l]m[n[o[p]q]r]s[t[u]w]v]x[y[z]]"), Error: list index out of range, 'Test 100');
test(reverseParentheses("[a[b[c[d[e[f[g[h[i[j[k[l[m[n[o[p[q[r[s[t[u[v[w[x[y[z]]]]]]]]]]]]]]]]]]]]l[m[n[o[p[q[r[s[t[u[v[w[x[y[z]]]]]]]]]]]]]]]]"), [a[b[c[dfhjlnprtvxzywusqomkiglnprtvxzywusqome, 'Test 101');
test(reverseParentheses("[[a[b]c]d[e[f]g]h[i[j]k]l[m[n]o]p[q[r]s]t[u[v]w]x]y[z]]"), Error: list index out of range, 'Test 102');
test(reverseParentheses("[a[b[c[d[e[f]g]h]i]j]"), [ajchefgdib, 'Test 103');
test(reverseParentheses("x[y[z[[a][b]]c]d]e"), xdzbacye, 'Test 104');
test(reverseParentheses("[a[b[c[d[e[f[g[h[i[jk]lm]n]o]p]q]r]s]t]u]"), ubsdqfohmljkingpercta, 'Test 105');

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
