const express = require("express");
const app = express();
const port = 3000 || process.env.PORT;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Api online" });
});

app.listen(3000, () => {
  console.log(`Server en puerto ${port}`);
});
