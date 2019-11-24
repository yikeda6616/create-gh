import * as dotenv from 'dotenv';

import gh from './github';

const env = { ...(dotenv.config().parsed as any) };

(async () => {
  await gh.initialize();

  await gh.login(env.USERNAME, env.PASSWORD);

  // await gh.close();
})();
