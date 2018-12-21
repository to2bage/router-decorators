const mongoose = require("mongoose");
const config = require("../config/index.js");
const glob = require("glob");
const { resolve } = require("path");

const connect = () => {
    return new Promise((resolve, reject) => {
        let curConnCount = 0;
        const maxConnCount = config.database.maxConnCount;
        const url = `mongodb://${config.database.ip}:${config.database.port}/${config.database.dbname}`;
        console.log("数据库连接URL: ", url);

        mongoose.connect(url, {
            useNewUrlParser: true
        });

        mongoose.connection.on("disconnect", () => {
            curConnCount++;
            if (curConnCount < maxConnCount) {
                mongoose.connect(url, {
                    useNewUrlParser: true
                });
            } else {
                reject("数据库断开了连接哦~~~")
            }
        });
        mongoose.connection.on("error", (err) => {
            curConnCount++;
            if (curConnCount < maxConnCount) {
                mongoose.connect(url, {
                    useNewUrlParser: true
                });
            } else {
                reject("数据库出现了错误哦~~~, 快去检查哦: ", err)
            }

        });
        mongoose.connection.once("open", () => {
            console.log("~~~连接数据库成功~~~");
            resolve();
        });
    })
};

const initSchemas = () => {
    glob.sync(resolve(__dirname, "./movie/schemas", "**/*.js ")).forEach(require);
};

exports.connect = connect;
exports.initSchemas = initSchemas;
