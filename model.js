var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/201613crawl');
mongoose.Promise = Promise;
var MovieSchema = new mongoose.Schema({
    name:String,
    url:String,
    // createAt:{type:Date,default:Date.now}
})
exports.Movie=mongoose.model('Movie',MovieSchema);