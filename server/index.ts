import { createServer } from 'http';
import next from 'next';
import { __PROD__ } from '@lib/constants';

(async () => {
  const PORT = 3000;
  const app = next({
    dev: !__PROD__,
  });

  await app.prepare().then(() => {
    const handle = app.getRequestHandler();
    const server = createServer(async (req, res) => {
      handle(req, res);
    });

    // Error handler
    server.on('error', (err) => {
      console.error(err);
      process.exit(1);
    });

    // Listening
    server
      .on('listening', async () => {
        const addr = server.address();
        const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${PORT}`;
        console.log(`Listening on ${bind}`);
      })
      .listen(PORT);
  });
  try {
    console.log('Snapapy Init');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
