# 1784. Check if Binary String Has at Most One Segment of Ones

**Difficulty:** Easy
**Tags:** String
**Link:** https://leetcode.com/problems/check-if-binary-string-has-at-most-one-segment-of-ones/

## Description

Given a binary string `s` **​​​​​without leading zeros**, return `true`​​​ *if *`s`* contains **at most one contiguous segment of ones***. Otherwise, return `false`.

**Example 1:**

```
**Input:** s = "1001"
**Output:** false
**Explanation: **The string has two segments of size 1.
```

**Example 2:**

```
**Input:** s = "110"
**Output:** true
```

**Constraints:**

	- `1 <= s.length <= 100`
	- `s[i]`​​​​ is either `'0'` or `'1'`.
	- `s[0]` is `'1'`.

## Hints

1. It's guaranteed to have at least one segment
2. The string size is small so you can count all segments of ones with no that have no adjacent ones.

## Test Cases

```
"1001"
---
"110"
---
```
