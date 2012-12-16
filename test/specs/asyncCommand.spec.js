define(['asyncCommand', 'jquery'], function (ko, $) {
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


    //see http://blogs.msdn.com/b/ie/archive/2011/09/11/asynchronous-programming-in-javascript-with-promises.aspx
    //for more info on promises
    describe('commands implementing deferreds/promises', function() {
        var subjectUnderTest = ko.asyncCommand({
            execute: function() {
                var dfd = $.Deferred();
                return dfd.promise();
            }
        });

        it('should cater for commands that implement "promises"', function() {
            var promise = subjectUnderTest.execute();
            
            expect(promise.done).toBeDefined();
        });
    });
});