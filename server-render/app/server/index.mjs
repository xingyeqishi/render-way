import path from 'path';
import express from 'express';
import router from './router';
import serve from 'express-static';

const app = express();

app.use('/static', serve(path.join('./build')));
app.get('*', router);
app.listen(9001);
console.log(`app is running in 9001 port`);
