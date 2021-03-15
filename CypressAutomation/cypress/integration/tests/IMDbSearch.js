before(() => {
    cy
        .visit("https://www.imdb.com/");
})

describe('IMDb Search', ()=>
{
    
    it('Verify Search Results Appear', ()=>
    {
   
      cy
        .get('#suggestion-search').type('avengers')

      cy
        .get('.react-autosuggest__suggestions-list')
        .should('be.visible');

      cy
        .get('li#react-autowhatever-1--item-0 a div:nth-child(2) div:nth-child(1)')
        .invoke('text')
        .as('movieName')

      cy
        .get('li#react-autowhatever-1--item-0 a div:nth-child(2) div:nth-child(2)')
        .invoke('text')
        .as('movieYear')

      cy
        .get('#react-autowhatever-1--item-0')
        .click();

    });

    it('Verify Movie Title', () =>  
    {

        cy
        .get('div.title_wrapper h1').invoke('text')
        .should('contains',this.movieName)
        .and('contains',this.movieYear)

    });

})