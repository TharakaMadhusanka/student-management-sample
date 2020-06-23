var express = require('express');
var router = express.Router();
var schoolController = require('../controller/school.controller');
const { HttpError } = require('http-errors');

/* GET All Schools listing. */
router.get('/', 
    
    async (_req,response, next) => 
    {

        try 
        {
            response.send( await schoolController.GetListOfSchools(_req));
        }
        catch (error) 
        {
            console.log(error);
            response.statusCode = 500;
            response.statusMessage = "Internal server error.";
            next();
        }
    });

module.exports = router;