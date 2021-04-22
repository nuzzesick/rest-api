const express = require('express');
const cors = require('cors');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usersPath = '/api/user';
    // Middlewares
    this.middlewares();
    // Routes
    this.routes();
  }
  middlewares() {
    //CORS
    this.app.use(cors());
    // Public directory
    this.app.use(express.static('public'));
  }
  routes() {
    this.app.use(this.usersPath, require('../routes/user'));
  }
  listen() {
    this.app.listen(this.port, () => {
      console.log(`Example app listening at http://localhost:${this.port}`);
    });
  }
};

module.exports = Server;