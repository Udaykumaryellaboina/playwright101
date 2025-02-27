import { test, expect } from '@playwright/test';

// Parallel Execution on LambdaTest Grid
test.describe.parallel('LambdaTest Playwright 101', () => {

  // Test Scenario 1 - Simple Form Demo
  test('Simple Form Demo Test', async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground');
    
    // Click 'Simple Form Demo'
    await page.locator('//*[@id="__next"]/div/section[2]/div/ul/li[34]/a').click();
    
    // Validate URL
    await expect(page).toHaveURL(/.*simple-form-demo/);
    
    // Enter text in message box
    const message = 'Welcome to LambdaTest';
    await page.fill('#user-message', message);
    
    // Click 'Get Checked Value'
    await page.click('#showInput');

    // Validate message display
    await expect(page.locator('#message')).toHaveText(message);
  });

  // Test Scenario 2 - Drag & Drop Sliders
  test('Drag & Drop Sliders Test', async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground');
    
    // Click 'Drag & Drop Sliders'
    await page.locator('text=Drag & Drop Sliders').click();

    // Adjust slider
    const slider = page.locator("input[value='15']");
    await slider.fill('95');

    // Validate range value is 95
    await expect(page.locator("#rangeSuccess")).toHaveText('95');
  });

  // Test Scenario 3 - Input Form Submit
  test('Input Form Submit Test', async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground');
    
    // Click 'Input Form Submit'
    await page.locator('text=Input Form Submit').click();
    
    // Click 'Submit' without entering data
    await page.click('button:has-text("Submit")');

    // Validate error message
    //await expect(page.locator('.alert-danger')).toHaveText(/Please fill in the fields/);

    // Fill form
    //fill
    await page.fill("input[name='name']", "John Doe",{timeout: 5000});
    await page.fill("input[name='email']", "john.doe@example.com",{timeout: 5000});
    await page.fill("input[name='password']", "john.doe@example.com",{timeout: 5000});
    await page.fill("input[name='company']", "example",{timeout: 5000});
    await page.fill("input[name='website']", "example",{timeout: 5000});
    await page.fill("input[name='phone']", "1234567890",{timeout: 5000});
    await page.fill("input[name='address_line2']", "123 Test Street",{timeout: 5000});
    await page.fill("input[name='address_line1']", "123 Test Street",{timeout: 5000});
    await page.fill("input[name='city']", "Test City",{timeout: 5000});
    await page.selectOption("select[name='country']", { label: "United States" });
await page.fill("input[placeholder='State']", "Test City",{timeout: 5000});
    await page.fill("input[name='zip']", "1234",{timeout: 5000});

    // Submit form
    await page.click('button:has-text("Submit")',{timeout: 5000});

    // Validate success message
    await expect(page.locator('.success-msg')).toHaveText(/Thanks for contacting us, we will get back to you shortly./);
  });

});
