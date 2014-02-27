var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(req, res){
	var nongrid = {'grid':false, 'projects':projects['projects']};
  	res.render('index', nongrid);
  	//res.render('index',gridProp);
};

exports.viewGrid = function(req, res){
	var gridProp = {'grid':true, 'projects':projects['projects']};
  	res.render('index', gridProp);
  };