require("dotenv").config();
const app = require("./src/App");
const { db } = require("./src/database/config");

db.authenticate()
  .then(() => console.log("database authenticated😁"))
  .catch((err) => console.log(err));

db.sync()
  .then(() => console.log("database synced👌"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}! 👍👍`);
});
