const express = require("express");
const app = express();
const port = 5000;

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://mkdata95:0l4NoeobbSQteYDk@cluster0.vxxpn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("모구스 서버에 연결 되었습니다."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("환영합니다. Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
