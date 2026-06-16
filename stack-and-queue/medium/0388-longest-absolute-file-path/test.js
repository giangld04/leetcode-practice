// Test: 388. Longest Absolute File Path
// 53 test cases from LeetCodeDataset
// Run: node test.js

const { lengthLongestPath } = require("./solution");

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

console.log("\n388. Longest Absolute File Path\n");

test(lengthLongestPath("dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext"), 20, 'Test 1');
test(lengthLongestPath("dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext"), 32, 'Test 2');
test(lengthLongestPath("a"), 0, 'Test 3');
test(lengthLongestPath("file1.txt\nfile2.txt\nlongfile.txt"), 12, 'Test 4');
test(lengthLongestPath("data\n\ttemp\n\t\ttempfile1.csv\n\t\ttempfile2.csv\n\tlogs\n\t\terror.log\n\t\tInfinityo.log\n\t\tdebug.log"), 23, 'Test 5');
test(lengthLongestPath("project\n\tassets\n\t\timages\n\t\t\timage1.png\n\t\t\timage2.png\n\t\t\tvideos\n\t\t\tvideo1.mp4\n\t\t\tvideo2.mp4\n\t\tfonts\n\t\t\tfont1.ttf"), 32, 'Test 6');
test(lengthLongestPath("data\n\tdataset1\n\t\tfile1.csv\n\t\tfile2.csv\n\t\tdataset2\n\t\tfile3.csv\n\t\tdataset3\n\t\tfile4.csv"), 23, 'Test 7');
test(lengthLongestPath("documents\n\treports\n\t\tmonthly\n\t\t\tjanuary.pdf\n\t\t\tfebruary.pdf\n\t\tannual\n\t\t\treport.pdf"), 38, 'Test 8');
test(lengthLongestPath("project\n\tsrc\n\t\tmain.py\n\t\tutils\n\t\t\thelper.py\n\t\ttests\n\t\t\ttest_main.py\n\tREADME.md"), 30, 'Test 9');
test(lengthLongestPath("documents\n\treports\n\t\tq4_sales_report.pdf\n\t\tq4_marketing_report.pdf\n\t\tfinancials\n\t\t\tq4_financials.xlsx"), 47, 'Test 10');
test(lengthLongestPath("logs\n\tserver1\n\t\taccess.log\n\t\terror.log\n\t\tserver2\n\t\t\taccess.log\n\t\t\terror.log"), 31, 'Test 11');
test(lengthLongestPath("home\n\tuser\n\t\tdesktop\n\t\t\tphoto1.jpg\n\t\t\tphoto2.jpg\n\t\tdownloads\n\t\t\tfile.zip"), 28, 'Test 12');
test(lengthLongestPath("documents\n	work\n		projects\n			project1\n				files\n					file1.txt\n					file2.txt\n					file3.txt\n					file4.txt\n					file5.txt\n					file6.txt\n					file7.txt\n					file8.txt\n					file9.txt\n					file10.txt\n					file11.txt\n					file12.txt\n					file13.txt\n					file14.txt\n					file15.txt\n					file16.txt\n					file17.txt\n					file18.txt\n					file19.txt\n					file20.txt"), 49, 'Test 13');
test(lengthLongestPath("main\n\tproject\n\t\tcode\n\t\t\tfile1.py\n\t\t\tfile2.py\n\t\tdocs\n\t\t\tdocumentation.md\n\t\tassets\n\t\t\timage.png"), 34, 'Test 14');
test(lengthLongestPath("nested\n\tdir1\n\t\tdir2\n\t\t\tdir3\n\t\t\t\tdir4\n\t\t\t\t\tdir5\n\t\t\t\t\t\t\tdir6\n\t\t\t\t\t\t\t\t\tfile.txt\n\t\t\t\t\t\t\tdir7\n\t\t\t\t\t\t\t\t\tfile2.txt"), 51, 'Test 15');
test(lengthLongestPath("home\n	user\n		projects\n			project1\n				code.py\n			project2\n				README.md\n		pictures\n			vacation\n				beach.jpg\n				city.jpg"), 37, 'Test 16');
test(lengthLongestPath("root\n\tdir1\n\t\tdir2\n\t\t\tdir3\n\t\t\t\tfile1.txt"), 29, 'Test 17');
test(lengthLongestPath("data\n\tset1\n\t\ttrain\n\t\t\timage1.jpg\n\t\t\timage2.jpg\n\t\ttest\n\t\t\timage3.jpg\n\tset2\n\t\ttrain\n\t\t\timage4.jpg"), 26, 'Test 18');
test(lengthLongestPath("project\n\tsrc\n\t\tmain\n\t\t\tfile1.java\n\t\t\tfile2.java\n\t\ttests\n\t\t\ttest1.java"), 28, 'Test 19');
test(lengthLongestPath("project\n\tsrc\n\t\tmodule1\n\t\t\tfile1.py\n\t\t\tfile2.py\n\t\tmodule2\n\t\t\tfile3.py\n\t\t\tfile4.py\n\t\t\t\tsubmodule\n\t\t\t\t\tfile5.py"), 38, 'Test 20');
test(lengthLongestPath("user\n	files\n		work\n			presentation.pptx\n			research\n				article.pdf\n				data.xlsx\n		personal\n			photos\n				family\n					wedding.jpg\n					vacation\n					beach.png"), 45, 'Test 21');
test(lengthLongestPath("home\n\tuser\n\t\tdocuments\n\t\t\treports\n\t\t\t\treport1.pdf\n\t\t\t\treport2.pdf\n\t\tdownloads\n\t\t\tvideo.mp4\n\t\t\taudio.mp3"), 39, 'Test 22');
test(lengthLongestPath("home\n\tuser1\n\t\tDownloads\n\t\t\tvideos\n\t\t\tvideo1.mp4\n\t\t\tpictures\n\t\t\tpicture1.jpg\n\tuser2\n\t\tMusic\n\t\t\tsong1.mp3"), 33, 'Test 23');
test(lengthLongestPath("build\n\tsrc\n\t\tlib\n\t\t\tmodule1.py\n\t\t\tmodule2.py\n\t\t\t\tsubmodule1.py\n\t\t\t\tsubmodule2.py\n\t\t\t\t\tfunction1.py\n\t\t\t\t\tfunction2.py"), 27, 'Test 24');
test(lengthLongestPath("webapp\n\tstatic\n\t\tcss\n\t\t\tstyles.css\n\t\tjs\n\t\t\tapp.js\n\t\t\t\tcomponent1.js\n\t\t\t\tcomponent2.js\n\t\t\t\t\t\tsubcomponent1.js\n\ttemplates\n\t\tindex.html"), 33, 'Test 25');
test(lengthLongestPath("music\n\tartist1\n\t\tsong1.mp3\n\t\tsong2.mp3\n\tartist2\n\t\tsong3.mp3\n\t\tsong4.mp3\n\t\tsong5.mp3\n\tartist3\n\t\tsong6.mp3"), 23, 'Test 26');
test(lengthLongestPath("media\n\tvideo\n\t\tmovie1.mp4\n\t\tmovie2.mp4\n\t\tseries\n\t\t\tseason1\n\t\t\t\tepisode1.mp4"), 39, 'Test 27');
test(lengthLongestPath("project\n\tmodules\n\t\tmodule1\n\t\t\tsrc\n\t\t\t\tmain.py\n\t\t\t\tutils.py\n\t\t\ttests\n\t\t\t\ttest_main.py\n\t\t\t\ttest_utils.py"), 43, 'Test 28');
test(lengthLongestPath("system\n\tconfig\n\t\tsettings.conf\n\t\tusers.conf\n\t\tpermissions.conf\n\ttemp\n\t\ttempfile1.tmp\n\t\ttempfile2.tmp\n\t\ttempfile3.tmp"), 30, 'Test 29');
test(lengthLongestPath("root\n	folderA\n		subfolderA1\n			fileA1.txt\n			subsubfolderA1\n				fileA2.txt\n		subfolderA2\n			fileA3.txt\n	folderB\n		subfolderB1\n			subsubfolderB1\n				fileB1.txt\n		subfolderB2\n			fileB2.txt"), 50, 'Test 30');
test(lengthLongestPath("system\n\tbin\n\t\tcmd\n\t\t\tscript1.sh\n\t\t\tscript2.sh\n\t\tsbin\n\t\t\tprogram.exe"), 27, 'Test 31');
test(lengthLongestPath("logs\n\t2023\n\t\tjanuary\n\t\t\t1.log\n\t\t\t2.log\n\t\tfebruary\n\t\t\t3.log\n\t2022\n\t\tnovember\n\t\t\t4.log\n\t\tdecember\n\t\t\t5.log\n\t\t\t6.log\n\t\t\t\tsubfolder\n\t\t\t\t\t7.log"), 34, 'Test 32');
test(lengthLongestPath("logs\n	system\n		kernel.log\n		app\n			app1.log\n			app2.log\n		app3.log\n	error\n		critical.log\n		non_critical.log"), 27, 'Test 33');
test(lengthLongestPath("root\n\tdir1\n\t\tdir2\n\t\t\tdir3\n\t\t\t\tdir4\n\t\t\t\t\tdir5\n\t\t\t\t\t\tfile.txt"), 38, 'Test 34');
test(lengthLongestPath("app\n\tlib\n\t\tmodule1\n\t\t\tfile1.py\n\t\t\tfile2.py\n\t\tmodule2\n\t\t\tfile3.py"), 24, 'Test 35');
test(lengthLongestPath("archive\n\t2022\n\t\tjanuary\n\t\t\t\tfile1.txt\n\t\t\t\tfile2.txt\n\t\tfebruary\n\t\t\t\tfile3.txt\n\t\t\t\tfile4.txt\n\t\t2021\n\t\tnovember\n\t\t\t\tfile5.txt\t\t\t\tfile6.txt"), 44, 'Test 36');
test(lengthLongestPath("system\n	bin\n		app1\n			config.yaml\n			data.txt\n		app2\n			logs.txt\n	etc\n		config\n			network.conf\n			security.conf"), 31, 'Test 37');
test(lengthLongestPath("documents\n	reports\n		2021\n			q1\n				summary.pdf\n			q2\n				monthly.pdf\n				weekly.pdf"), 37, 'Test 38');
test(lengthLongestPath("home\n\tuser\n\t\tdocuments\n\t\t\treports\n\t\t\t\treport1.pdf\n\t\t\t\treport2.pdf\n\t\t\tmusic\n\t\t\t\tsong1.mp3\n\t\t\t\tsong2.mp3"), 39, 'Test 39');
test(lengthLongestPath("main\n\tlib\n\t\tcore\n\t\t\tmodule1.py\n\t\t\tmodule2.py\n\t\t\tmodule3.py\n\t\ttests\n\t\t\ttest_module1.py\n\t\t\ttest_module2.py"), 30, 'Test 40');
test(lengthLongestPath("media\n	music\n		rock\n			pop\n				love.mp3\n			indie\n				chill.wav\n		jazz\n			swing.flac\n	videos\n		movies\n			action\n				inception.mp4\n				drama\n				schindler.list.mkv"), 45, 'Test 41');
test(lengthLongestPath("root\n\tdirA\n\t\tdirB\n\t\t\tdirC\n\t\t\t\tdirD\n\t\t\t\t\tdirE\n\t\t\t\t\t\tfile.txt"), 38, 'Test 42');
test(lengthLongestPath("workspace\n\tprojectA\n\t\tREADME.md\n\t\tsrc\n\t\t\tmain.py\n\t\t\tutils.py\n\tprojectB\n\t\tsrc\n\t\t\tmain.py"), 31, 'Test 43');
test(lengthLongestPath("root\n	folder1\n		subfolder1\n			subsubfolder1\n				file1.txt\n		subfolder2\n			file2.txt"), 47, 'Test 44');
test(lengthLongestPath("config\n\tsettings\n\t\tenvironment\n\t\t\tproduction.conf\n\t\t\tdevelopment.conf\n\t\t\tstaging.conf\n\t\tdatabase\n\t\t\tdb.conf"), 44, 'Test 45');
test(lengthLongestPath("dir1\n\tdir2\n\t\tdir3\n\t\t\tfile1.txt\n\tdir4\n\t\tdir5\n\t\t\tdir6\n\t\t\t\tfile2.txt"), 29, 'Test 46');
test(lengthLongestPath("root\n\tdir1\n\t\tdir11\n\t\t\tdir111\n\t\t\t\tfile111.txt\n\t\tdir12\n\tdir2\n\t\tdir21\n\t\t\tdir211\n\t\t\t\tfile2111.txt"), 35, 'Test 47');
test(lengthLongestPath("archive\n	2019\n		january\n			report1.txt\n			report2.txt\n		february\n			report3.txt\n		march\n			report4.txt\n	2020\n		january\n			report5.txt\n		february\n			report6.txt"), 33, 'Test 48');
test(lengthLongestPath("home\n\tuser\n\t\tdocuments\n\t\t\twork\n\t\t\t\tproject1\n\t\t\t\t\t\treadme.md\n\t\t\t\tproject2\n\t\t\t\t\t\treadme.md"), 43, 'Test 49');
test(lengthLongestPath("documents\n\tbook\n\t\tchapter1\n\t\t\tsection1.1\n\t\t\t\t\tsection1.1.1\n\t\t\t\t\t\tfile1.txt\n\t\t\tsection1.2\n\t\tchapter2\n\t\t\tsection2.1"), 36, 'Test 50');
test(lengthLongestPath("root\n\tdata\n\t\tdata1.csv\n\t\tdata2.csv\n\t\tdata3.csv\n\tlogs\n\t\tlog1.txt\n\t\tlog2.txt\n\t\tlog3.txt"), 19, 'Test 51');
test(lengthLongestPath("config\n\tsettings1.json\n\tsettings2.json\n\tlogs\n\t\terror.log\n\t\tInfinityo.log\n\ttemp\n\t\ttempfile.tmp"), 24, 'Test 52');
test(lengthLongestPath("config\n\tsettings.ini\n\tlogs\n\t\terror.log\n\t\tInfinityo.log\n\t\tdebug.log\n\tbackups\n\t\t2023-01-01\n\t\t\tbackup1.zip\n\t\t2023-02-01\n\t\t\tbackup2.zip"), 37, 'Test 53');

console.log(`\nResult: ${passed}/${passed + failed} passed` + (failed ? ` (${failed} failed)` : " ✓") + "\n");
if (failed) process.exitCode = 1;

