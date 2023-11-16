const { write, read } = require("./helper");

// fs.writeFile("sample.txt", "Hello world", function () {
//   console.log("書き出し完了！");
// });

const request = process.argv[2];

if (request == "read") {
  read();
} else if (request == "write") {
  write();
} else {
  console.log("入力エラー： read か write を入力してください。");
}

// const { name, add } = require("./helper");

// console.log(name);
// console.log(add(2, 3));

// 全てほぼ同時に呼び出される
// function test() {
//   console.log("this is test()");
// }

// setTimeout(function () {
//   test();
// }, 1000);

// setTimeout(function () {
//   test();
// }, 1000);

// setTimeout(function () {
//   test();
// }, 1000);

// ターミナルには表示できない。デバッグメニューだと 3000 が取得できる。
// const PORT = process.env.PORT;
// console.log(`Application listening at: ${PORT}`);
