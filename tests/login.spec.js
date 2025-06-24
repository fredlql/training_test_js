import { test, expect } from '@playwright/test';

test.describe('Login tests', () => {

  test('Login fails with invalid credentials', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');

    await page.fill('#username', 'wronguser');
    await page.fill('#password', 'wrongpass');
    await page.click('button[type="submit"]');

    const errorMsg = await page.locator('#flash');
    await expect(errorMsg).toContainText('Your username is invalid!');
  });

  test('Login succeeds with valid credentials', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');

    await page.fill('#username', 'tomsmith');
    await page.fill('#password', 'SuperSecretPassword!');
    await page.click('button[type="submit"]');

    // Vérifie l’URL
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/secure');

    // Vérifie le message de succès
    const successMsg = page.locator('#flash');
    await expect(successMsg).toContainText('You logged into a secure area!');
    
    // Vérifie la présence du bouton logout
    await expect(page.locator('a.button.secondary.radius')).toHaveText('Logout');
  });

});

