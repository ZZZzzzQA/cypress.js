describe('Автотест на форму логин пароль ', function () {
    
    it('Верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru'); //ввели верный логин
        cy.get('#pass').type('iLoveqastudio1'); //ввели верный пароль
        cy.get('#loginButton').click(); //нажали войти
        cy.get('#messageHeader').should('be.visible'); //текст виден
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //совпадение текста
        })
    it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); 
        cy.get('#mail').type('german@dolnikov.ru'); //ввели верный логин
        cy.get('#loginButton').should('be.disabled'); //кнопка войти не кликабельна
        cy.get('#pass').type('iLoveqastudio1'); //ввели верный пароль
        cy.get('#loginButton').should('be.enabled'); //кнопка войти кликабельна
        cy.get('#pass').type('iLoveqastudio5'); //ввели неверный пароль
        cy.get('#loginButton').click(); //нажали войти
        cy.get('#messageHeader').should('be.visible'); //текст виден
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //совпадение текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //крестик виден
        })
    it('Работа функции восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); 
        cy.get('#mail').type('german@dolnikov.ru'); //ввели верный логин
        cy.get('#forgotEmailButton').click(); //нажали забыли пароль
        cy.get('#forgotForm > .header').should('be.visible'); //текст виден
        cy.get('#forgotForm > .header').contains('Восстановите пароль'); //совпадение текста
        cy.get('#exitRestoreButton > .exitIcon').should('be.visible'); //крестик виден
        cy.get('#mailForgot').type('german@dolnikov.ru'); //ввели верный емэйл
        cy.get('#restoreEmailButton').click(); //нажали отправить код
        cy.get('#messageHeader').should('be.visible'); //текст виден
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //совпадение текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //крестик виден
        })
    it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); 
        cy.get('#mail').type('german@dolnikovichenko.ru'); //ввели неверный логин
        cy.get('#loginButton').should('be.disabled'); //кнопка войти не кликабельна
        cy.get('#pass').type('iLoveqastudio1'); //ввели верный пароль
        cy.get('#loginButton').should('be.enabled'); //кнопка войти кликабельна
        cy.get('#loginButton').click(); //нажали войти
        cy.get('#messageHeader').should('be.visible'); //текст виден
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //совпадение текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //крестик виден
        })
    it('логин без @ и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); 
        cy.get('#mail').type('germandolnikovichenko.ru'); //ввели логин без @
        cy.get('#loginButton').should('be.disabled'); //кнопка войти не кликабельна
        cy.get('#pass').type('iLoveqastudio1'); //ввели верный пароль
        cy.get('#loginButton').should('be.enabled'); //кнопка войти кликабельна
        cy.get('#loginButton').click(); //нажали войти
        cy.get('#messageHeader').should('be.visible'); //текст виден
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //совпадение текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //крестик виден
        })
    it('проверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@Dolnikov.ru'); //ввели логин с заглавными буквами
        cy.get('#pass').type('iLoveqastudio1'); //ввели верный пароль
        cy.get('#loginButton').click(); //нажали войти
        cy.get('#messageHeader').should('be.visible'); //текст виден
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //совпадение текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //крестик виден
        })
})
