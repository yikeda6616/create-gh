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

    // TODO: Type input

    // TODO: Click on the login button
  }
};

export default github;
