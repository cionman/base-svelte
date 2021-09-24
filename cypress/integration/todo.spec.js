const baseUrl = 'http://localhost:5000/#/69';

describe('Todo app', () => {
  it('should add todo', () => {
    cy.visit(baseUrl);
    cy.contains('1 of 2 remaining');
    // 문자가 입력되기 전까지 Add 버튼 비활성화
    cy.contains('Add')
      .as('addBtn') // 나중에 사용할 수 있도록 참조를 저장
      .should('be.disabled');

    // Enter todo text.
    const todoText = 'buy milk';
    cy.get('[data-testid=todo-input]') //할일 입력
      .as('todoInput')
      .type(todoText);

    cy.get('@addBtn').should('not.be.disabled');  //disable이 아님
    cy.get('@addBtn').click();

    cy.get('@todoInput').should('have.value', ''); // 입력후 입력란이 비어 있음
    cy.get('@addBtn').should('be.disabled');
    cy.contains(todoText);
    cy.contains('2 of 3 remaining');
  });

  it('should toggle done', () => {
    cy.visit(baseUrl);
    cy.contains('1 of 2 remaining');

    // Find first checkbox and toggle it.
    cy.get('input[type=checkbox]')
      .first()
      .as('cb1')
      .click();
    cy.contains('2 of 2 remaining');

    // Toggle same checkbox again.
    cy.get('@cb1').check();
    cy.contains('1 of 2 remaining');
  });

  it('should delete todo', () => {
    cy.visit(baseUrl);
    cy.contains('1 of 2 remaining');

    const todoText = 'learn Svelte'; // first todo
    cy.contains('ul', todoText);

    // Click first "Delete" button.
    cy.contains('Delete').click();
    cy.contains('ul', todoText).should('not.exist');
    cy.contains('1 of 1 remaining');
  });

  it('should archive completed', () => {
    cy.visit(baseUrl);

    const todoText = 'learn Svelte'; // first todo
    cy.contains('ul', todoText);

    // Click "Archive Completed" button.
    cy.contains('Archive Completed').click();
    cy.contains('ul', todoText).should('not.exist');
    cy.contains('1 of 1 remaining');
  });
});
