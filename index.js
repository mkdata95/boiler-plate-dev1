const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { User } = require("./models/User"); // 사용자 정보를 가져온다.
const config = require("./config/key");

app.use(bodyParser.urlencoded({ extended: true })); // 서버에서 가져온 정보를 변경해줌.
app.use(bodyParser.json()); // 제이슨 타입으로 변경해줌

const mongoose = require("mongoose");
mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("몽구스 서버에 연결 되었습니다."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("환영합니다. Hello World!");
});

app.post("/register", (req, res) => {
  // 회원가입시 필요한 정보를 client에서 가져 오면
  // 그것들을 데이터 베이스에 넣어 준다.

  const user = new User(req.body); //사용자 정보  가져 오기
  console.log(user);
  user.save((err, user) => {
    if (err) return res.json({ success: false, error });
    return res.send(200).json({
      success: true,
    });
  });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server Listening on ${port}`);
});
