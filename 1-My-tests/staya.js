describe('Автотесты для формы логина и пароля на https://staya.dog/', function () {
   it('Позитивный тест. Авторизация, проверка текста', function () {
        cy.visit('https://staya.dog');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('chanova.evgenia@gmail.com');
        cy.get('.auth-form > form > [type="password"]').type('Hfb8bowk');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.contains('Мои заказы');
   })

it('Выйти из аккаунта', function () {
        cy.get('button.profile__nav-link').click();
        cy.get('.box__button_ok > .s-button__content').click();
   })

 it('Негативный тест. Авторизация, неправильный пароль', function () {
        cy.visit('https://staya.dog');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('chanova.evgenia@gmail.com');
        cy.get('.auth-form > form > [type="password"]').type('Hfb88888bowk');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.contains('Невозможно войти с предоставленными учетными данными');
   })

})