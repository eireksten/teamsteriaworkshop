
// Definerer en routerfunksjon som tegner opp index.jade og svarer med denne.
exports.index = function(Users){
    return function(req, res){
        Users.find({}, function (error, users) {
            res.render('index', {
                title: 'Team Steria <3',
                usersBackend: users
            });
        });
    };
};