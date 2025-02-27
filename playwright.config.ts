import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: 'https://www.lambdatest.com/selenium-playground',
    trace: 'on',  // Enables tracing for debugging
    video: 'on',  // Records test execution
    screenshot: 'on',  // Takes screenshots on failure
    headless: true,  // Run in headless mode
    
  },
  projects: [
    {
      name: 'Chromium on Windows',
      use: {
        browserName: 'chromium',
        viewport: { width: 1280, height: 720 },
      },
    },
    {
      name: 'Firefox on macOS',
      use: {
        browserName: 'firefox',
        viewport: { width: 1280, height: 720 },
      },
    }
  ],
  workers: 2, // Run tests in parallel
});
