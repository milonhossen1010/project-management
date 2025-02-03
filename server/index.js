const app = require('./app');
require('dotenv').config({ path: './config.env' });

//Port get from config file
const port = process.env.PORT || 4000;

//server run with port
app.listen(port, () => {
  console.log(`Server is running http://127.0.0.1:${port}`);
});
