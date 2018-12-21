"use strict";

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Koa = require("koa");

var _require = require("path"),
    resolve = _require.resolve;

var _require2 = require("./database/initDB"),
    connect = _require2.connect,
    initSchemas = _require2.initSchemas;

var R = require("ramda");

var MIDDLEWARES = ["router"];

(0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var app;
    return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return connect();

                case 2:

                    initSchemas();

                    app = new Koa();
                    _context.next = 6;
                    return useMiddlewares(app);

                case 6:

                    app.listen(8964, "127.0.0.1", function () {
                        console.log("Server is running at 127.0.0.1:8964");
                    });

                case 7:
                case "end":
                    return _context.stop();
            }
        }
    }, _callee, undefined);
}))();

var useMiddlewares = function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(app) {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        R.map(R.compose(R.forEachObjIndexed(function (initWith) {
                            return initWith(app);
                        }), require, function (name) {
                            return resolve(__dirname, "./middlewares/" + name);
                        }))(MIDDLEWARES); // 遍历所有的中间件

                    case 1:
                    case "end":
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    }));

    return function useMiddlewares(_x) {
        return _ref2.apply(this, arguments);
    };
}();