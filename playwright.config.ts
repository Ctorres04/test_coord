import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  reporter:[
    ['html',{outputFolder: 'test-results'}],
    ['junit',{outputFile: 'test-results/resultados.xml'}],


  ],

  use: {
    browserName: 'chromium',
    headless:false,
    viewport:{width:1280, height:720},
    ignoreHTTPSErrors: true,

  },
});
