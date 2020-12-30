const { text } = require('express');
const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema;

const courseSchema = new Schema(
    {
        name: { type: String, require: true },
        description: { type: String },
        image: { type: String },
        videoId: { type: String, require: true },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        timestamps: true, // tự dộng tạo createAt và updateAt
    },
);

// Custom helper sortable
courseSchema.query.sortable = function (req) {
    if (req.query.hasOwnProperty('_sort')) {
        let isValidType = ['asc', 'desc'].includes(req.query.type);
        return this.sort({
            [req.query.column]: isValidType ? req.query.type : 'desc',
        });
    }
    return this;
};

mongoose.plugin(slug);
courseSchema.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});

module.exports = mongoose.model('Course', courseSchema);
