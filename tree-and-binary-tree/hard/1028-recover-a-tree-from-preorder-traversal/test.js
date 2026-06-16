// Test: 1028. Recover A Tree From Preorder Traversal
// 188 test cases from LeetCodeDataset
// Run: node test.js

const { recoverFromPreorder } = require("./solution");

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

console.log("\n1028. Recover A Tree From Preorder Traversal\n");

test(recoverFromPreorder("1"), [1], 'Test 1');
test(recoverFromPreorder("1-2--3--4---5"), [1, 2, null, 3, 4, null, null, 5], 'Test 2');
test(recoverFromPreorder("1-2--3---5----6"), [1, 2, null, 3, null, 5, null, 6], 'Test 3');
test(recoverFromPreorder("1-2--3--4-5--6--7"), [1, 2, 5, 3, 4, 6, 7], 'Test 4');
test(recoverFromPreorder("1-2--3--4--5--6--7-8-9-10"), [1, 2, null, 3, 4], 'Test 5');
test(recoverFromPreorder("1-2--3-4--5-6--7-8--9"), [1, 2, 4, 3, null, 5], 'Test 6');
test(recoverFromPreorder("1-2-3----4-----5"), [1, 2, 3], 'Test 7');
test(recoverFromPreorder("1-2-3--4--5"), [1, 2, 3, null, null, 4, 5], 'Test 8');
test(recoverFromPreorder("1-2--3--4"), [1, 2, null, 3, 4], 'Test 9');
test(recoverFromPreorder("1-2---3----4-----5"), [1, 2], 'Test 10');
test(recoverFromPreorder("1-2-3-4-5"), [1, 2, 3], 'Test 11');
test(recoverFromPreorder("1-2-3"), [1, 2, 3], 'Test 12');
test(recoverFromPreorder("1-2"), [1, 2], 'Test 13');
test(recoverFromPreorder("1-2--3---4-5--6---7"), [1, 2, 5, 3, null, 6, null, 4, null, 7], 'Test 14');
test(recoverFromPreorder("1-2--3"), [1, 2, null, 3], 'Test 15');
test(recoverFromPreorder("1-2--3--4----5"), [1, 2, null, 3, 4], 'Test 16');
test(recoverFromPreorder("1-2--3--4--5-6--7-8-9"), [1, 2, null, 3, 4], 'Test 17');
test(recoverFromPreorder("1-2--3-4-5"), [1, 2, 4, 3], 'Test 18');
test(recoverFromPreorder("1-2-3--4-5--6-7"), [1, 2, 3, null, null, 4], 'Test 19');
test(recoverFromPreorder("1-401--349---90--88"), [1, 401, null, 349, 88, 90], 'Test 20');
test(recoverFromPreorder("1-2--3-4--5"), [1, 2, 4, 3, null, 5], 'Test 21');
test(recoverFromPreorder("1-2--3--4--5-6--7-8--9-10--11"), [1, 2, null, 3, 4], 'Test 22');
test(recoverFromPreorder("1-2--3---4----5-----6------7-------8"), [1, 2, null, 3, null, 4, null, 5, null, 6, null, 7, null, 8], 'Test 23');
test(recoverFromPreorder("1-2--3--4-5--6--7--8--9--10"), [1, 2, 5, 3, 4, 6, 7], 'Test 24');
test(recoverFromPreorder("1-2--3--4--5--6--7--8-9-10-11-12-13-14-15-16-17-18-19"), [1, 2, null, 3, 4], 'Test 25');
test(recoverFromPreorder("1-2--3----4-----5------6-------7--------8---------9----------10-----------11------------12-------------13"), [1, 2, null, 3], 'Test 26');
test(recoverFromPreorder("1-2--3---4----5------6---------7----------8-9-10-11-12-13"), [1, 2, null, 3, null, 4, null, 5], 'Test 27');
test(recoverFromPreorder("1-2--3--4-5-6--7--8--9--10--11--12-13"), [1, 2, 5, 3, 4], 'Test 28');
test(recoverFromPreorder("1-2--3-4----5-6------7--8---9"), [1, 2, 4, 3], 'Test 29');
test(recoverFromPreorder("1-2--3--4-5--6--7-8--9--10--11--12--13--14"), [1, 2, 5, 3, 4, 6, 7], 'Test 30');
test(recoverFromPreorder("1-2--3---4----5--6--7---8----9-10--11--12-13"), [1, 2, null, 3, 6, 4, null, null, null, 5], 'Test 31');
test(recoverFromPreorder("1-2--3----4----5--6--7-8-9-10-11-12-13--14----15"), [1, 2, null, 3], 'Test 32');
test(recoverFromPreorder("1-2--3----4------5--------6"), [1, 2, null, 3], 'Test 33');
test(recoverFromPreorder("1-2--3---4----5-----6------7-------8--------9---------10----------11-----------12------------13-------------14"), [1, 2, null, 3, null, 4, null, 5, null, 6, null, 7, null, 8, null, 9, null, 10, null, 11, null, 12, null, 13, null, 14], 'Test 34');
test(recoverFromPreorder("1-2--3-4--5---6------7"), [1, 2, 4, 3, null, 5, null, null, null, 6], 'Test 35');
test(recoverFromPreorder("1-2--3----4-----5------6-------7--------8---------9----------10-----------11------------12"), [1, 2, null, 3], 'Test 36');
test(recoverFromPreorder("1-2--3--4--5--6--7-8--9--10--11--12--13--14--15--16--17--18--19--20--21--22--23--24--25--26--27--28--29--30--31--32--33--34--35--36--37--38--39--40--41--42--43--44--45--46--47--48--49--50"), [1, 2, null, 3, 4], 'Test 37');
test(recoverFromPreorder("1-2--3--4----5-----6----7---8-9"), [1, 2, null, 3, 4], 'Test 38');
test(recoverFromPreorder("1-2--3--4---5----6-----7"), [1, 2, null, 3, 4, null, null, 5, null, 6, null, 7], 'Test 39');
test(recoverFromPreorder("1-2--3--4--5--6--7--8--9--10--11--12--13--14--15"), [1, 2, null, 3, 4], 'Test 40');
test(recoverFromPreorder("1-2-3-4-5-6-7-8-9"), [1, 2, 3], 'Test 41');
test(recoverFromPreorder("1-2--3---4-5--6--7---8-9-10-11-12"), [1, 2, 5, 3, null, 6, 7, 4, null, null, null, 8], 'Test 42');
test(recoverFromPreorder("1-2--3---4----5-6--7---8----9-10--11--12-13-14"), [1, 2, 6, 3, null, 7, null, 4, null, 8, null, 5, null, 9], 'Test 43');
test(recoverFromPreorder("1-2--3--4----5------6--------7"), [1, 2, null, 3, 4], 'Test 44');
test(recoverFromPreorder("1-2--3----4-----5------6-------7--------8---------9----------10-----------11"), [1, 2, null, 3], 'Test 45');
test(recoverFromPreorder("1-2--3--4--5-6--7--8--9--10--11--12--13--14--15--16"), [1, 2, null, 3, 4], 'Test 46');
test(recoverFromPreorder("1-2--3----4----5--6--7-8-9-10-11-12-13--14----15--16-17"), [1, 2, null, 3], 'Test 47');
test(recoverFromPreorder("1-2--3--4--5--6--7--8--9--10--11--12--13--14--15--16--17--18--19--20--21"), [1, 2, null, 3, 4], 'Test 48');
test(recoverFromPreorder("1-2--3--4--5--6--7--8--9-10-11-12-13-14"), [1, 2, null, 3, 4], 'Test 49');
test(recoverFromPreorder("1-2--3--4--5--6--7--8--9--10--11"), [1, 2, null, 3, 4], 'Test 50');
test(recoverFromPreorder("1-2--3--4----5-6------7---8-9--10----11"), [1, 2, null, 3, 4], 'Test 51');
test(recoverFromPreorder("1-2--3--4--5-6--7--8--9--10--11-12--13--14--15--16--17--18--19--20"), [1, 2, null, 3, 4], 'Test 52');
test(recoverFromPreorder("1-2--3--4-5--6--7--8-9"), [1, 2, 5, 3, 4, 6, 7], 'Test 53');
test(recoverFromPreorder("1-2--3---4----5-6--7---8----9-10--11--12"), [1, 2, 6, 3, null, 7, null, 4, null, 8, null, 5, null, 9], 'Test 54');
test(recoverFromPreorder("1-2--3--4----5-6--7---8--9-10----11--12"), [1, 2, null, 3, 4], 'Test 55');
test(recoverFromPreorder("1-2--3---4----5-6--7---8-9"), [1, 2, 6, 3, null, 7, null, 4, null, 8, null, 5], 'Test 56');
test(recoverFromPreorder("1-2--3--4--5--6--7-8--9--10-11-12--13--14-15-16--17-18--19-20-21-22-23-24"), [1, 2, null, 3, 4], 'Test 57');
test(recoverFromPreorder("1-2--3---4----5--6-7---8-9--10-11--12-13--14"), [1, 2, 7, 3, 6, null, null, 4, null, null, null, 5], 'Test 58');
test(recoverFromPreorder("1-2--3--4----5------6---------7----------8-9"), [1, 2, null, 3, 4], 'Test 59');
test(recoverFromPreorder("1-2--3--4--5--6--7-8--9--10-11-12--13--14-15-16--17-18--19-20-21-22-23-24-25-26-27-28-29-30-31-32-33-34"), [1, 2, null, 3, 4], 'Test 60');
test(recoverFromPreorder("1-2--3----4----5---6--7"), [1, 2, null, 3], 'Test 61');
test(recoverFromPreorder("1-2--3--4--5--6--7-8--9--10--11--12--13--14--15--16"), [1, 2, null, 3, 4], 'Test 62');
test(recoverFromPreorder("1-2--3--4--5----6-----7------8-------9"), [1, 2, null, 3, 4], 'Test 63');
test(recoverFromPreorder("1-2--3-4--5--6-7-8-9-10-11-12-13-14-15-16-17-18"), [1, 2, 4, 3, null, 5, 6], 'Test 64');
test(recoverFromPreorder("1-2--3--4--5---6---7---8---9"), [1, 2, null, 3, 4], 'Test 65');
test(recoverFromPreorder("1-2--3---4----5------6--------7-8--9---10----11"), [1, 2, null, 3, null, 4, null, 5], 'Test 66');
test(recoverFromPreorder("1-2--3--4--5--6--7-8--9--10-11--12--13--14--15"), [1, 2, null, 3, 4], 'Test 67');
test(recoverFromPreorder("1-2--3--4-5--6--7--8-9-10--11--12-13--14--15--16--17--18--19"), [1, 2, 5, 3, 4, 6, 7], 'Test 68');
test(recoverFromPreorder("1-2--3--4--5-6--7-8--9-10-11-12-13-14-15-16-17-18-19-20-21-22-23-24-25-26-27-28"), [1, 2, null, 3, 4], 'Test 69');
test(recoverFromPreorder("10-20--30---40----50-60--70---80----90"), [10, 20, 60, 30, null, 70, null, 40, null, 80, null, 50, null, 90], 'Test 70');
test(recoverFromPreorder("1-2--3----4----5------6--------7--------8------9----10--11-12--13"), [1, 2, null, 3], 'Test 71');
test(recoverFromPreorder("1-2--3-4--5--6-7-8--9-10-11-12-13-14-15"), [1, 2, 4, 3, null, 5, 6], 'Test 72');
test(recoverFromPreorder("1-2--3--4-5-6--7-8"), [1, 2, 5, 3, 4], 'Test 73');
test(recoverFromPreorder("1-2--3--4--5-6--7-8-9-10-11-12-13-14-15-16-17-18-19-20-21-22-23-24-25-26-27-28-29-30"), [1, 2, null, 3, 4], 'Test 74');
test(recoverFromPreorder("1-2--3--4----5------6---------7----------8-9-10-11-12-13-14-15-16-17-18-19-20"), [1, 2, null, 3, 4], 'Test 75');
test(recoverFromPreorder("1-2--3-4--5--6-7---8----9"), [1, 2, 4, 3, null, 5, 6], 'Test 76');
test(recoverFromPreorder("1-2--3--4----5------6---------7----------8-9-10-11-12"), [1, 2, null, 3, 4], 'Test 77');
test(recoverFromPreorder("1-2--3--4----5-6----7-8--9"), [1, 2, null, 3, 4], 'Test 78');
test(recoverFromPreorder("1-2--3---4----5-6--7---8----9-10--11"), [1, 2, 6, 3, null, 7, null, 4, null, 8, null, 5, null, 9], 'Test 79');
test(recoverFromPreorder("1-2--3--4-5--6--7-8--9-10--11--12"), [1, 2, 5, 3, 4, 6, 7], 'Test 80');
test(recoverFromPreorder("1-2--3--4--5-6--7-8--9--10-11-12--13--14-15-16--17-18--19-20"), [1, 2, null, 3, 4], 'Test 81');
test(recoverFromPreorder("1-2--3--4--5--6--7--8--9--10--11--12--13--14--15--16--17--18--19--20"), [1, 2, null, 3, 4], 'Test 82');
test(recoverFromPreorder("1-2--3--4--5--6-7-8--9-10--11--12-13--14"), [1, 2, null, 3, 4], 'Test 83');
test(recoverFromPreorder("1-2--3--4--5--6--7-8--9--10"), [1, 2, null, 3, 4], 'Test 84');
test(recoverFromPreorder("1-2--3----4-5-6--7----8-9----10--11----12"), [1, 2, null, 3], 'Test 85');
test(recoverFromPreorder("1-2--3--4--5--6--7--8-9--10--11--12"), [1, 2, null, 3, 4], 'Test 86');
test(recoverFromPreorder("1-2--3---4----5------6---------7"), [1, 2, null, 3, null, 4, null, 5], 'Test 87');
test(recoverFromPreorder("1-2--3--4--5-6----7------8"), [1, 2, null, 3, 4], 'Test 88');
test(recoverFromPreorder("10-20--30---40----50-60--70-80"), [10, 20, 60, 30, null, 70, null, 40, null, null, null, 50], 'Test 89');
test(recoverFromPreorder("1-2--3---4----5--6-7---8-9--10-11--12-13--14-15--16-17--18--19--20--21--22"), [1, 2, 7, 3, 6, null, null, 4, null, null, null, 5], 'Test 90');
test(recoverFromPreorder("1-2--3--4--5-6--7--8-9--10-11--12-13"), [1, 2, null, 3, 4], 'Test 91');
test(recoverFromPreorder("1-2--3--4-5--6--7-8--9-10--11--12-13--14-15--16-17--18"), [1, 2, 5, 3, 4, 6, 7], 'Test 92');
test(recoverFromPreorder("1-2--3--4--5-6--7--8--9"), [1, 2, null, 3, 4], 'Test 93');
test(recoverFromPreorder("1-2--3---4----5------6-7--8---9"), [1, 2, null, 3, null, 4, null, 5], 'Test 94');
test(recoverFromPreorder("1-2--3--4-5-6-7-8-9-10-11-12"), [1, 2, 5, 3, 4], 'Test 95');
test(recoverFromPreorder("1-2--3---4----5-----6------7-------8--------9---------10----------11-----------12------------13"), [1, 2, null, 3, null, 4, null, 5, null, 6, null, 7, null, 8, null, 9, null, 10, null, 11, null, 12, null, 13], 'Test 96');
test(recoverFromPreorder("1-2--3----4-----5------6-------7--------8"), [1, 2, null, 3], 'Test 97');
test(recoverFromPreorder("1-2--3--4--5--6--7--8--9--10--11--12--13"), [1, 2, null, 3, 4], 'Test 98');
test(recoverFromPreorder("1-2--3--4-5--6--7--8--9--10--11--12"), [1, 2, 5, 3, 4, 6, 7], 'Test 99');
test(recoverFromPreorder("1-2--3--4-5--6--7--8--9--10--11--12--13--14--15--16--17--18--19--20--21--22--23"), [1, 2, 5, 3, 4, 6, 7], 'Test 100');
test(recoverFromPreorder("1-2--3--4--5--6--7-8--9--10-11-12--13--14-15-16--17-18--19-20-21-22-23-24-25-26-27-28-29-30"), [1, 2, null, 3, 4], 'Test 101');
test(recoverFromPreorder("1-2--3-4--5---6----7--8--9--10--11--12"), [1, 2, 4, 3, null, 5, 8, null, null, 6, null, null, null, 7], 'Test 102');
test(recoverFromPreorder("1-2--3--4--5---6----7"), [1, 2, null, 3, 4], 'Test 103');
test(recoverFromPreorder("1-2--3----4-----5------6-------7--------8---------9"), [1, 2, null, 3], 'Test 104');
test(recoverFromPreorder("1-2--3----4----5--6--7-8-9-10-11-12-13--14----15--16-17--18----19--20-21"), [1, 2, null, 3], 'Test 105');
test(recoverFromPreorder("1-2--3--4-5--6--7-8-9-10-11-12"), [1, 2, 5, 3, 4, 6, 7], 'Test 106');
test(recoverFromPreorder("1-2--3--4---5----6-----7------8"), [1, 2, null, 3, 4, null, null, 5, null, 6, null, 7, null, 8], 'Test 107');
test(recoverFromPreorder("1-2--3---4-5--6----7-8"), [1, 2, 5, 3, null, 6, null, 4], 'Test 108');
test(recoverFromPreorder("1-2--3--4-5-6--7-8--9-10"), [1, 2, 5, 3, 4], 'Test 109');
test(recoverFromPreorder("1-2--3---4----5-----6--7---8----9-10--11--12--13"), [1, 2, 10, 3, 7, 11, 12, 4, null, 8, null, null, null, null, null, 5, null, 9, null, 6], 'Test 110');
test(recoverFromPreorder("1-2--3--4---5-6--7---8----9-10--11"), [1, 2, 6, 3, 4, 7, null, null, null, 5, null, 8, null, null, null, 9], 'Test 111');
test(recoverFromPreorder("1-2--3--4-5--6--7-8--9-10--11--12--13--14"), [1, 2, 5, 3, 4, 6, 7], 'Test 112');
test(recoverFromPreorder("1-2--3----4-----5------6-------7--------8---------9----------10"), [1, 2, null, 3], 'Test 113');
test(recoverFromPreorder("1-2--3---4----5-----6------7-------8--------9---------10"), [1, 2, null, 3, null, 4, null, 5, null, 6, null, 7, null, 8, null, 9, null, 10], 'Test 114');
test(recoverFromPreorder("1-2--3---4----5-6--7---8-9--10-11--12-13--14-15--16-17--18--19--20"), [1, 2, 6, 3, null, 7, null, 4, null, 8, null, 5], 'Test 115');
test(recoverFromPreorder("1-2--3--4-5--6-7--8-9--10"), [1, 2, 5, 3, 4, 6], 'Test 116');
test(recoverFromPreorder("1-2--3----4----5--6--7-8-9-10-11-12-13--14----15--16-17--18----19--20-21--22----23"), [1, 2, null, 3], 'Test 117');
test(recoverFromPreorder("1-2--3-4--5--6-7-8--9---10"), [1, 2, 4, 3, null, 5, 6], 'Test 118');
test(recoverFromPreorder("1-2--3----4----5--6--7-8-9-10-11-12-13--14----15--16-17--18----19"), [1, 2, null, 3], 'Test 119');
test(recoverFromPreorder("1-2--3---4----5-6--7---8----9-10"), [1, 2, 6, 3, null, 7, null, 4, null, 8, null, 5, null, 9], 'Test 120');
test(recoverFromPreorder("1-2--3--4-5--6--7-8--9-10--11--12-13--14-15--16-17--18--19--20--21"), [1, 2, 5, 3, 4, 6, 7], 'Test 121');
test(recoverFromPreorder("1-2--3---4----5-----6------7-------8--------9"), [1, 2, null, 3, null, 4, null, 5, null, 6, null, 7, null, 8, null, 9], 'Test 122');
test(recoverFromPreorder("1-2--3--4--5--6--7--8--9--10--11--12--13--14--15--16--17--18--19--20--21--22"), [1, 2, null, 3, 4], 'Test 123');
test(recoverFromPreorder("1-2--3--4-5--6--7--8-9-10-11-12-13-14"), [1, 2, 5, 3, 4, 6, 7], 'Test 124');
test(recoverFromPreorder("1-2--3-4--5---6----7-8--9----10-11"), [1, 2, 4, 3, null, 5, null, null, null, 6, null, 7], 'Test 125');
test(recoverFromPreorder("1-2--3--4----5-----6------7-------8"), [1, 2, null, 3, 4], 'Test 126');
test(recoverFromPreorder("1-2--3--4-5--6-7--8--9-10-11--12--13"), [1, 2, 5, 3, 4, 6], 'Test 127');
test(recoverFromPreorder("1-2--3--4----5------6---------7----------8-9-10-11-12-13-14-15-16-17-18-19-20-21-22-23-24-25-26-27-28-29-30"), [1, 2, null, 3, 4], 'Test 128');
test(recoverFromPreorder("1-2--3---4----5------6-------7"), [1, 2, null, 3, null, 4, null, 5], 'Test 129');
test(recoverFromPreorder("1-2--3---4----5"), [1, 2, null, 3, null, 4, null, 5], 'Test 130');
test(recoverFromPreorder("1-2--3-4--5-6--7-8-9-10-11"), [1, 2, 4, 3, null, 5], 'Test 131');
test(recoverFromPreorder("1-2--3--4--5--6--7--8--9--10--11--12--13-14--15"), [1, 2, null, 3, 4], 'Test 132');
test(recoverFromPreorder("1-2--3---4----5-----6------7-------8--------9---------10----------11"), [1, 2, null, 3, null, 4, null, 5, null, 6, null, 7, null, 8, null, 9, null, 10, null, 11], 'Test 133');
test(recoverFromPreorder("1-2--3----4----5--6--7-8-9-10-11-12-13--14----15--16-17--18----19--20"), [1, 2, null, 3], 'Test 134');
test(recoverFromPreorder("1-2--3---4----5-----6------7-------8--------9---------10----------11-----------12------------13-------------14--------------15"), [1, 2, null, 3, null, 4, null, 5, null, 6, null, 7, null, 8, null, 9, null, 10, null, 11, null, 12, null, 13, null, 14, null, 15], 'Test 135');
test(recoverFromPreorder("1-2--3--4-5-6--7-8--9--10-11"), [1, 2, 5, 3, 4], 'Test 136');
test(recoverFromPreorder("1-2--3---4----5--6--7----8-9----10"), [1, 2, null, 3, 6, 4, null, null, null, 5], 'Test 137');
test(recoverFromPreorder("1-2--3--4--5-6--7--8-9--10--11"), [1, 2, null, 3, 4], 'Test 138');
test(recoverFromPreorder("1-2--3---4----5-6--7---8-9--10"), [1, 2, 6, 3, null, 7, null, 4, null, 8, null, 5], 'Test 139');
test(recoverFromPreorder("1-2--3----4----5--6--7-8-9-10-11-12-13"), [1, 2, null, 3], 'Test 140');
test(recoverFromPreorder("1-2--3--4-5-6--7-8-9-10--11"), [1, 2, 5, 3, 4], 'Test 141');
test(recoverFromPreorder("1-2--3--4--5--6--7--8--9"), [1, 2, null, 3, 4], 'Test 142');
test(recoverFromPreorder("1-2--3----4----5------6--------7--------8------9----10--11"), [1, 2, null, 3], 'Test 143');
test(recoverFromPreorder("1-2--3--4-5--6---7----8-9-10-11-12-13"), [1, 2, 5, 3, 4, 6, null, null, null, null, null, 7, null, 8], 'Test 144');
test(recoverFromPreorder("1-2--3--4--5--6--7--8--9--10--11--12-13--14--15"), [1, 2, null, 3, 4], 'Test 145');
test(recoverFromPreorder("1-2--3---4----5-6--7---8-9--10-11--12-13--14"), [1, 2, 6, 3, null, 7, null, 4, null, 8, null, 5], 'Test 146');
test(recoverFromPreorder("1-2--3---4----5--6--7---8----9"), [1, 2, null, 3, 6, 4, null, null, null, 5], 'Test 147');
test(recoverFromPreorder("1-2--3--4-5--6--7-8--9-10--11--12--13--14--15--16"), [1, 2, 5, 3, 4, 6, 7], 'Test 148');
test(recoverFromPreorder("1-2--3---4----5-6--7---8----9-10--11--12-13-14-15"), [1, 2, 6, 3, null, 7, null, 4, null, 8, null, 5, null, 9], 'Test 149');
test(recoverFromPreorder("1-2--3--4----5------6-7--8----9"), [1, 2, null, 3, 4], 'Test 150');
test(recoverFromPreorder("1-2--3---4----5------6-7"), [1, 2, null, 3, null, 4, null, 5], 'Test 151');
test(recoverFromPreorder("1-2--3---4----5-----6------7-------8--------9---------10----------11-----------12"), [1, 2, null, 3, null, 4, null, 5, null, 6, null, 7, null, 8, null, 9, null, 10, null, 11, null, 12], 'Test 152');
test(recoverFromPreorder("1-2--3--4-5--6--7-8--9-10--11--12-13--14-15--16-17--18--19--20--21--22--23"), [1, 2, 5, 3, 4, 6, 7], 'Test 153');
test(recoverFromPreorder("1-2--3--4-5-6--7----8----9"), [1, 2, 5, 3, 4], 'Test 154');
test(recoverFromPreorder("1-2--3--4-5--6--7--8--9--10--11--12--13--14--15--16--17--18--19"), [1, 2, 5, 3, 4, 6, 7], 'Test 155');
test(recoverFromPreorder("1-2--3--4--5--6--7--8--9--10--11--12--13--14--15--16--17--18--19--20--21--22--23"), [1, 2, null, 3, 4], 'Test 156');
test(recoverFromPreorder("1-2--3--4----5----6--7"), [1, 2, null, 3, 4], 'Test 157');
test(recoverFromPreorder("1-2--3--4-5--6--7-8--9-10"), [1, 2, 5, 3, 4, 6, 7], 'Test 158');
test(recoverFromPreorder("1-2--3----4----5----6----7----8----9"), [1, 2, null, 3], 'Test 159');
test(recoverFromPreorder("1-2--3--4--5--6--7-8----9----10"), [1, 2, null, 3, 4], 'Test 160');
test(recoverFromPreorder("1-2--3-4--5-6--7-8--9-10-11-12-13-14-15-16"), [1, 2, 4, 3, null, 5], 'Test 161');
test(recoverFromPreorder("1-2--3---4----5-----6------7"), [1, 2, null, 3, null, 4, null, 5, null, 6, null, 7], 'Test 162');
test(recoverFromPreorder("1-2--3--4--5----6--7----8"), [1, 2, null, 3, 4], 'Test 163');
test(recoverFromPreorder("1-2--3--4--5--6--7--8--9--10--11--12--13--14--15--16--17"), [1, 2, null, 3, 4], 'Test 164');
test(recoverFromPreorder("1-2--3-4--5--6--7--8-9--10--11--12--13--14--15--16--17--18--19--20--21"), [1, 2, 4, 3, null, 5, 6], 'Test 165');
test(recoverFromPreorder("1-2--3--4----5------6----7---8-9----10--11"), [1, 2, null, 3, 4], 'Test 166');
test(recoverFromPreorder("1-2--3--4--5-6--7-8-9-10-11-12-13-14-15-16-17-18-19-20-21-22-23-24"), [1, 2, null, 3, 4], 'Test 167');
test(recoverFromPreorder("1-2--3--4----5----6------7------8----9"), [1, 2, null, 3, 4], 'Test 168');
test(recoverFromPreorder("1-2--3--4-5--6--7--8-9--10-11-12-13-14"), [1, 2, 5, 3, 4, 6, 7], 'Test 169');
test(recoverFromPreorder("1-2--3--4--5--6--7--8--9--10--11--12--13--14-15"), [1, 2, null, 3, 4], 'Test 170');
test(recoverFromPreorder("1-2--3--4--5--6--7--8--9--10--11--12--13--14--15--16--17--18--19--20--21--22--23--24--25"), [1, 2, null, 3, 4], 'Test 171');
test(recoverFromPreorder("1-2--3--4--5--6--7--8--9-10-11-12-13-14-15-16"), [1, 2, null, 3, 4], 'Test 172');
test(recoverFromPreorder("1-2--3---4----5------6---------7----------8"), [1, 2, null, 3, null, 4, null, 5], 'Test 173');
test(recoverFromPreorder("1-2--3---4----5--6---7----8"), [1, 2, null, 3, 6, 4, null, 7, null, 5, null, 8], 'Test 174');
test(recoverFromPreorder("1-2--3--4---5----6-7--8-9-10-11-12"), [1, 2, 7, 3, 4, 8, null, null, null, 5, null, null, null, 6], 'Test 175');
test(recoverFromPreorder("1-2--3--4----5------6---------7----------8-9-10-11-12-13-14-15-16-17-18-19-20-21-22-23-24"), [1, 2, null, 3, 4], 'Test 176');
test(recoverFromPreorder("1-2--3--4-5-6--7---8----9"), [1, 2, 5, 3, 4], 'Test 177');
test(recoverFromPreorder("1-2--3----4-----5------6"), [1, 2, null, 3], 'Test 178');
test(recoverFromPreorder("1-2--3--4-5--6--7--8-9--10-11-12-13-14-15-16-17"), [1, 2, 5, 3, 4, 6, 7], 'Test 179');
test(recoverFromPreorder("1-2--3----4------5--------6----------7"), [1, 2, null, 3], 'Test 180');
test(recoverFromPreorder("1-2--3--4-5--6--7-8-9-10-11"), [1, 2, 5, 3, 4, 6, 7], 'Test 181');
test(recoverFromPreorder("1-2--3--4----5------6---------7----------8-9-10-11-12-13-14"), [1, 2, null, 3, 4], 'Test 182');
test(recoverFromPreorder("1-2--3---4----5-6--7---8"), [1, 2, 6, 3, null, 7, null, 4, null, 8, null, 5], 'Test 183');
test(recoverFromPreorder("1-2--3--4--5--6--7--8--9--10--11--12--13--14--15--16--17--18"), [1, 2, null, 3, 4], 'Test 184');
test(recoverFromPreorder("1-2--3-4--5--6--7--8-9--10-11-12-13-14-15-16-17-18-19-20"), [1, 2, 4, 3, null, 5, 6], 'Test 185');
test(recoverFromPreorder("1-2--3--4--5--6--7-8--9--10--11--12--13--14--15--16--17--18--19"), [1, 2, null, 3, 4], 'Test 186');
test(recoverFromPreorder("1-2--3--4-5--6--7-8--9-10--11--12-13--14-15--16-17--18--19"), [1, 2, 5, 3, 4, 6, 7], 'Test 187');
test(recoverFromPreorder("1-2--3--4--5--6--7--8--9--10--11--12--13--14--15--16--17--18--19--20--21--22--23--24"), [1, 2, null, 3, 4], 'Test 188');

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
