// index.js
const express = require('express')
const Gun = require('gun')
const app = express()
const port = process.env.OPENSHIFT_NODEJS_PORT || process.env.VCAP_APP_PORT || process.env.PORT || process.argv[2] || 8765;
app.use(Gun.serve);
app.use(express.static(__dirname));

const server = app.listen(port)

Gun({ web: server });
