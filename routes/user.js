var _ = require('underscore');

// Routerfunksjon som legger til en bruker i databasen og returnerer denne.
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

// Routerfunksjon som oppdaterer en gitt bruker.
// Denne sender et kall til databasen, og returnerer den oppdaterte brukeren som json til serveren
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