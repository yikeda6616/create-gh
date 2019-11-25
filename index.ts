import * as dotenv from 'dotenv';

import gh from './github';

const env = { ...(dotenv.config().parsed as any) };

const repositoryName = process.argv[2];

(async () => {
  await gh.initialize();

  await gh.login(env.USERNAME, env.PASSWORD);

  await gh.createRepoProcess(repositoryName);

  await gh.close();
})();
