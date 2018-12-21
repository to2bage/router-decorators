"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.movieController = undefined;

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _dec, _dec2, _dec3, _class, _desc, _value, _class2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

var Router = require("koa-router");
var mongoose = require("mongoose");

var _require = require("../service/movie"),
    getAllMovies = _require.getAllMovies,
    _getMovieDetail = _require.getMovieDetail,
    getRelativeMovies = _require.getRelativeMovies;

var _require2 = require("../lib/decorator"),
    controller = _require2.controller,
    get = _require2.get,
    post = _require2.post,
    put = _require2.put;

var movieController = exports.movieController = (_dec = controller('/api/v0/movies'), _dec2 = get('/'), _dec3 = get('/:id'), _dec(_class = (_class2 = function () {
    function movieController() {
        (0, _classCallCheck3.default)(this, movieController);
    }

    (0, _createClass3.default)(movieController, [{
        key: "getMovies",
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(ctx, next) {
                var _ctx$query, type, year, movies;

                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                // const Movie = mongoose.model('Movie');
                                // const movies = await Movie.find({}).sort({
                                //     'meta.createAt': -1
                                // });
                                _ctx$query = ctx.query, type = _ctx$query.type, year = _ctx$query.year;
                                _context.next = 3;
                                return getAllMovies(type, year);

                            case 3:
                                movies = _context.sent;


                                ctx.body = {
                                    movies: movies
                                };

                            case 5:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getMovies(_x, _x2) {
                return _ref.apply(this, arguments);
            }

            return getMovies;
        }()
    }, {
        key: "getMovieDetail",
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(ctx, next) {
                var id, movie, relativeMovies;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                // const Movie = mongoose.model('Movie');
                                // const id = ctx.params.id;
                                // const movie = await Movie.findOne({_id: id});

                                id = ctx.params.id;
                                _context2.next = 3;
                                return _getMovieDetail(id);

                            case 3:
                                movie = _context2.sent;
                                _context2.next = 6;
                                return getRelativeMovies(movie);

                            case 6:
                                relativeMovies = _context2.sent;


                                ctx.body = {
                                    data: {
                                        movie: movie,
                                        relativeMovies: relativeMovies
                                    },
                                    success: true
                                };

                            case 8:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getMovieDetail(_x3, _x4) {
                return _ref2.apply(this, arguments);
            }

            return getMovieDetail;
        }()
    }]);
    return movieController;
}(), (_applyDecoratedDescriptor(_class2.prototype, "getMovies", [_dec2], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, "getMovies"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "getMovieDetail", [_dec3], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, "getMovieDetail"), _class2.prototype)), _class2)) || _class);