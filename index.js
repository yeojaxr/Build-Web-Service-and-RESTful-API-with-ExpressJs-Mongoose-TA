const dotenv = require("dotenv");
dotenv.config(); //load variable yang ada di .env

const express = require("express");
const db = require("./helpers/db");

const participantsRoute = require("./routes/participants.route");
const instructorsRoute = require("./routes/instructors.route");
const courseRoute = require("./routes/course.route");

const port = process.env.PORT || 3000;
const uri = process.env.MONGO_URI;

async function main() {
  try {
    await db.openDBConnection(uri);
    const app = express();

    app.use(express.json());
    app.use(participantsRoute);
    app.use(instructorsRoute);
    app.use(courseRoute);

    app.listen(port, () => {
      console.log("Server is running on port", port);
    });
  } catch (error) {
    console.log("main", error);
  }
}

main();
