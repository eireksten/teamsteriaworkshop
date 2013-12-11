var Mongoose = require('mongoose');

// Mongoose-skjema (MongoDB) for en enkelt bruker. Vil du utvide brukerobjektene, er det her du maa gjoere jobben.
// http://mongoosejs.com/docs/guide.html
exports.UserSchema = new Mongoose.Schema({
    name : { type : String, required : true },
    sum : { type : Number, required : true, default : 0},
    activities : [{
        description : { type: String, required: true},
        score : { type: Number, required: true, default: 0}
    }]
});


