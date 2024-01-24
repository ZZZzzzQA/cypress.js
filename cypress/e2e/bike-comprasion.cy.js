describe('Сравнение товаров (велосипедов) на сайте trial-sport.ru', function () {
 
    /* Доступность сайта trial-sport.ru */
        it('Доступность сайта', function () {
            cy.visit('https://trial-sport.ru');
             })

    /* Сравнение двух товаров */
        it('Сравнение двух товаров', function () {
            cy.visit('https://trial-sport.ru');
            cy.wait(250);
            cy.get('.all-lnk').click();
            cy.wait(500);
            cy.get(':nth-child(129) > .img > span > .img__in').click();
            cy.wait(250);
            cy.get('.b20 > tbody > tr > :nth-child(3) > .input > input').type('99000');
            cy.wait(100);
            cy.get('[rel="target"] > h4').click();
            cy.wait(100);
            cy.get('[rel="target"] > :nth-child(3) > label').click();
            cy.wait(100);
            cy.get('[rel="target"] > h4').click();
            cy.wait(100);
            cy.get('[rel="target1"] > h4').click();
            cy.wait(100);
            cy.get('[rel="target1"] > :nth-child(2) > label').click();
            cy.wait(100);
            cy.get('.b10 > div > input').click();
            cy.wait(100);
            cy.get('#ui-sort_select > .ui-selectgroup-copy').click();
            cy.wait(100);
            cy.get('.ui-selectgroup-list > :nth-child(3) > a').click();
            cy.wait(300);
            cy.get('#obj2035007 > .txt > .checks > :nth-child(1) > label').click();
            cy.wait(100);
            cy.get('#obj2035001 > .txt > .checks > :nth-child(1) > label').click();
            cy.wait(100);
            cy.get('.compare_lnk > span').click();
            cy.wait(250);
            cy.contains('Сравнение товаров');
            cy.wait(2000);
            cy.get('[href="/"] > span').click();
            })
    })
