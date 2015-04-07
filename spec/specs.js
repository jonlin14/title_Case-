describe("titleCase", function() {
    it("capitalizes the first letter of a word", function() {
        expect(titleCase("cat")).to.equal("Cat");
    });

    it("capitalizes the first letter of every word in a two word sentence", function() {
        expect(titleCase("cat hat")).to.equal("Cat Hat");
    });

    it("capitalizes the first letter of every word in a many word sentence", function() {
        expect(titleCase("A long, long time ago")).to.equal("A Long, Long Time Ago");
    });

    it("capitalizes the first letter of every word excluding and in a multiple word sentence", function() {
        expect(titleCase("hansel and gretel")).to.equal("Hansel and Gretel");
    });

    it("returns a title with every word capitalized excluding 'and'", function() {
        expect(titleCase("Hansel AND gretel")).to.equal("Hansel and Gretel");
    });

});
