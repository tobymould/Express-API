const dotenv = require('dotenv');
const app = require('./app');

const mongoose = require('mongoose');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log('DB connection successful'));

// 4) START SERVER:
const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`App running on Port ${port}...`);
});
