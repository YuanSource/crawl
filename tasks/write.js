var Movie = require('../model').Movie;
var async= require('async');
var debug = require('debug')('crawl:write')
exports.movie = function (movies,callback) {
    async.forEach(movies,function (item,cb) {
        Movie.create(item,cb)
        debug(`保存电影：${item.name}`)
    },callback)
}