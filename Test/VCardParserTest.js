
test( "test fromVCard return correct object", function() {
    var expected = TestData.vcard1Obj;
    var actual = VCardParser.fromVCard(TestData.vcard1Str);
    equal(JSON.toString(actual), JSON.toString(expected));
});

test( "test toVCard return correct string", function() {
    var expected = TestData.vcard1Str;
    var actual = VCardParser.toVCard(TestData.vcard1Obj);
    equal(actual, expected);
});

test( "test fromVCard Apple return correct object", function() {
    var expected = TestData.vcardAppleObj;
    var actual = VCardParser.fromVCard(TestData.vcardAppleStr);
    equal(JSON.toString(actual), JSON.toString(expected));
});

test( "test toVCard Apple return correct string", function() {
    var expected = TestData.vcardAppleStr;
    var actual = VCardParser.toVCard(TestData.vcardAppleObj);
    equal(actual, expected);
});

