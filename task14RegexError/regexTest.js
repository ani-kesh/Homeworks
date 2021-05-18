// Exercise 1: Matching Characters
// Task	Text
// Match	abcdefg	To be completed
// Match	abcde	To be completed
// Match	abc

let reg1 = new RegExp("abc");

// Exercise 1½: Matching Digits
// Task	Text
// Match	abc123xyz	Success
// Match	define "123"	Success
// Match	var g = 123;

let numb = new RegExp("d");

// Exercise 2: Matching With Wildcards
// Task	Text
// Match	cat.	Success
// Match	896.	Success
// Match	?=+.	Success
// Skip	abc1

let reg3 = new RegExp(".");

// Exercise 3: Matching Characters
// Task	Text
// Match	can	To be completed
// Match	man	To be completed
// Match	fan	To be completed
// Skip	dan	To be completed
// Skip	ran	To be completed
// Skip	pan

let reg4 = new RegExp("[cmf]");

// Exercise 4: Excluding Characters
// Task	Text
// Match	hog	To be completed
// Match	dog	To be completed
// Skip	bog

let reg5 = new RegExp("[^bog]");

// Exercise 5: Matching Character Ranges
// Task	Text
// Match	Ana	To be completed
// Match	Bob	To be completed
// Match	Cpc	To be completed
// Skip	aax	To be completed
// Skip	bby	To be completed
// Skip	ccz

let reg6 = new RegExp("[ABC]");

// Exercise 6: Matching Repeated Characters
// Task	Text
// Match	wazzzzzup	Success
// Match	wazzzup	Success
// Skip	wazup

let reg7 = new RegExp("z{2}");

// Exercise 7: Matching Repeated Characters
// Task	Text
// Match	aaaabcc	Success
// Match	aabbbbc	Success
// Match	aacc	Success
// Skip	a

let reg8 = new RegExp("aa+");

// Exercise 8: Matching Optional Characters
// Task	Text
// Match	1 file found?	Success
// Match	2 files found?	Success
// Match	24 files found?	Success
// Skip	No files found.

let reg9 = new RegExp("?");

// Exercise 9: Matching Whitespaces
// Task	Text
// Match	1.   abc	Success
// Match	2.	abc	Success
// Match	3.           abc	Success
// Skip	4.abc

let reg10 = new RegExp("s");

// Exercise 10: Matching Lines
// Task	Text
// Match	Mission: successful	Success
// Skip	Last Mission: unsuccessful	To be completed
// Skip	Next Mission: successful upon capture of target

let reg10 = new RegExp("^M");

// Exercise 11: Matching Groups
// Task	Text	Capture Groups
// Capture	file_record_transcript.pdf	file_record_transcript	Failed
// Capture	file_07241999.pdf	file_07241999	Failed
// Skip	testfile_fake.pdf.tmp

let reg10 = new RegExp("^(file.+).pdf$");

// Exercise 12: Matching Nested Groups
// Task	Text	Capture Groups
// Capture	Jan 1987	Jan 1987 1987	To be completed
// Capture	May 1969	May 1969 1969	To be completed
// Capture	Aug 2011

let reg11 = new RegExp("(w+ (d+))");

// Exercise 13: Matching Nested Groups
// Task	Text	Capture Groups
// Capture	1280x720	1280 720	Success
// Capture	1920x1600	1920 1600	Success
// Capture	1024x768

let reg12 = new RegExp("(d+)x(d{3,4})");

// Exercise 14: Matching Conditional Text
// Task	Text
// Match	I love cats	Success
// Match	I love dogs	Success
// Skip	I love logs	To be completed
// Skip	I love cogs

let reg13 = new RegExp("[td]");
