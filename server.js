const express = require('express');
const routes = require('./routes');
// don't need to import sequelize because connection.js is already setup in models/index.js

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
