'use strict';

let koa = require('koa');
let send = require('koa-send');
let st = require('koa-static');
let app = koa();

app.use(function *(next) {
  if (this.path.indexOf('/api/') > -1) {
    // server
    yield next;
  } else if (this.path.indexOf('.') > -1) {
    // static file
    yield next;
  } else {
    // client root
    yield send(this, '/index.html', {root: 'client'});
  }
});
app.use(st('client', {maxage: 10 * 60 * 1000}));

app.listen(3000, '127.0.0.1');
