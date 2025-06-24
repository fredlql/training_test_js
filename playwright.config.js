// playwright.config.js
/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  testDir: './tests',          // dossier où sont stockés les tests (à adapter)
  timeout: 30 * 1000,          // timeout max pour chaque test (30 secondes)
  expect: {
    timeout: 5000,             // timeout pour les assertions expect()
  },
  reporter: 'list',            // format du rapport (console)
  use: {
    headless: true,            // lance le navigateur en mode headless (sans interface graphique)
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'retain-on-failure',// enregistre la vidéo si un test échoue
    screenshot: 'only-on-failure', // capture d’écran si échec
  },
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'firefox',
      use: { browserName: 'firefox' },
    },
  ],
};

module.exports = config;

