"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getRelativeMovies = exports.getMovieDetail = exports.getAllMovies = undefined;

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mongoose = require("mongoose");

var _require = require("../database/movie/schemas/movie.schema.js"),
    Movie = _require.Movie;

var getAllMovies = exports.getAllMovies = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(type, year) {
        var query, movies;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        query = {};


                        if (type) {
                            query.genres = {
                                $in: [type]
                            };
                        }

                        if (year) {
                            query.year = year;
                        }

                        _context.next = 5;
                        return Movie.find(query);

                    case 5:
                        movies = _context.sent;
                        return _context.abrupt("return", movies);

                    case 7:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function getAllMovies(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

var getMovieDetail = exports.getMovieDetail = function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(id) {
        var movie;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return Movie.findOne({ _id: id });

                    case 2:
                        movie = _context2.sent;
                        return _context2.abrupt("return", movie);

                    case 4:
                    case "end":
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    }));

    return function getMovieDetail(_x3) {
        return _ref2.apply(this, arguments);
    };
}();

var getRelativeMovies = exports.getRelativeMovies = function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(movie) {
        var movies;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.next = 2;
                        return Movie.find({ genres: { $in: movie.genres } });

                    case 2:
                        movies = _context3.sent;
                        return _context3.abrupt("return", movies);

                    case 4:
                    case "end":
                        return _context3.stop();
                }
            }
        }, _callee3, undefined);
    }));

    return function getRelativeMovies(_x4) {
        return _ref3.apply(this, arguments);
    };
}();