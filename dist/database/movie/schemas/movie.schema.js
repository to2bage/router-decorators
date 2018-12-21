"use strict";

var mongoose = require('mongoose');
var MovieSchema = new mongoose.Schema({
    doubanId: String,
    title: String,
    original_title: String,
    year: String,
    poster: String,
    genres: [String],
    rate: Number,

    tailer: String,
    cover: String,

    posterKey: String,
    tailerKey: String,
    coverKey: String,

    categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    }],

    meta: {
        createAt: {
            type: Date,
            default: Date.now()
        },
        updateAt: {
            type: Date,
            default: Date.now()
        }
    }
});

MovieSchema.pre("save", function () {
    if (this.isNew) {
        this.meta.createAt = this.meta.updateAt = Data.now();
    } else {
        this.meta.updateAt = Data.now();
    }
});

module.exports.Movie = mongoose.model("Movie", MovieSchema);