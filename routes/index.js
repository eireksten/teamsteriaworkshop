
/*
 * GET home page.
 */

exports.index = function(Users){
    return function(req, res){
        Users.find({}, function (error, users) {
            res.render('index', {
                title: 'Team Steria <3',
                users: users
            })
        });
    };
};