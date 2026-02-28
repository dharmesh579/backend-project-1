require("dotenv").config();
const main = require("./db/index.js");
const app = require("./app.js");
const port = process.env.PORT || 6000;

main();

app.listen(port, () => {
  console.log(`Server started on Port ${port}`);
});
