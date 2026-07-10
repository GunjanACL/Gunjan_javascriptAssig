const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({

  testDir: './tests',

  fullyParallel: true,

  workers: 4,

  reporter: [['html'], ['list']],

  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry'
  }

});