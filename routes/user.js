var _ = require('underscore');

exports.addUser = function(Users){
    return function(req, res){

        var user = new Users(req.body);
        user.save(function(error, user) {
            if (error || !user) {
                res.json({ error : error });
            } else {
                res.json({ user : user });
            }

        });
    };
};

exports.updateUser = function(Users){
    return function(req, res){
        var user = req.body;
        Users.update(
            {_id: user._id},
            _.omit(user, '_id'),
            {},
            function (error, user) {
                if (error || !user) {
                    res.json({ error : error });
                } else {
                    res.json({ user : user });
                }
            }
        );
    };
};