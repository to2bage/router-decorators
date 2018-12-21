const Router = require("koa-router");
const mongoose = require("mongoose");
const {
    getAllMovies,
    getMovieDetail,
    getRelativeMovies
} = require("../service/movie");
const {
    controller,
    get,
    post,
    put
} = require("../lib/decorator");

@controller('/api/v0/movies')
export class movieController {
    @get('/')
    async getMovies (ctx, next) {
        // const Movie = mongoose.model('Movie');
        // const movies = await Movie.find({}).sort({
        //     'meta.createAt': -1
        // });
        const { type, year } = ctx.query;
        const movies = await getAllMovies(type, year);

        ctx.body = {
            movies
        }
    }

    @get('/:id')
    async getMovieDetail (ctx, next) {
        // const Movie = mongoose.model('Movie');
        // const id = ctx.params.id;
        // const movie = await Movie.findOne({_id: id});

        const id = ctx.params.id;
        const movie = await getMovieDetail(id);
        const relativeMovies = await getRelativeMovies(movie);

        ctx.body = {
            data: {
                movie,
                relativeMovies
            },
            success: true
        }
    }
}
