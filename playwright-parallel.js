import { test, expect } from '@playwright/test';

// LambdaTest Capabilities
const capabilities = {
  browserName: 'Chrome', // Can be Chrome, MicrosoftEdge, pw-chromium, pw-firefox, pw-webkit
  browserVersion: 'latest',
  'LT:Options': {
    platform: 'Windows 10',
    build: 'Playwright Parallel Tests',
    name: 'Playwright LambdaTest Parallel Execution',
    user: process.env.LT_USERNAME,
    accessKey: process.env.LT_ACCESS_KEY,
    network: true,
    video: true,
    console: true,
  }
};

test.describe.parallel('LambdaTest Playwright Parallel Execution', () => {
  
  test('Simple Form Demo Test', async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground');
    await page.locator('//*[@id="__next"]/div/section[2]/div/ul/li[34]/a').click();
    await expect(page).toHaveURL(/.*simple-form-demo/);
    
    const message = 'Welcome to LambdaTest';
    await page.fill('#user-message', message);
    await page.click('#showInput');
    await expect(page.locator('#message')).toHaveText(message);
  });

  test('Drag & Drop Sliders Test', async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground');
    await page.locator('text=Drag & Drop Sliders').click();
    const slider = page.locator("input[value='15']");
    await slider.fill('95');
    await expect(page.locator("#rangeSuccess")).toHaveText('95');
  });

  test('Input Form Submit Test', async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground');
    await page.locator('text=Input Form Submit').click();
    await page.click('button:has-text("Submit")');
    await expect(page.locator('.alert-danger')).toHaveText(/Please fill in the fields/);

    await page.fill("input[name='name']", "John Doe");
    await page.fill("input[name='email']", "john.doe@example.com");
    await page.fill("input[name='password']", "john.doe@example.com");
    await page.fill("input[name='company']", "example");
    await page.fill("input[name='website']", "example");
    await page.fill("input[name='phone']", "1234567890");
    await page.fill("input[name='address_line2']", "123 Test Street");
    await page.fill("input[name='address_line1']", "123 Test Street");
    await page.fill("input[name='city']", "Test City");
    await page.fill("input[name='zip']", "1234");
    
    await page.click('button:has-text("Submit")');
    await expect(page.locator('.success-msg')).toHaveText(/Thanks for contacting us, we will get back to you shortly./);
  });

});
