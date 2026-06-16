// Test: 1614. Maximum Nesting Depth Of The Parentheses
// 106 test cases from LeetCodeDataset
// Run: node test.js

const { maxDepth } = require("./solution");

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

console.log("\n1614. Maximum Nesting Depth Of The Parentheses\n");

test(maxDepth("[1+[2*3]+[[8]/4]]+1"), 3, 'Test 1');
test(maxDepth("[a+[b*c]+[[d/e]+f]]"), 3, 'Test 2');
test(maxDepth("[][][]"), 1, 'Test 3');
test(maxDepth("[a+b]+[[c*d]+e]"), 2, 'Test 4');
test(maxDepth("[1+2]"), 1, 'Test 5');
test(maxDepth("1+[2*3]"), 1, 'Test 6');
test(maxDepth(""), 0, 'Test 7');
test(maxDepth("[[]]"), 2, 'Test 8');
test(maxDepth("[[1+3]*[2-4]]"), 2, 'Test 9');
test(maxDepth("""), Error: Solution.maxDepth[] missing 1 required positional argument: 's', 'Test 10');
test(maxDepth("[1]"), 1, 'Test 11');
test(maxDepth("[[[]][][]]"), 3, 'Test 12');
test(maxDepth("[[1+2]*3/[4-5]]"), 2, 'Test 13');
test(maxDepth("[1]+[[2]]+[[[3]]]"), 3, 'Test 14');
test(maxDepth("[][[]][[[][]]]"), 3, 'Test 15');
test(maxDepth("[]"), 1, 'Test 16');
test(maxDepth("[a+b+c]*[d/e/f]+[[g-[h*i]]+j]"), 3, 'Test 17');
test(maxDepth("[a]"), 1, 'Test 18');
test(maxDepth("[[[]]]"), 3, 'Test 19');
test(maxDepth("[[a+b]*c]+[[[d+e]*f]+g]"), 3, 'Test 20');
test(maxDepth("[1+[2*[[[3+4]*5]+[6/[7*[[8-9]+10]]]]]]"), 7, 'Test 21');
test(maxDepth("[a+[b+[c+[d+[e+[f+[g+[h+[i+[j+[k+[l+[m+[n+[o+[p+[q+[r+[s+[t+[u+[v+[w+[x+[y+[z+[a+b]]]]]]]]]]]]]]]]]]]]]]]]]]"), 27, 'Test 22');
test(maxDepth("[[[[[1+2]*[3+4]]-[[5+6]*[7+8]]]+[[[9+0]*[1+2]]-[[3+4]*[5+6]]]]"), 5, 'Test 23');
test(maxDepth("[[a+[b*c]]+[[d+e]/[f-g]]]+[[h*[i-j]]]"), 3, 'Test 24');
test(maxDepth("[[a+b]+[[[c+d]+[[e+f]+[[g+h]+[[i+j]+[[k+l]+[[m+n]+[[o+p]+[[q+r]+[[s+t]+u]]]]]]]]]]"), 12, 'Test 25');
test(maxDepth("[[x+y]+[[z+w]*[[a+b]*[c+d]]]]"), 4, 'Test 26');
test(maxDepth("[[[a+b]+[[c+d]*[e+f]]]+[[g-h]*[[i+j]/[k-l]]]]"), 4, 'Test 27');
test(maxDepth("[1+[[[2+[[3+[[4+[[5+[[6+[[7+[[8+[[9+[10]]]]]]]]]]]]]]]]]]]"), 19, 'Test 28');
test(maxDepth("[[[a+b]+[c*d]]+[[[e-f]-[g*h]]]+[[i+j]*[k+l]]]"), 4, 'Test 29');
test(maxDepth("[x+[y*[z+[w/[v+[u+[[t]+s]]]]]]"), 8, 'Test 30');
test(maxDepth("[[[a+b]+c]+[[d+e]+f]]+[[[g+h]+i]+[j+[k+l]]]"), 3, 'Test 31');
test(maxDepth("[a+[b*[c+[d/[e+f]+g]+h]+i]"), 5, 'Test 32');
test(maxDepth("[[a+b]+[c*[d+[e/[f+[g+[h+[i+[j]]]]]]]]"), 9, 'Test 33');
test(maxDepth("[1+[2*[3+[4*[5+[6+[7*[8+[9*[10]]]]]]]]]"), 10, 'Test 34');
test(maxDepth("[[[[[[[a+b]*c]+d]+e]+f]+g]+h]"), 7, 'Test 35');
test(maxDepth("[1+[2*[3+[4*[5+[6+[7+[8+[9]]]]]]]]"), 9, 'Test 36');
test(maxDepth("[[[a+[b*c]]+[[d+[e*f]]+[g+[h*i]]]]+[[j+[k*l]]+[[m+[n*o]]+[p+[q+[r+[s+t]]]]]]"), 7, 'Test 37');
test(maxDepth("[1+[2*[[3+4]*[5+6]*[[7+8]*[9+10]]]]+11]"), 5, 'Test 38');
test(maxDepth("[[a+[b*[c+[d*[e+f]]]]]+[[[g-h]+[i-j]]*[[k-l]+[m*n]]]]"), 6, 'Test 39');
test(maxDepth("[[a+b]*[[c-d]+e]]+[[f+[g/h]]-[[i*j]]]"), 3, 'Test 40');
test(maxDepth("[1+[[2+[[3+[[4+[[5+6]+7]]+8]]+9]]+10]+11"), 9, 'Test 41');
test(maxDepth("[[a+b]+[[[c+d]+[[e+f]+[[g+h]*[i+j]]]]*[k+l]]]"), 6, 'Test 42');
test(maxDepth("[[a+[b*c]]+[d/[[e+f]*[g-h]]]]"), 4, 'Test 43');
test(maxDepth("[[[[[x+[y*z]]+[w*[[a+b]*c]]]+[[d+e]+[[f*g]+[[h+i]+[[j+k]*l]]]]]"), 8, 'Test 44');
test(maxDepth("[[x+[y*z]]+[[u-[v*w]]+[[[p+q]*r]/s]]]"), 5, 'Test 45');
test(maxDepth("[a+[b*[c+d]]]+[[e+f]*[[g+h]*[i+j]]]+[[[k+l]*[m+n]]+[o+[p*[q+r]]]]"), 4, 'Test 46');
test(maxDepth("[a+[b*[c+d]]]+[[e/f]-[g*h]]"), 3, 'Test 47');
test(maxDepth("[[1+[2*[3+[4*[5+[6*[7+[8*[9]]]]]]]]+10]"), 10, 'Test 48');
test(maxDepth("[a+[b*[c+d]]+e+[f/[g-h]]]"), 3, 'Test 49');
test(maxDepth("[[[[[1+2]*3]+4]*5]+[[6+[7*[8+9]]]/10]]"), 5, 'Test 50');
test(maxDepth("[[[[[a+[b+[c+[d+[e+[f+[g+[h+[i+[j+[k+[l+[m+[n+[o+p]]]]]]]]]]]]+q]+r]+s]+t]+u]+v"), 19, 'Test 51');
test(maxDepth("[[a+b]+[[c+d]+[[e+f]+[[g+h]+[[i+j]+[[k+l]+[[m+n]+[[o+p]+[[q+r]+[[s+t]+[[u+v]+[[w+x]+[[y+z]]]]]]]]]]]]"), 14, 'Test 52');
test(maxDepth("[[[[a+b]+[[c+d]*[e+f]]]+[[g+h]+[[i+j]*[k+l]]]]+[m+[n*[o+p]]]]"), 5, 'Test 53');
test(maxDepth("[[[[a+b]*c]+[[d+e]*f]]+[[[g+h]*i]+[[j+k]*l]]]+[[[[m+n]*o]+[[p+q]*r]]+[[[s+t]*u]+[[v+w]*x]]]]"), 4, 'Test 54');
test(maxDepth("[1+[2+[3+[4+[5+[6+[7+[8+[9]]]]]]]]"), 9, 'Test 55');
test(maxDepth("[[[1+2]*3]+[[4+5]*[6/7]]]+[[[8+9]*[[10-11]/12]]]+13"), 4, 'Test 56');
test(maxDepth("[[x+[y*[[z+w]*v]]]+[[[u-t]-s]+[[[r-q]+[p-o]]*[n-m]]]]"), 5, 'Test 57');
test(maxDepth("[1+[[2*[[3+4]*[5-6]]]/[7+[8*[9-10]]]]]"), 5, 'Test 58');
test(maxDepth("[a+[b*[c+d]]]+[[e+f]/[g-h]]"), 3, 'Test 59');
test(maxDepth("[1+[[2+3]*[4/5]]]+[[6-[7+8]]*[[[9/10]-11]+[12*13]]]"), 4, 'Test 60');
test(maxDepth("[[1]+[[2]+[[[3]+[[4]+[5]]]+[6]]]]"), 6, 'Test 61');
test(maxDepth("[[1+2]*[[3/4]-5]+[[6*7]+8]]"), 3, 'Test 62');
test(maxDepth("[a+[b+[c+[d+[e+[f+[g+[h+[i+[j+[k+[l+[m+[n+[o+p]]]]]]]]]]]]+q]+r]+s"), 15, 'Test 63');
test(maxDepth("[[x+[y*z]]+[[u-[v*w]]+[[[p+q]*r]/s]]]+[[t+[u*v]]+[[[w+x]*y]/z]]"), 5, 'Test 64');
test(maxDepth("[[1+2]*[[3+4]*[[5+6]*[[7+8]*[[9+0]]]]]]"), 6, 'Test 65');
test(maxDepth("[a+[[b+[[c+[[d+e]*f]]*g]]*h]]"), 7, 'Test 66');
test(maxDepth("[[[[[1+2]+3]+4]+5]+6]+7"), 5, 'Test 67');
test(maxDepth("[[a+[b+[c+[d+[e+[f+[g+[h+[i+[j+[k+[l+[m+[n+[o+[p+[q+[r+[s+[t+[u+[v+[w+[x+[y+[z*1]]]]]]]]]]]]]]]]]]]]]]]]"), 27, 'Test 68');
test(maxDepth("[a+[b*[c+[d*[e+[f*[g+[h*[i+[j]]]]]]]]]+[k+[l*[m+[n*[o+[p*[q+[r*[s+[t]]]]]]]]]]"), 11, 'Test 69');
test(maxDepth("[[[[[1+2]*3]+4]*5]+6]"), 5, 'Test 70');
test(maxDepth("[[[a+b]+[[c+d]*[e/f]]]+[[[g-h]+[i/j]]*[[k+l]*[m-n]]]]"), 4, 'Test 71');
test(maxDepth("[[1+[[2+3]*4]]+[[[5-6]+7]+[[8+9]*10]]]+[[[11+[12*13]]+14]+15]"), 4, 'Test 72');
test(maxDepth("[a+[[b+c]*[d+[[e+f]*[g+[h+i]]]]]+[[j-k]*[[l-m]+[[n-o]*[p+[[q-r]+s]]]]]"), 7, 'Test 73');
test(maxDepth("[1+[2*[3+[4*[5+[6+[7+[8+[9+0]]]]]]]]"), 9, 'Test 74');
test(maxDepth("[[1+2]*[[3+[4*[5+[6/7]]]]+[[8-[9*10]]+[[11*12]+[[13/14]+15]]]]"), 6, 'Test 75');
test(maxDepth("1+[[2+[3*[4+5]]]/6]+[[[7-8]*9]/10]"), 4, 'Test 76');
test(maxDepth("[[1+[2+[3+[4+[5+[6+[7+[8+[9+[10+[11+[12+[13+[14+[15+[16+[17+[18+[19+[20+[21+[22+[23+[24+[25+[26+[27+[28+[29+[30]]]]]]]]]]]]]]]]]]]]]]]]]+31]+32]+33"), 31, 'Test 77');
test(maxDepth("[a+[b+[c+[d+[e+[f+[g+[h+[i+[j]]]]]]]]]"), 10, 'Test 78');
test(maxDepth("[[[[[a+b]+[c*d]]-[e/f]]*g]+[h-[i+j]]]"), 5, 'Test 79');
test(maxDepth("[[[[[1*2]+3]-4]+[[5-6]*7]]+8]+[[9+[[10-11]+12]]+13]+14]), Error: Solution.maxDepth[] missing 1 required positional argument: 's', 'Test 80');
test(maxDepth("[[[a+[b*c]]+[[d+[e*f]]+[[g+[h*i]]+[[j+[k*l]]+[[m+[n*o]]+[[p+[q*r]]+[[s+[t*u]]+[[v+[w*x]]+[[y+[z*1]]+2]]]]]]]]"), 12, 'Test 81');
test(maxDepth("[a+[b+[c+[d+[e+[f+[g+[h+[i+[j+[k+[l+[m+[n+[o+[p+[q+[r+[s+[t+[u+[v+[w+[x+[y+[z+[a+[b+[c+[d+[e+[f+[g+[h+[i+[j+[k+[l+[m+[n+[o+p]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]+a]+b]+c]+d]+e]+f]+g]+h]+i]+j]+k]+l]+m]+n]+o]+p]+q]+r]+s]+t]+u]+v]+w]+x]+y]+z"), 41, 'Test 82');
test(maxDepth("[1+[[2+[3*[4/5]]]+[[6-[7*8]]]]"), 5, 'Test 83');
test(maxDepth("[[[[[a+[b*[c/[d-e]]]]+[[f+g]*[[h-i]+j]]]+[[k-l]/[m*[n-o]]]]+[[[p+q]*[[r-s]+t]]+[[u-v]/[w*[x-y]]]]]]), Error: Solution.maxDepth[] missing 1 required positional argument: 's', 'Test 84');
test(maxDepth("[1+[2*[[3+4]*[5+[6*[7+[8+9]]]]]]+[10*[[11-12]+[13*[[14-15]+[16*[17+18]]]]]]"), 7, 'Test 85');
test(maxDepth("[1+[2+[3+[4+[5+[6+[7+[8+[9+[10+[11+[12+[13+[14+[15+[16+[17+[18+[19+[20]]]]]]]]]]]]]]]]]"]), Error: Solution.maxDepth[] missing 1 required positional argument: 's', 'Test 86');
test(maxDepth("[[x+[y*z]]+[u/[v-[[w+x]*[y-z]]]]]+[a+b]-[c*d]"), 5, 'Test 87');
test(maxDepth("[[[a+b]*[c-d]]+[[[e+f]*[g-h]]+[[[i+j]*[k-l]]+[[[m+n]*[o-p]]+[[q+r]*[s-t]]]]]"), 6, 'Test 88');
test(maxDepth("[[[a+b]*[[c-d]+e]]-[[[f+g]*h]-[i/j]]]"), 4, 'Test 89');
test(maxDepth("[[[[[1+2]*3]+[[4-5]*6]]+[[[7/8]+9]*10]]]"), 5, 'Test 90');
test(maxDepth("[[[[[1]+2]*3]+[[[[[4]+5]*6]+[[7]+8]]]]"), 7, 'Test 91');
test(maxDepth("[a+[b+[c+[d+[e+[f+[g+[h+[i+[j+[k+[l+[m+[n+[o+[p+[q+[r+[s+[t+[u+[v+[w+[x+[y+z]]]]]]]]]]]]]]]]]]]]]]"), 25, 'Test 92');
test(maxDepth("[[[1+2]*[[3-4]+[5/6]]]+[[[7*8]-9]+[[10+11]*12]]]"), 4, 'Test 93');
test(maxDepth("[a+[b+[c+[d+[e+[f+[g+[h+[i+[j+[k+[l+[m+[n+[o+[p+[q+[r+[s+[t+[u+[v+[w+[x+[y+[z+[a+b]]]]]]]]]]]]]]]]]]]]]]]]]"), 27, 'Test 94');
test(maxDepth("[[a+[b*c]+[d/e]]-[[[f+g]*[h-i]]+[[j/k]+[l*m]]]]"), 4, 'Test 95');
test(maxDepth("[a+[b*[c/[d-e]]]]+[[[f+g]*[[h-i]+j]]+[[k-l]/[m*[n-o]]]]"), 4, 'Test 96');
test(maxDepth("[[a+[b+[c+[d+[e+[f+[g+[h+[i+[j+[k+[l+[m+[n+[o+[p+[q+[r+[s+[t+[u+[v+[w+[x+[y+z]]]]]]]]]]]]]]]]]]]]]]]]"), 26, 'Test 97');
test(maxDepth("[a+[b*[c+d]]]+[[e+f]/[g-[h*i]]]"), 3, 'Test 98');
test(maxDepth("[a+[b*[c+d]]]+[[[e+f]*[g-h]]]+1"), 3, 'Test 99');
test(maxDepth("[a+[b*[c+[d/[e+[f*[g+[h/[i+j]]]]]]]]"), 9, 'Test 100');
test(maxDepth("[1+[2*[3+4]/[5-6]]+[[7+8]*9]]"), 3, 'Test 101');
test(maxDepth("[[[[[[[[[[1+2]+3]+4]+5]+6]+7]+8]+9]+10]"), 10, 'Test 102');
test(maxDepth("[[[[[1+2]*3]+4]+[[5+6]+7]]+8]+[[9+[[10+11]*12]]+13]+14]), Error: Solution.maxDepth[] missing 1 required positional argument: 's', 'Test 103');
test(maxDepth("[[[[[x*y]+z]+[[a*b]+c]]+[[[d*e]+f]+[[g*h]+i]]]]"), 5, 'Test 104');
test(maxDepth("[a+[b+[c+[d+[e+[f+[g+[h+[i+[j+[k+[l+[m+[n+[o+[p+[q+[r+[s+[t+[u+[v+[w+[x+[y+z]]]]]]]]]]]]]]]]]]]]]+a]+b]+c"), 25, 'Test 105');
test(maxDepth("[[[[1+[2+[3+[4+[5+[6+[7+[8+[9+[10+[11+[12+[13+[14+[15+[16+[17+[18+[19+[20]]]]]]]]]]]]]]]]+21]+22]+23]+24]+25]+26"), 23, 'Test 106');

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
