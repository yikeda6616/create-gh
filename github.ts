import * as puppeteer from 'puppeteer';

const BASE_URL = 'https://github.com/';
const LOGIN_URL = 'https://github.com/login';
const NEW_URL = 'https://github.com/new';

const github = {
  browser: null as any,
  page: null as any,

  initialize: async () => {
    github.browser = await puppeteer.launch({
      headless: true,
      slowMo: 50 // Make execution slow
    });

    github.page = await github.browser.newPage();
  },

  login: async (username: string, password: string) => {
    console.log('--- Starting Login Process ---');
    await github.page.goto(LOGIN_URL, { waitUntil: 'networkidle2' });
    await github.page.waitFor(1000); // To make sure the form is loaded.

    // Type input fields
    await github.page.type('input[name="login"]', username, { delay: 50 });
    await github.page.type('input[name="password"]', password, { delay: 50 });

    // Click on the login button
    const loginButton = await github.page.$('input[type="submit"]');
    await loginButton.click();
    await github.page.waitForNavigation({ waitUntil: 'networkidle2' });
    console.log('--- Finishing Login Process ---');
  },

  createRepoProcess: async (repositoryName: string) => {
    console.log('--- Starting Create Repository Process ---');
    console.log(`Repository Name: ${repositoryName}`);

    await github.page.goto(NEW_URL, { waitUntil: 'networkidle2' });
    await github.page.waitFor(1000); // To make sure the form is loaded.

    // Type input field
    await github.page.type('input[name="repository[name]"]', repositoryName, {
      delay: 50
    });

    // Select Private Repository
    const visibilityRadioBox = await github.page.$('input[value="private"]');
    await visibilityRadioBox.click();
    await github.page.waitFor(1000); // To make sure the form is loaded.

    // Click on the create repository button
    const createButton = await github.page.$(
      'button.btn.btn-primary.first-in-line'
    );
    await createButton.click();
    await github.page.waitForNavigation({ waitUntil: 'networkidle2' });
    console.log('--- Finishing Create Repository Process ---');
  },

  close: async () => {
    console.log('--- Closing Puppeteer ---');
    github.browser.close();
  }
};

export default github;
