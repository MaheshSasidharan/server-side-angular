import { Request, Server } from 'hapi';
import { ngHapiEngine } from '@nguniversal/hapi-engine';

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/server/main');

const PORT = process.env.PORT || 4000;


const init = async () => {
  const server = Server({
    host: 'localhost',
    port: PORT
  });

  server.route({
    method: 'GET',
    path: '/{path*}',
    handler: (req: Request) => ngHapiEngine({
      bootstrap: AppServerModuleNgFactory,
      providers: [
        LAZY_MODULE_MAP
      ],
      req
    })
  });

  await server.start();
  console.log('Server running on %ss', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
