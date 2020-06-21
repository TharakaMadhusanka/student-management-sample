'use strict'
var config = require('../utility/config');
var contextService = require('../service/connectdb.service');


exports.GetListOfSchools = async (_req, _res) => {
    return await contextService.ExecuteQuery('SELECT * FROM schooldetails');
}