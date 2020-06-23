'use strict'
var config = require('../utility/config');
var contextService = require('../service/connectdb.service');


exports.GetListOfSchools = async (_req, _res) => {
    const limit = (_req.query.noOfRows) ? _req.query.noOfRows : 10;
    const offSet = (_req.query.pageNumber) ? (_req.query.pageNumber - 1) * limit : 0;
    const searchFor = (_req.query.searchFor) ? _req.query.searchFor : '';
    let listOfRecords = [];
    try 
    {
        listOfRecords = await contextService.ExecuteQuery('CALL GetListOfSchools(' 
                                + limit + ',' 
                                + offSet + ',"'
                                + searchFor + '")');
        
        return listOfRecords[0];
    }
    catch(error) {
        console.log(error);
        throw error;
        
    }
}