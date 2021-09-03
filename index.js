"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var _1_1 = require("./1");
var url = 'https://jsonplaceholder.typicode.com/todos/4';
axios_1["default"].get(url).then(function (resp) {
    var todo = resp.data;
    var id = todo.id;
    var title = todo.title;
    var complete = todo.completed;
    log(id, title, complete);
});
var car = new _1_1["default"]();
console.log(car.color);
var log = function (id, title, complete) {
    console.log("\n    ID: " + id + "\n    title: " + title + "\n    finished: " + complete + "\n");
};
