const { google } = require('googleapis');
const credentials = require('../credentials.json');

const oauth2Client = new google.auth.OAuth2(
  credentials.web.client_id,
  credentials.web.client_secret,
  credentials.web.redirect_uris[0]
);

module.exports = { oauth2Client };
