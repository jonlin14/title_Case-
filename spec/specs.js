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
        expect(titleCase("mack the knife")).to.equal("Mack the Knife");
    });

    it("returns a title with every word capitalized excluding 'the'", function() {
        expect(titleCase("mack THE knife")).to.equal("Mack the Knife");
    });

    it("returns a title with every word capitalized including 'the' when 'the' is at the beginning of the sentence", function() {
        expect(titleCase("the little mermaid")).to.equal("The Little Mermaid");
    });

    it("returns a title with every word capitalized excluding 'and'", function() {
        expect(titleCase("hansel AND gretel")).to.equal("Hansel and Gretel");
    });

    it("returns a title with every word capitalized excluding 'and'", function() {
        expect(titleCase("Goldilocks AND THE three bears")).to.equal("Goldilocks and the Three Bears");
    });


});
