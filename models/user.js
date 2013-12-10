var Mongoose = require('mongoose');

exports.UserSchema = new Mongoose.Schema({
    name : { type : String, required : true },
    sum : { type : Number, required : true, default : 0},
    activities : [{
        description : { type: String, required: true},
        score : { type: Number, required: true, default: 0}
    }]
});


