describe("titleCase", function() {
    it("capitalizes the first letter of a word", function() {
        expect(titleCase("cat")).to.equal("Cat");
    });

    it("capitalizes the first letter of every word in a two word sentence", function() {
        expect(titleCase("cat hat")).to.equal("Cat Hat");
    });

});
