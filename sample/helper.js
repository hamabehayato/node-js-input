const fs = require("fs");

const person = {
  title: "タイトル",
  body: "内容を書く",
};

const write = () => {
  fs.writeFile("sample.json", JSON.stringify(person), function () {
    console.log("書き出し完了！");
  });
};

const read = () => {
  fs.readFile("./sample.json", "utf8", (err, data) => {
    const person = JSON.parse(data);
    console.log(person.title);
  });
};

module.exports = {
  write: write,
  read: read,
};

// const name = "sample";
// const add = (a, b) => {
//   return a + b;
// };

// module.exports = {
//   name: name,
//   add: add,
// };
