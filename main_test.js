const expect = chai.expect;

describe('freshDeck', function() {
    describe('#freshDeck', function() {
        it('should create a new card deck', function() {
            const freshDeck = new Deck();
            expect(freshDeck.cards.length).to.equal(52);
        });
    });
});