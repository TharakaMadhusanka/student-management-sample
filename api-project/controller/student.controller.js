'use strict'
var config = require('../utility/config');
var contextService = require('../service/connectdb.service');


exports.GetAllStudents = async (_req, _res) => {
    return await contextService.ExecuteQuery('SELECT * FROM studentdetails');
}