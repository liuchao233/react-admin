import apiMocker from 'mocker-api';
import express from 'express';
import path from 'path';

const app = express();

apiMocker(app, path.resolve('./index.js'));
app.listen(8080);

console.log('=> http://localhost:8080')