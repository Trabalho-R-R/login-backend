import express from 'express';
import {json, urlencoded} from 'body-parser';

const app = express()
const port = 3000


app.use(json());
app.use(urlencoded({ extended: false }));

require('./controllers/authController').default(app);

app.listen(port, () => console.log(`APP listening on port ${port}!`));