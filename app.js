const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3000 || process.env.PORT;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({ message: "Api online" });
});

app.listen(3000, () => {
  console.log(`Server en puerto ${port}`);
});
