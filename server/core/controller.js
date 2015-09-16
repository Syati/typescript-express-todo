/// <reference path="../../typings/tsd.d.ts" />
var Home = (function () {
    function Home() {
    }
    Home.index = function (request, response) {
        response.render('core/index', { title: 'Todo' });
    };
    return Home;
})();
exports.Home = Home;
var Account = (function () {
    function Account() {
    }
    Account.login = function (reqest, response) {
        response.render('core/account/login', { title: 'log in' });
    };
    Account.signup = function (reqest, response) {
        response.render('core/account/signup', { title: 'Sign up' });
    };
    return Account;
})();
exports.Account = Account;
