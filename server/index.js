const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const routes = require('../routes');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = routes.getRequestHandler(app);

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(bodyParser.json());

    server.use('/api', require('./routes'));

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    const PORT = process.env.PORT || 3000;
    server
      .use(handle)
      .listen(PORT, e => {
        if (e) throw e;
        console.log('READY ON PORT:', PORT)
      });
  })
  .catch(e => {
    console.error(e.stack);
    process.exit(1);
  });
