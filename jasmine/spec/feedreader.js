/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    // RSS Feeds test suite
    describe('RSS Feeds', function() {
        // allFeeds has been defined and is not empty
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // allFeeds object has a URL defined and URL is not empty
        it('URLs are not empty', function() {
            for (var i = 0, len = allFeeds.length; i < len; i++) {
                expect(allFeeds[i].url).not.toBeUndefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            }
         });

        // allFeeds has a name defined and is not empty
        it('Names are not empty', function() {
            for (var i = 0, len = allFeeds.length; i < len; i++) {
                expect(allFeeds[i].name).not.toBeUndefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
    });

    // The menu test suite
    describe("The menu", function() {
        var body,
            menu;
        beforeEach(function() {
            body = $('body');
            menu = $('.menu-icon-link');
        });

        // menu element is hidden by default
        it('is hidden by default', function() {
            expect(body.hasClass('menu-hidden')).toBe(true);
        });

        // menu changes visibility when the menu icon is clicked
        it('changes visibility when the menu icon is clicked', function() {
            // Expect the menu display when the icon is clicked
            menu.click();
            expect(body.hasClass('menu-hidden')).toBe(false);
            // Expect the menu hide when the icon is clicked again
            menu.click();
            expect(body.hasClass('menu-hidden')).toBe(true);
        });
    });

    // Initial Entries test suite
    describe('Initial Entries', function() {
        // asynchronous test
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        // at least a single .entry element within the .feed container
        it('at least a single .entry element', function(done) {
            expect($('.entry').length).not.toEqual(0);
            done()
        });
    });

    // New Feed Selection test suite
    describe('New Feed Selection', function() {
        var oldEntry,
            newEntry;
        oldEntry = $('.entry');

        // asynchronous test
        beforeEach(function(done) {
            loadFeed(0, function() {
                newEntry = $('.entry');
                done();
            });
        });

        // the feed content actually changes
        it('content changes', function(done) {
            console.log(newEntry);
            console.log(oldEntry);
            expect((oldEntry == newEntry)).toBe(false);
            done();
        });
    });
}());
