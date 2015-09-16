/// <reference path="../../typings/tsd.d.ts" />

import express = require('express');
import {Home, Account} from "./controller";

var router = express.Router();

router.get('/', Home.index);
router.get('/login', Account.login);
router.get('/signup', Account.signup);


export = router;
