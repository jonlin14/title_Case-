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

    it("returns a title with every word capitalized excluding 'and', longer sentence", function() {
        expect(titleCase("Goldilocks AND THE AND THE AND THE three bears")).to.equal("Goldilocks and the and the and the Three Bears");
    });

    it("returns a title with every word capitalized excluding 'in'", function() {
        expect(titleCase("cat in the hat")).to.equal("Cat in the Hat");
    });

    it("returns a title with every word capitalized exlucding any of the exceptions", function() {
        expect(titleCase("A long, long time ago in a galaxy far far away BUT not too far")).to.equal("A Long, Long Time Ago in a Galaxy Far Far Away but Not Too Far");
    });


});
