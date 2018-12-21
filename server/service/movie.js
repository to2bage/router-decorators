const mongoose = require("mongoose");
const { Movie } = require("../database/movie/schemas/movie.schema.js");

export const getAllMovies = async (type, year) => {
    let query = {};

    if (type) {
        query.genres = {
            $in: [type]
        }
    }

    if (year) {
        query.year = year;
    }

    const movies = await Movie.find(query);
    return movies;
};

export const getMovieDetail = async (id) => {
    const movie = await Movie.findOne({_id: id});
    return movie;
};

export const getRelativeMovies = async (movie) => {
    const movies = await Movie.find({genres: {$in: movie.genres}});
    return movies;
};