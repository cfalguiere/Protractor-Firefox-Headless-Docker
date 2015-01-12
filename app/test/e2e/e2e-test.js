'use strict';
describe('Main view End-2-End', function() {
    var brickTable

    beforeEach(function() {
      browser.get("http://cfalguiere.github.io/Presentations/2014/DemoBrickInventory/");

      brickTable = element.all(by.repeater('brick in bricksList'))
    })

    describe('When Main view appears', function() {

      it('should show all the bricks', function() {

        expect(brickTable.count()).toBe(76)

      })
    });

});
