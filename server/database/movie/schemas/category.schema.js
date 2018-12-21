const mongoose = require("mongoose");
const CategorySchema = new mongoose.Schema({
    name: String,
    movies: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Movie"
        }
    ],
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
})

CategorySchema.pre("save", function () {
    if (this.isNew) {
        this.meta.createAt = this.meta.updateAt = Data.now();
    } else {
        this.meta.updateAt = Data.now();
    }
})

exports.Category = mongoose.model("Category", CategorySchema);
