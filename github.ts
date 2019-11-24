import * as puppeteer from 'puppeteer';

const LOGIN_URL = 'https://github.com/login';
const NEW_URL = 'https://github.com/new';

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
    await github.page.goto(LOGIN_URL, { waitUntil: 'networkidle2' });
    await github.page.waitFor(1000); // To make sure the form is loaded.

    // Type input fields
    await github.page.type('input[name="login"]', username, { delay: 50 });
    await github.page.type('input[name="password"]', password, { delay: 50 });

    // Click on the login button
    const loginButton = await github.page.$('input[type="submit"]');
    await loginButton.click();
    await github.page.waitForNavigation({ waitUntil: 'networkidle2' });
  },

  createRepoProcess: async (repositoryName: string) => {
    await github.page.goto(NEW_URL, { waitUntil: 'networkidle2' });

    // TODO: Type input field

    // TODO: Select Private Repository

    // TODO: Click on the
  }
};

export default github;
