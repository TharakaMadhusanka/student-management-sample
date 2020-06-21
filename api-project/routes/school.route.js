var express = require('express');
var router = express.Router();
var schoolController = require('../controller/school.controller');

/* GET All Schools listing. */
router.get('/', 
    
    async (_req,response, next) => 
    {

        try 
        {
            console.log(_req.body);
            response.send( await schoolController.GetListOfSchools());
        }
        catch (error) 
        {
            console.log(error);
            next();
        }
    });

module.exports = router;