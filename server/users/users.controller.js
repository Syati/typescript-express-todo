var Users = (function () {
    function Users() {
    }
    Users.index = function (request, response) {
        response.render('users/index', { title: 'Users' });
    };
    return Users;
})();
module.exports = Users;
