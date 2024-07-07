// načtení modulu
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// zachytcení neošetřených výjimek
process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

// načítání konfiguračního souboru
dotenv.config({ path: './config.env' });

// import aplikace
const app = require('./app');

// nastavení databáze
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);

// připojení k databázi
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connection successful!'))
  .catch((err) => {
    console.log('DB connection error:', err.message);
  });

// nastavení portu a spuštění serveru
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

// zachycení neošetřených odmítnutí Promise
process.on('unhandledRejection', (err) => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
