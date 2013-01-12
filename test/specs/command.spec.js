define(['command'], function (ko) {
    describe('async commands', function () {
        var subjectUnderTest = ko.asyncCommand({
            execute: function() {
                subjectUnderTest.executed = true;
            }
        });

        it('should transparently execute commands (without having to call execute)', function () {
            //invoke async command without having to call execute
            //i.e. as if it was any other function call.
            subjectUnderTest();

            expect(subjectUnderTest.executed).toBe(true);
        });
    });
});