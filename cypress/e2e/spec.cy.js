// cypress/e2e/shopping_cart.cy.js

describe('Shopping Cart End-to-End Test', () => {

  it('should add a product to the cart and verify it on the cart page', () => {
    
    // الخطوة 1: قم بزيارة تطبيقك المحلي
    // تأكد من أن خادم التطوير (npm start) يعمل
    cy.visit('http://localhost:3000/' ); // أو أي منفذ (port) آخر تستخدمه

    // الخطوة 2: انقر على فئة منتجات، مثلاً "Men"
    // استخدم المحدد (selector) الصحيح من تطبيقك
    cy.contains('a', 'Men').click();

    // الخطوة 3: انقر على أول منتج في الصفحة
    // استبدل '.product-item' بالكلاس أو المحدد الصحيح للمنتج في صفحتك
    cy.get('.col-md-3').first().click(); 

    // الخطوة 4: في صفحة المنتج، انقر على زر "Add to Cart"
    // Cypress ذكي كفاية ليجد زرًا يحتوي على هذا النص
    cy.contains('button', /add to cart/i).click();

    // الخطوة 5: انقر على أيقونة السلة في الـ Navbar
    // استبدل '.cart-counter' بالمحدد الصحيح لأيقونة السلة
    cy.get('.cart-counter').parent().click();

    // الخطوة 6: تحقق من أننا في صفحة السلة
    cy.url().should('include', '/cart');

    // الخطوة 7 (الأهم): تحقق من أن صفحة السلة تحتوي على منتجات
    // استبدل 'tbody tr' بالمحدد الصحيح لصف منتج في جدول السلة
    cy.get('tbody tr').should('have.length.greaterThan', 0);
    
    // إذا نجح هذا الاختبار، فهذا يعني أن المشكلة الأصلية قد حُلت!
  });

});
