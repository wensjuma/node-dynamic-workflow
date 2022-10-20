let router = require("express").Router();
let userService = require('../services/user.service')
    
module.exports = (app) => {
 
    /**USER ROUTES */
    router.post("create-user", userService.createNewUser);

    app.use('/api/workflow/', router);
}