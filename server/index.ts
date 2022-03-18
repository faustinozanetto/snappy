import next from 'next';
import { __PROD__ } from '@utils/constants';
import { createServer } from 'http';

async () => {
  const PORT = parseInt(process.env.PORT) || 3000;
  const app = next({
    dev: __PROD__,
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
        const bind =
          typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
        console.log('Listening on ' + bind);
      })
      .listen(PORT);
  });
};
