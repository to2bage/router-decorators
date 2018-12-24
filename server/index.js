const Koa = require("koa");
const { resolve } = require("path");
const { connect, initSchemas } = require("./database/initDB");
const R = require("ramda");

const MIDDLEWARES = ["router", "parcel"];

(async () => {
    await connect();

    initSchemas();

    const app = new Koa();

    await useMiddlewares(app);

    app.listen(8964, "127.0.0.1", () => {
        console.log("Server is running at 127.0.0.1:8964");
    });
})();

const useMiddlewares = async (app) => {
    R.map(
        R.compose(
            R.forEachObjIndexed(
                initWith => initWith(app)
            ),
            require,
            name => resolve(__dirname, `./middlewares/${name}`)
        )
    )(MIDDLEWARES);   // 遍历所有的中间件
};