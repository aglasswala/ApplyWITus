const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
require('dotenv').config();

const router = require("./routes")

function startServer(server) {
	server.listen(3001, () => {
		console.log(`We're live on ${3001}`);
	});
}

async function init() {
  const app = express();

  app.use(bodyParser.json());
  app.use(cors());

  router(app);
  startServer(app);
}

init();