describe('Home Page', () => {
  beforeEach(() => {
    cy.session('user', () => {
      cy.login('demo@cosdensolutions.io', 'cosdensolutions');
    });

    cy.visit('http://localhost:5173/');
  });

  const getTestIdEl = (testId) => `[data-testid="${testId}"]`;

  const HomePage = getTestIdEl('HomePage');

  const ListingFilters = getTestIdEl('ListingFilters');
  const ListingFiltersButton = getTestIdEl('ListingFilters_Button');
  const Search = `${ListingFilters} input[name="search"]`;
  const StepperIncrement = getTestIdEl('Stepper_Button--increment');
  const StepperDecrement = getTestIdEl('Stepper_Button--decrement');

  const ListingList = getTestIdEl('ListingList');
  const ListingCard = getTestIdEl('ListingCard');

  it('renders the home page with expected elements', () => {
    cy.get(HomePage).should('exist');
    cy.get(ListingFilters).should('exist');
    cy.get(ListingList).should('exist');
  });

  it('displays the correct number of initial listings', () => {
    const expectedListingCount = 12;

    cy.get(`${ListingList} > ${ListingCard}`).should(
      'have.length',
      expectedListingCount,
    );
  });

  it('filters for Paris and 16 guests listings correctly', () => {
    const expectedListingCount = 1;

    cy.get(Search).type('Paris');

    for (let i = 0; i < 14; i++) {
      cy.get(StepperIncrement).click();
    }

    cy.get(ListingFiltersButton).click();

    cy.get(`${ListingList} > ${ListingCard}`).should(
      'have.length',
      expectedListingCount,
    );
  });

  it('handles no results scenario', () => {
    cy.get(Search).type('None existing listing');

    cy.get(ListingFiltersButton).click();

    cy.get(`${ListingList} > ${ListingCard}`).should('have.length', 0);
    cy.contains('No listings found.').should('be.visible');
  });
});
