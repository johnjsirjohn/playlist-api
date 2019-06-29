const Sequelize = require('sequelize');

const databaseUrl =
  process.env.DATABASE_URL ||
  'postgres://postgres:secret@localhost:5432/postgres';
const sequelize = new Sequelize(databaseUrl);

// const connectionString =
//   process.env.DATABASE_URL ||
//   'postgres://postgres:secret@localhost:5432/postgres';
// const sequelize = new Sequelize(connectionString, {
//   define: { timestamps: false }
// });

sequelize
  .sync()
  .then(() => console.log('Database schema updated'))
  .catch(console.error);

module.exports = sequelize;
