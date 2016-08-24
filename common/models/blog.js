'use strict';

module.exports = function(Blog) {


	
	Blog.sharedClass.find('upsert', true).shared = false;
	Blog.sharedClass.find('update', true).shared = false;
	Blog.sharedClass.find('replaceOrCreate', true).shared = false;
	Blog.sharedClass.find('deleteById', true).shared = false;
	Blog.sharedClass.find('createChangeStream', true).shared = false;

};
