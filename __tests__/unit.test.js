// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

test('check valid phone number', () => {
    expect(functions.isPhoneNumber("123-456-7890")).toBe(true);
});

test('check valid phone number', () => {
    expect(functions.isPhoneNumber("510-593-1234")).toBe(true);
});

test('check non-valid phone number', () => {
    expect(functions.isPhoneNumber("1234567890")).toBe(false);
});

test('check non-valid phone number', () => {
    expect(functions.isPhoneNumber("510593")).toBe(false);
});

//-----------------------------------------------------------------------

test('check valid email', () => {
    expect(functions.isEmail("some@thing.com")).toBe(true);
});

test('check valid email', () => {
    expect(functions.isEmail("alw002@ucsd.edu")).toBe(true);
});

test('check non-valid email', () => {
    expect(functions.isEmail("randomtext")).toBe(false);
});

test('check non-valid email', () => {
    expect(functions.isEmail("123321")).toBe(false);
});

//----------------------------------------------------------------------

test('check strong password', () => {
    expect(functions.isStrongPassword("abcd")).toBe(true);
});

test('check strong password', () => {
    expect(functions.isStrongPassword("abcd123")).toBe(true);
});

test('check non-strong password', () => {
    expect(functions.isStrongPassword("abc")).toBe(false);
});

test('check non-strong password', () => {
    expect(functions.isStrongPassword("123")).toBe(false);
});

//----------------------------------------------------------------------

test('check valid date', () => {
    expect(functions.isDate("11/15/2022")).toBe(true);
});

test('check valid date', () => {
    expect(functions.isDate("15/50/1953")).toBe(true);
});

test('check non-valid date', () => {
    expect(functions.isDate("11-15-2022")).toBe(false);
});

test('check non-valid date', () => {
    expect(functions.isDate("11152022")).toBe(false);
});

//---------------------------------------------------------------------

test('check valid hex color', () => {
    expect(functions.isHexColor("#CD5C5C")).toBe(true);
});

test('check valid hex color', () => {
    expect(functions.isHexColor("F08080")).toBe(true);
});

test('check non-valid hex color', () => {
    expect(functions.isHexColor("F080800")).toBe(false);
});

test('check non-valid hex color', () => {
    expect(functions.isHexColor("#F808")).toBe(false);
});