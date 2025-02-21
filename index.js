const express = require("express"); // express 모듈 셋팅
const ejs = require("ejs"); // 페이지 로딩을 위해 필수
const app = express();

// view 엔진을 ejs를 쓰겠다는 설정
app.set("view engine", "ejs");

// // 페이지 로딩 함수
app.get("/", function (req, res) {
  //console.log(res);
  res.render("test", {}); // view 폴더 밑에 있는 파일을 참조함
});

app.get("/test", function (req, res) {
  //console.log(res);
  res.render("test2", {}); // view 폴더 밑에 있는 파일을 참조함
});

app.use(express.static("public"));

app.get("/test3", function (req, res) {
  //console.log(res);
  res.render("test3", {}); // view 폴더 밑에 있는 파일을 참조함
});

// Home 페이지 라우트
app.get("/", function (req, res) {
  res.render("class2", {});
});

// About 페이지 라우트
app.get("/class", function (req, res) {
  res.render("class", {});
});

// 서버 띄울 대 포트 정보 셋팅 및 처음 실행 시 필요한 기능 수행 가능
app.listen(3000, function () {
  console.log("server running");
});
