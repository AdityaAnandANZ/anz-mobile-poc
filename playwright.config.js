const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  timeout: 60000,

  retries: 1,

  reporter: [
    ['html'],
    ['list']
  ],

  use: {
    baseURL: 'https://parabank.parasoft.com/parabank',

    screenshot: 'only-on-failure',

    trace: 'retain-on-failure',

    video: 'retain-on-failure'
  },

  projects: [
    {
      name: 'Desktop Chrome',
      use: {
        browserName: 'chromium',
        viewport: {
          width: 1920,
          height: 1080
        }
      }
    },

    {
      name: 'Desktop Edge',
      use: {
        channel: 'msedge',
        viewport: {
          width: 1920,
          height: 1080
        }
      }
    },

    {
      name: 'Pixel 7',
      use: {
        ...devices['Pixel 7']
      }
    },

    {
      name: 'iPhone 14',
      use: {
        ...devices['iPhone 14']
      }
    },

    {
      name: 'iPad Pro 11',
      use: {
        ...devices['iPad Pro 11']
      }
    }
  ]
});