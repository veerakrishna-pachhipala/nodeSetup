#!/usr/bin/nodejs
import  debug from 'debug';
// const app = require('../app');
import app from '../app';

app.set('port', process.env.PORT || 3000);

const server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + server.address().port);
});