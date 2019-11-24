import * as puppeteer from 'puppeteer';

const repositoryName = process.argv[2];
console.log(`Repository Title: ${repositoryName}`);

const BASE_URL = 'https://github.com/login';

const github = {
  browser: null as any,
  page: null as any,

  initialize: async () => {
    github.browser = await puppeteer.launch({
      headless: false, // debug purpose
      slowMo: 50 // Make execution slow
    });

    github.page = await github.browser.newPage();
  },

  login: async (username: string, password: string) => {
    await github.page.goto(BASE_URL, { waitUntil: 'networkidle2' });
    await github.page.waitFor(1000); // To make sure the form is loaded.

    // Type input fields
    await github.page.type('input[name="login"]', username, { delay: 50 });
    await github.page.type('input[name="password"]', password, { delay: 50 });

    // Click on the login button
    const loginButton = await github.page.$('button[type="submit"]');
    await loginButton.click();
    await github.page.waitForNavigation({ waitUntil: 'networkidle2' });
  }
};

export default github;
