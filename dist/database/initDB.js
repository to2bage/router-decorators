"use strict";

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mongoose = require("mongoose");
var config = require("../config/index.js");
var glob = require("glob");

var _require = require("path"),
    resolve = _require.resolve;

var connect = function connect() {
    return new _promise2.default(function (resolve, reject) {
        var curConnCount = 0;
        var maxConnCount = config.database.maxConnCount;
        var url = "mongodb://" + config.database.ip + ":" + config.database.port + "/" + config.database.dbname;
        console.log("数据库连接URL: ", url);

        mongoose.connect(url, {
            useNewUrlParser: true
        });

        mongoose.connection.on("disconnect", function () {
            curConnCount++;
            if (curConnCount < maxConnCount) {
                mongoose.connect(url, {
                    useNewUrlParser: true
                });
            } else {
                reject("数据库断开了连接哦~~~");
            }
        });
        mongoose.connection.on("error", function (err) {
            curConnCount++;
            if (curConnCount < maxConnCount) {
                mongoose.connect(url, {
                    useNewUrlParser: true
                });
            } else {
                reject("数据库出现了错误哦~~~, 快去检查哦: ", err);
            }
        });
        mongoose.connection.once("open", function () {
            console.log("~~~连接数据库成功~~~");
            resolve();
        });
    });
};

var initSchemas = function initSchemas() {
    glob.sync(resolve(__dirname, "./movie/schemas", "**/*.js ")).forEach(require);
};

exports.connect = connect;
exports.initSchemas = initSchemas;