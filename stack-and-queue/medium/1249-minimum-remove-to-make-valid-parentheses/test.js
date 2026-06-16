// Test: 1249. Minimum Remove To Make Valid Parentheses
// 80 test cases from LeetCodeDataset
// Run: node test.js

const { minRemoveToMakeValid } = require("./solution");

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

console.log("\n1249. Minimum Remove To Make Valid Parentheses\n");

test(minRemoveToMakeValid("[a[b]c]d[e[fg]h"), [a[b]c]de[fg]h, 'Test 1');
test(minRemoveToMakeValid("[]"), [], 'Test 2');
test(minRemoveToMakeValid("]][[]"), [], 'Test 3');
test(minRemoveToMakeValid("ab[c[d]e]f[g[h]i]j[kl]"), ab[c[d]e]f[g[h]i]j[kl], 'Test 4');
test(minRemoveToMakeValid("a]b[c]d"), ab[c]d, 'Test 5');
test(minRemoveToMakeValid("[][]"), [][], 'Test 6');
test(minRemoveToMakeValid(""), , 'Test 7');
test(minRemoveToMakeValid("[a[b]c]d[e[f]g]h[i]"), [a[b]c]d[e[f]g]h[i], 'Test 8');
test(minRemoveToMakeValid("]][[]]"), [[]], 'Test 9');
test(minRemoveToMakeValid("[a[b]c]d[e[f]g]h"), [a[b]c]d[e[f]g]h, 'Test 10');
test(minRemoveToMakeValid("lee[t[c]o]de]"), lee[t[c]o]de, 'Test 11');
test(minRemoveToMakeValid("a[b]c]d[e[fg]h]i[j[k[l]m]n]o[pq[r]s]t[uv[w]x]y[z]"), a[b]cd[e[fg]h]i[j[k[l]m]n]o[pq[r]s]t[uv[w]x]y[z], 'Test 12');
test(minRemoveToMakeValid("a[b[c]d]e[f[g[h]i]j]k[l[m]n]o[p]q[r]s]t[u]v[w[x]y]z[[[[]]"), a[b[c]d]e[f[g[h]i]j]k[l[m]n]o[p]q[r]st[u]v[w[x]y]z[[]], 'Test 13');
test(minRemoveToMakeValid("a[b[c[d[e[f[g[h]i]j]k]l]m]n]o[p]q[r]s]t[u]v[w[x]y]z"), a[b[c[d[e[f[g[h]i]j]k]l]m]n]o[p]q[r]st[u]v[w[x]y]z, 'Test 14');
test(minRemoveToMakeValid("a[[b]c]d[e[f]g]h[i[j[k[l]m]n]o[p[q[r]s]t[uv[w]x]y[z]]]]"), a[[b]c]d[e[f]g]h[i[j[k[l]m]n]o[p[q[r]s]t[uv[w]x]y[z]]], 'Test 15');
test(minRemoveToMakeValid("a[b[c]d[e[f]g]h]i[j[k[l]m]n]o[p]q[r]s]t[u]v[w]x[y[z]"), a[b[c]d[e[f]g]h]i[j[k[l]m]n]o[p]q[r]st[u]v[w]xy[z], 'Test 16');
test(minRemoveToMakeValid("a[b[c]d[e[f]g[h]i]j]k"), a[b[c]d[e[f]g[h]i]j]k, 'Test 17');
test(minRemoveToMakeValid("[[]][[[][]][]][[][[]]][[][[][]][]][[][[]]][[][[][]][]]"), [[]][[[][]][]][[][[]]][[][[][]][]][[][[]]][[][[][]][]], 'Test 18');
test(minRemoveToMakeValid("a[b[c]d[e[f[g[h]i[j[k[l]m]n]o[p]q[r]s]t[u]v[w]x[y]z]]]]"), a[b[c]d[e[f[g[h]i[j[k[l]m]n]o[p]q[r]s]t[u]v[w]x[y]z]]], 'Test 19');
test(minRemoveToMakeValid("[a[b[c[d[e[f[g[h]i]j]k]l]m]n]o[p]"), a[b[c[d[e[f[g[h]i]j]k]l]m]n]o[p], 'Test 20');
test(minRemoveToMakeValid("[x[y[z]]]a[b[c]d[e[f]g]h]i]j]k"), [x[y[z]]]a[b[c]d[e[f]g]h]ijk, 'Test 21');
test(minRemoveToMakeValid("a[b]c[d[e[f]g[h]i[j[k[l]m]n]o[p]q[r]s]t[u]v[w]x[y]z]"), a[b]c[d[e[f]g[h]i[j[k[l]m]n]o[p]q[r]s]t[u]v[w]x[y]z], 'Test 22');
test(minRemoveToMakeValid("[a[b[c]d[e[f[g[h]i]j]k]l]m]n]o]p]q]r]s]t]u]v]w]x]y]z"), [a[b[c]d[e[f[g[h]i]j]k]l]m]nopqrstuvwxyz, 'Test 23');
test(minRemoveToMakeValid("abc[def[ghi]jkl[mno]pqr[stu]vwx[yz]""), Error: Solution.minRemoveToMakeValid[] missing 1 required positional argument: 's', 'Test 24');
test(minRemoveToMakeValid("[[[[[[[[[[a]]]]]]]]]]"), [[[[[[[[[[a]]]]]]]]]], 'Test 25');
test(minRemoveToMakeValid("a[b[c]d[e[f]g]h]i[j[k[l]m]n]o"), a[b[c]d[e[f]g]h]i[j[k[l]m]n]o, 'Test 26');
test(minRemoveToMakeValid("a[b[c[d[e[f[g[h]i]j]k]l]m]n]o]p[q[r]s]t[u[v[w]x]y[z]]"), a[b[c[d[e[f[g[h]i]j]k]l]m]n]op[q[r]s]t[u[v[w]x]y[z]], 'Test 27');
test(minRemoveToMakeValid("a[b[c[d[e[f[g[h]i]j]k]l]m]n]o]p[q[r]s]t[u[v[w]x]y[z]]]"), a[b[c[d[e[f[g[h]i]j]k]l]m]n]op[q[r]s]t[u[v[w]x]y[z]], 'Test 28');
test(minRemoveToMakeValid("a[b[c[d[e[f[g[h]i[j[k[l]m]n]o[p]q[r]s]t[u]v[w]x[y]z]"), abcde[f[g[h]i[j[k[l]m]n]o[p]q[r]s]t[u]v[w]x[y]z], 'Test 29');
test(minRemoveToMakeValid("a[b[c]d[e[f[g[h]i]j]k]l]m]n]o]p]q]r]s]t]u]v]w]x]y]z"), a[b[c]d[e[f[g[h]i]j]k]l]mnopqrstuvwxyz, 'Test 30');
test(minRemoveToMakeValid("a[b[c]d[e[f[g[h]i]j]k]l]m]n]o]p]q]r]s]t]u]v]w]x]y]z]"), a[b[c]d[e[f[g[h]i]j]k]l]mnopqrstuvwxyz, 'Test 31');
test(minRemoveToMakeValid("[[abc][def]]ghi[jkl[mno]pqr]stu[vwx[yz]"), [[abc][def]]ghi[jkl[mno]pqr]stuvwx[yz], 'Test 32');
test(minRemoveToMakeValid("[[a[b]c]d]e[f[g[h]i]j]k[lmno]p[q[rst]uvw]x[y[z]]"), [[a[b]c]d]e[f[g[h]i]j]k[lmno]p[q[rst]uvw]x[y[z]], 'Test 33');
test(minRemoveToMakeValid("[[[[[[[[a]]]]]]]]"), [[[[[[[[a]]]]]]]], 'Test 34');
test(minRemoveToMakeValid("[a[b[c]d[e[f]g[h]i[j[k[l]m]n]o[p]q[r]s]t[u]v[w]x[y]z]]]]"), [a[b[c]d[e[f]g[h]i[j[k[l]m]n]o[p]q[r]s]t[u]v[w]x[y]z]], 'Test 35');
test(minRemoveToMakeValid("[[]][[[]][]][[[[]]]]"), [[]][[[]][]][[[[]]]], 'Test 36');
test(minRemoveToMakeValid("a[[[[[[[[[[b]]]]]]]]]]"), a[[[[[[[[[[b]]]]]]]]]], 'Test 37');
test(minRemoveToMakeValid("[[[[a]bb]ccc]d]eeee[f]ggg[h]iii"), [[[[a]bb]ccc]d]eeee[f]ggg[h]iii, 'Test 38');
test(minRemoveToMakeValid("[a[b[c[d[e[f[g[h]i]j]k]l]m]n]o[p]q[r]s]t[u]v[w]x[y]z"), [a[b[c[d[e[f[g[h]i]j]k]l]m]n]o[p]q[r]s]t[u]v[w]x[y]z, 'Test 39');
test(minRemoveToMakeValid("a[b]c]d[e[f[g]h]i[j[k[l]m]n]o[p]q[r]s]t[u]v[w]x[y]z"), a[b]cd[e[f[g]h]i[j[k[l]m]n]o[p]q[r]s]t[u]v[w]x[y]z, 'Test 40');
test(minRemoveToMakeValid("abc[def[ghi]jkl]mno[pqr]stu[vwxyz]"), abc[def[ghi]jkl]mno[pqr]stu[vwxyz], 'Test 41');
test(minRemoveToMakeValid("[[a[b]c]d[e[f]g]h[i]j]k[l[m]n]o[p]q[r]s]t"), [[a[b]c]d[e[f]g]h[i]j]k[l[m]n]o[p]q[r]st, 'Test 42');
test(minRemoveToMakeValid("a[b[c]d]e[f[g[h]i]j]k[l[m]n]o[p]q[r]s]t[u]v[w[x]y]z][][[]"), a[b[c]d]e[f[g[h]i]j]k[l[m]n]o[p]q[r]st[u]v[w[x]y]z[][], 'Test 43');
test(minRemoveToMakeValid("a[b[c]d[e[f]g]h]i[j[k[l]m]n]o[p]q[r]s]t[u]v[w]x[y]z]"), a[b[c]d[e[f]g]h]i[j[k[l]m]n]o[p]q[r]st[u]v[w]x[y]z, 'Test 44');
test(minRemoveToMakeValid("a[b[c]d[e]f[g[h]i]j]k""), Error: Solution.minRemoveToMakeValid[] missing 1 required positional argument: 's', 'Test 45');
test(minRemoveToMakeValid("[abc[def[ghi[jkl[mnopqr[stu[vwx[yz]]]]]]]"), abc[def[ghi[jkl[mnopqr[stu[vwx[yz]]]]]]], 'Test 46');
test(minRemoveToMakeValid("[a[b[c[d[e[f[g[h]i]j]k]l]m]n]o[p[q]r]s]t[u]v[w]x[y]z]]]"), [a[b[c[d[e[f[g[h]i]j]k]l]m]n]o[p[q]r]s]t[u]v[w]x[y]z, 'Test 47');
test(minRemoveToMakeValid("[a[b[c[d[e[f[g[h]i]j]k]l]m]n]o]p[q[r]s]t[u[v[w]x]y[z]""), Error: Solution.minRemoveToMakeValid[] missing 1 required positional argument: 's', 'Test 48');
test(minRemoveToMakeValid("a[b[c[d[e[f[g[h]i[j]k]l]m]n]o[p]q[r]s]t[u]v[w]x[y]z]"), a[b[c[d[e[f[g[h]i[j]k]l]m]n]o[p]q[r]s]t[u]v[w]x[y]z], 'Test 49');
test(minRemoveToMakeValid("[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]"), [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]], 'Test 50');
test(minRemoveToMakeValid("[[[[[a[b]c]d]e]f]g]h]i[j[k[l]m]n]o[p]q[r]s]t[u]v[w[x]y]z"), [[[[[a[b]c]d]e]f]g]hi[j[k[l]m]n]o[p]q[r]st[u]v[w[x]y]z, 'Test 51');
test(minRemoveToMakeValid("[[[[[[[[[[a]]]]]]]]]]b"), [[[[[[[[[[a]]]]]]]]]]b, 'Test 52');
test(minRemoveToMakeValid("[][][][[[]]][[]][[[[]]][[][[]]][[]][[]]]"), [][][][[[]]][[]][[[[]]][[][[]]][[]][[]]], 'Test 53');
test(minRemoveToMakeValid("[[[[[[[[[[[]]]]]]]]]]]"), [[[[[[[[[[[]]]]]]]]]]], 'Test 54');
test(minRemoveToMakeValid("[[[abc]def]ghijklmnopqrst]uv[wxyz]"), [[[abc]def]ghijklmnopqrst]uv[wxyz], 'Test 55');
test(minRemoveToMakeValid("abc]def[ghi]jkl[mno]pqr[stu]vwx[yz"), abcdef[ghi]jkl[mno]pqr[stu]vwxyz, 'Test 56');
test(minRemoveToMakeValid("[[a][b][c][d]]"), [[a][b][c][d]], 'Test 57');
test(minRemoveToMakeValid("abcdefghijklmnopqrstuvwxyz[abcdefghijklmnopqrstuvwxyz]"), abcdefghijklmnopqrstuvwxyz[abcdefghijklmnopqrstuvwxyz], 'Test 58');
test(minRemoveToMakeValid("[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]][]"), [[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]][], 'Test 59');
test(minRemoveToMakeValid("[[[[a[b]c]d[e[f]g]h]i[j[k[l]m]n]o[p]q[r]s]t[u]v[w]x[y]z]]]]"), [[[[a[b]c]d[e[f]g]h]i[j[k[l]m]n]o[p]q[r]s]t[u]v[w]x[y]z], 'Test 60');
test(minRemoveToMakeValid("[a[b]c]d[e[f[g]h]i[j[k[l]m]n]o]p[q[r]s]t[u[v[w]x]y[z]]]"), [a[b]c]d[e[f[g]h]i[j[k[l]m]n]o]p[q[r]s]t[u[v[w]x]y[z]], 'Test 61');
test(minRemoveToMakeValid("[a[b[c[d[e[f[g[h]i]j]k]l]m]n]o[p[q]r]s]t[u]v[w]x[y]z]"), [a[b[c[d[e[f[g[h]i]j]k]l]m]n]o[p[q]r]s]t[u]v[w]x[y]z, 'Test 62');
test(minRemoveToMakeValid("a[b[c[d[e[f[g[h]i[j]k]l]m]n]o[p[q[r]s]t]u[v[w[x]y[z]u]v]w]x]y]z"), a[b[c[d[e[f[g[h]i[j]k]l]m]n]o[p[q[r]s]t]u[v[w[x]y[z]u]v]w]x]yz, 'Test 63');
test(minRemoveToMakeValid("[[[[[[a[b]c]d]]]]]]"), [[[[[[a[b]c]d]]]]], 'Test 64');
test(minRemoveToMakeValid("a[b[c]d[e[f[g[h]i[j[k[l]m]n]o[p]q[r]s]t[u]v[w]x[y[z]]]]"), ab[c]d[e[f[g[h]i[j[k[l]m]n]o[p]q[r]s]t[u]v[w]x[y[z]]]], 'Test 65');
test(minRemoveToMakeValid("[[[[[[[[[[[[[[[[[[[[[[[]"), [], 'Test 66');
test(minRemoveToMakeValid("a[b]c]d[e[f]g[h]i[j[k[l]m]n]o[p]q[r]s]t[u]v[w]x[y]z"), a[b]cd[e[f]g[h]i[j[k[l]m]n]o[p]q[r]s]t[u]v[w]x[y]z, 'Test 67');
test(minRemoveToMakeValid("[a[b]c]d[e[f[g]h]i[j[k[l]m]n]o]p[q[r]s]t[u[v]w]x[y[z]]]"), [a[b]c]d[e[f[g]h]i[j[k[l]m]n]o]p[q[r]s]t[u[v]w]x[y[z]], 'Test 68');
test(minRemoveToMakeValid("a[b[c]d]e[f[g]h]i[j[k[l]m]n]o[p]q[r]s]t[u]v[w[x]y]z"), a[b[c]d]e[f[g]h]i[j[k[l]m]n]o[p]q[r]st[u]v[w[x]y]z, 'Test 69');
test(minRemoveToMakeValid("a[b[c]d[e[f[g[h]i]j]k]l]m]n]o]p]q]r]s]t]u]v]w]x]y]z[abc]"), a[b[c]d[e[f[g[h]i]j]k]l]mnopqrstuvwxyz[abc], 'Test 70');
test(minRemoveToMakeValid("[[a[b]c]d[e[f]g]h]i[j[k[l]m]n]o[p]"), [[a[b]c]d[e[f]g]h]i[j[k[l]m]n]o[p], 'Test 71');
test(minRemoveToMakeValid("[a[b[c]d[e[f[g[h]i]j]k]l]m]n]o]p]q]r]s]t]u]v]w]x]y]z]"), [a[b[c]d[e[f[g[h]i]j]k]l]m]nopqrstuvwxyz, 'Test 72');
test(minRemoveToMakeValid("a[b[c[d[e[f[g[h]i]j]k]l]m]n]o[p[q[r]s]t]u[v[w[x]y]z]"), a[b[c[d[e[f[g[h]i]j]k]l]m]n]o[p[q[r]s]t]u[v[w[x]y]z], 'Test 73');
test(minRemoveToMakeValid("[a[b[c]d[e[f[g[h]i]j]k]l]m]n]o]p]q]r]s]t]u]v]w]x]y]z]abc[def]"), [a[b[c]d[e[f[g[h]i]j]k]l]m]nopqrstuvwxyzabc[def], 'Test 74');
test(minRemoveToMakeValid("abcdefghijklmnopqrstuvwxyz]abcdefghijklmnopqrstuvwxyz["), abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz, 'Test 75');
test(minRemoveToMakeValid("[a[b[c[d[e[f[g[h]i]j]k]l]m]n]o[p[q[r]s]t[u[v[w]x]y]z]"), a[b[c[d[e[f[g[h]i]j]k]l]m]n]o[p[q[r]s]t[u[v[w]x]y]z], 'Test 76');
test(minRemoveToMakeValid("[a[b[c[d[e[f[g[h]i]j]k]l]m]n]o[p[q]r]s]t[u]v[w]x[y][z]"), [a[b[c[d[e[f[g[h]i]j]k]l]m]n]o[p[q]r]s]t[u]v[w]x[y][z], 'Test 77');
test(minRemoveToMakeValid("a[b[c[d[e[f[g[h]i]j]k]l]m]n]o[p[q]r]s]t[u]v[w]x[y]z][a[b[c[d[e[f[g[h]i]j]k]l]m]n]o[p[q]r]s]t[u]v[w]x[y]z]"), a[b[c[d[e[f[g[h]i]j]k]l]m]n]o[p[q]r]st[u]v[w]x[y]z[a[b[c[d[e[f[g[h]i]j]k]l]m]n]o[p[q]r]s]t[u]v[w]x[y]z, 'Test 78');
test(minRemoveToMakeValid("[a[b[c]d[e[f[g[h]i]j]k]l]m]n]o]p]q]r]s]t]u]v]w]x]y]z]abc"), [a[b[c]d[e[f[g[h]i]j]k]l]m]nopqrstuvwxyzabc, 'Test 79');
test(minRemoveToMakeValid("a[b[c[d[e[f[g[h]i[j[k[l]m]n]o[p]q[r]s]t[u]v[w]x[y]z]]]]"), ab[c[d[e[f[g[h]i[j[k[l]m]n]o[p]q[r]s]t[u]v[w]x[y]z]]]], 'Test 80');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

