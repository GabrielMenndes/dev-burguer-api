import 'dotenv/config';
import app from './app.js';
import './database/index.js';

const port = Number(process.env.APP_PORT) || 3001;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
